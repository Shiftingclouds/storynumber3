// CH15 — Stillwater. Sat 2 Jan (bible Day 30), with the journey home on Sun 3 Jan.
// Purpose: the holding site exists; the donors are alive and linked; no safe extraction yet. Discovery level and enemy
// awareness are explicit. A credible exit. (Off-screen: Clive arrived at dawn; Felix is killed late tonight in Calder.)
"use strict";
module.exports = [
  {
    id: "CH15.ROAD.01", date: "2027-01-02", time: "07:00", place: "P55", cast: ["MC", "C06"], maybe: ["C01", "C02", "C05", "C08"], kind: "common",
    purpose: "Two hours on the local road, downriver, in a hired cart that smells of apples. Stillwater: working docks, old rented warehouses, boat repairs, crews. Warehouse seven has new locks.",
    choices: [
      { id: "a", text: "Watch from the boat sheds. Something is scheduled for this morning; the gate crew said so.", type: "structural", set: { ch15_way: "observe" }, to: "CH15.OBSERVE.01" },
      { id: "b", when: "(still_lead = \"clerk\") or (still_lead = \"registry\")", text: "Find someone who works inside. We have a name.", type: "structural", set: { ch15_way: "witness" }, to: "CH15.WITNESS.01" }
    ]
  },
  {
    id: "CH15.OBSERVE.01", date: "2027-01-02", time: "10:30", place: "P56", cast: ["MC", "C06", "C58"], maybe: ["C01", "C02", "C05", "C08"], kind: "branch", when: "ch15_way = \"observe\"",
    purpose: "A covered boat at warehouse seven's water door. Two men carry a third between them: a big man in a flat cap, clay under his fingernails, head lolling. I know him. Clive Merritt, who made the donors laugh at the Whitcomb. The knack finds a fresh thread in him, anchored but not yet running anywhere.",
    set: { know_clive_taken: true, know_donors: "+1" },
    choices: [
      { id: "a", when: "nerve >= 40", text: "Get closer. See the faces. Stay unseen.", type: "investigative", set: { nerve: "+3", saw_crew: true } },
      { id: "b", text: "Stay where I am. Count them. Photograph the boat.", type: "investigative", set: { boat_photo: true } },
      { id: "c", text: "Stand up without thinking.", type: "expressive", set: { enemy_aware: "+1" },
        notes: "A man on the jetty looks straight at me. The ring now knows someone was watching Stillwater." }
    ],
    next: "CH15.CHAMBERS.01"
  },
  {
    id: "CH15.WITNESS.01", date: "2027-01-02", time: "10:30", place: "P56", cast: ["MC", "C06"], maybe: ["C01", "C02", "C05", "C08"], kind: "branch", when: "ch15_way = \"witness\"",
    purpose: "The night-gate man (Lucan's steward's cousin, or a clerk named in the lease registry), over bad coffee in a crew hut. 'Sick men', he calls them. Warehouse seven. A physician's assistant from Calder comes twice a week with bags of fluid. A new one came in at dawn: big, a flat cap, clay on his hands. He's ashamed he didn't ask why. He tells us the shift change, and which window.",
    set: { know_clive_taken: true, know_donors: "+1", shift_change: true },
    choices: [
      { id: "a", text: "Promise him nobody will know it was him. Keep the promise.", type: "relational", set: { witness_safe: true } },
      { id: "b", text: "Ask him to be our man inside on the night we come back.", type: "investigative", set: { inside_man: true },
        notes: "He says no, then yes, then asks for money, then says he'll do it for nothing. A real person's decision; it holds." }
    ],
    next: "CH15.CHAMBERS.01"
  },
  {
    id: "CH15.CHAMBERS.01", date: "2027-01-02", time: "13:30", place: "P56", cast: ["MC", "C06", "C49", "C57", "C58"], maybe: ["C01", "C02", "C05", "C08"], kind: "common",
    purpose: "Through the high window at the shift change: warehouse seven has been made into a ward. Three beds, drips, a stove. Eamon, grey and thin but breathing; Hugo, whom I last saw waving from a night bus; Clive, newly arrived. And the knack sees it all at once: two threads running taut out of the building, back toward Calder, to two men I know; and a third, freshly anchored, waiting for someone. We can't take them. The links would kill whoever's on the other end, and there are four armed men and a gate.",
    set: { e14: true, e14_src: "stillwater", know_donors: 3, suspect_donor: true },
    gains: ["e14"],
    choices: [
      { id: "a", text: "Look at Eamon until he feels it. Let him know someone came.", type: "relational", set: { eamon_saw: true, strain: "+1" } },
      { id: "b", text: "Memorise everything: doors, locks, the stove, the guard's habits.", type: "investigative", set: { still_layout: true, craft: "+2" } }
    ],
    next: "CH15.EXIT.01"
  },
  {
    id: "CH15.EXIT.01", date: "2027-01-02", time: "16:00", place: "P56", cast: ["MC", "C06"], maybe: ["C01", "C02", "C05", "C08"], kind: "common",
    purpose: "Getting out. Dusk comes early on the river. Whatever we did this morning decides how easy this is.",
    choices: [
      { id: "a", when: "enemy_aware >= 2", text: "Run for the cart with the gate crew shouting behind us.", type: "investigative", set: { nerve: "+3", hurt_mc: "+1", enemy_aware: 3 } },
      { id: "b", when: "enemy_aware < 2", text: "Walk out with a crew coming off shift, heads down, like we belong.", type: "investigative", set: { people: "+2" } }
    ],
    next: "CH15.HOME.01"
  },
  {
    id: "CH15.HOME.01", date: "2027-01-03", time: "23:15", place: "P02", cast: ["MC", "C10"], maybe: ["C01", "C02", "C05", "C08"], kind: "common",
    purpose: "Home on the 3rd, late, through whichever door the last days opened: the Iron Footbridge with Harlan pretending not to see us, or the orchard crossing into Malcolm's kitchen and a lift down the ridge. Martin is up, in his dressing gown, pretending he just happened to be.",
    choices: [
      { id: "a", text: "Hug him. Say nothing. He doesn't ask.", type: "relational", set: { fr_martin: "+1" } },
      { id: "b", text: "Go straight up. I have to write it all down before I sleep.", type: "expressive" }
    ],
    next: "CH16.HOME.01"
  }
];
