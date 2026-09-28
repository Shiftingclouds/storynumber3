NB.scene("ch21", String.raw`
*mood night
*set ch 21
*chapter 21 The Links Between Us
*comment ---------------------------------------------------------------- CH21.OPEN.01
*sid CH21.OPEN.01
*date 2027-03-13 22:00
*place P16 pump_nine
*set cap 0
Ten o'clock.

The towpath past the gasworks, in the dark, with the river so loud with meltwater that we have to put our heads together to talk. Pump Nine's chimney against the clouds. Its tall arched windows, dark. Its meter, running.

Three teams. One clock. Nolan hands out the radios and checks every one twice, and gives me mine last, and holds on to it a second longer than he needs to.

Somewhere across the city, three cars are pulling up outside a flat in Willow Court, a bakery in Eastbank and a student block at Bellweather Court, to collect three young men for an appointment at eleven. We let them go. We're behind them.

*choice
  *if role = "patient"
    #Pump Nine.
      *goto patient
  *if role = "donor"
    #The crossing, then Stillwater.
      *goto donor
  *if role = "coord"
    #The Iron Footbridge chamber.
      *goto coord

*comment ================================================================ patient site
*comment ---------------------------------------------------------------- CH21.PATIENT.01
*label patient
*sid CH21.PATIENT.01
*date 2027-03-13 22:40
*place P16 pump_nine
*present reuben chukwudi ellis quentin silas felix dominic
*if (ch19_answer = "negotiate") or (ch19_answer = "monitor")
  We go in by the side door, with Armand's keys.
*elseif e12_src = "gareth"
  We go in by the front gate, with Gareth's inspection order folded in my pocket in case anyone asks.
*elseif e12_src = "film"
  We go in by the culvert door in the riverbank, on Pavel's old map, up a tunnel nobody's used since the sixties.
*else
  We go in through the service hatch in the cable trench, whose padlock Micah opened for us this afternoon in about four seconds.

The machinery hall is enormous. Iron columns, painted green once, going up into the dark. Two great pumping engines, silent for twenty years, the size of houses, with their flywheels taller than me. The floor's wet. Everything drips. And in the middle of it, under a ring of work lights on stands, somebody's built a clinic: three couches, three drip stands, and a frame. Not ours. Damian's. Brass and wire and ward-thread, humming. The apparatus for the morning.

@quentin:guarded The patients are already here. They came in Damian's cars, because we let them, and the drivers left them here to wait for the doctor, and went. Quentin's on the first couch with his arms folded, in his big coat. He's got a face on him like a locked door, and when he sees me come in behind Reuben, he unlocks it, just for a second.

@silas:tense Silas is sitting very upright on the second couch, with his hands in his lap and a paper bag from the bakery beside him, because he wasn't sure if there'd be anything to eat.

@felix:tense Felix is filming. Of course he is. He lowers the phone when he sees us and says, "Oh, thank God. I was starting to think this [i]was[/i] the follow-up."

*if (plan_chosen = "full") or (plan_chosen = "interim")
  Our people come in behind us, quietly, carrying things. Our frame, under its dust sheet. The anchors in their crate.{@mat_thread| The thread on its spindles.|} And the volunteers, {volunteers} of them, in coats and scarves, pale and determined, who sit down on a bench along the wall and try not to look at the engines.{@vol_home| Martin's with them, in his good coat, with a flask.|}{@vol_mercy| Emmett Hsu, very straight.|}{@vol_otis| Otis sits down next to Silas without asking and puts a hand on the back of his neck.|}
*elseif plan_chosen = "pair"
  Our people come in behind us, quietly, carrying things: our frame, under its dust sheet, and Malcolm's steps written out on a card, and the volunteer for the single pair, who sits on a bench along the wall with his coat buttoned up to the chin.{@vol_otis| Otis sits down next to Silas without asking and puts a hand on the back of his neck.|}
*else
  Our people come in behind us, quietly: blankets, Reuben's bag, the people who'll sit with them. And our frame, under its dust sheet, because Chukwudi wouldn't leave it behind. "In case," he said, and didn't say in case of what.{@vol_otis| Otis sits down next to Silas without asking and puts a hand on the back of his neck.|}

@reuben:attentive Reuben goes to the drips. Chukwudi and Ellis set up the anchors, and the frame, and Chukwudi keeps up a low running commentary to himself in Igbo that Ellis says is mostly swearing.

@dominic:hungry Dominic takes the doors, because it's dark, and because he can see in it, and because he moves faster than anyone. He stands by the big double doors at the end of the hall with his collar up and his hands in his pockets, watching the dark as if it's a room he knows, and not looking at the drips. His mouth is pressed shut. I can feel what it costs him, a tight, careful line held all the way down, and he doesn't let it show anywhere but there.

And the ropes, to my eye, run out through the walls. Three of them, stretched thin as fishing line, out of three young men on three couches, through the brick, towards the river, towards the crossing, towards three beds in a warehouse in another country.
*snapshot role-pump

Somebody has to watch them.

*choice
  *if knack_monitor
    #Take my place at the frame and watch the links. Say when they slip.
      *set monitor "knack"
      I take my place at the frame, where Chukwudi's chalked a cross on the floor. Malcolm's words in my head: [i]hold the thread without being pulled along it.[/i]

      I watch the links. All three. The knack wide open, the way it was in Malcolm's orchard, between the apple trees. It's like standing in a river and not being carried away by it.

      @reuben:warm "Say when," says Reuben, beside me, with his hand on the gauge anyway, just in case. "Just say when."
  #Let Ilyas's gauge watch. I'll carry, and fetch, and hold.
    *set monitor "gauge"
    Ilyas's gauge watches. It's on a stand beside the frame, a thing like a barometer with a needle, borrowed from the lab and wired up by Chukwudi to the anchors. Slower than the knack. More certain. Something on paper.

    I carry, and fetch, and hold. Blankets. Tea. Silas's hand, when he asks for it, which he does very politely.

    @reuben:attentive "I've got the needle," says Reuben. "You've got the people. That's the right way round."
*comment ---------------------------------------------------------------- CH21.PATIENT.02
*sid CH21.PATIENT.02
*date 2027-03-14 00:10
*place P16 pump_nine
*present reuben damian quentin silas felix chukwudi ellis dominic
*if (ch19_answer = "refuse") and not(armand_broken)
  He's early. Of course he is. Somebody told him. The patients have barely been here an hour, and the anchors aren't finished, when the door to the inspection passage opens at the far end of the hall.
*else
  Ten past twelve. The door to the inspection passage opens at the far end of the hall.
*meet damian
@damian:neutral And Damian Holt walks in.

He's exactly as ordinary as I knew he'd be. Late thirties. A pleasant, attentive face. Dark hair greying early, clean-shaven, a good plain coat, the kind you'd buy to last. He could be a GP. He could be anyone's favourite teacher. There's nothing about him, nothing at all, that says what he is.

@damian:attentive "Well," he says, looking round the hall: at the frame, the anchors, the volunteers on the bench, Reuben at the drips. The calm voice. The voice from the lane. "This is a great deal more than I was expecting. How interesting." His eyes find me. "And you'll be the sensitive. I've so wanted to meet you."

The knack gives me nothing. That's the worst of it. Not coldness, not malice. Interest. Pleasant, attentive, genuine interest, like a man at a museum.

@damian:amused He explains. He doesn't need to; nobody's asked him. He explains anyway, coherently, reasonably, as if to a promising student: what the frame does, what the anchors are for, why the anniversary matters, why the limit in the old report was really a limit of the old program's ambition. He speaks for three minutes. He never once calls the donors by their names.

@reuben:hurt "Damian," says Reuben. He says it like it hurts, like a splinter coming out.

@damian:warm "Reuben," says Damian, and smiles, and it's a real smile, which is the most frightening thing I've seen all winter. "I wondered when you'd find me. You always were my best."

*choice
  *if ally_mercy or told_gareth
    #Keep him talking until {@ally_mercy|the wardens|Gareth} are through the doors.
      *set damian_fate "arrested"
      So I keep him talking.

      I ask him questions. Good ones, the kind he likes: about the frame, about the anchors, about the limit. He answers every one, pleased, like a man who's waited a long time for someone clever enough to ask. I watch his face and don't look at the doors. I can feel them coming, down the towpath, through the gate: {@ally_mercy|a dozen wardens, and at the front, grey and heavy and still, Commander Orrell|Gareth Moss with his notebook, and four uniformed officers who don't know what they're looking at and don't need to}.

      @damian:attentive He's in the middle of a sentence about thresholds when the double doors open behind Dominic.

      @damian:guarded He stops. He looks at me, and for the first time, there's something in the knack: not fear. Disappointment. As if I've let him down.

      "I'm sorry," I say. "I'm not a student."

      *if ally_mercy
        *present reuben damian quentin silas felix chukwudi ellis dominic orrell
        @orrell:neutral "Damian Holt," says Orrell, from the doorway. "You'll come with us."
      *else
        *present reuben damian quentin silas felix chukwudi ellis dominic gareth
        @gareth:attentive "Damian Holt?" says Gareth, from the doorway, with his notebook out. "I've got some questions about the electricity."

      @damian:neutral And he goes. Quietly, reasonably, with his hands where they can see them, like a man who's sure he'll be out by Tuesday.
  *if st_reuben >= 3
    #Let Reuben talk to him. Stand where Damian can see I'm not afraid.
      *set damian_fate "custody"
      *set reuben_faced true
      I step back. I let Reuben have him. And I stand where Damian can see me, by the frame, with my hands at my sides, not afraid. Or not showing it, which tonight is the same thing.

      @reuben:angry Reuben talks to him. Not shouting. Reuben never shouts. He talks to him the way he'd talk to a patient who's lying about how much they drink: steadily, kindly, without letting go of anything. He tells him what he taught him, and what he did with it. He says Eamon's name, and Hugo's, and Clive's. He says them three times each, until Damian has to hear them.

      @damian:guarded And Damian listens. He doesn't argue. He looks, for a moment, almost sorry: not for any of it, but for Reuben, for having disappointed him.

      @reuben:tired "You're going to sit down on that bench," says Reuben, at the end, "and wait. And I'm going to stand here, and watch you. And you're not going to touch anything, ever again."

      And Damian Holt sits down on the bench, and waits, with his good coat folded on his knees, and Reuben watches him, and doesn't blink.
  #Go for the apparatus before he can reach it.
    *set damian_fate "fled"
    *set nerve +3
    I go for the apparatus.

    Before I've decided to. Across the wet floor, past the engines, straight at Damian's brass frame with its ward-thread humming, and I get my hands on the thread and pull. It burns. God, it burns. It comes away in my hands like hot wire, and the frame goes dark, and whatever he was going to do at dawn, he can't do it with that.

    @damian:guarded When I look up, he's looking at me, from the passage door. Not angry. Interested. Still interested. Then he steps back into the dark of the inspection passage, and the door swings shut, and he's gone.

    @dominic:angry Dominic's across the hall in a blur, but the passage is empty. It goes under the towpath, and splits, and splits again. He'll be found. Not tonight.
*goto turn

*comment ================================================================ donor site
*comment ---------------------------------------------------------------- CH21.DONOR.01
*label donor
*sid CH21.DONOR.01
*date 2027-03-13 22:30
*place P15 iron_footbridge
*present ansel harlan adrian micah
The Iron Footbridge, in the dark, with the river roaring under it. The little iron door in the middle pier. The brick room, the pipes, the kettle, the ledger.

@ansel:tense Ansel's already there, in his dark coat, with a coil of rope over his shoulder and his collar done up to the chin. Adrian beside him, checking his torch for the third time. Micah, filling the doorway.

@harlan:tense And Harlan Greaves, at his desk, with the ledger open and the key ring in his hand.
*if ally_keepers
  @harlan:neutral He writes our names. All four, in his round careful hand, and then, underneath, in capitals: [i]RESCUE. AUTHORISED BY THE KEEPER.[/i] He looks at me. "It's going in the ledger," he says. "All of it. Every line, from now on."
*else
  @harlan:guarded He doesn't write anything. He doesn't look at me. He jangles the keys, and says the door's ready whenever we are, in a voice with nothing in it at all. I don't trust his count. I don't trust anything he'd tell someone else about us, after.

*choice
  *if ally_keepers
    #Through, on Harlan's count.
      Through, on Harlan's count.

      @harlan:attentive "Three," he says, with his hand on the green door. "Two. One." And opens it, and the different wind comes through, and we go.

      The Marches at night. The same river, wider, quieter, running east under stars that are almost, but not quite, the right ones. The Glass Road, frozen and then thawing, glittering under our boots. We walk fast. Micah first, then Ansel, then me, then Adrian at the back with his torch hooded. Nobody talks.
  *if not(ally_keepers)
    #Through Northwood instead: longer, colder, unwatched.
      *set nerve +2
      "Northwood," I say. "Not here."

      @ansel:tense Ansel looks at me, and at Harlan, and understands. "Northwood," he says. "Yes."

      @harlan:angry Harlan says nothing at all as we go.

      It takes an hour longer. The last bus out to the old spur, empty but for us. The walk up the dead railway line in the dark, through the trees, to the place where the air goes thin and strange between two birches, and Ansel takes my hand and Adrian's and says [i]now[/i]. It's colder than the footbridge. It's rougher. It isn't watched.
*comment ---------------------------------------------------------------- CH21.DONOR.02
*sid CH21.DONOR.02
*date 2027-03-14 00:30
*place P56 stillwater_docks
*present ansel adrian micah eamon hugo clive
Stillwater, half past midnight.

The docks in the dark, the cranes, the black water. Warehouse seven, with its three bright locks. And at its water door, a covered boat, long and low, nosing at the jetty, ready to take them east, down the river, to whatever way across the ring keeps for itself.

Through the high window, from the boat shed roof: the three beds, being readied for moving. Eamon, Hugo and Clive, grey and sedated, strapped for transport. Four men, and a boat.
*snapshot role-docks

And the release has to happen on the relay's signal. Not before. Cut a link out of time and a man dies at the other end.

*choice
  *if inside_man
    #Our man inside opens the water door on the shift change.
      The gate man. The one who should have asked, in August, and asked in January instead.

      At one minute past one, on the shift change, when the day men come on and the night men go off and for eight minutes nobody's watching anything but their own coffee, the water door opens from inside. Just a crack. Just enough.

      He doesn't look at us. He goes to the boat and starts complaining, loudly, about the mooring, and every man in the building goes to see what he's complaining about. We go in behind them.
  *if still_layout
    #In through the window I memorised in January.
      *set craft +2
      In through the window I memorised in January.

      Up the drainpipe to the boat shed roof. Across the tar. The high window on the river side, over the old loading bay, single-glazed, the catch rusted open, exactly as I remember it. It gives. I go through first, feet first, and drop onto a stack of pallets I knew would be there, and nobody hears.

      I unbolt the water door from the inside. The others come in.
  #Straight through the gate with Micah and Adrian.
    *set hurt_mc +1
    Straight through the gate. There isn't time for anything else.

    @micah:angry Micah goes through the gate like it's made of cardboard, which, for Micah, it is. Adrian's behind him, fast and precise. There's shouting. A man comes at me out of the dark with something heavy, and I don't get out of the way quickly enough, and something in my ribs goes with a noise like a stick breaking.

    I get up anyway. We're in.

@ansel:hurt Eamon's bed is the first one. Ansel's at the side of it before anyone can stop him, with his hand on the rail, not touching Eamon, not quite. "Eamon," he says. "It's Ansel. You're going home."

@eamon:small And in the bed, Eamon Kerr's eyes open, just a crack, the way they did in January. His fingers move on the blanket.

@adrian:tense "Don't cut anything," says Adrian, to everyone, very low. "Not yet. Not until the signal."

I stand between the three beds with the knack wide open, and feel the ropes run out of them, west, through the roof, towards Calder, towards Pump Nine, taut and thin and humming. And I wait for the signal.
*goto turn

*comment ================================================================ the crossing
*comment ---------------------------------------------------------------- CH21.COORD.01
*label coord
*sid CH21.COORD.01
*date 2027-03-13 22:15
*place P15 iron_footbridge
*present nolan harlan
The crossing chamber under the Iron Footbridge.

Nolan's turned it into a control room. Relays taped to the brickwork in a row, each with a strip of gaffer tape under it and a word in marker: [i]PUMP NINE. STILLWATER. RUNNER. SPARE.[/i] A laptop on Harlan's desk, pushed in between the ledger and the kettle. And through the green door, which stands open a hand's width with a doorstop wedged under it, a rope: a runner's rope, knotted every yard, going through the threshold into the dark, because phones don't cross, and radios don't either, and somebody has to carry the words over by hand.

@harlan:tense Harlan at the door, with the key ring, watching the rope.

@nolan:tense And Nolan, on a stool, with headphones round his neck and the jack plug going over and over in his fingers.

Two worlds, one clock. And I'm the clock.
*snapshot role-crossing

*choice
  *if st_nolan >= 3
    #Run it with Nolan: his relays, my timing, no wasted words.
      We run it together, the way we've run a hundred shows: Nolan on the desk, me on the floor, no wasted words. He hands me the headphones. I hand him the timings. We don't need to say which is which.

      @nolan:amused "Just like the Last Set," he says. "Except if we get the cues wrong, people die."

      "So, like the Last Set."

      @nolan:laugh He laughs, once, too loud, in the brick room, and Harlan jumps.
  #Run it by the book: a written sequence, read aloud, checked twice.
    *set people +2
    We run it by the book. Adrian wrote it; Reuben checked it; Florian made everyone say which parts were known and which were hoped. A written sequence, every line numbered. I read each one aloud before we do it, and Nolan reads it back, and Harlan initials the ledger.

    @nolan:neutral "Line nine," says Nolan. "Confirm the donor team is through."

    "Line nine. Confirmed."
*comment ---------------------------------------------------------------- CH21.COORD.02
*sid CH21.COORD.02
*date 2027-03-14 00:20
*place P15 iron_footbridge
*present nolan harlan
Midnight.

The relays crackle with both sites at once. Pump Nine: Reuben's voice, very calm, and then another voice, a pleasant one, that I've heard twice before in my life, once in a lane in August and once through a door at Winton Court, saying something about how interesting it all is. Damian's in the room with them.

And the runner's rope jerks through the green door, three times, and Nolan pulls it in hand over hand, and there's a note knotted to the end in Ansel's handwriting: [i]At the water door. Boat is here. Waiting for you.[/i]

@nolan:scared Nolan looks at me. He's very white.

Whatever goes wrong tonight, I'll hear it first. And I'll have to say what we do about it.
*goto turn

*comment ================================================================ the turn
*comment ---------------------------------------------------------------- CH21.TURN.01
*label turn
*sid CH21.TURN.01
*date 2027-03-14 01:00
*set cap_full false
*set cap_interim false
*set cap_pair false
One o'clock. The moment the plan meets the night.
*if (enemy_aware >= 3) and not(ally_keepers)
  And the night's been waiting for us.

  They were watching the crossing. Of course they were: they know my face; they've known it since {@owe_august|I walked into Rell & Company and asked August for a favour|the winter started}. The donor team's been held up: a man on the Glass Road who wasn't a traveller, a detour, a wait in a ditch in the dark while he went past. {@role = "donor"|I lay in that ditch with Micah's hand on my back and counted.|The runner's rope went slack for forty minutes, and nobody at this end breathed.} They're forty minutes behind, and the guards at Stillwater are awake.

  {@plan_chosen = "full"|The distributed bridge needs every link to move at once, to the second. The timing's gone. The full bridge can't be done tonight. Not safely.|Whatever we do now, we do it forty minutes late.}
*if (ch19_answer = "refuse") and not(armand_broken)
  And Damian was warned. He came early, and he came prepared. {@role = "patient"|While we were watching him, one of his men was at the anchors.|The word comes over the relay, very flat: somebody got to the anchors before we did.} Two of the stones are cracked. The frame's bent where somebody put a crowbar through it.

  Whatever we run now, we run with less.
*if not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = "refuse") and not(armand_broken))
  And for once, the night gives us what we asked for. The donor team's at the beds. The patients are on their couches. The anchors are set. Nobody's watched us; nobody's warned him. Everything we built in February is here, and working.

Now the only question left is the one I've been not asking all winter. What we actually do, with what we have.
*if plan_chosen = "extract"
  We decided at the Okafors'. Extraction. The three of them decided it too, at a diner table, in February. It's still my voice that has to say it.
*if plan_chosen = "pair"
  We decided at the Okafors'. The single pair. We can carry one of them across. Only one. Nobody's said which. It has to be said now.
*if role = "patient"
  The radio's warm in my hand. At the other end of it, Nolan, and the runner's rope, and another world.
*elseif role = "donor"
  The radio's warm in my hand. At the other end of it, the runner at the green door, and the rope, and Nolan, and Calder.
*else
  Nolan's hand is on the runner's rope. Both relays are open. Everyone is waiting for me.

*choice
  *if (plan_chosen = "full") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = "refuse") and not(armand_broken)) and ally_mercy
    #The distributed bridge holds. Hand the evidence and the method to Mercy House, under oversight, and make them answer for it.
      *set ending "A"
      *set cap_full true
      "Now," I say.

      And the distributed bridge moves.
      *if role = "patient"
        I feel it happen. The three ropes, stretched thin out of three young men on three couches, and then, as Chukwudi moves the frame, the load going out of them, one, two, three, six, into {volunteers} people on a bench along the wall, like water finding its level. Thin, and thinner, and so thin on each of them it's barely there.

        *if monitor = "knack"
          "Holding," I say. "It's holding. Six. It's holding."
        *else
          @reuben:attentive "Holding," says Reuben, watching the needle. "It's holding."
      *elseif role = "donor"
        I feel it happen from the other end. The three ropes running out of Eamon and Hugo and Clive, taut as cables, and then, all at once, slack. Nothing pulling. The weight gone somewhere else, spread thin across a city. Ansel cuts the first strap. Micah lifts Eamon like shopping.
      *else
        I hear it happen. Reuben on the relay, very calm, counting. The rope from the Marches jerking three times: [i]donors free[/i]. And the knack, at three miles, giving me something I've never felt from so far away: six people, alive, at once.

      All six. Quentin, Silas, Felix, on their couches, grey and tired and themselves. Eamon, Hugo, Clive, carried out of warehouse seven into a boat that's ours now. All six, alive.

      And afterwards, at four in the morning, with the evidence in three boxes on the floor of Pump Nine, I make the other choice. It goes to Mercy House: the method, the evidence, Damian's reports, the old program's divided record, all of it. Under oversight. {@orrell_deal|Orrell made a deal with me in February; now he keeps it.|Orrell will have to answer for what his house did seven years ago.} Mercy House is going to answer for this in front of everyone, and so is everyone else.
      *achieve all_home
  *if (plan_chosen = "full") and not((enemy_aware >= 3) and not(ally_keepers)) and not((ch19_answer = "refuse") and not(armand_broken)) and ally_eastbank and ally_regent
    #The distributed bridge holds. Keep the evidence with the coalition and Gareth; the communities build their own recovery and accountability.
      *set ending "B"
      *set cap_full true
      "Now," I say.

      And the distributed bridge moves.
      *if role = "patient"
        I feel it happen. The three ropes, stretched thin out of three young men on three couches, and then, as Chukwudi moves the frame, the load going out of them, one, two, three, six, into {volunteers} people on a bench along the wall, like water finding its level.

        *if monitor = "knack"
          "Holding," I say. "It's holding. Six. It's holding."
        *else
          @reuben:attentive "Holding," says Reuben, watching the needle. "It's holding."
      *elseif role = "donor"
        I feel it happen from the other end. The three ropes running out of Eamon and Hugo and Clive, taut as cables, and then, all at once, slack. The weight gone somewhere else, spread thin across a city, across neighbours. Ansel cuts the first strap. Micah lifts Eamon like shopping.
      *else
        I hear it happen. Reuben on the relay, counting. The rope from the Marches jerking three times: [i]donors free[/i]. And the knack, at three miles, giving me six people, alive, at once.

      All six. Carried by neighbours: Eastbank's volunteers and the Regent's night people and the restorers and a print shop, each carrying a little.

      And afterwards, at four in the morning, I make the other choice. The evidence doesn't go to any institution. It goes to Gareth, and to the coalition, in three copies, in three safes, where no single house can lose it or bury it or bargain with it. The communities that carried tonight will build what comes next themselves, and hold everyone to account, including us.
      *achieve all_home
  *if ((plan_chosen = "full") or (plan_chosen = "interim")) and plan_interim and (volunteers >= 3) and not(((ch19_answer = "negotiate") or (ch19_answer = "monitor")))
    #The interim bridge: one volunteer to each patient, a long recovery, and every one of them alive.
      *set ending "C"
      *set cap_interim true
      {@plan_chosen = "full"|We can't run the full bridge. So we run the one we can.|The interim bridge. The heavy one.} One volunteer to each patient, taking over from each donor. Heavy for them. Slow for everyone.

      "Now," I say.
      *if role = "patient"
        I watch it happen: three ropes, each moving off a donor in another country and onto a volunteer on a bench, one by one. It's like watching three people each pick up a piano.

        *if monitor = "knack"
          "Holding," I say, three times. My voice doesn't shake. I don't know how.
        *else
          @reuben:attentive "Holding," says Reuben, three times, watching the needle.

        The volunteers go grey, one by one, and slump against the wall, and are caught.
      *elseif role = "donor"
        I feel the ropes go slack in Eamon, and Hugo, and Clive, one at a time, as someone three miles away takes the weight off them. Ansel cuts the straps. Micah and Adrian carry them out.
      *else
        I hear it happen: Reuben on the relay, three times, [i]holding[/i]. The rope from the Marches: [i]donors free[/i].

      Everyone's alive. Everyone. Nobody is well. The volunteers will carry them for weeks, sleeping twelve hours a day, while Reuben weans the links down a notch at a time. It'll be long, and expensive, and exhausting. And nobody's name is going on anyone's foundation.
      *achieve all_home
  *if ((plan_chosen = "full") or (plan_chosen = "interim")) and plan_interim and (volunteers >= 3) and ((ch19_answer = "negotiate") or (ch19_answer = "monitor"))
    #The interim bridge, and Armand's terms: everyone lives, and a compromise I'll carry for years.
      *set ending "D"
      *set cap_interim true
      {@plan_chosen = "full"|We can't run the full bridge. So we run the one we can.|The interim bridge. The heavy one.} One volunteer to each patient, taking over from each donor. And Armand's terms, which I agreed to in his library: his money for the recovery, and his name kept out of it.

      "Now," I say.
      *if role = "patient"
        I watch it happen: three ropes, each moving off a donor in another country and onto a volunteer on a bench, one by one, like three people each picking up a piano.

        *if monitor = "knack"
          "Holding," I say, three times.
        *else
          @reuben:attentive "Holding," says Reuben, three times, watching the needle.

        The volunteers go grey, and are caught.
      *elseif role = "donor"
        I feel the ropes go slack in Eamon, and Hugo, and Clive, one at a time. Ansel cuts the straps. Micah and Adrian carry them out.
      *else
        I hear it happen: Reuben on the relay, three times, [i]holding[/i]. The rope from the Marches: [i]donors free[/i].

      Everyone lives. There'll be a private clinic, paid for quietly, with good doctors who ask no questions. Every man freed, every patient alive. And a limit on how far this goes, that I agreed to, in writing, by a fire. I'll carry that.
      *achieve all_home
  *if plan_pair and alive_quentin
    #One bridge. Quentin.
      *set ending "F_Q"
      *set cap_pair true
      "Quentin," I say.

      It isn't fair. There isn't a fair one. I say it anyway, because it has to be said, and because it's my voice that has to say it.
      *if role = "patient"
        @silas:sad Silas, on the second couch, nods before anyone else can say anything. He's known since February. {@vol_otis|He holds out his hand, and Otis takes it.|He holds out his hand, very politely, and I take it.}

        @felix:sad Felix puts his phone down, face up, still recording, on the floor beside the couch.
      *else
        Over the relay, a long silence. Then one word, passed hand to hand across two worlds: [i]Understood.[/i]
      One bridge: the single pair, the way Malcolm taught me, nine times at his kitchen table. Quentin's rope moves off Eamon and onto {@plan_chosen = "extract"|Reuben, who's the biggest, and a medic, and won't hear otherwise|a volunteer}, fast. And at Stillwater, all three donors are freed at once, on the signal: Eamon, Hugo and Clive, their ropes cut, their weight their own again.

      And on the second couch and the third, Silas and Felix, with nothing on the other end of their ropes any more, go quiet. It doesn't take long. The rules always said it wouldn't. {@role = "patient"|I hold Silas's hand until it's over, or Otis does. Ellis holds Felix's.|I don't need the relay to tell me. I feel it go, at the far end of two ropes, like two lights going out in a house across the river.}

      Quentin lives. Silas and Felix die. Eamon, Hugo and Clive are free.
  *if plan_pair
    #One bridge. Silas.
      *set ending "F_S"
      *set cap_pair true
      "Silas," I say.

      It isn't fair. There isn't a fair one. I say it anyway.
      *if role = "patient"
        @quentin:sad Quentin nods before anyone else can say anything. "Good," he says. "Good. Free Eamon first. I said." He puts his hands in his armpits, for warmth, one last time.

        @felix:sad Felix puts his phone down, face up, still recording, on the floor beside the couch.
      *else
        Over the relay, a long silence. Then one word, passed hand to hand across two worlds: [i]Understood.[/i]
      *if vol_otis
        One bridge: the single pair, the way Malcolm taught me. Silas's rope moves off Hugo and onto Otis, who doesn't let anyone else take it. And at Stillwater, all three donors are freed at once, on the signal.
      *else
        One bridge: the single pair, the way Malcolm taught me. Silas's rope moves off Hugo and onto {@plan_chosen = "extract"|Reuben, who's the biggest, and a medic, and won't hear otherwise|a volunteer}, fast. And at Stillwater, all three donors are freed at once, on the signal.

      And on the first couch and the third, Quentin and Felix, with nothing on the other end of their ropes, go quiet. It doesn't take long. {@role = "patient"|I hold Quentin's hand until it's over. Ellis holds Felix's.|I don't need the relay to tell me. I feel it go, at the far end of two ropes, like two lights going out in a house across the river.}

      Silas lives. Quentin and Felix die. Eamon, Hugo and Clive are free.
  *if plan_pair
    #One bridge. Felix.
      *set ending "F_F"
      *set cap_pair true
      "Felix," I say.

      It isn't fair. There isn't a fair one. I say it anyway.
      *if role = "patient"
        @quentin:sad Quentin nods. "Good," he says. "He's got a film to finish." He puts his hands in his armpits, for warmth, one last time.

        @silas:sad {@vol_otis|Silas holds out his hand, and Otis takes it.|Silas holds out his hand, very politely, and I take it.}
      *else
        Over the relay, a long silence. Then one word, passed hand to hand across two worlds: [i]Understood.[/i]
      One bridge: the single pair. Felix's rope moves off Clive and onto {@plan_chosen = "extract"|Reuben, who's the biggest, and a medic, and won't hear otherwise|a volunteer}, fast. And at Stillwater, all three donors are freed at once, on the signal.

      And on the first couch and the second, Quentin and Silas, with nothing on the other end of their ropes, go quiet. It doesn't take long. {@role = "patient"|I hold Quentin's hand until it's over, and Silas's is held too.|I don't need the relay to tell me. I feel it go, at the far end of two ropes, like two lights going out in a house across the river.}

      Felix lives. Quentin and Silas die. Eamon, Hugo and Clive are free.
  #Free the donors. End the links. Let the cost be what it is.
    *set ending "E"
    Free the donors. End the links. Let the cost be what it is.

    They decided it themselves, at a diner table in February: nobody would be kept in a bed for them. {@q_free_first|Quentin said it in so many words. [i]Free Eamon first. Even if it's me that pays.[/i]|}{@not(plan_chosen = "extract")| We planned for more. The night took it. This is what's left, and it's still theirs to have chosen.|}

    "Now," I say.
    *if role = "patient"
      @quentin:neutral Quentin, on the first couch, looks at me, with that direct gaze, and nods once, like a man who's decided something and is getting on with it.

      @silas:small Silas holds out his hand, very politely, and {@vol_otis|Otis takes it|I take it}.

      @felix:tense Felix sets his phone on the floor beside the couch, still recording. "For the record," he says. "So there is one."
    *elseif role = "donor"
      Ansel cuts the first strap. And I feel the ropes go, one, two, three, snapping loose out of Eamon and Hugo and Clive, and I know what's happening at the other ends of them, three miles and a world away, and I make myself feel it, all of it, because somebody should.
    *else
      Nolan yanks the runner's rope three times. And then we sit in the brick room under the footbridge and listen to the relays, and I make myself feel it, three miles away, because somebody should.
    At Stillwater, Eamon and Hugo and Clive wake, weak and alive and themselves.

    At Pump Nine, Quentin and Silas and Felix die, when their support ends, as the rules always said they would. It doesn't take long. It's quiet. Some of them chose it. That doesn't make it smaller.
*comment ---------------------------------------------------------------- CH21.DAWN.01
*sid CH21.DAWN.01
*date 2027-03-14 05:40
*place P06 riverside_steps_dawn
*mood dusk
Dawn on the fourteenth of March.

Ten years to the day since a boy of twenty fell at Quarry Lake and lay three days on a ledge before anyone found him. And nothing is attempted in his name. Nothing at all. The sun comes up over the far bank the way it does on any Sunday, grey and then gold, on a river high and brown and fast with the last of the winter.
*if (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D")
  Everyone's alive. Six men. I say their names to the river, under my breath, in order, twice: Quentin, Silas, Felix. Eamon, Hugo, Clive. Everyone's alive.
*elseif ending = "E"
  Eamon, Hugo and Clive are alive. Quentin, Silas and Felix are not. I say all six names to the river, under my breath, in order. I'll say them for the rest of my life.
*elseif ending = "F_Q"
  Quentin's alive. Eamon, Hugo and Clive are alive. Silas and Felix are not. I say all six names to the river, in order, twice.
*elseif ending = "F_S"
  Silas is alive. Eamon, Hugo and Clive are alive. Quentin and Felix are not. I say all six names to the river, in order, twice.
*else
  Felix is alive. Eamon, Hugo and Clive are alive. Quentin and Silas are not. I say all six names to the river, in order, twice.

I sit on the Riverside Steps, at the flood mark, and I can't feel my hands.

*journal [b]Chapter 21.[/b] The night of the thirteenth of March. {@role = "patient"|I was at Pump Nine, with the patients, and Damian Holt walked in and called me the sensitive.|}{@role = "donor"|I was at Stillwater, at the beds, waiting for the signal.|}{@role = "coord"|I kept the clock, in the crossing chamber under the Iron Footbridge, with Nolan.|}{@(enemy_aware >= 3) and not(ally_keepers)| The crossing was watched, and the donor team lost forty minutes.|}{@(ch19_answer = "refuse") and not(armand_broken)| Damian was warned, and came early, and damaged the anchors.|} {@(ending = "A") or (ending = "B")|The distributed bridge held. All six men are alive.|}{@(ending = "C") or (ending = "D")|We ran the interim bridge. All six men are alive, and nobody is well.|}{@ending = "E"|We freed the donors and ended the links. Eamon, Hugo and Clive are alive. Quentin, Silas and Felix are dead.|}{@ending = "F_Q"|One bridge: Quentin lives. Silas and Felix are dead. The donors are free.|}{@ending = "F_S"|One bridge: Silas lives. Quentin and Felix are dead. The donors are free.|}{@ending = "F_F"|One bridge: Felix lives. Quentin and Silas are dead. The donors are free.|} Nothing was attempted in Octavian Sorrell's name.
*page_break
*goto_scene ch22
`);
