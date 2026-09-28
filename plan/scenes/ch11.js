// CH11 — The Exhibition. Thu 19 Nov (bible Day 23).
// Purpose: social circles collide; Felix, Clive and the patron established; the photographed connection.
// Three conversations; I choose one. Each essential observation is also reachable later through another witness.
"use strict";
module.exports = [
  {
    id: "CH11.OPEN.01", date: "2026-11-19", time: "15:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "'The Material City', Basil Duret's exhibition at the Whitcomb, opens tonight, sponsored by the Sorrell Foundation. Half the people I know will be there for half a dozen reasons. How do I go?",
    choices: [
      { id: "a", text: "As crew. Desmond's company has the AV contract; Nolan got me on it.", type: "structural", set: { ex_as: "crew" }, to: "CH11.EXHIBIT.01" },
      { id: "b", when: "st_ellis >= 3", text: "As Ellis's guest. He has a piece in the student room and asked me to stand next to it with him.", type: "structural", set: { ex_as: "guest" }, to: "CH11.EXHIBIT.01" },
      { id: "c", when: "st_dominic >= 3", text: "As Dominic's plus-one. Benoît's ensemble is playing the interval, and Dominic's singing.", type: "structural", set: { ex_as: "performer" }, to: "CH11.EXHIBIT.01" }
    ]
  },
  {
    id: "CH11.EXHIBIT.01", date: "2026-11-19", time: "19:00", place: "P22", cast: ["MC", "C44", "C39", "C41", "C58", "C52", "C40", "C55", "C36", "C21"], kind: "common",
    purpose: "The Whitcomb's great gallery, full. Armand Sorrell gives a short speech about his son Octavian, dead ten years this March, in whose memory the foundation funds restoration, training and healthcare; the knack takes his grief like a weight on the chest. August Rell stands at his elbow, attentive. Clive Merritt, a ceramicist who teaches evening classes, is doing a glaze demonstration and making the donors laugh. Felix Brecht is filming for the foundation, for pay. Caspar on lights, Soren Venn working the room, Abel Mercer pale in cashmere, Emmett in a security blazer.",
    set: { fr_clive: 1, fr_felix: "+1", fr_caspar: "+1", armand_met: true, s12: "fore" },
    choices: [
      { id: "a", text: "Stand near Clive's demonstration. He's the only person here who seems to be enjoying himself.", type: "relational", set: { fr_clive: "+1" } },
      { id: "b", text: "Watch August Rell watching Armand.", type: "investigative", set: { august_watched: true, people: "+2" } }
    ],
    next: "CH11.EXHIBIT.02"
  },
  {
    id: "CH11.EXHIBIT.02", date: "2026-11-19", time: "20:00", place: "P22", cast: ["MC", "C15", "C04", "C53"], kind: "common",
    purpose: "The interval: Benoît's students, in borrowed black, and (if he found the nerve) Dominic, singing in public for the first time since he was turned. A caretaker at the back in a blue coat, Graham Bell, watching his son and not understanding why the hours changed.",
    choices: [
      { id: "a", when: "(st_dominic >= 2) and not(b_dominic_music)", text: "Catch Dominic's eye before he starts, and keep it.", type: "relational", set: { b_dominic_music: true, st_dominic: 3, s05: "fore" } },
      { id: "b", text: "Stand with Graham. Tell him his son sounds good.", type: "relational", set: { fr_graham: 1, s05: "fore" } }
    ],
    next: "CH11.CHOICE.01"
  },
  {
    id: "CH11.CHOICE.01", date: "2026-11-19", time: "20:45", place: "P22", cast: ["MC"], kind: "common",
    purpose: "Three conversations I could have tonight. I'll only get to one properly.",
    choices: [
      { id: "a", text: "Armand Sorrell. The grief in him is too big for the room.", type: "structural", set: { ch11_talk: "armand" }, to: "CH11.ARMAND.01" },
      { id: "b", text: "Felix. He's been filming the service gate all night, and he's scared.", type: "structural", set: { ch11_talk: "felix" }, to: "CH11.FELIX.01" },
      { id: "c", text: "Basil and Caspar, and the brass frame in case nine that hums when I walk past it.", type: "structural", set: { ch11_talk: "basil" }, to: "CH11.BASIL.01" }
    ]
  },
  {
    id: "CH11.ARMAND.01", date: "2026-11-19", time: "21:00", place: "P22", cast: ["MC", "C44", "C39"], kind: "branch", when: "ch11_talk = \"armand\"",
    purpose: "Armand listens with his whole face and makes me feel understood, which is a gift and a technique. He talks about Octavian: twenty, a fall at Quarry Lake, three days before they found him. He says there are 'people working on questions the rest of the world is too frightened to ask', and August Rell steers him gently to the next donor.",
    set: { octavian_known: true, armand_hope: true },
    choices: [
      { id: "a", text: "Ask him what questions.", type: "investigative", set: { armand_hint: true } },
      { id: "b", text: "Tell him I'm sorry, and mean it, and leave it there.", type: "relational", set: { armand_trust: true } }
    ],
    next: "CH11.EXHIBIT.04"
  },
  {
    id: "CH11.FELIX.01", date: "2026-11-19", time: "21:00", place: "P22", cast: ["MC", "C52"], kind: "branch", when: "ch11_talk = \"felix\"",
    purpose: "Felix, by the loading bay, fingerless gloves, lens cap in his teeth. At the foundation's autumn gala last month he filmed a van loading at the Ashcombe Conservatory's service gate; a delivery docket on the dashboard said 'restoration storage — Pump Nine'. He thinks it's nothing. He has checked it three times.",
    set: { e11: true, e11_src: "felix", fr_felix: "+1" },
    gains: ["e11"],
    choices: [
      { id: "a", text: "Ask for a copy of the clip. Promise to be careful with it.", type: "investigative", set: { e11_copy: true } },
      { id: "b", text: "Tell him to stop checking. Tell him why.", type: "relational", set: { warned_felix: true, fr_felix: "+1" },
        notes: "It doesn't save him. He's a person with his own judgment, and he keeps looking. It does mean that when he comes back changed, he knows who to call." }
    ],
    next: "CH11.EXHIBIT.04"
  },
  {
    id: "CH11.BASIL.01", date: "2026-11-19", time: "21:00", place: "P22", cast: ["MC", "C41", "C40"], kind: "branch", when: "ch11_talk = \"basil\"",
    purpose: "Case nine: 'Brass frame, anonymous, nineteenth century, lent by Rell & Company.' It hums. Caspar, who prepped it for display, says quietly that the wards on it aren't nineteenth-century; they're recent, and they're warden work. Basil elaborates fluently about its history, which means he doesn't know it.",
    set: { e10: true, e10_src: "caspar", frame_seen: true },
    gains: ["e10"],
    choices: [
      { id: "a", text: "Ask Caspar where Rell got it.", type: "investigative", set: { fr_caspar: "+1", rell_lead: true } },
      { id: "b", text: "Reach. Just for a second.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+2", frame_echo: true },
        notes: "Echo: a young warden gasping, a woman's voice saying 'it's straining, stop, it's straining': Ruth Carrow, seven years ago. This is the old program's linking frame." }
    ],
    next: "CH11.EXHIBIT.04"
  },
  {
    id: "CH11.EXHIBIT.04", date: "2026-11-19", time: "22:15", place: "P22", cast: ["MC", "C03", "C21"], kind: "common",
    purpose: "In the student room the heat of the gallery lights has made an old warded piece in the next case restless: glass rattling, a smell of hot metal, two donors noticing. Ellis can settle it, but he needs a few minutes with his back to the room, and he can't be seen doing it.",
    choices: [
      { id: "a", when: "(st_ellis >= 3) and not(b_ellis_danger)", text: "Hold the room. Talk loudly about ceramics until he's done.", type: "relational", set: { b_ellis_danger: true, st_ellis: 4, people: "+2" } },
      { id: "b", text: "Get Emmett to move the donors on.", type: "relational", set: { fr_emmett: "+1" } }
    ],
    next: "CH11.EXHIBIT.05"
  },
  {
    id: "CH11.EXHIBIT.05", date: "2026-11-19", time: "23:30", place: "P22", cast: ["MC", "C03", "C41"], kind: "common",
    purpose: "Basil's closing thanks credit 'my research team' for a discovery that was Ellis's alone. Ellis smiles perfectly for the room. Outside on the museum steps, in the cold, he stops.",
    set: { s03: "fore" },
    choices: [
      { id: "a", when: "b_ellis_danger and (hurt_ellis < 2)", text: "Stay. Don't fix it. Let him be angry and uncertain in front of me.", type: "relational", set: { b_ellis_badday: true, st_ellis: 5 } },
      { id: "b", text: "Tell him to go after Basil, officially. He deserves the credit.", type: "relational", set: { s03: "fore", ellis_fights: true } },
      { id: "c", text: "Walk him to the bus. Some nights you just walk someone to the bus.", type: "relational", set: { people: "+1" } }
    ],
    next: "CH11.END.01"
  },
  {
    id: "CH11.END.01", date: "2026-11-20", time: "00:40", place: "P18", cast: ["MC"], kind: "common",
    purpose: "The diner, alone with pie. The people tonight: a grieving patron and his attentive dealer; a filmmaker who noticed something; a ceramicist who made everyone laugh; a brass frame that remembers. None of it proves anything yet. All of it goes on the board.",
    next: "CH12.CHOICE.01"
  }
];
