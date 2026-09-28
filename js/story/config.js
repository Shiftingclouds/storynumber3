/* CALDER — story configuration. Variables, people, places, evidence and the calendar come from plan/ via
 * js/story/plan-data.js (tools/gen-config.js); this file adds what only the game needs: journal text, letters,
 * snapshots, endings copy, the stat screen, and the continuity rules the runtime enforces. */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var PL = NB.plan;
  var esc = function (s) { return NB.text ? NB.text.escapeHTML(s) : String(s); };
  var LEADS = PL.leads;

  /* ---------------- people ---------------- */

  var EPITHETS = {
    adrian: "Junior warden, Mercy House", micah: "Apprentice electrician, Eastbank", ellis: "Restorer and spell-worker, University Hill",
    dominic: "Singer, the Regent", nolan: "Sound tech at Switchyard, my best friend", ansel: "Courier from the Marches",
    quentin: "Barista at Double Shift", reuben: "Warden medic", martin: "My uncle, the print shop", will: "My cousin",
    gideon: "Quentin's brother, the Regent", damian: "A former instructor", armand: "A patron, Briar Heights"
  };
  var people = {};
  Object.keys(PL.people).forEach(function (id) {
    var p = PL.people[id];
    var first = p.name.split(" ")[0];
    people[id] = {
      cid: p.cid, kind: p.kind, tier: p.tier, romance: p.romance,
      name: id === "mc" ? function (v) { return (v.name || "Theo") + " Marsh"; } : p.name,
      short: id === "mc" ? "Me" : first,
      epithet: EPITHETS[id] || "",
      self: id === "mc",
      desc: function () { return p.appearance ? "<p>" + esc(p.appearance) + "</p>" : ""; }
    };
  });

  /* ---------------- continuity: who can be in a scene ---------------- */

  function statusOn(p, date) {
    var s = "alive";
    (p.status || []).forEach(function (x) { if (x.date <= date) s = x.state; });
    return s;
  }
  /** Returns a reason string if `who` can't be present now, else "". */
  function canBePresent(who, st) {
    var p = PL.people[who];
    if (!p || !st.date) return "";
    var s = statusOn(p, st.date);
    if (s === "dead") return "dead on " + st.date;
    // the donors can only be seen where they're held: Stillwater (P56) or Pump Nine (P16)
    if (s === "held" && st.place !== "P56" && st.place !== "P16") return "held at Stillwater on " + st.date;
    var cal = PL.calendar, m = st.date.slice(5, 7);
    if (p.kind === "vampire" && st.time && st.place !== "P14") {
      var rise = cal.sunrise[m], set = cal.sunset[m];
      if (rise && set && st.time > rise && st.time < set) return "a vampire in daylight (" + st.time + ")";
    }
    if (p.kind === "wolf" && st.time && st.time >= "20:00" && cal.fullMoons.indexOf(st.date) >= 0 && (PL.allowMoon || []).indexOf(st.sid) < 0) return "a full-moon night";
    return "";
  }

  /* ---------------- evidence (the clue board) ---------------- */

  var clues = {};
  Object.keys(PL.evidence).forEach(function (k) { clues[k] = { title: PL.evidence[k].title, text: PL.evidence[k].text }; });

  /* ---------------- relationship stages ---------------- */

  var STAGES = ["Not met", "Met", "Friendly", "Friends", "Close", "Something more", "Together"];

  /* Stages climb by beats (plan/routes.js). A small step (+1) can't lift a man past the highest stage his route
   * beats have earned so far (never less than Friendly), so warmth on one path can't skip the story another path
   * needs. A beat's direct set (*set st_x 4) only ever raises. Something more and Together are only ever set directly. */
  function stageCeiling(lead, v) {
    var c = 2;
    (PL.beats[lead] || []).forEach(function (b) { if (v[b.flag] && b.stage > c) c = b.stage; });
    return Math.min(c, 5);
  }
  function adjustSet(name, cur, val, relative, v) {
    var m = /^st_(\w+)$/.exec(name);
    if (!m || !PL.beats[m[1]] || typeof val !== "number" || typeof cur !== "number") return val;
    if (!relative) return Math.max(cur, val);
    if (val <= cur) return val;
    return Math.max(cur, Math.min(val, stageCeiling(m[1], v)));
  }

  /* ---------------- letters & snapshots (filled in as chapters are written) ---------------- */

  var letters = NB.LETTERS || {};
  var snapshots = {
    lane: { title: "The rear lane", bg: "switchyard_lane" },
    cafe: { title: "Double Shift", bg: "double_shift" },
    "evening-nolan": { title: "Nolan's twentieth", bg: "northline_station" },
    "evening-micah": { title: "The Serrano table", bg: "serrano_yard" },
    "evening-ellis": { title: "Open studios", bg: "university" },
    exhibition: { title: "The winter opening", bg: "university" },
    "crossing-ansel": { title: "Bracken Court, with Ansel", bg: "bracken_court" },
    "crossing-adrian": { title: "Bracken Court, with Adrian", bg: "bracken_court" },
    "crossing-micah": { title: "Bracken Court, with Micah", bg: "bracken_court" },
    "crossing-nolan": { title: "Bracken Court, with Nolan", bg: "bracken_court" },
    "crossing-reuben": { title: "Bracken Court, with Reuben", bg: "bracken_court" },
    docks: { title: "Stillwater", bg: "stillwater_docks" },
    "together-adrian": { title: "Adrian", bg: "mercy_house" },
    "together-micah": { title: "Micah", bg: "serrano_yard" },
    "together-ellis": { title: "Ellis", bg: "okafor_restoration" },
    "together-dominic": { title: "Dominic", bg: "regent" },
    "together-nolan": { title: "Nolan", bg: "northline_station" },
    "together-ansel": { title: "Ansel", bg: "neutral_table" },
    "together-quentin": { title: "Quentin", bg: "double_shift" },
    "together-reuben": { title: "Reuben", bg: "mercy_house" },
    bridge: { title: "The bridge we built", bg: "okafor_restoration" },
    "role-pump": { title: "Pump Nine, the night of the thirteenth", bg: "pump_nine" },
    "role-docks": { title: "Stillwater, the night of the thirteenth", bg: "stillwater_docks" },
    "role-crossing": { title: "The crossing chamber", bg: "iron_footbridge" },
    "aftermath-all": { title: "Everyone", bg: "calder_general" },
    "aftermath-donors": { title: "Eamon, Hugo, Clive", bg: "stillwater_docks" },
    "aftermath-quentin": { title: "What we could save", bg: "rusk_funeral" },
    "aftermath-silas": { title: "What we could save", bg: "rusk_funeral" },
    "aftermath-felix": { title: "What we could save", bg: "rusk_funeral" },
    parting: { title: "Northline", bg: "northline_station" },
    "epilogue-adrian": { title: "Adrian, a year on", bg: "print_shop" },
    "epilogue-micah": { title: "Micah, a year on", bg: "print_shop" },
    "epilogue-ellis": { title: "Ellis, a year on", bg: "print_shop" },
    "epilogue-dominic": { title: "Dominic, a year on", bg: "print_shop" },
    "epilogue-nolan": { title: "Nolan, a year on", bg: "print_shop" },
    "epilogue-ansel": { title: "Ansel, a year on", bg: "print_shop" },
    "epilogue-quentin": { title: "Quentin, a year on", bg: "print_shop" },
    "epilogue-reuben": { title: "Reuben, a year on", bg: "print_shop" },
    "epilogue-single": { title: "The city, a year on", bg: "riverside_steps_night" }
  };

  /* ---------------- chapter art ---------------- */

  var cardAliases = {
    title: "switchyard_lane",
    ch01: "switchyard_lane", ch02: "print_shop", ch03: "double_shift", ch04: "mercy_house", ch05: "okafor_restoration", ch06: "northline_station",
    ch07: "serrano_yard", ch08: "lyles_bakery", ch09: "northline_station", ch10: "mercy_house", ch11: "university", ch12: "regent",
    ch13: "bracken_court", ch14: "iron_footbridge", ch15: "stillwater_docks", ch16: "rusk_funeral", ch17: "iron_footbridge", ch18: "okafor_restoration",
    ch19: "sorrell_house", ch20: "neutral_table", ch21: "pump_nine", ch22: "mercy_house", ch23: "orchard_house", ch24: "iron_footbridge",
    end_A: "mercy_house", end_B: "serrano_yard", end_C: "okafor_restoration", end_D: "sorrell_house", end_E: "rusk_funeral",
    end_F_Q: "double_shift", end_F_S: "lyles_bakery", end_F_F: "university"
  };

  /* ---------------- endings ---------------- */

  // what the ending screen says (the plan's "core" is a design note, not for players)
  var endingText = {
    A: "All six came home. Mercy House answered for what it did, in its own record, in front of the men it hurt.",
    B: "All six came home, carried by neighbours. The evidence stayed with the people who carried them, in three copies, where no house could bury it.",
    C: "All six lived, the long way round: weeks of weaning, care rotas, a tin on the counter for the volunteers' rent. Nobody was well for a long time. Everybody was alive.",
    D: "All six lived, on Armand's money and Armand's terms. A compromise that worked, and that I'll carry for years.",
    E: "Eamon, Hugo and Clive went home. Quentin, Silas and Felix had decided, at a diner table in February, that nobody would be kept in a bed for them. Three graves in a row, and three men who visit them.",
    F_Q: "One bridge. Quentin lived. Silas and Felix didn't. The donors went home. He says their names every day.",
    F_S: "One bridge. Silas lived. Quentin and Felix didn't. The donors went home. Otis keeps a chair.",
    F_F: "One bridge. Felix lived. Quentin and Silas didn't. The donors went home, and the film has two names at the start, not the end."
  };
  var endings = {};
  Object.keys(PL.endings).forEach(function (k) { endings[k] = { title: PL.endings[k].title, desc: endingText[k] || PL.endings[k].core, clue: "" }; });

  var achievements = {
    first_pulse: { title: "Struck Bell", desc: "Felt the knack go off, and didn't look away." },
    returned: { title: "Double Shot", desc: "Recognised a dead man making coffee." },
    crossed: { title: "Candle in Every Window", desc: "Crossed into the Marches." },
    all_home: { title: "Everyone Home", desc: "Brought all six men through the night alive.", hidden: true },
    told_truth: { title: "Out Loud", desc: "Told someone the truth about yourself." }
  };

  /* ---------------- the stat screen ---------------- */

  function fmtDate(d) {
    if (!d) return "—";
    try { return new Date(d + "T12:00:00Z").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }); } catch (e) { return d; }
  }
  function statScreen(v, st) {
    var sections = [];
    var chap = PL.calendar.chapters[(v.ch || 1) - 1];
    sections.push({ rows: [{ type: "id", items: [
      ["Name", esc((v.name || "Theo") + " Marsh")],
      ["When", fmtDate(st.date)],
      ["Where", st.place && PL.places[st.place] ? esc(PL.places[st.place].name) : "—"],
      ["Chapter", chap ? esc(chap.title) : "—"]
    ] }] });
    sections.push({ title: "Skills", rows: [
      { type: "bar", label: "Nerve", value: v.nerve, note: "Holding steady when everything says run." },
      { type: "bar", label: "Craft", value: v.craft, note: "Rigging, tools, electrics: hands that know what they're doing." },
      { type: "bar", label: "People", value: v.people, note: "Reading a room the ordinary way, and talking to it." },
      { type: "bar", label: "The knack", value: v.knack, note: "How well I can steer the gift, and how much it costs me." }
    ] });
    var rel = [];
    LEADS.forEach(function (l) { if (v["st_" + l] > 0) rel.push(people[l].short + ": " + STAGES[v["st_" + l]]); });
    if (rel.length) sections.push({ title: "People", rows: [{ type: "list", items: rel }] });
    return sections;
  }

  function narratorFacts(v) {
    return { name: v.name || "Theo", surname: "Marsh", pronouns: "he/him", background: "a 19-year-old closeted gay lighting tech who lives above his uncle's print shop in Calder, and is secretly sensitive (he feels what people feel)" };
  }
  function hintFallback(e) {
    var m;
    if ((m = /^(e\d\d)$/.exec(e)) && clues[m[1]]) return "Requires evidence: " + clues[m[1]].title;
    if ((m = /^st_(\w+)\s*>=\s*(\d)$/.exec(e)) && people[m[1]]) return "Needs you and " + people[m[1]].short + " to be " + STAGES[+m[2]].toLowerCase();
    if ((m = /^(nerve|craft|people|knack)\s*>=\s*(\d+)$/.exec(e))) return "Requires " + ({ nerve: "Nerve", craft: "Craft", people: "People", knack: "the knack" }[m[1]]) + " " + m[2];
    return "";
  }
  function recap(v, st) { return (st.journal || []).slice(); }

  var statNames = { nerve: "Nerve", craft: "Craft", people: "People", knack: "The knack", strain: "Strain" };
  LEADS.forEach(function (l) { statNames["st_" + l] = people[l].short; });
  Object.keys(PL.startVars).forEach(function (k) { var m = /^fr_(\w+)$/.exec(k); if (m && people[m[1]]) statNames[k] = people[m[1]].short; });

  NB.config = {
    title: "Calder",
    eyebrow: "Calder · the end of summer",
    subtitle: "The Unquiet City",
    motto: "Everyone in this city is holding a thread. I'm the one who can feel them.",
    sceneList: ["ch01", "ch02", "ch03", "ch04", "ch05", "ch06", "ch07", "ch08", "ch09", "ch10", "ch11", "ch12", "ch13", "ch14", "ch15", "ch16", "ch17", "ch18", "ch19", "ch20", "ch21", "ch22", "ch23", "ch24"],
    startVars: PL.startVars,
    clamp: PL.clamp,
    adjustSet: adjustSet,
    stageCeiling: stageCeiling,
    opposed: {},
    statNames: statNames,
    hints: {},
    hintFallback: hintFallback,
    trackChanges: ["nerve", "craft", "people", "knack"].concat(LEADS.map(function (l) { return "st_" + l; })),
    lookKeys: [],
    people: people,
    contacts: { mum: "Mum", unknown_no: "Unknown number" },
    clues: clues,
    deductions: {},
    codex: {},
    map: [],
    questions: [],
    recap: recap,
    achievements: achievements,
    endings: endings,
    get cards() { return NB.cards ? NB.cards.ids : []; },
    cardAliases: cardAliases,
    romanceable: LEADS,
    stages: STAGES,
    statScreen: statScreen,
    narratorFacts: narratorFacts,
    inputDefaults: { name: "Theo" },
    places: PL.places,
    views: PL.views,
    letters: letters,
    snapshots: snapshots,
    canBePresent: canBePresent,
    fmtDate: fmtDate,
    aboutHTML: [
      "<p><b>Calder</b> is an interactive novel. You read, and at each choice you decide what I say and do. The story remembers.</p>",
      "<p><b>Choices.</b> Pick an option and press <b>Next</b> (or press 1–9 and Enter). A greyed-out option says why it's locked.</p>",
      "<p><b>The knack.</b> I feel what people feel: as weather, as echoes in places and things, as threads between people. It never tells me what anyone feels about me.</p>",
      "<p><b>The Journal</b> holds everyone I've met, with hearts for how close we've become, the evidence I've gathered, letters, and snapshots.</p>",
      "<p><b>Intimate scenes</b> are on the page by default. Settings can fade them to black.</p>",
      "<p>There are eight endings. After your first, the Story Map and New Game+ open up.</p>"
    ].join("")
  };
})(typeof window !== "undefined" ? window : globalThis);
