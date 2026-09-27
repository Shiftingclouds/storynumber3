// Calder: the eight route packets (bible §10), adapted: stages instead of scores, beats with explicit places.
// Each beat: flag (set by the scene that plays it), stage it can raise st_ to, scenes where it can happen (at least two
// wherever the story branches, so it's meetable on more than one path), and what it needs first.
// Recognition (stage 5) always needs the man's reciprocal beat AND my own acknowledgement (a *my* choice, never automatic).
// Together (stage 6) happens only in CH17 or later, only by mutual choice, and either man can close the route at any time.
"use strict";

const routes = [
  {
    lead: "adrian", id: "C01",
    calls_it: "Responsibility, professional concern.",
    evidence: "He comes looking for me after duty's finished, and can't explain why a disagreement with me hurts.",
    earned: "A private admission that he wants contact, followed by respect for my answer.",
    guard: "Affection never excuses control. The route needs me to disagree with him honestly, more than once; he learns to ask rather than direct, and still likes a plan.",
    beats: [
      { flag: "b_adrian_disagree", stage: 2, at: ["CH04.MERCY.02", "CH04.REGENT.03"], needs: "" , what: "I disagree with him to his face, calmly and honestly." },
      { flag: "b_adrian_procedure", stage: 3, at: ["CH06.LAWFUL.01", "CH10.RECORDS.01"], needs: "st_adrian >= 2", what: "Working a procedure together; he explains the sequence and I catch what he missed." },
      { flag: "b_adrian_offduty", stage: 4, at: ["CH09.TUNNELS.05", "CH12.REGENT.03", "CH14.QUIET.01"], needs: "st_adrian >= 3", what: "After the danger, off duty, he comes to find me with no reason he can name." },
      { flag: "b_adrian_report", stage: 4, at: ["CH10.RECORDS.02", "CH16.MERCY.01"], needs: "st_adrian >= 3", what: "He tells me about the false report that covered Emmett. What I say back matters." },
      { flag: "b_adrian_want", stage: 5, at: ["CH16.MERCY.02", "CH17.ADRIAN.02"], needs: "b_adrian_offduty and b_adrian_report and (hurt_adrian < 2)", what: "He admits he wants contact. I choose what I want back." }
    ]
  },
  {
    lead: "micah", id: "C02",
    calls_it: "Friendship and shared enjoyment.",
    evidence: "He starts wanting time alone with me, and is unsettled by his own awareness of my body.",
    earned: "Naming one specific desire without being required to announce a whole identity.",
    guard: "A strong route includes times I respect a boundary he can't easily say out loud. His past attraction to women was real.",
    beats: [
      { flag: "b_micah_distro", stage: 1, at: ["CH01.SWITCH.01"], needs: "", what: "Two sets of hands on a bad breaker." },
      { flag: "b_micah_seat", stage: 2, at: ["CH06.WITNESS.01", "CH07.SERRANO.01", "CH08.BAKERY.01"], needs: "", what: "He saves me a seat, or gives me a lift, as if I was always coming." },
      { flag: "b_micah_wolf", stage: 3, at: ["CH07.SERRANO.03", "CH09.TUNNELS.03", "CH12.GATHERING.01"], needs: "st_micah >= 2", what: "He tells me, or shows me, what he is, and watches my face." },
      { flag: "b_micah_boundary", stage: 4, at: ["CH12.GATHERING.03", "CH14.QUIET.01", "CH16.EASTBANK.01"], needs: "st_micah >= 3", what: "He's exhausted and can't say no to his family. I say it for him, or I don't ask." },
      { flag: "b_micah_want", stage: 5, at: ["CH12.GATHERING.04", "CH17.MICAH.02"], needs: "b_micah_wolf and b_micah_boundary and (hurt_micah < 2)", what: "He wants me alone and says so, clumsily. I choose what I want back." }
    ]
  },
  {
    lead: "ellis", id: "C03",
    calls_it: "Interest; aesthetics; a person worth knowing.",
    evidence: "Being impressive stops satisfying him; he wants to be wanted on an ordinary bad day.",
    earned: "He lets a private uncertainty stay visible, and I come back to the conversation.",
    guard: "No male ex, no established circle: he has noticed men privately and postponed deciding what it means.",
    beats: [
      { flag: "b_ellis_meet", stage: 2, at: ["CH05.RESTORE.01", "CH06.TOKEN.01", "CH07.UNI.01"], needs: "", what: "The workroom: he performs competence beautifully." },
      { flag: "b_ellis_offstage", stage: 3, at: ["CH05.RESTORE.02", "CH07.UNI.03", "CH09.SCREEN.02"], needs: "st_ellis >= 2", what: "Upstairs, off stage: irritable, funny, ordinary." },
      { flag: "b_ellis_danger", stage: 4, at: ["CH09.SCREEN.04", "CH11.EXHIBIT.04", "CH16.FELIX.02"], needs: "st_ellis >= 3", what: "He needs time to understand the work and I hold the line while he does." },
      { flag: "b_ellis_badday", stage: 5, at: ["CH11.EXHIBIT.05", "CH16.FELIX.03", "CH17.ELLIS.02"], needs: "b_ellis_danger and (hurt_ellis < 2)", what: "After Basil takes credit (or after Felix), he lets me see him uncertain, and I stay. I choose what I want back." }
    ]
  },
  {
    lead: "dominic", id: "C04",
    calls_it: "Gratitude for being treated normally.",
    evidence: "He wants intimacy that involves his changed body and his unchanged preferences.",
    earned: "He asks what I want, instead of arranging his own withdrawal on my behalf.",
    guard: "Feeding is never a shortcut to romance. Chronologically twenty-two, not ancient.",
    beats: [
      { flag: "b_dominic_normal", stage: 2, at: ["CH04.MERCY.03", "CH04.REGENT.02"], needs: "", what: "I talk to him like it's a year ago." },
      { flag: "b_dominic_music", stage: 3, at: ["CH07.NOLAN.02", "CH11.EXHIBIT.02", "CH12.HOME.03"], needs: "st_dominic >= 2", what: "Music: a song at Nolan's party, the museum, or the Lantern Rooms at night." },
      { flag: "b_dominic_dawn", stage: 4, at: ["CH12.REGENT.02", "CH16.REGENT.01"], needs: "st_dominic >= 3", what: "Before dawn in the Regent, with the light coming: he lets me help and doesn't punish me for it." },
      { flag: "b_dominic_ask", stage: 5, at: ["CH12.REGENT.04", "CH17.DOMINIC.02"], needs: "b_dominic_dawn and (hurt_dominic < 2) and not(managed_dominic)", what: "He asks what I want. I haven't been managing him. I choose what I want back." }
    ]
  },
  {
    lead: "nolan", id: "C05",
    calls_it: "Longstanding friendship.",
    evidence: "Familiar gestures begin to feel newly charged and he can't dismiss them as habit.",
    earned: "A direct, awkward conversation that allows either a relationship or a valued friendship.",
    guard: "Not a waiting boyfriend or an automatic safe route. His course offer stays desirable. My unexplained absences cost something.",
    beats: [
      { flag: "b_nolan_kept", stage: 3, at: ["CH05.NIGHT.01", "CH06.WEEKS.01"], needs: "", what: "I keep a plan I made with him." },
      { flag: "b_nolan_birthday", stage: 4, at: ["CH07.NOLAN.03"], needs: "hurt_nolan < 2", what: "His birthday: the balcony at 2 a.m., a gesture that isn't habit any more." },
      { flag: "b_nolan_work", stage: 4, at: ["CH09.TUNNELS.02", "CH12.HOME.01", "CH14.QUIET.01"], needs: "st_nolan >= 3", what: "Working beside him in the thing he's best at." },
      { flag: "b_nolan_talk", stage: 5, at: ["CH16.HOME.02", "CH17.NOLAN.02"], needs: "(b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)", what: "The direct, awkward conversation. Either answer is honoured. I choose what I want back." }
    ]
  },
  {
    lead: "ansel", id: "C06",
    calls_it: "Duty, hospitality, useful company.",
    evidence: "He invents official reasons for visits, and resents the invention.",
    earned: "He comes without a pretext, and keeps a confidence without turning it into an obligation.",
    guard: "No bargain can compel his affection or bind me romantically.",
    beats: [
      { flag: "b_ansel_help", stage: 2, at: ["CH06.ANSEL.01"], needs: "", what: "I help him look for Eamon." },
      { flag: "b_ansel_pretext", stage: 3, at: ["CH10.ORCHARD.03", "CH12.PREP.02"], needs: "st_ansel >= 2", what: "He turns up with an official reason that is very obviously not the reason." },
      { flag: "b_ansel_confidence", stage: 4, at: ["CH13.COURT.03", "CH14.QUIET.01"], needs: "st_ansel >= 3", what: "In Bracken Court, he trusts me with something about his father, and I don't make it a debt." },
      { flag: "b_ansel_nopretext", stage: 5, at: ["CH14.QUIET.02", "CH17.ANSEL.02"], needs: "b_ansel_confidence and (hurt_ansel < 2)", what: "He comes to my door with no reason at all. I choose what I want back." }
    ]
  },
  {
    lead: "quentin", id: "C07",
    calls_it: "Trust in a witness; practical alliance.",
    evidence: "He wants my company on a day when nothing needs investigating.",
    earned: "He initiates time together as a person with choices, after I've made room for those choices.",
    guard: "Investigative access and affection are separate. Nothing in exchange for keeping him alive or keeping his secret. He must be free to act, disagree, initiate and refuse. Only if alive.",
    beats: [
      { flag: "b_quentin_consent", stage: 3, at: ["CH04.DINER.01", "CH05.HOSPITAL.01"], needs: "", what: "I ask what he wants before anyone decides for him." },
      { flag: "b_quentin_acts", stage: 4, at: ["CH08.SILAS.02", "CH16.PATIENTS.01"], needs: "st_quentin >= 3", what: "He acts: takes Silas's side, takes a risk, disagrees with me and is right." },
      { flag: "b_quentin_nothing", stage: 4, at: ["CH12.HOME.04", "CH16.PATIENTS.02"], needs: "st_quentin >= 3", what: "A day when nothing needs investigating. He asks. I didn't." },
      { flag: "b_quentin_initiates", stage: 5, at: ["CH17.QUENTIN.02"], needs: "b_quentin_acts and b_quentin_nothing and (hurt_quentin < 2)", what: "He initiates. I choose what I want back." }
    ]
  },
  {
    lead: "reuben", id: "C08",
    calls_it: "Concern for someone's welfare.",
    evidence: "He wants to be cared for, and finds professional competence an inadequate shield.",
    earned: "He accepts help, or asks for closeness outside a caregiving role.",
    guard: "I'm never his dependent patient in a romantic scene; a caregiving encounter doesn't signify desire.",
    beats: [
      { flag: "b_reuben_explain", stage: 3, at: ["CH05.HOSPITAL.01", "CH08.HOSPITAL.01"], needs: "", what: "I explain what I see; he believes me, carefully." },
      { flag: "b_reuben_damian", stage: 4, at: ["CH10.ORCHARD.02", "CH16.MERCY.03"], needs: "st_reuben >= 3", what: "He talks about the instructor who took him seriously and disappeared." },
      { flag: "b_reuben_needs", stage: 4, at: ["CH12.HOME.02", "CH14.QUIET.01", "CH18.SERVICE.01"], needs: "st_reuben >= 3", what: "He needs something (sleep, help, someone to carry the other end) and lets me." },
      { flag: "b_reuben_stay", stage: 5, at: ["CH18.SERVICE.02", "CH17.REUBEN.02"], needs: "b_reuben_needs and (hurt_reuben < 2)", what: "The reason to stay has passed and he stays. I choose what I want back." }
    ]
  }
];

// Supporting awakenings the bible allows to develop privately between other men (never the narrator's routes,
// never narrated as fact): Darius and Caspar (C20/C40), Tomas and Milo (C27/C35). The narrator may notice; he may not announce.
const others = [
  { pair: ["C20", "C40"], note: "A friendship long treated as uncomplicated. Small changes in attention." },
  { pair: ["C27", "C35"], note: "A film project gives them permission to spend time together." }
];

module.exports = { routes, others };
