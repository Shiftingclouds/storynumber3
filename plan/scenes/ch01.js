// CH01 — After the Last Set. Sat 29 Aug, afternoon → Sun 30 Aug, early hours. (Bible Day 0.)
// Purpose: event work, Nolan, home obligations, the murder behind Switchyard. The knack's first hard pulse.
"use strict";
module.exports = [
  {
    id: "CH01.HOME.01", date: "2026-08-29", time: "15:30", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    set: { st_nolan: 3, fr_martin: 2, fr_will: 1 },
    purpose: "Open on ordinary life above the print shop. Name and portrait, via the bathroom mirror. Martin at the press with an overdue invoice he's pretending isn't there (S01). Will's Sunday game (S13). Mum's emails arrive in a batch: the first letter.",
    letter: "Joanne, from the clinic: three weeks of news in one batch. Snow already up north. 'Are you eating? Is Martin charging you rent? He should.'",
    choices: [
      { id: "a", text: "Promise Martin I'll do the Monday delivery run before my shift.", type: "relational", set: { s01: "intro", fr_martin: "+1" } },
      { id: "b", text: "Tell Martin I can't, I've got crew calls all week. He says it's fine. It isn't.", type: "relational", set: { s01: "intro" } }
    ],
    next: "CH01.HOME.02"
  },
  {
    id: "CH01.HOME.02", date: "2026-08-29", time: "16:00", place: "P02", cast: ["MC", "C09"], kind: "common",
    purpose: "Will asks for a lift to his game tomorrow and then pretends he didn't. Establish Will's plan (the regional program) and his suspicion that I'm unreliable.",
    choices: [
      { id: "a", text: "\"I'll be there. Nine o'clock. I'll bring the bad coffee.\"", type: "relational", set: { s13: "intro", fr_will: "+1" } },
      { id: "b", text: "\"If I'm up. It's the Last Set tonight.\"", type: "relational", set: { s13: "intro" } }
    ],
    next: "CH01.SWITCH.01"
  },
  {
    id: "CH01.SWITCH.01", date: "2026-08-29", time: "18:00", place: "P13", cast: ["MC", "C05", "C54", "C40", "C02"], kind: "common",
    set: { fr_desmond: 1, st_micah: 1 },
    purpose: "Load-in for Switchyard's end-of-summer all-ages show. Nolan on sound, turning a cable connector over in his hands. Desmond asking for 'just a couple of free hours' (S06). Caspar on lights. A borrowed apprentice electrician, Micah, fixing a dodgy distro board after 'a rough night' (last night was the full moon; I don't know what that means yet). The knack: I wear ear defenders at gigs, and not only for the noise.",
    choices: [
      { id: "a", text: "Help Micah with the distro board. Two sets of hands, one bad breaker.", type: "relational", set: { b_micah_distro: true, craft: "+3" } },
      { id: "b", text: "Help Nolan patch the stage box and let him talk.", type: "relational", set: { st_nolan: "+1" } },
      { id: "c", text: "Tell Desmond we're not doing free hours. For both of us.", type: "relational", set: { s06: "intro", nerve: "+2", st_nolan: "+1", fr_desmond: "-1" } }
    ],
    next: "CH01.SWITCH.02",
    notes: "Micah is met on every path (st_micah 1 on entry for all; choice a adds craft and a warmer first impression via fr-less beat b_micah_distro)."
  },
  {
    id: "CH01.SWITCH.02", date: "2026-08-29", time: "21:30", place: "P13", cast: ["MC", "C05", "C07", "C11"], kind: "common",
    purpose: "The show. The crowd's weather comes through the defenders: joy, sweat, a boy's heartbreak at the barrier. Quentin and Peter from Double Shift, in the bar queue. Quentin asks me for a plaster for a blister and makes a joke about his new work boots. Keys on a ring with a little tin charm. Nolan, between sets, mentions a technical course in another city (S02).",
    choices: [
      { id: "a", text: "Find Quentin the plaster and stay a minute. He's funny.", type: "relational", set: { st_quentin: 1, people: "+2" } },
      { id: "b", text: "Point him at the first-aid box and get back to work.", type: "expressive", set: { st_quentin: 1 } },
      { id: "c", text: "Ask Nolan about the course. Properly.", type: "relational", set: { s02: "intro", st_nolan: "+1" } }
    ],
    next: "CH01.LANE.01",
    notes: "Quentin met on all paths (st 1). If c, Quentin is still seen in the queue (st 1) without the plaster conversation."
  },
  {
    id: "CH01.LANE.01", date: "2026-08-30", time: "00:35", place: "P13", cast: ["MC", "C07"], kind: "common",
    purpose: "Load-out. I take the empty cases out to the rear lane. Quentin at the far end by the bins, alone, on his phone. A man in a service jacket. Something on Quentin's key ring flares hot, and the knack goes off in me like a struck bell: a doubled pulse, a rope pulled tight out of him into nowhere. He falls. How do I meet it?",
    choices: [
      { id: "a", text: "Stay behind the cases. Watch. Get my phone up.", type: "structural", set: { ch01_saw: "cover", e01: true, e01_src: "phone" }, to: "CH01.LANE.COVER" },
      { id: "b", text: "Run at them.", type: "structural", set: { ch01_saw: "approach", nerve: "+3" }, to: "CH01.LANE.APPROACH" },
      { id: "c", text: "Run back inside for Nolan and Desmond.", type: "structural", set: { ch01_saw: "help" }, to: "CH01.LANE.HELP" }
    ]
  },
  {
    id: "CH01.LANE.COVER", date: "2026-08-30", time: "00:40", place: "P13", cast: ["MC"], kind: "branch", when: "ch01_saw = \"cover\"",
    purpose: "Fourteen shaky seconds of phone video: the service jacket (no face), the flare, the fall, the sequence. The van reverses in: white, a lily painted on the side. The knack holds the doubled pulse even after Quentin stops moving. Nobody sees me.",
    gains: ["e01"], next: "CH01.LANE.AFTER"
  },
  {
    id: "CH01.LANE.APPROACH", date: "2026-08-30", time: "00:40", place: "P13", cast: ["MC", "C07"], kind: "branch", when: "ch01_saw = \"approach\"",
    purpose: "I get there as he dies. Hands on him; the pulse under my palms doesn't stop when his heart does. The service jacket shoves me into the wall: a hood, a pleasant clean-shaven jaw, a voice that says 'Sorry' as if he means it. The van. My face was seen.",
    choices: [
      { id: "a", text: "Hold on to Quentin until they pull him away.", type: "expressive", set: { hurt_mc: 1, enemy_aware: 1, knack: "+3" } },
      { id: "b", text: "Go for the man's arm. Get something.", type: "investigative", set: { hurt_mc: 1, enemy_aware: 1, cuff_button: true }, notes: "A torn cuff button: brass, Mercy House issue (old). A red herring toward the wardens with an innocent later explanation (Damian's old jacket)." }
    ],
    next: "CH01.LANE.AFTER"
  },
  {
    id: "CH01.LANE.HELP", date: "2026-08-30", time: "00:41", place: "P13", cast: ["MC", "C05", "C54"], kind: "branch", when: "ch01_saw = \"help\"",
    purpose: "Back with Nolan and Desmond: the lane is emptying, the van turning out of the far end. Nolan saw the tail of it. The venue's rear camera covers the lane: Desmond says he'll 'sort the footage' (he won't, in time). Nolan is a witness now, too.",
    choices: [
      { id: "a", text: "Ask Nolan to pull the camera file tonight, before Desmond forgets.", type: "investigative", set: { e02: true, e02_src: "nolan", st_nolan: "+1" } },
      { id: "b", text: "Leave the footage to Desmond.", type: "expressive" }
    ],
    next: "CH01.LANE.AFTER"
  },
  {
    id: "CH01.LANE.AFTER", date: "2026-08-30", time: "01:20", place: "P13", cast: ["MC", "C05"], kind: "common",
    purpose: "The lane is empty, rinsed by the drizzle. Nolan (if he wasn't there, he comes looking for me) sees my face and doesn't ask yet. I walk home along the river with the knack buzzing like a tooth. At the print shop the light's still on in Martin's window.",
    next: "CH02.HOME.01"
  }
];
