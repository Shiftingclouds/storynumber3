NB.scene("ch13", String.raw`
*mood winter
*set ch 13
*chapter 13 Bracken Court
*comment ---------------------------------------------------------------- CH13.XMAS.01
*sid CH13.XMAS.01
*date 2026-12-25 10:00
*place P02 print_shop
*present martin will
*set strain 0
Christmas above the print shop.

@martin:tense Martin's up at six for his annual attempt at a roast. It's the same every year: a bird too big for the oven, a cookbook from 1987 propped open with a jar of cloves, and Martin in his good apron saying "It's fine, it's fine, it's all fine" while the kitchen fills with smoke. This year he's done the proper stuffing, the one with the chestnuts, because Mum said to, and he's so frightened of getting it wrong that he's made it twice.

@will:guarded Will comes down at nine in his dressing gown, too old for stockings, he says, with enormous dignity, and then empties his anyway, sitting on the floor, making a pile of satsumas and socks and a football magazine and a toothbrush shaped like a rocket that Martin puts in every year as a joke nobody remembers the start of.

At ten, we call Mum.

It takes eleven minutes to connect. When it does, the picture's grainy and green and jumps every few seconds, and there she is, in a hat with a bobble, in a room with a string of fairy lights and a poster about frostbite, holding up a mug that says [i]WORLD'S OKAYEST NURSE[/i]. She's laughing at something. At Will's toothbrush. At Martin's face. At the three of us crammed onto the sofa in paper hats like she asked, because she asked.

And the picture freezes. Just like that. On her laughing, with her mouth open and her eyes creased shut and the mug held up. It stays like that for a whole minute, frozen, while the connection thinks about it, and none of us says anything, and we all just look at her.

Then the call drops.

@martin:warm "Well," says Martin, eventually, very gently. "That's a good one to have."

The knack, for once, isn't giving me anything complicated. No ropes. No threads. No grey. It's only happiness, and it's loud: Martin's kettle-warmth turned right up, and Will's bright tight wire gone loose and warm for a day, and the smell of the roast, burning slightly. It fills the flat to the ceiling.

I bought them something each. I saved for weeks.

*choice
  #Give Will the second-hand scouting camera I found, so he can film his games and study them.
    *set fr_will +1
    *set s13 "fore"
    I give Will the parcel, badly wrapped in a carol sheet from the misprint pile.

    It's a camera. Second-hand, from the market, a proper one, the kind football scouts use, with a zoom and a flip screen and a clip for a tripod. I found it in October on a stall in Crescent Market for a price I'm not going to tell Martin, and it's been under my bed for two months.

    @will:surprised Will looks at it for a long time. He doesn't say anything. He turns it over in his hands the way Nolan turns things over.

    "So you can film your games," I say. "And watch them. See what the scouts see. You're always saying you can't see yourself play."

    @will:small "I can't," says Will, very quietly. "I can't see myself." He looks at the camera. And then he gets up off the floor, and comes over, and hugs me. Will doesn't hug. Will does the thing with his chin. He hugs me hard, all elbows, for about two seconds, and then goes back to the floor and pretends to read the manual with his face very red.

    @martin:warm Martin, in the doorway, with the oven glove, doesn't say anything at all.
  *if s01 = "fore"
    #Give Martin an envelope: an overdue invoice from December, paid, by a client I went round and shamed into it.
      *set fr_martin +1
      I give Martin an envelope. Just an envelope. White, with his name on it.

      @martin:attentive He opens it slowly, suspicious, the way he opens anything with his name on it.

      Inside is a receipt. The Fox and Anchor on Tanner Street, who had four hundred raffle tickets and sixty menus off him in the first week of December and then said, in the second week, that they'd [i]settle up in the new year[/i]. I went round on the twenty-third, in my good coat, at opening time, and stood at the bar and was polite, very polite, so polite, until the landlord paid in full, in cash, to get me to go away.

      @martin:shy Martin looks at the receipt for a long time. Then he takes his glasses off. "You went to the Fox," he says. "On your own. On the twenty-third."

      "I was very polite."

      @martin:warm "I bet you were," says Martin, and his voice goes, and he puts his hand on the back of my neck and leaves it there, and doesn't say anything else until the smoke alarm goes off.
  #Give them both the thing I've never said: that living here saved me.
    *set fr_martin +1
    *set fr_will +1
    I give them the presents, the ordinary ones, the scarf and the socks. And then, while they're opening them, before I can stop myself, I tell them the other thing.

    "Living here saved me," I say.

    They both look up.

    "When Mum went. I was sixteen and I was a mess, and I don't think either of you knew how much of a mess. And you gave me a room, and a key, and a job, and you never once made me feel like I was in the way." My voice goes. "I don't know what would've happened to me. Somewhere else. I think about it. I don't like thinking about it."

    @will:surprised Will stares at me with a sock in each hand.

    @martin:sad Martin sits down on the arm of the sofa, slowly, in his apron, with the oven glove still on.

    @martin:warm "You didn't need saving," he says eventually. "You needed a room." He looks at the oven glove. "Same thing, sometimes, I suppose." And then, gruffly: "You were never in the way. Not once. Not for one minute."

    @will:amused "You were in the way of the bathroom," says Will. "Every morning. For three years." And his voice goes too, halfway through, and he pretends it didn't.
*page_break
*comment ---------------------------------------------------------------- CH13.CROSS.01
*sid CH13.CROSS.01
*date 2026-12-28 09:00
*place P15 iron_footbridge_winter
*present ansel harlan
*if companion = "adrian"
  *present ansel harlan adrian
*elseif companion = "micah"
  *present ansel harlan micah
*elseif companion = "nolan"
  *present ansel harlan nolan
*elseif companion = "reuben"
  *present ansel harlan reuben
The twenty-eighth of December. A white morning. Snow on the Iron Footbridge's handrails, snow on the river's edges, the water black and slow in the middle between the ice. Every lamp along the bridge still lit, though it's full day.

I've got a bag with three days' clothes in it, and the good coat, and a phone that won't work where we're going, and a note on the kitchen table for Martin that says [i]back soon, don't worry, eat the leftovers[/i].
*if companion = "adrian"
  @adrian:neutral Adrian's at the bridge's east end before us, in his warden jacket, with a rucksack packed so neatly it looks like it's been vacuum-sealed and a folder of paperwork under his arm. "Mercy House has notified the Court of an escort," he says. "It's all in order." He hesitates. "I've never been. I've read about it. I've read a lot about it."
*elseif companion = "micah"
  @micah:amused Micah's at the bridge's east end before us, in his work jacket and a hat with ear flaps, with a holdall and a toolbag, because he couldn't imagine going anywhere without a toolbag. "Dad thinks I'm at a wiring course in Wexmoor," he says. "Leandro knows. Leandro's covering." He grins, and it's the real one. "I've never been anywhere. I've never been [i]anywhere[/i]."
*elseif companion = "nolan"
  @nolan:amused Nolan's at the bridge's east end before us, in three jumpers under his coat, with the field recorder on its strap and, as promised, the good torch. "I told my mum it's a festival," he says. "It's technically a festival." He holds up the recorder. "I'm going to record [i]everything[/i]."
*elseif companion = "reuben"
  @reuben:warm Reuben's at the bridge's east end before us, in his big coat, with a medic's bag over one shoulder and a flask in each coat pocket. "Tea," he says, handing me one. "It's colder over there, Malcolm says. And longer." He looks at the bridge. "I've never been through. Twenty-three years in this city."
@ansel:tense Ansel's there too, of course, in his dark coat and his formal collar and a scarf that's clearly been knitted by someone who loves him, standing very straight, with his breath going up in clouds. The cold water in the glass, the knack gives me, very still. Going home. Going home to look for a man his father wouldn't look for.
*meet harlan
*if harlan_aware
  @harlan:amused The keeper meets us at the little iron door in the middle pier. Harlan Greaves: the sandy stubble, the sociable lined face, the heavy key ring, exactly as he was in September when he told Florian and me that Eamon Kerr [i]never came through here, must have used Northwood, poor lad[/i]. "Pilgrims!" he says, with his big friendly smile. "For the Fair! Lovely. Lovely. Come through, come through, mind the step."
*else
  @harlan:amused The keeper meets us at a little iron door in the middle pier, the one I've walked past a hundred times without seeing. Harlan Greaves: thirties, sandy stubble, a sociable lined face, a keeper's heavy key ring on his belt. "Pilgrims!" he says, with a big friendly smile. "For the Fair! Lovely. Lovely. Come through, come through, mind the step."

Inside the pier there's a maintenance chamber: a small brick room full of old pipes and a desk with a ledger on it and a kettle. And at the back, in the brick wall, a door. An ordinary wooden door, painted green, a bit scuffed. Except that round the edges of it, where it doesn't quite fit the frame, there's a draught. And the draught smells of snow, and woodsmoke, and apples, and something else I don't have a word for. A different wind.

@harlan:neutral Harlan writes our names in the ledger in a round, careful hand. He's friendly and chatty right up to the moment he writes them, and then he isn't, for a second: his pen stops, and his smile stays on his face like a coat on a hook with nobody in it. And then he's chatty again. "Candle Fair," he says. "Unsponsored entry, midwinter to Twelfth Night. Oldest law there is. No fee." He says [i]no fee[/i] like it hurts him.

*choice
  *if harlan_aware
    #Watch Harlan. He's more nervous than a keeper should be.
      *set harlan_nervous true
      *set people +1
      While Ansel's signing, I watch Harlan.

      And the knack gives him to me the way it did in September, and it's worse. Under the chat and the smile and [i]lovely, lovely[/i], there's the thin cold thread I felt then, like a draught under a door, and it's thicker now. Much thicker. He keeps glancing at the ledger. At our names. At Ansel's name, especially. And every time he does, the cold thread in him jumps, like a fish on a line.

      He's frightened. Not of us. Of what writing our names down means. Of who might read the ledger after us.

      @harlan:guarded "Safe travels," he says, when we go, too brightly. "Mind how you go over there. It's a funny time of year. Lots of people coming and going." He doesn't look at me when he says it. "Lots of people asking questions."
  #Don't look back. Step through.
    *set nerve +2
    I don't look back.

    @ansel:attentive Ansel opens the green door, and the different wind comes through it into the brick room and lifts every paper on Harlan's desk, and Ansel steps through first, formal as a funeral, with his head up. And then he turns back and holds his hand out through the door. Not to help. Just to show me where the step is.

    I take it. I step through.
*if companion = "adrian"
  @adrian:tense Behind me, Adrian says "Right," to himself, very quietly, like a man at the top of a diving board, and follows.
*elseif companion = "micah"
  @micah:laugh Behind me, Micah says "Oh my [i]God[/i]," quite loudly, in the voice of a man about to have the best week of his life, and follows.
*elseif companion = "nolan"
  @nolan:scared Behind me, Nolan says "Okay, okay, okay," switches the recorder on, and follows.
*elseif companion = "reuben"
  @reuben:warm Behind me, Reuben says nothing at all, but he puts a hand on my shoulder as he comes through, heavy and warm, just for a second, and follows.
*achieve crossed
*page_break
*comment ---------------------------------------------------------------- CH13.COURT.01
*sid CH13.COURT.01
*date 2026-12-28 11:00
*place P55 bracken_court
*present ansel
*if companion = "adrian"
  *present ansel adrian
*elseif companion = "micah"
  *present ansel micah
*elseif companion = "nolan"
  *present ansel nolan
*elseif companion = "reuben"
  *present ansel reuben
*set know_marches true
Bracken Court at the Candle Fair.

It's a market town. That's the first thing. I don't know what I expected: something out of a storybook, towers and banners. It's a market town. Slate roofs and timber-framed houses leaning together over a steep cobbled street that goes down to a river. A church with a squat tower. A square with a pump in it. Smoke from every chimney. And snow, deep and blue in the shadows, and a sky the colour of pewter.

And a candle in every window. Every single one. In the middle of the morning, in broad grey daylight, every window in Bracken Court has a candle burning in it, hundreds of them, thousands, all the way down the hill to the river, like the whole town is saying [i]come in[/i].
*if companion = "adrian"
  *snapshot crossing-adrian
*elseif companion = "micah"
  *snapshot crossing-micah
*elseif companion = "nolan"
  *snapshot crossing-nolan
*elseif companion = "reuben"
  *snapshot crossing-reuben
*else
  *snapshot crossing-ansel

@ansel:warm "The Candle Fair," says Ansel, beside me. He's watching my face, not the town. "Midwinter to Twelfth Night. A candle in every window, and anyone may enter. It's the only time of year we're not rude to visitors." A pause. "We're still a bit rude."

The square's full of stalls: hot cider in big copper pans, roasted chestnuts, woollen things, candles, carved wooden animals, and pastries. Ansel explains the pastries. In detail. There are six kinds, and each has a correct order of eating and a regional dispute attached to it, and one of them is only to be eaten standing up. He buys me one of each, and watches me eat them, and corrects my technique.

The people are irritated by visitors and sell to them anyway, which Ansel says is the national character. A woman at the cider stall looks at my coat and sniffs and gives me a double measure. A man selling candles tells me my accent is appalling and then tells me his whole life story.
*if companion = "adrian"
  @adrian:attentive Adrian's reading the notices on the church door, every one, with the attention of a man studying for an exam, and taking notes.
*elseif companion = "micah"
  @micah:amused Micah's found the town's electrics. There aren't any, mostly: it's candles and oil lamps and one generator behind the inn, which he's gone to look at, with the landlord, and from the sound of it, is already fixing.
*elseif companion = "nolan"
  @nolan:attentive Nolan's in the middle of the square with his eyes shut and the recorder held up, recording the bells, which are ringing for something, a peal that goes on and on and changes shape. "There's a whole other scale," he whispers, when I go over. "They're tuned to a whole other [i]scale[/i]."
*elseif companion = "reuben"
  @reuben:warm Reuben's bought a bag of chestnuts and is giving them out to a queue of children who've decided he's their friend, gravely, one each, with instructions about not burning their fingers.
And the knack is strange here.

It works. It's just different. The weather of the Marches is older and slower, and deeper, like reading a book in another alphabet. People's feelings come through thick and heavy and slow, like honey instead of water, and there's a layer under all of it, under the whole town, that I've never felt in Calder: a sort of long, low hum, like the ground itself has feelings and has had them for a thousand years.

@ansel:attentive "Where do you want to stay?" Ansel asks. "There are two choices, and they're different." He counts them off on his gloved fingers, formally. "My father's house. The envoy's house. Official hospitality. It opens official doors: the registry, the clerks, the people who can say yes. It also means being a guest of my father's, with all that implies." A second finger. "Or the Travelers' House, down by the river, where the couriers stay. Crowded. Rules about boots. The food's better." A pause. "Eamon stayed there. Every time he came through."

*choice
  #Stay at Ansel's father's house. Official hospitality opens official doors.
    *set ch13_lodging "official"
    *goto official
  #Stay at the Travelers' House where the couriers stay. Eamon stayed there.
    *set ch13_lodging "travelers"
    *goto travelers

*comment ---------------------------------------------------------------- CH13.OFFICIAL.01
*label official
*sid CH13.OFFICIAL.01
*date 2026-12-28 18:00
*place P55 bracken_court
*present ansel severin lucan oswin
*if companion = "adrian"
  *present ansel severin lucan oswin adrian
*elseif companion = "micah"
  *present ansel severin lucan oswin micah
*elseif companion = "nolan"
  *present ansel severin lucan oswin nolan
*elseif companion = "reuben"
  *present ansel severin lucan oswin reuben
*mood night
*set fr_severin 1
*set fr_lucan 1
*set oswin_met true
*set registry_access true
The envoy's house is at the top of the town: three storeys of grey stone with a slate roof and a courtyard and a door with a knocker shaped like a hand holding a key. Inside it's cold and polished and very quiet, and every room has a candle in the window and a portrait on the wall of a man with Ansel's nose.

Dinner is at six, in a long room with a long table and more cutlery than I've ever seen in one place.
*meet severin
@severin:neutral Severin Marr sits at the head. He's Ansel's face made severe: the same long nose and cool pale skin, dark hair silvering at the temples, a high formal collar even stiffer than Ansel's, and rings of office on three fingers. He's courteous. He's perfectly, precisely courteous, to everybody, and the knack gives me him like a frozen lake: smooth and hard and very, very cold, and somewhere under the ice, moving slowly, something big.

@severin:attentive He offers me choices. That's his way. Would I prefer the east room or the west room? The fish or the lamb? To see the registry tomorrow, or to rest after my journey? Every choice framed so gently, so reasonably, that the one he wants sounds like the only responsible answer. I watch him do it to Ansel, all through dinner, and Ansel choosing, every time, the thing his father wanted, without a word being said.
*meet lucan
@lucan:laugh Ansel's cousin Lucan is there, too: a laughing freckled face and long auburn hair and good boots gone shabby, twenty-six, the estate manager of somewhere a day's ride out. In the corridor before dinner he did an impression of Severin so exact and so wicked that Ansel choked. At the table, the moment anyone mentions money, he goes perfectly formal, like a shutter coming down.
*meet oswin
@oswin:amused And there's a guest. Oswin Deller: a heavy, pleasant-faced man in his forties, ruddy, with thinning hair oiled flat and a merchant's heavy coat he doesn't take off for dinner. A broker, Severin says. Leases, warehouses, shipping. He describes, over the lamb, the way he buys up the debts of struggling orchards and then "helps them become efficient", and calls it practicality, and everybody at the table nods. Then he turns to me, with great friendliness, and asks polite questions about Calder. About property in Calder. About which districts are rising. About the docks on our side of the river.

The knack gives me Oswin like a warm, comfortable room with the windows painted shut.
*if companion = "adrian"
  @adrian:guarded Adrian, across the table, answers Oswin's questions about Calder for me, briefly and correctly and giving away nothing whatsoever, in the voice he uses for reports.
*elseif companion = "micah"
  @micah:tense Micah, across the table, has gone quiet and watchful. He doesn't like Oswin. I can feel it. The deep animal thing in him has its hackles up and is being extremely polite about it.
*elseif companion = "nolan"
  @nolan:tense Nolan, across the table, holding the wrong fork, catches my eye when Oswin says "efficient" and does a tiny, perfect impression of him with his eyebrows. I nearly choke on the lamb.
*elseif companion = "reuben"
  @reuben:neutral Reuben, across the table, eats his lamb very slowly and says almost nothing and watches Oswin the way he'd watch a patient whose numbers don't add up.

@severin:attentive After dinner, in the library, with a glass of something gold that I don't drink, Severin grants me access to the crossing registry. The Court's record of every crossing, in and out, for three hundred years. "As a courtesy," he says, "to a guest of my house." He smiles, very slightly. It's a courtesy. It's also a leash, and he knows I know it, and he's letting me know he knows. "The clerk will assist you in the morning."

*choice
  #Take the registry access, and thank Severin for it properly.
    *set fr_severin +1
    "Thank you," I say. "Properly. I know what it costs you to give it."

    @severin:tense Severin looks at me for a long moment over his glass. The frozen lake, and something moving under it, slowly, surprised. "Does it cost me something?" he says.

    "It costs you the chance to say no later."

    @severin:amused He almost smiles. It's a strange sight, on that face. "My son said you were perceptive," he says. "He didn't say you were rude with it." He inclines his head. "You're welcome, Mr Marsh."
  #Ask Oswin what he stores at Stillwater.
    *set oswin_wary true
    *set enemy_aware +1
    On the way out of the library, Oswin's by the fire, warming his hands. I stop.

    "You said you lease warehouses," I say, lightly. "At the docks. Stillwater, isn't it? What do you store there?"

    @oswin:amused He turns, smiling, pleasant. "Oh, all sorts," he says. "Apples. Timber. Things people don't want to keep in their own houses." He looks at me a moment longer than he needs to. His eyes are small and friendly and completely still. "Why do you ask, young man?"

    "Just curious."

    @oswin:amused "Curiosity," says Oswin Deller, warmly, "is a lovely quality in a guest." He goes back to warming his hands. And the warm comfortable room with the windows painted shut, the knack gives me, has just turned round in its chair to look at me. He'll remember my face. I can feel him fold it up and put it away, like a receipt.
*goto court3

*comment ---------------------------------------------------------------- CH13.TRAVELERS.01
*label travelers
*sid CH13.TRAVELERS.01
*date 2026-12-28 18:00
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
*set e06_c true
*set fr_lucan 1
*set eamon_bag true
The Travelers' House is down by the river, where the town's oldest and damp: a long, crooked building of black timber and yellow plaster, leaning on its neighbours, with forty rooms and one staircase and a sign by the door listing the house rules. [i]Boots off. Pay in advance. No singing after ten. No knives at table. Mind the cat.[/i]

It's crowded. It's loud. There are couriers from all over the Marches in the long room downstairs, eating at a shared table from a shared pot, arguing, laughing, mending boots, playing a card game nobody explains properly. It smells of stew and wet wool and woodsmoke. The knack gives it to me like standing in a warm crowd on a cold night: honey-slow, and friendly, and tired.

The landlady's a small fierce woman in her sixties with her grey hair in a scarf and a ladle she uses as a pointer. When Ansel tells her who we're looking for, she puts the ladle down.

She's still got Eamon's bag.

He sent it ahead, in August, she says, with another courier, the way couriers do when they're travelling light. He was going to collect it when he came through. He never came through. She's kept it under the stairs for four months, because nobody told her what else to do, and because she liked him. "He whistled," she says. "Terrible whistler. Always the same tune."

She brings it out and puts it on the table. A canvas bag, worn soft. His good shirt, folded. A return ticket for a coach from the Toll Gardens, unused. A little box of the almond sweets Ansel says his mother likes. And a letter, sealed, addressed in a big careful hand to a woman in a village in the north of the Marches. His sister, Ansel says quietly. He never posted it.

@ansel:sad Ansel doesn't touch any of it. He just sits and looks at it, very straight, with his gloved hands in his lap.

And the landlady says one more thing, as she goes back to her pot. In September, a man came asking whether Eamon had arrived. A quiet man. From Calder. "Good coat," she says. "Too good a coat for this house. Asked very nicely. Paid for a bowl of stew he didn't eat." She sniffs. "I didn't like him."

A quiet man in a good coat.{@good_coat| Owen's words, on the night bus, in September. The man who sat at the back of the Northwood bus with Eamon and talked to him, very calm, the whole way.|}
*meet lucan
@lucan:laugh Halfway through the stew, a laughing freckled man with long auburn hair and good boots gone shabby sits down at the end of our bench, with his own bowl, and says to Ansel, "Cousin! You're slumming it!" Lucan Verre. Ansel's cousin. He eats here every Monday, he says, because the food's better than at home, and the company's better than at his uncle's. He does an impression of Ansel's father so exact and so wicked that Ansel chokes on his stew.
*if companion = "adrian"
  @adrian:attentive Adrian's writing down everything the landlady said in his notebook, word for word, with the time.
*elseif companion = "micah"
  @micah:warm Micah's on the floor by the fire with the cat, which has decided he's its person, and is being very gentle with it, and listening to every word.
*elseif companion = "nolan"
  @nolan:attentive Nolan's got the recorder on the table, and the landlady's let him record her whistling Eamon's terrible tune, and he's gone very quiet listening to it back.
*elseif companion = "reuben"
  @reuben:sad Reuben's sitting next to Ansel, not touching him, just close. The way you'd sit next to someone in a waiting room.

*choice
  #Keep the letter safe for Eamon. Don't read it.
    *set eamon_letter_kept true
    I pick up the letter. Just the letter.

    "We should keep this safe," I say. "For him. For when we find him. He can post it himself."

    @ansel:attentive Ansel looks at me. And the cold water in the glass, the knack gives me, shivers, all the way down, and then goes still. "When we find him," he repeats.

    "When we find him."

    @ansel:warm He takes the letter from me, very carefully, and puts it in the inside pocket of his coat, over his heart, and buttons the coat over it. He doesn't say anything else. He doesn't need to.
  #Hold the bag, and reach.
    *set reached +1
    *set strain +1
    *set knack +2
    *set eamon_hope true
    I put my hands on the bag. The canvas, worn soft. And reach.

    I brace for it. For the bus, the cold, the calm voice, the van. For whatever happened to him. I brace for the worst thing.

    And it isn't there.

    It's August. It's a warm evening in a little room somewhere, and Eamon Kerr is packing this bag in a hurry, and whistling. Terribly. The same tune, over and over, out of tune. Shoving his good shirt in, taking it out, folding it properly because his sister taught him to, shoving it in again. Laughing at himself. Happy. Late for something and not minding. A lean lad with windburn and black hair and a terrible whistle, thinking about a coach ticket and a box of almond sweets and a letter he'll post tomorrow.

    It's not a clue. It's not evidence of anything. It's just a person.

    I take my hands off the bag. I've got a headache coming, and my eyes are wet, and Ansel's looking at me.

    "He was whistling," I say. "When he packed it. He was happy. He was thinking about his sister."

    @ansel:small Ansel closes his eyes. When he opens them, something in the cold water has changed. It's still cold. But there's something in it now that wasn't there before: not hope, exactly. The memory of what hope felt like. "That's him," he says. "That's exactly him."
*goto court3

*comment ---------------------------------------------------------------- CH13.COURT.03
*label court3
*sid CH13.COURT.03
*date 2026-12-28 22:30
*place P58
*present ansel
Half past ten at night, and Ansel says he wants to show me the Toll Gardens.

They're at the heart of the town, round the crossing office: public gardens with gravel paths and clipped yews and a frozen pond, and every bare tree hung with paper lanterns, hundreds of them, glowing orange in the dark. The crossing office itself is shut, a squat stone building with barred windows. There's nobody else here. Our boots crunch on the gravel. The snow's started again, very lightly.
*if companion = "adrian"
  Adrian stayed behind at the lodging. Ansel asked, very politely, if he might borrow me for an hour, and Adrian said "Of course," and then looked at me for a second too long.
*elseif companion = "micah"
  Micah stayed behind at the lodging with the cat. Ansel asked, very politely, if he might borrow me for an hour, and Micah grinned and said "Bring him back," and then didn't grin.
*elseif companion = "nolan"
  Nolan stayed behind at the lodging with his recorder. Ansel asked, very politely, if he might borrow me for an hour, and Nolan said "Sure," and then turned the recorder over in his hands, twice.
*elseif companion = "reuben"
  Reuben stayed behind at the lodging, asleep sitting up by the fire. Ansel asked, very politely, if he might borrow me for an hour, and Reuben opened one eye and said "Wear the scarf."
Ansel walks me round the gardens once, talking about the lanterns: who makes them, the old guild, the argument about the colour every year. Then he walks me round again, not talking. The knack gives me the cold water in the glass, very still, and far down in it something moving, something getting ready.

And on the third time round, by the frozen pond, he stops, and says it.

@ansel:small "My father has been using me to carry his intentions since I was twelve," he says. To the pond. "Messages he couldn't send in writing. Invitations he wanted refused. Apologies he didn't mean. I carry them. It's what I'm for." His breath goes up in the lantern light. "Every friend I've ever had has been a piece of family business. A son of someone he needed. A daughter he wanted me to marry. A courier whose family owed ours a favour." He swallows. "Eamon. Eamon was the first friend I ever made on my own. That's why I came to Calder. Not the Court. Not my father. Because he was mine."

@ansel:guarded He's never told anyone that. I can feel it: the weight of it coming off him, and the fear of what I'll make it into. A weakness. A tool. A piece of family business.

He waits to see what I'll do with it.

*choice
  *if st_ansel >= 3
    #Make it into nothing. It's his. Just say thank you for telling me.
      *set b_ansel_confidence true
      *set st_ansel 4
      I don't make it into anything. I don't fix it or advise or say [i]your father sounds awful[/i], though he does. It's his. It's not mine to do anything with.

      "Thank you for telling me," I say.

      @ansel:surprised He turns and looks at me. The lanterns. The snow. His face, for once, completely undefended.

      "That's all," I say. "Thank you. I know what it cost."

      @ansel:small "You're not going to..." He stops. "Everyone always does something with it. My mother cries. Lucan makes a joke. My tutors made it into a lesson." He looks at the pond. "You're not going to do anything with it."

      "No. It's yours."

      @ansel:warm And something in the cold water in the glass, deep down, turns over, slowly, like a fish in the dark, and stays turned. "Thank you," he says. Very quietly. And then, after a long time, standing by the frozen pond with the lanterns in the trees: "You're the second friend I ever made on my own."
  #"So stop carrying it." Tell him he can choose.
    *set s14 "fore"
    "So stop carrying it," I say.

    @ansel:surprised He looks at me, startled.

    "You're not twelve. You're twenty-one. You came to Calder on your own. You asked him for the investigation in front of the clerk, and when he said no, you did it anyway. You've already stopped. You just haven't told yourself yet." I nod at the dark crossing office. "You can choose what you carry. Every time. You're allowed."

    @ansel:tense He stands very still in the lantern light for a long time. The snow settles on his collar. "It's not that simple here," he says at last. "Not in the Marches. Family is... it's the law. It's the land. It's who gets to cross."

    "Then maybe the law needs someone to tell it."

    @ansel:attentive He looks at me. And something in his face, very slowly, sets, like frost on a window. "Maybe it does," says Ansel Marr.

*journal [b]Chapter 13.[/b] Christmas above the print shop, and a frozen call with Mum, laughing. On the twenty-eighth, Harlan Greaves let us through the Iron Footbridge into Bracken Court at the Candle Fair{@companion != "none"| (and we didn't go alone)|}.{@ch13_lodging = "official"| At the envoy's house, Severin Marr granted me the registry as a courtesy and a leash, and a broker called Oswin Deller asked a lot of questions about Calder's docks.| At the Travelers' House, the landlady still had Eamon's bag, and told us a quiet man in a good coat came asking after him in September.}{@b_ansel_confidence| In the Toll Gardens, Ansel told me Eamon was the first friend he ever made on his own.|}
*page_break
*goto_scene ch14
`);
