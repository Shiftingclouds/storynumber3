NB.scene("ch04", String.raw`
*mood night
*set ch 4
*chapter 4 People Who Know
*comment ---------------------------------------------------------------- CH04.CHOICE.01
*sid CH04.CHOICE.01
*date 2026-09-01 20:00
*place P02
Eight o'clock on a Tuesday night, and I can't sit still.

I've tidied my room. I've never tidied my room. I've read Mum's seven emails again. I've drawn the tin charm four times. Martin's downstairs watching a quiz show with the sound too loud, the way he does when he doesn't want to hear himself think, and Will's at a friend's, and the whole building ticks and settles around me like it's waiting for me to do something.

*choice
  #Go back to the lane. Whatever happened there left something behind.
    *set ch04_first "mercy"
    *goto mercy
  *if (ch03_way = "wait") or (ch03_way = "together")
    #Answer Quentin's text. Meet the brother.
      *set ch04_first "regent"
      [i]ok,[/i] I text back. [i]I'm at the print shop on Latch Lane. I'll be up.[/i]

      [i]sorry in advance,[/i] he replies. [i]really.[/i]
      *goto regent
  *if ch03_way = "alone"
    #Stay in. Try to sleep. Pretend this is a normal week.
      *set ch04_first "regent"
      I go to bed at ten, which I haven't done since I was twelve. I lie there with the light off and the window open and my heart going like I've run up the stairs.

      At eleven o'clock, somebody rings the shop bell.
      *goto regent

*comment ---------------------------------------------------------------- CH04.MERCY.01
*label mercy
*sid CH04.MERCY.01
*date 2026-09-01 22:30
*place P13 switchyard_lane
*present adrian reuben
*set st_adrian 1
*set st_reuben 1
*set know_super true
The lane at half ten on a Tuesday is dark and empty, Switchyard shut, the caged lamp over the loading door switched off. I come in from the Arden Street end, under the orange streetlamp, with my hands in my pockets and no idea what I'm expecting.

It isn't this.

There are two men by the bins, where Quentin fell. One of them is holding a lamp, a heavy old brass thing like something off a boat, and it's burning a colour that lamps don't burn. Not white, not yellow. A pale, clean, greenish silver, like moonlight in a glass. Where its light touches the wall, the bricks show something I can't quite see: a stain, a smear, a shape, like the ghost of a handprint on a window you've breathed on.
*meet adrian
*portrait adrian neutral
The one holding the lamp turns round.

He's about my age. Compact, square-shouldered, in a dark jacket with a high collar zipped to the chin and a small brass pin on it. Short brown curls, olive skin, straight brows, the left one a touch higher than the right, as if he's permanently about to be sceptical. He looks at me the way a teacher looks at a student who's walked into the wrong exam.

"This is a closed scene," he says. It's a voice that expects to be obeyed and is used to it. "You need to leave."

The knack gives me him: very orderly, very controlled, everything in its box, and all of it running hot underneath, like an engine at idle. Professional. And somewhere in the back of the engine, a small, careful worry he'd die before admitting.
*meet reuben
*portrait reuben neutral
The other man stands up from where he's been crouching by the wall. He's bigger. Much bigger: broad and heavy-shouldered, a few years older, with short chestnut hair that looks like he cuts it himself with the kitchen scissors, and tired eyes under low brows. He doesn't say anything. He looks at my eyes, one then the other, the way paramedics look at you after a fall.

With him the knack goes quiet and warm, like a room with the heating on low. Calm. So calm I actually feel myself breathe out.

"You were here," the big one says. Not a question. "Saturday."

"How do you know that?"

"Because you came back," he says, gently. "People who were here come back."

*choice
  #Tell them exactly what I saw. All of it, except the part I felt.
    *set st_reuben +1
    I tell them. The Last Set, load-out, the lane, the man in the service jacket, the fall, the van with the lily. I don't tell them about the pulse, or the rope, or anything that would make me sound like I need a lie down.

    The one with the lamp writes it in a notebook in small, square handwriting. The big one listens with his head a little on one side.

    "That's a very clear account," he says, when I've finished. "Thank you."

    "You're not going to tell me I imagined it."

    "No," he says. "Whatever did this burned through that wall like a match through paper." He nods at the silver stain on the bricks. "You didn't imagine anything."
  #Tell them what I saw, and that I felt him die. And felt something catch him.
    *set gift_mercy true
    *set gift_adrian true
    *set gift_reuben true
    *set st_reuben +1
    I tell them everything. The Last Set, the lane, the man, the fall, the van. And then, because it's dark, and they're strangers, and the lamp is burning a colour lamps don't burn and none of this is real anyway, I tell them the rest. The pulse. Doubled. The rope pulled tight out of him to somewhere far away. The feeling of something keeping hold of him after he died.

    There's a silence.

    The one with the lamp has stopped writing. The big one's looking at me in a new way, not doubtful, but very focused, the way you'd look at a patient who's just described a symptom you've only read about in books.

    "You felt it," he says. "Not saw. [i]Felt.[/i]"

    "Yeah."

    "Has that happened before? Feeling things?"

    "All my life."

    The one with the lamp and the big one exchange a look that the knack can't give me, because it's between them, not about me, but I feel both of them go very alert, very quiet, like animals that have heard something in the grass.

    "Right," says the one with the lamp, eventually, in a tone that suggests I've just made his night considerably more complicated. "Right. You're coming with us."
  #Say I dropped an earring here on Saturday. Watch the one with the lamp not believe me.
    *set hurt_adrian 1
    "I lost an earring," I say. "Saturday. After the show."

    The one with the lamp looks at my ears. I haven't got any holes in them. He looks back at my face, and the orderly engine in him runs a little hotter, and the knack gives me something sharp and cold: he's offended. Not by the lie. By how bad it is.

    "An earring," he says.

    "It was a nice earring."

    "Of course it was." He writes something in a notebook. I have a horrible feeling it's my description. The big one hides a smile behind his hand, very badly.

    "Come on," the big one says. "Earring or no earring. You look like you haven't eaten since Saturday. There's toast."
  *if cuff_button
    #Show them the brass button I tore off his sleeve.
      *set button_shown true
      I take the button out of my pocket and hold it out on my palm. Brass, heavy, old, the little building with the cross over its door.

      The one with the lamp goes white. Actually white, under the olive, like someone's pulled a plug. The knack gives it to me like a door slamming: shock, and then, fast behind it, suspicion, turned in two directions at once. At the button. And at me.

      He takes it from my hand without asking and turns it over in the lamplight. "Where did you get this?"

      "Off his sleeve. The man. I pulled it off."

      "This is ours," he says, very quietly, and the big one goes still. "This is Mercy House issue. The old pattern. We haven't used these in years."

      He puts it in his own pocket. I don't say anything. I don't think he'd give it back if I did.
*page_break
*comment ---------------------------------------------------------------- CH04.MERCY.02
*sid CH04.MERCY.02
*date 2026-09-01 23:40
*place P01 mercy_house
*present adrian reuben victor orrell
*set know_wardens true
*set know_vampires true
*set know_wolves true
*set know_spell true
*set know_marches true
*set fr_victor 1
Mercy House is the old hospital on the hill above the river, the big red-brick one with the clock tower that stopped in the nineties and the sign over the door that everyone in Calder has walked past a thousand times without reading. It closed as a hospital before I was born. I thought it was flats now. It isn't flats.

It's a sort of barracks, a sort of house, a sort of office. There are people in the corridors at midnight in dressing gowns and in jackets like the one with the lamp's. There's a training room with mats on the floor. There's an infirmary that smells of antiseptic and toast. And there's a kitchen, a big old hospital kitchen with steel counters and a table that could seat twenty, which I find out later has not been closed, not for one single hour, in forty years.

They sit me at the table and the big one makes toast. His name's Reuben. The one with the lamp is Adrian. They're wardens, Adrian says, and says it the way someone might say [i]doctors[/i] or [i]firefighters[/i], as if it's a thing everybody knows and I'm the odd one out for not knowing it.
*meet victor
At the other end of the table there's an older man with Adrian's curls and Adrian's face grown longer and more tired, and a brace on his left forearm, who's clearly been holding court to three younger wardens with a story that's getting better every time he tells it. When he sees Adrian come in with me, he stops mid-sentence and grins.

"Adie's brought home a stray," he says. "Victor Keene. The better-looking brother." He looks me over, charming as anything, and the knack gives me him like a stage with the lights on: bright, warm, performing, and somewhere behind the scenery a room with the lights off that nobody's allowed into.

"He's a witness," says Adrian, through his teeth.

"They're always a witness," says Victor, delightedly.
*meet orrell
A man passes through the kitchen: fifties, grey crew cut, a heavy brow, a stillness about him like the stillness of a deep pond. Everyone at the table sits up a little. He takes an apple from the bowl, listens for about a minute to Adrian explaining me in a low voice, says nothing whatsoever, and leaves. Commander Orrell, Reuben says afterwards, as if that explains it. The knack couldn't give me anything from him at all. It was like listening at a wall.

And then they tell me.

It takes about an hour and four slices of toast, and I spend most of it trying to work out whether this is an elaborate joke.

It's not a joke.

There are other people in Calder. Not other people: [i]more[/i] people. People with needs and rules and histories nobody writes down. There are vampires, a whole building of them, in the old Regent cinema, who get blood by arrangement and keep night hours and pay council tax. There are families in Eastbank who change on full-moon nights, whole families, grandparents and kids, who've been there for generations and run half the businesses on the high street. There are spell-workers up on University Hill who do things with objects and wards and old paint that the university doesn't officially know about. And there's another country, the Marches, that you can get to through certain doors, if the right person opens them for you.

And there are the wardens. Mercy House. Not police. Not quite anything. The people who keep it all from going wrong, who clean up when it does, and who make sure the rest of the city goes on not noticing.

"We keep the peace," says Adrian. "Between everyone. That's the job."

"So what happened to Quentin?"

"That's what we're trying to find out." He puts his hands flat on the table. "And the first thing we need to do is make sure no one else gets hurt. Which means you go home, and we have your statement on file, and if we need you, we'll call you." He says it kindly enough. The knack says he means it. The knack also says he's already, in his head, put me in a car home and a folder in a drawer.

*choice
  #Disagree with him, to his face, and give my reasons. Calmly. Honestly.
    *set b_adrian_disagree true
    *set st_adrian 2
    *set nerve +2
    "No," I say.

    The whole table goes quiet. Victor raises his eyebrows with enormous interest.

    "I watched him die," I say. "I'm the only one who did, who isn't in a van. I've seen him since. I know his face, I know his brother's got a text in my phone, I know what the lane felt like. You put me in a drawer, you lose all of that. I'm not trying to be brave. I'm trying to be useful. Let me be useful."

    Adrian looks at me for a long moment. The engine in him runs hot, and then, weirdly, it settles, like something that's been waiting to be argued with and is relieved to be.

    "That," he says finally, "is actually a reasonable point." He sounds as though it pains him. Victor laughs out loud.

    "I like him," says Victor. "Keep him."

    "He's not a dog, Vic."

    "He's a better arguer than you, Adie." And Adrian's ears go red.
  #Let him handle it. He clearly knows what he's doing.
    *set st_adrian 2
    "Okay," I say. "You know what you're doing. I don't."

    Something in him eases, the tight engine throttling back. "Thank you," he says, and it sounds like he means that too. "Honestly. Most people argue."

    "You get a lot of people?"

    "Not like this." He looks at me across the table, and for a second the professional shutter isn't quite down. "Not like this."
  #Ask Reuben what he actually thinks happened to Quentin.
    *set st_reuben +1
    *set people +2
    I look past Adrian at Reuben, who's leaning on the counter with his arms folded and hasn't said a word for twenty minutes.

    "What do you think happened to him?" I say. "Not the official version. You."

    Reuben looks at Adrian, as if asking permission. Adrian doesn't give it, but doesn't stop him either.

    "I think," Reuben says slowly, "that somebody brought him back. And I think it cost something. And I don't think whoever paid is the one who chose to." He rubs his eyes. "I've seen a lot of things come back wrong. This doesn't feel like any of them."

    The knack gives me him: calm on top and deep, deep down, a sort of grief, old and quiet, like water under a floor.
*page_break
*comment ---------------------------------------------------------------- CH04.MERCY.03
*sid CH04.MERCY.03
*date 2026-09-02 21:30
*place P14 regent
*present adrian reuben gideon dominic lucien
*set st_dominic 1
*set fr_gideon 1
*set fr_lucien 1
*set know_dominic_vamp true
*set misread_gideon true
Wednesday night, the Regent.

Mercy House's working theory, by Wednesday, is that somebody turned Quentin into a vampire and made a mess of it. It's the explanation that fits the most things, Adrian says, and Adrian likes an explanation that fits things. And Quentin's older brother is a vampire, and lives at the Regent. So Adrian and Reuben go to ask, and after a short argument that I win, I go too.

The Regent is the old art-deco cinema on Tanner Street with the marquee that still lights up, cream stone and teal trim and LATE SHOW in black letters on the white. I've been to see films there. I never once wondered where the flats above were.
*meet lucien
We're met in the lobby by a man who looks about thirty-six and is, Reuben tells me afterwards, eighty-three. Fine bones, dark eyes, silver in his dark hair, a cardigan from about 1974. Lucien Arnaud. He shakes all our hands and sets the rules for the conversation like a host laying out the good china: we'll speak in the old projection room; no one raises their voice; the residents' business stays the residents' business. The knack gives me him and there's almost nothing to give. Stillness. Great age. A pond with a very, very deep bottom.
*meet gideon
*portrait gideon neutral
Quentin's brother is waiting in the projection room. He's Quentin made harder: the same strong brows, the same deep warm-brown skin, but his hair cropped close, his face all edges, a long dark coat he doesn't take off. He stands when we come in, and doesn't sit back down.

"You were in the lane," he says to me, not to the wardens. "You saw it. Tell me."

It's an order. Everything he says sounds like one. And the knack gives me what's under it, and it's guilt. Thick and black and coiled, like smoke in a closed room. Guilt so heavy it's hard to breathe near him.
*meet dominic
*portrait dominic neutral
And in the corner, in an old armchair with the stuffing coming out, with his hands in the sleeves of a jumper that's older than he is, there's someone I know.

Dominic Bell. Big, soft-cheeked, thick dark hair falling in his eyes. He used to play Switchyard, him and a guitar, every few weeks, and the whole room would go quiet for him, even the bar. He had this voice, low and rough and warm, that made you feel like he was singing to you personally, even from the back. And then last summer he just stopped. No more gigs. His socials went dark. Everyone wondered.

He's a vampire. It's obvious, now I know what I'm looking for: the stillness, the pallor under the warmth, the way the light from the projector seems to slide off him. He looks up and sees me looking, and does a small, rueful smile, like someone caught out in a lie that wasn't really his fault.

"The popcorn machine in the lobby," he says to the room at large, into a silence you could have cut with a knife, "is older than Lucien. And it still works better than any of us." Reuben laughs. Even Adrian's mouth twitches. The room lets its breath out.

*choice
  #"You stopped playing. We all wondered." Talk to Dominic like it's a year ago.
    *set b_dominic_normal true
    *set st_dominic 2
    While Adrian's taking Gideon through it, I go over and sit on the arm of the other chair.

    "You stopped playing Switchyard," I say. "We all wondered. Des thought you'd moved away. Nolan thought you'd got signed."

    He looks at me in surprise, as though he'd expected anything but that. Then he laughs, low and rough, the laugh from the stage.

    "Signed," he says. "God. I wish." He turns his hands over in his lap, looks at them. "Last August. I got turned, sort of by accident, and I didn't... I couldn't face going back. Not like this. Standing in the lights." He shrugs. "Stupid."

    "It's not stupid."

    "It's a bit stupid." But the knack gives him to me, and under the vampire stillness there's something that's just a lonely twenty-two-year-old who misses the sound of a room going quiet for him. It warms, a little, while we talk. Not much. Enough.
  #Watch Gideon. The knack says he's guilty of something.
    *set suspect_gideon true
    I don't sit down. I stand by the projector and watch Quentin's brother answer Adrian's questions in short, hard sentences, like somebody giving directions.

    The guilt comes off him in waves. Every time Quentin's name comes up it gets thicker. He's done something. I'm sure of it. I've never felt guilt that heavy from anyone, not even from Martin looking at the red-striped envelope.

    He looks up and catches me watching, and for a second his face shows nothing at all, a wall, and then he looks away.
Gideon's account is short. His brother died, and then came home in a car from a clinic nobody's heard of, and he's alive, but not the way vampires are alive. "I would know," Gideon says, flatly. "I know what it is. That isn't it."

Adrian writes it down. Reuben looks at Gideon with more sympathy than his partner, and says, "Can we see him? Your brother? Together, somewhere neutral?"

Gideon's jaw works. "Thursday," he says. "The diner on Truss Road. He won't come here." And then, like an order: "Don't hurt him."
*goto diner

*comment ---------------------------------------------------------------- CH04.REGENT.01
*label regent
*sid CH04.REGENT.01
*date 2026-09-01 23:00
*place P02 print_shop
*present gideon dominic
*set st_dominic 1
*set fr_gideon 1
*set misread_gideon true
*meet gideon
*portrait gideon neutral
When I open the shop door, there's a man on the step.

He's Quentin made harder. The same strong brows, the same deep warm-brown skin, but his hair cropped close and his face all edges, and a long dark coat that doesn't move in the wind. He looks at me without blinking. He doesn't blink at all, the whole time.

"You were in the lane," he says. "Come with me."

It's not a request. And the knack gives me what's under it, and it's guilt. Black and thick and coiled, like smoke in a shut room. So much guilt I take a step back.
*meet dominic
*portrait dominic neutral
Behind him on the pavement there's somebody else, with his hands in the pockets of an old jumper. Big, soft-cheeked, dark hair falling forward into his eyes, and it takes me a second, because the last time I saw him he was on a stage.

Dominic Bell. He used to play Switchyard. Him and a guitar, every few weeks, and a voice that made the bar go quiet. Then last summer he stopped, and nobody knew why.

He sees me recognise him and does a small, rueful smile. "He means please," he says.

*choice
  #Go with them.
    *set nerve +2
    I look at the guilt coming off Quentin's brother like smoke, and I look at Dominic's rueful face, and I think about the rope running out of Quentin's chest.

    "Let me get my coat," I say.

    Upstairs, Martin's quiz show is still going. I leave a note on the kitchen table: [i]gone to Nolan's, back late, don't wait up[/i]. I've never lied to him in writing before.
  #"Say it here. On the step. Where Martin can hear me shout."
    *set people +1
    "Say it here," I say. "On the step. Where my uncle can hear me shout."

    Quentin's brother looks at me for a long moment, and then, unexpectedly, something in the edges of his face gives, very slightly. "Fair," he says. It's exactly what Quentin said, in exactly the same voice, and it knocks the breath out of me.

    Dominic sits down on the step beside me with his hands in his sleeves. "This is going to take a while," he says. "And there's a bit where you'll want to sit down anyway." And they tell me, there, on the step: the short version, which takes an hour. Then Dominic says, "Come and see. It'll make more sense if you see it," and by then I'd follow them anywhere.
*page_break
*comment ---------------------------------------------------------------- CH04.REGENT.02
*sid CH04.REGENT.02
*date 2026-09-02 00:30
*place P14 regent
*present gideon dominic lucien rafi
*set know_super true
*set know_vampires true
*set know_wardens true
*set know_wolves true
*set know_spell true
*set know_marches true
*set know_dominic_vamp true
*set fr_lucien 1
*set fr_rafi 1
The Regent is the old art-deco cinema on Tanner Street, cream stone and teal trim, the marquee still lit at half twelve at night with LATE SHOW in black letters, though there's nobody queueing. I've been to see films here. I never once wondered who lived in the flats above.

Vampires. That's who.

In the auditorium a film's running for nobody: black and white, somebody in a hat, the sound turned right down. In the lobby, a young man in blue nurse's scrubs is sitting on the stairs eating a bowl of cereal with a parka on over the top.
*meet rafi
"Rafi," he says, with his mouth full, and waves the spoon. "Night shift at the General in an hour. Don't mind me. Is this the witness? He looks terrified. Hi, witness. Have a Coco Pop."
*meet lucien
And then a man comes down the stairs who looks about thirty-six and has the stillness of a very old tree, dark-eyed, silver in his dark hair, a cardigan from the seventies. Lucien Arnaud. He shakes my hand with great courtesy and his hand is cool and dry, and the knack gives me almost nothing at all. A deep, deep pond. He sits me in the old projection room with the projector ticking and explains it to me, while Gideon stands at the window and Dominic sits in a broken armchair, the way you'd explain the rules of a house to a new lodger.

Vampires: turned, not born. Nights, not days; the sun is a real and serious problem. Blood by arrangement, never taken, through the Regent's own careful systems. And the rest of it, the city under the city: the families in Eastbank who change at the full moon; the spell-workers on University Hill; the Marches, another country you can reach through certain doors; and the wardens of Mercy House, up on the hill, who watch all of them, and keep the peace, and would very much like to know where I've been all their lives.

It's a lot. I sit there with my hands round a mug of tea Rafi's brought me and let it go through me like weather.

And then Gideon turns from the window and says the real thing.

"My brother came back wrong. It isn't this." He gestures, a small, flat movement, at himself, at Dominic, at Lucien, at the building. "I know what this is. I'd know. That isn't it."

*choice
  #"You stopped playing. We all wondered." Talk to Dominic like it's a year ago.
    *set b_dominic_normal true
    *set st_dominic 2
    Later, when Lucien's gone to see to something and Gideon's on his phone at the window, I find myself sitting on the arm of Dominic's chair.

    "You stopped playing Switchyard," I say. "We all wondered. Des thought you'd moved away. Nolan swore you'd got signed."

    He looks at me in surprise, as though he'd been ready for anything but that. Then he laughs, low and rough, the laugh from the stage.

    "Signed," he says. "God. I wish." He turns his hands over in his lap and looks at them. "Last August. I got turned. Sort of by accident. And I couldn't face going back. Not like this. Standing in the lights."

    "People would have come."

    "People would have [i]stared[/i]." But the knack gives him to me, and under the stillness there's someone who misses a room going quiet for him so much it aches. It warms a little while we talk. Not much. Enough.
  #Tell Dominic about the knack. He's the only person here who looks as out of place as I do.
    *set gift_dominic true
    *set st_dominic +1
    I don't know why I tell him. Maybe because he's sitting in that broken armchair like someone who's also just found out the world has more rooms in it than he thought. Maybe because he used to sing like that.

    "I felt it," I say, quietly, while Gideon's on the phone. "When Quentin died. I felt him die, and something keep hold of him. I feel... people. What they feel. I always have."

    He looks at me for a long time with his dark eyes, not blinking, the way they don't.

    "Huh," he says, finally. "What do I feel like?"

    "Lonely," I say, before I can stop it.

    He laughs, a short, surprised laugh, like I've caught him in something. "Yeah," he says. "That tracks." And then he says, very quietly, "Don't tell Lucien. About the feeling thing. Not yet. People here get funny about things they can't do themselves."
  #Press Gideon. The knack says he's guilty.
    *set suspect_gideon true
    *set fr_gideon -1
    "You feel guilty," I say to Gideon's back. "About Quentin. What did you do?"

    He turns round. His face is a wall. The guilt coming off him is so thick I can taste it, like burnt sugar.

    "What did you say?" he says, very softly.

    "I can tell. I can just tell. You feel like you did something."

    Dominic says "{name}" in a warning tone. Lucien, in the doorway, goes very still.

    Gideon looks at me for a long, long moment. "Everything I've done since I turned," he says, "has been something to feel guilty about. That's not a clue. That's a life." He turns back to the window. The room's colder for the rest of the night, and it's my fault.
*page_break
*comment ---------------------------------------------------------------- CH04.REGENT.03
*sid CH04.REGENT.03
*date 2026-09-02 22:00
*place P14
*present gideon adrian reuben lucien
*set st_adrian 1
*set st_reuben 1
On Wednesday night, the wardens come to the Regent.

Lucien's told them. Of course he has; the Regent and Mercy House have an arrangement, Rafi explained to me, in the tone of somebody explaining the terms of a divorce. So at ten o'clock on Wednesday I'm back in the old projection room, with Gideon at the window, and two men come up the stairs from the lobby in dark jackets with high collars.
*meet adrian
*portrait adrian neutral
The first is about my age. Compact, square-shouldered, a small brass pin on his collar, short brown curls and olive skin and straight brows, the left one a touch higher than the right, as if he's permanently about to be sceptical. Adrian Keene. He introduces himself to Lucien with a small formal nod and to me with a look that says I'm a problem he's already started filing.

The knack gives me him: very orderly, everything in its box, and all of it running hot underneath, like an engine at idle.
*meet reuben
*portrait reuben neutral
The second's bigger, a few years older, broad and heavy-shouldered, with chestnut hair he's clearly cut himself and tired eyes under low brows. Reuben Pike. He says hello to me as if I'm a person and not an incident. When he looks at Gideon, there's sympathy in it, more than his partner's got.

With him the knack goes quiet and warm, like a room with the heating on low.

Mercy House's working theory, Adrian explains to the room, is a turning gone wrong: somebody tried to make Quentin a vampire and botched it. It fits most of the facts. Gideon says, flatly, that it doesn't. Lucien says nothing, courteously. Reuben says he'd like to take Quentin's pulse before he believes anything.

Then Adrian turns to me with his notebook open. "I'll need your statement. On the record. Properly." And then, in the same tone, as if it follows naturally: "After which it would be best for everyone if you went home and let us handle this."

*choice
  #Disagree with him, to his face, and give my reasons.
    *set b_adrian_disagree true
    *set st_adrian 2
    *set nerve +2
    "No," I say.

    The room goes quiet. Gideon turns from the window.

    "I watched him die," I say. "I'm the only witness who isn't in a van. I've seen him since, I know his brother, I know what the lane was like. Put me in a drawer and you lose all of it. I'm not being brave. I'm trying to be useful. Let me be useful."

    Adrian looks at me for a long moment. The engine runs hot. Then, weirdly, it settles, like something that's been waiting to be argued with and is relieved.

    "That," he says finally, "is actually a reasonable point." He sounds as though it's costing him. Reuben looks at the ceiling and doesn't quite smile.
  #Give the statement his way. He's not wrong that I'm out of my depth.
    *set st_adrian 2
    I give him the statement, his way: times, distances, the van, the lily. He asks good questions. He writes in small square handwriting and reads it back to me word for word.

    "Thank you," he says when it's done, and seems to mean it. "Most people argue."

    "I'm out of my depth."

    "You are," he says. And then, after a moment, less like a warden: "So's everyone, with this one."
  #Tell Reuben what I felt when Quentin died.
    *set gift_reuben true
    *set gift_mercy true
    *set st_reuben 2
    While Adrian's going through my statement line by line, I end up by the projector with Reuben, and I don't know why I tell him. Maybe it's the warmth, the heating-on-low of him.

    "When he died," I say quietly. "I felt it. And I felt something catch him. Like a rope pulled tight, out of him, to somewhere far away."

    Reuben goes very still. He looks at me the way you'd look at a patient describing a symptom you've only ever read about.

    "Has that happened before? Feeling things?"

    "All my life."

    He nods slowly, and doesn't say anything else for a while. Then: "Don't tell Adrian yet," he says. "He'll want to write it down. Let me think about it first." And there's something in the warmth of him now, a sort of care, careful, like someone carrying something that might spill.
*goto diner

*comment ---------------------------------------------------------------- CH04.DINER.01
*label diner
*sid CH04.DINER.01
*date 2026-09-03 22:15
*place P18
*present adrian reuben gideon dominic quentin
*mood neon
The Truss Road Diner is open all night and belongs to the neighbourhood, which is why, Reuben says, it's neutral: not the wardens', not the Regent's, not anyone's. Bus drivers, nurses coming off shift, two lads from the depot arguing about football over a shared plate of chips. A jukebox that only plays songs from before I was born. And a big corner booth at the back, which tonight has in it: two wardens, two vampires, a nineteen-year-old lighting tech, and, at twenty past ten, a dead man, who comes in off his shift at Double Shift and sits with his back to the wall.

Quentin looks at all of us and says, "Wow. It's like a really weird wedding."

Nobody laughs except Dominic.

Up close, under the diner's bad strip lights, he looks worse than he did on Tuesday: greyer, thinner in the face, and his hands, round the tea Reuben gets him, are cold. I can feel the cold off them from across the table. And the rope's there, running out of his chest, taut, away through the wall and out across the city. The knack hums with it like a wire in the wind.

Reuben takes his pulse. He does it very gently, at the wrist, with two fingers, and his face does nothing at all, which is how I know it's bad.

"Well?" says Gideon.

"It's there," says Reuben. "It's regular. It's too slow. And it's not quite his."

And then everyone puts their explanation on the table, like cards.

A turning gone wrong, says Adrian, because it fits, because it's the explanation Mercy House has.

Something else, says Gideon. Something that isn't us. Something from outside.

Vital signs that aren't a vampire's and aren't a living man's, says Reuben, rubbing his eyes. And a pulse that's being [i]supplied[/i].

The only physical thing any of us has is on Quentin's key ring: the little tin charm, scorched on one side. He puts the keys on the table and we all look at them.

"We need to know what's holding him up," says Reuben. "And what that is." He nods at the charm. "There are two places in this city that could tell us. The lab at the General, where I can run him properly. Or the Okafors, on the Hill, who know about things like that." He means the charm.

Everyone looks at Quentin, at his cold hands round the cup. He's looking at the charm.

*choice
  #"It's not a turning. Something's holding him up from outside."
    *set theory "outside"
    "It's not a turning," I say.

    Adrian opens his mouth. I keep going.

    "I felt it. In the lane. There's something outside him. A line running out of him, to somewhere else. Something's holding him up from the other end." I look at Quentin. "I'm sorry. I know how that sounds."

    Quentin looks at me for a long moment. "No," he says quietly. "That's how it feels." And he puts a hand flat against his chest, over his heart, as if he's feeling for the rope himself.
  #"I don't know. I just know it isn't what anyone's said."
    *set theory "unknown"
    "I don't know what it is," I say. "I just know it isn't any of those. Not exactly."

    Adrian frowns. Gideon looks at me like I've said something useful by accident. Reuben nods slowly. "That's honest," he says. "That's more honest than the rest of us."
  #Ask Quentin what he wants to happen, before anyone decides for him.
    *set b_quentin_consent true
    *set st_quentin +1
    "What do you want?" I say. To Quentin, not to the table.

    Everyone looks at me. Then everyone looks at him.

    He looks surprised. Then, slowly, he looks something else, and the knack gives it to me: relief, so sharp it's nearly pain. Nobody's asked him. For five days everyone's been deciding what he is, and nobody's asked.

    "I want to know what it is," he says. "And I want to be the one who says yes or no to whatever you do about it. That's it. That's what I want."

    Gideon starts to say something. Quentin looks at him, and he stops.

    "Okay," says Reuben. "Then that's how we do it."
It's half eleven when we come out onto Truss Road. The buses have gone quiet. The moon's waning now, a few days past full, a bitten coin over the rooftops.

Quentin walks off with his brother, not quite together, a careful distance between them, like two people who haven't learned how to walk side by side again. Dominic lifts a hand to me and follows. Adrian and Reuben get into an old car with a Mercy House sticker on the back window.

And I stand on the pavement with my hands in my pockets and the knack still humming, and think: I know now. I know what the city is. And I'm the only one in that booth who can feel the rope.

*journal [b]Chapter 4.[/b] Calder has more people in it than I knew: wardens at Mercy House, vampires at the Regent, families in Eastbank, spell-workers on the Hill, and another country called the Marches. I met Adrian and Reuben, wardens; Gideon, Quentin's brother; and Dominic, who used to sing at Switchyard. At the Truss Road Diner we agreed: something is holding Quentin up from outside.
*page_break
*goto_scene ch05
`);
