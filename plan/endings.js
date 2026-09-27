// Calder: the ending matrix (bible §9.4) and the epilogue passage inventory (bible §9.5).
// Every passage has a condition over the final state. tools/plan-check.js verifies, on every walk that reaches CH24:
//   exactly one anchor applies; exactly one relationship passage applies; exactly one passage per patient and donor applies;
//   and every passage applies on at least one walk (so none is unwritable dead weight).
"use strict";

// ---------------------------------------------------------------- the six families (eight with END_F's three)
const endings = [
  { id: "A", name: "The Shared Return", needs: "Distributed bridge ready (plan_full, materials 3, volunteers >= 6, all consents); Mercy House cooperating; no disruption; I choose accountable institutional cooperation.",
    core: "All three patients survive and all three donors are freed. The operation closes. A governed recovery program. Institutional wrongdoing addressed explicitly." },
  { id: "B", name: "A City of Witnesses", needs: "Distributed bridge ready; Eastbank and the Regent cooperating; no disruption; I choose coalition custody of the evidence.",
    core: "All six survive; donors freed; communities build their own recovery and accountability. Disclosure chosen separately; never outs a romance." },
  { id: "C", name: "The Long Recovery", needs: "Interim bridge validated with >= 3 volunteers and consents (or the full plan degraded by a disruption); no settlement with Armand.",
    core: "Donors freed; all patients survive, with a long recovery, care rotas, lost wages and a timetable. The ring ends." },
  { id: "D", name: "The Private Settlement", needs: "Interim bridge ready; I negotiated or arranged monitored cooperation with Armand in CH19, with leverage.",
    core: "Captives freed, patients survive; Damian's operation ends; Armand keeps specified influence and limited protection. A compromise with lasting cost. No new captive replaces an old one." },
  { id: "E", name: "The Severed Bond", needs: "Always available: I choose to free the donors without a continuing bridge, with the cost plainly established.",
    core: "Eamon, Hugo and Clive survive and regain autonomy; Quentin, Silas and Felix die. The operation is stopped. Grief, accountability and the donors' perspectives get full scenes. No surviving Quentin romance." },
  { id: "F_Q", name: "What We Could Save: Quentin", needs: "Single-pair technique demonstrated (or capacity reduced to one by a CH21 disruption); I choose Quentin.",
    core: "All three donors freed. Quentin survives; Silas and Felix die." },
  { id: "F_S", name: "What We Could Save: Silas", needs: "As F_Q; I choose Silas.", core: "All three donors freed. Silas survives; Quentin and Felix die." },
  { id: "F_F", name: "What We Could Save: Felix", needs: "As F_Q; I choose Felix.", core: "All three donors freed. Felix survives; Quentin and Silas die." }
];

// Culprit and accountability tuples, fixed per ending (the prose may never contradict them). Set in CH22.
const tuples = require("./scenes/ch22.js").TUPLES;

// ---------------------------------------------------------------- CH24 passages
const P = [];
function passage(slot, id, when, summary) { P.push({ slot, id, when, summary }); }

// 1. anchors, one per ending
passage("anchor", "ANC_A", 'ending = "A"', "Mercy House's recovery wing, a year on: a plaque, a board meeting I'm late for, a program with rules because we made it have them.");
passage("anchor", "ANC_B", 'ending = "B"', "Eastbank's long table, a year on: the coalition's anniversary dinner, three copies of the evidence in three safes, and a toast nobody can finish.");
passage("anchor", "ANC_C", 'ending = "C"', "The Okafors' workroom, a year on: the recovery timetable finally taken down off the wall, one pin at a time.");
passage("anchor", "ANC_D", 'ending = "D"', "Briar Heights, a year on: Armand's foundation funds a clinic with his name on it. I walk past it every week and don't go in.");
passage("anchor", "ANC_E", 'ending = "E"', "Hillview Cemetery, a year on: three graves in a row, and three living men who come every month and bring each other coffee.");
passage("anchor", "ANC_FQ", 'ending = "F_Q"', "Riverside Steps, a year on: Quentin, alive, late, carrying two coffees and two names he says out loud every day.");
passage("anchor", "ANC_FS", 'ending = "F_S"', "Lyle's Bakery at four in the morning, a year on: Silas at the ovens, Otis retired to a chair by the door.");
passage("anchor", "ANC_FF", 'ending = "F_F"', "Southmere Cinema, a year on: the premiere of Felix's film, with two names in the dedication.");

