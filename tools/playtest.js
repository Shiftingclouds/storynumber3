#!/usr/bin/env node
// Bots play Nuit Blanche end to end. They make choices, submit looks and names, spend wishes, and try deductions.
// Reports crashes, endings, coverage, and how long a playthrough is (pages and words per night).
//   node tools/playtest.js [--runs 3000] [--seed 1] [--verbose] [--until night3] [--unshown]
"use strict";
const { loadNB } = require("./lib");

const args = process.argv.slice(2);
function opt(name, dflt) {
  const i = args.indexOf("--" + name);
  if (i < 0) return dflt;
  const v = args[i + 1];
  return v === undefined || v.startsWith("--") ? true : v;
}
const RUNS = Number(opt("runs", 3000));
const BASE_SEED = Number(opt("seed", 1));
const VERBOSE = !!opt("verbose", false);
const UNTIL = opt("until", null);
const UNTILS = UNTIL ? String(UNTIL).split(",") : [];
const FOCUS = !!opt("focus", false);
const SKILLS = ["hands", "nerve", "charm", "wits", "lore"];
const MAX_PAGES = 6000;

const NB = loadNB({ quiet: true });
const story = NB.buildStory();
const cfg = story.config;

const optionCount = new Map();
const optionText = new Map();
const textLines = new Map();
const endings = {};
const achievements = {};
const errors = [];
const pathDist = {};
const TALLY = opt("tally", null) ? String(opt("tally")).split(",") : [];
const tallies = {};
const stops = {};
const statDist = {};
let totalPages = 0, totalWords = 0, finished = 0, wishesSpent = 0, deductionsMade = 0;
const wordsByScene = {};

let currentWords = null;
let reachedVars = null;
const origGoto = NB.Runtime.prototype.gotoScene;
NB.Runtime.prototype.gotoScene = function (name, label) {
  if (UNTILS.includes(name) && !reachedVars) reachedVars = JSON.parse(JSON.stringify(this.state.vars));
  // stopping at a chapter that isn't written yet is a finish, not an error
  if (UNTILS.includes(name) && !story.scenes[name]) throw Object.assign(new Error("reached " + name), { until: true });
  return origGoto.call(this, name, label);
};
// Continuity: a tagged speaker must already have been met, or be met on the same page.
const metIssues = new Map();
function checkMet(p, before, rt) {
  if (!p || !p.blocks) return p;
  const meets = new Set(p.blocks.filter((b) => b.k === "meet").map((b) => b.id));
  for (const b of p.blocks) {
    if (b.k !== "p" || !b.who || b.who === "mc" || before[b.who] || meets.has(b.who)) continue;
    const k = `${rt.state.scene}: @${b.who} speaks before we've met: "${NB.text.toPlain(b.html).slice(0, 70)}"`;
    metIssues.set(k, (metIssues.get(k) || 0) + 1);
  }
  return p;
}
function step(rt, fn) { const before = Object.assign({}, rt.state && rt.state.met); return checkMet(fn(), before, rt); }
const origRender = NB.Runtime.prototype.render;
NB.Runtime.prototype.render = function (src, lineIndex) {
  const key = this.state.scene + ":" + lineIndex;
  textLines.set(key, (textLines.get(key) || 0) + 1);
  const out = origRender.call(this, src, lineIndex);
  if (currentWords) {
    const w = NB.text.toPlain(out).split(/\s+/).filter(Boolean).length;
    currentWords[this.state.scene] = (currentWords[this.state.scene] || 0) + w;
  }
  return out;
};

for (const [name, sc] of Object.entries(story.scenes)) {
  sc.lines.forEach((L, i) => {
    if (L.kind === "option") {
      optionCount.set(name + ":" + i, 0);
      optionText.set(name + ":" + i, `${name}:${L.n} #${L.opt.text}`);
    }
  });
}
const allTextLines = [];
for (const [name, sc] of Object.entries(story.scenes)) sc.lines.forEach((L, i) => { if (L.kind === "text") allTextLines.push(name + ":" + i); });

