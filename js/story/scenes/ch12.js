NB.scene("ch12", String.raw`
*mood day
*set ch 12
*chapter 12 Before We Leave
*comment ---------------------------------------------------------------- CH12.CHOICE.01
*sid CH12.CHOICE.01
*date 2026-11-24 12:00
*place P02
*set strain 0
Late November. The trees on the Hill are bare, black against white skies, and the river's high and brown and fast. The placemat from the diner is on my wall, next to the proof sheet, with the four names and the two lines going off the edge.

Three people want me for the same week, and I can't be three places.
*if st_micah >= 2
  Micah, on Sunday, in the van outside the shop, with the engine running, not looking at me: [i]It's a family thing. Tuesday. Once a month. Out at Greyhill.[/i]{@know_micah_wolf| The full moon. He wants me to see it. He's never asked anyone to see it.| He said it's hard to explain and he'd rather show me, and then he went red to the ears and said [i]it's not a cult, I promise[/i].}
*if st_dominic >= 2
  Dominic, at four in the morning, by text: [i]film night at the Regent tuesday. milo's projecting something unforgivable. stay over? spare room's got a real bed and blackout blinds and a kettle. you'd be the first person to use it who needs to be home by breakfast[/i]
And here, the week I'm supposed to be having: the Christmas rush starting at the shop, the Switchyard fundraiser to plan for the lease fight, and a job from Benoît Marchand rigging lights for the Lantern Rooms' winter concert, paid, in cash, which never happens.

*choice
  *if st_micah >= 2
    #Micah: the supervised full-moon gathering at North Ridge. He wants me to see it.
      *set ch12_branch "gathering"
      *goto gathering
  *if st_dominic >= 2
    #Dominic: film night at the Regent, and staying over in the spare room.
      *set ch12_branch "regent"
      *goto regent
  #Here: the Christmas rush at the shop, the Switchyard fundraiser, and a job for Benoît at the Lantern Rooms.
    *set ch12_branch "home"
    *goto home

*comment ================================================================ the gathering
*comment ---------------------------------------------------------------- CH12.GATHERING.01
*label gathering
*sid CH12.GATHERING.01
*date 2026-11-24 16:00
*place P53
*present micah ernesto wesley leandro
*mood dusk
Greyhill Village is an hour out on the regional bus, over the ridge: a bus stop, a general store with a post office in the back, a handful of stone houses, and an inn called the Plough that rents its whole barn to Eastbank one night a month and asks no questions.

The Serranos' vans are already in the yard when I get off the bus: Serrano Yard's two, and Pavel's, and three more I don't know, and people unloading sleeping bags and cool boxes and flasks, dozens of them, kids and grandparents, like a school trip where everyone's related.

@micah:amused Micah's doing everyone else's jobs. I watch him carry three cool boxes, fix a van door, find a grandmother's glasses and tape up a little boy's shoe in the first five minutes, and he's cheerful the whole time. Too cheerful. Loud cheerful. "You came!" he shouts across the yard, when he sees me, and grins, and the grin's got something pulled too tight in it.
*meet ernesto
*if fr_ernesto >= 1
  @ernesto:neutral Ernesto's in the barn doorway with a whiteboard. Of course he's got a whiteboard.
*else
  @ernesto:neutral In the barn doorway, with a whiteboard, is Micah in thirty years: a big square face, grey at the temples, a thick moustache, builder's hands. Ernesto Serrano. He looks at me, and at Micah, and nods, once, as if he's been told about me and is reserving judgement.
The rules are on the whiteboard in blue marker, in capitals:

[i]1. NOBODY LEAVES THE LAKE ROAD. 2. PAVEL HAS THE KEYS. 3. KIDS STAY WITH THEIR NONNAS. 4. NEW ONES STAY WITH ME. 5. TEA AT DAWN.[/i]

@ernesto:attentive "Rule four," Ernesto says, tapping it, and looks past me.
*meet wesley
*if fr_wesley >= 1
  Wesley's sitting on a hay bale by the barn wall in his too-thin hoodie, with his knees up and his arms round them, pretending to be bored.
*else
  On a hay bale by the barn wall, in a hoodie too thin for November, sits a lad about my age with a shaved head growing out into dark fuzz and a face like a shut door. Wesley Dent, Micah tells me, low: new since the summer. Pavel's lodger.
Three transformations old, this will be his fourth. He's pretending to be bored. He's terrified. The knack gives it to me so loud it's like standing next to a fire alarm: a boy in a doorway in the rain, and the rain's coming, and the door won't open.
*set know_wolves true
*set fr_ernesto +1
*meet leandro
@leandro:amused Leandro comes past with a crate of bread rolls and bumps Micah with his shoulder. "He's been like this since Sunday," he tells me. "Doing everyone's jobs. It's how he copes. Last month he re-tiled the Plough's gents."

*choice
  *if not(b_micah_wolf)
    #Ask Micah to tell me what tonight actually is. All of it.
      *set b_micah_wolf true
      *set know_micah_wolf true
      *set st_micah 3
      I catch Micah by the arm between cool boxes, and pull him round the back of the barn, where the hedge is and nobody else.

      "Tell me what tonight is," I say. "All of it. Not the cult joke. The real thing."

      @micah:tense He looks at me for a long time. His face does the thing it does when he's deciding: goes very still, and then very red, and then very still again. And then he tells me.

      @micah:small "We change," he says. "Tonight. The family. Most of Eastbank, the old families. Full moon. We don't get a choice about it; it happens whether we like it or not. Dad, Leandro, Tomas, Wesley. Me." He swallows. "I've done it since I was thirteen. That's what [i]rough night[/i] means. That's what the tired is. We come out here so nobody gets hurt, and Pavel keeps the keys, and Dad brings a flask."

      [i]There are families in Eastbank who change on full-moon nights.[/i] I've known that since September. I felt it at the table{@ch07_evening = "serrano"| in October|}. I just didn't know I'd be standing behind a barn with one of them, holding his arm.

      @micah:tense He's watching my face. Watching it like a horse he isn't sure of, ready to turn it all into a joke if I give him a reason.

      "Okay," I say. "What do you need me to do?"

      @micah:surprised He stares at me. Then the thing pulled too tight in his grin lets go, all at once, and he laughs, a big surprised laugh, and has to lean on the barn wall. "Nobody's ever asked that," he says. "Everyone asks what we [i]are[/i]." He wipes his eyes. "Stay near Dad. Don't run. And if Wesley goes, tell someone."
  #Sit with Wesley. Don't pity him. Talk about anything else.
    *set fr_wesley +1
    *set s08 "fore"
    I go and sit on the hay bale next to Wesley. Not close. Just on the same bale.

    @wesley:guarded "Don't," he says.

    "Wasn't going to."

    @wesley:guarded "Everyone's going to tell me it's fine. It's not fine. It's the worst thing that's ever happened to me and it happens every month for the rest of my life."

    "I wasn't going to say it's fine. I was going to ask if you'd found a room yet."

    @wesley:surprised He turns and looks at me as if I've spoken Portuguese. "What?"

    "A room. Of your own. You said, at the table{@ch07_evening = "serrano"|| or somebody did}, nobody'll rent to you."

    @wesley:amused Something happens at the corner of his mouth. And then he tells me: about the three flats he's seen, and the landlord who wanted six months up front, and the one with the mushroom growing out of the bathroom ceiling, and the one he really liked above a launderette on Kiln Street that smelled of clean sheets all day and was gone before he could get the deposit together. He talks for twenty minutes. He doesn't mention tonight once. Neither do I.

    @wesley:small "Thanks," he says, at the end, not looking at me. "For not." And the fire alarm in him turns down, just a notch.
*page_break
*comment ---------------------------------------------------------------- CH12.GATHERING.02
*sid CH12.GATHERING.02
*date 2026-11-24 22:30
*place P49
*present micah wesley ernesto
*mood night
*set know_micah_wolf true
Quarry Lake, under the full moon.

The lake's in the bottom of an old quarry, black and still, with sheer grey cliffs on three sides and a gentle slope of scrub and birch on the fourth, where the old access road comes down. The moon's so bright you could read by it. Pavel's parked the vans across the road at the top and is sitting on the bonnet of one with a flask and a torch he isn't using. Ernesto brought everyone down at eight, family by family, and told me to stand by the big rock with him and not move.

I watched the change.

I'm not going to be able to describe it, afterwards. I'll try, and fail, and stop trying. It hurts them. I felt that. Like the worst growing pains in the world, all at once, a minute of it, forty people on the grass in the moonlight folding and stretching and making sounds I'll hear in my sleep. And then it was over, and where the people had been there were wolves.

Big ones. Dark and silver and brindled, bigger than any dog, shaking themselves, sneezing, looking round in the moonlight like people waking up in a strange room. And one of them, a big dark one with a wide head and a white mark on his chest, came straight over to the rock and pushed his whole head into my stomach, hard enough to knock the breath out of me, and I knew exactly who it was.

And then they run.

@micah:moon All of them. Down to the lake and along the shore and up the slope and back, in a pack, in the moonlight, forty wolves running for the joy of it, and the knack gives it to me all at once, and it's like nothing I've ever felt. Joy. Pure and loud and simple, coming off forty bodies at once, the joy of running, of being strong and fast and together and the moon on the water, and it goes through me like a firework, and I laugh out loud, alone by the rock, like an idiot, and can't stop.

And then, in the middle of it, one note goes wrong.

Fear. A single thread of it, sharp and white and going the wrong way. Away from the pack. Away from the lake. Up the slope, fast, towards the cliffs.

Wesley.

I feel him go the way you'd feel a string snap. Too new, too frightened, too much: the joy was too big and it turned inside him into panic, and he's running from it, from all of them, from himself, up through the birches in the dark towards the top of the quarry cliffs, where the ground just stops.
*if octavian_known
  Where Armand Sorrell's son fell, ten years ago this March. Three days on a ledge before anyone found him.
@ernesto:moon Ernesto, beside me, as a wolf, the grey one with the torn ear, is already moving. But he's going by nose, and Wesley's upwind, and the birches are thick, and the fear's moving too fast.

I'm the only one here who can feel exactly where it is.

*choice
  #Follow his fear, not his tracks. Talk him down from the edge.
    *set knack +3
    *set wesley_saved "mc"
    *set fr_wesley +1
    I run.

    Not after the wolves. After the fear. I let the knack have it, all of it, the whole white snapping thread of it, and I follow it up the slope through the birches in the moonlight with branches whipping my face, not looking where I'm going, looking where [i]he[/i] is. Left. Up. Left again. The ground rising. The trees thinning. And then no trees, and the moon, and the edge.

    He's on the lip of the cliff. A young wolf, thin and grey and shaking, all four legs braced, with the drop behind him and nothing but air and the black lake eighty feet down. He's turned to face me. His lips are back. He's so frightened he can't tell what's him and what's the wolf and what's the fall.

    I stop. I sit down. On the cold ground, ten feet from him, cross-legged, with my hands on my knees where he can see them.

    And I talk to him.

    In my own voice. Just my voice. I tell him about the launderette on Kiln Street that smells of clean sheets. I tell him it's gone, but there'll be another one. I tell him about Pavel's boiler that screams at four in the morning. I tell him he's Wesley, he's Wesley, he's nineteen and he's Wesley and he's allowed to be frightened and he's allowed to be here and he doesn't have to run anywhere, and the ground under him is solid, and I'm not going anywhere, and neither is he.

    @wesley:moon It takes a long time. The moon goes behind a cloud and comes out again. And slowly, very slowly, the white snapping thread of him stops snapping. His legs stop shaking. He takes one step away from the edge. Then another. And then he lies down, all at once, flat, on the frozen grass, with his nose on his paws, and lets out a long, long breath, and I shuffle over on my backside and put my hand on his neck, and he lets me.

    Ernesto finds us like that ten minutes later. He sits down on Wesley's other side. None of us moves until the moon's gone down behind the far cliff.
  #Guide Micah to him with the knack, shouting directions.
    *set wesley_saved "micah"
    *set st_micah +1
    "Micah!" I shout. "[i]Micah![/i]"

    @micah:moon And the big dark wolf with the white chest is there, beside me, out of nowhere, with his ears up and his eyes throwing back the moon.

    "Wesley," I say. "Up there. The cliffs. I can feel him. I'll tell you where."

    He goes. God, he's fast. A dark shape through the birches, and I run after him as far as I can and then I stop, because I can't keep up, and I stand in the dark in the trees with my eyes shut and the knack turned up as far as it'll go and I shout.

    "Left! Up! Up and left! He's on the rock, the big flat one, he's right at the edge, go slow, [i]slow[/i], he's scared of you, he's scared of everything, go slow..."

    I feel them both. The white snapping thread of Wesley's fear, and the big warm steady thing of Micah coming up towards it, slow now, careful, low to the ground. I feel the moment Micah gets there. I feel him lie down, flat, a few feet from the edge, with his head on his paws, and just wait. I feel Wesley's fear go on snapping, and snapping, and then, slowly, slowly, stop.

    When I get to the top of the slope, they're both lying on the frozen grass by the cliff edge, the young grey one and the big dark one, side by side, not touching, breathing. Micah lifts his head and looks at me, and his tail thumps, twice, on the ground.
*comment ---------------------------------------------------------------- CH12.GATHERING.03
*sid CH12.GATHERING.03
*date 2026-11-25 03:00
*place P53
*present micah ernesto leandro
The barn at three in the morning.

Wolves asleep in heaps on the straw, and then, one by one, not wolves: people, human-shaped again under blankets, exhausted, snoring, a grandmother with a toddler asleep on her chest, Wesley rolled up in a sleeping bag in the corner like a caterpillar with just his shaved head showing. The whole barn smells of hay and wet dog and tea. Pavel's going round with the flask.

@micah:tired Micah's sitting on a bale with a blanket round his shoulders. Human again. Grey with tiredness. He hasn't slept since Saturday; I know because he's told three people, cheerfully, as if it's funny. His hands are shaking round his mug of tea.

@ernesto:neutral And Ernesto, human too, with his moustache and his blanket and his whiteboard, comes over and puts a hand on Micah's shoulder. "Here is what we'll do," he says. "You drive the van back at dawn. Drop the Castillos in Eastbank. Then open the yard. The Hendry job's at eight."

@micah:tired "Yeah," says Micah. "Course. Yeah." He says yes. He always says yes. He's so tired he can barely lift the mug, and he says yes, because that's what he does.

*choice
  *if st_micah >= 3
    #"He's not driving. I'll do it, or Leandro will. He's done." Say it to Ernesto.
      *set b_micah_boundary true
      *set st_micah 4
      *set fr_ernesto -1
      *set nerve +2
      "He's not driving," I say.

      @ernesto:surprised Ernesto turns and looks at me. So does Micah. So, from the next bale, does Leandro, who was pretending to be asleep.

      "He hasn't slept since Saturday. His hands are shaking. He can't hold a mug; he's not driving a van full of people down the ridge in the dark." My voice doesn't shake. I don't know how. "I'll drive it. Or Leandro will. He's done."

      @ernesto:angry Ernesto's face goes very still. He's not a man people say no to. I feel it: surprise, and anger, a flare of it, a father's anger at a stranger telling him about his son. And then, under it, slowly, something else. Something that looks at Micah's hands on the mug, and sees them.

      @leandro:amused "I'll drive," says Leandro, from the bale, sitting up. "I've been saying he's done since Thursday. Nobody listens to me. I'm the funny one."

      @ernesto:guarded Ernesto looks at me for a long time. Then he takes his hand off Micah's shoulder. "Leandro drives," he says, stiffly. "Micah sleeps." And he walks away, and I know I've cost myself something with him, and I don't care.

      @micah:small Micah doesn't say anything. He just looks at me, over the mug, with his shaking hands. The knack can't tell me what he's thinking about me. It never can. But it gives me the thing I felt the first night at Switchyard, the deep animal tiredness, right down in the bones, and something going through it like warm water.

      @micah:warm "Nobody's ever done that," he says, eventually, very quietly. "Said no. For me."
  #Say nothing. It's his family.
    I don't say anything. It's his family. It's not my place.

    Micah drives the van back at dawn, with the Castillos asleep in the back, down the ridge in the frost, and I sit in the passenger seat and watch him blink, and blink, and grip the wheel, and I don't say anything the whole way, and it's the longest hour of my life.
*comment ---------------------------------------------------------------- CH12.GATHERING.04
*sid CH12.GATHERING.04
*date 2026-11-25 06:40
*place P50
*present micah
*mood winter
*if b_micah_boundary
  Leandro drops me and Micah at the reservoir on the way back, because Micah says he wants a walk before he sleeps, and Leandro gives him a look and then gives me a look and then drives off without saying anything, which from Leandro is a paragraph.
*else
  At the reservoir, Micah pulls the van into the lay-by, with the Castillos still asleep in the back, and says he needs to walk for ten minutes or he'll fall asleep at the wheel, and asks if I'll come.
The reservoir path at dawn, frost on everything. Every blade of grass white and stiff. The water flat and grey and steaming slightly in the cold, and the sun coming up pink behind the dam.

Micah wanted a walk. Alone. He never wants to be alone.

@micah:tired He's quiet. That's the other thing. Micah's never quiet. We walk along the top of the dam, our breath going up in clouds, our boots crunching, and he doesn't say anything for ten minutes, and then he does.

@micah:small "I don't know why I keep wanting to be where you are," he says.

He says it like a man describing a noise in an engine. Puzzled. Practical. As if it's a fault he's noticed and can't find the source of.

@micah:tense "I've never..." he starts. Stops. "I've had girlfriends. I liked them. I did. That was real." He's looking straight ahead at the water. "This isn't like that. I don't know what this is like. I just keep wanting to be in the same room. And tonight, at the barn, when you said [i]he's done[/i]..." He stops walking. "I don't know what that was. I just know I want to be where you are. That's all I've got. That's the whole engine."

*choice
  *if b_micah_wolf and b_micah_boundary and (hurt_micah < 2)
    #"I know why I do." Tell him. Let him answer, or not.
      *set b_micah_want true
      *set st_micah 5
      *set out_micah true
      *achieve told_truth
      "I know why I do," I say.

      He turns and looks at me.

      And I tell him. The thing I've never said out loud. Not to Mum. Not to Nolan. Not to the internet. I've known since I was twelve, the way you know the name of a street you've never walked down, and I've never once walked down it, and I walk down it now, on a frozen dam at dawn, with my breath going up in clouds.

      "I'm gay," I say. "And I want to be where you are too. That's why."

      It's so quiet. The water steams. A bird goes over.

      @micah:surprised He doesn't say anything for a long time. I can't feel what he thinks about me; I never can; it's the one thing the knack won't do. I can feel everything else. The engine noise. The fault he can't find. The deep animal thing in him, awake now, and very still, and listening.

      @micah:small "I don't know what I am," he says at last. Slowly. Carefully, the way he'd strip a wire. "I don't know if there's a word. I don't want a word, yet." He looks at the water. "But I know I want to be where you are. And I know I wanted to..." He stops. Goes red, all the way up, in the frost. "At the barn. When you said no for me. I wanted to kiss you. I didn't know I wanted to until I wanted to." He laughs, not really. "That's it. That's all I've got. Is that enough?"

      "It's enough."

      @micah:warm He looks at me. And then he takes my hand, in his big cold shaking one, on the dam, at dawn, clumsily, like a man picking up something he's afraid he'll break. And we walk the rest of the way round the reservoir like that, not saying anything else, while the sun comes up.
  #"Because I'm great company." Keep it light. Keep it safe.
    "Because I'm great company," I say.

    @micah:laugh He laughs. Properly. The big surprised laugh. "Yeah," he says. "That'll be it." And he bumps my shoulder, hard, the way he does, and the moment goes past like a bus you didn't quite run for.

    We walk on. It's fine. It's safe. It's a lovely morning. And I don't know if I'm relieved or not, and I think, walking beside him with the frost crunching, that he doesn't know either.
  #Just walk. Let the not-saying be enough, for now.
    *set people +1
    I don't say anything. I just walk beside him.

    @micah:small He doesn't say anything else either. We go all the way round the reservoir, three miles, in the frost, with the sun coming up, not saying it. Somewhere on the far side his shoulder starts to bump mine every few steps, and stays a bit longer each time.

    It's not nothing. It's not everything. It's a walk. For now it's enough.
*goto followup_check

*comment ================================================================ the Regent before dawn
*comment ---------------------------------------------------------------- CH12.REGENT.01
*label regent
*sid CH12.REGENT.01
*date 2026-11-24 21:00
*place P14 regent
*present dominic milo rafi abel lucien
*mood night
*set s16 "intro"
Film night in the Regent's auditorium.

It's the old main screen, the big one, with the red velvet seats and the gold plaster cherubs on the balcony and the curtain that still opens on a motor, and tonight there are about thirty people in it, scattered through the stalls in dressing gowns and jumpers and one tiara, with popcorn from the machine in the lobby that's older than Lucien.
*meet milo
*if fr_milo >= 1
  @milo:amused Milo's in the projection box, with his camera on its strap, running an actual reel of actual film through an actual projector, and shouting down through the little window: "Nobody talk during the overture! The overture is the best bit!"
*else
  @milo:amused In the projection box, shouting down through the little window, is a small freckled lad with a mop of red-brown hair and a camera on a strap round his neck: Milo Finch, who works days at the Regent and runs the projector on film nights. "Nobody talk during the overture!" he shouts. "The overture is the best bit!"
*set fr_milo +1

The film is a musical from about sixty years ago, about sailors, and it's terrible. It's so terrible it goes all the way round and becomes wonderful.
*meet rafi
*if fr_rafi >= 1
  @rafi:laugh Rafi's in the third row, still in his scrubs from a night shift he's skiving, heckling every single song. "He's not even [i]looking[/i] at her! He's looking at the [i]other sailor[/i]! Everyone can see it! Tell him, Lucien!"
*else
  @rafi:laugh In the third row, in nurse's scrubs under a parka, a lad with curly black hair and a quick face is heckling every single song. "He's not even [i]looking[/i] at her! He's looking at the [i]other sailor[/i]! Everyone can see it! Tell him, Lucien!" That's Rafi, Dominic says, in my ear: a nurse at the General, nights only. Obviously.
*set fr_rafi +1

@lucien:amused Lucien's knitting. In the middle of the front row, in his cardigan from the seventies, with the stillness of a very old tree and a pair of needles going like a machine, making something long and green. He doesn't look up. "Everyone can see it, Rafi," he agrees. "It was nineteen-sixty-one. Everyone could see it then."

@abel:angry And behind them, in the row with the best view, Abel Mercer, silver-haired, pale, in grey cashmere even to watch a film, is complaining about the seats. Loudly. He paid for their reupholstering in the spring, it emerges, when he moved into the Regent, and he feels he has a right to an opinion about the velvet. "It's the wrong red," he says, to nobody who's listening. "I specified oxblood. This is [i]cherry[/i]."

@dominic:warm And Dominic's saved me the good armrest.

He's in the back row, in an old jumper, with his feet up on the seat in front, and there's a bag of popcorn on the seat next to him holding it, and when I come in he moves the popcorn without saying anything, and I sit down, and the armrest between us is the only one in the row that doesn't wobble. He knows. He's tested them all. The knack gives me the stillness in him, the held, careful stillness, and tonight, in the dark, with the terrible sailors singing, it's loosened, like a knot somebody's finally stopped worrying at.

@dominic:amused "This is my favourite bit," he whispers, at a song about a lighthouse. "It's the worst bit. Watch the lighthouse. It's a painting. It [i]wobbles[/i]."

It wobbles. I laugh so hard Milo shouts at me through the window.

@dominic:shy Afterwards, at two, he shows me the spare room: up in what used to be the manager's flat, a proper bed with a proper quilt, blackout blinds, a kettle, a tin of biscuits somebody's clearly bought specially. "For humans," he says, a bit awkwardly, from the doorway. "We had a meeting about it. Rafi picked the biscuits." And then he says goodnight and goes, and I lie in the dark in a vampire cinema and listen to the building settle, and sleep better than I have in weeks.
*page_break
*comment ---------------------------------------------------------------- CH12.REGENT.02
*sid CH12.REGENT.02
*date 2026-11-25 04:30
*place P14 regent
*present dominic milo rafi abel lucien
At half past four, a crack like a gunshot.

I'm awake and on my feet before I know why. Somewhere above me, a long groaning tearing sound, wood giving way, and then a crash that shakes the whole building, and dust coming down from the ceiling of the spare room in a fine grey rain.

@dominic:scared Dominic's in the doorway. I didn't hear him come. "The east wing," he says. His face is completely calm. The knack gives me the calm for what it is: a lid on a boiling pan. "The roof truss. The frost's split it. It's dropped the light shutters on the whole top floor."

The light shutters. The steel shutters over every window in the east wing, the ones that keep the sun out.

I look at my phone. Half past four. Sunrise, it says, in the corner, the way it always does: [i]07:10[/i].

Two hours and forty minutes.

@rafi:tense Rafi's on the landing in his scrubs, counting on his fingers. "Eleven in the east wing," he says. "Two of them can't walk far. Mrs Delacroix is ninety-six and she's been turned since before the war. Mr Obi's still weak from a bad feed; he can barely stand. And two human staff, day porters, asleep in the ground-floor flat." He looks at Dominic. "The west wing's sealed. We move everyone to the west wing, or we get the shutters back up before seven."

@milo:tense Milo, in pyjama bottoms and a jumper and his camera, of course, round his neck: "The service passages go through behind the old screens. I know them. I can get people through in the dark."

@abel:angry And Abel Mercer, in a silk dressing gown, at the top of the east stairs: "My rooms are on that floor. My things are on that floor. Who is going to carry my things?"

@dominic:tense Dominic knows whose room is whose. Milo knows the passages. Rafi knows who's too weak to walk. And I'm the only human awake who isn't staff, standing on a landing in a vampire cinema in borrowed pyjamas with two hours and forty minutes to sunrise.

*choice
  #Ask Dominic where he needs me, and do exactly that.
    *set b_dominic_dawn true
    *set st_dominic 4
    "Where do you need me?" I ask Dominic. "Tell me, and I'll do exactly that."

    @dominic:surprised He looks at me for half a second. Nobody's asked him that, I think. Since last August, everyone's been deciding for him: where he can go, what he can do, what's safe. Nobody's asked him to decide.

    @dominic:attentive "Mrs Delacroix," he says. "Room four. She won't go with anyone she doesn't know, and she knows me. I'll carry her. You carry Mr Obi's oxygen and walk behind us and don't let the door shut. Then the porters. Then everyone else." It comes out of him fast and certain, like a set list. "Go."

    So I go. I carry the oxygen and walk behind Dominic down the long dark corridor of the east wing, with the broken truss hanging through the ceiling and the dawn not here yet but coming, while he carries a ninety-six-year-old woman in a nightdress in his arms like a child, talking to her the whole time in a low voice about the film, and she holds on to his jumper and tells him the sailors were much better in the original. I hold the door. I don't let it shut. We do it eleven times.

    It's the best I've ever been at anything. Because he told me what to do, and I did it, and he was right.
  #Tell Dominic to get to the safe wing first; I'll handle his end.
    *set managed_dominic true
    "Get to the west wing," I say to Dominic. "Now. You go first, you're the one who can't be in the light. I'll handle your end. Tell me whose room is whose and go."

    @dominic:hurt Something goes over his face. Fast, and gone. "I'm fine," he says. "I've got two hours."

    "Go. I've got it."

    @dominic:guarded He goes. He tells me the rooms, quickly, flatly, and he goes to the west wing, and I do his end: I get Mrs Delacroix, who won't come with a stranger until Rafi comes and vouches for me, and Mr Obi, and the porters. It takes longer than it should. We do it. Everyone's safe.

    But when I get to the west wing, Dominic's standing by the sealed door with his arms folded and his face very still, and the knack gives me something I didn't expect: not gratitude. Something heavier. The feeling of a man who's been put in a box for his own good, again, by someone who likes him.
  #Take the ladders with Milo and get the shutters back up.
    *set craft +3
    *set fr_milo +1
    "The shutters," I say. "If we get them back up, nobody has to move. Milo, where are the ladders?"

    @milo:surprised Milo stares at me. Then he grins, a terrified, delighted grin. "Maintenance cupboard," he says. "Ground floor. Come on."

    So the vampires move the ones who need moving, and Milo and I take the ladders. Up through the dark east wing, through the dust, to where the truss has come down and the steel shutters have dropped off their runners on the whole top floor and are hanging crooked or lying on the carpet. I've rigged a hundred lighting trusses. I know what a load path looks like. I know how to get a heavy thing back up a runner with a strap and a lever and a lot of swearing.

    We get eleven of them back up by ten to seven. The last one, on Abel Mercer's window, jams, and Milo holds the ladder and I hang off the top of it with my whole weight on the shutter and shove, and it goes home with a clang that echoes through the building like a gong, and the sky outside, behind it, is already grey.
*comment ---------------------------------------------------------------- CH12.REGENT.03
*sid CH12.REGENT.03
*date 2026-11-25 06:55
*place P14 regent
*present dominic abel lucien adrian
*set s16 "fore"
Five to seven. Fifteen minutes to sunrise. Everyone's accounted for.

It's not tidy. There are vampires in dressing gowns in every corridor of the west wing, and Mrs Delacroix is asleep in Lucien's own armchair with a blanket over her, and there's plaster dust in everyone's hair. But everyone's in the dark, and everyone's safe.

@abel:angry And Abel Mercer is making a scene.

He wanted his rooms protected first. Before anyone was moved. Before the old woman, before the weak ones. His rooms, and his things: the paintings, the silver, a cabinet of something that's apparently irreplaceable. He's standing in the west-wing corridor in his silk dressing gown with his silver hair on end, in front of everybody, saying so. He pays more than anyone. He paid for the seats. He paid for [i]half this roof[/i].

@lucien:guarded Lucien listens to all of it. He doesn't interrupt. Then he says, quite quietly, in front of everybody: "No, Abel."

The corridor goes silent.

@lucien:neutral "We moved the ones who couldn't move themselves first," says Lucien Arnaud. "We always will. That's the rule of this house, and your money doesn't buy an exception to it. If that means you'd prefer to take your money elsewhere," he inclines his head, very courteously, "I'll understand, and I'll be sorry."

It costs him something. I can feel it: the trust's accounts, the roof, a year of repairs, a very rich man's goodwill, all of it going out of the room with Abel Mercer's face. Lucien pays it without blinking.

@adrian:tired And then, from the stairwell, a voice I know: "Is everyone all right?"
*meet adrian
Adrian Keene. At five to seven in the morning, off shift, with his warden's jacket pulled on over a pair of pyjamas with small blue aeroplanes on them, and his hair flat on one side from the pillow. Somebody at Mercy House heard there'd been a structural failure at the Regent. Somebody mentioned, apparently, that I was here.

He wasn't called. He isn't on duty. He came anyway.

*choice
  *if st_adrian >= 3
    #Ask Adrian why he came, if he wasn't called.
      *set b_adrian_offduty true
      *set st_adrian 4
      "You weren't called," I say, on the landing, while the vampires go to bed around us. "You're not on shift. Why did you come?"

      @adrian:shy He opens his mouth. Then he shuts it. He looks down at his pyjamas, as if seeing the aeroplanes for the first time.

      @adrian:small "I don't know," he says. And I can feel that it's true: he doesn't. There's a knot in him with no procedure attached, and he's been walking round it since he got out of bed. "Someone said [i]structural failure[/i] and [i]the Regent[/i] and your name in the same sentence, and I was in the car before I'd decided anything." He frowns at the aeroplanes. "That's not like me."

      "No."

      @adrian:warm "I don't have a reason," says Adrian Keene, who always has a reason, very quietly, on the landing, with plaster dust coming down on both of us like snow. "I just needed to see you were all right." He looks at me. "You're all right."

      "I'm all right."

      @adrian:warm "Good," he says. And then, embarrassed, straightening his jacket over the aeroplanes: "Good. Right. I'll... good."
  #Back Lucien against Abel, out loud.
    *set fr_lucien +1
    *set ally_regent_hint true
    I'm human. I'm a guest. I've got no standing in this house at all. I say it anyway, out loud, in the corridor, in front of everybody.

    "He's right," I say. "Lucien's right. You move the ones who can't move themselves first. That's not a rule, that's just being a person."

    @abel:angry Abel Mercer turns and looks at me as if a piece of furniture has spoken.

    @lucien:amused But Lucien, for the first time since I've known him, smiles. A real one, very small, in the very old face. "Thank you, {name}," he says. And then, to the corridor, to all of them, courteously: "Bed, everyone. The sun's coming."

    @lucien:warm Later, as I'm leaving, he stops me at the stairs. "The residents noticed," he says. "A human, standing up in our corridor, for our rule." He looks at me with his dark, very old eyes. "This house remembers things like that. For a long time."
*comment ---------------------------------------------------------------- CH12.REGENT.04
*sid CH12.REGENT.04
*date 2026-11-25 18:30
*place P14 regent
*present dominic
*mood dusk
That evening, after sunset, on the Regent's flat roof.

I slept all day in the spare room with the blackout blinds down, like a vampire, and got up at five, and Dominic knocked at six and said he wanted to show me something. It's the roof. Flat, tarred, with the old neon letters of the marquee along the front edge, [i]REGENT[/i], and the new shutters all along the east side where we put them back, or where they were put back, and the whole city spread out under the dark in every direction. The river. The bridges lit like zips. Latch Lane, somewhere, a dot.

@dominic:tired He sits on the parapet with his legs over the edge. He doesn't need to worry about falling. I sit next to him with my legs on the right side of it, because I do.

He hasn't been treated gently all day. He carried or was carried past, depending; he was needed or managed; he was in the middle of it. And now, on the roof, he's grateful, and he doesn't know what to do with it. I can feel him turning it over in his hands like something he's been given and doesn't know where to put.

@dominic:attentive "Can I ask you something?" he says.

"Go on."

@dominic:attentive "What do [i]you[/i] want?" He's looking at the city, not at me. "Everyone asks me if I'm all right. For a year. [i]Are you all right, Dom. Are you managing. Do you need anything.[/i]" He shakes his head. "Nobody asks me anything else. I'm asking you. What do you want?"

*choice
  *if b_dominic_dawn and not(managed_dominic) and (hurt_dominic < 2)
    #Tell him what I want. It's him.
      *set b_dominic_ask true
      *set st_dominic 5
      *set out_dominic true
      *achieve told_truth
      I tell him.

      Not all at once. I start with the small true things, and they get bigger. I want to not be tired. I want Quentin to be all right. I want to do lights for something that matters. I want Martin to stop worrying about money. And then, because he's still looking at the city, and it's dark, and it's easier to say it to the side of someone's face:

      "And you," I say. "I want you."

      The city goes on being lit up below us. A bus goes over one of the bridges.

      "I'm gay," I say. "I've never said that out loud to anyone. Not my mum. Not my best mate. I'm saying it on a roof to a vampire." I laugh, not really. "That's what I want. You asked."

      @dominic:surprised He turns and looks at me.

      The knack can't tell me what he feels about me. It never can. But I can feel the stillness in him, the careful held stillness he's kept up for a year like a man standing very straight on a bus that keeps braking, and I feel it stop. Just stop. Like a held breath let out.

      @dominic:warm "Me too," he says. Low and rough and warm, the voice from the stage. "Not the vampire bit. The other bit. I knew before. I never told anyone either." He looks at his hands. "And then I got turned, and I thought, well, that's that, then. Who's going to want this. Cold hands. No daylight. Can't even go for breakfast." He laughs, and it cracks. "And then you walked into the Regent and talked to me like it was a year ago."

      @dominic:shy "I want you too," says Dominic Bell. "I didn't think I was allowed to."

      He doesn't do anything. He's careful. He's so careful. He puts his cold hand on the parapet next to mine, not touching, an inch away, and leaves it there, and waits, the way you'd wait for a deer to come to you.

      I close the inch.
  #"For you to be all right." Which is true, and not an answer.
    "For you to be all right," I say.

    @dominic:sad He nods, slowly. "Yeah," he says. "Everyone wants that." And he smiles, and it's kind, and it's tired, and I can feel him put something back in the box he took it out of.

    We sit on the roof until it gets too cold for me. He doesn't feel the cold. He notices I do, and takes his jumper off, and gives it to me, and sits there in his T-shirt in November looking at the city, and I wear his jumper home on the night bus and don't give it back.
*goto followup_check

*comment ================================================================ here
*comment ---------------------------------------------------------------- CH12.HOME.01
*label home
*sid CH12.HOME.01
*date 2026-11-24 19:00
*place P13
*present nolan desmond
*mood night
*set s06 "fore"
Switchyard after hours, the house lights up and the bar shut, and a pizza box on the stage.

Desmond's called a meeting about the fundraiser. The lease is up for review in the new year, and the landlord's had an offer from a developer for the whole block, and the only thing standing between Switchyard and a block of flats is a very big December night that raises enough to show the council the place matters. Desmond calls it [i]the lease fight[/i]. He says it like a boxer.
*meet desmond
@desmond:amused "So it's all hands," says Desmond, beaming, in his band T-shirt and his blazer, with his short locs tied back. "Everyone's giving their time. It's a community thing. Crew, bar, door, sound, lights, all volunteer. For the venue. For the [i]scene[/i]."

The knack gives me Desmond the way it always does: charming, and warm, and genuinely frightened, and under all of it, like damp through wallpaper, the assumption that people who love a thing will work for it for free.

@nolan:attentive Nolan's not listening. He's sitting on the edge of the stage with a flyer turned over and a biro, and he's drawing the rig. The whole thing. Front of house, the mixing position, where the delay speakers go for the back room, where the monitors sit, the cable runs, the power, the patch. In ten minutes. On the back of a flyer. It's so good, so clear and clever and exactly right, that I forget to be anything except impressed.

@nolan:shy "What?" he says, when he catches me looking.

"Nothing. That's really good."

@nolan:amused "It's a rig," he says, going pink. "It's just a rig."

*choice
  *if st_nolan >= 3
    #Work the rig plan with him till two in the morning.
      *set b_nolan_work true
      *set st_nolan 4
      So we work it. Him and me, on the edge of the stage, with the pizza going cold and Desmond gone home, till two in the morning.

      @nolan:attentive It's the best kind of work. It's the kind where you stop noticing time. He does sound and I do light and we argue about where the lights can go without blocking the delays, and he's right, and then I'm right, and we move the whole front truss eighteen inches and it solves everything. He draws. I draw over his drawing. At one in the morning he goes and finds a roll of lining paper in the store and we do it again, full size, on the floor of the stage, on our knees, with a marker each.

      @nolan:warm "We're so good at this," he says, at two, sitting back on his heels, looking at it. Paper all over the stage. "We should do this for a living."

      "We do."

      @nolan:warm "Not for Des," he says. "For [i]us[/i]." And he bumps my shoulder with his, on the floor of the stage, surrounded by paper, and leaves it there, and I let him.
  #Make Desmond pay the crew. Out loud.
    *set fr_desmond -1
    *set nerve +2
    *set crew_paid true
    "Des," I say. "The crew gets paid."

    @desmond:surprised Desmond looks at me as if I've kicked a puppy. "It's a [i]fundraiser[/i]."

    "It's a fundraiser for a venue that's supposed to pay its staff. If the venue can't pay its crew for the night that's meant to save it, what are we saving?" I nod at Nolan, who's gone very still over his flyer. "He's drawn your whole rig in ten minutes on the back of a flyer. That's worth money. Everybody on that crew is worth money. Pay them, or get someone else."

    @desmond:tense The warmth goes out of the room for a second. I feel Desmond's fright come up through the charm like water through a floor. And then, slowly, something else: a sort of shame, and under the shame, a sort of relief, as if someone's finally said the thing he's been avoiding for three years.

    @desmond:tired "Fine," he says. "Fine. Crew gets paid. Minimum. Out of the door take." He looks at me. "You're a pain in my neck, you know that."

    @nolan:amused Nolan, on the edge of the stage, is looking at me with an expression I haven't seen on him before. "That," he says, when Desmond's gone, "was the hottest thing I've ever seen anyone do in a venue." And then he goes bright red and looks at his flyer and says, "In a [i]professional[/i] sense."
  *if not(nolan_knows)
    #Tell Nolan the truth about the last three months. All of it.
      *set nolan_knows true
      *set gift_nolan true
      *set hurt_nolan 0
      When Desmond's gone, and it's just us and the pizza box and the stage, I tell him.

      All of it. The lane. Quentin, and the rope. The wardens, and the Regent, and Eastbank, and a man with a formal collar looking for a courier who vanished at a crossing to another country. Silas. Hugo. Two men who died and came back and two men missing. The program seven years ago. {@gift_nolan|The knack, which he already knew about, and what it's been doing, which he didn't.|The knack. What I am. What I've always been.}

      It takes an hour. He doesn't interrupt once. He sits on the edge of the stage turning a cable connector over and over in his hands.

      @nolan:surprised When I've finished, he's quiet for a long time.

      @nolan:hurt "Three months," he says eventually. "Three months you've been doing this. Vampires. [i]Wolves[/i]." He looks at me. "And I thought you were just going off me."

      "I was never going off you."

      @nolan:small "Yeah," he says. "I know that now." He puts the connector down. "Why didn't you tell me?"

      "Because it sounds insane. And because I didn't want you in it. It's dangerous."

      @nolan:angry "I'm [i]already[/i] in it," says Nolan. "I was in the lane. I was at the sound desk when you came in white as a sheet. I've been in it since August, I just didn't know." And then, suddenly, all the anger goes out of him, and what's left is just Nolan, tired, in the house lights. "Don't do that again," he says. "Don't leave me out because you think it's safer. It's not safer. It's just lonelier. For both of us."

      "Okay."

      @nolan:warm "Okay," says Nolan. And the bruise in him, the one that's been there since August, the one I kept pressing, eases, and eases, and goes.
*comment ---------------------------------------------------------------- CH12.HOME.02
*sid CH12.HOME.02
*date 2026-11-25 23:30
*place P23 calder_general
*present reuben victor
Calder General's car park, level three, at half past eleven at night.{@ch05_route = "hospital"| Where I first sat with Quentin, in September, with the city spread out below.|}

I'm here because Rafi texted me: [i]your warden's in the car park and I think he's forgotten how to leave[/i].

@reuben:tired Reuben's standing by his car, the one with the broken heater, patting his pockets. Jacket. Trousers. Jacket again. He's been on a double shift, sixteen hours, because the response service he keeps asking Mercy House for doesn't exist, so when something goes wrong in the city at night that needs a medic who knows what he's looking at, it's him, every time. He looks at me without surprise, the way you look at something in a dream.

@reuben:tired "Can't find my keys," he says.

They're in his hand.

@reuben:tired I don't say anything. I watch him realise it. He looks at them for a long time. Then he leans against the car, and puts his head back, and closes his eyes. "I'm not safe to drive," he says. "I know I'm not. I hate it."

The knack gives me the radiator-warmth of him, turned right down to nothing, like someone left the heating on low all winter and the boiler's finally given out.

*choice
  *if st_reuben >= 3
    #Drive him home. Make toast. Don't make it a thing.
      *set b_reuben_needs true
      *set st_reuben 4
      *set s09 "fore"
      "Give me the keys," I say.

      @reuben:surprised He opens his eyes.

      "I passed my test at seventeen. I've driven about six times since. I'm very careful. Give me the keys."

      @reuben:small He looks at me for a long time. Then, slowly, as if it's the hardest thing he's done all day, he puts the keys in my hand. Reuben, who always waits for other people's answers, who never needs anything, lets someone else carry the other end.

      I drive him home, very carefully, with the heater broken and both of us in our coats, to Mercy House, and take him in through the kitchen that never closes, and make toast. Four slices. Butter and jam. I put it in front of him at the long steel table and don't say anything and don't make it a thing.

      @reuben:warm He eats all four slices. Somewhere around the third, he says, to the toast, "Nobody's ever done that." And somewhere around the fourth, with his eyes closing, "Thank you." And then he falls asleep sitting up at the kitchen table at one in the morning, and I put his own coat over him, and leave him there, and nobody at Mercy House thinks this is strange, because apparently it happens about once a week.
  #Call Mercy House to come and get him.
    *set s09 "intro"
    "I'll call Mercy House," I say. "They can send someone."

    @reuben:tired He nods, with his eyes still closed. "Yeah," he says. "Yeah. That's the procedure."

    *meet victor
    @victor:tired {@ch04_first = "mercy"|Victor|Victor Keene, Adrian's older brother, whom I've never met,} comes, in the end, in a Mercy House car, with his braced arm and his charm, and folds Reuben into the passenger seat like a deckchair. "He does this," Victor says to me over the roof of the car. "He'll keep doing it until they give him the service he keeps asking for, or until it kills him. Whichever the paperwork gets to first." He isn't joking. I watch them drive away down the ramp.
*comment ---------------------------------------------------------------- CH12.HOME.03
*sid CH12.HOME.03
*date 2026-11-26 21:00
*place P34
*present benoit jonah dominic
*set fr_jonah 1
*set haunting_done true
The Lantern Rooms are above a row of shops on Market Crescent: two floors of rehearsal rooms and teaching studios, cheap, draughty, with a grant nobody's sure will be renewed, and a big room at the top with a stage at one end and an old upright piano against the wall.

@benoit:warm Benoît's hired me to rig the lights for the winter concert. Proper money, in an envelope. "It's a crime," he says, handing it to me, "that this is the first time anyone has paid you properly. I'm French. We take crimes seriously."

But the job's not the lights.

@benoit:tense "The piano," says Benoît, lowering his voice, as if it might hear. "Somebody plays it at night. When the building's empty. The same note, over and over. The same wrong note." He shrugs, embarrassed. "The cleaners won't come up after dark. I thought it was a draught. It is not a draught."
*meet jonah
@jonah:neutral So he's brought in someone. A gaunt, kind-faced man in his thirties, pale, with long dark hair tied back and a black suit and a violin case. Jonah Peake. He plays at funerals, Benoît says, and refuses to perform grief, and he also knows about things that aren't draughts. "Partial haunting," Jonah says, having sat at the piano for about ten minutes with his eyes shut. "Very common. Very sad. Somebody died in the middle of something and is still trying to finish it."

It starts at nine, just as he said. The piano, in the empty top room, with the lid down and nobody near it. One note. A little flat. Over and over, patiently, like someone listening.

@dominic:surprised And from the door, a voice I know: "Is that the ghost?" It's Dominic, in his old jumper, with his guitar case, come to rehearse with Benoît's ensemble after dark, the only time he can. He stands in the doorway listening. "It's flat," he says. "It's a quarter-tone flat on the G. It's been driving me mad for weeks."

@jonah:attentive Jonah's gone very still. "Say that again."

The story comes out of Benoît's filing cabinet, in a box of old programmes and a newspaper cutting: a piano tuner, in 1978, who came every autumn to tune the old upright for the Christmas concert, and died of a heart attack at this piano one November night, halfway through the job. Everyone assumed he was trying to finish the tuning.

@jonah:sad "He wasn't tuning it," says Jonah, softly, reading the cutting. "Listen. He's not correcting the note. He's [i]playing[/i] it. The same flat G, over and over." He looks up. "His daughter sang in the Christmas concert that year. It says here. Solo. And she always sang that note flat. He must have been trying to find it on the piano. To tune the piano to [i]her[/i]."

The note goes on, patient, in the dark.

*choice
  *if (st_dominic >= 2) and not(b_dominic_music)
    #Ask Dominic to sing the flat note, so the tuner can finish.
      *set b_dominic_music true
      *set st_dominic 3
      "Dominic," I say. "Could you sing it? The note. The way she sang it. Flat."

      @dominic:surprised He looks at me. Then at the piano. Then at Jonah, who nods, slowly.

      @dominic:shy "I haven't sung for anyone," he starts. "Not since..." And then he stops, and looks at the piano, where the note's coming again, patient, patient, like someone who's been listening for fifty years. "Okay," he says. "Okay."

      He walks over to the piano, in the dark, and stands beside it, and when the note comes again he sings it. Low and rough and warm, the voice from the Switchyard stage, and a quarter-tone flat on the G, exactly like the girl in 1978 must have sung it. He holds it.

      And the piano plays it back. Not the wrong note. The same note. Dominic's note. Her note. Once, twice, like someone checking. And then a little run of notes, up, down, a phrase of the carol she must have sung, finished, satisfied. And then the lid of the upright, which has been down all night, lifts about an inch, and settles, and is still.

      @jonah:warm Jonah lets out a long breath. "He's done," he says. "He found it."

      @dominic:small Dominic stands by the piano in the dark with his hand on the lid, not saying anything. When he turns round, his face is wet. "That's the first time I've sung for anyone in fifteen months," he says. "It was a ghost."

      "It still counts."

      @dominic:warm "Yeah," says Dominic. "Yeah. I think it does."
  #Find the daughter's name in Benoît's old programmes and say it at the piano.
    *set people +2
    *set fr_benoit 1
    "The daughter," I say. "What was her name? It'll be in the programme."

    @benoit:attentive Benoît goes through the box on his knees on the floor, programme after programme, crumbling Christmas concerts from before any of us were born, and finds it: 1978, the winter concert, a list of names in faded type, and one of them marked [i]soloist[/i]. [i]Ruth Ann Keeling.[/i]

    So I go and stand by the piano, in the dark, while the note comes again, patient, patient, and I say her name. Just her name, clearly, like you'd say it across a crowded room to someone looking for her. "Ruth Ann. Ruth Ann Keeling. She sang it. She sang it flat. It was fine. It was lovely."

    The note stops.

    There's a long, long silence in the top room of the Lantern Rooms. And then the piano plays it once more, the flat G, softly, like someone saying goodnight. And the lid, which has been down all night, lifts about an inch, and settles, and is still.

    @jonah:warm Jonah puts his hand on my shoulder. "You'd make a decent medium," he says. "You've got the manners for it. Most people shout."

    @benoit:sad Benoît is sitting on the floor among the programmes, with his scarf round his face, and he isn't pretending he isn't crying. "It's a crime," he says. "A crime. Fifty years."
*comment ---------------------------------------------------------------- CH12.HOME.04
*sid CH12.HOME.04
*date 2026-11-28 14:00
*place P45
*present quentin
*mood day
Quentin texts on Saturday morning.

[i]southmere cinema. 2pm. the matinee. it's the sequel to that film about the dog that saves christmas. it's apparently terrible. I'm buying. nothing to investigate. no ropes. no labs. just a bad film and bad nachos. yes or no[/i]

It's the first time he's asked me for anything that wasn't practical.

Southmere Cinema is a single-screen place above a bowling alley, with a carpet that sticks and a popcorn machine that sounds like a traction engine. There are nine people at the matinee. Two of them are us.

@quentin:amused Quentin's already there in the foyer when I arrive, in his work hoodie under a big coat, cold hands shoved in the pockets, grinning. "You came," he says. "I had a bet with myself you'd bring a notebook."

*choice
  *if st_quentin >= 3
    #Go. Let him pick the seats. Let him talk, or not.
      *set b_quentin_nothing true
      *set st_quentin 4
      I let him pick the seats. He picks the exact middle of the exact middle row, with enormous seriousness, and buys the nachos, and the terrible cheese, and a slushie he can't taste but likes the colour of.

      And we watch a truly terrible film about a dog that saves Christmas, again, and it's so bad, and Quentin laughs at all the wrong bits, loudly, and a pensioner in the row in front turns round and shushes him, and he apologises, and then laughs again.

      @quentin:warm He doesn't talk about the rope. He doesn't talk about being cold, or tired, or the forgetting, or Silas, or any of it. He talks about the dog. He talks about a customer who ordered a latte with "no milk, no coffee, just the foam". He talks about his nan, who's ninety and cheats at cards. And somewhere around the part where the dog drives a snowplough, he leans his head back against the seat, and closes his eyes for a second, and the knack gives me something from him I've never felt before. Not the steady floor under the jokes. The floor with nobody holding it up. Just resting.

      @quentin:small "Thanks," he says, in the foyer, afterwards, in the cold. "For not asking." He grins. "Same time next month? Dog saves Easter. I've checked. It exists."
  #Go, and ask him how he's feeling. Carefully.
    *set hurt_quentin +1
    We get our seats, and the lights go down, and before the film starts, in the dark, I lean over and ask him, quietly, carefully: "How are you feeling? Really?"

    @quentin:guarded He goes quiet.

    @quentin:guarded "Fine," he says, after a moment. To the screen. "Cold. Same as always." And then he doesn't say anything else for the whole film, not even at the snowplough bit, which is objectively the funniest bit, and I can feel it in him: a door closing. Politely. Quietly. He wanted one afternoon of not being a case. And I made him one.

    @quentin:guarded "Thanks for coming," he says, in the foyer, afterwards. He means it. He also means something else, and I know what it is, and I don't say anything, because there isn't anything to say.
*goto followup_check

*comment ---------------------------------------------------------------- (after the week: Quentin's follow-up, only if I'm with him)
*label followup_check
*if buddy_plan or (st_quentin >= 3)
  *goto followup
*goto december

*comment ---------------------------------------------------------------- CH12.FOLLOWUP.01
*label followup
*sid CH12.FOLLOWUP.01
*date 2026-11-30 17:00
*place P41
*present quentin russell
*mood dusk
*set voice_heard true
*set fr_russell 1
*set s11 "intro"
*set winton_log true
*if buddy_plan
  Quentin rings me on Monday at noon, the way we said. [i]The follow-up. It's today. Five o'clock. You said nobody goes alone.[/i] He says it lightly, like he's reminding me about a dentist. His voice isn't light.
*else
  Quentin rings me on Monday at noon. [i]The follow-up. It's today. Five o'clock. They do it every month. I've never told you because it's boring.[/i] A pause. [i]Would you come? You don't have to come in. Just be in the corridor. I don't know why. I just want someone in the corridor.[/i]
Winton Court is in Briar Heights, up where the money lives: a big old apartment block from a hundred years ago, cream stone and black railings and a revolving door, full of retired judges and widows with small dogs and a quiet war with a developer who wants to turn it into luxury flats. The "clinic" rents a flat on the third floor. There's no sign on the door. Just a number.

@quentin:guarded "They'll only let me in," Quentin says, outside it. "Patient confidentiality. You'll have to wait." He looks at me. "You'll wait, though."

"I'll wait."

@quentin:tense He knocks. The door opens, not very far, and closes behind him, and I'm alone in a long carpeted corridor with a radiator clanking and a view over the rooftops of Briar Heights going purple in the dusk.
*meet russell
@russell:neutral Not quite alone. Halfway down the corridor there's a man on one knee at the radiator with a spanner and a tool belt: late fifties, a long weathered face, white stubble kept short, a flat cap. He gets up slowly, the way you do on a bad knee, and nods at me. "Russell," he says. "Caretaker. You're with the lad in thirty-one?"

"Yeah."

@russell:tense "Mm." He goes back to the radiator. And then, because I'm there and he's a man who likes to talk while he works, he tells me about the tenants' fight: the developer, the offers, the letters under doors, old Mrs Albright on the fifth floor who's lived here since 1961 and has been offered a sum of money that made her cry. And then, without changing his tone at all:

@russell:guarded "Funny flat, thirty-one," he says. "Rented by a company. Nobody lives in it. Once a month, the lad comes, and a few others, different ones. And there's a man." He tightens something on the radiator. "Comes and goes through the service corridor. Back stairs. Never the front. Only on these afternoons." He looks at me from under the cap. "I've been caretaker here twenty-two years. Nobody uses the service corridor except me and the bins."

And then, through the door of number thirty-one, a voice.

Calm. Kind. Patient. Asking Quentin, pleasantly, how he's sleeping.

The knack goes cold. All of it, all at once, like a hand of ice closing on the back of my neck.

It's the voice.

The voice from the lane on the night Quentin died, the one that said [i]sorry[/i] in the dark.{@same_voice| The voice in Eamon's gloves.|}{@same_voice2| The voice on Hugo's jacket, from a car window, offering him his interview.|} I'd know it anywhere. It's so ordinary. It sounds like a GP. It sounds like somebody's nice uncle. It's asking Quentin whether he's been getting cold at night and whether the hot-water bottle helps, and it sounds like it cares about the answer.

I stand in the corridor with my back against the wall and my hands shaking, and I don't go in, because Quentin's in there, alone with it, and if I go in, I don't know what happens to Quentin.

@quentin:tired Twenty minutes later, the door opens and Quentin comes out, rolling his sleeve down over a plaster in the crook of his arm. "Bloods," he says. "And the usual. How am I sleeping. Am I cold. Am I forgetting things." He does up his coat. "He's nice. He's always nice." He looks at my face. "What? What's wrong?"

I can't tell him. Not here. Not in this corridor, with the door of thirty-one still open a crack behind him and the man who killed him on the other side of it, washing his hands.

"Nothing," I say. "Let's go."

*choice
  #Ask Russell to write down every time he sees the man. Dates, times.
    *set russell_logging true
    *set fr_russell +1
    On the way out, while Quentin waits by the lift, I go back to the radiator.

    "The man in the service corridor," I say, low. "Could you write it down? Every time you see him. The date, the time, what he's carrying. Anything."

    @russell:attentive Russell looks at me for a long time from under his cap. He doesn't ask why. I think he can see my hands. "I've got a notebook," he says. "For the boilers. I'll start a new page." He wipes the spanner on a rag. "I don't like him. Never have. Walks like he owns the building. Nobody who owns this building walks like that."
  #Try the service door.
    *set enemy_aware +1
    I don't go to the lift. I go the other way, down the corridor, past Russell, to the grey door at the end marked [i]SERVICE · STAFF ONLY[/i].

    It's locked.

    I put my hand on it, flat, just for a second. And on the other side, at the top of the back stairs, something goes still.

    A shape. A person. Standing on the landing on the other side of the door, not moving, the way you'd stop moving if you heard someone try the handle. I can feel them through the steel: calm, attentive, interested. Not frightened at all. Listening.

    I take my hand off the door. I walk back down the corridor to the lift, not fast, not slow, with the back of my neck prickling the whole way.

    Whoever it was knows now that someone waited in the corridor. Someone who tried the door.
*page_break

*comment ---------------------------------------------------------------- CH12.DEC.01
*label december
*sid CH12.DEC.01
*date 2026-12-05 08:00
*place P02 print_shop
*present martin will
*mood winter
*set s01 "fore"
*set s13 "fore"
The first snow comes on the fifth of December, overnight, and by eight in the morning Latch Lane is white and silent and perfect for about eleven minutes before the bin lorry comes.

And the shop's in its Christmas rush. It always is. Every church in the city wants carol sheets; every school wants nativity programmes; every club and pub and bowls team wants raffle tickets; and every one of them wanted them yesterday. The press is going from six in the morning. Martin's got a pencil behind each ear and one in his mouth.
*if savings_given
  The I.O.U. is still pinned behind the till. He's paid back a third of it already, in envelopes, with a note each time in his careful capitals: [i]INSTALMENT. WITH INTEREST. M.A.[/i]
*elseif shop_hours
  My name's on the rota four mornings a week now, not three, because it's December. Martin draws a small snowflake next to it every day, which I think is supposed to be an apology.
*else
  The Crescent Market traders paid for their winter order up front, as promised, which is why there's paper in the stock room and the heating's on and Martin isn't doing sums on the back of anything.

@will:tired Will's been out running since six, in the dark and the snow, in a hat Martin knitted him that he says is embarrassing and wears every day. His development-programme trial is in the spring: the next round after the academy trial in August, the one that actually counts. He trains before school. He trains after school. He's so tired he falls asleep on the sofa at eight with his boots on. He's never been happier.

@will:amused "Don't," he says, coming in, stamping snow off, when he sees my face. "I know. I'm mental. Coach Tomas says mental's the point."

And Mum's December emails arrive, all at once, on Saturday morning, the way they always do.
*letter mum_03
@martin:sad Martin reads his over my shoulder, which he isn't supposed to do. "She said the same to me," he says quietly. "Not home for Christmas." He puts his hand on the back of my neck, for a second, the way he did when I was sixteen and new. "We'll do it properly anyway. The three of us. Paper hats. Will can do the sprouts; it'll be a war crime."

@will:amused "I heard that," says Will, from the sofa.
*page_break

*comment ---------------------------------------------------------------- CH12.PREP.01
*sid CH12.PREP.01
*date 2026-12-08 19:30
*place P35 neutral_table
*present ansel
*mood night
The Neutral Table is a restaurant on Market Crescent with a red door and steamed-up windows and a grandmother at the till, and an upstairs room that the owner rents out for meetings between people who don't trust each other. Hospitality, Ansel says, doesn't make anyone honest. But it does make them sit down.

He's booked the upstairs room for two. For dinner. He's wearing his formal collar and he has opinions about the dinner.

@ansel:angry "The sauce is wrong," he says, of the fish. "Too sharp. And the bread is the wrong shape. Bread should not be that shape." He eats all of it, carefully, with a knife and fork, including the bread, which he regards with suspicion the whole way through. "At home," he adds, "this would be a crime."

Then he puts his knife and fork down together, very precisely, and tells me.

@ansel:sad "My father refused," he says. "I asked him formally. In the hall. With the clerk writing it down. I asked him to sponsor an investigation into Eamon's disappearance, in Calder, by the Court." He looks at his plate. "He said a courier who used the Northwood crossing chose his risks, and the Court doesn't spend its credit on people who choose their risks. He said it in front of the clerk." The cold water in the glass, the knack gives me, very still. And far down in it, something that's been hurt so often it's stopped making a sound.

"I'm sorry."

@ansel:attentive "Don't be. It clarified things." He takes a folded paper out of his coat. "There's another way. The Candle Fair." He unfolds it: a notice, old-fashioned, printed in two colours. "From midwinter to Twelfth Night, every year, Bracken Court keeps a candle in every window, and anyone may enter unsponsored. Anyone. From anywhere. It's the oldest law we have. Nobody needs my father's permission." He looks at me. "We can cross after Christmas. Look for Eamon ourselves. Through the Iron Footbridge, openly, like pilgrims."

A candle in every window. Another country. A real one, on the other side of a door.

@ansel:guarded "The question," says Ansel, carefully, "is who else comes."

*choice
  #Just the two of us.
    *set companion "none"
    *set st_ansel +1
    "Just us," I say. "You and me."

    @ansel:surprised He looks at me for a moment, surprised, and then something in his face very carefully doesn't move, and the cold water in the glass goes very still and very clear. "Just us," he says. "Yes. That's... practical. Fewer people to explain." He picks his fork up again, and puts it down again. "I'll arrange the lodgings."
  *if st_adrian >= 3
    #Adrian. A warden escort makes it official, and he'd hate to be left behind.
      *set companion "adrian"
      "Adrian," I say. "A warden escort makes it official. Your father can't say we're freelancing if Mercy House sends someone. And he'd hate being left behind. He'd write a report about it."

      @ansel:amused Ansel almost smiles. "A warden in Bracken Court at the Candle Fair," he says. "The clerks will faint." He considers it. "My father would find it very irritating. That's in its favour." He nods. "Ask him."
  *if st_micah >= 3
    #Micah. He's never been anywhere, and he needs out of Eastbank for a week.
      *set companion "micah"
      "Micah," I say. "He's never been anywhere. He's never had a week off in his life. He needs out of Eastbank before his family works him into the ground."

      @ansel:attentive Ansel thinks about it. "The electrician," he says. "With the van. Who drove us home from the depot and talked about fuses the whole way." He nods, slowly. "He's strong, and he's honest, and he'll ask the questions I'm too polite to. Yes." A pause. "The Marches has very old wiring. He may find that upsetting."
  *if (st_nolan >= 4) and nolan_knows
    #Nolan. He knows now, and he'll bring the good torch.
      *set companion "nolan"
      "Nolan," I say. "He knows everything now. He's been in it since August, he just didn't know. And he'll bring the good torch."

      @ansel:attentive "Your friend," says Ansel. "The one with the recorder." He considers. "He'll want to record everything. The bells. The market. The river." He almost smiles. "My mother will like him. She likes people who listen to things."
  *if st_reuben >= 3
    #Reuben. If anything goes wrong in there, we'll want a medic.
      *set companion "reuben"
      "Reuben," I say. "If anything goes wrong, we'll want a medic. And he's been carrying this since September. He deserves to see it through."

      @ansel:attentive Ansel nods, slowly. "The medic with the broken heater," he says. "He brought me tea at Orchard House without asking whether I wanted it. I did want it." He folds the notice. "Yes. A medic. That's wise."
*comment ---------------------------------------------------------------- CH12.PREP.02
*sid CH12.PREP.02
*date 2026-12-12 23:30
*place P13
*present nolan desmond ansel micah dominic
*set s06 "fore"
The Switchyard fundraiser.

The whole city in one room. All ages, the way Switchyard does it: kids with their parents at the front, pensioners at the bar, three bands and a choir from a primary school and Benoît's ensemble doing a set of carols that turns into a set of something much louder. The heating's broken, so nobody minds the crush; there are four hundred people in a room built for three hundred and fifty, in coats, steaming.

{@crew_paid|The crew's paid. Des did it, grudgingly, out of the door take, and put it on a chalkboard behind the bar for everyone to see, as if it was his idea. By half nine everybody thinks it was. |}Nolan's rig, the one from the back of the flyer, works perfectly. Every light, every speaker. I stand at the desk and run it and it sings.

@desmond:laugh "Look at it," Desmond shouts in my ear, over the noise, with a bucket of money in each hand. "Look at the [i]room[/i]. They'll never close us now. Never." He means it. He's nearly crying. He's also already calculating the bar take in his head; I can feel it, like an abacus clicking under the joy.

@micah:laugh Micah's dancing badly. On purpose. In the middle of the floor, in his work jacket, with a crowd of Eastbank kids round him, doing a dance that's mostly elbows, because he knows it makes them laugh.{@out_micah| Every so often he looks across the room at the lighting desk, at me, and doesn't look away quite as fast as he should.|}

@dominic:warm Dominic's in the back with Milo, by the sound desk, in the dark, where it's easiest. He came. He's never come to a Switchyard night since he was turned. He's got a drink he isn't drinking and he's watching the stage with his whole face, the way you'd watch a house you used to live in.{@out_dominic| When our eyes meet, he smiles, the small private one, and taps two fingers on his heart.|}

@ansel:shy And at eleven o'clock, in his dark coat and his formal collar, in the middle of four hundred people in coats, Ansel Marr arrives with a folded note, to deliver, he says, "a message about the crossing arrangements."

The message is: the lodgings are booked. For the twenty-eighth. It's one sentence long.

He stays until close.

He doesn't dance. He stands by the side of the lighting desk, very straight, with his hands behind his back, and watches everything: the bands, the kids, Micah's elbows, the choir, the whole roaring steaming mess of it. Every so often he asks me a question about the lights, very politely. At half past one, a girl of about eight asks him if he's a vicar, and he says no, and she asks if he's a ghost, and he considers this seriously and says not yet, and she gives him a sticker.

*choice
  *if (st_ansel >= 2) and not(b_ansel_pretext)
    #Tell Ansel the message could have been a text, and watch him try to deny it.
      *set b_ansel_pretext true
      *set st_ansel 3
      "That message," I say, at two in the morning, when the crowd's thinned and he's still there, by the desk, with a sticker on his lapel that says [i]I WAS GOOD TODAY[/i]. "About the lodgings. That could've been a text."

      @ansel:guarded He looks at me with enormous dignity. "I don't use text messages for official arrangements."

      "You sent me a note on the back of a card with [i]platform four, any evening at six[/i] on it."

      @ansel:guarded "That was an initial contact. Initial contacts are..."

      "Ansel."

      @ansel:shy He stops. He looks at the empty dance floor, the streamers, the four hundred plastic cups. The cold water in the glass, the knack gives me, very still, and something moving in it, like a fish turning over. "I wanted to see it," he says at last. Quietly. "Where you work. What you do when you're not frightened. I've only ever seen you frightened, or tired, or on a step with chips." He looks at me. "You were very good at it. The lights. You were happy."

      "I was."

      @ansel:shy "Then it was worth the walk," says Ansel Marr, and goes very pink above his collar, and pretends to be interested in a cable.
  #Work the night. Load out at three with Nolan like always.
    *set st_nolan +1
    I work the night. It's what I'm for.

    @nolan:warm And at three in the morning, when the last band's gone and the last kid's been carried out asleep and the cleaners have started, Nolan and I load out, like always. Coiling cables over and under. Wheeling cases up the ramp. Not talking much. He hums. I hum the harmony, badly. The same thing we've done a hundred times, since we were sixteen.

    @nolan:amused "Good gig," he says, at the van, at four, with frost on the windscreen.

    "Good gig."

    @nolan:warm "We saved it," he says. "Probably. For a year." He bumps my shoulder. "Best thing I've ever done. With you. Obviously." And the frost glitters on the van roof under the streetlight, and we sit on the tailgate and eat the last of the fundraiser's crisps, the wrong kind, and watch the sky go grey.
*comment ---------------------------------------------------------------- CH12.END.01
*sid CH12.END.01
*date 2026-12-20 22:00
*place P02
*present martin
The Sunday before Christmas.

The Winter Lights are on along the river: every tree on the embankment strung with white bulbs, and the bridges lit in colours, and a floating stage by the Riverside Steps where a brass band played carols all afternoon. Latch Lane's quiet at last. The Christmas rush is done. The last carol sheet went out on Friday. The press is cold, for the first time in a month, under its dust sheet.

@martin:tired Martin and I are in the kitchen with the heating on and the radio low and a pot of tea, too tired to go to bed. He's got his feet up on the other chair. Will's out with his team, at a Christmas thing, in the embarrassing hat.

@martin:attentive "You're going somewhere," Martin says. "After Christmas."

It isn't a question. He's known me since I was born. He's had me in his house for three years.

@martin:attentive "You've got a bag half-packed in your room," he says, "and a map on your wall I don't recognise, and you've been walking around for a week like someone about to get on a plane." He sips his tea. "I'm not asking where. I'm asking if you'll tell me."

*choice
  #"Away for a week with a friend. Somewhere with no signal." True, and small.
    *set martin_told_trip true
    "Away for a week," I say. "With a friend. Somewhere with no signal." It's true. It's all true. It's just very small.

    @martin:attentive Martin looks at me for a long time over his tea. The knack gives me the grey pressure, low, waiting, the way it always is when I don't tell him things. But under it, the kettle-warmth, keeping itself hot.

    @martin:warm "Right," he says. "Take the good coat. It's cold everywhere with no signal." He puts his cup down. "And come back. That's all. Come back."

    "I'll come back."
  *if not(gift_martin)
    #Tell him about the knack. Not the case. Just me.
      *set gift_martin true
      *set fr_martin +1
      I don't tell him about the case. I can't; it isn't mine to tell, and it's too big, and it'd frighten him to death. But I tell him about me.

      "I feel things," I say. "I always have. Since I was eight. What people feel. When I'm near them. Like weather." I look at my tea. "When you're worried, it's grey. Like pressure. When you're all right, it's warm, like a kettle keeping itself hot. That's what you feel like. To me. Always."

      @martin:surprised Martin doesn't say anything for a very long time.

      @martin:sad And then he takes his glasses off, and puts them on the table, and rubs his eyes. "Your mum said," he says, finally. "When you were small. She said you always knew. When she'd had a bad shift. When I'd had a bad week. She said you'd come and sit on her feet without being asked." He looks at me without his glasses, blurry and naked-faced. "She said, [i]he's a sensitive boy, Martin[/i]. I thought she meant you cried at films."

      I laugh. It comes out wet.

      @martin:warm "A kettle keeping itself hot," says Martin. "That's what I feel like." He puts his glasses back on. "I'll take that." And he reaches across the table and puts his hand on the back of my neck, and leaves it there, and the kettle-warmth comes up round both of us like a blanket.

*journal [b]Chapter 12.[/b] {@ch12_branch = "gathering"|At the full moon, I went to Greyhill and Quarry Lake with the Serranos, and when Wesley bolted for the cliffs we brought him back.{@b_micah_want| At dawn by the reservoir, I told Micah the truth about myself, and he took my hand.|}|}{@ch12_branch = "regent"|At the Regent, a frost-split truss dropped the east wing's light shutters two hours before dawn, and we got everyone into the dark.{@b_dominic_ask| On the roof, Dominic asked what I want, and I told him: him.|}|}{@ch12_branch = "home"|At home: the fundraiser plans with Nolan, Reuben too tired to drive, a piano tuner who died in 1978 trying to find his daughter's flat note, and a terrible film with Quentin.|}{@voice_heard| At Quentin's monthly "follow-up" at Winton Court, I heard the calm voice from the lane through the door. The man uses the service stairs.|} Mum can't get home for Christmas. After Christmas, at the Candle Fair, Ansel and I cross into the Marches to look for Eamon{@companion != "none"|, and we won't go alone|}.
*page_break
*goto_scene ch13
`);
