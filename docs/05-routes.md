# Calder — the eight routes

_Generated from `plan/` by `tools/plan-docs.js`. Author-facing: contains spoilers._

Stages instead of scores: met → friendly → friend → close → recognised → together. Each beat names where it can happen (more than one place wherever the story branches) and what it needs first. Recognition always needs his reciprocal beat and my own choice. Either man can close the route at any time.

## Adrian Keene

- **What he calls it:** Responsibility, professional concern.
- **What challenges that:** He comes looking for me after duty's finished, and can't explain why a disagreement with me hurts.
- **The earned next step:** A private admission that he wants contact, followed by respect for my answer.
- **Guard rails:** Affection never excuses control. The route needs me to disagree with him honestly, more than once; he learns to ask rather than direct, and still likes a plan.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_adrian_disagree` | 2 | CH04.MERCY.02, CH04.REGENT.03 |  | I disagree with him to his face, calmly and honestly. |
| `b_adrian_procedure` | 3 | CH06.LAWFUL.01, CH10.RECORDS.01 | `st_adrian >= 2` | Working a procedure together; he explains the sequence and I catch what he missed. |
| `b_adrian_offduty` | 4 | CH09.TUNNELS.05, CH12.REGENT.03, CH14.QUIET.01 | `st_adrian >= 3` | After the danger, off duty, he comes to find me with no reason he can name. |
| `b_adrian_report` | 4 | CH10.RECORDS.02, CH16.MERCY.01 | `st_adrian >= 3` | He tells me about the false report that covered Emmett. What I say back matters. |
| `b_adrian_want` | 5 | CH16.MERCY.02, CH17.ADRIAN.02 | `b_adrian_offduty and b_adrian_report and (hurt_adrian < 2)` | He admits he wants contact. I choose what I want back. |

## Micah Serrano

- **What he calls it:** Friendship and shared enjoyment.
- **What challenges that:** He starts wanting time alone with me, and is unsettled by his own awareness of my body.
- **The earned next step:** Naming one specific desire without being required to announce a whole identity.
- **Guard rails:** A strong route includes times I respect a boundary he can't easily say out loud. His past attraction to women was real.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_micah_distro` | 1 | CH01.SWITCH.01 |  | Two sets of hands on a bad breaker. |
| `b_micah_seat` | 2 | CH06.WITNESS.01, CH07.SERRANO.01, CH08.BAKERY.01 |  | He saves me a seat, or gives me a lift, as if I was always coming. |
| `b_micah_wolf` | 3 | CH07.SERRANO.03, CH09.TUNNELS.03, CH12.GATHERING.01 | `st_micah >= 2` | He tells me, or shows me, what he is, and watches my face. |
| `b_micah_boundary` | 4 | CH12.GATHERING.03, CH14.QUIET.01, CH16.EASTBANK.01 | `st_micah >= 3` | He's exhausted and can't say no to his family. I say it for him, or I don't ask. |
| `b_micah_want` | 5 | CH12.GATHERING.04, CH17.MICAH.02 | `b_micah_wolf and b_micah_boundary and (hurt_micah < 2)` | He wants me alone and says so, clumsily. I choose what I want back. |

## Ellis Okafor

- **What he calls it:** Interest; aesthetics; a person worth knowing.
- **What challenges that:** Being impressive stops satisfying him; he wants to be wanted on an ordinary bad day.
- **The earned next step:** He lets a private uncertainty stay visible, and I come back to the conversation.
- **Guard rails:** No male ex, no established circle: he has noticed men privately and postponed deciding what it means.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_ellis_meet` | 2 | CH05.RESTORE.01, CH06.TOKEN.01 |  | The workroom: he performs competence beautifully. |
| `b_ellis_offstage` | 3 | CH05.RESTORE.02, CH07.UNI.03, CH09.SCREEN.02 | `st_ellis >= 2` | Upstairs, off stage: irritable, funny, ordinary. |
| `b_ellis_danger` | 4 | CH09.SCREEN.04, CH11.EXHIBIT.04, CH16.FELIX.02 | `st_ellis >= 3` | He needs time to understand the work and I hold the line while he does. |
| `b_ellis_badday` | 5 | CH11.EXHIBIT.05, CH16.FELIX.03, CH17.ELLIS.02 | `b_ellis_danger and (hurt_ellis < 2)` | After Basil takes credit (or after Felix), he lets me see him uncertain, and I stay. I choose what I want back. |

## Dominic Bell

- **What he calls it:** Gratitude for being treated normally.
- **What challenges that:** He wants intimacy that involves his changed body and his unchanged preferences.
- **The earned next step:** He asks what I want, instead of arranging his own withdrawal on my behalf.
- **Guard rails:** Feeding is never a shortcut to romance. Chronologically twenty-two, not ancient.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_dominic_normal` | 2 | CH04.MERCY.03, CH04.REGENT.02 |  | I talk to him like it's a year ago. |
| `b_dominic_music` | 3 | CH07.NOLAN.02, CH11.EXHIBIT.02, CH12.HOME.03 | `st_dominic >= 2` | Music: a song at Nolan's party, the museum, or the Lantern Rooms at night. |
| `b_dominic_dawn` | 4 | CH12.REGENT.02, CH16.REGENT.01 | `st_dominic >= 3` | Before dawn in the Regent, with the light coming: he lets me help and doesn't punish me for it. |
| `b_dominic_ask` | 5 | CH12.REGENT.04, CH17.DOMINIC.02 | `b_dominic_dawn and (hurt_dominic < 2) and not(managed_dominic)` | He asks what I want. I haven't been managing him. I choose what I want back. |

