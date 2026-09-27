#!/usr/bin/env node
// Generates readable planning documents in docs/ from the plan data in plan/.
//   node tools/plan-docs.js
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const P = (f) => require(path.join(ROOT, "plan", f));
const { parts, chapters, events, fullMoons } = P("calendar.js");
const { cast, historical } = P("cast.js");
const { places, districts } = P("places.js");
const { vars } = P("state.js");
const { routes, others } = P("routes.js");
const { evidence, facts } = P("evidence.js");
const { endings, tuples, passages } = P("endings.js");
const { arcs } = P("arcs.js");
const scenesDir = path.join(ROOT, "plan/scenes");
const files = fs.readdirSync(scenesDir).filter((f) => /^ch\d\d\.js$/.test(f)).sort();
const scenes = [];
for (const f of files) for (const s of require(path.join(scenesDir, f))) scenes.push(s);

const who = new Map(cast.map((c) => [c.id, c.id === "MC" ? "I" : c.name.split(" (")[0]]));
const where = new Map(places.map((p) => [p.id, p.name]));
const WEEKDAY = (d) => new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", timeZone: "UTC" });
const esc = (s) => String(s).replace(/\|/g, "\\|");
const header = (title, intro) => `# ${title}\n\n_Generated from \`plan/\` by \`tools/plan-docs.js\`. Author-facing: contains spoilers._\n\n${intro ? intro + "\n\n" : ""}`;
const write = (name, text) => { fs.writeFileSync(path.join(ROOT, "docs", name), text); console.log("wrote docs/" + name); };

// ---------------------------------------------------------------- calendar
{
  let out = header("Calder — the calendar", "The story runs from Saturday 29 August to Saturday 13 March, then six weeks later, then a year later. Weekdays follow the real 2026–27 calendar; the year is never printed.");
  for (const part of parts) {
    out += `## ${part.title}\n\n| Chapter | When | Purpose |\n|---|---|---|\n`;
    for (const id of part.chapters) {
      const c = chapters.find((x) => x.id === id);
      const when = c.from === c.to ? WEEKDAY(c.from) : `${WEEKDAY(c.from)} – ${WEEKDAY(c.to)}`;
      out += `| **${c.id} — ${c.title}** | ${when}${c.day ? ` (bible Day ${c.day})` : ""} | ${esc(c.purpose)} |\n`;
    }
    out += "\n";
  }
  out += "## Everything, by date\n\n| Date | Time | Kind | What |\n|---|---|---|---|\n";
  for (const e of events.slice().sort((a, b) => (a.date + (a.time || "")).localeCompare(b.date + (b.time || "")))) {
    const what = e.ref ? `**${e.ref}** ${chapters.find((c) => c.id === e.ref).title}${e.text ? ": " + e.text : ""}` : e.text;
    out += `| ${e.date < "2026-08-01" ? e.date : WEEKDAY(e.date)} | ${e.time || ""} | ${e.kind}${e.arc ? " " + e.arc.toUpperCase() : ""} | ${esc(what)}${e.who ? " _(" + e.who.map((x) => who.get(x) || x).join(", ") + ")_" : ""} |\n`;
  }
  out += `\nFull moons (werewolves change): ${fullMoons.map(WEEKDAY).join(" · ")}.\n`;
  write("02-calendar.md", out);
}

