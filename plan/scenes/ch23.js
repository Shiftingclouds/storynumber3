// CH23 — Six Weeks Later. Sat 24 Apr (six weeks after the rescue).
// Purpose: recovery and supporting arcs in the present tense; the relationship decision (together, an agreed future at a
// distance, parting after real involvement, friendship, or a single life); what I do next. Benoît's spring showcase.
"use strict";
const LEADS = ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben"];
const NAMES = { adrian: "Adrian", micah: "Micah", ellis: "Ellis", dominic: "Dominic", nolan: "Nolan", ansel: "Ansel", quentin: "Quentin", reuben: "Reuben" };
// who might be leaving Calder: an agreed future at a distance is only honest if someone is actually going somewhere
const AWAY = { nolan: "nolan_leaving", ellis: "ellis_leaving", ansel: "true", adrian: "adrian_transfer", micah: "micah_away", dominic: "dominic_away", quentin: "quentin_away", reuben: "reuben_away" };

module.exports = [
  {
    id: "CH23.OPEN.01", date: "2027-04-24", time: "09:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Spring all at once: the river down, the Riverside Steps scrubbed, the allotments in Eastbank green. Six weeks. Mum is home, jet-lagged and furious with everyone for not telling her things. Will's trial is today. Whatever the rescue cost, today is a Saturday.",
    letter: "Joanne, on paper this time, left on my pillow: 'I don't need to know all of it. I need to know you're all right. Martin says you are. I'd like to hear it from you.'",
    choices: [
      { id: "a", text: "Tell Mum I'm all right, and something true about why.", type: "relational", set: { mum_told: true } },
      { id: "b", when: "out_family", text: "Tell Mum what I told Martin and Will in January.", type: "relational", set: { mum_told: true, out_mum: true } },
      { id: "c", text: "Go with Will to his trial and let him be the one people look at.", type: "relational", set: { fr_will: "+1", s13: "resolved" } }
    ],
    next: "CH23.PATIENTS.01"
  },
  {
    id: "CH23.PATIENTS.01", date: "2027-04-24", time: "11:30", place: "P09", cast: ["MC", "C30"], maybe: ["C49", "C51"], kind: "common",
    purpose: "Lyle's Bakery, the long table. Where everyone is, six weeks on. If they lived, the patients are weaning off their bridges a notch a week, cold-handed and bad-tempered and alive. If they died, Otis keeps a chair. Eamon, Hugo and Clive are home, thin, angry at lost time and wages and being treated as a necessary cost, and entitled to every bit of it. Hugo got the depot job; they held it for him. Clive's students painted his studio door.",
    choices: [
      { id: "a", when: "alive_silas", text: "Help Silas with the morning bake. Otis is letting him run the ovens now.", type: "relational", set: { s15: "resolved:silas" } },
      { id: "b", when: "not(alive_silas)", text: "Sit with Otis in the back. He doesn't need anyone to say anything.", type: "relational", set: { s15: "resolved:otis" } },
      { id: "c", text: "Walk to Willow Court and see Eamon. He wants to post a letter he wrote in August.", type: "relational", set: { fr_eamon: "+1" } }
    ],
    next: "CH23.ARCS.01"
  },
  {
    id: "CH23.ARCS.01", date: "2027-04-24", time: "14:00", place: "P32", cast: ["MC"], maybe: ["C10", "C29", "C05"], kind: "common",
    purpose: "Crescent Market, where half the city passes on a Saturday. News arrives the way it does, in pieces: Switchyard lost the lease and is moving to Foundry Reach's old tram shed, or kept it; the Regent's vote held; Mercy House has a new review board; the tenants at Winton Court won their consultation; the crossing succession was settled at the assembly. Each of these is somebody's whole life.",
    choices: [
      { id: "a", text: "Help Martin load the new press. He sold the old one and kept the shop.", type: "relational", set: { s01: "resolved:kept" } },
      { id: "b", when: "fr_wesley >= 1", text: "Help Wesley move into his own room at Lock Street, with a lease in his own name.", type: "relational", set: { s08: "resolved:own" } },
      { id: "c", text: "Help Desmond and Nolan strip the old tram shed for the new Switchyard.", type: "relational", set: { s06: "resolved:moved" } }
    ],
    next: "CH23.NOLAN.01"
  },
  {
    id: "CH23.NOLAN.01", date: "2027-04-24", time: "16:30", place: "P28", cast: ["MC", "C05"], kind: "conditional", when: "st_nolan >= 3",
    purpose: "Nolan's offer came on Thursday: the technical course, in another city, from September. He asks what I think, and he means it, and he'll decide for himself.",
    choices: [
      { id: "a", text: "\"Go. You'd be brilliant. Whatever we are, it survives a train.\"", type: "relational", set: { nolan_leaving: true, s02: "resolved:leaves" } },
      { id: "b", text: "\"I want you to stay. I also want you to do what you want.\" Both true.", type: "relational", set: { s02: "resolved:decides" } }
    ],
    next: "CH23.ELLIS.01"
  },
  {
    id: "CH23.ELLIS.01", date: "2027-04-24", time: "17:15", place: "P20", cast: ["MC", "C03", "C37"], kind: "conditional", when: "st_ellis >= 3",
    purpose: "The placement is confirmed for September. Ellis told his father in March, in the middle of everything, and Chukwudi said he'd known for a month and was proud. They're making a transition plan with dates on it.",
    choices: [
      { id: "a", text: "Help them write the plan: who does which commissions, which weekend he comes home.", type: "relational", set: { ellis_leaving: true, s03: "resolved:leaves" } }
    ],
    next: "CH23.ADRIAN.01"
  },
  {
    id: "CH23.ADRIAN.01", date: "2027-04-24", time: "18:00", place: "P01", cast: ["MC", "C01"], kind: "conditional", when: "st_adrian >= 3",
    purpose: "Mercy House's new review board has offered Adrian something he'd have killed for a year ago: a posting setting up the first joint warden station in Bracken Court, two years, his own unit, earned without his brother's name. He asks me what I think, and then, because he's learned, what I want.",
    choices: [
      { id: "a", text: "\"Take it. You earned it. I'll learn the crossings.\"", type: "relational", set: { adrian_transfer: true, s07: "resolved:posting" } },
      { id: "b", text: "\"Stay. There's work here too.\" And mean the work.", type: "relational", set: { s07: "resolved:stays" } }
    ],
    next: "CH23.MICAH.01"
  },
  {
    id: "CH23.SHOWCASE.01", date: "2027-04-24", time: "19:30", place: "P46", cast: ["MC", "C15", "C53"], maybe: ["C04"], allowDay: true, kind: "common",
    // Dominic comes in after sunset: the script moves the clock on (*date 20:40) before he appears
    purpose: "Benoît's spring showcase at the Southmere Recreation Centre: folding chairs, proud parents, the program saved for another year. If Dominic decided to sing, he sings, and Graham Bell in the third row watches his son without understanding everything and cries anyway. Everyone I love who is alive is in this room, or at the back, or outside because it's still light.",
    set: { s05: "resolved" },
    next: "CH23.DOMINIC.01"
  },
  {
    id: "CH23.MICAH.01", date: "2027-04-24", time: "18:20", place: "P07", cast: ["MC", "C02", "C25"], kind: "conditional", when: "st_micah >= 3",
    purpose: "Micah's apprenticeship firm wants him for a year on a hydro project up north: good money, a qualification, the first thing that's ever been only his. Ernesto, astonishingly, says he should go. Micah asks me before he answers anyone.",
    choices: [
      { id: "a", text: "\"Go. Eastbank will still be here. So will I.\"", type: "relational", set: { micah_away: true, s04: "resolved:north" } },
      { id: "b", text: "\"Your call. Not your dad's, not mine.\"", type: "relational", set: { s04: "resolved:decides" } }
    ],
    next: "CH23.SHOWCASE.01"
  },
  {
    id: "CH23.DOMINIC.01", date: "2027-04-24", time: "21:40", place: "P46", cast: ["MC", "C04", "C15"], kind: "conditional", when: "st_dominic >= 3",
    purpose: "After the showcase, a woman from a night-arts residency in another city asks Dominic to come for six months: a studio, a band, audiences who start at ten. He finds me by the fire exit to ask what I think, and then catches himself, and asks what I want.",
    choices: [
      { id: "a", text: "\"Go and play. I'll come to the ten o'clock shows.\"", type: "relational", set: { dominic_away: true } },
      { id: "b", text: "\"Whatever you choose, choose it for you.\"", type: "relational", set: {} }
    ],
    next: "CH23.QUENTIN.01"
  },
  {
    id: "CH23.QUENTIN.01", date: "2027-04-24", time: "22:00", place: "P46", cast: ["MC", "C07"], kind: "conditional", when: "alive_quentin and (st_quentin >= 3)", needsAlive: ["quentin"],
    purpose: "Quentin, cold-handed and alive, has a place at the emergency-service academy in the capital from September, the thing he wanted before any of this. He tells me flatly, the way he says important things, and waits to see what I'll do with it.",
    choices: [
      { id: "a", text: "\"Go. You earned it twice.\"", type: "relational", set: { quentin_away: true } },
      { id: "b", text: "\"Tell me what you want first.\"", type: "relational", set: {} }
    ],
    next: "CH23.REUBEN.01"
  },
  {
    id: "CH23.REUBEN.01", date: "2027-04-24", time: "22:15", place: "P46", cast: ["MC", "C08"], kind: "conditional", when: "st_reuben >= 3",
    purpose: "Reuben's response service worked well enough that another city wants him for a year to build theirs. He's never been asked to lead anything. He asks me whether it's selfish to want it.",
    choices: [
      { id: "a", text: "\"It's the least selfish thing I've ever heard. Go.\"", type: "relational", set: { reuben_away: true } },
      { id: "b", text: "\"It's allowed to be selfish. Decide what you want.\"", type: "relational", set: {} }
    ],
    next: "CH23.REL.01"
  },
  {
    id: "CH23.REL.01", date: "2027-04-24", time: "22:30", place: "P06", cast: ["MC"], kind: "common",
    purpose: "The Riverside Steps after the showcase, the water low and quiet. There's one question left that belongs to me.",
    choices: LEADS.map((l, i) => ({ id: "abcdefgh"[i],
      when: `(st_${l} >= 4) and not(closed_${l})` + (l === "quentin" ? " and alive_quentin" : ""),
      text: `${NAMES[l]}.`, type: "structural", set: { final_rel: l } }))
      .concat([
        { id: "q", when: "not(alive_quentin) and (st_quentin >= 5)", text: "Quentin. Still. It doesn't stop being him because he's gone.", type: "structural", set: { final_rel: "quentin", final_shape: "grief" } },
        { id: "i", text: "Nobody. Not like that, and not yet. I'm allowed that too.", type: "structural", set: { final_rel: "single", final_shape: "" } }
      ]),
    next: "CH23.REL.02"
  },
  {
    id: "CH23.REL.02", date: "2027-04-24", time: "22:45", place: "P06", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08"], kind: "conditional", when: "(final_rel != \"single\") and (final_shape != \"grief\")",
    purpose: "Whatever we are, we say it out loud, the two of us, and we both get a say.",
    choices: [].concat(
      LEADS.map((l, i) => ({ id: "t" + i, when: `(final_rel = "${l}") and (st_${l} >= 4)`, text: `Together. Privately, and properly, and ours. (${NAMES[l]})`, type: "relational", set: { final_shape: "together", ["st_" + l]: 6 } })),
      LEADS.filter((l) => AWAY[l] !== "false").map((l) => ({ id: "d" + LEADS.indexOf(l), when: `(final_rel = "${l}") and (st_${l} >= 5) and (${AWAY[l]})`, text: `Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (${NAMES[l]})`, type: "relational", set: { final_shape: "distance" } })),
      LEADS.map((l, i) => ({ id: "p" + i, when: `(final_rel = "${l}") and (st_${l} >= 5)`, text: `It mattered, and it's over, and we both know why. (${NAMES[l]})`, type: "relational", set: { final_shape: "parted" } })),
      [{ id: "f", text: "Friends. The real kind. It's not a consolation.", type: "relational", set: { final_shape: "friends" } }]
    ),
    next: "CH23.FUTURE.01"
  },
  {
    id: "CH23.FUTURE.01", date: "2027-04-24", time: "23:30", place: "P06", cast: ["MC"], kind: "common",
    purpose: "And me? The knack, and a year of learning what it's for.",
    choices: [
      { id: "a", when: "s09 = \"resolved:probation\"", text: "Reuben's response service needs someone who can see a failing link before the monitors do.", type: "structural", set: { mc_future: "response" } },
      { id: "b", when: "ally_mercy", text: "Mercy House training, as the first sensitive they've had in seven years, on my own terms.", type: "structural", set: { mc_future: "warden" } },
      { id: "c", text: "Back on crew at the new Switchyard. Ear defenders, loading bay, the good kind of noise.", type: "structural", set: { mc_future: "crew" } },
      { id: "d", text: "A course in the autumn. Something with my hands and my head both.", type: "structural", set: { mc_future: "study" } },
      { id: "e", text: "The print shop, with Martin, on paper this time, with a proper wage.", type: "structural", set: { mc_future: "shop" } },
      { id: "f", text: "I don't know yet. For once that's fine.", type: "structural", set: { mc_future: "undecided" } }
    ],
    next: "CH23.END.01"
  },
  {
    id: "CH23.END.01", date: "2027-04-24", time: "23:59", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Home, late, the shop dark, Mum's suitcase still in the hall. I sleep with the window open.",
    next: "CH24.ANCHOR.01"
  }
];
