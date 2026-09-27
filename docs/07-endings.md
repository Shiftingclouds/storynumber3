# Calder — endings and epilogues

_Generated from `plan/` by `tools/plan-docs.js`. Author-facing: contains spoilers._

## The ending families

| Ending | Needs | Core outcome | Damian | Armand | August | Disclosure options |
|---|---|---|---|---|---|---|
| **A** The Shared Return | Distributed bridge ready (plan_full, materials 3, volunteers >= 6, all consents); Mercy House cooperating; no disruption; I choose accountable institutional cooperation. | All three patients survive and all three donors are freed. The operation closes. A governed recovery program. Institutional wrongdoing addressed explicitly. | arrested | exposed | charged | communities, public |
| **B** A City of Witnesses | Distributed bridge ready; Eastbank and the Regent cooperating; no disruption; I choose coalition custody of the evidence. | All six survive; donors freed; communities build their own recovery and accountability. Disclosure chosen separately; never outs a romance. | arrested | exposed | charged | communities, public |
| **C** The Long Recovery | Interim bridge validated with >= 3 volunteers and consents (or the full plan degraded by a disruption); no settlement with Armand. | Donors freed; all patients survive, with a long recovery, care rotas, lost wages and a timetable. The ring ends. | custody | withdrawn | ruined | none, communities |
| **D** The Private Settlement | Interim bridge ready; I negotiated or arranged monitored cooperation with Armand in CH19, with leverage. | Captives freed, patients survive; Damian's operation ends; Armand keeps specified influence and limited protection. A compromise with lasting cost. No new captive replaces an old one. | custody | settled | bargained | none |
| **E** The Severed Bond | Always available: I choose to free the donors without a continuing bridge, with the cost plainly established. | Eamon, Hugo and Clive survive and regain autonomy; Quentin, Silas and Felix die. The operation is stopped. Grief, accountability and the donors' perspectives get full scenes. No surviving Quentin romance. | arrested | exposed | charged | communities, public |
| **F_Q** What We Could Save: Quentin | Single-pair technique demonstrated (or capacity reduced to one by a CH21 disruption); I choose Quentin. | All three donors freed. Quentin survives; Silas and Felix die. | arrested | exposed | charged | communities, public |
| **F_S** What We Could Save: Silas | As F_Q; I choose Silas. | All three donors freed. Silas survives; Quentin and Felix die. | arrested | exposed | charged | communities, public |
| **F_F** What We Could Save: Felix | As F_Q; I choose Felix. | All three donors freed. Felix survives; Quentin and Silas die. | arrested | exposed | charged | communities, public |

## Epilogue passages (CH24), in the fixed editorial order

### 1. The ending's anchor

- **ANC_A** — `ending = "A"` — Mercy House's recovery wing, a year on: a plaque, a board meeting I'm late for, a program with rules because we made it have them.
- **ANC_B** — `ending = "B"` — Eastbank's long table, a year on: the coalition's anniversary dinner, three copies of the evidence in three safes, and a toast nobody can finish.
- **ANC_C** — `ending = "C"` — The Okafors' workroom, a year on: the recovery timetable finally taken down off the wall, one pin at a time.
- **ANC_D** — `ending = "D"` — Briar Heights, a year on: Armand's foundation funds a clinic with his name on it. I walk past it every week and don't go in.
- **ANC_E** — `ending = "E"` — Hillview Cemetery, a year on: three graves in a row, and three living men who come every month and bring each other coffee.
- **ANC_FQ** — `ending = "F_Q"` — Riverside Steps, a year on: Quentin, alive, late, carrying two coffees and two names he says out loud every day.
- **ANC_FS** — `ending = "F_S"` — Lyle's Bakery at four in the morning, a year on: Silas at the ovens, Otis retired to a chair by the door.
- **ANC_FF** — `ending = "F_F"` — Southmere Cinema, a year on: the premiere of Felix's film, with two names in the dedication.

### 2. Patients and donors: Quentin

- **QUENTIN_ALIVE** — `alive_quentin` — Quentin, a year on: the life he chose, off the bridge, cold hands in winter and nothing else.
- **QUENTIN_DEAD** — `not(alive_quentin)` — Quentin: where he's buried, who visits, what he wanted, said out loud.

### 2. Silas

