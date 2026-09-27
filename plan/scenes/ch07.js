// CH07 — An Evening Already Promised. Fri 2 – Sat 3 Oct.
// Purpose: ordinary relationships and one substantial commitment. Hugo established before he disappears.
// Nolan turns twenty; the party was promised weeks ago. Other invitations: the Serrano table, the university crowd.
"use strict";
module.exports = [
  {
    id: "CH07.HOME.01", date: "2026-10-02", time: "12:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Yesterday the bank called in the print shop's overdraft. Martin is doing sums on the back of a proof sheet and pretending he isn't. Will, who is seventeen and not stupid, has noticed. What do I do?",
    choices: [
      { id: "a", text: "Put my savings on the counter. It's not much. It's not nothing.", type: "relational", set: { s01: "fore", fr_martin: "+1", savings_given: true } },
      { id: "b", text: "Offer to take on more shop shifts, and mean the hours.", type: "relational", set: { s01: "fore", fr_martin: "+1", shop_hours: true } },
      { id: "c", text: "Tell Martin to ask his biggest client for the money in person, and go with him.", type: "relational", set: { s01: "fore", nerve: "+2", people: "+2" } }
    ],
    next: "CH07.CHOICE.01"
  },
  {
    id: "CH07.CHOICE.01", date: "2026-10-02", time: "17:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Tonight: Nolan's twentieth, promised three weeks ago. And two other doors open the same night.",
    choices: [
      { id: "a", text: "Nolan's party. I promised.", type: "structural", set: { ch07_evening: "nolan" }, to: "CH07.NOLAN.01" },
      { id: "b", when: "st_micah >= 1", text: "Micah's family dinner in Eastbank. He asked twice.", type: "structural", set: { ch07_evening: "serrano" }, to: "CH07.SERRANO.01" },
      { id: "c", when: "st_ellis >= 2", text: "The open studio night on University Hill. Ellis said I might like it.", type: "structural", set: { ch07_evening: "uni" }, to: "CH07.UNI.01" }
    ]
  },

  // ------------------------------------------------------------ Nolan's party
  {
    id: "CH07.NOLAN.01", date: "2026-10-02", time: "21:00", place: "P28", cast: ["MC", "C05", "C11", "C12", "C35", "C57"], kind: "branch", when: "ch07_evening = \"nolan\"",
    purpose: "Laird's flatshare: three bedrooms, one bathroom, twenty people. Peter hosting as if it's a job interview; Owen quietly protecting the good glasses; Milo filming the cake. Hugo Naranjo, a depot mechanic from Owen's rota, is arguing cheerfully about a hinge he fixed wrong and his application for a permanent post. Nolan is so pleased I came that he pretends not to be.",
    set: { hugo_met: true, fr_hugo: 1, fr_peter: 1, fr_owen: "+1", fr_milo: 1, b_nolan_kept: true },
    choices: [
      { id: "a", text: "Talk to Hugo. He's the only person here happier than Nolan.", type: "relational", set: { fr_hugo: "+1" } },
      { id: "b", text: "Stick with Nolan. It's his night.", type: "relational", set: { st_nolan: "+1" } }
    ],
    next: "CH07.NOLAN.02"
  },
  {
    id: "CH07.NOLAN.02", date: "2026-10-02", time: "23:00", place: "P28", cast: ["MC", "C05", "C04", "C35"], kind: "branch", when: "ch07_evening = \"nolan\"",
    purpose: "Dominic arrives late, after sunset of course, because Milo asked him to. Someone hands him a guitar. He hasn't played for anyone in a year. The room goes quiet in the good way.",
    choices: [
      { id: "a", when: "st_dominic >= 2", text: "Sing the harmony. Badly. Make it easy for him to keep going.", type: "relational", set: { b_dominic_music: true, st_dominic: 3, s05: "intro" } },
      { id: "b", text: "Just listen.", type: "expressive", set: { s05: "intro" } }
    ],
    next: "CH07.NOLAN.03"
  },
  {
    id: "CH07.NOLAN.03", date: "2026-10-03", time: "01:45", place: "P28", cast: ["MC", "C05"], kind: "branch", when: "ch07_evening = \"nolan\"",
    purpose: "The balcony, two chairs, the depot lights. Nolan's course application is open on his phone. He bumps my shoulder the way he's done since we were sixteen, and this time he doesn't take it back. The knack can't tell me a thing about what he means. It never can, with me.",
    choices: [
      { id: "a", when: "hurt_nolan < 2", text: "Let it mean something. Stay against his shoulder.", type: "relational", set: { b_nolan_birthday: true, st_nolan: 4, s02: "fore" } },
      { id: "b", text: "Tell him to send the application. Tonight. He's good enough.", type: "relational", set: { s02: "fore", nolan_applied: true } },
      { id: "c", text: "Make a joke. Go back inside before it becomes anything.", type: "expressive", set: { s02: "fore" } }
    ],
    next: "CH07.MORNING.01"
  },

  // ------------------------------------------------------------ the Serrano table
  {
    id: "CH07.SERRANO.01", date: "2026-10-02", time: "19:00", place: "P07", cast: ["MC", "C02", "C25", "C26", "C27", "C29", "C28", "C57"], kind: "branch", when: "ch07_evening = \"serrano\"",
    purpose: "Serrano Yard: the workshop below, the family above, a table built out of two tables. Ernesto at the head, all concrete proposals; Leandro making jokes; cousin Tomas favouring his left shoulder; Wesley, newly arrived and prickly, hearing pity where there isn't any. Pavel brings Hugo, whom he's recommended for depot work, to borrow a tool, and Ernesto makes him stay and eat. Micah has saved me the seat beside him without saying so.",
    set: { hugo_met: true, fr_hugo: 1, fr_ernesto: 1, fr_leandro: 1, fr_wesley: 1, fr_pavel: "+1", b_micah_seat: true, st_micah: "+1", s04: "intro", s08: "intro" },
    choices: [
      { id: "a", text: "Talk to Wesley like he isn't a project.", type: "relational", set: { fr_wesley: "+1" } },
      { id: "b", text: "Ask Hugo about the depot job. He lights up.", type: "relational", set: { fr_hugo: "+1" } }
    ],
    next: "CH07.SERRANO.02"
  },
  {
    id: "CH07.SERRANO.02", date: "2026-10-02", time: "21:30", place: "P08", cast: ["MC", "C02", "C26", "C27"], kind: "branch", when: "ch07_evening = \"serrano\"",
    purpose: "The Eastbank Boxing Club after hours: a roof that leaks, a youth program on a shoestring, Leandro's grant application pinned to the wall. Micah mentions, too casually, an apprenticeship offer from a firm across the river. His family assumes he'll say no. So does he, out loud.",
    choices: [
      { id: "a", text: "Ask him what he wants. Not the family. Him.", type: "relational", set: { st_micah: "+1", s04: "fore" } },
      { id: "b", text: "Spar with Tomas. Notice the shoulder. Say nothing, yet.", type: "investigative", set: { nerve: "+2", tomas_injury: true } }
    ],
    next: "CH07.SERRANO.03"
  },
  {
    id: "CH07.SERRANO.03", date: "2026-10-03", time: "00:30", place: "P12", cast: ["MC", "C02"], kind: "branch", when: "ch07_evening = \"serrano\"",
    purpose: "The allotments at half past midnight, because Micah wanted to show me the family's patch and then didn't want to go home. He tells me what 'rough night' meant. He watches my face while he says it, ready to make it a joke.",
    set: { b_micah_wolf: true, know_micah_wolf: true, st_micah: 3 },
    choices: [
      { id: "a", text: "\"Okay.\" And stay, and ask the ordinary questions.", type: "relational", set: { people: "+1" } },
      { id: "b", text: "Tell him about the knack. Trade a secret for a secret.", type: "relational", set: { gift_micah: true } }
    ],
    next: "CH07.LATE.CHOICE"
  },

  // ------------------------------------------------------------ the university crowd
  {
    id: "CH07.UNI.01", date: "2026-10-02", time: "19:30", place: "P19", cast: ["MC", "C03", "C52", "C40", "C41"], kind: "branch", when: "ch07_evening = \"uni\"",
    purpose: "Open studio night in the arts buildings: plastic wine, loud opinions, Basil Duret lecturing a first-year about 'the material city'. Ellis, performing ease beautifully. A student filmmaker, Felix Brecht, filming everyone and seeing more than he lets on. Caspar Neri doing the lighting for free and complaining about it.",
    set: { fr_felix: 1, fr_caspar: 1, s03: "intro", s12: "intro" },
    choices: [
      { id: "a", text: "Let Ellis give me the tour and watch how he does it.", type: "relational", set: { st_ellis: "+1" } },
      { id: "b", text: "Talk to Felix about what he's filming. He's funny and nervous.", type: "relational", set: { fr_felix: "+1" } }
    ],
    next: "CH07.UNI.02"
  },
  {
    id: "CH07.UNI.02", date: "2026-10-02", time: "22:30", place: "P21", cast: ["MC", "C03", "C13", "C52"], kind: "branch", when: "ch07_evening = \"uni\"",
    purpose: "After-party in Bellweather Court's shared kitchen: Nabil cooking for twelve on a budget for two, Felix filming the pasta. Ellis mentions a placement in another city he hasn't told his father about.",
    set: { fr_nabil: "+1", s03: "fore" },
    next: "CH07.UNI.03"
  },
  {
    id: "CH07.UNI.03", date: "2026-10-03", time: "00:45", place: "P24", cast: ["MC", "C03"], kind: "branch", when: "ch07_evening = \"uni\"",
    purpose: "Observatory Hill Park: the little teaching dome, the city below. Ellis stops performing. He's irritable about his shoes and funny about Basil, and he asks me, for once, what I think.",
    choices: [
      { id: "a", when: "not(b_ellis_offstage)", text: "Tell him. And ask him the same back.", type: "relational", set: { b_ellis_offstage: true, st_ellis: 3 } },
      { id: "b", text: "Tell him about the knack, up here where nobody can hear.", type: "relational", set: { gift_ellis: true } },
      { id: "c", text: "Talk about the placement. He should take it.", type: "relational", set: { s03: "fore" } }
    ],
    next: "CH07.BUS.01"
  },
  {
    id: "CH07.BUS.01", date: "2026-10-03", time: "02:10", place: "P27", cast: ["MC", "C57"], kind: "branch", when: "ch07_evening = \"uni\"",
    purpose: "The night bus down the Hill. One other passenger: Hugo Naranjo in a depot hi-vis vest, on his way to a night shift, who talks the whole way about a permanent job he's applying for and a repair he's proud of. He gets off at the depot and waves.",
    set: { hugo_met: true, fr_hugo: 1 },
    next: "CH07.LATE.CHOICE"
  },

  // ------------------------------------------------------------ the promise
  {
    id: "CH07.LATE.CHOICE", date: "2026-10-03", time: "02:15", place: "P27", cast: ["MC"], kind: "conditional", when: "ch07_evening != \"nolan\"",
    purpose: "It's after two. Nolan's party will still be going, in the way Nolan's parties do.",
    choices: [
      { id: "a", text: "Go. Late is better than never. Probably.", type: "relational", set: { ch07_late: true }, to: "CH07.LATE.01" },
      { id: "b", text: "Text him happy birthday and go home.", type: "relational", set: { hurt_nolan: "+1" }, to: "CH07.MORNING.01" }
    ],
    next: "CH07.MORNING.01"
  },
  {
    id: "CH07.LATE.01", date: "2026-10-03", time: "02:50", place: "P28", cast: ["MC", "C05"], kind: "branch", when: "ch07_late",
    purpose: "Nolan on the stairs with a paper plate of cake he saved for me. He's glad and he's hurt and he's too tired to pick one.",
    choices: [
      { id: "a", text: "Apologise without an excuse.", type: "relational", set: { people: "+1" } },
      { id: "b", text: "Explain where I was. Some of it.", type: "relational", set: { hurt_nolan: "+1" } }
    ],
    next: "CH07.MORNING.01"
  },
  {
    id: "CH07.MORNING.01", date: "2026-10-03", time: "10:30", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Saturday morning above the shop: toast, a headache, Will's opinion of my face. Whatever I chose, I chose it; the night will be remembered by the people it happened to.",
    next: "CH08.NEWS.01"
  }
];
