NB.scene("ch08", String.raw`
*mood day
*set ch 8
*chapter 8 The Second Return
*comment ---------------------------------------------------------------- CH08.NEWS.01
*sid CH08.NEWS.01
*date 2026-10-15 06:30
*place P09 lyles_bakery
*present otis silas reuben ilyas
*set strain 0
{@shop_hours|Thursday is one of my shop mornings now, so it's me|Martin's back has gone, the way it does every October, so it's me} who carries Otis Lyle's new price boards down to Eastbank at half six, in the dark, two under each arm, with the paint still smelling faintly of the press.

Lyle's Bakery is on the corner of Kiln Street, and it's been there longer than anyone can remember: a bow window full of loaves, a bell over the door, and a smell that comes out onto the pavement and gets hold of you by the collar. Butter and burnt sugar and yeast. At this hour the shop's still shut, but the back door's open onto the yard, and the ovens are going, and there's light and heat and the radio.
*meet otis
@otis:warm Otis Lyle meets me in the yard in his apron: sixty-odd, round-faced, white-haired, with flour worked into every crease of his hands and forearms like a boxer's. "The boards!" he says, as if I've brought him a newborn. "Look at them. Look at that lettering. Your uncle's a genius and he charges like an idiot. Tell him I said so."

"He knows."

@otis:amused "He doesn't [i]listen[/i]." He takes the boards and props them against the wall to admire them. "Come in, come in. There's a cheese twist with your name on it. Burnt one. Best kind."

I follow him in through the back, into the heat, and the knack goes off like a struck bell.
*meet silas
There's a young man at the ovens. Twenty-three, maybe, soft-featured and pale, with light brown hair tucked up under a baker's cap and a peel in his hands, sliding loaves out onto the racks. He looks up when I come in: watchful eyes, polite, careful.

And running out of the middle of his chest is a rope.

Not Quentin's. His own. Taut, and humming, and cold, going out through the back wall of the bakery and away across the city. I don't have to turn round to know which way. North-east. Towards the river. The same way as Quentin's, exactly, like two lines on a map converging on a point off the edge of the page.

I have to put my hand on the doorframe.

@silas:guarded "You all right?" he says. His voice is quiet. There's something slightly slow about it, like a record at the wrong speed.

"Heat," I say. "Sorry. Early."

@silas:neutral "You get used to it." He goes back to the loaves. He moves carefully, like a man walking on ice, and when he reaches for the next tray his hand hesitates over it for a second, as if he's forgotten what it's for, and then remembers.

@otis:tense Otis sees me watching him, and draws me out into the front of the shop, among the empty shelves, and lowers his voice. "Silas," he says. "My apprentice. Four years. Best hands I've ever trained." He wipes his own on his apron. "He was off two days this week. Monday and Tuesday. Some paid course, he said. Good money. Then he comes back on Wednesday and he's..." He stops. "He's wrong. Cold. Quiet. He forgot how to fold a croissant. He's folded ten thousand croissants. He stood there with the dough and looked at it like it was in a foreign language."

The rope hums in the room behind us. I can feel it through the wall.

@otis:scared "Is he ill?" Otis asks me, as if I'd know. As if I'd have any reason to know. "You've got a face on you like you know something. Is he ill?"

I know exactly what I'm looking at. I've been looking at it for six weeks, every time I go into Double Shift. A man who died, and came back, and is being held up from outside.

A second one. It isn't a one-off. Somebody's doing it again.

*choice
  #Stay. Talk to Silas after the morning rush, with Otis there.
    *set ch08_way "bakery"
    "Can I come back?" I say. "This afternoon, after you close. I'd like to talk to him. With you there."

    @otis:attentive Otis looks at me for a long moment. Then he nods, slowly. "Three o'clock," he says. "The table's at the back. I'll make tea." He hands me a burnt cheese twist in a paper bag, as if we've agreed a price.
    *goto bakery
  *if st_reuben >= 2
    #Get him measured. Call Reuben: something on paper before anyone argues.
      *set ch08_way "hospital"
      I go out into the yard and ring Reuben. He answers on the second ring, at twenty to seven in the morning, which tells me something about warden sleep patterns.

      "It's happened again," I say. "There's another one. A baker. He's got a rope."

      @reuben:tense There's a silence. Then: "Where are you?" And then, when I've told him: "Don't frighten him. Ask him if he'll come in to the General tonight after his shift. Tell him it's a check-up. Tell him it's free. Tell him the truth if he asks." A pause. "Are you all right?"

      "I'm fine."

      @reuben:warm "You're not," he says, not unkindly. "But you're there. Ten o'clock tonight. I'll get Ilyas."

      Then I go back in and ask Silas, gently, if he'd let someone check him over. For free. After his shift. He looks at me for a long time, frightened and polite, and then at Otis, who nods, and then he says yes.
      *goto hospital
  *if st_reuben < 2
    #Get him measured. Call the hospital lab.
      *set ch08_way "hospital"
      I go out into the yard and ring Calder General, and ask for the lab, and explain to a very patient receptionist that I've got a friend who's cold all the time, with a heart that doesn't sound right, who won't see a doctor, and I need someone who'll look without opening a file. I wait eleven minutes on hold listening to a panpipe version of something I nearly recognise.

      @ilyas:tense The voice that finally answers is clipped and tired. "Qureshi. Lab. Who is this?" Click. I can hear a pen. I tell him what I can: the cold, the forgetting, a pulse that's too slow. The silence goes on for so long I think we've been cut off. Then: "Bring him in tonight. Ten o'clock. I'll get someone from Mercy House to sit in; they deal with the odd ones." Click. "And I'll want to know how you knew to ring a lab and not a doctor. Afterwards. When I've got numbers."

      Then I go back in and ask Silas, gently, if he'd let someone check him over. For free. After his shift. He looks at me for a long time, frightened and polite, and then at Otis, who nods, and then he says yes.
      *goto hospital

*comment ---------------------------------------------------------------- CH08.BAKERY.01
*label bakery
*sid CH08.BAKERY.01
*date 2026-10-15 15:00
*place P09 lyles_bakery
*present otis silas micah
*set fr_otis 1
*set fr_silas 1
At three o'clock the shelves are empty, the blinds are down, and the long table in the back room has a teapot on it the size of a small dog.

@micah:warm And Micah's here.

He's on his back on the floor with his head inside the proving cabinet, a torch in his teeth, and when he hears the bell he slides out and grins up at me, upside down.
*if know_micah_wolf
  "Small city," I say.

  @micah:warm "Or you're following me," he says, and there's a look between us, quick, that's got the allotments in it, and the moon, and the bench he built. Then he pulls out the chair next to him at the table with his foot, without getting up, without looking, as if I was always going to sit there.
*elseif b_micah_seat
  @micah:amused "You again," he says. "Is this a thing now? Are you following me round the city?" And he pulls out the chair next to him at the table with his foot, without getting up, without looking, as if I was always going to sit there.
*else
  @micah:amused "The lad with the lights," he says. "Look at you, out in the daytime." And he pulls out the chair next to him at the table with his foot, without getting up, without looking, as if I was always going to sit there.
*set b_micah_seat true
*set st_micah 2
@micah:tired "I fixed this last month," he tells Otis, waving the torch at the cabinet. "It's broken the exact same way. Somebody's been leaning on the thermostat."

@otis:guarded "Nobody's been leaning on anything," says Otis, who has clearly been leaning on the thermostat.

Silas sits at the end of the table with his hands round a mug of tea he isn't drinking, the way you'd hold something to keep it from getting away. Up close, in the daylight through the blinds, he's grey under the pale, and his fingertips on the mug are white.

@silas:guarded "Otis says you wanted to talk to me," he says. Polite. Careful. The knack gives me him, and it's a small room with the door shut and someone leaning on it from the inside.

"How are you feeling?"

@silas:neutral "Fine. Bit of flu. I had a bad weekend." He smiles. It's a nice smile and there's nothing behind it. "I'm fine now. I just need to get back into it."

It isn't true. But the knack doesn't give me a lie. It gives me fear, huge and cold and very quiet, pressed flat under the polite smile like a hand over a mouth. He isn't lying to deceive me. He's lying because if he says it out loud it becomes real, and if it's real he loses his job, and his room above the bakery, and the only life he's got.

@otis:hurt Otis puts a folded bundle of papers on the table, and doesn't look at Silas while he does it. "Found these in the bin," he says, gruffly. "Out back. I wasn't snooping. I was looking for a receipt."

Letters. Good paper, a clinic's letterhead with no address on it, only a phone number. I can read the top one upside down. [i]We are delighted to confirm your place on our supervised paid trial.[/i] A sum that makes me blink. A paragraph in smaller type about confidentiality.

@silas:hurt Silas goes white to the lips.

*choice
  #Don't push. Tell Silas he isn't the only one, and let him decide.
    *set fr_silas +1
    *set e09 true
    *set e09_src "silas"
    *set silas_trusts true
    I push the letters back across the table to Silas, unread, and leave my hand on them.

    "They're yours," I say. "You don't have to show anyone. But I need to tell you something first, and then you can decide."

    @silas:guarded He looks at me, wary.

    "You're not the only one," I say. "There's someone else it happened to. In August. He's cold all the time. He forgets things. He's fine, mostly, and he's frightened, and he's alive, and he's still himself. He'd want you to know that." I don't say Quentin's name. It isn't mine to say. "You're not going mad. And you're not on your own."

    @silas:sad The small room with the door shut. I feel him lean on the door a moment longer. And then I feel him stop leaning.

    @silas:sad "I died," he says. Very quietly. To the teapot. "Didn't I."

    Otis makes a sound I've never heard a man make.

    @silas:tense And then Silas unfolds the letters himself, and turns them round, and pushes them to the middle of the table where we can all see them. "It was a sleep study," he says. "That's what they said. Two nights, good money. A car picked me up on Monday. Tinted windows. They said it was for privacy." His hands are shaking. "There was a clean room. A nice man. I went to sleep. And I woke up on Wednesday afternoon in my own bed, dressed, with my shoes on, and a note on the kitchen table: [i]Thank you for your participation. Your payment has been made. Please attend your follow-up.[/i]"

    @micah:tense Micah, very quietly, has put down his torch.
  #Ask Otis for the letters, with Silas in the room.
    *set e09 true
    *set e09_src "otis"
    *set fr_silas -1
    "Can I see them?" I say to Otis.

    @otis:guarded Otis looks at Silas. Silas says nothing. Otis pushes them across.

    I read them. I read every one, while Silas sits at the end of the table and looks at the blind. A [i]supervised paid trial[/i]. A sleep study, two nights. A car will collect you from your home address. A sum that makes me blink. A confidentiality clause, three paragraphs long, in the kind of language that's written to make you frightened of a lawyer you'll never meet. A clinic's letterhead with no address on it, only a phone number. And, on the last one, dated Wednesday: [i]Thank you for your participation. Your payment has been made. Please attend your follow-up.[/i]

    @silas:hurt "They're private," Silas says, at last. Not angry. Tired. "They were in the bin. That's where I put them. That's where I wanted them."

    "I'm sorry. I needed to see."

    @silas:guarded "Yeah," he says, and gets up, and goes back to the ovens, though there's nothing in them, and stands with his back to us. The knack gives me the small room with the door shut, and the door locked now, and the key turned twice.

    @micah:tense Micah, very quietly, has put down his torch.
  #Protect him first: ask Reuben to keep an eye on the bakery.
    *set silas_protected true
    *set fr_otis +1
    I don't touch the letters. I look at Otis.

    "Whoever sent those knows where he lives," I say. "They sent a car to his door. They're going to want their follow-up." I take out my phone. "I know someone. A medic. Mercy House. They look after people who... they look after people. Can I ask him to keep an eye on this place? Just for a while. Just in case."

    @otis:tense Otis's big floury hands close on the edge of the table. "Mercy House," he says. He knows the name. Of course he does: he's run a bakery in Eastbank for forty years. "Yes. Do it. Do it now."

    I ring Reuben, and he says yes before I've finished the sentence.

    @silas:small Silas watches all of it from the end of the table, holding his tea. He doesn't say anything. But the small room with the door shut: I feel something set down against the outside of the door. Not forcing it. Just there. Leaning back.

    @micah:tense Micah, very quietly, has put down his torch.
@micah:tense "Paid trials," he says afterwards, out in the yard, with the bakery's back door shut behind us. He's got his hands jammed in his work jacket. "There's lads in Eastbank do those. For the rent. You get your blood taken, you sleep in a lab, they pay you." He looks at me. "That's not what that was, is it."

"No."

He doesn't ask me how I know. He just looks at the back door of the bakery for a long time, and the knack gives me the deep patient animal thing in him, and something rising up in it like hackles.

*goto silas2

*comment ---------------------------------------------------------------- CH08.HOSPITAL.01
*label hospital
*sid CH08.HOSPITAL.01
*date 2026-10-15 22:00
*place P23 calder_general
*present reuben ilyas rafi nabil silas
*mood night
*set e05 true
*set e05_c true
*set repeated true
Calder General at ten on a Thursday night: the long blue corridors, the vending machine glowing like an aquarium, the squeak of a trolley wheel somewhere out of sight.

Silas comes straight from the bakery, still smelling of bread, in a coat too light for the weather, and walks beside me from the bus stop like a man walking to a dentist.
*meet nabil
*if fr_nabil >= 1
  @nabil:amused At the front desk, Nabil looks up from his screen at me, and then at Silas, and then, with enormous weariness, at the clock. "You," he says. "Again." He doesn't ask for a name. He doesn't open a file. He buzzes us through and says, to Silas, quite gently, "Nobody's writing anything down tonight. You were never here and I was on my break."
*else
  @nabil:amused At the front desk, a round-faced young man with glasses and a neat beard along his jaw looks up from his screen at us, and at the clock, and at Silas's face, and seems to make a decision. Nabil, says his lanyard. "Lab?" he says. "Reuben's already up there." He doesn't ask for a name. He doesn't open a file. He buzzes us through and says, to Silas, quite gently, "Nobody's writing anything down tonight. You were never here and I was on my break."
*meet rafi
*if fr_rafi >= 1
  @rafi:warm Rafi's waiting outside the lab in his scrubs, bouncing on his heels. When he sees Silas's hands, the bounce stops. He takes one of them in both of his, and his are cool, and Silas's are colder, and something passes over Rafi's quick face that I've never seen there. "Hi," he says. "I'm Rafi. I'm a nurse. You're all right. We've got you."
*else
  @rafi:warm Outside the lab there's a nurse in scrubs under a parka, bouncing on his heels: a quick, mobile face, curly black hair. When he sees Silas's hands, the bounce stops. He takes one of them in both of his, and his are cool, cooler than the corridor, and Silas's are colder. "Hi," he says. "I'm Rafi. I'm a nurse. You're all right. We've got you."
@reuben:warm Reuben's there, by the wall, in his warden jacket, looking as if he hasn't slept since September.{@st_reuben >= 2| He gives me a nod that says [i]good call[/i] and doesn't say it.| He looks at me with open curiosity, the medic from Mercy House, as if he's trying to work out what I am.} "Silas," he says. "I'm Reuben. I'm going to stand over here and not be in the way."
*meet ilyas
*if fr_ilyas >= 1
  And Ilyas Qureshi, in his white coat, with every machine in the lab humming and his pen already clicking.
*elseif st_reuben >= 2
  And in the lab, with every machine humming, a thin, intense man in a white coat with a neat black beard and a pen he clicks while he thinks. Ilyas Qureshi.

  @reuben:amused "Best lab scientist in the building," Reuben says. "Also the only one who'd do this after hours without asking why."
*else
  And in the lab, with every machine humming, a thin, intense man in a white coat with a neat black beard and a pen he clicks while he thinks. Ilyas Qureshi. The voice from the phone this morning.
@ilyas:attentive "Silas," he says. "I'm going to tell you what I'm doing before I do it, and you can say no to any of it. All right?"

@silas:small "All right."
*set fr_silas 1
*set fr_ilyas +1

It takes two hours. Bloods, an ECG, things with wires, the blood-pressure cuff three times. Silas sits very still and answers every question politely, and I stand by the wall next to Reuben and feel the rope running out of him, humming, cold, taut as a bowstring.

*if fr_ilyas >= 2
  @ilyas:angry And Ilyas, at the end, puts his pen down on the bench. Doesn't click it. Puts it down. "Same," he says. "The same impossible thing. The same as Quentin, almost to the decimal. A heart rate of forty. A temperature that isn't a real number. Every sign of a body that's being [i]supplied[/i], from somewhere that isn't itself." He looks at the printout as if it's personally offended him. "It isn't a one-off. It's a method. Somebody knows how to do this, and they've done it twice."
*else
  @ilyas:angry And Ilyas, at the end, puts his pen down on the bench. Doesn't click it. Puts it down. "A heart rate of forty," he says. "A temperature that isn't a real number. Every sign of a body that's being [i]supplied[/i], from somewhere that isn't itself." He looks at the printout as if it's personally offended him. "I've never seen anything like it."

  @reuben:tense "I have," says Reuben, from the wall. "Once. In September. A barista called Quentin." He doesn't look away from Silas. "Same cold hands."

  @ilyas:angry Ilyas stares at him. Then at the printout. "Then it isn't a one-off," he says. "It's a method. Somebody knows how to do this, and they've done it twice."

@silas:sad Silas looks at the printout too, upside down, as if it's about someone else.

@silas:small "Is that bad?" he asks.

@rafi:warm Rafi, very gently, sits down beside him.

*choice
  *if not(b_reuben_explain)
    #Explain to Reuben what I see: the rope, the second one.
      *set b_reuben_explain true
      *set gift_reuben true
      *set st_reuben 3
      While Rafi's sitting with Silas, I go and stand by Reuben at the wall, and I tell him.

      Not the edited version. All of it. That I feel what people feel. That I felt Quentin die in the lane, and felt something catch him. That there's a rope, running out of the middle of Quentin's chest, north-east, and now there's a second one, running out of Silas's, the same way, so exactly the same way that if you drew them on a map they'd meet.

      @reuben:attentive Reuben listens with his arms folded and his head down and doesn't interrupt once. The knack gives me him the way it always does: warm, like a radiator on low, a steady heat you don't notice until you step away from it. It doesn't go cold. It doesn't flinch.

      @reuben:attentive "The same way," he says, when I've finished. "Both of them."

      "Both of them."

      @reuben:tense He's quiet for a while. Then he says, "Can you show me?" And I take his wrist, the way you'd take someone's hand to show them a step, and point it, along the rope, north-east, through the wall of the lab and the car park and the whole sleeping city. He looks where I'm pointing for a long time.

      @reuben:warm "I believe you," he says. Carefully. Like a man setting down something heavy he's going to have to pick up again. "I don't know what that makes you. But I believe you." And then, quieter: "Thank you for telling me."
  #Ask Silas, gently, where the trial was held.
    *set e09 true
    *set e09_src "silas"
    *set fr_silas +1
    When Ilyas has gone to run the bloods, I pull a plastic chair over and sit in front of Silas, low, so he doesn't have to look up at me.

    "The course you were on," I say. "Otis said a paid course. Can you tell me about it?"

    @silas:guarded He looks at Rafi. Rafi nods.

    @silas:tense "It wasn't a course," Silas says. "It was a trial. A sleep study. Two nights, good money. I saw a card up in the launderette." He swallows. "I've still got the letters. I threw them in the bin, and then I got them out again. A car picked me up on Monday. Tinted windows. They said it was for privacy. I don't know where we went. Forty minutes. Trees. A gravel drive." He's shaking, very slightly, all over. "A clean room. A nice man. I went to sleep. And I woke up on Wednesday afternoon in my own bed, dressed, with my shoes on, and a note on the kitchen table: [i]Thank you for your participation. Your payment has been made. Please attend your follow-up.[/i]"

    @silas:scared He looks at me. "I died," he says. "Didn't I."

    Nobody in the room says anything. Rafi puts his cool hand on the back of Silas's neck, and leaves it there.
*goto silas2

*comment ---------------------------------------------------------------- CH08.SILAS.02
*label silas2
*sid CH08.SILAS.02
*date 2026-10-16 19:30
*place P18
*present quentin silas
*mood neon
Friday night, the Truss Road Diner. The jukebox is playing something from before I was born. Two lads from the depot are arguing about football over a shared plate of chips in the next booth. And in the corner booth, with his back to the wall, Quentin Shaw is waiting for us with three teas already ordered, one of them going cold on purpose, for himself.

@quentin:tense It was his idea. When I told him{@ch08_way = "hospital"|, the morning after the lab|}, he went quiet on the phone for a long time and then said, [i]I want to meet him. Me. Not you doing it for me.[/i]

Silas slides into the booth opposite him and sits very straight.

They look at each other. Two men who died and are pretending to be fine. I can feel both ropes in the booth, running out of both of them, humming, parallel, like two cables in the same conduit, going the same way. Quentin's hands are round his mug. So are Silas's. Neither of them is drinking.

@quentin:attentive "Cold?" Quentin says.

@silas:small "All the time."

@quentin:amused "Yeah." Quentin nods. "Hot-water bottle. In your jumper. Down the front. Looks stupid. Works." He slides a packet of hand warmers across the table, the kind you snap. "Also these. Don't tell anyone I'm nice."

@silas:surprised Silas looks at the hand warmers. Then at Quentin.

And Quentin doesn't wait for me. He doesn't look at me, even, to check. He just tells him: in the flat, practical, slightly-too-cheerful way he says everything important. The lane. The man. The thing on his keys getting hot. Being switched off at the wall. Waking up in a clean room with a drip in his arm, and a nice man telling him he'd been lucky and should keep quiet for his own safety. The cold. The forgetting. The feeling, some nights, of being tied to something a very long way off.

@quentin:sad "They said I was lucky," he says. "I don't feel lucky. I feel like I'm being run off someone else's battery. And I don't know whose." He looks at Silas. "That's the bit that keeps me up. It's not me. It's whoever's on the other end."

Silas cries, once, briefly, into a paper napkin, very neatly, like a man sneezing, and then folds the napkin and puts it in his pocket.

@silas:tense "What do we do now?" he asks.

*choice
  *if st_quentin >= 3
    #Let Quentin lead. He's better at this than me.
      *set b_quentin_acts true
      *set st_quentin 4
      I open my mouth. And then I shut it again, and sit back against the vinyl, and let Quentin answer.

      @quentin:attentive He does. He's good at it. Better than me. He tells Silas which of the wardens to trust and which of them to put up with. He tells him to keep working, because the ovens are warm and the routine helps. He tells him to eat even when he isn't hungry, and to write things down, because the forgetting is worse if you don't. He tells him about Ilyas and his pen. He gives him his number and makes him put it in his phone, there and then, under [i]Q (also dead)[/i].

      @silas:amused Silas laughs. It's startled out of him, a real laugh, and he looks shocked at himself.

      @quentin:warm "There you go," says Quentin. "That's the first one. It gets easier."

      @quentin:warm On the way out, Quentin holds the door for Silas, and then for me, and as I pass him he says, very low, not looking at me: "Thanks. For not doing it for me." And the steady thing under his jokes, the floor, is the steadiest I've ever felt it.
  #Make a plan with both of them: nobody goes to a "follow-up" alone.
    *set buddy_plan true
    "The follow-up," I say.

    They both look at me.

    "Silas's letter said [i]please attend your follow-up[/i]. Whoever did this is going to want to see you again. Both of you. When they ask, and they will ask, nobody goes alone. Nobody gets in a car with tinted windows. You ring each other. You ring me. You ring Reuben. And then we decide together whether anyone goes at all."

    @quentin:attentive Quentin looks at me for a long moment. Then he nods, once, and holds his hand out across the table to Silas, palm up, like the start of an arm-wrestle.

    @quentin:amused "Deal?" he says.

    @silas:small Silas looks at the hand. Then he puts his own in it. Two cold hands, gripping, in the booth, under the bad strip lights. "Deal," he says.

    I put mine on top, like we're eleven and about to go into battle. It's stupid. Quentin laughs at me. But nobody takes their hand away.
*page_break

*comment ---------------------------------------------------------------- CH08.HUGO.01
*sid CH08.HUGO.01
*date 2026-10-17 11:00
*place P27
*present owen pavel peter gareth
*mood day
*set hugo_missing true
*if ch07_evening = "serrano"
  Micah rings me at nine on Saturday morning. [i]Pavel's lad. Hugo. From the dinner, with the wrench.[/i] Nobody's seen him since Monday.
*elseif ch07_evening = "nolan"
  Nolan rings me at nine on Saturday morning, in a voice I haven't heard him use before. [i]Hugo. From the party. The hinge guy.[/i] Nobody's seen him since Monday.
*else
  Nolan rings me at nine on Saturday morning. Owen's organising a search at the depot, for a mechanic called Hugo who hasn't been seen since Monday. [i]Hugo.[/i] The man on the night bus down the Hill, with the sausage roll, waving from the doors.

The Night Bus Depot on a Saturday morning in daylight is a different place: the big shed's doors rolled up, half the buses out, grey light on the oil-stained concrete, and in the canteen, twenty people round the tables with flasks and maps and a stack of photocopied photos.
*meet owen
*if fr_owen >= 1
  @owen:tired Owen's running it. He's got a list on a clipboard and a face like he hasn't slept since Tuesday. He sees me and nods, once. "Thanks for coming."
*else
  @owen:tired A driver's running it: a long, patient face, short twists, a union pin on his fleece, a list on a clipboard, and the look of someone who hasn't slept since Tuesday. Owen Price, he says, shaking my hand; he lives with Nolan, it turns out, the flatmate who works nights. "Thanks for coming. Everyone's got a zone."
@owen:tense "He clocked off at six on Monday morning," Owen says. "The early shift. Said bye to the lads on the gate. Walked out. And that's it. He didn't go home. He didn't turn up for his interview on Monday afternoon." His jaw works. "His interview. The permanent post. He'd been talking about it for [i]weeks[/i]. He had a tie. He showed everyone the tie."

I think about the hinge on the forty-two. The locker with his name on it instead of [i]AGENCY 3[/i]. [i]Monday week. Wish me luck.[/i]
*meet pavel
*if fr_pavel >= 1
  @pavel:tense Pavel Kolar's at the next table, not searching, not talking, checking his phone. Checking it again. Putting it face down. Picking it up. He was the one who put a word in for Hugo here. The knack gives me him, few words and a great deal he isn't saying, and all of it gone cold and still, like water before it freezes.
*else
  @pavel:tense At the next table there's a mechanic in overalls, a long face, a short brown beard, not searching, not talking, checking his phone. Checking it again. Putting it face down. Picking it up. Pavel Kolar, Owen tells me, low: the one who put a word in for Hugo here. The knack gives me him, few words and a great deal he isn't saying, and all of it gone cold and still, like water before it freezes.

@pavel:guarded "He always answers," Pavel says, to nobody. "Always. Two rings."

@peter:hurt And Peter's here, of all people, in his Double Shift lanyard on a Saturday, holding a stack of photocopies and looking as if he's going to be sick.

@peter:hurt "He comes in every Monday," Peter says, when I go over. "Half six, after his shift. Bacon roll, flat white, no sugar. Every Monday for two years." He looks at the photocopies. Hugo's broad, friendly face, grinning, in his hi-vis. "He didn't come in. I noticed. I noticed at quarter to seven, and I thought, [i]people don't come in[/i]." His voice goes tight. "That's what I said about the courier. Six weeks ago. The one with the Friday croissant. [i]Loads of people don't come in on a Friday.[/i] I said that. To that man in the collar."

"Peter..."

@peter:hurt "Two of my regulars," Peter says. "Two. And I just [i]noticed[/i]." He straightens the stack of photocopies, very precisely, square to the table edge. "There's a standard. You're supposed to [i]do[/i] something."

Hugo's hi-vis jacket is still on its hook in the canteen, by the door. Nobody's touched it. Everybody walks round it, carefully, the way you'd walk round someone asleep.

*choice
  #Touch the jacket. Reach.
    *set reached +1
    *set strain +1
    *set knack +2
    *set same_voice2 true
    When nobody's looking, I go over to the hook and put my hand flat on the jacket.

    And reach.

    It comes up slowly at first: the ordinary stuff, the top layer, the way it always does. Engine oil. Cold mornings. The warmth of a big cheerful body inside it, a thousand shifts, laughing. The pride of a hinge put on the right way up. A tie, in a paper bag, carried in the inside pocket for luck.

    Then Monday.

    Cold. The gate at six, the dark, the lads saying bye. A voice from a car, pulling up alongside, the window down. Friendly. [i]Hugo? Hugo Naranjo? Congratulations. We've been told to bring you to your interview. Early. Hop in.[/i] The warmth of him, surprised, pleased, stupid with hope. The door of a van, sliding. Something sharp in the arm. And then the cold again, much colder, and dark, and moving.

    And the voice. Calm. Patient. Kind, almost. The voice from the lane, on the night Quentin fell. [i]Sorry.[/i]{@same_voice| The voice from Eamon's gloves.|}

    I take my hand off. The canteen tilts. Somebody's saying my name. I sit down on the nearest bench before I fall down, and there's a headache blooming behind my eyes like ink in water, and Owen's handing me a paper cup of water from the urn and asking if I'm all right, and I say I'm fine, I'm fine, it's the cold.

    It isn't the cold. It's the same man. Whoever took Hugo is whoever killed Quentin. I know it the way I know my own name. And I can't prove a word of it to anyone.
  *if fr_gareth >= 1
    #Call Gareth Moss. A missing adult is his whole job.
      *set told_gareth true
      *set fr_gareth +1
      *set gareth_hugo true
      I go out onto the forecourt and ring the number on the card Gareth Moss gave me, the one I keep in my wallet behind my bus pass.

      @gareth:attentive He picks up on the first ring. "Moss."

      "It's {name}. From the print shop. You collect patterns."

      @gareth:attentive "I do." I can hear him reach for the notebook, the soft-cornered one. "Go on."

      I tell him. A depot mechanic, twenty-eight, reliable, clocked off at six on Monday and didn't go home, didn't go to the interview he'd been talking about for weeks, didn't answer his phone, which he always answers in two rings. A second man, after the courier. The same side of the city. The same kind of man: somebody the city doesn't look at very hard.

      @gareth:tense There's a long silence. I can hear him writing.

      @gareth:tense "That's two," he says at last. "Two adults who stopped turning up to things, in seven weeks. Within a mile of the same depot." His pen stops. "I'll open a file. A proper one, with my name on it. And I'll come down there this afternoon myself." A pause. "Thank you for ringing. Most people don't."
  #Help Owen with the search posters. Martin will print them for free.
    *set fr_owen +1
    "The photocopies are going to fade in the rain," I say to Owen. "My uncle's got a print shop. Let me do you proper posters. Laminated. Two hundred. Tonight."

    @owen:tired Owen looks at me. "We can't pay for..."

    "He won't charge you. He never charges anyone. My mum says it's a character flaw."

    I ring Martin from the canteen. He says yes before I've finished the sentence, and asks what size, and whether we want the phone number in red.

    @owen:warm By six o'clock there are two hundred laminated posters of Hugo's grinning face going up on every lamp post from the depot to Southmere. [i]Have you seen Hugo? Last seen Monday 12 October, 6am, Night Bus Depot.[/i] Owen and I do Signal Road together, with a staple gun and a roll of tape, and he talks about Hugo the whole way. The hinge. The tie. The time Hugo fixed a bus door with a shoelace in the middle of a snowstorm and got every passenger home. "He's a good lad," Owen says, at every lamp post, as if the lamp post might argue. "He's just a good lad."
*page_break

*comment ---------------------------------------------------------------- CH08.END.01
*sid CH08.END.01
*date 2026-10-17 20:00
*place P02
*mood night
Saturday night, my room above the shop. I've got a sheet of Martin's proof paper on the floor and a marker pen, and I write it out, the way you'd draw a lighting plot, so I can see all of it at once.

Two men who died, and came back. Quentin, the thirtieth of August. Silas, the thirteenth of October.

Two men who went missing. Eamon Kerr, the twenty-eighth of August. Hugo Naranjo, the twelfth of October.

A day or two apart, both times. A man goes missing. A man dies, and comes back.

And a rope running out of each man who came back, to somewhere north-east, over the river, off the edge of the paper.

I look at it for a long time. The house ticks and settles around me. Downstairs, Martin's watching a quiz show with the sound too loud.
*if suspect_donor
  [i]What if it's Eamon?[/i] I said that to Ansel on the Riverside Steps, and neither of us wanted to say the next sentence. I say it now, to the floor. What if Quentin's rope runs to Eamon? And Silas's runs to Hugo?
*else
  I draw a line from Quentin to the edge of the paper. Then one from Silas. And I sit there with the marker in my hand and don't draw the next thing, because I don't want to see it written down.
Somebody's doing this on purpose. Carefully. Twice. And whoever took Hugo is out there right now, with a clean room and a nice voice and a car with tinted windows, and I'm sitting on my bedroom floor with a felt pen.

My phone goes. Then it goes again. The city doesn't stop for a pattern.

The first is from Owen, who got my number off Nolan: [i]weird one. the night crews have got a problem in the Northline service tunnels. people hearing things. someone's hurt. the wardens have been asked to look at it and Adrian Keene says he wants you there if you'll come. end of the month. no idea why they want a lighting tech but ok[/i]

The second is from Ellis, which is unusual in itself, because Ellis doesn't text. He sends postcards, or turns up. [i]My father has a painted screen in the workshop that is doing something it shouldn't. I would very much like your eyes on it. I don't ask for things. I'm asking. Halloween weekend, if you can. E.[/i]

Two doors, at the end of the month. I can't be in both.

*choice
  #The tunnels. Somebody's being lured into the dark and I can help find them.
    *set ch09_case "tunnels"
    I text back: [i]I'll come.[/i]

    Then I sit on the floor for a long time with the marker pen, looking at the line I didn't draw.
  #The screen. Ellis asked me, and he doesn't ask.
    *set ch09_case "screen"
    I text Ellis back: [i]I'll come.[/i]

    The reply comes in under a minute, which for Ellis is practically shouting: [i]Thank you.[/i] And then, after a pause, a second one: [i]Truly.[/i]

    Then I sit on the floor for a long time with the marker pen, looking at the line I didn't draw.

*journal [b]Chapter 8.[/b] Silas Fenwick, Otis Lyle's apprentice at Lyle's Bakery, died on 13 October during a "supervised paid trial" and came back, with a rope running the same way as Quentin's.{@ch08_way = "hospital"| Ilyas measured him: the same impossible supply. It's a method, not a one-off.|}{@e09| The trial letters promised a follow-up.|} Hugo Naranjo has been missing since he clocked off at the depot on Monday 12 October.{@same_voice2| His jacket held the calm voice from the lane.|}{@gareth_hugo| Gareth Moss has opened a file.|} Two men missing, two men returned, two days apart each time.
*page_break
*goto_scene ch09
`);
