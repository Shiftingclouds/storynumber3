// CH20 — Where I Stand. Sat 13 Mar, afternoon (bible Day 37).
// Purpose: select a viable rescue plan and my role. The briefing makes the plans and likely costs intelligible first.
// Plan eligibility (the same rule the ending matrix uses):
//   full    = plan_full and materials >= 3 and volunteers >= 6 and consent_q and consent_s and consent_f
//   interim = plan_interim and volunteers >= 3 and consent_q and consent_s and consent_f
//   pair    = plan_pair
//   extract = always
"use strict";
module.exports = [
  {
    id: "CH20.BRIEF.01", date: "2027-03-13", time: "14:00", place: "P20", cast: ["MC", "C37", "C03", "C08", "C01", "C06", "C05", "C02"], kind: "common",
    assert: "e05 and e06 and e07 and e14 and know_damian and know_deadline and patients_matched",
    purpose: "The briefing, at whichever table we chose in February. Everything we have, laid out in the order it will happen. Two things can go wrong that we can see coming: if the ring is watching the crossing (they know my face) and the keepers aren't with us, the donor team loses its timing; and if Armand left Sorrell House still hoping, Damian may move early. Which plan do we run?",
    choices: [
      { id: "a", when: "plan_full and (materials >= 3) and (volunteers >= 6) and consent_q and consent_s and consent_f", text: "The distributed bridge: everyone carries a little; all six come home, if it holds.", type: "structural", set: { plan_chosen: "full" } },
      { id: "b", when: "plan_interim and (volunteers >= 3) and consent_q and consent_s and consent_f", text: "The interim bridge: one volunteer to each patient, slow recovery, everyone lives.", type: "structural", set: { plan_chosen: "interim" } },
      { id: "c", when: "plan_pair", text: "The single-pair bridge: we can only carry one patient across. We free all three donors.", type: "structural", set: { plan_chosen: "pair" } },
      { id: "d", text: "Extraction: free the donors and end the links. The patients' support ends with them.", type: "structural", set: { plan_chosen: "extract" } }
    ],
    next: "CH20.ROLE.01"
  },
  {
    id: "CH20.ROLE.01", date: "2027-03-13", time: "15:30", place: "P20", cast: ["MC"], kind: "common",
    purpose: "Where do I stand tonight?",
    choices: [
      { id: "a", text: "At Pump Nine, with the patients and the anchors. I can see the links.", type: "structural", set: { role: "patient" } },
      { id: "b", when: "acc_still or inside_man or (st_ansel >= 3)", text: "At Stillwater, with the donors. Someone should be there who's seen them.", type: "structural", set: { role: "donor" } },
      { id: "c", when: "acc_cross or ally_keepers or (st_nolan >= 3)", text: "At the crossing, keeping time between two worlds with Nolan's relays.", type: "structural", set: { role: "coord" } }
    ],
    next: "CH20.LAST.01"
  },
  {
    id: "CH20.LAST.01", date: "2027-03-13", time: "18:10", place: "P06", cast: ["MC"], kind: "common",
    purpose: "Sunset over the river, the ice gone, the water high at the flood marks. An hour before we go. I spend it with someone, or alone.",
    choices: [
      { id: "a", when: "st_adrian >= 5", text: "Adrian.", type: "relational", set: { last_with: "adrian" } },
      { id: "b", when: "st_micah >= 5", text: "Micah.", type: "relational", set: { last_with: "micah" } },
      { id: "c", when: "st_ellis >= 5", text: "Ellis.", type: "relational", set: { last_with: "ellis" } },
      { id: "d", when: "st_dominic >= 5", text: "Dominic. The sun's just down.", type: "relational", set: { last_with: "dominic" } },
      { id: "e", when: "st_nolan >= 5", text: "Nolan.", type: "relational", set: { last_with: "nolan" } },
      { id: "f", when: "st_ansel >= 5", text: "Ansel.", type: "relational", set: { last_with: "ansel" } },
      { id: "g", when: "st_quentin >= 5", text: "Quentin, before the car comes.", type: "relational", set: { last_with: "quentin" } },
      { id: "h", when: "st_reuben >= 5", text: "Reuben.", type: "relational", set: { last_with: "reuben" } },
      { id: "i", text: "Martin, above the shop, pretending it's an ordinary Saturday.", type: "relational", set: { last_with: "martin" } },
      { id: "j", text: "Alone, on the steps, with the river.", type: "expressive", set: { last_with: "alone" } }
    ],
    next: "CH21.OPEN.01"
  }
];