- **SILAS_ALIVE** — `alive_silas` — Silas, a year on: the life he chose, off the bridge, cold hands in winter and nothing else.
- **SILAS_DEAD** — `not(alive_silas)` — Silas: where he's buried, who visits, what he wanted, said out loud.

### 2. Felix

- **FELIX_ALIVE** — `alive_felix` — Felix, a year on: the life he chose, off the bridge, cold hands in winter and nothing else.
- **FELIX_DEAD** — `not(alive_felix)` — Felix: where he's buried, who visits, what he wanted, said out loud.

### 2. Eamon

- **EAMON_PAID** — `donors_freed and (ending = "D")` — Eamon: compensated, and bound by what he signed; what he does with the money, and what he doesn't say.
- **EAMON_FREE** — `donors_freed and (ending != "D")` — Eamon: his own year, his anger, his work, whether he ever wants to hear the word 'link' again.

### 2. Hugo

- **HUGO_PAID** — `donors_freed and (ending = "D")` — Hugo: compensated, and bound by what he signed; what he does with the money, and what he doesn't say.
- **HUGO_FREE** — `donors_freed and (ending != "D")` — Hugo: his own year, his anger, his work, whether he ever wants to hear the word 'link' again.

### 2. Clive

- **CLIVE_PAID** — `donors_freed and (ending = "D")` — Clive: compensated, and bound by what he signed; what he does with the money, and what he doesn't say.
- **CLIVE_FREE** — `donors_freed and (ending != "D")` — Clive: his own year, his anger, his work, whether he ever wants to hear the word 'link' again.

### 3. The relationship, or the single life

- **REL_ADRIAN_TOGETHER** — `(final_rel = "adrian") and (final_shape = "together")` — adrian: together, privately and properly, a year on.
- **REL_ADRIAN_DISTANCE** — `(final_rel = "adrian") and (final_shape = "distance")` — adrian: together across distance or changed lives, on purpose.
- **REL_ADRIAN_PARTED** — `(final_rel = "adrian") and (final_shape = "parted")` — adrian: it mattered, it ended, and we both know why.
- **REL_ADRIAN_FRIENDS** — `(final_rel = "adrian") and (final_shape = "friends")` — adrian: the friendship, with its own payoff.
- **REL_MICAH_TOGETHER** — `(final_rel = "micah") and (final_shape = "together")` — micah: together, privately and properly, a year on.
- **REL_MICAH_DISTANCE** — `(final_rel = "micah") and (final_shape = "distance")` — micah: together across distance or changed lives, on purpose.
- **REL_MICAH_PARTED** — `(final_rel = "micah") and (final_shape = "parted")` — micah: it mattered, it ended, and we both know why.
- **REL_MICAH_FRIENDS** — `(final_rel = "micah") and (final_shape = "friends")` — micah: the friendship, with its own payoff.
- **REL_ELLIS_TOGETHER** — `(final_rel = "ellis") and (final_shape = "together")` — ellis: together, privately and properly, a year on.
- **REL_ELLIS_DISTANCE** — `(final_rel = "ellis") and (final_shape = "distance")` — ellis: together across distance or changed lives, on purpose.
- **REL_ELLIS_PARTED** — `(final_rel = "ellis") and (final_shape = "parted")` — ellis: it mattered, it ended, and we both know why.
- **REL_ELLIS_FRIENDS** — `(final_rel = "ellis") and (final_shape = "friends")` — ellis: the friendship, with its own payoff.
- **REL_DOMINIC_TOGETHER** — `(final_rel = "dominic") and (final_shape = "together")` — dominic: together, privately and properly, a year on.
- **REL_DOMINIC_DISTANCE** — `(final_rel = "dominic") and (final_shape = "distance")` — dominic: together across distance or changed lives, on purpose.
- **REL_DOMINIC_PARTED** — `(final_rel = "dominic") and (final_shape = "parted")` — dominic: it mattered, it ended, and we both know why.
- **REL_DOMINIC_FRIENDS** — `(final_rel = "dominic") and (final_shape = "friends")` — dominic: the friendship, with its own payoff.
- **REL_NOLAN_TOGETHER** — `(final_rel = "nolan") and (final_shape = "together")` — nolan: together, privately and properly, a year on.
- **REL_NOLAN_DISTANCE** — `(final_rel = "nolan") and (final_shape = "distance")` — nolan: together across distance or changed lives, on purpose.
- **REL_NOLAN_PARTED** — `(final_rel = "nolan") and (final_shape = "parted")` — nolan: it mattered, it ended, and we both know why.
- **REL_NOLAN_FRIENDS** — `(final_rel = "nolan") and (final_shape = "friends")` — nolan: the friendship, with its own payoff.
- **REL_ANSEL_TOGETHER** — `(final_rel = "ansel") and (final_shape = "together")` — ansel: together, privately and properly, a year on.
- **REL_ANSEL_DISTANCE** — `(final_rel = "ansel") and (final_shape = "distance")` — ansel: together across distance or changed lives, on purpose.
- **REL_ANSEL_PARTED** — `(final_rel = "ansel") and (final_shape = "parted")` — ansel: it mattered, it ended, and we both know why.
- **REL_ANSEL_FRIENDS** — `(final_rel = "ansel") and (final_shape = "friends")` — ansel: the friendship, with its own payoff.
- **REL_QUENTIN_TOGETHER** — `(final_rel = "quentin") and (final_shape = "together") and alive_quentin` — quentin: together, privately and properly, a year on.
- **REL_QUENTIN_DISTANCE** — `(final_rel = "quentin") and (final_shape = "distance") and alive_quentin` — quentin: together across distance or changed lives, on purpose.
- **REL_QUENTIN_PARTED** — `(final_rel = "quentin") and (final_shape = "parted") and alive_quentin` — quentin: it mattered, it ended, and we both know why.
- **REL_QUENTIN_FRIENDS** — `(final_rel = "quentin") and (final_shape = "friends") and alive_quentin` — quentin: the friendship, with its own payoff.
- **REL_REUBEN_TOGETHER** — `(final_rel = "reuben") and (final_shape = "together")` — reuben: together, privately and properly, a year on.
- **REL_REUBEN_DISTANCE** — `(final_rel = "reuben") and (final_shape = "distance")` — reuben: together across distance or changed lives, on purpose.
- **REL_REUBEN_PARTED** — `(final_rel = "reuben") and (final_shape = "parted")` — reuben: it mattered, it ended, and we both know why.
- **REL_REUBEN_FRIENDS** — `(final_rel = "reuben") and (final_shape = "friends")` — reuben: the friendship, with its own payoff.
- **REL_QUENTIN_GRIEF** — `(final_rel = "quentin") and (final_shape = "grief")` — Quentin: grief, and what he'd have said about me grieving. Never his living portrait.
- **REL_SINGLE** — `(final_rel = "single") or (final_rel = "")` — A single life, chosen: the knack, the city, the people, and me in the middle of it.

