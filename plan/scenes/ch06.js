// CH06 — Another Man Missing. Mon 14 – Sat 19 Sep (bible Day 8, stretched: three weeks after the murder).
// Purpose: Ansel connects Eamon's absence to a specific journey. Lawful records or a witness through contacts.
// Also: the corroboration scene for the CH05 route not taken (restoration), and Gareth if I went to the police.
"use strict";
module.exports = [
  {
    id: "CH06.WEEKS.01", date: "2026-09-14", time: "08:00", place: "P02", cast: ["MC", "C10", "C09", "C05"], kind: "common",
    purpose: "Ten days go by the way days do. Will's final year starts; the buses up University Hill fill with first-years; the leaves think about turning. Quentin texts twice, about nothing. I keep reaching with the knack at things that don't need it: a coat on the bus, Martin's reading glasses. Mum's second batch of emails arrives: a polar bear at the dump, a man who walked in with an axe in his boot and asked for a plaster.",
    letter: "Joanne: 'You sound tired in your last one. Tired or sad? I can't tell from here. Tell Martin I said to feed you and to stop printing things for free.'",
    choices: [
      { id: "a", when: "not(b_nolan_kept)", text: "Make it to Nolan's for the thing I promised. Actually go.", type: "relational", set: { b_nolan_kept: true } },
      { id: "b", text: "Help Martin chase the overdue invoice. Two voices on the phone are harder to ignore.", type: "relational", set: { fr_martin: "+1", people: "+2", s01: "fore" } },
      { id: "c", text: "Go running every morning. It turns the knack down.", type: "expressive", set: { knack: "+2", nerve: "+1" } }
    ],
    next: "CH06.GARETH.01"
  },
  {
    id: "CH06.GARETH.01", date: "2026-09-15", time: "16:30", place: "P02", cast: ["MC", "C16", "C10"], kind: "conditional", when: "ch02_report = \"police\"",
    purpose: "A municipal investigator, Gareth Moss, in a rain jacket in the print shop, collecting a pattern: adults who stop turning up, property used for things it isn't licensed for. My statement is in his file. His questions are friendly until he notices I'm avoiding one, and then they repeat.",
    set: { fr_gareth: 1 },
    choices: [
      { id: "a", text: "Tell him everything that would survive in a courtroom. Nothing that wouldn't.", type: "investigative", set: { told_gareth: true, fr_gareth: "+1" } },
      { id: "b", text: "Be polite, and useless. He writes that down too.", type: "expressive", set: { gareth_wary: true } }
    ],
    next: "CH06.ANSEL.01"
  },
  {
    id: "CH06.ANSEL.01", date: "2026-09-16", time: "18:00", place: "P25", cast: ["MC", "C06"], kind: "common",
    purpose: "I ring the number on Ansel Marr's card, or he finds me, because he's been asking everyone at Northline for two weeks. Eamon Kerr, a courier, was due in the Marches on the night of 28 August by a crossing he shouldn't have been using, and never arrived. Ansel's father would prefer no fuss: there's a trade dispute, and a missing courier who crossed unofficially is embarrassing. Ansel dresses too formally for a train station and apologises for it.",
    set: { know_marches: true, eamon_heard: true },
    choices: [
      { id: "a", text: "\"I'll help. Where do we start?\"", type: "relational", set: { b_ansel_help: true, st_ansel: 2 } },
      { id: "b", text: "\"Why me?\" Make him say it.", type: "relational", set: { b_ansel_help: true, st_ansel: 2, people: "+1" },
        notes: "Because I'm the only person he's met in Calder this month who noticed he was frightened." }
    ],
    next: "CH06.CHOICE.01"
  },
  {
    id: "CH06.CHOICE.01", date: "2026-09-16", time: "19:00", place: "P25", cast: ["MC", "C06"], kind: "common",
    purpose: "Two ways to find out which crossing Eamon used.",
    choices: [
      { id: "a", when: "know_wardens", text: "Lawfully: Mercy House keeps the crossing-keepers' records. Ask Adrian.", type: "structural", set: { ch06_way: "lawful" }, to: "CH06.LAWFUL.01" },
      { id: "b", text: "People: somebody who works nights at Northline saw him. Ask around the depot.", type: "structural", set: { ch06_way: "witness" }, to: "CH06.WITNESS.01" }
    ]
  },
  {
    id: "CH06.LAWFUL.01", date: "2026-09-17", time: "14:00", place: "P15", cast: ["MC", "C01", "C22", "C46", "C06"], kind: "branch", when: "ch06_way = \"lawful\"",
    purpose: "The keepers' office in the Iron Footbridge's maintenance chamber, with Adrian's authority and Florian Adebayo's archive gloves. The official ledger shows no crossing by Eamon Kerr on any date. Harlan Greaves, the keeper, is friendly and completely unhelpful, and the knack reads him as uneasy under the charm. Now Harlan knows someone is asking.",
    set: { e06: true, e06_src: "records", harlan_aware: true, fr_florian: 1, fr_harlan: 1 },
    gains: ["e06"],
    choices: [
      { id: "a", when: "st_adrian >= 2", text: "Notice the gap in the ledger's night entries that Adrian's procedure skipped, and say so.", type: "investigative", set: { b_adrian_procedure: true, st_adrian: 3, people: "+2" } },
      { id: "b", text: "Ask Florian what the archive holds that the ledger doesn't.", type: "investigative", set: { fr_florian: "+1" } }
    ],
    next: "CH06.LOCKER.01"
  },
  {
    id: "CH06.WITNESS.01", date: "2026-09-17", time: "23:30", place: "P27", cast: ["MC", "C12", "C28", "C02", "C06"], kind: "branch", when: "ch06_way = \"witness\"",
    purpose: "The Night Bus Depot, where the city's other hours happen. Owen Price, driver and organiser, remembers Eamon on the 00:50 out to the old Northwood rail spur on Friday 28 August, with a quiet man in a good coat who paid cash for both. Pavel Kolar says the spur's been disused for years. Micah's there on a wiring job, and gives me a lift home in a van that smells of solder, as if it was always going to.",
    set: { e06: true, e06_src: "witness", fr_owen: 1, fr_pavel: 1, b_micah_seat: true, st_micah: 2, good_coat: true },
    gains: ["e06"],
    choices: [
      { id: "a", text: "Ask Owen what else he sees on the night routes. He's been waiting for someone to ask.", type: "relational", set: { fr_owen: "+1", s10: "intro" } },
      { id: "b", text: "In Micah's van, ask what 'rough night' meant, back at Switchyard.", type: "relational", set: { micah_deflects: true },
        notes: "He laughs it off with a story about a neighbour's dog. He doesn't tell me yet." }
    ],
    next: "CH06.LOCKER.01"
  },
  {
    id: "CH06.LOCKER.01", date: "2026-09-18", time: "10:00", place: "P25", cast: ["MC", "C06"], kind: "common",
    purpose: "Eamon's locker at Northline Station, opened with a spare key from his flatmate. His route card: Northwood crossing, the Glass Road, Bracken Court. A small brass token of passage, stamped with a lease mark. His good gloves. Do I reach?",
    choices: [
      { id: "a", text: "Take off my own glove and touch his.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+3", same_voice: true },
        notes: "Echo: a bus at night, cold, then a calm, kind voice saying 'this won't hurt, I'm sorry', and it's the same voice from the lane. A hunch, not evidence; I'll need a second route to prove it." },
      { id: "b", text: "Leave it. Photograph the route card and the lease mark.", type: "investigative", set: { lease_mark: true } }
    ],
    next: "CH06.TOKEN.01"
  },
  {
    id: "CH06.TOKEN.01", date: "2026-09-19", time: "11:00", place: "P20", cast: ["MC", "C03", "C37", "C07"], kind: "conditional", when: "ch05_route = \"hospital\"",
    purpose: "The corroboration for the route I didn't take: Quentin brings his charm to Okafor Restoration. Chukwudi identifies a known kind of protective work, modified by skilled hands. His son Ellis, elegant and quick, sees in five minutes what the modification was for: to hold on to something at the moment it would otherwise let go.",
    set: { st_ellis: 2, b_ellis_meet: true, fr_chukwudi: 1, e03: true, e03_src: "ellis" },
    gains: ["e03"],
    choices: [
      { id: "a", text: "Tell Ellis I can see what the charm is holding.", type: "relational", set: { gift_ellis: true } },
      { id: "b", text: "Let Quentin ask the questions. It's his charm.", type: "relational", set: { st_quentin: "+1" } }
    ],
    next: "CH06.END.01"
  },
  {
    id: "CH06.END.01", date: "2026-09-19", time: "21:00", place: "P06", cast: ["MC", "C06"], kind: "common",
    purpose: "Riverside Steps with Ansel and a paper tray of chips, about which he has developed strong, inexplicable opinions. What we have: Eamon vanished on 28 August on his way to Northwood. Quentin died on the 30th and didn't stay dead. Something outside Quentin is holding him up. Neither of us says the next sentence yet.",
    choices: [
      { id: "a", text: "Say it: \"What if whatever's holding Quentin up is Eamon?\"", type: "investigative", set: { suspect_donor: true } },
      { id: "b", text: "Tell Ansel about the knack. He looks like a man who understands keeping a thing quiet.", type: "relational", set: { gift_ansel: true } },
      { id: "c", text: "Eat the chips. Let him talk about home.", type: "relational", set: { know_marches: true, people: "+1" } }
    ],
    next: "CH07.HOME.01"
  }
];
