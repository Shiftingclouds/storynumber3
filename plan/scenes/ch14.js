// CH14 — Passage Denied. Tue 29 Dec – Fri 1 Jan (bible Day 29).
// Purpose: a crossing dispute closes the way home over the New Year; a complete local story with a written resolution
// and a distinct return arrangement. Quiet days. Off-screen: Clive is taken in Calder on New Year's Day.
"use strict";
module.exports = [
  {
    id: "CH14.CLOSED.01", date: "2026-12-29", time: "09:00", place: "P58", cast: ["MC", "C06", "C45", "C48", "C50"], kind: "common",
    purpose: "Morning at the crossing office: the passage is shut. Oswin claims the Iron Footbridge lease lapsed at midwinter and his company holds the renewal; Severin backs a restrictive agreement; old Percival, retiring, wants the crossing kept common. Nobody crosses until the Fair's closing assembly decides, and that could be weeks. Three ways to get home.",
    set: { s14: "fore" },
    choices: [
      { id: "a", text: "The court: speak at the Toll Gardens hearing, for common access.", type: "structural", set: { ch14_way: "court" }, to: "CH14.COURT.01" },
      { id: "b", text: "The estate: Lucan's household is drowning in debts nobody told him about. Help, and use his family's right of passage.", type: "structural", set: { ch14_way: "estate" }, to: "CH14.ESTATE.01" },
      { id: "c", text: "The boundary: Percival knows the old road through the border country to the orchard crossing.", type: "structural", set: { ch14_way: "boundary" }, to: "CH14.BOUNDARY.01" }
    ]
  },
  {
    id: "CH14.COURT.01", date: "2026-12-30", time: "10:00", place: "P58", cast: ["MC", "C06", "C45", "C48", "C50"], kind: "branch", when: "ch14_way = \"court\"",
    purpose: "The hearing in the Toll Gardens pavilion. I testify, as an outsider, to what common access means to people in Calder, and to one courier who crossed unofficially because the official fee was more than he earned. Ansel has to choose whether to speak against his father in public. The court grants a limited passage from 3 January, pending the assembly. And the lease registry, read into the record, shows Oswin's company leasing warehouse seven at Stillwater Docks since May, to 'a Calder restoration concern'.",
    set: { ally_court: true, still_lead: "registry", s14: "resolved:court" },
    choices: [
      { id: "a", text: "Tell Ansel he doesn't have to speak. And mean it.", type: "relational", set: { st_ansel: "+1" } },
      { id: "b", text: "Tell Ansel this is the moment. He knows it is.", type: "relational", set: { ansel_spoke: true, s14: "resolved:court" } }
    ],
    next: "CH14.QUIET.01"
  },
  {
    id: "CH14.ESTATE.01", date: "2026-12-30", time: "09:00", place: "P55", cast: ["MC", "C06", "C47"], kind: "branch", when: "ch14_way = \"estate\"",
    purpose: "The Verre estate, a day's ride out: an orchard, a mill, a household of people who'd suffer if Lucan walked away. The debts are real and concealed from him: loans against the harvest, most of them now owned by Oswin Deller. Two days of ledgers, winter work, and a kitchen table. Lucan gets leverage on Oswin; his family's old right of passage can be invoked on 3 January. And his steward's cousin works the night gate at Stillwater Docks.",
    set: { fr_lucan: "+1", still_lead: "clerk", s14: "resolved:estate", craft: "+2" },
    choices: [
      { id: "a", text: "Work the ledgers with Ansel till the lamps burn out.", type: "relational", set: { st_ansel: "+1" } },
      { id: "b", text: "Help in the mill with the companion I brought, or alone.", type: "relational", set: { craft: "+2" } }
    ],
    next: "CH14.QUIET.01"
  },
  {
    id: "CH14.BOUNDARY.01", date: "2026-12-30", time: "08:00", place: "P59", cast: ["MC", "C06", "C48"], kind: "branch", when: "ch14_way = \"boundary\"",
    purpose: "The Glass Road with Percival: an old road through unsettled border country where the puddles and ice reflect things that aren't there. In the reflections I can see bindings: three threads, taut as wires, running from somewhere downriver toward the crossing at Calder. They go to the docks. The road can't tell me why; it only shows me what. Two days out, sleeping in a ranger's hut, to the Boundary Orchard and its crossing into Orchard House, opening on the 3rd.",
    set: { still_lead: "threads", s14: "resolved:boundary", fr_percival: "+1", knack: "+3" },
    choices: [
      { id: "a", text: "Ask Percival why he's really retiring.", type: "relational", set: { fr_percival: "+1" } },
      { id: "b", text: "Look longer into the reflections than Percival thinks is wise.", type: "investigative", set: { strain: "+1", reached: "+1", threads_three: true } }
    ],
    next: "CH14.QUIET.01"
  },
  {
    id: "CH14.QUIET.01", date: "2026-12-31", time: "15:00", place: "P57", cast: ["MC", "C06"], kind: "common",
    purpose: "The last day of the year, with nowhere to be. Snow on the lodging's roof, a stove, a card game nobody explains properly. Quiet days turn into the kind of closeness that only happens when nobody can leave. It's the person I came with who fills this afternoon.",
    choices: [
      { id: "a", when: "(companion = \"adrian\") and (st_adrian >= 3)", text: "Adrian, off duty for the first time in the Marches, asks if I want to walk. He doesn't have a plan.", type: "relational", set: { b_adrian_offduty: true, st_adrian: 4 } },
      { id: "b", when: "(companion = \"micah\") and (st_micah >= 3)", text: "Micah gets a letter from home asking him back early. I tell him he's allowed to say no.", type: "relational", set: { b_micah_boundary: true, st_micah: 4 } },
      { id: "c", when: "(companion = \"nolan\") and (st_nolan >= 3)", text: "Nolan rebuilds the lodging's broken music box with a pocketknife, and I hold the torch.", type: "relational", set: { b_nolan_work: true, st_nolan: 4 } },
      { id: "d", when: "(companion = \"reuben\") and (st_reuben >= 3)", text: "Reuben sleeps for eleven hours and lets me bring him breakfast.", type: "relational", set: { b_reuben_needs: true, st_reuben: 4 } },
      { id: "e", when: "(st_ansel >= 3) and not(b_ansel_confidence)", text: "Ansel, by the stove, tells me the thing about his father he's never told anyone.", type: "relational", set: { b_ansel_confidence: true, st_ansel: 4 } },
      { id: "f", text: "Everyone together, cards and cider. Nobody alone with anybody.", type: "expressive", set: { people: "+1" } }
    ],
    next: "CH14.QUIET.02"
  },
  {
    id: "CH14.QUIET.02", date: "2026-12-31", time: "23:40", place: "P58", cast: ["MC", "C06"], kind: "common",
    purpose: "New Year's Eve at the Candle Fair: everyone carrying a lit candle to the pond in the Toll Gardens to set it on the water at midnight. Ansel finds me there. He has no message to deliver, no lease, no father's errand. He came because he wanted to.",
    choices: [
      { id: "a", when: "b_ansel_confidence and (hurt_ansel < 2)", text: "Tell him I'm glad he came without a reason. Mean all of it.", type: "relational", set: { b_ansel_nopretext: true, st_ansel: 5, out_ansel: true } },
      { id: "b", text: "Set my candle next to his and say happy new year.", type: "relational", set: { people: "+1" } }
    ],
    next: "CH14.NY.01"
  },
  {
    id: "CH14.NY.01", date: "2027-01-01", time: "11:00", place: "P55", cast: ["MC", "C06"], kind: "common",
    purpose: "New Year's Day in Bracken Court, grey and quiet. The way home opens on the 3rd. Tomorrow, the docks: two hours downriver by the local road, following whatever lead the last three days gave us.",
    next: "CH15.ROAD.01"
  }
];
