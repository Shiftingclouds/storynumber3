// CH17 — What I Ask of Him. Sat 23 – Sun 31 Jan (bible Day 34).
// Purpose: deep winter. A major trust/disclosure question; one romance or friendship moves forward. Eight route variants
// plus a family variant. Each returns to the coalition decision. No romantic choice is required for evidence.
// Stage 6 ("together") is only possible here if we'd both already recognised something (stage 5), or recognise it now.
"use strict";

const common = [
  {
    id: "CH17.OPEN.01", date: "2027-01-23", time: "10:00", place: "P02", cast: ["MC", "C10"], kind: "common",
    purpose: "The deepest cold of the year. The river freezes at the edges; the buses run late; the print shop's pipes need a hairdryer every morning. Quentin, Silas and Felix are tiring: grey by the afternoon, cold hands, sleeping twelve hours. The donors are weakening and the patients feel it. We need a method, and before that, I need to ask someone for something that matters.",
    next: "CH17.CHOICE.01"
  },
  {
    id: "CH17.CHOICE.01", date: "2027-01-23", time: "12:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Whom do I ask?",
    choices: [
      { id: "a", when: "(st_adrian >= 3) and not(closed_adrian)", text: "Adrian.", type: "structural", set: { ch17_ask: "adrian" }, to: "CH17.ADRIAN.01" },
      { id: "b", when: "(st_micah >= 3) and not(closed_micah)", text: "Micah.", type: "structural", set: { ch17_ask: "micah" }, to: "CH17.MICAH.01" },
      { id: "c", when: "(st_ellis >= 3) and not(closed_ellis)", text: "Ellis.", type: "structural", set: { ch17_ask: "ellis" }, to: "CH17.ELLIS.01" },
      { id: "d", when: "(st_dominic >= 3) and not(closed_dominic)", text: "Dominic.", type: "structural", set: { ch17_ask: "dominic" }, to: "CH17.DOMINIC.01" },
      { id: "e", when: "(st_nolan >= 3) and not(closed_nolan)", text: "Nolan.", type: "structural", set: { ch17_ask: "nolan" }, to: "CH17.NOLAN.01" },
      { id: "f", when: "(st_ansel >= 3) and not(closed_ansel)", text: "Ansel. He's in Calder this week for the passage papers.", type: "structural", set: { ch17_ask: "ansel" }, to: "CH17.ANSEL.01" },
      { id: "g", when: "(st_quentin >= 3) and not(closed_quentin)", text: "Quentin.", type: "structural", set: { ch17_ask: "quentin" }, to: "CH17.QUENTIN.01" },
      { id: "h", when: "(st_reuben >= 3) and not(closed_reuben)", text: "Reuben.", type: "structural", set: { ch17_ask: "reuben" }, to: "CH17.REUBEN.01" },
      { id: "i", text: "Martin and Will. It's time they knew something true.", type: "structural", set: { ch17_ask: "family" }, to: "CH17.FAMILY.01" }
    ]
  }
];

// Each route: the ask (.01), the answer (.02), and the night after (.03).
function route(lead, id, cast, place, dates, text) {
  const L = lead.toUpperCase();
  const ask = "ch17_ask = \"" + lead + "\"";
  return [
    { id: `CH17.${L}.01`, date: dates[0], time: dates[1], place, cast: ["MC", id].concat(cast), kind: "route", when: ask,
      purpose: text.ask,
      choices: [
        { id: "a", text: text.tellBoth, type: "relational", set: { ["out_" + lead]: true, ["gift_" + lead]: true } },
        { id: "b", text: text.tellGift, type: "relational", set: { ["gift_" + lead]: true } },
        { id: "c", text: text.askOnly, type: "relational", set: {} }
      ],
      next: `CH17.${L}.02` },
    { id: `CH17.${L}.02`, date: dates[0], time: dates[2], place, cast: ["MC", id], kind: "route", when: ask,
      purpose: text.answer,
      choices: [
        { id: "a", when: `(st_${lead} >= 5) and (hurt_${lead} < 2)`, text: text.together, type: "relational", set: { ["st_" + lead]: 6, ["out_" + lead]: true } },
        { id: "b", when: `(st_${lead} = 4) and (${text.recog}) and (hurt_${lead} < 2)`, text: text.recognise, type: "relational", set: Object.assign({ ["st_" + lead]: 5, ["out_" + lead]: true }, text.recogSet) },
        { id: "c", text: text.friends, type: "relational", set: { ["friends_" + "ch17"]: true } }
      ],
      next: `CH17.${L}.03` },
    { id: `CH17.${L}.03`, date: dates[3], time: dates[4], place, cast: ["MC", id], kind: "route", when: ask,
      purpose: text.after,
      set: { volunteers: "+1" },
      choices: [
        { id: "a", when: `st_${lead} = 5`, text: "Don't wait for March. Take the next step together, now, on purpose.", type: "relational", set: { ["st_" + lead]: 6 } },
        { id: "b", when: `st_${lead} = 5`, text: "Go slowly. We both know. That's enough for this winter.", type: "relational", set: { ["slow_" + "ch17"]: true } },
        { id: "c", when: `st_${lead} != 5`, text: "Get up. There's work.", type: "expressive", set: {} }
      ],
      next: "CH17.END.01" }
  ];
}

