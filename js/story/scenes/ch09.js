NB.scene("ch09", String.raw`
*mood dusk
*set ch 9
*chapter 9 Work Beneath the City
*comment ---------------------------------------------------------------- CH09.OPEN.01
*sid CH09.OPEN.01
*date 2026-10-29 18:00
*place P02 print_shop
*present will
*set strain 0
The end of October, and it's cold at last. Proper cold: breath in the mornings, the first gloves, the print shop's radiators clanking like someone's trapped in the pipes. The lamp posts on Latch Lane still have Hugo's face on them, laminated, a little faded now, grinning in his hi-vis. [i]Have you seen Hugo?[/i] Nobody has.

Will's at the kitchen table carving a pumpkin with a scalpel from the shop and a precision that worries me. He's got a printout of a template taped to the fridge and he's measuring the eyes with a ruler.

@will:guarded "Don't," he says, without looking up.

"I didn't say anything."

@will:guarded "You were going to say it's a bit much."

"It's a bit much."

@will:amused "It's [i]symmetrical[/i]," says Will, with dignity. "There's a difference." He turns the pumpkin to show me. It's the print shop's logo. He's carved Martin's logo into a pumpkin, with the serifs. "It's for the window. Dad cried a bit. Don't tell him I told you."

I laugh, and he almost smiles, and I put my coat on.
*if ch09_case = "tunnels"
  I've said yes to something, and it starts tonight, at eleven, at the depot. I don't know what I'm walking into. Something under Northline that knows people's names.
*else
  I've said yes to something, and it starts tonight, at seven, up the Hill at the Okafors'. I don't know what I'm walking into. A painted screen that's doing something it shouldn't.
@will:attentive "Where are you going?" Will asks, as I get to the door. Not nosy. Just asking.

"Work."

@will:guarded He looks at me for a second longer than usual, with the scalpel in his hand. "You say that a lot now," he says. And goes back to the pumpkin.

*choice
  *if ch09_case = "tunnels"
    #Head for Northline.
      *goto tunnels
  *if ch09_case = "screen"
    #Head up the Hill to the Okafors'.
      *goto screen

*comment ================================================================ the Northline predator
*comment ---------------------------------------------------------------- CH09.TUNNELS.01
*label tunnels
*sid CH09.TUNNELS.01
*date 2026-10-29 23:00
*place P27
*present owen pavel adrian nolan micah
*mood night
The depot canteen at eleven: the steel urn, the strip lights, the radio playing something from the eighties to nobody, and a poster of Hugo on the noticeboard by the door, next to the union notices, with somebody's handwriting under it: [i]still looking[/i].

Around the big table: Owen with the rota. Pavel with a roll of site plans under his arm. Micah, in his work jacket with a coil of cable over his shoulder, because he rewired half this building in September and knows every junction box by name. And Nolan.

Nolan's here because Owen told him the voices in the tunnels "sound like the tannoy", and Nolan has never in his life been able to leave a sound alone. He's got his field recorder in a padded bag on his knee and a face that's been waiting for me to walk in.
*if hurt_nolan >= 2
  @nolan:guarded "Oh," he says, when I do. "It's you." And looks at his recorder instead of me. We haven't really talked since his birthday. I'm not sure we're talking now.
*elseif b_nolan_birthday
  @nolan:warm "There he is," he says, when I do, and bumps my shoulder as I sit down, and doesn't take it back straight away, and neither of us mentions it.
*else
  @nolan:amused "There he is," he says, when I do. "The lighting guy. At a depot. At midnight. Owen, is this your cult?"
@adrian:neutral And at the head of the table, in his high-collared jacket with the cuffs that have been re-elasticated by hand, is Adrian Keene. Mercy House. Compact and upright and very awake, with a notebook squared to the table edge.
*if gift_mercy
  He wanted me here because of the knack. He doesn't say so, in front of the others. He just nods at me, once, as if we've agreed something.
*else
  @adrian:neutral "You found the lane when we couldn't," he says to me, as I sit, low. "And you know where to put a light in the dark. That's two more things than most people bring."
*set fr_owen +1
*set fr_pavel +1
*set s10 "fore"
*set nolan_knows true

@owen:tense Owen does the facts, the way a bus driver does a route: stop by stop. "Three weeks now. Night crews working in the service tunnels under Northline. People hear their name. Called, from further in, from the dark bits, off the lit route. In a voice they know. Their wife. Their mate. Their mum." He looks at his list. "Eileen, on the cleaning crew, followed it. Found her at a dead end a week ago Tuesday with a broken ankle, frozen stiff, saying her husband had called her. Her husband's been dead six years."

He turns the page.

@owen:tense "And Danny Rook. Apprentice, track maintenance, nineteen. Went down on Tuesday night to check a signal cable. Hasn't come up." A pause. "That's two lads gone from this depot in three weeks. Hugo, and now Danny." He says it very flatly. "Nobody wants to drive the Northwood run alone. Nobody wants to go in the tunnels at all. Management calls that being [i]difficult[/i]."

@pavel:guarded "It's not the same," Pavel says. His first words tonight. "Hugo went out the front gate. Up top, under the lights, in the morning. This thing wants you in the dark." He looks at the rota. "It's not the same."

@adrian:neutral Adrian lays it out plainly, and I watch Nolan's face while he does it. Mercy House has been asked to look into it. There are things in Calder that aren't people, and some of them are dangerous, and one of them, Adrian thinks, is living in the tunnels under Northline and learning voices. He doesn't dress it up. He doesn't make it sound less than it is.

@nolan:surprised Nolan looks at Adrian. Then at Owen, who's nodding. Then at Micah, who's studying the table. Then at me.
*if gift_nolan
  @nolan:tense "Right," he says slowly. "Okay. So when you said you [i]feel things[/i]. On the river steps. That wasn't... that was the small version, wasn't it."

  "It was the small version."

  @nolan:small "Cool," says Nolan faintly. "Cool, cool, cool."
*else
  @nolan:tense "Right," he says slowly. "Okay. So when you said [i]weird week[/i]." He looks at me for a long time. "All autumn. That's where you've been. In [i]this[/i]."

  "Some of it."

  @nolan:small "Cool," says Nolan faintly. "Cool, cool, cool."
But he doesn't leave. He holds the recorder bag tighter on his knee, and stays.

*choice
  #Ask Owen for the exact words each worker heard.
    *set people +2
    *set mimic_words true
    "The voices," I say to Owen. "What did they actually say? The exact words. Not what it sounded like. What it said."

    @owen:attentive Owen looks at me, and then turns to the back of his notebook, where he's written it all down, because of course he has. "Eileen: [i]Eily, love, I'm through here.[/i] The lad on the lights crew: [i]Kev, mate, give us a hand.[/i] Danny's supervisor heard it last Monday, calling Danny's name: [i]Daniel. Daniel, platform four.[/i]" He frowns at his own writing. "Platform four. I thought that was odd. I wrote it down because it was odd."

    @nolan:attentive "Why's it odd?" says Nolan.

    @pavel:guarded "Because there's no platform four under there," Pavel says. "Not any more."
  #Ask Pavel for the oldest map of the tunnels he has.
    *set craft +2
    *set old_map true
    "Pavel," I say. "The plans. What's the oldest one you've got?"

    @pavel:neutral Pavel looks at me for a long moment. Then he takes the roll from under his arm, and takes the rubber band off, and unrolls not the new plans but the one inside them: brown paper gone soft as cloth, inked by hand, with a date in the corner that's before anyone at this table was born.

    @pavel:attentive "Northline, low level," he says. "Before the Greyhill line was cut. Before they sealed the lower platforms and gave the numbers to the new ones upstairs." He puts a finger on a corridor that isn't on any of the new plans. "Service corridor B. Runs under the old platforms. Culverts. Drains. Speaker cables, for the old announcements." His finger stops. "Nobody's been down there in seven years."

    @micah:attentive Micah leans over the map, and I watch him breathe in, slow, the way you'd smell the air before rain.
*page_break
*comment ---------------------------------------------------------------- CH09.TUNNELS.02
*sid CH09.TUNNELS.02
*date 2026-10-30 01:10
*place P25 northline_station
*present nolan adrian
Service corridor B at ten past one in the morning is a long brick throat under Northline Station, lit every thirty feet by a caged bulb, with cable trays along the ceiling and the smell of old water and older electricity. Adrian goes first, with his lamp. Nolan and I go behind him. Micah and Pavel are covering the far end, where the corridor meets the new tunnels.

The knack gives me the tunnel like standing at the edge of a cold lake. Old fear, soaked into the brick: a hundred years of men working in the dark with trains going over their heads. And under it, somewhere ahead, something else. Something patient.

@nolan:tense Nolan's got his headphones on and the recorder held out in front of him like a Geiger counter. "It's so quiet," he whispers. "It's not quiet. It's [i]too[/i] quiet. There's no hum. There's always a hum."

We stop at a junction where an old speaker horn hangs from a bracket on the wall, dead, rusted, its cable cut years ago.

And the recorder catches it.

@nolan:scared Nolan goes rigid. He holds up a hand. He takes one side of the headphones off and holds it out to me, and I put my head next to his and listen.

A chime. The old three-note chime, the one they used to play before announcements, that I remember from being a kid on the platform with Mum. And then a woman's voice, pleasant and bored and a little tinny, from nowhere, from the dead horn, from the walls:

[i]Platform four for the Greyhill service. Platform four. The Greyhill service is now ready to depart.[/i]

The hairs on my arms stand up one by one.

@nolan:scared "There hasn't been a Greyhill service since I was twelve," Nolan whispers. "They cut the line. They sealed the low-level platforms. The platform four upstairs, the one with the benches, it's a [i]new[/i] four, they gave it the old number." He's shaking. "That's not a recording. That speaker hasn't got a cable. That's something [i]doing[/i] the voice."
*if mimic_words
  "[i]Daniel, platform four,[/i]" I say. "That's what it said to Danny's supervisor. Owen wrote it down."
*if old_map
  I think of Pavel's finger on the brown map. [i]Speaker cables, for the old announcements.[/i]
@adrian:attentive Adrian's watching the dead horn with his lamp raised. "It learned the announcement," he says quietly. "From the speakers. Before they were cut. It's been listening to them for years." He turns to me. "It learns voices. It lives where it learned them."

"The old platform four," I say. "Underneath the new one."

*set mimic_clue true
The fair clue. It's been telling us where it lives the whole time, in the voice of a woman who read out train times for thirty years.

*choice
  #Work it out with Nolan, headphones shared, in the dark.
    *set b_nolan_work true
    *set st_nolan 4
    "Play it again," I say to Nolan. "Slower."

    @nolan:attentive And we work it, the two of us, the way we've worked a hundred sound checks: him on the recorder, me on the shape of the room. He plays it back at half speed, then quarter, with one earbud each, our heads together in the dark under Northline. He finds the reverb. I feel for the direction of the patience in the brick.

    @nolan:attentive "There," he says. "Listen. The tail on the chime. That's a long room. Tiles. Hard surfaces, big volume, and something soft at one end, like a..." He listens again. "Like pigeons. There's pigeons in it. It's a platform. It's under us and a bit north."

    I can feel it, exactly where he says. Down, and north, and waiting.

    @nolan:amused He takes the earbud out and looks at me, and he's grinning, terrified and delighted. "We're so good at this," he says. "Why don't we do this all the time?"

    "We do. Every Friday. At Switchyard."

    @nolan:warm "Not with [i]monsters[/i]," says Nolan. And I don't know what it is, exactly, but in the dark, with his shoulder against mine and the recorder between us, it's the best I've felt in weeks.
  #Take it to Adrian as a procedure: last known speaker locations, a search pattern.
    *set adrian_plan true
    I take it to Adrian as a procedure, because I've learned that's how Adrian hears things.

    "It lives where it learned the voice," I say. "So we map every old speaker. The ones on the low-level platforms, the ones in the corridors, the ones that were cut. We search them in order, closest to where people were called first."

    @adrian:attentive Adrian looks at me, and then he opens his notebook, and writes it down, in numbered points, as I say them. When I get something slightly wrong, he doesn't correct me. He writes it down, and then writes a small question mark next to it, and asks me about it afterwards, which I realise, after a moment, is Adrian being tactful.

    @adrian:neutral "Good," he says, when we're done. "That's good. That's a procedure." It's the most approving I've ever heard him sound.

    @nolan:guarded Nolan, beside us with his headphones round his neck, looks between us with an expression I can't read. "You two are like a pair of librarians," he says.
*page_break
*comment ---------------------------------------------------------------- CH09.TUNNELS.03
*sid CH09.TUNNELS.03
*date 2026-10-30 02:40
*place P25 northline_station
*present micah adrian
At twenty to three, Pavel unlocks a door in the side of service corridor B that has four padlocks and a notice from seven years ago saying NO ACCESS, and we go through onto old platform four.

It's still there. Of course it is. Under the station, under the new platforms, sealed and forgotten: a long curved vault of cream tiles gone yellow, a platform edge painted white and peeling, benches with the paint flaked off, and a drop to a track bed that hasn't carried a train in seven years. Pigeons, somehow, dozens of them, murmuring in the dark up in the roof. And on a bracket at the far end, a big speaker horn, the old kind, rusted, pointing down at the platform like a flower.

Micah goes ahead. He says he can hear things we can't. Adrian lets him, which tells me Adrian knows something about Micah that I{@know_micah_wolf| already know| don't}.

@micah:tense Halfway down the platform, Micah stops.

And he does something with his face. I see it in Adrian's lamplight, from ten feet away: his breathing changes, goes deep and slow and huffing, and his face... moves. Not much. The jaw. The nose. Something under the skin shifts forward, like a hand pushing at a sheet from underneath, and his shoulders come up, and when he turns his head to look back at us his eyes catch the lamp and throw it back, green-gold, like a cat's in a car's headlights.
*if know_micah_wolf
  I've been told. On a bench on the allotments, under a lopsided moon. It's different, seeing it.
*else
  [i]There are families in Eastbank who change on full-moon nights.[/i] I knew that. I just didn't know I'd been sitting next to one.
@micah:moon "Below," he says. His voice has gone rough, like it's coming through gravel. "Someone's alive. Below. And something else." His lip lifts. "It smells like a larder."

The knack goes down with his words, through the platform, through the track bed, into the dark, and finds them both.

A boy. Nineteen. Alive, just, curled up small and freezing somewhere under the live line, so terrified it's gone past fear into a kind of flat grey nothing. Danny.

And something else, close to him. Something that isn't a person. Hungry and patient and pleased with itself, like a cat that's been left alone with a bird in a box. It has a hundred voices in it, folded up like letters. Some of them are dead people's.

One of them is my mum's.

*choice
  *if not(know_micah_wolf)
    #Watch Micah change enough to track. Don't flinch.
      *set b_micah_wolf true
      *set know_micah_wolf true
      *set st_micah 3
      I don't flinch.

      I don't look away. I don't step back. I stand on old platform four in Adrian's lamplight and watch Micah Serrano's face move under his skin, and his eyes throw the light back at me green-gold, and I keep looking at him, because he's looking at me to see what I'll do.

      @micah:small He sees what I do. Which is nothing. Which is stay.

      "Can you track it?" I say. As if it's a normal question. As if I'm asking him about a breaker.

      @micah:moon Something in his shoulders lets go. "Yeah," he says, in the gravel voice. And then, more quietly, in something nearer his own: "You're not going to run."

      "I don't know where I'd go. You'd smell me."

      @micah:laugh He laughs. It's a huffing, strange, half-animal laugh, and it's the best sound I've heard all night. "Yeah," he says. "I would."
  *if know_micah_wolf
    #Trust his nose over my knack. Follow him.
      *set st_micah +1
      "Lead," I say. "I'll follow you."

      @micah:moon He looks back at me with those green-gold eyes, and something in his face, even changed, is surprised, and pleased, and trying not to be.

      So I turn the knack down. The way I learned to, like a dial, not off, down, and I follow Micah's nose instead of my own weather down the length of old platform four. He moves differently like this: low, quick, sure, his head going side to side. At the far end, under the speaker horn, he crouches and puts his palm flat on a steel grate in the platform edge.

      @micah:moon "Here," he says. "It goes down here. The boy's down there. So's it."

      He's right. He's exactly right, and he got there faster than I would have, and when I say so he ducks his head in a way that's pure Micah, gravel voice and all.
  #Reach all the way for the apprentice. Find him first.
    *set reached +1
    *set strain +1
    *set knack +3
    I reach.

    All the way. Past the pigeons and the tiles and the old fear in the brick, past the hungry pleased thing with my mother's voice folded up inside it, down to the boy.

    Danny. I find him the way you'd find someone's hand in a dark room. He's in a culvert, a brick drain under the live line, curled on a ledge just above the black water with his knees up. He's so cold he's stopped shivering. He's heard it calling in his mum's voice for two days, and he's stopped answering. I push, as hard as I can, the one thing I've got: [i]someone's coming. Someone's coming. Hold on.[/i]

    I don't know if it reaches him. I don't know if it works like that. But for one second, I feel the flat grey nothing in him flicker. Like a pilot light.

    When I come back, I'm on my knees on the platform with a headache like a bolt through my skull, and Adrian's lamp is in my face, and Micah's hand is on my back, heavy and very warm.

    "Culvert," I say. "Under the live line. East end. He's alive."
*page_break
*comment ---------------------------------------------------------------- CH09.TUNNELS.04
*sid CH09.TUNNELS.04
*date 2026-10-31 00:40
*place P25 northline_station
*present adrian micah nolan
The next night, prepared.

We couldn't do it last night. The culvert's under the live line, and the night freight and the empty-stock runs go over it every eleven minutes, and Mercy House needed a day to get the line's schedule and a warden's crate and Adrian's kit. Danny's been down there another day. The knack tells me he's still alive. It's the only thing I've been able to think about for twenty hours.

Twenty to one on the morning of Halloween. Old platform four, and the grate at the east end, and under it, a brick culvert running away beneath the rails into the dark.

The plan's simple. Adrian lays a line. It's a pale, gritty powder from a tin that he pours along the track bed in a curve, and then kneels behind with both hands flat on the rail, eyes shut, holding it, the way you'd lean on a door someone's pushing from the other side. He can hold it about as long as a train takes to pass. Nolan's got a speaker, a battered PA cab from Switchyard he's carried down four flights of stairs, and his recording of the announcement. Micah can lift the grate; it takes three men normally, and he does it on his own, with a grunt. Holding it open for ten minutes is another thing. Somebody has to go into the culvert, between trains, and bring Danny out.

The thing's down there with him. I can feel it. It knows we're here. It's calling.

Not Danny, now. Me.

[i]Sweetheart,[/i] it says, from the dark, in my mum's voice, soft and tired, exactly the way she says it on the phone from the other end of the world. [i]Sweetheart, I'm through here. Come and help me.[/i]

@adrian:tense Adrian's eyes open. "Don't listen to it," he says.

@nolan:scared "It's doing [i]your mum[/i]," says Nolan, white-faced. "How is it doing your mum?"

I don't answer. A train goes over, a long rolling thunder in the roof, and the pigeons explode upwards, and the voice stops, and eleven minutes start.

*choice
  *selectable_if (nerve >= 30) #Go into the culvert myself, between trains.
    *set nerve +3
    *set tunnels_role "went"
    "I'll go," I say.

    @adrian:tense "You're not trained."

    "I can feel where he is. You can't. And it's calling me anyway. Better I'm going towards it on purpose."

    @adrian:angry Adrian looks at me for one long second, and I feel him weigh it, the whole procedure of it, and hate it, and agree. "Ten minutes," he says. "When the train comes, you get flat and you stay flat. I'll hold the line."

    So I go into the culvert.

    On my knees, then on my belly, in the black water, with a head torch and the knack turned up so loud my teeth ache. Mum's voice in the dark ahead of me, soft, patient, [i]sweetheart, sweetheart[/i], and I hold on to the one true thing I know about my mum, which is that she has never once in her life asked me to come and help her. She'd rather die. She says so. Frequently.

    [i]You're not her,[/i] I think at it. [i]She'd never ask.[/i]

    And I find Danny's foot.

    I get my arms under his and drag him backwards, a foot at a time, through the water, talking to him the whole way in my own voice, just my own voice, telling him about Will's pumpkin, anything, while the thing in the dark behind us tries Mum, and then Martin, and then Nolan, and then, horribly, Quentin. At eight minutes, Micah's hands close on my ankles and pull us both out onto the platform like a cork out of a bottle.

    At ten minutes, the train goes over.
  #Hold the speaker and turn its trick back on it: play the voice it wants.
    *set tunnels_role "lure"
    *set craft +2
    "It loves the announcement," I say. "It's been doing that voice for seven years. It learned all the others, but that's the one it goes back to." I look at Nolan's speaker. "So we give it the real one."

    @nolan:surprised Nolan stares at me. Then he gets it, and his face lights up, terrified and delighted. "Oh, that's [i]evil[/i]," he says. "I love it."

    We rig it together, fast, in the dark, in the way we've rigged a hundred stages: his cab at the far west end of the platform, as far from the culvert as the cable will go, my torch on the old speaker horn so it can see where the sound should come from. Nolan cues his recording.

    The chime. [i]Platform four for the Greyhill service.[/i]

    And under the platform, in the culvert, the patient hungry thing goes still. I feel it listen. I feel it [i]want[/i]. A voice it knows better than any other, the voice it's been doing for seven years, coming from the wrong end of its platform. Real. Not a copy.

    It goes. It leaves the culvert and goes along the track bed in the dark, west, towards the speaker, like a moth. And Adrian, with the line held and the train coming, goes down into the culvert while it's gone and brings Danny out in a fireman's lift, streaming water, while Nolan and I stand at the far end of the platform playing a dead woman's announcement on a loop to something that loves her.

    @nolan:tense When it's over, Nolan turns the speaker off, and it's so quiet. "I feel bad for it," he says, in a small voice. "Is that weird? It just liked the trains."
  #Hold the grate with Micah. Let Adrian go in; he's trained for it.
    *set tunnels_role "grate"
    *set st_adrian +1
    "You go," I say to Adrian. "You're trained. I'll hold the grate with Micah."

    @adrian:surprised Adrian looks at me with something like surprise. Then he nods. "Somebody else hold the line," he says, and shows Nolan how, both hands flat on the rail, eyes shut, [i]lean on it like a door[/i], and Nolan, white as paper, does it.

    So I hold the grate with Micah.

    It weighs more than a car. Micah takes most of it; I can feel him taking it, the deep patient animal strength in him coming up like a tide, and I take what I can, with my back and my legs and my teeth gritted, and we hold it up while Adrian goes into the dark, on his belly, into the black water, with the thing in the culvert trying my mother's voice on him, and then Martin's, and then, I realise with a cold shock, his own brother's.

    @micah:moon "Hold," says Micah, through his teeth. "Hold. Hold."

    At eight minutes, Adrian comes out backwards, dragging Danny by the armpits, and Micah drops the grate a second after his boots clear it, and it comes down with a clang that shakes the whole platform, and at ten minutes the train goes over.

    @adrian:tired Adrian lies on the platform on his back, soaked, breathing hard, and looks up at me. "Thank you," he says. "For not arguing." A pause. "That's new."
Danny's alive.

He's grey and blue and can't feel his hands, and he's crying, and Micah's wrapped his own jacket round him and is rubbing his arms hard enough to take the skin off, and Adrian's on the radio to Mercy House in the flat quick voice of procedure. But he's alive. He keeps saying "My mum. It was my mum," and I sit with him on old platform four and tell him it wasn't, it wasn't, it was never his mum, and I know exactly how he feels.

And the thing that took him: when it comes back up the track bed, looking for the voice it loves, Adrian's waiting under the old speaker horn with his tin and his lamp and a phrase in a language I don't know, and I watch it go into the horn like water down a drain. Into the thing it loved most. The horn shakes once on its bracket, and hums, and goes still.

*comment ---------------------------------------------------------------- CH09.TUNNELS.05
*sid CH09.TUNNELS.05
*date 2026-10-31 04:10
*place P18
*present adrian
*mood neon
*set tunnels_done true
*set s10 "fore"
Four in the morning, the Truss Road Diner. Danny's at the General with a blanket and his actual mum. The speaker horn's in a crate in the back of a Mercy House van, headed for a storeroom on the hill. Micah's gone home to sleep for a day. Nolan went home on the first bus holding his recorder like a baby, and texted me from it: [i]I am NEVER sleeping again. also that was the best night of my life. both things are true[/i].

Owen's rota campaign has something now that nobody can call [i]difficult[/i]: a boy pulled out of a culvert alive, and a statement from Mercy House in writing.

I'm in the corner booth with a tea I'm not drinking, because I can't face going home yet, and I can still hear my mum's voice in the culvert, and I'm not ready to be in a quiet room.

@adrian:tired And then Adrian Keene comes in, off duty.

I know he's off duty because his jacket's open. I've never seen his jacket open. His hair's still damp from the shower at Mercy House and he's wearing a jumper under the jacket instead of the uniform shirt, and he stands by the counter for a second as if he's not sure what he's doing here. Then he comes over and sits down across from me in the booth. He doesn't have a notebook. He doesn't have a report to write. He doesn't say why he's come.

The knack can't tell me what he's feeling about me. It never can. But it gives me everything else: tired, right down to the bone, and a knot of something he doesn't have a procedure for.

*choice
  *if st_adrian >= 3
    #Don't ask him why he came. Order him pie.
      *set b_adrian_offduty true
      *set st_adrian 4
      I don't ask him why he came.

      I wave at the waitress, who's been on since ten and has seen everything, and order two slices of the apple pie, with custard, and push the menu back into its holder, and don't say anything else.

      @adrian:surprised Adrian looks at me.

      @adrian:shy "I don't really..." he starts.

      "It's four in the morning. You pulled a lad out of a drain. You're having pie."

      He has the pie. He eats it slowly and methodically, the way he does everything, in neat equal forkfuls, and somewhere around halfway through, his shoulders come down from round his ears for what I suspect is the first time since September.

      @adrian:warm "My brother does the voices," he says, out of nowhere, to the pie. "Victor. When we were kids. He used to do our mum, to get me out of bed." He doesn't look up. "It did Victor. Tonight. Down there. It did him really well."

      "I'm sorry."

      @adrian:warm "It's fine." It isn't. He knows I know it isn't. He eats another neat forkful. "This is good pie," he says, and it's the most I've ever heard him say about anything that isn't procedure, and I don't say anything, and we sit there until the sky over Truss Road starts to go grey.
  #Ask him about the mimic's crate. What happens to it now?
    *set know_wardens true
    "What happens to it?" I ask. "The thing in the horn."

    @adrian:neutral He seems relieved to be asked a question with an answer. "Mercy House keeps a store," he says. "On the hill. Old wing. Things that can't be killed, or shouldn't be, go there. Bound. Labelled. Checked every month by someone with a clipboard." He turns his cup round. "It'll sit on a shelf in its horn next to a mirror that eats reflections and a music box nobody's allowed to wind. It won't be unhappy. It'll have the horn."

    "Does anyone ever let them out?"

    @adrian:guarded "No," he says. And then, after a moment, more carefully: "There are boxes in that store with seals on them I'm not allowed to open. Old ones. From before my time." He looks at me. "I've never asked what's in them. I'm starting to think I should have."
*goto halloween

*comment ================================================================ the inherited screen
*comment ---------------------------------------------------------------- CH09.SCREEN.01
*label screen
*sid CH09.SCREEN.01
*date 2026-10-29 19:00
*place P20 okafor_restoration
*present ellis chukwudi isaac
*mood night
Okafor Restoration after hours, the green door on Paternoster Row, and the bell over it that rings a note too pure to be ordinary.

@ellis:tense Ellis lets me in himself. He's in his workroom clothes, an apron over an old jumper, and he doesn't perform anything at me at all. "Thank you for coming," he says, and means it so plainly that it's unsettling. "It's in the back. Mind your shadow."

"Mind my..."

But I see it as soon as I'm through into the workroom.

It's a screen: six tall panels, hinged, lacquered black, painted with a river and willows and a long gold sky, the kind of thing that stood in a rich woman's bedroom a hundred years ago. A family in Southmere inherited it from a great-aunt, and dropped it moving house, and the lacquer seal across the back has cracked right across, like ice.

And in the workroom, the shadows are wrong.

There are three lamps on in the room. Everything in it should have three shadows. Everything does: the benches, the jars of pigment, the chair. But they're out of step. When Ellis moves, his shadows move a half-second after him. When I lift my hand, my shadow on the wall lifts its hand, and then, after a moment, lowers it slightly before I do, as if it's trying out the gesture.

@chukwudi:attentive "A binding," says Chukwudi, from the bench, where he's looking at the crack through his glass. He doesn't look up. "Nineteen-twenties, and very good. Very good. Somebody put something inside this screen and sealed it with the lacquer, and the seal has broken." He straightens, slowly. "And the thing inside is trying to borrow a living silhouette. Something with a shape. A person's shape."
*if ch05_route = "restore"
  *meet isaac
  @isaac:laugh "This," says Isaac, from the far side of the room, with his safety goggles on his head and his phone out, filming his own shadow waving at him out of time, "is the best thing that has ever happened."
*else
  *meet isaac
  @isaac:laugh "This," says a boy of about sixteen, from the far side of the room, with safety goggles pushed up on his forehead and his phone out, filming his own shadow waving at him out of time, "is the best thing that has ever happened." Isaac, Ellis's little brother, apparently. He has the same long face and none of the caution.

@ellis:angry "Isaac," says Ellis. "Put the phone down and step away from the lamp."

@isaac:amused "It's not doing anything."

His shadow, on the wall behind him, is standing half a second behind him, very still, looking at him.

*choice
  #Read the thing inside with the knack before anyone touches it.
    *set reached +1
    *set strain +1
    *set knack +3
    *set shade_lonely true
    "Can I try something?" I say. "Before anyone touches it."

    @chukwudi:attentive Chukwudi looks at me over his glass, and then at Ellis, and Ellis nods, very slightly. Chukwudi steps back from the bench.

    I put my hand flat on the lacquer, next to the crack. And reach.

    It comes up cold. Old varnish and cedar and a hundred years of a bedroom, a rich woman's breathing at night, the smell of rosewater. And under that, inside, folded up small in the dark of the screen like something in a drawer: the thing.

    Hunger, yes. It wants a shape. It wants one so badly it aches, like a phantom limb. But under the hunger, deeper, there's something else. Something I didn't expect.

    It's lonely.

    Not lonely like a person who wants company. Lonely like the last of something. Like a single voice left in an empty church. It's been in the dark for a hundred years, and the only shape it ever had was somebody else's, and it misses it.

    I take my hand off. My nose is running. I wipe it on the back of my hand, and it isn't a runny nose. It's blood, just a bit.

    @ellis:scared "Sit down," says Ellis sharply, and pushes a stool at me.

    "It's lonely," I say. "Under the hungry. It's lonely. It misses a shape it used to have."

    @chukwudi:tense Chukwudi and Ellis look at each other. Chukwudi takes a small book from his apron pocket and writes something in it.
  #Get Isaac out of the room. He's standing too close to the lamp.
    *set fr_isaac +1
    *set fr_chukwudi +1
    I don't like the way Isaac's shadow is looking at him. I don't like that it's standing still while he moves.

    "Isaac," I say, as easily as I can. "Show me the thing you're building. Upstairs. I want to see it."

    @isaac:surprised He looks at me in surprise. "It's not finished."

    "That's fine. I like things that aren't finished."

    @isaac:amused That does it. He puts the phone away and bounds out of the workroom and up the stairs, talking already about solder and a microcontroller and something that's going to measure humidity, and his shadow, on the wall, hesitates for a long moment before it follows him.

    @chukwudi:warm When I come back down twenty minutes later, Chukwudi puts a hand on my shoulder as I pass, heavy, and leaves it there for a second. "Thank you," he says quietly. "He doesn't listen to us. He listens to anyone who isn't his family."

    @ellis:small Ellis, at the bench, doesn't look up. But I feel something in him ease, like a held breath let out.
*page_break
*comment ---------------------------------------------------------------- CH09.SCREEN.02
*sid CH09.SCREEN.02
*date 2026-10-29 23:30
*place P20
*present ellis isaac
Everyone takes shifts watching the workroom through the night. Chukwudi first, then Ellis, then me. My shift starts at midnight, and at half eleven I go up to the family kitchen above the shop to make tea, and find Ellis there.

@ellis:tired He's in an old jumper with the cuffs gone, and pyjama bottoms, and his hair tied up in a scarf, eating cereal out of a mixing bowl standing up at the counter. He looks at me with his mouth full and doesn't perform anything at all.

@ellis:angry "Don't," he says. "It's been a long day. I've had a tutorial with a man who thinks the Renaissance was a mistake."

*choice
  *if not(b_ellis_offstage)
    #Before the shadow: stay in the kitchen with Ellis and let him be ordinary.
      *set b_ellis_offstage true
      *set st_ellis 3
      I don't go down early. I put the kettle on, and sit on the counter, and let him complain.

      @ellis:angry And he does. About the tutor, who is sixty and wears a cravat and said Ellis's essay was "competent", which Ellis considers a war crime. About Isaac, who has taken apart the toaster again. About the screen, which is going to take three nights at least and his father's going to insist on doing all the hard bits himself and won't sleep. About the cereal, which is Isaac's and is terrible.

      @ellis:amused "You're laughing at me," he says.

      "You're funny."

      @ellis:surprised "I'm [i]irritable[/i]."

      "You're funny when you're irritable. You're much funnier than when you're being impressive."

      @ellis:shy He stares at me with the spoon halfway to his mouth, and something happens to his face that I haven't seen before. It's not the performance smile. It's not even the real one, the lopsided one. It's something younger and more startled than either. He looks down into his bowl.

      @ellis:warm "Nobody's ever said that," he says. "They say I'm impressive. That's the whole... that's what I'm for." He pokes the cereal. "Nobody's ever said they like the other bit better."

      "I like the other bit better."

      @ellis:warm He doesn't say anything. He just stands there in his terrible pyjamas and eats his brother's terrible cereal, and doesn't put the performance back on, and the kitchen's warm, and for about four minutes it's the nicest place I've ever been.
  #Go after the shadow.
    *set nerve +2
    I take the tea and go down early. Something's pulling at me. The knack, or just nerves.
And that's when Isaac's shadow comes down the stairs without him.

I see it on the wall of the stairwell first: a boy-shaped shadow, sixteen, goggles on its head, walking down the stairs one step at a time. There's nobody on the stairs. Isaac's asleep in his room at the top of the house; I can hear him snoring through the door. His shadow's coming down without him, slow, careful, like someone sneaking out.

@ellis:scared Ellis drops his spoon in the bowl.

And the shadow goes past the kitchen door, along the wall, down the next flight, into the workroom, and across the floor, stretched long in the lamplight, towards the screen.

I go after it. I don't know what I think I'm going to do. You can't grab a shadow. But I get between it and the screen and stand in the lamplight so that my own shadow falls across the floor in front of it, and it stops, and it [i]looks[/i] at me. A shadow with no face, looking at me.

Upstairs, Isaac's snoring stops.

Then Chukwudi's there, in his dressing gown, with his glass and a stick of something white, drawing a line on the floor between the shadow and the screen, fast, muttering. The shadow flinches from the line like a dog from a fire and flows back across the floor and up the stairs, and up, and is gone.

@isaac:angry A minute later Isaac's voice comes down the stairwell, thick with sleep: "Why is everyone [i]up[/i]?"

@ellis:scared Ellis is standing in the workroom doorway with his arms wrapped round himself. "It nearly took him," he says. "It nearly took my brother's shape. While he was asleep."

*comment ---------------------------------------------------------------- CH09.SCREEN.03
*sid CH09.SCREEN.03
*date 2026-10-30 14:00
*place P22
*present ellis emmett
*set fr_emmett 1
*set screen_panel true
Provenance, it turns out, is the answer.

Chukwudi spends the morning reading the family's papers, which arrived with the screen in a shoebox: receipts, letters, a will. The binding needs its key, he says, and the key was part of the screen: a seventh panel, painted by the same hand, that locked the others. There are six panels. The family's papers say a great-aunt sold "the odd panel" in 1971, to a museum, for almost nothing and a letter of thanks.

The Whitcomb Museum. The big grey one on the Hill with the steps and the lions, where school trips go to be bored.
*meet emmett
@emmett:shy Emmett Hsu gets us in. He's nineteen, slight, with a soft round face and his black hair in his eyes, wearing a museum-security polo shirt under a warden's jacket, because it turns out he's a trainee at Mercy House and works security at the Whitcomb three days a week to pay his way. "I can get you into the stores for an hour," he says, very quietly, looking over his shoulder at a corridor with nobody in it. "Please don't touch anything. Please. I'll get fired and then Adrian will write a report about it."

@ellis:amused "Adrian writes reports about everything," says Ellis.

@emmett:tense "Adrian wrote a report about [i]me[/i]," says Emmett, and then looks as if he wishes he hadn't, and turns away to unlock the door.

The stores are underneath the museum: a long, cold, humming basement of metal shelves and wooden crates and things under dust sheets, lit by strip lights that come on one bank at a time as you walk. Emmett finds the accession number in a card index. We find the crate. Ellis opens it with a tool from his bag, with the kind of care you'd use on a baby.

And there she is. The seventh panel.

A painted woman on a riverbank, in a long dress, under the same gold sky as the other six, holding a small toy boat on a string, letting it float out on the river in front of her. Her face is turned away. You can't see what she's feeling. But the knack can.

It's grief. Old, and dried, and dignified, like a pressed flower. And under it, fierce and clean: protection.

@ellis:attentive Ellis reads it off the panel the way I read people: in the brushwork, in the pigment, in the little symbols worked into the willows that I'd never have seen. He talks it through, very softly, half to himself. The painter's brother drowned in the river when he was nine. Something came up out of the river after, wearing his shape. Walking around the house at night in the shape of a drowned boy. And the painter, who was a spell-worker and a very good one, painted a screen to catch it, and caught it, and sealed it in, so it could never wear anyone else.

@ellis:sad "She wasn't cruel," he says. "The family think the screen's cursed. That their great-great-grandmother was a witch who trapped something out of spite." He touches the edge of the panel, not the paint. "She was protecting people. She caught the thing that had worn her brother, so it could never take anyone else's shape." His voice goes odd. "And it's been in the dark for a hundred years, missing him."

@emmett:small Emmett, by the door, says nothing. But he's listening with his whole body.

*comment ---------------------------------------------------------------- CH09.SCREEN.04
*sid CH09.SCREEN.04
*date 2026-10-31 01:00
*place P20 okafor_restoration
*present ellis chukwudi caspar isaac
*set e08 true
*set e08_src "screen"
One o'clock in the morning on Halloween, the workroom, all the lamps on.

The seventh panel's back in its place, hinged to the others, on loan from the Whitcomb for exactly one night on a form Emmett signed with his eyes shut and his heart in his mouth. Re-seating the binding takes three workers at once, Chukwudi says, so the strain of it doesn't land on one person. If one person held the whole thing, it would break them.
*meet caspar
@caspar:tense So there are three of them. Chukwudi at the centre panel, with his glass and his brushes. Ellis at the seventh, with the key. And Caspar Neri, of all people, in his beanie, with gaffer tape on his jeans, at the far end, holding the third part, because he's been doing warded lighting rigs for the Okafors for three years and nobody told me. "Don't look at me like that," he says. "Everyone's got a side job."

Three people, each holding a part. The strain spread between them, like a load on three ropes instead of one. I watch it and something in the back of my mind writes it down very carefully: [i]a repair with three contributors distributes the strain of a bond[/i]. I don't know why it feels important. It does.

Isaac's on the stairs, where he's been told to stay, in a blanket, with his phone, with his shadow nailed down on the step beside him by one of Chukwudi's white lines.

@ellis:tense "I need four minutes," Ellis says. He's looking at the key, the painted symbols in the willows. "To understand it. To see how she turned it. Four minutes, and I can close it." He looks up at me. "Somebody has to keep it busy for four minutes. It's going to try for a shape. It's going to try for [i]all[/i] of us."

The lamps flicker. On the wall, every shadow in the room turns its head, slowly, towards the screen.

*choice
  *if shade_lonely
    #Talk to it. It's lonely. Keep it listening.
      *set knack +3
      *set b_ellis_danger true
      *set st_ellis 4
      *set screen_way "talk"
      I sit down on the floor in front of the screen, cross-legged, in the lamplight, like a kid at a story, and I talk to it.

      I don't know if it understands words. I don't think it matters. I talk to it the way you'd talk to someone in a hospital bed. I tell it about the river outside, which is still there. I tell it about Southmere, where it's been living, in a spare room, with a family who didn't know. I tell it that the boy whose shape it wore was called Albert, which Ellis found in the papers, and that his sister painted him on the riverbank with his boat, and that she loved him, and I think, in some way I don't understand, she might have loved it too, a bit, for giving her his shape back for a while.

      And I feel it listen.

      The hunger doesn't go. But it goes quiet, the way a dog goes quiet with its head on your knee. The shadows on the walls stop turning. For four minutes, a hundred-year-old lonely thing in a painted screen listens to a nineteen-year-old lighting tech tell it about its own life, and doesn't try to take anyone.

      @ellis:tired At four minutes and ten seconds, Ellis says, "Now," and the three of them close it. The lacquer seal runs back across the crack like water filling a footprint. And the last thing I feel, before it goes, isn't hunger. It's something like being tucked in.
  *selectable_if (craft >= 35) #Keep the lamps moving so it can't settle on anyone's shadow.
    *set craft +3
    *set b_ellis_danger true
    *set st_ellis 4
    *set screen_way "lamps"
    "Every lamp in the room," I say to Caspar. "Can I have them?"

    @caspar:laugh Caspar grins at me across the workroom without letting go of his part. "Lighting boy," he says. "Be my guest."

    So I light it.

    It's the only thing I'm actually good at. Three lamps on stands and two on the benches and a work light on a clamp, and I move them, one after another, fast, never letting them settle, so every shadow in the room swings and stretches and shrinks and never holds a shape for more than a second. It's like running the lighting desk at Switchyard during a drum solo. I keep the whole room moving. The thing in the screen reaches for Chukwudi's shadow and it's gone, swung away across the ceiling. It reaches for Ellis's and I've pulled the lamp and it's a smear on the floor. It reaches for mine and I spin the work light and mine goes three places at once.

    It can't settle. It can't find a shape. For four minutes it grabs at shadows like a kid grabbing at soap bubbles, and every one of them pops.

    @ellis:tired At four minutes and ten seconds, Ellis says, "Now," and the three of them close it. The lacquer seal runs back across the crack like water filling a footprint. My arms are shaking from the lamps. Caspar, across the room, gives me a slow, deeply professional round of applause.
  #Stand between it and Isaac and hold still.
    *set nerve +3
    *set b_ellis_danger true
    *set st_ellis 4
    *set screen_way "stand"
    It goes for Isaac.

    @isaac:scared Of course it does. It's had his shape once. It liked it. The white line on the stairs smokes and fades and Isaac's shadow on the step starts to stretch, towards the workroom, towards the screen, and Isaac, in his blanket, says in a small voice, "Um."

    I go and stand between them.

    On the bottom stair, in the lamplight, with my own shadow thrown long across the floor between the screen and the boy, and I hold still. That's all. I just stand there and let it see me, and don't move, and don't give it anything else to take.

    It takes an interest. I feel it, like cold fingers on the back of my neck. It looks at my shadow, the only shadow in the room that isn't moving, and it tries it on.

    It's the strangest feeling I've ever had. Like someone putting their arms into your coat while you're still wearing it. My shadow on the floor starts to lift its hand when I haven't. I don't move. I think about Martin's toast, and Will's pumpkin, and Nolan's cables, and every ordinary thing that makes me the shape I am, and I hold it, and I hold it, and I don't let it have it.

    @ellis:scared At four minutes and ten seconds, Ellis says, "[i]Now[/i]," in a voice I've never heard him use, and the three of them close it. The lacquer seal runs back across the crack like water filling a footprint. My shadow drops its hand. I sit down on the stair next to Isaac, hard, and find I'm shaking all over.

    @isaac:small "That," says Isaac, very quietly, "was actually not the best thing that's ever happened."
@ellis:tired Ellis comes round the screen with his hands shaking and stands in front of me for a moment, not saying anything. Then he sits down on the floor next to me, not gracefully, just folding up, in the middle of the workroom, and leans his head back against a bench.

@ellis:small "I needed four minutes," he says. "I didn't know if I'd understand it. I didn't know if I was good enough to understand it in four minutes. I've never not known before." He closes his eyes. "You held it. While I didn't know."

"You understood it."

@ellis:warm "Yes," he says. "Eventually." And he laughs, shakily, with his eyes still closed, and doesn't perform anything at all.

*comment ---------------------------------------------------------------- CH09.SCREEN.05
*sid CH09.SCREEN.05
*date 2026-10-31 11:00
*place P20 okafor_restoration
*present chukwudi ellis isaac
*mood day
*set screen_done true
*set fr_chukwudi +1
*set program_hint true
Morning. Halloween, officially.

@isaac:angry Isaac has his shadow back and is furious that he slept through the end. "I was [i]there[/i]," he keeps saying. "I was on the [i]stairs[/i]. And then I was in bed. How was I in bed?"

@ellis:amused "I carried you," says Ellis. "You dribbled on my shoulder."

@isaac:angry "I did [i]not[/i]."

The family from Southmere come at ten to collect their screen: a mum and a dad and a grandmother in a wheelchair, the great-aunt's niece, who's ninety. Chukwudi tells them the story. The painter. The river. The drowned brother, Albert, and the thing that wore his shape, and the sister who caught it and sealed it so it could never take anyone else. The seventh panel, on its way back to the Whitcomb, and a photograph of it, which Ellis has printed and framed for them.

The grandmother holds the photograph on her knee for a long time.

"We always said she was a witch," she says at last. "My mother said it. That she was cruel. That she'd trapped something out of spite." She touches the glass over the painted woman on the riverbank. "She was minding us."

Chukwudi writes the whole night in the error book afterwards. It's a real book, big and black and leather, on a shelf in the workroom, going back forty years in his handwriting, and every job that ever nearly went wrong is in it, including this one, including the shadow on the stairs at half eleven. He writes it all down, carefully, including what he'd do differently.

@chukwudi:attentive Then he washes his hands at the workroom sink, and dries them, slowly, on a clean cloth, and says, without turning round: "The three-part method. What we did last night. Three workers, sharing the strain." He folds the cloth. "It's old. Older than me. And I've seen it tried on something other than an object, once."

"What?"

@chukwudi:tense "People," he says. "Mercy House tried something like it, for people instead of objects. A way of holding someone who was dying. Seven years ago." He hangs the cloth on its hook, very precisely. "They closed it. Nobody talks about why."

*comment ================================================================ Halloween
*comment ---------------------------------------------------------------- CH09.HALLOWEEN.01
*label halloween
*sid CH09.HALLOWEEN.01
*date 2026-10-31 19:30
*place P02 print_shop
*present martin will
*mood dusk
*set program_hint true
Halloween on Latch Lane.

The whole street's out. Kids in capes and bin-bag witches and one very small dinosaur. Will's pumpkin is in the shop window, lit, with Martin's logo glowing on it, serifs and all, and people keep stopping to photograph it.

@martin:amused Martin's in the shop doorway with a bowl of sweets. He bought too many. He always buys too many. "I've got two hundred and forty fun-size," he tells me, in despair. "There are forty children in this postcode. What was I [i]thinking[/i]?"

@will:amused Will's beside him, dressed, with enormous irony, as a print-shop owner: Martin's spare apron, a pencil behind his ear, reading glasses pushed up into his hair. He's even got ink on his fingers. He's standing exactly like Martin, with his weight on one foot. Every adult who passes laughs, and Martin pretends to be offended, and is so pleased he can't stand still.

@will:amused "Where've you been?" Will asks me. "You look like you slept in a drain."

I've slept four hours in two days.{@tunnels_done| I pulled a lad out of a culvert under Northline while something did my mum's voice in the dark.| I sat on a stair between a sixteen-year-old boy and something that wanted his shape.} Whatever I did under the city, the city's up here eating chocolate, and the kids are shrieking, and the pumpkin's lit, and I have never been so glad of anything as I am of this street.

"Work," I say.

@will:guarded "Work," says Will. He looks at me for a long moment, over Martin's reading glasses. Then he takes the bowl off Martin and holds it out to me. "Have a fun-size," he says. "We've got two hundred and forty."

My phone buzzes in my pocket while I'm eating it.
*if tunnels_done
  It's Adrian. He never texts after dark unless it's procedure, and this isn't.

  [i]Put the horn in the old stores this afternoon. There's a shelf at the back I've never been allowed near. Boxes with seals. One of them's labelled for a program: "linked care", seven years ago, closed. Orrell's initials on the seal.[/i]

  And then, a minute later: [i]I'm not supposed to be curious. I'm curious. Reuben knows something. He went white when I said it.[/i]
*else
  It's Reuben. Chukwudi must have rung him.

  [i]Chukwudi says you asked about the program. Seven years ago. I was sixteen, a cadet. I remember it. I remember the man who ran it.[/i]

  And then, a minute later: [i]Nobody at Mercy House will talk about it. There's a man up on the ridge who will. Malcolm Tait. He was there when it failed. I'm driving up to see him next Saturday. You could come.[/i]
I look at it for a long time, under the street lamp, with the kids going past in their capes.

A program. Seven years ago. A way of holding someone who was dying.

Somebody's holding Quentin up. Somebody's holding Silas. And somewhere, seven years ago, somebody tried to do something like it, and it went wrong, and they closed it, and nobody talks about why.

*journal [b]Chapter 9.[/b] {@tunnels_done|Under Northline, a mimic that learned voices from the station's old speakers was luring night workers into the dark. With Adrian, Nolan and Micah, I got Danny Rook out of a culvert alive. Nolan knows about the city now.{@b_adrian_offduty| Adrian came to the diner at four in the morning, off duty, for no reason he could name.|}|At Okafor Restoration, a 1920s painted screen held a thing that borrowed shadows. We found its seventh panel in the Whitcomb stores; three workers re-sealed it together, sharing the strain.{@b_ellis_danger| Ellis needed four minutes, and I held it for him.|}}{@know_micah_wolf| Micah and his family change at the full moon.|} There was a program at Mercy House, seven years ago: a way of holding the dying. It was closed, and nobody talks about why.
*page_break
*goto_scene ch10
`);
