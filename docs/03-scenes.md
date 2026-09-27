# Calder — the scene inventory

_Generated from `plan/` by `tools/plan-docs.js`. Author-facing: contains spoilers._

262 scenes and 586 choices across 24 chapters. Every scene has a date, a place, who is there, what it's for, and where every choice goes. Checked by `tools/plan-check.js`.


## CH01 — After the Last Set

_Event work, Nolan, home obligations, the murder behind Switchyard. The knack's first hard pulse._

### CH01.HOME.01
**Sat 29 Aug, 15:30** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Open on ordinary life above the print shop. Name and portrait, via the bathroom mirror. Martin at the press with an overdue invoice he's pretending isn't there (S01). Will's Sunday game (S13). Mum's emails arrive in a batch: the first letter.

> **Letter.** Joanne, from the clinic: three weeks of news in one batch. Snow already up north. 'Are you eating? Is Martin charging you rent? He should.'

_On entry:_ st_nolan = 3, fr_martin = 2, fr_will = 1

- **a.** Promise Martin I'll do the Monday delivery run before my shift. _(relational)_ → s01 = "intro", fr_martin +1
- **b.** Tell Martin I can't, I've got crew calls all week. He says it's fine. It isn't. _(relational)_ → s01 = "intro"

Next: CH01.HOME.02

### CH01.HOME.02
**Sat 29 Aug, 16:00** · Latch Lane print shop and upstairs home · I, Will Avery

Will asks for a lift to his game tomorrow and then pretends he didn't. Establish Will's plan (the regional program) and his suspicion that I'm unreliable.

- **a.** "I'll be there. Nine o'clock. I'll bring the bad coffee." _(relational)_ → s13 = "intro", fr_will +1
- **b.** "If I'm up. It's the Last Set tonight." _(relational)_ → s13 = "intro"

Next: CH01.SWITCH.01

### CH01.SWITCH.01
**Sat 29 Aug, 18:00** · Switchyard · I, Nolan Voss, Desmond Aster, Caspar Neri, Micah Serrano

Load-in for Switchyard's end-of-summer all-ages show. Nolan on sound, turning a cable connector over in his hands. Desmond asking for 'just a couple of free hours' (S06). Caspar on lights. A borrowed apprentice electrician, Micah, fixing a dodgy distro board after 'a rough night' (last night was the full moon; I don't know what that means yet). The knack: I wear ear defenders at gigs, and not only for the noise.

_On entry:_ fr_desmond = 1, st_micah = 1

- **a.** Help Micah with the distro board. Two sets of hands, one bad breaker. _(relational)_ → b_micah_distro = true, craft +3
- **b.** Help Nolan patch the stage box and let him talk. _(relational)_ → st_nolan +1
- **c.** Tell Desmond we're not doing free hours. For both of us. _(relational)_ → s06 = "intro", nerve +2, st_nolan +1, fr_desmond -1

_Note:_ Micah is met on every path (st_micah 1 on entry for all; choice a adds craft and a warmer first impression via fr-less beat b_micah_distro).

Next: CH01.SWITCH.02

### CH01.SWITCH.02
**Sat 29 Aug, 21:30** · Switchyard · I, Nolan Voss, Quentin Shaw, Peter Laird

The show. The crowd's weather comes through the defenders: joy, sweat, a boy's heartbreak at the barrier. Quentin and Peter from Double Shift, in the bar queue. Quentin asks me for a plaster for a blister and makes a joke about his new work boots. Keys on a ring with a little tin charm. Nolan, between sets, mentions a technical course in another city (S02).

- **a.** Find Quentin the plaster and stay a minute. He's funny. _(relational)_ → st_quentin = 1, people +2
- **b.** Point him at the first-aid box and get back to work. _(expressive)_ → st_quentin = 1
- **c.** Ask Nolan about the course. Properly. _(relational)_ → s02 = "intro", st_nolan +1

_Note:_ Quentin met on all paths (st 1). If c, Quentin is still seen in the queue (st 1) without the plaster conversation.

Next: CH01.LANE.01

### CH01.LANE.01
**Sun 30 Aug, 00:35** · Switchyard · I, Quentin Shaw

Load-out. I take the empty cases out to the rear lane. Quentin at the far end by the bins, alone, on his phone. A man in a service jacket. Something on Quentin's key ring flares hot, and the knack goes off in me like a struck bell: a doubled pulse, a rope pulled tight out of him into nowhere. He falls. How do I meet it?

- **a.** Stay behind the cases. Watch. Get my phone up. _(structural)_ → ch01_saw = "cover", e01 = true, e01_src = "phone" → **CH01.LANE.COVER**
- **b.** Run at them. _(structural)_ → ch01_saw = "approach", nerve +3 → **CH01.LANE.APPROACH**
- **c.** Run back inside for Nolan and Desmond. _(structural)_ → ch01_saw = "help" → **CH01.LANE.HELP**

### CH01.LANE.COVER _(branch)_
**Sun 30 Aug, 00:40** · Switchyard · I

_When:_ `ch01_saw = "cover"`

Fourteen shaky seconds of phone video: the service jacket (no face), the flare, the fall, the sequence. The van reverses in: white, a lily painted on the side. The knack holds the doubled pulse even after Quentin stops moving. Nobody sees me.


Next: CH01.LANE.AFTER

### CH01.LANE.APPROACH _(branch)_
**Sun 30 Aug, 00:40** · Switchyard · I, Quentin Shaw

_When:_ `ch01_saw = "approach"`

I get there as he dies. Hands on him; the pulse under my palms doesn't stop when his heart does. The service jacket shoves me into the wall: a hood, a pleasant clean-shaven jaw, a voice that says 'Sorry' as if he means it. The van. My face was seen.

- **a.** Hold on to Quentin until they pull him away. _(expressive)_ → hurt_mc = 1, enemy_aware = 1, knack +3
- **b.** Go for the man's arm. Get something. _(investigative)_ → hurt_mc = 1, enemy_aware = 1, cuff_button = true
  - _A torn cuff button: brass, Mercy House issue (old). A red herring toward the wardens with an innocent later explanation (Damian's old jacket)._

Next: CH01.LANE.AFTER

### CH01.LANE.HELP _(branch)_
**Sun 30 Aug, 00:41** · Switchyard · I, Nolan Voss, Desmond Aster

_When:_ `ch01_saw = "help"`

Back with Nolan and Desmond: the lane is emptying, the van turning out of the far end. Nolan saw the tail of it. The venue's rear camera covers the lane: Desmond says he'll 'sort the footage' (he won't, in time). Nolan is a witness now, too.

- **a.** Ask Nolan to pull the camera file tonight, before Desmond forgets. _(investigative)_ → e02 = true, e02_src = "nolan", st_nolan +1
- **b.** Leave the footage to Desmond. _(expressive)_

Next: CH01.LANE.AFTER

### CH01.LANE.AFTER
**Sun 30 Aug, 01:20** · Switchyard · I, Nolan Voss

The lane is empty, rinsed by the drizzle. Nolan (if he wasn't there, he comes looking for me) sees my face and doesn't ask yet. I walk home along the river with the knack buzzing like a tooth. At the print shop the light's still on in Martin's window.


Next: CH02.HOME.01


## CH02 — The Account I Give

_Respond to what I witnessed; consequences at home. Record who knows what and what evidence survives._

### CH02.HOME.01
**Sun 30 Aug, 08:40** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Morning. No sleep. Martin sees my face (and my bruised shoulder, if I ran at them). Will's game is at nine. The knack is still humming; Martin's worry reads as a low grey pressure. What do I tell him?

- **a.** Something true and small: "I saw a fight after the show. I'm okay." _(relational)_ → fr_martin +1
- **b.** Nothing. "Long night." He knows it's a lie and lets me have it. _(relational)_ → fr_martin -1

Next: CH02.GAME.01

### CH02.GAME.01 _(conditional)_
**Sun 30 Aug, 09:15** · Community Sports Ground · I, Will Avery, Tomas Rivas

_When:_ `fr_will >= 2`

Southmere sports ground. I kept the promise. Will plays badly in the first half and well in the second; coach Tomas Rivas shouts the least fair things in the most useful way. I watch the ball and see a lane.

_On entry:_ fr_will +1, s13 = "fore"


Next: CH02.ACCOUNT.01

### CH02.ACCOUNT.01
**Sun 30 Aug, 11:30** · Latch Lane print shop and upstairs home · I

The account I give. A man died and nobody has said so. What do I do with it?

- **a.** Go to the police and make a statement. _(structural)_ → ch02_report = "police" → **CH02.POLICE.01**
- **b.** Go through the venue: tell Desmond, and get the footage kept. _(structural)_ → ch02_report = "venue" → **CH02.VENUE.01**
- **c.** Tell Nolan. Only Nolan. Figure it out together first. _(structural)_ — if `ch01_saw != "help"` → ch02_report = "nolan" → **CH02.NOLAN.01**
- **d.** Talk it through with Nolan, who was there too, before we tell anyone. _(structural)_ — if `ch01_saw = "help"` → ch02_report = "nolan" → **CH02.NOLAN.01**

### CH02.POLICE.01 _(branch)_
**Sun 30 Aug, 12:30** · Municipal Hall · I

_When:_ `ch02_report = "police"`

The front desk. A statement taken seriously and then filed where nothing happens: no body, no missing-person report, a venue that says it saw nothing. But it's a public record with a date on it, and in a week it will cross the desk of a municipal investigator named Gareth Moss, who collects exactly this kind of nothing.

- **a.** Give them the phone video. _(investigative)_ — if `e01` → told_gareth = true, e01_src = "phone+police"
- **b.** Describe it. Keep the video to myself for now. _(expressive)_

Next: CH02.LANE.01

### CH02.VENUE.01 _(branch)_
**Sun 30 Aug, 12:30** · Switchyard · I, Desmond Aster, Nolan Voss

_When:_ `ch02_report = "venue"`

Desmond, hungover, genuinely shaken, and more worried about the licence review than anything else. He promises to keep the rear-camera footage. Nolan, who knows the system, quietly doesn't trust the promise.

- **a.** Ask Nolan to copy the camera file now, while Desmond's making coffee. _(investigative)_ — if `not(e02)` → e02 = true, e02_src = "nolan", st_nolan +1
- **b.** Trust Desmond with it. _(relational)_ → fr_desmond +1
  - _The file overwrites on its seven-day loop before he remembers (mundane cause). E02 survives only via Nolan, or later via the funeral-van records (CH08/CH16)._

Next: CH02.LANE.01

### CH02.NOLAN.01 _(branch)_
**Sun 30 Aug, 12:30** · Riverside Steps · I, Nolan Voss

_When:_ `ch02_report = "nolan"`

Riverside Steps, two coffees. Nolan listens the way he always does, turning the lid of his cup. He believes me before I've finished, which is somehow worse. We decide to look ourselves before anyone official makes it vanish.

_On entry:_ st_nolan +1

- **a.** "Can you still get into the camera system?" _(investigative)_ — if `not(e02)` → e02 = true, e02_src = "nolan"
- **b.** "There's something else. When he died, I felt it." Tell him about the knack. _(relational)_ → gift_nolan = true, st_nolan +1
- **c.** Keep the knack to myself. It's the only part that sounds insane. _(expressive)_

Next: CH02.LANE.01

### CH02.LANE.01
**Sun 30 Aug, 15:00** · Switchyard · I

The rear lane in daylight. Rinsed. A delivery van, a smoking kitchen porter, pigeons. The wall where he fell. Do I reach?

- **a.** Put my hand on the bricks and let it all the way up. _(investigative)_ → reached +1, strain +1, knack +3, echo_lane = true
  - _Echo: cold hands, white lilies, a man's calm voice counting down from ten, the smell of a clean van. Partial and misleading on its own (lilies = funeral; he'll think of flowers first). Points toward P30 (Rusk) once E02/E04 exist._
- **b.** Don't. Go home. Pretend I'm normal for one afternoon. _(expressive)_
- **c.** Ask around the all-ages crowd's group chats: someone always films from the fire escape. _(investigative)_ — if `not(e01)` → e01 = true, e01_src = "bystander", people +2
  - _A fifteen-year-old filmed eleven seconds of the lane for a joke and deleted it; her friend still has it. The sequence, not the face._

Next: CH02.HOME.02

### CH02.HOME.02
**Sun 30 Aug, 21:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Evening above the shop. Will's result (win or loss, depending on whether I was there; he tells it either way). Martin's invoice worry comes out sideways. In my room: the video on my phone, or the memory with no video; and a reply to write to Mum.

- **a.** Write Mum the truth, or near enough: something bad happened and I'm handling it. _(expressive)_ → letters_mum +1
- **b.** Write Mum about the show, and Will's game, and nothing else. _(expressive)_ → letters_mum +1

Next: CH03.RUN.01


## CH03 — Double Shift

_Recognise Quentin alive at the café; first direct contradiction._

### CH03.RUN.01
**Tue 1 Sept, 07:10** · Latch Lane print shop and upstairs home · I, Martin Avery

The Tuesday delivery run: menus for a café in Northline called Double Shift. Peter Laird's lanyard said Double Shift. I take the box from Martin before he can offer.

_On entry:_ s01 = "intro"


Next: CH03.CAFE.01

### CH03.CAFE.01
**Tue 1 Sept, 07:30** · Double Shift Café · I, Quentin Shaw, Peter Laird

Quentin behind the counter, grey under the brown and alive, making a flat white. The knack hits me in the doorway: the same doubled pulse, a rope running out of his chest and away through the wall to somewhere I can't see. He hasn't seen me yet.


Next: CH03.ANSEL.01

### CH03.ANSEL.01
**Tue 1 Sept, 07:40** · Double Shift Café · I, Ansel Marr, Peter Laird

While I stand there holding a box of menus, a young man in a formal collar asks Peter about a regular: 'Eamon Kerr, a courier. He comes in every Friday. He didn't.' Peter shrugs. The young man turns to me with terrible courtesy: 'Forgive me. Do you know him?' I don't. He leaves a card with only a name on it, Ansel Marr, and very strong opinions about the pastries.

- **a.** Take the card. Ask why a courier would go missing. _(relational)_ → st_ansel = 2, eamon_heard = true
- **b.** Take the card and say nothing. _(expressive)_ → st_ansel = 1, eamon_heard = true

Next: CH03.CAFE.02

### CH03.CAFE.02
**Tue 1 Sept, 07:45** · Double Shift Café · I, Quentin Shaw, Peter Laird

Quentin sees me. For one second his face does something I will think about for weeks. How do I do this?

- **a.** Go straight to the counter. Alone. _(structural)_ → ch03_way = "alone" → **CH03.ALONE.01**
- **b.** Text Nolan. Do this together. _(structural)_ — if `(ch02_report = "nolan") or (ch01_saw = "help")` → ch03_way = "together" → **CH03.TOGETHER.01**
- **c.** Order a coffee. Sit. Wait for the end of his shift. _(structural)_ → ch03_way = "wait" → **CH03.WAIT.01**

### CH03.ALONE.01 _(branch)_
**Tue 1 Sept, 07:50** · Double Shift Café · I, Quentin Shaw, Peter Laird

_When:_ `ch03_way = "alone"`

"You were in the lane." He shuts it down in front of Peter, loud and practical, and his fear comes off him like cold water. But he says 'you were there' before he can stop it, and his keys are on the counter: a small tin charm, scorched on one side. I see it clearly enough to draw it.

_On entry:_ st_quentin = 2, hurt_quentin = 1, e03 = true, e03_src = "sighting"


Next: CH03.NIGHT.01

### CH03.TOGETHER.01 _(branch)_
**Tue 1 Sept, 08:10** · Double Shift Café · I, Nolan Voss, Quentin Shaw, Peter Laird

_When:_ `ch03_way = "together"`

Nolan arrives with bed hair and orders the most complicated drink on the board to keep Quentin at the machine. He gets him talking about being 'off sick': a private clinic, very good, very quiet, they said he was lucky. Peter overhears and adds that the clinic sent a car. Later Quentin will feel ganged up on; right now, it's a lead.

_On entry:_ st_quentin = 2, st_nolan +1, clinic_lead = true


Next: CH03.NIGHT.01

### CH03.WAIT.01 _(branch)_
**Tue 1 Sept, 14:05** · Northline Station · I, Quentin Shaw

_When:_ `ch03_way = "wait"`

Six hours and four coffees. Martin's other deliveries go out late (he'll mention it). At the bus stop outside Northline Station, Quentin lets me walk with him. He remembers dying. He was told to keep quiet for his own safety. He shows me the token on his keys, scorched on one side, and lets me photograph it.

_On entry:_ st_quentin = 3, e03 = true, e03_src = "photo", fr_martin -1


Next: CH03.NIGHT.01

### CH03.NIGHT.01
**Tue 1 Sept, 19:30** · Latch Lane print shop and upstairs home · I

The first direct contradiction, stated plainly to myself: I watched him die. He made my coffee. If Quentin gave me his number (at the bus stop, or through Nolan), a text arrives from it: 'my brother wants to meet you. he's not a people person. sorry in advance.' Tonight I can go back to the lane, or go where the text says.


Next: CH04.CHOICE.01


## CH04 — People Who Know

_The supernatural premise; Adrian/Reuben (Mercy House) and Gideon/Dominic (the Regent); competing explanations._

### CH04.CHOICE.01
**Tue 1 Sept, 20:00** · Latch Lane print shop and upstairs home · I

Tuesday night. I can't sit still.

- **a.** Go back to the lane. Whatever happened there left something. _(structural)_ → ch04_first = "mercy" → **CH04.MERCY.01**
- **b.** Answer Quentin's text. Meet the brother. _(structural)_ — if `(ch03_way = "wait") or (ch03_way = "together")` → ch04_first = "regent" → **CH04.REGENT.01**
- **c.** Stay in. Try to sleep. (Someone rings the shop bell at eleven.) _(structural)_ — if `ch03_way = "alone"` → ch04_first = "regent" → **CH04.REGENT.01**

### CH04.MERCY.01 _(branch)_
**Tue 1 Sept, 22:30** · Switchyard · I, Adrian Keene, Reuben Pike

_When:_ `ch04_first = "mercy"`

Two men in the rear lane with a lamp that burns a colour lamps don't burn. Adrian, compact and precise, telling me it's a closed scene in a voice that expects to be obeyed. Reuben, big and quiet, looking at my eyes the way paramedics do. They're reading a trace of what flared here on Saturday.

_On entry:_ st_adrian = 1, st_reuben = 1, know_super = true

- **a.** Tell them exactly what I saw. All of it except the part I felt. _(relational)_ → st_reuben +1
- **b.** Tell them what I saw, and that I felt him die, and felt something catch him. _(relational)_ → gift_mercy = true, gift_adrian = true, gift_reuben = true, st_reuben +1
- **c.** Say I was looking for a lost earring. Watch Adrian not believe me. _(expressive)_ → hurt_adrian = 1
- **d.** Show them the brass button I tore off his sleeve. _(investigative)_ — if `cuff_button` → button_shown = true
  - _Adrian goes white: Mercy House issue, an old pattern. He suspects his own house, and me. Resolved when Damian is identified: a former warden in an old jacket._

Next: CH04.MERCY.02

### CH04.MERCY.02 _(branch)_
**Tue 1 Sept, 23:40** · Mercy House · I, Adrian Keene, Reuben Pike, Victor Keene, Patrick Orrell

_When:_ `ch04_first = "mercy"`

Mercy House: a former hospital with a kitchen that never closes. Victor Keene holding court with a braced arm and a better version of every story. Commander Orrell passing through, listening without interrupting. The premise, over toast at midnight: wardens, the Regent's vampires, Eastbank's families, spell-workers, the Marches. Adrian wants to put me in a car home and a file drawer. How do I take it?

_On entry:_ know_wardens = true, know_vampires = true, know_wolves = true, know_spell = true, know_marches = true, fr_victor = 1

- **a.** Disagree with Adrian, to his face, and give my reasons. Calmly. Honestly. _(relational)_ → b_adrian_disagree = true, st_adrian = 2, nerve +2
- **b.** Let him handle it. He clearly knows what he's doing. _(relational)_ → st_adrian = 2
- **c.** Ask Reuben what he actually thinks happened to Quentin. _(investigative)_ → st_reuben +1, people +2

Next: CH04.MERCY.03

### CH04.MERCY.03 _(branch)_
**Wed 2 Sept, 21:30** · The Regent · I, Adrian Keene, Reuben Pike, Gideon Shaw, Dominic Bell, Lucien Arnaud

_When:_ `ch04_first = "mercy"`

Wednesday night. Mercy House's working theory is a vampire turning gone wrong, and Quentin's brother is a vampire, so Adrian and Reuben go to the Regent to ask. I go too. An old cinema with apartments where the circle seats were. Lucien Arnaud sets the rules for the conversation. Gideon Shaw delivers his fear like an instruction, and the knack reads it as guilt. Dominic Bell, who used to play Switchyard, defuses the room with a joke about the popcorn machine.

_On entry:_ st_dominic = 1, fr_gideon = 1, fr_lucien = 1, know_dominic_vamp = true, misread_gideon = true

- **a.** "You stopped playing. We all wondered." Talk to Dominic like it's a year ago. _(relational)_ → b_dominic_normal = true, st_dominic = 2
- **b.** Watch Gideon. The knack says he's guilty of something. _(investigative)_ → suspect_gideon = true

Next: CH04.DINER.01

### CH04.REGENT.01 _(branch)_
**Tue 1 Sept, 23:00** · Latch Lane print shop and upstairs home · I, Gideon Shaw, Dominic Bell

_When:_ `ch04_first = "regent"`

On the print shop step: Gideon Shaw, who says 'You were in the lane. Come with me' like an order, and whose fear the knack reads as guilt. Behind him, with his hands in the pockets of an old jumper, Dominic Bell, who used to play Switchyard before he vanished last summer. Dominic says, 'He means please.'

_On entry:_ st_dominic = 1, fr_gideon = 1, misread_gideon = true

- **a.** Go with them. _(relational)_ → nerve +2
- **b.** "Say it here. On the step. Where Martin can hear me shout." _(expressive)_ → people +1

Next: CH04.REGENT.02

### CH04.REGENT.02 _(branch)_
**Wed 2 Sept, 00:30** · The Regent · I, Gideon Shaw, Dominic Bell, Lucien Arnaud, Rafi Bensaïd

_When:_ `ch04_first = "regent"`

The Regent: an old cinema turned home. A film running for nobody in the auditorium. Rafi in scrubs, eating cereal before a night shift. Lucien Arnaud, very old and very courteous. The premise, from the vampires' side: turning, hours, blood by arrangement, the other communities, the wardens who watch them. Gideon's real worry: his brother came back wrong, and it isn't vampirism. He'd know.

_On entry:_ know_super = true, know_vampires = true, know_wardens = true, know_wolves = true, know_spell = true, know_marches = true, know_dominic_vamp = true, fr_lucien = 1, fr_rafi = 1

- **a.** "You stopped playing. We all wondered." Talk to Dominic like it's a year ago. _(relational)_ → b_dominic_normal = true, st_dominic = 2
- **b.** Tell Dominic about the knack. He's the only person here who looks as out of place as I feel. _(relational)_ → gift_dominic = true, st_dominic +1
- **c.** Press Gideon. The knack says he's guilty. _(investigative)_ → suspect_gideon = true, fr_gideon -1

Next: CH04.REGENT.03

### CH04.REGENT.03 _(branch)_
**Wed 2 Sept, 22:00** · The Regent · I, Gideon Shaw, Adrian Keene, Reuben Pike, Lucien Arnaud

_When:_ `ch04_first = "regent"`

Wednesday night the wardens come to the Regent: Adrian, all procedure, and Reuben, who looks at Quentin's brother with more sympathy than his partner. Mercy House's theory is a turning gone wrong. Lucien sets the rules. Adrian wants my statement on the record; he wants the witness out of the way.

_On entry:_ st_adrian = 1, st_reuben = 1

- **a.** Disagree with Adrian, to his face, and give my reasons. _(relational)_ → b_adrian_disagree = true, st_adrian = 2, nerve +2
- **b.** Give the statement his way. He's not wrong that I'm out of my depth. _(relational)_ → st_adrian = 2
- **c.** Tell Reuben what I felt when Quentin died. _(relational)_ → gift_reuben = true, gift_mercy = true, st_reuben = 2

Next: CH04.DINER.01

### CH04.DINER.01
**Thu 3 Sept, 22:15** · Truss Road Diner · I, Adrian Keene, Reuben Pike, Gideon Shaw, Dominic Bell, Quentin Shaw

Thursday, the Truss Road Diner: neutral ground because it belongs to a neighbourhood, not a species. Quentin comes after his shift and sits with his back to the wall. The explanations on the table: a turning gone wrong (Mercy House); something else entirely (Gideon); vital signs that aren't a vampire's (Reuben). The only physical thing any of us has is the scorched tin charm on Quentin's keys. We need to know what's holding him up, and there are two places that can tell us.

- **a.** "It's not a turning. Something's holding him from outside." _(expressive)_ → theory = "outside"
- **b.** "I don't know. I just know it isn't what anyone's said." _(expressive)_ → theory = "unknown"
- **c.** Ask Quentin what he wants to happen, before anyone decides for him. _(relational)_ → b_quentin_consent = true, st_quentin +1

Next: CH05.CHOICE.01


## CH05 — What the Body Keeps

_External support becomes a credible hypothesis: hospital route or restoration route._

### CH05.CHOICE.01
**Fri 4 Sept, 09:00** · Latch Lane print shop and upstairs home · I

Friday. Two offers from the diner: Reuben can get Quentin into the hospital lab after Rafi's shift starts, quietly; or Dominic knows a restorer on University Hill who works with protective objects, and whose son is 'unbearably good at it'.

- **a.** The hospital. Measurements. Something on paper. _(structural)_ → ch05_route = "hospital" → **CH05.HOSPITAL.01**
- **b.** The restorer. The charm is the only thing we can hold. _(structural)_ → ch05_route = "restore" → **CH05.RESTORE.01**

### CH05.HOSPITAL.01 _(branch)_
**Fri 4 Sept, 21:00** · Calder General · I, Reuben Pike, Rafi Bensaïd, Ilyas Qureshi, Nabil Haddad, Quentin Shaw

_When:_ `ch05_route = "hospital"`

Calder General's lab after hours. Nabil on reception, who notices bluffing about procedure. Reuben, Rafi, and Ilyas Qureshi, a lab scientist who separates observation from explanation and gets visibly frustrated when others don't. Quentin agrees to the tests on his own terms. The finding: he is neither ordinarily healed nor newly turned. Something outside him is supplying him. It can't say who or where.

_On entry:_ e05 = true, e05_src = "hospital", st_reuben +1, fr_rafi +1, fr_ilyas = 1, fr_nabil = 1

- **a.** Explain to Reuben what I see when I look at Quentin: the rope. _(relational)_ → gift_reuben = true, gift_mercy = true, b_reuben_explain = true, st_reuben +1
- **b.** Ask Ilyas to write up his own account, independently, in his own words. _(investigative)_ → e05_c = true, fr_ilyas +1
- **c.** Focus on Quentin: what has he been told, and who gets to see these results? _(relational)_ → b_quentin_consent = true, st_quentin +1

Next: CH05.HOSPITAL.02

### CH05.HOSPITAL.02 _(branch)_
**Fri 4 Sept, 23:30** · Calder General · I, Quentin Shaw

_When:_ `ch05_route = "hospital"`

The hospital car park, level three, the city lit orange below. Quentin smokes a cigarette he doesn't want. He wants to qualify for emergency-service work. He wants to not be a case. He asks me something practical instead of anything that matters, and I answer it.

- **a.** Tell him he doesn't owe anyone his story. Including me. _(relational)_ → st_quentin +1
- **b.** Ask him who gave him the charm. _(investigative)_ → course_lead = true
  - _A first-aid course at Southmere Recreation Centre in August; the instructor gave everyone a little 'lucky' token. He can't remember the instructor's name; it was on a form._

Next: CH05.NIGHT.01

### CH05.RESTORE.01 _(branch)_
**Fri 4 Sept, 14:30** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor, Isaac Okafor, Quentin Shaw

_When:_ `ch05_route = "restore"`

Okafor Restoration: a front room for clients, workrooms that smell of size glue and ozone. Chukwudi explains patiently and precisely. Ellis, his son, is elegant, quick and much better at making the visit easy than anyone should have to be. Isaac interrupts with a project. Dominic phoned ahead last night; he can't come in daylight, and he hates that he can't. The charm is a protective token of a known type, modified by someone skilled; and slow testing, over hours, shows a tie running out of Quentin that Chukwudi can measure and I can see.

_On entry:_ st_ellis = 2, b_ellis_meet = true, fr_chukwudi = 1, fr_isaac = 1, e03 = true, e03_src = "ellis", e05 = true, e05_src = "restore"

- **a.** Tell them I can see the tie. Watch Ellis stop performing for a second. _(relational)_ → gift_ellis = true
- **b.** Ask Ellis how he'd have done the modification, if he were the one doing it. _(investigative)_ → e03_c = true, people +2
- **c.** Keep out of the way. Watch how they work. _(expressive)_ → craft +2

Next: CH05.RESTORE.02

### CH05.RESTORE.02 _(branch)_
**Fri 4 Sept, 20:15** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor

_When:_ `ch05_route = "restore"`

The family kitchen upstairs, much less elegant: Ellis irritable about the washing-up, arguing ridiculously with Isaac about a toaster. Chukwudi shows me the shop's error book: every mistake the family has made, written down honestly, including one of his own from years ago. 'A record should preserve what went wrong.' (Seeds E08 and E10.)

_On entry:_ error_book = true, fr_chukwudi +1

- **a.** Help Ellis with the washing-up and let him complain. _(relational)_ → b_ellis_offstage = true, st_ellis = 3
- **b.** Ask Chukwudi about the mistake in the book. _(relational)_ → fr_chukwudi +1

Next: CH05.NIGHT.01

### CH05.NIGHT.01
**Fri 4 Sept, 23:55** · Latch Lane print shop and upstairs home · I

Home. The knack costs me for the day: a headache like a thumb behind the eye. External support is now a hypothesis with a number or a measurement attached. Something is holding Quentin up from outside. What? Who pays for it? A text from Nolan, who has noticed I'm never around.

- **a.** Text Nolan back properly. Make a plan for the weekend and keep it. _(relational)_ → b_nolan_kept = true
- **b.** "Sorry. Busy week." He'll understand. (He'll understand less each time.) _(relational)_ → hurt_nolan +1

