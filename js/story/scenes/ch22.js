NB.scene("ch22", String.raw`
*mood day
*set ch 22
*chapter 22 The Names We Can Say
*comment ---------------------------------------------------------------- CH22.OPEN.01
*sid CH22.OPEN.01
*date 2027-03-14 09:00
*place P02 print_shop
*present martin
Sunday morning.

I got home at seven, and lay down on my bed in my clothes, and woke up two hours later because the flat smelled of butter.

@martin:neutral Martin's making eggs. A lot of eggs: scrambled, in the big pan, slowly, with a wooden spoon, the way Mum taught him, in his cardigan, with the radio off. He puts a plate in front of me, and a fork, and a mug of tea with two sugars, which I don't take. He doesn't ask.
*if (ending = "E") or (ending = "F_Q") or (ending = "F_S") or (ending = "F_F")
  @martin:sad He looks at my face, once, and then he doesn't ask, very carefully. He sits down across from me with his own plate and doesn't eat it either. After a while he reaches across the table and puts his hand on the back of my neck, and leaves it there.
*else
  @martin:warm He looks at my face, once, and something in his shoulders comes down an inch. He sits down across from me and eats his own eggs and reads the paper and hums.

My phone won't stop. It buzzes across the table like something alive.
*if (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D")
  [i]all six stable. all six. sleeping. go back to bed. R[/i]

  {@vol_home|[i]never been so tired in my life. is this what it's like for you all the time[/i] That one's from Owen.|[i]never been so tired in my life. worth it. E.[/i] That's Ellis.}

  [i]i filmed the whole thing. not showing anyone. yet[/i] That's Felix.
*else
  [i]Simeon's coming at ten. Don't come in until you've eaten something. I mean it. R[/i]

  [i]Eamon's awake. He asked for you. He asked for his letter. Ansel[/i]

  I eat the eggs. I don't taste them. Martin watches me eat every mouthful, and then takes the plate.

*choice
  *if ending = "A"
    #The Shared Return.
      *goto a
  *if ending = "B"
    #A City of Witnesses.
      *goto b
  *if ending = "C"
    #The Long Recovery.
      *goto c
  *if ending = "D"
    #The Private Settlement.
      *goto d
  *if ending = "E"
    #The Severed Bond.
      *goto e
  *if ending = "F_Q"
    #What We Could Save (Quentin).
      *goto fq
  *if ending = "F_S"
    #What We Could Save (Silas).
      *goto fs
  *if ending = "F_F"
    #What We Could Save (Felix).
      *goto ff

*comment ================================================================ A. The Shared Return
*comment ---------------------------------------------------------------- CH22.A.01
*label a
*sid CH22.A.01
*date 2027-03-14 14:00
*place P01 mercy_house
*present reuben quentin silas felix eamon hugo clive
Mercy House's infirmary on a Sunday afternoon, with the long windows open for the first time since October and the smell of the river coming in.

Six beds. Six people in them. Alive.

The bridge hums through the frame at the end of the ward, on a trolley, where Chukwudi set it up at six this morning and then fell asleep sitting upright beside it. Thin threads of light run from each of the patients' beds to the frame, and from the frame out through the wall into the next ward, where {volunteers} people are asleep in their coats, each carrying a little.

@quentin:tired Quentin's awake, propped up on three pillows, grey, with his hands in his armpits. "If anyone says the word [i]miracle[/i]," he says, as I come in, "I'm getting up and leaving."

@silas:small Silas is asleep, very neatly, with his hands folded on the blanket. Felix is filming the ceiling.

And at the far end, Eamon and Hugo and Clive. Thin as paper, grey as the sheets, asleep. Their own. Nothing running out of them to anywhere. The knack can hardly believe it: three people who belong entirely to themselves.

@reuben:tired Reuben's asleep in a chair by the door with his medic's bag on his knees. When I come in, he opens one eye, and sees me, and shuts it again, and smiles.
*if damian_fate = "fled"
  They found Damian at six this morning, at the coach station, with a ticket to the coast and his good coat folded on his knee. He went quietly, I'm told. He asked if the sensitive was all right.
*elseif damian_fate = "custody"
  Damian sat on the bench at Pump Nine until the wardens came, with Reuben standing over him, and went with them without a word. He's in a cell in the old wing, two floors under my feet.
*elseif damian_fate = "arrested"
  Damian's in a cell in the old wing, two floors under my feet. He went reasonably, like a man sure he'd be out by Tuesday. He won't be.
*else
  Damian was taken at Pump Nine at a quarter past one, I'm told. I wasn't there. I felt it anyway, from where I was: a pleasant, interested thread going out of the city's weather, and not coming back.
*present reuben quentin silas felix eamon hugo clive orrell florian
*meet florian
At three, Orrell comes up, and Florian with him, carrying a box.

@florian:attentive They bring the archive up. Not all of it; the part that matters. The divided record of the old program, both halves together for the first time in seven years, on a trolley in the middle of the ward, between the beds of the men it was made to help and the men it was used to hurt.

@orrell:tired And Orrell signs. In front of Florian, and Reuben, and six men in beds, and me. A statement for the record: that the program existed, that it harmed its donors, that this house divided the record and hid half of it, and that he was the one who did it.

@florian:attentive "Known," says Florian, very quietly, when the ink's dry. "Finally."
*set alive_quentin true
*set alive_silas true
*set alive_felix true
*set donors_freed true
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.A.02
*sid CH22.A.02
*date 2027-03-17 15:00
*place P23 calder_general
*present eamon hugo clive reuben
Wednesday. The General's side ward, which Mercy House has rented for a year, with a board and a budget and a sign on the door that Reuben printed himself: [i]RECOVERY. PLEASE KNOCK.[/i]

@reuben:amused He's writing [i]probation[/i] on things and crossing it out. The rota. The budget. The sign. He can't stop. The board approved the whole programme on Monday, with oversight, with rules, with a medic called Reuben Pike in charge of it, and he keeps expecting someone to take it back.
*snapshot aftermath-all

Eamon and Hugo and Clive are awake. Sitting up. Thin and cold-handed and furious, with every right to be.

Reuben asks them, properly, one at a time, what they want. Not what they need. What they want. He writes the answers down.

@eamon:tired Eamon wants to post a letter. He's had it in his bag since August. It's to his sister. "And then I want to go home," he says, "and not be a story."

@hugo:angry Hugo wants his job back. The depot held it. He wants his lost wages, and an apology in writing, and for nobody to call him [i]lucky[/i] ever again. "Five months," he says. "I lost five months. I had an interview."

@clive:small Clive wants to know if his students are all right. They are. They painted his studio door while he was gone, bright yellow, with a crack down the middle filled in gold. When I show him the photograph, the big cheerful face crumples, and he puts his hand over it.
*comment ---------------------------------------------------------------- CH22.A.03
*sid CH22.A.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell adrian
Saturday. The old board room at the top of Mercy House, with the portraits of dead commanders, where a month ago a panel decided who could be trusted.

@orrell:neutral Orrell's at the head of the table. He looks older. He looks, for the first time since I've known him, like someone who's been told something about himself and agreed with it.

Damian is in custody, answering to Mercy House and to Calder's courts both: for Quentin, in the lane; for Eamon and Hugo and Clive; for Silas and Felix. Armand Sorrell's name is in the report, all of it. August Rell's shop is shut, with a notice on the door, and August is in an interview room answering questions pleasantly and getting nowhere.

@adrian:attentive Adrian's taking the minutes. "Known," he says, reading it back. "All of it."

And one question left, that isn't Mercy House's to answer. It's ours. How much do we tell the city?

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Every family, pack, trust and circle in the city that lives next to this and was never told: Eastbank's long table, the Regent's residents, the restorers, the keepers, the Marches. Everyone who might one day have a son on a bench or a brother in a bed. Not the newspapers.

    @orrell:neutral Orrell nods. "They'll hear it from us," he says. "Not about us."
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. All of it that can be told: through Gareth, and the courts, carefully, a case about a doctor and a pumping station and three missing men, with every patient's name kept out and every donor's name kept in if he wants it there.

    @orrell:tired Orrell looks at me for a long time. "That's more than this house has ever done," he says. "Good."
*goto end

*comment ================================================================ B. A City of Witnesses
*comment ---------------------------------------------------------------- CH22.B.01
*label b
*sid CH22.B.01
*date 2027-03-14 14:00
*place P20 okafor_restoration
*present chukwudi ellis ernesto
Sunday, in the Okafors' workroom.

The big bench is pushed against the wall. There are six camp beds where it was, borrowed from Eastbank, from the Regent, from a scout hut Owen knows, and six people in them, alive. The bridge hums through our frame on the bench, and out, in thin threads, to the kitchen upstairs, where {volunteers} neighbours are asleep on the floor in their coats, each carrying a little.

@chukwudi:tired Chukwudi's in his apron, asleep in his chair, with the error book open on his knee. He's written one line in it, at five this morning, in his careful hand: [i]March 14. Everyone. Not an error.[/i]

@ellis:warm Ellis is drawing them. All six, asleep. "For the record," he says. "Somebody should draw it. Somebody should be able to prove it happened."

@ernesto:neutral At noon, Ernesto came with soup for forty, which is the only amount he knows how to make. He's still here, at the door, with his arms folded, making sure nobody comes in who shouldn't. "Here is what we'll do," he says, to nobody, to everybody. "We'll take turns."

The evidence isn't here. It's in three places: with Gareth, in the Municipal Investigations safe; at Eastbank, in the association's strongbox under the long table; and at the Regent, in Lucien's vault, behind a door that's been locked since 1931. Three copies. Where no single house can lose it, or bury it, or bargain with it.
*if damian_fate = "fled"
  They found Damian at six this morning, at the coach station, with a ticket to the coast. Gareth's officers took him. He asked if the sensitive was all right.
*elseif damian_fate = "custody"
  Damian sat on the bench at Pump Nine until the police came, with Reuben standing over him, and went without a word.
*elseif damian_fate = "arrested"
  Damian's in a police cell, being asked by officers who don't know what he is about the electricity meter at Pump Nine. He's being very helpful. It won't help.
*else
  Damian was taken at Pump Nine at a quarter past one, I'm told. I felt it from where I was: a pleasant, interested thread going out of the city's weather, and not coming back.
*set alive_quentin true
*set alive_silas true
*set alive_felix true
*set donors_freed true
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.B.02
*sid CH22.B.02
*date 2027-03-17 15:00
*place P23 calder_general
*present eamon hugo clive reuben
Wednesday. A borrowed side room at the General, for the check-ups, with Reuben running a clinic out of it in the evenings, unofficially, on a rota he wrote himself.

The communities are building the recovery themselves, because nobody else is going to. Eastbank's association has a fund for lost wages. The Regent's trust is paying for night nursing. The restorers' circle is making the frame safe for weaning, a notch a week. Martin's printing the forms.
*snapshot aftermath-all

@reuben:attentive Reuben asks Eamon and Hugo and Clive what they want. Properly, one at a time. And it's written down, in three copies.

@eamon:tired Eamon wants to post a letter he wrote in August, to his sister, and then go home to the Marches. "And I want it in the record," he says, "that I asked for help, and the Court said I'd chosen my risks."

@hugo:angry Hugo wants his job, his wages, and a seat at the association's table when they decide what happens to the man who did this. "Not to shout," he says. "To be counted."

@clive:small Clive wants to see his studio. His students painted the door yellow while he was gone, with the crack in it filled in gold. He wants to teach on Thursday. Reuben says a fortnight. Clive says Thursday. They settle on a week on Thursday, and both of them think they've won.
*comment ---------------------------------------------------------------- CH22.B.03
*sid CH22.B.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present gareth ellis
Saturday. Mercy House's long steel table, because Orrell asked the coalition to come and tell him, to his face, what happens next, and not to let him read it in a file.
*meet gareth
@gareth:attentive Gareth Moss has his notebook out: a square pale face, ginger hair cut short, a rain jacket, and the patience of someone who collects patterns and has finally been handed a whole one. "The case holds," he says. "Every page. I've had four lawyers try to break it this week, and it holds."

Damian's charged, in a court that doesn't know what he is, for what it can prove: false imprisonment, the electricity, the licence, the forged records, the three men. It'll be enough. Armand's foundation is under investigation. August Rell's shop has a notice on the door.

@ellis:neutral Ellis is sitting next to me, drawing Gareth's hands. "One more thing," he says, without looking up. "The only one that's ours to decide."

How much do we tell?

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Every table in the city that carried a little on Saturday night deserves to know what they carried, and why. Not the newspapers.

    @gareth:attentive Gareth writes it down. "Communities," he says. "Understood. I'll keep the court case as dull as I can. I'm very good at dull."
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. Carefully. Through Gareth and the courts, with every patient's name kept out, and the donors' in only if they want them there.

    @gareth:attentive Gareth looks up from his notebook, and for a moment he isn't dull at all. "Right," he says. "Then let's do it properly."
*goto end

*comment ================================================================ C. The Long Recovery
*comment ---------------------------------------------------------------- CH22.C.01
*label c
*sid CH22.C.01
*date 2027-03-14 14:00
*place P20 okafor_restoration
*present chukwudi ellis reuben
The interim bridge holds. Heavy and slow.

Three volunteers, each carrying one of them, in three camp beds in the Okafors' workroom, next to three more camp beds with Quentin and Silas and Felix in them, a thread of light running from each to each through our frame on the bench. The volunteers sleep twelve hours at a stretch and wake up grey and shaking and ask for toast. The patients sleep too. Everyone's alive. Nobody's well.

@reuben:tired Reuben's weaning the links down a notch at a time. He's worked it out on paper: a notch a week, if nobody gets worse. Twelve weeks, maybe. Maybe more. He's written it on the wall in marker, a timetable, with a column for each of them.

@chukwudi:tired Chukwudi's taken the shop's sign off the door. He's not taking commissions until this is over.

@ellis:small Ellis is making the tea. All of it, for everyone, for twelve hours, because it's the only thing he can think of to do with his hands. He looks at me over the kettle. "It worked," he says. "It's going to take for ever. But it worked."
*if damian_fate = "fled"
  They found Damian at six this morning, at the coach station. Mercy House has him now, in a room in the old wing.
*elseif (damian_fate = "custody") or (damian_fate = "arrested")
  Damian's in Mercy House's custody, in a room in the old wing, being asked questions by people who understand the answers.
*else
  Damian was taken at Pump Nine at a quarter past one. Mercy House has him now.
*set alive_quentin true
*set alive_silas true
*set alive_felix true
*set donors_freed true
*set damian_fate "custody"
*set armand_fate "withdrawn"
*set august_fate "ruined"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.C.02
*sid CH22.C.02
*date 2027-03-17 15:00
*place P23 calder_general
*present eamon hugo clive
Wednesday. A side ward at the General, where the donors are being kept for a week for observation, on the hospital's money and nobody else's.

There's a copy of the Okafors' timetable on the wall here too: a week at a time, with care rotas, and lost wages, and a fund for the volunteers' rent, which Martin started with a tin on the print shop counter and which has, somehow, eleven hundred in it.
*snapshot aftermath-all

Eamon and Hugo and Clive are freed, and awake, and furious, and entitled to be.

@hugo:angry "Five months," says Hugo. "Five months of my life, in a bed, for a stranger. And now I'm supposed to be grateful it's over?" He looks at me. "I'm not. I'm angry. Somebody should be."

"Be angry," I say. "You've got every right."

@eamon:tired Eamon's quieter. He wants his letter posted, to his sister, and to go home to the Marches, and not be anyone's lesson.

@clive:sad Clive doesn't say anything for a long time. Then he asks if anyone thought to feed his cat, and when I tell him his students have been taking turns since New Year's Day, he cries, suddenly and loudly, like a child, and then laughs at himself, and then cries again.
*comment ---------------------------------------------------------------- CH22.C.03
*sid CH22.C.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell adrian
Saturday. The ring ends, the way these things do, not with a bang but with a lot of people quietly stopping.

Damian's in Mercy House's custody, answering questions in the old wing to people who understand the answers. Armand Sorrell has stepped back from everything: the foundation, the boards, the exhibitions. There's a notice in the paper, very small, about a sabbatical. August Rell's clients are disappearing one by one, like lights going off in a street; the shop's still open, but nobody goes in.

@orrell:neutral Orrell has the file on the table between us. "What we tell the city," he says, "is smaller than what happened. That's usually true. The question is how much smaller."

@adrian:attentive Adrian's taking the minutes. He waits for me, pen up.

*choice
  #Tell nobody outside the people who were there. The patients' privacy first.
    *set disclosure "none"
    Nobody. Not outside the people who were there. Quentin and Silas and Felix are going to be weaning off a bridge for three months, cold-handed and bad-tempered; they don't need to do it with their names in anybody's mouth.

    @orrell:neutral Orrell closes the file. "Their privacy first," he says. "Noted."
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. The people who live next to this, and might one day have a son on a bench or a brother in a bed, should know it happened, and that it was stopped, and who stopped it. Not the papers.

    @adrian:attentive Adrian writes it down. "Communities," he says. "Known."
*goto end

*comment ================================================================ D. The Private Settlement
*comment ---------------------------------------------------------------- CH22.D.01
*label d
*sid CH22.D.01
*date 2027-03-14 14:00
*place P37 sorrell_house
*present armand
Sorrell House, in daylight, which it looks worse in: every crack in the stone, every dry leaf in the fountain.

The interim bridge holds, on Armand's money and on Armand's terms. By noon, everyone had been moved from Pump Nine to a private clinic in Briar Heights with a brass plate on the door and no name on it: six men, three volunteers, a medical team who were paid very well to ask no questions and keep no public record. Every captive freed. Every patient alive.

@armand:tired Armand receives me in the library, by the dead fire. He hasn't slept. He's in the cardigan still. "Everyone?" he says.

"Everyone."

@armand:sad He closes his eyes. The grief is still there, all of it, filling the room to the ceiling. But the hope's gone out of it. What's left is a man sitting by a cold fire, on the tenth anniversary, with nothing attempted in his son's name, and six men alive instead.

@armand:neutral "Then I'll keep my side," he says. "All of it. You have my word, and you have it in writing, which I suspect you prefer."
*if (damian_fate = "fled") or (damian_fate = "")
  Damian was found at six this morning. He's in custody, somewhere quiet, out of sight, which was one of the terms.
*else
  Damian's in custody, somewhere quiet, out of sight, which was one of the terms.
*set alive_quentin true
*set alive_silas true
*set alive_felix true
*set donors_freed true
*set damian_fate "custody"
*set armand_fate "settled"
*set august_fate "bargained"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.D.02
*sid CH22.D.02
*date 2027-03-17 15:00
*place P23 calder_general
*present eamon hugo clive
Wednesday. The donors have been moved from the private clinic to the General for their check-ups, because the private clinic doesn't keep records and the General does, and Reuben insisted.
*snapshot aftermath-all

Recovery with everything paid for, quietly. Wages, rent, physiotherapy, a counsellor. And a lawyer from Armand's firm, with a folder, who comes on Wednesday afternoon and sits by each bed in turn and explains, very kindly, what they're being offered, and what they'd be asked to sign.

@hugo:angry Hugo reads it twice and signs it. "I've got a mortgage," he says, to me, not quite looking at me. "I'm not proud of it."

@clive:tired Clive signs it too, and then asks for a copy, and then asks for a second copy, for his students, in case anyone ever asks him what happened and he's not allowed to say.

@eamon:angry Eamon doesn't sign. He reads it, and hands it back to the lawyer, and says he'd like his letter posted, and to go home, and that if anyone from Calder wants him to be quiet they can come to the Marches and ask him themselves.
*comment ---------------------------------------------------------------- CH22.D.03
*sid CH22.D.03
*date 2027-03-20 11:00
*place P37 sorrell_house
*present armand
Saturday. Sorrell House again, for the last time.

@armand:neutral Armand walks me round the garden, in his good coat, with his hands behind his back. The terms are kept. Damian's in custody, out of sight. August has bargained himself into a small flat in another city and an agreement never to trade in Calder again. Armand keeps his name, and his seat on two boards, and a limit on how far this goes.

I agreed to it. I'll carry that.

@armand:tired "You're thinking I got away with it," he says, at the dry fountain.

"You did."

@armand:sad "Yes," he says. "Partly. I'll be paying for the rest of it for the rest of my life, and not in money." He looks up at the house, at a window on the first floor, at a white door behind it that's still shut. "I'm going to open his room," he says. "Next week. I've never been able to. I think I can, now."

There's only one answer to the last question, on these terms. It was in the terms.

*choice
  #Tell nobody outside the people who were there. The patients' privacy first.
    *set disclosure "none"
    Nobody. Not outside the people who were there. The patients' privacy first, and the donors', whatever they signed or didn't.

    It's what we agreed. It's also, I think, walking back down the hill, what I'd have chosen anyway for Quentin and Silas and Felix. That's the part that makes it bearable. It's not the part that makes it right.
*goto end

*comment ================================================================ E. The Severed Bond
*comment ---------------------------------------------------------------- CH22.E.01
*label e
*sid CH22.E.01
*date 2027-03-14 14:00
*place P56 stillwater_docks
*present eamon hugo clive ansel
Stillwater, in the afternoon.

I come over through the footbridge at noon, because Ansel sent word that Eamon was asking for me, and I walk along the docks in daylight to warehouse seven, where our people have been keeping the door since one this morning.

The beds are still there. The drips are gone. And Eamon and Hugo and Clive are sitting up in them, weak and grey and thin as paper, and alive, and entirely themselves. Nothing runs out of them any more. Nothing runs in.
*snapshot aftermath-donors

@ansel:tired Ansel's sitting on the end of Eamon's bed. He hasn't slept. He hasn't let go of Eamon's hand since one o'clock, Micah tells me, except to write the note that brought me here.

@eamon:tired Eamon looks at me. He knows who I am. He says he felt someone, in January, down the thread, telling him somebody came. "That was you," he says. It isn't a question. Then: "They told me. About the three in Calder. The ones on the other end." His voice goes. "I'm alive because they're not."

"They chose it," I say. "They decided it themselves, in February, at a table. Nobody would be kept in a bed for them."

@eamon:sad "That doesn't make it smaller," says Eamon.

"No," I say. "It doesn't."

At Pump Nine, at a quarter past one, Quentin and Silas and Felix died when their support ended, as the rules always said they would. {@q_free_first|Quentin told us to free Eamon first. We did. |}Some of them chose it. That doesn't make it smaller. It's not supposed to.
*if st_quentin >= 5
  I've been holding it away from me since one o'clock, like something hot. I let myself hold it now, for a second, on the end of a bed in another country. Quentin. His cold hands. His direct gaze. [i]Warm. How are you always warm?[/i]

  It doesn't get smaller either.
*if (damian_fate = "custody") or (damian_fate = "arrested")
  Damian's under guard. He was taken at Pump Nine, before the end.
*else
  Damian got out of Pump Nine. They say he's making for the docks.
*set alive_quentin false
*set alive_silas false
*set alive_felix false
*set donors_freed true
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.E.02
*sid CH22.E.02
*date 2027-03-17 15:00
*place P30 rusk_funeral
*present simeon jonah eamon hugo clive
Three funerals in a week.
*meet simeon
@simeon:sad Rusk Funeral Rooms, with Simeon doing it right this time. His round gentle face, his immaculate black suit, his quiet hands. It was one of his vans that took Quentin out of the lane in August, on somebody else's code; it's Simeon who takes him out of the city now, and he knows it, and he does every single thing properly, slowly, with his own hands, and doesn't let anyone else touch anything.
*meet jonah
@jonah:sad Jonah Peake plays at all three: gaunt and kind, his long dark hair tied back, his violin. He refuses, absolutely, to make any of it a performance. He plays the old tunes, plainly, and stops when they're finished, and puts the violin away.

Quentin's is on Monday. His brother stands at the back, in daylight hours he shouldn't, under an umbrella, in a long coat, and doesn't speak to anyone. Silas's is on Tuesday, and Otis carries one corner of the coffin and doesn't let anyone take it from him. Felix's is today, and Ellis and Milo stand at the front, and Milo plays thirty seconds of Felix's footage on a phone, of the river, and nobody can look at anything else.

@hugo:angry The donors come. Those who can walk. Hugo comes to all three on crutches, in a suit that's too big for him now, and stands at the back, and is angry, and grieves, and doesn't know which is which. "I'm alive because of them," he says, outside, in the car park. "I didn't ask to be. They didn't ask me." He wipes his face with his sleeve. "Both. It's both. It's allowed to be both."

@clive:sad Clive brings a bowl for each of them, made on the wheel on Monday night: cracked, on purpose, and the crack filled with gold.

@eamon:sad Eamon says nothing at all. He stands beside Ansel at every one of them, with his letter in his coat pocket, still unposted.
*comment ---------------------------------------------------------------- CH22.E.03
*sid CH22.E.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell adrian
Saturday. The board room at the top of Mercy House.
*if (damian_fate = "custody") or (damian_fate = "arrested")
  Damian's in a cell in the old wing, charged. He asks for paper, every day, to write his account. They give him paper. He writes very neatly.
*else
  Damian was arrested at the docks on Tuesday night, trying to get on a boat going east. He went reasonably, like a man sure he'd be out by the weekend. He won't be.
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
Armand's name is in every report. August Rell is charged, and his shop is shut, with a notice on the door. And a city that didn't know these men existed has to decide what it's going to be told.

@orrell:tired Orrell's at the head of the table. "Three dead," he says. "Three freed. A doctor charged. A patron exposed." He looks at me. "It'll be written down as a success. I want you to know I know it isn't one."

@adrian:sad Adrian's taking the minutes. His pen stops, for a second, on the three names.

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Every table in the city that lives next to this should know three young men died so three others could live, and that they chose it, and that it should never have been a choice anyone had to make. Not the papers.

    @orrell:neutral "They'll hear it from us," says Orrell. "With the names."
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. Carefully, through Gareth and the courts. With every patient's name kept out, because the dead can't consent to being a headline, and the donors' in only if they want them there.

    @adrian:attentive Adrian writes it down. Then he underlines it, twice.
*goto end

*comment ================================================================ F. What We Could Save
*comment ---------------------------------------------------------------- CH22.FQ.01
*label fq
*sid CH22.FQ.01
*date 2027-03-14 14:00
*place P01 mercy_house
*present quentin reuben
One bridge. Quentin lives.

Mercy House's infirmary, the long windows, the smell of the river. One bed occupied in the patients' row, and two stripped, with the blankets folded at the ends. And three beds at the far end, where Eamon and Hugo and Clive are asleep, grey and thin and entirely themselves.

@quentin:tired Quentin's awake. He's been awake since four. He asked Reuben who else made it, and Reuben told him, and now he's lying very still, looking at the ceiling, with his cold hands on the blanket.

@quentin:angry "Don't," he says, when I sit down. "Don't say it was the right choice. There wasn't one." He turns his head and looks at me, with that direct gaze. "Silas made croissants. Felix was going to finish his film. And I'm here, because somebody had to be, and it was me."

"I know."

@quentin:hurt "I don't forgive anyone," he says. "Including me." And then, very quietly: "Stay anyway."

I stay.
*set alive_quentin true
*set alive_silas false
*set alive_felix false
*set donors_freed true
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.FQ.02
*sid CH22.FQ.02
*date 2027-03-17 15:00
*place P30 rusk_funeral
*present quentin simeon eamon hugo clive
Rusk Funeral Rooms. Two funerals in a week.
*snapshot aftermath-quentin
*meet simeon
@simeon:sad Simeon's doing it right this time: slowly, properly, with his own hands.

@quentin:guarded Quentin insisted on coming, in a wheelchair, in his big coat, with Reuben pushing it and furious about it. He sits at the back of Silas's service with his hands in his armpits and doesn't say anything. At the end, he gets up out of the chair, on his own, and stands for the last hymn, and nobody tries to stop him.

@eamon:small Eamon comes, and Hugo on crutches, and Clive. They stand at the back too. Eamon keeps looking at Quentin: the man who lived on his life for seven months. Quentin keeps not looking at him. At the end, Eamon goes over, and they shake hands, very formally, like two men who've been through a war on different sides and aren't sure yet what that makes them.

@quentin:hurt "I'm sorry," says Quentin.

@eamon:tired "So am I," says Eamon. "It wasn't either of us."
*comment ---------------------------------------------------------------- CH22.FQ.03
*sid CH22.FQ.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell
Saturday. The board room at the top of Mercy House.

Damian's charged. Armand's name is in the report, all of it. August's shop is shut. Two funerals this week: Otis at one, carrying a corner of the coffin and not letting anyone take it from him; Ellis and Milo at the other, and thirty seconds of Felix's footage of the river on a phone, that nobody could look away from.

@orrell:tired Orrell's at the head of the table, with the file. "One of three," he says. "And three of three freed." He takes his reading glasses off, which he never does in front of anyone. "What do we tell them?"

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Everyone who lives next to this should know what it cost, and who paid, and that it was stopped. Not the papers.

    @orrell:neutral Orrell nods. "With the names," he says. "They've earned their names."
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. Carefully, through Gareth and the courts, with every patient's name kept out, the living and the dead.

    @orrell:neutral "Carefully," says Orrell. "Yes."
*goto end

*comment ---------------------------------------------------------------- CH22.FS.01
*label fs
*sid CH22.FS.01
*date 2027-03-14 14:00
*place P01 mercy_house
*present silas reuben otis
One bridge. Silas lives.

Mercy House's infirmary. One bed occupied in the patients' row, and two stripped, with the blankets folded at the ends. And at the far end, Eamon and Hugo and Clive, asleep, grey and thin and themselves.
*meet otis
@otis:sad Silas isn't in his bed. Otis took him home at eleven this morning, against Reuben's advice, to the back room at the bakery, because he said a man should wake up somewhere that smells of bread. So I go to Lyle's. The back room, the camp bed, the smell of the ovens.

@silas:sad Silas wakes up while I'm there. He asks for the others. Otis tells him. And Silas cries, very neatly, into a tea towel, and then folds the tea towel and holds it in his lap, and cries again.

@otis:sad Otis doesn't let go of his hand. Not once. Not for an hour. He sits on an upturned flour crate beside the camp bed with his big floury forearms on his knees and holds Silas's hand, and says nothing, because there's nothing, and he knows it.

@silas:small "I'm alive," Silas says, eventually, very small, like someone confessing to a crime. "I'm sorry."

"Don't be sorry," I say. "Just be alive."
*set alive_quentin false
*set alive_silas true
*set alive_felix false
*set donors_freed true
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.FS.02
*sid CH22.FS.02
*date 2027-03-17 15:00
*place P30 rusk_funeral
*present silas otis simeon eamon hugo clive
Rusk Funeral Rooms. Two funerals in a week.
*snapshot aftermath-silas
*meet simeon
@simeon:sad Simeon's doing it right this time, slowly, properly, with his own hands.

Quentin's is first. His brother Gideon stands at the back, in daylight hours he shouldn't, under an umbrella, in a long coat, with Quentin's face made harder, and doesn't speak to anyone, and stays until the very end.
*if st_quentin >= 5
  I stand at the back too. I don't know where else to stand. I keep thinking about his cold hands on the Riverside Steps, and [i]Warm. How are you always warm?[/i], and that he died in a lane in August and then again at a quarter past one on a Sunday, and that the second time he'd decided it himself.

@silas:sad Silas comes, in Otis's good coat, too big for him. He stands beside the coffin and says, to it, very politely, "Thank you. I'm sorry. Thank you."

@hugo:angry Hugo comes on crutches, and is angry, and grieves, and says it's allowed to be both. Eamon and Clive stand beside him.

Felix's is on Friday. Ellis and Milo will be at the front. Milo's going to play thirty seconds of Felix's footage, of the river. He's already told me nobody will be able to look away from it.
*comment ---------------------------------------------------------------- CH22.FS.03
*sid CH22.FS.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell
Saturday. The board room at the top of Mercy House.

Damian's charged. Armand's name is in the report, all of it. August's shop is shut. Two funerals: Gideon at one, standing in daylight under an umbrella; Ellis and Milo at the other.

@orrell:tired Orrell's at the head of the table. "One of three," he says. "Three freed. A doctor charged." He takes his reading glasses off. "What do we tell them?"

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Everyone who lives next to this should know what it cost, and who paid, and that it was stopped. Not the papers.

    @orrell:neutral "With the names," says Orrell. "They've earned their names."
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. Carefully, through Gareth and the courts, with every patient's name kept out, the living and the dead.

    @orrell:neutral "Carefully," says Orrell. "Yes."
*goto end

*comment ---------------------------------------------------------------- CH22.FF.01
*label ff
*sid CH22.FF.01
*date 2027-03-14 14:00
*place P01 mercy_house
*present felix ellis reuben
One bridge. Felix lives.

Mercy House's infirmary. One bed occupied in the patients' row, and two stripped, with the blankets folded at the ends. And at the far end, Eamon and Hugo and Clive, asleep, grey and thin and themselves.

@ellis:tired Ellis is sitting by Felix's bed, holding his hand. He's been there since four. He hasn't drawn anything. His sketchbook's on the floor, shut.

@felix:tired Felix wakes while I'm there. He looks at Ellis, and at me, and at the two stripped beds, and he knows. He doesn't need anyone to tell him. He's always been the one who worked things out first.

@felix:angry "I'm going to finish the film," he says. His voice is a thread. "I'm going to finish it, and it's going to have their names in it. Both of them. At the start, not the end. Before anything else." He looks at Ellis. "Promise me you'll make me."

@ellis:sad "I promise," says Ellis, and his face does something I've never seen it do, not on the museum steps, not anywhere. It stops performing, all of it, all at once.
*set alive_quentin false
*set alive_silas false
*set alive_felix true
*set donors_freed true
*set damian_fate "arrested"
*set armand_fate "exposed"
*set august_fate "charged"
*set e18 true
*set e18_src "assembled"
*comment ---------------------------------------------------------------- CH22.FF.02
*sid CH22.FF.02
*date 2027-03-17 15:00
*place P30 rusk_funeral
*present felix simeon eamon hugo clive
Rusk Funeral Rooms. Two funerals in a week.
*snapshot aftermath-felix
*meet simeon
@simeon:sad Simeon's doing it right this time, slowly, properly, with his own hands.

Quentin's is first. His brother Gideon stands at the back, in daylight hours he shouldn't, under an umbrella, and stays until the very end.
*if st_quentin >= 5
  I stand at the back too. I keep thinking about his cold hands on the Riverside Steps. [i]Warm. How are you always warm?[/i] He decided it himself, the second time. It doesn't help. It's not supposed to.

Silas's is the day after. Otis carries a corner of the coffin and won't let anyone take it from him.

@felix:tired Felix comes to both, in a wheelchair, with his phone in his lap, not filming. At the end of Silas's, he asks Otis if he can have one of the paper bags from the bakery, the ones Silas used to fold the croissants into. Otis gives him the whole stack.

@hugo:angry Hugo comes on crutches, and is angry, and grieves, and says it's allowed to be both.

@clive:sad Clive brings two bowls, made on the wheel on Monday night: cracked, on purpose, and the cracks filled in gold.
*comment ---------------------------------------------------------------- CH22.FF.03
*sid CH22.FF.03
*date 2027-03-20 11:00
*place P01 mercy_house
*present orrell
Saturday. The board room at the top of Mercy House.

Damian's charged. Armand's name is in the report. August's shop is shut. Two funerals: Gideon at one, under his umbrella; Otis at the other, carrying a corner.

@orrell:tired Orrell's at the head of the table. "One of three," he says. "Three freed." He takes his reading glasses off. "What do we tell them?"

*choice
  #Tell the communities: every family, pack, trust and circle. Not the newspapers.
    *set disclosure "communities"
    The communities. Everyone who lives next to this should know what it cost, and who paid, and that it was stopped. Not the papers. Felix's film can tell the rest, when he's ready, in his own way.

    @orrell:neutral "With the names," says Orrell.
  #Tell Calder. Carefully, through Gareth and the courts, with every patient's name kept out.
    *set disclosure "public"
    Calder. Carefully, through Gareth and the courts, with every patient's name kept out, the living and the dead, until Felix decides otherwise.

    @orrell:neutral "Carefully," says Orrell. "Yes."
*goto end

*comment ================================================================ the week
*comment ---------------------------------------------------------------- CH22.END.01
*label end
*sid CH22.END.01
*date 2027-03-21 20:00
*place P02
*mood night
A week.

The flood marks on the Riverside Steps are the highest in ten years. The river's gone down since, and left a line of branches and plastic and one very surprised traffic cone halfway up the stone, and the council's put a sign up saying the steps are closed, which everyone ignores.

I sleep for fourteen hours, on Saturday night, and wake up on Sunday with the light coming in, and lie there, and know the names.
*if (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D")
  Quentin. Silas. Felix. Eamon. Hugo. Clive. Everyone who lived. Which is everyone.
*elseif ending = "E"
  Eamon. Hugo. Clive. Everyone who lived. And Quentin, and Silas, and Felix. Everyone who didn't.
*elseif ending = "F_Q"
  Quentin. Eamon. Hugo. Clive. Everyone who lived. And Silas, and Felix. Everyone who didn't.
*elseif ending = "F_S"
  Silas. Eamon. Hugo. Clive. Everyone who lived. And Quentin, and Felix. Everyone who didn't.
*else
  Felix. Eamon. Hugo. Clive. Everyone who lived. And Quentin, and Silas. Everyone who didn't.

I'll say them for the rest of my life.

*journal [b]Chapter 22.[/b] The week after. {@ending = "A"|The Shared Return: all six alive, and Mercy House made to answer for the old program, in its own record, in front of the men it hurt.|}{@ending = "B"|A City of Witnesses: all six alive, carried by neighbours, the evidence in three copies where no house can lose it.|}{@ending = "C"|The Long Recovery: all six alive, weaning off the interim bridge a notch a week. Nobody is well yet.|}{@ending = "D"|The Private Settlement: all six alive, on Armand's money and Armand's terms. I'll carry that.|}{@ending = "E"|The Severed Bond: Eamon, Hugo and Clive are free. Quentin, Silas and Felix died when their support ended, as they chose. Three funerals.|}{@ending = "F_Q"|What We Could Save: Quentin lives. Silas and Felix died. The donors are free. Two funerals.|}{@ending = "F_S"|What We Could Save: Silas lives. Quentin and Felix died. The donors are free. Two funerals.|}{@ending = "F_F"|What We Could Save: Felix lives. Quentin and Silas died. The donors are free. Two funerals.|} {@disclosure = "none"|We told nobody outside the people who were there.|}{@disclosure = "communities"|We told the communities, not the papers.|}{@disclosure = "public"|We told Calder, carefully, with the patients' names kept out.|}
*page_break
*goto_scene ch23
`);
