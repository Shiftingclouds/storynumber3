#!/usr/bin/env node
// Checks the Calder plan (plan/*.js) for continuity and consistency before any prose is written.
//   node tools/plan-check.js [--runs 4000] [--verbose]
// Static: unique ids, targets exist, declared variables and legal values, known cast and places,
//         dates/times never go backwards along an edge, every scene reachable from the start.
// Walk:   random playthroughs of the plan graph with real state: conditions, dead ends, date order along
//         actual paths, presence (nobody dead or held appears where they can't be), skill checks reachable.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const args = process.argv.slice(2);
const RUNS = Number(args[args.indexOf("--runs") + 1]) || (args.includes("--runs") ? 4000 : 3000);
const VERBOSE = args.includes("--verbose");

// expression engine, shared with the game
const sandbox = { console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, "js/engine/expr.js"), "utf8"), sandbox);
const EXPR = sandbox.NB.expr;

const { vars, LEADS } = require(path.join(ROOT, "plan/state.js"));
const { cast } = require(path.join(ROOT, "plan/cast.js"));
const { places } = require(path.join(ROOT, "plan/places.js"));
const calendar = require(path.join(ROOT, "plan/calendar.js"));
let routes = null;
try { routes = require(path.join(ROOT, "plan/routes.js")); } catch (e) { /* not written yet */ }

const scenesDir = path.join(ROOT, "plan/scenes");
const files = fs.readdirSync(scenesDir).filter((f) => /^ch\d\d\.js$/.test(f)).sort();
const scenes = [];
for (const f of files) for (const s of require(path.join(scenesDir, f))) scenes.push(Object.assign({ file: f }, s));
const byId = new Map();
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

for (const s of scenes) {
  if (byId.has(s.id)) err(`duplicate scene id ${s.id}`);
  byId.set(s.id, s);
}
const castById = new Map(cast.map((c) => [c.id, c]));
const placeIds = new Set(places.map((p) => p.id));
const writtenChapters = new Set(files.map((f) => "CH" + f.slice(2, 4)));
const chapterOf = (id) => id.slice(0, 4);

// ---------------------------------------------------------------- declared variables
const beatVars = new Set();
if (routes) for (const r of routes.routes) for (const b of r.beats) beatVars.add(b.flag);
function varKnown(name) {
  if (vars[name]) return true;
  if (/^b_[a-z]+_[a-z0-9_]+$/.test(name)) { if (!routes) return true; return beatVars.has(name); }
  return false;
}
function checkVar(name, where, value) {
  if (!varKnown(name)) { err(`${where}: undeclared variable '${name}'`); return; }
  const d = vars[name];
  if (!d || value === undefined) return;
  if (d.type === "number" && typeof value !== "number" && !/^[+-]\d+$/.test(String(value))) err(`${where}: '${name}' is a number, got ${JSON.stringify(value)}`);
  if (d.type === "bool" && typeof value !== "boolean") err(`${where}: '${name}' is a bool, got ${JSON.stringify(value)}`);
  if (d.type === "string" && typeof value !== "string") err(`${where}: '${name}' is a string, got ${JSON.stringify(value)}`);
  if (d.values && typeof value === "string" && value !== "" && !d.values.includes(value)) err(`${where}: '${name}' can't be "${value}" (allowed: ${d.values.join(", ")})`);
}
function checkExpr(src, where) {
  try {
    EXPR.compile(src);
    for (const id of EXPR.identifiers(src)) if (!varKnown(id)) err(`${where}: condition uses undeclared '${id}'`);
  } catch (e) { err(`${where}: bad condition '${src}': ${e.message}`); }
}