Next: CH06.WEEKS.01


## CH06 — Another Man Missing

_Ansel connects Eamon's absence to a specific journey. Term begins; the city moves into autumn._

### CH06.WEEKS.01
**Mon 14 Sept, 08:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Ten days go by the way days do. Will's final year starts; the buses up University Hill fill with first-years; the leaves think about turning. Quentin texts twice, about nothing. I keep reaching with the knack at things that don't need it: a coat on the bus, Martin's reading glasses. Mum's second batch of emails arrives: a polar bear at the dump, a man who walked in with an axe in his boot and asked for a plaster.

> **Letter.** Joanne: 'You sound tired in your last one. Tired or sad? I can't tell from here. Tell Martin I said to feed you and to stop printing things for free.'

- **a.** Make it to Nolan's for the thing I promised. Actually go. _(relational)_ — if `not(b_nolan_kept)` → b_nolan_kept = true
- **b.** Help Martin chase the overdue invoice. Two voices on the phone are harder to ignore. _(relational)_ → fr_martin +1, people +2, s01 = "fore"
- **c.** Go running every morning. It turns the knack down. _(expressive)_ → knack +2, nerve +1

Next: CH06.GARETH.01

### CH06.GARETH.01 _(conditional)_
**Tue 15 Sept, 16:30** · Latch Lane print shop and upstairs home · I, Gareth Moss, Martin Avery

_When:_ `ch02_report = "police"`

A municipal investigator, Gareth Moss, in a rain jacket in the print shop, collecting a pattern: adults who stop turning up, property used for things it isn't licensed for. My statement is in his file. His questions are friendly until he notices I'm avoiding one, and then they repeat.

_On entry:_ fr_gareth = 1

- **a.** Tell him everything that would survive in a courtroom. Nothing that wouldn't. _(investigative)_ → told_gareth = true, fr_gareth +1
- **b.** Be polite, and useless. He writes that down too. _(expressive)_ → gareth_wary = true

Next: CH06.ANSEL.01

### CH06.ANSEL.01
**Wed 16 Sept, 18:00** · Northline Station · I, Ansel Marr

I ring the number on Ansel Marr's card, or he finds me, because he's been asking everyone at Northline for two weeks. Eamon Kerr, a courier, was due in the Marches on the night of 28 August by a crossing he shouldn't have been using, and never arrived. Ansel's father would prefer no fuss: there's a trade dispute, and a missing courier who crossed unofficially is embarrassing. Ansel dresses too formally for a train station and apologises for it.

_On entry:_ know_marches = true, eamon_heard = true

- **a.** "I'll help. Where do we start?" _(relational)_ → b_ansel_help = true, st_ansel = 2
- **b.** "Why me?" Make him say it. _(relational)_ → b_ansel_help = true, st_ansel = 2, people +1
  - _Because I'm the only person he's met in Calder this month who noticed he was frightened._

Next: CH06.CHOICE.01

### CH06.CHOICE.01
**Wed 16 Sept, 19:00** · Northline Station · I, Ansel Marr

Two ways to find out which crossing Eamon used.

- **a.** Lawfully: Mercy House keeps the crossing-keepers' records. Ask Adrian. _(structural)_ — if `know_wardens` → ch06_way = "lawful" → **CH06.LAWFUL.01**
- **b.** People: somebody who works nights at Northline saw him. Ask around the depot. _(structural)_ → ch06_way = "witness" → **CH06.WITNESS.01**

### CH06.LAWFUL.01 _(branch)_
**Thu 17 Sept, 14:00** · Iron Footbridge · I, Adrian Keene, Florian Adebayo, Harlan Greaves, Ansel Marr

_When:_ `ch06_way = "lawful"`

The keepers' office in the Iron Footbridge's maintenance chamber, with Adrian's authority and Florian Adebayo's archive gloves. The official ledger shows no crossing by Eamon Kerr on any date. Harlan Greaves, the keeper, is friendly and completely unhelpful, and the knack reads him as uneasy under the charm. Now Harlan knows someone is asking.

_On entry:_ e06 = true, e06_src = "records", harlan_aware = true, fr_florian = 1, fr_harlan = 1

- **a.** Notice the gap in the ledger's night entries that Adrian's procedure skipped, and say so. _(investigative)_ — if `st_adrian >= 2` → b_adrian_procedure = true, st_adrian = 3, people +2
- **b.** Ask Florian what the archive holds that the ledger doesn't. _(investigative)_ → fr_florian +1

Next: CH06.LOCKER.01

### CH06.WITNESS.01 _(branch)_
**Thu 17 Sept, 23:30** · Night Bus Depot · I, Owen Price, Pavel Kolar, Micah Serrano, Ansel Marr

_When:_ `ch06_way = "witness"`

The Night Bus Depot, where the city's other hours happen. Owen Price, driver and organiser, remembers Eamon on the 00:50 out to the old Northwood rail spur on Friday 28 August, with a quiet man in a good coat who paid cash for both. Pavel Kolar says the spur's been disused for years. Micah's there on a wiring job, and gives me a lift home in a van that smells of solder, as if it was always going to.

_On entry:_ e06 = true, e06_src = "witness", fr_owen = 1, fr_pavel = 1, b_micah_seat = true, st_micah = 2, good_coat = true

- **a.** Ask Owen what else he sees on the night routes. He's been waiting for someone to ask. _(relational)_ → fr_owen +1, s10 = "intro"
- **b.** In Micah's van, ask what 'rough night' meant, back at Switchyard. _(relational)_ → micah_deflects = true
  - _He laughs it off with a story about a neighbour's dog. He doesn't tell me yet._

Next: CH06.LOCKER.01

### CH06.LOCKER.01
**Fri 18 Sept, 10:00** · Northline Station · I, Ansel Marr

Eamon's locker at Northline Station, opened with a spare key from his flatmate. His route card: Northwood crossing, the Glass Road, Bracken Court. A small brass token of passage, stamped with a lease mark. His good gloves. Do I reach?

- **a.** Take off my own glove and touch his. _(investigative)_ → reached +1, strain +1, knack +3, same_voice = true
  - _Echo: a bus at night, cold, then a calm, kind voice saying 'this won't hurt, I'm sorry', and it's the same voice from the lane. A hunch, not evidence; I'll need a second route to prove it._
- **b.** Leave it. Photograph the route card and the lease mark. _(investigative)_ → lease_mark = true

Next: CH06.TOKEN.01

### CH06.TOKEN.01 _(conditional)_
**Sat 19 Sept, 11:00** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor, Quentin Shaw

_When:_ `ch05_route = "hospital"`

The corroboration for the route I didn't take: Quentin brings his charm to Okafor Restoration. Chukwudi identifies a known kind of protective work, modified by skilled hands. His son Ellis, elegant and quick, sees in five minutes what the modification was for: to hold on to something at the moment it would otherwise let go.

_On entry:_ st_ellis = 2, b_ellis_meet = true, fr_chukwudi = 1, e03 = true, e03_src = "ellis"

- **a.** Tell Ellis I can see what the charm is holding. _(relational)_ → gift_ellis = true
- **b.** Let Quentin ask the questions. It's his charm. _(relational)_ → st_quentin +1

Next: CH06.END.01

### CH06.END.01
**Sat 19 Sept, 21:00** · Riverside Steps · I, Ansel Marr

Riverside Steps with Ansel and a paper tray of chips, about which he has developed strong, inexplicable opinions. What we have: Eamon vanished on 28 August on his way to Northwood. Quentin died on the 30th and didn't stay dead. Something outside Quentin is holding him up. Neither of us says the next sentence yet.

- **a.** Say it: "What if whatever's holding Quentin up is Eamon?" _(investigative)_ → suspect_donor = true
- **b.** Tell Ansel about the knack. He looks like a man who understands keeping a thing quiet. _(relational)_ → gift_ansel = true
- **c.** Eat the chips. Let him talk about home. _(relational)_ → know_marches = true, people +1

Next: CH07.HOME.01


## CH07 — An Evening Already Promised

