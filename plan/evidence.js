// Calder: the evidence network (bible §8.5). Where each clue can be found is computed from the scenes (see
// docs/06-evidence.md); this file records what each clue establishes, and whether it's essential (must be known on every
// path by the CH20 briefing, which asserts it).
"use strict";
const evidence = [
  { id: "e01", name: "An interrupted phone recording", establishes: "Quentin's presence and the sequence; not the murderer's identity.", essential: false },
  { id: "e02", name: "A surviving camera angle", establishes: "A service vehicle and a worker's movements around the body.", essential: false },
  { id: "e03", name: "Quentin's prepared token", establishes: "A recognisable kind of protective work, modified.", essential: false },
  { id: "e04", name: "An inconsistent body-handling entry", establishes: "Someone used an old Mercy House channel and changed the record: Damian's code.", essential: false },
  { id: "e05", name: "A measurable vitality mismatch", establishes: "Quentin is neither healed nor turned; an external source is involved.", essential: true },
  { id: "e06", name: "Eamon's missed route", establishes: "A named missing person crossed through a particular threshold.", essential: true },
  { id: "e07", name: "The old rescue report", establishes: "A similar effect existed, with donor injury, a hard 48-hour limit, and a sensitive who monitored the links.", essential: true },
  { id: "e08", name: "A repair with three contributors", establishes: "A bond can distribute strain through a prepared cooperative structure.", essential: false },
  { id: "e09", name: "Silas's trial correspondence", establishes: "Paid recruitment and deception; his death wasn't a miracle.", essential: false },
  { id: "e10", name: "The altered provenance", establishes: "The old program's frame was sold under a false description.", essential: false },
  { id: "e11", name: "A photographed delivery", establishes: "A charitable event and a storage movement to Pump Nine overlap.", essential: false },
  { id: "e12", name: "Pump Nine's actual use", establishes: "A supposedly empty site has occupation, supplies and movement.", essential: false },
  { id: "e13", name: "An authorised route used unofficially", establishes: "People were carried through a controlled crossing outside its purpose.", essential: false },
  { id: "e14", name: "The donor chambers", establishes: "The missing men are alive and linked to specific patients.", essential: true },
  { id: "e15", name: "Contradictory promises to Armand", establishes: "The patron was misled about the hard limit.", essential: false },
  { id: "e16", name: "Damian's control notes", establishes: "Deliberate prolongation of dependence, manufactured deaths, and the date.", essential: false },
  { id: "e17", name: "A complete distributed plan", establishes: "A credible alternative with costs and required consent.", essential: false },
  { id: "e18", name: "Institutional responsibility", establishes: "Who killed, who knowingly enabled, who concealed old harm, who was deceived.", essential: false }
];
// Essential facts that aren't E-clues, also asserted at the CH20 briefing:
const facts = ["know_damian", "know_deadline", "patients_matched"];
module.exports = { evidence, facts };
