// CH16 — The Third Return. Mon 4 – Sat 9 Jan (bible Day 32).
// Purpose: back in Calder; Felix changed; patients connected to donors; the physician identified (two routes).
// Changed home/work circumstances acknowledge earlier decisions. Felix's evidence has an alternate copy.
"use strict";
module.exports = [
  {
    id: "CH16.HOME.01", date: "2027-01-04", time: "09:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Monday. The shop in January: dead quiet, the Christmas money already gone to the bank. Martin has decided something while I was away (a part-timer, shorter hours, or selling the second press, depending on what I did in the autumn). Will's program trial is in April; he's filming his own games now. A text from Ellis, sent last night at three: 'Felix isn't right. Can you come?'",
    set: { s01: "fore" },
    choices: [
      { id: "a", text: "Tell Martin where I really was. Not all of it. More than before.", type: "relational", set: { fr_martin: "+1" } },
      { id: "b", text: "Go. Ellis never asks.", type: "relational", set: { st_ellis: "+1" } }
    ],
    next: "CH16.FELIX.01"
  },
  {
    id: "CH16.FELIX.01", date: "2027-01-04", time: "14:00", place: "P21", cast: ["MC", "C52", "C03"], kind: "common",
    purpose: "Felix's room in Bellweather Court: blackout blinds, a laptop of footage. The knack in the doorway: a third rope, fresh and raw, running out of him toward the river and away, to the man I watched them carry into warehouse seven. Felix remembers going to film Pump Nine at night, a car, a kind voice. Then waking in his own bed, cold, with a text telling him he'd had a 'turn' and must stay quiet. Ellis sits on the floor holding his hand.",
    set: { fr_felix: "+1", felix_returned: true },
    choices: [
      { id: "a", text: "Ask to see the footage. Tell him why. Let him say no.", type: "relational", set: { e11: true, e11_src: "felix", pump_film: true, felix_shared: true } },
      { id: "b", text: "Don't ask. Milo lent him the camera; Milo keeps backups.", type: "investigative", set: { e11: true, e11_src: "milo", pump_film: true, fr_milo: "+1" } },
      { id: "c", text: "Tell Felix about Quentin and Silas. He isn't alone.", type: "relational", set: { fr_felix: "+1", felix_told: true } }
    ],
    next: "CH16.FELIX.02"
  },
  {
    id: "CH16.FELIX.02", date: "2027-01-04", time: "22:00", place: "P20", cast: ["MC", "C52", "C03", "C37"], kind: "common",
    purpose: "That night at Okafor Restoration, Felix's new link flares and he goes grey in the chair, gasping. Ellis knows how to steady a binding, but he needs his back to the room and his hands on the token, and Felix is frightened and fighting him.",
    choices: [
      { id: "a", when: "(st_ellis >= 3) and not(b_ellis_danger)", text: "Hold Felix. Talk. Keep him still while Ellis works.", type: "relational", set: { b_ellis_danger: true, st_ellis: 4 } },
      { id: "b", when: "knack >= 25", text: "Watch the rope and tell Ellis when it slackens.", type: "investigative", set: { knack: "+3", st_ellis: "+1" } },
      { id: "c", text: "Get Chukwudi. He's done this before.", type: "relational", set: { fr_chukwudi: "+1" } }
    ],
    next: "CH16.PATIENTS.01"
  },
  {
    id: "CH16.PATIENTS.01", date: "2027-01-06", time: "19:00", place: "P20", cast: ["MC", "C07", "C51", "C52", "C37", "C42"], kind: "common",
    purpose: "Wednesday evening. Three men who died and came back, in one workroom for the first time: Quentin, Silas, Felix. Chukwudi tests the material anchors; Ilyas brings his numbers; I trace the ropes. Quentin's runs to Eamon. Silas's runs to Hugo. Felix's runs to Clive. The donors are alive, and every day the patients spend on them is a day taken from someone chained in a warehouse. Quentin is the first to say it out loud, and he's angry, and he's right.",
    set: { e14_c: true, patients_matched: true, know_donors: 3 },
    choices: [
      { id: "a", when: "(st_quentin >= 3) and not(b_quentin_acts)", text: "Let Quentin run the room. He's earned it.", type: "relational", set: { b_quentin_acts: true, st_quentin: 4 } },
      { id: "b", text: "Ask each of them what they want. Separately. No audience.", type: "relational", set: { people: "+2", patients_asked: true } }
    ],
    next: "CH16.IDENT.01"
  },
  {
    id: "CH16.IDENT.01", date: "2027-01-07", time: "11:00", place: "P30", cast: ["MC", "C19", "C08"], kind: "common",
    purpose: "Who is the man in the good coat? The van in the lane had a lily painted on it. Rusk Funeral Rooms' lily. Simeon Rusk is gentle with the bereaved and harsh with anyone who treats their grief as an inconvenience, and his ledger for 30 August has an entry that was changed afterwards: a transfer under an old Mercy House arrangement, with an authorisation code. Reuben reads the code and sits down on a coffin trolley. It's Damian's.",
    set: { e04: true, e04_src: "rusk", know_damian: true },
    gains: ["e04"],
    choices: [
      { id: "a", when: "st_reuben >= 3", text: "Stay with Reuben. Let him say whatever he needs to about the man who taught him.", type: "relational", set: { b_reuben_damian: true, st_reuben: 4 } },
      { id: "b", text: "Press Simeon: who else has used the arrangement, and when?", type: "investigative", set: { e04_c: true, simeon_pressed: true } },
      { id: "c", when: "course_lead", text: "Check it a second way: the Southmere first-aid course that gave Quentin his token. Who taught it?", type: "investigative", set: { e04_c: true, course_confirms: true },
        notes: "The recreation centre's August register: 'Instructor: Dr D. Holt.' The same man." }
    ],
    next: "CH16.WEEK.01"
  },
  {
    id: "CH16.WEEK.01", date: "2027-01-07", time: "18:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Thursday night. We know who. We know where. We don't know how to get three men out of a warehouse without killing three others. I can't think straight. There's one person I want to spend the rest of this week with.",
    choices: [
      { id: "a", when: "st_adrian >= 3", text: "Adrian.", type: "structural", set: { wk16: "adrian" }, to: "CH16.MERCY.01" },
      { id: "b", when: "st_micah >= 3", text: "Micah.", type: "structural", set: { wk16: "micah" }, to: "CH16.EASTBANK.01" },
      { id: "c", when: "st_dominic >= 3", text: "Dominic.", type: "structural", set: { wk16: "dominic" }, to: "CH16.REGENT.01" },
      { id: "d", when: "st_nolan >= 3", text: "Nolan.", type: "structural", set: { wk16: "nolan" }, to: "CH16.HOME.02" },
      { id: "e", when: "st_quentin >= 3", text: "Quentin.", type: "structural", set: { wk16: "quentin" }, to: "CH16.PATIENTS.02" },
      { id: "f", when: "st_ellis >= 3", text: "Ellis.", type: "structural", set: { wk16: "ellis" }, to: "CH16.FELIX.03" },
      { id: "g", when: "st_reuben >= 3", text: "Reuben.", type: "structural", set: { wk16: "reuben" }, to: "CH16.REUBEN.01" },
      { id: "h", text: "Martin and Will. Home.", type: "structural", set: { wk16: "home" }, to: "CH16.FAMILY.01" }
    ]
  },
  {
    id: "CH16.MERCY.01", date: "2027-01-08", time: "20:00", place: "P01", cast: ["MC", "C01"], kind: "branch", when: "wk16 = \"adrian\"",
    purpose: "Mercy House's workshop, Adrian mending the elastic on the jacket everybody tells him to throw away. The promotion review is next month, and the training report he wrote for Emmett is in the file.",
    choices: [
      { id: "a", when: "not(b_adrian_report)", text: "Ask him about the report. Let him tell it.", type: "relational", set: { b_adrian_report: true, st_adrian: 4, s07: "fore" } },
      { id: "b", text: "Help with the jacket. Talk about anything but work.", type: "relational", set: { people: "+1" } }
    ],
    next: "CH16.MERCY.02"
  },
  {
    id: "CH16.MERCY.02", date: "2027-01-08", time: "23:30", place: "P01", cast: ["MC", "C01"], kind: "branch", when: "wk16 = \"adrian\"",
    purpose: "The roof at half eleven, cold enough to hurt. Adrian says, in complete practical sentences, that he keeps coming to find me when there's no reason, and that when I disagree with him it stays with him for days, and he doesn't know what to do about either. Then he waits. He's learning to wait.",
    choices: [
      { id: "a", when: "b_adrian_offduty and b_adrian_report and (hurt_adrian < 2)", text: "\"I know what to do about it.\" Tell him what I want.", type: "relational", set: { b_adrian_want: true, st_adrian: 5, out_adrian: true } },
      { id: "b", text: "\"You're my friend. That's what that is.\" Close the door gently.", type: "relational", set: { closed_adrian: true } },
      { id: "c", text: "\"Ask me again when this is over.\"", type: "relational", set: { adrian_later: true } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.EASTBANK.01", date: "2027-01-08", time: "19:00", place: "P07", cast: ["MC", "C02", "C25", "C26"], kind: "branch", when: "wk16 = \"micah\"",
    purpose: "Serrano Yard. Micah's outside apprenticeship starts Monday, and Ernesto has booked him onto three family jobs the same week. Leandro, who said he'd cover, has quietly stopped saying it. Micah is agreeing to everything in a flat voice.",
    choices: [
      { id: "a", when: "(st_micah >= 3) and not(b_micah_boundary)", text: "Take Micah out to the yard and ask him what he'd say if he were allowed to.", type: "relational", set: { b_micah_boundary: true, st_micah: 4, s04: "fore" } },
      { id: "b", text: "Tell Ernesto the apprenticeship is the job, and the family can find someone else.", type: "relational", set: { fr_ernesto: "-1", s04: "fore", nerve: "+2" } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.REGENT.01", date: "2027-01-08", time: "21:00", place: "P14", cast: ["MC", "C04", "C32", "C07"], kind: "branch", when: "wk16 = \"dominic\"",
    purpose: "The Regent in January, snow on the marquee. Gideon and Quentin, in the auditorium, having the first honest argument about who turned his back on whom. Dominic and I leave them to it and go up to the projection booth; he's been asked to sing at Benoît's spring showcase and hasn't answered. He lets me sit with the question instead of fixing it.",
    choices: [
      { id: "a", when: "(st_dominic >= 3) and not(b_dominic_dawn)", text: "Stay until nearly dawn. Help him with the shutters when it's time, the way he asks.", type: "relational", set: { b_dominic_dawn: true, st_dominic: 4 } },
      { id: "b", text: "Tell him he should do the showcase. Decide it for him.", type: "relational", set: { managed_dominic: true, s05: "fore" } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.HOME.02", date: "2027-01-08", time: "22:00", place: "P06", cast: ["MC", "C05"], kind: "branch", when: "wk16 = \"nolan\"",
    purpose: "Riverside Steps, frozen at the edges. Nolan's application is due in a week. He asks, awkward and direct, the way he never is: whether there's a reason for him to stay. He doesn't turn anything over in his hands. He's holding still for this.",
    choices: [
      { id: "a", when: "(b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)", text: "\"Yes. There's a reason.\" Say it plainly.", type: "relational", set: { b_nolan_talk: true, st_nolan: 5, out_nolan: true } },
      { id: "b", text: "\"Send it. Go. You'd be brilliant.\" And mean it as a friend.", type: "relational", set: { closed_nolan: true, s02: "fore" } },
      { id: "c", text: "\"Send it anyway. A reason to stay shouldn't have to be a reason not to go.\"", type: "relational", set: { b_nolan_talk: true, st_nolan: 5, out_nolan: true, s02: "fore" } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.PATIENTS.02", date: "2027-01-08", time: "13:00", place: "P32", cast: ["MC", "C07"], kind: "branch", when: "wk16 = \"quentin\"",
    purpose: "Crescent Market on a cold Friday: Quentin buying oranges and being rude about the price. It's his idea. He says he's sick of being a case, and I'm the only person who looks at him like he's a person and a case at the same time, and today he'd like just the first thing.",
    choices: [
      { id: "a", when: "(st_quentin >= 3) and not(b_quentin_nothing)", text: "Be just the first thing. Carry the oranges.", type: "relational", set: { b_quentin_nothing: true, st_quentin: 4 } },
      { id: "b", text: "Ask how he's sleeping.", type: "relational", set: { hurt_quentin: "+1" } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.FELIX.03", date: "2027-01-08", time: "23:00", place: "P24", cast: ["MC", "C03"], kind: "branch", when: "wk16 = \"ellis\"",
    purpose: "Observatory Hill at eleven, snow on the dome. Ellis hasn't slept since Felix. His placement interview is in two weeks and he hasn't told his father. For once he doesn't make it look easy.",
    choices: [
      { id: "a", when: "b_ellis_danger and (hurt_ellis < 2) and not(b_ellis_badday)", text: "Stay. Let him be a mess. Don't try to fix it.", type: "relational", set: { b_ellis_badday: true, st_ellis: 5, out_ellis: true } },
      { id: "b", text: "Help him plan how to tell his father.", type: "relational", set: { s03: "fore" } }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.REUBEN.01", date: "2027-01-08", time: "20:00", place: "P01", cast: ["MC", "C08"], kind: "branch", when: "wk16 = \"reuben\"",
    purpose: "Reuben hasn't eaten since the funeral rooms. He's arranging the infirmary's supply cupboard for the third time. He doesn't want to talk about Damian. He doesn't want to be alone either, and he's never once in his life asked for the second thing.",
    choices: [
      { id: "a", when: "(st_reuben >= 3) and not(b_reuben_needs)", text: "Sit on the counter and hand him things until he stops. Then make him eat.", type: "relational", set: { b_reuben_needs: true, st_reuben: 4 } },
      { id: "b", text: "Leave him to it. He likes to be useful.", type: "expressive" }
    ],
    next: "CH16.END.01"
  },
  {
    id: "CH16.FAMILY.01", date: "2027-01-08", time: "19:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "branch", when: "wk16 = \"home\"",
    purpose: "Friday tea above the shop, then Will's game film on the laptop, Martin falling asleep in the chair. Ordinary. I needed ordinary more than anything.",
    set: { fr_will: "+1", fr_martin: "+1" },
    next: "CH16.END.01"
  },
  {
    id: "CH16.END.01", date: "2027-01-09", time: "22:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Saturday night, the board on my wall: three patients, three donors, a warehouse in the Marches, a pumping station called Pump Nine, and a man called Damian Holt. And no way to end it that doesn't kill someone. We need a method we can defend. A letter from Ansel, on real paper, from Bracken Court: the assembly will sit in February, and he intends to speak.",
    letter: "Ansel: 'I find I have no official reason to write. I am writing anyway. The pastries here are inferior. Please tell me what you had for breakfast.'",
    next: "CH17.OPEN.01"
  }
];