// ---------------------------------------------------------------- static checks
const stamp = (s) => (s.date || "") + "T" + (s.time || "00:00");
function edges(s) {
  const out = [];
  for (const c of s.choices || []) out.push({ to: c.to || s.next, via: c.id });
  if (s.next) out.push({ to: s.next, via: "next" });
  return out.filter((e) => e.to);
}
for (const s of scenes) {
  const w = s.id;
  if (!/^CH\d\d\.[A-Z0-9_]+\.[A-Z0-9_]+$/.test(s.id)) err(`${w}: id should look like CH05.HOSPITAL.01`);
  if (chapterOf(s.id) !== "CH" + s.file.slice(2, 4)) err(`${w}: lives in ${s.file} but belongs to ${chapterOf(s.id)}`);
  if (!s.date || !/^\d{4}-\d\d-\d\d$/.test(s.date)) err(`${w}: missing or bad date`);
  if (s.time && !/^\d\d:\d\d$/.test(s.time)) err(`${w}: bad time '${s.time}'`);
  if (!s.place) err(`${w}: no place`); else if (!placeIds.has(s.place)) err(`${w}: unknown place ${s.place}`);
  for (const c of s.cast || []) if (!castById.has(c)) err(`${w}: unknown cast id ${c}`);
  if (!s.purpose) err(`${w}: no purpose`);
  if (s.when) checkExpr(s.when, w);
  for (const [k, v] of Object.entries(s.set || {})) checkVar(k, w + " (entry)", v);
  const ch = calendar.chapters.find((c) => c.id === chapterOf(s.id));
  if (ch && s.date && (s.date < ch.from || s.date > ch.to)) err(`${w}: date ${s.date} is outside ${ch.id} (${ch.from} → ${ch.to})`);
  if (!s.end && !s.next && !(s.choices || []).length) err(`${w}: dead end (no next, no choices, not an end)`);
  for (const c of s.choices || []) {
    const cw = `${w}#${c.id}`;
    if (!c.text) err(`${cw}: no text`);
    if (!["expressive", "relational", "investigative", "structural"].includes(c.type)) err(`${cw}: type must be expressive/relational/investigative/structural`);
    if (!c.to && !s.next) err(`${cw}: goes nowhere`);
    if (c.when) checkExpr(c.when, cw);
    for (const [k, v] of Object.entries(c.set || {})) checkVar(k, cw, v);
  }
  for (const e of edges(s)) {
    const t = byId.get(e.to);
    if (!t) {
      if (writtenChapters.has(chapterOf(e.to))) err(`${w} → ${e.to}: no such scene`);
      continue;
    }
    if (stamp(t) < stamp(s)) err(`${w} (${stamp(s)}) → ${t.id} (${stamp(t)}): time goes backwards`);
  }
}

// route packets: needs are valid conditions; beats live in the scenes that claim them
if (routes) {
  for (const r of routes.routes) {
    for (const b of r.beats) {
      if (b.needs) checkExpr(b.needs, `route ${r.lead} ${b.flag}`);
      let playedSomewhere = false;
      for (const at of b.at) {
        const sc = byId.get(at);
        if (!sc) { if (writtenChapters.has(chapterOf(at))) err(`route ${r.lead}: ${b.flag} is placed at ${at}, which doesn't exist`); continue; }
        const sets = [sc.set || {}].concat((sc.choices || []).map((c) => c.set || {}));
        if (sets.some((x) => x[b.flag] === true)) playedSomewhere = true;
        else err(`route ${r.lead}: ${b.flag} is placed at ${at}, but that scene never sets it`);
      }
      if (!playedSomewhere && b.at.every((a) => writtenChapters.has(chapterOf(a)))) err(`route ${r.lead}: ${b.flag} is never played`);
    }
  }
  // every b_ flag a scene sets must belong to a packet, at a place the packet lists
  for (const s of scenes) {
    const sets = [["(entry)", s.set || {}]].concat((s.choices || []).map((c) => ["#" + c.id, c.set || {}]));
    for (const [w, x] of sets) for (const k of Object.keys(x)) {
      if (!/^b_/.test(k)) continue;
      const r = routes.routes.find((r) => r.beats.some((b) => b.flag === k));
      const b = r && r.beats.find((b) => b.flag === k);
      if (b && !b.at.includes(s.id)) err(`${s.id}${w}: sets ${k}, but plan/routes.js doesn't list ${s.id} among its places`);
    }
  }
}

// reachability from the first scene, ignoring conditions
const start = scenes[0];
const seen = new Set([start.id]);
const queue = [start];
while (queue.length) {
  const s = queue.shift();
  for (const e of edges(s)) { const t = byId.get(e.to); if (t && !seen.has(t.id)) { seen.add(t.id); queue.push(t); } }
}
for (const s of scenes) if (!seen.has(s.id)) err(`${s.id}: unreachable from ${start.id}`);

