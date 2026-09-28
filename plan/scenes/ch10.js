// CH10 — The Closed Program. Sat 7 – Sun 8 Nov (bible Day 19).
// Purpose: the earlier rescue work, its donor harm, the hard 48-hour limit, and Ruth Carrow, the sensitive who monitored
// the links. Records at Mercy House or testimony at Orchard House; each needs the other (or a later scene) to corroborate.
// Decide how to handle Orrell's concealment. The knack gets a name.
"use strict";
module.exports = [
  {
    id: "CH10.CHOICE.01", date: "2026-11-07", time: "09:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The program, seven years ago. Two places remember it: the Mercy House archive, if Florian will open it, or a former warden called Malcolm Tait who keeps a recovery house up on the ridge and was there when it failed.",
    choices: [
      { id: "a", when: "know_wardens", text: "The records. Florian, the archive, and whatever Orrell doesn't want read.", type: "structural", set: { ch10_way: "records" }, to: "CH10.RECORDS.01" },
      { id: "b", text: "The ridge. Reuben's driving up to Orchard House anyway.", type: "structural", set: { ch10_way: "orchard" }, to: "CH10.ORCHARD.01" }
    ]
  },

  // ------------------------------------------------------------ Mercy House records
  {
    id: "CH10.RECORDS.01", date: "2026-11-07", time: "14:00", place: "P01", cast: ["MC", "C22", "C01", "C23"], kind: "branch", when: "ch10_way = \"records\"",
    purpose: "The archive in Mercy House's old pathology wing. Florian asks everyone to separate what they know from what they infer. Half the program's file is here; the other half was 'transferred' to a destination nobody wrote down. What's left: an emergency method that held a dying person with a living donor's vitality; a donor injured when the link strained; a hard limit, forty-eight hours from death or nothing; and a monitor whose notes are in a different hand. 'R. Carrow — sensitive.' Kenji, fetching a crate, identifies the kind of token-work in the file as the kind on Quentin's keys. The staff list names a junior ritual physician: D. Holt.",
    set: { e07: true, e07_src: "records", gift_named: true, fr_florian: "+1", fr_kenji: 1, e03_c: true, damian_named: true, damian_program: true },
    gains: ["e07"],
    choices: [
      { id: "a", when: "st_adrian >= 2", text: "Work the file with Adrian: sequence, dates, names.", type: "relational", set: { b_adrian_procedure: true, st_adrian: 3 } },
      { id: "b", text: "Ask Florian about R. Carrow.", type: "relational", set: { carrow_file: true, fr_florian: "+1" } }
    ],
    next: "CH10.RECORDS.02"
  },
  {
    id: "CH10.RECORDS.02", date: "2026-11-07", time: "21:00", place: "P01", cast: ["MC", "C01"], kind: "branch", when: "ch10_way = \"records\"",
    purpose: "Mercy House roof, the city in lights, the cold coming off the river. Adrian, who has spent all day reading about an institution concealing a mistake, tells me about his own: the training report he wrote to cover Emmett's absence. It isn't evil. It's a lie, and it's his.",
    choices: [
      { id: "a", when: "st_adrian >= 3", text: "\"Then fix it. Tell them. I'll stand next to you when you do.\"", type: "relational", set: { b_adrian_report: true, st_adrian: 4, s07: "fore" } },
      { id: "b", when: "st_adrian >= 3", text: "\"It's Emmett's call, not yours. Ask him.\"", type: "relational", set: { b_adrian_report: true, st_adrian: 4, s07: "fore", adrian_asks_emmett: true } },
      { id: "c", text: "\"Everybody lies to protect someone.\" Let him off.", type: "relational", set: { s07: "intro" } }
    ],
    next: "CH10.ORRELL.01"
  },

  // ------------------------------------------------------------ Orchard House
  {
    id: "CH10.ORCHARD.01", date: "2026-11-07", time: "11:00", place: "P51", cast: ["MC", "C08", "C24"], kind: "branch", when: "ch10_way = \"orchard\"",
    purpose: "North Ridge in its last colour: an hour up the regional road in Reuben's car with the heater broken. Orchard House is a modest warden recovery retreat with a leaking roof, a garden, a workshop and a collie called Bess. Malcolm Tait makes tea like a man making a point. He was there. The emergency method was real; the donor, a young warden called Kit Maddox, was hurt when the link strained; the hard limit is forty-eight hours; and the monitor who warned them, Ruth Carrow, was a sensitive. 'Like you,' he says, looking at me for too long. 'She'd have had you pegged in a minute.'",
    set: { e07: true, e07_src: "malcolm", gift_named: true, fr_malcolm: 1 },
    gains: ["e07"],
    choices: [
      { id: "a", text: "Ask Malcolm how he knew what I am.", type: "relational", set: { gift_mercy: true, fr_malcolm: "+1" } },
      { id: "b", text: "Ask about the records Orrell divided.", type: "investigative", set: { orrell_suspected: true } }
    ],
    next: "CH10.ORCHARD.02"
  },
  {
    id: "CH10.ORCHARD.02", date: "2026-11-07", time: "15:30", place: "P50", cast: ["MC", "C08"], kind: "branch", when: "ch10_way = \"orchard\"",
    purpose: "The reservoir footpath while Malcolm and the dog nap. Reuben, who always waits for other people's answers, talks. The man who taught him emergency methods at Mercy House, who took a nineteen-year-old seriously, who left professional life two years ago and stopped answering: Damian Holt. He says the name with love. He doesn't know what he's saying.",
    set: { damian_named: true },
    choices: [
      { id: "a", when: "st_reuben >= 3", text: "Listen. Ask what Damian was like, and what it cost Reuben when he left.", type: "relational", set: { b_reuben_damian: true, st_reuben: 4 } },
      { id: "b", text: "Ask whether Damian worked on the closed program.", type: "investigative", set: { damian_program: true } }
    ],
    next: "CH10.ORCHARD.03"
  },
  {
    id: "CH10.ORCHARD.03", date: "2026-11-07", time: "19:00", place: "P51", cast: ["MC", "C08", "C24", "C48", "C06"], kind: "branch", when: "ch10_way = \"orchard\"",
    purpose: "Supper in Orchard House's kitchen. Percival Tern, the old Marches orchard keeper, has come through the sealed crossing at the bottom of the garden for his monthly argument with Malcolm about the roof. And Ansel Marr arrives an hour later with a folder of lease papers for Percival: an official reason that is very obviously not the reason.",
    set: { fr_percival: 1 },
    choices: [
      { id: "a", when: "st_ansel >= 2", text: "Ask Ansel, quietly, whether the lease papers really couldn't wait.", type: "relational", set: { b_ansel_pretext: true, st_ansel: 3 } },
      { id: "b", text: "Get Percival talking about the crossings and who uses them.", type: "investigative", set: { know_marches: true, crossings_map: true } }
    ],
    next: "CH10.ORRELL.01"
  },

  // ------------------------------------------------------------ Orrell
  {
    id: "CH10.ORRELL.01", date: "2026-11-08", time: "11:00", place: "P01", cast: ["MC", "C18", "C22"], kind: "common",
    purpose: "Sunday. Commander Orrell knows I've seen the program, one way or another; Mercy House is not a place where secrets stay in one room. He listens without interrupting, then restates the part of my argument he considers relevant: he closed a dangerous program and kept the reasons quiet so the institution would survive long enough to do better. He doesn't know who is doing this now. I believe that, and the knack agrees, for what that's worth.",
    choices: [
      { id: "a", text: "Confront him: the concealment is why someone could pick this up again.", type: "structural", set: { orrell_known: "confront", nerve: "+3" } },
      { id: "b", text: "Say nothing yet. Hold it. It may matter more later.", type: "structural", set: { orrell_known: "hold" } },
      { id: "c", when: "fr_florian >= 1", text: "Go to Florian instead: make sure the archive keeps what's left, on the record.", type: "structural", set: { orrell_known: "florian", fr_florian: "+1" } }
    ],
    next: "CH10.TRAIN.01"
  },
  {
    id: "CH10.TRAIN.01", date: "2026-11-08", time: "16:00", place: "P01", cast: ["MC"], kind: "common",
    purpose: "The knack has a name now, and a history, and people who might teach it. Malcolm offered, gruffly, on the drive or by message; Florian can lend me Ruth Carrow's notes. Or I can keep doing what I've always done with the things I don't want to look at.",
    choices: [
      { id: "a", text: "Take Malcolm up on it. Weekends at Orchard House, fixing the roof and learning to listen.", type: "relational", set: { trained: "malcolm", knack: "+5", fr_malcolm: "+1" } },
      { id: "b", when: "fr_florian >= 1", text: "Borrow Ruth Carrow's notes and teach myself from them, carefully.", type: "relational", set: { trained: "florian", knack: "+5", fr_florian: "+1" } },
      { id: "c", text: "Teach myself. Alone. Like everything else.", type: "expressive", set: { trained: "self", knack: "+3" } },
      { id: "d", text: "No. I don't want to be better at this. I want it smaller.", type: "expressive", set: { trained: "refused" } }
    ],
    next: "CH11.OPEN.01"
  }
];
