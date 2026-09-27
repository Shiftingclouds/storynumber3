// CH12 — Before We Leave. Tue 24 Nov (full moon) – Sun 20 Dec (bible Day 25, stretched into December).
// Purpose: one foreground sequence (the North Ridge gathering, the Regent before dawn, or work/home with the Lantern Rooms
// haunting), a follow-up for Quentin at Winton Court, then December: snow, the fundraiser, Ansel and the Candle Fair plan.
"use strict";
module.exports = [
  {
    id: "CH12.CHOICE.01", date: "2026-11-24", time: "12:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Late November. The trees are bare on the Hill. Three people want me for the same week, and I can't be three places.",
    choices: [
      { id: "a", when: "st_micah >= 2", text: "Micah: the supervised full-moon gathering at North Ridge. He wants me to see it.", type: "structural", set: { ch12_branch: "gathering" }, to: "CH12.GATHERING.01" },
      { id: "b", when: "st_dominic >= 2", text: "Dominic: film night at the Regent, and staying over in the spare room.", type: "structural", set: { ch12_branch: "regent" }, to: "CH12.REGENT.01" },
      { id: "c", text: "Here: the Christmas rush at the shop, the Switchyard fundraiser, and a job for Benoît at the Lantern Rooms.", type: "structural", set: { ch12_branch: "home" }, to: "CH12.HOME.01" }
    ]
  },

  // ------------------------------------------------------------ the North Ridge gathering
  {
    id: "CH12.GATHERING.01", date: "2026-11-24", time: "16:00", place: "P53", cast: ["MC", "C02", "C25", "C29", "C26"], kind: "branch", when: "ch12_branch = \"gathering\"",
    purpose: "Greyhill Village: a bus stop, a general store, an inn that rents the whole barn to Eastbank one night a month and asks no questions. Ernesto's rules on a whiteboard. Wesley, three transformations old, pretending he isn't terrified. Micah, practical and too cheerful, doing everyone else's jobs.",
    set: { know_wolves: true, fr_ernesto: "+1" },
    choices: [
      { id: "a", when: "not(b_micah_wolf)", text: "Ask Micah to tell me what tonight actually is. All of it.", type: "relational", set: { b_micah_wolf: true, know_micah_wolf: true, st_micah: 3 } },
      { id: "b", text: "Sit with Wesley. Don't pity him. Talk about anything else.", type: "relational", set: { fr_wesley: "+1", s08: "fore" } }
    ],
    next: "CH12.GATHERING.02"
  },
  {
    id: "CH12.GATHERING.02", date: "2026-11-24", time: "22:30", place: "P49", cast: ["MC", "C02", "C29", "C25"], kind: "branch", when: "ch12_branch = \"gathering\"", allowMoon: true,
    purpose: "Quarry Lake under the full moon. The change; the run; something like joy coming off thirty wolves at once, loud enough through the knack to make me laugh out loud. Then Wesley bolts: frightened, too new, heading for the quarry cliffs in the dark. I'm the only one who can feel exactly where his fear is.",
    choices: [
      { id: "a", text: "Follow his fear, not his tracks. Talk him down from the edge.", type: "investigative", set: { knack: "+3", wesley_saved: "mc", fr_wesley: "+1" } },
      { id: "b", text: "Guide Micah to him with the knack, shouting directions.", type: "relational", set: { wesley_saved: "micah", st_micah: "+1" } }
    ],
    notes: "At the cliff edge, the knack catches something old: a young man's surprise, a fall, ten years ago. Octavian Sorrell died here. It explains nothing about the case and I'll never forget it.",
    next: "CH12.GATHERING.03"
  },
  {
    id: "CH12.GATHERING.03", date: "2026-11-25", time: "03:00", place: "P53", cast: ["MC", "C02", "C25"], kind: "branch", when: "ch12_branch = \"gathering\"", allowMoon: true,
    purpose: "The barn at three in the morning: wolves asleep in heaps, human-shaped again under blankets. Ernesto tells Micah to drive the van back at dawn, then open the yard. Micah hasn't slept in two days, and he says yes, because he always says yes.",
    choices: [
      { id: "a", when: "st_micah >= 3", text: "\"He's not driving. I'll do it, or Leandro will. He's done.\" Say it to Ernesto.", type: "relational", set: { b_micah_boundary: true, st_micah: 4, fr_ernesto: "-1", nerve: "+2" } },
      { id: "b", text: "Say nothing. It's his family.", type: "expressive" }
    ],
    next: "CH12.GATHERING.04"
  },
  {
    id: "CH12.GATHERING.04", date: "2026-11-25", time: "06:40", place: "P50", cast: ["MC", "C02"], kind: "branch", when: "ch12_branch = \"gathering\"",
    purpose: "The reservoir path at dawn, frost on everything. Micah wanted a walk, alone, which he never wants. He's quiet. He says he doesn't know why he keeps wanting to be where I am, and he says it like a man describing a noise in an engine.",
    choices: [
      { id: "a", when: "b_micah_wolf and b_micah_boundary and (hurt_micah < 2)", text: "\"I know why I do.\" Tell him. Let him answer, or not.", type: "relational", set: { b_micah_want: true, st_micah: 5, out_micah: true } },
      { id: "b", text: "\"Because I'm great company.\" Keep it light. Keep it safe.", type: "expressive" },
      { id: "c", text: "Just walk. Let the not-saying be enough, for now.", type: "relational", set: { people: "+1" } }
    ],
    next: "CH12.FOLLOWUP.01"
  },

  // ------------------------------------------------------------ the Regent before dawn
  {
    id: "CH12.REGENT.01", date: "2026-11-24", time: "21:00", place: "P14", cast: ["MC", "C04", "C35", "C33", "C36", "C31"], kind: "branch", when: "ch12_branch = \"regent\"",
    purpose: "Film night in the Regent's auditorium: Milo projecting a terrible old musical, Rafi heckling, Lucien knitting, Abel complaining about the seats he paid to reupholster. Dominic has saved me the good armrest.",
    set: { fr_milo: "+1", fr_rafi: "+1", s16: "intro" },
    next: "CH12.REGENT.02"
  },
  {
    id: "CH12.REGENT.02", date: "2026-11-25", time: "04:30", place: "P14", cast: ["MC", "C04", "C35", "C33", "C36", "C31"], kind: "branch", when: "ch12_branch = \"regent\"",
    purpose: "Half past four: a crack like a gunshot. A frost-split roof truss has dropped the east wing's light shutters. Sunrise is at ten past seven. Eleven residents sleep in that wing, and two human staff. Dominic knows whose room is whose; Milo knows the projection and service passages; Rafi knows who's too weak to walk; Abel wants to know who'll carry his things.",
    choices: [
      { id: "a", text: "Ask Dominic where he needs me, and do exactly that.", type: "relational", set: { b_dominic_dawn: true, st_dominic: 4 } },
      { id: "b", text: "Tell Dominic to get to the safe wing first; I'll handle his end.", type: "relational", set: { managed_dominic: true } },
      { id: "c", text: "Take the ladders with Milo and get the shutters back up.", type: "investigative", set: { craft: "+3", fr_milo: "+1" } }
    ],
    next: "CH12.REGENT.03"
  },
  {
    id: "CH12.REGENT.03", date: "2026-11-25", time: "06:55", place: "P14", cast: ["MC", "C04", "C36", "C31", "C01"], kind: "branch", when: "ch12_branch = \"regent\"",
    purpose: "Fifteen minutes to sunrise; everyone accounted for. Abel demanded that his rooms be protected first and Lucien refused him in front of everybody, at a cost to the trust's finances. Adrian arrives, off shift, jacket over pyjamas, because someone told him I was here.",
    set: { s16: "fore" },
    choices: [
      { id: "a", when: "st_adrian >= 3", text: "Ask Adrian why he came, if he wasn't called.", type: "relational", set: { b_adrian_offduty: true, st_adrian: 4 } },
      { id: "b", text: "Back Lucien against Abel, out loud.", type: "relational", set: { fr_lucien: "+1", ally_regent_hint: true } }
    ],
    next: "CH12.REGENT.04"
  },
  {
    id: "CH12.REGENT.04", date: "2026-11-25", time: "18:30", place: "P14", cast: ["MC", "C04"], kind: "branch", when: "ch12_branch = \"regent\"",
    purpose: "That evening, after sunset, on the Regent's flat roof among the repaired shutters. Dominic hasn't been treated gently all day, and he's grateful in a way he doesn't know what to do with. Then he asks me a question nobody's asked him in a year: not whether he's all right, but what I want.",
    choices: [
      { id: "a", when: "b_dominic_dawn and not(managed_dominic) and (hurt_dominic < 2)", text: "Tell him what I want. It's him.", type: "relational", set: { b_dominic_ask: true, st_dominic: 5, out_dominic: true } },
      { id: "b", text: "\"For you to be all right.\" Which is true, and not an answer.", type: "expressive" }
    ],
    next: "CH12.FOLLOWUP.01"
  },

  // ------------------------------------------------------------ work and home
  {
    id: "CH12.HOME.01", date: "2026-11-24", time: "19:00", place: "P13", cast: ["MC", "C05", "C54"], kind: "branch", when: "ch12_branch = \"home\"",
    purpose: "Switchyard after hours: planning the December fundraiser for the lease fight. Desmond assumes everyone's working it for free. Nolan draws the whole rig on the back of a flyer in ten minutes, and he's so good at this that I forget to be anything but impressed.",
    set: { s06: "fore" },
    choices: [
      { id: "a", when: "st_nolan >= 3", text: "Work the rig plan with him till two in the morning.", type: "relational", set: { b_nolan_work: true, st_nolan: 4 } },
      { id: "b", text: "Make Desmond pay the crew. Out loud.", type: "relational", set: { fr_desmond: "-1", nerve: "+2", crew_paid: true } },
      { id: "c", when: "not(nolan_knows)", text: "Tell Nolan the truth about the last three months. All of it.", type: "relational", set: { nolan_knows: true, gift_nolan: true, hurt_nolan: 0 } }
    ],
    next: "CH12.HOME.02"
  },
  {
    id: "CH12.HOME.02", date: "2026-11-25", time: "23:30", place: "P23", cast: ["MC", "C08"], kind: "branch", when: "ch12_branch = \"home\"",
    purpose: "Calder General's car park, level three, where I first sat with Quentin. Reuben at the end of a double shift that shouldn't have been his, because the response service he keeps asking for doesn't exist. He can't find his keys. He's not safe to drive and he knows it and he hates it.",
    choices: [
      { id: "a", when: "st_reuben >= 3", text: "Drive him home. Make toast. Don't make it a thing.", type: "relational", set: { b_reuben_needs: true, st_reuben: 4, s09: "fore" } },
      { id: "b", text: "Call Mercy House to come and get him.", type: "relational", set: { s09: "intro" } }
    ],
    next: "CH12.HOME.03"
  },
  {
    id: "CH12.HOME.03", date: "2026-11-26", time: "21:00", place: "P34", cast: ["MC", "C15", "C43", "C04"], kind: "branch", when: "ch12_branch = \"home\"",
    purpose: "The Lantern Rooms: Benoît hired me to rig lights for the winter concert. Someone keeps striking the same wrong note on the old upright at night. Jonah Peake, a medium who plays at funerals and refuses to perform grief, says it's a partial haunting: a piano tuner who died in 1978 before finishing, repeating the job. The purpose has been misread: he wasn't tuning; he was trying to find the note his daughter always sang flat. Dominic, rehearsing after dark, hears it too.",
    set: { fr_jonah: 1, haunting_done: true },
    choices: [
      { id: "a", when: "(st_dominic >= 2) and not(b_dominic_music)", text: "Ask Dominic to sing the flat note, so the tuner can finish.", type: "relational", set: { b_dominic_music: true, st_dominic: 3 } },
      { id: "b", text: "Find the daughter's name in Benoît's old programmes and say it at the piano.", type: "investigative", set: { people: "+2", fr_benoit: 1 } }
    ],
    next: "CH12.HOME.04"
  },
  {
    id: "CH12.HOME.04", date: "2026-11-28", time: "14:00", place: "P45", cast: ["MC", "C07"], kind: "branch", when: "ch12_branch = \"home\"",
    purpose: "Quentin texts: a cheap matinee at Southmere Cinema, a terrible sequel, nothing to investigate, he's buying. It's the first time he's asked me for anything that wasn't practical.",
    choices: [
      { id: "a", when: "st_quentin >= 3", text: "Go. Let him pick the seats. Let him talk, or not.", type: "relational", set: { b_quentin_nothing: true, st_quentin: 4 } },
      { id: "b", text: "Go, and ask him how he's feeling. Carefully.", type: "relational", set: { hurt_quentin: "+1" },
        notes: "He wanted one afternoon of not being a case. He goes quiet." }
    ],
    next: "CH12.FOLLOWUP.01"
  },

  // ------------------------------------------------------------ the follow-up
  {
    id: "CH12.FOLLOWUP.01", date: "2026-11-30", time: "17:00", place: "P41", cast: ["MC", "C07", "C14"], kind: "conditional", when: "buddy_plan or (st_quentin >= 3)",
    purpose: "Quentin's monthly 'follow-up', in a rented flat in Winton Court. He lets me wait in the corridor. Russell Dacre, the caretaker, is fixing a radiator and wants to talk about the tenants' fight; he also says there's a man who comes and goes through the service corridor on these afternoons, never the front. Through the door, a calm, kind voice asks Quentin how he's sleeping. The knack goes cold. It's the voice.",
    set: { voice_heard: true, fr_russell: 1, s11: "intro", winton_log: true },
    choices: [
      { id: "a", text: "Ask Russell to write down every time he sees the man. Dates, times.", type: "investigative", set: { russell_logging: true, fr_russell: "+1" } },
      { id: "b", text: "Try the service door.", type: "investigative", set: { enemy_aware: "+1" },
        notes: "It's locked, and a shape on the far side goes still. The ring now knows someone is waiting in the corridor." }
    ],
    next: "CH12.DEC.01"
  },

  // ------------------------------------------------------------ December, all of us
  {
    id: "CH12.DEC.01", date: "2026-12-05", time: "08:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "First snow. The shop's Christmas rush: raffle tickets, orders of service, carol sheets, all due yesterday. Will's development program trial is in the spring, and he's training in the dark before school. Mum's December emails: she can't get home for Christmas.",
    letter: "Joanne: 'I'm sorry, love. The relief nurse broke her wrist. I'll be home in the spring, I promise. Give Martin a hug from me and tell him I know about the overdraft, he's a terrible liar.'",
    set: { s01: "fore", s13: "fore" },
    next: "CH12.PREP.01"
  },
  {
    id: "CH12.PREP.01", date: "2026-12-08", time: "19:30", place: "P35", cast: ["MC", "C06"], kind: "common",
    purpose: "The Neutral Table, upstairs room. Ansel, over dinner he has opinions about: his father refused to sponsor a Calder investigation into Eamon. But from midwinter to Twelfth Night, the Candle Fair, anyone may enter Bracken Court unsponsored. We'll cross after Christmas. Who else comes?",
    choices: [
      { id: "a", text: "Just the two of us.", type: "structural", set: { companion: "none", st_ansel: "+1" } },
      { id: "b", when: "st_adrian >= 3", text: "Adrian. A warden escort makes it official, and he'd hate to be left behind.", type: "structural", set: { companion: "adrian" } },
      { id: "c", when: "st_micah >= 3", text: "Micah. He's never been anywhere, and he needs out of Eastbank for a week.", type: "structural", set: { companion: "micah" } },
      { id: "d", when: "(st_nolan >= 4) and nolan_knows", text: "Nolan. He knows now, and he'll bring the good torch.", type: "structural", set: { companion: "nolan" } },
      { id: "e", when: "st_reuben >= 3", text: "Reuben. If anything goes wrong in there, we'll want a medic.", type: "structural", set: { companion: "reuben" } }
    ],
    next: "CH12.PREP.02"
  },
  {
    id: "CH12.PREP.02", date: "2026-12-12", time: "23:30", place: "P13", cast: ["MC", "C05", "C54", "C06", "C02", "C04"], kind: "common",
    purpose: "The Switchyard fundraiser: the whole city in one room, all ages, the heating broken so nobody minds. Micah dancing badly on purpose. Dominic in the back with Milo. And Ansel, who has come to deliver 'a message about the crossing arrangements' that could have been a text, and stays until close.",
    set: { s06: "fore" },
    choices: [
      { id: "a", when: "(st_ansel >= 2) and not(b_ansel_pretext)", text: "Tell Ansel the message could have been a text, and watch him try to deny it.", type: "relational", set: { b_ansel_pretext: true, st_ansel: 3 } },
      { id: "b", text: "Work the night. Load out at three with Nolan like always.", type: "relational", set: { st_nolan: "+1" } }
    ],
    next: "CH12.END.01"
  },
  {
    id: "CH12.END.01", date: "2026-12-20", time: "22:00", place: "P02", cast: ["MC", "C10"], kind: "common",
    purpose: "The Sunday before Christmas. Winter Lights on the river, the shop finally quiet. Martin asks where I'm going after Christmas. What do I tell him?",
    choices: [
      { id: "a", text: "\"Away for a week with a friend. Somewhere with no signal.\" True, and small.", type: "relational", set: { martin_told_trip: true } },
      { id: "b", when: "not(gift_martin)", text: "Tell him about the knack. Not the case. Just me.", type: "relational", set: { gift_martin: true, fr_martin: "+1" } }
    ],
    next: "CH13.XMAS.01"
  }
];