// ---------------------------------------------------------------- presence (continuity of the cast)
function statusOn(c, date) {
  let st = "ok";
  for (const x of c.status || []) if (x.date <= date) st = x.state;
  return st;
}
for (const s of scenes) {
  for (const id of s.cast || []) {
    const c = castById.get(id);
    if (!c) continue;
    const st = statusOn(c, s.date);
    if (st === "dead" && !s.allowDead) err(`${s.id}: ${c.name} is dead on ${s.date}`);
    if (st === "held" && !["P16", "P56"].includes(s.place) && !s.allowHeld) err(`${s.id}: ${c.name} is held at Stillwater on ${s.date}, but appears at ${s.place}`);
    // vampires: no daylight unless they're at home in the Regent (light-protected) or the scene says why
    if (c.kind === "vampire" && s.time && !s.allowDay && s.place !== "P14") {
      const m = s.date.slice(5, 7);
      const rise = calendar.sunrise[m], set = calendar.sunset[m];
      if (rise && set && s.time > rise && s.time < set) err(`${s.id}: ${c.name} is a vampire, and ${s.time} on ${s.date} is daylight (sunrise ${rise}, sunset ${set})`);
    }
    // wolves: compelled change on full-moon nights
    if (c.kind === "wolf" && calendar.fullMoons.includes(s.date) && s.time && s.time >= "20:00" && !s.allowMoon) err(`${s.id}: ${c.name} is a werewolf and ${s.date} is a full moon night`);
  }
}