## Nolan Voss

- **What he calls it:** Longstanding friendship.
- **What challenges that:** Familiar gestures begin to feel newly charged and he can't dismiss them as habit.
- **The earned next step:** A direct, awkward conversation that allows either a relationship or a valued friendship.
- **Guard rails:** Not a waiting boyfriend or an automatic safe route. His course offer stays desirable. My unexplained absences cost something.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_nolan_kept` | 3 | CH05.NIGHT.01, CH06.WEEKS.01, CH07.NOLAN.01 |  | I keep a plan I made with him. |
| `b_nolan_birthday` | 4 | CH07.NOLAN.03 | `hurt_nolan < 2` | His birthday: the balcony at 2 a.m., a gesture that isn't habit any more. |
| `b_nolan_work` | 4 | CH09.TUNNELS.02, CH12.HOME.01, CH14.QUIET.01 | `st_nolan >= 3` | Working beside him in the thing he's best at. |
| `b_nolan_talk` | 5 | CH16.HOME.02, CH17.NOLAN.02 | `(b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)` | The direct, awkward conversation. Either answer is honoured. I choose what I want back. |

## Ansel Marr

- **What he calls it:** Duty, hospitality, useful company.
- **What challenges that:** He invents official reasons for visits, and resents the invention.
- **The earned next step:** He comes without a pretext, and keeps a confidence without turning it into an obligation.
- **Guard rails:** No bargain can compel his affection or bind me romantically.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_ansel_help` | 2 | CH06.ANSEL.01 |  | I help him look for Eamon. |
| `b_ansel_pretext` | 3 | CH10.ORCHARD.03, CH12.PREP.02 | `st_ansel >= 2` | He turns up with an official reason that is very obviously not the reason. |
| `b_ansel_confidence` | 4 | CH13.COURT.03, CH14.QUIET.01 | `st_ansel >= 3` | In Bracken Court, he trusts me with something about his father, and I don't make it a debt. |
| `b_ansel_nopretext` | 5 | CH14.QUIET.02, CH17.ANSEL.02 | `b_ansel_confidence and (hurt_ansel < 2)` | He comes to my door with no reason at all. I choose what I want back. |

## Quentin Shaw

- **What he calls it:** Trust in a witness; practical alliance.
- **What challenges that:** He wants my company on a day when nothing needs investigating.
- **The earned next step:** He initiates time together as a person with choices, after I've made room for those choices.
- **Guard rails:** Investigative access and affection are separate. Nothing in exchange for keeping him alive or keeping his secret. He must be free to act, disagree, initiate and refuse. Only if alive.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_quentin_consent` | 3 | CH04.DINER.01, CH05.HOSPITAL.01 |  | I ask what he wants before anyone decides for him. |
| `b_quentin_acts` | 4 | CH08.SILAS.02, CH16.PATIENTS.01 | `st_quentin >= 3` | He acts: takes Silas's side, takes a risk, disagrees with me and is right. |
| `b_quentin_nothing` | 4 | CH12.HOME.04, CH16.PATIENTS.02 | `st_quentin >= 3` | A day when nothing needs investigating. He asks. I didn't. |
| `b_quentin_initiates` | 5 | CH17.QUENTIN.02 | `b_quentin_acts and b_quentin_nothing and (hurt_quentin < 2)` | He initiates. I choose what I want back. |

## Reuben Pike

- **What he calls it:** Concern for someone's welfare.
- **What challenges that:** He wants to be cared for, and finds professional competence an inadequate shield.
- **The earned next step:** He accepts help, or asks for closeness outside a caregiving role.
- **Guard rails:** I'm never his dependent patient in a romantic scene; a caregiving encounter doesn't signify desire.

| Beat | Stage | Where | Needs | What |
|---|---|---|---|---|
| `b_reuben_explain` | 3 | CH05.HOSPITAL.01, CH08.HOSPITAL.01 |  | I explain what I see; he believes me, carefully. |
| `b_reuben_damian` | 4 | CH10.ORCHARD.02, CH16.IDENT.01 | `st_reuben >= 3` | He talks about the instructor who took him seriously and disappeared. |
| `b_reuben_needs` | 4 | CH12.HOME.02, CH14.QUIET.01, CH16.REUBEN.01, CH18.SERVICE.01 | `st_reuben >= 3` | He needs something (sleep, help, someone to carry the other end) and lets me. |
| `b_reuben_stay` | 5 | CH17.REUBEN.02, CH18.SERVICE.02 | `b_reuben_needs and (hurt_reuben < 2)` | The reason to stay has passed and he stays. I choose what I want back. |

## Other men, privately

- Darius Chen and Caspar Neri: A friendship long treated as uncomplicated. Small changes in attention. The narrator may notice; he never announces.
- Tomas Rivas and Milo Finch: A film project gives them permission to spend time together. The narrator may notice; he never announces.