_Ordinary life and one substantial commitment (Nolan's birthday, the Serrano table, or the university crowd). Hugo established before he disappears._

### CH07.HOME.01
**Fri 2 Oct, 12:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Yesterday the bank called in the print shop's overdraft. Martin is doing sums on the back of a proof sheet and pretending he isn't. Will, who is seventeen and not stupid, has noticed. What do I do?

- **a.** Put my savings on the counter. It's not much. It's not nothing. _(relational)_ → s01 = "fore", fr_martin +1, savings_given = true
- **b.** Offer to take on more shop shifts, and mean the hours. _(relational)_ → s01 = "fore", fr_martin +1, shop_hours = true
- **c.** Tell Martin to ask his biggest client for the money in person, and go with him. _(relational)_ → s01 = "fore", nerve +2, people +2

Next: CH07.CHOICE.01

### CH07.CHOICE.01
**Fri 2 Oct, 17:00** · Latch Lane print shop and upstairs home · I

Tonight: Nolan's twentieth, promised three weeks ago. And two other doors open the same night.

- **a.** Nolan's party. I promised. _(structural)_ → ch07_evening = "nolan" → **CH07.NOLAN.01**
- **b.** Micah's family dinner in Eastbank. He asked twice. _(structural)_ — if `st_micah >= 1` → ch07_evening = "serrano" → **CH07.SERRANO.01**
- **c.** The open studio night on University Hill. Ellis said I might like it. _(structural)_ — if `st_ellis >= 2` → ch07_evening = "uni" → **CH07.UNI.01**

### CH07.NOLAN.01 _(branch)_
**Fri 2 Oct, 21:00** · Laird's Flatshare · I, Nolan Voss, Peter Laird, Owen Price, Milo Finch, Hugo Naranjo

_When:_ `ch07_evening = "nolan"`

Laird's flatshare: three bedrooms, one bathroom, twenty people. Peter hosting as if it's a job interview; Owen quietly protecting the good glasses; Milo filming the cake. Hugo Naranjo, a depot mechanic from Owen's rota, is arguing cheerfully about a hinge he fixed wrong and his application for a permanent post. Nolan is so pleased I came that he pretends not to be.

_On entry:_ hugo_met = true, fr_hugo = 1, fr_peter = 1, fr_owen +1, fr_milo = 1, b_nolan_kept = true

- **a.** Talk to Hugo. He's the only person here happier than Nolan. _(relational)_ → fr_hugo +1
- **b.** Stick with Nolan. It's his night. _(relational)_ → st_nolan +1

Next: CH07.NOLAN.02

### CH07.NOLAN.02 _(branch)_
**Fri 2 Oct, 23:00** · Laird's Flatshare · I, Nolan Voss, Dominic Bell, Milo Finch

_When:_ `ch07_evening = "nolan"`

Dominic arrives late, after sunset of course, because Milo asked him to. Someone hands him a guitar. He hasn't played for anyone in a year. The room goes quiet in the good way.

- **a.** Sing the harmony. Badly. Make it easy for him to keep going. _(relational)_ — if `st_dominic >= 2` → b_dominic_music = true, st_dominic = 3, s05 = "intro"
- **b.** Just listen. _(expressive)_ → s05 = "intro"

Next: CH07.NOLAN.03

### CH07.NOLAN.03 _(branch)_
**Sat 3 Oct, 01:45** · Laird's Flatshare · I, Nolan Voss

_When:_ `ch07_evening = "nolan"`

The balcony, two chairs, the depot lights. Nolan's course application is open on his phone. He bumps my shoulder the way he's done since we were sixteen, and this time he doesn't take it back. The knack can't tell me a thing about what he means. It never can, with me.

- **a.** Let it mean something. Stay against his shoulder. _(relational)_ — if `hurt_nolan < 2` → b_nolan_birthday = true, st_nolan = 4, s02 = "fore"
- **b.** Tell him to send the application. Tonight. He's good enough. _(relational)_ → s02 = "fore", nolan_applied = true
- **c.** Make a joke. Go back inside before it becomes anything. _(expressive)_ → s02 = "fore"

Next: CH07.MORNING.01

### CH07.SERRANO.01 _(branch)_
**Fri 2 Oct, 19:00** · Serrano Yard · I, Micah Serrano, Ernesto Serrano, Leandro Serrano, Tomas Rivas, Wesley Dent, Pavel Kolar, Hugo Naranjo

_When:_ `ch07_evening = "serrano"`

Serrano Yard: the workshop below, the family above, a table built out of two tables. Ernesto at the head, all concrete proposals; Leandro making jokes; cousin Tomas favouring his left shoulder; Wesley, newly arrived and prickly, hearing pity where there isn't any. Pavel brings Hugo, whom he's recommended for depot work, to borrow a tool, and Ernesto makes him stay and eat. Micah has saved me the seat beside him without saying so.

_On entry:_ hugo_met = true, fr_hugo = 1, fr_ernesto = 1, fr_leandro = 1, fr_wesley = 1, fr_pavel +1, b_micah_seat = true, st_micah +1, s04 = "intro", s08 = "intro"

- **a.** Talk to Wesley like he isn't a project. _(relational)_ → fr_wesley +1
- **b.** Ask Hugo about the depot job. He lights up. _(relational)_ → fr_hugo +1

Next: CH07.SERRANO.02

### CH07.SERRANO.02 _(branch)_
**Fri 2 Oct, 21:30** · Eastbank Boxing Club · I, Micah Serrano, Leandro Serrano, Tomas Rivas

_When:_ `ch07_evening = "serrano"`

The Eastbank Boxing Club after hours: a roof that leaks, a youth program on a shoestring, Leandro's grant application pinned to the wall. Micah mentions, too casually, an apprenticeship offer from a firm across the river. His family assumes he'll say no. So does he, out loud.

- **a.** Ask him what he wants. Not the family. Him. _(relational)_ → st_micah +1, s04 = "fore"
- **b.** Spar with Tomas. Notice the shoulder. Say nothing, yet. _(investigative)_ → nerve +2, tomas_injury = true

Next: CH07.SERRANO.03

### CH07.SERRANO.03 _(branch)_
**Sat 3 Oct, 00:30** · Eastbank Allotments · I, Micah Serrano

_When:_ `ch07_evening = "serrano"`

The allotments at half past midnight, because Micah wanted to show me the family's patch and then didn't want to go home. He tells me what 'rough night' meant. He watches my face while he says it, ready to make it a joke.

_On entry:_ b_micah_wolf = true, know_micah_wolf = true, st_micah = 3

- **a.** "Okay." And stay, and ask the ordinary questions. _(relational)_ → people +1
- **b.** Tell him about the knack. Trade a secret for a secret. _(relational)_ → gift_micah = true

Next: CH07.LATE.CHOICE

### CH07.UNI.01 _(branch)_
**Fri 2 Oct, 19:30** · University arts buildings · I, Ellis Okafor, Felix Brecht, Caspar Neri, Basil Duret

_When:_ `ch07_evening = "uni"`

Open studio night in the arts buildings: plastic wine, loud opinions, Basil Duret lecturing a first-year about 'the material city'. Ellis, performing ease beautifully. A student filmmaker, Felix Brecht, filming everyone and seeing more than he lets on. Caspar Neri doing the lighting for free and complaining about it.

_On entry:_ fr_felix = 1, fr_caspar = 1, s03 = "intro", s12 = "intro"

- **a.** Let Ellis give me the tour and watch how he does it. _(relational)_ → st_ellis +1
- **b.** Talk to Felix about what he's filming. He's funny and nervous. _(relational)_ → fr_felix +1

Next: CH07.UNI.02

### CH07.UNI.02 _(branch)_
**Fri 2 Oct, 22:30** · Bellweather Court · I, Ellis Okafor, Nabil Haddad, Felix Brecht

_When:_ `ch07_evening = "uni"`

After-party in Bellweather Court's shared kitchen: Nabil cooking for twelve on a budget for two, Felix filming the pasta. Ellis mentions a placement in another city he hasn't told his father about.

_On entry:_ fr_nabil +1, s03 = "fore"


Next: CH07.UNI.03

### CH07.UNI.03 _(branch)_
**Sat 3 Oct, 00:45** · Observatory Hill Park · I, Ellis Okafor

_When:_ `ch07_evening = "uni"`

Observatory Hill Park: the little teaching dome, the city below. Ellis stops performing. He's irritable about his shoes and funny about Basil, and he asks me, for once, what I think.

- **a.** Tell him. And ask him the same back. _(relational)_ — if `not(b_ellis_offstage)` → b_ellis_offstage = true, st_ellis = 3
- **b.** Tell him about the knack, up here where nobody can hear. _(relational)_ → gift_ellis = true
- **c.** Talk about the placement. He should take it. _(relational)_ → s03 = "fore"

Next: CH07.BUS.01

### CH07.BUS.01 _(branch)_
**Sat 3 Oct, 02:10** · Night Bus Depot · I, Hugo Naranjo

_When:_ `ch07_evening = "uni"`

The night bus down the Hill. One other passenger: Hugo Naranjo in a depot hi-vis vest, on his way to a night shift, who talks the whole way about a permanent job he's applying for and a repair he's proud of. He gets off at the depot and waves.

_On entry:_ hugo_met = true, fr_hugo = 1


Next: CH07.LATE.CHOICE

### CH07.LATE.CHOICE _(conditional)_
**Sat 3 Oct, 02:15** · Night Bus Depot · I

_When:_ `ch07_evening != "nolan"`

It's after two. Nolan's party will still be going, in the way Nolan's parties do.

- **a.** Go. Late is better than never. Probably. _(relational)_ → ch07_late = true → **CH07.LATE.01**
- **b.** Text him happy birthday and go home. _(relational)_ → hurt_nolan +1 → **CH07.MORNING.01**

Next: CH07.MORNING.01

### CH07.LATE.01 _(branch)_
**Sat 3 Oct, 02:50** · Laird's Flatshare · I, Nolan Voss

_When:_ `ch07_late`

Nolan on the stairs with a paper plate of cake he saved for me. He's glad and he's hurt and he's too tired to pick one.

- **a.** Apologise without an excuse. _(relational)_ → people +1
- **b.** Explain where I was. Some of it. _(relational)_ → hurt_nolan +1

Next: CH07.MORNING.01

### CH07.MORNING.01
**Sat 3 Oct, 10:30** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Saturday morning above the shop: toast, a headache, Will's opinion of my face. Whatever I chose, I chose it; the night will be remembered by the people it happened to.


Next: CH08.NEWS.01


## CH08 — The Second Return

_Silas's case proves repetition; Hugo's absence gives it a human face._

### CH08.NEWS.01
**Thu 15 Oct, 06:30** · Lyle's Bakery · I, Otis Lyle, Silas Fenwick

Delivering Otis Lyle's new price boards at dawn, because Martin printed them. Lyle's Bakery smells of butter and burnt sugar. Silas Fenwick, the apprentice, is at the ovens, and the knack goes off like a struck bell: a second rope, running out of him and away. Otis says Silas was off two days 'on some paid course' and came back wrong: quiet, cold, forgetting things he's done a thousand times.

- **a.** Stay. Talk to Silas after the morning rush, with Otis there. _(structural)_ → ch08_way = "bakery" → **CH08.BAKERY.01**
- **b.** Get him measured. Call Reuben: something on paper before anyone argues. _(structural)_ — if `st_reuben >= 2` → ch08_way = "hospital" → **CH08.HOSPITAL.01**
- **c.** Get him measured. Call the hospital lab, and ask for Ilyas. _(structural)_ — if `st_reuben < 2` → ch08_way = "hospital" → **CH08.HOSPITAL.01**

### CH08.BAKERY.01 _(branch)_
**Thu 15 Oct, 15:00** · Lyle's Bakery · I, Otis Lyle, Silas Fenwick, Micah Serrano

_When:_ `ch08_way = "bakery"`

After closing, the long table in the back. Micah is here too, fixing the proving cabinet he fixed last month, and pulls out a chair for me without looking up. Silas tells a false story (a flu, a bad weekend) to protect his job and his privacy, and the knack reads fear, not a lie. Otis found letters in the bin: a 'supervised paid trial', good money, a confidentiality clause.

_On entry:_ b_micah_seat = true, fr_otis = 1, fr_silas = 1

- **a.** Don't push. Tell Silas what happened to Quentin, and let him decide. _(relational)_ → fr_silas +1, e09 = true, e09_src = "silas", silas_trusts = true
- **b.** Ask Otis for the letters, with Silas in the room. _(investigative)_ → e09 = true, e09_src = "otis", fr_silas -1
- **c.** Protect him first: ask Reuben to keep an eye on the bakery. _(relational)_ → silas_protected = true, fr_otis +1

Next: CH08.SILAS.02

### CH08.HOSPITAL.01 _(branch)_
**Thu 15 Oct, 22:00** · Calder General · I, Reuben Pike, Ilyas Qureshi, Rafi Bensaïd, Nabil Haddad, Silas Fenwick

_When:_ `ch08_way = "hospital"`

Silas agrees to come in after his shift, frightened and polite. Nabil gets him through reception without a file. Ilyas measures the same impossible thing he measured in Quentin, or sees it for the first time, and writes it down in his own words. It's not a one-off. It's a method.

_On entry:_ e05 = true, e05_c = true, fr_silas = 1, fr_ilyas +1, repeated = true

- **a.** Explain to Reuben what I see: the rope, the second one. _(relational)_ — if `not(b_reuben_explain)` → b_reuben_explain = true, gift_reuben = true, st_reuben = 3
- **b.** Ask Silas, gently, where the trial was held. _(investigative)_ → e09 = true, e09_src = "silas", fr_silas +1

Next: CH08.SILAS.02

### CH08.SILAS.02
**Fri 16 Oct, 19:30** · Truss Road Diner · I, Quentin Shaw, Silas Fenwick

Truss Road Diner. Quentin and Silas at the same table, two men who died and are pretending to be fine. Quentin doesn't wait for me to handle it: he tells Silas what he knows, what he was told, what he's afraid of, in the practical way he says everything. Silas cries once, briefly, into a napkin, and then asks what they do now.

_On entry:_ repeated = true

- **a.** Let Quentin lead. He's better at this than me. _(relational)_ — if `st_quentin >= 3` → b_quentin_acts = true, st_quentin = 4
- **b.** Make a plan with both of them: nobody goes to a 'follow-up' alone. _(investigative)_ → buddy_plan = true

Next: CH08.HUGO.01

### CH08.HUGO.01
**Sat 17 Oct, 11:00** · Night Bus Depot · I, Owen Price, Pavel Kolar, Peter Laird

Saturday at the depot. Hugo Naranjo hasn't been seen since he clocked off on Monday morning. He missed his interview for the permanent post, the thing he talked about all night. Owen's organising a search; Pavel keeps checking his phone; Peter covered his shift once and feels responsible. Hugo's jacket is still on its hook.

_On entry:_ hugo_missing = true

- **a.** Touch the jacket. Reach. _(investigative)_ → reached +1, strain +1, knack +2, same_voice2 = true
  - _Cold, a van, the calm voice again. A hunch confirmed for me; evidence for nobody else._
- **b.** Call Gareth Moss. A missing adult is his whole job. _(investigative)_ — if `fr_gareth >= 1` → told_gareth = true, fr_gareth +1, gareth_hugo = true
- **c.** Help Owen with the search posters. Martin will print them for free. _(relational)_ → fr_owen +1

Next: CH08.END.01

### CH08.END.01
**Sat 17 Oct, 20:00** · Latch Lane print shop and upstairs home · I

The pattern, said out loud in my room: two men returned, two men missing, and a rope running out of each returned man to somewhere. And two invitations for the end of the month, because the city doesn't stop for a pattern: Owen's night crews have a problem in the Northline service tunnels that the wardens have been asked to look at; and Ellis's father has a painted screen in the workshop that's doing something it shouldn't.

- **a.** The tunnels. Somebody's being lured into the dark and I can help find them. _(structural)_ → ch09_case = "tunnels"
- **b.** The screen. Ellis asked me, and he doesn't ask. _(structural)_ → ch09_case = "screen"

Next: CH09.OPEN.01


## CH09 — Work Beneath the City

_A complete supernatural adventure over Halloween: the Northline predator or the inherited screen._

### CH09.OPEN.01
**Thu 29 Oct, 18:00** · Latch Lane print shop and upstairs home · I, Will Avery

The end of October. Cold at last; the first gloves. Will is carving a pumpkin with a precision that worries me. I've said yes to something, and it starts tonight.

- **a.** Head for Northline. _(structural)_ — if `ch09_case = "tunnels"` → **CH09.TUNNELS.01**
- **b.** Head up the Hill to the Okafors'. _(structural)_ — if `ch09_case = "screen"` → **CH09.SCREEN.01**

### CH09.TUNNELS.01 _(branch)_
**Thu 29 Oct, 23:00** · Night Bus Depot · I, Owen Price, Pavel Kolar, Adrian Keene, Nolan Voss, Micah Serrano

_When:_ `ch09_case = "tunnels"`

The depot canteen at eleven. Something in the service tunnels under Northline calls night workers by name, in voices they know, and draws them away from the lit areas. A cleaner was found with a broken ankle at a dead end. An apprentice track worker has been missing since Tuesday. Owen has the rota, Pavel has the site, Adrian has Mercy House's authority, Nolan has brought a recorder because Owen said 'it sounds like the tannoy', and Micah knows the depot wiring like his own kitchen.

_On entry:_ fr_owen +1, fr_pavel +1, s10 = "fore", nolan_knows = true

- **a.** Ask Owen for the exact words each worker heard. _(investigative)_ → people +2, mimic_words = true
- **b.** Ask Pavel for the oldest map of the tunnels he has. _(investigative)_ → craft +2, old_map = true

Next: CH09.TUNNELS.02

### CH09.TUNNELS.02 _(branch)_
**Fri 30 Oct, 01:10** · Northline Station · I, Nolan Voss, Adrian Keene

_When:_ `ch09_case = "tunnels"`

Service corridor B at Northline Station. Nolan's recorder catches it: a chime, then a woman's voice announcing 'Platform four for the Greyhill service.' There hasn't been a Greyhill service since the line was cut seven years ago, and platform four was sealed. The thing learned that announcement from speakers that no longer work. It lives where they were. (The fair clue.)

_On entry:_ mimic_clue = true

- **a.** Work it out with Nolan, headphones shared, in the dark. _(relational)_ → b_nolan_work = true, st_nolan = 4
- **b.** Take it to Adrian as a procedure: last known speaker locations, a search pattern. _(relational)_ → adrian_plan = true

Next: CH09.TUNNELS.03

### CH09.TUNNELS.03 _(branch)_
**Fri 30 Oct, 02:40** · Northline Station · I, Micah Serrano, Adrian Keene

_When:_ `ch09_case = "tunnels"`

Through the sealed door onto old platform four: tiles, pigeons, a dead speaker horn. Micah goes ahead because he can hear things we can't, and then he does something with his face and his breathing that tells me, in case I didn't know, exactly what he is. The knack finds the missing apprentice: alive, terrified, somewhere below. And something else, hungry and patient and pleased.

- **a.** Watch Micah change enough to track. Don't flinch. _(relational)_ — if `not(know_micah_wolf)` → b_micah_wolf = true, know_micah_wolf = true, st_micah = 3
- **b.** Trust his nose over my knack. Follow him. _(relational)_ — if `know_micah_wolf` → st_micah +1
- **c.** Reach all the way for the apprentice. Find him first. _(investigative)_ → reached +1, strain +1, knack +3

Next: CH09.TUNNELS.04

### CH09.TUNNELS.04 _(branch)_
**Sat 31 Oct, 00:40** · Northline Station · I, Adrian Keene, Micah Serrano, Nolan Voss

_When:_ `ch09_case = "tunnels"`

The next night, prepared. The apprentice is under the live line, in a culvert the mimic uses as a larder, and the trains run every eleven minutes. Adrian lays a protective line he can hold for about as long as a train takes to pass. Nolan has a speaker and a recording. Micah can lift the grate. Somebody has to go into the culvert.

- **a.** Go into the culvert myself, between trains. _(investigative)_ — if `nerve >= 30` → nerve +3, tunnels_role = "went"
- **b.** Hold the speaker and turn its trick back on it: play the voice it wants. _(investigative)_ → tunnels_role = "lure", craft +2
- **c.** Hold the grate with Micah. Let Adrian go in; he's trained for it. _(relational)_ → tunnels_role = "grate", st_adrian +1

Next: CH09.TUNNELS.05

### CH09.TUNNELS.05 _(branch)_
**Sat 31 Oct, 04:10** · Truss Road Diner · I, Adrian Keene

_When:_ `ch09_case = "tunnels"`

The apprentice is out, hypothermic, alive; the mimic is bound in the old speaker horn it loved and will go to Mercy House in a crate. Owen's rota campaign has something nobody can call 'difficult' now. At four in the morning in the Truss Road Diner, off duty, jacket open, Adrian sits down across from me with no report to write and no reason he can name for being here.

_On entry:_ tunnels_done = true, s10 = "fore"

- **a.** Don't ask him why he came. Order him pie. _(relational)_ — if `st_adrian >= 3` → b_adrian_offduty = true, st_adrian = 4
- **b.** Ask him about the mimic's crate. What happens to it now? _(investigative)_ → know_wardens = true

Next: CH09.HALLOWEEN.01

### CH09.SCREEN.01 _(branch)_
**Thu 29 Oct, 19:00** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor, Isaac Okafor

_When:_ `ch09_case = "screen"`

A six-panel painted screen, delivered by a Southmere family who inherited it and dropped it in the move. The lacquer seal across the back has cracked. In the workroom the shadows are out of step with the lamps. Chukwudi says it's a binding, 1920s, very good, and something inside it is trying to borrow a living silhouette. Isaac thinks this is the best thing that has ever happened.

- **a.** Read the thing inside with the knack before anyone touches it. _(investigative)_ → reached +1, strain +1, knack +3, shade_lonely = true
  - _Weather: hunger, yes, but under it something like loneliness. A clue to its history._
- **b.** Get Isaac out of the room. He's standing too close to the lamp. _(relational)_ → fr_isaac +1, fr_chukwudi +1

Next: CH09.SCREEN.02

### CH09.SCREEN.02 _(branch)_
**Thu 29 Oct, 23:30** · Okafor Restoration · I, Ellis Okafor, Isaac Okafor

_When:_ `ch09_case = "screen"`

The first night. Everyone takes shifts watching the workroom. On mine, upstairs in the kitchen, Ellis in an old jumper eats cereal and complains about a tutor and forgets to be impressive. Then Isaac's shadow comes down the stairs without him.

- **a.** Before the shadow: stay in the kitchen with Ellis and let him be ordinary. _(relational)_ — if `not(b_ellis_offstage)` → b_ellis_offstage = true, st_ellis = 3
- **b.** Go after the shadow. _(investigative)_ → nerve +2

Next: CH09.SCREEN.03

### CH09.SCREEN.03 _(branch)_
**Fri 30 Oct, 14:00** · Whitcomb Museum · I, Ellis Okafor, Emmett Hsu

_When:_ `ch09_case = "screen"`

Provenance. The binding needs its key, and the key was the screen's missing seventh panel. The family's papers say a great-aunt sold 'the odd panel' in 1971. Emmett Hsu, a trainee warden who works museum security to pay his way, gets us into the Whitcomb's stores after hours. The seventh panel is there: a painted woman on a riverbank, holding a small boat on a string. The painter bound something that had worn her drowned brother's shape, to keep it from taking anyone else. She acted to protect.

_On entry:_ fr_emmett = 1, screen_panel = true


Next: CH09.SCREEN.04

### CH09.SCREEN.04 _(branch)_
**Sat 31 Oct, 01:00** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor, Caspar Neri, Isaac Okafor

_When:_ `ch09_case = "screen"`

Re-seating the binding. It takes three workers at once so the strain doesn't land on one: Chukwudi, Ellis and Caspar, each holding a part. (E08: a repair with three contributors distributes the strain of a bond.) Ellis needs four minutes to understand the key. Somebody has to keep the shade's attention for four minutes.

_On entry:_ e08 = true, e08_src = "screen"

- **a.** Talk to it. It's lonely. Keep it listening. _(investigative)_ — if `shade_lonely` → knack +3, b_ellis_danger = true, st_ellis = 4, screen_way = "talk"
- **b.** Keep the lamps moving so it can't settle on anyone's shadow. _(investigative)_ — if `craft >= 35` → craft +3, b_ellis_danger = true, st_ellis = 4, screen_way = "lamps"
- **c.** Stand between it and Isaac and hold still. _(relational)_ → nerve +3, b_ellis_danger = true, st_ellis = 4, screen_way = "stand"

Next: CH09.SCREEN.05

### CH09.SCREEN.05 _(branch)_
**Sat 31 Oct, 11:00** · Okafor Restoration · I, Chukwudi Okafor, Ellis Okafor

_When:_ `ch09_case = "screen"`

Morning. Isaac has his shadow back and is annoyed he slept through the end. The family gets their screen, and the story of a great-great-grandmother who wasn't cruel after all. Chukwudi writes the night in the error book, including what nearly went wrong. Then, drying his hands, he says the three-part method they used last night is old: 'Mercy House tried something like it once, for people instead of objects. Seven years ago. They closed it.'

_On entry:_ screen_done = true, fr_chukwudi +1, program_hint = true


Next: CH09.HALLOWEEN.01

### CH09.HALLOWEEN.01
**Sat 31 Oct, 19:30** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Halloween on Latch Lane. Martin in the shop doorway with a bowl of sweets he bought too many of; Will dressed, with great irony, as a print-shop owner. Kids in capes. I've slept four hours. Whatever I did under the city, the city is up here eating chocolate. A message comes, from Adrian or Reuben or Chukwudi: there was a program, seven years ago, and it's worth asking about.

_On entry:_ program_hint = true


Next: CH10.CHOICE.01


## CH10 — The Closed Program

_The earlier rescue work, its donor harm, the hard 48-hour limit, and the sensitive who monitored the links._

### CH10.CHOICE.01
**Sat 7 Nov, 09:00** · Latch Lane print shop and upstairs home · I

The program, seven years ago. Two places remember it: the Mercy House archive, if Florian will open it, or a former warden called Malcolm Tait who keeps a recovery house up on the ridge and was there when it failed.

- **a.** The records. Florian, the archive, and whatever Orrell doesn't want read. _(structural)_ — if `know_wardens` → ch10_way = "records" → **CH10.RECORDS.01**
- **b.** The ridge. Reuben's driving up to Orchard House anyway. _(structural)_ → ch10_way = "orchard" → **CH10.ORCHARD.01**

### CH10.RECORDS.01 _(branch)_
**Sat 7 Nov, 14:00** · Mercy House · I, Florian Adebayo, Adrian Keene, Kenji Sato

_When:_ `ch10_way = "records"`

The archive in Mercy House's old pathology wing. Florian asks everyone to separate what they know from what they infer. Half the program's file is here; the other half was 'transferred' to a destination nobody wrote down. What's left: an emergency method that held a dying person with a living donor's vitality; a donor injured when the link strained; a hard limit, forty-eight hours from death or nothing; and a monitor whose notes are in a different hand. 'R. Carrow — sensitive.' Kenji, fetching a crate, identifies the kind of token-work in the file as the kind on Quentin's keys. The staff list names a junior ritual physician: D. Holt.

_On entry:_ e07 = true, e07_src = "records", gift_named = true, fr_florian +1, fr_kenji = 1, e03_c = true, damian_named = true, damian_program = true

- **a.** Work the file with Adrian: sequence, dates, names. _(relational)_ — if `st_adrian >= 2` → b_adrian_procedure = true, st_adrian = 3
- **b.** Ask Florian about R. Carrow. _(relational)_ → carrow_file = true, fr_florian +1

Next: CH10.RECORDS.02

### CH10.RECORDS.02 _(branch)_
**Sat 7 Nov, 21:00** · Mercy House · I, Adrian Keene

_When:_ `ch10_way = "records"`

Mercy House roof, the city in lights, the cold coming off the river. Adrian, who has spent all day reading about an institution concealing a mistake, tells me about his own: the training report he wrote to cover Emmett's absence. It isn't evil. It's a lie, and it's his.

- **a.** "Then fix it. Tell them. I'll stand next to you when you do." _(relational)_ — if `st_adrian >= 3` → b_adrian_report = true, st_adrian = 4, s07 = "fore"
- **b.** "It's Emmett's call, not yours. Ask him." _(relational)_ — if `st_adrian >= 3` → b_adrian_report = true, st_adrian = 4, s07 = "fore", adrian_asks_emmett = true
- **c.** "Everybody lies to protect someone." Let him off. _(relational)_ → s07 = "intro"

Next: CH10.ORRELL.01

### CH10.ORCHARD.01 _(branch)_
**Sat 7 Nov, 11:00** · Orchard House · I, Reuben Pike, Malcolm Tait

_When:_ `ch10_way = "orchard"`

North Ridge in its last colour: an hour up the regional road in Reuben's car with the heater broken. Orchard House is a modest warden recovery retreat with a leaking roof, a garden, a workshop and a collie called Bess. Malcolm Tait makes tea like a man making a point. He was there. The emergency method was real; the donor, a young warden called Kit Maddox, was hurt when the link strained; the hard limit is forty-eight hours; and the monitor who warned them, Ruth Carrow, was a sensitive. 'Like you,' he says, looking at me for too long. 'She'd have had you pegged in a minute.'

_On entry:_ e07 = true, e07_src = "malcolm", gift_named = true, fr_malcolm = 1

- **a.** Ask Malcolm how he knew what I am. _(relational)_ → gift_mercy = true, fr_malcolm +1
- **b.** Ask about the records Orrell divided. _(investigative)_ → orrell_suspected = true

Next: CH10.ORCHARD.02

### CH10.ORCHARD.02 _(branch)_
**Sat 7 Nov, 15:30** · Reservoir Footpath · I, Reuben Pike

_When:_ `ch10_way = "orchard"`

The reservoir footpath while Malcolm and the dog nap. Reuben, who always waits for other people's answers, talks. The man who taught him emergency methods at Mercy House, who took a nineteen-year-old seriously, who left professional life two years ago and stopped answering: Damian Holt. He says the name with love. He doesn't know what he's saying.

_On entry:_ damian_named = true

- **a.** Listen. Ask what Damian was like, and what it cost Reuben when he left. _(relational)_ — if `st_reuben >= 3` → b_reuben_damian = true, st_reuben = 4
- **b.** Ask whether Damian worked on the closed program. _(investigative)_ → damian_program = true

Next: CH10.ORCHARD.03

### CH10.ORCHARD.03 _(branch)_
**Sat 7 Nov, 19:00** · Orchard House · I, Reuben Pike, Malcolm Tait, Percival Tern, Ansel Marr

_When:_ `ch10_way = "orchard"`

Supper in Orchard House's kitchen. Percival Tern, the old Marches orchard keeper, has come through the sealed crossing at the bottom of the garden for his monthly argument with Malcolm about the roof. And Ansel Marr arrives an hour later with a folder of lease papers for Percival: an official reason that is very obviously not the reason.

_On entry:_ fr_percival = 1

- **a.** Ask Ansel, quietly, whether the lease papers really couldn't wait. _(relational)_ — if `st_ansel >= 2` → b_ansel_pretext = true, st_ansel = 3
- **b.** Get Percival talking about the crossings and who uses them. _(investigative)_ → know_marches = true, crossings_map = true

Next: CH10.ORRELL.01

### CH10.ORRELL.01
**Sun 8 Nov, 11:00** · Mercy House · I, Patrick Orrell

Sunday. Commander Orrell knows I've seen the program, one way or another; Mercy House is not a place where secrets stay in one room. He listens without interrupting, then restates the part of my argument he considers relevant: he closed a dangerous program and kept the reasons quiet so the institution would survive long enough to do better. He doesn't know who is doing this now. I believe that, and the knack agrees, for what that's worth.

- **a.** Confront him: the concealment is why someone could pick this up again. _(structural)_ → orrell_known = "confront", nerve +3
- **b.** Say nothing yet. Hold it. It may matter more later. _(structural)_ → orrell_known = "hold"
- **c.** Go to Florian instead: make sure the archive keeps what's left, on the record. _(structural)_ — if `fr_florian >= 1` → orrell_known = "florian", fr_florian +1

Next: CH10.TRAIN.01

### CH10.TRAIN.01
**Sun 8 Nov, 16:00** · Mercy House · I

The knack has a name now, and a history, and people who might teach it. Malcolm offered, gruffly, on the drive or by message; Florian can lend me Ruth Carrow's notes. Or I can keep doing what I've always done with the things I don't want to look at.

- **a.** Take Malcolm up on it. Weekends at Orchard House, fixing the roof and learning to listen. _(relational)_ → trained = "malcolm", knack +5, fr_malcolm +1
- **b.** Borrow Ruth Carrow's notes and teach myself from them, carefully. _(relational)_ — if `fr_florian >= 1` → trained = "florian", knack +5, fr_florian +1
- **c.** Teach myself. Alone. Like everything else. _(expressive)_ → trained = "self", knack +3
- **d.** No. I don't want to be better at this. I want it smaller. _(expressive)_ → trained = "refused"

Next: CH11.OPEN.01


## CH11 — The Exhibition

_Social circles collide at the Whitcomb; Felix, Clive and the patron established; the photographed connection._

### CH11.OPEN.01
**Thu 19 Nov, 15:00** · Latch Lane print shop and upstairs home · I

'The Material City', Basil Duret's exhibition at the Whitcomb, opens tonight, sponsored by the Sorrell Foundation. Half the people I know will be there for half a dozen reasons. How do I go?

- **a.** As crew. Desmond's company has the AV contract; Nolan got me on it. _(structural)_ → ex_as = "crew" → **CH11.EXHIBIT.01**
- **b.** As Ellis's guest. He has a piece in the student room and asked me to stand next to it with him. _(structural)_ — if `st_ellis >= 3` → ex_as = "guest" → **CH11.EXHIBIT.01**
- **c.** As Dominic's plus-one. Benoît's ensemble is playing the interval, and Dominic's singing. _(structural)_ — if `st_dominic >= 3` → ex_as = "performer" → **CH11.EXHIBIT.01**

### CH11.EXHIBIT.01
**Thu 19 Nov, 19:00** · Whitcomb Museum · I, Armand Sorrell, August Rell, Basil Duret, Clive Merritt, Felix Brecht, Caspar Neri, Soren Venn, Abel Mercer, Emmett Hsu

The Whitcomb's great gallery, full. Armand Sorrell gives a short speech about his son Octavian, dead ten years this March, in whose memory the foundation funds restoration, training and healthcare; the knack takes his grief like a weight on the chest. August Rell stands at his elbow, attentive. Clive Merritt, a ceramicist who teaches evening classes, is doing a glaze demonstration and making the donors laugh. Felix Brecht is filming for the foundation, for pay. Caspar on lights, Soren Venn working the room, Abel Mercer pale in cashmere, Emmett in a security blazer.

_On entry:_ fr_clive = 1, fr_felix +1, fr_caspar +1, armand_met = true, s12 = "fore"

- **a.** Stand near Clive's demonstration. He's the only person here who seems to be enjoying himself. _(relational)_ → fr_clive +1
- **b.** Watch August Rell watching Armand. _(investigative)_ → august_watched = true, people +2

Next: CH11.EXHIBIT.02

### CH11.EXHIBIT.02
**Thu 19 Nov, 20:00** · Whitcomb Museum · I, Benoît Marchand, Dominic Bell, Graham Bell

The interval: Benoît's students, in borrowed black, and (if he found the nerve) Dominic, singing in public for the first time since he was turned. A caretaker at the back in a blue coat, Graham Bell, watching his son and not understanding why the hours changed.

- **a.** Catch Dominic's eye before he starts, and keep it. _(relational)_ — if `(st_dominic >= 2) and not(b_dominic_music)` → b_dominic_music = true, st_dominic = 3, s05 = "fore"
- **b.** Stand with Graham. Tell him his son sounds good. _(relational)_ → fr_graham = 1, s05 = "fore"

Next: CH11.CHOICE.01

### CH11.CHOICE.01
**Thu 19 Nov, 20:45** · Whitcomb Museum · I

Three conversations I could have tonight. I'll only get to one properly.

- **a.** Armand Sorrell. The grief in him is too big for the room. _(structural)_ → ch11_talk = "armand" → **CH11.ARMAND.01**
- **b.** Felix. He's been filming the service gate all night, and he's scared. _(structural)_ → ch11_talk = "felix" → **CH11.FELIX.01**
- **c.** Basil and Caspar, and the brass frame in case nine that hums when I walk past it. _(structural)_ → ch11_talk = "basil" → **CH11.BASIL.01**

### CH11.ARMAND.01 _(branch)_
**Thu 19 Nov, 21:00** · Whitcomb Museum · I, Armand Sorrell, August Rell

_When:_ `ch11_talk = "armand"`

Armand listens with his whole face and makes me feel understood, which is a gift and a technique. He talks about Octavian: twenty, a fall at Quarry Lake, three days before they found him. He says there are 'people working on questions the rest of the world is too frightened to ask', and August Rell steers him gently to the next donor.

_On entry:_ octavian_known = true, armand_hope = true

- **a.** Ask him what questions. _(investigative)_ → armand_hint = true
- **b.** Tell him I'm sorry, and mean it, and leave it there. _(relational)_ → armand_trust = true

Next: CH11.EXHIBIT.04

### CH11.FELIX.01 _(branch)_
**Thu 19 Nov, 21:00** · Whitcomb Museum · I, Felix Brecht

_When:_ `ch11_talk = "felix"`

Felix, by the loading bay, fingerless gloves, lens cap in his teeth. At the foundation's autumn gala last month he filmed a van loading at the Ashcombe Conservatory's service gate; a delivery docket on the dashboard said 'restoration storage — Pump Nine'. He thinks it's nothing. He has checked it three times.

_On entry:_ e11 = true, e11_src = "felix", fr_felix +1

- **a.** Ask for a copy of the clip. Promise to be careful with it. _(investigative)_ → e11_copy = true
- **b.** Tell him to stop checking. Tell him why. _(relational)_ → warned_felix = true, fr_felix +1
  - _It doesn't save him. He's a person with his own judgment, and he keeps looking. It does mean that when he comes back changed, he knows who to call._

Next: CH11.EXHIBIT.04

### CH11.BASIL.01 _(branch)_
**Thu 19 Nov, 21:00** · Whitcomb Museum · I, Basil Duret, Caspar Neri

_When:_ `ch11_talk = "basil"`

Case nine: 'Brass frame, anonymous, nineteenth century, lent by Rell & Company.' It hums. Caspar, who prepped it for display, says quietly that the wards on it aren't nineteenth-century; they're recent, and they're warden work. Basil elaborates fluently about its history, which means he doesn't know it.

_On entry:_ e10 = true, e10_src = "caspar", frame_seen = true

- **a.** Ask Caspar where Rell got it. _(investigative)_ → fr_caspar +1, rell_lead = true
- **b.** Reach. Just for a second. _(investigative)_ → reached +1, strain +1, knack +2, frame_echo = true
  - _Echo: a young warden gasping, a woman's voice saying 'it's straining, stop, it's straining': Ruth Carrow, seven years ago. This is the old program's linking frame._

Next: CH11.EXHIBIT.04

### CH11.EXHIBIT.04
**Thu 19 Nov, 22:15** · Whitcomb Museum · I, Ellis Okafor

In the student room the heat of the gallery lights has made an old warded piece in the next case restless: glass rattling, a smell of hot metal, two donors noticing. Ellis can settle it, but he needs a few minutes with his back to the room, and he can't be seen doing it.

- **a.** Hold the room. Talk loudly about ceramics until he's done. _(relational)_ — if `(st_ellis >= 3) and not(b_ellis_danger)` → b_ellis_danger = true, st_ellis = 4, people +2
- **b.** Get Emmett to move the donors on. _(relational)_ → fr_emmett +1

Next: CH11.EXHIBIT.05

### CH11.EXHIBIT.05
**Thu 19 Nov, 23:30** · Whitcomb Museum · I, Ellis Okafor, Basil Duret

Basil's closing thanks credit 'my research team' for a discovery that was Ellis's alone. Ellis smiles perfectly for the room. Outside on the museum steps, in the cold, he stops.

_On entry:_ s03 = "fore"

- **a.** Stay. Don't fix it. Let him be angry and uncertain in front of me. _(relational)_ — if `b_ellis_danger and (hurt_ellis < 2)` → b_ellis_badday = true, st_ellis = 5
- **b.** Tell him to go after Basil, officially. He deserves the credit. _(relational)_ → s03 = "fore", ellis_fights = true
- **c.** Walk him to the bus. Some nights you just walk someone to the bus. _(relational)_ → people +1

Next: CH11.END.01

### CH11.END.01
**Fri 20 Nov, 00:40** · Truss Road Diner · I

The diner, alone with pie. The people tonight: a grieving patron and his attentive dealer; a filmmaker who noticed something; a ceramicist who made everyone laugh; a brass frame that remembers. None of it proves anything yet. All of it goes on the board.


Next: CH12.CHOICE.01


## CH12 — Before We Leave

_Full-moon gathering, Regent emergency, or work/family and the Lantern Rooms haunting; then December, and the Marches journey prepared._

### CH12.CHOICE.01
**Tue 24 Nov, 12:00** · Latch Lane print shop and upstairs home · I

Late November. The trees are bare on the Hill. Three people want me for the same week, and I can't be three places.

- **a.** Micah: the supervised full-moon gathering at North Ridge. He wants me to see it. _(structural)_ — if `st_micah >= 2` → ch12_branch = "gathering" → **CH12.GATHERING.01**
- **b.** Dominic: film night at the Regent, and staying over in the spare room. _(structural)_ — if `st_dominic >= 2` → ch12_branch = "regent" → **CH12.REGENT.01**
- **c.** Here: the Christmas rush at the shop, the Switchyard fundraiser, and a job for Benoît at the Lantern Rooms. _(structural)_ → ch12_branch = "home" → **CH12.HOME.01**

### CH12.GATHERING.01 _(branch)_
**Tue 24 Nov, 16:00** · Greyhill Village · I, Micah Serrano, Ernesto Serrano, Wesley Dent, Leandro Serrano

_When:_ `ch12_branch = "gathering"`

Greyhill Village: a bus stop, a general store, an inn that rents the whole barn to Eastbank one night a month and asks no questions. Ernesto's rules on a whiteboard. Wesley, three transformations old, pretending he isn't terrified. Micah, practical and too cheerful, doing everyone else's jobs.

_On entry:_ know_wolves = true, fr_ernesto +1

- **a.** Ask Micah to tell me what tonight actually is. All of it. _(relational)_ — if `not(b_micah_wolf)` → b_micah_wolf = true, know_micah_wolf = true, st_micah = 3
- **b.** Sit with Wesley. Don't pity him. Talk about anything else. _(relational)_ → fr_wesley +1, s08 = "fore"

Next: CH12.GATHERING.02

### CH12.GATHERING.02 _(branch)_
**Tue 24 Nov, 22:30** · Quarry Lake · I, Micah Serrano, Wesley Dent, Ernesto Serrano

_When:_ `ch12_branch = "gathering"`

Quarry Lake under the full moon. The change; the run; something like joy coming off thirty wolves at once, loud enough through the knack to make me laugh out loud. Then Wesley bolts: frightened, too new, heading for the quarry cliffs in the dark. I'm the only one who can feel exactly where his fear is.

- **a.** Follow his fear, not his tracks. Talk him down from the edge. _(investigative)_ → knack +3, wesley_saved = "mc", fr_wesley +1
- **b.** Guide Micah to him with the knack, shouting directions. _(relational)_ → wesley_saved = "micah", st_micah +1

_Note:_ At the cliff edge, the knack catches something old: a young man's surprise, a fall, ten years ago. Octavian Sorrell died here. It explains nothing about the case and I'll never forget it.

Next: CH12.GATHERING.03

### CH12.GATHERING.03 _(branch)_
**Wed 25 Nov, 03:00** · Greyhill Village · I, Micah Serrano, Ernesto Serrano

_When:_ `ch12_branch = "gathering"`

The barn at three in the morning: wolves asleep in heaps, human-shaped again under blankets. Ernesto tells Micah to drive the van back at dawn, then open the yard. Micah hasn't slept in two days, and he says yes, because he always says yes.

- **a.** "He's not driving. I'll do it, or Leandro will. He's done." Say it to Ernesto. _(relational)_ — if `st_micah >= 3` → b_micah_boundary = true, st_micah = 4, fr_ernesto -1, nerve +2
- **b.** Say nothing. It's his family. _(expressive)_

Next: CH12.GATHERING.04

### CH12.GATHERING.04 _(branch)_
**Wed 25 Nov, 06:40** · Reservoir Footpath · I, Micah Serrano

_When:_ `ch12_branch = "gathering"`

The reservoir path at dawn, frost on everything. Micah wanted a walk, alone, which he never wants. He's quiet. He says he doesn't know why he keeps wanting to be where I am, and he says it like a man describing a noise in an engine.

- **a.** "I know why I do." Tell him. Let him answer, or not. _(relational)_ — if `b_micah_wolf and b_micah_boundary and (hurt_micah < 2)` → b_micah_want = true, st_micah = 5, out_micah = true
- **b.** "Because I'm great company." Keep it light. Keep it safe. _(expressive)_
- **c.** Just walk. Let the not-saying be enough, for now. _(relational)_ → people +1

Next: CH12.FOLLOWUP.01

### CH12.REGENT.01 _(branch)_
**Tue 24 Nov, 21:00** · The Regent · I, Dominic Bell, Milo Finch, Rafi Bensaïd, Abel Mercer, Lucien Arnaud

_When:_ `ch12_branch = "regent"`

Film night in the Regent's auditorium: Milo projecting a terrible old musical, Rafi heckling, Lucien knitting, Abel complaining about the seats he paid to reupholster. Dominic has saved me the good armrest.

_On entry:_ fr_milo +1, fr_rafi +1, s16 = "intro"


Next: CH12.REGENT.02

### CH12.REGENT.02 _(branch)_
**Wed 25 Nov, 04:30** · The Regent · I, Dominic Bell, Milo Finch, Rafi Bensaïd, Abel Mercer, Lucien Arnaud

_When:_ `ch12_branch = "regent"`

Half past four: a crack like a gunshot. A frost-split roof truss has dropped the east wing's light shutters. Sunrise is at ten past seven. Eleven residents sleep in that wing, and two human staff. Dominic knows whose room is whose; Milo knows the projection and service passages; Rafi knows who's too weak to walk; Abel wants to know who'll carry his things.

- **a.** Ask Dominic where he needs me, and do exactly that. _(relational)_ → b_dominic_dawn = true, st_dominic = 4
- **b.** Tell Dominic to get to the safe wing first; I'll handle his end. _(relational)_ → managed_dominic = true
- **c.** Take the ladders with Milo and get the shutters back up. _(investigative)_ → craft +3, fr_milo +1

Next: CH12.REGENT.03

### CH12.REGENT.03 _(branch)_
**Wed 25 Nov, 06:55** · The Regent · I, Dominic Bell, Abel Mercer, Lucien Arnaud, Adrian Keene

_When:_ `ch12_branch = "regent"`

Fifteen minutes to sunrise; everyone accounted for. Abel demanded that his rooms be protected first and Lucien refused him in front of everybody, at a cost to the trust's finances. Adrian arrives, off shift, jacket over pyjamas, because someone told him I was here.

_On entry:_ s16 = "fore"

- **a.** Ask Adrian why he came, if he wasn't called. _(relational)_ — if `st_adrian >= 3` → b_adrian_offduty = true, st_adrian = 4
- **b.** Back Lucien against Abel, out loud. _(relational)_ → fr_lucien +1, ally_regent_hint = true

Next: CH12.REGENT.04

### CH12.REGENT.04 _(branch)_
**Wed 25 Nov, 18:30** · The Regent · I, Dominic Bell

_When:_ `ch12_branch = "regent"`

That evening, after sunset, on the Regent's flat roof among the repaired shutters. Dominic hasn't been treated gently all day, and he's grateful in a way he doesn't know what to do with. Then he asks me a question nobody's asked him in a year: not whether he's all right, but what I want.

- **a.** Tell him what I want. It's him. _(relational)_ — if `b_dominic_dawn and not(managed_dominic) and (hurt_dominic < 2)` → b_dominic_ask = true, st_dominic = 5, out_dominic = true
- **b.** "For you to be all right." Which is true, and not an answer. _(expressive)_

Next: CH12.FOLLOWUP.01

### CH12.HOME.01 _(branch)_
**Tue 24 Nov, 19:00** · Switchyard · I, Nolan Voss, Desmond Aster

_When:_ `ch12_branch = "home"`

Switchyard after hours: planning the December fundraiser for the lease fight. Desmond assumes everyone's working it for free. Nolan draws the whole rig on the back of a flyer in ten minutes, and he's so good at this that I forget to be anything but impressed.

_On entry:_ s06 = "fore"

- **a.** Work the rig plan with him till two in the morning. _(relational)_ — if `st_nolan >= 3` → b_nolan_work = true, st_nolan = 4
- **b.** Make Desmond pay the crew. Out loud. _(relational)_ → fr_desmond -1, nerve +2, crew_paid = true
- **c.** Tell Nolan the truth about the last three months. All of it. _(relational)_ — if `not(nolan_knows)` → nolan_knows = true, gift_nolan = true, hurt_nolan = 0

Next: CH12.HOME.02

### CH12.HOME.02 _(branch)_
**Wed 25 Nov, 23:30** · Calder General · I, Reuben Pike

_When:_ `ch12_branch = "home"`

Calder General's car park, level three, where I first sat with Quentin. Reuben at the end of a double shift that shouldn't have been his, because the response service he keeps asking for doesn't exist. He can't find his keys. He's not safe to drive and he knows it and he hates it.

- **a.** Drive him home. Make toast. Don't make it a thing. _(relational)_ — if `st_reuben >= 3` → b_reuben_needs = true, st_reuben = 4, s09 = "fore"
- **b.** Call Mercy House to come and get him. _(relational)_ → s09 = "intro"

Next: CH12.HOME.03

### CH12.HOME.03 _(branch)_
**Thu 26 Nov, 21:00** · The Lantern Rooms · I, Benoît Marchand, Jonah Peake, Dominic Bell

_When:_ `ch12_branch = "home"`

The Lantern Rooms: Benoît hired me to rig lights for the winter concert. Someone keeps striking the same wrong note on the old upright at night. Jonah Peake, a medium who plays at funerals and refuses to perform grief, says it's a partial haunting: a piano tuner who died in 1978 before finishing, repeating the job. The purpose has been misread: he wasn't tuning; he was trying to find the note his daughter always sang flat. Dominic, rehearsing after dark, hears it too.

_On entry:_ fr_jonah = 1, haunting_done = true

- **a.** Ask Dominic to sing the flat note, so the tuner can finish. _(relational)_ — if `(st_dominic >= 2) and not(b_dominic_music)` → b_dominic_music = true, st_dominic = 3
- **b.** Find the daughter's name in Benoît's old programmes and say it at the piano. _(investigative)_ → people +2, fr_benoit = 1

Next: CH12.HOME.04

### CH12.HOME.04 _(branch)_
**Sat 28 Nov, 14:00** · Southmere Cinema · I, Quentin Shaw

_When:_ `ch12_branch = "home"`

Quentin texts: a cheap matinee at Southmere Cinema, a terrible sequel, nothing to investigate, he's buying. It's the first time he's asked me for anything that wasn't practical.

- **a.** Go. Let him pick the seats. Let him talk, or not. _(relational)_ — if `st_quentin >= 3` → b_quentin_nothing = true, st_quentin = 4
- **b.** Go, and ask him how he's feeling. Carefully. _(relational)_ → hurt_quentin +1
  - _He wanted one afternoon of not being a case. He goes quiet._

Next: CH12.FOLLOWUP.01

### CH12.FOLLOWUP.01 _(conditional)_
**Mon 30 Nov, 17:00** · Winton Court Apartments · I, Quentin Shaw, Russell Dacre

_When:_ `buddy_plan or (st_quentin >= 3)`

Quentin's monthly 'follow-up', in a rented flat in Winton Court. He lets me wait in the corridor. Russell Dacre, the caretaker, is fixing a radiator and wants to talk about the tenants' fight; he also says there's a man who comes and goes through the service corridor on these afternoons, never the front. Through the door, a calm, kind voice asks Quentin how he's sleeping. The knack goes cold. It's the voice.

_On entry:_ voice_heard = true, fr_russell = 1, s11 = "intro", winton_log = true

- **a.** Ask Russell to write down every time he sees the man. Dates, times. _(investigative)_ → russell_logging = true, fr_russell +1
- **b.** Try the service door. _(investigative)_ → enemy_aware +1
  - _It's locked, and a shape on the far side goes still. The ring now knows someone is waiting in the corridor._

Next: CH12.DEC.01

### CH12.DEC.01
**Sat 5 Dec, 08:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

First snow. The shop's Christmas rush: raffle tickets, orders of service, carol sheets, all due yesterday. Will's development program trial is in the spring, and he's training in the dark before school. Mum's December emails: she can't get home for Christmas.

> **Letter.** Joanne: 'I'm sorry, love. The relief nurse broke her wrist. I'll be home in the spring, I promise. Give Martin a hug from me and tell him I know about the overdraft, he's a terrible liar.'

_On entry:_ s01 = "fore", s13 = "fore"


Next: CH12.PREP.01

### CH12.PREP.01
**Tue 8 Dec, 19:30** · The Neutral Table · I, Ansel Marr

The Neutral Table, upstairs room. Ansel, over dinner he has opinions about: his father refused to sponsor a Calder investigation into Eamon. But from midwinter to Twelfth Night, the Candle Fair, anyone may enter Bracken Court unsponsored. We'll cross after Christmas. Who else comes?

- **a.** Just the two of us. _(structural)_ → companion = "none", st_ansel +1
- **b.** Adrian. A warden escort makes it official, and he'd hate to be left behind. _(structural)_ — if `st_adrian >= 3` → companion = "adrian"
- **c.** Micah. He's never been anywhere, and he needs out of Eastbank for a week. _(structural)_ — if `st_micah >= 3` → companion = "micah"
- **d.** Nolan. He knows now, and he'll bring the good torch. _(structural)_ — if `(st_nolan >= 4) and nolan_knows` → companion = "nolan"
- **e.** Reuben. If anything goes wrong in there, we'll want a medic. _(structural)_ — if `st_reuben >= 3` → companion = "reuben"

Next: CH12.PREP.02

### CH12.PREP.02
**Sat 12 Dec, 23:30** · Switchyard · I, Nolan Voss, Desmond Aster, Ansel Marr, Micah Serrano, Dominic Bell

The Switchyard fundraiser: the whole city in one room, all ages, the heating broken so nobody minds. Micah dancing badly on purpose. Dominic in the back with Milo. And Ansel, who has come to deliver 'a message about the crossing arrangements' that could have been a text, and stays until close.

_On entry:_ s06 = "fore"

- **a.** Tell Ansel the message could have been a text, and watch him try to deny it. _(relational)_ — if `(st_ansel >= 2) and not(b_ansel_pretext)` → b_ansel_pretext = true, st_ansel = 3
- **b.** Work the night. Load out at three with Nolan like always. _(relational)_ → st_nolan +1

Next: CH12.END.01

### CH12.END.01
**Sun 20 Dec, 22:00** · Latch Lane print shop and upstairs home · I, Martin Avery

The Sunday before Christmas. Winter Lights on the river, the shop finally quiet. Martin asks where I'm going after Christmas. What do I tell him?

- **a.** "Away for a week with a friend. Somewhere with no signal." True, and small. _(relational)_ → martin_told_trip = true
- **b.** Tell him about the knack. Not the case. Just me. _(relational)_ — if `not(gift_martin)` → gift_martin = true, fr_martin +1

Next: CH13.XMAS.01


## CH13 — Bracken Court

_Christmas above the print shop; the crossing at the Candle Fair; the Marches as a society._

### CH13.XMAS.01
**Fri 25 Dec, 10:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Christmas above the print shop: Martin's annual attempt at a roast, Will pretending to be too old for stockings and emptying his anyway, a video call with Mum that freezes on her laughing. The knack, for once, is only happiness, and it's loud. I bought them something each.

- **a.** Give Will the second-hand scouting camera I found, so he can film his games and study them. _(relational)_ → fr_will +1, s13 = "fore"
- **b.** Give Martin an envelope: the overdue invoice, paid in person by a client I shamed into it. _(relational)_ — if `s01 = "fore"` → fr_martin +1
- **c.** Give them both the thing I've never said: that living here saved me. _(relational)_ → fr_martin +1, fr_will +1

Next: CH13.CROSS.01

### CH13.CROSS.01
**Mon 28 Dec, 09:00** · Iron Footbridge · I, Ansel Marr, Harlan Greaves

The Iron Footbridge's maintenance chamber on a white morning. Harlan Greaves keeps the crossing, sociable until anything touches a transaction. The threshold is a door in a brick wall that opens onto a different wind. Ansel steps through first, formal as a funeral. Whoever I asked is with us.

- **a.** Watch Harlan. He's more nervous than a keeper should be. _(investigative)_ — if `harlan_aware` → harlan_nervous = true, people +1
- **b.** Don't look back. Step through. _(expressive)_ → nerve +2

Next: CH13.COURT.01

### CH13.COURT.01
**Mon 28 Dec, 11:00** · Bracken Court · I, Ansel Marr

Bracken Court at the Candle Fair: a market town of slate and timber, a candle in every window, stalls of hot cider and pastries Ansel explains in detail. People who are irritated by visitors and sell to them anyway. The knack is strange here: the weather of the Marches is older and slower, like reading a book in another alphabet.

_On entry:_ know_marches = true

- **a.** Stay at Ansel's father's house. Official hospitality opens official doors. _(structural)_ → ch13_lodging = "official" → **CH13.OFFICIAL.01**
- **b.** Stay at the Travelers' House where the couriers stay. Eamon stayed there. _(structural)_ → ch13_lodging = "travelers" → **CH13.TRAVELERS.01**

### CH13.OFFICIAL.01 _(branch)_
**Mon 28 Dec, 18:00** · Bracken Court · I, Ansel Marr, Severin Marr, Lucan Verre, Oswin Deller

_When:_ `ch13_lodging = "official"`

Dinner at the envoy's house. Severin Marr offers choices framed so the one he wants sounds responsible. Cousin Lucan, playful in private, formal the second money is mentioned. A guest, Oswin Deller, a broker in a heavy coat, who describes exploitation as practicality and asks me polite questions about Calder property. Afterwards Severin grants me access to the crossing registry, as a courtesy that is also a leash.

_On entry:_ fr_severin = 1, fr_lucan = 1, oswin_met = true, registry_access = true

- **a.** Take the registry access, and thank Severin for it properly. _(relational)_ → fr_severin +1
- **b.** Ask Oswin what he stores at Stillwater. _(investigative)_ → oswin_wary = true, enemy_aware +1
  - _A mistake, gently punished: Oswin will remember my face._

Next: CH13.COURT.03

### CH13.TRAVELERS.01 _(branch)_
**Mon 28 Dec, 18:00** · The Travelers' House · I, Ansel Marr, Lucan Verre

_When:_ `ch13_lodging = "travelers"`

The Travelers' House: crowded corridors, shared meals, house rules about boots. The landlady still has Eamon's bag: he sent it ahead with another courier in August and never came to claim it. His good shirt, a return ticket, a letter to a sister he never posted. And in September, she says, a man in a good coat came asking whether Eamon had arrived. Lucan eats here on Mondays because the food is better than at home.

_On entry:_ e06_c = true, fr_lucan = 1, eamon_bag = true

- **a.** Keep the letter safe for Eamon. Don't read it. _(relational)_ → eamon_letter_kept = true
- **b.** Hold the bag, and reach. _(investigative)_ → reached +1, strain +1, knack +2, eamon_hope = true
  - _Echo: nothing of the abduction, just Eamon packing in a hurry and whistling. A person, not a clue. It helps._

Next: CH13.COURT.03

### CH13.COURT.03
**Mon 28 Dec, 22:30** · The Toll Gardens · I, Ansel Marr

The Toll Gardens at night: lanterns in the bare trees, the crossing office dark. Ansel walks me round twice before he says it: his father has been using him to carry his intentions since he was twelve, and every friend he's had has been a piece of family business. He's never told anyone that. He waits to see what I'll make it into.

- **a.** Make it into nothing. It's his. Just say thank you for telling me. _(relational)_ — if `st_ansel >= 3` → b_ansel_confidence = true, st_ansel = 4
- **b.** "So stop carrying it." Tell him he can choose. _(relational)_ → s14 = "fore"

Next: CH14.CLOSED.01


## CH14 — Passage Denied

_A crossing dispute closes the way home over the New Year; a complete local story; a return arrangement._

### CH14.CLOSED.01
**Tue 29 Dec, 09:00** · The Toll Gardens · I, Ansel Marr, Severin Marr, Percival Tern, Oswin Deller

Morning at the crossing office: the passage is shut. Oswin claims the Iron Footbridge lease lapsed at midwinter and his company holds the renewal; Severin backs a restrictive agreement; old Percival, retiring, wants the crossing kept common. Nobody crosses until the Fair's closing assembly decides, and that could be weeks. Three ways to get home.

_On entry:_ s14 = "fore"

- **a.** The court: speak at the Toll Gardens hearing, for common access. _(structural)_ → ch14_way = "court" → **CH14.COURT.01**
- **b.** The estate: Lucan's household is drowning in debts nobody told him about. Help, and use his family's right of passage. _(structural)_ → ch14_way = "estate" → **CH14.ESTATE.01**
- **c.** The boundary: Percival knows the old road through the border country to the orchard crossing. _(structural)_ → ch14_way = "boundary" → **CH14.BOUNDARY.01**

### CH14.COURT.01 _(branch)_
**Wed 30 Dec, 10:00** · The Toll Gardens · I, Ansel Marr, Severin Marr, Percival Tern, Oswin Deller

_When:_ `ch14_way = "court"`

The hearing in the Toll Gardens pavilion. I testify, as an outsider, to what common access means to people in Calder, and to one courier who crossed unofficially because the official fee was more than he earned. Ansel has to choose whether to speak against his father in public. The court grants a limited passage from 3 January, pending the assembly. And the lease registry, read into the record, shows Oswin's company leasing warehouse seven at Stillwater Docks since May, to 'a Calder restoration concern'.

_On entry:_ ally_court = true, still_lead = "registry", s14 = "resolved:court"

- **a.** Tell Ansel he doesn't have to speak. And mean it. _(relational)_ → st_ansel +1
- **b.** Tell Ansel this is the moment. He knows it is. _(relational)_ → ansel_spoke = true, s14 = "resolved:court"

Next: CH14.QUIET.01

### CH14.ESTATE.01 _(branch)_
**Wed 30 Dec, 09:00** · Bracken Court · I, Ansel Marr, Lucan Verre

_When:_ `ch14_way = "estate"`

The Verre estate, a day's ride out: an orchard, a mill, a household of people who'd suffer if Lucan walked away. The debts are real and concealed from him: loans against the harvest, most of them now owned by Oswin Deller. Two days of ledgers, winter work, and a kitchen table. Lucan gets leverage on Oswin; his family's old right of passage can be invoked on 3 January. And his steward's cousin works the night gate at Stillwater Docks.

_On entry:_ fr_lucan +1, still_lead = "clerk", s14 = "resolved:estate", craft +2

- **a.** Work the ledgers with Ansel till the lamps burn out. _(relational)_ → st_ansel +1
- **b.** Help in the mill with the companion I brought, or alone. _(relational)_ → craft +2

Next: CH14.QUIET.01

### CH14.BOUNDARY.01 _(branch)_
**Wed 30 Dec, 08:00** · The Glass Road · I, Ansel Marr, Percival Tern

_When:_ `ch14_way = "boundary"`

The Glass Road with Percival: an old road through unsettled border country where the puddles and ice reflect things that aren't there. In the reflections I can see bindings: three threads, taut as wires, running from somewhere downriver toward the crossing at Calder. They go to the docks. The road can't tell me why; it only shows me what. Two days out, sleeping in a ranger's hut, to the Boundary Orchard and its crossing into Orchard House, opening on the 3rd.

_On entry:_ still_lead = "threads", s14 = "resolved:boundary", fr_percival +1, knack +3

- **a.** Ask Percival why he's really retiring. _(relational)_ → fr_percival +1
- **b.** Look longer into the reflections than Percival thinks is wise. _(investigative)_ → strain +1, reached +1, threads_three = true

Next: CH14.QUIET.01

### CH14.QUIET.01
**Thu 31 Dec, 15:00** · The Travelers' House · I, Ansel Marr

The last day of the year, with nowhere to be. Snow on the lodging's roof, a stove, a card game nobody explains properly. Quiet days turn into the kind of closeness that only happens when nobody can leave. It's the person I came with who fills this afternoon.

- **a.** Adrian, off duty for the first time in the Marches, asks if I want to walk. He doesn't have a plan. _(relational)_ — if `(companion = "adrian") and (st_adrian >= 3)` → b_adrian_offduty = true, st_adrian = 4
- **b.** Micah gets a letter from home asking him back early. I tell him he's allowed to say no. _(relational)_ — if `(companion = "micah") and (st_micah >= 3)` → b_micah_boundary = true, st_micah = 4
- **c.** Nolan rebuilds the lodging's broken music box with a pocketknife, and I hold the torch. _(relational)_ — if `(companion = "nolan") and (st_nolan >= 3)` → b_nolan_work = true, st_nolan = 4
- **d.** Reuben sleeps for eleven hours and lets me bring him breakfast. _(relational)_ — if `(companion = "reuben") and (st_reuben >= 3)` → b_reuben_needs = true, st_reuben = 4
- **e.** Ansel, by the stove, tells me the thing about his father he's never told anyone. _(relational)_ — if `(st_ansel >= 3) and not(b_ansel_confidence)` → b_ansel_confidence = true, st_ansel = 4
- **f.** Everyone together, cards and cider. Nobody alone with anybody. _(expressive)_ → people +1

Next: CH14.QUIET.02

### CH14.QUIET.02
**Thu 31 Dec, 23:40** · The Toll Gardens · I, Ansel Marr

New Year's Eve at the Candle Fair: everyone carrying a lit candle to the pond in the Toll Gardens to set it on the water at midnight. Ansel finds me there. He has no message to deliver, no lease, no father's errand. He came because he wanted to.

- **a.** Tell him I'm glad he came without a reason. Mean all of it. _(relational)_ — if `b_ansel_confidence and (hurt_ansel < 2)` → b_ansel_nopretext = true, st_ansel = 5, out_ansel = true
- **b.** Set my candle next to his and say happy new year. _(relational)_ → people +1

Next: CH14.NY.01

### CH14.NY.01
**Fri 1 Jan, 11:00** · Bracken Court · I, Ansel Marr

New Year's Day in Bracken Court, grey and quiet. The way home opens on the 3rd. Tomorrow, the docks: two hours downriver by the local road, following whatever lead the last three days gave us.


Next: CH15.ROAD.01


## CH15 — Stillwater

_The holding site exists; no safe extraction yet. Clive seen or learned of. A credible exit._

### CH15.ROAD.01
**Sat 2 Jan, 07:00** · Bracken Court · I, Ansel Marr

Two hours on the local road, downriver, in a hired cart that smells of apples. Stillwater: working docks, old rented warehouses, boat repairs, crews. Warehouse seven has new locks.

- **a.** Watch from the boat sheds. Something is scheduled for this morning; the gate crew said so. _(structural)_ → ch15_way = "observe" → **CH15.OBSERVE.01**
- **b.** Find someone who works inside. We have a name. _(structural)_ — if `(still_lead = "clerk") or (still_lead = "registry")` → ch15_way = "witness" → **CH15.WITNESS.01**

### CH15.OBSERVE.01 _(branch)_
**Sat 2 Jan, 10:30** · Stillwater Docks · I, Ansel Marr

_When:_ `ch15_way = "observe"`

A covered boat at warehouse seven's water door. Two men carry a third between them: a big man in a flat cap, clay under his fingernails, head lolling. I know him. Clive Merritt, who made the donors laugh at the Whitcomb. The knack finds a fresh thread in him, anchored but not yet running anywhere.

_On entry:_ know_clive_taken = true, know_donors +1

- **a.** Get closer. See the faces. Stay unseen. _(investigative)_ — if `nerve >= 40` → nerve +3, saw_crew = true
- **b.** Stay where I am. Count them. Photograph the boat. _(investigative)_ → boat_photo = true
- **c.** Stand up without thinking. _(expressive)_ → enemy_aware +1
  - _A man on the jetty looks straight at me. The ring now knows someone was watching Stillwater._

Next: CH15.CHAMBERS.01

### CH15.WITNESS.01 _(branch)_
**Sat 2 Jan, 10:30** · Stillwater Docks · I, Ansel Marr

_When:_ `ch15_way = "witness"`

The night-gate man (Lucan's steward's cousin, or a clerk named in the lease registry), over bad coffee in a crew hut. 'Sick men', he calls them. Warehouse seven. A physician's assistant from Calder comes twice a week with bags of fluid. A new one came in at dawn: big, a flat cap, clay on his hands. He's ashamed he didn't ask why. He tells us the shift change, and which window.

_On entry:_ know_clive_taken = true, know_donors +1, shift_change = true

- **a.** Promise him nobody will know it was him. Keep the promise. _(relational)_ → witness_safe = true
- **b.** Ask him to be our man inside on the night we come back. _(investigative)_ → inside_man = true
  - _He says no, then yes, then asks for money, then says he'll do it for nothing. A real person's decision; it holds._

Next: CH15.CHAMBERS.01

### CH15.CHAMBERS.01
**Sat 2 Jan, 13:30** · Stillwater Docks · I, Ansel Marr, Eamon Kerr, Hugo Naranjo, Clive Merritt

Through the high window at the shift change: warehouse seven has been made into a ward. Three beds, drips, a stove. Eamon, grey and thin but breathing; Hugo, whom I last saw waving from a night bus; Clive, newly arrived. And the knack sees it all at once: two threads running taut out of the building, back toward Calder, to two men I know; and a third, freshly anchored, waiting for someone. We can't take them. The links would kill whoever's on the other end, and there are four armed men and a gate.

_On entry:_ e14 = true, e14_src = "stillwater", know_donors = 3, suspect_donor = true

- **a.** Look at Eamon until he feels it. Let him know someone came. _(relational)_ → eamon_saw = true, strain +1
- **b.** Memorise everything: doors, locks, the stove, the guard's habits. _(investigative)_ → still_layout = true, craft +2

Next: CH15.EXIT.01

### CH15.EXIT.01
**Sat 2 Jan, 16:00** · Stillwater Docks · I, Ansel Marr

Getting out. Dusk comes early on the river. Whatever we did this morning decides how easy this is.

- **a.** Run for the cart with the gate crew shouting behind us. _(investigative)_ — if `enemy_aware >= 2` → nerve +3, hurt_mc +1, enemy_aware = 3
- **b.** Walk out with a crew coming off shift, heads down, like we belong. _(investigative)_ — if `enemy_aware < 2` → people +2

Next: CH15.HOME.01

### CH15.HOME.01
**Sun 3 Jan, 23:15** · Latch Lane print shop and upstairs home · I, Martin Avery

Home on the 3rd, late, through whichever door the last days opened: the Iron Footbridge with Harlan pretending not to see us, or the orchard crossing into Malcolm's kitchen and a lift down the ridge. Martin is up, in his dressing gown, pretending he just happened to be.

- **a.** Hug him. Say nothing. He doesn't ask. _(relational)_ → fr_martin +1
- **b.** Go straight up. I have to write it all down before I sleep. _(expressive)_

Next: CH16.HOME.01


## CH16 — The Third Return

_Back in Calder: Felix changed; patients connected to donors._

### CH16.HOME.01
**Mon 4 Jan, 09:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Monday. The shop in January: dead quiet, the Christmas money already gone to the bank. Martin has decided something while I was away (a part-timer, shorter hours, or selling the second press, depending on what I did in the autumn). Will's program trial is in April; he's filming his own games now. A text from Ellis, sent last night at three: 'Felix isn't right. Can you come?'

_On entry:_ s01 = "fore"

- **a.** Tell Martin where I really was. Not all of it. More than before. _(relational)_ → fr_martin +1
- **b.** Go. Ellis never asks. _(relational)_ → st_ellis +1

Next: CH16.FELIX.01

### CH16.FELIX.01
**Mon 4 Jan, 14:00** · Bellweather Court · I, Felix Brecht, Ellis Okafor

Felix's room in Bellweather Court: blackout blinds, a laptop of footage. The knack in the doorway: a third rope, fresh and raw, running out of him toward the river and away, to the man I watched them carry into warehouse seven. Felix remembers going to film Pump Nine at night, a car, a kind voice. Then waking in his own bed, cold, with a text telling him he'd had a 'turn' and must stay quiet. Ellis sits on the floor holding his hand.

_On entry:_ fr_felix +1, felix_returned = true

- **a.** Ask to see the footage. Tell him why. Let him say no. _(relational)_ → e11 = true, e11_src = "felix", pump_film = true, felix_shared = true
- **b.** Don't ask. Milo lent him the camera; Milo keeps backups. _(investigative)_ → e11 = true, e11_src = "milo", pump_film = true, fr_milo +1
- **c.** Tell Felix about Quentin and Silas. He isn't alone. _(relational)_ → fr_felix +1, felix_told = true

Next: CH16.FELIX.02

### CH16.FELIX.02
**Mon 4 Jan, 22:00** · Okafor Restoration · I, Felix Brecht, Ellis Okafor, Chukwudi Okafor

That night at Okafor Restoration, Felix's new link flares and he goes grey in the chair, gasping. Ellis knows how to steady a binding, but he needs his back to the room and his hands on the token, and Felix is frightened and fighting him.

- **a.** Hold Felix. Talk. Keep him still while Ellis works. _(relational)_ — if `(st_ellis >= 3) and not(b_ellis_danger)` → b_ellis_danger = true, st_ellis = 4
- **b.** Watch the rope and tell Ellis when it slackens. _(investigative)_ — if `knack >= 25` → knack +3, st_ellis +1
- **c.** Get Chukwudi. He's done this before. _(relational)_ → fr_chukwudi +1

Next: CH16.PATIENTS.01

### CH16.PATIENTS.01
**Wed 6 Jan, 19:00** · Okafor Restoration · I, Quentin Shaw, Silas Fenwick, Felix Brecht, Chukwudi Okafor, Ilyas Qureshi

Wednesday evening. Three men who died and came back, in one workroom for the first time: Quentin, Silas, Felix. Chukwudi tests the material anchors; Ilyas brings his numbers; I trace the ropes. Quentin's runs to Eamon. Silas's runs to Hugo. Felix's runs to Clive. The donors are alive, and every day the patients spend on them is a day taken from someone chained in a warehouse. Quentin is the first to say it out loud, and he's angry, and he's right.

_On entry:_ e14_c = true, patients_matched = true, know_donors = 3

- **a.** Let Quentin run the room. He's earned it. _(relational)_ — if `(st_quentin >= 3) and not(b_quentin_acts)` → b_quentin_acts = true, st_quentin = 4
- **b.** Ask each of them what they want. Separately. No audience. _(relational)_ → people +2, patients_asked = true

Next: CH16.IDENT.01

### CH16.IDENT.01
**Thu 7 Jan, 11:00** · Rusk Funeral Rooms · I, Simeon Rusk, Reuben Pike

Who is the man in the good coat? The van in the lane had a lily painted on it. Rusk Funeral Rooms' lily. Simeon Rusk is gentle with the bereaved and harsh with anyone who treats their grief as an inconvenience, and his ledger for 30 August has an entry that was changed afterwards: a transfer under an old Mercy House arrangement, with an authorisation code. Reuben reads the code and sits down on a coffin trolley. It's Damian's.

_On entry:_ e04 = true, e04_src = "rusk", know_damian = true

- **a.** Stay with Reuben. Let him say whatever he needs to about the man who taught him. _(relational)_ — if `st_reuben >= 3` → b_reuben_damian = true, st_reuben = 4
- **b.** Press Simeon: who else has used the arrangement, and when? _(investigative)_ → e04_c = true, simeon_pressed = true
- **c.** Check it a second way: the Southmere first-aid course that gave Quentin his token. Who taught it? _(investigative)_ — if `course_lead` → e04_c = true, course_confirms = true
  - _The recreation centre's August register: 'Instructor: Dr D. Holt.' The same man._

Next: CH16.WEEK.01

### CH16.WEEK.01
**Thu 7 Jan, 18:00** · Latch Lane print shop and upstairs home · I

Thursday night. We know who. We know where. We don't know how to get three men out of a warehouse without killing three others. I can't think straight. There's one person I want to spend the rest of this week with.

- **a.** Adrian. _(structural)_ — if `st_adrian >= 3` → wk16 = "adrian" → **CH16.MERCY.01**
- **b.** Micah. _(structural)_ — if `st_micah >= 3` → wk16 = "micah" → **CH16.EASTBANK.01**
- **c.** Dominic. _(structural)_ — if `st_dominic >= 3` → wk16 = "dominic" → **CH16.REGENT.01**
- **d.** Nolan. _(structural)_ — if `st_nolan >= 3` → wk16 = "nolan" → **CH16.HOME.02**
- **e.** Quentin. _(structural)_ — if `st_quentin >= 3` → wk16 = "quentin" → **CH16.PATIENTS.02**
- **f.** Ellis. _(structural)_ — if `st_ellis >= 3` → wk16 = "ellis" → **CH16.FELIX.03**
- **g.** Reuben. _(structural)_ — if `st_reuben >= 3` → wk16 = "reuben" → **CH16.REUBEN.01**
- **h.** Martin and Will. Home. _(structural)_ → wk16 = "home" → **CH16.FAMILY.01**

### CH16.MERCY.01 _(branch)_
**Fri 8 Jan, 20:00** · Mercy House · I, Adrian Keene

_When:_ `wk16 = "adrian"`

Mercy House's workshop, Adrian mending the elastic on the jacket everybody tells him to throw away. The promotion review is next month, and the training report he wrote for Emmett is in the file.

- **a.** Ask him about the report. Let him tell it. _(relational)_ — if `not(b_adrian_report)` → b_adrian_report = true, st_adrian = 4, s07 = "fore"
- **b.** Help with the jacket. Talk about anything but work. _(relational)_ → people +1

Next: CH16.MERCY.02

### CH16.MERCY.02 _(branch)_
**Fri 8 Jan, 23:30** · Mercy House · I, Adrian Keene

_When:_ `wk16 = "adrian"`

The roof at half eleven, cold enough to hurt. Adrian says, in complete practical sentences, that he keeps coming to find me when there's no reason, and that when I disagree with him it stays with him for days, and he doesn't know what to do about either. Then he waits. He's learning to wait.

- **a.** "I know what to do about it." Tell him what I want. _(relational)_ — if `b_adrian_offduty and b_adrian_report and (hurt_adrian < 2)` → b_adrian_want = true, st_adrian = 5, out_adrian = true
- **b.** "You're my friend. That's what that is." Close the door gently. _(relational)_ → closed_adrian = true
- **c.** "Ask me again when this is over." _(relational)_ → adrian_later = true

Next: CH16.END.01

### CH16.EASTBANK.01 _(branch)_
**Fri 8 Jan, 19:00** · Serrano Yard · I, Micah Serrano, Ernesto Serrano, Leandro Serrano

_When:_ `wk16 = "micah"`

Serrano Yard. Micah's outside apprenticeship starts Monday, and Ernesto has booked him onto three family jobs the same week. Leandro, who said he'd cover, has quietly stopped saying it. Micah is agreeing to everything in a flat voice.

- **a.** Take Micah out to the yard and ask him what he'd say if he were allowed to. _(relational)_ — if `(st_micah >= 3) and not(b_micah_boundary)` → b_micah_boundary = true, st_micah = 4, s04 = "fore"
- **b.** Tell Ernesto the apprenticeship is the job, and the family can find someone else. _(relational)_ → fr_ernesto -1, s04 = "fore", nerve +2

Next: CH16.END.01

### CH16.REGENT.01 _(branch)_
**Fri 8 Jan, 21:00** · The Regent · I, Dominic Bell, Gideon Shaw, Quentin Shaw

_When:_ `wk16 = "dominic"`

The Regent in January, snow on the marquee. Gideon and Quentin, in the auditorium, having the first honest argument about who turned his back on whom. Dominic and I leave them to it and go up to the projection booth; he's been asked to sing at Benoît's spring showcase and hasn't answered. He lets me sit with the question instead of fixing it.

- **a.** Stay until nearly dawn. Help him with the shutters when it's time, the way he asks. _(relational)_ — if `(st_dominic >= 3) and not(b_dominic_dawn)` → b_dominic_dawn = true, st_dominic = 4
- **b.** Tell him he should do the showcase. Decide it for him. _(relational)_ → managed_dominic = true, s05 = "fore"

Next: CH16.END.01

### CH16.HOME.02 _(branch)_
**Fri 8 Jan, 22:00** · Riverside Steps · I, Nolan Voss

_When:_ `wk16 = "nolan"`

Riverside Steps, frozen at the edges. Nolan's application is due in a week. He asks, awkward and direct, the way he never is: whether there's a reason for him to stay. He doesn't turn anything over in his hands. He's holding still for this.

- **a.** "Yes. There's a reason." Say it plainly. _(relational)_ — if `(b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)` → b_nolan_talk = true, st_nolan = 5, out_nolan = true
- **b.** "Send it. Go. You'd be brilliant." And mean it as a friend. _(relational)_ → closed_nolan = true, s02 = "fore"
- **c.** "Send it anyway. A reason to stay shouldn't have to be a reason not to go." _(relational)_ → b_nolan_talk = true, st_nolan = 5, out_nolan = true, s02 = "fore"

Next: CH16.END.01

### CH16.PATIENTS.02 _(branch)_
**Fri 8 Jan, 13:00** · Crescent Market · I, Quentin Shaw

_When:_ `wk16 = "quentin"`

Crescent Market on a cold Friday: Quentin buying oranges and being rude about the price. It's his idea. He says he's sick of being a case, and I'm the only person who looks at him like he's a person and a case at the same time, and today he'd like just the first thing.

- **a.** Be just the first thing. Carry the oranges. _(relational)_ — if `(st_quentin >= 3) and not(b_quentin_nothing)` → b_quentin_nothing = true, st_quentin = 4
- **b.** Ask how he's sleeping. _(relational)_ → hurt_quentin +1

Next: CH16.END.01

### CH16.FELIX.03 _(branch)_
**Fri 8 Jan, 23:00** · Observatory Hill Park · I, Ellis Okafor

_When:_ `wk16 = "ellis"`

Observatory Hill at eleven, snow on the dome. Ellis hasn't slept since Felix. His placement interview is in two weeks and he hasn't told his father. For once he doesn't make it look easy.

- **a.** Stay. Let him be a mess. Don't try to fix it. _(relational)_ — if `b_ellis_danger and (hurt_ellis < 2) and not(b_ellis_badday)` → b_ellis_badday = true, st_ellis = 5, out_ellis = true
- **b.** Help him plan how to tell his father. _(relational)_ → s03 = "fore"

Next: CH16.END.01

### CH16.REUBEN.01 _(branch)_
**Fri 8 Jan, 20:00** · Mercy House · I, Reuben Pike

_When:_ `wk16 = "reuben"`

Reuben hasn't eaten since the funeral rooms. He's arranging the infirmary's supply cupboard for the third time. He doesn't want to talk about Damian. He doesn't want to be alone either, and he's never once in his life asked for the second thing.

- **a.** Sit on the counter and hand him things until he stops. Then make him eat. _(relational)_ — if `(st_reuben >= 3) and not(b_reuben_needs)` → b_reuben_needs = true, st_reuben = 4
- **b.** Leave him to it. He likes to be useful. _(expressive)_

Next: CH16.END.01

### CH16.FAMILY.01 _(branch)_
**Fri 8 Jan, 19:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

_When:_ `wk16 = "home"`

Friday tea above the shop, then Will's game film on the laptop, Martin falling asleep in the chair. Ordinary. I needed ordinary more than anything.

_On entry:_ fr_will +1, fr_martin +1


Next: CH16.END.01

### CH16.END.01
**Sat 9 Jan, 22:00** · Latch Lane print shop and upstairs home · I

Saturday night, the board on my wall: three patients, three donors, a warehouse in the Marches, a pumping station called Pump Nine, and a man called Damian Holt. And no way to end it that doesn't kill someone. We need a method we can defend. A letter from Ansel, on real paper, from Bracken Court: the assembly will sit in February, and he intends to speak.

> **Letter.** Ansel: 'I find I have no official reason to write. I am writing anyway. The pastries here are inferior. Please tell me what you had for breakfast.'


Next: CH17.OPEN.01


## CH17 — What I Ask of Him

_Deep winter. A major trust/disclosure question; one romance or friendship moves forward._

### CH17.OPEN.01
**Sat 23 Jan, 10:00** · Latch Lane print shop and upstairs home · I, Martin Avery

The deepest cold of the year. The river freezes at the edges; the buses run late; the print shop's pipes need a hairdryer every morning. Quentin, Silas and Felix are tiring: grey by the afternoon, cold hands, sleeping twelve hours. The donors are weakening and the patients feel it. We need a method, and before that, I need to ask someone for something that matters.


Next: CH17.CHOICE.01

### CH17.CHOICE.01
**Sat 23 Jan, 12:00** · Latch Lane print shop and upstairs home · I

Whom do I ask?

- **a.** Adrian. _(structural)_ — if `(st_adrian >= 3) and not(closed_adrian)` → ch17_ask = "adrian" → **CH17.ADRIAN.01**
- **b.** Micah. _(structural)_ — if `(st_micah >= 3) and not(closed_micah)` → ch17_ask = "micah" → **CH17.MICAH.01**
- **c.** Ellis. _(structural)_ — if `(st_ellis >= 3) and not(closed_ellis)` → ch17_ask = "ellis" → **CH17.ELLIS.01**
- **d.** Dominic. _(structural)_ — if `(st_dominic >= 3) and not(closed_dominic)` → ch17_ask = "dominic" → **CH17.DOMINIC.01**
- **e.** Nolan. _(structural)_ — if `(st_nolan >= 3) and not(closed_nolan)` → ch17_ask = "nolan" → **CH17.NOLAN.01**
- **f.** Ansel. He's in Calder this week for the passage papers. _(structural)_ — if `(st_ansel >= 3) and not(closed_ansel)` → ch17_ask = "ansel" → **CH17.ANSEL.01**
- **g.** Quentin. _(structural)_ — if `(st_quentin >= 3) and not(closed_quentin)` → ch17_ask = "quentin" → **CH17.QUENTIN.01**
- **h.** Reuben. _(structural)_ — if `(st_reuben >= 3) and not(closed_reuben)` → ch17_ask = "reuben" → **CH17.REUBEN.01**
- **i.** Martin and Will. It's time they knew something true. _(structural)_ → ch17_ask = "family" → **CH17.FAMILY.01**

### CH17.ADRIAN.01 _(route)_
**Sun 24 Jan, 20:00** · Mercy House · I, Adrian Keene

_When:_ `ch17_ask = "adrian"`

Mercy House, the empty training hall under the old operating-theatre lights. I ask Adrian to put Mercy House behind a rescue Orrell will want to control, and to tell the truth about his report at the review, because we'll need people to trust his word.

- **a.** Tell him everything first: what I am, and who I am. _(relational)_ → out_adrian = true, gift_adrian = true
- **b.** Tell him about the knack, properly. Not the other thing. Not yet. _(relational)_ → gift_adrian = true
- **c.** Just ask. The rest can wait. _(relational)_

Next: CH17.ADRIAN.02

### CH17.ADRIAN.02 _(route)_
**Sun 24 Jan, 23:00** · Mercy House · I, Adrian Keene

_When:_ `ch17_ask = "adrian"`

He says yes to the rescue in complete, practical sentences and then can't finish the next one. The rest of it is in the room with us.

- **a.** Close the distance. He's allowed to stop planning. _(relational)_ — if `(st_adrian >= 5) and (hurt_adrian < 2)` → st_adrian = 6, out_adrian = true
- **b.** Tell him the thing he keeps not saying is the thing I keep not saying. _(relational)_ — if `(st_adrian = 4) and (b_adrian_offduty and b_adrian_report) and (hurt_adrian < 2)` → st_adrian = 5, out_adrian = true, b_adrian_want = true
- **c.** Keep it where it is: the best partner I've had. He nods, relieved and not. _(relational)_ → friends_ch17 = true

Next: CH17.ADRIAN.03

### CH17.ADRIAN.03 _(route)_
**Mon 25 Jan, 07:00** · Mercy House · I, Adrian Keene

_When:_ `ch17_ask = "adrian"`

Morning. Whatever the night was, the review is in three weeks, and Adrian has decided to tell the truth in it.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_adrian = 5` → st_adrian = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_adrian = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_adrian != 5`

Next: CH17.END.01

### CH17.MICAH.01 _(route)_
**Sun 24 Jan, 19:00** · Serrano Yard · I, Micah Serrano

_When:_ `ch17_ask = "micah"`

Serrano Yard's workshop, the stove going. I ask Micah whether he'd be one of the volunteers if we build a shared bridge: his body, his strength, for a stranger. He's the person least able to say no to anyone, so I tell him he can, and I'll still be here.

- **a.** Tell him everything: the knack, and me. _(relational)_ → out_micah = true, gift_micah = true
- **b.** Tell him about the knack. Just that. _(relational)_ → gift_micah = true
- **c.** Just ask, and make the no easy. _(relational)_

Next: CH17.MICAH.02

### CH17.MICAH.02 _(route)_
**Sun 24 Jan, 23:30** · Serrano Yard · I, Micah Serrano

_When:_ `ch17_ask = "micah"`

He takes a long time. Then he says yes to the bridge, for himself, not for his family. Then he says the other thing, clumsily, not naming anything bigger than tonight.

- **a.** Say yes to tonight. And to the next one. _(relational)_ — if `(st_micah >= 5) and (hurt_micah < 2)` → st_micah = 6, out_micah = true
- **b.** Name the one specific thing I want, and let him name his. _(relational)_ — if `(st_micah = 4) and (b_micah_wolf and b_micah_boundary) and (hurt_micah < 2)` → st_micah = 5, out_micah = true, b_micah_want = true
- **c.** Keep it a friendship. He's relieved, and a bit sad, and he'll still be a volunteer. _(relational)_ → friends_ch17 = true

Next: CH17.MICAH.03

### CH17.MICAH.03 _(route)_
**Mon 25 Jan, 08:00** · Serrano Yard · I, Micah Serrano

_When:_ `ch17_ask = "micah"`

Morning in the yard. His apprenticeship started last week. Ernesto is learning to ask instead of assign, slowly.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_micah = 5` → st_micah = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_micah = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_micah != 5`

Next: CH17.END.01

### CH17.ELLIS.01 _(route)_
**Sun 24 Jan, 18:00** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor

_When:_ `ch17_ask = "ellis"`

The Okafors' workroom after hours. His placement interview went well; they want him in September. I ask him to stay until March and design a shared bridge with his father: the most important work either of them will ever do, and the thing most likely to keep him here.

- **a.** Tell him everything, and that he doesn't owe me staying. _(relational)_ → out_ellis = true, gift_ellis = true
- **b.** Tell him what I see when I look at a bond. It's the tool he needs. _(relational)_ → gift_ellis = true
- **c.** Just ask. _(relational)_

Next: CH17.ELLIS.02

### CH17.ELLIS.02 _(route)_
**Sun 24 Jan, 23:00** · Okafor Restoration · I, Ellis Okafor

_When:_ `ch17_ask = "ellis"`

He says yes to March and yes to the work, and then, for once, doesn't curate what comes next.

- **a.** Let him be ordinary with me. Stay. _(relational)_ — if `(st_ellis >= 5) and (hurt_ellis < 2)` → st_ellis = 6, out_ellis = true
- **b.** Tell him I'd want him on a bad day. Especially on a bad day. _(relational)_ — if `(st_ellis = 4) and (b_ellis_danger) and (hurt_ellis < 2)` → st_ellis = 5, out_ellis = true, b_ellis_badday = true
- **c.** Keep it the best kind of friendship: the one where you tell each other the truth about the work. _(relational)_ → friends_ch17 = true

Next: CH17.ELLIS.03

### CH17.ELLIS.03 _(route)_
**Mon 25 Jan, 09:00** · Okafor Restoration · I, Ellis Okafor

_When:_ `ch17_ask = "ellis"`

Morning. Chukwudi finds us asleep on the workroom couch among the sketches, and says nothing, pointedly.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_ellis = 5` → st_ellis = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_ellis = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_ellis != 5`

Next: CH17.END.01

### CH17.DOMINIC.01 _(route)_
**Sun 24 Jan, 19:00** · The Regent · I, Dominic Bell

_When:_ `ch17_ask = "dominic"`

The Regent's projection booth. I ask Dominic to be at the patient site on the night: the fastest, strongest person we have, in a room full of blood and fear. And to tell me honestly if he can't.

- **a.** Tell him everything, and don't manage his answer. _(relational)_ → out_dominic = true, gift_dominic = true
- **b.** Tell him what the knack shows me of him. It's not what he fears. _(relational)_ → gift_dominic = true
- **c.** Just ask. _(relational)_

Next: CH17.DOMINIC.02

### CH17.DOMINIC.02 _(route)_
**Sun 24 Jan, 23:45** · The Regent · I, Dominic Bell

_When:_ `ch17_ask = "dominic"`

He tells me honestly: he can, if someone he trusts is watching him. Then he asks what I want. Nobody's asked him that about himself for a year, and he's asking me.

- **a.** Tell him what I want is him, all of him, changed hours and all. _(relational)_ — if `(st_dominic >= 5) and (hurt_dominic < 2)` → st_dominic = 6, out_dominic = true
- **b.** Answer him, finally. _(relational)_ — if `(st_dominic = 4) and (b_dominic_dawn and not(managed_dominic)) and (hurt_dominic < 2)` → st_dominic = 5, out_dominic = true, b_dominic_ask = true
- **c.** Tell him I want him singing in April. It's true, and it's all I say. _(relational)_ → friends_ch17 = true

Next: CH17.DOMINIC.03

### CH17.DOMINIC.03 _(route)_
**Mon 25 Jan, 06:30** · The Regent · I, Dominic Bell

_When:_ `ch17_ask = "dominic"`

Before dawn, the shutters, and a conversation about the showcase that I don't decide for him.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_dominic = 5` → st_dominic = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_dominic = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_dominic != 5`

Next: CH17.END.01

### CH17.NOLAN.01 _(route)_
**Sun 24 Jan, 20:00** · Laird's Flatshare · I, Nolan Voss

_When:_ `ch17_ask = "nolan"`

Nolan's room at Laird's, the application sent. I ask him to run the radios and relays on the night, across a crossing into another world, and to know exactly what that means before he says yes.

- **a.** Tell him everything I haven't. All of it. _(relational)_ → out_nolan = true, gift_nolan = true
- **b.** Tell him the parts about the knack he doesn't know yet. _(relational)_ → gift_nolan = true
- **c.** Just ask. _(relational)_

Next: CH17.NOLAN.02

### CH17.NOLAN.02 _(route)_
**Sun 24 Jan, 23:30** · Laird's Flatshare · I, Nolan Voss

_When:_ `ch17_ask = "nolan"`

He says yes. He says he's been waiting for me to ask him for something that mattered since we were sixteen. Then neither of us knows what to do with our hands.

- **a.** Do something with our hands. _(relational)_ — if `(st_nolan >= 5) and (hurt_nolan < 2)` → st_nolan = 6, out_nolan = true
- **b.** Have the direct, awkward conversation, finally. _(relational)_ — if `(st_nolan = 4) and (b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)` → st_nolan = 5, out_nolan = true, b_nolan_talk = true
- **c.** Tell him he's my best friend and always will be. It's the truest thing I say all year. _(relational)_ → friends_ch17 = true

Next: CH17.NOLAN.03

### CH17.NOLAN.03 _(route)_
**Mon 25 Jan, 10:00** · Laird's Flatshare · I, Nolan Voss

_When:_ `ch17_ask = "nolan"`

Morning at Laird's. Peter pretends not to notice anything. Owen makes too much toast.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_nolan = 5` → st_nolan = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_nolan = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_nolan != 5`

Next: CH17.END.01

### CH17.ANSEL.01 _(route)_
**Tue 26 Jan, 19:30** · The Neutral Table · I, Ansel Marr

_When:_ `ch17_ask = "ansel"`

The Neutral Table's upstairs room. I ask Ansel to secure our crossing and the way to Stillwater on the night, against his father's wishes if it comes to it: his first unassigned choice.

- **a.** Tell him everything. No bargain attached. _(relational)_ → out_ansel = true, gift_ansel = true
- **b.** Tell him about the knack; he'll understand keeping a thing quiet. _(relational)_ → gift_ansel = true
- **c.** Just ask. _(relational)_

Next: CH17.ANSEL.02

### CH17.ANSEL.02 _(route)_
**Tue 26 Jan, 23:00** · The Neutral Table · I, Ansel Marr

_When:_ `ch17_ask = "ansel"`

He says yes as if he's been practising, and then with no practice at all he says he doesn't have an official reason to stay tonight.

- **a.** He doesn't need one. _(relational)_ — if `(st_ansel >= 5) and (hurt_ansel < 2)` → st_ansel = 6, out_ansel = true
- **b.** Tell him he never needed a reason to come to my door. _(relational)_ — if `(st_ansel = 4) and (b_ansel_confidence) and (hurt_ansel < 2)` → st_ansel = 5, out_ansel = true, b_ansel_nopretext = true
- **c.** Tell him he's the best friend I've made this year, and watch him be moved and formal about it. _(relational)_ → friends_ch17 = true

Next: CH17.ANSEL.03

### CH17.ANSEL.03 _(route)_
**Wed 27 Jan, 08:30** · The Neutral Table · I, Ansel Marr

_When:_ `ch17_ask = "ansel"`

Morning. He goes back through the crossing with his own intentions, for once, and a paper bag of Calder pastries he claims to despise.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_ansel = 5` → st_ansel = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_ansel = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_ansel != 5`

Next: CH17.END.01

### CH17.QUENTIN.01 _(route)_
**Sun 24 Jan, 18:00** · Willow Court · I, Quentin Shaw

_When:_ `ch17_ask = "quentin"`

Quentin's room in Willow Court. I don't ask for anything. I ask what he wants done with his own life in all this, and I mean it, and I wait.

- **a.** Tell him everything about me first, so it's even. _(relational)_ → out_quentin = true, gift_quentin = true
- **b.** Tell him what I see in him, the rope, all of it. _(relational)_ → gift_quentin = true
- **c.** Just ask, and wait. _(relational)_

Next: CH17.QUENTIN.02

### CH17.QUENTIN.02 _(route)_
**Sun 24 Jan, 22:30** · Willow Court · I, Quentin Shaw

_When:_ `ch17_ask = "quentin"`

He tells me what he wants from the rescue: to be free of Eamon's life, whatever it costs him, and to decide the rest himself. And then, because nothing needs investigating, he decides something else.

- **a.** Let him decide, and say yes. _(relational)_ — if `(st_quentin >= 5) and (hurt_quentin < 2)` → st_quentin = 6, out_quentin = true
- **b.** He reaches first. I meet him. _(relational)_ — if `(st_quentin = 4) and (b_quentin_acts and b_quentin_nothing) and (hurt_quentin < 2)` → st_quentin = 5, out_quentin = true, b_quentin_initiates = true
- **c.** Tell him I'm his friend, whatever happens in March. He holds me to it. _(relational)_ → friends_ch17 = true

Next: CH17.QUENTIN.03

### CH17.QUENTIN.03 _(route)_
**Mon 25 Jan, 09:30** · Willow Court · I, Quentin Shaw

_When:_ `ch17_ask = "quentin"`

Morning. He's grey and cold and he laughs at something, and I'd do anything to keep hearing that.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_quentin = 5` → st_quentin = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_quentin = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_quentin != 5`

Next: CH17.END.01

### CH17.REUBEN.01 _(route)_
**Sun 24 Jan, 21:00** · Mercy House · I, Reuben Pike

_When:_ `ch17_ask = "reuben"`

Mercy House infirmary after lights out. I ask Reuben to lead the medical side of a rescue against the man who taught him everything. And then I ask him to let someone take care of him while he does it.

- **a.** Tell him everything, and that I'm asking as more than a colleague. _(relational)_ → out_reuben = true, gift_reuben = true
- **b.** Tell him what the knack says about the links. He'll need it. _(relational)_ → gift_reuben = true
- **c.** Just ask. _(relational)_

Next: CH17.REUBEN.02

### CH17.REUBEN.02 _(route)_
**Sun 24 Jan, 23:59** · Mercy House · I, Reuben Pike

_When:_ `ch17_ask = "reuben"`

He says yes to the rescue before I've finished. The second question takes him much longer, and when he answers it, it isn't as a medic.

- **a.** Stay. There's no reason to, and I stay. _(relational)_ — if `(st_reuben >= 5) and (hurt_reuben < 2)` → st_reuben = 6, out_reuben = true
- **b.** Tell him the reason's gone and I'm still here. _(relational)_ — if `(st_reuben = 4) and (b_reuben_needs) and (hurt_reuben < 2)` → st_reuben = 5, out_reuben = true, b_reuben_stay = true
- **c.** Tell him he's the best person I know. He goes red to the ears. _(relational)_ → friends_ch17 = true

Next: CH17.REUBEN.03

### CH17.REUBEN.03 _(route)_
**Mon 25 Jan, 07:30** · Mercy House · I, Reuben Pike

_When:_ `ch17_ask = "reuben"`

Morning in the infirmary kitchen. He lets me make the tea. It's a small thing. It isn't.

_On entry:_ volunteers +1

- **a.** Don't wait for March. Take the next step together, now, on purpose. _(relational)_ — if `st_reuben = 5` → st_reuben = 6
- **b.** Go slowly. We both know. That's enough for this winter. _(relational)_ — if `st_reuben = 5` → slow_ch17 = true
- **c.** Get up. There's work. _(expressive)_ — if `st_reuben != 5`

Next: CH17.END.01

### CH17.FAMILY.01 _(route)_
**Sun 24 Jan, 19:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

_When:_ `ch17_ask = "family"`

The kitchen table above the shop, snow outside, Will's homework and Martin's accounts pushed aside. I ask them for their trust for six weeks, without all the reasons. And I tell them something true.

- **a.** Tell them about the knack. All of it, from when I was small. _(relational)_ → gift_martin = true, fr_martin +1, fr_will +1
- **b.** Tell them I'm gay. Just that. It's the first time I've said it out loud to anyone. _(relational)_ → out_family = true, fr_martin +1, fr_will +1
- **c.** Tell them both things. _(relational)_ → gift_martin = true, out_family = true, fr_martin +1, fr_will +1
- **d.** Tell them about the case, and ask them to trust me about the rest. _(relational)_ → family_case = true

Next: CH17.FAMILY.02

### CH17.FAMILY.02 _(route)_
**Sun 24 Jan, 22:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

_When:_ `ch17_ask = "family"`

Martin takes his glasses off and puts them on again. Will says something unfair and then something kind. Nobody leaves the table. Later, Martin knocks on my door with a mug of tea and says he'd like to help, if there's anything a printer can do.

_On entry:_ volunteers +1


Next: CH17.END.01

### CH17.END.01
**Sun 31 Jan, 18:00** · Latch Lane print shop and upstairs home · I

The last day of January. Whatever I asked, and whatever I was answered, the coalition is waiting: we need a method we can defend, by March, and the patients are getting colder.


Next: CH18.OPEN.01


## CH18 — A Method We Can Defend

_February: test full, interim, single-pair and extraction plans; gather materials and willing people._

### CH18.OPEN.01
**Mon 1 Feb, 19:00** · Latch Lane print shop and upstairs home · I

February. The coalition needs a table to sit at. Where we meet says something about who we'll answer to.

- **a.** Mercy House. An institution that can be held to account, if we hold it. _(structural)_ — if `know_wardens` → coalition_seat = "mercy"
- **b.** The Okafors' workroom. Neutral, practical, and nobody's headquarters. _(structural)_ → coalition_seat = "workroom"

Next: CH18.TABLE.01

### CH18.TABLE.01
**Mon 1 Feb, 20:30** · Okafor Restoration · I, Chukwudi Okafor, Ellis Okafor, Reuben Pike, Malcolm Tait, Florian Adebayo

The first meeting. On the table, four ways to end it: a distributed bridge (several willing people each carrying a little, the way the screen was mended); an interim bridge (one volunteer per patient, heavy and slow, with medical support); the single-pair method Damian himself uses, for one patient only; or cutting the donors free and letting the patients' support end. Florian asks everyone to separate what they know from what they hope.

_On entry:_ options_known = true


Next: CH18.FRAME.01

### CH18.FRAME.01
**Wed 3 Feb, 11:00** · Whitcomb Museum · I, Caspar Neri, Basil Duret, Florian Adebayo

Material one: the old program's linking frame, the brass thing in case nine at the Whitcomb.

- **a.** Caspar and I show Basil the provenance is false; he returns the frame to the Okafors rather than be embarrassed. _(investigative)_ — if `e10` → materials +1, mat_frame = true, fr_caspar +1
- **b.** Florian claims it as Mercy House property from the divided records. _(investigative)_ — if `(fr_florian >= 2) or (orrell_known = "florian")` → materials +1, mat_frame = true, fr_florian +1, e10 = true, e10_src = "florian"
- **c.** Walk into Rell & Company and ask August Rell what he wants for it. _(investigative)_ — if `(not(e10)) and (fr_florian < 2) and not(orrell_known = "florian")` → materials +1, mat_frame = true, enemy_aware +1, owe_august = true, e10 = true, e10_src = "chukwudi"
  - _He sells it, and takes note of who bought it. The ring learns the coalition exists. Chukwudi takes one look at it on the workbench: the wards are recent warden work, the provenance a lie (E10)._

Next: CH18.STONES.01

### CH18.STONES.01
**Fri 5 Feb, 16:00** · Orchard House · I, Malcolm Tait, Percival Tern

Material two: anchor stones from the Marches, which hold a link steady while it moves. Percival can bring them through the orchard crossing, if someone in Bracken Court releases them.

- **a.** The court releases them: the hearing's goodwill. _(investigative)_ — if `ally_court` → materials +1, mat_stones = true
- **b.** Lucan sends them from the Verre mill, no questions. _(investigative)_ — if `fr_lucan >= 2` → materials +1, mat_stones = true
- **c.** Ansel carries them himself, against his father's wishes. _(relational)_ — if `st_ansel >= 4` → materials +1, mat_stones = true, ansel_defied = true
- **d.** Nobody can release them in time. We'll manage without. _(expressive)_

Next: CH18.THREAD.01

### CH18.THREAD.01
**Sat 6 Feb, 10:00** · Okafor Restoration · I, Chukwudi Okafor, Caspar Neri

Material three: ward thread, spun and charged, enough for six links. It's slow craft.

- **a.** Caspar spins it with Chukwudi for three nights straight, for cost, and on the third night tells me what he saw in August Rell's workroom. _(investigative)_ — if `fr_caspar >= 2` → materials +1, mat_thread = true, e15 = true, e15_src = "caspar"
  - _Letters from August to Armand promising 'an extension beyond the old limit': a lie August knows is a lie (E15)._
- **b.** Chukwudi spends the shop's own stock, and writes it in the error book as 'a gift'. _(investigative)_ — if `fr_chukwudi >= 2` → materials +1, mat_thread = true, fr_chukwudi +1
- **c.** Buy it from Rell & Company. _(investigative)_ → materials +1, mat_thread = true, enemy_aware +1, owe_august = true

Next: CH18.TEST.01

### CH18.TEST.01
**Sat 6 Feb, 20:00** · Okafor Restoration · I, Chukwudi Okafor, Ellis Okafor, Reuben Pike, Malcolm Tait

The test of the distributed bridge, on a dummy link Chukwudi builds between two old pocket watches. Three contributors, then six, each carrying a little. It uses what the old program knew (E07), what the screen-mending or this demonstration shows (E08), and the frame and thread. Whether it can carry three real men depends on everything else: all three materials, enough volunteers, the patients' own choices. Somebody has to watch the link as it moves: my knack, or Ilyas's gauge, slower.

_On entry:_ e08 = true

- **a.** Run it. Watch the rope with the knack as it shifts from one to six. _(investigative)_ → plan_full = true, e17 = true, e17_src = "test", knack +3
- **b.** Run it. Let Ilyas's gauge do the watching; I'll only confirm. _(investigative)_ → plan_full = true, e17 = true, e17_src = "test"

Next: CH18.TEST.02

### CH18.TEST.02
**Tue 9 Feb, 22:00** · Calder General · I, Reuben Pike, Ilyas Qureshi, Rafi Bensaïd

The interim bridge: one volunteer to each patient, heavy for the volunteer and slow to wean, with medical support throughout. Reuben, Ilyas and Rafi validate it on paper and on a monitored volunteer (me, or Reuben, for twenty minutes).

- **a.** Be the monitored volunteer. Feel what we're asking people to carry. _(investigative)_ → plan_interim = true, nerve +3, mc_volunteered = true
- **b.** Let Reuben do it. He insists; I watch him sweat. _(relational)_ → plan_interim = true

Next: CH18.SERVICE.01

### CH18.SERVICE.01 _(conditional)_
**Wed 10 Feb, 23:00** · Calder General · I, Reuben Pike, Nabil Haddad

_When:_ `st_reuben >= 3`

Reuben's mobile response service goes before the hospital board next week, with Nabil's rota and Rafi's night hours. Tonight he's holding the paperwork together with tape and not sleeping.

- **a.** Take half the paperwork home. Make him sleep. _(relational)_ — if `not(b_reuben_needs)` → b_reuben_needs = true, st_reuben = 4, s09 = "fore"
- **b.** Proofread the proposal with Nabil until it's bulletproof. _(relational)_ → s09 = "fore", fr_nabil +1

Next: CH18.TEST.03

### CH18.SERVICE.02 _(conditional)_
**Wed 17 Feb, 22:30** · Calder General · I, Reuben Pike

_When:_ `b_reuben_needs and not(b_reuben_stay) and not(closed_reuben)`

The hospital board approves the response service, on probation, with three conditions and no money. Reuben and I sit in the canteen after the meeting. There's no reason for either of us to still be here. He's still here.

- **a.** Say it: "The reason's gone. I'm still here too." _(relational)_ — if `hurt_reuben < 2` → b_reuben_stay = true, st_reuben = 5, out_reuben = true, s09 = "resolved:probation"
- **b.** Go home. Congratulate him by text. _(expressive)_ → s09 = "resolved:probation"

Next: CH18.REGENT.01

### CH18.TEST.03
**Thu 11 Feb, 15:00** · Orchard House · I, Malcolm Tait

The single-pair technique: one patient bridged to one prepared volunteer, fast, for emergencies. It's what the old program did and what Damian does now. Malcolm knows its steps, having watched it go wrong; the physician's own notes would confirm them.

- **a.** Walk through it with Malcolm until he stops flinching at the steps. _(investigative)_ — if `(fr_malcolm >= 1) or e16` → plan_pair = true
- **b.** Nobody here has seen it done. We won't guess at it. _(expressive)_ — if `(fr_malcolm < 1) and not(e16)`

Next: CH18.REVIEW.01

### CH18.REVIEW.01
**Fri 12 Feb, 10:00** · Mercy House · I, Adrian Keene, Darius Chen, Emmett Hsu, Patrick Orrell, Victor Keene

Mercy House's promotion review. Adrian, Darius and Emmett, and a training report that isn't true. What happens here decides whether Mercy House is an institution we can stand behind in March.

- **a.** Stand beside Adrian when he tells the truth about the report. _(relational)_ — if `b_adrian_report` → s07 = "resolved:truth", ally_mercy = true, fr_emmett +1
- **b.** Make Orrell account for the divided records in front of the panel. _(investigative)_ — if `orrell_known = "confront"` → s07 = "resolved:reckoning", ally_mercy = true, orrell_pressed = true
- **c.** Use what I held back: Orrell cooperates in exchange for handling his old concealment in March, properly. _(structural)_ — if `(orrell_known = "hold") and (e07)` → ally_mercy = true, orrell_deal = true, s07 = "resolved:deal"
- **d.** Stay out of it. It's their house. _(expressive)_ → s07 = "resolved:quiet"

Next: CH18.CONSENT.01

### CH18.CONSENT.01
**Sun 14 Feb, 19:00** · Truss Road Diner · I, Quentin Shaw, Silas Fenwick, Felix Brecht, Reuben Pike

The diner, the corner booth, the three patients and Reuben with the options written out plainly: what each plan costs, what each might do to them and to the men on the other end of their ropes. Each decides for himself. Nobody is asked to be grateful.

_On entry:_ consent_q = true, consent_s = true, consent_f = true

- **a.** Listen. Only answer questions. _(relational)_ → people +2
- **b.** When Quentin says 'free Eamon first, even if it's me that pays', don't argue with him. _(relational)_ — if `alive_quentin` → q_free_first = true

Next: CH18.VOLUNTEERS.01

### CH18.VOLUNTEERS.01
**Tue 16 Feb, 18:00** · Latch Lane print shop and upstairs home · I

Volunteers: adults who understand exactly what it costs and say yes anyway. Each one has to be asked properly, and each can say no. (I can ask as many circles as I've earned; I'll know when it's enough.)

- **a.** Eastbank: Ernesto's association, at the long table. _(relational)_ — if `fr_ernesto >= 1` — once → volunteers +2, ally_eastbank = true → **CH18.VOLUNTEERS.01**
- **b.** Mercy House: wardens who'll carry a link for someone they've never met. _(relational)_ — if `ally_mercy` — once → volunteers +2 → **CH18.VOLUNTEERS.01**
- **c.** Latch Lane: Martin, and Owen and Peter from the flatshare, if they'll hear it. _(relational)_ — if `(fr_martin >= 2) or gift_martin or family_case` — once → volunteers +2 → **CH18.VOLUNTEERS.01**
- **d.** The Marches: Lucan's household, Percival's orchard workers. _(relational)_ — if `(fr_lucan >= 1) or (fr_percival >= 1)` — once → volunteers +1 → **CH18.VOLUNTEERS.01**
- **e.** Lyle's Bakery: Otis, for Silas. He doesn't let me finish the sentence. _(relational)_ — if `fr_otis >= 1` — once → volunteers +1, fr_otis +1 → **CH18.VOLUNTEERS.01**
- **f.** The Regent's human staff, through Milo. _(relational)_ — if `fr_milo >= 1` — once → volunteers +1 → **CH18.VOLUNTEERS.01**
- **g.** That's everyone I can honestly ask. _(structural)_

Next: CH18.SERVICE.02

### CH18.REGENT.01
**Thu 18 Feb, 21:00** · The Regent · I, Lucien Arnaud, Abel Mercer, Rafi Bensaïd, Dominic Bell

The Regent residents' vote on fees and feeding support, and on whether the trust will stand with the rescue: vampires can't donate life they're borrowing, but they can guard, carry, and see in the dark. Abel wants exceptions. Lucien wants a home.

- **a.** Speak for Lucien's version: shared rules, no bought exceptions, and help in March. _(relational)_ — if `ally_regent_hint or (fr_lucien >= 2) or (st_dominic >= 3)` → ally_regent = true, s16 = "resolved:shared"
- **b.** Stay silent. It's their home. _(expressive)_ → s16 = "resolved:split"

Next: CH18.EVIDENCE.01

### CH18.EVIDENCE.01
**Sat 20 Feb, 14:00** · Pump Nine · I

Pump Nine: a decommissioned pumping station on the riverside, supposedly empty for twenty years. Proving it isn't (E12), and finding a way in for the night.

- **a.** Gareth's inspection: utility records, a neighbour's statement, a licence breach. Official, and it opens the gate. _(investigative)_ — if `told_gareth or (fr_gareth >= 1)` → e12 = true, e12_src = "gareth", acc_pump = true, fr_gareth +1
- **b.** Felix's footage and Pavel's old utility tunnels: lights on at night, and a culvert door nobody remembers. _(investigative)_ — if `pump_film or old_map` → e12 = true, e12_src = "film", acc_pump = true
- **c.** Micah rewired the substation next door last year. He knows where the cables go in. _(investigative)_ — if `not(told_gareth) and (fr_gareth < 1) and not(pump_film) and not(old_map)` → e12 = true, e12_src = "micah", acc_pump = true

Next: CH18.HARLAN.01

### CH18.HARLAN.01
**Mon 22 Feb, 18:30** · Little Glass Arcade · I, Harlan Greaves

The Little Glass Arcade after closing: Harlan Greaves in his room above the locksmith, where Eamon used to rent the room next door. He carried people through a controlled crossing for money. He didn't know what for. He knows now.

- **a.** Give him Eamon's unposted letter to read. Let him decide. _(relational)_ — if `eamon_letter_kept or eamon_bag` → e13 = true, e13_src = "harlan", harlan_confessed = true, ally_keepers = true, acc_cross = true
- **b.** Talk to him plainly about what he can still do. _(relational)_ — if `people >= 40` → e13 = true, e13_src = "harlan", harlan_confessed = true, ally_keepers = true, acc_cross = true
- **c.** Threaten to expose him. _(investigative)_ → e13 = true, e13_src = "threat", acc_cross = true, harlan_hostile = true

Next: CH18.NOTES.01

### CH18.NOTES.01 _(conditional)_
**Wed 24 Feb, 15:00** · Winton Court Apartments · I, Russell Dacre

_When:_ `russell_logging or winton_log`

Winton Court: Russell's log of the physician's visits, and the rented flat itself, which the tenants' fight has given Russell every legal reason to inspect. In a desk drawer, Damian's own case notes: deliberate prolongation of the patients' dependence, the deaths planned to be 'predictable', and a date, underlined: 14/3, dawn, consolidation; transfer the night before.

_On entry:_ e16 = true, e16_src = "winton", know_deadline = true, s11 = "fore"


Next: CH18.KNACK.01

### CH18.KNACK.01 _(conditional)_
**Fri 26 Feb, 17:00** · Orchard House · I, Malcolm Tait

_When:_ `(trained = "malcolm") or (trained = "florian") or (trained = "self")`

Orchard House, the last training weekend. Malcolm (or Ruth Carrow's notes, read aloud to the dog) teaches me to hold a thread without being pulled along it: to watch a link move from one person to six and say, calmly, when it's slipping.

- **a.** Hold it. For a full minute. Then two. _(investigative)_ — if `knack >= 30` → knack_monitor = true, knack +5
- **b.** I can't hold it long enough yet. The gauge will have to do it. _(expressive)_ — if `knack < 30`

Next: CH18.END.01

### CH18.END.01
**Sat 27 Feb, 21:00** · Latch Lane print shop and upstairs home · I

The end of February. On the wall: what we can do, and what we can't. The thaw is coming. So is the fourteenth of March, whether or not I know its significance yet.


Next: CH19.CARD.01


## CH19 — The Offer

_Armand's proposal at Sorrell House; the anniversary deadline becomes known; accountability decided._

### CH19.CARD.01
**Wed 3 Mar, 09:00** · Latch Lane print shop and upstairs home · I, Martin Avery

The thaw's first real day: water running in every gutter. Martin brings up the post: a heavy cream card, hand-addressed, for Saturday evening at Sorrell House in Briar Heights. And three texts in an hour from Quentin, Silas and Felix: each has had a message from 'the clinic': his follow-up is moved to Saturday 13 March, eleven at night, and a car will collect him.

_On entry:_ summoned = true, know_deadline = true

- **a.** Go to Sorrell House. Hear what he wants. _(structural)_

Next: CH19.HOUSE.01

### CH19.HOUSE.01
**Sat 6 Mar, 19:00** · Sorrell House · I, Armand Sorrell

Sorrell House: beautiful, diminished, a house where one door upstairs is always shut. Armand receives me alone. He knows about the donors now; August told him when he could no longer avoid it, and he has kept paying anyway. His offer: let Damian make one attempt, on the fourteenth, the tenth anniversary, for Octavian. Afterwards he will fund everything, free everyone, confess to anyone I choose. The knack takes his grief like a hand on my throat.

- **a.** Show him the old report: forty-eight hours, or nothing. It was never possible. August knew. _(investigative)_ — if `e07` → e15 = true, e15_src = "report", armand_broken = true, e16 = true, e16_src = "armand"
  - _When it breaks, he goes to his desk and gives me Damian's 'progress reports' to the patron: planned deaths, prolonged dependence (E16)._
- **b.** Tell him about Quarry Lake: what I felt at the cliff, and why no method brings back a boy after three days. _(relational)_ — if `e07 and (people >= 45)` → e15 = true, e15_src = "report", armand_broken = true, armand_trust = true, e16 = true, e16_src = "armand"
- **c.** Tell him no, and that I'm sorry for his son. _(relational)_ → armand_hard = true

Next: CH19.ANSWER.01

### CH19.ANSWER.01
**Sat 6 Mar, 20:30** · Sorrell House · I, Armand Sorrell

Whatever his face does now, the decision is mine: what we agree, what stays contested, and who answers for it.

- **a.** Refuse. No terms. We do this without him, and he answers for it after. _(structural)_ → ch19_answer = "refuse"
- **b.** Negotiate: he withdraws Damian's funding and his protection tonight, gives us Pump Nine's keys, and accepts written terms. In return, limited privacy. _(structural)_ — if `armand_broken and (e16 or e11 or e15)` → ch19_answer = "negotiate", acc_pump = true
- **c.** Monitored cooperation: he helps, openly, under Mercy House or the court, with the evidence held by someone else. _(structural)_ — if `armand_broken and (ally_mercy or ally_court) and (e16 or e11 or e15)` → ch19_answer = "monitor", acc_pump = true

Next: CH19.AFTER.01

### CH19.AFTER.01
**Sat 6 Mar, 23:30** · Latch Lane print shop and upstairs home · I

Home. The date on the wall now: Saturday 13 March, eleven at night, a car for each patient; the donors moved to Pump Nine for a dawn 'consolidation' that would drain them all at once. If Armand walked out of that room still hoping, he may warn Damian. If he walked out broken, he may simply stop paying. We have one week.


Next: CH20.BRIEF.01


## CH20 — Where I Stand

_Choose the plan and my role: patient site, donor site, or coordination._

### CH20.BRIEF.01
**Sat 13 Mar, 14:00** · Okafor Restoration · I, Chukwudi Okafor, Ellis Okafor, Reuben Pike, Adrian Keene, Ansel Marr, Nolan Voss, Micah Serrano

The briefing, at whichever table we chose in February. Everything we have, laid out in the order it will happen. Two things can go wrong that we can see coming: if the ring is watching the crossing (they know my face) and the keepers aren't with us, the donor team loses its timing; and if Armand left Sorrell House still hoping, Damian may move early. Which plan do we run?

_Asserts:_ `e05 and e06 and e07 and e14 and know_damian and know_deadline and patients_matched`

- **a.** The distributed bridge: everyone carries a little; all six come home, if it holds. _(structural)_ — if `plan_full and (materials >= 3) and (volunteers >= 6) and consent_q and consent_s and consent_f` → plan_chosen = "full"
- **b.** The interim bridge: one volunteer to each patient, slow recovery, everyone lives. _(structural)_ — if `plan_interim and (volunteers >= 3) and consent_q and consent_s and consent_f` → plan_chosen = "interim"
- **c.** The single-pair bridge: we can only carry one patient across. We free all three donors. _(structural)_ — if `plan_pair` → plan_chosen = "pair"
- **d.** Extraction: free the donors and end the links. The patients' support ends with them. _(structural)_ → plan_chosen = "extract"

Next: CH20.ROLE.01

### CH20.ROLE.01
**Sat 13 Mar, 15:30** · Okafor Restoration · I

Where do I stand tonight?

- **a.** At Pump Nine, with the patients and the anchors. I can see the links. _(structural)_ → role = "patient"
- **b.** At Stillwater, with the donors. Someone should be there who's seen them. _(structural)_ — if `acc_still or inside_man or (st_ansel >= 3)` → role = "donor"
- **c.** At the crossing, keeping time between two worlds with Nolan's relays. _(structural)_ — if `acc_cross or ally_keepers or (st_nolan >= 3)` → role = "coord"

Next: CH20.LAST.01

### CH20.LAST.01
**Sat 13 Mar, 18:10** · Riverside Steps · I

Sunset over the river, the ice gone, the water high at the flood marks. An hour before we go. I spend it with someone, or alone.

- **a.** Adrian. _(relational)_ — if `st_adrian >= 5` → last_with = "adrian"
- **b.** Micah. _(relational)_ — if `st_micah >= 5` → last_with = "micah"
- **c.** Ellis. _(relational)_ — if `st_ellis >= 5` → last_with = "ellis"
- **d.** Dominic. The sun's just down. _(relational)_ — if `st_dominic >= 5` → last_with = "dominic"
- **e.** Nolan. _(relational)_ — if `st_nolan >= 5` → last_with = "nolan"
- **f.** Ansel. _(relational)_ — if `st_ansel >= 5` → last_with = "ansel"
- **g.** Quentin, before the car comes. _(relational)_ — if `st_quentin >= 5` → last_with = "quentin"
- **h.** Reuben. _(relational)_ — if `st_reuben >= 5` → last_with = "reuben"
- **i.** Martin, above the shop, pretending it's an ordinary Saturday. _(relational)_ → last_with = "martin"
- **j.** Alone, on the steps, with the river. _(expressive)_ → last_with = "alone"

Next: CH21.OPEN.01


## CH21 — The Links Between Us

_The two-site climax: Pump Nine and Stillwater. Survival and culpability resolved._

### CH21.OPEN.01
**Sat 13 Mar, 22:00** · Pump Nine · I

Ten o'clock. The river loud with meltwater. Three teams, one clock.

_On entry:_ cap = 0

- **a.** Pump Nine. _(structural)_ — if `role = "patient"` → **CH21.PATIENT.01**
- **b.** The crossing, then Stillwater. _(structural)_ — if `role = "donor"` → **CH21.DONOR.01**
- **c.** The Iron Footbridge chamber. _(structural)_ — if `role = "coord"` → **CH21.COORD.01**

### CH21.PATIENT.01 _(branch)_
**Sat 13 Mar, 22:40** · Pump Nine · I, Reuben Pike, Chukwudi Okafor, Ellis Okafor, Quentin Shaw, Silas Fenwick, Felix Brecht, Dominic Bell

_When:_ `role = "patient"`

Pump Nine's machinery hall: iron, damp, the linking apparatus under work lights, and the three patients, who came in Damian's cars because we let them, with us behind. Reuben with the drips; the Okafors with the anchors and the frame; Dominic at the doors, because it's dark. The ropes, to my eye, run out through the walls toward the river and the crossing.

- **a.** Take my place at the frame and watch the links. Say when they slip. _(investigative)_ — if `knack_monitor` → monitor = "knack"
- **b.** Let Ilyas's gauge watch. I'll carry, and fetch, and hold. _(investigative)_ → monitor = "gauge"

Next: CH21.PATIENT.02

### CH21.PATIENT.02 _(branch)_
**Sun 14 Mar, 00:10** · Pump Nine · I, Damian Holt, Reuben Pike

_When:_ `role = "patient"`

Damian Holt walks in from the inspection passage in a good plain coat, and he's pleasant, and he asks excellent questions, and he's pleased to meet the sensitive at last. He explains everything coherently. He never once calls the donors by their names. Reuben says his name like it hurts.

- **a.** Keep him talking until Adrian or Gareth are through the doors. _(investigative)_ — if `ally_mercy or told_gareth` → damian_fate = "arrested"
- **b.** Let Reuben talk to him. Stand where Damian can see I'm not afraid. _(relational)_ — if `st_reuben >= 3` → damian_fate = "custody", reuben_faced = true
- **c.** Go for the apparatus before he can reach it. _(investigative)_ → damian_fate = "fled", nerve +3
  - _He goes out through the passage he came in by. He'll be found; not tonight._

Next: CH21.TURN.01

### CH21.DONOR.01 _(branch)_
**Sat 13 Mar, 22:30** · Iron Footbridge · I, Ansel Marr, Harlan Greaves, Adrian Keene, Micah Serrano

_When:_ `role = "donor"`

The Iron Footbridge chamber, then the other wind. Ansel, Adrian, Micah. Harlan keeping the door, for once on the right side of it, or not at all.

- **a.** Through, on Harlan's count. _(investigative)_ — if `ally_keepers`
- **b.** Through Northwood instead: longer, colder, unwatched. _(investigative)_ — if `not(ally_keepers)` → nerve +2

Next: CH21.DONOR.02

### CH21.DONOR.02 _(branch)_
**Sun 14 Mar, 00:30** · Stillwater Docks · I, Ansel Marr, Adrian Keene, Micah Serrano, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `role = "donor"`

Stillwater, warehouse seven, the three beds being readied for moving. Eamon, Hugo and Clive, grey and sedated, strapped for transport. Four men and a boat. The release has to happen on the relay's signal, not before: cut a link out of time and a patient dies at the other end.

- **a.** Our man inside opens the water door on the shift change. _(investigative)_ — if `inside_man`
- **b.** In through the window I memorised in January. _(investigative)_ — if `still_layout` → craft +2
- **c.** Straight through the gate with Micah and Adrian. _(investigative)_ → hurt_mc +1

Next: CH21.TURN.01

### CH21.COORD.01 _(branch)_
**Sat 13 Mar, 22:15** · Iron Footbridge · I, Nolan Voss, Harlan Greaves

_When:_ `role = "coord"`

The crossing chamber under the Iron Footbridge: Nolan's relays taped to the brickwork, a runner's rope through the threshold (phones don't cross), Harlan at the door. Two worlds, one clock, and I'm the clock.

- **a.** Run it with Nolan: his relays, my timing, no wasted words. _(relational)_ — if `st_nolan >= 3`
- **b.** Run it by the book: a written sequence, read aloud, checked twice. _(investigative)_ → people +2

Next: CH21.COORD.02

### CH21.COORD.02 _(branch)_
**Sun 14 Mar, 00:20** · Iron Footbridge · I, Nolan Voss, Harlan Greaves

_When:_ `role = "coord"`

Midnight. The relays crackle with both sites at once: Pump Nine with Damian in the room, Stillwater with a boat at the water door. Whatever goes wrong tonight, I'll hear it first.


Next: CH21.TURN.01

### CH21.TURN.01
**Sun 14 Mar, 01:00** · Pump Nine · I

The moment the plan meets the night. If the crossing was watched, the donor team is forty minutes behind and the distributed bridge's timing is gone. If Damian was warned, he moved early and the anchors are damaged. Each costs one step. Then the choice: what we actually do with what we have.

_On entry:_ cap_full = false, cap_interim = false, cap_pair = false

- **a.** The distributed bridge holds. Hand the evidence and the method to Mercy House, under oversight, and make them answer for it. _(structural)_ — if `(plan_chosen = "full") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = "refuse") and not(armand_broken)) and ally_mercy` → ending = "A"
- **b.** The distributed bridge holds. Keep the evidence with the coalition and Gareth; the communities build their own recovery and accountability. _(structural)_ — if `(plan_chosen = "full") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = "refuse") and not(armand_broken)) and ally_eastbank and ally_regent` → ending = "B"
- **c.** The interim bridge: one volunteer to each patient, a long recovery, and every one of them alive. _(structural)_ — if `((plan_chosen = "full") or (plan_chosen = "interim")) and plan_interim and (volunteers >= 3) and not(((ch19_answer = "negotiate") or (ch19_answer = "monitor")))` → ending = "C"
- **d.** The interim bridge, and Armand's terms: everyone lives, and a compromise I'll carry for years. _(structural)_ — if `((plan_chosen = "full") or (plan_chosen = "interim")) and plan_interim and (volunteers >= 3) and ((ch19_answer = "negotiate") or (ch19_answer = "monitor"))` → ending = "D"
- **e.** One bridge. Quentin. _(structural)_ — if `plan_pair and alive_quentin` → ending = "F_Q"
- **f.** One bridge. Silas. _(structural)_ — if `plan_pair` → ending = "F_S"
- **g.** One bridge. Felix. _(structural)_ — if `plan_pair` → ending = "F_F"
- **h.** Free the donors. End the links. Let the cost be what it is. _(structural)_ → ending = "E"

Next: CH21.DAWN.01

### CH21.DAWN.01
**Sun 14 Mar, 05:40** · Riverside Steps · I

Dawn on the fourteenth of March, the tenth anniversary of a boy's fall at Quarry Lake, and nothing is attempted in his name. The river high and brown. Whoever is alive is alive. I sit on the Riverside Steps and can't feel my hands.


Next: CH22.OPEN.01


## CH22 — The Names We Can Say

_One of six plot conclusions, fully dramatised._

### CH22.OPEN.01
**Sun 14 Mar, 09:00** · Latch Lane print shop and upstairs home · I, Martin Avery

Sunday morning above the print shop. Martin makes eggs and doesn't ask. My phone won't stop.

- **a.** The Shared Return. _(structural)_ — if `ending = "A"` → **CH22.A.01**
- **b.** A City of Witnesses. _(structural)_ — if `ending = "B"` → **CH22.B.01**
- **c.** The Long Recovery. _(structural)_ — if `ending = "C"` → **CH22.C.01**
- **d.** The Private Settlement. _(structural)_ — if `ending = "D"` → **CH22.D.01**
- **e.** The Severed Bond. _(structural)_ — if `ending = "E"` → **CH22.E.01**
- **f.** What We Could Save (Quentin). _(structural)_ — if `ending = "F_Q"` → **CH22.FQ.01**
- **g.** What We Could Save (Silas). _(structural)_ — if `ending = "F_S"` → **CH22.FS.01**
- **h.** What We Could Save (Felix). _(structural)_ — if `ending = "F_F"` → **CH22.FF.01**

### CH22.A.01 _(branch)_
**Sun 14 Mar, 14:00** · Mercy House · I

_When:_ `ending = "A"`

Mercy House's infirmary on Sunday: six beds, six people alive, the distributed bridge humming through the frame. Orrell signs what he has to, in front of Florian's archive, and the old program is named in the record at last.

_On entry:_ alive_quentin = true, alive_silas = true, alive_felix = true, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.A.02

### CH22.A.02 _(branch)_
**Wed 17 Mar, 15:00** · Calder General · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "A"`

A governed recovery program, with a board and a budget and a medic called Reuben Pike who keeps writing 'probation' on things and crossing it out. Eamon, Hugo and Clive wake and are asked, properly, what they want.


Next: CH22.A.03

### CH22.A.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "A"`

Damian in custody, answering to Mercy House and to Calder's courts both. Armand's name in the report. August's shop shut. And a question for the city: how much do we tell?

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.B.01 _(branch)_
**Sun 14 Mar, 14:00** · Okafor Restoration · I

_When:_ `ending = "B"`

Sunday in the Okafors' workroom and Eastbank's long table: six people alive, the bridge carried by neighbours. The evidence is with Gareth and with the coalition, in three copies, where no institution can lose it.

_On entry:_ alive_quentin = true, alive_silas = true, alive_felix = true, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.B.02

### CH22.B.02 _(branch)_
**Wed 17 Mar, 15:00** · Calder General · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "B"`

The communities build their own recovery: Eastbank's association, the Regent's trust, the restorers' circle, a clinic run by Reuben out of borrowed rooms. Eamon, Hugo and Clive are asked what they want, and it's written down.


Next: CH22.B.03

### CH22.B.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "B"`

Gareth's case survives scrutiny. Damian is charged in a court that doesn't know what he is, for what it can prove. Armand's foundation is investigated. And a question: how much do we tell?

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.C.01 _(branch)_
**Sun 14 Mar, 14:00** · Okafor Restoration · I

_When:_ `ending = "C"`

The interim bridge holds, heavy and slow. Three volunteers each carry one patient for weeks, sleeping twelve hours a day, while Reuben weans the links down a notch at a time. Everyone is alive. Nobody is well.

_On entry:_ alive_quentin = true, alive_silas = true, alive_felix = true, donors_freed = true, damian_fate = "custody", armand_fate = "withdrawn", august_fate = "ruined", e18 = true, e18_src = "assembled"


Next: CH22.C.02

### CH22.C.02 _(branch)_
**Wed 17 Mar, 15:00** · Calder General · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "C"`

A recovery timetable on the Okafors' wall: a week at a time, with care rotas, lost wages, a fund for the volunteers' rent. Eamon, Hugo and Clive are freed and furious and entitled to be.


Next: CH22.C.03

### CH22.C.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "C"`

The ring ends. Damian in Mercy House's custody; Armand steps back from everything; August's clients disappear. What we tell the city is smaller than what happened.

- **a.** Tell nobody outside the people who were there. The patients' privacy first. _(structural)_ → disclosure = "none"
- **b.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"

Next: CH22.END.01

### CH22.D.01 _(branch)_
**Sun 14 Mar, 14:00** · Sorrell House · I

_When:_ `ending = "D"`

The interim bridge holds, on Armand's money and Armand's terms: every captive freed, every patient alive, a private clinic that asks no questions and keeps no public record.

_On entry:_ alive_quentin = true, alive_silas = true, alive_felix = true, donors_freed = true, damian_fate = "custody", armand_fate = "settled", august_fate = "bargained", e18 = true, e18_src = "assembled"


Next: CH22.D.02

### CH22.D.02 _(branch)_
**Wed 17 Mar, 15:00** · Calder General · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "D"`

Recovery with everything paid for, quietly. Eamon, Hugo and Clive are compensated and asked to sign things. Some of them do.


Next: CH22.D.03

### CH22.D.03 _(branch)_
**Sat 20 Mar, 11:00** · Sorrell House · I

_When:_ `ending = "D"`

Damian in custody, out of sight. Armand keeps his name, a seat on two boards, and a limit on how far this goes. I agreed to it. I'll carry that.

- **a.** Tell nobody outside the people who were there. The patients' privacy first. _(structural)_ → disclosure = "none"

Next: CH22.END.01

### CH22.E.01 _(branch)_
**Sun 14 Mar, 14:00** · Stillwater Docks · I

_When:_ `ending = "E"`

We cut the links. Eamon, Hugo and Clive wake in warehouse seven, weak and alive and themselves. At Pump Nine, Quentin, Silas and Felix die when their support ends, as the rules always said they would. Some of them chose it. That doesn't make it smaller.

_On entry:_ alive_quentin = false, alive_silas = false, alive_felix = false, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.E.02

### CH22.E.02 _(branch)_
**Wed 17 Mar, 15:00** · Rusk Funeral Rooms · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "E"`

Three funerals in a week: Rusk Funeral Rooms, with Simeon doing it right this time; Jonah playing and refusing to make it a performance. The donors come, those who can walk. Their anger and their grief are both allowed.


Next: CH22.E.03

### CH22.E.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "E"`

Damian is arrested at the docks. Armand's name is in every report. And a city that didn't know these men existed has to decide what to be told.

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.FQ.01 _(branch)_
**Sun 14 Mar, 14:00** · Mercy House · I

_When:_ `ending = "F_Q"`

One bridge. Quentin lives. Silas and Felix die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.

_On entry:_ alive_quentin = true, alive_silas = false, alive_felix = false, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.FQ.02

### CH22.FQ.02 _(branch)_
**Wed 17 Mar, 15:00** · Rusk Funeral Rooms · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "F_Q"`

Quentin wakes and asks who else made it, and I tell him, and he doesn't forgive anyone, including himself, and he's right not to yet.


Next: CH22.FQ.03

### CH22.FQ.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "F_Q"`

Damian arrested. Armand exposed. Two funerals; Otis at one, Ellis and Milo at the other.

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.FS.01 _(branch)_
**Sun 14 Mar, 14:00** · Mercy House · I

_When:_ `ending = "F_S"`

One bridge. Silas lives. Quentin and Felix die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.

_On entry:_ alive_quentin = false, alive_silas = true, alive_felix = false, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.FS.02

### CH22.FS.02 _(branch)_
**Wed 17 Mar, 15:00** · Rusk Funeral Rooms · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "F_S"`

Silas wakes in the bakery's back room where Otis insisted he be brought, and asks for the others, and cries into a tea towel. Otis doesn't let go of his hand.


Next: CH22.FS.03

### CH22.FS.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "F_S"`

Damian arrested. Armand exposed. Two funerals; Gideon at one, standing in daylight hours he shouldn't, under an umbrella; Ellis and Milo at the other.

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.FF.01 _(branch)_
**Sun 14 Mar, 14:00** · Mercy House · I

_When:_ `ending = "F_F"`

One bridge. Felix lives. Quentin and Silas die when their support ends. Eamon, Hugo and Clive are freed. It wasn't a fair choice; there wasn't one.

_On entry:_ alive_quentin = false, alive_silas = false, alive_felix = true, donors_freed = true, damian_fate = "arrested", armand_fate = "exposed", august_fate = "charged", e18 = true, e18_src = "assembled"


Next: CH22.FF.02

### CH22.FF.02 _(branch)_
**Wed 17 Mar, 15:00** · Rusk Funeral Rooms · I, Eamon Kerr, Hugo Naranjo, Clive Merritt

_When:_ `ending = "F_F"`

Felix wakes with Ellis holding his hand and says he's going to finish the film, and that it's going to have their names in it, and it does.


Next: CH22.FF.03

### CH22.FF.03 _(branch)_
**Sat 20 Mar, 11:00** · Mercy House · I

_When:_ `ending = "F_F"`

Damian arrested. Armand exposed. Two funerals; Gideon at one, Otis at the other.

- **a.** Tell the communities: every family, pack, trust and circle. Not the newspapers. _(structural)_ → disclosure = "communities"
- **b.** Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out. _(structural)_ → disclosure = "public"

Next: CH22.END.01

### CH22.END.01
**Sun 21 Mar, 20:00** · Latch Lane print shop and upstairs home · I

A week. The flood marks on the Riverside Steps are the highest in ten years. I sleep for fourteen hours and wake up knowing the names of everyone who lived and everyone who didn't, and that I'll say them for the rest of my life.


Next: CH23.OPEN.01


## CH23 — Six Weeks Later

_Recovery and supporting arcs; the relationship decision; Benoît's spring showcase._

### CH23.OPEN.01
**Sat 24 Apr, 09:00** · Latch Lane print shop and upstairs home · I, Martin Avery, Will Avery

Spring all at once: the river down, the Riverside Steps scrubbed, the allotments in Eastbank green. Six weeks. Mum is home, jet-lagged and furious with everyone for not telling her things. Will's trial is today. Whatever the rescue cost, today is a Saturday.

> **Letter.** Joanne, on paper this time, left on my pillow: 'I don't need to know all of it. I need to know you're all right. Martin says you are. I'd like to hear it from you.'

- **a.** Tell Mum I'm all right, and something true about why. _(relational)_ → mum_told = true
- **b.** Tell Mum what I told Martin and Will in January. _(relational)_ — if `out_family` → mum_told = true, out_mum = true
- **c.** Go with Will to his trial and let him be the one people look at. _(relational)_ → fr_will +1, s13 = "resolved"

Next: CH23.PATIENTS.01

### CH23.PATIENTS.01
**Sat 24 Apr, 11:30** · Lyle's Bakery · I, Otis Lyle

Lyle's Bakery, the long table. Where everyone is, six weeks on. If they lived, the patients are weaning off their bridges a notch a week, cold-handed and bad-tempered and alive. If they died, Otis keeps a chair. Eamon, Hugo and Clive are home, thin, angry at lost time and wages and being treated as a necessary cost, and entitled to every bit of it. Hugo got the depot job; they held it for him. Clive's students painted his studio door.

- **a.** Help Silas with the morning bake. Otis is letting him run the ovens now. _(relational)_ — if `alive_silas` → s15 = "resolved:silas"
- **b.** Sit with Otis in the back. He doesn't need anyone to say anything. _(relational)_ — if `not(alive_silas)` → s15 = "resolved:otis"
- **c.** Walk to Willow Court and see Eamon. He wants to post a letter he wrote in August. _(relational)_ → fr_eamon +1

Next: CH23.ARCS.01

### CH23.ARCS.01
**Sat 24 Apr, 14:00** · Crescent Market · I

Crescent Market, where half the city passes on a Saturday. News arrives the way it does, in pieces: Switchyard lost the lease and is moving to Foundry Reach's old tram shed, or kept it; the Regent's vote held; Mercy House has a new review board; the tenants at Winton Court won their consultation; the crossing succession was settled at the assembly. Each of these is somebody's whole life.

- **a.** Help Martin load the new press. He sold the old one and kept the shop. _(relational)_ → s01 = "resolved:kept"
- **b.** Help Wesley move into his own room at Lock Street, with a lease in his own name. _(relational)_ — if `fr_wesley >= 1` → s08 = "resolved:own"
- **c.** Help Desmond and Nolan strip the old tram shed for the new Switchyard. _(relational)_ → s06 = "resolved:moved"

Next: CH23.NOLAN.01

### CH23.NOLAN.01 _(conditional)_
**Sat 24 Apr, 16:30** · Laird's Flatshare · I, Nolan Voss

_When:_ `st_nolan >= 3`

Nolan's offer came on Thursday: the technical course, in another city, from September. He asks what I think, and he means it, and he'll decide for himself.

- **a.** "Go. You'd be brilliant. Whatever we are, it survives a train." _(relational)_ → nolan_leaving = true, s02 = "resolved:leaves"
- **b.** "I want you to stay. I also want you to do what you want." Both true. _(relational)_ → s02 = "resolved:decides"

Next: CH23.ELLIS.01

### CH23.ELLIS.01 _(conditional)_
**Sat 24 Apr, 17:15** · Okafor Restoration · I, Ellis Okafor, Chukwudi Okafor

_When:_ `st_ellis >= 3`

The placement is confirmed for September. Ellis told his father in March, in the middle of everything, and Chukwudi said he'd known for a month and was proud. They're making a transition plan with dates on it.

- **a.** Help them write the plan: who does which commissions, which weekend he comes home. _(relational)_ → ellis_leaving = true, s03 = "resolved:leaves"

Next: CH23.ADRIAN.01

### CH23.ADRIAN.01 _(conditional)_
**Sat 24 Apr, 18:00** · Mercy House · I, Adrian Keene

_When:_ `st_adrian >= 3`

Mercy House's new review board has offered Adrian something he'd have killed for a year ago: a posting setting up the first joint warden station in Bracken Court, two years, his own unit, earned without his brother's name. He asks me what I think, and then, because he's learned, what I want.

- **a.** "Take it. You earned it. I'll learn the crossings." _(relational)_ → adrian_transfer = true, s07 = "resolved:posting"
- **b.** "Stay. There's work here too." And mean the work. _(relational)_ → s07 = "resolved:stays"

Next: CH23.MICAH.01

### CH23.SHOWCASE.01
**Sat 24 Apr, 19:30** · Southmere Recreation Centre · I, Benoît Marchand, Graham Bell

Benoît's spring showcase at the Southmere Recreation Centre: folding chairs, proud parents, the program saved for another year. If Dominic decided to sing, he sings, and Graham Bell in the third row watches his son without understanding everything and cries anyway. Everyone I love who is alive is in this room, or at the back, or outside because it's still light.

_On entry:_ s05 = "resolved"


Next: CH23.DOMINIC.01

### CH23.MICAH.01 _(conditional)_
**Sat 24 Apr, 18:20** · Serrano Yard · I, Micah Serrano, Ernesto Serrano

_When:_ `st_micah >= 3`

Micah's apprenticeship firm wants him for a year on a hydro project up north: good money, a qualification, the first thing that's ever been only his. Ernesto, astonishingly, says he should go. Micah asks me before he answers anyone.

- **a.** "Go. Eastbank will still be here. So will I." _(relational)_ → micah_away = true, s04 = "resolved:north"
- **b.** "Your call. Not your dad's, not mine." _(relational)_ → s04 = "resolved:decides"

Next: CH23.SHOWCASE.01

### CH23.DOMINIC.01 _(conditional)_
**Sat 24 Apr, 21:40** · Southmere Recreation Centre · I, Dominic Bell, Benoît Marchand

_When:_ `st_dominic >= 3`

After the showcase, a woman from a night-arts residency in another city asks Dominic to come for six months: a studio, a band, audiences who start at ten. He finds me by the fire exit to ask what I think, and then catches himself, and asks what I want.

- **a.** "Go and play. I'll come to the ten o'clock shows." _(relational)_ → dominic_away = true
- **b.** "Whatever you choose, choose it for you." _(relational)_

Next: CH23.QUENTIN.01

### CH23.QUENTIN.01 _(conditional)_
**Sat 24 Apr, 22:00** · Southmere Recreation Centre · I, Quentin Shaw

_When:_ `alive_quentin and (st_quentin >= 3)`

Quentin, cold-handed and alive, has a place at the emergency-service academy in the capital from September, the thing he wanted before any of this. He tells me flatly, the way he says important things, and waits to see what I'll do with it.

- **a.** "Go. You earned it twice." _(relational)_ → quentin_away = true
- **b.** "Tell me what you want first." _(relational)_

Next: CH23.REUBEN.01

### CH23.REUBEN.01 _(conditional)_
**Sat 24 Apr, 22:15** · Southmere Recreation Centre · I, Reuben Pike

_When:_ `st_reuben >= 3`

Reuben's response service worked well enough that another city wants him for a year to build theirs. He's never been asked to lead anything. He asks me whether it's selfish to want it.

- **a.** "It's the least selfish thing I've ever heard. Go." _(relational)_ → reuben_away = true
- **b.** "It's allowed to be selfish. Decide what you want." _(relational)_

Next: CH23.REL.01

### CH23.REL.01
**Sat 24 Apr, 22:30** · Riverside Steps · I

The Riverside Steps after the showcase, the water low and quiet. There's one question left that belongs to me.

- **a.** Adrian. _(structural)_ — if `(st_adrian >= 4) and not(closed_adrian)` → final_rel = "adrian"
- **b.** Micah. _(structural)_ — if `(st_micah >= 4) and not(closed_micah)` → final_rel = "micah"
- **c.** Ellis. _(structural)_ — if `(st_ellis >= 4) and not(closed_ellis)` → final_rel = "ellis"
- **d.** Dominic. _(structural)_ — if `(st_dominic >= 4) and not(closed_dominic)` → final_rel = "dominic"
- **e.** Nolan. _(structural)_ — if `(st_nolan >= 4) and not(closed_nolan)` → final_rel = "nolan"
- **f.** Ansel. _(structural)_ — if `(st_ansel >= 4) and not(closed_ansel)` → final_rel = "ansel"
- **g.** Quentin. _(structural)_ — if `(st_quentin >= 4) and not(closed_quentin) and alive_quentin` → final_rel = "quentin"
- **h.** Reuben. _(structural)_ — if `(st_reuben >= 4) and not(closed_reuben)` → final_rel = "reuben"
- **q.** Quentin. Still. It doesn't stop being him because he's gone. _(structural)_ — if `not(alive_quentin) and (st_quentin >= 5)` → final_rel = "quentin", final_shape = "grief"
- **i.** Nobody. Not like that, and not yet. I'm allowed that too. _(structural)_ → final_rel = "single", final_shape = ""

Next: CH23.REL.02

### CH23.REL.02 _(conditional)_
**Sat 24 Apr, 22:45** · Riverside Steps · I

_When:_ `(final_rel != "single") and (final_shape != "grief")`

Whatever we are, we say it out loud, the two of us, and we both get a say.

- **t0.** Together. Privately, and properly, and ours. (Adrian) _(relational)_ — if `(final_rel = "adrian") and (st_adrian >= 4)` → final_shape = "together", st_adrian = 6
- **t1.** Together. Privately, and properly, and ours. (Micah) _(relational)_ — if `(final_rel = "micah") and (st_micah >= 4)` → final_shape = "together", st_micah = 6
- **t2.** Together. Privately, and properly, and ours. (Ellis) _(relational)_ — if `(final_rel = "ellis") and (st_ellis >= 4)` → final_shape = "together", st_ellis = 6
- **t3.** Together. Privately, and properly, and ours. (Dominic) _(relational)_ — if `(final_rel = "dominic") and (st_dominic >= 4)` → final_shape = "together", st_dominic = 6
- **t4.** Together. Privately, and properly, and ours. (Nolan) _(relational)_ — if `(final_rel = "nolan") and (st_nolan >= 4)` → final_shape = "together", st_nolan = 6
- **t5.** Together. Privately, and properly, and ours. (Ansel) _(relational)_ — if `(final_rel = "ansel") and (st_ansel >= 4)` → final_shape = "together", st_ansel = 6
- **t6.** Together. Privately, and properly, and ours. (Quentin) _(relational)_ — if `(final_rel = "quentin") and (st_quentin >= 4)` → final_shape = "together", st_quentin = 6
- **t7.** Together. Privately, and properly, and ours. (Reuben) _(relational)_ — if `(final_rel = "reuben") and (st_reuben >= 4)` → final_shape = "together", st_reuben = 6
- **d0.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Adrian) _(relational)_ — if `(final_rel = "adrian") and (st_adrian >= 5) and (adrian_transfer)` → final_shape = "distance"
- **d1.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Micah) _(relational)_ — if `(final_rel = "micah") and (st_micah >= 5) and (micah_away)` → final_shape = "distance"
- **d2.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Ellis) _(relational)_ — if `(final_rel = "ellis") and (st_ellis >= 5) and (ellis_leaving)` → final_shape = "distance"
- **d3.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Dominic) _(relational)_ — if `(final_rel = "dominic") and (st_dominic >= 5) and (dominic_away)` → final_shape = "distance"
- **d4.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Nolan) _(relational)_ — if `(final_rel = "nolan") and (st_nolan >= 5) and (nolan_leaving)` → final_shape = "distance"
- **d5.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Ansel) _(relational)_ — if `(final_rel = "ansel") and (st_ansel >= 5) and (true)` → final_shape = "distance"
- **d6.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Quentin) _(relational)_ — if `(final_rel = "quentin") and (st_quentin >= 5) and (quentin_away)` → final_shape = "distance"
- **d7.** Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Reuben) _(relational)_ — if `(final_rel = "reuben") and (st_reuben >= 5) and (reuben_away)` → final_shape = "distance"
- **p0.** It mattered, and it's over, and we both know why. (Adrian) _(relational)_ — if `(final_rel = "adrian") and (st_adrian >= 5)` → final_shape = "parted"
- **p1.** It mattered, and it's over, and we both know why. (Micah) _(relational)_ — if `(final_rel = "micah") and (st_micah >= 5)` → final_shape = "parted"
- **p2.** It mattered, and it's over, and we both know why. (Ellis) _(relational)_ — if `(final_rel = "ellis") and (st_ellis >= 5)` → final_shape = "parted"
- **p3.** It mattered, and it's over, and we both know why. (Dominic) _(relational)_ — if `(final_rel = "dominic") and (st_dominic >= 5)` → final_shape = "parted"
- **p4.** It mattered, and it's over, and we both know why. (Nolan) _(relational)_ — if `(final_rel = "nolan") and (st_nolan >= 5)` → final_shape = "parted"
- **p5.** It mattered, and it's over, and we both know why. (Ansel) _(relational)_ — if `(final_rel = "ansel") and (st_ansel >= 5)` → final_shape = "parted"
- **p6.** It mattered, and it's over, and we both know why. (Quentin) _(relational)_ — if `(final_rel = "quentin") and (st_quentin >= 5)` → final_shape = "parted"
- **p7.** It mattered, and it's over, and we both know why. (Reuben) _(relational)_ — if `(final_rel = "reuben") and (st_reuben >= 5)` → final_shape = "parted"
- **f.** Friends. The real kind. It's not a consolation. _(relational)_ → final_shape = "friends"