// ---------------------------------------------------------------- the walk
function freshState() {
  const st = {};
  for (const [k, d] of Object.entries(vars)) st[k] = d.default;
  if (routes) for (const f of beatVars) st[f] = false;
  return st;
}
function clampFor(k) {
  if (/^st_/.test(k)) return [0, 6];
  if (/^fr_/.test(k)) return [0, 3];
  if (/^hurt_/.test(k)) return [0, 2];
  if (["nerve", "craft", "people", "knack"].includes(k)) return [0, 100];
  if (k === "strain") return [0, 3];
  if (k === "enemy_aware") return [0, 3];
  return null;
}
function apply(st, set) {
  for (const [k, v] of Object.entries(set || {})) {
    if (typeof v === "string" && /^[+-]\d+$/.test(v) && (!vars[k] || vars[k].type === "number")) st[k] = (Number(st[k]) || 0) + Number(v);
    else st[k] = v;
    const cl = clampFor(k);
    if (cl) st[k] = Math.max(cl[0], Math.min(cl[1], st[k]));
  }
}
function test(st, src) {
  if (!src) return true;
  return !!EXPR.compile(src)((n) => (n in st ? st[n] : (() => { throw new Error("unknown " + n); })()));
}
const visits = new Map();
const choiceHits = new Map();
const stops = {};
const walkErrors = new Map();
const checkStats = new Map();
const SKILLS = ["nerve", "craft", "people", "knack"];
function rng(seed) { let x = seed | 0 || 1; return () => ((x = (x * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff); }
for (let run = 0; run < RUNS; run++) {
  const r = rng(run * 7919 + 13);
  const st = freshState();
  let s = start;
  let last = "";
  let steps = 0;
  while (s && steps++ < 2000) {
    if (s.when && !test(st, s.when)) {
      // conditional scene skipped: fall through to its next
      if (!s.next) { walkErrors.set(`${s.id}: condition false and no next to fall through to`, (walkErrors.get(`${s.id}: condition false and no next`) || 0) + 1); break; }
      s = byId.get(s.next) || null;
      if (!s) break;
      continue;
    }
    visits.set(s.id, (visits.get(s.id) || 0) + 1);
    const t = stamp(s);
    if (t < last) walkErrors.set(`${s.id}: reached at ${t} after ${last}`, 1);
    last = t;
    apply(st, s.set);
    if (s.end) { stops[s.id] = (stops[s.id] || 0) + 1; break; }
    const avail = (s.choices || []).filter((c) => test(st, c.when));
    // skill checks: which options were gated by a skill, and could this run take them?
    for (const c of s.choices || []) {
      if (!c.when) continue;
      const ids = EXPR.identifiers(c.when).filter((x) => SKILLS.includes(x));
      if (!ids.length) continue;
      const k = `${s.id}#${c.id} (${c.when})`;
      const cs = checkStats.get(k) || { seen: 0, pass: 0 };
      cs.seen++; if (test(st, c.when)) cs.pass++;
      checkStats.set(k, cs);
    }
    let next = null;
    if ((s.choices || []).length) {
      if (!avail.length) { walkErrors.set(`${s.id}: every option is unavailable`, (walkErrors.get(`${s.id}: every option is unavailable`) || 0) + 1); break; }
      const c = avail[Math.floor(r() * avail.length)];
      choiceHits.set(`${s.id}#${c.id}`, (choiceHits.get(`${s.id}#${c.id}`) || 0) + 1);
      apply(st, c.set);
      next = c.to || s.next;
    } else next = s.next;
    const t2 = byId.get(next);
    if (!t2) { const k = chapterOf(next || "") || "(none)"; stops[`→ ${k} (not written yet)`] = (stops[`→ ${k} (not written yet)`] || 0) + 1; break; }
    s = t2;
  }
}
// focused walks: play like someone pursuing one man (prefer options that touch his name), to prove each route completes
function walkFocused(lead, seed) {
  const r = rng(seed);
  const st = freshState();
  let s = start, steps = 0;
  const L = lead.toLowerCase();
  const touches = (c) => {
    const keys = Object.keys(c.set || {}).join(" ") + " " + Object.values(c.set || {}).join(" ") + " " + (c.to || "");
    return keys.toLowerCase().includes(L) ? 1 : 0;
  };
  while (s && steps++ < 2000) {
    if (s.when && !test(st, s.when)) { s = byId.get(s.next) || null; continue; }
    visits.set(s.id, (visits.get(s.id) || 0) + 1);
    apply(st, s.set);
    if (s.end) break;
    const avail = (s.choices || []).filter((c) => test(st, c.when));
    let next;
    if ((s.choices || []).length) {
      if (!avail.length) break;
      const pref = avail.filter(touches);
      const pool = pref.length && r() < 0.9 ? pref : avail;
      // among preferred, favour the one that raises the stage most
      pool.sort((a, b) => ((b.set || {})["st_" + L] === 6 ? 2 : 0) + ((b.set || {})["st_" + L] === 5 ? 1 : 0) - (((a.set || {})["st_" + L] === 6 ? 2 : 0) + ((a.set || {})["st_" + L] === 5 ? 1 : 0)));
      const c = r() < 0.7 ? pool[0] : pool[Math.floor(r() * pool.length)];
      choiceHits.set(`${s.id}#${c.id}`, (choiceHits.get(`${s.id}#${c.id}`) || 0) + 1);
      apply(st, c.set);
      next = c.to || s.next;
    } else next = s.next;
    s = byId.get(next) || null;
  }
  return st;
}
const routeReport = [];
for (const L of LEADS) {
  let r5 = 0, r6 = 0, maxSt = 0;
  const N = 400;
  for (let i = 0; i < N; i++) {
    const st = walkFocused(L, 90000 + i * 31 + L.length);
    if (st["st_" + L] >= 5) r5++;
    if (st["st_" + L] >= 6) r6++;
    maxSt = Math.max(maxSt, st["st_" + L]);
  }
  routeReport.push(`${L.padEnd(8)} max stage ${maxSt}; recognised in ${Math.round(r5 / N * 100)}%, together in ${Math.round(r6 / N * 100)}% of focused walks`);
  if (writtenChapters.has("CH17") && r5 === 0) err(`route ${L}: never reaches recognition (stage 5) even when pursued`);
}

for (const s of scenes) if (!visits.has(s.id)) warn(`${s.id}: never reached in ${RUNS} walks (condition never true?)`);
for (const s of scenes) for (const c of s.choices || []) if (!choiceHits.has(`${s.id}#${c.id}`)) warn(`${s.id}#${c.id}: option never available/taken in ${RUNS} walks`);
for (const [k, cs] of checkStats) if (cs.pass === 0) err(`skill check never passable: ${k}`);

// ---------------------------------------------------------------- report
for (const [m] of walkErrors) err("walk: " + m);
for (const e of errors) console.log("ERROR   " + e);
for (const w of warnings) console.log("warning " + w);
console.log(`\n${files.length} chapter file(s), ${scenes.length} scenes, ${scenes.reduce((n, s) => n + (s.choices || []).length, 0)} choices. ${RUNS} walks.`);
console.log("Walks ended at: " + Object.entries(stops).map(([k, v]) => `${k} ×${v}`).join(", "));
if (VERBOSE) for (const [k, cs] of checkStats) console.log(`  check ${Math.round((cs.pass / cs.seen) * 100)}%  ${k}`);
console.log("Routes, when pursued:\n  " + routeReport.join("\n  "));
console.log(`${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
