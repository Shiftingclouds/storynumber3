NB.scene("ch10", String.raw`
*mood day
*set ch 10
*chapter 10 The Closed Program
*comment ---------------------------------------------------------------- CH10.CHOICE.01
*sid CH10.CHOICE.01
*date 2026-11-07 09:00
*place P02
*set strain 0
November. The clocks have gone back and the dark comes down at half four like a lid. Martin's got the heating on for the first time and the whole building smells of hot dust. Hugo's posters on Latch Lane have gone soft in the rain; somebody's put new ones up over the old, and then somebody else has put new ones over those.

Quentin rings on Tuesday to say he fell asleep standing up at the coffee machine. Silas folds a croissant right, first time, on Wednesday; Otis tells Martin, and Martin tells me at tea, as if it's the football results. {@gareth_hugo|Gareth Moss leaves a message at the shop: the file's open, and nobody's been in touch about Hugo, and he's sorry. |}{@tunnels_done|Danny Rook's out of hospital; Owen says he's gone back to work on the day shift and won't go below street level, and nobody blames him. |}Nothing happens. Nothing gets better. The ropes run out of Quentin and Silas, north-east, humming.

And all week, one phrase. [i]A way of holding someone who was dying.[/i] Seven years ago.

It turns out there are two places that remember it.
*if tunnels_done
  The first is the Mercy House archive. Adrian asks on Wednesday, very carefully, and the archivist, Florian Adebayo, says he'll open the program's file on Saturday for anyone who'll agree to separate what they know from what they guess. Adrian says he's going. Adrian says I can come, in the voice of someone who's already put my name on a form.
*else
  The first is the Mercy House archive. Chukwudi makes a phone call on Monday, and the archivist, Florian Adebayo, says he'll open what's left of the program's file on Saturday for anyone who'll agree to separate what they know from what they guess. Adrian Keene's going. I can come, if I like.
*if tunnels_done
  The second is a man. Reuben tells me on Thursday, at the diner, in a low voice, having clearly decided to tell me after a very long argument with himself: a former warden called Malcolm Tait, who keeps a recovery house up on North Ridge and was there when the program failed. Reuben's driving up to see him on Saturday. The heater in his car is broken. I can come, if I don't mind the cold.
*else
  The second is a man: Malcolm Tait, the one in Reuben's message, a former warden who keeps a recovery house up on North Ridge and was there when the program failed. Reuben's driving up to see him on Saturday. The heater in his car is broken, he says. I can come, if I don't mind the cold.
The same Saturday. Of course.

*choice
  *if know_wardens
    #The records. Florian, the archive, and whatever Orrell doesn't want read.
      *set ch10_way "records"
      *goto records
  #The ridge. Reuben's driving up to Orchard House anyway.
    *set ch10_way "orchard"
    *goto orchard

*comment ================================================================ Mercy House records
*comment ---------------------------------------------------------------- CH10.RECORDS.01
*label records
*sid CH10.RECORDS.01
*date 2026-11-07 14:00
*place P01 mercy_house
*present florian adrian kenji
*if ch04_first = "mercy"
  Mercy House in daylight is less strange than Mercy House at midnight, and more: the same old hospital on the hill, the same corridors, but full of ordinary Saturday noise. Someone's hoovering. Someone's burnt toast in the kitchen that hasn't closed in forty years. A trainee is being shouted at, fondly, in the yard.
*else
  I've never been inside Mercy House. I've walked past it a hundred times: the old hospital on the hill, red brick and white stone and too many chimneys, with a clock over the gate that's been stopped at twenty past four since before I was born. Inside it's corridors, and more corridors, and noise: someone hoovering, someone's burnt toast, a trainee being shouted at, fondly, in the yard. A barracks and a house and an office, all at once, and a kitchen at the heart of it that Adrian tells me, with some pride, hasn't closed for one single hour in forty years.
The archive's in the old pathology wing, down a flight of stone stairs, through a door with a keypad and a door with a key. It's cold and dry and very quiet, a long white room of grey steel shelving and brown boxes, with a table down the middle under hanging lamps.
*meet florian
*if fr_florian >= 1
  @florian:attentive Florian Adebayo's waiting at the table in his cardigan, with his white cotton gloves on and his round wire glasses on the end of his nose, exactly as he was at the footbridge. He looks at me over them, pleased and a little wary, the librarian who's been asked a real question again.
*else
  @florian:attentive Waiting at the table is a warden I haven't met: a long, elegant face, a shaved head, round wire glasses, a cardigan with a pair of white cotton gloves sticking out of the pocket. Florian Adebayo, the archivist. He shakes my hand and looks at me over his glasses for slightly too long, like a librarian deciding whether you're the sort of person who'll bend a spine.
@florian:neutral "Before we open anything," he says, "a rule. At this table, you separate what you know from what you infer. You say which is which. Out loud. Every time." He looks at Adrian, then at me. "Institutions die of inference. So do people."

@adrian:neutral "Understood," says Adrian, who has his notebook squared to the table edge already.
*set e07 true
*set e07_src "records"
*set gift_named true
*set fr_florian +1
*set fr_kenji 1
*set e03_c true
*set damian_named true
*set damian_program true

The box is labelled [i]LINKED CARE (TRIAL) · CLOSED[/i], and under that, in a different pen, [i]see transfer note[/i].

Half of it's missing.

@florian:tense Florian shows us the transfer note first, because, he says, what isn't here matters as much as what is. A single sheet: [i]Items 14 to 31 transferred.[/i] A signature he doesn't recognise. A date seven years ago. And under [i]destination[/i], nothing. A blank line. "Transferred," he says, very precisely, "to nowhere anybody wrote down. That's what I know. I infer that someone didn't want it found. I say so, and I mark it as inference."

What's left, we read together, in turns, out loud, under the lamps.

An emergency method, for a person in the last minutes of dying. It held them. Not healed: [i]held[/i]. Kept them alive on someone else's life, a living donor's vitality, run across to them along a prepared link, like a cable from one house to another in a power cut. It worked. For a while.

A donor. A young warden, a volunteer, named only as K.M. in the file. Injured when the link [i]strained[/i]. The word's underlined twice.

A limit. Handwritten in the margin of the protocol, and again in capitals at the bottom: [i]FORTY-EIGHT HOURS FROM DEATH OR NOTHING.[/i] The link has to be made within two days of the person dying, or it can't be made at all.

@adrian:attentive "Known," Adrian says quietly, reading. "Forty-eight hours. It's written twice."

And a monitor. Page after page of notes in a different hand from the rest, small and slanted and quick, describing the link as if the writer could see it. [i]Thread thin at 0300. Donor pulling back. Warm, then not. It's straining. Tell them it's straining. Tell them to stop.[/i] Signed at the bottom of every page with the same initial and a word I've never seen written down.

[i]R. Carrow · sensitive.[/i]

I read it three times. My hands aren't quite steady on the page.

[i]Sensitive.[/i] That's the word. There's a word.{@gift_ansel| Ansel said [i]listener[/i], on the Riverside Steps. This is the Calder one.|} Someone else could feel what I feel. Someone else sat in a room seven years ago and watched a thread between two people go thin, and knew, and told them, and wrote it down.

@florian:attentive Florian's watching me. "Ruth Carrow," he says, gently. "Known. She worked here. She left Calder after the program closed. Her personal file is on the fourth shelf." A pause. "Inference: you've just read something about yourself."
*meet kenji
@kenji:attentive Then Kenji Sato comes down the stone stairs with a crate on his shoulder: a big weathered man with greying hair tied back and a workshop apron and old burn scars shining on both forearms. He puts the crate down, and looks at the file over Florian's shoulder, and then at the drawing I've put on the table, the tin charm from Quentin's keys, which I've drawn so many times since August I could do it in my sleep, and he goes very still.

@kenji:tense "That," he says, tapping a diagram in the file, a little stamped disc, "and that." He taps my drawing. "Same hand. Same school, anyway. Prepared token-work. A protective charm, turned round. It's in the protocol: the patient carries the token, and the token holds the link on their end." He looks at me. "Where did you see that?"

"Off the keys of a man who died in August and came back."

Nobody says anything for a while.

@adrian:neutral And Adrian reads out the program's staff list from the back of the file, because it's procedure to read the whole file. "Commanding: P. Orrell. Monitor: R. Carrow. Donor: K. Maddox, volunteer. Junior ritual physician: D. Holt." He writes each one down. "Known: names. Inference: none." He underlines the last one out of habit, and moves on.

*choice
  *if st_adrian >= 2
    #Work the file with Adrian: sequence, dates, names.
      *set b_adrian_procedure true
      *set st_adrian 3
      So we work the file, Adrian and me, the way I've learned he works everything: in order.

      @adrian:attentive He takes the dates. I take the notes in Ruth Carrow's hand. We build it on a sheet of paper between us, a timeline, the program from the first trial to the day it closed, and every time I say something, he asks, "Known or inferred?", and I tell him, and he writes it in two colours. When I notice that Ruth Carrow's notes stop three days before the program officially closed, and that the last one just says [i]I told them[/i], he doesn't correct me. He looks at the page for a long time, and then he writes it down in the known colour, and underlines it.

      @adrian:warm "You're good at this," he says, without looking up. It isn't a compliment. It's a finding. He writes it down too, I think, somewhere.
  #Ask Florian about R. Carrow.
    *set carrow_file true
    *set fr_florian +1
    "Ruth Carrow," I say to Florian. "What was she like?"

    @florian:warm Florian takes his glasses off, which I learn later is the only time he ever does. "Known," he says. "She was the first person I ever saw argue with a commander and win. She drank her tea black and cold. She was very tired, always." He looks at the fourth shelf. "Inferred: she was tired because she could feel everything in this building, all day, every day, and nobody knew how to help her with it. Least of all us."

    @florian:attentive "Her file's there. Her notes, too: the ones from before the program, on how she worked. How she kept from drowning." He puts his glasses back on and looks at me over them. "Nobody's read them in seven years. It seems to me, as an archivist, that they're waiting for someone to."
*page_break
*comment ---------------------------------------------------------------- CH10.RECORDS.02
*sid CH10.RECORDS.02
*date 2026-11-07 21:00
*place P01 mercy_house
*present adrian
*mood night
Mercy House roof, nine o'clock at night. The city in lights below, all the way to the river, the bridges lit like zips. The cold comes up off the water in a wind that finds every gap in my coat.

Adrian's standing at the parapet with his hands in his jacket pockets. We've been in the archive for seven hours. He hasn't said anything since we came up.

@adrian:tense "They lied," he says eventually. To the city. "Not a big lie. They closed a program that hurt someone, and then they wrote it down so it didn't look like much, and put half of it somewhere, and stopped talking about it. So the house would survive." He's quiet for a moment. "I understand exactly why they did it. That's the worst part. I'd have done the same."

The knack gives me the engine at idle, running hot underneath, the way it always does with him. But tonight there's something else. A small, sour, old thing, like a stone in a boot he's been walking on for so long he's stopped noticing.

@adrian:small "I did do the same," he says.

"What do you mean?"
*if screen_done
  @adrian:tense "Emmett Hsu. You met him. The Whitcomb." He doesn't look at me. "Last spring he missed two weeks of training. His mum was ill, and he was working every shift at the museum to pay for her care, and he couldn't do both, and he was too proud to say. I was his training lead. I wrote the report. I said he'd been on assignment with me." He breathes out. "He hadn't. It kept him on the programme. It's in the file, in my handwriting, and it's a lie."
*else
  @adrian:tense "There's a trainee. Emmett Hsu. You won't have met him; he works security at the Whitcomb to pay his way." He doesn't look at me. "Last spring he missed two weeks of training. His mum was ill, and he was working every shift at the museum to pay for her care, and he couldn't do both, and he was too proud to say. I was his training lead. I wrote the report. I said he'd been on assignment with me." He breathes out. "He hadn't. It kept him on the programme. It's in the file, in my handwriting, and it's a lie."
@adrian:hurt "It isn't evil," he says. "I know it isn't evil. But I spent seven hours today reading about an institution that covered up a mistake to protect itself, and all I could think about was that I'd done it too. To protect someone. That's what they'd have said. [i]To protect someone.[/i]"

*choice
  *if st_adrian >= 3
    #"Then fix it. Tell them. I'll stand next to you when you do."
      *set b_adrian_report true
      *set st_adrian 4
      *set s07 "fore"
      "Then fix it," I say. "Tell them. Tell Orrell, or whoever it is you tell. And I'll stand next to you when you do."

      @adrian:surprised He turns and looks at me.

      "Not because it's evil. Because it's yours. And you hate it. And it's going to sit in you like that stone until you take it out."

      @adrian:small "It'll cost me," he says. "The promotion, probably. There's a review in the spring."

      "Probably."

      @adrian:warm He looks at me for a long time, in the wind, with the whole city behind him. Then something happens to his face that I haven't seen before. His straight brows come down, and the left one, the one that's always a touch higher, evens out, and he looks, for a second, about twelve. "You'd stand next to me," he says. "In a review. About a report."

      "I'd stand next to you."

      @adrian:warm "That's a stupid thing to promise," says Adrian Keene, and his voice isn't steady at all.
  *if st_adrian >= 3
    #"It's Emmett's call, not yours. Ask him."
      *set b_adrian_report true
      *set st_adrian 4
      *set s07 "fore"
      *set adrian_asks_emmett true
      "It's Emmett's lie too," I say. "It's his two weeks. His mum. His place on the programme. Before you fix it, ask him. It should be his call as much as yours."

      @adrian:surprised He stares at me as if I've said something in another language.

      @adrian:attentive "Ask him," he says slowly. As if he's never once considered that you could ask someone, instead of deciding for them what's best and writing it down.

      "Ask him."

      @adrian:warm He looks out at the city for a long time. Then he laughs, short and shocked, at himself. "I've been carrying that for eight months," he says, "and it never once occurred to me to ask him." He takes his notebook out of his jacket, and writes something in it, and shows me: [i]Ask Emmett.[/i] Underlined twice. "Thank you," he says. "I don't know what you are. But thank you."
  #"Everybody lies to protect someone." Let him off.
    *set s07 "intro"
    "Everybody lies to protect someone," I say. "You did it for him. It's not the same as what they did."

    @adrian:guarded He nods, slowly. "No," he says. "It's not the same." He says it the way you'd say a thing you'd like to believe.

    We stand on the roof a while longer. The stone in his boot is still there. I can feel it. He goes on walking on it, very straight, the way he does everything, and we go down to the kitchen, where someone's made far too much soup, and he doesn't bring it up again.
*goto orrell

*comment ================================================================ Orchard House
*comment ---------------------------------------------------------------- CH10.ORCHARD.01
*label orchard
*sid CH10.ORCHARD.01
*date 2026-11-07 11:00
*place P51
*present reuben malcolm
*set e07 true
*set e07_src "malcolm"
*set gift_named true
North Ridge in its last colour: the hedges gone copper and the beeches gold and bare at the top, and a sky so big and pale after the city that it makes my eyes water.

An hour up the regional road in Reuben's car, with the heater broken. It really is broken. He's brought a blanket for my knees, a tartan one that smells of dog, and a flask of tea, and he drives the way he does everything, carefully and a bit slower than everyone else, with the radio on low playing old-people music he doesn't turn off.

@reuben:warm "Malcolm was a warden for thirty years," he says, somewhere past the reservoir. "He trained half the house. He took me out on my first proper call, when I was seventeen." He changes gear. "He's grumpy. You'll like him."

Orchard House is at the end of a long rutted track: a low stone farmhouse with a slate roof that's visibly leaking, a walled garden gone wild, a workshop with its doors open, and an apple orchard running down a slope behind it to a wall with a small, heavy, very old gate in it.
*meet malcolm
@malcolm:guarded A collie comes out to meet the car, black and white and delirious, and behind her, slowly, a man in a wool jumper with holes at both elbows: fifties, rugged, a grey beard kept close to the jaw, ruddy from the wind. Malcolm Tait. He looks at Reuben, and at me, and at the dog, who's trying to get into the car. "Bess," he says. "Leave him. He's not food." He looks at me again, longer. "Probably."

He makes tea like a man making a point. Leaves in a pot, a strainer, milk in first, no discussion, and three biscuits each on the saucer, exactly three, as if it's a regulation. We sit at the kitchen table with the rain coming in through the roof into a bucket in the corner, [i]plink, plink[/i], and Bess's head on my foot.

@malcolm:tense And he tells us. Plainly. He was there.

The emergency method was real. They used it three times, seven years ago, on wardens and one civilian who were dying and couldn't be saved any other way. It held them: a living donor's life run across to them along a prepared link, so they could hang on while the rest of the body mended. Two of them lived. One didn't.

@malcolm:sad The donor for the third was a young warden, Kit Maddox, twenty-two, who volunteered because she was the right blood group and the bravest idiot Malcolm ever trained. The link strained. She was hurt. Badly. "She still walks with a stick," Malcolm says. "She teaches primary school now, in the south. She sends me a card at Christmas with a robin on it. Every year. The same robin."

@malcolm:tense The limit: forty-eight hours from death, or nothing. The link had to be made within two days of dying or it couldn't be made at all. "We learned that the hard way," he says, and doesn't say how.

@malcolm:attentive "And we had a monitor," he says. "Ruth Carrow. She watched the links. She could feel them. The threads between the donor and the patient, how thick they were, whether they were holding. She told us it was straining. She told us three days before it went. We didn't listen." He looks at me. He looks at me for too long. "She was a sensitive."

The word sits on the kitchen table between the teacups.

@malcolm:attentive "Like you," says Malcolm Tait.

Reuben goes very still beside me.

@malcolm:amused "Don't look like that. I've been doing this thirty years." He takes a biscuit. "You flinched when Bess came up the track, before you could see her. You've been listening to the house since you walked in; you looked at the corner where the damp is before the bucket went plink. You look at people's chests, not their faces, like she did." He bites the biscuit. "She'd have had you pegged in a minute. Took me about four."

[i]Sensitive.[/i] There's a word for it.{@gift_ansel| Ansel said [i]listener[/i], on the Riverside Steps. This is the Calder one.|} Someone else could feel what I feel. Someone else sat in a room seven years ago and watched a thread go thin, and knew, and told them. And nobody listened.

*choice
  #Ask Malcolm how he knew what I am.
    *set gift_mercy true
    *set fr_malcolm +1
    "How did you know?" I say. "Really. Not the dog."

    @malcolm:guarded Malcolm looks at me for a long time over his cup. Then he puts it down.

    @malcolm:warm "Because you look tired in a particular way," he says. "The way she did. Not sleepy. Worn. Like someone who's been standing next to a loud machine all day and can't hear themselves think." He nods at the window, at the ridge, the huge pale sky. "You've been breathing different since we got out of the car. Up here it's quieter. Fewer people. Your shoulders came down about an inch. Hers did too, when she came up here."

    "She came here?"

    @malcolm:warm "Weekends. To get away from the noise. She said the orchard was the only place in forty miles where she could hear herself." He pushes the plate of biscuits an inch towards me. "Have your three. And stop looking at Reuben like you've done something wrong. You haven't. He'd have found out eventually. He's slow, but he gets there."

    @reuben:amused "Thanks, Malcolm," says Reuben.
  #Ask about the records Orrell divided.
    *set orrell_suspected true
    "The records," I say. "At Mercy House. Is there a file?"

    @malcolm:angry Malcolm's face closes like a door. "There was," he says. "There was a whole file. I wrote half of it." He puts his cup down very precisely. "When they closed it, Patrick Orrell had it divided. The half that made us look careless stayed in the archive. The half that made the method look [i]possible[/i], the protocols, the tokens, the how-to, went somewhere else. So nobody could pick it up and try again." He laughs, without much humour. "That was the idea."

    "Where did it go?"

    @malcolm:angry "I don't know," says Malcolm. "I asked. I got told it was handled. I left the house the next year." He looks at me. "If you're asking me whether I think someone's picked it up again: I think you wouldn't have driven up here in a car with no heater if they hadn't."
*page_break
*comment ---------------------------------------------------------------- CH10.ORCHARD.02
*sid CH10.ORCHARD.02
*date 2026-11-07 15:30
*place P50
*present reuben
*set damian_named true
After lunch Malcolm and the dog go to sleep in two armchairs in front of the stove, snoring in harmony, and Reuben and I walk down to the reservoir.

The footpath runs all the way round it, three miles, along the top of the old dam and back through a birch wood. There's nobody else out. The water's flat and grey and huge and the sky's in it, and the only sound is our boots and the birds and a long way off, a tractor.

And Reuben, who always waits for other people's answers, talks.

@reuben:warm He tells me about Mercy House when he was a cadet: sixteen, big and shy and useless, too slow for the fast wardens and too gentle for the tough ones. And about the man who changed that. An instructor, who taught emergency methods to the cadets and then to the new wardens, who noticed that Reuben was slow because he was careful, and that careful was worth something. Who took a nineteen-year-old seriously when nobody else did. Who gave him his first medic's bag, his own, with his initials on it.

@reuben:sad "He left two years ago," Reuben says. "Left the house. Left professional life. I wrote to him three times. He stopped answering." He kicks a stone into the reservoir and watches the rings go out. "I don't know what I did."

"What was his name?"

@reuben:warm "Damian," says Reuben. "Damian Holt." And he says it with love. That's what I'll remember afterwards: that he said it the way you'd say the name of a teacher who changed your life.

He doesn't know what he's saying. Neither do I, yet. Not all the way. But something in the back of my mind, the part that files things, turns the name over once, like a card, and puts it somewhere I'll be able to find it.

*choice
  *if st_reuben >= 3
    #Listen. Ask what Damian was like, and what it cost Reuben when he left.
      *set b_reuben_damian true
      *set st_reuben 4
      "What was he like?" I ask. "And what did it cost you? When he went."

      @reuben:surprised Reuben stops on the dam path. Nobody's ever asked him the second question. I can feel that, even though I can't feel what he thinks of me: the surprise of it, like a door he's been leaning on opening suddenly inwards.

      @reuben:sad He tells me. Damian was patient, and funny in a dry way you missed if you weren't listening, and he explained things three times without sighing. He made you feel like the thing you were bad at was the thing you'd be best at, eventually. And when he left, Reuben lost the one person at Mercy House who'd ever told him he was good at something before he'd proved it. "I've been trying to prove it ever since," he says. "To someone who isn't there."

      @reuben:warm We walk the rest of the way round the reservoir without saying much. At the birch wood, he says, not looking at me: "Thanks for asking the second one." And the radiator-warmth of him, the steady heat you don't notice until you step away from it, is turned up, just slightly, just enough to feel.
  #Ask whether Damian worked on the closed program.
    *set damian_program true
    "Did he work on it?" I ask. "The program. Seven years ago."

    @reuben:guarded Reuben frowns at the water. "Damian? He was..." He stops. "He'd have been junior then. A ritual physician. Newly qualified." He thinks about it, honestly, the way he thinks about everything. "He might have. Everyone junior did a rotation. He never talked about it." He shrugs. "Nobody talks about it. That's the whole point."

    I file that, too. [i]He never talked about it.[/i]
*page_break
*comment ---------------------------------------------------------------- CH10.ORCHARD.03
*sid CH10.ORCHARD.03
*date 2026-11-07 19:00
*place P51
*present reuben malcolm percival ansel
*mood night
*set fr_percival 1
Supper at Orchard House is stew, in the kitchen, with the bucket plinking in the corner and the stove roaring, and a guest who arrives through the garden.
*meet percival
@percival:angry He comes up through the orchard in the dusk from the old gate in the bottom wall: a very old man in a long cloak, with a deeply lined brown face and a white beard and a staff he clearly doesn't need, swinging it like a walking stick. He comes in without knocking and says to Malcolm, before hello: "Your roof is a disgrace."

@malcolm:angry "It's my roof," says Malcolm.

@percival:angry "It leaks onto my side," says Percival Tern.

This, Reuben tells me under his breath, happens every month. Percival is the orchard keeper on the other side of the gate, in the Marches, and the gate is a crossing, one of the old ones, sealed, under Mercy House's custody, which Percival is allowed to use once a month to come and argue with Malcolm about the roof. They've been having the argument for eleven years. Neither of them has ever fixed the roof.

An hour later, there's a knock at the front door. A proper knock, polite, measured.
*meet ansel
@ansel:shy It's Ansel Marr. In his dark coat and his formal collar, windswept, holding a leather folder under his arm like a shield. "Good evening," he says to Malcolm, with a small bow. "I apologise for the hour. I have lease papers for Mr Tern. From the Court." He looks past Malcolm into the kitchen, and sees me, and something happens in his face that he immediately puts away. "Hello, {name}."

@percival:amused Percival looks at the folder. Then at Ansel. Then at me. "Lease papers," he says. "On a Saturday night. Up a mountain. That couldn't wait until Monday."

@ansel:guarded "They're very important lease papers," says Ansel, with enormous dignity.

I wrote to him on Wednesday. One of our notes, the cream paper kind: [i]I'm going up to the ridge on Saturday, to Orchard House. It's about the program.[/i] That's all I said.

*choice
  *if st_ansel >= 2
    #Ask Ansel, quietly, whether the lease papers really couldn't wait.
      *set b_ansel_pretext true
      *set st_ansel 3
      After supper, while Malcolm and Percival argue about guttering in front of the stove, I find Ansel in the scullery, washing up, very carefully, a plate at a time, because nobody told him not to.

      "The lease papers," I say quietly. "Really couldn't wait?"

      @ansel:guarded He puts the plate in the rack. He picks up another. "They're genuine papers," he says. "Mr Tern's lease on the orchard is up for renewal at midwinter. The Court needs his signature."

      "At midwinter."

      @ansel:shy "At midwinter," says Ansel, to the plate. There's a long silence. The cold water in the glass, the knack gives me: very still, very clear, and far down in it, something moving, like a fish turning. "I volunteered to bring them," he says at last. "When I read your note. I told my father's clerk I happened to be passing." He puts the plate in the rack. "I have never happened to be passing anywhere in my life."

      "Why?"

      @ansel:shy He looks at me then, properly, in the scullery light, with his sleeves rolled up and soap on his wrists. "Because you were going somewhere to ask about something that frightened you," he says, "and I didn't want you to come back down the mountain on your own." He goes back to the washing up. "That's all. That's the reason. It's not a very official one."

      I dry. He washes. Neither of us says anything else. It's the best washing-up I've ever done.
  #Get Percival talking about the crossings and who uses them.
    *set know_marches true
    *set crossings_map true
    "Mr Tern," I say, when Malcolm's gone to find another bucket. "The crossings. How many are there? Who uses which?"

    @percival:attentive Percival looks at me with bright, sharp, very old eyes, and then, delighted to be asked a question by someone young who'll actually listen to the answer, he takes a pencil out of his cloak and draws it for me on the back of Ansel's lease papers, which Ansel watches in silent anguish.

    @percival:attentive "The Iron Footbridge," he says, drawing. "The proper one. Keepers, ledgers, fees, courtesy. Everyone respectable." A cross. "Northwood, up the old railway. Dangerous. Unofficial. Cheap. For people who don't want to be written down." Another cross. "This one, under Mercy House's thumb, which I'm permitted once a month to complain about roofs." A third. "And the river doors. Down at the docks. Stillwater. Old ones. Private. Rented." His pencil stops. "Some of those are rented by people I wouldn't sell an apple to."

    @ansel:tense Ansel's stopped looking anguished. He's looking at the drawing. "Stillwater," he says quietly.

    @percival:guarded "Stillwater," says Percival Tern. And puts the pencil away.
*goto orrell

*comment ================================================================ Orrell
*comment ---------------------------------------------------------------- CH10.ORRELL.01
*label orrell
*sid CH10.ORRELL.01
*date 2026-11-08 11:00
*place P01 mercy_house
*present orrell florian
*mood day
Sunday morning. I'm summoned.

It's a text from a number I don't have, at seven in the morning: [i]Commander Orrell would be grateful for ten minutes of your time at eleven. Mercy House. Front gate.[/i] Grateful. It doesn't sound grateful. It sounds like a subpoena with good manners.

Mercy House is not a place where secrets stay in one room.{@ch10_way = "records"| Of course he knows I've read the file.| Of course he knows where I was yesterday.}

His office is at the top of the old hospital, in what must have been a matron's room once: tall windows, a bare desk, a coat stand, a photograph of wardens in a line from forty years ago. No clutter. No sign of a person at all, except for a pair of reading glasses folded on the desk that he doesn't pick up.
*meet orrell
*if ch04_first = "mercy"
  @orrell:neutral Commander Patrick Orrell. The man who passed through the kitchen on my first night here, took an apple, listened for a minute, and left. Grey crew cut, heavy brow, a stillness about him like the stillness of a deep pond. He stands when I come in, and sits when I do.
*else
  @orrell:neutral Commander Patrick Orrell. I've never met him. I've heard him talked about, by Adrian with something like reverence and by Reuben with something like worry: fifties, a grey crew cut, a heavy brow, and a stillness about him like the stillness of a deep pond. He stands when I come in, and sits when I do.

@orrell:attentive "You've been reading about the linked care program," he says. Not a question. "Or listening to people who remember it. Tell me what you think."

So I tell him. What I know, and what I infer, and which is which, the way Florian taught me{@ch10_way = "orchard"|, or the way Malcolm would have if he'd had more patience|}. The method. The donor. The limit. Ruth Carrow, who told them it was straining, and whom nobody listened to. Half the file sent to nowhere. And now two men in this city who died and came back, held up by ropes that run out of them to somewhere, and a third and a fourth who've gone missing, and a token on a set of keys that matches a diagram in a closed program's file.

@orrell:neutral He listens without interrupting. Not once. The knack gives me almost nothing: the deep pond, very still, and far down in it something heavy lying on the bottom, like a stone that's been there so long weed has grown over it.

@orrell:attentive When I've finished, he's quiet for a long moment. Then he restates the part of my argument he considers relevant, which is not all of it. "I closed a dangerous program," he says. "It had hurt a young warden very badly. It was going to hurt others. I kept the reasons quiet, and I divided the record, so that the method couldn't be casually picked up by someone who thought they knew better. And so that this house would survive long enough to do better than it had." He folds his hands on the desk. "I would do it again."

"Somebody's picked it up."

@orrell:guarded "So it appears." He doesn't flinch. "I don't know who. I want you to understand that. I don't know who is doing this, and I don't know where the other half of that file is." He looks at me. "I've spent seven years assuming it was destroyed."

And the knack, for what it's worth, agrees with him. The stone at the bottom of the pond is guilt, old and heavy. But there's no lie on top of it. He doesn't know.

*choice
  #Confront him: the concealment is why someone could pick this up again.
    *set orrell_known "confront"
    *set nerve +3
    "You hid it," I say. "You hid it so well that when someone picked it up again, nobody here recognised it. Nobody knew what they were looking at. Quentin's been walking around for ten weeks with a rope in his chest, and there's a man in this building who could have told us what it was on the first day, if you hadn't made sure nobody was allowed to talk about it."

    @orrell:neutral Orrell looks at me for a long, long time.

    @orrell:tired "Yes," he says at last. Just that. Not a defence. Not an apology. An acknowledgement, like a man signing for a parcel he'd rather not have. "That's a fair statement of the cost." He picks up the reading glasses, for the first time, and turns them over in his hands, and puts them down again. "It's noted."

    I don't know if it's a victory. I think it might be the only kind he gives.
  #Say nothing yet. Hold it. It may matter more later.
    *set orrell_known "hold"
    I don't say anything.

    I could. I've got a whole speech. But the knack's giving me the stone at the bottom of the pond, old and heavy and weeded over, and I have a feeling, a strong one, that this is a card I'll need later, and that if I play it now, on a Sunday morning in an office with no clutter, it'll just be a young man shouting at an old one.

    "Thank you for seeing me," I say.

    @orrell:attentive Orrell's eyebrows go up, very slightly. He's surprised. I think he was braced for the speech. "Thank you for coming," he says, and I think he means it, and I think he also knows exactly what I've just done, and files it, the way I do.
  *if fr_florian >= 1
    #Go to Florian instead: make sure the archive keeps what's left, on the record.
      *set orrell_known "florian"
      *set fr_florian +1
      I don't argue with Orrell. I thank him for his time, and go downstairs, and down the stone steps to the pathology wing, and knock on the archive door.

      @florian:attentive Florian lets me in. He listens. He takes his glasses off, which I now know means something.

      "What's left of that file," I say. "Can you make sure it stays? On the record. Copied. Indexed. So it can't be transferred to nowhere again."

      @florian:warm "Known," says Florian Adebayo, slowly putting his gloves on. "I can do that. I can do it today." He looks at me over his glasses. "Inferred: the commander won't like it. And inferred: he won't stop me." He takes the box down from the shelf. "An archive exists precisely so that nobody gets to decide alone what the past was."
*comment ---------------------------------------------------------------- CH10.TRAIN.01
*sid CH10.TRAIN.01
*date 2026-11-08 16:00
*place P01 mercy_house
*mood dusk
Four o'clock, and the dark coming down, and I'm sitting on the front steps of Mercy House under the stopped clock with my hands in my pockets, not ready to go home.

The knack has a name now.

[i]Sensitive.[/i] It has a history. It had a woman called Ruth Carrow, who drank her tea black and cold and watched threads between people go thin and told everyone, and nobody listened, and who was very tired, always. It has notes, in a box on the fourth shelf, on how she kept from drowning.

And it has people who might teach me.
*if ch10_way = "orchard"
  @malcolm:guarded Malcolm said it gruffly, at the car window, as Reuben was starting the engine: "If you want teaching, come up at weekends. The roof needs fixing. You can hold a ladder and I'll tell you what she told me." And then he banged the car roof twice, like a man sending off a horse, and went back inside before I could answer.
*else
  Malcolm Tait sent word, by Reuben, this morning: a note in a big square hand on the back of a seed packet. [i]If the lad wants teaching, send him up at weekends. The roof needs fixing. He can hold a ladder and I'll tell him what she told me. M.T.[/i]
*if fr_florian >= 1
  And Florian's offer is there too, waiting on the fourth shelf: Ruth Carrow's own notes, in her own quick slanted hand, lent to me, carefully, if I sign for them.
Or I can keep doing what I've always done with things I don't want to look at. Put the ear defenders on. Turn it down. Get on with it on my own.

*choice
  #Take Malcolm up on it. Weekends at Orchard House, fixing the roof and learning to listen.
    *set trained "malcolm"
    *set knack +5
    *set fr_malcolm +1
    I text Reuben: [i]Tell Malcolm yes. I'll hold the ladder.[/i]

    He replies with a photo, twenty minutes later, forwarded from Malcolm's ancient phone: the orchard in the dusk, and the old gate, and Bess sitting in front of it with her head on one side. No words. I think it might be the most Malcolm thing possible.

    So I go up on Saturdays, for the rest of November, on the first bus out to the ridge and a walk up the track. I hold the ladder. Malcolm fixes about a quarter of the roof, badly, and complains about Percival the whole time, and in between, sitting on the ridge of the roof with a flask, he tells me what Ruth Carrow told him about how to listen. How to let the weather come and not be the weather. How to follow a thread without being pulled along it. How to turn it down without turning it off.

    It's slow. I'm not good at it. But up on the roof, with the orchard below and the huge pale sky, for the first time in eleven years the knack feels less like something happening to me and more like something I can do.
  *if fr_florian >= 1
    #Borrow Ruth Carrow's notes and teach myself from them, carefully.
      *set trained "florian"
      *set knack +5
      *set fr_florian +1
      I go back down to the archive and sign for them. Florian makes me sign three times, in three places, in ink, and then hands me the box as if it's a sleeping animal.

      They're extraordinary. Forty pages in Ruth Carrow's small, quick, slanted hand, written over years, crossed out and written over, with dates in the margins and coffee rings on every sheet. Not a manual. More like a diary kept by someone learning to swim in a flood. [i]Don't fight the weather. Let it come through. Be the window, not the room.[/i] [i]A thread is not a rope until you pull on it.[/i] [i]Tired is information. Listen to tired.[/i]

      I read them every night for the rest of November, in bed, with the light on, carefully, one page at a time, the way you'd take medicine. I try the exercises in the margins. Most of them I can't do. Some of them I can. And somewhere in the second week I realise that the voice in my head reading them out isn't mine. It's hers: tired, and dry, and kind. It's like having someone in the room who knows.
  #Teach myself. Alone. Like everything else.
    *set trained "self"
    *set knack +3
    I don't take anyone up on anything.

    I've done this on my own for eleven years. I know how it works. I know the ear defenders, and the running, and the dial I found in September that turns it down but not off. I'll work the rest out the same way. On my own, in my room, with the door shut, the way I do everything.

    It works, a bit. I get better at the dial. I get better at following a thread and letting go of it again. And I don't have to explain it to anybody, or sign for it, or climb a roof. It's mine.

    It's lonely, too. But I'm used to that. That's mine as well.
  #No. I don't want to be better at this. I want it smaller.
    *set trained "refused"
    No.

    I sit on the steps of Mercy House and I think about Ruth Carrow, tired always, who could feel everything in that building all day every day, who told them it was straining and nobody listened, who left.

    I don't want to be better at this. I don't want to be a sensitive with a file on the fourth shelf. I want it smaller. I want to be a lighting tech who's good with his hands and a bit odd in crowds. I want the ear defenders to work.

    I go home. I put them on. It doesn't get smaller. But I don't go looking for it either, and for a while, that feels like a kind of peace.

*journal [b]Chapter 10.[/b] Seven years ago Mercy House ran an emergency method that kept the dying alive on a living donor's vitality, through a prepared link and a token. The donor, Kit Maddox, was hurt when it strained; the link had to be made within forty-eight hours of death; and the monitor, Ruth Carrow, was a [i]sensitive[/i], like me.{@ch10_way = "records"| Half the file was transferred to nowhere. The staff list names a junior ritual physician, D. Holt.| Malcolm Tait was there. Reuben told me about the instructor who changed his life and then vanished: Damian Holt.} Commander Orrell closed the program and hid the record so it couldn't be tried again. He doesn't know who's doing it now.
*page_break
*goto_scene ch11
`);
