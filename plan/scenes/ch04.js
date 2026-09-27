// CH04 — People Who Know. Tue 1 Sep evening → Thu 3 Sep (bible Days 3–5).
// Purpose: the supernatural premise; Adrian/Reuben (Mercy House) and Gideon/Dominic (the Regent); competing explanations.
// Two orders (Mercy House first, or the Regent first) converge at the Truss Road Diner with a reason to test the token.
"use strict";
module.exports = [
  {
    id: "CH04.CHOICE.01", date: "2026-09-01", time: "20:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Tuesday night. I can't sit still.",
    choices: [
      { id: "a", text: "Go back to the lane. Whatever happened there left something.", type: "structural", set: { ch04_first: "mercy" }, to: "CH04.MERCY.01" },
      { id: "b", when: "(ch03_way = \"wait\") or (ch03_way = \"together\")", text: "Answer Quentin's text. Meet the brother.", type: "structural", set: { ch04_first: "regent" }, to: "CH04.REGENT.01" },
      { id: "c", when: "ch03_way = \"alone\"", text: "Stay in. Try to sleep. (Someone rings the shop bell at eleven.)", type: "structural", set: { ch04_first: "regent" }, to: "CH04.REGENT.01" }
    ]
  },

  // ------------------------------------------------------------ Mercy House first
  {
    id: "CH04.MERCY.01", date: "2026-09-01", time: "22:30", place: "P13", cast: ["MC", "C01", "C08"], kind: "branch", when: "ch04_first = \"mercy\"",
    purpose: "Two men in the rear lane with a lamp that burns a colour lamps don't burn. Adrian, compact and precise, telling me it's a closed scene in a voice that expects to be obeyed. Reuben, big and quiet, looking at my eyes the way paramedics do. They're reading a trace of what flared here on Saturday.",
    set: { st_adrian: 1, st_reuben: 1, know_super: true },
    choices: [
      { id: "a", text: "Tell them exactly what I saw. All of it except the part I felt.", type: "relational", set: { st_reuben: "+1" } },
      { id: "b", text: "Tell them what I saw, and that I felt him die, and felt something catch him.", type: "relational", set: { gift_mercy: true, gift_adrian: true, gift_reuben: true, st_reuben: "+1" } },
      { id: "c", text: "Say I was looking for a lost earring. Watch Adrian not believe me.", type: "expressive", set: { hurt_adrian: 1 } },
      { id: "d", when: "cuff_button", text: "Show them the brass button I tore off his sleeve.", type: "investigative", set: { button_shown: true },
        notes: "Adrian goes white: Mercy House issue, an old pattern. He suspects his own house, and me. Resolved when Damian is identified: a former warden in an old jacket." }
    ],
    next: "CH04.MERCY.02"
  },
  {
    id: "CH04.MERCY.02", date: "2026-09-01", time: "23:40", place: "P01", cast: ["MC", "C01", "C08", "C17", "C18"], kind: "branch", when: "ch04_first = \"mercy\"",
    purpose: "Mercy House: a former hospital with a kitchen that never closes. Victor Keene holding court with a braced arm and a better version of every story. Commander Orrell passing through, listening without interrupting. The premise, over toast at midnight: wardens, the Regent's vampires, Eastbank's families, spell-workers, the Marches. Adrian wants to put me in a car home and a file drawer. How do I take it?",
    set: { know_wardens: true, know_vampires: true, know_wolves: true, know_spell: true, know_marches: true, fr_victor: 1 },
    choices: [
      { id: "a", text: "Disagree with Adrian, to his face, and give my reasons. Calmly. Honestly.", type: "relational", set: { b_adrian_disagree: true, st_adrian: 2, nerve: "+2" } },
      { id: "b", text: "Let him handle it. He clearly knows what he's doing.", type: "relational", set: { st_adrian: 2 } },
      { id: "c", text: "Ask Reuben what he actually thinks happened to Quentin.", type: "investigative", set: { st_reuben: "+1", people: "+2" } }
    ],
    next: "CH04.MERCY.03"
  },
  {
    id: "CH04.MERCY.03", date: "2026-09-02", time: "21:30", place: "P14", cast: ["MC", "C01", "C08", "C32", "C04", "C31"], kind: "branch", when: "ch04_first = \"mercy\"",
    purpose: "Wednesday night. Mercy House's working theory is a vampire turning gone wrong, and Quentin's brother is a vampire, so Adrian and Reuben go to the Regent to ask. I go too. An old cinema with apartments where the circle seats were. Lucien Arnaud sets the rules for the conversation. Gideon Shaw delivers his fear like an instruction, and the knack reads it as guilt. Dominic Bell, who used to play Switchyard, defuses the room with a joke about the popcorn machine.",
    set: { st_dominic: 1, fr_gideon: 1, fr_lucien: 1, know_dominic_vamp: true, misread_gideon: true },
    choices: [
      { id: "a", text: "\"You stopped playing. We all wondered.\" Talk to Dominic like it's a year ago.", type: "relational", set: { b_dominic_normal: true, st_dominic: 2 } },
      { id: "b", text: "Watch Gideon. The knack says he's guilty of something.", type: "investigative", set: { suspect_gideon: true } }
    ],
    next: "CH04.DINER.01"
  },

  // ------------------------------------------------------------ the Regent first
  {
    id: "CH04.REGENT.01", date: "2026-09-01", time: "23:00", place: "P02", cast: ["MC", "C32", "C04"], kind: "branch", when: "ch04_first = \"regent\"",
    purpose: "On the print shop step: Gideon Shaw, who says 'You were in the lane. Come with me' like an order, and whose fear the knack reads as guilt. Behind him, with his hands in the pockets of an old jumper, Dominic Bell, who used to play Switchyard before he vanished last summer. Dominic says, 'He means please.'",
    set: { st_dominic: 1, fr_gideon: 1, misread_gideon: true },
    choices: [
      { id: "a", text: "Go with them.", type: "relational", set: { nerve: "+2" } },
      { id: "b", text: "\"Say it here. On the step. Where Martin can hear me shout.\"", type: "expressive", set: { people: "+1" } }
    ],
    next: "CH04.REGENT.02"
  },
  {
    id: "CH04.REGENT.02", date: "2026-09-02", time: "00:30", place: "P14", cast: ["MC", "C32", "C04", "C31", "C33"], kind: "branch", when: "ch04_first = \"regent\"",
    purpose: "The Regent: an old cinema turned home. A film running for nobody in the auditorium. Rafi in scrubs, eating cereal before a night shift. Lucien Arnaud, very old and very courteous. The premise, from the vampires' side: turning, hours, blood by arrangement, the other communities, the wardens who watch them. Gideon's real worry: his brother came back wrong, and it isn't vampirism. He'd know.",
    set: { know_super: true, know_vampires: true, know_wardens: true, know_wolves: true, know_spell: true, know_marches: true, know_dominic_vamp: true, fr_lucien: 1, fr_rafi: 1 },
    choices: [
      { id: "a", text: "\"You stopped playing. We all wondered.\" Talk to Dominic like it's a year ago.", type: "relational", set: { b_dominic_normal: true, st_dominic: 2 } },
      { id: "b", text: "Tell Dominic about the knack. He's the only person here who looks as out of place as I feel.", type: "relational", set: { gift_dominic: true, st_dominic: "+1" } },
      { id: "c", text: "Press Gideon. The knack says he's guilty.", type: "investigative", set: { suspect_gideon: true, fr_gideon: "-1" } }
    ],
    next: "CH04.REGENT.03"
  },
  {
    id: "CH04.REGENT.03", date: "2026-09-02", time: "22:00", place: "P14", cast: ["MC", "C32", "C01", "C08", "C31"], kind: "branch", when: "ch04_first = \"regent\"",
    purpose: "Wednesday night the wardens come to the Regent: Adrian, all procedure, and Reuben, who looks at Quentin's brother with more sympathy than his partner. Mercy House's theory is a turning gone wrong. Lucien sets the rules. Adrian wants my statement on the record; he wants the witness out of the way.",
    set: { st_adrian: 1, st_reuben: 1 },
    choices: [
      { id: "a", text: "Disagree with Adrian, to his face, and give my reasons.", type: "relational", set: { b_adrian_disagree: true, st_adrian: 2, nerve: "+2" } },
      { id: "b", text: "Give the statement his way. He's not wrong that I'm out of my depth.", type: "relational", set: { st_adrian: 2 } },
      { id: "c", text: "Tell Reuben what I felt when Quentin died.", type: "relational", set: { gift_reuben: true, gift_mercy: true, st_reuben: 2 } }
    ],
    next: "CH04.DINER.01"
  },

  // ------------------------------------------------------------ converge
  {
    id: "CH04.DINER.01", date: "2026-09-03", time: "22:15", place: "P18", cast: ["MC", "C01", "C08", "C32", "C04", "C07"], kind: "common",
    purpose: "Thursday, the Truss Road Diner: neutral ground because it belongs to a neighbourhood, not a species. Quentin comes after his shift and sits with his back to the wall. The explanations on the table: a turning gone wrong (Mercy House); something else entirely (Gideon); vital signs that aren't a vampire's (Reuben). The only physical thing any of us has is the scorched tin charm on Quentin's keys. We need to know what's holding him up, and there are two places that can tell us.",
    choices: [
      { id: "a", text: "\"It's not a turning. Something's holding him from outside.\"", type: "expressive", set: { theory: "outside" } },
      { id: "b", text: "\"I don't know. I just know it isn't what anyone's said.\"", type: "expressive", set: { theory: "unknown" } },
      { id: "c", text: "Ask Quentin what he wants to happen, before anyone decides for him.", type: "relational", set: { b_quentin_consent: true, st_quentin: "+1" } }
    ],
    next: "CH05.CHOICE.01"
  }
];
