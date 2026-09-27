// Calder: the story calendar. Source of truth for dates, generated into docs/02-calendar.md.
// Weekdays follow the real 2026–27 calendar; the year is never printed in the game.
// kind: part | chapter | offscreen (antagonists and other people, unseen by the narrator) | arc (side story beat)
//       | season (weather, holidays, city life) | moon | backstory
// Chapters keep the bible's dramatic purposes. "day" is the bible's original Day number where one existed.
"use strict";

const parts = [
  { id: "P1", title: "Part One: Late Summer", chapters: ["CH01", "CH02", "CH03", "CH04", "CH05", "CH06", "CH07"] },
  { id: "P2", title: "Part Two: The Dark Half", chapters: ["CH08", "CH09", "CH10", "CH11", "CH12"] },
  { id: "P3", title: "Part Three: Midwinter", chapters: ["CH13", "CH14", "CH15", "CH16", "CH17"] },
  { id: "P4", title: "Part Four: The Thaw", chapters: ["CH18", "CH19", "CH20", "CH21", "CH22"] },
  { id: "P5", title: "Afterward", chapters: ["CH23", "CH24"] }
];

const chapters = [
  { id: "CH01", title: "After the Last Set", from: "2026-08-29", to: "2026-08-30", day: "0",
    purpose: "Event work, Nolan, home obligations, the murder behind Switchyard. The knack's first hard pulse." },
  { id: "CH02", title: "The Account I Give", from: "2026-08-30", to: "2026-08-30", day: "1",
    purpose: "Respond to what I witnessed; consequences at home. Record who knows what and what evidence survives." },
  { id: "CH03", title: "Double Shift", from: "2026-09-01", to: "2026-09-01", day: "3",
    purpose: "Recognise Quentin alive at the café; first direct contradiction." },
  { id: "CH04", title: "People Who Know", from: "2026-09-01", to: "2026-09-03", day: "3–5",
    purpose: "The supernatural premise; Adrian/Reuben (Mercy House) and Gideon/Dominic (the Regent); competing explanations." },
  { id: "CH05", title: "What the Body Keeps", from: "2026-09-04", to: "2026-09-04", day: "6",
    purpose: "External support becomes a credible hypothesis: hospital route or restoration route." },
  { id: "CH06", title: "Another Man Missing", from: "2026-09-14", to: "2026-09-19", day: "8 → three weeks in",
    purpose: "Ansel connects Eamon's absence to a specific journey. Term begins; the city moves into autumn." },
  { id: "CH07", title: "An Evening Already Promised", from: "2026-10-02", to: "2026-10-03",
    purpose: "Ordinary life and one substantial commitment (Nolan's birthday, the Serrano table, or the university crowd). Hugo established before he disappears." },
  { id: "CH08", title: "The Second Return", from: "2026-10-15", to: "2026-10-17", day: "14",
    purpose: "Silas's case proves repetition; Hugo's absence gives it a human face." },
  { id: "CH09", title: "Work Beneath the City", from: "2026-10-29", to: "2026-10-31", day: "17",
    purpose: "A complete supernatural adventure over Halloween: the Northline predator or the inherited screen." },
  { id: "CH10", title: "The Closed Program", from: "2026-11-07", to: "2026-11-08", day: "19",
    purpose: "The earlier rescue work, its donor harm, the hard 48-hour limit, and the sensitive who monitored the links." },
  { id: "CH11", title: "The Exhibition", from: "2026-11-19", to: "2026-11-20", day: "23",
    purpose: "Social circles collide at the Whitcomb; Felix, Clive and the patron established; the photographed connection." },
  { id: "CH12", title: "Before We Leave", from: "2026-11-24", to: "2026-12-20", day: "25",
    purpose: "Full-moon gathering, Regent emergency, or work/family and the Lantern Rooms haunting; then December, and the Marches journey prepared." },
  { id: "CH13", title: "Bracken Court", from: "2026-12-25", to: "2026-12-28", day: "28",
    purpose: "Christmas above the print shop; the crossing at the Candle Fair; the Marches as a society." },
  { id: "CH14", title: "Passage Denied", from: "2026-12-29", to: "2027-01-01", day: "29",
    purpose: "A crossing dispute closes the way home over the New Year; a complete local story; a return arrangement." },
  { id: "CH15", title: "Stillwater", from: "2027-01-02", to: "2027-01-02", day: "30",
    purpose: "The holding site exists; no safe extraction yet. Clive seen or learned of. A credible exit." },
  { id: "CH16", title: "The Third Return", from: "2027-01-04", to: "2027-01-09", day: "32",
    purpose: "Back in Calder: Felix changed; patients connected to donors." },
  { id: "CH17", title: "What I Ask of Him", from: "2027-01-23", to: "2027-01-31", day: "34",
    purpose: "Deep winter. A major trust/disclosure question; one romance or friendship moves forward." },
  { id: "CH18", title: "A Method We Can Defend", from: "2027-02-01", to: "2027-02-27", day: "35",
    purpose: "February: test full, interim, single-pair and extraction plans; gather materials and willing people." },
  { id: "CH19", title: "The Offer", from: "2027-03-06", to: "2027-03-06", day: "36",
    purpose: "Armand's proposal at Sorrell House; the anniversary deadline becomes known; accountability decided." },
  { id: "CH20", title: "Where I Stand", from: "2027-03-13", to: "2027-03-13", day: "37 (afternoon)",
    purpose: "Choose the plan and my role: patient site, donor site, or coordination." },
  { id: "CH21", title: "The Links Between Us", from: "2027-03-13", to: "2027-03-14", day: "37 (night)",
    purpose: "The two-site climax: Pump Nine and Stillwater. Survival and culpability resolved." },
  { id: "CH22", title: "The Names We Can Say", from: "2027-03-14", to: "2027-03-21", day: "38–45",
    purpose: "One of six plot conclusions, fully dramatised." },
  { id: "CH23", title: "Six Weeks Later", from: "2027-04-24", to: "2027-04-24",
    purpose: "Recovery and supporting arcs; the relationship decision; Benoît's spring showcase." },
  { id: "CH24", title: "One Year Later", from: "2028-03-13", to: "2028-03-13",
    purpose: "The assembled epilogue: anchor, patients and donors, the chosen life, two or three consequences, the final image." }
];

