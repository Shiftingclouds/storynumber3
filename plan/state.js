// Calder: the state model (bible §11 "A manageable authored state model", adapted by docs/00-decisions.md).
// Every variable a scene may read or set is declared here. tools/plan-check.js rejects anything undeclared,
// and rejects string values outside `values`.
// Groups: story, skills, gift, knowledge, evidence, relationships, commitments (arcs), rescue, resolution, presentation.
"use strict";

const LEADS = ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben"];
const LEAD_IDS = { adrian: "C01", micah: "C02", ellis: "C03", dominic: "C04", nolan: "C05", ansel: "C06", quentin: "C07", reuben: "C08" };
// Supporting people whose friendship is tracked (hearts in the journal; no romance).
const FRIENDS = ["martin", "will", "gideon", "florian", "malcolm", "chukwudi", "otis", "silas", "felix", "desmond", "peter", "owen", "pavel",
  "ernesto", "leandro", "wesley", "lucien", "rafi", "milo", "benoit", "graham", "victor", "darius", "emmett", "kenji", "nabil", "ilyas",
  "gareth", "russell", "sylvester", "harlan", "lucan", "percival", "severin", "eamon", "hugo", "clive", "isaac", "caspar", "jonah"];

const vars = {};
function def(name, type, dflt, desc, values) { vars[name] = { type, default: dflt, desc, values }; }

// ---------------------------------------------------------------- story
def("name", "string", "Theo", "Player's first name");
def("steam", "bool", true, "Intimate scenes on the page (setting)");
def("date", "string", "2026-08-29", "Story date, ISO; set by *date and never decreases");
def("ch", "number", 1, "Current chapter number");

// ---------------------------------------------------------------- skills (visible; open methods, never essential clues)
def("nerve", "number", 20, "Holding steady under fear");
def("craft", "number", 30, "Hands, rigging, tools, electrics (event crew)");
def("people", "number", 20, "Reading and talking to people");
def("knack", "number", 10, "Control of the gift");

// ---------------------------------------------------------------- the gift
def("strain", "number", 0, "Gift strain this chapter (0–3); 3 costs something (migraine, nosebleed, a lost hour)");
def("reached", "number", 0, "Times he has deliberately reached with the gift");
def("gift_named", "bool", false, "He knows the word 'sensitive' and that others existed (CH10)");
def("trained", "string", "none", "Who taught him control", ["none", "malcolm", "florian", "self", "refused"]);
for (const l of LEADS) def("gift_" + l, "bool", false, "Told " + l + " about the knack");
def("gift_martin", "bool", false, "Told Martin about the knack");
def("gift_mercy", "bool", false, "Mercy House knows he is sensitive");
def("gift_damian", "bool", false, "Damian has learned a sensitive is involved (only through an authored route)");

// ---------------------------------------------------------------- knowledge (what the narrator may say)
def("know_super", "bool", false, "Knows the supernatural exists (CH04)");
def("know_wardens", "bool", false, "Knows about the wardens");
def("know_vampires", "bool", false, "Knows about vampires");
def("know_wolves", "bool", false, "Knows about werewolves");
def("know_spell", "bool", false, "Knows about spell-workers");
def("know_marches", "bool", false, "Knows about the Marches");
def("know_micah_wolf", "bool", false, "Knows Micah is a werewolf");
def("know_dominic_vamp", "bool", false, "Knows Dominic is a vampire");
def("know_damian", "bool", false, "Knows the physician's identity");
def("know_deadline", "bool", false, "Knows about the 14 March attempt");
def("know_donors", "number", 0, "How many donors he knows by name (0–3)");
def("know_clive_taken", "bool", false, "Knows Clive has been taken");

// ---------------------------------------------------------------- evidence (bible §8.5). eNN = known; eNN_src = how; eNN_c = corroborated
for (let i = 1; i <= 18; i++) {
  const e = "e" + String(i).padStart(2, "0");
  def(e, "bool", false, "Evidence " + e.toUpperCase() + " known");
  def(e + "_src", "string", "", "Source of " + e.toUpperCase());
  def(e + "_c", "bool", false, e.toUpperCase() + " corroborated by a second route");
}
def("told_gareth", "bool", false, "Evidence shared with Gareth");
def("told_mercy", "bool", false, "Evidence shared with Mercy House");
def("told_regent", "bool", false, "Evidence shared with the Regent");
def("told_eastbank", "bool", false, "Evidence shared with the Eastbank association");

