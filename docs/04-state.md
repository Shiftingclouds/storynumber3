# Calder — the state model

_Generated from `plan/` by `tools/plan-docs.js`. Author-facing: contains spoilers._

Every variable a scene may read or set. Anything undeclared is rejected by the checker.

| Variable | Type | Starts | Meaning | Values |
|---|---|---|---|---|
| `name` | string | "Theo" | Player's first name |  |
| `steam` | bool | true | Intimate scenes on the page (setting) |  |
| `date` | string | "2026-08-29" | Story date, ISO; set by *date and never decreases |  |
| `ch` | number | 1 | Current chapter number |  |
| `nerve` | number | 20 | Holding steady under fear |  |
| `craft` | number | 30 | Hands, rigging, tools, electrics (event crew) |  |
| `people` | number | 20 | Reading and talking to people |  |
| `knack` | number | 10 | Control of the gift |  |
| `strain` | number | 0 | Gift strain this chapter (0–3); 3 costs something (migraine, nosebleed, a lost hour) |  |
| `reached` | number | 0 | Times he has deliberately reached with the gift |  |
| `gift_named` | bool | false | He knows the word 'sensitive' and that others existed (CH10) |  |
| `trained` | string | "none" | Who taught him control | none, malcolm, florian, self, refused |
| `gift_adrian` | bool | false | Told adrian about the knack |  |
| `gift_micah` | bool | false | Told micah about the knack |  |
| `gift_ellis` | bool | false | Told ellis about the knack |  |
| `gift_dominic` | bool | false | Told dominic about the knack |  |
| `gift_nolan` | bool | false | Told nolan about the knack |  |
| `gift_ansel` | bool | false | Told ansel about the knack |  |
| `gift_quentin` | bool | false | Told quentin about the knack |  |
| `gift_reuben` | bool | false | Told reuben about the knack |  |
| `gift_martin` | bool | false | Told Martin about the knack |  |
| `gift_mercy` | bool | false | Mercy House knows he is sensitive |  |
| `gift_damian` | bool | false | Damian has learned a sensitive is involved (only through an authored route) |  |
| `know_super` | bool | false | Knows the supernatural exists (CH04) |  |
| `know_wardens` | bool | false | Knows about the wardens |  |
| `know_vampires` | bool | false | Knows about vampires |  |
| `know_wolves` | bool | false | Knows about werewolves |  |
| `know_spell` | bool | false | Knows about spell-workers |  |
| `know_marches` | bool | false | Knows about the Marches |  |
| `know_micah_wolf` | bool | false | Knows Micah is a werewolf |  |
| `know_dominic_vamp` | bool | false | Knows Dominic is a vampire |  |
| `know_damian` | bool | false | Knows the physician's identity |  |
| `know_deadline` | bool | false | Knows about the 14 March attempt |  |
| `know_donors` | number | 0 | How many donors he knows by name (0–3) |  |
| `know_clive_taken` | bool | false | Knows Clive has been taken |  |
| `e01` | bool | false | Evidence E01 known |  |
| `e01_src` | string | "" | Source of E01 |  |
| `e01_c` | bool | false | E01 corroborated by a second route |  |
| `e02` | bool | false | Evidence E02 known |  |
| `e02_src` | string | "" | Source of E02 |  |
| `e02_c` | bool | false | E02 corroborated by a second route |  |
| `e03` | bool | false | Evidence E03 known |  |
| `e03_src` | string | "" | Source of E03 |  |
| `e03_c` | bool | false | E03 corroborated by a second route |  |
| `e04` | bool | false | Evidence E04 known |  |
| `e04_src` | string | "" | Source of E04 |  |
| `e04_c` | bool | false | E04 corroborated by a second route |  |
| `e05` | bool | false | Evidence E05 known |  |
| `e05_src` | string | "" | Source of E05 |  |
| `e05_c` | bool | false | E05 corroborated by a second route |  |
| `e06` | bool | false | Evidence E06 known |  |
| `e06_src` | string | "" | Source of E06 |  |
| `e06_c` | bool | false | E06 corroborated by a second route |  |
| `e07` | bool | false | Evidence E07 known |  |
| `e07_src` | string | "" | Source of E07 |  |
| `e07_c` | bool | false | E07 corroborated by a second route |  |
| `e08` | bool | false | Evidence E08 known |  |
| `e08_src` | string | "" | Source of E08 |  |
| `e08_c` | bool | false | E08 corroborated by a second route |  |
| `e09` | bool | false | Evidence E09 known |  |
| `e09_src` | string | "" | Source of E09 |  |
| `e09_c` | bool | false | E09 corroborated by a second route |  |
| `e10` | bool | false | Evidence E10 known |  |
| `e10_src` | string | "" | Source of E10 |  |
| `e10_c` | bool | false | E10 corroborated by a second route |  |
| `e11` | bool | false | Evidence E11 known |  |
| `e11_src` | string | "" | Source of E11 |  |
| `e11_c` | bool | false | E11 corroborated by a second route |  |
| `e12` | bool | false | Evidence E12 known |  |
| `e12_src` | string | "" | Source of E12 |  |
| `e12_c` | bool | false | E12 corroborated by a second route |  |
| `e13` | bool | false | Evidence E13 known |  |
| `e13_src` | string | "" | Source of E13 |  |
| `e13_c` | bool | false | E13 corroborated by a second route |  |
| `e14` | bool | false | Evidence E14 known |  |
| `e14_src` | string | "" | Source of E14 |  |
| `e14_c` | bool | false | E14 corroborated by a second route |  |
| `e15` | bool | false | Evidence E15 known |  |
| `e15_src` | string | "" | Source of E15 |  |
| `e15_c` | bool | false | E15 corroborated by a second route |  |
| `e16` | bool | false | Evidence E16 known |  |
| `e16_src` | string | "" | Source of E16 |  |
| `e16_c` | bool | false | E16 corroborated by a second route |  |
| `e17` | bool | false | Evidence E17 known |  |
| `e17_src` | string | "" | Source of E17 |  |
| `e17_c` | bool | false | E17 corroborated by a second route |  |
| `e18` | bool | false | Evidence E18 known |  |
| `e18_src` | string | "" | Source of E18 |  |
| `e18_c` | bool | false | E18 corroborated by a second route |  |
| `told_gareth` | bool | false | Evidence shared with Gareth |  |
| `told_mercy` | bool | false | Evidence shared with Mercy House |  |
| `told_regent` | bool | false | Evidence shared with the Regent |  |
| `told_eastbank` | bool | false | Evidence shared with the Eastbank association |  |
| `st_adrian` | number | 0 | adrian: relationship stage 0–6 |  |
| `hurt_adrian` | number | 0 | adrian: unresolved hurt 0–2 |  |
| `closed_adrian` | bool | false | adrian: romance closed (friendship remains) |  |
| `out_adrian` | bool | false | Told adrian he's gay |  |
| `st_micah` | number | 0 | micah: relationship stage 0–6 |  |
| `hurt_micah` | number | 0 | micah: unresolved hurt 0–2 |  |
| `closed_micah` | bool | false | micah: romance closed (friendship remains) |  |
| `out_micah` | bool | false | Told micah he's gay |  |
| `st_ellis` | number | 0 | ellis: relationship stage 0–6 |  |
| `hurt_ellis` | number | 0 | ellis: unresolved hurt 0–2 |  |
| `closed_ellis` | bool | false | ellis: romance closed (friendship remains) |  |
| `out_ellis` | bool | false | Told ellis he's gay |  |
| `st_dominic` | number | 0 | dominic: relationship stage 0–6 |  |
| `hurt_dominic` | number | 0 | dominic: unresolved hurt 0–2 |  |
| `closed_dominic` | bool | false | dominic: romance closed (friendship remains) |  |
| `out_dominic` | bool | false | Told dominic he's gay |  |
| `st_nolan` | number | 0 | nolan: relationship stage 0–6 |  |
| `hurt_nolan` | number | 0 | nolan: unresolved hurt 0–2 |  |
| `closed_nolan` | bool | false | nolan: romance closed (friendship remains) |  |
| `out_nolan` | bool | false | Told nolan he's gay |  |
| `st_ansel` | number | 0 | ansel: relationship stage 0–6 |  |
| `hurt_ansel` | number | 0 | ansel: unresolved hurt 0–2 |  |
| `closed_ansel` | bool | false | ansel: romance closed (friendship remains) |  |
| `out_ansel` | bool | false | Told ansel he's gay |  |
| `st_quentin` | number | 0 | quentin: relationship stage 0–6 |  |
| `hurt_quentin` | number | 0 | quentin: unresolved hurt 0–2 |  |
| `closed_quentin` | bool | false | quentin: romance closed (friendship remains) |  |
| `out_quentin` | bool | false | Told quentin he's gay |  |
| `st_reuben` | number | 0 | reuben: relationship stage 0–6 |  |
| `hurt_reuben` | number | 0 | reuben: unresolved hurt 0–2 |  |
| `closed_reuben` | bool | false | reuben: romance closed (friendship remains) |  |
| `out_reuben` | bool | false | Told reuben he's gay |  |
| `fr_martin` | number | 0 | martin: friendship 0–3 |  |
| `fr_will` | number | 0 | will: friendship 0–3 |  |
| `fr_gideon` | number | 0 | gideon: friendship 0–3 |  |
| `fr_florian` | number | 0 | florian: friendship 0–3 |  |
| `fr_malcolm` | number | 0 | malcolm: friendship 0–3 |  |
| `fr_chukwudi` | number | 0 | chukwudi: friendship 0–3 |  |
| `fr_otis` | number | 0 | otis: friendship 0–3 |  |
| `fr_silas` | number | 0 | silas: friendship 0–3 |  |
| `fr_felix` | number | 0 | felix: friendship 0–3 |  |
| `fr_desmond` | number | 0 | desmond: friendship 0–3 |  |
| `fr_peter` | number | 0 | peter: friendship 0–3 |  |
| `fr_owen` | number | 0 | owen: friendship 0–3 |  |
| `fr_pavel` | number | 0 | pavel: friendship 0–3 |  |
| `fr_ernesto` | number | 0 | ernesto: friendship 0–3 |  |
| `fr_leandro` | number | 0 | leandro: friendship 0–3 |  |
| `fr_wesley` | number | 0 | wesley: friendship 0–3 |  |
| `fr_lucien` | number | 0 | lucien: friendship 0–3 |  |
| `fr_rafi` | number | 0 | rafi: friendship 0–3 |  |
| `fr_milo` | number | 0 | milo: friendship 0–3 |  |
| `fr_benoit` | number | 0 | benoit: friendship 0–3 |  |
| `fr_graham` | number | 0 | graham: friendship 0–3 |  |
| `fr_victor` | number | 0 | victor: friendship 0–3 |  |
| `fr_darius` | number | 0 | darius: friendship 0–3 |  |
| `fr_emmett` | number | 0 | emmett: friendship 0–3 |  |
| `fr_kenji` | number | 0 | kenji: friendship 0–3 |  |
| `fr_nabil` | number | 0 | nabil: friendship 0–3 |  |
| `fr_ilyas` | number | 0 | ilyas: friendship 0–3 |  |
| `fr_gareth` | number | 0 | gareth: friendship 0–3 |  |
| `fr_russell` | number | 0 | russell: friendship 0–3 |  |
| `fr_sylvester` | number | 0 | sylvester: friendship 0–3 |  |
| `fr_harlan` | number | 0 | harlan: friendship 0–3 |  |
| `fr_lucan` | number | 0 | lucan: friendship 0–3 |  |
| `fr_percival` | number | 0 | percival: friendship 0–3 |  |
| `fr_severin` | number | 0 | severin: friendship 0–3 |  |
| `fr_eamon` | number | 0 | eamon: friendship 0–3 |  |
| `fr_hugo` | number | 0 | hugo: friendship 0–3 |  |
| `fr_clive` | number | 0 | clive: friendship 0–3 |  |
| `fr_isaac` | number | 0 | isaac: friendship 0–3 |  |
| `fr_caspar` | number | 0 | caspar: friendship 0–3 |  |
| `fr_jonah` | number | 0 | jonah: friendship 0–3 |  |
| `look_done` | bool | false | Portrait chosen |  |
| `ch01_saw` | string | "" | How he met the murder | cover, approach, help |
| `hurt_mc` | number | 0 | His own injuries (0–2) |  |
| `echo_lane` | bool | false | Read the echo in the rear lane (lilies, a calm voice counting, a clean van) |  |
| `letters_mum` | number | 0 | Letters written back to Mum |  |
| `eamon_heard` | bool | false | Has heard Eamon Kerr's name |  |
| `clinic_lead` | bool | false | Knows Quentin was told he was treated at a 'private clinic' that sent a car |  |
| `button_shown` | bool | false | Showed the wardens the brass cuff button |  |
| `misread_gideon` | bool | false | The knack misread Gideon's fear as guilt |  |
| `suspect_gideon` | bool | false | I suspect Gideon (wrongly) |  |
| `theory` | string | "" | My first theory at the diner | outside, unknown |
| `course_lead` | bool | false | Quentin's token came from an August first-aid course at Southmere (P46) |  |
| `error_book` | bool | false | Seen the Okafors' honest error book |  |
| `managed_dominic` | bool | false | I have been managing Dominic's vampirism for him (arranging, protecting, deciding) |  |
| `gareth_wary` | bool | false | Gareth has noted that I'm hiding something |  |
| `harlan_aware` | bool | false | Harlan knows someone is asking about Eamon |  |
| `good_coat` | bool | false | Owen's 'quiet man in a good coat' on the Northwood bus |  |
| `micah_deflects` | bool | false | Micah laughed off 'rough night' |  |
| `same_voice` | bool | false | Hunch: the calm voice in Eamon's echo is the voice from the lane |  |
| `lease_mark` | bool | false | Photographed the lease mark on Eamon's token of passage |  |
| `suspect_donor` | bool | false | Suspects Eamon is what's holding Quentin up |  |
| `savings_given` | bool | false | Gave Martin my savings (S01) |  |
| `shop_hours` | bool | false | Took on more shop hours (S01) |  |
| `hugo_met` | bool | false | Met Hugo before he disappeared |  |
| `nolan_applied` | bool | false | Pushed Nolan to send the course application |  |
| `tomas_injury` | bool | false | Noticed Tomas's hidden shoulder injury |  |
| `silas_trusts` | bool | false | Silas chose to trust me |  |
| `silas_protected` | bool | false | Asked Reuben to watch the bakery |  |
| `repeated` | bool | false | Knows it's a method, not a one-off |  |
| `buddy_plan` | bool | false | Nobody goes to a follow-up alone |  |
| `hugo_missing` | bool | false | Knows Hugo is missing |  |
| `same_voice2` | bool | false | Hunch: the same calm voice in Hugo's echo |  |
| `gareth_hugo` | bool | false | Gareth is looking for Hugo |  |
| `mimic_words` | bool | false | Knows the exact words the mimic used |  |
| `old_map` | bool | false | Pavel's old tunnel map |  |
| `mimic_clue` | bool | false | Worked out the announcement clue (platform four, the Greyhill service) |  |
| `adrian_plan` | bool | false | Gave the clue to Adrian as a search pattern |  |
| `tunnels_role` | string | "" | My part in the culvert rescue | went, lure, grate |
| `tunnels_done` | bool | false | Solved the Northline predator |  |
| `shade_lonely` | bool | false | Read the screen's shade as lonely |  |
| `screen_panel` | bool | false | Found the seventh panel in the Whitcomb stores |  |
| `screen_way` | string | "" | How I held the shade | talk, lamps, stand |
| `screen_done` | bool | false | Solved the inherited screen |  |
| `program_hint` | bool | false | Heard there was a rescue program, seven years ago |  |
| `adrian_asks_emmett` | bool | false | Told Adrian it was Emmett's call |  |
| `carrow_file` | bool | false | Knows Ruth Carrow's file is in the archive |  |
| `orrell_suspected` | bool | false | Knows Orrell divided the records |  |
| `damian_named` | bool | false | Has heard the name Damian Holt (not yet a suspect) |  |
| `damian_program` | bool | false | Knows Damian worked on the closed program |  |
| `crossings_map` | bool | false | Percival explained who uses which crossing |  |
| `ex_as` | string | "" | How I went to the exhibition | crew, guest, performer |
| `armand_met` | bool | false | Met Armand Sorrell |  |
| `august_watched` | bool | false | Watched August steering Armand |  |
| `octavian_known` | bool | false | Knows about Octavian (died ten years ago this March, Quarry Lake) |  |
| `armand_hope` | bool | false | Knows Armand hopes for something impossible |  |
| `armand_hint` | bool | false | Armand hinted at 'questions the world is too frightened to ask' |  |
| `armand_trust` | bool | false | Armand thinks of me kindly |  |
| `e11_copy` | bool | false | Have a copy of Felix's gala clip |  |
| `warned_felix` | bool | false | Warned Felix to stop checking |  |
| `frame_seen` | bool | false | Seen the old program's linking frame in case nine |  |
| `rell_lead` | bool | false | Knows Rell & Company supplied the frame |  |
| `frame_echo` | bool | false | Echo from the frame: Ruth Carrow's warning |  |
| `ellis_fights` | bool | false | Urged Ellis to fight Basil for the credit |  |
| `nolan_knows` | bool | false | Nolan knows about the supernatural |  |
| `wesley_saved` | string | "" | Who talked Wesley down at the quarry | mc, micah |
| `ally_regent_hint` | bool | false | Backed Lucien against Abel in front of the residents |  |
| `crew_paid` | bool | false | Made Desmond pay the fundraiser crew |  |
| `haunting_done` | bool | false | Laid the Lantern Rooms tuner to rest |  |
| `voice_heard` | bool | false | Heard the physician's voice through the Winton Court door |  |
| `winton_log` | bool | false | Knows about the Winton Court follow-up flat |  |
| `russell_logging` | bool | false | Russell is logging the physician's visits |  |
| `martin_told_trip` | bool | false | Told Martin a small true thing about the trip |  |
| `harlan_nervous` | bool | false | Saw Harlan was more nervous than he should be |  |
| `oswin_met` | bool | false | Met Oswin Deller |  |
| `registry_access` | bool | false | Severin granted access to the crossing registry |  |
| `oswin_wary` | bool | false | Oswin remembers my face |  |
| `eamon_bag` | bool | false | Found Eamon's bag at the Travelers' House |  |
| `eamon_letter_kept` | bool | false | Kept Eamon's unposted letter safe for him |  |
| `eamon_hope` | bool | false | Felt Eamon as a person through his bag |  |
| `still_lead` | string | "" | The lead to Stillwater | registry, clerk, threads |
| `ansel_spoke` | bool | false | Ansel spoke against his father at the hearing |  |
| `threads_three` | bool | false | Saw three threads in the Glass Road's reflections |  |
| `saw_crew` | bool | false | Saw the faces of the Stillwater crew |  |
| `boat_photo` | bool | false | Photographed the Stillwater boat |  |
| `shift_change` | bool | false | Knows Stillwater's shift change |  |
| `witness_safe` | bool | false | Promised the Stillwater witness anonymity |  |
| `inside_man` | bool | false | We have a man inside at Stillwater for the night |  |
| `eamon_saw` | bool | false | Eamon knows someone came |  |
| `still_layout` | bool | false | Memorised warehouse seven |  |
| `felix_returned` | bool | false | Knows Felix was killed and returned |  |
| `pump_film` | bool | false | Have Felix's night footage of Pump Nine's exterior |  |
| `felix_shared` | bool | false | Felix chose to share his footage |  |
| `felix_told` | bool | false | Told Felix about Quentin and Silas |  |
| `patients_matched` | bool | false | Matched each patient to his donor |  |
| `patients_asked` | bool | false | Asked each patient privately what he wants |  |
| `simeon_pressed` | bool | false | Pressed Simeon for the arrangement's history |  |
| `course_confirms` | bool | false | The Southmere course register names Dr D. Holt |  |
| `wk16` | string | "" | Whom I spent the rest of the week with (CH16) | adrian, micah, dominic, nolan, quentin, ellis, reuben, home |
| `adrian_later` | bool | false | Told Adrian to ask again when it's over |  |
| `friends_ch17` | bool | false | Kept the CH17 ask a friendship |  |
| `out_family` | bool | false | Told Martin and Will I'm gay |  |
| `family_case` | bool | false | Told Martin and Will about the case |  |
| `slow_ch17` | bool | false | Chose to go slowly after recognising something in CH17 |  |
| `coalition_seat` | string | "" | Where the coalition meets | mercy, workroom |
| `options_known` | bool | false | The four ways to end it have been laid out |  |
| `mat_frame` | bool | false | Have the old program's linking frame |  |
| `mat_stones` | bool | false | Have anchor stones from the Marches |  |
| `mat_thread` | bool | false | Have charged ward thread |  |
| `owe_august` | bool | false | Bought from August Rell |  |
| `ansel_defied` | bool | false | Ansel carried the stones against his father's wishes |  |
| `mc_volunteered` | bool | false | I was the monitored volunteer for the interim bridge |  |
| `orrell_pressed` | bool | false | Made Orrell account for the divided records at the review |  |
| `orrell_deal` | bool | false | Traded silence for Orrell's cooperation |  |
| `q_free_first` | bool | false | Quentin wants Eamon freed first, whatever it costs him |  |
| `harlan_hostile` | bool | false | Harlan helps only under threat |  |
| `knack_monitor` | bool | false | I can monitor a moving link with the knack |  |
| `summoned` | bool | false | The patients were summoned to a follow-up on 13 March at 23:00 |  |
| `armand_broken` | bool | false | Armand's hope broke when he saw the 48-hour limit |  |
| `armand_hard` | bool | false | Armand left still hoping |  |
| `plan_chosen` | string | "" | The plan we ran | full, interim, pair, extract |
| `last_with` | string | "" | The hour before | adrian, micah, ellis, dominic, nolan, ansel, quentin, reuben, martin, alone |
| `cap` | number | 0 | Scratch: capacity steps lost to disruptions |  |
| `cap_full` | bool | false | Scratch |  |
| `cap_interim` | bool | false | Scratch |  |
| `cap_pair` | bool | false | Scratch |  |
| `monitor` | string | "" | Who watched the links at Pump Nine | knack, gauge |
| `reuben_faced` | bool | false | Reuben faced Damian himself |  |
| `mum_told` | bool | false | Told Mum something true in April |  |
| `out_mum` | bool | false | Told Mum I'm gay |  |
| `nolan_leaving` | bool | false | Nolan is taking the course in another city from September |  |
| `ellis_leaving` | bool | false | Ellis is taking the placement from September |  |
| `adrian_transfer` | bool | false | Adrian has taken a posting outside Calder |  |
| `micah_away` | bool | false | Micah is taking a year's placement up north |  |
| `dominic_away` | bool | false | Dominic is taking a six-month night-arts residency elsewhere |  |
| `quentin_away` | bool | false | Quentin is going to the emergency-service academy |  |
| `reuben_away` | bool | false | Reuben is building a response service in another city for a year |  |
| `cuff_button` | bool | false | The brass cuff button torn from the killer's sleeve (old Mercy House issue; a red herring with an innocent explanation) |  |
| `enemy_aware` | number | 0 | How much the ring knows about him (0 none, 1 a witness exists, 2 they know his name, 3 they are watching) |  |
| `ch02_report` | string | "" | The account I give | police, venue, nolan, none |
| `ch03_way` | string | "" | How I approached Quentin | alone, together, wait |
| `ch04_first` | string | "" | Which circle first | mercy, regent |
| `ch05_route` | string | "" | First test | hospital, restore |
| `ch06_way` | string | "" | Eamon's route | lawful, witness |
| `ch07_evening` | string | "" | The promised evening | nolan, serrano, uni |
| `ch07_late` | bool | false | Made it to Nolan's party late |  |
| `ch08_way` | string | "" | Silas | bakery, hospital |
| `ch09_case` | string | "" | The adventure | tunnels, screen |
| `ch10_way` | string | "" | The closed program | records, orchard |
| `orrell_known` | string | "" | What I did about Orrell's concealment | confront, hold, florian, none |
| `ch11_talk` | string | "" | The conversation I chose | armand, felix, basil |
| `ch12_branch` | string | "" | Before we leave | gathering, regent, home |
| `companion` | string | "none" | Who crosses into the Marches with Ansel and me | none, adrian, micah, nolan, reuben |
| `ch13_lodging` | string | "" | Bracken Court | official, travelers |
| `ch14_way` | string | "" | Passage denied | court, estate, boundary |
| `ch15_way` | string | "" | Stillwater | observe, witness |
| `ch17_ask` | string | "" | Whom I asked, in deep winter | adrian, micah, ellis, dominic, nolan, ansel, quentin, reuben, family |
| `ch19_answer` | string | "" | The offer | refuse, negotiate, monitor |
| `role` | string | "" | My place on the night | patient, donor, coord |
| `s01` | string | "" | Supporting arc S01 state (see plan/arcs.js) |  |
| `s02` | string | "" | Supporting arc S02 state (see plan/arcs.js) |  |
| `s03` | string | "" | Supporting arc S03 state (see plan/arcs.js) |  |
| `s04` | string | "" | Supporting arc S04 state (see plan/arcs.js) |  |
| `s05` | string | "" | Supporting arc S05 state (see plan/arcs.js) |  |
| `s06` | string | "" | Supporting arc S06 state (see plan/arcs.js) |  |
| `s07` | string | "" | Supporting arc S07 state (see plan/arcs.js) |  |
| `s08` | string | "" | Supporting arc S08 state (see plan/arcs.js) |  |
| `s09` | string | "" | Supporting arc S09 state (see plan/arcs.js) |  |
| `s10` | string | "" | Supporting arc S10 state (see plan/arcs.js) |  |
| `s11` | string | "" | Supporting arc S11 state (see plan/arcs.js) |  |
| `s12` | string | "" | Supporting arc S12 state (see plan/arcs.js) |  |
| `s13` | string | "" | Supporting arc S13 state (see plan/arcs.js) |  |
| `s14` | string | "" | Supporting arc S14 state (see plan/arcs.js) |  |
| `s15` | string | "" | Supporting arc S15 state (see plan/arcs.js) |  |
| `s16` | string | "" | Supporting arc S16 state (see plan/arcs.js) |  |
| `plan_full` | bool | false | Distributed bridge demonstrated |  |
| `plan_interim` | bool | false | Interim bridge validated |  |
| `plan_pair` | bool | false | Single-pair emergency bridge demonstrated |  |
| `materials` | number | 0 | Required materials secured (0–3: anchor stones, ward thread, the old program's frame) |  |
| `volunteers` | number | 0 | Informed adult volunteers committed (0–9) |  |
| `conseq_n` | number | 0 | Epilogue: supporting consequences shown so far (CH24) |  |
| `vol_mercy` | bool | false | Wardens from Mercy House volunteered (Emmett and a trainee) |  |
| `vol_home` | bool | false | Latch Lane volunteered (Martin and Owen; Peter runs the rota) |  |
| `vol_marches` | bool | false | A miller's son from the Verre household volunteered |  |
| `vol_otis` | bool | false | Otis volunteered, for Silas |  |
| `vol_grace` | bool | false | Grace, the Regent's day porter, volunteered |  |
| `consent_q` | bool | false | Quentin's informed choice recorded |  |
| `consent_s` | bool | false | Silas's informed choice recorded |  |
| `consent_f` | bool | false | Felix's informed choice recorded |  |
| `ally_mercy` | bool | false | Mercy House cooperating |  |
| `ally_eastbank` | bool | false | Eastbank association cooperating |  |
| `ally_regent` | bool | false | Regent residents' trust cooperating |  |
| `ally_circle` | bool | false | Restoration and ward-workers' circle cooperating |  |
| `ally_keepers` | bool | false | Crossing keepers cooperating (Harlan) |  |
| `ally_court` | bool | false | Bracken Court authorities cooperating |  |
| `acc_pump` | bool | false | Access to Pump Nine |  |
| `acc_still` | bool | false | Access to Stillwater |  |
| `acc_cross` | bool | false | A crossing we control on the night |  |
| `harlan_confessed` | bool | false | Harlan exposed his own conduct to help |  |
| `ending` | string | "" | Plot ending | A, B, C, D, E, F_Q, F_S, F_F |
| `alive_quentin` | bool | true | Quentin alive |  |
| `alive_silas` | bool | true | Silas alive |  |
| `alive_felix` | bool | true | Felix alive |  |
| `donors_freed` | bool | false | Eamon, Hugo and Clive freed |  |
| `damian_fate` | string | "" | Damian | arrested, custody, fled, dead |
| `armand_fate` | string | "" | Armand | exposed, settled, withdrawn |
| `august_fate` | string | "" | August | charged, ruined, bargained |
| `orrell_fate` | string | "" | Orrell | resigned, reformed, kept |
| `disclosure` | string | "" | How much the wider city is told | none, communities, public |
| `final_rel` | string | "" | The relationship the story ends with | adrian, micah, ellis, dominic, nolan, ansel, quentin, reuben, single |
| `final_shape` | string | "" | Its shape | together, distance, parted, friends, grief |
| `mc_future` | string | "" | What I do next | crew, response, warden, study, shop, undecided |
