NB.scene("ch06", String.raw`
*mood day
*set ch 6
*chapter 6 Another Man Missing
*comment ---------------------------------------------------------------- CH06.WEEKS.01
*sid CH06.WEEKS.01
*date 2026-09-14 08:00
*place P02
*present martin will
*set strain 0
Ten days go by the way days do: one at a time, and then all at once.

Will's final year starts. He comes home on the first day with a timetable and a face like thunder because he's got double maths on a Friday afternoon, and I help him cover his textbooks in brown paper at the kitchen table, which neither of us has done since we were eleven. The academy hasn't called. He checks his phone every eight minutes and pretends he doesn't.

The buses up University Hill fill up with first-years in brand-new coats holding maps of a city they'll know by heart by Christmas. The leaves on the plane trees along Latch Lane think about turning, and don't, and then a few of them do. The light gets lower. Mornings get a chill in them.

Quentin texts twice. Once a photo of a latte with a lopsided heart in the foam, [i]getting better[/i]. Once, at three in the morning: [i]can't sleep. cold. is that normal. don't answer that.[/i] I answer it anyway.

And I keep reaching. That's the thing I don't tell anyone. Since the lane, since the wall and the Okafors and the hospital, the knack's been different. Closer to the surface. I find myself reaching with it at things that don't need it: a coat on the back of a bus seat, a stranger's dropped glove, Martin's reading glasses on the counter, which give me forty years of squinting at small print and one clear afternoon in a hospital corridor when my grandad died. I put them down fast. I have to stop doing that.

On Monday morning, Mum's second batch arrives: six emails at once, like weather.
*letter mum_02
[i]Tired or sad.[/i] I read that line about eleven times. I don't know the answer. I think it might be both.

The ten days aren't all mine to choose. But some of them are.

*choice
  *if not(b_nolan_kept)
    #Go round to Nolan's for the thing I promised. Actually go this time.
      *set b_nolan_kept true
      I go round to Nolan's flat on the Wednesday night with two bags of chips and the good sauce and a box of the terrible biscuits he likes, unannounced, and knock, and when he opens the door he looks at me for a long moment with no expression at all.

      "Oh," he says. "You exist."

      "I brought the good sauce."

      He takes the chips. He lets me in. Peter's out, thank God. We sit on the sofa and watch a terrible film and eat everything, and he doesn't ask me where I've been, and I don't tell him, and somewhere around the second terrible biscuit he puts his feet in my lap as if it's nothing, the way he used to when we were sixteen. It's the best night I've had in a month.
  #Help Martin chase the overdue invoice. Two voices on the phone are harder to ignore.
    *set fr_martin +1
    *set people +2
    *set s01 "fore"
    On Tuesday morning I find the red-striped envelope. It's in the drawer under the till, with two more like it underneath. Not bills. Invoices. [i]His[/i] invoices, to a catering firm on the east side that had four thousand leaflets and a hundred and twenty menus off him in the spring and has never paid a penny.

    "I didn't want to make a fuss," he says, when I put them on the counter. "They're good customers."

    "They're not customers, Martin. Customers pay."

    We ring them together, on speakerphone, him with his glasses on and me with the invoices fanned out on the counter. The first time, the woman who answers is charming and vague. The second time, I do the talking, and the knack gives me her across the phone line: she's embarrassed, and she's been told not to pay small suppliers until they chase. I tell her we're chasing. I tell her we'll keep chasing. I use the word "court", once, lightly, like dropping a coin.

    The money comes in on Friday. Not all of it. Most. Martin looks at the bank app for a long time, and then takes his glasses off, and doesn't say anything, and puts his hand on the back of my neck for a second, the way he used to when I was sixteen and new.
  #Go running every morning. It turns the knack down.
    *set knack +2
    *set nerve +1
    I start running. Early, before anyone's up: down Latch Lane to the river, along the embankment to the footbridge, back up the hill. I'm terrible at it. I'm red and wheezing and my knees hate me.

    But it works. When I'm running, the knack goes quiet: the whole city's weather turns down to a low hum, as if the only feeling that fits in my body when my lungs are burning is my own. By the tenth morning I can do the whole loop without stopping, and I've learned something I didn't know: I can turn it down. Not off. But down. Like a dial.
*page_break
*if ch02_report = "police"
  *goto gareth
*goto ansel

*comment ---------------------------------------------------------------- CH06.GARETH.01
*label gareth
*sid CH06.GARETH.01
*date 2026-09-15 16:30
*place P02 print_shop
*present gareth martin
*set fr_gareth 1
*meet gareth
On Tuesday afternoon a man comes into the print shop in a rain jacket, dripping, and asks for me by name.

He's about thirty, with a square pale face and ginger hair cut short and a notebook he actually uses: it's soft at the corners from being opened and closed. He shows Martin a council ID card on a lanyard. Gareth Moss. Municipal Investigations. "Nothing to worry about," he says to Martin, and to me: "Your statement, from the thirtieth. It came across my desk."

He sits on the stool by the counter while Martin pretends to sort paper at the back and listens to every word.

"I collect patterns," he says, pleasantly. "That's my job. Adults who stop turning up to things. Buildings used for things they're not licensed for. Vans with no records. Individually they're nothing. Put enough nothing together, sometimes it's something." He flips back a page. "You saw a man fall. You saw a van. Nobody's been reported missing. The venue saw nothing."

"I know what I saw."

"I believe you." He does, too. The knack gives me him: steady, dogged, a man who likes a question the way a dog likes a bone. "Tell me about the van again."

He's friendly. He's genuinely friendly, right up until the moment I don't answer one question, about where I was the following Tuesday, because the answer is [i]at a café watching the dead man make coffee[/i], and then his questions stop being friendly and start being patient. He asks it again, differently. Then a third way.

*choice
  #Tell him everything that would stand up in court. Nothing that wouldn't.
    *set told_gareth true
    *set fr_gareth +1
    I tell him the things that would stand up anywhere. The time, the distance, the van, white, a lily painted on it. That the man in the lane worked at a café in Northline, Double Shift, and is working there again, and says he was ill. That there's something wrong with that, and I can't prove what.

    I don't tell him about the rope. I don't tell him about vampires, or wardens, or anything else that would put me in a room with soft walls.

    He writes it all down. When he gets to [i]working there again[/i], his pen stops for a second. "Alive," he says.

    "Alive."

    "Huh." He looks at his notebook for a long time. Then he gives me a card. "If you see that van again," he says, "you ring me. Day or night. I mean it."
  #Be polite, and useless.
    *set gareth_wary true
    I'm polite. I'm very polite. I'm so polite that I say absolutely nothing at all for twenty minutes, and he writes that down too.

    When he goes, he stops at the door and looks back at me, and at Martin, and at the shop, as if he's memorising it. "You've got my card," he says. "For when you decide to tell me the rest."

    Martin doesn't say anything after he's gone. He doesn't have to. The grey pressure in the shop is back, and heavier.
*page_break

*comment ---------------------------------------------------------------- CH06.ANSEL.01
*label ansel
*sid CH06.ANSEL.01
*date 2026-09-16 18:00
*place P25 northline_station
*present ansel
*set know_marches true
*set eamon_heard true
I ring the number on Ansel Marr's card.

There isn't one, of course: the card's just a name. But on the back, in faint pencil I hadn't noticed, there's a message: [i]Northline, platform four, any evening at six.[/i] So on Wednesday at six I'm on platform four at Northline Station, under the canopy with its red iron columns, with the departures board clicking and the evening trains pulling out full of commuters, and there he is.

He's on the bench under the clock, sitting very straight in his dark coat and his formal collar, with a small notebook on his knee. When he sees me he stands up. He actually stands up, as if I were someone to stand up for.

"I apologise," he says, before anything else. He looks down at himself. "I'm aware I'm dressed too formally for a train station. I've been told so. By several people. One of them was a pigeon."

"How long have you been coming here?"

"Two weeks. Every evening." He sits back down, and after a moment so do I. "I've asked everyone at Northline. The ticket office. The cleaners. The man who sells flowers by the barrier, who is very kind, and deeply unhelpful."

And he tells me. Eamon Kerr is a courier. He carries things: letters, parcels, occasionally people, between Calder and where Ansel comes from, which is the Marches. On the night of the twenty-eighth of August, Eamon set out to make a delivery by a crossing he shouldn't have been using, the old one at Northwood, which is dangerous, and unofficial, and cheaper. He never arrived.

"My father," says Ansel carefully, "would prefer there to be no fuss. There's a trade dispute at home. A courier who crossed unofficially and went missing is... embarrassing. To the people my father is negotiating with. So officially, nobody's looking."

"But you are."

"Eamon has carried letters for my family for four years. He taught me to play cards badly. He brought my mother oranges when she was ill." He looks down at the notebook. The knack gives me the cold water in the glass, very still, and far under it that frantic, trapped worry, held so tightly it's become a way of standing. "Somebody should look."

*choice
  #"I'll help. Where do we start?"
    *set b_ansel_help true
    *set st_ansel 2
    "I'll help," I say. "Where do we start?"

    He looks at me as if I've handed him something heavy and valuable and he isn't sure yet where to put it down. "Thank you," he says. It comes out almost too quietly to hear. Then, more briskly: "The crossing. We need to know which one he actually used, and when."
  #"Why me?" Make him say it.
    *set b_ansel_help true
    *set st_ansel 2
    *set people +1
    "Why me?" I say. "You've asked half the city. Why tell me all this?"

    He's quiet for a long time. A train pulls out. The board clicks.

    "Because you were the only person in Calder this month," he says at last, not looking at me, "who noticed I was frightened."

    I don't know what to say to that. So I say, "Okay. Where do we start?"

    And something in the cold water in the glass shifts, just slightly, like somebody letting out a breath they've been holding for two weeks.
*page_break
*comment ---------------------------------------------------------------- CH06.CHOICE.01
*sid CH06.CHOICE.01
*date 2026-09-16 19:00
*present ansel
Seven o'clock. We're in the station café with two teas, and Ansel is explaining the problem with his notebook open.

"There are official crossings," he says, "kept by keepers, recorded in ledgers. And there are other ways, older ways, like Northwood. If Eamon used an official one, it will be written down. If he used Northwood..." He spreads his hands. "Then someone saw him. People always see."

Two ways to find out.

*choice
  *if know_wardens
    #Lawfully. Mercy House keeps the crossing-keepers' records. Ask Adrian.
      *set ch06_way "lawful"
      *goto lawful
  #People. Somebody who works nights at Northline saw him. Ask around the depot.
    *set ch06_way "witness"
    *goto witness

*comment ---------------------------------------------------------------- CH06.LAWFUL.01
*label lawful
*sid CH06.LAWFUL.01
*date 2026-09-17 14:00
*place P15 iron_footbridge
*present adrian florian harlan ansel
*set e06 true
*set e06_src "records"
*set harlan_aware true
*set fr_florian 1
*set fr_harlan 1
Adrian says yes before I've finished asking, which surprises me, and then spends ten minutes explaining the correct procedure, which doesn't.

So on Thursday afternoon we go down into the Iron Footbridge.

I've crossed it a hundred times: the old iron footbridge over the river by the Riverside Steps, red brick piers, a lattice of iron girders painted a colour the council calls heritage. I never noticed the door in the far pier. It's small and green and has a sign on it saying MAINTENANCE: NO PUBLIC ACCESS, and behind it there are steps going down, and down, into a stone room inside the pier that smells of river and rust and old paper, lit by the same pale, silver-green lamps as the one Adrian had in the lane.

"The keepers' office," says Adrian. "This is where the crossing's controlled."

"The crossing to where?"

He looks at me. "The Marches," says Ansel, beside me, very quietly. "Home."
*meet florian
*meet harlan
There are two men in the office. One's a warden, older, with a long elegant face and a shaved head and round wire glasses, and a cardigan with a pair of white cotton archive gloves sticking out of the pocket: Florian Adebayo, who looks after Mercy House's records and handles paper as if it might bruise. The other's the keeper, Harlan Greaves: sociable, sandy-stubbled, with a keeper's heavy ring of keys on his belt and a big easy laugh.

Florian lays the ledger out on the table. Harlan makes tea.

Every crossing is in it. Dates, times, names, what was carried, signed by the keeper. Florian turns the pages in his white gloves. August. The end of August. The twenty-eighth.

No Eamon Kerr. Not on the twenty-eighth. Not on any date.

"There you are," says Harlan, cheerfully. "Never came through here. Must have used Northwood, poor lad. Dreadful place. I tell them and tell them." He's friendly and relaxed and completely unhelpful.

And the knack gives me what's under the laugh, and it's uneasy. A thin cold thread of it running through him, like a draught under a door, getting colder every time Eamon's name comes up.

He's looking at me now. He knows I'm asking. He knows my face.

*choice
  *if st_adrian >= 2
    #Notice the gap in the ledger's night entries that the procedure skipped, and say so.
      *set b_adrian_procedure true
      *set st_adrian 3
      *set people +2
      I'm looking at the ledger over Florian's shoulder. The day crossings are neat, dense, every line filled. The night crossings, after midnight, are neat too. Except there's a gap. Three nights in late August where the night column's blank. Not "no crossings". Just blank. As though nobody filled it in.

      "Those nights," I say, and point. "The twenty-sixth, the twenty-seventh, the twenty-eighth. Nobody's signed the night column. Not even to say there were none."

      Adrian looks. His brows go up, the left one a touch further. The procedure he followed checked for Eamon's name. It didn't check for gaps.

      "That's..." he says, and stops, and looks at me with something new, something that the knack gives me as a kind of startled respect, like finding out a colleague you'd dismissed can actually do the job. "That's right. That's a procedural failure." And then, quietly, so Harlan can't hear: "Good. That's good, {name}."
  #Ask Florian what the archive holds that the ledger doesn't.
    *set fr_florian +1
    "What does the archive have," I ask Florian, "that the ledger doesn't?"

    He looks at me over his wire glasses, pleased and a little surprised, like a librarian who's finally been asked a real question. "A great deal," he says. "Correspondence. Complaints. Keepers' private notebooks, when they die and leave them to us. Old programs nobody talks about any more." He takes his gloves off, finger by finger. "Come and see me at the House. Bring biscuits. I'll show you what the ledgers leave out."
*goto locker

*comment ---------------------------------------------------------------- CH06.WITNESS.01
*label witness
*sid CH06.WITNESS.01
*date 2026-09-17 23:30
*place P27
*present owen pavel micah ansel
*set e06 true
*set e06_src "witness"
*set fr_owen 1
*set fr_pavel 1
*set b_micah_seat true
*set st_micah 2
*set good_coat true
*mood night
The Night Bus Depot is on the far side of Northline, behind the goods yard: a huge old shed full of double-deckers parked nose to tail, lit by strip lights, with a canteen at one end where the city's other hours happen. Drivers coming off shift and going on. A mechanic in overalls under a bus. A radio playing something from the eighties. Tea in a steel urn.

Ansel stands in the doorway in his coat and collar as if he's walked into a cathedral.
*meet owen
It's a driver called Owen who remembers. Owen Price: mid-twenties, long patient face, short twists, a driver's fleece with a union pin on the collar. He listens to Ansel's question with his whole attention, the way people do who've been waiting a long time for somebody to ask them something.

"Friday the twenty-eighth," he says. "The ten to one. Northline out to the old spur at Northwood, last stop before the depot. Lean lad, black hair, windburn, a courier's bag. I remember because I thought he looked frozen, in August." He frowns. "And he wasn't on his own. There was a man with him. Quiet. Good coat. Too good a coat for my bus. Paid cash for both of them. Sat at the back and talked to the lad, very calm, the whole way."
*meet pavel
"The spur's been dead for years," says the mechanic from under the bus, without coming out. Pavel, Owen says. Pavel Kolar. "Nobody goes out there. Nothing out there but the old crossing." He slides out on his board and looks at Ansel for a long moment, and the knack gives me him: few words, and a great deal he isn't saying. "Nothing good out there," says Pavel, and slides back under.

And then, from the other end of the canteen, a voice I know: "{name}? What are you doing at the depot at midnight?"

It's Micah. Canvas jacket, pencil in the pocket, a spool of cable over one shoulder, grinning at me in pure surprise. He's rewiring the depot's lighting on a night rate. "Small city," he says. "Or you're following me."

It's gone one when Ansel's done with his questions, and the last bus has gone, and Micah jangles his keys and says, "Come on, I'll run you both home," as if it's the most obvious thing in the world. His van smells of solder and oranges. Ansel sits in the back on a toolbox with enormous dignity.

*choice
  #Ask Owen what else he sees on the night routes. He's been waiting for someone to ask.
    *set fr_owen +1
    *set s10 "intro"
    Before we go I ask Owen: "What else do you see? Out there at night?"

    He laughs, a short, tired laugh. "Everything. The whole city after dark. Nurses. Cleaners. Lads who can't get home. Things I don't have words for." He taps his union pin. "We're balloting next month. For the rota. Nobody wants to drive the Northwood run alone any more. Nobody says why."

    He looks at me. "You come back," he says. "Anytime. I'll tell you what I see."
  #In Micah's van, ask what "rough night" meant, back at Switchyard.
    *set micah_deflects true
    In the van, with the city going by orange and empty and Ansel silent in the back, I ask him.

    "At Switchyard. You said you'd had a rough night. The night before. What happened?"

    He laughs, and it comes out a bit too fast. "Oh, God. My neighbour's dog got out. Three in the morning, me in my pants chasing a dog the size of a pony down Eastbank high street. Absolute state." He shakes his head. "Rough night."

    The knack gives me him, and he isn't lying about everything. There's something true in it, somewhere. But there's a closed door under the story, and he's leaning on it with his whole weight, cheerfully, and I let him.
*goto locker

*comment ---------------------------------------------------------------- CH06.LOCKER.01
*label locker
*sid CH06.LOCKER.01
*date 2026-09-18 10:00
*place P25 northline_station
*present ansel
Friday morning, ten o'clock, Northline Station, the left-luggage lockers at the end of platform one. Ansel has a spare key from Eamon's flatmate, who didn't ask why and was very glad to be asked.

Locker 214. The door sticks, then gives.

Inside: a courier's route card in a plastic sleeve, handwritten, much folded. [i]Northwood crossing. The Glass Road. Bracken Court.[/i] A small brass token, like a coin, stamped with a mark: a leaf inside a square. A change of socks. A paperback with a bus ticket for a bookmark. And a pair of good leather gloves, lined, worn soft at the fingers, folded together on top.

Ansel looks at the gloves for a long time and doesn't touch them. "He saved for those," he says. "For three months."

The gloves hum. Faintly. Like the tin charm did, the first night.

*choice
  #Take off my own glove, and touch his.
    *set reached +1
    *set strain +1
    *set knack +3
    *set same_voice true
    I take my hand out of my pocket. I touch the gloves.

    A bus at night. Cold, bone-deep cold, the kind you get when you've been scared a long time. Orange streetlights sliding past a window. And a voice beside me, calm and kind and very close: [i]This won't hurt. I'm sorry.[/i]

    I know the voice.

    I know it the way you know a song from one bar. It's the voice from the lane. From the wall. [i]Ten. Nine. Eight.[/i] The same calm, the same pleasantness, the same patient kindness, like a dentist.

    I take my hand off the gloves. The platform tilts. Ansel's hand is on my arm, holding me up, cool through my sleeve, and his face has lost all its composure.

    "What did you see?" he says.

    "The same man," I say. "It's the same man." It's a hunch. It's not evidence. I know it's not. I'll need another way to prove it.
  #Leave it. Photograph the route card and the mark on the token.
    *set lease_mark true
    I don't touch the gloves. I photograph everything instead: the route card, front and back; the brass token, both sides, the leaf inside the square close up.

    "That's a lease mark," says Ansel, looking at it. "It means he paid for passage. Somebody sold him the right to cross." He frowns. "Northwood isn't leased. Nobody sells Northwood."

    Somebody did.
*if ch05_route = "hospital"
  *page_break
  *goto token
*goto end

*comment ---------------------------------------------------------------- CH06.TOKEN.01
*label token
*sid CH06.TOKEN.01
*date 2026-09-19 11:00
*place P20 okafor_restoration
*present ellis chukwudi quentin
*set st_ellis 2
*set b_ellis_meet true
*set fr_chukwudi 1
*set e03 true
*set e03_src "ellis"
Saturday. Quentin's idea, in the end: [i]the charm. it's mine. if someone's going to look at it properly I want to be there.[/i] Dominic phones ahead, from the dark, before sunrise, to a restorer on University Hill he says Lucien trusts.

Okafor Restoration: a narrow building on Paternoster Row with a green door and a bay window full of things I don't have names for. A bell that rings a note too pure to be ordinary.
*meet chukwudi
*portrait chukwudi neutral
The restorer is Chukwudi Okafor, broad and grave, a short grey beard shaped to his jaw, a magnifier on a chain. He looks at the charm on Quentin's key ring for a long time through his glass, and names it, patiently and precisely: a protective token, a common kind, the sort sold at fetes; modified by someone with skilled hands.
*meet ellis
*portrait ellis neutral
And his son, leaning in the workroom doorway with his arms folded, a tall young man in a plum cardigan with a long fine-boned face and dense dark coils kept up off his forehead, and the strap of a much-mended leather bag across his chest, looks at it for about five minutes and says, lightly, as if commenting on the weather:

"It's a hook."

Everyone looks at him.

"It was a shield. Someone turned it round." He pushes off the doorframe and comes to the bench, and with a fine steel point shows us: where the stamp's been opened, how the cut goes. "A shield keeps harm off. This keeps something [i]on[/i]. At the moment it would otherwise let go." He looks at Quentin, and his quick, clever face goes still for a second. "I'm sorry. That's you. You're the something."

Quentin looks at the charm. "Right," he says. "Cool. Great."

Ellis Okafor, the younger, is elegant and quick and so good at this that it's almost frightening, and he's doing it all as a performance, a charming one, to make a frightened stranger feel like a guest. The knack gives me the ropes and nerves behind the curtain.

*choice
  #Tell Ellis I can see what the charm is holding.
    *set gift_ellis true
    "I can see it," I say. "What it's holding. There's a tie. A rope. Running out of him." I point. North-east. "That way."

    Ellis stops. The performance goes out of him like a light switched off, and what's underneath is someone very still and very interested, looking at me as if I'm a painting he's just realised is older than its frame.

    "You can [i]feel[/i] a tie," he says. Not charming at all. Quiet.

    "Yeah."

    "Do you know how rare that is?"

    "No."

    "Neither do I," he says, and then the light comes back on and he smiles, and it's a real one, slightly lopsided. "But I'm going to find out."
  #Let Quentin ask the questions. It's his charm.
    *set st_quentin +1
    I keep quiet. It's his charm. It's his rope.

    Quentin asks everything: what it does, whether it hurts, whether it can be taken off, what happens if it's broken. Chukwudi answers everything honestly, including "I don't know". Ellis answers the rest with a steel point and a sheet of chalk paper.

    On the way out Quentin bumps my shoulder with his. "Thanks," he says. "For shutting up. Everyone's been talking for me for a month." And the floor under his jokes, the steady thing, is a little steadier.
*page_break

*comment ---------------------------------------------------------------- CH06.END.01
*label end
*sid CH06.END.01
*date 2026-09-19 21:00
*place P06
*present ansel
*mood night
Saturday night, the Riverside Steps, with Ansel and a paper tray of chips.

He's developed opinions about chips. Strong, inexplicable opinions. The vinegar is wrong, he says: too sharp, too brown, not like home. The chips themselves he approves of, conditionally, on the understanding that the ones from the stall under the bridge are superior to the ones from the shop at the top of the steps, which are "an act of aggression".

The river's black and slow. The footbridge is lit along its length, and in its far pier I can see the little green door now, now I know it's there.

We lay it out between us on the step, like cards.

Eamon Kerr vanished on the twenty-eighth of August, on his way to Northwood{@good_coat|, with a quiet man in a good coat|}.

Quentin died on the thirtieth, and didn't stay dead.

Something outside Quentin is holding him up. There's a rope running out of him, north-east, towards the river.

Neither of us says the next sentence. It's sitting there on the step between us with the chips.

*choice
  #Say it. "What if whatever's holding Quentin up is Eamon?"
    *set suspect_donor true
    "What if it's Eamon?" I say.

    Ansel goes very still.

    "What's holding Quentin up," I say. "What if it's him? What if he's on the other end of the rope?"

    The cold water in the glass doesn't move. Then it does: it shakes, all the way down, and for a second I feel the whole trapped weight of what he's been carrying for three weeks, and it's worse than I imagined. Not fear that Eamon's dead. Fear that he isn't, and it's something worse.

    "Then he's alive," Ansel says, very quietly. "Somewhere."

    "Somewhere."

    He puts down the chips. He doesn't pick them up again.
  #Tell Ansel about the knack. He looks like a man who understands keeping a thing quiet.
    *set gift_ansel true
    I don't know why I tell him. Maybe because he's sitting on a wet step in a formal collar eating chips he disapproves of because it's what I suggested. Maybe because he told me the truth about his father.

    "There's something you should know about me," I say. "I feel things. What people feel. And places, and objects. I felt Quentin die. That's how I know about the rope."

    He turns and looks at me, and the knack can't give me what he thinks, it never can, but I can feel the cold water go very still and very clear, like something settling to the bottom of a glass.

    "At home," he says at last, "we'd call you a listener." He looks back at the river. "They're rare. They're usually very tired." A pause. "You look very tired."

    "Thanks."

    "It wasn't a criticism," he says. "It was an observation. From a man who is also very tired."
  #Eat the chips. Let him talk about home.
    *set know_marches true
    *set people +1
    I don't say it. Instead I say, "Tell me about home."

    And he does. Slowly at first, then more easily, as the chips go down and the river goes by. The Marches: market towns and orchards and old roads, a country that runs on leases and courtesy and long memories. Bracken Court, where his family has a house with a cold room nobody's allowed in. His mother, who is funnier than him. A fair in midwinter where there's a candle in every window and outsiders are allowed in, just for those days, without a sponsor. The vinegar, which is better.

    "You'd like it," he says, and then looks surprised at himself for saying it.
We sit on the steps until the chip stall shuts. When he leaves, he bows, a small one, and says "Thank you, {name}," and walks off along the embankment very straight, and I watch him go until he's a dark coat and then nothing.

*journal [b]Chapter 6.[/b] Ansel Marr, from the Marches, is looking for Eamon Kerr, a courier who vanished on 28 August on the way to the old Northwood crossing. {@ch06_way = "lawful"|The keepers' ledger at the Iron Footbridge has no record of him, and the keeper, Harlan, is uneasy.|A night-bus driver, Owen, saw him on the last bus to Northwood with a quiet man in a good coat.}{@same_voice| His gloves held an echo of the same calm voice from the lane.|}{@suspect_donor| What if Eamon is on the other end of Quentin's rope?|}
*page_break
*goto_scene ch07
`);
