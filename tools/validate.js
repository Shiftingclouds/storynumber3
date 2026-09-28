#!/usr/bin/env node
// Static checks for Calder (engine from Nuit Blanche): labels, scenes, variables, people, clues, codex, art, map nodes, achievements,
// endings. Also a payoff audit: story flags that are set but read fewer than twice.
//   node tools/validate.js [--payoff]
"use strict";
const { loadNB } = require("./lib");

const SHOW_PAYOFF = process.argv.includes("--payoff");

function main() {
  const NB = loadNB();
  const errors = [];
  const warnings = [];
  let story;
  try {
    story = NB.buildStory();
  } catch (e) {
    console.error("PARSE ERROR: " + e.message);
    process.exit(1);
  }
  const cfg = story.config;
  const vars = new Set(Object.keys(cfg.startVars));
  const achUsed = new Set();
  const endUsed = new Set();
  const cluesUsed = new Set();
  const codexUsed = new Set();
  const nodesUsed = {};
  const reads = new Map();
  const sets = new Map();
  const bump = (m, k) => m.set(k, (m.get(k) || 0) + 1);

  for (const s of cfg.sceneList) if (!story.scenes[s]) errors.push(`sceneList names missing scene '${s}'`);
  for (const s of Object.keys(story.scenes)) if (!cfg.sceneList.includes(s)) warnings.push(`scene '${s}' is not in sceneList`);

  function idsIn(expr, where, temps) {
    let ids;
    try {
      ids = NB.expr.identifiers(expr);
      NB.expr.compile(expr);
    } catch (e) {
      errors.push(`${where}: bad expression '${expr}': ${e.message}`);
      return;
    }
    for (const id of ids) {
      if (!vars.has(id) && !temps.has(id)) errors.push(`${where}: unknown variable '${id}' in '${expr}'`);
      bump(reads, id);
    }
  }
  function person(id, where) { if (!cfg.people[id]) errors.push(`${where}: unknown person '${id}'`); }

  function checkText(src, where, temps) {
    let i = 0;
    while (i < src.length) {
      if (src[i] === "{") {
        let depth = 0, j = i;
        for (; j < src.length; j++) {
          if (src[j] === "{") depth++;
          else if (src[j] === "}") { depth--; if (depth === 0) break; }
        }
        if (j >= src.length) { errors.push(`${where}: unclosed '{'`); return; }
        const body = src.slice(i + 1, j);
        const lead = body[0];
        if (lead === "~") {
          const parts = NB.text.splitTop(body.slice(1));
          if (parts.length < 2) warnings.push(`${where}: variant with a single option`);
          parts.forEach((p) => checkText(p, where, temps));
        } else if (lead === "@") {
          const parts = NB.text.splitTop(body.slice(1));
          const cond = parts.shift();
          idsIn(cond.trim(), where, temps);
          if (parts.length < 1) errors.push(`${where}: multireplace without options`);
          parts.forEach((p) => checkText(p, where, temps));
        } else if (lead === "!") {
          idsIn(body.slice(1).trim(), where, temps);
        } else {
          idsIn(body.trim(), where, temps);
        }
        i = j + 1;
      } else i++;
    }
    if (/`/.test(src)) errors.push(`${where}: backtick in text`);
    const opens = (src.match(/\[i\]/g) || []).length, closes = (src.match(/\[\/i\]/g) || []).length;
    if (opens !== closes) warnings.push(`${where}: unbalanced [i] tags`);
    const bo = (src.match(/\[b\]/g) || []).length, bc = (src.match(/\[\/b\]/g) || []).length;
    if (bo !== bc) warnings.push(`${where}: unbalanced [b] tags`);
  }

  for (const [name, sc] of Object.entries(story.scenes)) {
    const temps = new Set();
    sc.lines.forEach((L) => { if (L.kind === "cmd" && L.cmd === "temp") temps.add(L.args.trim().split(/\s+/)[0]); });
    const labelsUsed = new Set();
    sc.lines.forEach((L) => {
      const where = `${name}:${L.n}`;
      if (L.kind === "text") checkText(L.raw, where, temps);
      if (L.kind === "option") {
        let t = L.opt.text;
        const w = /^@(\w+)\s+/.exec(t);
        if (w) { person(w[1], where); t = t.slice(w[0].length); }
        checkText(t, where, temps);
        for (const m of L.opt.mods) if (m.expr) idsIn(m.expr, where, temps);
      }
      if (L.kind !== "cmd") return;
      const a = (L.args || "").trim();
      switch (L.cmd) {
        case "goto":
        case "gosub":
          labelsUsed.add(a);
          if (sc.labels[a] === undefined) errors.push(`${where}: unknown label '${a}'`);
          break;
        case "goto_scene":
        case "gosub_scene": {
          const [s, l] = a.split(/\s+/);
          if (!story.scenes[s]) errors.push(`${where}: unknown scene '${s}'`);
          else if (l && story.scenes[s].labels[l] === undefined) errors.push(`${where}: unknown label '${l}' in scene '${s}'`);
          break;
        }
        case "set": {
          const m = /^(\w+)\s+(.+)$/.exec(a);
          if (!m) { errors.push(`${where}: bad *set`); break; }
          if (!vars.has(m[1]) && !temps.has(m[1])) errors.push(`${where}: *set unknown variable '${m[1]}'`);
          bump(sets, m[1]);
          let e = m[2].trim();
          const relative = /^%[+-]/.test(e) || /^[+\-*\/]/.test(e);
          if (/^%[+-]/.test(e)) e = e.slice(2);
          else if (/^[+\-*\/&]/.test(e)) e = e.slice(1);
          idsIn(e.trim(), where, temps);
          if (/^%[+-]/.test(m[2].trim()) && !cfg.clamp[m[1]]) warnings.push(`${where}: fairmath on unclamped '${m[1]}'`);
          if (relative && typeof cfg.startVars[m[1]] === "boolean") errors.push(`${where}: arithmetic on boolean '${m[1]}'`);
          break;
        }
        case "temp": {
          const m = /^(\w+)\s*(.*)$/.exec(a);
          if (m && m[2]) idsIn(m[2], where, temps);
          break;
        }
        case "if":
        case "elseif":
          idsIn(NB.parser.condExpr(a), where, temps);
          break;
        case "achieve":
          achUsed.add(a);
          if (!cfg.achievements[a]) errors.push(`${where}: unknown achievement '${a}'`);
          break;
        case "ending":
          endUsed.add(a);
          if (!cfg.endings[a]) errors.push(`${where}: unknown ending '${a}'`);
          break;
        case "finish":
          if (cfg.sceneList.indexOf(name) === cfg.sceneList.length - 1) errors.push(`${where}: *finish in last scene`);
          break;
        case "input_text": {
          const v = a.split(/\s+/)[0];
          if (!vars.has(v) && !temps.has(v)) errors.push(`${where}: *input_text unknown variable '${v}'`);
          bump(sets, v);
          break;
        }
        case "heading":
          checkText(a, where, temps);
          break;
        case "rand": {
          const v = a.split(/\s+/)[0];
          if (!vars.has(v) && !temps.has(v)) errors.push(`${where}: *rand unknown variable '${v}'`);
          break;
        }
        case "meet":
          person(a, where);
          bump(sets, "met_" + a);
          break;
        case "portrait": {
          const [id, mood] = a.split(/\s+/);
          person(id, where);
          const moods = ["neutral", "attentive", "amused", "tense", "hurt", "warm", "moon", "hungry", "returned", "small"];
          if (mood && !moods.includes(mood)) errors.push(`${where}: unknown mood '${mood}'`);
          break;
        }
        case "remember": {
          const m = /^(\w+)\s+(.+)$/.exec(a);
          if (!m) { errors.push(`${where}: bad *remember`); break; }
          person(m[1], where);
          checkText(m[2], where, temps);
          break;
        }
        case "text": {
          const m = /^(\w+)\s+(.+)$/.exec(a);
          if (!m) { errors.push(`${where}: bad *text`); break; }
          if (m[1] !== "me" && m[1] !== "unknown" && !(cfg.contacts && cfg.contacts[m[1]])) person(m[1], where);
          checkText(m[2], where, temps);
          break;
        }
        case "clue":
          cluesUsed.add(a);
          bump(sets, a);
          if (!cfg.clues[a]) errors.push(`${where}: unknown clue '${a}'`);
          break;
        case "codex":
          codexUsed.add(a);
          if (!cfg.codex[a]) errors.push(`${where}: unknown codex entry '${a}'`);
          break;
        case "art":
          if (!cfg.cards.includes(a)) errors.push(`${where}: unknown art '${a}'`);
          break;
        case "chapter": {
          const m = /\[(\w+)\]\s*$/.exec(a);
          const num = a.split(/\s+/)[0];
          const art = m ? m[1] : num;
          if (!cfg.cards.includes(art) && !cfg.cards.includes("ch" + ("0" + art).slice(-2))) warnings.push(`${where}: chapter has no card '${art}'`);
          break;
        }
        case "mood":
          if (!["dusk", "night", "neon", "winter", "thaw", "day"].includes(a)) errors.push(`${where}: unknown mood '${a}'`);
          break;
        case "meter":
        case "pips": {
          const v = a.split(/\s+/)[0];
          if (!vars.has(v) && !temps.has(v)) errors.push(`${where}: *${L.cmd} unknown variable '${v}'`);
          bump(reads, v);
          break;
        }
        case "effect":
          if (!["thaw", "bells"].includes(a)) errors.push(`${where}: unknown effect '${a}'`);
          break;
        case "node": {
          const [id, branch] = a.split(/\s+/);
          const node = cfg.map.find((n) => n.id === id);
          if (!node) errors.push(`${where}: unknown map node '${id}'`);
          else if (!node.branches[branch]) errors.push(`${where}: map node '${id}' has no branch '${branch}'`);
          (nodesUsed[id] = nodesUsed[id] || new Set()).add(branch);
          break;
        }
      }
    });
    for (const l of Object.keys(sc.labels)) if (!labelsUsed.has(l)) {
      let external = false;
      for (const other of Object.values(story.scenes)) {
        for (const L of other.lines) {
          if (L.kind === "cmd" && (L.cmd === "goto_scene" || L.cmd === "gosub_scene")) {
            const [s, lab] = (L.args || "").trim().split(/\s+/);
            if (s === name && lab === l) external = true;
          }
        }
      }
      if (!external) warnings.push(`${name}: label '${l}' is never used`);
    }
  }

  for (const a of Object.keys(cfg.achievements)) if (!achUsed.has(a) && a !== "first_wish") warnings.push(`achievement '${a}' is never awarded`);
  for (const e of Object.keys(cfg.endings)) if (!endUsed.has(e)) warnings.push(`ending '${e}' is never reached by any *ending`);
  for (const c of Object.keys(cfg.clues)) if (!cluesUsed.has(c)) {
    const viaQA = cfg.questions.some((q) => q.clue === c);
    if (!viaQA) warnings.push(`clue '${c}' is never given`);
  }
  for (const d of Object.values(cfg.deductions)) for (const pair of d.from) for (const c of pair) if (!cfg.clues[c]) errors.push(`deduction uses unknown clue '${c}'`);
  for (const c of Object.keys(cfg.codex)) if (!codexUsed.has(c) && !cfg.questions.some((q) => q.codex === c)) warnings.push(`codex '${c}' is never unlocked`);
  for (const n of cfg.map) {
    if (!nodesUsed[n.id]) { warnings.push(`map node '${n.id}' is never recorded`); continue; }
    for (const b of Object.keys(n.branches)) if (!nodesUsed[n.id].has(b)) warnings.push(`map node '${n.id}' branch '${b}' is never recorded`);
  }
  for (const id of Object.keys(cfg.people)) if (id !== "mc" && !(sets.get("met_" + id))) warnings.push(`person '${id}' is never met`);

  // payoff audit: flags the story sets but barely reads
  const payoff = [];
  const configSrc = require("fs").readFileSync(require("path").join(__dirname, "../js/story/config.js"), "utf8");
  for (const [v, n] of sets) {
    if (/^(rel_|des_|met_|c_|ded_|hours|rose_lead|canoe_alt|wishes|hush|name|look_)/.test(v)) continue;
    if (Object.prototype.hasOwnProperty.call(cfg.opposed, v) || ["hands", "nerve", "charm", "wits", "lore"].includes(v)) continue;
    const r = (reads.get(v) || 0) + (configSrc.match(new RegExp("\\bv\\." + v + "\\b", "g")) || []).length;
    if (r < 2) payoff.push(`${v} (set ${n}x, read ${r}x)`);
  }

  let words = 0;
  const perScene = {};
  for (const [name, sc] of Object.entries(story.scenes)) {
    let w = 0;
    for (const L of sc.lines) {
      if (L.kind === "text") w += L.raw.split(/\s+/).length;
      if (L.kind === "option") w += L.opt.text.split(/\s+/).length;
      if (L.kind === "cmd" && (L.cmd === "text" || L.cmd === "remember")) w += (L.args || "").split(/\s+/).length - 1;
    }
    perScene[name] = w;
    words += w;
  }

  // ---- Calder: the script against the plan (plan/scenes). Every *sid names a planned scene; the *date, *place and
  // *present that follow it must agree with the plan, and every planned scene of a written chapter must be played.
  {
    const fs = require("fs"), path = require("path");
    const planDir = path.join(__dirname, "../plan/scenes");
    const plan = new Map();
    for (const f of fs.readdirSync(planDir).filter((f) => /^ch\d\d\.js$/.test(f))) for (const sc of require(path.join(planDir, f))) plan.set(sc.id, sc);
    const cidToId = {};
    for (const [id, p] of Object.entries(cfg.people)) cidToId[p.cid] = id;
    const seen = new Set();
    const met = new Set();
    for (const [name, sc] of Object.entries(story.scenes)) {
      let cur = null, lastDate = "";
      for (const L of sc.lines) {
        if (L.kind !== "cmd") continue;
        const a = (L.args || "").trim();
        if (L.cmd === "meet") met.add(a);
        if (L.cmd === "sid") {
          cur = plan.get(a);
          if (!cur) { errors.push(`${name}:${L.n}: *sid ${a} is not a planned scene`); continue; }
          seen.add(a);
        }
        if (!cur) continue;
        if (L.cmd === "date") {
          const d = a.split(/\s+/)[0];
          if (d !== cur.date) errors.push(`${name}:${L.n}: ${cur.id} is planned for ${cur.date}, the script says ${d}`);
          if (lastDate && d < lastDate) errors.push(`${name}:${L.n}: the date goes backwards (${lastDate} -> ${d})`);
          lastDate = d;
        }
        if (L.cmd === "place") { const pid = a.split(/\s+/)[0]; if (pid !== cur.place) warnings.push(`${name}:${L.n}: ${cur.id} is planned at ${cur.place}, the script says ${pid}`); if (!cfg.places[pid]) errors.push(`${name}:${L.n}: unknown place ${pid}`); const vw = a.split(/\s+/)[1]; if (vw && !cfg.views.includes(vw)) errors.push(`${name}:${L.n}: unknown view ${vw}`); }
        if (L.cmd === "present") {
          const planned = new Set((cur.cast || []).map((c) => cidToId[c]).filter(Boolean));
          for (const w of a.split(/\s+/).filter(Boolean)) {
            if (!cfg.people[w]) errors.push(`${name}:${L.n}: unknown person ${w}`);
            else if (!planned.has(w) && w !== "mc") warnings.push(`${name}:${L.n}: ${w} is present in ${cur.id} but not in its planned cast`);
          }
        }
      }
    }
    const written = new Set(cfg.sceneList.map((s) => s.toUpperCase()));
    for (const [id] of plan) if (written.has(id.slice(0, 4)) && !seen.has(id)) warnings.push(`planned scene ${id} has no *sid in the script yet`);
    // only complain about people who are never met if they're in the planned cast of a written chapter
    for (let i = warnings.length - 1; i >= 0; i--) {
      const m = /^person '(\w+)' is never met$/.exec(warnings[i]);
      if (!m) continue;
      const cid = cfg.people[m[1]] && cfg.people[m[1]].cid;
      const due = [...plan.values()].some((sc) => written.has(sc.id.slice(0, 4)) && (sc.cast || []).includes(cid));
      if (!due || m[1] === "mc") warnings.splice(i, 1);
    }
    console.log(`plan coverage: ${seen.size} of ${[...plan.keys()].filter((k) => written.has(k.slice(0, 4))).length} planned scenes in written chapters`);
  }

  for (const w of warnings) console.log("warn: " + w);
  for (const e of errors) console.log("ERROR: " + e);
  if (SHOW_PAYOFF || payoff.length) {
    console.log(`\npayoff audit: ${payoff.length} flag(s) set but read fewer than twice` + (SHOW_PAYOFF ? ":" : " (use --payoff to list)"));
    if (SHOW_PAYOFF) payoff.forEach((p) => console.log("  " + p));
  }
  console.log("\nwords per scene: " + Object.entries(perScene).map(([k, v]) => `${k} ${v.toLocaleString()}`).join(" · "));
  console.log(`${Object.keys(story.scenes).length} scenes, ~${words.toLocaleString()} words of script, ${errors.length} errors, ${warnings.length} warnings.`);
  process.exit(errors.length ? 1 : 0);
}

main();
