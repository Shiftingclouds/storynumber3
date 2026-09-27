// CH21 — The Links Between Us. Sat 13 Mar 22:00 – Sun 14 Mar dawn (bible Day 37, night).
// Purpose: the authored two-site climax. Role and plan choose the scene variants. Two prewritten disruptions with visible
// causes can reduce capacity one step (full → interim → pair → extraction). Survival and culpability are resolved here.
//   DIS_WATCH: enemy_aware >= 3 and not(ally_keepers)          → the crossing is watched; the donor team loses its timing
//   DIS_WARN:  ch19_answer = "refuse" and not(armand_broken)    → Armand warns Damian; he moves early
"use strict";
module.exports = [
  {
    id: "CH21.OPEN.01", date: "2027-03-13", time: "22:00", place: "P16", cast: ["MC"], kind: "common",
    purpose: "Ten o'clock. The river loud with meltwater. Three teams, one clock.",
    set: { cap: 0 },
    choices: [
      { id: "a", when: "role = \"patient\"", text: "Pump Nine.", type: "structural", to: "CH21.PATIENT.01" },
      { id: "b", when: "role = \"donor\"", text: "The crossing, then Stillwater.", type: "structural", to: "CH21.DONOR.01" },
      { id: "c", when: "role = \"coord\"", text: "The Iron Footbridge chamber.", type: "structural", to: "CH21.COORD.01" }
    ]
  },

  // ------------------------------------------------------------ patient site
  {
    id: "CH21.PATIENT.01", date: "2027-03-13", time: "22:40", place: "P16", cast: ["MC", "C08", "C37", "C03", "C07", "C51", "C52", "C04"], kind: "branch", when: "role = \"patient\"",
    purpose: "Pump Nine's machinery hall: iron, damp, the linking apparatus under work lights, and the three patients, who came in Damian's cars because we let them, with us behind. Reuben with the drips; the Okafors with the anchors and the frame; Dominic at the doors, because it's dark. The ropes, to my eye, run out through the walls toward the river and the crossing.",
    choices: [
      { id: "a", when: "knack_monitor", text: "Take my place at the frame and watch the links. Say when they slip.", type: "investigative", set: { monitor: "knack" } },
      { id: "b", text: "Let Ilyas's gauge watch. I'll carry, and fetch, and hold.", type: "investigative", set: { monitor: "gauge" } }
    ],
    next: "CH21.PATIENT.02"
  },
  {
    id: "CH21.PATIENT.02", date: "2027-03-14", time: "00:10", place: "P16", cast: ["MC", "C56", "C08"], kind: "branch", when: "role = \"patient\"",
    purpose: "Damian Holt walks in from the inspection passage in a good plain coat, and he's pleasant, and he asks excellent questions, and he's pleased to meet the sensitive at last. He explains everything coherently. He never once calls the donors by their names. Reuben says his name like it hurts.",
    choices: [
      { id: "a", when: "ally_mercy or told_gareth", text: "Keep him talking until Adrian or Gareth are through the doors.", type: "investigative", set: { damian_fate: "arrested" } },
      { id: "b", when: "st_reuben >= 3", text: "Let Reuben talk to him. Stand where Damian can see I'm not afraid.", type: "relational", set: { damian_fate: "custody", reuben_faced: true } },
      { id: "c", text: "Go for the apparatus before he can reach it.", type: "investigative", set: { damian_fate: "fled", nerve: "+3" },
        notes: "He goes out through the passage he came in by. He'll be found; not tonight." }
    ],
    next: "CH21.TURN.01"
  },

  // ------------------------------------------------------------ donor site
  {
    id: "CH21.DONOR.01", date: "2027-03-13", time: "22:30", place: "P15", cast: ["MC", "C06", "C46", "C01", "C02"], kind: "branch", when: "role = \"donor\"",
    purpose: "The Iron Footbridge chamber, then the other wind. Ansel, Adrian, Micah. Harlan keeping the door, for once on the right side of it, or not at all.",
    choices: [
      { id: "a", when: "ally_keepers", text: "Through, on Harlan's count.", type: "investigative", set: {} },
      { id: "b", when: "not(ally_keepers)", text: "Through Northwood instead: longer, colder, unwatched.", type: "investigative", set: { nerve: "+2" } }
    ],
    next: "CH21.DONOR.02"
  },
  {
    id: "CH21.DONOR.02", date: "2027-03-14", time: "00:30", place: "P56", cast: ["MC", "C06", "C01", "C02", "C49", "C57", "C58"], kind: "branch", when: "role = \"donor\"",
    purpose: "Stillwater, warehouse seven, the three beds being readied for moving. Eamon, Hugo and Clive, grey and sedated, strapped for transport. Four men and a boat. The release has to happen on the relay's signal, not before: cut a link out of time and a patient dies at the other end.",
    choices: [
      { id: "a", when: "inside_man", text: "Our man inside opens the water door on the shift change.", type: "investigative", set: {} },
      { id: "b", when: "still_layout", text: "In through the window I memorised in January.", type: "investigative", set: { craft: "+2" } },
      { id: "c", text: "Straight through the gate with Micah and Adrian.", type: "investigative", set: { hurt_mc: "+1" } }
    ],
    next: "CH21.TURN.01"
  },

  // ------------------------------------------------------------ coordination
  {
    id: "CH21.COORD.01", date: "2027-03-13", time: "22:15", place: "P15", cast: ["MC", "C05", "C46"], kind: "branch", when: "role = \"coord\"",
    purpose: "The crossing chamber under the Iron Footbridge: Nolan's relays taped to the brickwork, a runner's rope through the threshold (phones don't cross), Harlan at the door. Two worlds, one clock, and I'm the clock.",
    choices: [
      { id: "a", when: "st_nolan >= 3", text: "Run it with Nolan: his relays, my timing, no wasted words.", type: "relational", set: {} },
      { id: "b", text: "Run it by the book: a written sequence, read aloud, checked twice.", type: "investigative", set: { people: "+2" } }
    ],
    next: "CH21.COORD.02"
  },
  {
    id: "CH21.COORD.02", date: "2027-03-14", time: "00:20", place: "P15", cast: ["MC", "C05", "C46"], kind: "branch", when: "role = \"coord\"",
    purpose: "Midnight. The relays crackle with both sites at once: Pump Nine with Damian in the room, Stillwater with a boat at the water door. Whatever goes wrong tonight, I'll hear it first.",
    next: "CH21.TURN.01"
  },

  // ------------------------------------------------------------ the turn: disruptions, then the value choice
  {
    id: "CH21.TURN.01", date: "2027-03-14", time: "01:00", place: "P16", cast: ["MC"], kind: "common",
    purpose: "The moment the plan meets the night. If the crossing was watched, the donor team is forty minutes behind and the distributed bridge's timing is gone. If Damian was warned, he moved early and the anchors are damaged. Each costs one step. Then the choice: what we actually do with what we have.",
    set: { cap_full: false, cap_interim: false, cap_pair: false },
    choices: [
      { id: "a", when: "(plan_chosen = \"full\") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = \"refuse\") and not(armand_broken)) and ally_mercy", text: "The distributed bridge holds. Hand the evidence and the method to Mercy House, under oversight, and make them answer for it.", type: "structural", set: { ending: "A" } },
      { id: "b", when: "(plan_chosen = \"full\") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = \"refuse\") and not(armand_broken)) and ally_eastbank and ally_regent", text: "The distributed bridge holds. Keep the evidence with the coalition and Gareth; the communities build their own recovery and accountability.", type: "structural", set: { ending: "B" } },
      { id: "c", when: "((plan_chosen = \"full\") or (plan_chosen = \"interim\")) and plan_interim and (volunteers >= 3) and not(((ch19_answer = \"negotiate\") or (ch19_answer = \"monitor\")))", text: "The interim bridge: one volunteer to each patient, a long recovery, and every one of them alive.", type: "structural", set: { ending: "C" } },
      { id: "d", when: "((plan_chosen = \"full\") or (plan_chosen = \"interim\")) and plan_interim and (volunteers >= 3) and ((ch19_answer = \"negotiate\") or (ch19_answer = \"monitor\"))", text: "The interim bridge, and Armand's terms: everyone lives, and a compromise I'll carry for years.", type: "structural", set: { ending: "D" } },
      { id: "e", when: "plan_pair and alive_quentin", text: "One bridge. Quentin.", type: "structural", set: { ending: "F_Q" } },
      { id: "f", when: "plan_pair", text: "One bridge. Silas.", type: "structural", set: { ending: "F_S" } },
      { id: "g", when: "plan_pair", text: "One bridge. Felix.", type: "structural", set: { ending: "F_F" } },
      { id: "h", text: "Free the donors. End the links. Let the cost be what it is.", type: "structural", set: { ending: "E" } }
    ],
    next: "CH21.DAWN.01"
  },
  {
    id: "CH21.DAWN.01", date: "2027-03-14", time: "05:40", place: "P06", cast: ["MC"], kind: "common",
    purpose: "Dawn on the fourteenth of March, the tenth anniversary of a boy's fall at Quarry Lake, and nothing is attempted in his name. The river high and brown. Whoever is alive is alive. I sit on the Riverside Steps and can't feel my hands.",
    next: "CH22.OPEN.01"
  }
];
