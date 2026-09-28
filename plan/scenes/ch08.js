// CH08 — The Second Return. Thu 15 – Sat 17 Oct (bible Day 14).
// Purpose: Silas's case proves repetition; Hugo's absence gives it a human face. Interview, protect, or verify Silas.
// Off-screen: Hugo taken Mon 12 Oct 06:00; Silas killed Tue 13 late, returned Wed 14.
"use strict";
module.exports = [
  {
    id: "CH08.NEWS.01", date: "2026-10-15", time: "06:30", place: "P09", cast: ["MC", "C30", "C51", "C08", "C42"], kind: "common",
    purpose: "Delivering Otis Lyle's new price boards at dawn, because Martin printed them. Lyle's Bakery smells of butter and burnt sugar. Silas Fenwick, the apprentice, is at the ovens, and the knack goes off like a struck bell: a second rope, running out of him and away. Otis says Silas was off two days 'on some paid course' and came back wrong: quiet, cold, forgetting things he's done a thousand times.",
    choices: [
      { id: "a", text: "Stay. Talk to Silas after the morning rush, with Otis there.", type: "structural", set: { ch08_way: "bakery" }, to: "CH08.BAKERY.01" },
      { id: "b", when: "st_reuben >= 2", text: "Get him measured. Call Reuben: something on paper before anyone argues.", type: "structural", set: { ch08_way: "hospital" }, to: "CH08.HOSPITAL.01" },
      { id: "c", when: "st_reuben < 2", text: "Get him measured. Call the hospital lab.", type: "structural", set: { ch08_way: "hospital" }, to: "CH08.HOSPITAL.01" }
    ]
  },
  {
    id: "CH08.BAKERY.01", date: "2026-10-15", time: "15:00", place: "P09", cast: ["MC", "C30", "C51", "C02"], kind: "branch", when: "ch08_way = \"bakery\"",
    purpose: "After closing, the long table in the back. Micah is here too, fixing the proving cabinet he fixed last month, and pulls out a chair for me without looking up. Silas tells a false story (a flu, a bad weekend) to protect his job and his privacy, and the knack reads fear, not a lie. Otis found letters in the bin: a 'supervised paid trial', good money, a confidentiality clause.",
    set: { b_micah_seat: true, st_micah: 2, fr_otis: 1, fr_silas: 1 },
    choices: [
      { id: "a", text: "Don't push. Tell Silas what happened to Quentin, and let him decide.", type: "relational", set: { fr_silas: "+1", e09: true, e09_src: "silas", silas_trusts: true } },
      { id: "b", text: "Ask Otis for the letters, with Silas in the room.", type: "investigative", set: { e09: true, e09_src: "otis", fr_silas: "-1" } },
      { id: "c", text: "Protect him first: ask Reuben to keep an eye on the bakery.", type: "relational", set: { silas_protected: true, fr_otis: "+1" } }
    ],
    next: "CH08.SILAS.02"
  },
  {
    id: "CH08.HOSPITAL.01", date: "2026-10-15", time: "22:00", place: "P23", cast: ["MC", "C08", "C42", "C33", "C13", "C51"], kind: "branch", when: "ch08_way = \"hospital\"",
    purpose: "Silas agrees to come in after his shift, frightened and polite. Nabil gets him through reception without a file. Ilyas measures the same impossible thing he measured in Quentin, or sees it for the first time, and writes it down in his own words. It's not a one-off. It's a method.",
    set: { e05: true, e05_c: true, fr_silas: 1, fr_ilyas: "+1", repeated: true },
    choices: [
      { id: "a", when: "not(b_reuben_explain)", text: "Explain to Reuben what I see: the rope, the second one.", type: "relational", set: { b_reuben_explain: true, gift_reuben: true, st_reuben: 3 } },
      { id: "b", text: "Ask Silas, gently, where the trial was held.", type: "investigative", set: { e09: true, e09_src: "silas", fr_silas: "+1" } }
    ],
    next: "CH08.SILAS.02"
  },
  {
    id: "CH08.SILAS.02", date: "2026-10-16", time: "19:30", place: "P18", cast: ["MC", "C07", "C51"], kind: "common",
    purpose: "Truss Road Diner. Quentin and Silas at the same table, two men who died and are pretending to be fine. Quentin doesn't wait for me to handle it: he tells Silas what he knows, what he was told, what he's afraid of, in the practical way he says everything. Silas cries once, briefly, into a napkin, and then asks what they do now.",
    set: { repeated: true },
    choices: [
      { id: "a", when: "st_quentin >= 3", text: "Let Quentin lead. He's better at this than me.", type: "relational", set: { b_quentin_acts: true, st_quentin: 4 } },
      { id: "b", text: "Make a plan with both of them: nobody goes to a 'follow-up' alone.", type: "investigative", set: { buddy_plan: true } }
    ],
    next: "CH08.HUGO.01"
  },
  {
    id: "CH08.HUGO.01", date: "2026-10-17", time: "11:00", place: "P27", cast: ["MC", "C12", "C28", "C11", "C16"], kind: "common",
    purpose: "Saturday at the depot. Hugo Naranjo hasn't been seen since he clocked off on Monday morning. He missed his interview for the permanent post, the thing he talked about all night. Owen's organising a search; Pavel keeps checking his phone; Peter feels responsible: Hugo was a Monday regular at Double Shift, and Peter noticed him not come in, the way he noticed Eamon. Hugo's jacket is still on its hook.",
    set: { hugo_missing: true },
    choices: [
      { id: "a", text: "Touch the jacket. Reach.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+2", same_voice2: true },
        notes: "Cold, a van, the calm voice again. A hunch confirmed for me; evidence for nobody else." },
      { id: "b", when: "fr_gareth >= 1", text: "Call Gareth Moss. A missing adult is his whole job.", type: "investigative", set: { told_gareth: true, fr_gareth: "+1", gareth_hugo: true } },
      { id: "c", text: "Help Owen with the search posters. Martin will print them for free.", type: "relational", set: { fr_owen: "+1" } }
    ],
    next: "CH08.END.01"
  },
  {
    id: "CH08.END.01", date: "2026-10-17", time: "20:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The pattern, said out loud in my room: two men returned, two men missing, and a rope running out of each returned man to somewhere. And two invitations for the end of the month, because the city doesn't stop for a pattern: Owen's night crews have a problem in the Northline service tunnels that the wardens have been asked to look at; and Ellis's father has a painted screen in the workshop that's doing something it shouldn't.",
    choices: [
      { id: "a", text: "The tunnels. Somebody's being lured into the dark and I can help find them.", type: "structural", set: { ch09_case: "tunnels" } },
      { id: "b", text: "The screen. Ellis asked me, and he doesn't ask.", type: "structural", set: { ch09_case: "screen" } }
    ],
    next: "CH09.OPEN.01"
  }
];
