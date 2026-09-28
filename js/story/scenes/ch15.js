NB.scene("ch15", String.raw`
*mood winter
*set ch 15
*chapter 15 Stillwater
*comment ---------------------------------------------------------------- CH15.ROAD.01
*sid CH15.ROAD.01
*date 2027-01-02 07:00
*place P55
*present ansel
*if companion = "adrian"
  *present ansel adrian
*elseif companion = "micah"
  *present ansel micah
*elseif companion = "nolan"
  *present ansel nolan
*elseif companion = "reuben"
  *present ansel reuben
*set strain 0
Two hours on the local road, downriver, in a hired cart that smells of apples.

It's barely light. The road follows the river east out of Bracken Court, through frozen water-meadows and past bare orchards and little villages with candles still burning in their windows from the Fair, and the river beside us gets wider and slower and greyer the further we go. The carter's an old woman who doesn't talk, which suits everyone.
*if companion = "adrian"
  @adrian:tense Adrian's got a map on his knee that he's annotated in three colours. He hasn't slept. Neither have I.
*elseif companion = "micah"
  @micah:tense Micah's sitting on the tailboard with his legs hanging off, watching the road behind us, and breathing slow and deep, the way he did on old platform four. Smelling the wind.
*elseif companion = "nolan"
  @nolan:tense Nolan's got the recorder in his lap, switched off, and he keeps turning it over and over in his hands and not switching it on.
*elseif companion = "reuben"
  @reuben:tense Reuben's got his medic's bag between his feet and his hand on it, the whole way, like a man holding a dog's lead.
@ansel:guarded Ansel sits very straight in the back of the cart, with his collar up and Eamon's letter in the inside pocket of his coat, and doesn't say anything at all.

Stillwater comes up out of the mist at nine: working docks, where the river widens into a sort of harbour before it goes on east to places I don't know the names of. Wharves and cranes and jetties. Boat repair sheds with half-built hulls inside them like ribcages. Old warehouses, brick and timber, a long row of them along the waterfront, numbered in white paint. Crews in heavy coats unloading barrels, apples, timber. Gulls. Smoke. The smell of tar and river and fish.

The knack gives it to me like a crowded pub: loud, and tired, and busy, and ordinary. And under it, somewhere along the waterfront, something that isn't ordinary at all. Two threads, humming, taut, running west.

Warehouse seven is halfway along the row. It looks like all the others, except that its locks are new. Bright brass, three of them, on a door that hasn't been painted since before I was born. And there's a man on a chair outside the water door, smoking, who isn't unloading anything.

*choice
  #Watch from the boat sheds. Something is scheduled for this morning; the gate crew said so.
    *set ch15_way "observe"
    *goto observe
  *if (still_lead = "clerk") or (still_lead = "registry")
    #Find someone who works inside. We have a name.
      *set ch15_way "witness"
      *goto witness

*comment ---------------------------------------------------------------- CH15.OBSERVE.01
*label observe
*sid CH15.OBSERVE.01
*date 2027-01-02 10:30
*place P56 stillwater_docks
*present ansel clive
*set know_clive_taken true
*set know_donors +1
The boat shed opposite warehouse seven has a hull in it and a loft over it, and a gap in the loft's planking you can see the whole waterfront through. The shipwright, who Ansel paid, has gone to lunch at half past nine and won't be back.

We watch for an hour. The man outside the water door smokes four cigarettes. Nothing happens.

Then, at half past ten, a boat.

A covered boat. Long and low, with a canvas over the back, coming up the river from the east, very slowly, and nosing in to warehouse seven's water door as if it's done it before. Two men get out. And from under the canvas, between them, they lift a third.

A big man. Heavy. His head lolls. His arms hang. He's wearing a flat cap, which falls off onto the jetty, and one of the men picks it up and puts it back on him, carefully, almost kindly. Under his fingernails, even from here, I can see it: clay. Grey, dried, in the creases of his big hands.

I know him.

Clive Merritt. At the Whitcomb, in November, at his wheel, with clay up to his elbows, making the donors laugh. [i]You want it to crack. That's where the gold goes.[/i]

The knack reaches for him before I can stop it. And there's a thread in him. Fresh. New. Anchored in the middle of his chest like a hook that's just been set. But not running anywhere yet. Slack. Waiting.
*if threads_three
  The third thread. The empty harness from the Glass Road. It was waiting for him.
@ansel:scared Ansel's hand closes on my arm so hard it hurts.

*choice
  *selectable_if (nerve >= 40) #Get closer. See the faces. Stay unseen.
    *set nerve +3
    *set saw_crew true
    I go down the loft ladder and along the back of the boat shed, under the hull, to the doorway at the waterfront end, and crouch behind a stack of timber, twenty feet from the jetty.

    I see their faces. Both of them. One young, one older, ordinary, dockside faces, the kind you'd pass a hundred times and never remember. I remember them. I make myself. The young one has a scar through his lip. The older one has a wedding ring and a cough. They carry Clive in through the water door like a roll of carpet, and the door shuts, and a bolt goes across on the inside.

    Nobody looks my way. When I get back up the ladder, my hands are shaking so badly Ansel has to help me through the hatch.
  #Stay where I am. Count them. Photograph the boat.
    *set boat_photo true
    I stay where I am. I get my phone out, which doesn't have any signal in the Marches but still has a camera, and I photograph everything through the gap in the planks. The boat: long, low, green-painted, a name on the bow I can just read. The water door. The two men. The man on the chair. Clive, between them, with his cap on.

    I count. Three at the water door. One on the chair. And later, when the boat goes, the sound of at least two more inside, and a stove being fed.

    It isn't much. It's something. It's in my phone.
  #Stand up without thinking.
    *set enemy_aware +1
    I stand up.

    I don't decide to. It's Clive. It's the cap falling off and the man putting it back on him. My body just stands up, in the loft, with my head and shoulders in the gap in the planking, in full view of the jetty.

    And the man on the chair, the one who's been smoking, looks up. Straight at me. Straight at the boat-shed loft, across forty feet of water, at a face in a gap in the planks.

    Ansel pulls me down by the back of my coat so hard I hit the floor.

    We lie there in the sawdust, not breathing. When I look again, the man's on his feet, looking at the boat shed. Just looking. Then he says something to one of the others, and they both look. And then they carry Clive inside, and the door shuts, and the man sits back down on his chair.

    But he doesn't take his eyes off the shed again. Not once, for the rest of the morning.
*goto chambers

*comment ---------------------------------------------------------------- CH15.WITNESS.01
*label witness
*sid CH15.WITNESS.01
*date 2027-01-02 10:30
*place P56 stillwater_docks
*present ansel
*set know_clive_taken true
*set know_donors +1
*set shift_change true
{@still_lead = "clerk"|We ask for the night-gate man by the name on the steward's scrap of paper, at a crew hut by the east gate, and he comes, wary, and knows the steward's name, and lets us in.|We ask for the clerk by the name read into the court record, the one who signed the sublet for warehouse seven, at a crew hut by the east gate. He's not a clerk any more. He's the night-gate man, demoted, bitter, and he lets us in because Ansel's collar frightens him.}

The crew hut is a tin shed with a stove, three chairs, a calendar with a picture of a boat on it, and a pot of coffee that's been on the stove since roughly August. He pours us each a mug. It's the worst thing I've ever tasted. He's a big, tired man in his fifties with a knitted hat and hands like shovels, and he's frightened, and ashamed of being frightened, and more ashamed of something else.

"Sick men," he says, when Ansel asks, very carefully. "That's what they told us. Warehouse seven. Sick men from Calder, being looked after. Private care. A physician's assistant comes twice a week, from over the river, with bags. Bags of fluid, for drips." He stares at his coffee. "Deller's people pay double for the night gate. Double, and don't ask. So I don't ask."

"How many?"

"Two. Since the autumn. One since the summer." He rubs his face. "And a new one this morning. At dawn. Off a boat. A big lad, in a flat cap, with clay on his hands, like a potter." His voice goes rough. "He was talking, when they brought him in. Asking for his mum. Then he stopped."

Clive. Clive Merritt, at the Whitcomb, at his wheel. [i]You want it to crack. That's where the gold goes.[/i]

"I should have asked," the gate man says. "Why sick men from Calder need four lads and a new lock. I should have asked in August." He looks at me. "I'm asking now. That's why I let you in."

He tells us the shift change: one o'clock, when the day men come on and the night men go off, and for eight minutes nobody's watching anything but their own coffee. And which window: the high one on the river side, over the old loading bay, that you can get to from the roof of the boat shed next door, if you don't mind heights.

*choice
  #Promise him nobody will know it was him. Keep the promise.
    *set witness_safe true
    "Nobody will know it was you," I say. "Not from us. Not ever. I promise."

    He looks at me for a long time. Then at Ansel. Then back at me.

    "People always say that," he says.

    "I'm not people."

    And he laughs, a short, surprised bark, and something in him eases, a knot he's been tying and retying since August. "No," he says. "No, you're not, are you."
  #Ask him to be our man inside on the night we come back.
    *set inside_man true
    "We'll come back," I say. "Not now. When we can do it properly, without anyone getting hurt. When we do, we'll need someone on the gate who'll open it."

    He says no. Straight away, flat, [i]no[/i]. Then he looks at his coffee for a long time and says yes. Then he says he'll want paying, double what Deller pays, because he's got a daughter. Then he looks at me again, and at the calendar with the boat on it, and says, very quietly, "No. I'll do it for nothing. I should have done something in August for nothing."

    He writes something on the back of a delivery docket and gives it to Ansel: a way to reach him, through a cousin, through a bakery in Bracken Court. It's a real person's decision, made slowly and badly and for real reasons. I think it'll hold.
*goto chambers

*comment ---------------------------------------------------------------- CH15.CHAMBERS.01
*label chambers
*sid CH15.CHAMBERS.01
*date 2027-01-02 13:30
*place P56 stillwater_docks
*present ansel eamon hugo clive
*if companion = "adrian"
  *present ansel eamon hugo clive adrian
*elseif companion = "micah"
  *present ansel eamon hugo clive micah
*elseif companion = "nolan"
  *present ansel eamon hugo clive nolan
*elseif companion = "reuben"
  *present ansel eamon hugo clive reuben
*set e14 true
*set e14_src "stillwater"
*set know_donors 3
*set suspect_donor true
The shift change, at one o'clock. Eight minutes.

The boat shed next door to warehouse seven has a flat tarred roof, and a drainpipe up to it, and from the roof's edge, lying flat on the freezing tar, you can see through the high window on the river side of warehouse seven, over the old loading bay. {@ch15_way = "witness"|The gate man was right.|We found it by watching the day crew smoke on the jetty and working out which window they didn't look at.}
*if companion = "micah"
  @micah:tense Micah goes up the drainpipe first and pulls us up after him one by one, like lifting shopping.
*elseif companion = "adrian"
  @adrian:tense Adrian goes up the drainpipe first, checks the roof, and signals us up one at a time with two fingers, like a procedure.
*elseif companion = "nolan"
  @nolan:scared Nolan goes up the drainpipe last, very white, saying "I don't like this, I don't like this, I don't like this," all the way.
*elseif companion = "reuben"
  @reuben:tense Reuben goes up the drainpipe with his medic's bag on his back, slow and careful, and lies flat beside me on the tar, and doesn't say anything at all.
I lie on the freezing roof with my chin on the edge and look through the high window.

Warehouse seven has been made into a ward.

It's still a warehouse: brick walls, a roof of iron trusses, a concrete floor with old rail tracks in it. But someone's put three hospital beds in a row along the back wall, proper ones, with rails, and drip stands beside each, and a stove in the middle with a pipe going up through the roof, and a table with bottles and bags on it, and a chair for a guard, and a curtain on a rail that's half pulled.

And in the beds, three men.
*meet eamon
In the first bed: a lean young man with black hair, gone thin, grey, hollow-cheeked, with windburn faded to nothing on a face that hasn't seen a wind in four months. His eyes are shut. A drip in his arm. His chest going up and down, slow, slow. Breathing.

Eamon Kerr.

@ansel:scared Beside me on the roof, Ansel makes a sound. Just one. Very small. Like something breaking a long way off. His hand, on the tar, closes into a fist.

In the second bed: a big man with a broad face gone hollow, black hair grown out and matted, in a hospital gown.
*if ch07_evening = "nolan"
  Hugo Naranjo. The last time I saw him he was on the arm of Nolan's sofa in a hi-vis vest over a good shirt, telling me a bus is a room that goes places. [i]Monday week. Wish me luck.[/i]
*elseif ch07_evening = "serrano"
  Hugo Naranjo. The last time I saw him he was at the Serrano table with a borrowed torque wrench, arguing with Leandro about whether he should wear a tie to his interview. [i]Monday week. Wish me luck.[/i]
*else
  Hugo Naranjo. The last time I saw him he was waving from the doors of a night bus, with a sausage roll in his hand. [i]Monday week. Wish me luck.[/i]
And in the third bed, still in his flat cap, still with clay under his nails, newly arrived, with a fresh drip and his big chest going up and down: Clive.

And the knack sees it all at once.

It's like looking at a lighting plot. Every line at once. Two threads, taut as cables, thick and humming and straining, running out of the first bed and the second, up through the roof of warehouse seven, west, back towards Calder, out of sight. I know where they go. I've felt the other ends of them every day for four months. Eamon's runs to Quentin. Hugo's runs to Silas.

They're alive. The donors are alive. And every day Quentin gets up and makes coffee, and every day Silas folds a croissant, is a day taken out of a man in a bed in a warehouse in another country.

And the third thread, in Clive. Freshly anchored. Slack. Running west too, towards Calder, but loose, like a rope thrown across a gap with nobody yet on the other side to catch it. Waiting for someone.

Waiting for a third man to die.
*snapshot docks

We can't take them. I know it the way I know my own hands. There are four men with guns in that building; I can feel them, bored and cold and dangerous. There's a gate and a wall and a river. And the links: if we cut Eamon out of that bed, now, like this, the thread snaps, and whatever's on the other end of it snaps too. Quentin. We'd kill Quentin to save Eamon. We'd kill Silas to save Hugo.

Not yet. Not like this.

*choice
  #Look at Eamon until he feels it. Let him know someone came.
    *set eamon_saw true
    *set strain +1
    I look at Eamon.

    Not with my eyes. With the knack. I find him down the thread, in the grey, in whatever drugged deep place he's been lying in since August, and I push. Not words. I don't know if words work. Just the one thing, the only thing I've got: [i]someone came. Someone's here. Ansel's here. You're not forgotten.[/i]

    For a long time, nothing. The drip. The slow chest.

    And then his eyes open.

    Just a crack. Just for a second. He doesn't move his head. He doesn't see us; he can't, not from the bed, not at that angle. But his eyes open, and his lips move, and his fingers on the blanket twitch, once, the way you'd twitch your fingers to say [i]I heard you[/i] if you couldn't say anything else.

    @ansel:small Ansel's crying. Silently, face down on the tar, with his fist against his mouth.

    I've got a headache like an axe. I don't care.
  #Memorise everything: doors, locks, the stove, the guard's habits.
    *set still_layout true
    *set craft +2
    I don't let myself look at the faces. I look at everything else.

    The way I'd look at a venue I'll have to rig. Doors: one on the street side, three brass locks; one on the water side, a bolt, inside. The window I'm looking through: old, single-glazed, a catch that's rusted open. The stove: coal, the pipe through the roof, the flue on the river side. The guard's chair, and where it faces, and that it doesn't face the high window. The table with the bags. The drip stands. The beds, which have wheels. Where the cables run for the lights, and where the lights are, and where the switch must be.

    Eight minutes. I use every second of them. When the day shift's coffee is finished and the guard turns round, I've got warehouse seven in my head like a lighting plot, every line and every fixture, and I'll be able to draw it with my eyes shut.
*if companion = "adrian"
  @adrian:attentive When we slide back down the drainpipe, Adrian's face is grey and set. "It's a ward," he says. "A proper one. Someone medically trained set that up." He looks back at the warehouse. "Someone who's done this before."
*elseif companion = "micah"
  @micah:angry When we slide back down the drainpipe, Micah's shaking. Not with cold. The deep animal thing in him has come right up to the surface, and it wants to go through that door, and he's holding it back with everything he's got. "Not yet," he says, through his teeth, before I can say it. "I know. Not yet."
*elseif companion = "nolan"
  @nolan:scared When we slide back down the drainpipe, Nolan's sick behind a stack of barrels. Then he wipes his mouth and stands up and says, very steadily, "Right. Okay. What do we need?" And I love him for it.
*elseif companion = "reuben"
  @reuben:sad When we slide back down the drainpipe, Reuben's face is grey. "The drip rates," he says, very quietly. "The colour of them. They're keeping them just alive. Just enough." He closes his eyes. "Someone knows exactly what they're doing. Someone trained."
*comment ---------------------------------------------------------------- CH15.EXIT.01
*sid CH15.EXIT.01
*date 2027-01-02 16:00
*place P56 stillwater_docks
*present ansel
*if companion = "adrian"
  *present ansel adrian
*elseif companion = "micah"
  *present ansel micah
*elseif companion = "nolan"
  *present ansel nolan
*elseif companion = "reuben"
  *present ansel reuben
*mood dusk
Getting out.

Dusk comes early on the river. By four the light's going, orange and then grey, and the lamps are coming on along the waterfront, and the crews are coming off shift, and the cold's coming up off the water like something alive.

Whatever we did this morning decides how easy this is.

*choice
  *if enemy_aware >= 2
    #Run for the cart with the gate crew shouting behind us.
      *set nerve +3
      *set hurt_mc +1
      *set enemy_aware 3
      We don't get to walk out.

      They know. Someone was watching Stillwater, and someone asked questions in the wrong house, and someone waited in a corridor in Winton Court, and somewhere along the line all of it's been put together into a face, and the face is mine. At the east gate a man shouts, and another man turns, and a whistle goes, and then we're running.

      Down the waterfront, between the barrels, over a rope, round a crane. Ansel's coat flying out behind him like a flag.{@companion = "adrian"| And Adrian, just behind, shouting "Go, [i]go[/i]."|}{@companion = "micah"| And Micah, just behind, shouting "Go, [i]go[/i]."|}{@companion = "nolan"| And Nolan, just behind, shouting "Go, [i]go[/i]."|}{@companion = "reuben"| And Reuben, just behind, shouting "Go, [i]go[/i]."|} Boots on the cobbles behind us. Someone throws something; it hits the wall by my head and shatters. At the end of the waterfront the old woman with the cart is waiting, the way we paid her to, with the horse already turned, and we throw ourselves into the back of it among the apple crates and she cracks the reins without a word.

      I've cut my hand on something, badly, a long gash across the palm, and I don't feel it until we're a mile up the road and the shouting's stopped and I look down and there's blood all over the apples.

      They know my face now. Not just that someone was watching. Me.
  *if enemy_aware < 2
    #Walk out with a crew coming off shift, heads down, like we belong.
      *set people +2
      We walk out.

      At four o'clock the day crews come off shift, fifty or sixty men and women in heavy coats and knitted hats, flooding out of the east gate all at once, tired, talking, lighting cigarettes, heading for the tavern at the end of the road. And we walk out in the middle of them, heads down, collars up, like we belong, {@companion = "none"|the two of us|the three of us} in the middle of the crowd. Nobody looks twice. Nobody looks once.

      The man on the chair outside warehouse seven watches the crowd go past. He doesn't see us. He's watching for something that doesn't look like a tired crew going home, and we look exactly like a tired crew going home.

      At the end of the road, the old woman with the cart is waiting, the way we paid her to. We climb into the back among the apple crates, and she cracks the reins without a word, and Stillwater goes back into the mist behind us, lamp by lamp, until it's gone.
Ansel doesn't say anything all the way back to Bracken Court. He sits in the back of the cart with his hand on the pocket where Eamon's letter is, and looks at the river going by in the dark.

@ansel:sad Near the town, when the candles in the windows start to show through the trees, he says, without turning his head: "He's alive."

"He's alive."

@ansel:tense "Then we're coming back for him," says Ansel Marr. It isn't a question. It isn't a message. It's his.

*comment ---------------------------------------------------------------- CH15.HOME.01
*sid CH15.HOME.01
*date 2027-01-03 23:15
*place P02
*present martin
*mood night
Home on the third, late.
*if ch14_way = "boundary"
  By the Glass Road, the whole long day of it, the reflections lying to us all the way, to the Boundary Orchard and the old gate in the wall, and through it, into Malcolm Tait's kitchen at Orchard House, where Bess nearly knocks me over and Malcolm, in his dressing gown, puts the kettle on without a word and drives us down the ridge at eleven at night in a van with no heater either.
*elseif ch14_way = "estate"
  By the Verres' old right of passage, invoked at the crossing office at noon by Lucan in his good boots with a folder of ledgers under his arm, while Oswin Deller stood by the stove and smiled and said nothing at all. Back through the green door, into the brick room in the Iron Footbridge, with Harlan Greaves writing our names in the ledger and pretending very hard not to see us.
*else
  By the court's limited passage, back through the green door, into the brick room in the Iron Footbridge, with Harlan Greaves writing our names in the ledger and pretending very hard not to see us.
*if companion != "none"
  {@companion = "adrian"|Adrian|}{@companion = "micah"|Micah|}{@companion = "nolan"|Nolan|}{@companion = "reuben"|Reuben|} goes home too, through the dark, with a nod at the corner that says everything neither of us can say yet.
Ansel stays. On the other side. For now. He has a father to face, and a Court, and a letter in his pocket to keep safe. At the door, he took my hand, briefly, in his glove, and said "Soon," and meant it.

Latch Lane, at quarter past eleven, is black and frozen and silent. There's a light on in the shop.

@martin:tired Martin's up. In his dressing gown, at the kitchen table, with a pot of tea gone cold and a crossword he hasn't touched, pretending he just happened to be awake. He looks up when I come in. He looks at my face{@enemy_aware >= 3|, and my bandaged hand,|} and my bag, and the snow on my shoulders.

@martin:neutral "You're back," he says. As if I've been to the shop.

*choice
  #Hug him. Say nothing. He doesn't ask.
    *set fr_martin +1
    I put my bag down, and go round the table, and hug him.

    @martin:warm He doesn't say anything. He doesn't ask where I've been, or why I'm shaking, or what's happened to my face. He just puts his arms round me, in his dressing gown, and holds on, and the kettle-warmth of him comes up round me like a blanket, and it's the first time I've been warm in six days.

    @martin:warm After a long time he says, into my hair, "There's soup."

    There's always soup.
  #Go straight up. I have to write it all down before I sleep.
    "I need to write something down," I say. "Before I sleep. Before I forget."

    @martin:attentive Martin looks at me for a long moment. Then he nods. "Go on, then," he says. "I'll bring you a tea."

    I go up to my room and sit on the floor under the proof sheet with the four names on it and the two lines going off the edge, and I get a new sheet, and I draw it. Warehouse seven. Three beds. Three threads. Eamon, Hugo, Clive. Two lines running west to Quentin and Silas. And a third, slack, waiting.

    When Martin brings the tea, twenty minutes later, I'm asleep on the floor with the pen in my hand, and he puts a blanket over me and takes the pen, and doesn't look at the drawing, and goes back down.

*journal [b]Chapter 15.[/b] Stillwater Docks, in the Marches. Warehouse seven is a ward, leased by Oswin Deller's company: three beds, three drips, four armed men. Eamon Kerr, alive. Hugo Naranjo, alive. And Clive Merritt, the ceramicist from the Whitcomb, brought in by boat at dawn. The donors are alive and linked: Eamon's thread runs to Quentin, Hugo's to Silas, and Clive's is freshly anchored, waiting for someone. We can't cut them out without killing whoever's on the other end.{@enemy_aware >= 3| They know my face.|} We're coming back.
*page_break
*goto_scene ch16
`);
