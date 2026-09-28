// CH05 — What the Body Keeps. Fri 4 Sep (bible Day 6).
// Purpose: external support becomes a credible hypothesis. Hospital route or restoration route.
// The route not visited gets a later corroboration scene (restoration → CH08 hospital; hospital → CH06 restoration).
"use strict";
module.exports = [
  {
    id: "CH05.CHOICE.01", date: "2026-09-04", time: "09:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Friday. Two offers from the diner: Reuben can get Quentin into the hospital lab after Rafi's shift starts, quietly; or Dominic knows a restorer on University Hill who works with protective objects, and whose son is 'unbearably good at it'.",
    choices: [
      { id: "a", text: "The hospital. Measurements. Something on paper.", type: "structural", set: { ch05_route: "hospital" }, to: "CH05.HOSPITAL.01" },
      { id: "b", text: "The restorer. The charm is the only thing we can hold.", type: "structural", set: { ch05_route: "restore" }, to: "CH05.RESTORE.01" }
    ]
  },

  // ------------------------------------------------------------ hospital (the bible's example scene)
  {
    id: "CH05.HOSPITAL.01", date: "2026-09-04", time: "21:00", place: "P23", cast: ["MC", "C08", "C33", "C42", "C13", "C07"], kind: "branch", when: "ch05_route = \"hospital\"",
    purpose: "Calder General's lab after hours. Nabil on reception, who notices bluffing about procedure. Reuben, Rafi, and Ilyas Qureshi, a lab scientist who separates observation from explanation and gets visibly frustrated when others don't. Quentin agrees to the tests on his own terms. The finding: he is neither ordinarily healed nor newly turned. Something outside him is supplying him. It can't say who or where.",
    set: { e05: true, e05_src: "hospital", st_reuben: "+1", fr_rafi: "+1", fr_ilyas: 1, fr_nabil: 1 },
    gains: ["e05"],
    choices: [
      { id: "a", text: "Explain to Reuben what I see when I look at Quentin: the rope.", type: "relational", set: { gift_reuben: true, gift_mercy: true, b_reuben_explain: true, st_reuben: "+1" } },
      { id: "b", text: "Ask Ilyas to write up his own account, independently, in his own words.", type: "investigative", set: { e05_c: true, fr_ilyas: "+1" } },
      { id: "c", text: "Focus on Quentin: what has he been told, and who gets to see these results?", type: "relational", set: { b_quentin_consent: true, st_quentin: "+1" } }
    ],
    next: "CH05.HOSPITAL.02"
  },
  {
    id: "CH05.HOSPITAL.02", date: "2026-09-04", time: "23:30", place: "P23", cast: ["MC", "C07"], kind: "branch", when: "ch05_route = \"hospital\"",
    purpose: "The hospital car park, level three, the city lit orange below. Quentin smokes a cigarette he doesn't want. He wants to qualify for emergency-service work. He wants to not be a case. He asks me something practical instead of anything that matters, and I answer it.",
    choices: [
      { id: "a", text: "Tell him he doesn't owe anyone his story. Including me.", type: "relational", set: { st_quentin: "+1" } },
      { id: "b", text: "Ask him who gave him the charm.", type: "investigative", set: { course_lead: true },
        notes: "A first-aid course at Southmere Recreation Centre in August; the instructor gave everyone a little 'lucky' token. He can't remember the instructor's name; it was on a form." }
    ],
    next: "CH05.NIGHT.01"
  },

  // ------------------------------------------------------------ restoration
  {
    id: "CH05.RESTORE.01", date: "2026-09-04", time: "14:30", place: "P20", cast: ["MC", "C03", "C37", "C38", "C07"], kind: "branch", when: "ch05_route = \"restore\"",
    purpose: "Okafor Restoration: a front room for clients, workrooms that smell of size glue and ozone. Chukwudi explains patiently and precisely. Ellis, his son, is elegant, quick and much better at making the visit easy than anyone should have to be. Isaac interrupts with a project. Dominic phoned ahead last night; he can't come in daylight, and he hates that he can't. The charm is a protective token of a known type, modified by someone skilled; and slow testing, over hours, shows a tie running out of Quentin that Chukwudi can measure and I can see.",
    set: { st_ellis: 2, b_ellis_meet: true, fr_chukwudi: 1, fr_isaac: 1, e03: true, e03_src: "ellis", e05: true, e05_src: "restore" },
    gains: ["e03", "e05"],
    choices: [
      { id: "a", text: "Tell them I can see the tie. Watch Ellis stop performing for a second.", type: "relational", set: { gift_ellis: true } },
      { id: "b", text: "Ask Ellis how he'd have done the modification, if he were the one doing it.", type: "investigative", set: { e03_c: true, people: "+2" } },
      { id: "c", text: "Keep out of the way. Watch how they work.", type: "expressive", set: { craft: "+2" } }
    ],
    next: "CH05.RESTORE.02"
  },
  {
    id: "CH05.RESTORE.02", date: "2026-09-04", time: "20:15", place: "P20", cast: ["MC", "C03", "C37", "C38"], kind: "branch", when: "ch05_route = \"restore\"",
    purpose: "The family kitchen upstairs, much less elegant: Ellis irritable about the washing-up, arguing ridiculously with Isaac about a toaster. Chukwudi shows me the shop's error book: every mistake the family has made, written down honestly, including one of his own from years ago. 'A record should preserve what went wrong.' (Seeds E08 and E10.)",
    set: { error_book: true, fr_chukwudi: "+1" },
    choices: [
      { id: "a", text: "Help Ellis with the washing-up and let him complain.", type: "relational", set: { b_ellis_offstage: true, st_ellis: 3 } },
      { id: "b", text: "Ask Chukwudi about the mistake in the book.", type: "relational", set: { fr_chukwudi: "+1" } }
    ],
    next: "CH05.NIGHT.01"
  },

  // ------------------------------------------------------------ both
  {
    id: "CH05.NIGHT.01", date: "2026-09-04", time: "23:55", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Home. The knack costs me for the day: a headache like a thumb behind the eye. External support is now a hypothesis with a number or a measurement attached. Something is holding Quentin up from outside. What? Who pays for it? A text from Nolan, who has noticed I'm never around.",
    choices: [
      { id: "a", text: "Text Nolan back properly. Make a plan for the weekend and keep it.", type: "relational", set: { b_nolan_kept: true } },
      { id: "b", text: "\"Sorry. Busy week.\" He'll understand. (He'll understand less each time.)", type: "relational", set: { hurt_nolan: "+1" } }
    ],
    next: "CH06.WEEKS.01"
  }
];
