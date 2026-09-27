// CH03 — Double Shift. Tue 1 Sep (bible Day 3).
// Purpose: recognise Quentin alive; first direct contradiction.
"use strict";
module.exports = [
  {
    id: "CH03.RUN.01", date: "2026-09-01", time: "07:10", place: "P02", cast: ["MC", "C10"], kind: "common",
    purpose: "The Tuesday delivery run: menus for a café in Northline called Double Shift. Peter Laird's lanyard said Double Shift. I take the box from Martin before he can offer.",
    set: { s01: "intro" },
    next: "CH03.CAFE.01"
  },
  {
    id: "CH03.CAFE.01", date: "2026-09-01", time: "07:30", place: "P26", cast: ["MC", "C07", "C11"], kind: "common",
    purpose: "Quentin behind the counter, grey under the brown and alive, making a flat white. The knack hits me in the doorway: the same doubled pulse, a rope running out of his chest and away through the wall to somewhere I can't see. He hasn't seen me yet.",
    next: "CH03.ANSEL.01"
  },
  {
    id: "CH03.ANSEL.01", date: "2026-09-01", time: "07:40", place: "P26", cast: ["MC", "C06", "C11"], kind: "common",
    purpose: "While I stand there holding a box of menus, a young man in a formal collar asks Peter about a regular: 'Eamon Kerr, a courier. He comes in every Friday. He didn't.' Peter shrugs. The young man turns to me with terrible courtesy: 'Forgive me. Do you know him?' I don't. He leaves a card with only a name on it, Ansel Marr, and very strong opinions about the pastries.",
    choices: [
      { id: "a", text: "Take the card. Ask why a courier would go missing.", type: "relational", set: { st_ansel: 2, eamon_heard: true } },
      { id: "b", text: "Take the card and say nothing.", type: "expressive", set: { st_ansel: 1, eamon_heard: true } }
    ],
    next: "CH03.CAFE.02"
  },
  {
    id: "CH03.CAFE.02", date: "2026-09-01", time: "07:45", place: "P26", cast: ["MC", "C07", "C11"], kind: "common",
    purpose: "Quentin sees me. For one second his face does something I will think about for weeks. How do I do this?",
    choices: [
      { id: "a", text: "Go straight to the counter. Alone.", type: "structural", set: { ch03_way: "alone" }, to: "CH03.ALONE.01" },
      { id: "b", when: "(ch02_report = \"nolan\") or (ch01_saw = \"help\")", text: "Text Nolan. Do this together.", type: "structural", set: { ch03_way: "together" }, to: "CH03.TOGETHER.01" },
      { id: "c", text: "Order a coffee. Sit. Wait for the end of his shift.", type: "structural", set: { ch03_way: "wait" }, to: "CH03.WAIT.01" }
    ]
  },
  {
    id: "CH03.ALONE.01", date: "2026-09-01", time: "07:50", place: "P26", cast: ["MC", "C07", "C11"], kind: "branch", when: "ch03_way = \"alone\"",
    purpose: "\"You were in the lane.\" He shuts it down in front of Peter, loud and practical, and his fear comes off him like cold water. But he says 'you were there' before he can stop it, and his keys are on the counter: a small tin charm, scorched on one side. I see it clearly enough to draw it.",
    set: { st_quentin: 2, hurt_quentin: 1, e03: true, e03_src: "sighting" },
    gains: ["e03"],
    next: "CH03.NIGHT.01"
  },
  {
    id: "CH03.TOGETHER.01", date: "2026-09-01", time: "08:10", place: "P26", cast: ["MC", "C05", "C07", "C11"], kind: "branch", when: "ch03_way = \"together\"",
    purpose: "Nolan arrives with bed hair and orders the most complicated drink on the board to keep Quentin at the machine. He gets him talking about being 'off sick': a private clinic, very good, very quiet, they said he was lucky. Peter overhears and adds that the clinic sent a car. Later Quentin will feel ganged up on; right now, it's a lead.",
    set: { st_quentin: 2, st_nolan: "+1", clinic_lead: true },
    next: "CH03.NIGHT.01"
  },
  {
    id: "CH03.WAIT.01", date: "2026-09-01", time: "14:05", place: "P25", cast: ["MC", "C07"], kind: "branch", when: "ch03_way = \"wait\"",
    purpose: "Six hours and four coffees. Martin's other deliveries go out late (he'll mention it). At the bus stop outside Northline Station, Quentin lets me walk with him. He remembers dying. He was told to keep quiet for his own safety. He shows me the token on his keys, scorched on one side, and lets me photograph it.",
    set: { st_quentin: 3, e03: true, e03_src: "photo", fr_martin: "-1" },
    gains: ["e03"],
    next: "CH03.NIGHT.01"
  },
  {
    id: "CH03.NIGHT.01", date: "2026-09-01", time: "19:30", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The first direct contradiction, stated plainly to myself: I watched him die. He made my coffee. If Quentin gave me his number (at the bus stop, or through Nolan), a text arrives from it: 'my brother wants to meet you. he's not a people person. sorry in advance.' Tonight I can go back to the lane, or go where the text says.",
    next: "CH04.CHOICE.01"
  }
];
