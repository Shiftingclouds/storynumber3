NB.scene("ch03", String.raw`
*mood day
*set ch 3
*chapter 3 Double Shift
*comment ---------------------------------------------------------------- CH03.RUN.01
*sid CH03.RUN.01
*date 2026-09-01 07:10
*place P02
*present martin
*set s01 "intro"
Tuesday. The first of September, which in Calder means the light's gone a shade more gold in the mornings and the university posters are already going up on every lamp post, as if summer's a lease that's run out.

Martin's at the counter at ten past seven with a box of freshly printed menus and his car keys in his hand, looking at them as though they've personally let him down. The van's making the noise again. The bus to Northline takes forty minutes.

@martin:tense "These are for a café in Northline," he says. "New menus. They were due Friday. I told them Tuesday. I thought I'd..."

I read the label on the box upside down.

DOUBLE SHIFT. NORTHLINE.

Peter's lanyard. Quentin's T-shirt. [i]Come in, I'll do you a coffee.[/i]

"I'll take them," I say, and take the box out of his hands before he can offer, before he can decide not to let me, before I can decide not to go.

He looks at me. The grey pressure of him, from Sunday, hasn't lifted. But he lets go of the box.

@martin:warm "Straight there," he says. "And eat something."

*page_break
*comment ---------------------------------------------------------------- CH03.CAFE.01
*sid CH03.CAFE.01
*date 2026-09-01 07:30
*place P26 double_shift
*present quentin peter
Double Shift is on the corner of Station Road across from Northline, the kind of café that opens at six for the commuters and the night shift coming off. Blue-and-cream tiled floor, red counter, a big steamy window full of the morning. There's a queue of people in lanyards and hi-vis, and a smell of coffee so strong it's practically a wall.

I push the door open with my shoulder, with the box of menus in my arms.

And the knack hits me in the doorway like a wave.

It's the pulse. The doubled pulse. The same one from the lane, the same two-heartbeats-where-there-should-be-one, tangled and steady and wrong, and I know it before I see him, the way you know a song from the first note.

He's behind the counter.

Quentin. Black T-shirt, DOUBLE SHIFT on the back, sleeves pushed up, making a flat white with the concentration of a man defusing something. Alive. He's grey under the brown of his skin, the way people go after flu. His hands are steady. He's laughing at something a regular's said.

And running out of him, out of the middle of his chest, is something I can't see and can feel as clearly as I can feel my own arms: a thread, a rope, pulled taut, running out through the back wall of the café and away across the city, to somewhere very far off, and cold, and pulling.

I watched him die. I felt his heart stop under my hands, or I saw him fall, or I heard Nolan say [i]what was that[/i]. And he's making coffee.

He hasn't seen me yet.
*page_break
*comment ---------------------------------------------------------------- CH03.ANSEL.01
*sid CH03.ANSEL.01
*date 2026-09-01 07:40
*present ansel peter
I don't know how long I stand there. Long enough for Peter, at the till, to notice me and the box, and wave me over with the menus, and then get distracted, because there's someone in front of me in the queue who isn't ordering.
*meet ansel
*portrait ansel neutral
He's young, twenty or twenty-one, and he's dressed as if for a different century: a dark coat buttoned to a formal white collar, not a tie exactly, something older, stiff and neat. Smooth dark hair parted with a ruler. Pale, fine-boned, a long straight nose. He stands very straight, the way you'd stand if someone had once told you that posture was a moral issue and you'd agreed.

@ansel:tense "Forgive me," he's saying to Peter, with a courtesy so complete it's almost frightening. "A regular of yours. Eamon Kerr. A courier. He comes in every Friday morning, before the eight-fifteen, for a bacon roll and a tea with three sugars. He didn't come this Friday."

@peter:neutral Peter shrugs. "Loads of people don't come in on a Friday."

@ansel:guarded "Eamon Kerr comes in on a Friday." It isn't said sharply. It's said the way you'd say [i]the sun comes up[/i]. "He has done for four years."

The knack gives me this young man and it's strange: very cool, very controlled, like cold water in a glass, and under the glass, deep down, something moving, an anxiety kept so tightly it's become a kind of posture. He's worried sick. He'd die before he let it show.

@ansel:attentive He turns, and sees me standing there with my box, and inclines his head, a small, formal, perfectly calibrated bow. "Forgive me. Do you know him? Eamon Kerr?"

"No," I say. "Sorry."

He takes a card from inside his coat and holds it out between two fingers. It's heavy cream card, and there's nothing on it but a name, printed in black: ANSEL MARR. No number. No address.

@ansel:guarded "If you should hear anything," he says. Then, to Peter, in a slightly different tone, as though an entirely separate matter of equal gravity has arisen: "And those are not almond croissants. Those are croissants with an almond [i]on[/i] them."

@peter:neutral "They're almond croissants," says Peter.

@ansel:angry "They are an insult to the almond."

*choice
  #Take the card. "Why would a courier go missing?"
    *set st_ansel 2
    *set eamon_heard true
    I take the card. "Why would a courier just go missing? Maybe he's sick. Maybe he's on holiday."

    He looks at me properly, then. His eyes are grey and very steady, and for a second the cold water in the glass goes very still, as if he's deciding something.

    @ansel:tense "Eamon has not been sick in four years," he says. "He does not take holidays. He carries things between... between parties who need a reliable pair of hands. On Thursday night he set out to make a delivery. He did not arrive." He pauses. "You're kind to ask. Most people wouldn't." Another small bow. "Thank you."

    And he goes, out into the morning, very straight, without buying anything.
  #Take the card, and say nothing.
    *set st_ansel 1
    *set eamon_heard true
    I take the card and nod, and he inclines his head again and goes, out into the morning, very straight, without buying anything.

    I put the card in my back pocket with my wallet. ANSEL MARR. Eamon Kerr, a courier, a bacon roll and a tea with three sugars, every Friday for four years. The name sits in my head like a stone in a shoe.
*page_break
*comment ---------------------------------------------------------------- CH03.CAFE.02
*sid CH03.CAFE.02
*date 2026-09-01 07:45
*present quentin peter
I put the box of menus down on the end of the counter.

And Quentin looks up from the machine, and sees me.

For one second, his face does something I'll think about for weeks. It's not surprise. It's recognition, and then fear, pure and cold, and then, fast over the top of both, a sort of shutter coming down, bright and practical and blank. The knack gives me all three in the time it takes to blink, like three different songs through one wall.

He knows me. He knows I was there.

How do I do this?

*choice
  #Go straight to the counter. Alone. Now.
    *set ch03_way "alone"
    *goto alone
  *if (ch02_report = "nolan") or (ch01_saw = "help")
    #Text Nolan. We do this together.
      *set ch03_way "together"
      *goto together
  #Order a coffee. Sit in the window. Wait for the end of his shift.
    *set ch03_way "wait"
    *goto wait

*comment ---------------------------------------------------------------- CH03.ALONE.01
*label alone
*sid CH03.ALONE.01
*date 2026-09-01 07:50
*present quentin peter
*set st_quentin 2
*set hurt_quentin 1
*set e03 true
*set e03_src "sighting"
I go to the counter. There's a gap in the queue. I stand in it.

"Hi," I say. "I brought your menus."

@quentin:guarded "Cheers," says Quentin, brightly, to a point just over my left shoulder. "Just leave them there. Peter'll sort them. Anything else?"

"You were in the lane," I say, quietly. "Saturday night. Behind Switchyard. I was there."

His hands stop on the steam wand. The fear comes off him like cold water tipped down my back.

@quentin:scared "Don't know what you mean, mate," he says, loud and cheerful and practical, for Peter, for the queue. "Must be thinking of someone else. Flat white? On the house. For the menus." His voice is doing a perfect job. His hands aren't. He's holding the milk jug too tight.

@quentin:scared And then, quietly, so quietly I nearly miss it, as he puts the cup down in front of me: "You were there."

Not a question. His eyes flick to mine and away, and for a second the shutter's gone, and he looks about twelve.

Then Peter says "Quentin, table six" and he's gone to table six, and I'm standing there with a flat white I didn't order, and his keys are on the counter by the till where he's put them down.

A ring. A bottle opener. A door key. And the little tin charm: a flattened metal disc like a bottle cap, with something stamped into it, a knot or a star. It's scorched on one side. Black and bubbled, like it's been held in a flame. It isn't humming any more. It's quiet, like something that's done its job.

I look at it for long enough to draw it. Then I pick up my coffee and go, and I can feel him not watching me all the way to the door.
*goto night

*comment ---------------------------------------------------------------- CH03.TOGETHER.01
*label together
*sid CH03.TOGETHER.01
*date 2026-09-01 08:10
*present nolan quentin peter
*set st_quentin 2
*set st_nolan +1
*set clinic_lead true
[i]He's alive,[/i] I text Nolan. [i]The lad from the lane. He's at Double Shift. He's making coffee.[/i]

Three dots. Three dots. Then: [i]what[/i]. Then: [i]WHAT[/i]. Then: [i]20 mins[/i].

He gets there in eighteen, with his hair flat on one side from the pillow and his jacket on over his pyjama top, and he takes one look at me in the window and one look at Quentin at the machine and goes very pale under the freckles. Then he walks up to the counter as if nothing's wrong and orders the most complicated drink on the board: an iced oat-milk honey-lavender something with an extra shot and a pump of cinnamon, which takes about four minutes and a great deal of fuss, and keeps Quentin right there at the machine in front of us.

@nolan:amused "Haven't seen you here before," Nolan says, friendly. "You been away?"

@quentin:guarded Quentin doesn't look at me. "Off sick," he says. "Bad flu. Back today."

@nolan:attentive "Rough. Did you go to the doctor?"

@quentin:sad "Private place." Quentin shrugs, steaming the milk. "Very good. Very quiet. They said I was lucky." He smiles at the milk like it's told a joke. "Lucky me."

@peter:neutral "They sent a car for him," says Peter, at the till, who can't not contribute. "A private car. Very nice. I didn't know our health plan did that."

@quentin:tense "It doesn't," says Quentin, and then shuts his mouth.

@nolan:tense Nolan pays and tips and takes his drink and sits down opposite me in the window, and says, very quietly, "A private clinic that sends a car," and I nod, and underneath the table his knee is going like Will's.

@quentin:hurt Quentin brings us two waters we didn't ask for. As he puts them down he looks at me, finally, for one second, and says under his breath, "What are you two doing?" and there's fear in it, but also something that feels to the knack like being ganged up on, like the walls closing in. Then he writes something on a napkin and puts it under Nolan's glass, and goes.

It's a phone number.
*goto night

*comment ---------------------------------------------------------------- CH03.WAIT.01
*label wait
*sid CH03.WAIT.01
*date 2026-09-01 14:05
*place P25 northline_station
*present quentin
*set st_quentin 3
*set e03 true
*set e03_src "photo"
*set fr_martin -1
I order a coffee. I sit in the window. I wait.

Six hours. Four coffees. A toastie I don't taste. I text Martin that I'm running late and he texts back [i]ok[/i] with no full stop, which from Martin is practically shouting, because there are six other deliveries in the van that were meant to go out this morning. I don't move. I watch Quentin work, and he doesn't look at me once, and I can feel him not looking at me the whole time, like a draught.

At two o'clock his shift ends. He comes out of the back in a hoodie with his bag on one shoulder and walks straight past my table and out of the door, and I follow him, and he lets me. At the bus stop outside Northline Station, under the big clock, with the trains going over, he stops and turns round.

@quentin:tired "You're not going to go away," he says.

"No."

He sits down on the bus-stop bench as if his legs have gone. After a moment, I sit down beside him.

@quentin:scared "I remember it," he says. He's looking straight ahead at the traffic. "The lane. The man. The thing on my keys getting hot. I remember... going. It was like someone switched me off at the wall. And then I woke up in a clean room with a drip in my arm and a nice man telling me I'd had a turn and I was very lucky and I should keep quiet about it for my own safety." He laughs, a small, horrible laugh. "For my own safety."

"Who was he? The nice man?"

@quentin:sad "Don't know. Didn't give a name. They sent a car to bring me home." He takes his keys out of his hoodie pocket and turns them over and holds them out to me, the little tin charm in his palm. It's scorched down one side, black and bubbled, like it's been held in a flame. "I've only had it a few weeks. I thought it was tat. A freebie." He turns it with his thumb. "Funny sort of freebie."

"Can I take a photo of it?"

He looks at me for a long time. Then he holds it still in his palm while I do. His hand's cold. Very cold, for September.

@quentin:attentive "What are you?" he says. "Why does it matter to you?"

"Because I watched you die," I say. "And you made me a coffee."

@quentin:laugh He looks at me for a long moment, and then, for the first time all day, he laughs properly. "Yeah," he says. "Fair." He takes my phone out of my hand and puts his number in it. "In case," he says. And then his bus comes, and he gets on it without looking back.
*goto night

*comment ---------------------------------------------------------------- CH03.NIGHT.01
*label night
*sid CH03.NIGHT.01
*date 2026-09-01 19:30
*place P02 print_shop
*mood night
Half seven in my room above the shop, with the window open and the evening coming down gold over the rooftops.

I say it to myself, plainly, the way you'd say a sum. I watched a man die on Saturday night. On Tuesday morning, he made my coffee.

There isn't a way round it. I've tried. I've tried "he wasn't dead, just unconscious". But I felt it stop. I've tried "I dreamed it". But there's the lane, and the van, and the lilies. I've tried "I'm going mad", and honestly, that's the one I keep coming back to, because it's the easiest. And it doesn't explain the rope. The thread running out of his chest, taut, away across the city. Pulling.

Something is keeping him alive. Or something is keeping him, and alive is the side effect.
*if e03
  I draw the charm from memory on the back of a flyer: the disc, the stamp, the scorch. It looks like nothing. It looks like the sort of thing you'd find in a cracker.
*if ch03_way != "alone"
  At twenty to eight, my phone goes. It's the number from {@ch03_way = "together"|the napkin, which Nolan sent me a photo of with seven question marks|the bus stop}.

  [i]my brother wants to meet you. he's not a people person. sorry in advance.[/i]

  A minute later: [i]he says tonight. he says he'll come to you. he found the shop off the menu box, he's like that. he's very bad at waiting.[/i]
*else
  Nobody texts. Nobody calls. The shutter came down on his face this morning and I felt it lock. But I felt the other thing too, the thing that slipped out under it. [i]You were there.[/i] Like he'd been waiting for someone to say it.
Outside, the city's lights come on, street by street. Somewhere out there, a man who should be dead is lying awake in the dark with a rope running out of his chest. And somewhere at the far end of it, something's holding on.

*journal [b]Chapter 3.[/b] Quentin is alive, working at Double Shift, with a thread running out of his chest that I can feel. A young man in a formal collar, Ansel Marr, is looking for a missing courier called Eamon Kerr.{@clinic_lead| Quentin says a private clinic treated him and sent a car.|}
*achieve returned
*page_break
*goto_scene ch04
`);