// 2. patients and donors, each by his own compatible passage
for (const [who, name] of [["quentin", "Quentin"], ["silas", "Silas"], ["felix", "Felix"]]) {
  passage("p_" + who, who.toUpperCase() + "_ALIVE", `alive_${who}`, `${name}, a year on: the life he chose, off the bridge, cold hands in winter and nothing else.`);
  passage("p_" + who, who.toUpperCase() + "_DEAD", `not(alive_${who})`, `${name}: where he's buried, who visits, what he wanted, said out loud.`);
}
for (const [who, name] of [["eamon", "Eamon"], ["hugo", "Hugo"], ["clive", "Clive"]]) {
  passage("p_" + who, who.toUpperCase() + "_PAID", `donors_freed and (ending = "D")`, `${name}: compensated, and bound by what he signed; what he does with the money, and what he doesn't say.`);
  passage("p_" + who, who.toUpperCase() + "_FREE", `donors_freed and (ending != "D")`, `${name}: his own year, his anger, his work, whether he ever wants to hear the word 'link' again.`);
}

// 3. the relationship (or the chosen single life); Quentin's romance only if he lived
const LEADS = ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben"];
for (const l of LEADS) {
  const alive = l === "quentin" ? " and alive_quentin" : "";
  passage("rel", `REL_${l.toUpperCase()}_TOGETHER`, `(final_rel = "${l}") and (final_shape = "together")${alive}`, `${l}: together, privately and properly, a year on.`);
  passage("rel", `REL_${l.toUpperCase()}_DISTANCE`, `(final_rel = "${l}") and (final_shape = "distance")${alive}`, `${l}: together across distance or changed lives, on purpose.`);
  passage("rel", `REL_${l.toUpperCase()}_PARTED`, `(final_rel = "${l}") and (final_shape = "parted")${alive}`, `${l}: it mattered, it ended, and we both know why.`);
  passage("rel", `REL_${l.toUpperCase()}_FRIENDS`, `(final_rel = "${l}") and (final_shape = "friends")${alive}`, `${l}: the friendship, with its own payoff.`);
}
passage("rel", "REL_QUENTIN_GRIEF", '(final_rel = "quentin") and (final_shape = "grief")', "Quentin: grief, and what he'd have said about me grieving. Never his living portrait.");
passage("rel", "REL_SINGLE", '(final_rel = "single") or (final_rel = "")', "A single life, chosen: the knack, the city, the people, and me in the middle of it.");

// 4. supporting consequences (two or three are drawn from arcs this playthrough actually developed)
const arcs = [
  ["s01", "The print shop: Martin's decision, a year on."], ["s02", "Nolan's course, a year on."], ["s03", "Ellis's placement, a year on."],
  ["s04", "Micah's work and the Serrano household, a year on."], ["s05", "Dominic's music, a year on."], ["s06", "Switchyard, a year on."],
  ["s07", "Mercy House's review, a year on."], ["s08", "Wesley's room, a year on."], ["s09", "The response service, a year on."],
  ["s10", "The night rota, a year on."], ["s11", "Winton Court's tenants, a year on."], ["s12", "Felix's film and Milo's documentary, a year on."],
  ["s13", "Will and Isaac, a year on."], ["s14", "The crossing succession, a year on."], ["s15", "Lyle's Bakery, a year on."], ["s16", "The Regent, a year on."]
];
for (const [a, text] of arcs) passage("conseq", "CONSEQ_" + a.toUpperCase(), `${a} != ""`, text);

// 5. final image
passage("final", "FIN_TOGETHER", '(final_shape = "together") or (final_shape = "distance")', "The knack reads a room with him in it, and for the first time, with me in it too.");
passage("final", "FIN_OTHER", '(final_shape != "together") and (final_shape != "distance")', "The knack reads the whole city from the Riverside Steps, and, for the first time, me.");

module.exports = { endings, tuples, passages: P };