const routes = [].concat(
  route("adrian", "C01", [], "P01", ["2027-01-24", "20:00", "23:00", "2027-01-25", "07:00"], {
    ask: "Mercy House, the empty training hall under the old operating-theatre lights. I ask Adrian to put Mercy House behind a rescue Orrell will want to control, and to tell the truth about his report at the review, because we'll need people to trust his word.",
    tellBoth: "Tell him everything first: what I am, and who I am.", tellGift: "Tell him about the knack, properly. Not the other thing. Not yet.", askOnly: "Just ask. The rest can wait.",
    answer: "He says yes to the rescue in complete, practical sentences and then can't finish the next one. The rest of it is in the room with us.",
    together: "Close the distance. He's allowed to stop planning.", recog: "b_adrian_offduty and b_adrian_report", recognise: "Tell him the thing he keeps not saying is the thing I keep not saying.", recogSet: { b_adrian_want: true },
    friends: "Keep it where it is: the best partner I've had. He nods, relieved and not.",
    after: "Morning. Whatever the night was, the review is in three weeks, and Adrian has decided to tell the truth in it." }),
  route("micah", "C02", [], "P07", ["2027-01-24", "19:00", "23:30", "2027-01-25", "08:00"], {
    ask: "Serrano Yard's workshop, the stove going. I ask Micah whether he'd be one of the volunteers if we build a shared bridge: his body, his strength, for a stranger. He's the person least able to say no to anyone, so I tell him he can, and I'll still be here.",
    tellBoth: "Tell him everything: the knack, and me.", tellGift: "Tell him about the knack. Just that.", askOnly: "Just ask, and make the no easy.",
    answer: "He takes a long time. Then he says yes to the bridge, for himself, not for his family. Then he says the other thing, clumsily, not naming anything bigger than tonight.",
    together: "Say yes to tonight. And to the next one.", recog: "b_micah_wolf and b_micah_boundary", recognise: "Name the one specific thing I want, and let him name his.", recogSet: { b_micah_want: true },
    friends: "Keep it a friendship. He's relieved, and a bit sad, and he'll still be a volunteer.",
    after: "Morning in the yard. His apprenticeship started last week. Ernesto is learning to ask instead of assign, slowly." }),
  route("ellis", "C03", ["C37"], "P20", ["2027-01-24", "18:00", "23:00", "2027-01-25", "09:00"], {
    ask: "The Okafors' workroom after hours. His placement interview went well; they want him in September. I ask him to stay until March and design a shared bridge with his father: the most important work either of them will ever do, and the thing most likely to keep him here.",
    tellBoth: "Tell him everything, and that he doesn't owe me staying.", tellGift: "Tell him what I see when I look at a bond. It's the tool he needs.", askOnly: "Just ask.",
    answer: "He says yes to March and yes to the work, and then, for once, doesn't curate what comes next.",
    together: "Let him be ordinary with me. Stay.", recog: "b_ellis_danger", recognise: "Tell him I'd want him on a bad day. Especially on a bad day.", recogSet: { b_ellis_badday: true },
    friends: "Keep it the best kind of friendship: the one where you tell each other the truth about the work.",
    after: "Morning. Chukwudi finds us asleep on the workroom couch among the sketches, and says nothing, pointedly." }),
  route("dominic", "C04", [], "P14", ["2027-01-24", "19:00", "23:45", "2027-01-25", "06:30"], {
    ask: "The Regent's projection booth. I ask Dominic to be at the patient site on the night: the fastest, strongest person we have, in a room full of blood and fear. And to tell me honestly if he can't.",
    tellBoth: "Tell him everything, and don't manage his answer.", tellGift: "Tell him what the knack shows me of him. It's not what he fears.", askOnly: "Just ask.",
    answer: "He tells me honestly: he can, if someone he trusts is watching him. Then he asks what I want. Nobody's asked him that about himself for a year, and he's asking me.",
    together: "Tell him what I want is him, all of him, changed hours and all.", recog: "b_dominic_dawn and not(managed_dominic)", recognise: "Answer him, finally.", recogSet: { b_dominic_ask: true },
    friends: "Tell him I want him singing in April. It's true, and it's all I say.",
    after: "Before dawn, the shutters, and a conversation about the showcase that I don't decide for him." }),
  route("nolan", "C05", [], "P28", ["2027-01-24", "20:00", "23:30", "2027-01-25", "10:00"], {
    ask: "Nolan's room at Laird's, the application sent. I ask him to run the radios and relays on the night, across a crossing into another world, and to know exactly what that means before he says yes.",
    tellBoth: "Tell him everything I haven't. All of it.", tellGift: "Tell him the parts about the knack he doesn't know yet.", askOnly: "Just ask.",
    answer: "He says yes. He says he's been waiting for me to ask him for something that mattered since we were sixteen. Then neither of us knows what to do with our hands.",
    together: "Do something with our hands.", recog: "b_nolan_birthday or b_nolan_work", recognise: "Have the direct, awkward conversation, finally.", recogSet: { b_nolan_talk: true },
    friends: "Tell him he's my best friend and always will be. It's the truest thing I say all year.",
    after: "Morning at Laird's. Peter pretends not to notice anything. Owen makes too much toast." }),
  route("ansel", "C06", [], "P35", ["2027-01-26", "19:30", "23:00", "2027-01-27", "08:30"], {
    ask: "The Neutral Table's upstairs room. I ask Ansel to secure our crossing and the way to Stillwater on the night, against his father's wishes if it comes to it: his first unassigned choice.",
    tellBoth: "Tell him everything. No bargain attached.", tellGift: "Tell him about the knack; he'll understand keeping a thing quiet.", askOnly: "Just ask.",
    answer: "He says yes as if he's been practising, and then with no practice at all he says he doesn't have an official reason to stay tonight.",
    together: "He doesn't need one.", recog: "b_ansel_confidence", recognise: "Tell him he never needed a reason to come to my door.", recogSet: { b_ansel_nopretext: true },
    friends: "Tell him he's the best friend I've made this year, and watch him be moved and formal about it.",
    after: "Morning. He goes back through the crossing with his own intentions, for once, and a paper bag of Calder pastries he claims to despise." }),
  route("quentin", "C07", [], "P43", ["2027-01-24", "18:00", "22:30", "2027-01-25", "09:30"], {
    ask: "Quentin's room in Willow Court. I don't ask for anything. I ask what he wants done with his own life in all this, and I mean it, and I wait.",
    tellBoth: "Tell him everything about me first, so it's even.", tellGift: "Tell him what I see in him, the rope, all of it.", askOnly: "Just ask, and wait.",
    answer: "He tells me what he wants from the rescue: to be free of Eamon's life, whatever it costs him, and to decide the rest himself. And then, because nothing needs investigating, he decides something else.",
    together: "Let him decide, and say yes.", recog: "b_quentin_acts and b_quentin_nothing", recognise: "He reaches first. I meet him.", recogSet: { b_quentin_initiates: true },
    friends: "Tell him I'm his friend, whatever happens in March. He holds me to it.",
    after: "Morning. He's grey and cold and he laughs at something, and I'd do anything to keep hearing that." }),
  route("reuben", "C08", [], "P01", ["2027-01-24", "21:00", "23:59", "2027-01-25", "07:30"], {
    ask: "Mercy House infirmary after lights out. I ask Reuben to lead the medical side of a rescue against the man who taught him everything. And then I ask him to let someone take care of him while he does it.",
    tellBoth: "Tell him everything, and that I'm asking as more than a colleague.", tellGift: "Tell him what the knack says about the links. He'll need it.", askOnly: "Just ask.",
    answer: "He says yes to the rescue before I've finished. The second question takes him much longer, and when he answers it, it isn't as a medic.",
    together: "Stay. There's no reason to, and I stay.", recog: "b_reuben_needs", recognise: "Tell him the reason's gone and I'm still here.", recogSet: { b_reuben_stay: true },
    friends: "Tell him he's the best person I know. He goes red to the ears.",
    after: "Morning in the infirmary kitchen. He lets me make the tea. It's a small thing. It isn't." })
);