// ---------------------------------------------------------------- scenes
{
  let out = header("Calder — the scene inventory", `${scenes.length} scenes and ${scenes.reduce((n, s) => n + (s.choices || []).length, 0)} choices across 24 chapters. Every scene has a date, a place, who is there, what it's for, and where every choice goes. Checked by \`tools/plan-check.js\`.`);
  const fmtSet = (set) => Object.entries(set || {}).map(([k, v]) => `${k}${typeof v === "string" && /^[+-]\d+$/.test(v) ? " " + v : " = " + JSON.stringify(v)}`).join(", ");
  let ch = "";
  for (const s of scenes) {
    const c = s.id.slice(0, 4);
    if (c !== ch) { ch = c; const cc = chapters.find((x) => x.id === c); out += `\n## ${c} — ${cc.title}\n\n_${cc.purpose}_\n\n`; }
    out += `### ${s.id}${s.kind !== "common" ? ` _(${s.kind})_` : ""}\n`;
    out += `**${WEEKDAY(s.date)}${s.time ? ", " + s.time : ""}** · ${where.get(s.place) || s.place} · ${(s.cast || []).map((x) => who.get(x) || x).join(", ")}\n\n`;
    if (s.when) out += `_When:_ \`${s.when}\`\n\n`;
    out += s.purpose + "\n\n";
    if (s.letter) out += `> **Letter.** ${s.letter}\n\n`;
    if (s.set && Object.keys(s.set).length) out += `_On entry:_ ${fmtSet(s.set)}\n\n`;
    if (s.assert) out += `_Asserts:_ \`${s.assert}\`\n\n`;
    for (const o of s.choices || []) {
      out += `- **${o.id}.** ${o.text} _(${o.type})_${o.when ? ` — if \`${o.when}\`` : ""}${o.once ? " — once" : ""}${o.set && Object.keys(o.set).length ? ` → ${fmtSet(o.set)}` : ""}${o.to ? ` → **${o.to}**` : ""}\n`;
      if (o.notes) out += `  - _${o.notes}_\n`;
    }
    if (s.notes) out += `\n_Note:_ ${s.notes}\n`;
    out += s.end ? "\n**The end.**\n\n" : s.next ? `\nNext: ${s.next}\n\n` : "\n";
  }
  write("03-scenes.md", out);
}

// ---------------------------------------------------------------- state
{
  let out = header("Calder — the state model", "Every variable a scene may read or set. Anything undeclared is rejected by the checker.");
  out += "| Variable | Type | Starts | Meaning | Values |\n|---|---|---|---|---|\n";
  for (const [k, d] of Object.entries(vars)) out += `| \`${k}\` | ${d.type} | ${JSON.stringify(d.default)} | ${esc(d.desc)} | ${d.values ? d.values.join(", ") : ""} |\n`;
  write("04-state.md", out);
}

// ---------------------------------------------------------------- routes
{
  let out = header("Calder — the eight routes", "Stages instead of scores: met → friendly → friend → close → recognised → together. Each beat names where it can happen (more than one place wherever the story branches) and what it needs first. Recognition always needs his reciprocal beat and my own choice. Either man can close the route at any time.");
  for (const r of routes) {
    out += `## ${who.get(r.id)}\n\n- **What he calls it:** ${r.calls_it}\n- **What challenges that:** ${r.evidence}\n- **The earned next step:** ${r.earned}\n- **Guard rails:** ${r.guard}\n\n| Beat | Stage | Where | Needs | What |\n|---|---|---|---|---|\n`;
    for (const b of r.beats) out += `| \`${b.flag}\` | ${b.stage} | ${b.at.join(", ")} | ${b.needs ? "`" + esc(b.needs) + "`" : ""} | ${esc(b.what)} |\n`;
    out += "\n";
  }
  out += "## Other men, privately\n\n" + others.map((o) => `- ${o.pair.map((x) => who.get(x)).join(" and ")}: ${o.note} The narrator may notice; he never announces.`).join("\n") + "\n";
  write("05-routes.md", out);
}

// ---------------------------------------------------------------- evidence
{
  let out = header("Calder — the evidence network", "Where each clue can be found, computed from the scenes. Essential clues are asserted at the CH20 briefing on every path.");
  out += "| Clue | What it establishes | Essential | Found at |\n|---|---|---|---|\n";
  for (const e of evidence) {
    const at = [];
    for (const s of scenes) {
      if ((s.set || {})[e.id] === true) at.push(s.id);
      for (const c of s.choices || []) if ((c.set || {})[e.id] === true) at.push(`${s.id}#${c.id}`);
    }
    out += `| **${e.id.toUpperCase()}** ${e.name} | ${esc(e.establishes)} | ${e.essential ? "yes" : ""} | ${at.join(", ")} |\n`;
  }
  out += `\nAlso asserted at the briefing: ${facts.map((f) => "`" + f + "`").join(", ")}.\n`;
  write("06-evidence.md", out);
}

// ---------------------------------------------------------------- endings
{
  let out = header("Calder — endings and epilogues");
  out += "## The ending families\n\n| Ending | Needs | Core outcome | Damian | Armand | August | Disclosure options |\n|---|---|---|---|---|---|---|\n";
  for (const e of endings) { const t = tuples[e.id]; out += `| **${e.id}** ${e.name} | ${esc(e.needs)} | ${esc(e.core)} | ${t.damian} | ${t.armand} | ${t.august} | ${t.disclosure.join(", ")} |\n`; }
  out += "\n## Epilogue passages (CH24), in the fixed editorial order\n\n";
  const order = [["anchor", "1. The ending's anchor"], ["p_quentin", "2. Patients and donors: Quentin"], ["p_silas", "2. Silas"], ["p_felix", "2. Felix"], ["p_eamon", "2. Eamon"], ["p_hugo", "2. Hugo"], ["p_clive", "2. Clive"], ["rel", "3. The relationship, or the single life"], ["conseq", "4. Supporting consequences (two or three that were developed)"], ["final", "5. The final image"]];
  for (const [slot, title] of order) {
    out += `### ${title}\n\n`;
    for (const p of passages.filter((x) => x.slot === slot)) out += `- **${p.id}** — \`${p.when}\` — ${p.summary}\n`;
    out += "\n";
  }
  write("07-endings.md", out);
}

// ---------------------------------------------------------------- arcs
{
  let out = header("Calder — the sixteen supporting arcs", "Each arc is introduced, foregrounded or backgrounded, resolved, and acknowledged in the epilogue only if developed.");
  for (const a of arcs) {
    out += `## ${a.id.toUpperCase()} — ${a.name}\n\n${a.people.map((x) => who.get(x)).join(", ")} · ${a.places.map((x) => where.get(x)).join(", ")} · windows: ${a.windows.join(", ")}\n\n`;
    for (const [k, v] of Object.entries(a.outcomes)) out += `- **${k}:** ${v}\n`;
    out += `- **background:** ${a.background}\n\n`;
  }
  write("08-arcs.md", out);
}

// ---------------------------------------------------------------- cast and places
{
  let out = header("Calder — cast and places");
  out += "## Cast\n\n| ID | Name | Age | Kind | Home | Appearance | Status changes |\n|---|---|---|---|---|---|---|\n";
  for (const c of cast) out += `| ${c.id} | **${c.name}**${c.romance ? " ♥" : ""} | ${c.age}${c.turned ? " (turned " + c.turned + ")" : ""} | ${c.kind} | ${where.get(c.home) || ""} | ${esc(c.appearance || "")} | ${(c.status || []).map((x) => x.date + " " + x.state).join("; ")}${c.limits ? " · " + c.limits.join("; ") : ""} |\n`;
  out += "\nMentioned only: " + historical.map((h) => `**${h.name}** (${h.note})`).join("; ") + "\n\n## Places\n\n";
  for (const [d, name] of Object.entries(districts)) {
    out += `### ${name}\n\n`;
    for (const p of places.filter((x) => x.district === d)) out += `- **${p.id} ${p.name}**${p.base ? " _(drawn first)_" : ""}: ${p.notes}\n`;
    out += "\n";
  }
  write("09-cast-and-places.md", out);
}
