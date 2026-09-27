// CH19 — The Offer. Wed 3 – Sat 6 Mar (bible Day 36).
// Purpose: confront the patron's proposal; the deadline becomes known (three routes: Armand, the physician's notes, or the
// patients' own summons); decide how evidence and accountability will be handled: refuse, negotiate, or monitored cooperation.
"use strict";
module.exports = [
  {
    id: "CH19.CARD.01", date: "2027-03-03", time: "09:00", place: "P02", cast: ["MC", "C10"], kind: "common",
    purpose: "The thaw's first real day: water running in every gutter. Martin brings up the post: a heavy cream card, hand-addressed, for Saturday evening at Sorrell House in Briar Heights. And three texts in an hour from Quentin, Silas and Felix: each has had a message from 'the clinic': his follow-up is moved to Saturday 13 March, eleven at night, and a car will collect him.",
    set: { summoned: true, know_deadline: true },
    choices: [
      { id: "a", text: "Go to Sorrell House. Hear what he wants.", type: "structural", set: {} }
    ],
    next: "CH19.HOUSE.01"
  },
  {
    id: "CH19.HOUSE.01", date: "2027-03-06", time: "19:00", place: "P37", cast: ["MC", "C44"], kind: "common",
    purpose: "Sorrell House: beautiful, diminished, a house where one door upstairs is always shut. Armand receives me alone. He knows about the donors now; August told him when he could no longer avoid it, and he has kept paying anyway. His offer: let Damian make one attempt, on the fourteenth, the tenth anniversary, for Octavian. Afterwards he will fund everything, free everyone, confess to anyone I choose. The knack takes his grief like a hand on my throat.",
    choices: [
      { id: "a", when: "e07", text: "Show him the old report: forty-eight hours, or nothing. It was never possible. August knew.", type: "investigative", set: { e15: true, e15_src: "report", armand_broken: true } },
      { id: "b", when: "e07 and (people >= 45)", text: "Tell him about Quarry Lake: what I felt at the cliff, and why no method brings back a boy after three days.", type: "relational", set: { e15: true, e15_src: "report", armand_broken: true, armand_trust: true } },
      { id: "c", text: "Tell him no, and that I'm sorry for his son.", type: "relational", set: { armand_hard: true } }
    ],
    next: "CH19.ANSWER.01"
  },
  {
    id: "CH19.ANSWER.01", date: "2027-03-06", time: "20:30", place: "P37", cast: ["MC", "C44"], kind: "common",
    purpose: "Whatever his face does now, the decision is mine: what we agree, what stays contested, and who answers for it.",
    choices: [
      { id: "a", text: "Refuse. No terms. We do this without him, and he answers for it after.", type: "structural", set: { ch19_answer: "refuse" } },
      { id: "b", when: "armand_broken and (e16 or e11 or e15)", text: "Negotiate: he withdraws Damian's funding and his protection tonight, gives us Pump Nine's keys, and accepts written terms. In return, limited privacy.", type: "structural", set: { ch19_answer: "negotiate", acc_pump: true } },
      { id: "c", when: "armand_broken and (ally_mercy or ally_court) and (e16 or e11 or e15)", text: "Monitored cooperation: he helps, openly, under Mercy House or the court, with the evidence held by someone else.", type: "structural", set: { ch19_answer: "monitor", acc_pump: true } }
    ],
    next: "CH19.AFTER.01"
  },
  {
    id: "CH19.AFTER.01", date: "2027-03-06", time: "23:30", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Home. The date on the wall now: Saturday 13 March, eleven at night, a car for each patient; the donors moved to Pump Nine for a dawn 'consolidation' that would drain them all at once. If Armand walked out of that room still hoping, he may warn Damian. If he walked out broken, he may simply stop paying. We have one week.",
    next: "CH20.BRIEF.01"
  }
];
