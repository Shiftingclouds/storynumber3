// CH02 — The Account I Give. Sun 30 Aug (bible Day 1).
// Purpose: respond to what I witnessed; consequences at home. Record who knows what and what evidence survives.
"use strict";
module.exports = [
  {
    id: "CH02.HOME.01", date: "2026-08-30", time: "08:40", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Morning. No sleep. Martin sees my face (and my bruised shoulder, if I ran at them). Will's game is at nine. The knack is still humming; Martin's worry reads as a low grey pressure. What do I tell him?",
    choices: [
      { id: "a", text: "Something true and small: \"I saw a fight after the show. I'm okay.\"", type: "relational", set: { fr_martin: "+1" } },
      { id: "b", text: "Nothing. \"Long night.\" He knows it's a lie and lets me have it.", type: "relational", set: { fr_martin: "-1" } }
    ],
    next: "CH02.GAME.01"
  },
  {
    id: "CH02.GAME.01", date: "2026-08-30", time: "09:15", place: "P44", cast: ["MC", "C09", "C27"], kind: "conditional", when: "fr_will >= 2",
    purpose: "Southmere sports ground. I kept the promise. Will plays badly in the first half and well in the second; coach Tomas Rivas shouts the least fair things in the most useful way. I watch the ball and see a lane.",
    set: { fr_will: "+1", s13: "fore" },
    next: "CH02.ACCOUNT.01"
  },
  {
    id: "CH02.ACCOUNT.01", date: "2026-08-30", time: "11:30", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The account I give. A man died and nobody has said so. What do I do with it?",
    choices: [
      { id: "a", text: "Go to the police and make a statement.", type: "structural", set: { ch02_report: "police" }, to: "CH02.POLICE.01" },
      { id: "b", text: "Go through the venue: tell Desmond, and get the footage kept.", type: "structural", set: { ch02_report: "venue" }, to: "CH02.VENUE.01" },
      { id: "c", when: "ch01_saw != \"help\"", text: "Tell Nolan. Only Nolan. Figure it out together first.", type: "structural", set: { ch02_report: "nolan" }, to: "CH02.NOLAN.01" },
      { id: "d", when: "ch01_saw = \"help\"", text: "Talk it through with Nolan, who was there too, before we tell anyone.", type: "structural", set: { ch02_report: "nolan" }, to: "CH02.NOLAN.01" }
    ]
  },
  {
    id: "CH02.POLICE.01", date: "2026-08-30", time: "12:30", place: "P40", cast: ["MC"], kind: "branch", when: "ch02_report = \"police\"",
    purpose: "The front desk. A statement taken seriously and then filed where nothing happens: no body, no missing-person report, a venue that says it saw nothing. But it's a public record with a date on it, and in a week it will cross the desk of a municipal investigator named Gareth Moss, who collects exactly this kind of nothing.",
    choices: [
      { id: "a", when: "e01", text: "Give them the phone video.", type: "investigative", set: { told_gareth: true, e01_src: "phone+police" } },
      { id: "b", text: "Describe it. Keep the video to myself for now.", type: "expressive" }
    ],
    next: "CH02.LANE.01"
  },
  {
    id: "CH02.VENUE.01", date: "2026-08-30", time: "12:30", place: "P13", cast: ["MC", "C54", "C05"], kind: "branch", when: "ch02_report = \"venue\"",
    purpose: "Desmond, hungover, genuinely shaken, and more worried about the licence review than anything else. He promises to keep the rear-camera footage. Nolan, who knows the system, quietly doesn't trust the promise.",
    choices: [
      { id: "a", when: "not(e02)", text: "Ask Nolan to copy the camera file now, while Desmond's making coffee.", type: "investigative", set: { e02: true, e02_src: "nolan", st_nolan: "+1" } },
      { id: "b", text: "Trust Desmond with it.", type: "relational", set: { fr_desmond: "+1" }, notes: "The file overwrites on its seven-day loop before he remembers (mundane cause). E02 survives only via Nolan, or later via the funeral-van records (CH08/CH16)." }
    ],
    next: "CH02.LANE.01"
  },
  {
    id: "CH02.NOLAN.01", date: "2026-08-30", time: "12:30", place: "P06", cast: ["MC", "C05"], kind: "branch", when: "ch02_report = \"nolan\"",
    purpose: "Riverside Steps, two coffees. Nolan listens the way he always does, turning the lid of his cup. He believes me before I've finished, which is somehow worse. We decide to look ourselves before anyone official makes it vanish.",
    set: { st_nolan: "+1" },
    choices: [
      { id: "a", when: "not(e02)", text: "\"Can you still get into the camera system?\"", type: "investigative", set: { e02: true, e02_src: "nolan" } },
      { id: "b", text: "\"There's something else. When he died, I felt it.\" Tell him about the knack.", type: "relational", set: { gift_nolan: true, st_nolan: "+1" } },
      { id: "c", text: "Keep the knack to myself. It's the only part that sounds insane.", type: "expressive" }
    ],
    next: "CH02.LANE.01"
  },
  {
    id: "CH02.LANE.01", date: "2026-08-30", time: "15:00", place: "P13", cast: ["MC"], kind: "common",
    purpose: "The rear lane in daylight. Rinsed. A delivery van, a smoking kitchen porter, pigeons. The wall where he fell. Do I reach?",
    choices: [
      { id: "a", text: "Put my hand on the bricks and let it all the way up.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+3", echo_lane: true },
        notes: "Echo: cold hands, white lilies, a man's calm voice counting down from ten, the smell of a clean van. Partial and misleading on its own (lilies = funeral; he'll think of flowers first). Points toward P30 (Rusk) once E02/E04 exist." },
      { id: "b", text: "Don't. Go home. Pretend I'm normal for one afternoon.", type: "expressive" }
    ],
    next: "CH02.HOME.02"
  },
  {
    id: "CH02.HOME.02", date: "2026-08-30", time: "21:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Evening above the shop. Will's result (win or loss, depending on whether I was there; he tells it either way). Martin's invoice worry comes out sideways. In my room: the video on my phone, or the memory with no video; and a reply to write to Mum.",
    choices: [
      { id: "a", text: "Write Mum the truth, or near enough: something bad happened and I'm handling it.", type: "expressive", set: { letters_mum: "+1" } },
      { id: "b", text: "Write Mum about the show, and Will's game, and nothing else.", type: "expressive", set: { letters_mum: "+1" } }
    ],
    next: "CH03.RUN.01"
  }
];
