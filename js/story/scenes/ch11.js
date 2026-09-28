NB.scene("ch11", String.raw`
*mood day
*set ch 11
*chapter 11 The Material City
*comment ---------------------------------------------------------------- CH11.OPEN.01
*sid CH11.OPEN.01
*date 2026-11-19 15:00
*place P02
*set strain 0
The poster's been up on Latch Lane for a fortnight, in the window of the newsagent's opposite, and Martin printed it, so I've seen it about four hundred times: a brass frame on a black ground, and gold letters. [i]THE MATERIAL CITY. Objects, Memory and the Made World. Curated by Dr Basil Duret. The Whitcomb Museum. With the generous support of the Sorrell Foundation.[/i]

It opens tonight. And half the people I know will be there, for half a dozen different reasons.

The Sorrell Foundation, it turns out, is everywhere, once you start looking. It paid for the new scanner at the General. It funds bursaries on the Hill. It restored the roof of the Southmere rec centre. Its name's on a plaque in the Whitcomb's entrance hall, and on the side of an ambulance, and on half the charity boards in Calder. Armand Sorrell, whose foundation it is, lives up in Briar Heights and hardly ever comes down, and tonight he's coming down.

I've got three ways in.

*choice
  #As crew. Desmond's company has the AV contract; Nolan got me on it.
    *set ex_as "crew"
    Desmond's company, the one that does Switchyard's hires on the side, has got the AV contract for the opening: projectors, a PA for the speeches, the lights for the interval. {@hurt_nolan >= 2|Nolan put my name on the crew list anyway. He didn't text me to say so. Des did.|Nolan put my name on the crew list without asking, and texted me a photo of it with [i]you owe me a pie[/i].} So I'm going in black, with a radio on my belt and gaffer tape on my jeans, through the loading bay, like I've gone into a hundred venues.
    *goto exhibit
  *if st_ellis >= 3
    #As Ellis's guest. He has a piece in the student room and asked me to stand next to it with him.
      *set ex_as "guest"
      Ellis has a piece in the student room: a restoration study, a panel he spent all summer on. He asked me on Sunday, by postcard, in brown ink: [i]Would you stand next to it with me? I'm told it's customary to have someone. I'd rather it was you than a stranger.[/i] So I'm going in the only good shirt I own, through the front doors, up the steps between the stone lions, like a person who gets invited to things.
      *goto exhibit
  *if st_dominic >= 3
    #As Dominic's plus-one. Benoît's ensemble is playing the interval, and Dominic's singing.
      *set ex_as "performer"
      Benoît Marchand's ensemble is playing the interval: the students from his evening class at the Lantern Rooms, in borrowed black. And Dominic's singing. In public. For the first time since he was turned. He asked me on Monday, at two in the morning, by text, in one long message with no punctuation that ended [i]please come I think if you're there I can do it[/i]. So I'm going as his plus-one, through the artists' entrance, carrying a guitar case that isn't mine.
      *goto exhibit

*comment ---------------------------------------------------------------- CH11.EXHIBIT.01
*label exhibit
*sid CH11.EXHIBIT.01
*date 2026-11-19 19:00
*place P22
*present armand august clive felix caspar basil
*mood night
*set armand_met true
*set s12 "fore"
The Whitcomb's great gallery, full.

It's the biggest room in the city that isn't a church: a long hall under a glass roof, with a gallery running round it on iron columns, and tonight every inch of it is lit, and every inch of it is people. Money, mostly. The knack gives it to me like walking into a warm bath full of pins: everyone performing, everyone watching everyone else perform, and under it all a hum of appetite, polite and enormous.

The cases run down the middle of the hall: old things, city things. A tram driver's cap. A bell from a drowned church. A wedding dress made of parachute silk. A brass frame, empty, in case nine, that I feel from the doorway: a faint hum under my breastbone, like a phone vibrating in another room.
*meet caspar
@caspar:amused Caspar's up on the gallery running the lights, in a beanie and black, and gives me a very small wave with a very large spanner. "{@ex_as = "crew"|Loading bay's through there. Des is having a breakdown by the projector. Welcome to glamour.|Look at you. Front door. Fancy.}"
*set fr_caspar +1
*meet basil
*if ch07_evening = "uni"
  @basil:amused And holding court under the gallery, in his corduroy jacket, with his floppy grey-blond hair freshly cut for the occasion, is Basil Duret: the lecturer from the open studios who told a first-year the city reads us. It's his exhibition. He's glowing. "The [i]material[/i] city," he's telling a man with a cane, "is a city that remembers with its hands."
*else
  @basil:amused And holding court under the gallery is the curator: a handsome man going to seed, in a corduroy jacket, with floppy grey-blond hair freshly cut for the occasion and a lecturer's voice that carries to the glass roof. Dr Basil Duret, says the name on the wall by the entrance, in letters a foot high. It's his exhibition. He's glowing. "The [i]material[/i] city," he's telling a man with a cane, "is a city that remembers with its hands."
*meet emmett
*if screen_done
  Emmett's on the main door in a security blazer that's too big in the shoulders, trying to look like a wall. He sees me and his face does something complicated: pleased, and then terrified that someone will notice he's pleased, and then back to wall.
*else
  On the main door there's a security guard about my age in a blazer that's too big in the shoulders: slight, soft round face, black hair in his eyes, trying very hard to look like a wall. Emmett, says his badge. When I pass him, the knack gives me something I wasn't expecting from a museum guard: the particular, steady attention of someone who's been trained to look for things that aren't people. A warden, I'd bet. Moonlighting.

At eight minutes past seven, the room goes quiet for a speech.
*meet armand
@armand:sad Armand Sorrell is in his fifties: fine-featured and grey-eyed, silver hair, a coat that was made for him by someone who knew what they were doing. He speaks for four minutes without notes, about his son. Octavian. Who died ten years ago this March, at twenty. In whose memory the Sorrell Foundation funds restoration, and training, and healthcare, [i]so that fewer families lose what we lost[/i].

The knack takes his grief like a weight on my chest. It's enormous. It fills the gallery to the glass roof. It's ten years old and it hasn't got any smaller; it's only got more careful, like a man carrying a full bowl across a room. The whole hall stands still while he speaks, and I don't think it's politeness. I think they can feel it too, a bit, without knowing what it is.
*meet august
At his elbow the whole time is an older man, sixty-something, with long white hair combed straight back and rings on four fingers and a velvet waistcoat the colour of old wine. August Rell, of Rell & Company, the dealers on Market Crescent: a man who, Caspar tells me afterwards, has sold half the objects in this room to the other half of the people in it. He watches Armand the way you'd watch a kettle.
*meet soren
Working the room behind them is a man in rimless glasses and a quarter-zip that probably costs more than the print shop's rent, smooth-faced, blond hair so precise it looks cut with a ruler: Soren Venn, the developer, whose name is on the hoardings round half of Foundry Reach. He shakes hands like he's counting them.
*meet abel
And by the pillar, not eating the canapés, is a heavy, handsome man in his fifties in grey cashmere, with silver hair cut expensively and a face gone soft and very pale. Abel Mercer. The knack gives me the stillness before I see it: the deep, careful, held stillness I've only ever felt from people at the Regent. Nobody else in the room notices. He holds a glass of red wine and doesn't drink it, and watches Armand's speech with an expression of great sympathy that doesn't reach anywhere under it.
*meet clive
@clive:laugh And in the middle of all of it, in the only corner of the gallery that's actually enjoying itself, is a big, cheerful man in a flat cap with clay up to both elbows, doing a glaze demonstration at a wheel for a circle of donors in evening dress, and making them laugh. "No, no, you [i]want[/i] it to crack," he's saying, holding up a bowl. "That's the good bit. That's where the gold goes." Clive Merritt, the card on his table says. Ceramics. Evening classes, Southmere rec centre, Tuesdays.
*set fr_clive 1
*meet felix
*if fr_felix >= 1
  @felix:amused And Felix Brecht, bleached hair, fingerless gloves, a camera rig on his shoulder, filming it all for the foundation. For pay, for once. He sees me and swings the camera round and films me for four seconds, then lowers it and grins. "You again. Counting exits."
*else
  @felix:amused And filming it all for the foundation, for pay, a lad with bleached hair gone dark at the roots and fingerless gloves and a camera on a shoulder rig, weaving through the donors like a fish. He films me for about four seconds, then lowers the camera and looks at me without it. "You've got the face of someone counting the exits," he says. "Felix. I'm the help. So are you, by the look of it."
*set fr_felix +1

*choice
  #Stand near Clive's demonstration. He's the only person here who seems to be enjoying himself.
    *set fr_clive +1
    @clive:amused I end up by Clive's wheel, because it's the only warm corner of the room, and because he looks up at me with clay on his face and says, "You. Yes, you, with the face. Come and put your hands on this."

    @clive:warm So I put my hands on a spinning lump of wet clay in front of forty people in evening dress, and it goes immediately, completely wrong, and Clive laughs so hard he has to hold on to the table. "Beautiful," he says. "Terrible. You've got a potter's hands and absolutely no patience. Tuesdays, Southmere, seven o'clock, bring an apron."

    @clive:amused He's got the easiest weather in the room: warm, simple, delighted by everything, like standing next to a kiln. He tells me about his classes, pensioners and teenagers and a bus driver who makes nothing but frogs. He tells me his studio's above the Lantern Rooms, and it floods, and he doesn't care, because the light's good. The donors drift off. He doesn't notice. He's showing me how the cracks take the gold.
  #Watch August Rell watching Armand.
    *set august_watched true
    *set people +2
    I watch August Rell.

    It's the kind of thing I'm good at, from the side of a stage: watching someone who thinks nobody's watching them. And August Rell is very good at being watched, and so he doesn't think to be careful about being watched watching.

    @august:guarded He never leaves Armand's elbow. When Armand's grief rises, in the speech, on his son's name, August touches his arm, lightly, and it goes down again, the way you'd turn down a flame. When a donor gets too close, too long, August steers them off with a laugh and a word. When Armand starts to say something to a woman from the Hill about [i]the work[/i], August says "Armand," softly, and he stops.

    The knack gives me August like a well-kept shop: polished surfaces, everything priced, and somewhere at the back a room with the door locked. He isn't comforting Armand. He's managing him. And he's very, very attentive to the brass frame in case nine, which he looks at four times in twenty minutes, like a man checking his watch.
*page_break
*comment ---------------------------------------------------------------- CH11.EXHIBIT.02
*sid CH11.EXHIBIT.02
*date 2026-11-19 20:00
*place P22
*present benoit dominic graham
At eight, the interval. The lights go down in the great hall, and up on the little stage under the gallery.
*meet benoit
@benoit:warm Benoît Marchand's ensemble files out in borrowed black: twelve students from his evening class at the Lantern Rooms, a bus driver, two nurses, a man who fixes lifts, a girl of about fifteen with a cello bigger than she is. Benoît himself, narrow and lively, with a scarf worn indoors and a pencil behind his ear, taps the stand twice and grins at them like they're the best thing that ever happened. "Just like Tuesday," he says. "Only with worse acoustics and richer people."

And at the end of the row, in the old jumper with the hole at one cuff, in the lights for the first time in fifteen months, is Dominic Bell.
*if ex_as = "performer"
  I carried his guitar case in through the artists' entrance. I stood with him in the corridor behind the stage for twenty minutes while he didn't breathe, because he doesn't need to, and did it anyway, out of habit, in and out, in and out, like someone about to go under water.
*meet graham
At the back of the hall, by the fire door, there's a man in a caretaker's blue coat with a big ring of keys on his belt. Dominic's nose, Dominic's build, gone ruddy and thinning. He's standing very still with his hands in his pockets, staring at the stage like he's afraid it'll disappear if he blinks. Graham Bell. Dominic's dad. The caretaker at Southmere rec, where Benoît's ensemble rehearses on Thursdays, which is how he heard.

@graham:tense "He works nights now," Graham says, to nobody, or to me, because I'm standing nearest. "Since last summer. Won't come for Sunday dinner. Won't tell me why." He doesn't take his eyes off the stage. "Didn't know he was still singing."

The knack gives me a father who's lost his son somewhere he can't follow and doesn't understand, and is trying very hard not to mind. It's the loudest thing in the hall that isn't Armand.

*choice
  *if (st_dominic >= 2) and not(b_dominic_music)
    #Catch Dominic's eye before he starts, and keep it.
      *set b_dominic_music true
      *set st_dominic 3
      *set s05 "fore"
      Dominic looks up at the hall, and the lights, and I feel him start to go. Not leave. Fold. The whole of him about to put the guitar down and walk off and apologise for the rest of his life.

      So I catch his eye. I'm in the front row{@ex_as = "crew"|, crouched by the lighting cable with a roll of gaffer tape,|}, and I look straight at him, and I don't look away.

      @dominic:tense He sees me. I watch him see me. And I keep looking, steady, the way you'd hold out a hand to someone on a ledge, not pulling, just there.

      @dominic:warm Something in his shoulders lets go. He looks down at the guitar. He plays the first chord.

      And he sings. Low and rough and warm and not quite steady on the first line and completely steady on the second, the song about the last bus home, with Benoît's twelve students coming in underneath him like a tide. The great hall of the Whitcomb, all that money and appetite, goes quiet. Not polite quiet. The good kind. The kind I used to watch from the lighting desk at Switchyard.

      He looks at me once, in the middle of the second verse. Just once. And the knack gives me, plain as a light in a window, the one thing it can: that he's happy. That for three minutes, in the lights, he's himself.
  #Stand with Graham. Tell him his son sounds good.
    *set fr_graham 1
    *set s05 "fore"
    I stay at the back, by the fire door, next to Graham Bell.

    Dominic sings. The song about the last bus home, low and rough and warm, with Benoît's students coming in underneath him like a tide, and the great hall goes quiet in the good way, and Graham stands beside me with his hands in his coat pockets and doesn't move at all.

    "He sounds good," I say, at the end, when everyone's clapping. "He always did. I used to do the lights at Switchyard when he played."

    @graham:sad Graham turns and looks at me properly for the first time. His eyes are wet. "Did you," he says. "Did you." He wipes his face with the back of his hand, roughly, like a man wiping a windscreen. "He won't tell me anything. His own dad. I don't know what I did."

    "You didn't do anything," I say. "I promise you that. Whatever it is, it's not you."

    @graham:warm He looks at me for a long time. Then he nods, once, and looks back at the stage, where Dominic's bowing, awkwardly, like someone who's forgotten how. "Tell him..." Graham starts. And stops. "No. I'll tell him." And for the first time tonight, he smiles.
*comment ---------------------------------------------------------------- CH11.CHOICE.01
*sid CH11.CHOICE.01
*date 2026-11-19 20:45
*place P22
After the interval the hall fills up again, louder, the wine working. I stand by a pillar and let the knack take it in, carefully, the way Ruth Carrow's notes{@trained = "florian"| say| would say}: the window, not the room.

Three things are pulling at me. Three conversations I could have tonight. The hall's too big and the night's too short; I'll only get to one of them properly.

Armand Sorrell, alone for a moment by the drowned church bell, with a grief in him too big for the room.

Felix, by the loading bay doors, not filming, with the lens cap in his teeth. He's been watching the service gate all night. He's scared.

And case nine. The brass frame that hums when I walk past it, and Basil Duret in front of it, holding forth, with Caspar at his shoulder, not saying anything, with a face.

*choice
  #Armand Sorrell. The grief in him is too big for the room.
    *set ch11_talk "armand"
    *goto armand
  #Felix. He's been filming the service gate all night, and he's scared.
    *set ch11_talk "felix"
    *goto felix
  #Basil and Caspar, and the brass frame in case nine that hums when I walk past it.
    *set ch11_talk "basil"
    *goto basil

*comment ---------------------------------------------------------------- CH11.ARMAND.01
*label armand
*sid CH11.ARMAND.01
*date 2026-11-19 21:00
*place P22
*present armand august
*set octavian_known true
*set armand_hope true
I go and stand by the drowned church bell, and Armand Sorrell turns and looks at me as if he's been waiting for me specifically.

@armand:attentive He listens with his whole face. That's the thing about him. I say something ordinary, something about the bell, and he listens to it as if it's the most interesting thing anyone's said all night, his grey eyes steady on mine, and I feel understood. Properly. The way you do about twice a year.

It's a gift. It's also a technique. The knack can tell the difference, just, the way you can tell a real fire from a very good photograph of one. Both are warm. Only one of them's burning anything.

@armand:sad He talks about Octavian. I don't ask; he just does. Twenty, and funny, and reckless, a climber. A fall at Quarry Lake, on the cliffs, in March. Alone. "Three days," Armand says. "Before they found him. Three days on the ledge. If they'd found him sooner..." He stops. He doesn't finish. The grief comes up in him like water in a lock. "Everyone told me there was nothing that could have been done. Everyone was very certain."

@armand:attentive "There are people," he says, quieter, looking not at me but at case nine, down the hall, "working on questions the rest of the world is too frightened to ask. Questions about what's possible. About what we accept because we've always accepted it." His eyes come back to mine. "I fund some of them. I think Octavian would have liked that."

@august:attentive And then August Rell is there, at his elbow, smiling, with a hand on his arm. "Armand," he says softly. "The Hendersons are leaving. You promised them five minutes." And Armand smiles at me, beautifully, and lets himself be steered away.

*choice
  #Ask him what questions.
    *set armand_hint true
    "What questions?" I say, before August can get him all the way turned. "What's possible?"

    @armand:attentive Armand stops. August's hand stays on his arm. For a moment, the grey eyes are on me again, and the listening is total, and under it, just for a second, I feel something that isn't grief. Something bright and hard and hungry. Hope, I think. The worst kind. The kind that's been starved for ten years and will eat anything.

    @armand:warm "Whether an ending has to be an ending," he says. And smiles. "Forgive me. It's late, and I'm sentimental, and I've had two glasses of something August chose." He touches my shoulder, lightly. "Thank you for listening, young man. It's rarer than you'd think."

    @august:guarded August looks at me over Armand's shoulder as they go. Just a glance. A dealer's glance, pricing something.
  #Tell him I'm sorry, and mean it, and leave it there.
    *set armand_trust true
    "I'm sorry," I say. "About Octavian. I really am."

    @armand:warm And I mean it, and he can tell I mean it. Something in his face changes: the technique drops, for a second, and what's under it is just a man in his fifties who lost his son and has been told for ten years to be over it. He puts his hand on my arm, briefly. "Thank you," he says. "Most people say it to get it said. You didn't."

    He goes with August. At the end of the hall he looks back, once, and nods to me, as if I'm someone he'll remember.
*goto ex4

*comment ---------------------------------------------------------------- CH11.FELIX.01
*label felix
*sid CH11.FELIX.01
*date 2026-11-19 21:00
*place P22
*present felix
*set e11 true
*set e11_src "felix"
*set fr_felix +1
@felix:tense Felix is by the loading bay, in the cold corridor behind the great hall where the catering crates are stacked, with the lens cap in his teeth and his fingerless gloves on, looking at the screen on the back of his camera.

"You okay?"

@felix:guarded He jumps. Then he sees it's me and does a laugh that isn't one. "Fine. Yeah. Just. It's nothing." He looks at the screen. "It's probably nothing."

"What is?"

@felix:tense He turns the camera round so I can see. It's a clip, paused: night, a service gate, a van reversing up to a loading door, two men in dark coats carrying a long crate. "The foundation's autumn gala," he says. "Last month. At the Ashcombe Conservatory, the glass place up in Briar Heights. They paid me to film the arrivals. I was getting a shot of the building from the back, the service side, for the texture, and I got this." He zooms in, with a pinch. The van's dashboard. A delivery docket, tucked under the windscreen, the writing just legible. [i]Restoration storage · Pump Nine.[/i]

"What's Pump Nine?"

@felix:tense "That's the thing," says Felix. "It's a pumping station. On the river. Old waterworks. It's been derelict since before I was born. It's got a fence round it and a sign saying DANGER." He clicks the clip back and plays it again: the van, the crate, the men. "Why would you store restoration stuff in a derelict pumping station? From a charity gala? At midnight?" He shakes his head. "It's nothing. It's probably nothing. I've checked it three times."

"Checked it how?"

@felix:scared He looks at me, and I feel it: the nervousness, quick and bright like a bird on a feeder, and under it, steady, something stubborn that won't let go of a thing once it's noticed it. "I went and looked," he says. "At the fence. Twice. There's a new padlock. There's tyre tracks. There's a light on inside, some nights." He laughs again. "I'm being mental. Aren't I."

*choice
  #Ask for a copy of the clip. Promise to be careful with it.
    *set e11_copy true
    "Can I have a copy?" I say. "Of the clip. I'll be careful with it. I promise."

    @felix:surprised He looks at me for a long moment. "Why?"

    "Because you're not being mental. And because if it's nothing, it's nothing, and if it's something, two people should have it."

    @felix:warm He thinks about it. Then he plugs a cable into his camera and my phone, right there by the catering crates, and copies it across, and while it's copying he says, not looking at me: "Thanks. For not saying I'm being mental." He unplugs it. "Everyone else would've."
  #Tell him to stop checking. Tell him why.
    *set warned_felix true
    *set fr_felix +1
    "Stop checking," I say.

    @felix:surprised He looks at me, startled.

    "I mean it. Stop going to the fence. There are people going missing in this city, Felix. Ordinary people. Men nobody looks for very hard. A courier in August. A bus mechanic in October." I don't tell him everything. I can't. But I tell him enough: vans, and cars with tinted windows, and men who clock off and don't come home. "Whatever's at Pump Nine, if it's anything, you don't want to be the person who noticed."

    @felix:scared He's gone very pale under the bleached hair. "Okay," he says. "Okay." He puts the lens cap back on the camera, carefully, as if it matters. "Okay. I'll stop."

    The knack gives me the bird on the feeder, and the stubborn thing under it, and the stubborn thing doesn't go anywhere at all. He's going to keep looking. I know it the way I know my own hands. He's a person with his own eyes, and he's going to use them.

    @felix:small "If I do find anything," he says, at the door, not quite looking at me. "Who do I call?"

    I give him my number. He puts it in his phone, under [i]EXITS[/i].
*goto ex4

*comment ---------------------------------------------------------------- CH11.BASIL.01
*label basil
*sid CH11.BASIL.01
*date 2026-11-19 21:00
*place P22
*present basil caspar
*set e10 true
*set e10_src "caspar"
*set frame_seen true
Case nine.

The frame's about the size of a window: brass, heavy, dark with age, with a pattern worked into it all the way round that looks decorative until you look at it for more than a minute, and then looks like writing. It's empty. It stands on its own feet in a glass case, lit from below, and it hums. Under my breastbone, steady, like a phone vibrating in another room.

The card says: [i]Brass frame, anonymous. Nineteenth century. Lent by Rell & Company.[/i]

@basil:neutral "What you have to understand," Basil Duret is saying to a small circle of donors, in his lecturer's voice, "is that this is a threshold object. The Victorians were obsessed with thresholds. Doors. Windows. Frames. The liminal. This frame, I'd suggest, was never meant to hold a picture at all. It was meant to hold a [i]boundary[/i]." He smiles. "Isn't that marvellous?"

It's marvellous. It's also completely made up. He's elaborating fluently, and the fluency is the tell: he doesn't know a single thing about it. The knack gives me Basil like a room with every light on and nobody home.

@caspar:guarded Caspar, at his shoulder, in black, with a torch in his back pocket, waits for Basil to take the donors off to look at the wedding dress. Then he steps up next to me and says, very quietly, without moving his lips much: "It's not nineteenth-century."

"What?"

@caspar:tense "The wards on it." He nods at the pattern, the writing that isn't decoration. "I prepped it for display. Checked it before it went in the case, because Chukwudi always says check anything Rell sends. They're not old. They're [i]recent[/i]. Ten years, at most. And they're not dealer work, or spell-worker work." He glances round. "They're warden work. Mercy House patterns. I'd know them anywhere; I've spent three years rigging around them."

The hum under my breastbone gets louder.

*choice
  #Ask Caspar where Rell got it.
    *set fr_caspar +1
    *set rell_lead true
    "Where did Rell get it?" I ask.

    @caspar:guarded Caspar looks at me sideways. "That," he says, "is a very good question, and nobody's going to answer it." He takes his torch out and turns it over in his hands. "The loan paperwork says [i]private collection[/i]. The provenance says [i]anonymous[/i]. August Rell brought it in himself, in a crate, on a Tuesday, and stood over me while I checked it, and didn't blink once." He puts the torch back. "Chukwudi says Rell & Company will sell anything to anyone as long as the story's good enough. I think someone gave August Rell a very good story about this."

    "Or August Rell gave one to them."

    @caspar:amused Caspar looks at me for a long moment. "Lighting boy," he says, "you're wasted on lighting."
  #Reach. Just for a second.
    *set reached +1
    *set strain +1
    *set knack +2
    *set frame_echo true
    When Caspar's gone back up to the gallery, I put my palm flat on the glass of case nine. Just the glass. And reach. Just for a second.

    It comes up like cold water through a floor.

    A room. Seven years ago. White, clinical, lamps. A young woman on a bed, gasping, the breath rattling in her like wind in a letterbox, her hand in someone else's hand, and something running between them, through the brass, through the frame, thick, and then thin, and then [i]thinner[/i].

    And a voice. A woman's voice, tired and dry and frightened, from the corner of the room, saying, over and over, "It's straining. Stop. It's straining. Stop. [i]Stop.[/i]"

    I know that voice. I've never heard it. I know it anyway. I've{@ch10_way = "records"| read it, in small quick slanted handwriting, in a box in the archive| heard Malcolm Tait tell it, at a kitchen table, with the rain coming in}. [i]Tell them it's straining. Tell them to stop.[/i]

    Ruth Carrow.

    I take my hand off the glass. My heart's going like a drum. Around me the donors drift and laugh and eat tiny pastries. Nobody's noticed anything.

    This is it. This is the old program's frame. The thing they linked people through, seven years ago, when a young warden called Kit Maddox nearly died on the other end of it. It's in a glass case in the Whitcomb with a card that says [i]nineteenth century[/i], lent by August Rell, in an exhibition paid for by the Sorrell Foundation.

    Someone took it out of Mercy House's closed stores. Someone sold it. Someone's put it on display, in the middle of the city, under the lights, as if it were nothing.
*goto ex4

*comment ---------------------------------------------------------------- CH11.EXHIBIT.04
*label ex4
*sid CH11.EXHIBIT.04
*date 2026-11-19 22:15
*place P22
*present ellis emmett
At quarter past ten I find Ellis in the student room.

It's a smaller gallery off the main hall, lined with work by the university's restoration students, and his piece is by the far wall: a panel, a painted door from an old house in Southmere, that he spent the whole summer bringing back. It's beautiful. It glows. There's a little card with his name on it.
*if ex_as = "guest"
  I've been by it on and off all night, the way he asked, standing next to him while people said things. He was perfect for every one of them.
But in the next case along, the heat from the gallery lights has got into something.

It's an old warded piece, a little glass lantern with a brass cage round it, lent by some college, and it's restless. The glass is rattling in its frame, very faintly, like teeth. There's a smell in the air of hot metal, like a kettle boiled dry. And two donors in evening dress have stopped in front of it and are frowning and saying [i]is that meant to do that?[/i]

@ellis:tense Ellis appears at my elbow with a glass of wine he hasn't drunk. His face is doing the performance, perfectly, for the room. His voice isn't. "It's the lights," he says, very low. "The heat's woken the ward. I can settle it. But I need a few minutes, with my back to the room, with my hands on the case." He smiles at a passing lecturer. "And I can't be seen doing it. Not here. Not in front of Basil's donors. Not in front of [i]anyone[/i]."

*choice
  *if (st_ellis >= 3) and not(b_ellis_danger)
    #Hold the room. Talk loudly about ceramics until he's done.
      *set b_ellis_danger true
      *set st_ellis 4
      *set people +2
      "Go," I say. "I've got them."

      And I turn to the two donors, and the three more who've stopped behind them, and I start talking. Loudly. About ceramics.

      I know nothing about ceramics. I know what Clive Merritt said at his wheel an hour ago, which is that you [i]want[/i] it to crack, that's where the gold goes, and I say that, with enormous confidence, and then I keep going. I talk about glazes. I talk about kilns. I invent a technique. I steer them, bodily, with an arm and a smile and the voice I use at Switchyard to get drunk people off the stage, three paces left, away from the lantern, towards a case of teapots, and I do not stop talking for four minutes.

      Behind me, with his back to the room, Ellis puts his hands flat on the glass case and bows his head, as if he's looking closely at the label, and I feel him work: the ropes and nerves behind the curtain, all pulled tight, and something coming off him like a low note, and the rattle in the glass going down, and down, and still.

      @ellis:tired At four minutes and twenty seconds he appears at my shoulder and says, perfectly, to the donors, "I'm so sorry, I have to steal him," and steals me, into a corridor, and leans against the wall, and closes his eyes.

      @ellis:small "Ceramics," he says. "You don't know anything about ceramics."

      "Nothing."

      @ellis:warm "You were magnificent," says Ellis. "It was the worst thing I've ever heard." And he laughs, shakily, with his eyes still closed.
  #Get Emmett to move the donors on.
    *set fr_emmett +1
    I find Emmett on the door of the student room, in his too-big blazer.

    "The lantern in the case by the far wall," I say, low. "It's playing up. Ellis can sort it, but he needs the room empty for five minutes."

    @emmett:tense Emmett looks past me at the lantern, at the rattling glass, and his face goes from wall to warden in about a second: the steady trained attention, focused. "Right," he says. "Fire door alarm test. Very sorry, ladies and gentlemen. Just a few minutes. Through to the main hall, please." And he moves the donors on, politely, with his arms spread, like someone herding very expensive geese.

    Ellis settles it with his back to the empty room. It takes him four minutes. When he's done, he nods to Emmett across the gallery, once, and Emmett nods back, and I realise they know each other, the way everyone on the Hill who does this kind of thing seems to know each other, quietly, like members of a club with no name.
*comment ---------------------------------------------------------------- CH11.EXHIBIT.05
*sid CH11.EXHIBIT.05
*date 2026-11-19 23:30
*place P22
*present ellis basil
*set s03 "fore"
At half past eleven, Basil makes the closing thanks.

@basil:amused He thanks the Sorrell Foundation, at length. He thanks the Whitcomb, and the lenders, and August Rell, by name, for his extraordinary generosity. And then he says, warmly, that the exhibition's great discovery, the thing the papers will write about, that the Guildhall murals in Old Ward were painted over an earlier map of the city, was made by "my research team", and he raises his glass to the room.

It was Ellis. I know it was Ellis. He spent two summers on scaffolding in the Guildhall with a lamp and a scalpel, and he told me about it{@b_ellis_offstage| over cereal and complaint|, once, briefly, as if it were nothing}.

@ellis:neutral Ellis, at the side of the room, smiles perfectly. He raises his glass. He applauds, at exactly the right volume. Every person in the room who looks at him sees a gracious young man delighted for his supervisor.

Outside, on the museum steps, in the cold, between the stone lions, he stops.

He just stops. On the fourth step down. With his coat over his arm. And stands there, in the dark, with the city in front of him, and the performance goes out of him all at once, like a light switched off, and what's underneath is shaking.

*choice
  *if b_ellis_danger and (hurt_ellis < 2)
    #Stay. Don't fix it. Let him be angry and uncertain in front of me.
      *set b_ellis_badday true
      *set st_ellis 5
      I don't fix it.

      I don't tell him Basil's a fraud, or that he should fight it, or that it'll be all right. I sit down on the fourth step, in the cold, and I wait.

      @ellis:angry "Two [i]summers[/i]," he says, eventually. To the city. "Two summers. On a scaffold. With a scalpel. I found it. I found the first line of the map under the paint with a ten-times loupe at six o'clock in the morning and I nearly fell off the scaffold." His voice cracks. "And he said [i]my research team[/i]. As if I'm a [i]team[/i]. As if I'm furniture."

      @ellis:hurt "And I smiled," he says. "I smiled and I clapped. Because that's what I do. That's all I do. I stand in rooms and I'm charming, and I'm good at things, and I'm very, very careful, and it doesn't [i]matter[/i]. None of it matters, if you can just say [i]my team[/i] and take it." He sits down on the step beside me, not gracefully. "I don't know if I'm any good. Do you know that? I don't actually know. I've never not known before."

      He's angry, and he's frightened, and he's not performing any of it. He's letting me see him uncertain. On a bad day. On the museum steps, in the cold, at half eleven at night, in a borrowed coat.

      And he's letting me stay.

      I don't say anything clever. I say, "I'm here," and I stay, and after a while he leans, very slightly, against my shoulder, and I let him, and neither of us says what it means, because we both know, and it's enough to know, for tonight.

      @ellis:warm "You didn't fix it," he says, much later. Very quietly.

      "No."

      @ellis:warm "Thank you," says Ellis Okafor. "Everyone always fixes it."
  #Tell him to go after Basil, officially. He deserves the credit.
    *set ellis_fights true
    "Go after him," I say. "Officially. Write to the Whitcomb. Write to the papers. You've got the scaffold notes, the dates, the photographs. It's yours. Make them say so."

    @ellis:tense He looks at me. "He's my supervisor. He writes my references. He's on the panel for the placement."

    "Then he'd better get it right."

    @ellis:guarded He's quiet for a long time. Then something in his jaw sets, very slightly, and he puts his coat on properly, and does up the buttons, one by one, all the way to the top. "The catalogue goes to print in January," he says. "There's an errata process." He looks at me. "I'll need the photographs with the dates showing."

    "You've got them."

    @ellis:small "I've got them," says Ellis, as if he's only just realised it.
  #Walk him to the bus. Some nights you just walk someone to the bus.
    *set people +1
    I don't say anything. I just go down the steps and stand next to him, and when he starts walking, I walk too.

    We walk down the Hill to the bus stop without talking. The city's lit up below us. At the stop he stands with his coat over his arm, not putting it on, and I take it off his arm and hold it out, and he puts it on, like a child, one arm and then the other.

    @ellis:small "Thank you," he says, at the bus. It's all he says. And he gets on, and sits at the back, and doesn't wave, and I stand at the stop until the bus has gone round the corner.
*comment ---------------------------------------------------------------- CH11.END.01
*sid CH11.END.01
*date 2026-11-20 00:40
*place P18
*mood neon
Twenty to one, the Truss Road Diner, and a slice of apple pie I'm not really eating. The jukebox plays something from before I was born. I've got the napkin dispenser, a biro, and the back of a paper placemat.

I write it down. Everyone from tonight.

A grieving father with a foundation, who hopes for something he won't name{@armand_hint|: [i]whether an ending has to be an ending[/i]|}. And the dealer at his elbow, managing him.{@august_watched| Watching a brass frame like a man checking his watch.|}

A ceramicist who made everyone laugh.

A filmmaker who noticed something{@e11|: a van, a crate, a docket on a dashboard. [i]Pump Nine.[/i]|, and who's scared, and won't say of what}.

A brass frame in case nine that hums, with warden wards on it ten years old at most, and a card that says [i]nineteenth century[/i].{@frame_echo| And a woman's voice inside it, seven years ago, saying [i]stop, it's straining, stop[/i].|}

None of it proves anything. I know that. It's a placemat in a diner. It's a list of people at a party.

But I take out my phone and photograph the placemat, and when I get home I pin it to my bedroom wall, next to the sheet of Martin's proof paper with the four names on it, and the two lines going off the edge.

It all goes on the board.

*journal [b]Chapter 11.[/b] The Material City opened at the Whitcomb, paid for by the Sorrell Foundation. Armand Sorrell's son Octavian died at Quarry Lake ten years ago this March; August Rell of Rell & Company never leaves his side.{@b_dominic_music and (ex_as = "performer")| Dominic sang in public for the first time since he was turned.| Dominic sang, with Benoît's ensemble.}{@e11| Felix filmed a van at the foundation's autumn gala with a docket for "restoration storage, Pump Nine".|}{@e10| The brass frame in case nine, lent by Rell & Company, carries recent warden wards: it may be the old program's frame.|}{@b_ellis_badday| On the museum steps, Ellis let me see him on a bad day, and I stayed.|}
*page_break
*goto_scene ch12
`);