Next: CH23.FUTURE.01

### CH23.FUTURE.01
**Sat 24 Apr, 23:30** · Riverside Steps · I

And me? The knack, and a year of learning what it's for.

- **a.** Reuben's response service needs someone who can see a failing link before the monitors do. _(structural)_ — if `s09 = "resolved:probation"` → mc_future = "response"
- **b.** Mercy House training, as the first sensitive they've had in seven years, on my own terms. _(structural)_ — if `ally_mercy` → mc_future = "warden"
- **c.** Back on crew at the new Switchyard. Ear defenders, loading bay, the good kind of noise. _(structural)_ → mc_future = "crew"
- **d.** A course in the autumn. Something with my hands and my head both. _(structural)_ → mc_future = "study"
- **e.** The print shop, with Martin, on paper this time, with a proper wage. _(structural)_ → mc_future = "shop"
- **f.** I don't know yet. For once that's fine. _(structural)_ → mc_future = "undecided"

Next: CH23.END.01

### CH23.END.01
**Sat 24 Apr, 23:59** · Latch Lane print shop and upstairs home · I

Home, late, the shop dark, Mum's suitcase still in the hall. I sleep with the window open.


Next: CH24.ANCHOR.01


## CH24 — One Year Later

_The assembled epilogue: anchor, patients and donors, the chosen life, two or three consequences, the final image._

