// CH24 — One Year Later. Mon 13 Mar, a year after the rescue.
// Purpose: the assembled epilogue, in the bible's fixed editorial order (§9.5):
//   1 the ending's anchor scene · 2 patients and donors · 3 the primary relationship or chosen single life
//   4 two or three supporting consequences from arcs actually developed · 5 the final image.
// The passages themselves are listed in plan/endings.js; these scenes are where they're assembled.
"use strict";
module.exports = [
  {
    id: "CH24.ANCHOR.01", date: "2028-03-13", time: "17:30", place: "P06", cast: ["MC"], kind: "common",
    purpose: "One of eight written anchors (by ending): where I am, a year on, and what the resolution changed. The river, the steps, the same date.",
    next: "CH24.PATIENTS.01"
  },
  {
    id: "CH24.PATIENTS.01", date: "2028-03-13", time: "18:00", place: "P06", cast: ["MC"], kind: "common",
    purpose: "Patients and donors, by name, each by his own passage compatible with who lived: Quentin, Silas and Felix (a life, or a grave I visit); Eamon, Hugo and Clive. Nobody forgotten because he wasn't a romance.",
    next: "CH24.REL.01"
  },
  {
    id: "CH24.REL.01", date: "2028-03-13", time: "19:00", place: "P02", cast: ["MC"], maybe: ["C01", "C02", "C03", "C04", "C05", "C06", "C07", "C08"], kind: "common",
    purpose: "The relationship passage: one of forty authored scenes, eight men by together, distance, parted and friends, plus a single life. Quentin's only if he lived, and a grief passage if he didn't.",
    next: "CH24.CONSEQ.01"
  },
  {
    id: "CH24.CONSEQ.01", date: "2028-03-13", time: "20:00", place: "P02", cast: ["MC"], kind: "common",
    purpose: "Two or three consequences drawn from the arcs this playthrough developed: the shop, Will's program, the new Switchyard, the Regent, Mercy House's review, the response service, the bakery, the crossing succession. Unmet people get no intimate biographies.",
    next: "CH24.FINAL.01"
  },
  {
    id: "CH24.FINAL.01", date: "2028-03-13", time: "22:00", place: "P06", cast: ["MC"], kind: "common", end: true,
    purpose: "The final image: the knack, a year older, reading a room that includes me.",
  }
];