const family = [
  {
    id: "CH17.FAMILY.01", date: "2027-01-24", time: "19:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "route", when: "ch17_ask = \"family\"",
    purpose: "The kitchen table above the shop, snow outside, Will's homework and Martin's accounts pushed aside. I ask them for their trust for six weeks, without all the reasons. And I tell them something true.",
    choices: [
      { id: "a", text: "Tell them about the knack. All of it, from when I was small.", type: "relational", set: { gift_martin: true, fr_martin: "+1", fr_will: "+1" } },
      { id: "b", text: "Tell them I'm gay. Just that. It's the first time I've said it out loud to anyone.", type: "relational", set: { out_family: true, fr_martin: "+1", fr_will: "+1" } },
      { id: "c", text: "Tell them both things.", type: "relational", set: { gift_martin: true, out_family: true, fr_martin: "+1", fr_will: "+1" } },
      { id: "d", text: "Tell them about the case, and ask them to trust me about the rest.", type: "relational", set: { family_case: true } }
    ],
    next: "CH17.FAMILY.02"
  },
  {
    id: "CH17.FAMILY.02", date: "2027-01-24", time: "22:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "route", when: "ch17_ask = \"family\"",
    purpose: "Martin takes his glasses off and puts them on again. Will says something unfair and then something kind. Nobody leaves the table. Later, Martin knocks on my door with a mug of tea and says he'd like to help, if there's anything a printer can do.",
    set: { volunteers: "+1" },
    next: "CH17.END.01"
  }
];

const end = [
  {
    id: "CH17.END.01", date: "2027-01-31", time: "18:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "The last day of January. Whatever I asked, and whatever I was answered, the coalition is waiting: we need a method we can defend, by March, and the patients are getting colder.",
    next: "CH18.OPEN.01"
  }
];

module.exports = common.concat(routes, family, end);