### CH24.ANCHOR.01
**Mon 13 Mar, 17:30** · Riverside Steps · I

One of eight written anchors (by ending): where I am, a year on, and what the resolution changed. The river, the steps, the same date.


Next: CH24.PATIENTS.01

### CH24.PATIENTS.01
**Mon 13 Mar, 18:00** · Riverside Steps · I

Patients and donors, by name, each by his own passage compatible with who lived: Quentin, Silas and Felix (a life, or a grave I visit); Eamon, Hugo and Clive. Nobody forgotten because he wasn't a romance.


Next: CH24.REL.01

### CH24.REL.01
**Mon 13 Mar, 19:00** · Latch Lane print shop and upstairs home · I

The relationship passage: one of forty authored scenes, eight men by together, distance, parted and friends, plus a single life. Quentin's only if he lived, and a grief passage if he didn't.


Next: CH24.CONSEQ.01

### CH24.CONSEQ.01
**Mon 13 Mar, 20:00** · Latch Lane print shop and upstairs home · I

Two or three consequences drawn from the arcs this playthrough developed: the shop, Will's program, the new Switchyard, the Regent, Mercy House's review, the response service, the bakery, the crossing succession. Unmet people get no intimate biographies.


Next: CH24.FINAL.01

### CH24.FINAL.01
**Mon 13 Mar, 22:00** · Riverside Steps · I

The final image: the knack, a year older, reading a room that includes me.


**The end.**

