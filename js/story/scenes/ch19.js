NB.scene("ch19", String.raw`
*mood thaw
*set ch 19
*chapter 19 The Offer
*comment ---------------------------------------------------------------- CH19.CARD.01
*sid CH19.CARD.01
*date 2027-03-03 09:00
*place P02 print_shop
*present martin
The thaw's first real day.

It comes overnight, all at once, the way it does here. I go to sleep in winter and wake up to water: dripping off the shop sign, running down the window, rushing in every gutter on Latch Lane like the street's been turned into a river. The snow on the roofs opposite has gone grey and soft and is sliding off in slabs. You can hear the real river from my bedroom, for the first time since December, loud and brown and full of itself.

@martin:attentive Martin brings the post up with my tea, which he never does. He puts the tea down. Then he puts the post down. Then he picks one envelope back up and holds it to the light.

It's cream. Heavy. Hand-addressed in fountain pen, to me, with my full name, spelled right.

@martin:surprised "Cotton rag," he says, turning it over in his inky fingers, the way another man might check a banknote. "Four hundred grams at least. Deckled edges, and that's done by hand, not a machine. Somebody's spent more on this envelope than I'd charge for a wedding." He gives it to me. "Friends in high places?"
*letter armand_card
*if gift_martin or family_case or vol_home or out_family
  @martin:tense He's reading my face while I read the card. He's got better at it this winter, since I started telling him things. "Is this part of it?" he says quietly. "The thing I don't ask about?"

  "Yes," I say.

  @martin:tense He nods. He doesn't ask. He goes back downstairs, and I hear him standing at the bottom of the stairs for a long time before the press starts up.
*else
  @martin:amused "Briar Heights," he says, reading it upside down, because he's shameless. "Very nice. Mind your elbows." And goes back downstairs, humming, to the press.

And then my phone goes. And goes again. And again.

Three texts in an hour. One from each of them.

[i]clinic says my follow up's moved. sat 13th. 11pm. theyre SENDING A CAR. since when do they send a car[/i] That's Quentin.

[i]Good morning. The clinic has written to say my appointment is now Saturday the 13th of March at 11 at night and that a car will collect me from the bakery. Is this normal? I don't mind. I only wondered. Silas[/i]

[i]13th, 11pm, car. all three of us, same night, same time?? thats not a follow up thats a pickup[/i] That's Felix, and Felix is right.
{@know_deadline|I don't need to look at the photographs from Winton Court. I've read them so often I can see them with my eyes shut. [i]14/3. Dawn. Consolidation. Transfer the night before.[/i]|All three of them. The same night, the same hour, a car for each. Nobody sends a car for a follow-up. You send a car when you need someone to be somewhere, on time, without asking where they're going.}

{@know_deadline|The night before is Saturday the thirteenth. Eleven o'clock. A car for each of them.|Saturday the thirteenth of March. Ten days.}
*set summoned true
*set know_deadline true
I write the date on the board on my wall, in red, in capitals, and circle it twice. Then I put the cream card next to it.

*choice
  #Go to Sorrell House. Hear what he wants.
    Whatever he wants, he wants it before the thirteenth. I'm going to go and find out what it is.

    I text back all three of them the same thing: [i]Don't get in any car. Not yet. I'll explain. I promise.[/i]
*comment ---------------------------------------------------------------- CH19.HOUSE.01
*sid CH19.HOUSE.01
*date 2027-03-06 19:00
*place P37 sorrell_house
*present armand
*mood night
Briar Heights is the hill the city looks up at: big houses behind high walls, gravel drives, trees older than the streets below them. I walk up. Armand was right. I don't want his car.

Sorrell House is the last house on the road, at the very top, with the whole city spread out below it like something spilled. It's beautiful. Tall windows, pale stone, a porch with columns. And it's diminished, the way a person can be: half the windows dark, the east wing shuttered, a fountain in the drive with no water in it and a drift of last autumn's leaves in the basin, going soft in the thaw.

A housekeeper opens the door, takes my coat, and walks me through rooms under dust sheets without saying a word. She's the kind of person who knows exactly which questions are unwelcome, and stopped asking any a long time ago. Up a wide staircase. Along a landing. Past one door, painted white like all the others, that's shut, and has been shut for years. The knack gives me the air behind it like the air in an empty church. She walks past it faster.

@armand:attentive Armand's in the library, by a fire, in a cardigan instead of the beautiful coat, with two glasses and a decanter on the table that he doesn't touch. He stands up when I come in. He looks at me the way he did at the Whitcomb, with his whole face, and I feel understood, and I know exactly what that's worth now.

@armand:neutral "Thank you for coming," he says. "August tells me you're the one who's been asking. So does Damian. Neither of them was pleased." He gestures to the chair across the fire. "I thought someone ought to answer you honestly. And then I thought it had better be me."

I sit down.

@armand:tired "I know about the men," he says, before I can say anything. "Eamon Kerr. Hugo Naranjo. Clive Merritt. I know their names." He looks into the fire. "August told me in January, when he couldn't avoid it any longer: that the support the young men are living on comes from somewhere. From someone." A pause. "And I kept paying. I want you to know that I know that. I've paid every month since."

The knack takes his grief like a hand on my throat.

At the Whitcomb it was careful, a full bowl carried across a room. It isn't careful now. It's got nowhere left to go. It's in every corner of the library, up to the ceiling, ten years of it, and under it, bright and hard and starving, the hope.

@armand:attentive "The fourteenth is ten years," he says. "To the day. Damian says the anniversary matters: that a death has a shape, and on the day itself the shape is thinnest. He's asked me for things of Octavian's. His climbing rope. The watch he was wearing. A lock of his hair that I kept, which I've never told anyone." His voice doesn't shake. That's the worst thing. "One attempt, at dawn. He'll gather what's been kept, all of it at once, at the hour my son died. He says the men will be weak afterwards. Very weak. That with care, they'll recover."

He leans forward.

@armand:attentive "Let him try. One morning. And afterwards, everything. I'll fund whatever it is you're building; August calls it a bridge. Every man freed, and looked after for the rest of his life, at my expense. And I'll go to anyone you choose and say what I did. The police. The wardens. The newspapers. Whoever you like." He spreads his hands. "One morning, for my son. That's all I'm asking you to allow."
{@e16|I've read the notes from the drawer at Winton Court. [i]The patients' deaths, when they come, planned to look like illness.[/i] Nobody's going to be weak afterwards. All three at once, at dawn, into a boy who's been dead ten years. Three men emptied. Three more on the other end of their ropes, with nothing left to hold them.|All of it at once. Everything that's been kept. The knack knows what a rope is; I've felt three of them, stretched thin, running out of three young men to three beds. I know what happens to a man on one end when you pull everything off the other. Nobody's going to be weak afterwards.}

*choice
  *if e07
    #Show him the old report: forty-eight hours, or nothing. It was never possible. August knew.
      I take the copy out of my coat. Florian's copy, from the archive, stamped and signed, the protocol from the old program with the margin note in capitals. I unfold it and put it on the table between the glasses, and turn it round so he can read it.

      [i]FORTY-EIGHT HOURS FROM DEATH OR NOTHING.[/i]

      "It's written twice," I say. "The people who invented this method wrote the limit down twice, in capitals, because they learned it the hard way. It was never possible. Not after three days on the ledge. Not after ten years. Not with every man in the city." I make myself keep looking at him. "Damian trained on that program. He knows the limit. {@e15_src = "caspar"|And August knows it. Caspar Neri saw his letters to you, in December, on his desk. Promising you there was no limit.|And August sold you the one thing he knew for certain couldn't be done.}"

      @armand:surprised He reads it. He reads it again. He picks it up, and holds it closer to the fire, as if the light's the problem.

      @armand:hurt And the hope goes out of him.

      I feel it go. It's the worst thing the knack has ever given me, worse than the lane, because in the lane it was over in a second and this goes on and on. The bright hard hungry thing, starved for ten years and fed on nothing but lies for the last one, and it just stops. Not all at once. Like a fire going down. What's left in the room is only the grief, and the grief is enormous, and it's honest, and it's his.

      @armand:hurt "A question of strength," he says. "That's what August said. That with enough, time didn't matter." He puts the paper down very carefully. "Enough. I've been paying for enough."

      He gets up. He goes to a desk by the window, a big one, with a green lamp, and unlocks a drawer, and comes back with a folder. Typed pages, a dozen of them, one for each month since last spring.

      @armand:tired "Damian's reports," he says. "To me. He writes as if I'm a client, which I suppose I am. I read the last line of each one, where it says [i]on schedule[/i]. I never read the rest." He holds them out. "Read the rest. Please. I find I can't."

      I read the rest. {@e16|It's the same plan as the notes in the drawer at Winton Court, typed up nicely for a paying customer.|It's all there.} The patients' dependence on their donors, deliberately prolonged: [i]maintain; do not wean.[/i] The donors' decline, managed to be predictable. And, in the last three, the deaths: the patients' deaths, afterwards, planned to look like illness, [i]so that no question arises[/i].

      Armand watches me read. He doesn't ask what it says. He knows.
      *set e15 true
      *set e15_src "report"
      *set armand_broken true
      *set e16 true
      *set e16_src "armand"
  *if e07 and (people >= 45)
    #Tell him {@ch12_branch = "gathering"|about Quarry Lake: what I felt at the cliff|what I felt in the lane in August, when a man died and something caught him}, and why no method brings back a boy after three days.
      I don't take out the report. Not yet. I tell him something instead.
      *if ch12_branch = "gathering"
        I tell him about Quarry Lake in November, under the full moon. The cliffs over the black water. A boy of nineteen, too frightened to know what he was, running for the edge in the dark, and me following his fear up through the birches because it was the only thing I could feel. I tell him what a person feels like at the top of those cliffs. How loud it is. How alive.
      *else
        I tell him about the lane behind the Switchyard, in August. A young man dying at the far end of it, by the bins, in the drizzle, and the knack giving me the whole of it, the way it gives me everything: the life going out of him like a tide. And then, inside the same minute, something catching him. A rope, pulled tight, out of him to somewhere far away.

      "It takes minutes," I say. "Hours, at most. Whatever's in a person, the thing this method catches, it doesn't wait. It goes. The old program knew. They wrote down a limit, forty-eight hours, in capitals, twice. It's not a rule anyone made up. It's how long the thing lasts." I look at him. "Octavian was three days on the ledge before anyone found him. I'm so sorry. It was over before anyone could have done anything. It was over before you knew."

      @armand:hurt Armand doesn't say anything at all for a long time.

      @armand:sad And then, very quietly, like a man confessing: "Everyone told me that. For ten years, everyone said it. You're the first person who's said it as if you'd been there." He puts his hand over his eyes. "And August said it didn't have to be true."

      I feel the hope go out of him. Not snatched. Set down. The grief that's left is enormous, and it's honest, and it's his, and for a while I just sit with it, in the firelight, the way I'd want someone to sit with me.

      Then I give him the report{@e15_src = "caspar"|, and tell him what Caspar saw on August's desk in December|}. And after a while he gets up and goes to the desk by the window, and unlocks a drawer, and comes back with Damian's monthly reports to him, typed, a dozen of them, which he says he's only ever read the last line of. [i]On schedule.[/i]

      I read the rest for him. [i]Maintain; do not wean.[/i] The donors' decline, managed. And the patients' deaths, afterwards, planned to look like illness.

      @armand:sad "Thank you," he says, when I've finished. "For telling me the truth first. Before the paper."
      *set e15 true
      *set e15_src "report"
      *set armand_broken true
      *set armand_trust true
      *set e16 true
      *set e16_src "armand"
  #Tell him no, and that I'm sorry for his son.
    "No," I say. "I can't allow it. And I'm sorry. For Octavian. I really am."

    @armand:guarded And I watch it happen: the listening face closes. Gently, politely, like a door on a room where someone's sleeping. The technique comes back up over everything, smooth and warm and not burning anything.

    @armand:neutral "I thought you might say that," he says. "You have a very honest face. It's why I asked you here, instead of someone more reasonable." He refills nothing; he doesn't drink. "But you'll forgive me if I don't take no from a young man who's never lost anyone."

    The hope's still there, under the courtesy. I can feel it. Starved, bright, hard. It's not going anywhere. It's just been told to wait.
    *set armand_hard true
*comment ---------------------------------------------------------------- CH19.ANSWER.01
*sid CH19.ANSWER.01
*date 2027-03-06 20:30
*place P37 sorrell_house
*present armand
*if armand_broken
  @armand:tired He sits by the fire with Damian's reports in his lap, an old man, suddenly, in a cardigan in a big shuttered house. "Tell me what you want," he says. "I'll do it. I'm not sure there's anything I wouldn't do, now. That's not a virtue. I've been like that for ten years."
*else
  @armand:neutral He stands at the window with his back to me, looking down at the city, all its lights. "I'll ask you once more," he says, "and then I won't ask again."

Whatever his face does now, the decision is mine. What we agree. What stays contested. And who answers for it, afterwards.

*choice
  #Refuse. No terms. We do this without him, and he answers for it after.
    *set ch19_answer "refuse"
    *if armand_broken
      "No terms," I say. "We don't need your money, and I won't make a deal with it. We'll do this without you. And afterwards you answer for it, in public, like everyone else who knew."

      @armand:tired He nods, slowly. "Yes," he says. "That's fair. That's more than fair." He looks at the reports in his lap. "I won't pay him again. I don't suppose that's worth anything to you. I'm telling you anyway."

      The housekeeper sees me out. On the drive, I look back. There's one light on in the library, and a man sitting very still beside it, and the white door upstairs still shut.
    *else
      "No," I say. "No terms. We'll do it without you. And afterwards, you'll answer for it."

      @armand:guarded He doesn't turn round. "Then I'm sorry too," he says, to the window. "Mrs Cole will see you out."

      On the way down the drive I look back, once. There's a light on in the library, and a man at the window, with a phone to his ear.

      I don't know who he's calling. The knack can't reach that far. But I can guess.
  *if armand_broken and (e16 or e11 or e15)
    #Negotiate: he withdraws Damian's funding and protection tonight, gives us Pump Nine's keys, and accepts written terms. In return, limited privacy.
      *set ch19_answer "negotiate"
      *set acc_pump true
      We negotiate. By the fire, at his big desk, on his own heavy paper, in his own fountain pen, because he insists on writing it himself.

      [i]One.[/i] He withdraws Damian's funding tonight, and his protection: his lawyers, his name, the foundation's letters that open doors. [i]Two.[/i] He gives us everything he has on Pump Nine, which turns out to be a ring of keys in the same locked drawer. The side door. The gate. The pump hall. [i]Three.[/i] He'll pay for the recovery, every man, every week, for as long as it takes, and he won't choose the doctors. [i]Four.[/i] He accepts that these terms are written down, and that I keep a copy.

      And in return: his name stays out of any public account. Not out of the wardens' record, or the court's. Out of the papers. Privacy, not innocence. As long as he keeps every term.

      @armand:tired He signs. He calls his bank while I'm there, and I listen to him stop the payments, account by account, in a calm, dead voice. Then he gives me the keys.

      I walk down the hill with them in my pocket, heavy as a stone. It's a compromise. We'll get everyone home with it. I'll carry it for years.
  *if armand_broken and (ally_mercy or ally_court) and (e16 or e11 or e15)
    #Monitored cooperation: he helps, openly, under {@ally_mercy|Mercy House|the court}, with the evidence held by someone else.
      *set ch19_answer "monitor"
      *set acc_pump true
      "Help us," I say. "Openly. Not with your money in the dark. Under {@ally_mercy|Mercy House|the court}, with somebody watching every step. The evidence stays with them, not with you and not with me. You don't get to decide what happens to it."

      @armand:tired He thinks about it for a long time. Then he nods. "Watched," he says. "Yes. I think I'd better be watched."

      He calls {@ally_mercy|Commander Orrell|the clerk of Bracken Court} that night, from the library, while I sit and listen. He stops Damian's money. He hands over the keys to Pump Nine: the side door, the gate, the pump hall. He puts Damian's reports into an envelope and writes on it, in his careful hand, [i]To be held by {@ally_mercy|Mercy House|Bracken Court}. Not to be returned to me.[/i]

      It's not a pardon. It's a man agreeing to be seen.
*comment ---------------------------------------------------------------- CH19.AFTER.01
*sid CH19.AFTER.01
*date 2027-03-06 23:30
*place P02
*mood night
Home. The shop dark, the press quiet, Martin's light off. I stand in front of the board on my wall for a long time with my coat still on.

The date's there in red, circled twice. Saturday the thirteenth of March. Eleven at night: a car for each of them, for Quentin and Silas and Felix, to a follow-up that isn't one. And the donors moved the same night to Pump Nine, where the meter's been running since May, for a [i]consolidation[/i] at dawn on the fourteenth, ten years to the hour. All three of them at once, into a boy who's been dead for ten years. It would empty them. It would empty the three on the other ends of their ropes.
*if ch19_answer = "refuse"
  *if armand_broken
    Armand walked out of that room broken. He may simply stop paying, and Damian may simply notice. Or he may not. A man who stops paying for a thing doesn't always stop the thing.
  *else
    Armand walked out of that room still hoping. And there was a phone at his ear, at the window. If he's warned Damian, Damian won't wait for dawn on the fourteenth. He'll move early, and we won't know when.
*elseif ch19_answer = "negotiate"
  Armand's keys are on my desk, next to the terms, in his handwriting and mine. Damian's money stopped tonight. He'll notice, sooner or later. We have to be faster than later.
*else
  Somewhere in {@ally_mercy|Mercy House|Bracken Court}, an envelope in Armand's handwriting is being locked in a drawer. The keys to Pump Nine are on my desk. Damian's money stopped tonight. He'll notice.

One week.

I take my coat off, finally, and sit down on the bed, and text the three of them again: [i]Nobody gets in any car until we've all talked. Tomorrow. All of us, at the Okafors'.[/i]

Quentin replies in thirty seconds. [i]fine. but if the plan turns out to be "get in the car" im going to want a better plan than that[/i]

*journal [b]Chapter 19.[/b] The thaw came. So did a cream card from Armand Sorrell, and three texts: Quentin, Silas and Felix, each summoned by "the clinic" for Saturday 13 March, eleven at night, a car for each. The donors will be moved to Pump Nine the same night for a "consolidation" at dawn on the fourteenth, the tenth anniversary of Octavian's death. Armand asked me to let Damian make one attempt. {@armand_broken|I showed him the limit: forty-eight hours, or nothing. It was never possible. He gave me Damian's reports.|I told him no.} {@ch19_answer = "refuse"|We'll do it without him.|}{@ch19_answer = "negotiate"|We made terms: his money stopped, the keys to Pump Nine, his name kept out of the papers.|}{@ch19_answer = "monitor"|He'll help, openly, and be watched while he does.|}
*page_break
*goto_scene ch20
`);