### 4. Supporting consequences (two or three that were developed)

- **CONSEQ_S01** — `s01 != ""` — The print shop: Martin's decision, a year on.
- **CONSEQ_S02** — `s02 != ""` — Nolan's course, a year on.
- **CONSEQ_S03** — `s03 != ""` — Ellis's placement, a year on.
- **CONSEQ_S04** — `s04 != ""` — Micah's work and the Serrano household, a year on.
- **CONSEQ_S05** — `s05 != ""` — Dominic's music, a year on.
- **CONSEQ_S06** — `s06 != ""` — Switchyard, a year on.
- **CONSEQ_S07** — `s07 != ""` — Mercy House's review, a year on.
- **CONSEQ_S08** — `s08 != ""` — Wesley's room, a year on.
- **CONSEQ_S09** — `s09 != ""` — The response service, a year on.
- **CONSEQ_S10** — `s10 != ""` — The night rota, a year on.
- **CONSEQ_S11** — `s11 != ""` — Winton Court's tenants, a year on.
- **CONSEQ_S12** — `s12 != ""` — Felix's film and Milo's documentary, a year on.
- **CONSEQ_S13** — `s13 != ""` — Will and Isaac, a year on.
- **CONSEQ_S14** — `s14 != ""` — The crossing succession, a year on.
- **CONSEQ_S15** — `s15 != ""` — Lyle's Bakery, a year on.
- **CONSEQ_S16** — `s16 != ""` — The Regent, a year on.

### 5. The final image

- **FIN_TOGETHER** — `(final_shape = "together") or (final_shape = "distance")` — The knack reads a room with him in it, and for the first time, with me in it too.
- **FIN_OTHER** — `(final_shape != "together") and (final_shape != "distance")` — The knack reads the whole city from the Riverside Steps, and, for the first time, me.

