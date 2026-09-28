NB.scene("ch20", String.raw`
*mood thaw
*set ch 20
*chapter 20 Where I Stand
*comment ---------------------------------------------------------------- CH20.BRIEF.01
*sid CH20.BRIEF.01
*date 2027-03-13 14:00
*place P20 okafor_restoration
*present chukwudi ellis reuben adrian ansel nolan micah
*mood day
Saturday the thirteenth of March. Two o'clock.

{@coalition_seat = "mercy"|We've met at Mercy House's long steel table all month, and it's held us to account the way I hoped it would. But the last briefing's at the Okafors', because this is where the materials are, and because nobody wants to carry a brass frame across the city twice in one day.|We've met here all month, at the big bench, under all the lamps, and the workroom's started to look like a campaign office: maps on the walls, lists on the maps, tea rings on the lists.} The frame's on the bench under a dust sheet.{@mat_stones| Percival's stones are in a crate by the stove, humming.|}{@mat_thread| The thread's on its spindles, glowing faintly in the shadow of the cabinet.|}

Everyone's here. Chukwudi at the head of the bench, in his apron. Ellis beside him with the chalk. Reuben, with the medical plan in a ring binder. Adrian, with a notebook squared to the table edge. Ansel, very straight, in his formal collar. Micah, taking up two chairs' worth of space and trying not to.
*if nolan_knows
  And Nolan, on a stool at the end, with a crate of radios at his feet and a roll of gaffer tape on his wrist like a bracelet.
*else
  And Nolan, on a stool at the end, with a crate of radios at his feet and a roll of gaffer tape on his wrist like a bracelet. I told him three weeks ago, on the mattress in his room at Laird's, among the cables: all of it, the other world, the crossing, the three men in the beds. Because we needed someone who could make radios talk through a wall between two worlds, and because he'd have found out anyway, and because I was sick of lying to my best friend.

  @nolan:small He took it better than I did. He listened to all of it, turning a jack plug over and over in his fingers. Then he said, "Right. Okay. So the problem is the wall," and started drawing.
*set nolan_knows true

@ellis:attentive Ellis writes it on the board in his careful capitals, in the order it's going to happen.

[i]22:00.[/i] The cars come for Quentin, Silas and Felix, for an appointment at eleven. We let them go. We're behind them.

[i]22:30.[/i] The donor team goes through the crossing to Stillwater, before the donors are moved.

[i]Midnight.[/i] Pump Nine. The patients in the machinery hall, and Damian's apparatus, and us.

[i]The signal.[/i] Whatever we do at Pump Nine and whatever we do at Stillwater has to happen at the same moment. Not before. Cut a link out of time and a man dies at the other end.

@chukwudi:attentive "Everything we have," says Chukwudi, "is on that board. Everything we don't have is in our heads. Let's be honest about both."
*snapshot bridge

We go through it. What's known, and what's hoped, the way Florian taught us. The rope between Quentin and Eamon; between Silas and Hugo; between Felix and Clive. Every one of them matched, every one of them measured. Damian's name, and his hand, and his date. The limit, forty-eight hours, written twice. The three men in warehouse seven, alive.

And then the two things that can go wrong that we can see coming.

@adrian:tense "One," says Adrian. "The crossing. If they're watching it, they know your face, and they'll know we're coming."
*if (enemy_aware >= 3) and not(ally_keepers)
  Nobody says anything. We all know how many times I've walked into rooms this winter that August Rell or his people were in, and how little the keepers owe us. If they're watching, the donor team loses its timing. It's a real risk. It's on the board, in red.
*elseif enemy_aware >= 3
  @ansel:attentive "They may be watching," says Ansel. "But the keepers are with us. {@harlan_confessed|Harlan will open the footbridge himself, and knows every way round it.|Harlan will open the footbridge, because he must.} If we're seen, we'll still be on time."
*else
  @ansel:attentive "I don't think they are," says Ansel. "We've been careful. You've been careful. Nobody's been pricing you at a counter this winter." It's on the board anyway, in pencil.

@reuben:tense "Two," says Reuben. "Damian. If he's warned, he moves early."
*if (ch19_answer = "refuse") and not(armand_broken)
  I think about a man at a window, with a phone to his ear. It goes on the board in red, under the first one.
*else
  I think about Armand in his library, with Damian's reports in his lap, stopping the payments one by one. {@ch19_answer = "refuse"|He may not have warned anybody. He may simply have stopped. We can't know.|He's with us now, in writing. If Damian's warned, it won't be by him.} It goes on the board in pencil.

@chukwudi:neutral "So," says Chukwudi. "Which do we run?"

*choice
  *if plan_full and (materials >= 3) and (volunteers >= 6) and consent_q and consent_s and consent_f
    #The distributed bridge: everyone carries a little; all six come home, if it holds.
      *set plan_chosen "full"
      "The distributed bridge," I say. "All of it. The frame, the stones, the thread, and {volunteers} people carrying a little each. All six come home. If it holds."

      @ellis:warm Ellis underlines it on the board, twice, the way Damian underlined his date. "If it holds," he says. "It held on two pocket watches."

      @micah:tense "It'll hold," says Micah. "I'll hold it."
  *if plan_interim and (volunteers >= 3) and consent_q and consent_s and consent_f
    #The interim bridge: one volunteer to each patient, slow recovery, everyone lives.
      *set plan_chosen "interim"
      "The interim bridge," I say. "One volunteer to each patient. Heavy for them. Slow for everyone. But everyone lives."

      @reuben:tired Reuben nods. He's carried it; he knows what it weighs. "Weeks," he says. "Months, maybe. But alive."
  *if plan_pair
    #The single-pair bridge: we can only carry one patient across. We free all three donors.
      *set plan_chosen "pair"
      "The single pair," I say, and it's the worst thing I've ever said out loud. "We haven't got enough for more. We can carry one of them across. We free all three donors."

      @chukwudi:sad Nobody asks which one. Not yet. Chukwudi writes it on the board himself, very small.
  #Extraction: free the donors and end the links. The patients' support ends with them.
    *set plan_chosen "extract"
    "Extraction," I say. "We free the donors. We end the links." I make myself say the rest. "And the patients' support ends with them."

    @reuben:hurt Reuben shuts the ring binder. He doesn't argue. Quentin and Silas and Felix each decided for themselves, at a table in the Truss Road Diner, and one of the things they decided was that nobody would be kept in a bed for them.

    @adrian:tense Adrian writes it down. His hand doesn't shake. Mine would.
*comment ---------------------------------------------------------------- CH20.ROLE.01
*sid CH20.ROLE.01
*date 2027-03-13 15:30
*place P20 okafor_restoration
Three sites. One clock. And me.

Where I stand tonight decides what I see, and what I can do about it, and what I'll have to hear about afterwards instead of watching.

*choice
  #At Pump Nine, with the patients and the anchors. I can see the links.
    *set role "patient"
    Pump Nine. With the patients and the anchors and the frame. Whatever happens to the ropes, I'll see it happen, and I'll be able to say so.

    @reuben:warm Reuben puts me on his list, at the top, in capitals. "Good," he says. "I want the man who can see it standing next to me."
  *if acc_still or inside_man or (st_ansel >= 3)
    #At Stillwater, with the donors. Someone should be there who's seen them.
      *set role "donor"
      Stillwater. With the donors. I've seen them, through a window, grey in their beds. Somebody who's seen them should be the one who walks in.

      @ansel:attentive Ansel nods, once. "Then we go together," he says. "Through the door, and over."
  *if acc_cross or ally_keepers or (st_nolan >= 3)
    #At the crossing, keeping time between two worlds with Nolan's relays.
      *set role "coord"
      The crossing. Somebody has to keep time between two worlds, and phones don't work through the green door, and Nolan's relays need someone at the other end of them who can feel when a rope's slipping from three miles away.

      @nolan:amused Nolan tapes a radio to my chest, experimentally, and then takes it off again. "We'll work on it," he says.
*comment ---------------------------------------------------------------- CH20.LAST.01
*sid CH20.LAST.01
*date 2027-03-13 18:20
*place P06 riverside_steps
*mood dusk
The Riverside Steps, as the sun goes down.

The ice has gone. All of it, in a week. The river's high and brown and fast, right up to the flood marks carved in the stone, the highest in ten years, carrying branches and a traffic cone and a whole wooden pallet turning slowly in the current. The sky over the far bank is orange, then pink, then the colour of a bruise.

An hour before we go.

*choice
  *if st_adrian >= 5
    #Adrian.
      *set last_with "adrian"
      *present adrian
      @adrian:tense Adrian comes down the steps in his warden jacket, already dressed for tonight, with the notebook in his pocket. He sits beside me on the cold stone and doesn't take the notebook out. That's how I know.

      @adrian:small "I've planned everything," he says. "Every step. Every contingency. I've written it all down." He looks at the river. "I haven't planned for you not coming back. I tried. I couldn't write it."

      "Then don't."

      @adrian:warm He takes my hand. Properly, the way he did it the first time, as though it's a procedure he's reading off a card, except that he isn't reading anything now. {@st_adrian >= 6|And then he kisses me, on the Riverside Steps, in front of the whole river, in his warden jacket, and he doesn't look round to see who's watching.|We sit like that until the light goes, and he doesn't let go, and nobody writes anything down.}
  *if st_micah >= 5
    #Micah.
      *set last_with "micah"
      *present micah
      @micah:warm Micah comes down the steps with two paper bags from the chip shop on Lock Street, because he knows I won't have eaten. He sits down next to me, very close, the whole warm width of him, and hands me one.

      @micah:tense "Dad says I'm not to do anything heroic," he says, with his mouth full. "He said it four times. In the van. I think he meant it for himself."

      "Are you going to?"

      @micah:amused "Probably," he says. His uneven smile. "You?"

      "Probably."

      @micah:warm {@st_micah >= 6|He wipes his hands on his jeans, and then he kisses me, and he tastes of salt and vinegar, and I will never, as long as I live, be able to eat chips without thinking of it.|He leans his shoulder into mine, and leaves it there. That's all. It's enough to hold up a building.}
  *if st_ellis >= 5
    #Ellis.
      *set last_with "ellis"
      *present ellis
      @ellis:neutral Ellis comes down the steps with his sketchbook, and sits beside me, and draws the river. He doesn't say anything for ten minutes. The pencil goes, quick and certain, and the river comes up out of the paper, brown and fast, with the pallet turning in it.

      @ellis:small "I'm not performing," he says eventually, not looking up. "In case you were wondering. I haven't got anything left to perform with. I'm just frightened."

      "Me too."

      @ellis:warm He tears the page out, and gives it to me. At the bottom, very small, in the careful capitals: [i]13/3. Still here.[/i] {@st_ellis >= 6|And then he puts the sketchbook down, and kisses me, carefully, the way he mends things.|And then he leans against me, on the cold step, and lets me see him frightened, and I stay.}
  *if st_dominic >= 5
    #Dominic. The sun's just down.
      *set last_with "dominic"
      *present dominic
      I wait until the last of the orange has gone off the water. Then Dominic comes down the steps from the Regent end, in his old jumper, with his collar up, blinking at the sky the way he does, as though the dark's something he's still getting used to.

      @dominic:warm "Just made it," he says. He sits down. His hand finds mine, and it's cold, the way it always is, and I don't mind. "I wanted to see it. The river, with the sun only just gone. It's the closest I get now."

      "Sing something," I say.

      @dominic:shy He laughs. And then, very quietly, under the noise of the water, he does: something old, with no words I know, the kind of song you'd sing to someone to get them to sleep. {@st_dominic >= 6|At the end, he kisses me, cold-mouthed, and I don't mind that either.|At the end, he doesn't let go of my hand.}
  *if st_nolan >= 5
    #Nolan.
      *set last_with "nolan"
      *present nolan
      @nolan:amused Nolan comes down the steps with his field recorder on its strap and holds it out over the water, the way he's held it out over everything since the day I met him. "The flood," he says. "Highest in ten years. Somebody should get it."

      We sit and listen to him record the river. It's the loudest thing in the city.

      @nolan:small "If something goes wrong tonight," he says, still not looking at me, "I want you to know I don't regret any of it. Not one day of it. Not four years of it."

      "Nothing's going to go wrong."

      @nolan:warm "Liar," he says, fondly. {@st_nolan >= 6|And he switches the recorder off, and kisses me, and then switches it back on, because he says he wants a record of the river after.|And he leans against me, all his long awkward length, and we listen to the river until it's dark.}
  *if st_ansel >= 5
    #Ansel.
      *set last_with "ansel"
      *present ansel
      @ansel:attentive Ansel comes down the steps in his formal collar, with a paper cone of chips he's bought, he tells me, purely as a comparison. "The vinegar," he says. "Is still worse."

      "It's the same vinegar."

      @ansel:amused "It's the principle." He sits beside me. He eats a chip. And then he says, looking at the river, very formally: "I should like it recorded that I am frightened, and that I'm going anyway, and that I'd prefer to be going with you than with anyone else in either world."

      "Recorded."

      @ansel:warm {@st_ansel >= 6|He kisses me. Briefly, and formally, and then not formally at all.|He puts his hand over mine on the step, and leaves it there, which from Ansel is a speech.}
  *if st_quentin >= 5
    #Quentin, before the car comes.
      *set last_with "quentin"
      *present quentin
      @quentin:neutral Quentin's already on the steps when I get there, in his big coat, with his hands in his armpits because they're always cold now. He's got till ten. Then a car comes for him, and he gets in it, because we've asked him to.

      @quentin:tense "I'm not scared of the car," he says. "I'm scared of being grateful. If it works. Of spending the rest of my life saying thank you to people." He looks at me. "I died in a lane. I'm not doing the rest of it on my knees."

      "You won't have to."

      @quentin:warm He looks at me for a long time with that direct gaze. Then he takes one cold hand out of his armpit and puts it in mine. {@st_quentin >= 6|And he kisses me, hard, on the Riverside Steps, like someone who's decided something and is getting on with it.|"Warm," he says. "How are you always warm?"}
  *if st_reuben >= 5
    #Reuben.
      *set last_with "reuben"
      *present reuben
      @reuben:tired Reuben comes down the steps with his medic's bag and a flask. He pours the tea, and hands it to me, and doesn't drink his own. He's been up since five, checking drips.

      @reuben:tense "I've done the numbers eleven times," he says. "They come out the same every time. That's good. That's what numbers are for." He puts the flask down. "I'm still frightened. I thought you should know. I'm not very good at saying it."

      "You just said it."

      @reuben:warm "So I did." And the radiator-warmth of him comes up, beside me, on the cold stone. {@st_reuben >= 6|He kisses me, carefully, like a man who's been told he's allowed to have something, and is still checking.|He puts his big hand over mine and keeps it there, and we watch the light go.}
  #Martin, pretending it's an ordinary Saturday.
    *set last_with "martin"
    *present martin
    @martin:neutral Martin comes down to find me. He's shut the shop early, which he never does on a Saturday, and he's brought two teas in the chipped mugs from the kitchen, which he never takes out of the house. He sits down on the step beside me, in his cardigan, with his reading glasses pushed up into his hair, and says the river's high.

    "It is."

    @martin:attentive "Your mum rang," he says. "She's coming home in April. She says to tell you she'll want to hear all of it." He blows on his tea. "I said you'd tell her. When you're ready."
    *if gift_martin or family_case or vol_home or out_family
      @martin:tense He doesn't ask where I'm going tonight. He knows it's tonight; I can feel him knowing it. He just sits with me, pretending it's an ordinary Saturday, until the light goes, and then he takes both mugs, and squeezes the back of my neck, and goes home.
    *else
      @martin:tense He doesn't ask anything. He sits with me, pretending it's an ordinary Saturday, until the light goes. Then he takes both mugs, and squeezes the back of my neck, and says, "Come home after," and goes. He doesn't know where I'm going. He knows I'm going somewhere.
  #Alone, on the steps, with the river.
    *set last_with "alone"
    Alone. On the steps, with the river.

    I sit there until the light goes, and let the knack have the city: all of it, the whole evening weather of it, a million people having an ordinary Saturday. Someone's having a party on a barge. Someone's having a row in a flat above the chip shop. Someone's in love, very near, very new, and doesn't know what to do about it.

    And somewhere under it, if I reach far enough, three thin ropes, stretched out of three young men to three beds in another country. Still holding. For now.

The streetlights come on along the river, one by one. It's time.

*journal [b]Chapter 20.[/b] Saturday 13 March. The last briefing, at the Okafors'. {@plan_chosen = "full"|We chose the distributed bridge: all six home, if it holds.|}{@plan_chosen = "interim"|We chose the interim bridge: one volunteer to each patient, slow, and everyone alive.|}{@plan_chosen = "pair"|We chose the single pair: we can carry one patient across, and we free all three donors.|}{@plan_chosen = "extract"|We chose extraction: free the donors, end the links, and let the patients' support end with them, as they decided.|} I'll be {@role = "patient"|at Pump Nine, with the patients.|}{@role = "donor"|at Stillwater, with the donors.|}{@role = "coord"|at the crossing, keeping time.|} {@last_with = "alone"|I spent the last hour alone with the river.|}{@last_with = "martin"|I spent the last hour with Martin, pretending it was an ordinary Saturday.|}{@last_with = "adrian"|I spent the last hour on the Riverside Steps with Adrian.|}{@last_with = "micah"|I spent the last hour on the Riverside Steps with Micah.|}{@last_with = "ellis"|I spent the last hour on the Riverside Steps with Ellis.|}{@last_with = "dominic"|I spent the last hour on the Riverside Steps with Dominic.|}{@last_with = "nolan"|I spent the last hour on the Riverside Steps with Nolan.|}{@last_with = "ansel"|I spent the last hour on the Riverside Steps with Ansel.|}{@last_with = "quentin"|I spent the last hour on the Riverside Steps with Quentin.|}{@last_with = "reuben"|I spent the last hour on the Riverside Steps with Reuben.|}
*page_break
*goto_scene ch21
`);
