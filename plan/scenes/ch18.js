// CH18 — A Method We Can Defend. Mon 1 – Sat 27 Feb (bible Day 35, stretched over February).
// Purpose: test the full distributed, interim, single-pair and extraction options; gather materials and willing, informed
// adults; the patients' own choices; the evidence that opens access. Ordinary alliances provide every essential capability.
// Readiness rules (enforced again in CH20): full = plan_full + materials 3 + volunteers >= 6 + all three consents;
// interim = plan_interim + volunteers >= 3 + consents; pair = plan_pair; extraction is always possible.
"use strict";
module.exports = [
  {
    id: "CH18.OPEN.01", date: "2027-02-01", time: "19:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "February. The coalition needs a table to sit at. Where we meet says something about who we'll answer to.",
    choices: [
      { id: "a", when: "know_wardens", text: "Mercy House. An institution that can be held to account, if we hold it.", type: "structural", set: { coalition_seat: "mercy" } },
      { id: "b", text: "The Okafors' workroom. Neutral, practical, and nobody's headquarters.", type: "structural", set: { coalition_seat: "workroom" } }
    ],
    next: "CH18.TABLE.01"
  },
  {
    id: "CH18.TABLE.01", date: "2027-02-01", time: "20:30", place: "P20", cast: ["MC", "C37", "C03", "C08", "C24", "C22"], kind: "common",
    purpose: "The first meeting. On the table, four ways to end it: a distributed bridge (several willing people each carrying a little, the way the screen was mended); an interim bridge (one volunteer per patient, heavy and slow, with medical support); the single-pair method Damian himself uses, for one patient only; or cutting the donors free and letting the patients' support end. Florian asks everyone to separate what they know from what they hope.",
    set: { options_known: true },
    next: "CH18.FRAME.01"
  },
  {
    id: "CH18.FRAME.01", date: "2027-02-03", time: "11:00", place: "P22", cast: ["MC", "C40", "C41", "C22"], kind: "common",
    purpose: "Material one: the old program's linking frame, the brass thing in case nine at the Whitcomb.",
    choices: [
      { id: "a", when: "e10", text: "Caspar and I show Basil the provenance is false; he returns the frame to the Okafors rather than be embarrassed.", type: "investigative", set: { materials: "+1", mat_frame: true, fr_caspar: "+1" } },
      { id: "b", when: "(fr_florian >= 2) or (orrell_known = \"florian\")", text: "Florian claims it as Mercy House property from the divided records.", type: "investigative", set: { materials: "+1", mat_frame: true, fr_florian: "+1", e10: true, e10_src: "florian" } },
      { id: "c", when: "(not(e10)) and (fr_florian < 2) and not(orrell_known = \"florian\")", text: "Walk into Rell & Company and ask August Rell what he wants for it.", type: "investigative", set: { materials: "+1", mat_frame: true, enemy_aware: "+1", owe_august: true, e10: true, e10_src: "chukwudi" },
        notes: "He sells it, and takes note of who bought it. The ring learns the coalition exists. Chukwudi takes one look at it on the workbench: the wards are recent warden work, the provenance a lie (E10)." }
    ],
    next: "CH18.STONES.01"
  },
  {
    id: "CH18.STONES.01", date: "2027-02-05", time: "16:00", place: "P51", cast: ["MC", "C24", "C48"], maybe: ["C06"], kind: "common",
    purpose: "Material two: anchor stones from the Marches, which hold a link steady while it moves. Percival can bring them through the orchard crossing, if someone in Bracken Court releases them.",
    choices: [
      { id: "a", when: "ally_court", text: "The court releases them: the hearing's goodwill.", type: "investigative", set: { materials: "+1", mat_stones: true } },
      { id: "b", when: "fr_lucan >= 2", text: "Lucan sends them from the Verre mill, no questions.", type: "investigative", set: { materials: "+1", mat_stones: true } },
      { id: "c", when: "st_ansel >= 4", text: "Ansel carries them himself, against his father's wishes.", type: "relational", set: { materials: "+1", mat_stones: true, ansel_defied: true } },
      { id: "d", text: "Nobody can release them in time. We'll manage without.", type: "expressive" }
    ],
    next: "CH18.THREAD.01"
  },
  {
    id: "CH18.THREAD.01", date: "2027-02-06", time: "10:00", place: "P20", cast: ["MC", "C37", "C40"], kind: "common",
    purpose: "Material three: ward thread, spun and charged, enough for six links. It's slow craft.",
    choices: [
      { id: "a", when: "fr_caspar >= 2", text: "Caspar spins it with Chukwudi for three nights straight, for cost, and on the third night tells me what he saw in August Rell's workroom.", type: "investigative", set: { materials: "+1", mat_thread: true, e15: true, e15_src: "caspar" },
        notes: "Letters from August to Armand promising 'an extension beyond the old limit': a lie August knows is a lie (E15)." },
      { id: "b", when: "fr_chukwudi >= 2", text: "Chukwudi spends the shop's own stock, and writes it in the error book as 'a gift'.", type: "investigative", set: { materials: "+1", mat_thread: true, fr_chukwudi: "+1" } },
      { id: "c", text: "Buy it from Rell & Company.", type: "investigative", set: { materials: "+1", mat_thread: true, enemy_aware: "+1", owe_august: true } }
    ],
    next: "CH18.TEST.01"
  },
  {
    id: "CH18.TEST.01", date: "2027-02-06", time: "20:00", place: "P20", cast: ["MC", "C37", "C03", "C08", "C24"], kind: "common",
    purpose: "The test of the distributed bridge, on a dummy link Chukwudi builds between two old pocket watches. Three contributors, then six, each carrying a little. It uses what the old program knew (E07), what the screen-mending or this demonstration shows (E08), and the frame and thread. Whether it can carry three real men depends on everything else: all three materials, enough volunteers, the patients' own choices. Somebody has to watch the link as it moves: my knack, or Ilyas's gauge, slower.",
    set: { e08: true },
    choices: [
      { id: "a", text: "Run it. Watch the rope with the knack as it shifts from one to six.", type: "investigative", set: { plan_full: true, e17: true, e17_src: "test", knack: "+3" } },
      { id: "b", text: "Run it. Let Ilyas's gauge do the watching; I'll only confirm.", type: "investigative", set: { plan_full: true, e17: true, e17_src: "test" } }
    ],
    next: "CH18.TEST.02"
  },
  {
    id: "CH18.TEST.02", date: "2027-02-09", time: "22:00", place: "P23", cast: ["MC", "C08", "C42", "C33"], kind: "common",
    purpose: "The interim bridge: one volunteer to each patient, heavy for the volunteer and slow to wean, with medical support throughout. Reuben, Ilyas and Rafi validate it on paper and on a monitored volunteer (me, or Reuben, for twenty minutes).",
    choices: [
      { id: "a", text: "Be the monitored volunteer. Feel what we're asking people to carry.", type: "investigative", set: { plan_interim: true, nerve: "+3", mc_volunteered: true } },
      { id: "b", text: "Let Reuben do it. He insists; I watch him sweat.", type: "relational", set: { plan_interim: true } }
    ],
    next: "CH18.SERVICE.01"
  },
  {
    id: "CH18.SERVICE.01", date: "2027-02-10", time: "23:00", place: "P23", cast: ["MC", "C08", "C13"], kind: "conditional", when: "st_reuben >= 3",
    purpose: "Reuben's mobile response service goes before the hospital board next week, with Nabil's rota and Rafi's night hours. Tonight he's holding the paperwork together with tape and not sleeping.",
    choices: [
      { id: "a", when: "not(b_reuben_needs)", text: "Take half the paperwork home. Make him sleep.", type: "relational", set: { b_reuben_needs: true, st_reuben: 4, s09: "fore" } },
      { id: "b", text: "Proofread the proposal with Nabil until it's bulletproof.", type: "relational", set: { s09: "fore", fr_nabil: "+1" } }
    ],
    next: "CH18.TEST.03"
  },
  {
    id: "CH18.SERVICE.02", date: "2027-02-17", time: "22:30", place: "P23", cast: ["MC", "C08"], kind: "conditional", when: "b_reuben_needs and not(b_reuben_stay) and not(closed_reuben)",
    purpose: "The hospital board approves the response service, on probation, with three conditions and no money. Reuben and I sit in the canteen after the meeting. There's no reason for either of us to still be here. He's still here.",
    choices: [
      { id: "a", when: "hurt_reuben < 2", text: "Say it: \"The reason's gone. I'm still here too.\"", type: "relational", set: { b_reuben_stay: true, st_reuben: 5, out_reuben: true, s09: "resolved:probation" } },
      { id: "b", text: "Go home. Congratulate him by text.", type: "expressive", set: { s09: "resolved:probation" } }
    ],
    next: "CH18.REGENT.01"
  },
  {
    id: "CH18.TEST.03", date: "2027-02-11", time: "15:00", place: "P51", cast: ["MC", "C24"], kind: "common",
    purpose: "The single-pair technique: one patient bridged to one prepared volunteer, fast, for emergencies. It's what the old program did and what Damian does now. Malcolm knows its steps, having watched it go wrong; the physician's own notes would confirm them.",
    choices: [
      { id: "a", when: "(fr_malcolm >= 1) or e16", text: "Walk through it with Malcolm until he stops flinching at the steps.", type: "investigative", set: { plan_pair: true } },
      { id: "b", when: "(fr_malcolm < 1) and not(e16)", text: "Nobody here has seen it done. We won't guess at it.", type: "expressive", set: {} }
    ],
    next: "CH18.REVIEW.01"
  },
  {
    id: "CH18.REVIEW.01", date: "2027-02-12", time: "10:00", place: "P01", cast: ["MC", "C01", "C20", "C21", "C18", "C17"], kind: "common",
    purpose: "Mercy House's promotion review. Adrian, Darius and Emmett, and a training report that isn't true. What happens here decides whether Mercy House is an institution we can stand behind in March.",
    choices: [
      { id: "a", when: "b_adrian_report", text: "Stand beside Adrian when he tells the truth about the report.", type: "relational", set: { s07: "resolved:truth", ally_mercy: true, fr_emmett: "+1" } },
      { id: "b", when: "orrell_known = \"confront\"", text: "Make Orrell account for the divided records in front of the panel.", type: "investigative", set: { s07: "resolved:reckoning", ally_mercy: true, orrell_pressed: true } },
      { id: "c", when: "(orrell_known = \"hold\") and (e07)", text: "Use what I held back: Orrell cooperates in exchange for handling his old concealment in March, properly.", type: "structural", set: { ally_mercy: true, orrell_deal: true, s07: "resolved:deal" } },
      { id: "d", text: "Stay out of it. It's their house.", type: "expressive", set: { s07: "resolved:quiet" } }
    ],
    next: "CH18.CONSENT.01"
  },
  {
    id: "CH18.CONSENT.01", date: "2027-02-14", time: "19:00", place: "P18", cast: ["MC", "C07", "C51", "C52", "C08"], kind: "common",
    purpose: "The diner, the corner booth, the three patients and Reuben with the options written out plainly: what each plan costs, what each might do to them and to the men on the other end of their ropes. Each decides for himself. Nobody is asked to be grateful.",
    set: { consent_q: true, consent_s: true, consent_f: true },
    choices: [
      { id: "a", text: "Listen. Only answer questions.", type: "relational", set: { people: "+2" } },
      { id: "b", when: "alive_quentin", text: "When Quentin says 'free Eamon first, even if it's me that pays', don't argue with him.", type: "relational", set: { q_free_first: true } }
    ],
    next: "CH18.VOLUNTEERS.01"
  },
  {
    id: "CH18.VOLUNTEERS.01", date: "2027-02-16", time: "18:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Volunteers: adults who understand exactly what it costs and say yes anyway. Each one has to be asked properly, and each can say no. (I can ask as many circles as I've earned; I'll know when it's enough.)",
    choices: [
      { id: "a", once: true, when: "fr_ernesto >= 1", text: "Eastbank: Ernesto's association, at the long table.", type: "relational", set: { volunteers: "+2", ally_eastbank: true }, to: "CH18.VOLUNTEERS.01" },
      { id: "b", once: true, when: "ally_mercy", text: "Mercy House: wardens who'll carry a link for someone they've never met.", type: "relational", set: { volunteers: "+2" }, to: "CH18.VOLUNTEERS.01" },
      { id: "c", once: true, when: "(fr_martin >= 2) or gift_martin or family_case", text: "Latch Lane: Martin, and Owen and Peter from the flatshare, if they'll hear it.", type: "relational", set: { volunteers: "+2" }, to: "CH18.VOLUNTEERS.01" },
      { id: "d", once: true, when: "(fr_lucan >= 1) or (fr_percival >= 1)", text: "The Marches: Lucan's household, Percival's orchard workers.", type: "relational", set: { volunteers: "+1" }, to: "CH18.VOLUNTEERS.01" },
      { id: "e", once: true, when: "fr_otis >= 1", text: "Lyle's Bakery: Otis, for Silas. He doesn't let me finish the sentence.", type: "relational", set: { volunteers: "+1", fr_otis: "+1" }, to: "CH18.VOLUNTEERS.01" },
      { id: "f", once: true, when: "fr_milo >= 1", text: "The Regent's human staff, through Milo.", type: "relational", set: { volunteers: "+1" }, to: "CH18.VOLUNTEERS.01" },
      { id: "g", text: "That's everyone I can honestly ask.", type: "structural", set: {} }
    ],
    next: "CH18.SERVICE.02"
  },
  {
    id: "CH18.REGENT.01", date: "2027-02-18", time: "21:00", place: "P14", cast: ["MC", "C31", "C36", "C33", "C04"], kind: "common",
    purpose: "The Regent residents' vote on fees and feeding support, and on whether the trust will stand with the rescue: vampires can't donate life they're borrowing, but they can guard, carry, and see in the dark. Abel wants exceptions. Lucien wants a home.",
    choices: [
      { id: "a", when: "ally_regent_hint or (fr_lucien >= 2) or (st_dominic >= 3)", text: "Speak for Lucien's version: shared rules, no bought exceptions, and help in March.", type: "relational", set: { ally_regent: true, s16: "resolved:shared" } },
      { id: "b", text: "Stay silent. It's their home.", type: "expressive", set: { s16: "resolved:split" } }
    ],
    next: "CH18.EVIDENCE.01"
  },
  {
    id: "CH18.EVIDENCE.01", date: "2027-02-20", time: "14:00", place: "P16", cast: ["MC"], kind: "common",
    purpose: "Pump Nine: a decommissioned pumping station on the riverside, supposedly empty for twenty years. Proving it isn't (E12), and finding a way in for the night.",
    choices: [
      { id: "a", when: "told_gareth or (fr_gareth >= 1)", text: "Gareth's inspection: utility records, a neighbour's statement, a licence breach. Official, and it opens the gate.", type: "investigative", set: { e12: true, e12_src: "gareth", acc_pump: true, fr_gareth: "+1" } },
      { id: "b", when: "pump_film or old_map", text: "Felix's footage and Pavel's old utility tunnels: lights on at night, and a culvert door nobody remembers.", type: "investigative", set: { e12: true, e12_src: "film", acc_pump: true } },
      { id: "c", when: "not(told_gareth) and (fr_gareth < 1) and not(pump_film) and not(old_map)", text: "Micah rewired the substation next door last year. He knows where the cables go in.", type: "investigative", set: { e12: true, e12_src: "micah", acc_pump: true } }
    ],
    next: "CH18.HARLAN.01"
  },
  {
    id: "CH18.HARLAN.01", date: "2027-02-22", time: "18:30", place: "P33", cast: ["MC", "C46"], kind: "common",
    purpose: "The Little Glass Arcade after closing: Harlan Greaves in his room above the locksmith, where Eamon used to rent the room next door. He carried people through a controlled crossing for money. He didn't know what for. He knows now.",
    choices: [
      { id: "a", when: "eamon_letter_kept or eamon_bag", text: "Give him Eamon's unposted letter to read. Let him decide.", type: "relational", set: { e13: true, e13_src: "harlan", harlan_confessed: true, ally_keepers: true, acc_cross: true } },
      { id: "b", when: "people >= 40", text: "Talk to him plainly about what he can still do.", type: "relational", set: { e13: true, e13_src: "harlan", harlan_confessed: true, ally_keepers: true, acc_cross: true } },
      { id: "c", text: "Threaten to expose him.", type: "investigative", set: { e13: true, e13_src: "threat", acc_cross: true, harlan_hostile: true } }
    ],
    next: "CH18.NOTES.01"
  },
  {
    id: "CH18.NOTES.01", date: "2027-02-24", time: "15:00", place: "P41", cast: ["MC", "C14"], kind: "conditional", when: "russell_logging or winton_log",
    purpose: "Winton Court: Russell's log of the physician's visits, and the rented flat itself, which the tenants' fight has given Russell every legal reason to inspect. In a desk drawer, Damian's own case notes: deliberate prolongation of the patients' dependence, the deaths planned to be 'predictable', and a date, underlined: 14/3, dawn, consolidation; transfer the night before.",
    set: { e16: true, e16_src: "winton", know_deadline: true, s11: "fore" },
    gains: ["e16"],
    next: "CH18.KNACK.01"
  },
  {
    id: "CH18.KNACK.01", date: "2027-02-26", time: "17:00", place: "P51", cast: ["MC", "C24"], kind: "conditional", when: "(trained = \"malcolm\") or (trained = \"florian\") or (trained = \"self\")",
    purpose: "Orchard House, the last training weekend. Malcolm (or Ruth Carrow's notes, read aloud to the dog) teaches me to hold a thread without being pulled along it: to watch a link move from one person to six and say, calmly, when it's slipping.",
    choices: [
      { id: "a", when: "knack >= 30", text: "Hold it. For a full minute. Then two.", type: "investigative", set: { knack_monitor: true, knack: "+5" } },
      { id: "b", when: "knack < 30", text: "I can't hold it long enough yet. The gauge will have to do it.", type: "expressive", set: {} }
    ],
    next: "CH18.END.01"
  },
  {
    id: "CH18.END.01", date: "2027-02-27", time: "21:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The end of February. On the wall: what we can do, and what we can't. The thaw is coming. So is the fourteenth of March, whether or not I know its significance yet.",
    next: "CH19.CARD.01"
  }
];