function mulberry(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NAMES = ["Theo", "Luc", "Remy", "Oli", "Sasha", "Noah"];

// Static gains of each option: the *set lines inside its body.
const gainCache = new Map();
function optionGains(scene, idx) {
  const key = scene + ":" + idx;
  if (gainCache.has(key)) return gainCache.get(key);
  const lines = story.scenes[scene].lines;
  const L = lines[idx];
  const g = {};
  for (let k = idx + 1; k < (L.blockEnd || lines.length); k++) {
    const M = lines[k];
    if (M.kind !== "cmd" || M.cmd !== "set") continue;
    const m = /^(\w+)\s+(%?[+-])\s*(\d+)/.exec((M.args || "").trim());
    if (m) g[m[1]] = (g[m[1]] || 0) + (m[2].includes("-") ? -1 : 1) * Number(m[3]);
  }
  gainCache.set(key, g);
  return g;
}

// Check tracking: for options gated on a skill, how often were they enabled when shown?
const checkStats = new Map(); // optionKey -> {skill, expr, shown:{skill:n}, enabled:{skill:n}}
function trackChecks(page, sceneName, focus) {
  const sc = story.scenes[sceneName];
  for (const c of page.choices) {
    const L = sc.lines[c.line];
    if (!L || !L.opt) continue;
    for (const mod of L.opt.mods) {
      if (mod.type !== "selectable_if") continue;
      for (const sk of SKILLS) {
        if (!new RegExp("\\b" + sk + "\\s*>=").test(mod.expr)) continue;
        const k = c.reuseKey;
        const e = checkStats.get(k) || { where: sceneName + ":" + L.n, expr: mod.expr, shown: {}, enabled: {} };
        const f = focus || "any";
        e.shown[f] = (e.shown[f] || 0) + 1;
        if (c.enabled) e.enabled[f] = (e.enabled[f] || 0) + 1;
        checkStats.set(k, e);
      }
    }
  }
}

function pickOption(page, rng, strategy, bias, focus, sceneName) {
  const enabled = page.choices.map((c, i) => ({ c, i })).filter((x) => x.c.enabled);
  if (strategy === "focus") {
    let best = null, bestScore = -Infinity;
    for (const x of enabled) {
      const g = optionGains(sceneName, page.choices[x.i].line);
      const score = (g[focus] || 0) * 10 + rng() * 3 - (x.c.html.indexOf("Turn around") >= 0 ? 100 : 0);
      if (score > bestScore) { bestScore = score; best = x; }
    }
    return best.i;
  }
  if (strategy === "coverage") {
    let best = null, bestScore = Infinity;
    for (const x of enabled) {
      const n = optionCount.get(page.choices[x.i].reuseKey) || 0;
      const score = n + rng() * 2;
      if (score < bestScore) { bestScore = score; best = x; }
    }
    return best.i;
  }
  if (strategy === "persona") {
    const weights = enabled.map((x, j) => Math.pow(bias, j));
    const sum = weights.reduce((a, b) => a + b, 0);
    let r = rng() * sum;
    for (let j = 0; j < enabled.length; j++) { r -= weights[j]; if (r <= 0) return enabled[j].i; }
    return enabled[enabled.length - 1].i;
  }
  return enabled[Math.floor(rng() * enabled.length)].i;
}

function tryDeductions(rt, rng) {
  const cl = rt.state.clues;
  if (cl.length < 2) return;
  for (let k = 0; k < 3; k++) {
    const a = cl[Math.floor(rng() * cl.length)], b = cl[Math.floor(rng() * cl.length)];
    const r = rt.deduce(a, b);
    if (r.id && r.fresh) deductionsMade++;
  }
}

for (let run = 0; run < RUNS; run++) {
  const seed = BASE_SEED * 100003 + run;
  const rng = mulberry(seed);
  const focus = FOCUS ? SKILLS[run % SKILLS.length] : null;
  const strategy = FOCUS ? "focus" : run % 3 === 0 ? "coverage" : run % 3 === 1 ? "random" : "persona";
  const bias = 0.35 + rng() * 1.3;
  const ng = !FOCUS && run % 5 === 4 ? { ngplus: true, runs: 1, wishes: 1, mem_enzo: rng() < 0.7, mem_keyman: rng() < 0.6, mem_killer: rng() < 0.5, mem_accord: rng() < 0.5, mem_bells: rng() < 0.5, mem_wolves: rng() < 0.5 } : null;
  const rt = new NB.Runtime(story, { variants: true });
  const trail = [];
  const words = {};
  currentWords = words;
  reachedVars = null;
  let page;
  try {
    page = step(rt, () => rt.newGame({ seed, ng }));
    if (rng() < 0.2) rt.state.vars.steam = false; // some players fade to black
    let pages = 1;
    while (page.kind !== "ending") {
      if (UNTIL && (reachedVars || UNTILS.includes(rt.state.scene))) break;
      if (++pages > MAX_PAGES) throw new Error("Too many pages (loop?)");
      if (rng() < 0.15) tryDeductions(rt, rng);
      if (page.kind === "choice") {
        trackChecks(page, rt.state.scene, focus);
        if (!FOCUS && rt.canUndo() && rng() < 0.08) {
          page = rt.undo();
          wishesSpent++;
          continue;
        }
        const i = pickOption(page, rng, strategy, bias, focus, rt.state.scene);
        const key = page.choices[i].reuseKey;
        optionCount.set(key, (optionCount.get(key) || 0) + 1);
        trail.push(key);
        page = step(rt, () => rt.choose(i));
      } else if (page.kind === "page_break") {
        page = step(rt, () => rt.next());
      } else if (page.kind === "input") {
        page = step(rt, () => rt.submit(NAMES[Math.floor(rng() * NAMES.length)]));
      } else if (page.kind === "look") {
        const look = {};
        for (const k of cfg.lookKeys) look[k] = Math.floor(rng() * 6);
        page = step(rt, () => rt.submitLook(look));
      }
    }
    totalPages += pages;
    if (UNTIL && reachedVars) {
      const v = reachedVars;
      const key = focus || "mixed";
      const d = statDist[key] || (statDist[key] = {});
      for (const sk of SKILLS.concat(["rel_lazare", "rel_dario", "rel_rose", "rel_nadim", "des_lazare", "des_dario", "des_rose", "des_nadim", "wishes"])) (d[sk] = d[sk] || []).push(v[sk]);
    }
    for (const [k, v] of Object.entries(words)) { wordsByScene[k] = (wordsByScene[k] || 0) + v; totalWords += v; }
    finished++;
    if (page.kind === "ending") endings[page.ending] = (endings[page.ending] || 0) + 1;
    else stops[rt.state.scene] = (stops[rt.state.scene] || 0) + 1;
    const v = rt.state.vars;
    pathDist[v.path || "(none)"] = (pathDist[v.path || "(none)"] || 0) + 1;
    for (const t of TALLY) { const key = String(v[t]); (tallies[t] = tallies[t] || {})[key] = (tallies[t][key] || 0) + 1; }
    for (const a of Object.keys(rt.state.achievements)) achievements[a] = (achievements[a] || 0) + 1;
  } catch (e) {
    if (e.until) {
      for (const [k, v] of Object.entries(words)) { wordsByScene[k] = (wordsByScene[k] || 0) + v; totalWords += v; }
      finished++;
      continue;
    }
    errors.push({ run, seed, msg: e.message || String(e), trail: trail.slice(-6) });
    if (VERBOSE) console.log(`run ${run} (seed ${seed}): ${e.message}`);
  }
}
currentWords = null;

const errGroups = {};
for (const e of errors) errGroups[e.msg] = (errGroups[e.msg] || []).concat([e]);
console.log(`\n=== ${RUNS} playthroughs, ${finished} finished${UNTIL ? " (stopping at " + UNTIL + ")" : ""}, ${errors.length} errored ===`);
for (const [msg, list] of Object.entries(errGroups)) {
  console.log(`\nERROR x${list.length}: ${msg}`);
  console.log("  e.g. seed " + list[0].seed + ", last choices: " + list[0].trail.map((k) => optionText.get(k) || k).join("  ->  "));
}
if (!UNTIL) {
  console.log("\nEndings:");
  for (const k of Object.keys(cfg.endings)) console.log(`  ${(endings[k] || 0).toString().padStart(6)}  ${k}  (${cfg.endings[k].title})`);
  const missing = Object.keys(cfg.endings).filter((k) => !endings[k]);
  if (missing.length) console.log("  NEVER REACHED: " + missing.join(", "));
  console.log("\nPath:", JSON.stringify(pathDist));
  for (const t of TALLY) console.log("Tally " + t + ":", JSON.stringify(tallies[t] || {}));
  console.log("\nAchievements:");
  for (const k of Object.keys(cfg.achievements)) console.log(`  ${(achievements[k] || 0).toString().padStart(6)}  ${k}`);
}
if (metIssues.size) {
  console.log(`\nSPEAKS BEFORE MET (${metIssues.size}):`);
  for (const [k, n] of metIssues) console.log(`  x${n}  ${k}`);
} else console.log("\nEvery tagged speaker had been met.");
const optKeys = [...optionCount.keys()];
const never = optKeys.filter((k) => !optionCount.get(k));
console.log(`\nOptions chosen at least once: ${optKeys.length - never.length} / ${optKeys.length}`);
if (never.length) { console.log("Never chosen (first 60):"); never.slice(0, 60).forEach((k) => console.log("  " + optionText.get(k))); }
const untilIdx = (u) => (cfg.sceneList.indexOf(u) < 0 ? cfg.sceneList.length : cfg.sceneList.indexOf(u));
const relevant = UNTIL ? allTextLines.filter((k) => cfg.sceneList.indexOf(k.split(":")[0]) < Math.min(...UNTILS.map(untilIdx))) : allTextLines;
const shown = relevant.filter((k) => textLines.get(k));
console.log(`\nText lines shown at least once: ${shown.length} / ${relevant.length} (${Math.round((100 * shown.length) / Math.max(1, relevant.length))}%)`);
if (opt("unshown", false)) {
  relevant.filter((k) => !textLines.get(k)).slice(0, 200).forEach((k) => {
    const [s, i] = k.split(":");
    const L = story.scenes[s].lines[Number(i)];
    console.log(`  ${s}:${L.n} ${L.raw.slice(0, 90)}`);
  });
}
if (FOCUS) {
  console.log("\nSkill checks, as seen by focused bots (pass rate for the bot focused on that skill):");
  const rows = [];
  for (const e of checkStats.values()) {
    for (const sk of SKILLS) {
      if (!new RegExp("\\b" + sk + "\\s*>=").test(e.expr)) continue;
      const shown = e.shown[sk] || 0, en = e.enabled[sk] || 0;
      rows.push({ where: e.where, expr: e.expr, sk, shown, rate: shown ? en / shown : null });
    }
  }
  rows.sort((a, b) => (a.rate === null ? -1 : a.rate) - (b.rate === null ? -1 : b.rate));
  for (const r of rows) {
    const flag = r.rate === null ? "  NEVER SEEN by a " + r.sk + " bot" : r.rate < 0.5 ? "  <-- LOW" : "";
    console.log(`  ${r.rate === null ? "  -" : String(Math.round(r.rate * 100)).padStart(3) + "%"}  ${r.sk.padEnd(5)} ${r.where.padEnd(14)} ${r.expr}${flag}`);
  }
}
if (UNTIL && Object.keys(statDist).length) {
  console.log("\nStats on arriving at " + UNTIL + " (median / max):");
  for (const [who, d] of Object.entries(statDist)) {
    const parts = Object.entries(d).map(([k, arr]) => { const s2 = arr.slice().sort((x, y) => x - y); return k + " " + s2[Math.floor(s2.length / 2)] + "/" + s2[s2.length - 1]; });
    console.log("  " + who.padEnd(6) + " " + parts.join("  "));
  }
}
const n = Math.max(1, finished);
console.log(`\nAverage per playthrough: ${Math.round(totalPages / n)} pages, ${Math.round(totalWords / n).toLocaleString()} words read`);
console.log("Words read per night (average): " + Object.entries(wordsByScene).map(([k, v]) => `${k} ${Math.round(v / n).toLocaleString()}`).join(" · "));
console.log(`Wishes spent by bots: ${wishesSpent}; deductions made: ${deductionsMade}`);
process.exit(errors.length ? 1 : 0);
