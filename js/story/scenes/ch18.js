NB.scene("ch18", String.raw`
*mood winter
*set ch 18
*chapter 18 A Method We Can Defend
*comment ---------------------------------------------------------------- CH18.OPEN.01
*sid CH18.OPEN.01
*date 2027-02-01 19:00
*place P02
*set strain 0
February. Six weeks.

We're going to need a coalition. Not a raid, not a warden operation with Orrell at the head of it and everyone else doing as they're told. A coalition: wardens and restorers and Eastbank and the Regent and the Marches and a print shop, at one table, each answering to all the others. People who say yes knowing what they're saying yes to.

And a coalition needs a table to sit at. Where we meet says something about who we'll answer to.

*choice
  *if know_wardens
    #Mercy House. An institution that can be held to account, if we hold it.
      *set coalition_seat "mercy"
      Mercy House. The kitchen that never closes, the long steel table that seats twenty. It's an institution, with rules and records and a commander who hid a program for seven years. That's exactly why. If we sit at its table, it has to answer to what gets said there.
  #The Okafors' workroom. Neutral, practical, and nobody's headquarters.
    *set coalition_seat "workroom"
    The Okafors' workroom. It's nobody's headquarters. It's got benches and lamps and an error book with forty years of mistakes in it, written down honestly. It's where the screen was mended by three people sharing the strain. It seems right.

*comment ---------------------------------------------------------------- CH18.TABLE.01
*sid CH18.TABLE.01
*date 2027-02-01 20:30
*place P20 okafor_restoration
*present chukwudi ellis reuben malcolm florian
*mood night
*set options_known true
The first meeting's at the Okafors' {@coalition_seat = "mercy"|anyway, because the materials will have to come here; after tonight we'll move to Mercy House's long table|workroom, at the big bench, under all the lamps}. Chukwudi. Ellis. Reuben.
*meet malcolm
*if ch10_way = "orchard"
  @malcolm:guarded Malcolm Tait, down from the ridge in his holed jumper, with Bess asleep under the bench, making a pot of tea like a man making a point.
*else
  @malcolm:guarded And Malcolm Tait, down from the ridge, whom I've only known as a name and a seed-packet note until tonight: a rugged man in a holed jumper, a grey beard kept close to the jaw, a collie asleep under the bench. He shakes my hand, looks at me for too long, and says, "Aye. She'd have had you pegged in a minute."
*meet florian
@florian:attentive And Florian Adebayo, in his cardigan, with a notebook and his archive gloves, who asks everyone, before anything else, to separate what they know from what they hope.

We put four ways to end it on the table. Ellis writes them on the big chalkboard in his careful capitals.

[i]One. A distributed bridge.[/i] Several willing people, each carrying a little of a donor's load, the way the screen was mended by three instead of one. Nobody breaks. Everybody's tired. It's never been done with people.

[i]Two. An interim bridge.[/i] One volunteer to each patient, taking over from the donor. Heavy for the volunteer. Slow to wean off. It needs medical support the whole way through.

[i]Three. The single pair.[/i] One patient, bridged fast to one prepared volunteer, for an emergency. It's what the old program did, and what Damian does now. It's how Kit Maddox got hurt.

[i]Four. Cut the donors free.[/i] Take Eamon and Hugo and Clive out of those beds and let the links go. The donors live. The patients' support ends. Quentin, Silas, Felix.

@florian:neutral "Known," says Florian, into the silence, "is what's written on that board. Hoped is everything else." He looks round the table. "Let's be very careful about the difference."

*comment ---------------------------------------------------------------- CH18.FRAME.01
*sid CH18.FRAME.01
*date 2027-02-03 11:00
*place P22
*present caspar basil florian
*mood day
Material one: the old program's linking frame.

The brass thing in case nine at the Whitcomb. The one that hums. Chukwudi says a distributed bridge needs a frame to hold the links steady while they move, and there's exactly one in the city made for the job, and it's under glass with a card saying [i]nineteenth century[/i].

The exhibition's closing. The Whitcomb's great gallery is half dismantled, crates everywhere, cases open, and case nine's the only one still lit.
*meet basil
@basil:guarded Basil's there, in his corduroy, supervising the packing with a clipboard, looking as though he hasn't slept since the closing thanks.

*choice
  *if e10
    #Caspar and I show Basil the provenance is false; he returns the frame to the Okafors rather than be embarrassed.
      *set materials +1
      *set mat_frame true
      *set fr_caspar +1
      @caspar:guarded Caspar and I stand in front of Basil at case nine, and Caspar shows him. The wards on the frame: recent, ten years at most, Mercy House patterns. Not nineteenth-century. Not anonymous. The provenance on the loan paperwork is false, and the catalogue Basil wrote repeats it, in print, under his name.

      @basil:scared Basil goes the colour of the dust sheets. "The catalogue's been [i]reviewed[/i]," he says. "In [i]three papers[/i]."

      "Then you'll want to be the one who corrects it," I say. "Quietly. Before someone else does it loudly."

      @basil:tense He looks at me. He looks at Caspar. He does a calculation you can watch happen behind his eyes, about embarrassment and reputation and who else knows. Then he signs a form, with a flourish, returning the frame "for conservation assessment" to Okafor Restoration, and walks away very fast.

      @caspar:laugh "Lighting boy," says Caspar, lifting the frame out of its case with both hands. "I'm starting to think you're dangerous."
  *if (fr_florian >= 2) or (orrell_known = "florian")
    #Florian claims it as Mercy House property from the divided records.
      *set materials +1
      *set mat_frame true
      *set fr_florian +1
      *set e10 true
      *set e10_src "florian"
      @florian:neutral Florian does it. Of course he does. He walks up to Basil at case nine with a folder from the archive, and opens it, and reads out, in his precise voice, an inventory from seven years ago: [i]Item 22. Linking frame, brass, warded. Property of Mercy House. Transferred.[/i] With a photograph. It's this frame.

      @florian:attentive "Known," he says, to Basil, very pleasantly. "This is Mercy House property, listed in our records and removed without authority. Inferred: whoever lent it to you didn't own it." He closes the folder. "I'd like it back. Today."

      @basil:scared Basil goes the colour of the dust sheets, and signs everything Florian puts in front of him.
  *if not(e10) and (fr_florian < 2) and not(orrell_known = "florian")
    #Walk into Rell & Company and ask August Rell what he wants for it.
      *set materials +1
      *set mat_frame true
      *set enemy_aware +1
      *set owe_august true
      *set e10 true
      *set e10_src "chukwudi"
      Nobody can prove where it came from. So I walk into Rell & Company, on Market Crescent, and ask August Rell himself what he wants for it.
      *place P31 rell_company

      The shop's dark and velvet and full of clocks, all ticking at slightly different speeds. August sits behind a desk in his wine-coloured waistcoat with his rings, and listens to me with his whole attentive face, and names a price. It isn't money. It's a favour, to be named later. "Everyone owes me something eventually," he says, pleasantly. "It's only fair you should know what."

      I say yes. I don't have a choice. The frame arrives at the Okafors' that evening in a crate, with a card in August's handwriting: [i]With my compliments. A.R.[/i] Chukwudi reads the card, and puts it in the stove.
*comment ---------------------------------------------------------------- CH18.STONES.01
*sid CH18.STONES.01
*date 2027-02-05 16:00
*place P25 northline_station_snow
Northline, early afternoon, snow on the canopy and grey slush in the gaps between the platforms. The ridge train is two carriages and a heater that works on one side only. I sit on the warm side, with my forehead on the glass, and watch the city thin out into allotments and pylons and white fields.
*place P51 orchard_house
*present malcolm percival
Material two: anchor stones from the Marches.

Chukwudi says a link that's moving from one person to six needs something to hold it steady at each end, like a pulley on a rope. In the Marches they use river stones, charged, from the old orchards. Percival can bring them through the orchard crossing into Malcolm's garden. But somebody in Bracken Court has to release them first, and they're Court property, and the Court is Severin Marr.

@percival:angry Percival's in Malcolm's kitchen, with Bess's head on his boot, complaining about the roof. "I can carry them," he says. "I'm seventy-three, not dead. But I can't [i]take[/i] them. Somebody has to sign."

*choice
  *if ally_court
    #The court releases them: the hearing's goodwill.
      *set materials +1
      *set mat_stones true
      The court releases them. The hearing's goodwill, still warm: three judges in fur collars who remember an outsider standing by a stove and talking about a courier who couldn't afford the fee. Percival comes through the orchard gate with a sack over his shoulder and six smooth grey stones in it, each the size of a fist, each humming faintly under my hand like a sleeping cat.

      @percival:amused "They said to tell you," he says, "that the Court remembers." He sniffs. "They also said the roof's a disgrace."
  *if fr_lucan >= 2
    #Lucan sends them from the Verre mill, no questions.
      *set materials +1
      *set mat_stones true
      Lucan sends them. From the Verre mill, from the old millrace, no questions asked. The family's right, he says in his note, from before the leases, and nobody's going to argue with a Verre about stones this month, not with Oswin Deller's false name in a folder on his desk. Percival carries them through the orchard gate in a sack: six smooth grey stones, humming.

      @percival:laugh "The boy's cheerful," says Percival. "He's put a note in. It says [i]for the mill, with love[/i]. He's drawn a horse."
  *if st_ansel >= 4
    #Ansel carries them himself, against his father's wishes.
      *set materials +1
      *set mat_stones true
      *set ansel_defied true
      *present malcolm percival ansel
      Ansel carries them himself.

      He comes through the orchard gate at dusk with a sack over his shoulder and snow on his collar, and puts it down on Malcolm's kitchen table: six smooth grey stones, humming. His father refused to release them. Ansel took them anyway, from the Court's own store, and signed for them in his own name. His first act as himself, against his father, in writing.

      @ansel:guarded "I'll be in a great deal of trouble," he says, very calmly. "I find I don't mind."
  #Nobody can release them in time. We'll manage without.
    Nobody can. The court won't; Severin won't; there's no one else to sign. Percival sits in Malcolm's kitchen and swears in an old Marches dialect for a full minute, and then apologises to the dog.

    We'll manage without. Chukwudi says we can. He says it the way you say something you're not sure of.
*comment ---------------------------------------------------------------- CH18.THREAD.01
*sid CH18.THREAD.01
*date 2027-02-06 10:00
*place P20 okafor_restoration
*present chukwudi caspar
Material three: ward thread.

Spun and charged, fine as hair, enough for six links. It's slow craft: a spindle, a lamp, and hours of work for a few yards. Chukwudi's got none spare. Nobody in the city has enough. Except the people who sell everything.

*choice
  *if fr_caspar >= 2
    #Caspar spins it with Chukwudi for three nights straight, for cost, and on the third night tells me what he saw in August Rell's workroom.
      *set materials +1
      *set mat_thread true
      *set e15 true
      *set e15_src "caspar"
      @caspar:tired Caspar spins it. With Chukwudi, at the workroom bench, for three nights straight, for the cost of the tea. On the third night, at two in the morning, with the thread glowing faintly on the spindle, he tells me something.

      @caspar:tense "I did a rig for August Rell in December," he says, not looking up. "His workroom, behind the shop. Warded lighting. He left me alone in there for an hour." He spins. "There were letters on the desk. To Armand Sorrell. About his son." He stops. "Promising him things. That the method works on the dead no matter how long. That there's no limit. That Octavian can come back." He looks at me. "Octavian's been dead ten years. I know about the forty-eight hours. Everyone who does this work knows. August Rell knows." He goes back to spinning. "He's lying to Armand. Deliberately. In writing."
  *if fr_chukwudi >= 2
    #Chukwudi spends the shop's own stock, and writes it in the error book as 'a gift'.
      *set materials +1
      *set mat_thread true
      *set fr_chukwudi +1
      @chukwudi:warm Chukwudi goes to the locked cabinet at the back of the workroom and takes out the shop's own stock: forty years of saved thread, on wooden spools, wrapped in linen. All of it. He puts it on the bench.

      Then he opens the error book, and writes, in his careful hand: [i]February 6. Ward thread, all stock, given. Not an error.[/i] He underlines it. "A gift," he says. "Written down so nobody can say otherwise."
  #Buy it from Rell & Company.
    *set materials +1
    *set mat_thread true
    *set enemy_aware +1
    *set owe_august true
    We buy it. From Rell & Company. August Rell sells it to us at a fair price, pleasantly, and asks, pleasantly, what it's for, and when I say [i]restoration[/i], smiles and says, "Of course," and writes something in a little book.
*comment ---------------------------------------------------------------- CH18.TEST.01
*sid CH18.TEST.01
*date 2027-02-06 20:00
*place P20 okafor_restoration
*present chukwudi ellis reuben malcolm
*set e08 true
The test.

Not on people. On a dummy link, which Chukwudi builds between two old pocket watches on the bench: a thread of light running from one to the other, ticking in time. A pretend donor and a pretend patient. And then, one by one, around them, six more watches, six contributors, each ready to carry a little.{@mat_frame| The frame stands over them all, humming.|}{@mat_stones| Two of Percival's stones hold the ends steady.|}

It's what the old program knew, before it went wrong. It's what the screen showed us, or what this bench is showing us now: three can carry what one can't. Whether it can carry three real men, in March, depends on everything else. All three materials. Enough volunteers. The patients' own choices.

And somebody has to watch the link as it moves. If it slips, if it strains, somebody has to say so, in time.

*choice
  #Run it. Watch the rope with the knack as it shifts from one to six.
    *set plan_full true
    *set e17 true
    *set e17_src "test"
    *set knack +3
    I watch it.

    With the knack, all of it, on the thread of light between the watches. Chukwudi moves it: from one to two, two to three, three to six. And I watch the load spread, like water finding its level. Thin, and then thinner, and then, at six, so thin on each watch that it's barely there, and the pretend patient's watch still ticking, steady, on the other end.

    "Holding," I say. "It's holding. Six. It's holding."

    @chukwudi:warm Chukwudi lets out a breath he's been holding since Halloween.

    @malcolm:sad Malcolm, at the end of the bench, is looking at me with an expression I can't read and the knack won't. "She used to say that," he says, quietly. "[i]Holding.[/i] In exactly that voice."
  #Run it. Let Ilyas's gauge do the watching; I'll only confirm.
    *set plan_full true
    *set e17 true
    *set e17_src "test"
    I let Ilyas's gauge do the watching: a thing like a barometer, borrowed from the lab, with a needle that shows the load on a link. Slower than the knack. More certain. Something on paper.

    Chukwudi moves the link: from one watch to two, three, six. The needle drops, and drops, and settles. I confirm it with the knack, once, at the end. "Holding," I say. It matches the needle exactly.

    @reuben:warm Reuben writes the numbers down. "That," he says, "we can defend. In any room."
*comment ---------------------------------------------------------------- CH18.TEST.02
*sid CH18.TEST.02
*date 2027-02-09 22:00
*place P23 calder_general
*present reuben ilyas rafi
The interim bridge. The heavy one. One volunteer to each patient, taking over from the donor.

Reuben, Ilyas and Rafi validate it: on paper, first, at a canteen table at the General after hours, with Ilyas clicking his pen through the numbers. And then on a monitored volunteer, for twenty minutes, linked to a dummy through the old frame, with every machine in the lab watching.
*meet rafi
*if fr_rafi >= 1
  @rafi:tense Rafi's got the monitors. He's bouncing on his heels, which he does when he's frightened.
*else
  @rafi:tense A nurse I haven't met is running the monitors: quick, mobile face, curly black hair, scrubs under a parka, bouncing on his heels. Rafi, Reuben says. Nights only. One of Lucien's.

*choice
  #Be the monitored volunteer. Feel what we're asking people to carry.
    *set plan_interim true
    *set nerve +3
    *set mc_volunteered true
    "Me," I say. "I'll do it. I need to know what we're asking people to carry."

    @reuben:tense Reuben argues. I win.

    Twenty minutes. It's like carrying someone up a flight of stairs that doesn't end. Not pain, exactly. Weight. A tiredness that isn't mine, pouring into me down the link, filling me up from the feet, heavier and heavier, until by fifteen minutes I can't lift my arms and by twenty I can barely see.

    @ilyas:angry "Twenty," says Ilyas, and Rafi cuts the link, and it's gone, all at once, like putting down a piano.

    I lie on the lab bench for an hour afterwards, shaking. I know now. Exactly what we'd be asking. Every day, for weeks, for three people.
  #Let Reuben do it. He insists; I watch him sweat.
    *set plan_interim true
    @reuben:tense Reuben does it. He insists. He says it's his job, and he's the biggest, and he's a medic, and he won't hear otherwise.

    So I watch him sweat. Twenty minutes, linked through the old frame to a dummy, with every machine in the lab watching and Rafi bouncing on his heels. By ten minutes he's grey. By fifteen he's shaking. By twenty he can't lift his arms, and when Rafi cuts the link he slumps forward on the bench like a man who's put down a piano.

    @reuben:tired "That's the interim," he says, when he can talk. "Every day. For weeks. For three people." He looks at me. "It's possible. It's very heavy."
*if st_reuben >= 3
  *goto service1
*goto test3

*comment ---------------------------------------------------------------- CH18.SERVICE.01
*label service1
*sid CH18.SERVICE.01
*date 2027-02-10 23:00
*place P23 calder_general
*present reuben nabil
Reuben's mobile response service goes before the hospital board next week: a medic on call at night, for the city's other people, the ones who can't go to an ordinary A&E. He's asked for it for two years. This time he's got Nabil's rota and Rafi's night hours and a proposal forty pages long.

@reuben:tired Tonight he's in the General's canteen at eleven, holding the paperwork together with tape, not sleeping.
*meet nabil
@nabil:amused Nabil's across the table with a highlighter. "He's rewritten the budget page six times," he tells me. "It's the same budget. It's just in a different font."

*choice
  *if not(b_reuben_needs)
    #Take half the paperwork home. Make him sleep.
      *set b_reuben_needs true
      *set st_reuben 4
      *set s09 "fore"
      I take half the paperwork off him. Physically: I pick up the stack and put it in my bag.

      "Sleep," I say. "I'll do the appendices. Nabil can do the rota. You're going to bed."

      @reuben:surprised He opens his mouth to argue. Then he looks at the empty space on the table where half his work was.

      @reuben:small "Okay," he says. Just that. Okay. He lets someone take the other end. He goes to bed. He sleeps eleven hours. Nabil sends me a photo of the empty chair with a thumbs up.
  #Proofread the proposal with Nabil until it's bulletproof.
    *set s09 "fore"
    *set fr_nabil +1
    I stay and proofread it with Nabil until it's bulletproof. Two in the morning. Three highlighters. Nabil finds a mistake on page nineteen that would have sunk the whole thing, and does a small victory dance in his chair.

    @nabil:laugh "Bulletproof," he says, at the end, stacking it. "Fireproof. Board-proof." He looks at Reuben, asleep at the table with his head on his arms. "He won't thank us. He'll say he could've done it."
*comment ---------------------------------------------------------------- CH18.TEST.03
*label test3
*sid CH18.TEST.03
*date 2027-02-11 15:00
*place P51 orchard_house
*present malcolm
The single pair.

One patient, bridged fast to one prepared volunteer. For emergencies. It's what the old program did. It's what Damian does now. It's how Kit Maddox got hurt.

We need to know it. Not to use, if we can help it. To have, if everything else fails.

*choice
  *if (fr_malcolm >= 1) or e16
    #Walk through it with Malcolm until he stops flinching at the steps.
      *set plan_pair true
      @malcolm:tense Malcolm walks me through it, at his kitchen table, with the rain coming in. Every step. The token. The frame. The words. The moment of transfer. He's watched it done three times, and watched it go wrong once, and every time he gets to the step where it went wrong, his hand shakes.

      We go through it nine times. On the ninth, his hand doesn't shake.

      @malcolm:sad "That's it," he says. "That's all of it." He puts his mug down. "I hope to God you never need it."
  *if (fr_malcolm < 1) and not(e16)
    #Nobody here has seen it done. We won't guess at it.
      Nobody here has seen it done properly. Malcolm's never talked about it; there are no notes. We won't guess at it. Not with someone's life on the end of it.

      It goes on the board with a line through it. [i]Single pair: unknown. Do not attempt.[/i]
*comment ---------------------------------------------------------------- CH18.REVIEW.01
*sid CH18.REVIEW.01
*date 2027-02-12 10:00
*place P01 mercy_house
*present adrian darius emmett orrell victor
*mood day
Mercy House's promotion review, in the old board room on the top floor: a long table, portraits of dead commanders, a panel of three senior wardens, and Orrell at the head.

Three candidates. Adrian, in his re-elasticated jacket, very straight.
*meet darius
@darius:guarded Darius Chen: restless, angular, a scar through one eyebrow from training, drumming his fingers on his knee.
*meet emmett
@emmett:tense Emmett Hsu, in a borrowed jacket, looking like he'd rather be anywhere.
*meet victor
@victor:neutral And Victor Keene, in the back row, with his braced arm, here to watch his brother.

@darius:amused Darius catches me looking and grins, sudden and lopsided, like we're both in trouble at school. "You're the sensitive," he says, low. "Adrian says you can tell when people are lying." The fingers stop drumming. "Don't tell me if I am. I'd rather not know." Then the panel clears its throat, and the grin goes back in its box.

And a training report, in the file, that isn't true.

What happens in this room decides whether Mercy House is an institution we can stand behind in March.

*choice
  *if b_adrian_report
    #Stand beside Adrian when he tells the truth about the report.
      *set s07 "resolved:truth"
      *set ally_mercy true
      *set fr_emmett +1
      @adrian:tense When the panel reaches Emmett's training record, Adrian stands up. He does it before anyone can ask. And I stand up next to him. I don't say anything. I just stand there.

      @adrian:attentive He tells them. In complete, practical sentences. That he wrote the report. That Emmett wasn't on assignment. That Emmett's mother was ill and Emmett was working every shift to pay for her care and was too proud to ask. That Adrian lied to protect him, and it was the wrong way to do the right thing, and he's sorry, and he'd like it corrected. In the record. Today.

      @emmett:surprised Emmett's staring at him.

      @orrell:neutral The room's very quiet. Orrell looks at Adrian for a long time. Then he says, "Noted," and writes something, and the panel confers, and Adrian doesn't get the promotion. Darius does.

      @emmett:warm But afterwards, in the corridor, Emmett catches Adrian's sleeve and says, "Thank you," in a voice that cracks, and Adrian says, "Don't. I should've asked you," and Emmett says, "You're asking now," and something in Mercy House, some old stone, shifts.
  *if orrell_known = "confront"
    #Make Orrell account for the divided records in front of the panel.
      *set s07 "resolved:reckoning"
      *set ally_mercy true
      *set orrell_pressed true
      When the panel asks if anyone has anything to add, I stand up.

      I'm not a warden. I'm not a candidate. I've got no standing in this room at all. I say it anyway: that this house divided the record of a program seven years ago, hid half of it, and told nobody why, and that the man who's using that program now learned it here. That if the panel's deciding who can be trusted, it should start at the head of the table.

      @orrell:neutral The room goes silent. Every warden in it looks at Orrell.

      @orrell:tired And Orrell, after a long time, stands up. "The young man is correct," he says. "I divided the record. I'll account for it. To this panel, in writing, before March." He sits down. "Continue."

      It's not an apology. It's something better, from him: a debt acknowledged in front of witnesses.
  *if (orrell_known = "hold") and e07
    #Use what I held back: Orrell cooperates in exchange for handling his old concealment in March, properly.
      *set ally_mercy true
      *set orrell_deal true
      *set s07 "resolved:deal"
      I don't say anything in the review. I held it back in November, and I hold it back now, and afterwards, in the corridor, I catch Orrell alone.

      "I've read the file," I say. "Both halves, near enough. I haven't told the panel." I look at him. "I want Mercy House in the coalition in March. Behind it, not in front. And afterwards, when it's over, you account for the divided record. Properly. In public."

      @orrell:neutral He looks at me for a long time, the deep pond, the stone at the bottom. "A trade," he says.

      "A trade."

      @orrell:neutral "Agreed," says Commander Orrell. He holds out his hand. It's cool and dry. "You'd have made a warden."
  #Stay out of it. It's their house.
    *set s07 "resolved:quiet"
    I stay out of it. It's their house. I sit at the back next to Victor and watch.

    The panel promotes Darius. Adrian's face doesn't change at all. The report stays in the file, true or not, and nobody says anything about it, and the old stone in Mercy House stays exactly where it's always been.
*comment ---------------------------------------------------------------- CH18.CONSENT.01
*sid CH18.CONSENT.01
*date 2027-02-14 19:00
*place P18
*present quentin silas felix reuben
*mood neon
*set consent_q true
*set consent_s true
*set consent_f true
The Truss Road Diner, the corner booth, Valentine's Day, with paper hearts on the windows that nobody's taken down.

Three patients and Reuben and me, with the options written out plainly on a sheet of Martin's proof paper, in Reuben's careful block capitals. What each plan costs. What each might do to them. What each might do to the man on the other end of their rope.

Each of them decides for himself. That's the whole point. Nobody's asked to be grateful.

@quentin:attentive Quentin reads it twice, with a cold hand round a tea.

@silas:small Silas reads it three times, slowly, moving his lips.

@felix:tense Felix photographs it, and reads it on his phone, zoomed in, and then asks Reuben eleven questions.

*choice
  #Listen. Only answer questions.
    *set people +2
    I don't say anything. I listen. I only answer questions, and there are a lot of them, and I answer every one honestly, including "I don't know."

    @silas:tense Silas says yes to the distributed bridge, if it's ready, and the interim if it isn't, and he wants to meet Hugo afterwards. "To say sorry," he says. "To his face."

    @felix:tense Felix says yes, to anything that works, and asks if he can film it. Reuben says no. Felix says he'll film it anyway, afterwards, the aftermath, for the record. Reuben says fine.

    @quentin:attentive And Quentin says yes too. And then says what he always says, which is that it's his choice, and he's making it, and nobody else gets to.
  *if alive_quentin
    #When Quentin says 'free Eamon first, even if it's me that pays', don't argue with him.
      *set q_free_first true
      @quentin:angry And Quentin, when he's read it, puts the sheet down and says: "Free Eamon first."

      Everyone looks at him.

      @quentin:angry "Whatever you do. Whatever plan. If it comes down to it, if something goes wrong, you free Eamon first. Even if it's me that pays." His jaw's set. "He never chose this. I didn't either, but I'm the one who's been walking around on his life for six months. So he goes first."

      Reuben opens his mouth to argue. I put my hand on his arm, under the table.

      I don't argue with Quentin. It's his to decide. He's decided.
*comment ---------------------------------------------------------------- CH18.VOLUNTEERS.01
*sid CH18.VOLUNTEERS.01
*date 2027-02-16 18:00
*place P02
*mood night
Volunteers.

Adults who understand exactly what it costs, and say yes anyway. For the distributed bridge, we need six at least; for the interim, three. Each one has to be asked properly, face to face, with everything on the table: the weight, the tiredness, the risk. And each one can say no.

I can ask as many circles as I've earned. I'll know when it's enough.
*label vol_ask
{@volunteers >= 6|We've got {volunteers} willing people now. Enough for the full bridge, if everything else holds.|We've got {volunteers} willing people so far.}

*choice
  *hide_reuse *if (fr_ernesto >= 1) #Eastbank: Ernesto's association, at the long table.
    *set volunteers +2
    *set ally_eastbank true
    I go to Serrano Yard, to the long table, on the night Ernesto's association meets: twenty people from the old Eastbank families, and Ernesto at the head with his whiteboard.

    I tell them everything. They listen with the patience of people who've kept a secret for three hundred years.

    @ernesto:neutral And then Ernesto stands up. "Here is what we'll do," he says. "Two of us. Strong ones. Volunteers, not assigned." He looks round the table. "Who's asking to go?" And two hands go up before he's finished the sentence. Neither of them is Micah's. That was on purpose.
    *goto vol_ask
  *hide_reuse *if (ally_mercy) #Mercy House: wardens who'll carry a link for someone they've never met.
    *set volunteers +2
    *set vol_mercy true
    I ask at Mercy House, at the long steel table, on a Tuesday night: wardens who'll carry a link for someone they've never met.

    @emmett:tense Two stand up. One's a trainee I don't know. The other's Emmett Hsu, very pale, very determined. "Adrian asked me," he says. "Properly. This time." Adrian, at the end of the table, doesn't look up, but his ears go red.
    *goto vol_ask
  *hide_reuse *if ((fr_martin >= 2) or gift_martin or family_case) #Latch Lane: Martin, and Owen and Peter from the flatshare, if they'll hear it.
    *set volunteers +2
    *set vol_home true
    *if ch17_ask = "family"
      Martin's already in. He said so in January, in my bedroom doorway, with a mug of tea. So it's the flatshare I ask: Owen and Peter, over too much toast, with Martin sitting beside me for moral support and eating most of it.
    *else
      I ask at home first. Martin, at the kitchen table.
      *if not(gift_martin) and not(family_case)
        He doesn't know the half of it, so I tell him the half he needs. Not the knack, and not me. The case. Three men taken, and three more kept alive on the other end of them, and a way to bring all six home that needs strangers to carry the weight.

      @martin:warm Martin says yes before I've finished. "I'm heavyset," he says. "I'm told that's useful. And I've never done anything brave in my life."

      And then, because Martin asks if I've asked anyone else, Owen and Peter, at the flatshare, over too much toast.

    I tell them what I can. That Hugo's alive. Roughly where. What it would cost to bring him home, and who'd be carrying it.

    @owen:tense Owen says yes, after a long, patient silence. "Hugo was on my rota," he says. "That's all. He was on my rota."

    @peter:neutral Peter says he'll need to see the risk assessment. I give him the risk assessment. He reads it three times, and then says, very formally, that he'll run the tea urn and the rota and the sign-in sheet, and that there's a standard, and he'll keep it. Not a donor. But not nothing.
    *if ch17_ask = "family"

      Owen comes back the next morning with a second name from the depot: Dev, a driver who shared a cab with Hugo for three years and says he'd have come whether Owen asked him or not.
    *goto vol_ask
  *hide_reuse *if ((fr_lucan >= 1) or (fr_percival >= 1)) #The Marches: Lucan's household, Percival's orchard workers.
    *set volunteers +1
    *set vol_marches true
    I send a letter to the Marches, through Percival and the orchard gate. The answer comes back in a week, in Lucan's handwriting, with a drawing of a horse: one of the Verre household will come, a miller's son, twenty, strong as an ox, who says Calder owes the Marches a favour and he'd like to be the one who collects it.
    *goto vol_ask
  *hide_reuse *if (fr_otis >= 1) #Lyle's Bakery: Otis, for Silas. He doesn't let me finish the sentence.
    *set volunteers +1
    *set vol_otis true
    *set fr_otis +1
    @otis:angry I go to Lyle's Bakery at six in the morning and start to explain, and Otis doesn't let me finish the sentence. "Yes," he says. "For Silas. Whatever it is. Yes." He wipes his floury hands on his apron. "I've got forty years of getting up at four in me. I can carry a bit of someone for a night."
    *goto vol_ask
  *hide_reuse *if (fr_milo >= 1) #The Regent's human staff, through Milo.
    *set volunteers +1
    *set vol_grace true
    @milo:tense I ask Milo, and Milo asks the Regent's human staff: the day porters, the cook, the woman who does the accounts. One of them says yes: a day porter called Grace, sixty, who's worked at the Regent for thirty years and says she's been carrying vampires up and down stairs her whole career and a stranger's heartbeat can't be heavier than Mrs Delacroix.
    *goto vol_ask
  #That's everyone I can honestly ask.
    That's everyone I can honestly ask. I stop.

    {volunteers} people. Adults, who know exactly what it costs, and said yes anyway. I write their names on the board, in a column, in marker, and look at it for a long time.
*if b_reuben_needs and not(b_reuben_stay) and not(closed_reuben)
  *goto service2
*goto regent

*comment ---------------------------------------------------------------- CH18.SERVICE.02
*label service2
*sid CH18.SERVICE.02
*date 2027-02-17 22:30
*place P23 calder_general
*present reuben
The hospital board approves Reuben's response service. On probation. With three conditions, a quarterly review, and no money at all.

@reuben:warm He comes out of the board room at nine looking as though he's been hit by a bus, and then, in the corridor, starts laughing, and can't stop.

Afterwards, we sit in the canteen. It's half ten. The canteen's closed; the lights are on low; there's a vending machine glowing like an aquarium. There's no reason for either of us to still be here. The meeting's over. The proposal's approved. He's got a shift at six.

@reuben:small He's still here.

*choice
  *if hurt_reuben < 2
    #Say it: "The reason's gone. I'm still here too."
      *set b_reuben_stay true
      *set st_reuben 5
      *set s09 "resolved:probation"
      *achieve told_truth
      "The reason's gone," I say. "And I'm still here too."

      @reuben:surprised He looks at me across the canteen table.
      *if not(out_reuben)
        "I'm gay, Reuben," I say. "I'm still here because of you. I thought you should know."
      @reuben:warm And the radiator-warmth of him, the steady heat you don't notice until you step away from it, comes up, and up, and fills the dim canteen. "I've been waiting all my life," he says slowly, "for someone to stay after the reason's gone." He puts his big hand over mine on the table. "You stayed."
      *set out_reuben true
  #Go home. Congratulate him by text.
    *set s09 "resolved:probation"
    I go home. At the bus stop, I text him: [i]Congratulations. You did it. Probation's just a posh word for yes.[/i]

    He replies an hour later, from what must be the canteen still: [i]Thank you. For all of it.[/i] And then, a minute later: [i]I'm still here. Just so you know.[/i]
*comment ---------------------------------------------------------------- CH18.REGENT.01
*label regent
*sid CH18.REGENT.01
*date 2027-02-18 21:00
*place P14 regent
*present lucien abel rafi dominic
The Regent residents' vote.

In the main auditorium, under the gold cherubs, forty vampires in the red velvet seats in dressing gowns and jumpers and one tiara, and Lucien on the stage with a lectern and a gavel he doesn't use. Two questions. Fees and feeding support, which is the trust's business. And whether the trust will stand with the rescue in March.

Vampires can't donate. They're borrowing their life already; there's none spare to give. But they can guard. They can carry. They can see in the dark, and move faster than anyone, and they're awake all night.

@abel:angry Abel Mercer wants exceptions. In his cashmere, from the best seat, he wants his fees reduced and his rooms protected first and the trust to stay out of human business, in that order.

@lucien:neutral Lucien wants a home. Shared rules, for everyone, no bought exceptions. And help in March, because that's what neighbours do.

*choice
  *if ally_regent_hint or (fr_lucien >= 2) or (st_dominic >= 3)
    #Speak for Lucien's version: shared rules, no bought exceptions, and help in March.
      *set ally_regent true
      *set s16 "resolved:shared"
      I'm human. I've got no vote. When Lucien asks if anyone else would like to speak, I stand up anyway.

      I tell them what I saw in November, on the night of the frost: the ones who could move carrying the ones who couldn't, and nobody asking who'd paid for the seats. I tell them that's what a home is. And I tell them about three men in beds at Stillwater, and three more on the other end of their ropes, and that we need people who can see in the dark.

      @dominic:warm Dominic, in the third row, is the first to raise his hand when the vote's called. Then Rafi. Then, one by one, row by row, most of the auditorium.

      @lucien:amused Lucien doesn't use the gavel. He just looks at me, across the auditorium, with his dark, very old eyes, and inclines his head. "The house remembers," he says.
  #Stay silent. It's their home.
    *set s16 "resolved:split"
    I stay silent. It's their home.

    The vote splits. Fees: Lucien's version, narrowly. The rescue: no decision; individuals may help as they choose. Abel Mercer walks out before the end. It's a house divided, a little. It'll hold. But it won't stand together in March.
*comment ---------------------------------------------------------------- CH18.EVIDENCE.01
*sid CH18.EVIDENCE.01
*date 2027-02-20 14:00
*place P16 pump_nine
*mood day
Pump Nine.

A Victorian pumping station on the river, at the end of a towpath past the gasworks: red brick, tall arched windows, a chimney, a sign on the fence saying DANGER and DECOMMISSIONED 2006 and a newer padlock on the gate. Supposedly empty for twenty years.

It isn't. Felix proved that, and it nearly killed him. We need to prove it again, properly, so it can't be argued with. And we need a way in, on the night.

*choice
  *if told_gareth or (fr_gareth >= 1)
    #Gareth's inspection: utility records, a neighbour's statement, a licence breach. Official, and it opens the gate.
      *set e12 true
      *set e12_src "gareth"
      *set acc_pump true
      *set fr_gareth +1
      Gareth Moss does it the way he does everything: with a notebook and patience and the full weight of Municipal Investigations. Utility records: Pump Nine's electricity meter, which should read zero, has been running since May. A neighbour's statement: a barge-owner on the towpath who's seen vans at night. A licence breach: occupation of a decommissioned site without a permit. Official. Every page stamped.

      @gareth:attentive "It's a pattern," he says, closing the file, pleased. "I told you I collect them." He hands me a copy of the inspection order. "And this opens the gate. Legally. Any time in the next thirty days."
  *if pump_film or old_map
    #Felix's footage and Pavel's old utility tunnels: lights on at night, and a culvert door nobody remembers.
      *set e12 true
      *set e12_src "film"
      *set acc_pump true
      {@pump_film|Felix's footage, frame by frame, on Nolan's laptop: lights on at night, vans, crates, a man in a good coat at the side door. Dated. Timestamped.|}{@old_map| And Pavel's old utility map, the brown one from before the Greyhill line was cut: the pumping station's service tunnels, running under the towpath to a culvert door in the riverbank that nobody's used since the sixties and nobody remembers.|}

      Evidence. And a way in that isn't the front gate.
  *if not(told_gareth) and (fr_gareth < 1) and not(pump_film) and not(old_map)
    #Micah rewired the substation next door last year. He knows where the cables go in.
      *set e12 true
      *set e12_src "micah"
      *set acc_pump true
      Micah rewired the substation next door last year, for Serrano's, on a council contract. He knows where the cables go in.

      He walks me along the fence line on a Saturday afternoon, pointing: the feeder cable, the junction box, the new line someone's run from the substation into Pump Nine without a permit, drawing enough power for a small hospital. And the service hatch in the cable trench where it goes in, big enough for a person, locked with a padlock he could open in his sleep.
*comment ---------------------------------------------------------------- CH18.HARLAN.01
*sid CH18.HARLAN.01
*date 2027-02-22 18:30
*place P33
*present harlan
*mood night
The Little Glass Arcade after closing: a covered passage off Market Crescent, glass roof, little shops, most of them shut, a locksmith's with a light on upstairs.

The token from Eamon's locker, the brass one with a leaf inside a square, came from here. Chukwudi knew the die at a glance: the locksmith's in the Little Glass Arcade cuts them and stamps them, and sells blanks to anyone who asks nicely. The locksmith, asked nicely, told me who lives upstairs. Harlan Greaves. And in the room next door, till last August, a young courier who paid in cash and whistled on the stairs.

@harlan:tense Harlan opens the door and sees me and goes white.

He's been selling passage. Not through his own crossing, where there's a ledger and a fee and a keeper's name on every line, but through Northwood, which nobody's supposed to be able to sell: a token with a leaf on it, a night, a time, and a keeper with a lamp waiting at the old spur to see you over.{@harlan_aware| The blank nights in the footbridge ledger were the nights he wasn't at the footbridge.|}{@harlan_nervous| That's what he was frightened of in December, at the green door: who might read the ledger after us.|} {@good_coat|And somebody knew which bus Eamon would be on, and sat at the back of it with him, in a good coat.|And somebody knew which night Eamon would be crossing, and was waiting for him before he got there.}

He didn't know what for. He knows now.

*choice
  *if eamon_letter_kept or eamon_bag
    #Give him Eamon's unposted letter to read. Let him decide.
      *set e13 true
      *set e13_src "harlan"
      *set harlan_confessed true
      *set ally_keepers true
      *set acc_cross true
      {@eamon_letter_kept|Ansel lent me the letter for this. I don't open it. I just hold it out.|I've got a copy of the letter from Eamon's bag, the one to his sister. I hold it out.}

      "Eamon's," I say. "To his sister. He never posted it. He was coming back for it."

      @harlan:scared Harlan takes it. His hands are shaking. He reads the address on the front, the village in the north of the Marches, the big careful handwriting, and he sits down on the top stair of the arcade and puts his face in his hands.

      @harlan:hurt "I sold him the crossing," he says. "The twenty-eighth. Northwood, half past one in the morning. I was waiting at the old spur with a lamp, and he never came, and I told myself he'd changed his mind." He looks up. "A man in a good coat paid me every month for the names. Who was crossing alone, and which night. I thought he was collecting debts. I didn't want to know." He holds the letter against his chest. "I'll tell you everything. The dates. The names. Who paid. And on the night, whatever night it is, the footbridge is yours. I'll open it myself."
  *if people >= 40
    #Talk to him plainly about what he can still do.
      *set e13 true
      *set e13_src "harlan"
      *set harlan_confessed true
      *set ally_keepers true
      *set acc_cross true
      I talk to him. Plainly. On the stairs of the arcade, with the glass roof over us and the rain on it. Not about what he did. About what he can still do.

      "They're alive," I say. "The men you carried. Eamon, and two more. We can get them home. But we need the footbridge, on the night, and we need someone who'll open it and write it down honestly."

      @harlan:hurt He looks at me for a long time. Then he sits down on the top stair and puts his face in his hands. "I sold Eamon the crossing," he says. "And I sold the man in the good coat his name, and the night. I told myself I didn't know what for." He looks up. "I'll tell you everything. And the footbridge is yours."
  #Threaten to expose him.
    *set e13 true
    *set e13_src "threat"
    *set acc_cross true
    *set harlan_hostile true
    "I know what you did," I say. "The tokens. Northwood. The man in the good coat, and the names you sold him. Eamon. If the footbridge isn't open to us on the night, when we ask, I'll take it all to the Court and to Mercy House and to anyone who'll listen."

    @harlan:angry His face goes hard. "You'd ruin me."

    "You helped ruin him."

    @harlan:guarded He looks at me with real hatred. Then, slowly, he nods. "The footbridge," he says. "On the night. Once." He shuts the door in my face. It'll open. I'm not sure it'll stay open.
*if russell_logging or winton_log
  *goto notes
*goto knack_check

*comment ---------------------------------------------------------------- CH18.NOTES.01
*label notes
*sid CH18.NOTES.01
*date 2027-02-24 15:00
*place P41
*present russell sylvester
*set e16 true
*set e16_src "winton"
*set know_deadline true
*set s11 "fore"
Winton Court. Russell's got news.

@russell:guarded {@russell_logging|He's kept his log, the way I asked: a page in his boiler notebook, in pencil, every time the man used the service stairs. Eleven visits since November. Always the last Monday of the month, always four o'clock.|He's been watching the flat, since November, since the tenants' fight gave him every legal reason to.} And the tenants' fight has given him something else: a right to inspect every flat in the building for damp, with a day's written notice.

He gave the notice for thirty-one yesterday. Nobody answered it. So today, at three, with his tool belt and his bad knee and me holding the torch, he lets himself in, and because the tenants' committee wants it done properly, there's a witness.
*meet sylvester
@sylvester:neutral The witness is Sylvester Page, from the Tenants' Advice Centre: tall, thin, a grey goatee, reading glasses on a cord, a good suit that's been to a lot of meetings. He reads the notice pinned to the door, checks the date against his diary, and signs the bottom of Russell's form. "Twenty-four hours, served in writing, for an inspection of the heating," he says. "Nobody answered. That's lawful entry, and I've seen it." He caps his pen. "Touch the radiators first, Russell. So it's true."
*set fr_sylvester 1

Russell touches the radiators first.

It's a clinic. Or a set for one. A couch with a paper sheet. A cabinet of vials. A blood-pressure cuff. And a desk, with a drawer, and in the drawer, a folder.

Damian's own case notes. In a neat, pleasant, confident hand.

I read them standing up, in the torchlight, while Russell watches the door.

Three patients, by initial. Three donors, by number. Daily observations: temperature, pulse, the colour of their fingernails. And, in the margins, a plan. The patients' dependence on their donors, deliberately prolonged: [i]maintain; do not wean[/i]. The donors' decline, managed to be [i]predictable[/i]. The patients' deaths, when they come, planned to look like illness.

And a date. On the last page. Underlined twice.

[i]14/3. Dawn. Consolidation. Transfer the night before.[/i]

The fourteenth of March. Three weeks.

@russell:tense "What is it?" says Russell, from the door. "Son. What's that? You've gone white."

@sylvester:neutral Sylvester doesn't ask. He looks at the folder in my hands, and at my face, and takes his glasses off and lets them hang on their cord. "I didn't see what's in the drawer," he says. "I saw a lad look at the heating." He writes the time on his form. "If anyone ever asks me, that's what I'll say, and it'll be true."

I photograph every page. I put the folder back exactly where it was. I don't know what [i]consolidation[/i] means. I know it's three weeks away, and I know it's at dawn.

*comment ---------------------------------------------------------------- (knack training, if I chose any)
*label knack_check
*if (trained = "malcolm") or (trained = "florian") or (trained = "self")
  *goto knack
*goto end

*comment ---------------------------------------------------------------- CH18.KNACK.01
*label knack
*sid CH18.KNACK.01
*date 2027-02-26 17:00
*place P51 orchard_house
*present malcolm
Orchard House, the last training weekend before March.
*if trained = "malcolm"
  @malcolm:attentive Malcolm, on the roof, with a flask. Teaching me to hold a thread without being pulled along it.
*elseif trained = "florian"
  Ruth Carrow's notes, read aloud to Bess in Malcolm's kitchen, because Malcolm says he's too old to be taught by a dead woman's handwriting and the dog doesn't mind. [i]A thread is not a rope until you pull on it.[/i]
*else
  On my own, in Malcolm's orchard, because he said I could use it and then left me alone, which from Malcolm is a great kindness. The way I've always done it.
To watch a link move from one person to six, the way it will on the night, and say, calmly, when it's slipping. Chukwudi's built a practice link between two apple trees, a thread of light, and it moves when he moves it.

*choice
  *selectable_if (knack >= 30) #Hold it. For a full minute. Then two.
    *set knack_monitor true
    *set knack +5
    I hold it.

    I watch the thread between the apple trees, and don't let it pull me, and don't let go. Chukwudi moves it: one tree to two, two to six, six to one. I say "Holding," and "Slipping," and "Holding," calmly, without shouting, in time. A full minute. Then two.

    @malcolm:warm At the end, Malcolm's standing in the orchard with his flask, watching. "Aye," he says. "That's it. That's what she did." He screws the lid back on the flask. "You'll do."
  *if knack < 30
    #I can't hold it long enough yet. The gauge will have to do it.
      I can't. Not long enough. Thirty seconds and the thread pulls me along it like a dog on a lead, and I'm on my knees in the orchard with a headache.

      @malcolm:neutral "Then the gauge does it," says Malcolm, not unkindly, helping me up. "There's no shame in a gauge. Ruth used one too, at the end. When she was too tired to trust herself."
*comment ---------------------------------------------------------------- CH18.END.01
*label end
*sid CH18.END.01
*date 2027-02-27 21:00
*place P02
*mood night
The end of February. On the wall: what we can do, and what we can't.

A method: {@plan_full|the distributed bridge, tested on two pocket watches and six more|no distributed bridge yet}{@plan_interim|, the interim bridge, heavy but proven|}{@plan_pair|, and the single pair, if everything else fails|}. Materials: {materials} of three. Volunteers: {volunteers}. The patients have each decided for themselves.{@acc_pump| A way into Pump Nine.|}{@acc_cross| A crossing we can use on the night.|}{@ally_mercy| Mercy House, behind us.|}{@ally_regent| The Regent, standing with us.|}{@ally_eastbank| Eastbank, at the long table.|}
{@know_deadline|And a date. Underlined twice, in a neat, pleasant hand. The fourteenth of March. Dawn.|And a feeling I can't shake, that there's a date I don't know yet, and that it's close.}
The thaw's coming. You can smell it on the river: the ice going soft at the edges, the gutters starting to run in the afternoons. Three weeks. Maybe less.

*journal [b]Chapter 18.[/b] February, and a coalition. Four ways to end it: a distributed bridge, an interim bridge, the single pair, or cutting the donors free. {@plan_full|We tested the distributed bridge on a dummy link, and it held.|}{@mat_frame| We have the old program's frame.|}{@mat_stones| Anchor stones from the Marches.|}{@mat_thread| Ward thread.|} {volunteers} volunteers. Quentin, Silas and Felix each decided for themselves.{@e16| In a desk drawer at Winton Court, Damian Holt's own notes: the patients' deaths planned to look like illness, and a date. 14/3. Dawn.|}
*page_break
*goto_scene ch19
`);