// ---------------------------------------------------------------- relationships
// st_: 0 unmet, 1 met, 2 friendly, 3 friend, 4 close, 5 recognised (both know something is there), 6 together
// hurt_: 0 none, 1 strained, 2 broken. closed_: route closed by either man, honoured forever.
// out_: he has told this man he's gay. bNN flags are route beats (see plan/routes.js).
for (const l of LEADS) {
  def("st_" + l, "number", 0, l + ": relationship stage 0–6");
  def("hurt_" + l, "number", 0, l + ": unresolved hurt 0–2");
  def("closed_" + l, "bool", false, l + ": romance closed (friendship remains)");
  def("out_" + l, "bool", false, "Told " + l + " he's gay");
}
for (const f of FRIENDS) def("fr_" + f, "number", 0, f + ": friendship 0–3");

// ---------------------------------------------------------------- commitments and branches
def("look_done", "bool", false, "Portrait chosen");
def("ch01_saw", "string", "", "How he met the murder", ["cover", "approach", "help"]);
def("hurt_mc", "number", 0, "His own injuries (0–2)");
def("echo_lane", "bool", false, "Read the echo in the rear lane (lilies, a calm voice counting, a clean van)");
def("letters_mum", "number", 0, "Letters written back to Mum");
def("eamon_heard", "bool", false, "Has heard Eamon Kerr's name");
def("clinic_lead", "bool", false, "Knows Quentin was told he was treated at a 'private clinic' that sent a car");
def("button_shown", "bool", false, "Showed the wardens the brass cuff button");
def("misread_gideon", "bool", false, "The knack misread Gideon's fear as guilt");
def("suspect_gideon", "bool", false, "I suspect Gideon (wrongly)");
def("theory", "string", "", "My first theory at the diner", ["outside", "unknown"]);
def("course_lead", "bool", false, "Quentin's token came from an August first-aid course at Southmere (P46)");
def("error_book", "bool", false, "Seen the Okafors' honest error book");
def("managed_dominic", "bool", false, "I have been managing Dominic's vampirism for him (arranging, protecting, deciding)");
def("gareth_wary", "bool", false, "Gareth has noted that I'm hiding something");
def("harlan_aware", "bool", false, "Harlan knows someone is asking about Eamon");
def("good_coat", "bool", false, "Owen's 'quiet man in a good coat' on the Northwood bus");
def("micah_deflects", "bool", false, "Micah laughed off 'rough night'");
def("same_voice", "bool", false, "Hunch: the calm voice in Eamon's echo is the voice from the lane");
def("lease_mark", "bool", false, "Photographed the lease mark on Eamon's token of passage");
def("suspect_donor", "bool", false, "Suspects Eamon is what's holding Quentin up");
def("savings_given", "bool", false, "Gave Martin my savings (S01)");
def("shop_hours", "bool", false, "Took on more shop hours (S01)");
def("hugo_met", "bool", false, "Met Hugo before he disappeared");
def("nolan_applied", "bool", false, "Pushed Nolan to send the course application");
def("tomas_injury", "bool", false, "Noticed Tomas's hidden shoulder injury");
def("silas_trusts", "bool", false, "Silas chose to trust me");
def("silas_protected", "bool", false, "Asked Reuben to watch the bakery");
def("repeated", "bool", false, "Knows it's a method, not a one-off");
def("buddy_plan", "bool", false, "Nobody goes to a follow-up alone");
def("hugo_missing", "bool", false, "Knows Hugo is missing");
def("same_voice2", "bool", false, "Hunch: the same calm voice in Hugo's echo");
def("gareth_hugo", "bool", false, "Gareth is looking for Hugo");
def("mimic_words", "bool", false, "Knows the exact words the mimic used");
def("old_map", "bool", false, "Pavel's old tunnel map");
def("mimic_clue", "bool", false, "Worked out the announcement clue (platform four, the Greyhill service)");
def("adrian_plan", "bool", false, "Gave the clue to Adrian as a search pattern");
def("tunnels_role", "string", "", "My part in the culvert rescue", ["went", "lure", "grate"]);
def("tunnels_done", "bool", false, "Solved the Northline predator");
def("shade_lonely", "bool", false, "Read the screen's shade as lonely");
def("screen_panel", "bool", false, "Found the seventh panel in the Whitcomb stores");
def("screen_way", "string", "", "How I held the shade", ["talk", "lamps", "stand"]);
def("screen_done", "bool", false, "Solved the inherited screen");
def("program_hint", "bool", false, "Heard there was a rescue program, seven years ago");
def("adrian_asks_emmett", "bool", false, "Told Adrian it was Emmett's call");
def("carrow_file", "bool", false, "Knows Ruth Carrow's file is in the archive");
def("orrell_suspected", "bool", false, "Knows Orrell divided the records");
def("damian_named", "bool", false, "Has heard the name Damian Holt (not yet a suspect)");
def("damian_program", "bool", false, "Knows Damian worked on the closed program");
def("crossings_map", "bool", false, "Percival explained who uses which crossing");
def("ex_as", "string", "", "How I went to the exhibition", ["crew", "guest", "performer"]);
def("armand_met", "bool", false, "Met Armand Sorrell");
def("august_watched", "bool", false, "Watched August steering Armand");
def("octavian_known", "bool", false, "Knows about Octavian (died ten years ago this March, Quarry Lake)");
def("armand_hope", "bool", false, "Knows Armand hopes for something impossible");
def("armand_hint", "bool", false, "Armand hinted at 'questions the world is too frightened to ask'");
def("armand_trust", "bool", false, "Armand thinks of me kindly");
def("e11_copy", "bool", false, "Have a copy of Felix's gala clip");
def("warned_felix", "bool", false, "Warned Felix to stop checking");
def("frame_seen", "bool", false, "Seen the old program's linking frame in case nine");
def("rell_lead", "bool", false, "Knows Rell & Company supplied the frame");
def("frame_echo", "bool", false, "Echo from the frame: Ruth Carrow's warning");
def("ellis_fights", "bool", false, "Urged Ellis to fight Basil for the credit");
def("nolan_knows", "bool", false, "Nolan knows about the supernatural");
def("wesley_saved", "string", "", "Who talked Wesley down at the quarry", ["mc", "micah"]);
def("ally_regent_hint", "bool", false, "Backed Lucien against Abel in front of the residents");
def("crew_paid", "bool", false, "Made Desmond pay the fundraiser crew");
def("haunting_done", "bool", false, "Laid the Lantern Rooms tuner to rest");
def("voice_heard", "bool", false, "Heard the physician's voice through the Winton Court door");
def("winton_log", "bool", false, "Knows about the Winton Court follow-up flat");
def("russell_logging", "bool", false, "Russell is logging the physician's visits");
def("martin_told_trip", "bool", false, "Told Martin a small true thing about the trip");
def("harlan_nervous", "bool", false, "Saw Harlan was more nervous than he should be");
def("oswin_met", "bool", false, "Met Oswin Deller");
def("registry_access", "bool", false, "Severin granted access to the crossing registry");
def("oswin_wary", "bool", false, "Oswin remembers my face");
def("eamon_bag", "bool", false, "Found Eamon's bag at the Travelers' House");
def("eamon_letter_kept", "bool", false, "Kept Eamon's unposted letter safe for him");
def("eamon_hope", "bool", false, "Felt Eamon as a person through his bag");
def("still_lead", "string", "", "The lead to Stillwater", ["registry", "clerk", "threads"]);
def("ansel_spoke", "bool", false, "Ansel spoke against his father at the hearing");
def("threads_three", "bool", false, "Saw three threads in the Glass Road's reflections");
def("saw_crew", "bool", false, "Saw the faces of the Stillwater crew");
def("boat_photo", "bool", false, "Photographed the Stillwater boat");
def("shift_change", "bool", false, "Knows Stillwater's shift change");
def("witness_safe", "bool", false, "Promised the Stillwater witness anonymity");
def("inside_man", "bool", false, "We have a man inside at Stillwater for the night");
def("eamon_saw", "bool", false, "Eamon knows someone came");
def("still_layout", "bool", false, "Memorised warehouse seven");
def("felix_returned", "bool", false, "Knows Felix was killed and returned");
def("pump_film", "bool", false, "Have Felix's night footage of Pump Nine's exterior");
def("felix_shared", "bool", false, "Felix chose to share his footage");
def("felix_told", "bool", false, "Told Felix about Quentin and Silas");
def("patients_matched", "bool", false, "Matched each patient to his donor");
def("patients_asked", "bool", false, "Asked each patient privately what he wants");
def("simeon_pressed", "bool", false, "Pressed Simeon for the arrangement's history");
def("course_confirms", "bool", false, "The Southmere course register names Dr D. Holt");
def("wk16", "string", "", "Whom I spent the rest of the week with (CH16)", ["adrian", "micah", "dominic", "nolan", "quentin", "ellis", "reuben", "home"]);
def("adrian_later", "bool", false, "Told Adrian to ask again when it's over");
def("friends_ch17", "bool", false, "Kept the CH17 ask a friendship");
def("out_family", "bool", false, "Told Martin and Will I'm gay");
def("family_case", "bool", false, "Told Martin and Will about the case");
def("slow_ch17", "bool", false, "Chose to go slowly after recognising something in CH17");
def("coalition_seat", "string", "", "Where the coalition meets", ["mercy", "workroom"]);
def("options_known", "bool", false, "The four ways to end it have been laid out");
def("mat_frame", "bool", false, "Have the old program's linking frame");
def("mat_stones", "bool", false, "Have anchor stones from the Marches");
def("mat_thread", "bool", false, "Have charged ward thread");
def("owe_august", "bool", false, "Bought from August Rell");
def("ansel_defied", "bool", false, "Ansel carried the stones against his father's wishes");
def("mc_volunteered", "bool", false, "I was the monitored volunteer for the interim bridge");
def("orrell_pressed", "bool", false, "Made Orrell account for the divided records at the review");
def("orrell_deal", "bool", false, "Traded silence for Orrell's cooperation");
def("q_free_first", "bool", false, "Quentin wants Eamon freed first, whatever it costs him");
def("harlan_hostile", "bool", false, "Harlan helps only under threat");
def("knack_monitor", "bool", false, "I can monitor a moving link with the knack");
def("summoned", "bool", false, "The patients were summoned to a follow-up on 13 March at 23:00");
def("armand_broken", "bool", false, "Armand's hope broke when he saw the 48-hour limit");
def("armand_hard", "bool", false, "Armand left still hoping");
def("plan_chosen", "string", "", "The plan we ran", ["full", "interim", "pair", "extract"]);
def("last_with", "string", "", "The hour before", ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben", "martin", "alone"]);
def("cap", "number", 0, "Scratch: capacity steps lost to disruptions");
def("cap_full", "bool", false, "Scratch");
def("cap_interim", "bool", false, "Scratch");
def("cap_pair", "bool", false, "Scratch");
def("monitor", "string", "", "Who watched the links at Pump Nine", ["knack", "gauge"]);
def("reuben_faced", "bool", false, "Reuben faced Damian himself");
def("mum_told", "bool", false, "Told Mum something true in April");
def("out_mum", "bool", false, "Told Mum I'm gay");
def("nolan_leaving", "bool", false, "Nolan is taking the course in another city from September");
def("ellis_leaving", "bool", false, "Ellis is taking the placement from September");
def("adrian_transfer", "bool", false, "Adrian has taken a posting outside Calder");
def("micah_away", "bool", false, "Micah is taking a year's placement up north");
def("dominic_away", "bool", false, "Dominic is taking a six-month night-arts residency elsewhere");
def("quentin_away", "bool", false, "Quentin is going to the emergency-service academy");
def("reuben_away", "bool", false, "Reuben is building a response service in another city for a year");
def("cuff_button", "bool", false, "The brass cuff button torn from the killer's sleeve (old Mercy House issue; a red herring with an innocent explanation)");
def("enemy_aware", "number", 0, "How much the ring knows about him (0 none, 1 a witness exists, 2 they know his name, 3 they are watching)");
def("ch02_report", "string", "", "The account I give", ["police", "venue", "nolan", "none"]);
def("ch03_way", "string", "", "How I approached Quentin", ["alone", "together", "wait"]);
def("ch04_first", "string", "", "Which circle first", ["mercy", "regent"]);
def("ch05_route", "string", "", "First test", ["hospital", "restore"]);
def("ch06_way", "string", "", "Eamon's route", ["lawful", "witness"]);
def("ch07_evening", "string", "", "The promised evening", ["nolan", "serrano", "uni"]);
def("ch07_late", "bool", false, "Made it to Nolan's party late");
def("ch08_way", "string", "", "Silas", ["bakery", "hospital"]);
def("ch09_case", "string", "", "The adventure", ["tunnels", "screen"]);
def("ch10_way", "string", "", "The closed program", ["records", "orchard"]);
def("orrell_known", "string", "", "What I did about Orrell's concealment", ["confront", "hold", "florian", "none"]);
def("ch11_talk", "string", "", "The conversation I chose", ["armand", "felix", "basil"]);
def("ch12_branch", "string", "", "Before we leave", ["gathering", "regent", "home"]);
def("companion", "string", "none", "Who crosses into the Marches with Ansel and me", ["none", "adrian", "micah", "nolan", "reuben"]);
def("ch13_lodging", "string", "", "Bracken Court", ["official", "travelers"]);
def("ch14_way", "string", "", "Passage denied", ["court", "estate", "boundary"]);
def("ch15_way", "string", "", "Stillwater", ["observe", "witness"]);
def("ch17_ask", "string", "", "Whom I asked, in deep winter", ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben", "family"]);
def("ch19_answer", "string", "", "The offer", ["refuse", "negotiate", "monitor"]);
def("role", "string", "", "My place on the night", ["patient", "donor", "coord"]);

// supporting arcs S01–S16: introduced, foreground, background, then a named resolution
const ARCS = ["s01", "s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s10", "s11", "s12", "s13", "s14", "s15", "s16"];
for (const a of ARCS) def(a, "string", "", "Supporting arc " + a.toUpperCase() + " state (see plan/arcs.js)");

// ---------------------------------------------------------------- rescue readiness (bible §11)
def("plan_full", "bool", false, "Distributed bridge demonstrated");
def("plan_interim", "bool", false, "Interim bridge validated");
def("plan_pair", "bool", false, "Single-pair emergency bridge demonstrated");
def("materials", "number", 0, "Required materials secured (0–3: anchor stones, ward thread, the old program's frame)");
def("volunteers", "number", 0, "Informed adult volunteers committed (0–9)");
def("consent_q", "bool", false, "Quentin's informed choice recorded");
def("consent_s", "bool", false, "Silas's informed choice recorded");
def("consent_f", "bool", false, "Felix's informed choice recorded");
def("ally_mercy", "bool", false, "Mercy House cooperating");
def("ally_eastbank", "bool", false, "Eastbank association cooperating");
def("ally_regent", "bool", false, "Regent residents' trust cooperating");
def("ally_circle", "bool", false, "Restoration and ward-workers' circle cooperating");
def("ally_keepers", "bool", false, "Crossing keepers cooperating (Harlan)");
def("ally_court", "bool", false, "Bracken Court authorities cooperating");
def("acc_pump", "bool", false, "Access to Pump Nine");
def("acc_still", "bool", false, "Access to Stillwater");
def("acc_cross", "bool", false, "A crossing we control on the night");
def("harlan_confessed", "bool", false, "Harlan exposed his own conduct to help");

// ---------------------------------------------------------------- resolution (bible §9.4)
def("ending", "string", "", "Plot ending", ["A", "B", "C", "D", "E", "F_Q", "F_S", "F_F"]);
def("alive_quentin", "bool", true, "Quentin alive");
def("alive_silas", "bool", true, "Silas alive");
def("alive_felix", "bool", true, "Felix alive");
def("donors_freed", "bool", false, "Eamon, Hugo and Clive freed");
def("damian_fate", "string", "", "Damian", ["arrested", "custody", "fled", "dead"]);
def("armand_fate", "string", "", "Armand", ["exposed", "settled", "withdrawn"]);
def("august_fate", "string", "", "August", ["charged", "ruined", "bargained"]);
def("orrell_fate", "string", "", "Orrell", ["resigned", "reformed", "kept"]);
def("disclosure", "string", "", "How much the wider city is told", ["none", "communities", "public"]);
def("final_rel", "string", "", "The relationship the story ends with", ["adrian", "micah", "ellis", "dominic", "nolan", "ansel", "quentin", "reuben", "single"]);
def("final_shape", "string", "", "Its shape", ["together", "distance", "parted", "friends", "grief"]);
def("mc_future", "string", "", "What I do next", ["crew", "response", "warden", "study", "shop", "undecided"]);

module.exports = { vars, LEADS, LEAD_IDS, FRIENDS, ARCS };
