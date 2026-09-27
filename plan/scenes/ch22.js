// CH22 — The Names We Can Say. Sun 14 – Sun 21 Mar (bible Days 38–45).
// Purpose: one of six complete plot conclusions (END_F in three variants), fully dramatised: confrontations, patient and
// donor outcomes, accountability, disclosure, immediate personal consequences. Never a results screen.
// The culprit tuple for each ending is fixed in plan/endings.js and set here on entry.
"use strict";

const T = {
  A:   { name: "The Shared Return", survive: [true, true, true], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] },
  B:   { name: "A City of Witnesses", survive: [true, true, true], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] },
  C:   { name: "The Long Recovery", survive: [true, true, true], damian: "custody", armand: "withdrawn", august: "ruined", disclosure: ["none", "communities"] },
  D:   { name: "The Private Settlement", survive: [true, true, true], damian: "custody", armand: "settled", august: "bargained", disclosure: ["none"] },
  E:   { name: "The Severed Bond", survive: [false, false, false], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] },
  F_Q: { name: "What We Could Save (Quentin)", survive: [true, false, false], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] },
  F_S: { name: "What We Could Save (Silas)", survive: [false, true, false], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] },
  F_F: { name: "What We Could Save (Felix)", survive: [false, false, true], damian: "arrested", armand: "exposed", august: "charged", disclosure: ["communities", "public"] }
};

const text = {
  A: ["Mercy House's infirmary on Sunday: six beds, six people alive, the distributed bridge humming through the frame. Orrell signs what he has to, in front of Florian's archive, and the old program is named in the record at last.",
      "A governed recovery program, with a board and a budget and a medic called Reuben Pike who keeps writing 'probation' on things and crossing it out. Eamon, Hugo and Clive wake and are asked, properly, what they want.",
      "Damian in custody, answering to Mercy House and to Calder's courts both. Armand's name in the report. August's shop shut. And a question for the city: how much do we tell?"],
  B:   ["Sunday in the Okafors' workroom and Eastbank's long table: six people alive, the bridge carried by neighbours. The evidence is with Gareth and with the coalition, in three copies, where no institution can lose it.",
      "The communities build their own recovery: Eastbank's association, the Regent's trust, the restorers' circle, a clinic run by Reuben out of borrowed rooms. Eamon, Hugo and Clive are asked what they want, and it's written down.",
      "Gareth's case survives scrutiny. Damian is charged in a court that doesn't know what he is, for what it can prove. Armand's foundation is investigated. And a question: how much do we tell?"],
  C:   ["The interim bridge holds, heavy and slow. Three volunteers each carry one patient for weeks, sleeping twelve hours a day, while Reuben weans the links down a notch at a time. Everyone is alive. Nobody is well.",
      "A recovery timetable on the Okafors' wall: a week at a time, with care rotas, lost wages, a fund for the volunteers' rent. Eamon, Hugo and Clive are freed and furious and entitled to be.",
      "The ring ends. Damian in Mercy House's custody; Armand steps back from everything; August's clients disappear. What we tell the city is smaller than what happened."],
  D:   ["The interim bridge holds, on Armand's money and Armand's terms: every captive freed, every patient alive, a private clinic that asks no questions and keeps no public record.",
      "Recovery with everything paid for, quietly. Eamon, Hugo and Clive are compensated and asked to sign things. Some of them do.",
      "Damian in custody, out of sight. Armand keeps his name, a seat on two boards, and a limit on how far this goes. I agreed to it. I'll carry that."],
  E:   ["We cut the links. Eamon, Hugo and Clive wake in warehouse seven, weak and alive and themselves. At Pump Nine, Quentin, Silas and Felix die when their support ends, as the rules always said they would. Some of them chose it. That doesn't make it smaller.",
      "Three funerals in a week: Rusk Funeral Rooms, with Simeon doing it right this time; Jonah playing and refusing to make it a performance. The donors come, those who can walk. Their anger and their grief are both allowed.",
      "Damian is arrested at the docks. Armand's name is in every report. And a city that didn't know these men existed has to decide what to be told."],
  F_Q: ["One bridge. Quentin lives. Silas and Felix die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.",
        "Quentin wakes and asks who else made it, and I tell him, and he doesn't forgive anyone, including himself, and he's right not to yet.",
        "Damian arrested. Armand exposed. Two funerals; Otis at one, Ellis and Milo at the other."],
  F_S: ["One bridge. Silas lives. Quentin and Felix die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.",
        "Silas wakes in the bakery's back room where Otis insisted he be brought, and asks for the others, and cries into a tea towel. Otis doesn't let go of his hand.",
        "Damian arrested. Armand exposed. Two funerals; Gideon at one, standing in daylight hours he shouldn't, under an umbrella; Ellis and Milo at the other."],
  F_F: ["One bridge. Felix lives. Quentin and Silas die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.",
        "Felix wakes with Ellis holding his hand and says he's going to finish the film, and that it's going to have their names in it, and it does.",
        "Damian arrested. Armand exposed. Two funerals; Gideon at one, Otis at the other."]
};

const scenes = [
  {
    id: "CH22.OPEN.01", date: "2027-03-14", time: "09:00", place: "P02", cast: ["MC", "C10"], kind: "common",
    purpose: "Sunday morning above the print shop. Martin makes eggs and doesn't ask. My phone won't stop.",
    choices: Object.keys(T).map((k, i) => ({ id: "abcdefgh"[i], when: `ending = "${k}"`, text: T[k].name + ".", type: "structural", to: `CH22.${k.replace("_", "")}.01` }))
  }
];
for (const [k, t] of Object.entries(T)) {
  const K = k.replace("_", "");
  const set = { alive_quentin: t.survive[0], alive_silas: t.survive[1], alive_felix: t.survive[2], donors_freed: true,
    damian_fate: t.damian, armand_fate: t.armand, august_fate: t.august, e18: true, e18_src: "assembled" };
  scenes.push(
    { id: `CH22.${K}.01`, date: "2027-03-14", time: "14:00", place: k === "B" || k === "C" ? "P20" : k === "D" ? "P37" : k === "E" ? "P56" : "P01",
      cast: ["MC"], kind: "branch", when: `ending = "${k}"`, set, purpose: text[k][0], next: `CH22.${K}.02` },
    { id: `CH22.${K}.02`, date: "2027-03-17", time: "15:00", place: k === "E" || k.startsWith("F") ? "P30" : "P23",
      cast: ["MC", "C49", "C57", "C58"], kind: "branch", when: `ending = "${k}"`, purpose: text[k][1], next: `CH22.${K}.03` },
    { id: `CH22.${K}.03`, date: "2027-03-20", time: "11:00", place: k === "D" ? "P37" : "P01", cast: ["MC"], kind: "branch", when: `ending = "${k}"`,
      purpose: text[k][2],
      choices: t.disclosure.map((d, i) => ({ id: "abc"[i], text: {
        none: "Tell nobody outside the people who were there. The patients' privacy first.",
        communities: "Tell the communities: every family, pack, trust and circle. Not the newspapers.",
        public: "Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out."
      }[d], type: "structural", set: { disclosure: d } })),
      next: "CH22.END.01" }
  );
}
scenes.push({
  id: "CH22.END.01", date: "2027-03-21", time: "20:00", place: "P02", cast: ["MC"], kind: "common",
  purpose: "A week. The flood marks on the Riverside Steps are the highest in ten years. I sleep for fourteen hours and wake up knowing the names of everyone who lived and everyone who didn't, and that I'll say them for the rest of my life.",
  next: "CH23.OPEN.01"
});

module.exports = scenes;
module.exports.TUPLES = T;