const events = [
  // ---------------------------------------------------------------- backstory
  { date: "2016-10-11", kind: "backstory", text: "Nolan and Theo meet as sixteen-year-olds at a school tech crew; they've done event work together since." },
  { date: "2017-03-14", kind: "backstory", who: ["C44"], text: "Octavian Sorrell, 20, dies in a fall at the Quarry Lake cliffs (P49). His body is recovered after three days. An ordinary accident; no secret survival." },
  { date: "2019-06-01", kind: "backstory", who: ["C24", "C18", "C56"], text: "The emergency return program fails: a warden donor is injured. The program's sensitive, Ruth Carrow, had warned the link was straining. Orrell closes the program and divides the records; Malcolm is pushed out. Damian was its junior ritual physician." },
  { date: "2020-09-01", kind: "backstory", who: ["C56", "C08"], text: "Damian teaches limited emergency methods at Mercy House; Reuben is his student (2020–23)." },
  { date: "2023-02-01", kind: "backstory", text: "Theo, 16, moves in with Martin and Will above the print shop when his mother takes the northern clinic contract." },
  { date: "2024-04-15", kind: "backstory", who: ["C56", "C18"], text: "Damian resigns after Orrell refuses to reopen the research." },
  { date: "2024-06-10", kind: "backstory", who: ["C32"], text: "Gideon Shaw is turned at 27. Simeon knows the circumstances. He stops answering Quentin's calls." },
  { date: "2025-08-22", kind: "backstory", who: ["C04"], text: "Dominic Bell is turned at 21, a year before the opening." },
  { date: "2026-01-20", kind: "backstory", who: ["C39", "C44", "C56"], text: "August Rell introduces Damian to Armand, and sells Armand the hope of an 'extension'." },
  { date: "2026-02-14", kind: "backstory", who: ["C36"], text: "Abel Mercer is turned at 56." },
  { date: "2026-04-02", kind: "backstory", who: ["C17"], text: "Victor Keene is injured after a bad operational call. Reuben refuses to clear an early return." },
  { date: "2026-04-20", kind: "backstory", who: ["C55", "C56"], text: "Soren arranges discreet access to Pump Nine (P16) for 'restoration storage'." },
  { date: "2026-05-18", kind: "backstory", who: ["C50", "C56"], text: "Oswin leases warehouse space at Stillwater Docks (P56); he does not ask why." },
  { date: "2026-06-12", kind: "backstory", who: ["C46"], text: "Harlan begins unofficial passages through Northwood (P54) for paying clients." },
  { date: "2026-07-03", kind: "backstory", who: ["C29"], text: "Wesley Dent is bitten and turns in another town; he arrives in Calder in early August with nothing." },
  { date: "2026-07-18", kind: "backstory", who: ["C01", "C21"], text: "Emmett misses a training session for paid work; Adrian writes an inaccurate report to cover him." },
  { date: "2026-08-08", kind: "backstory", who: ["C07", "C56"], text: "Quentin finishes a weekend first-aid course at the Southmere Recreation Centre (P46); the instructor gives each student a small 'lucky' token. Quentin's has been prepared." },

  // ---------------------------------------------------------------- part one
  { date: "2026-08-28", kind: "moon", text: "Full moon. Eastbank's wolves change." },
  { date: "2026-08-28", kind: "offscreen", who: ["C49"], time: "night", text: "Day −1. Eamon is taken on his way to an unofficial crossing at Northwood. He never reaches the Marches." },
  { date: "2026-08-29", kind: "chapter", ref: "CH01", time: "18:00", text: "Load-in for the Last Set, Switchyard's end-of-summer all-ages show." },
  { date: "2026-08-30", kind: "offscreen", who: ["C07", "C56", "C19"], time: "00:40", text: "Quentin is killed in Switchyard's rear lane after his token is activated. His body leaves in a Rusk Funeral Rooms van through an old arrangement Simeon doesn't question." },
  { date: "2026-08-30", kind: "offscreen", who: ["C07", "C49", "C56"], time: "evening", text: "Within 24 hours: Quentin is returned at Pump Nine using Eamon's vitality, and told he survived an extraordinary emergency intervention that he must keep quiet." },
  { date: "2026-08-30", kind: "chapter", ref: "CH02" },
  { date: "2026-08-31", kind: "offscreen", who: ["C06"], text: "Ansel learns Eamon never arrived at Bracken Court." },
  { date: "2026-09-01", kind: "chapter", ref: "CH03", time: "07:30", text: "Quentin back at Double Shift: he needs the money." },
  { date: "2026-09-04", kind: "chapter", ref: "CH05" },
  { date: "2026-09-07", kind: "season", text: "Schools go back. Will starts his final year at Hartley." },
  { date: "2026-09-14", kind: "season", text: "University term begins on the Hill; Bellweather Court fills up." },
  { date: "2026-09-19", kind: "chapter", ref: "CH06" },
  { date: "2026-09-26", kind: "moon", text: "Full moon." },
  { date: "2026-09-28", kind: "offscreen", who: ["C07"], text: "Quentin's first monthly 'follow-up' at a rented flat in Winton Court (P41). Russell notices a stranger using the service corridor." },
  { date: "2026-10-01", kind: "arc", arc: "S01", text: "Martin's biggest customer is ninety days overdue; the print shop's overdraft is called in." },
  { date: "2026-10-02", kind: "chapter", ref: "CH07", text: "Nolan turns twenty. His flat party at Laird's was promised weeks ago." },
  { date: "2026-10-10", kind: "season", text: "Crescent Market's Harvest Fair." },

  // ---------------------------------------------------------------- part two
  { date: "2026-10-12", kind: "offscreen", who: ["C57"], time: "06:00", text: "Hugo is taken after a night shift at the depot." },
  { date: "2026-10-13", kind: "offscreen", who: ["C51"], time: "late", text: "Silas, recruited into a 'supervised paid trial', is killed." },
  { date: "2026-10-14", kind: "offscreen", who: ["C51", "C57"], text: "Silas is returned using Hugo." },
  { date: "2026-10-15", kind: "chapter", ref: "CH08", text: "Silas's case reaches me." },
  { date: "2026-10-24", kind: "offscreen", who: ["C52", "C44"], text: "The Sorrell Foundation's autumn gala at the Ashcombe Conservatory (P39). Felix, filming it for pay, catches a van loading at the service gate." },
  { date: "2026-10-26", kind: "moon", text: "Full moon." },
  { date: "2026-10-29", kind: "chapter", ref: "CH09" },
  { date: "2026-10-31", kind: "season", text: "Halloween: Southmere Cinema's all-night horror marathon; kids in costume on Latch Lane." },
  { date: "2026-11-07", kind: "chapter", ref: "CH10", text: "Orchard House in its last autumn colour; the Mercy House archive." },
  { date: "2026-11-12", kind: "season", text: "First hard frost." },
  { date: "2026-11-19", kind: "chapter", ref: "CH11", text: "Basil's exhibition, 'The Material City', opens at the Whitcomb, sponsored by the Sorrell Foundation." },
  { date: "2026-11-24", kind: "moon", text: "Full moon: the supervised gathering at North Ridge." },
  { date: "2026-11-24", kind: "chapter", ref: "CH12" },
  { date: "2026-12-05", kind: "season", text: "First snow." },
  { date: "2026-12-11", kind: "season", text: "Winter Lights opens along the river (to 31 Dec)." },
  { date: "2026-12-12", kind: "arc", arc: "S06", text: "The Switchyard fundraiser gig for the lease fight." },
  { date: "2026-12-14", kind: "offscreen", who: ["C52"], text: "Felix, still digging, films the outside of Pump Nine at night." },
  { date: "2026-12-18", kind: "arc", arc: "S05", text: "Benoît's winter concert at the Lantern Rooms. Dominic in the audience, or not." },

  // ---------------------------------------------------------------- part three
  { date: "2026-12-21", kind: "season", text: "Midwinter. The Candle Fair opens in Bracken Court (to 6 Jan): the only season outsiders may enter unsponsored." },
  { date: "2026-12-24", kind: "moon", text: "Full moon, Christmas Eve. Eastbank's wolves change; the Serranos eat at noon." },
  { date: "2026-12-25", kind: "chapter", ref: "CH13", text: "Christmas above the print shop." },
  { date: "2026-12-28", kind: "season", text: "The crossing at Iron Footbridge (P15), Harlan keeping." },
  { date: "2026-12-29", kind: "chapter", ref: "CH14", text: "The crossing closes over a lease dispute." },
  { date: "2027-01-01", kind: "offscreen", who: ["C58"], text: "New Year's Day: Clive is taken. His open studio never opens; his students notice." },
  { date: "2027-01-02", kind: "chapter", ref: "CH15", text: "A scheduled movement at Stillwater: a new captive arrives." },
  { date: "2027-01-02", kind: "offscreen", who: ["C52"], time: "late", text: "Felix is killed to silence him." },
  { date: "2027-01-03", kind: "offscreen", who: ["C52", "C58"], text: "Felix is returned using Clive, as a controlled case and a leash." },
  { date: "2027-01-03", kind: "season", text: "Passage reopens; the party returns to Calder late." },
  { date: "2027-01-04", kind: "chapter", ref: "CH16" },
  { date: "2027-01-15", kind: "arc", arc: "S02", text: "Nolan's course application deadline." },
  { date: "2027-01-21", kind: "arc", arc: "S03", text: "Ellis's placement interview." },
  { date: "2027-01-22", kind: "moon", text: "Full moon." },
  { date: "2027-01-23", kind: "chapter", ref: "CH17", text: "Deep cold. The river freezes at the edges." },

  // ---------------------------------------------------------------- part four
  { date: "2027-02-01", kind: "chapter", ref: "CH18" },
  { date: "2027-02-08", kind: "offscreen", who: ["C07", "C51", "C52"], text: "The patients are failing slowly as the donors weaken: grey, cold, tired." },
  { date: "2027-02-12", kind: "arc", arc: "S07", text: "Mercy House promotion review." },
  { date: "2027-02-18", kind: "arc", arc: "S16", text: "Regent residents' vote on fees and feeding support." },
  { date: "2027-02-20", kind: "moon", text: "Full moon." },
  { date: "2027-02-24", kind: "offscreen", who: ["C44", "C39", "C56"], text: "Armand insists on the anniversary. Damian schedules the 'consolidation' for dawn on 14 March and plans to move the donors to Pump Nine the night before." },
  { date: "2027-03-01", kind: "season", text: "The thaw. Flood warnings on the Riverside Steps." },
  { date: "2027-03-06", kind: "chapter", ref: "CH19", text: "An invitation on heavy card to Sorrell House." },
  { date: "2027-03-13", kind: "chapter", ref: "CH20", time: "14:00" },
  { date: "2027-03-13", kind: "chapter", ref: "CH21", time: "22:00" },
  { date: "2027-03-14", kind: "backstory", text: "Tenth anniversary of Octavian's death. The attempt that must not happen." },
  { date: "2027-03-14", kind: "chapter", ref: "CH22" },
  { date: "2027-03-22", kind: "moon", text: "Full moon." },
  { date: "2027-03-31", kind: "arc", arc: "S06", text: "Switchyard's lease deadline." },

  // ---------------------------------------------------------------- afterward
  { date: "2027-04-24", kind: "chapter", ref: "CH23", text: "Six weeks after the rescue. Benoît's spring showcase that evening." },
  { date: "2027-09-06", kind: "arc", arc: "S02", text: "Courses and placements begin elsewhere, for those who leave." },
  { date: "2028-03-13", kind: "chapter", ref: "CH24", text: "One year after the rescue." }
];

const fullMoons = ["2026-08-28", "2026-09-26", "2026-10-26", "2026-11-24", "2026-12-24", "2027-01-22", "2027-02-20", "2027-03-22", "2027-04-20"];

// Approximate sunrise and sunset (HH:MM) by month, for vampire schedules.
const sunrise = { "08": "06:20", "09": "06:50", "10": "07:25", "11": "07:10", "12": "07:50", "01": "07:50", "02": "07:15", "03": "06:25", "04": "06:20" };
const sunset = { "08": "20:00", "09": "19:05", "10": "18:05", "11": "16:40", "12": "16:15", "01": "16:45", "02": "17:35", "03": "18:15", "04": "19:55" };

module.exports = { parts, chapters, events, fullMoons, sunrise, sunset };
