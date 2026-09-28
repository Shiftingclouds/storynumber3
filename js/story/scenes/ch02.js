NB.scene("ch02", String.raw`
*mood day
*set ch 2
*chapter 2 The Account I Give
*comment ---------------------------------------------------------------- CH02.HOME.01
*sid CH02.HOME.01
*date 2026-08-30 08:40
*place P02
*present martin will
I don't sleep. I lie on top of the covers in my clothes with the window open and the city doing its early-Sunday noises, a milk float, a dog, bells somewhere across the river, and every time I close my eyes I'm back in the lane with the doubled pulse going under my hands, or under my ribs, or wherever it went.
*if hurt_mc > 0
  My shoulder's gone a colour I've only seen on aubergines. There's a lump on the back of my head I can feel through my hair.
By half eight I give up and go downstairs.

Martin's in the kitchen at the back of the shop in his dressing gown, making toast he won't eat. He looks at me once, and then looks again, and puts the knife down.

The knack gives me his worry as a low grey pressure, like weather coming in off the sea. Not anger. He's never once been angry with me. Just grey, and heavy, and waiting.

"You look like you've seen a ghost," he says.
*if hurt_mc > 0
  And then he sees my shoulder, where the T-shirt's pulled, and his whole face changes. "{name}. What happened to you?"

*choice
  #Something true and small. "I saw a fight after the show. I'm okay. I promise I'm okay."
    *set fr_martin +1
    He looks at me for a long time over the tops of his glasses. The grey pressure doesn't lift, but it shifts, like something settling to wait.

    "Was anybody hurt?"

    I think about Quentin's hand going out to the wall. "Yeah," I say. "Somebody was."

    He nods slowly. He doesn't ask anything else. He puts a piece of toast on a plate and pushes it across the table to me, which in Martin is roughly equivalent to a hug, and says, "You tell me. When you want to. Not before."
  #Nothing. "Long night." And a smile that doesn't fit.
    *set fr_martin -1
    "Long night," I say.

    He knows it's a lie. I can feel him know it: a small cold drop in the grey. He lets me have it anyway, which is worse than if he'd pushed. "Right," he says. "Well. There's toast."

    He goes back to the shop and doesn't turn the radio on, which he always does on a Sunday.
*if fr_will >= 2
  *page_break
  *goto game
*goto account

*comment ---------------------------------------------------------------- CH02.GAME.01
*label game
*sid CH02.GAME.01
*date 2026-08-30 09:15
*place P44
*present will tomas
*set fr_will +1
*set s13 "fore"
*meet tomas
Southmere sports ground at quarter past nine on a Sunday morning is wet grass, white lines, forty teenage boys trying to look like they're not scared, and parents in the rain pretending they're not scared for them. I'm in the car park with two cups of the bad garage coffee and a head that feels like a church bell after a wedding.

Will sees me through the fence. He doesn't wave. He does a thing with his chin that means he's seen me, and I do the same thing back, and I think that's the most either of us has ever said.

He plays badly in the first half. Nerves, and the pitch is heavy, and he keeps trying to do everything himself. The knack gives me the whole touchline in one lump, forty families' worth of hope and dread, but under it I can feel Will's own wire, the bright hum of him, and it's tangled.

The coach is a young guy in a tracksuit, twenty-two at most, with a clipboard and a whistle and a voice that could strip paint. Tomas, one of the parents calls him. He shouts the least fair things in the most useful way. "Avery! You're not the whole team! Nobody wants to watch you dribble into a wall!" And at half-time he takes Will aside and says something quiet I can't hear, and whatever it is, Will comes out for the second half and passes the ball.

Second half, he's good. Really good. I don't know anything about football but I know about watching a room, and there's a moment when Will takes the ball on the wing and doesn't look up, doesn't need to, and I see it before he does: the space opening between two defenders like a door, a lane of wet green straight to the box. Will sees it a half-second later. He goes through it.

He doesn't score. He lays it off for someone who does. The scout with the umbrella writes something down.

When it's over he walks past me to the car and takes one of the coffees without saying anything, and drinks all of it, cold, in one go, and then says, "That was rank," meaning the coffee, and gets in the car. The wire in him is humming clean.
*page_break

*comment ---------------------------------------------------------------- CH02.ACCOUNT.01
*label account
*sid CH02.ACCOUNT.01
*date 2026-08-30 11:30
*place P02
Half eleven. I'm sitting on my bed with my phone in my hand and the city outside the window going on as if nothing's happened.

Nothing has. That's the thing. I've looked. There's nothing on the local news, nothing on the Switchyard page but photos of the crowd and a thank-you from Desmond, nothing in the city's missing-persons notices. A man died in a lane behind a music venue at twenty to one this morning and somebody put him in a van, and the city hasn't noticed.
*if e01
  I've got fourteen seconds of it on my phone. I've watched them nine times. A back in a hood. A body, falling. A van with a lily on its side. It proves something happened. It doesn't prove what.
*if cuff_button
  The button's on my bedside table. Brass, heavy, a little building with a cross over the door. I keep picking it up and putting it down.
Somebody should know. Somebody should be looking for him. Quentin. He said he worked at Double Shift. He said [i]come in, I'll do you a coffee[/i].

What do I do with it?

*choice
  #Go to the police and make a statement. Do it properly.
    *set ch02_report "police"
    *goto police
  #Go through the venue. Tell Desmond, and make sure the camera footage is kept.
    *set ch02_report "venue"
    *goto venue
  *if ch01_saw != "help"
    #Tell Nolan. Only Nolan. Work out what it was, together, first.
      *set ch02_report "nolan"
      *goto nolan
  *if ch01_saw = "help"
    #Talk it through with Nolan, who was there too, before we tell anyone.
      *set ch02_report "nolan"
      *goto nolan

*comment ---------------------------------------------------------------- CH02.POLICE.01
*label police
*sid CH02.POLICE.01
*date 2026-08-30 12:30
*place P40
The police desk at Municipal Hall is open on Sundays from twelve until four, and at half twelve there's a woman ahead of me reporting a stolen bike and a man behind me who wants to complain about a neighbour's hedge.

The officer at the desk is kind, tired, and very young. She takes me into a side room with a table and two chairs and a box of tissues nobody's opened, and I tell her. The show. The lane. The man in the service jacket. The fall. The van with the lily.

She writes it down. All of it. She asks good questions: what time, how far away, what did he look like, the van, the registration. I don't have the registration. I didn't think.

The knack gives me her the whole time, and she's honest, and she's worried, and underneath that, a little further down, she's already sure what will happen, which is nothing.

"We'll look into it," she says. "I've got to be straight with you, though. There's no body. Nobody's been reported missing. The venue hasn't called anything in." She taps the pen. "If he turns up, or someone reports him, this is on record, with a date, and your name, and that matters. Honestly. It does."

*choice
  *if e01
    #Give her the phone video. Fourteen seconds is better than nothing.
      *set told_gareth true
      *set e01_src "phone+police"
      I hold out my phone. She watches it twice, and her face does something complicated, and she copies it off onto a stick and attaches it to the statement with a paperclip, which feels very old-fashioned for something so strange.

      "That's a fall," she says. "That's definitely somebody falling." She doesn't say anything about the van. She writes the time on the stick in marker pen.

      "There's a man upstairs who reads everything that comes in like this," she says, not quite to me. "Every odd thing. He'll see it."
  #Describe it. Keep the video to myself, for now.
    I tell her it all again, slower, and she writes it down again, and doesn't ask if I filmed it, and I don't say.

    I don't know why I keep it back. Maybe because it's the only proof I've got that I'm not mad, and I don't want to give it to a building.
She gives me a card with a reference number on it. I put it in my wallet, behind my bus pass, and go back out into the Sunday.
*goto lane

*comment ---------------------------------------------------------------- CH02.VENUE.01
*label venue
*sid CH02.VENUE.01
*date 2026-08-30 12:30
*place P13
*present desmond nolan
Switchyard on a Sunday afternoon is a different building: the doors shut, the bar stacked with chairs, a smell like the morning after a wedding. Desmond's in the office with sunglasses on indoors and a coffee the size of his head. Nolan's there too, restringing a mic stand on the stage with his headphones round his neck, because Nolan's always there.

I tell Desmond. He's shaken, genuinely: the knack gives it to me straight, a lurch of horror, real and ugly. Then, a moment later, rising up underneath it like damp through wallpaper, the thing he's actually thinking about: the licence review. A death behind the venue. A police report. In the spring, when the lease is up.

"God," he says. "God, that's awful. Awful. Look, the camera... I'll keep the footage. Of course I'll keep it. I'll pull it off the box today. Tomorrow at the latest." He means every word.

Across the room, Nolan's stopped restringing. He knows the system better than anyone in the building. He's looking at the office door, and then at me, and his face is saying something very quietly that the knack tells me in a word: [i]no[/i].

*choice
  *if not(e02)
    #Ask Nolan to copy the camera file now, while Desmond makes more coffee.
      *set e02 true
      *set e02_src "nolan"
      *set st_nolan +1
      When Desmond goes to put the kettle on, I look at Nolan. He's already moving. He's in the office before Desmond's got the tap running, and I hear the drawer where the recorder lives slide open, and a small click, and then he's back at the mic stand as if he'd never left, with something in his back pocket.

      Later, outside, he gives me the memory stick without a word, and I give him the kind of look I don't have a word for, and he says "don't", and I don't.
  #Trust Desmond with it. He's never actually let us down on anything that mattered.
    *set fr_desmond +1
    "Thanks, Des," I say, and he squeezes my shoulder, and I feel him mean it.

    Nolan goes back to his mic stand. He doesn't say anything. But something in him tightens, like a string being tuned up a note, and stays there.

    Nolan told me once that the recorder keeps a week and then records over itself. I hope Desmond remembers. I know Desmond.
*goto lane

*comment ---------------------------------------------------------------- CH02.NOLAN.01
*label nolan
*sid CH02.NOLAN.01
*date 2026-08-30 12:30
*place P06
*present nolan
*set st_nolan +1
The Riverside Steps are a long flight of stone steps down to the water under the old bridge, where people eat their lunch, and buskers busk, and pigeons run a protection racket. Nolan's got two coffees from the stall at the top. He hands me one without asking what I want, because he knows.

We sit on the fourth step from the bottom. The river's high and brown from the rain.

I tell him. All of it, or all of the parts that sound like things. The lane, the man, the fall, the van. He listens the way he always listens, turning the lid of his cup round and round in his fingers, never interrupting. When I get to the van with the lily he goes very still.

"I believe you," he says, before I've even finished.

And that's somehow worse. I'd been ready for him not to. I'd had the argument all planned.

"So what do we do?" he says.

"I don't know. Go to the police?"

"And say what?" He's not being unkind. He's thinking. "No body. No missing person. No reason to look. They'll write it down and it'll vanish." He turns the lid. "We should look first. Ourselves. Before anybody official makes it disappear."

*choice
  *if not(e02)
    #"Can you still get into the camera system?"
      *set e02 true
      *set e02_src "nolan"
      He looks at me sideways. "It's Switchyard's recorder. It's got a password that's Desmond's birthday." He's already standing up. "It keeps a week. Then it records over itself. Come on."

      Forty minutes later I'm holding a memory stick with the lane on it, from above, black and white and grainy: me with the cases, the orange light, a figure by the bins, another figure coming down the lane. A van backing in. You can't see a face. You can see the sequence.

      "That's him," Nolan says, very quietly, pointing at the figure by the bins, who's falling. "That's the lad from the bar."
  #"There's something else. When he died, I felt it." Tell him about the knack.
    *set gift_nolan true
    *set st_nolan +1
    I've never told anyone. Not my mum. Not anyone. I don't know why now, except that I'm so tired, and the river's so loud, and he said [i]I believe you[/i] before I'd finished.

    "When he died," I say. "I felt it. Not saw. [i]Felt.[/i]" And then it all comes out, the whole thing, eleven years of it: the weather in rooms, the warmth of people, the ear defenders. The pulse in the lane, doubled. The rope.

    Nolan doesn't say anything for a long time. He turns the lid of his cup. The river goes past.

    Then he says, "Is that why you always know when I'm in a mood?"

    "Yeah."

    "I thought I was just really obvious."

    "You are really obvious."

    He laughs, a short, surprised laugh, and then stops, and looks at me, and says, "Okay." Just that. [i]Okay.[/i] And puts his shoulder against mine, on the step, and leaves it there.

    I can't feel what he thinks about me. I never can. But I can feel him, the radio-in-the-next-room warmth, and it doesn't go cold. That's all I get. It's enough.
  #Keep the knack to myself. It's the only part that sounds insane.
    I don't tell him about the pulse. About the rope, or the knack, or any of it. He believes me about a man falling in a lane. I'm not going to push my luck telling him I felt it.

    "Yeah," I say. "Let's look."

    He nods, and bumps his shoulder into mine, and something in me that's been clenched since last night lets go a little.
*goto lane

*comment ---------------------------------------------------------------- CH02.LANE.01
*label lane
*sid CH02.LANE.01
*date 2026-08-30 15:00
*place P13 switchyard_lane
*set strain 0
The rear lane at three in the afternoon is just a lane.

A delivery van idling outside the kitchen door of the place next to Switchyard. A kitchen porter in checked trousers having a smoke on an upturned crate. Pigeons. The bins. The caged lamp over our loading door, switched off, looking smaller in daylight. The drizzle's gone and the asphalt's dried in patches and there's nothing, nothing at all, to say that anything happened here.

I walk down to the far end. To the wall by the bins. The bricks are old and soft and the mortar's crumbling out of them. There's a smear of something at shoulder height that could be anything. It's a wall.

I could put my hand on it.

I've never done it on purpose. Not really. The knack happens [i]to[/i] me. I don't do it. But sometimes, with things, old things, things people have held a long time or places where something happened, there's a kind of hum, like the tin charm on Quentin's keys, and if I touched it, and let myself...

*choice
  #Put my hand on the bricks and let it all the way up.
    *set reached +1
    *set strain +1
    *set knack +3
    *set echo_lane true
    I put my palm flat on the wall. I close my eyes. And I let it come.

    It's like putting my head underwater. The lane goes away. There's cold, first: cold hands, not mine, on my skin, a clean dry cold like a fridge. Then a smell, sweet and heavy and wrong, the smell of white lilies, so strong I nearly gag. And under it, a man's voice, very calm, very close, counting down. [i]Ten. Nine. Eight.[/i] Pleasant. Patient. Like a dentist. [i]Seven.[/i] And the smell of a clean van, rubber and disinfectant and cold metal.

    [i]Six.[/i]

    I take my hand off the wall so fast I skin my palm.

    The kitchen porter's looking at me. I'm on my knees. I don't remember kneeling. There's a headache coming on behind my right eye like a nail being driven in slowly, and the taste of pennies in my mouth.

    "You all right, mate?" he says.

    "Fine," I say. "Dropped something."

    Lilies. A calm voice counting down. A clean van. I don't know what it means. The first thing I think of is flowers, a florist, a funeral. I file it away with the rest.
  #Don't. Go home. Pretend I'm normal, for one afternoon.
    I don't touch it.

    I stand there with my hands in my pockets and look at the wall until the kitchen porter asks if I'm all right, and I say I'm fine, and I go home.

    I don't know if it's cowardice or common sense. I don't know if there's a difference.
  *if not(e01)
    #Ask around. At all-ages shows someone always films from the fire escape.
      *set e01 true
      *set e01_src "bystander"
      *set people +2
      The fire escape on the old building opposite goes right up past the lane. At all-ages shows the kids go up it to smoke, or to film the crowd from above, or to be fourteen somewhere their parents can't see.

      It takes me two hours and eleven messages to three group chats and a lot of being called "the lighting guy", but I find her: a girl called Priya, fifteen, who went up the fire escape at twenty-five to one to film her friends doing a stupid dance in the lane and caught, behind them, for eleven seconds, a man falling by the bins. She deleted it because it ruined the dance. Her friend still had it.

      Eleven seconds, from above, shaky, in the orange light. The sequence. Not the face.

      "Was that real?" her friend asks me, when she sends it. "Like, did someone actually get hurt?"

      "I don't know yet," I say, which is a lie.
*page_break

*comment ---------------------------------------------------------------- CH02.HOME.02
*sid CH02.HOME.02
*date 2026-08-30 21:00
*place P02 print_shop
*present martin will
*mood night
Evening above the shop. Martin's made a stew out of whatever was in the fridge, which is what he does on Sundays, and it's always better than it should be.
*if s13 = "fore"
  Will tells the story of the trial three times over dinner, and each time he's better in the second half and the scout writes more things down. He doesn't mention I was there. When he goes to bed he knocks on my door frame with one knuckle, twice, which is a thing he used to do when he was eleven and couldn't sleep, and goes.
*else
  Will's back from his trial by two buses and says it went "fine" and that he "might hear something" and goes up to his room. Later I hear him on the phone to a friend going over every single pass in detail, and the wire in him is so tangled I can feel it through the ceiling. I should have been there. I know I should have been there.
Martin's quiet at dinner. Towards the end, apropos of nothing, he says: "The Fairweathers want the order on account again. Third time. I said yes." He looks at his stew. "You can't say no to people like that. They've been coming since before your mum was born." And then he talks about the weather.

The red-striped envelope's gone from the counter. I don't know where he's put it. I know it hasn't gone away.

Up in my room with the window open and the city settling down, I sit on the bed with my phone.
*if e01 or e02
  I've got the lane on my phone, one way or another. I don't watch it again. I don't need to.
*else
  I haven't got anything. No video, no footage. Just my word, and the pulse, and the memory of a man falling. It's not much. It's what I've got.
There's an email to write, too. Mum's seven are sitting there in my inbox, answered with nothing. She'll be up in the snow reading her one bar of signal, waiting.

*choice
  #Write Mum the truth, or near enough. Something bad happened. I'm handling it.
    *set letters_mum +1
    [i]Mum. Something happened after the show last night. Somebody got hurt, badly, and I saw it. I'm okay. I'm not hurt. I'm just a bit shaken up and I'm trying to do the right thing about it. I'll tell you properly when the signal's better. Will was brilliant at his trial. Martin says hello. I'm wearing the ear things. Love you more than the snow.[/i]

    I read it back four times and send it before I can change my mind. It'll sit on a server somewhere for days, waiting for her satellite. There's something comforting about that. It's like posting a letter into the sea.
  #Write Mum about the show, and Will's game, and nothing else.
    *set letters_mum +1
    [i]Mum! The Last Set was amazing, best one yet. The hen party were legends. Will's trial was today and I think he did really well, fingers crossed. Martin says hello and says he won't charge me rent, so you'll have to fight him. I'm eating. Actual food. Wearing the ear things. Love you more than the snow.[/i]

    Every word of it's true. That's what's so horrible. I send it anyway, and lie on the bed, and look at the ceiling, and don't sleep, again.

*journal [b]Chapter 2.[/b] {@ch02_report = "police"|I made a statement at Municipal Hall.|{@ch02_report = "venue"|I told Desmond, at the venue.|I told Nolan, on the Riverside Steps.}} {@echo_lane|In the lane I reached with the knack and caught an echo: cold hands, lilies, a calm voice counting down.|}
*page_break
*ending A
`);
