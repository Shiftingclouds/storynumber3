// Calder: the sixteen supporting arcs (bible §7, §9.2), re-windowed for the expanded calendar.
// States: "" (not yet) → intro → fore (foregrounded) → resolved:<outcome>. An arc never foregrounded is resolved in the
// background by its authored background outcome at CH23 (the script applies it), and acknowledged in the epilogue only if
// this playthrough actually developed it.
"use strict";
const arcs = [
  { id: "s01", name: "The print shop", people: ["C10", "C09"], places: ["P02"], windows: ["CH01", "CH06", "CH07", "CH12", "CH16", "CH23"],
    outcomes: { kept: "Martin sells the old press, keeps the shop, pays me a real wage." }, background: "Martin cuts his hours and takes on a part-timer; the shop survives, just." },
  { id: "s02", name: "Leaving Calder (Nolan)", people: ["C05", "C11"], places: ["P25", "P28"], windows: ["CH01", "CH07", "CH16", "CH17", "CH23"],
    outcomes: { leaves: "Nolan takes the course in September.", decides: "Nolan decides for himself; the epilogue honours whichever." }, background: "Nolan takes the course; we write." },
  { id: "s03", name: "A placement earned (Ellis)", people: ["C03", "C37", "C41"], places: ["P19", "P20", "P22"], windows: ["CH07", "CH11", "CH16", "CH17", "CH23"],
    outcomes: { leaves: "Ellis takes the placement with a transition plan his father helped write." }, background: "Ellis takes the placement; Basil's attribution is corrected in the catalogue." },
  { id: "s04", name: "The second brother (Serranos)", people: ["C02", "C26", "C25"], places: ["P07", "P08"], windows: ["CH07", "CH12", "CH16", "CH23"],
    outcomes: { north: "Micah takes a year up north; Leandro gets the gym grant.", decides: "Micah decides; Ernesto learns to ask." }, background: "Micah keeps the apprenticeship; Leandro hires help." },
  { id: "s05", name: "Returning to a stage (Dominic)", people: ["C04", "C15", "C53", "C35"], places: ["P29", "P34", "P46"], windows: ["CH07", "CH11", "CH12", "CH16", "CH23"],
    outcomes: { resolved: "Dominic sings at the spring showcase, or chooses not to, and either is his." }, background: "Dominic plays small late shows at Sable Records." },
  { id: "s06", name: "The venue lease (Switchyard)", people: ["C54", "C05", "C55"], places: ["P13", "P39"], windows: ["CH01", "CH12", "CH23"],
    outcomes: { moved: "Switchyard moves to the old tram shed; the crew is paid." }, background: "Switchyard loses the lease and moves; Desmond apologises to Nolan." },
  { id: "s07", name: "Who gets promoted (Mercy House)", people: ["C01", "C20", "C21", "C17"], places: ["P01"], windows: ["CH10", "CH16", "CH18", "CH23"],
    outcomes: { truth: "Adrian tells the truth; Emmett is protected by the truth instead of a lie.", reckoning: "Orrell accounts for the records.", deal: "A deal with Orrell, honoured.", quiet: "The review passes quietly.", posting: "Adrian takes the Bracken Court posting.", stays: "Adrian stays." },
    background: "Darius gets the unit; Adrian waits a year." },
  { id: "s08", name: "A room of one's own (Wesley)", people: ["C29", "C28", "C25"], places: ["P11"], windows: ["CH07", "CH12", "CH23"],
    outcomes: { own: "Wesley's name on his own lease." }, background: "Wesley stays at Pavel's on agreed terms." },
  { id: "s09", name: "A useful service (Reuben)", people: ["C08", "C33", "C13"], places: ["P23", "P51"], windows: ["CH12", "CH18", "CH23"],
    outcomes: { probation: "The response service runs on probation, then permanently." }, background: "The proposal stalls for a year." },
  { id: "s10", name: "Night work (the depot)", people: ["C12", "C28", "C23"], places: ["P27"], windows: ["CH06", "CH09", "CH23"],
    outcomes: {}, background: "The rota ballot passes after the tunnels, or the year after." },
  { id: "s11", name: "Who owns a home (Winton Court)", people: ["C14", "C34", "C55"], places: ["P36", "P41"], windows: ["CH12", "CH18", "CH23"],
    outcomes: {}, background: "The tenants win a consultation; the sale is delayed." },
  { id: "s12", name: "A film worth finishing", people: ["C35", "C27", "C52"], places: ["P08", "P19", "P45"], windows: ["CH07", "CH11", "CH16", "CH23"],
    outcomes: {}, background: "Milo's documentary screens at Southmere Cinema; Felix's film, if he lived, wins the placement." },
  { id: "s13", name: "Boys with plans (Will and Isaac)", people: ["C09", "C38", "C27"], places: ["P10", "P44"], windows: ["CH01", "CH02", "CH12", "CH13", "CH23"],
    outcomes: { resolved: "Will's trial." }, background: "Will makes the program's reserve list; Isaac builds something that works first time." },
  { id: "s14", name: "The crossing succession", people: ["C06", "C45", "C48", "C47"], places: ["P55", "P58", "P60"], windows: ["CH13", "CH14", "CH18", "CH24"],
    outcomes: { court: "Common access upheld by the court.", estate: "Lucan's family right restored; Oswin's leverage broken.", boundary: "Percival's successor named at the orchard." }, background: "The assembly extends the old arrangement for a year." },
  { id: "s15", name: "Passing on the bakery", people: ["C30", "C51", "C02"], places: ["P09"], windows: ["CH08", "CH16", "CH23", "CH24"],
    outcomes: { silas: "Silas runs the ovens; Otis sits by the door.", otis: "Otis keeps a chair for Silas and sells the business to someone who asks him for recipes." }, background: "Otis retires in the spring." },
  { id: "s16", name: "A home for the newly turned (the Regent)", people: ["C31", "C33", "C36", "C32"], places: ["P14"], windows: ["CH12", "CH18", "CH23"],
    outcomes: { shared: "Shared rules; no bought exceptions; Abel pays like everyone else.", split: "The vote splits; Abel moves out." }, background: "The trust limps on." }
];
module.exports = { arcs };
