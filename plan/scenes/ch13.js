// CH13 — Bracken Court. Fri 25 – Mon 28 Dec (bible Day 28).
// Purpose: Christmas above the print shop; the crossing during the Candle Fair; the Marches as a society.
// Official hospitality or the tradespeople's lodging: different access, relationships and obligations.
"use strict";
module.exports = [
  {
    id: "CH13.XMAS.01", date: "2026-12-25", time: "10:00", place: "P02", cast: ["MC", "C10", "C09"], kind: "common",
    purpose: "Christmas above the print shop: Martin's annual attempt at a roast, Will pretending to be too old for stockings and emptying his anyway, a video call with Mum that freezes on her laughing. The knack, for once, is only happiness, and it's loud. I bought them something each.",
    choices: [
      { id: "a", text: "Give Will the second-hand scouting camera I found, so he can film his games and study them.", type: "relational", set: { fr_will: "+1", s13: "fore" } },
      { id: "b", text: "Give Martin an envelope: the overdue invoice, paid in person by a client I shamed into it.", type: "relational", when: "s01 = \"fore\"", set: { fr_martin: "+1" } },
      { id: "c", text: "Give them both the thing I've never said: that living here saved me.", type: "relational", set: { fr_martin: "+1", fr_will: "+1" } }
    ],
    next: "CH13.CROSS.01"
  },
  {
    id: "CH13.CROSS.01", date: "2026-12-28", time: "09:00", place: "P15", cast: ["MC", "C06", "C46"], kind: "common",
    purpose: "The Iron Footbridge's maintenance chamber on a white morning. Harlan Greaves keeps the crossing, sociable until anything touches a transaction. The threshold is a door in a brick wall that opens onto a different wind. Ansel steps through first, formal as a funeral. Whoever I asked is with us.",
    choices: [
      { id: "a", when: "harlan_aware", text: "Watch Harlan. He's more nervous than a keeper should be.", type: "investigative", set: { harlan_nervous: true, people: "+1" } },
      { id: "b", text: "Don't look back. Step through.", type: "expressive", set: { nerve: "+2" } }
    ],
    next: "CH13.COURT.01"
  },
  {
    id: "CH13.COURT.01", date: "2026-12-28", time: "11:00", place: "P55", cast: ["MC", "C06"], kind: "common",
    purpose: "Bracken Court at the Candle Fair: a market town of slate and timber, a candle in every window, stalls of hot cider and pastries Ansel explains in detail. People who are irritated by visitors and sell to them anyway. The knack is strange here: the weather of the Marches is older and slower, like reading a book in another alphabet.",
    set: { know_marches: true },
    choices: [
      { id: "a", text: "Stay at Ansel's father's house. Official hospitality opens official doors.", type: "structural", set: { ch13_lodging: "official" }, to: "CH13.OFFICIAL.01" },
      { id: "b", text: "Stay at the Travelers' House where the couriers stay. Eamon stayed there.", type: "structural", set: { ch13_lodging: "travelers" }, to: "CH13.TRAVELERS.01" }
    ]
  },
  {
    id: "CH13.OFFICIAL.01", date: "2026-12-28", time: "18:00", place: "P55", cast: ["MC", "C06", "C45", "C47", "C50"], kind: "branch", when: "ch13_lodging = \"official\"",
    purpose: "Dinner at the envoy's house. Severin Marr offers choices framed so the one he wants sounds responsible. Cousin Lucan, playful in private, formal the second money is mentioned. A guest, Oswin Deller, a broker in a heavy coat, who describes exploitation as practicality and asks me polite questions about Calder property. Afterwards Severin grants me access to the crossing registry, as a courtesy that is also a leash.",
    set: { fr_severin: 1, fr_lucan: 1, oswin_met: true, registry_access: true },
    choices: [
      { id: "a", text: "Take the registry access, and thank Severin for it properly.", type: "relational", set: { fr_severin: "+1" } },
      { id: "b", text: "Ask Oswin what he stores at Stillwater.", type: "investigative", set: { oswin_wary: true, enemy_aware: "+1" },
        notes: "A mistake, gently punished: Oswin will remember my face." }
    ],
    next: "CH13.COURT.03"
  },
  {
    id: "CH13.TRAVELERS.01", date: "2026-12-28", time: "18:00", place: "P57", cast: ["MC", "C06", "C47"], kind: "branch", when: "ch13_lodging = \"travelers\"",
    purpose: "The Travelers' House: crowded corridors, shared meals, house rules about boots. The landlady still has Eamon's bag: he sent it ahead with another courier in August and never came to claim it. His good shirt, a return ticket, a letter to a sister he never posted. And in September, she says, a man in a good coat came asking whether Eamon had arrived. Lucan eats here on Mondays because the food is better than at home.",
    set: { e06_c: true, fr_lucan: 1, eamon_bag: true },
    choices: [
      { id: "a", text: "Keep the letter safe for Eamon. Don't read it.", type: "relational", set: { eamon_letter_kept: true } },
      { id: "b", text: "Hold the bag, and reach.", type: "investigative", set: { reached: "+1", strain: "+1", knack: "+2", eamon_hope: true },
        notes: "Echo: nothing of the abduction, just Eamon packing in a hurry and whistling. A person, not a clue. It helps." }
    ],
    next: "CH13.COURT.03"
  },
  {
    id: "CH13.COURT.03", date: "2026-12-28", time: "22:30", place: "P58", cast: ["MC", "C06"], kind: "common",
    purpose: "The Toll Gardens at night: lanterns in the bare trees, the crossing office dark. Ansel walks me round twice before he says it: his father has been using him to carry his intentions since he was twelve, and every friend he's had has been a piece of family business. He's never told anyone that. He waits to see what I'll make it into.",
    choices: [
      { id: "a", when: "st_ansel >= 3", text: "Make it into nothing. It's his. Just say thank you for telling me.", type: "relational", set: { b_ansel_confidence: true, st_ansel: 4 } },
      { id: "b", text: "\"So stop carrying it.\" Tell him he can choose.", type: "relational", set: { s14: "fore" } }
    ],
    next: "CH14.CLOSED.01"
  }
];
