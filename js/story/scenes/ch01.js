NB.scene("ch01", String.raw`
*mood dusk
*set ch 1
*chapter 1 After the Last Set
*comment ---------------------------------------------------------------- CH01.HOME.01
*sid CH01.HOME.01
*date 2026-08-29 15:30
*place P02 print_shop
*present martin will
*set st_nolan 3
*set fr_martin 2
*set fr_will 1
The mirror in the bathroom above the print shop has a crack across one corner that Martin says was there before he bought the building, and a silver bloom in the middle where the backing's going, so whoever looks into it looks back through a small, bright fog.

I look back through it. Nineteen. Hair doing what it wants. The face of someone who's been awake since noon and considers that an early start.

Downstairs the press is going. I feel it in the floor before I hear it, a slow, patient knocking, like somebody down there has all the time in the world and is using it to be let in. I brush my teeth to its rhythm. It's the last Saturday of August, and in two and a half hours I'm due at Switchyard for the Last Set, the end-of-summer show, which means eight hours of cases, cable and other people's joy, and I'm looking forward to it more than I'd ever say out loud.

Here is a thing nobody knows about me. Here are two things.

The first is that I'm gay. I've known since I was about twelve, the way you know the name of a street you've never walked down. I haven't told anyone. Not my mum, not Nolan, not the internet. It isn't a secret I'm ashamed of, exactly. It's more that it's mine, and the minute I say it out loud it'll be everybody's, and I'm not ready to hand it round yet.

The second is harder to say, because there isn't a word for it. When I'm near people, I feel what they feel. Not guess. [i]Feel[/i]. Somebody's nerves come through as a tightness under my own ribs. Somebody's happiness is warm, like standing near a radiator. A room full of people is weather, and I'm standing in it without a coat. I call it the knack, because I had to call it something when I was eight and that was the only word I had.

It doesn't tell me what anyone's thinking. It doesn't tell me if they're lying. And it has never once, not one single time, told me how anyone feels about [i]me[/i]. That's the joke of it. I can walk into a room and know that the woman by the window is grieving and the man at the bar is about to do something stupid, and have no idea at all whether the boy across the table likes me.

I should say my name. Everyone here uses it.
*input_text name My first name is:
*commit_stats
"{name}!" Martin's voice comes up the stairwell, over the press. "Are you in there, or have you gone down the plughole?"

"Coming!"

*page_break
*meet martin
*portrait martin neutral
My uncle Martin is forty-four and soft-spoken, heavyset, with ink permanently in the whorls of his fingers and his reading glasses pushed up into his thinning hair, so that he spends half his life looking for them. The print shop is his. So is the building, and so, for three years now, is the job of having me in it.

He's at the press with a stack of church-fete flyers coming off the rollers, and on the counter beside him, face down, is an envelope with a red stripe along the top. I know what the red stripe means, because I've seen the last two. He's put a mug on it. It's what you do when you're not looking at something very hard.

The knack gives me Martin the way it always does: a low, steady warmth, like a kettle keeping itself hot. And underneath it, this week, something I can only call a held breath.

"Your mum's emails came," he says. "All at once. The satellite. They're on the laptop. You've got a batch."

"How many?"

"Seven." He smiles. "She's been saving up."

I open the laptop on the end of the counter. Seven emails, three weeks of my mother in one go, the way she always arrives: like weather.
*letter mum_01
I read it twice. It's the P.S. that gets me. It's always the P.S. with her.

"She says you should charge me rent," I say.

"She says that every time."

"She says you should let me pay it late."

"She also says that." He takes the glasses out of his hair, finds they were there all along, and puts them back. The mug on the red envelope doesn't move. "Listen. Monday. I've got the Fairweather order to go out and the van's making the noise again. If you could do the delivery run before your shift, I'd..." He stops. "No. Forget it. You've got enough on."

*choice
  #"I'll do it. Monday morning, before my shift. Give me the list."
    *set s01 "intro"
    *set fr_martin +1
    He looks at me over the glasses for a second, the way he does when he's decided not to argue. "Seven stops," he says. "Mrs Fairweather first, or she'll phone. Thank you, {name}."

    The held breath in him lets out a little. Not all the way. Whatever the red stripe is, it's bigger than one Monday.
  #"I can't, Martin. I've got crew calls all week. I'm sorry."
    *set s01 "intro"
    "No, no, that's fine," he says, and it's the knack that tells me it isn't, because his voice does a perfect job of it. A little pinch in the warmth, there and gone. "I'll sort it."

    He goes back to the flyers. The mug stays where it is.
*page_break
*comment ---------------------------------------------------------------- CH01.HOME.02
*sid CH01.HOME.02
*date 2026-08-29 16:00
*present will
*meet will
*portrait will neutral
My cousin Will is seventeen, taller than me since last Christmas, which he mentions, and made entirely of elbows. He's at the kitchen table upstairs in his team hoodie with a bowl of cereal at four in the afternoon, watching match highlights on his phone with the sound off and his leg bouncing under the table.

Tomorrow's his trial for the regional academy: two hours of drills in front of scouts who could put him on the path he's been talking about since he was nine. I know how much it matters because I can feel it through the wall: a bright, tight wire of want, strung so hard it hums.

"You're working tonight," he says, not looking up.

"The Last Set."

"Right." Spoon. Scroll. Leg. "So you'll be dead tomorrow."

"I'll be tired tomorrow."

"Dad's got the Fairweather thing in the morning, so..." He stops, puts his spoon down, picks it back up. "Doesn't matter. I can get the bus. It's two buses. It's fine."

He's asking. He's asking the way people in our family ask for things, which is by explaining at length why they don't need them. And under it the knack gives me the other thing: he's already expecting me to say no. He's braced for it, like a flinch saved up.

*choice
  #"I'll be there. Nine o'clock. I'll bring the bad coffee."
    *set s13 "intro"
    *set fr_will +1
    He looks up, at last. "You'll be dead."

    "I'll be dead at nine o'clock in the car outside your trial with two cups of the bad coffee from the garage. Go and eat something that isn't cereal."

    "It's got iron in it," he says, but the wire in him loosens a notch, and the leg under the table stops.
  #"If I'm up. It's the Last Set tonight. I'll text you."
    *set s13 "intro"
    "Yeah," he says. "Sure. Text me." He goes back to the highlights.

    The flinch he'd saved up gets spent. It's small. It's the kind of small that adds up.
*page_break
*comment ---------------------------------------------------------------- CH01.SWITCH.01
*sid CH01.SWITCH.01
*mood neon
*date 2026-08-29 18:00
*place P13
*present nolan desmond caspar micah
*set fr_desmond 1
*set st_micah 1
Switchyard is an old engine shed at the end of Arden Street with a curved brick roof and a blade sign that says SWITCHYARD down its length in letters that glow orange at night. On a Saturday in August, with the doors rolled up and the trucks backed in, it smells of hot dust and gaffer tape and the lemon cleaner Desmond makes us mop the bar with, and it's the only place in the city where I've ever felt exactly where I'm supposed to be.

I hang my ear defenders round my neck, where they live until the doors open. Everyone on crew thinks I've got sensitive ears. They're not wrong. They're just not right in the way they think.
*meet nolan
*portrait nolan neutral
"You're late," says Nolan, who isn't looking at his watch, because he doesn't wear one. He's on the edge of the stage with a stage box open beside him and a loose connector in his fingers, turning it over and over, the way he always has something turning over. Long legs, a sandy fringe he cuts himself and always too short on the left, freckles that come out in summer like they've been waiting all year. We've been best friends since we were sixteen, when he stood between me and a lad at the bus stop who wanted a fight, and talked him out of it so kindly that the lad ended up apologising.

"I'm four minutes early."

"You're late by my internal clock."

"Your internal clock's broken."

"My internal clock," he says, "is the only clock in this building that's ever been right." Which, knowing the building, is true.

With Nolan the knack is easy. It always has been. He comes through like a radio in the next room playing a song I know: never loud, always there. Tonight there's something under it I haven't felt from him before, a sort of lean, like someone standing on one foot. I file it away.
*meet desmond
Desmond Aster, who runs Switchyard and has run it for six years on charm and borrowed money, comes across the floor in his blazer and band shirt with his clipboard held like a hymn book. "My favourite crew," he says, which he says to everyone. "Quick one. We might run over tonight. A little. Would you two be heroes and stay on for a couple of hours after? Just a couple. I'll owe you." He's warm and sincere and completely, sunnily broke. The knack gives me his worry like the smell of burnt toast from another room. The lease is up in the spring. Everyone knows. Nobody says.
*meet caspar
Up in the grid, Caspar is hanging lights, with a beanie pulled down over his curls and gaffer tape stuck to his jeans for later. He waves down at me with a spanner. There's something about Caspar I've never been able to read, which is unusual. With most people the knack gives me the weather at least. With Caspar it's like a window with the blind half down.

And by the side of the stage, crouched in front of the distribution board with its cover off and a torch in his teeth, there's someone I don't know.
*meet micah
*portrait micah neutral
He's twenty, maybe twenty-one. Wide shoulders under a canvas work jacket, a pencil in the breast pocket, dark hair that's clearly been pushed off his face with a hand and has decided not to stay. When he takes the torch out of his mouth to swear at the breaker, he does it quietly and with real feeling, and I like him immediately.

"Micah," says Nolan, following my eyes. "From Serrano's, the electrical firm on Eastbank. Des borrowed him. The distro's tripping again."

"I heard that," says Micah, not turning round. "It's not tripping. It's [i]dying[/i]. It's been dying since before either of you were born. Somebody's been feeding it the wrong fuses for ten years and it's finally had enough." He sits back on his heels and rubs his eyes with the heel of his hand. "Sorry. Rough night. I'm not at my most charming."

The knack gives me Micah like walking out of a cold room into the sun. It's so strong I actually stop. Big and warm and a bit raw at the edges, like someone who's just run a very long way and hasn't got his breath back. And under it, something I can't name: a deep, animal tiredness, right down in the bones. I've never felt anything like it from anyone.

*choice
  #Help Micah with the distro board. Two sets of hands, one bad breaker.
    *set b_micah_distro true
    *set craft +3
    I crouch down beside him. "You hold the cover, I'll hold the torch."

    He looks at me properly for the first time. His eyes are brown and very tired and very amused. "You know what you're looking at?"

    "Enough to know I shouldn't touch the red thing."

    "The red thing's fine. It's the grey thing you don't want to touch." But he hands me the torch, and we do it together: me holding the light steady and reading him the ratings off the old fuses while he swaps out the worst of them, his hands quick and sure, a tiny burn scar across one knuckle. It takes twenty minutes. When the board holds under load he sits back and laughs, a big surprised laugh, and claps me on the shoulder hard enough that I nearly go over.

    "You've got good hands," he says. "Steady. If you ever want work, come and see us on Eastbank. My dad's always short." Then he says, "Micah," and holds his hand out, as if we hadn't already done that part.

    "{name}."

    "{name}," he repeats, as if he's filing it.
  #Help Nolan patch the stage box, and let him talk.
    *set st_nolan +1
    I sit down on the edge of the stage beside Nolan and hand him the crimper before he asks. We do the stage box the way we've done a hundred of them: him on the connectors, me on the labels, neither of us really looking at the other, which is when Nolan talks.

    He talks about nothing for a while: a band he's into, his flatmate Peter, who alphabetises the spice rack and has started labelling the milk. Then he says, "Do you ever think about just [i]going[/i]? Like, somewhere else?" And before I can answer he says, "Forget it," and shows me a cable with a dead pin as though it's the most fascinating object in the world.

    The lean in him leans a little further. I let him not say it. That's what we're good at.
  #Tell Desmond we're not doing free hours tonight. Not me, and not Nolan.
    *set s06 "intro"
    *set nerve +2
    *set st_nolan +1
    *set fr_desmond -1
    "Des," I say. "We can't do free hours. Not tonight. Pay us for them, or don't ask."

    His face doesn't change, because Desmond's face never changes when the news is bad. But the burnt-toast worry flares. "Of course," he says. "Of course. You're absolutely right. I'll find a way." He goes back across the floor, and I feel like the worst person in the building.

    Nolan doesn't say anything. But when I turn back, the lean in him has straightened up, just slightly, like someone who's found a wall to put his back against. "Thanks," he says, very quietly, to the connector.
*page_break
*comment ---------------------------------------------------------------- CH01.SWITCH.02
*sid CH01.SWITCH.02
*date 2026-08-29 21:30
*present nolan quentin peter
The doors open at seven, and by half nine the Last Set is a living thing.

I'm at the side of the stage by the dimmers with my ear defenders on. They help, a little, with both kinds of noise. Without them it would be like standing in the sea. With them it's like standing in the sea in a raincoat. The crowd's all ages, all summer: kids in their first real going-out clothes, older lads in band shirts who've been coming since before it was Switchyard, a hen party in matching glitter having the best night of their lives. The knack takes all of it and hands it to me in one wet armful. Joy, mostly, a whole room of it, steaming off everyone like heat off a road. Somebody's first kiss in the corner by the fire exit, bright as a struck match. A boy at the barrier whose heart is quietly breaking, because the girl he came with is dancing with someone else. It comes through the defenders like bass through a wall.

I love it. I should say that. It's too much, and I love it.

Between bands I go to the bar to get Nolan a water, and there are two lads in the queue in matching black T-shirts with DOUBLE SHIFT on the back in small white letters.
*meet peter
One of them is neat as a pin, with gelled hair and a work lanyard he's kept on to come to a gig, in case he's called upon to manage something. PETER, it says. TRAINEE MANAGER. Nolan's flatmate, the one with the labelled milk. He's explaining to the other one, at length, the correct procedure for something.
*meet quentin
*portrait quentin neutral
The other one isn't listening. He's leaning on the bar on one elbow with his weight on one foot and a face of pure long-suffering, like a man who's been told the correct procedure for something every day for a year. Twenty-one, twenty-two. Close dark curls, strong eyebrows, a mouth that looks about to say something funny and hasn't decided what yet. He catches me looking and doesn't look away, and the knack gives me him like a match being struck: quick, bright, amused, with something steady underneath like a floor.

"Hey," he says. "You're crew. Do crew have plasters? Please say crew have plasters. I've got new work boots and they're eating me alive. I'm going to have to be carried out of here. On a shield."

Peter says, "I did say break them in."

"Peter did say break them in," he agrees. "Peter says a lot of things. Peter's going to be a very successful man, and I'm going to lose a heel." He shifts his weight, and on his belt there's a set of keys on a ring, and on the ring a little tin charm, like a flattened bottle cap with something stamped into it. When he moves it catches the light, and I feel it, weirdly. A tiny hum from the metal. I've never felt anything from a [i]thing[/i] before. Not like that. Not humming.

*choice
  #Find him a plaster, and stay a minute. He's funny.
    *set st_quentin 1
    *set people +2
    I get the first-aid box from behind the bar and find him two plasters and one of the gel ones Desmond hoards. He sits on a bar stool and takes his boot off right there in the queue with no shame whatsoever, while Peter looks at the ceiling.

    "You're a saint," he says. "You're the saint of the bar queue. What's your name, saint?"

    "{name}."

    "Quentin. Double Shift, over by Northline. Come in, I'll do you a coffee. I make a very good coffee. It's the only thing I'm good at, don't tell anyone." He grins at me, a big lopsided grin with nothing held back in it. "Peter makes a very correct coffee."

    "There's a standard," says Peter.

    "There is a standard," Quentin agrees solemnly, and puts his boot back on, and winces, and pats my arm. "Saint {name}. I'll remember you."
  #Point him at the first-aid box behind the bar, and get back to work.
    *set st_quentin 1
    "First-aid box, behind the bar, left side," I say. "Ask Des for the gel ones."

    "Legend," he says, and salutes me with two fingers, and limps heroically off towards the box, with Peter explaining behind him the correct way to limp.
  #Take Nolan his water, and ask him properly what's going on.
    *set s02 "intro"
    *set st_nolan +1
    *set st_quentin 1
    I leave the Double Shift lads to their plasters and take Nolan his water at the sound desk, and put it down in front of him, and don't go.

    "What?" he says.

    "You tell me."

    He looks at the desk for a while. Then he says, very fast, like pulling off a plaster: "There's a course. Sound engineering, a proper one, the good one, in Wexmoor. They've offered me a place. It starts next September. I haven't told anyone. I haven't told my [i]mum[/i]. I don't know if I'm going."

    The lean in him. That's what it was. Somebody standing on one foot, getting ready to step off.

    "That's brilliant," I say. And I mean it. And under the meaning it, something in me goes very quiet, like a room when the power cuts out.

    "Is it?" He looks at me, and for one second I'd give anything for the knack to work the other way round. "Yeah," he says. "I suppose it is." Later, going back to the dimmers, I see the lad with the curls still in the bar queue, laughing at something, one boot off.
*page_break
*comment ---------------------------------------------------------------- CH01.LANE.01
*sid CH01.LANE.01
*mood night
*date 2026-08-30 00:35
*place P13 switchyard_lane
*present quentin
The Last Set ends at half eleven with the whole room singing the last song back at the band louder than the band, and then it's over, the way it's always over: all at once, like a tap turned off. The lights come up. Everyone looks sweaty and surprised. By midnight the room's empty except for us, and the cups, and the smell.

Load-out. My favourite part, if I'm honest. The adrenaline's gone and the tiredness hasn't landed yet, and there's nothing to do but carry things.

At twenty-five to one I push a stack of empty road cases out through the loading door into the rear lane.

It's drizzling. The lane runs between the back of Switchyard and the back of the old building opposite: brick on both sides, fire escapes, bins, the caged lamp over our door buzzing and throwing a cold light that doesn't reach very far. At the far end the lane opens onto Arden Street, where there's one orange streetlamp and the whole city beyond it. The moon's up over the rooftops, a day past full. The wet asphalt doubles everything.

I take my ear defenders off. Out here there's nobody for them to protect me from.

Except there is.

At the far end of the lane, by the bins, there's a figure on his own, on his phone, in the orange light. It takes me a second. Close curls, a black T-shirt. The lad from the bar queue with the boots. Quentin. He's leaning on the wall with his head down, the way you do when you're getting bad news and don't want anyone to see your face.

And there's somebody else. A man coming down the lane from Arden Street, walking easily, not hurrying. A service jacket, the kind with reflective strips, and the hood up against the drizzle. Clean hands. That's what I notice, stupidly. His hands are very clean.

He says something to Quentin. Quentin looks up.

Then something on Quentin's key ring flares. Not light. Heat. I feel it from forty metres away, like somebody's opened an oven. The tin charm.

And the knack goes off in me like a struck bell.

It's never done this. It's never done anything like this. It isn't weather. It's one enormous note that goes in through my chest and out through my back, and under it, doubled, a [i]pulse[/i], two heartbeats where there should be one, and a feeling like a rope pulled tight: out of Quentin, out through the wall, out across the city to somewhere very far away, and pulling.

Quentin puts a hand out to the wall. He doesn't make a sound.

He falls.

*choice
  #Stay behind the cases. Watch. Get my phone up.
    *set ch01_saw "cover"
    *set e01 true
    *set e01_src "phone"
    *goto cover
  #Run at them.
    *set ch01_saw "approach"
    *set nerve +3
    *goto approach
  #Run back inside for Nolan and Desmond.
    *set ch01_saw "help"
    *goto help

*comment ---------------------------------------------------------------- CH01.LANE.COVER
*label cover
*sid CH01.LANE.COVER
*date 2026-08-30 00:40
I get down behind the cases. My hands are shaking so badly I nearly drop the phone. I get it up anyway, over the top of the stack, and hit record, and watch the lane through a screen, because a screen is further away.

Fourteen seconds. That's all I get.

The man in the service jacket crouches beside Quentin. His back's to me the whole time; the hood never comes down. He puts two fingers to Quentin's neck, calm as a nurse. He takes the keys off Quentin's belt, looks at the charm, and puts them back. He says something I can't hear. And the whole time the pulse goes on in me, [i]doubled[/i], even after Quentin's chest has stopped moving. Even after. It doesn't stop. Something is still holding on to him, from very far away.

A van reverses into the far end of the lane from Arden Street, quiet, headlights off. White. On the side, painted, a lily.

The screen goes black. Storage full. Of course it's full. Four thousand photos of cable runs.

When I look up over the cases, the van's pulling away with its back doors closing, and the lane is empty. Nothing by the bins. Not a body. Not anything. Just the drizzle and the orange lamp and the doubled pulse in my chest, fading the way a note does: not stopping, just getting too far away to hear.

Nobody saw me. I'm almost sure nobody saw me.
*goto after

*comment ---------------------------------------------------------------- CH01.LANE.APPROACH
*label approach
*sid CH01.LANE.APPROACH
*date 2026-08-30 00:40
*present quentin
I run.

I don't decide to. My legs decide, and the rest of me finds out on the way. Forty metres of wet asphalt, and then I'm on my knees beside him, and he's dying. I know it the way you know you've missed a step in the dark.

I put my hands on him because I don't know what else to do. On his chest, like the first-aid course. And under my palms there's the pulse, and it's wrong, it's [i]doubled[/i], two beats tangled together, and one of them is his and it's stopping. I feel it stop. I feel his heart stop under my hands.

And the other one doesn't.

The other one goes on. Steady. Slow. Pulling. Like somebody at the far end of a rope who hasn't let go.

A hand takes me by the back of the collar and throws me into the wall.

I hit it with my shoulder and my head and see a burst of orange. The man in the service jacket is standing over Quentin. His hood's up, but I'm below him now, looking up, and I can see his jaw: clean-shaven, pleasant, an ordinary face in the ordinary way of a man doing a job. He looks down at me, and he doesn't seem angry. If anything he seems a little sad.

"Sorry," he says, and it sounds like he means it.

A van is reversing into the lane behind him. White. On the side, painted, a lily.

*choice
  #Hold on to Quentin, until they pull him away from me.
    *set hurt_mc 1
    *set enemy_aware 1
    *set knack +3
    I get back to him. I don't know how; I think I crawl. I get both hands on him and hold on, and I feel it all the way in: the rope, the doubled beat, the thing at the far end of it, pulling. For one second I feel [i]where[/i] it goes. Out and away and down, somewhere cold, somewhere near water.

    Then the back doors of the van are open and two pairs of hands are lifting him, and one of them takes my wrist and twists it off him, not cruelly, efficiently, and I lose him.

    The doors close. The van goes. The man in the service jacket goes with it, and before he does, he looks back at me once, a long look, the kind you give a face you want to remember.
  #Go for the man's arm. Get something. Anything.
    *set hurt_mc 1
    *set enemy_aware 1
    *set cuff_button true
    I throw myself at his arm as he turns away. He's stronger than me, much stronger, and he shakes me off like a coat, but I've got his sleeve and I don't let go, and something tears. He puts me down on the asphalt with one shove and a knee, steps over me, and he's in the van, and the van's gone, and I'm lying in the wet with my fist closed so tight my nails are in my palm.

    When I open it there's a button. A cuff button, torn off with a thread still in it. Brass. Heavy. Old. Stamped with something worn almost smooth: a little building with a cross over the door.

    He looked back at me once, as the doors closed. A long look. The kind you give a face you want to remember.
*goto after

*comment ---------------------------------------------------------------- CH01.LANE.HELP
*label help
*sid CH01.LANE.HELP
*date 2026-08-30 00:41
*present nolan desmond
I run the other way.

Back through the loading door, through the empty venue, shouting, and it's the longest thirty seconds of my life. Nolan's at the sound desk winding a cable, and he looks up and sees my face and drops it. Desmond's behind the bar counting the float.

"The lane," I say. "Someone's... there's a man, he's... [i]come on[/i]."

They come. By the time we're back through the loading door the lane's almost empty. There's a van at the far end, white, turning out onto Arden Street with its back doors swinging shut and its lights off, and on its side, as it swings under the orange lamp, something painted. A lily. Then it's gone.

There's nothing by the bins.

Nolan's breathing hard beside me. "What was that? {name}. What [i]was[/i] that?"

"There was someone," I say. "There was a lad. From the bar. He fell. And a man, and he..." And I can't finish, because the doubled pulse is still going in me, faint, fading away across the city like a note, and I can't explain that to anyone. Not even Nolan. Especially not Nolan.

Desmond has his phone out and is looking up at the corner of the building, where the little camera is. "That covers the lane," he says. "The camera. I'll sort the footage. First thing. I'll get it off the box." He means it. The knack gives me his fear, sharp and real. But Desmond means a lot of things, and there's a leak over the green room he's been sorting since March.

*choice
  #Ask Nolan to pull the camera file tonight, before Desmond forgets.
    *set e02 true
    *set e02_src "nolan"
    *set st_nolan +1
    "Nol," I say quietly, while Desmond's on the phone. "Can you get it off the box? Tonight. Now."

    He looks at me. He doesn't ask why. He goes into the office and I hear him swearing at the recorder, and twenty minutes later he comes out with a memory stick, puts it in my hand, and closes my fingers over it.

    "Didn't see anything," he says. "I didn't look." He did look. I can feel it on him, a cold wet patch of fear where the warmth usually is. He's a witness now, too. I've done that to him.
  #Leave the footage to Desmond. He said he'd sort it.
    I leave it to Desmond. He said first thing. He'll probably mean it.

    Nolan's standing very close to me, closer than usual, and his fear comes off him like cold off a fridge door. He saw the van. He's a witness now, too.
*goto after

*comment ---------------------------------------------------------------- CH01.LANE.AFTER
*label after
*sid CH01.LANE.AFTER
*date 2026-08-30 01:20
*present nolan
*snapshot lane
By twenty past one, the drizzle has rinsed the lane clean.
*if ch01_saw != "help"
  Nolan finds me there. I don't know how long I've been standing by the bins. He comes out of the loading door with his jacket on and my ear defenders in his hand, looking for me, and stops when he sees my face.
*else
  Nolan stays out there with me after Desmond's gone back in to lock up. Neither of us says anything for a long time.
He doesn't ask. Not yet. He hangs the ear defenders round my neck like a scarf and leaves his hand on my shoulder a second longer than he needs to, and says, "I'll walk you."

"You live the other way."

"I'll walk you anyway."
*if hurt_mc > 0
  My shoulder's singing and there's a lump coming up on the back of my head, and when Nolan sees it under the lamp he swears very quietly and starts to say "hospital", and I say "no", and he looks at me for a long moment and says, "Fine. But I'm staying up with you." He means it. Later, he does.

We walk home the long way, along the river, because I can't face the bus. The water's black and slow and the bridges are strung with lights. The city's doing what it does on a Saturday at one in the morning: taxis, chip shops, a couple arguing lovingly outside a club. Ordinary. All of it completely ordinary. And the knack is buzzing in me like a bad tooth, a high thin note that won't stop, and every time I close my eyes I feel that pulse, doubled, going on after it should have stopped.

I don't know what I saw. I know what I felt. I felt a man die. And I felt something keep hold of him.

At the corner of Latch Lane, Nolan stops and looks at me and says, "Tomorrow you're telling me. Whatever it is." Then he goes off up the hill with his hands in his pockets and doesn't look back, which is how I know he's scared.

The print shop's dark. But upstairs, the light's still on in Martin's window. He's waited up. He's never once said that he does.

*journal [b]Chapter 1.[/b] At the Last Set I met Micah, the electrician, and Quentin from Double Shift. At load-out I watched Quentin fall in the rear lane, and felt something keep hold of him after he died. A white van with a lily painted on it took him away.
*achieve first_pulse
*page_break
*goto_scene ch02
`);
