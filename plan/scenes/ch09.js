// CH09 — Work Beneath the City. Thu 29 – Sat 31 Oct, Halloween (bible Day 17).
// Purpose: a complete supernatural adventure and a demonstration of collaboration. Fixed cause, evidence, climax, aftermath.
// Neither case has anything to do with Damian. Each ends with a common case update that leads to CH10.
"use strict";
module.exports = [
  {
    id: "CH09.OPEN.01", date: "2026-10-29", time: "18:00", place: "P02", cast: ["MC", "C09"], kind: "common",
    purpose: "The end of October. Cold at last; the first gloves. Will is carving a pumpkin with a precision that worries me. I've said yes to something, and it starts tonight.",
    choices: [
      { id: "a", when: "ch09_case = \"tunnels\"", text: "Head for Northline.", type: "structural", to: "CH09.TUNNELS.01" },
      { id: "b", when: "ch09_case = \"screen\"", text: "Head up the Hill to the Okafors'.", type: "structural", to: "CH09.SCREEN.01" }
    ]
  },

  // ------------------------------------------------------------ the Northline predator
  {
    id: "CH09.TUNNELS.01", date: "2026-10-29", time: "23:00", place: "P27", cast: ["MC", "C12", "C28", "C01", "C05", "C02"], kind: "branch", when: "ch09_case = \"tunnels\"",
    purpose: "The depot canteen at eleven. Something in the service tunnels under Northline calls night workers by name, in voices they know, and draws them away from the lit areas. A cleaner was found with a broken ankle at a dead end. An apprentice track worker has been missing since Tuesday. Owen has the rota, Pavel has the site, Adrian has Mercy House's authority, Nolan has brought a recorder because Owen said 'it sounds like the tannoy', and Micah knows the depot wiring like his own kitchen.",
    set: { fr_owen: "+1", fr_pavel: "+1", s10: "fore", nolan_knows: true },
    choices: [
      { id: "a", text: "Ask Owen for the exact words each worker heard.", type: "investigative", set: { people: "+2", mimic_words: true } },
      { id: "b", text: "Ask Pavel for the oldest map of the tunnels he has.", type: "investigative", set: { craft: "+2", old_map: true } }
    ],
    next: "CH09.TUNNELS.02"
  },
  {
    id: "CH09.TUNNELS.02", date: "2026-10-30", time: "01:10", place: "P25", cast: ["MC", "C05", "C01"], kind: "branch", when: "ch09_case = \"tunnels\"",
    purpose: "Service corridor B at Northline Station. Nolan's recorder catches it: a chime, then a woman's voice announcing 'Platform four for the Greyhill service.' There hasn't been a Greyhill service since the line was cut seven years ago, and platform four was sealed. The thing learned that announcement from speakers that no longer work. It lives where they were. (The fair clue.)",
    set: { mimic_clue: true },
    choices: [
      { id: "a", text: "Work it out with Nolan, headphones shared, in the dark.", type: "relational", set: { b_nolan_work: true, st_nolan: 4 } },
      { id: "b", text: "Take it to Adrian as a procedure: last known speaker locations, a search pattern.", type: "relational", set: { adrian_plan: true } }
    ],
    next: "CH09.TUNNELS.03"
  },
  {
    id: "CH09.TUNNELS.03", date: "2026-10-30", time: "02:40", place: "P25", cast: ["MC", "C02", "C01"], kind: "branch", when: "ch09_case = \"tunnels\"",
    purpose: "Through the sealed door onto old platform four: tiles, pigeons, a dead speaker horn. Micah goes ahead because he can hear things we can't, and then he does something with his face and his breathing that tells me, in case I didn't know, exactly what he is. The knack finds the missing apprentice: alive, terrified, somewhere below. And something else, hungry and patient and pleased.",
    choices: [
      { id: "a", when: "not(know_micah_wolf)", text: "Watch Micah change enough to track. Don't flinch.", type: "relational", set: { b_micah_wolf: true, know_micah_wolf: true, st_micah: 3 } },
      { id: "b", when: "know_micah_wolf", text: "Trust his nose over my knack. Follow him.", type: "relational", set: { st_micah: "+1" } },
      { id: "c", text: "Reach all the way for the apprentice. Find him first.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+3" } }
    ],
    next: "CH09.TUNNELS.04"
  },
  {
    id: "CH09.TUNNELS.04", date: "2026-10-31", time: "00:40", place: "P25", cast: ["MC", "C01", "C02", "C05"], kind: "branch", when: "ch09_case = \"tunnels\"",
    purpose: "The next night, prepared. The apprentice is under the live line, in a culvert the mimic uses as a larder, and the trains run every eleven minutes. Adrian lays a protective line he can hold for about as long as a train takes to pass. Nolan has a speaker and a recording. Micah can lift the grate. Somebody has to go into the culvert.",
    choices: [
      { id: "a", when: "nerve >= 30", text: "Go into the culvert myself, between trains.", type: "investigative", set: { nerve: "+3", tunnels_role: "went" } },
      { id: "b", text: "Hold the speaker and turn its trick back on it: play the voice it wants.", type: "investigative", set: { tunnels_role: "lure", craft: "+2" } },
      { id: "c", text: "Hold the grate with Micah. Let Adrian go in; he's trained for it.", type: "relational", set: { tunnels_role: "grate", st_adrian: "+1" } }
    ],
    next: "CH09.TUNNELS.05"
  },
  {
    id: "CH09.TUNNELS.05", date: "2026-10-31", time: "04:10", place: "P18", cast: ["MC", "C01"], kind: "branch", when: "ch09_case = \"tunnels\"",
    purpose: "The apprentice is out, hypothermic, alive; the mimic is bound in the old speaker horn it loved and will go to Mercy House in a crate. Owen's rota campaign has something nobody can call 'difficult' now. At four in the morning in the Truss Road Diner, off duty, jacket open, Adrian sits down across from me with no report to write and no reason he can name for being here.",
    set: { tunnels_done: true, s10: "fore" },
    choices: [
      { id: "a", when: "st_adrian >= 3", text: "Don't ask him why he came. Order him pie.", type: "relational", set: { b_adrian_offduty: true, st_adrian: 4 } },
      { id: "b", text: "Ask him about the mimic's crate. What happens to it now?", type: "investigative", set: { know_wardens: true } }
    ],
    next: "CH09.HALLOWEEN.01"
  },

  // ------------------------------------------------------------ the inherited screen
  {
    id: "CH09.SCREEN.01", date: "2026-10-29", time: "19:00", place: "P20", cast: ["MC", "C03", "C37", "C38"], kind: "branch", when: "ch09_case = \"screen\"",
    purpose: "A six-panel painted screen, delivered by a Southmere family who inherited it and dropped it in the move. The lacquer seal across the back has cracked. In the workroom the shadows are out of step with the lamps. Chukwudi says it's a binding, 1920s, very good, and something inside it is trying to borrow a living silhouette. Isaac thinks this is the best thing that has ever happened.",
    choices: [
      { id: "a", text: "Read the thing inside with the knack before anyone touches it.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+3", shade_lonely: true },
        notes: "Weather: hunger, yes, but under it something like loneliness. A clue to its history." },
      { id: "b", text: "Get Isaac out of the room. He's standing too close to the lamp.", type: "relational", set: { fr_isaac: "+1", fr_chukwudi: "+1" } }
    ],
    next: "CH09.SCREEN.02"
  },
  {
    id: "CH09.SCREEN.02", date: "2026-10-29", time: "23:30", place: "P20", cast: ["MC", "C03", "C38"], kind: "branch", when: "ch09_case = \"screen\"",
    purpose: "The first night. Everyone takes shifts watching the workroom. On mine, upstairs in the kitchen, Ellis in an old jumper eats cereal and complains about a tutor and forgets to be impressive. Then Isaac's shadow comes down the stairs without him.",
    choices: [
      { id: "a", when: "not(b_ellis_offstage)", text: "Before the shadow: stay in the kitchen with Ellis and let him be ordinary.", type: "relational", set: { b_ellis_offstage: true, st_ellis: 3 } },
      { id: "b", text: "Go after the shadow.", type: "investigative", set: { nerve: "+2" } }
    ],
    next: "CH09.SCREEN.03"
  },
  {
    id: "CH09.SCREEN.03", date: "2026-10-30", time: "14:00", place: "P22", cast: ["MC", "C03", "C21"], kind: "branch", when: "ch09_case = \"screen\"",
    purpose: "Provenance. The binding needs its key, and the key was the screen's missing seventh panel. The family's papers say a great-aunt sold 'the odd panel' in 1971. Emmett Hsu, a trainee warden who works museum security to pay his way, gets us into the Whitcomb's stores after hours. The seventh panel is there: a painted woman on a riverbank, holding a small boat on a string. The painter bound something that had worn her drowned brother's shape, to keep it from taking anyone else. She acted to protect.",
    set: { fr_emmett: 1, screen_panel: true },
    next: "CH09.SCREEN.04"
  },
  {
    id: "CH09.SCREEN.04", date: "2026-10-31", time: "01:00", place: "P20", cast: ["MC", "C03", "C37", "C40", "C38"], kind: "branch", when: "ch09_case = \"screen\"",
    purpose: "Re-seating the binding. It takes three workers at once so the strain doesn't land on one: Chukwudi, Ellis and Caspar, each holding a part. (E08: a repair with three contributors distributes the strain of a bond.) Ellis needs four minutes to understand the key. Somebody has to keep the shade's attention for four minutes.",
    set: { e08: true, e08_src: "screen" },
    gains: ["e08"],
    choices: [
      { id: "a", when: "shade_lonely", text: "Talk to it. It's lonely. Keep it listening.", type: "investigative", set: { knack: "+3", b_ellis_danger: true, st_ellis: 4, screen_way: "talk" } },
      { id: "b", when: "craft >= 35", text: "Keep the lamps moving so it can't settle on anyone's shadow.", type: "investigative", set: { craft: "+3", b_ellis_danger: true, st_ellis: 4, screen_way: "lamps" } },
      { id: "c", text: "Stand between it and Isaac and hold still.", type: "relational", set: { nerve: "+3", b_ellis_danger: true, st_ellis: 4, screen_way: "stand" } }
    ],
    next: "CH09.SCREEN.05"
  },
  {
    id: "CH09.SCREEN.05", date: "2026-10-31", time: "11:00", place: "P20", cast: ["MC", "C37", "C03"], kind: "branch", when: "ch09_case = \"screen\"",
    purpose: "Morning. Isaac has his shadow back and is annoyed he slept through the end. The family gets their screen, and the story of a great-great-grandmother who wasn't cruel after all. Chukwudi writes the night in the error book, including what nearly went wrong. Then, drying his hands, he says the three-part method they used last night is old: 'Mercy House tried something like it once, for people instead of objects. Seven years ago. They closed it.'",
    set: { screen_done: true, fr_chukwudi: "+1", program_hint: true },
    next: "CH09.HALLOWEEN.01"
  },

  // ------------------------------------------------------------ Halloween
  {
    id: "CH09.HALLOWEEN.01", date: "2026-10-31", time: "19:30", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Halloween on Latch Lane. Martin in the shop doorway with a bowl of sweets he bought too many of; Will dressed, with great irony, as a print-shop owner. Kids in capes. I've slept four hours. Whatever I did under the city, the city is up here eating chocolate. A message comes, from Adrian or Reuben or Chukwudi: there was a program, seven years ago, and it's worth asking about.",
    set: { program_hint: true },
    next: "CH10.CHOICE.01"
  }
];
