NB.scene("ch14", String.raw`
*mood winter
*set ch 14
*chapter 14 Passage Denied
*comment ---------------------------------------------------------------- CH14.CLOSED.01
*sid CH14.CLOSED.01
*date 2026-12-29 09:00
*place P58
*present ansel severin percival oswin
*if companion = "adrian"
  *present ansel severin percival oswin adrian
*elseif companion = "micah"
  *present ansel severin percival oswin micah
*elseif companion = "nolan"
  *present ansel severin percival oswin nolan
*elseif companion = "reuben"
  *present ansel severin percival oswin reuben
*set strain 0
*set s14 "fore"
In the morning, the crossing office is shut.

Not closed for the day. Shut. There's a notice on the door of the squat stone building in the Toll Gardens, in two colours, with three seals on it, and a crowd in front of it in the snow: couriers, traders, a family with a cart and a goat, a woman with a baby, all reading it and arguing.

@ansel:tense Ansel reads it twice. His face goes very still. "The passage to Calder is closed," he says. "By order of the crossing office. Pending a ruling of the Fair's closing assembly." He looks at the date at the bottom. "Which sits when it chooses. It could be a week. It could be six."

Nobody crosses. Not back through the Iron Footbridge. Not through anywhere.

Inside the office, when Ansel knocks and is let in because of his collar, there are three men arguing across a table covered in papers.
*meet oswin
*if oswin_met
  @oswin:amused Oswin Deller, in his heavy coat, warming his hands at the stove, smiling, pleasant, exactly as he was over the lamb.
*else
  @oswin:amused A heavy, pleasant-faced man in his forties in a merchant's heavy coat, ruddy, with thinning hair oiled flat, warming his hands at the stove and smiling. Oswin Deller, Ansel tells me under his breath. A broker. Leases, warehouses, shipping.
@oswin:amused "It's quite simple," Oswin is saying. "The lease on the Iron Footbridge threshold lapsed at midwinter. It's been renewed. By my company. Perfectly legally." He spreads his hands. "Until the assembly confirms the new terms, I'm afraid nobody can use it. It would be irregular."

@percival:angry "It would be [i]common[/i]," snaps an old man in a ranger's cloak, leaning on a staff he doesn't need.
*meet percival
*if fr_percival >= 1
  Percival Tern. The orchard keeper who argues with Malcolm about the roof, and drew me a map of the crossings on the back of Ansel's lease papers.
*else
  Percival Tern, Ansel says: the old orchard keeper from the border country, who's been keeper of one of the Court's crossings for fifty years and is retiring at the new year.
@percival:angry "That crossing's been common for three hundred years. Anyone with the fee and the courtesy. Now you want it for your own carts, Deller, and you want to charge the rest of us to look at it."
*meet severin
*if fr_severin >= 1
  @severin:neutral And Severin Marr, at the head of the table, in his high collar and his rings, saying nothing, and then saying, reasonably, that a regulated crossing is a safer crossing, and that the Court would be wise to back a restrictive agreement until the assembly can sit. Framing it so gently it sounds like the only responsible thing.
*else
  @severin:neutral And at the head of the table, a man with Ansel's face made severe: the long nose, the cool pale skin, dark hair silvering, a collar even stiffer than his son's and rings of office on three fingers. Severin Marr, the envoy. Ansel's father. He says nothing for a long time, and then says, reasonably, that a regulated crossing is a safer crossing, and that the Court would be wise to back a restrictive agreement until the assembly can sit. He frames it so gently it sounds like the only responsible thing.

@ansel:small Ansel, beside me, doesn't look at his father. His father doesn't look at him.

So we're stuck. On the wrong side of a door, over the New Year, with the way home shut by a broker who asks polite questions about Calder's docks.

There are three ways home, Ansel says, afterwards, on a bench in the snow in the Toll Gardens. He counts them on his gloved fingers.
*if companion != "none"
  *if companion = "adrian"
    @adrian:attentive Adrian's written them down before he's finished.
  *elseif companion = "micah"
    @micah:tense Micah's listening with his hands jammed in his jacket and his jaw set.
  *elseif companion = "nolan"
    @nolan:tense Nolan's listening with the recorder off, for once.
  *elseif companion = "reuben"
    @reuben:attentive Reuben's listening with his big hands round a paper cup of cider he hasn't drunk.
@ansel:attentive "The court. There's a hearing tomorrow, in the pavilion, on the closure. Anyone may speak. An outsider speaking for common access would be... unusual." A second finger. "My cousin Lucan. His family, the Verres, have an old right of passage, from before the leases. But their estate's in trouble. Debts. Nobody's told him how bad." A third. "Or the boundary. Percival knows an old road through the border country, the Glass Road, to the orchard crossing that comes out at Orchard House. It opens on the third. Nobody's used it in years. It's..." He hesitates. "Strange."

*choice
  #The court: speak at the Toll Gardens hearing, for common access.
    *set ch14_way "court"
    *goto court
  #The estate: Lucan's household is drowning in debts nobody told him about. Help, and use his family's right of passage.
    *set ch14_way "estate"
    *goto estate
  #The boundary: Percival knows the old road through the border country to the orchard crossing.
    *set ch14_way "boundary"
    *goto boundary

*comment ---------------------------------------------------------------- CH14.COURT.01
*label court
*sid CH14.COURT.01
*date 2026-12-30 10:00
*place P58
*present ansel severin percival oswin
*set ally_court true
*set still_lead "registry"
*set s14 "resolved:court"
The hearing's in the pavilion in the Toll Gardens: a round wooden building like a bandstand with walls, packed to the doors, with a stove in the middle and three old judges on a bench in fur-collared gowns who look as if they'd rather be anywhere else.

Oswin speaks for his lease, pleasantly, reasonably, for twenty minutes. Severin speaks for a restrictive agreement, in four sentences that each sound like the end of a discussion. Percival speaks for common access, loudly, for as long as the judges let him, and then some.

And then an outsider speaks. Me.

I didn't know I was going to. Ansel asked the clerk, and the clerk asked the judges, and the judges looked at each other and one of them shrugged, and here I am, standing by the stove in my good coat, in a foreign court, with three hundred people looking at me.

So I tell them what common access means in Calder. Not to the Court. To people. To a bus driver who sees the whole city at night. To a baker's apprentice. To a courier from the Marches called Eamon Kerr, who carried letters for four years, who whistled terribly, and who took the Northwood crossing in August because the official fee on the Iron Footbridge was more than he earned in a week. Who never arrived.

"If the proper door costs too much," I say, "people use the dangerous one. That's all. That's the whole of it. And then they don't come home."

It's very quiet in the pavilion.

@ansel:tense And then Ansel stands up. I can feel what it costs him. The cold water in the glass, shaking all the way down. His father is sitting four seats away. The whole Court is watching. He's been carrying his father's intentions since he was twelve.

*choice
  #Tell Ansel he doesn't have to speak. And mean it.
    *set st_ansel +1
    I catch his eye. I shake my head, very slightly. [i]You don't have to.[/i] And I mean it. It's his father, and his Court, and his life, and it isn't mine to spend.

    @ansel:surprised He sees it. He stands there for a long moment, looking at me. And then he sits down again, slowly, without speaking, and the knack gives me something in him I don't expect: not shame. Relief. The relief of being allowed not to.

    @ansel:warm Afterwards, outside, in the snow, he says: "Thank you." And then: "Everyone always wants me to be brave in the direction they're pointing." He looks at the pavilion. "You didn't point."
  #Tell Ansel this is the moment. He knows it is.
    *set ansel_spoke true
    I catch his eye. I nod, once. This is the moment, and he knows it.

    @ansel:tense He knows. He stands there for a long moment. Then he turns to the judges, very straight, and speaks, in his clear formal voice that carries to the back of the pavilion.

    @ansel:attentive He says Eamon Kerr was his friend. He says he asked his father, formally, for the Court's help, and was refused, because a courier who used Northwood "chose his risks". He says that a crossing that only the rich can afford is a crossing that sends the poor into the dark. He says he's ashamed that it took an outsider to say so first. And then he sits down.

    He doesn't look at his father. His father doesn't look at him. But four seats away, I watch Severin Marr's rings go very still on his knee, and the frozen lake of him cracks, just once, somewhere deep, like ice in the night.

@percival:laugh The judges confer for eleven minutes. Then they grant a limited passage from the third of January, pending the assembly. Percival bangs his staff on the floor so hard a judge jumps.

And then the clerk reads the lease registry into the record, because a ruling on a crossing has to be read with the leases attached, and near the end, in the same dull voice as everything else, reads: [i]Deller and Company. Warehouse seven, Stillwater Docks. Leased from the first of May. Sublet in full to a Calder restoration concern.[/i]

A Calder restoration concern.
*if e11
  [i]Restoration storage · Pump Nine.[/i] The docket on the dashboard of the van in Felix's clip.
@oswin:guarded Oswin's smile doesn't change. His eyes do. Just for a second, in the lamplight, they go to me.
*goto quiet

*comment ---------------------------------------------------------------- CH14.ESTATE.01
*label estate
*sid CH14.ESTATE.01
*date 2026-12-30 09:00
*place P55
*present ansel lucan
*if companion = "adrian"
  *present ansel lucan adrian
*elseif companion = "micah"
  *present ansel lucan micah
*elseif companion = "nolan"
  *present ansel lucan nolan
*elseif companion = "reuben"
  *present ansel lucan reuben
*set fr_lucan +1
*set still_lead "clerk"
*set s14 "resolved:estate"
*set craft +2
@lucan:laugh The Verre estate is a day's ride out, and Lucan drives us there himself in a cart pulled by a horse called Minister, which he says was his grandfather's joke.

It's an orchard. Hundreds of acres of it, black bare apple trees in snow, running down a valley to a river, and a mill on the river with a wheel frozen solid, and a big old farmhouse, and cottages, and a household: thirty people who live on the estate and work it, and their children, and their grandparents. People who'd suffer if Lucan walked away. People who'd suffer if the estate went.

@lucan:tense And it's going. Lucan doesn't know. That's the thing. His father died two years ago and left it to him, and the steward's been keeping the books, and nobody's told Lucan, because nobody wanted to be the one. When Ansel asks, very gently, to see the ledgers, the steward goes white and brings them out, and Lucan sits at the kitchen table and reads them, and stops laughing.

Loans against the harvest. Years of them. Rolled over and rolled over, at interest that makes Martin's overdraft look like pocket money. And most of them bought up, in the last eighteen months, by one lender.

@lucan:angry "Deller," says Lucan. His freckled face has gone the colour of paper. "Oswin Deller. He's been buying my debts. He's been buying my [i]family[/i]."

So we work.

Two days. The ledgers, at the kitchen table, by lamplight: every loan, every payment, every date. And in between, winter work: mending fences, clearing the millrace, splitting wood, carrying things. Lucan's household watching us, suspicious and then less suspicious and then, on the second night, feeding us a stew that could raise the dead. By the end of it, Lucan has what he needs: three of Oswin's loans were bought through a false name, which in the Marches is a crime, and which gives him leverage. And his family's old right of passage, from before the leases, can be invoked at the crossing office on the third of January, and Oswin can't block it without explaining the false name.

@lucan:attentive And one more thing. The steward, grey-faced and ashamed and trying to make up for it, says, quietly, as we're leaving: "My cousin works the night gate at Stillwater Docks. For Deller's people. He doesn't like what he sees there." He writes a name on a scrap of paper. "Tell him I sent you."

*choice
  #Work the ledgers with Ansel till the lamps burn out.
    *set st_ansel +1
    Most of it's the ledgers. Ansel and me, side by side at the kitchen table, until the lamps burn out and the steward brings more oil and they burn out again.

    @ansel:attentive He's very good at it. Better than me. He reads the old Marches accounting hand like it's print, and he finds the false name on the second night, at two in the morning, with his finger on a column of figures, and goes completely still. "There," he says. "There it is." And he looks up at me across the table, in the lamplight, with ink on his fingers and his collar undone for the first time since I've known him, and he smiles. A real one. Tired and fierce and delighted.

    I think it's the first time I've seen him look his age.
  #Help in the mill with the companion I brought, or alone.
    *set craft +2
    I leave the ledgers to Ansel and Lucan, who can read the old hand, and go down to the mill.
    *if companion = "adrian"
      @adrian:attentive Adrian comes with me. The mill's wheel is frozen solid and the race is choked with ice and branches, and Adrian looks at it for a long time and then produces, from his vacuum-sealed rucksack, a notebook, and draws a plan. Numbered steps. We follow them. It works. By the second evening the wheel's turning, and the household's cheering from the bank, and Adrian's standing in the millrace up to his knees in freezing water with his sleeves rolled up and his hair in his eyes, looking, for once, like nobody's warden at all.
    *elseif companion = "micah"
      @micah:laugh Micah comes with me. The mill's wheel is frozen solid and the race is choked with ice and branches, and Micah looks at it and laughs out loud, delighted, and takes his jacket off. We clear it together: him in the race lifting things that should take three men, me on the bank with a rope and a lever and a lot of instructions he ignores. By the second evening the wheel's turning, and the household's cheering from the bank, and Micah's soaked to the waist and grinning, and one of the grandmothers has adopted him.
    *elseif companion = "nolan"
      @nolan:amused Nolan comes with me. The mill's wheel is frozen solid, but it's not the wheel that's the problem: it's the gearing inside, a hundred years old, wooden, and Nolan, who's never been able to leave a mechanism alone, takes one look and is lost. We do it together, by lamplight, the way we do everything: him on the gears, me holding the light. By the second evening the wheel's turning, and the whole mill's making a sound Nolan records for twenty minutes with his eyes shut.
    *elseif companion = "reuben"
      @reuben:warm Reuben comes with me. Mostly he ends up not in the mill but in the cottages, because it turns out half the estate's children have a cough and one of the old men has a hand that should've been seen to a month ago, and Reuben sits at kitchen tables with his medic's bag and sees to it, quietly, one after another. I clear the millrace alone, with a rope and a lever. By the second evening the wheel's turning, and Reuben's been fed by six different families.
    *else
      I clear it alone. The wheel's frozen solid and the race is choked with ice and branches, and it takes two days with a rope and a lever and a borrowed pickaxe and a great deal of swearing, and the household watching from the bank, suspicious, then less suspicious. By the second evening the wheel's turning, and a small boy has brought me a baked apple, and everybody's cheering, and my hands are so cold I can't feel them and I don't care.
*goto quiet

*comment ---------------------------------------------------------------- CH14.BOUNDARY.01
*label boundary
*sid CH14.BOUNDARY.01
*date 2026-12-30 08:00
*place P59
*present ansel percival
*set still_lead "threads"
*set s14 "resolved:boundary"
*set fr_percival +1
*set knack +3
The Glass Road.

@percival:attentive Percival walks it with us, the first day and the second, out and back, to show us the way before we have to take it for real on the third. "You don't walk the Glass Road for the first time when it matters," he says. "You walk it once to learn what it lies about."
*if companion != "none"
  {@companion = "adrian"|Adrian|}{@companion = "micah"|Micah|}{@companion = "nolan"|Nolan|}{@companion = "reuben"|Reuben|} stays in Bracken Court to keep our rooms and our place in the crossing queue. Percival says three is the most the road likes. He doesn't say what happens with four.

It runs west from Bracken Court through the border country: unsettled land, moor and birch and black water, no farms, no roads but this one. An old road, stone-paved, older than the Court, older than anyone knows. And everywhere along it there are puddles, and pools, and sheets of ice, and in every one of them, reflections of things that aren't there.

A house, in a puddle, where there's only moor. A man walking, in a frozen pond, where nobody's walking. A lit window. A dog. A tree in full summer leaf, in a pool in the middle of December.

@percival:neutral "The road shows what's bound," Percival says, stepping round a puddle with a whole village in it. "What's tied to what. What's holding on. Don't look too long. It doesn't show you why. Only what."

And then, on the first afternoon, in a long sheet of ice across the road, I see them.

Threads. In the reflection. Running across the ice from east to west, taut as wires, glowing faintly, like filaments in a bulb. Two of them. Running from somewhere downriver, in the Marches, off to the east, towards the crossing at Calder. Tight. Humming. I don't need to follow them to know where they go. I've felt the other end of them every day since August. One runs to Quentin. One runs to Silas.

And they come from the docks. From downriver. From somewhere at the edge of the water.

@ansel:scared Ansel's looking at them too. He can't see them. But he's looking at my face. "What is it?" he says. "What do you see?"

"Where they're keeping them," I say. "Downriver. The docks."

We sleep the night in a ranger's hut, stone, one room, with a stove and a stack of wood and three narrow bunks and Percival snoring like a bear. And the next day we walk back, the whole way, so that on the third we'll know where the road lies.

*choice
  #Ask Percival why he's really retiring.
    *set fr_percival +1
    In the hut, by the stove, while Ansel sleeps, I ask Percival. "Why are you retiring? Really?"

    @percival:guarded He looks at me for a long time with his bright sharp old eyes. Then he pokes the stove. "Because the crossings are being bought," he says. "One by one. By men like Deller, with leases and loans and polite questions. And I'm seventy-three, and I'm tired, and I can't stop it, and I won't watch it." He puts the poker down. "I've kept the orchard crossing common for fifty years. When I go, it'll go to whoever pays. And some of the people who pay..." He stops.

    "Stillwater," I say.

    @percival:sad "Stillwater," says Percival Tern. "Yes." And he looks at the stove for a long time, and doesn't say anything else, and the knack gives me an old man's grief for a country he loves that's being sold from under him a lease at a time.
  #Look longer into the reflections than Percival thinks is wise.
    *set strain +1
    *set reached +1
    *set threads_three true
    When Percival's gone ahead round the bend, I stop at the sheet of ice, and look longer. Much longer than he'd think wise.

    And the reflection deepens, the way water does when your eyes adjust. The two threads, taut and humming, running west. And then a third.

    Not taut. Slack. Hanging in the reflection like an empty harness, like a rope with a loop in the end and nothing in the loop. Anchored at the docks end, freshly, and running west towards Calder, and waiting. Waiting for someone.

    A third thread. Ready. For a third man.

    @percival:angry I don't know how long I stand there. When Percival comes back for me, I'm on my knees on the road with a headache like a nail through my eye and blood on my lip where I bit it, and he pulls me up by the collar, not gently, and says, "I told you. It shows you what. It never shows you why." And then, more quietly: "What did you see?"

    "They're getting ready for another one."
*goto quiet

*comment ---------------------------------------------------------------- CH14.QUIET.01
*label quiet
*sid CH14.QUIET.01
*date 2026-12-31 15:00
*place P57
*present ansel lucan
*if companion = "adrian"
  *present ansel lucan adrian
*elseif companion = "micah"
  *present ansel lucan micah
*elseif companion = "nolan"
  *present ansel lucan nolan
*elseif companion = "reuben"
  *present ansel lucan reuben
*mood night
The last day of the year, with nowhere to be.
*if ch13_lodging = "official"
  We've moved down to the Travelers' House for the New Year. Severin's house had become too quiet, too polished, too full of portraits with Ansel's nose; nobody said so; we just moved, and Ansel paid the landlady in advance, and she looked at his collar and gave us the rooms over the kitchen, which are warm.
*else
  The Travelers' House, where we've been all along, with its rules about boots and its cat.
Snow on the roof, snow on the windowsills, a candle in every window. A stove, roaring. A card game at the long table that nobody explains properly: the couriers play it with four packs and a system of insults, and Lucan cheats, and everyone knows, and it's part of the game. Hot cider. Wet wool. Nowhere to go, because the way home doesn't open until the third, and the thing we came to find is two hours downriver and we can't go yet.

And quiet days turn into a particular kind of closeness. The kind that only happens when nobody can leave.

*choice
  *if (companion = "adrian") and (st_adrian >= 3)
    #Adrian, off duty for the first time in the Marches, asks if I want to walk. He doesn't have a plan.
      *set b_adrian_offduty true
      *set st_adrian 4
      @adrian:shy Adrian comes and finds me by the window at three o'clock, in his coat, with no rucksack and no folder and no notebook. "Do you want to walk?" he says. And then, looking slightly alarmed at himself: "I don't have a plan. I haven't got a route. I just thought we could... walk."

      So we walk. Down to the river and along it, through the snow, under the bare willows, past the frozen boats. He doesn't lead. He doesn't narrate. He doesn't tell me anything about the Marches that he read in preparation. We just walk, and our boots crunch, and after a while he stops trying to walk in step with me and just walks.

      @adrian:warm "This is the first time I've been anywhere without a reason," he says, on the way back, as the lamps come on. "Since I was fourteen." He looks at the town, all its candles. "I think I like it."
  *if (companion = "micah") and (st_micah >= 3)
    #Micah gets a letter from home asking him back early. I tell him he's allowed to say no.
      *set b_micah_boundary true
      *set st_micah 4
      @micah:tense A courier brings Micah a letter at three o'clock: from Eastbank, through the Iron Footbridge on the first day it opened for post, in Ernesto's square capitals. [i]The Hendry job's started early. Need you back the moment the way opens. Leandro can't manage alone.[/i]

      @micah:small He reads it three times at the long table. Then he folds it up and puts it in his pocket and says, "Right. Yeah. Course," and gets up to go and pack, though there's nowhere to go till the third.

      "Micah," I say. "You're allowed to say no."

      @micah:surprised He stops.

      "Leandro can manage. You told me so yourself. And you've had one week off in your life, and it's this one, and it's not over." I nod at the letter in his pocket. "Write back. Say you'll be home when the way opens, like everyone else. Not before."

      @micah:small He stands there for a long time with his hand on his pocket. Then he sits back down at the long table, slowly, like a man lowering something heavy. "I've never said no to him," he says. "Not once."

      "I know."

      @micah:warm He writes the letter. It's four lines. It takes him an hour. When it's done, he gives it to the courier, and comes back and sits down next to me, and doesn't say anything, and his shoulder bumps mine and stays.
  *if (companion = "nolan") and (st_nolan >= 3)
    #Nolan rebuilds the lodging's broken music box with a pocketknife, and I hold the torch.
      *set b_nolan_work true
      *set st_nolan 4
      @nolan:attentive The landlady has a music box on the mantelpiece that hasn't played since her mother died, a wooden one with a brass comb and a cylinder, and at three o'clock Nolan asks, very politely, if he can have a look at it.

      So he takes it apart on the long table with his pocketknife, and I hold the good torch.

      @nolan:attentive It takes all afternoon. The couriers stop playing cards to watch. The cat sits on the table and is moved, repeatedly. Nolan talks to the music box the whole time, under his breath, the way he talks to a stage box. "There you are. There you are. Who bent you. Look at this. Look at this pin." And I hold the torch exactly where he needs it before he asks, the way I've held a hundred torches for him, since we were sixteen.

      @nolan:warm At half past six he puts the last screw in and winds it, and it plays: a tune none of us know, tinkling and slow and a little bit sad, and the landlady, at the stove, puts her ladle down and stands very still and listens to the whole thing with her hand over her mouth.

      @nolan:warm "We're good at this," Nolan says quietly, afterwards, under the noise of everyone clapping. "You and me. Aren't we." And it isn't a question.
  *if (companion = "reuben") and (st_reuben >= 3)
    #Reuben sleeps for eleven hours and lets me bring him breakfast.
      *set b_reuben_needs true
      *set st_reuben 4
      @reuben:tired Reuben sleeps for eleven hours.

      He goes up at nine the night before, saying he'll just lie down for a minute, and doesn't come down. When I go up at eight in the morning, he's asleep on top of the covers in his clothes, with one boot off, and he doesn't wake when I open the door.

      So I bring him breakfast. At noon, when he finally surfaces. Bread, and the landlady's butter, and eggs, and tea, on a tray, up the crooked stairs, and I put it on the chair by the bed and sit on the windowsill.

      @reuben:surprised He looks at the tray for a long time, bleary, with his hair flat on one side.

      @reuben:warm "Nobody's brought me breakfast since I was a kid," he says. And then, slowly, carefully, like a man picking up something he's been told he isn't allowed: "Thank you." And he eats it, all of it, sitting up in bed in the Marches with the snow falling past the window, and doesn't once apologise for needing it.
  *if (st_ansel >= 3) and not(b_ansel_confidence)
    #Ansel, by the stove, tells me the rest: the part about his father he didn't say in the Toll Gardens.
      *set b_ansel_confidence true
      *set st_ansel 4
      @ansel:small At four o'clock, when the light's going and the card game's loud, Ansel sits down next to me by the stove, very straight, and says, without looking at me: "In the gardens. I didn't tell you all of it."

      @ansel:sad And he tells me the rest. The first message he ever carried for his father, at twelve, sealed, to his mother, in the east wing of the same house. He read it on the stairs. He's never told anyone he read it. It was his father ending their marriage in everything but name, politely, in four lines, and asking her to keep up appearances for the Court. He carried it. He watched her read it. He said nothing. "I've carried everything since," he says, to the stove. "Because I'd already carried the worst one. What was the point in stopping."

      @ansel:guarded He's never told anyone that. Not his mother. Not Lucan. He waits to see what I'll make it into.

      I don't make it into anything. It's his. "Thank you for telling me," I say. That's all.

      @ansel:warm He looks at me for a long time, in the firelight. "You didn't fix it," he says, very quietly. "Everyone fixes it." And the cold water in the glass, the knack gives me, goes very still and very clear, all the way down, like something settling after a long time being stirred.
  #Everyone together, cards and cider. Nobody alone with anybody.
    *set people +1
    @lucan:laugh I don't go off with anyone. I sit at the long table with everyone, and learn the card game nobody explains, and lose badly, and drink the cider, and get insulted by couriers in three dialects, and laugh until I can't breathe when Lucan is caught cheating for the fourth time and simply says "Yes," with enormous dignity, and keeps his winnings.

    It's the best afternoon I've had in months. Nobody alone with anybody. Everyone together, in the warm, with the snow outside and nowhere to go.
*comment ---------------------------------------------------------------- CH14.QUIET.02
*sid CH14.QUIET.02
*date 2026-12-31 23:40
*place P58
*present ansel
New Year's Eve at the Candle Fair.

At half past eleven the whole town comes out. Everyone. Couriers and traders and grandmothers and children and the three judges from the hearing in their fur collars, down through the snow to the Toll Gardens, each of them carrying a lit candle in a little paper boat. And at midnight, Ansel told me this morning, everyone sets their boat on the pond, all at once, and the whole pond lights up, and you make a wish, and you don't tell anyone what it was.

The pond's been broken open at one end, the ice cracked back, so there's black water. The lanterns in the trees. Hundreds of people, quiet, holding candles, their faces lit from underneath.
*if companion != "none"
  {@companion = "adrian"|Adrian|}{@companion = "micah"|Micah|}{@companion = "nolan"|Nolan|}{@companion = "reuben"|Reuben|}'s somewhere in the crowd, with Lucan and the couriers. I lost them on the path.
@ansel:shy And Ansel finds me.

He comes through the crowd with his candle in its paper boat, very straight, in his dark coat, with snow on his collar. He doesn't have a folder. He doesn't have a message to deliver, or a lease, or a father's errand. He hasn't got a reason at all.

@ansel:shy "I came to find you," he says. "Before midnight." He looks at his candle. "No reason. I just wanted to be standing next to you when it happened."

*choice
  *if b_ansel_confidence and (hurt_ansel < 2)
    #Tell him I'm glad he came without a reason. Mean all of it.
      *set b_ansel_nopretext true
      *set st_ansel 5
      *set out_ansel true
      *achieve told_truth
      "I'm glad," I say. "That you came without a reason. I'm glad you came at all. I've been glad you came since the Riverside Steps."

      @ansel:surprised He looks at me. The candle in its boat, lighting his face from underneath.

      And I tell him the rest. All of it. In the Toll Gardens, with five minutes to midnight and three hundred people holding candles round a black pond.
      *if out_micah or out_dominic
        I've said it out loud once before, this winter, {@out_micah|on a frozen dam at dawn|on a roof above a cinema}. It doesn't get easier. It gets truer.
      *else
        I've never said it out loud. Not to Mum. Not to Nolan. Not to anyone.
      "I'm gay," I say. "And I'm glad you came, because I wanted you to. That's the reason. That's mine, anyway. You don't have to have one."

      @ansel:small The cold water in the glass. I can't feel what he thinks about me; I never can. But I feel it go very still, and very clear, all the way down to the bottom, and then something at the bottom that's been lying there a long time, heavy, like a stone, turns over, and rises, and rises.

      @ansel:warm "I have one," says Ansel Marr. Very quietly. "A reason. I've had it since the Riverside Steps as well." He looks at his candle. "I'm very bad at saying things that aren't messages."

      "You're doing all right."

      @ansel:warm At midnight, everyone sets their boats on the water, all at once, and the pond lights up gold from end to end, and the bells start, all the bells in Bracken Court, in their strange old scale. Ansel sets his boat down next to mine, so close the paper touches. And then, very carefully, formally, as though it's a thing with rules he's looked up, he takes my hand. His is cold through his glove. He doesn't let go. We don't tell anyone what we wished.
  #Set my candle next to his and say happy new year.
    *set people +1
    I don't say anything clever. I set my paper boat on the black water, and he sets his next to mine, and at midnight the whole pond lights up gold from end to end and the bells start, every bell in Bracken Court, the strange old scale.

    "Happy new year," I say.

    @ansel:warm "Happy new year, {name}," says Ansel, and bows, a small one, the way he did on the Riverside Steps. His candle and mine drift out together onto the water, side by side, until you can't tell which is which. We don't tell anyone what we wished.
*comment ---------------------------------------------------------------- CH14.NY.01
*sid CH14.NY.01
*date 2027-01-01 11:00
*place P55 bracken_court
*present ansel
*mood day
New Year's Day in Bracken Court, grey and quiet. The candles are still in the windows, burned down to stubs. The snow's gone to slush in the square. Everyone's asleep, or pretending to be.

The way home opens on the third.
*if ch14_way = "court"
  By the court's limited passage, back through the Iron Footbridge, with Harlan Greaves pretending not to see us.
*elseif ch14_way = "estate"
  By the Verres' old right of passage, which Lucan will invoke at the crossing office with a folder of ledgers under his arm and Oswin Deller's false name in his pocket.
*else
  By the Glass Road, the whole long day of it, to the Boundary Orchard and the orchard crossing that comes out in Malcolm Tait's kitchen.
But not yet. Tomorrow's the second. And tomorrow, we're going downriver.

@ansel:tense Ansel and I sit at the long table in the Travelers' House with the remains of breakfast and a map he's drawn on the back of the court notice, and look at it. Two hours down the local road, by the river. The docks.{@ch14_way = "court"| Warehouse seven, leased to Deller and Company, sublet to a Calder restoration concern.|}{@ch14_way = "estate"| A night-gate man, the steward's cousin, whose name is on a scrap of paper in my pocket.|}{@ch14_way = "boundary"| Where the threads run from. Two taut, and{@threads_three| a third, slack, waiting| something else I didn't look at long enough to see}.|}

Stillwater.

@ansel:guarded "Tomorrow," he says. "Early. Before anyone who reads a ledger is awake."

"Tomorrow."

He folds the map, and puts it in his coat, next to Eamon's letter.

*journal [b]Chapter 14.[/b] The crossing office shut the way home over the New Year: Oswin Deller claims the Iron Footbridge lease, and Severin Marr backs him. {@ch14_way = "court"|At the hearing, I spoke for common access{@ansel_spoke|, and so did Ansel, against his father|}; the lease registry showed Deller's company subletting warehouse seven at Stillwater Docks to "a Calder restoration concern".|}{@ch14_way = "estate"|At the Verre estate, Lucan's debts turned out to be owned by Deller, some under a false name; his steward's cousin works the night gate at Stillwater Docks.|}{@ch14_way = "boundary"|On the Glass Road, the reflections showed threads running from the docks downriver towards Calder{@threads_three|: two taut, and a third, waiting|}.|}{@out_ansel| At midnight at the pond, I told Ansel the truth, and he took my hand.|} Tomorrow: Stillwater.
*page_break
*goto_scene ch15
`);
