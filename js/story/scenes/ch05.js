NB.scene("ch05", String.raw`
*mood day
*set ch 5
*chapter 5 What the Body Keeps
*comment ---------------------------------------------------------------- CH05.CHOICE.01
*sid CH05.CHOICE.01
*date 2026-09-04 09:00
*place P02
*set strain 0
Friday morning, and two offers from the diner are sitting in my phone like two doors.

The first is from Reuben, sent at three in the morning, which I'm learning is when wardens do their correspondence: [i]Can get Q into the lab at the General tonight after Rafi's shift starts. Quiet. Proper tests. Measurements. If he agrees.[/i]

The second is from Dominic, sent at five, just before sunrise, and much longer: [i]Or. There's a restorer on the Hill, Chukwudi Okafor. Works with old things, protective things, things like that charm. Lucien trusts him, which Lucien doesn't do. His son works with him and is unbearably good at it. They'd see Q this afternoon. I can't come, obviously. Daylight. Sorry. I hate that I can't.[/i]

Quentin's texted both of them the same thing: [i]whatever. your call, {name}. you're the one who can feel it.[/i]

No pressure, then.

*choice
  #The hospital. Measurements. Something on paper nobody can argue with.
    *set ch05_route "hospital"
    *goto hospital
  #The restorer. The charm's the only thing any of us can actually hold.
    *set ch05_route "restore"
    *goto restore

*comment ---------------------------------------------------------------- CH05.HOSPITAL.01
*label hospital
*sid CH05.HOSPITAL.01
*date 2026-09-04 21:00
*place P23 calder_general
*present reuben rafi ilyas nabil quentin
*set e05 true
*set e05_src "hospital"
*set st_reuben +1
*set fr_rafi +1
*set fr_ilyas 1
*set fr_nabil 1
Calder General at nine on a Friday night: the long blue corridors buzzing under the strip lights, a vending machine glowing like an aquarium, a porter pushing an empty bed with a squeaky wheel. It smells of floor polish and bad coffee and, faintly, of everyone's fear, which the knack gives me in a low grey drizzle from every direction. Hospitals are the worst. I wear the ear defenders round my neck like a charm of my own.
*meet nabil
At the front desk a young man with glasses and a neat beard and a reception lanyard looks up as Reuben starts saying something breezy about "a routine follow-up for the lab", and raises one thick eyebrow, very slowly.

"The lab's closed, Reuben," he says. "It's been closed since seven. You know it's closed. You're doing the voice."

"What voice?"

"The procedure voice. You do it when there isn't a procedure." But he's already buzzing us through. "Nabil," he says to me, as I pass, as though I'd asked. "If anyone asks, you were never here and I was on my break."

Rafi's waiting in the corridor outside the lab in his scrubs, bouncing on his heels. Quentin's already there, on a plastic chair, in his work hoodie, with his arms folded.
*meet ilyas
And in the lab, with the lights on and every machine humming, there's a thin, intense man in his late twenties in a white coat, with a neat black beard and a pen he clicks while he thinks.

"Ilyas Qureshi," says Reuben. "Best lab scientist in the building. Also the only one who'd do this after hours without asking why."

"I'm going to ask why," says Ilyas. "Afterwards. When I've got numbers. I don't want a why before I've got numbers, because then everybody's why gets into the numbers." Click. "Sit down, please. Sleeve up. What's your name?"

"Quentin."

"Quentin. I'm going to tell you what I'm doing before I do it, and you can say no to any of it. All right?"

Quentin looks at him for a second. Then he rolls his sleeve up. "All right."

It takes two hours. Bloods, an ECG, things with wires, a blood-pressure cuff that Ilyas reads three times with a face like thunder. Rafi fetches things. Reuben stands by the wall. And the whole time, Ilyas talks, not to us, to himself, in a flat, fast undertone. "Heart rate forty. Forty. That's a rower. You're not a rower. Oxygen normal. Temperature thirty-four point... no. No. That's not a real number. Again." Click. "Again."

The knack gives me him and it's like standing near a kettle about to boil: frustration, fierce and honest, the frustration of a man watching a set of numbers refuse to add up.

At eleven o'clock he puts the pen down.

"I can tell you what this isn't," he says. "It isn't a man who nearly died and recovered. It isn't..." he glances at Rafi, who grins at him, "...whatever Rafi is. Rafi's numbers are strange in a particular way. Yours are strange in a different way." He taps the ECG trace, a long strip of paper. "Your heart is beating. It's beating as if something is helping it. As if it's being [i]supplied[/i]. There's a load on you that isn't yours. That's the only honest sentence I can write."

"Supplied by what?" says Quentin.

"I don't know. I can measure that it's there. I can't tell you who, or where, or how." Click. "I hate that."

*choice
  #Tell Reuben what I see when I look at Quentin. The rope.
    *set gift_reuben true
    *set gift_mercy true
    *set b_reuben_explain true
    *set st_reuben +1
    While Ilyas is packing the samples, I go and stand by Reuben at the wall.

    "I can see it," I say quietly. "Not see. Feel. There's a... line. A rope. Running out of the middle of his chest and away through the wall. Taut. Like something's pulling on the other end." I swallow. "I felt it in the lane. I felt it in the café. I feel it now."

    He doesn't say anything for a while. The warmth of him, the heating-on-low, doesn't change, and then it does: it deepens, somehow, goes steadier, like somebody leaning in to listen.

    "Which way does it go?" he says, finally. Not "are you sure". Not "that's impossible". [i]Which way.[/i]

    I close my eyes and feel for it. "That way," I say, and point. North-east. Towards the river.

    Reuben takes a biro out of his pocket and writes it on the back of his hand. "Thank you," he says. "For telling me." And I think he means more than the direction.
  #Ask Ilyas to write up his own account, independently. His own words.
    *set e05_c true
    *set fr_ilyas +1
    "Would you write it down?" I say. "Just what you found. In your own words. Not Reuben's. Not anyone's."

    Ilyas looks at me properly for the first time. The kettle in him goes off the boil, a little, into something like respect.

    "An independent account," he says. "Observation first. No explanation." Click. "Yes. God, yes. Nobody ever asks for that." He's already writing, in fast neat capitals, dated and timed. He signs it, and prints his name under the signature, and gives me a photocopy. "If anyone argues with this," he says, "send them to me."
  #Focus on Quentin. What has he been told, and who gets to see these results?
    *set b_quentin_consent true
    *set st_quentin +1
    Quentin's sitting on the plastic chair with his sleeve still rolled up and a plaster in the crook of his arm, looking at the ECG trace on the bench like it's somebody else's handwriting.

    "Who sees this?" I say to Ilyas. "The results. Where do they go?"

    Everyone looks at me. Ilyas clicks his pen. "Nowhere, unless he says so. They're his."

    "Did anyone at the clinic tell you anything?" I ask Quentin. "About what they did?"

    He shakes his head slowly. "They said I was lucky. They said don't tell anyone." He looks at the trace. "Nobody's asked me who gets to know. Before now." And the knack gives me something from him that feels like a door opening a crack. "Nobody. Just Reuben's lot and Gideon, and now you. That's it. That's the list."
*page_break
*comment ---------------------------------------------------------------- CH05.HOSPITAL.02
*sid CH05.HOSPITAL.02
*date 2026-09-04 23:30
*place P23
*present quentin
*mood night
Level three of the hospital car park at half eleven: concrete, strip lights, a few cars, and over the edge of the wall the whole city spread out below in orange, the river a black ribbon through it with the bridges lit like zips.

Quentin's smoking a cigarette he clearly doesn't want. He holds it more than he smokes it. I lean on the wall beside him.

"I was going to do the emergency-service course," he says, out of nowhere. "Next year. Paramedic, eventually. I'd done the first-aid bits. I was saving up." He taps ash over the wall. "Can't see them letting me in with a heart rate of forty and a temperature that isn't a real number."

"You don't know that."

"I don't want to be a case," he says. "That's the thing. Everybody's looking at me like I'm a case now. Reuben. Ilyas. You." He says it without heat. "I just want to make coffee and do my course and be a normal bloke whose brother's a vampire."

He's quiet for a while. Then, instead of anything that matters: "Do you know if the night bus still goes from Northline after midnight on a Friday? I can never remember."

"The 42 does," I say. "Twenty past and ten to."

"Cheers." He looks almost grateful for how ordinary it is.

*choice
  #Tell him he doesn't owe anyone his story. Including me.
    *set st_quentin +1
    "You don't owe anybody your story," I say. "Not Reuben. Not Ilyas. Not your brother. Not me."

    He looks at me sideways. "You watched me die."

    "I know. Still don't."

    He's quiet for a long time. Then he stubs the cigarette out on the wall, half-smoked, and puts the end in his pocket, because he's the kind of person who doesn't drop litter even at a moment like this, and I like him enormously.

    "Thanks," he says. The knack gives me the floor of him, the steady thing under the jokes, and for a second it's the only solid thing on level three.
  #Ask him who gave him the charm.
    *set course_lead true
    "The charm," I say. "On your keys. Where did it actually come from?"

    He frowns, remembering. "The first-aid course. In August. At the rec centre in Southmere, the evening one. The instructor gave everyone a little token at the end. For luck. I thought it was a bit naff, but, you know. Free." He turns the cigarette in his fingers. "Nice bloke. Good teacher. Calm. Made you feel like you could do it."

    "What was his name?"

    "It was on a form." He shakes his head. "I've been trying to remember all week. I can't. It's like it slides off."

    [i]Calm.[/i] I think of a voice in an echo, counting down from ten, pleasant and patient as a dentist. I don't say anything.
*goto night

*comment ---------------------------------------------------------------- CH05.RESTORE.01
*label restore
*sid CH05.RESTORE.01
*date 2026-09-04 14:30
*place P20 okafor_restoration
*present ellis chukwudi isaac quentin
*set st_ellis 2
*set b_ellis_meet true
*set fr_chukwudi 1
*set fr_isaac 1
*set e03 true
*set e03_src "ellis"
*set e05 true
*set e05_src "restore"
Okafor Restoration is on Paternoster Row, halfway up University Hill, in a narrow building with a green door and a bay window full of things I don't have names for: a gilded frame with no picture, a clock face with no hands, a folding screen painted with a moonlit garden that makes the back of my neck prickle. OKAFOR in small gold letters on the glass. A bell over the door that rings a note too pure to be an ordinary bell.

Quentin and I go in together. He's come straight from his shift, still in the Double Shift T-shirt, and he stands very close to me in the doorway, which he'd deny.

The front room's for clients: polished floor, a chair or two, a desk with a leather blotter. Beyond it, through an open door, there are workrooms, and a smell comes out of them that's size glue and linseed and something sharp and clean, like the air after lightning.
*meet ellis
*portrait ellis neutral
"You must be Dominic's friends," says a voice, and a young man comes out of the workroom wiping his hands on a cloth.

He's my age, maybe a year older. Tall, slim, with a long fine-boned face and dense dark coils kept up off his forehead, deep brown skin, and a mouth that looks like it's about to say something clever. He's wearing a shirt buttoned to the neck under a plum cardigan that's clearly old and clearly looked after, and across him, from one shoulder to the other hip, there's the strap of a leather bag that's been mended so many times the stitches have become a pattern.

"Ellis," he says. "Okafor. The younger. Dominic said you'd be charming and slightly alarmed. He was right on both counts. Come through, come through. Mind the frame, it's worth more than the building. Tea? We've got tea. We've got a lot of tea. Isaac, put the kettle on. [i]Isaac.[/i]"

It's a performance. A good one: warm, quick, funny, making the visit easy, making two nervous strangers in a doorway feel like guests. And the knack gives me what's under the performance, and it's like a stage when you step behind the curtain: all ropes and effort and nerves, a lot of work to make it look like no work at all.
*meet isaac
A boy of about sixteen comes through with safety goggles pushed up on his forehead and a circuit board in one hand. "I'm doing a thing," he says. "It's nearly working. Nobody touch the bench."

"Nobody was going to touch the bench."

"You always say that."
*meet chukwudi
*portrait chukwudi neutral
And then their father comes out of the back room: Chukwudi Okafor, Ellis's long face gone broad and grave, a short grey beard shaped close to the jaw, a magnifying glass on a chain round his neck. He shakes our hands with enormous seriousness, and the knack gives me him and it's like a well-made table: solid, patient, true.

"May I see it?" he says to Quentin. "The token. You needn't take it off the ring."

Quentin puts his keys on the green baize of the workbench.

Chukwudi looks for a long time through his glass. He explains as he goes, patiently and precisely, as if he's teaching, and I realise he is. "A protective token. A common kind. Sold at fetes, given at christenings: a little ward against harm, very old, very ordinary. This one's been modified." He points with a fine steel probe. "Here, and here. Someone skilled has opened the stamp and re-cut it. And the scorch..." He holds the glass closer. "The scorch is what happens when a ward of this kind is [i]used[/i]. When it does its work."

"What work?" says Quentin.

"I don't know yet." Chukwudi straightens up. "That will take hours."

It does. Four hours, in the back workroom, in a haze of tea and linseed, while Isaac's circuit board beeps at intervals and Quentin sits on a stool with his hand flat on the bench beside his keys and Chukwudi does slow, careful things with threads of silk and a pendulum and a sheet of paper dusted with something like chalk. Ellis assists, fast and precise, handing his father things before he asks. And gradually, on the chalk-dusted paper under the pendulum, a line appears. A faint drawn line, running from Quentin's hand, off the edge of the paper. North-east.

"There's a tie," says Chukwudi quietly. "Running out of him. A real one. Measurable. I've seen one like it once in my life, and I didn't like it then."

The line on the paper is pointing exactly where the rope goes. Exactly where I feel it.

*choice
  #Tell them I can see the tie. Watch Ellis stop performing, for a second.
    *set gift_ellis true
    "I can see it," I say.

    They all look at me. Chukwudi, Isaac, Quentin. Ellis.

    "Not see. Feel. I felt it in the lane when he died. It's there now. It goes that way." I point. North-east. The line on the chalk paper points the same way.

    And Ellis stops. Just for a second. The performance goes out of him like a light switched off, and what's underneath is somebody very still and very interested, looking at me as though I'm a painting he's just realised is older than the frame.

    "You can [i]feel[/i] a tie," he says. Not charming. Just quiet.

    "Yeah."

    "That's..." He stops. Starts again. "Do you know how rare that is?"

    "No."

    "Neither do I," he says, and then the light comes back on, and he smiles, and it's a real one this time, slightly lopsided. "But I'm going to find out."
  #Ask Ellis how he'd have done the modification, if he were the one doing it.
    *set e03_c true
    *set people +2
    "If you were doing it," I say to Ellis, while his father's working. "The change to the charm. How would you have done it?"

    He looks at me in surprise, and then, slowly, delighted, like I've asked him to show off. "Well," he says. "I wouldn't. It's unethical." A pause. "But if I [i]did[/i]..." And he takes a fresh token from a drawer, a plain one, and a steel point, and shows me: where the stamp would be opened, how the cut would go, how you'd turn a ward that keeps harm off into a ward that keeps something [i]on[/i]. A hook instead of a shield. His hands are quick and certain.

    "Someone trained did this," he says, when he's finished. "Not a hobbyist. Someone who learned from someone good." He puts the point down. "That's a small list. In this city, that's a very small list."
  #Keep out of the way. Watch how they work.
    *set craft +2
    I keep out of the way. I sit on a stool in the corner of the workroom with a cup of tea and watch.

    It's like watching Micah with the distro board, or Nolan with a stage box, or Martin at the press: people who know exactly what their hands are for. Chukwudi works slowly, explaining every move to Ellis, who already knows it and listens anyway. Ellis works fast and neat and hands his father things before he asks. Isaac's circuit board beeps. The light through the window goes gold, then orange.

    I learn more in four hours of watching than I have in a year. Mostly I learn that there's a kind of care that looks like nothing, from the outside, and is everything.
*page_break
*comment ---------------------------------------------------------------- CH05.RESTORE.02
*sid CH05.RESTORE.02
*date 2026-09-04 20:15
*present ellis chukwudi
*set error_book true
*set fr_chukwudi +1
Quentin goes home at seven, with a promise from Chukwudi to call. But Chukwudi says I should stay for dinner, in a tone of voice that doesn't really do questions, so at quarter past eight I'm upstairs in the family kitchen above the shop.

It's much less elegant than downstairs. A kitchen with too many things in it: plants on the sill, a calendar with everyone's shifts on it in different colours, a pile of post, a toaster Isaac has taken apart and put back together wrong. Ellis, washing up at the sink with his sleeves pushed up and the plum cardigan over the back of a chair, is having a ridiculous argument with his brother about the toaster.

"It worked [i]before[/i]."

"It works [i]better[/i] now."

"It toasts one side."

"On purpose. It's efficient."

"Nobody," says Ellis, with enormous dignity, "wants half a piece of toast."

Chukwudi sits down across from me at the table with a big, battered ledger bound in green cloth, and opens it.

"This is our error book," he says. "Every mistake this shop has made in forty years. My father's, mine, Ellis's, one of Isaac's that he will deny." He turns the pages carefully. Neat entries, dated. [i]Misjudged the age of a ward, 2009. Should have asked. Consequence: client's grandmother's clock no longer keeps the dead out. Remedied at cost.[/i]

He finds one near the back and turns the book to me. His own handwriting, from years ago: something about a frame, a job he helped with for someone else, a repair done with two other hands on it, three people holding one piece of work together; and a note about a description on a certificate that wasn't what he'd been told. He doesn't explain it, and I don't ask yet.

"A record should preserve what went wrong," he says. "Otherwise it isn't a record. It's an advertisement."

*choice
  #Help Ellis with the washing-up, and let him complain.
    *set b_ellis_offstage true
    *set st_ellis 3
    I get up and take a tea towel off the rail without asking.

    Ellis looks at me sideways, surprised, and then hands me a plate, and then, since I'm there, starts complaining. About the toaster. About Isaac. About a lecturer called Basil who puts his own name on other people's work. About how the placement he wants next year is in another city and his father pretends he doesn't mind and minds terribly. About everything, in a long, irritable, very funny stream, with none of the downstairs performance in it at all.

    "Sorry," he says eventually, handing me the last glass. "I'm not usually like this."

    "Like what?"

    "Like a person." He looks at the glass. "Downstairs I'm the shop. Up here I'm just... this." He gestures at himself with a wet hand: the sleeves, the irritation, the toaster.

    "I like this," I say, before I can stop it.

    He looks at me for a second, and I can't feel what it means to him. The knack goes blank, the way it always does when it's about me. But he doesn't look away, and neither do I.
  #Ask Chukwudi about the mistake in the book.
    *set fr_chukwudi +1
    "That one," I say. "Your entry. What happened?"

    He's quiet for a moment. "I was asked to help with a repair on something old. Very old. A frame, from a program that no longer exists. Three of us worked on it together: that's the unusual part. Three people holding one piece of work. And when it was sold, later, the description on the certificate wasn't the one I'd been given." He closes the book gently. "I signed something that wasn't true. I didn't know. That isn't an excuse. That's why it's in the book."

    The knack gives me him: the well-made table, and in its grain, an old, careful shame, polished smooth by years of handling.

    "Thank you for telling me."

    "Thank you for asking," he says. "Most people don't."
*goto night

*comment ---------------------------------------------------------------- CH05.NIGHT.01
*label night
*sid CH05.NIGHT.01
*date 2026-09-04 23:55
*place P02 print_shop
*mood night
Five to midnight. My room. The window open, the city settling.

The knack's billing me for the day. There's a headache behind my left eye like a thumb pressing in, slow and patient, and my hands won't quite stop shaking. It always costs something, when I use it on purpose. Today I used it a lot.

But I've got something now. Not just a feeling.
*if ch05_route = "hospital"
  A number. A heart rate of forty. A temperature that isn't a real number. And Ilyas Qureshi's flat, furious sentence: [i]as if it's being supplied.[/i]
*else
  A line on a chalk-dusted sheet of paper, running north-east. A tie, measurable. Chukwudi Okafor's grave voice: [i]I've seen one like it once in my life, and I didn't like it then.[/i]
Something is holding Quentin up from outside. That isn't just me any more. That's a measurement.

What? Who's on the other end? And who's paying for it?

My phone buzzes on the duvet. Nolan.

[i]where have you BEEN all week. are you alive. do you still exist. I went to the diner with Peter and he talked about oat milk for 40 minutes and you weren't there to save me. saturday?[/i]

I look at it for a long time. He's noticed. Of course he's noticed. I've been gone all week, into a city he doesn't know exists.

*choice
  #Text him back properly. Make a plan for the weekend, and keep it.
    *set b_nolan_kept true
    [i]I'm alive. Sorry. It's been a weird week, I'll tell you. Saturday: the market, then the steps, then the chip shop, like old times. My treat. 12?[/i]

    Three dots. Three dots. [i]12. you're buying the chips AND the good sauce. I'm holding you to this.[/i]

    [i]Deal.[/i]

    I put the phone down and lie back. I'm going to keep this one. I don't care what else happens on Saturday. I'm keeping this one.
  #"Sorry. Busy week." He'll understand.
    *set hurt_nolan +1
    [i]Sorry. Busy week. Soon, promise.[/i]

    Three dots. For a long time. Then, just: [i]ok.[/i]

    He'll understand. He always understands. That's what I tell myself, with the thumb behind my eye and the phone face down on the duvet. He'll understand, a bit less each time.

*journal [b]Chapter 5.[/b] {@ch05_route = "hospital"|At Calder General, Ilyas Qureshi measured Quentin: his heart is being supplied from outside.|At Okafor Restoration, Chukwudi and Ellis showed me the charm is a protective token someone skilled has altered, and measured a tie running out of Quentin.} Something outside him is keeping him alive.{@course_lead| The charm came from a first-aid course in Southmere in August.|}
*page_break
*goto_scene ch06
`);
