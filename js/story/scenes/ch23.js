NB.scene("ch23", String.raw`
*mood thaw
*set ch 23
*chapter 23 Six Weeks Later
*comment ---------------------------------------------------------------- CH23.OPEN.01
*sid CH23.OPEN.01
*date 2027-04-24 09:00
*place P02 print_shop
*present martin will
*mood day
Spring, all at once.

It happened while I wasn't looking. The river's gone down to its summer level and left the Riverside Steps scrubbed pale. The allotments in Eastbank have gone green overnight. There's blossom on the one tree on Latch Lane, which nobody's ever been able to identify, and it's pink.

Six weeks.

And Mum's home. She got in at two in the morning on Thursday, off the overnight train, with one suitcase and a box of dried fish from the coast that nobody asked for, and she's been jet-lagged and furious with everyone ever since, for not telling her things. The suitcase is still in the hall. None of us have had the heart to move it.

This morning there's a letter on my pillow.
*letter mum_04

@will:tense Will's trial is today. The big one: the academy, the thing his development programme's been building to since August. He's in the kitchen in his tracksuit, not eating his toast, bouncing his knee so hard the table shakes.

@martin:warm Martin's making him eat the toast anyway. "Carbohydrates," he says. "I read it on the internet. Eat."

Whatever the rescue cost, today's a Saturday.

*choice
  #Tell Mum I'm all right, and something true about why.
    *set mum_told true
    I find Mum in the back room, in her dressing gown, with a mug of tea, looking at the board on my wall through the open door of my bedroom and pretending she isn't.

    "I'm all right," I say. "I promise. I've been helping some people who were in trouble. Some of them are all right now because of it. Some of them aren't." I sit down next to her. "And I'm all right because of them. That's the true bit."

    She looks at me for a long time, the way she used to after her bad shifts, when I sat on her feet. Then she puts her mug down and holds my face in both hands and says, "You sound different. I said so in December. I was right." And doesn't let go for a while.
  *if out_family
    #Tell Mum what I told Martin and Will in January.
      *set mum_told true
      *set out_mum true
      *achieve told_truth
      I find Mum in the back room, in her dressing gown, with a mug of tea. I sit down next to her. And I tell her what I told Martin and Will in January, at the kitchen table, with question six and the accounts.

      "I'm gay, Mum. I've known since I was twelve."

      She puts her mug down. She looks at me with her tired, clever, coast-weathered face. "I know, sweetheart," she says. "I've known since you were twelve too. I was waiting for you to want to tell me." And then she starts crying, and laughing, and says she's furious with Martin for knowing first, and holds on to me so hard her tea goes cold.
  #Go with Will to his trial and let him be the one people look at.
    *set fr_will +1
    *set s13 "resolved"
    I go with Will to his trial.

    @will:guarded Two buses, out to the training ground at the edge of the city, in the spring sun. He doesn't talk the whole way. He bounces his knee. I let the knack have him, the bright tight wire of him, and I don't say anything about it, and I don't say anything clever, and I don't make it about me.

    @will:amused He's brilliant. I stand at the fence with the other brothers and cousins and parents and watch him be brilliant for ninety minutes, and when a scout in a club anorak writes something in a notebook, Will looks straight at me across the whole pitch, and grins, and I grin back, and that's all.

    For one whole Saturday morning, nobody's looking at me. It's the best morning I've had all year.
*comment ---------------------------------------------------------------- CH23.PATIENTS.01
*sid CH23.PATIENTS.01
*date 2027-04-24 11:30
*place P09 lyles_bakery
*present otis
Lyle's Bakery, the long table at the back, after the morning rush. Where everyone is, six weeks on.
*if (ending = "A") or (ending = "B") or (ending = "C") or (ending = "D")
  The patients are weaning off their bridges a notch a week: cold-handed, bad-tempered, sleeping ten hours a night, and alive. Quentin's back at Double Shift, three mornings a week, and complains about all of them. Felix is editing. Silas is here.
*elseif ending = "F_Q"
  Quentin's weaning off his bridge a notch a week, cold-handed and bad-tempered and alive, back at Double Shift three mornings, not talking about it. At the end of the long table, Otis keeps a chair. Nobody sits in it.
*elseif ending = "F_S"
  Silas is weaning off his bridge a notch a week, cold-handed and alive, and running the ovens. Nobody sits in the chair Otis keeps at the end of the long table, for the other two.
*elseif ending = "F_F"
  Felix is weaning off his bridge a notch a week, cold-handed and alive, and editing the film every night until three. At the end of the long table, Otis keeps a chair. Nobody sits in it.
*else
  At the end of the long table, Otis keeps a chair. Nobody sits in it. Nobody ever will.

Eamon and Hugo and Clive are home. Thin, angry at lost time and lost wages and at being treated, by everyone who knew, as a necessary cost, and entitled to every bit of it. Hugo got the depot job back; they held it for him, and Owen organised a whip-round, and the drivers all signed a card with a bus on it. Clive's students painted his studio door while he was gone, yellow, with a crack down the middle filled in gold.

*choice
  *if alive_silas
    #Help Silas with the second bake. Otis is letting him run the ovens now.
      *set s15 "resolved:silas"
      *present otis silas
      @silas:warm I help Silas with the second bake. He's running the ovens now, all of them, on his own, with Otis sitting on a stool by the door pretending not to watch. He moves slower than he used to. His hands are cold, even by the ovens. He folds the croissants with the same exact care, and when one comes out wrong, he doesn't apologise to it. That's new.

      @otis:warm "Look at him," says Otis, to me, not quietly enough. "Look at him. Forty years I've been getting up at four. Now I get up at six. He brings me tea."
  *if not(alive_silas)
    #Sit with Otis in the back. He doesn't need anyone to say anything.
      *set s15 "resolved:otis"
      @otis:sad I sit with Otis in the back, on the flour sacks, while the ovens tick as they cool. He doesn't need anyone to say anything. So I don't.

      After a while, he gets up and brings back a paper bag and gives it to me. A croissant, folded with the same exact care. "His way," he says. "I've been practising." His big floury hands are shaking. "I can't get it right. I'm going to keep trying."
  #Walk to Willow Court and see Eamon. He wants to post a letter he wrote in August.
    *set fr_eamon +1
    *present eamon
    I walk to Willow Court, where Eamon's been staying in a borrowed flat until he's strong enough to go home over the footbridge for good.

    @eamon:small He's waiting at the door with his coat on and the letter in his hand. The one to his sister, in the big careful handwriting, to the village in the north of the Marches. He's been carrying it since August. "I want to post it," he says. "Myself. I want to walk to the box and put it in."

    It's four streets. It takes us forty minutes, because he has to stop and lean on walls. At the postbox on the corner, he holds the letter over the slot for a long time.

    @eamon:warm "It says I'm sorry I've been away so long," he says. "It says I'll be home for the harvest." He drops it in. "It's going to be true."
*comment ---------------------------------------------------------------- CH23.ARCS.01
*sid CH23.ARCS.01
*date 2027-04-24 14:00
*place P32
Crescent Market on a Saturday, where half the city passes: the stalls, the buskers, the smell of doughnuts and diesel.

News arrives the way it does here, in pieces, from people who stop to talk.

Switchyard lost its building in the end, and kept its name: Desmond's found an old tram shed at Foundry Reach and says the acoustics are a gift from God. {@s16 = "resolved:shared"|The Regent's vote held: shared rules, no bought exceptions, and Abel Mercer's moved out in a huff to a flat with his own shutters.|The Regent's still arguing about fees, but they're arguing in the same room, which Lucien says is progress.} Mercy House has a new review board, with two members who aren't wardens, which has never happened before. The tenants at Winton Court won their consultation, and Russell's been given a new boiler and a bad-knee allowance. And the crossing succession was settled at the assembly{@s14 = "resolved:court"|: the court's, openly, with the keepers answering to it|}{@s14 = "resolved:boundary"|: the boundary crossings shared, and written down|}{@s14 = "resolved:estate"|: Lucan's family's old right restored, in writing, with a horse drawn on the document|}.

Each of these is somebody's whole life. I've been part of every one of them. I spend the afternoon helping with one.

*choice
  #Help Martin load the new press. He sold the old one and kept the shop.
    *set s01 "resolved:kept"
    *present martin
    @martin:amused Martin sold the old press, the second one, the one in the back that nobody had used since my grandad. And with what he got for it, he's bought a new one: smaller, second-hand, beautiful, delivered this afternoon on a pallet to the front of the shop, where it's blocking the whole of Latch Lane.

    @martin:tense It takes four of us three hours to get it through the door. Martin supervises. He says "Mind the paintwork" eleven times. When it's in, and bolted down, and he's run the first sheet through it, he stands there holding the sheet up to the light with his reading glasses pushed up into his hair, and doesn't say anything, and doesn't need to.

    The shop's staying. That's what the sheet says, in a very nice serif: [i]AVERY & SON, PRINTERS. STILL HERE.[/i]
  *if fr_wesley >= 1
    #Help Wesley move into his own room at Lock Street, with a lease in his own name.
      *set s08 "resolved:own"
      *present wesley
      @wesley:amused Wesley's got a room. On Lock Street, above a launderette, and it smells of clean sheets all day, and the lease is in his own name, and the landlady met him and didn't ask anything she shouldn't.

      We carry his stuff up three flights: two bin bags, a guitar with four strings, a box of books, a plant Pavel gave him that he's terrified of killing. It takes one trip. He stands in the middle of the empty room when we're done and turns round slowly, twice.

      @wesley:small "Mine," he says. Just that. And the fire alarm in him, the one that used to go off every time anyone came near, is quiet. Not off. Quiet.
  #Help Desmond and Nolan strip the old tram shed for the new Switchyard.
    *set s06 "resolved:moved"
    *present nolan
    The old tram shed at Foundry Reach: a huge brick barn with rails still in the floor and pigeons in the roof and a smell of a hundred years of oil. Desmond's standing in the middle of it with his arms out, turning round, like a man in a cathedral.

    @nolan:laugh Nolan's up a ladder, stripping out old cable, sneezing. "The acoustics," he says, "are a [i]gift[/i]." He sneezes again. "The pigeons are a problem."

    We strip it all afternoon. By six, there's a pile of old cable the size of a car in the yard, and a space in the middle of the shed where the stage will go, and Desmond's marked it out on the floor in gaffer tape, and Nolan and I stand in it, in the dust, where the lights will be, and don't say anything, because we both know exactly what it's going to look like.

*comment ---------------------------------------------------------------- CH23.NOLAN.01
*if st_nolan >= 3
  *goto nolan
*goto ellis_check

*label nolan
*sid CH23.NOLAN.01
*date 2027-04-24 16:30
*place P28
*present nolan
Laird's, the little balcony, the camping chair and the kitchen chair, the buses going out below.

@nolan:tense Nolan's offer came on Thursday. Wexmoor. The technical course, sound and lighting and stage engineering, from September, in another city, three hours on the train. He's got the letter in his hand, and he's turning it over and over the way he turns everything over.

@nolan:attentive "What do you think?" he says. And he means it. He actually wants to know. And he'll decide for himself anyway; I can feel that, too.
*if st_nolan >= 5
  He's mine, and I'm his, in whatever way we've decided we are. And he's still asking me like it's a real question. Which it is.

*choice
  #"Go. You'd be brilliant. Whatever we are, it survives a train."
    *set nolan_leaving true
    *set s02 "resolved:leaves"
    "Go," I say. "You'd be brilliant. You'll be the best one there by Christmas. {@st_nolan >= 5|Whatever we are, it survives a train.|Whatever we are, best friends survive a train.}"

    @nolan:warm He looks at me for a long time. Then he folds the letter up and puts it in his shirt pocket, over his heart, where it isn't subtle. "Okay," he says. "Okay. I'm going."
  #"I want you to stay. I also want you to do what you want." Both true.
    *set s02 "resolved:decides"
    "I want you to stay," I say. "I also want you to do what you want. Both of those are true. I'm not going to pick one for you."

    @nolan:small He laughs, a bit shakily. "That's the most annoying thing you've ever said to me," he says. "It's also the nicest." He turns the letter over. "I'll decide. By June. I'll tell you first."
*label ellis_check
*if st_ellis >= 3
  *goto ellis
*goto adrian_check

*comment ---------------------------------------------------------------- CH23.ELLIS.01
*label ellis
*sid CH23.ELLIS.01
*date 2027-04-24 17:15
*place P20 okafor_restoration
*present ellis chukwudi
The Okafors' workroom at teatime, with the big bench back where it belongs and the lamps on.

@ellis:warm Ellis's placement is confirmed for September. The conservation course in another city, a year, the one he's wanted since he was fifteen and never let himself apply for, in case. He told his father in March, in the middle of everything, standing in this room with a camp bed at his feet.

@chukwudi:amused "I'd known for a month," says Chukwudi, now, very pleased with himself. "He left the application in the error book. Under [i]mistakes I haven't made yet[/i]." He looks at his son. "I was proud. I am proud. I said so."

@ellis:shy "He said so eleven times," says Ellis.

They're making a transition plan, with dates on it: who does which commissions, which weekends Ellis comes home, what happens to Isaac's apprenticeship. It's on a sheet of paper on the bench, in pencil, with a lot of crossings-out.

*choice
  #Help them write the plan: who does which commissions, which weekend he comes home.
    *set ellis_leaving true
    *set s03 "resolved:leaves"
    I pull up a stool and help them write it. Who does the gilding. Who does the frames. Which weekends Ellis comes home: the first of every month, and Christmas, and his father's birthday, which is underlined.

    @ellis:warm {@st_ellis >= 5|And, at the bottom, in his careful capitals, a line he adds himself, and shows me, and doesn't show his father: [i]And the weekends he comes to me.[/i]|At the bottom, in his careful capitals, he writes [i]And the lighting boy visits. Mandatory.[/i] and underlines it twice.}
*label adrian_check
*if st_adrian >= 3
  *goto adrian
*goto micah_check

*comment ---------------------------------------------------------------- CH23.ADRIAN.01
*label adrian
*sid CH23.ADRIAN.01
*date 2027-04-24 18:00
*place P01 mercy_house
*present adrian
Mercy House, the roof, where he took me in November and told me about the report.

@adrian:attentive Mercy House's new review board has offered Adrian something he'd have killed for a year ago. A posting: setting up the first joint warden station in Bracken Court, with the Court's keepers, two years, his own unit. Earned without his brother's name. Earned without anyone's name but his.

@adrian:attentive He tells me in complete, practical sentences, the way he tells me everything. The terms. The timeline. The accommodation, which he's already checked. And then he stops.

@adrian:small "What do you think?" he says. And then, because he's learned, because it took him all winter to learn it: "What do you want?"

*choice
  #"Take it. You earned it. I'll learn the crossings."
    *set adrian_transfer true
    *set s07 "resolved:posting"
    "Take it," I say. "You earned it. All of it, on your own. {@st_adrian >= 5|I'll learn the crossings. Ansel says the footbridge queue on a Friday is terrible. I'll bring a book.|And I'll come and visit, and you'll give me the tour, and it'll have a procedure.}"

    @adrian:warm His ears go red. He writes something in his notebook, and doesn't let me see what. "Right," he says. "Yes. I'll take it."
  #"Stay. There's work here too." And mean the work.
    *set s07 "resolved:stays"
    "Stay," I say. "There's work here too. The review board needs someone who'll tell it the truth in complete sentences. Mercy House needs it more than Bracken Court does." And I mean the work. I mean it about the work.

    @adrian:attentive He thinks about it, properly, the way he thinks about everything. "Known," he says, eventually. "That's true. I'll think about it." And he does. And he stays.
*label micah_check
*if st_micah >= 3
  *goto micah
*goto showcase

*comment ---------------------------------------------------------------- CH23.MICAH.01
*label micah
*sid CH23.MICAH.01
*date 2027-04-24 18:20
*place P07 serrano_yard
*present micah ernesto
Serrano Yard, the workshop, the stove out for the summer.

@micah:tense Micah's apprenticeship firm wants him for a year on a hydro project up north: good money, a qualification, a dam in a valley with no signal, the first thing that's ever been only his.

*meet ernesto
@ernesto:neutral And Ernesto Serrano, Micah's father, a big square-faced man with grey at his temples and a thick moustache, who runs the Yard and the family and most of Eastbank, astonishingly, says he should go. He says it at the long table, in front of everyone, carving: "Here is what we'll do. You'll go." And then he puts the knife down and goes out to the yard for a while and doesn't come back until the potatoes are cold.

@micah:small Micah asks me before he answers anyone. We're sitting on the workbench. He's got a pencil in his hand and he's drawing a dam on a piece of offcut. "I've never done anything that wasn't for them," he says. "What do I do?"

*choice
  #"Go. Eastbank will still be here. So will I."
    *set micah_away true
    *set s04 "resolved:north"
    "Go," I say. "Eastbank will still be here. So will I. {@st_micah >= 5|And there are trains. And full moons. I'll come up for one.|And I'll write, badly, and you'll write back, worse.}"

    @micah:warm His uneven smile. He finishes drawing the dam. Then he draws a tiny figure standing on top of it, waving, and gives it to me.
  #"Your call. Not your dad's, not mine."
    *set s04 "resolved:decides"
    "Your call," I say. "Not your dad's. Not mine. Yours. That's the whole point."

    @micah:attentive He looks at me for a long time. "Nobody's ever said that to me," he says. "Not once." He puts the pencil behind his ear. "I'll tell Dad on Monday. Whatever it is. I'll tell him it was mine."
*comment ---------------------------------------------------------------- CH23.SHOWCASE.01
*label showcase
*sid CH23.SHOWCASE.01
*date 2027-04-24 19:30
*place P46
*present benoit graham
*mood dusk
Benoît's spring showcase.

It was meant to be at the Lantern Rooms. It sold out in a week, and then sold out again, so it's at the Southmere Recreation Centre instead: the sports hall, with the basketball lines still on the floor, three hundred folding chairs, proud parents with phones held up, a trestle table of squash and biscuits, and a banner the students painted themselves that says [i]THE PROGRAMME: SAVED FOR ANOTHER YEAR[/i], in letters that get smaller towards the end because they ran out of banner.

@benoit:warm Benoît's at the door in a velvet jacket, kissing everyone on both cheeks, including people who don't expect it.

And everyone I love who's alive is in this room, or at the back, or waiting outside, because it's still light.
The students play first. Twelve of them, from his evening class, in borrowed black. They're wonderful. They're terrible, in places. They're wonderful.
*if s05 != ""
  *date 2027-04-24 20:40
  *present benoit graham dominic
  The sun goes down behind the tower blocks at five to eight. At twenty to nine, when it's properly dark, the side door opens, and Dominic comes in from the car park with his collar up.

  @dominic:tense He's singing. He decided that himself, in the end, whatever anybody said. Six songs, his own, with the ensemble behind him. He walks to the front of the sports hall in his old jumper, and stands under a lighting rig I put up this afternoon out of two borrowed stands and the good lamps from Switchyard, and blinks at the lights the way he blinks at the dark, as if it's something he's still getting used to.

  And he sings.

  @graham:sad Graham Bell's in the third row. Dominic's dad, in his work fleece, who didn't come to anything for a year and then started sitting at the back on Thursdays. He watches his son sing without understanding half of what his son is, or what's happened to him, or why he only ever comes after dark. And he cries anyway, openly, with his big hands on his knees, and doesn't wipe his face.
*set s05 "resolved"
*comment ---------------------------------------------------------------- CH23.DOMINIC.01
*if st_dominic >= 3
  *goto dominic
*goto quentin_check

*label dominic
*sid CH23.DOMINIC.01
*date 2027-04-24 21:40
*place P46
*present dominic benoit
*mood night
Afterwards, by the fire exit, in the car park, with the sodium lights coming on.

@benoit:attentive A woman in a long coat found Dominic after his set, with Benoît hovering. A night-arts residency, in another city: six months, a studio, a band, audiences who don't start until ten. She gave him a card. He's holding it now, by the edges, like it might burn.

@dominic:tense He finds me by the fire exit. "What do you think?" he says. And then he catches himself. I watch him do it: the old habit, asking someone else to decide, and then his face changing. "No. Sorry. What do you [i]want[/i]?"

*choice
  #"Go and play. I'll come to the ten o'clock shows."
    *set dominic_away true
    "Go and play," I say. "{@st_dominic >= 5|I'll come to the ten o'clock shows. All of them. I'll bring a flask. We can watch the sun not come up.|Go and play for people who start at ten. I'll come to one, and cheer too loudly.}"

    @dominic:warm He laughs, the real one, and puts the card in his jumper pocket, over his heart.
  #"Whatever you choose, choose it for you."
    "Whatever you choose," I say, "choose it for you. Not for Benoît, or your dad, or me. For you."

    @dominic:attentive He looks at the card for a long time. "For me," he says, like a man trying out a word in a new language. "Okay. I'll let you know." He puts it in his pocket. "Actually, no. I'll let me know."
*label quentin_check
*if alive_quentin and (st_quentin >= 3)
  *goto quentin
*goto reuben_check

*comment ---------------------------------------------------------------- CH23.QUENTIN.01
*label quentin
*sid CH23.QUENTIN.01
*date 2027-04-24 22:00
*place P46
*present quentin
*mood night
@quentin:neutral Quentin, by the bins behind the sports hall, cold-handed and alive, in his big coat, with a cup of the squash he's pretending he likes.

@quentin:neutral He tells me flatly, the way he says important things: he's got a place at the emergency-service academy in the capital from September. The thing he wanted before any of this. Before the lane. He applied in January, on a bad day, when his hands were so cold he could hardly type, and didn't tell anyone.

He waits to see what I'll do with it.

*choice
  #"Go. You earned it twice."
    *set quentin_away true
    "Go," I say. "You earned it twice. Once before the lane, and once after."

    @quentin:warm He looks at me with that direct gaze. {@st_quentin >= 5|Then he takes one cold hand out of his pocket and puts it on the back of my neck, and pulls me in, and says into my hair, "The capital's two hours. I've checked."|Then he nods once, like a man who's decided something and is getting on with it. "Two hours on the train," he says. "You'll visit. That's not a question."}
  #"Tell me what you want first."
    "Tell me what you want first," I say. "Before I say anything."

    @quentin:surprised He wasn't expecting that. Nobody asks Quentin what he wants; they tell him what he's owed. He thinks about it, properly, with the squash going warm in his hand. "I want to be good at something that isn't surviving," he says eventually. "I want to be the one who turns up." He looks at me. "I'm going to go. I wanted you to ask first."
*label reuben_check
*if st_reuben >= 3
  *goto reuben
*goto rel

*comment ---------------------------------------------------------------- CH23.REUBEN.01
*label reuben
*sid CH23.REUBEN.01
*date 2027-04-24 22:15
*place P46
*present reuben
*mood night
@reuben:tired Reuben, stacking chairs, because somebody has to, and he's always the somebody.

@reuben:tense His response service worked well enough that another city wants him to build theirs. A year. His own team, his own budget, his own rules. He's never been asked to lead anything. He's always been the one who carries the other end.

@reuben:small "Is it selfish," he asks me, holding a stack of six folding chairs, "to want it?"

*choice
  #"It's the least selfish thing I've ever heard. Go."
    *set reuben_away true
    "It's the least selfish thing I've ever heard," I say. "Go."

    @reuben:warm He puts the chairs down. {@st_reuben >= 5|And then he puts his big hands on either side of my face, very carefully, like a man who's allowed to have something and is still checking, and says, "I'll come back every weekend. I've done the numbers."|"I'll come back," he says. "For the chairs." And laughs at himself, and picks them up again.}
  #"It's allowed to be selfish. Decide what you want."
    "It's allowed to be selfish," I say. "You're allowed to want things. Decide what you want, and then tell me, and I'll help you carry it."

    @reuben:attentive He stands there with the chairs for a long time. "Nobody's ever said I'm allowed," he says. "I'll think about it." He puts them on the stack. "I'm allowed to think about it."
*comment ---------------------------------------------------------------- CH23.REL.01
*label rel
*sid CH23.REL.01
*date 2027-04-24 22:30
*place P06 riverside_steps_night
*mood night
The Riverside Steps, after the showcase. The water's low and quiet now, sliding past under the lamps, and the flood mark's still there on the stone, halfway up, where the river was six weeks ago.

There's one question left that belongs to me.

*choice
  *if (st_adrian >= 4) and not(closed_adrian)
    #Adrian.
      *set final_rel "adrian"
  *if (st_micah >= 4) and not(closed_micah)
    #Micah.
      *set final_rel "micah"
  *if (st_ellis >= 4) and not(closed_ellis)
    #Ellis.
      *set final_rel "ellis"
  *if (st_dominic >= 4) and not(closed_dominic)
    #Dominic.
      *set final_rel "dominic"
  *if (st_nolan >= 4) and not(closed_nolan)
    #Nolan.
      *set final_rel "nolan"
  *if (st_ansel >= 4) and not(closed_ansel)
    #Ansel.
      *set final_rel "ansel"
  *if (st_quentin >= 4) and not(closed_quentin) and alive_quentin
    #Quentin.
      *set final_rel "quentin"
  *if (st_reuben >= 4) and not(closed_reuben)
    #Reuben.
      *set final_rel "reuben"
  *if not(alive_quentin) and (st_quentin >= 5)
    #Quentin. Still. It doesn't stop being him because he's gone.
      *set final_rel "quentin"
      *set final_shape "grief"
      Quentin. Still.

      It doesn't stop being him because he's gone. I sit on the steps where he sat with his hands in his armpits and told me he wasn't doing the rest of it on his knees, and I let it be him. Nobody else. Not yet, and maybe not for a long time, and that's allowed too.

      [i]Warm. How are you always warm?[/i]

      I'm not, tonight. That's allowed too.
  #Nobody. Not like that, and not yet. I'm allowed that too.
    *set final_rel "single"
    *set final_shape ""
    Nobody. Not like that, and not yet.

    I sit on the steps on my own and let the knack have the city, the whole spring-night weather of it, and it's enough. I'm allowed that too. For the first time in my life, I think I actually believe it.
*if (final_rel != "single") and (final_shape != "grief")
  *goto rel2
*goto future

*comment ---------------------------------------------------------------- CH23.REL.02
*label rel2
*sid CH23.REL.02
*date 2027-04-24 22:45
*place P06 riverside_steps_night
*if final_rel = "adrian"
  *present adrian
  @adrian:attentive Adrian comes down the steps in his warden jacket and sits beside me, and takes his notebook out, and then, very deliberately, puts it away again.
*elseif final_rel = "micah"
  *present micah
  @micah:warm Micah comes down the steps with his jacket over his arm and sits beside me, the whole warm width of him, close.
*elseif final_rel = "ellis"
  *present ellis
  @ellis:attentive Ellis comes down the steps with his sketchbook under his arm, and sits beside me, and doesn't open it.
*elseif final_rel = "dominic"
  *present dominic
  @dominic:warm Dominic comes down the steps in his old jumper, with his collar up, and sits beside me, and his cold hand finds mine.
*elseif final_rel = "nolan"
  *present nolan
  @nolan:small Nolan comes down the steps with his field recorder, and switches it off, and sits beside me with his long legs stretched out on the stone.
*elseif final_rel = "ansel"
  *present ansel
  @ansel:attentive Ansel comes down the steps in his formal collar, having come over the footbridge for the showcase, he says, purely to compare the biscuits. He sits beside me, very straight.
*elseif final_rel = "quentin"
  *present quentin
  @quentin:neutral Quentin comes down the steps with his hands in his armpits and sits beside me, close enough that his shoulder's against mine.
*else
  *present reuben
  @reuben:warm Reuben comes down the steps and sits beside me, and the radiator-warmth of him comes up on the cold stone.

Whatever we are, we say it out loud, the two of us. And we both get a say.

*choice
  *if (final_rel = "adrian") and (st_adrian >= 4)
    #Together. Privately, and properly, and ours. (Adrian)
      *set final_shape "together"
      *set st_adrian 6
      @adrian:warm "Together," I say, and he says it at the same moment, in exactly the same tone, like we've rehearsed it, and his ears go red, and he doesn't care. "Privately," he says. "Properly. With a procedure." He takes my hand. "I'll write one."
  *if (final_rel = "micah") and (st_micah >= 4)
    #Together. Privately, and properly, and ours. (Micah)
      *set final_shape "together"
      *set st_micah 6
      @micah:warm "Together," I say. And Micah laughs, the uneven smile going all the way up, and says, "Yeah. Yeah. That's what I've been saying since the dam," and kisses me, clumsily, on the side of the head, because he misjudged it, and doesn't care.
  *if (final_rel = "ellis") and (st_ellis >= 4)
    #Together. Privately, and properly, and ours. (Ellis)
      *set final_shape "together"
      *set st_ellis 6
      @ellis:warm "Together," I say. And Ellis opens the sketchbook, finally, to the last page, and shows me: the two of us on these steps, drawn from memory, from some night in the winter I didn't know he was drawing. "I've been waiting," he says, "to find out if it was accurate."
  *if (final_rel = "dominic") and (st_dominic >= 4)
    #Together. Privately, and properly, and ours. (Dominic)
      *set final_shape "together"
      *set st_dominic 6
      @dominic:warm "Together," I say. And Dominic, who's spent two years being decided about, decides. "Yes," he says. "Mine. My choice." His cold hand tightens. "I'll sing about it. Badly. You'll have to live with that."
  *if (final_rel = "nolan") and (st_nolan >= 4)
    #Together. Privately, and properly, and ours. (Nolan)
      *set final_shape "together"
      *set st_nolan 6
      @nolan:warm "Together," I say. And Nolan bumps my shoulder, the way he has for four years, and then doesn't take it back, and says, "Took us long enough," and switches the recorder back on, because he says he wants a record.
  *if (final_rel = "ansel") and (st_ansel >= 4)
    #Together. Privately, and properly, and ours. (Ansel)
      *set final_shape "together"
      *set st_ansel 6
      @ansel:warm "Together," I say. And Ansel says, very formally, "I should like that recorded," and then, not formally at all, kisses me, on the Riverside Steps, in front of the whole river.
  *if (final_rel = "quentin") and (st_quentin >= 4)
    #Together. Privately, and properly, and ours. (Quentin)
      *set final_shape "together"
      *set st_quentin 6
      @quentin:warm "Together," I say. And Quentin, who died in a lane and came back and nearly died again, looks at me with that direct gaze and says, "Yeah. Obviously," like a man who's decided something and is getting on with it.
  *if (final_rel = "reuben") and (st_reuben >= 4)
    #Together. Privately, and properly, and ours. (Reuben)
      *set final_shape "together"
      *set st_reuben 6
      @reuben:warm "Together," I say. And Reuben, who's always been the one who stays after the reason's gone, says, "I'm staying," and then laughs at himself, and puts his big hand over mine. "That's the answer. I'm staying."
  *if (final_rel = "adrian") and (st_adrian >= 5) and adrian_transfer
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Adrian)
      *set final_shape "distance"
      @adrian:attentive "Two years," I say. "Bracken Court. The footbridge queue on a Friday." And Adrian takes his notebook out again, and opens it to a page he's already written: a timetable. Every other weekend. Letters on Wednesdays. "I planned it," he says. "In case. I always plan."
  *if (final_rel = "micah") and (st_micah >= 5) and micah_away
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Micah)
      *set final_shape "distance"
      @micah:warm "A year up north," I say. "A dam with no signal." And Micah says, "Letters, then. Proper ones. I'll draw you the dam," and I know he will, and I know they'll be terrible, and I'll keep every one.
  *if (final_rel = "ellis") and (st_ellis >= 5) and ellis_leaving
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Ellis)
      *set final_shape "distance"
      @ellis:warm "The first weekend of every month," I say. "And the ones in between that you come to me." And Ellis says, "It's on the plan. In pencil. I'll go over it in ink."
  *if (final_rel = "dominic") and (st_dominic >= 5) and dominic_away
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Dominic)
      *set final_shape "distance"
      @dominic:warm "Six months," I say. "The ten o'clock shows." And Dominic says, "I'll leave you a ticket at the door. Every night. Even the ones you can't come to."
  *if (final_rel = "nolan") and (st_nolan >= 5) and nolan_leaving
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Nolan)
      *set final_shape "distance"
      @nolan:warm "Three hours on the train," I say. And Nolan says, "I've already made you a playlist for it. It's three hours long exactly. I timed it."
  *if (final_rel = "ansel") and (st_ansel >= 5)
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Ansel)
      *set final_shape "distance"
      @ansel:warm "Two worlds," I say. "One footbridge." And Ansel says, very formally, "I shall write every week. On thick cream paper, with green wax. You'll complain about the vinegar in your replies. It will be the best correspondence in either world."
  *if (final_rel = "quentin") and (st_quentin >= 5) and quentin_away
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Quentin)
      *set final_shape "distance"
      @quentin:warm "The capital," I say. "Two hours." And Quentin says, "I've checked the trains. There's one at six on Fridays. You're getting on it. That's not a question."
  *if (final_rel = "reuben") and (st_reuben >= 5) and reuben_away
    #Together, with distance or changed lives, on purpose: trains, letters, the weekends we choose. (Reuben)
      *set final_shape "distance"
      @reuben:warm "A year," I say. "Another city." And Reuben says, "I've done the numbers. Every other weekend, and all the bank holidays. It comes out the same every time. That's good. That's what numbers are for."
  *if (final_rel = "adrian") and (st_adrian >= 5)
    #It mattered, and it's over, and we both know why. (Adrian)
      *set final_shape "parted"
      @adrian:sad We both know. He wants a life that fits in a notebook, and I'm not a procedure, and neither of us is wrong. "It mattered," he says. "It's written down. It stays written down." He puts his hand on my shoulder, once, and goes.
  *if (final_rel = "micah") and (st_micah >= 5)
    #It mattered, and it's over, and we both know why. (Micah)
      *set final_shape "parted"
      @micah:sad We both know. He needs one thing that's only his, and it can't be me, not yet, not while he's learning what that means. "It mattered," he says. "You were the first thing I ever chose." He bumps my shoulder, and goes.
  *if (final_rel = "ellis") and (st_ellis >= 5)
    #It mattered, and it's over, and we both know why. (Ellis)
      *set final_shape "parted"
      @ellis:sad We both know. He's going somewhere to be only himself for the first time, and he needs to go without anyone waiting. He tears a page out of the sketchbook and gives it to me: the steps, the two of us. "It was accurate," he says. "It mattered." And goes.
  *if (final_rel = "dominic") and (st_dominic >= 5)
    #It mattered, and it's over, and we both know why. (Dominic)
      *set final_shape "parted"
      @dominic:sad We both know. He's only just learning to decide things for himself, and he can't do it with someone else's life wrapped round his. "It mattered," he says. "You didn't manage me. Not once. I'll never forget that." And goes, into the dark he knows.
  *if (final_rel = "nolan") and (st_nolan >= 5)
    #It mattered, and it's over, and we both know why. (Nolan)
      *set final_shape "parted"
      @nolan:sad We both know. We were best friends for four years before we were anything else, and we want to be best friends for forty more, and this was the price of finding out. "It mattered," he says. "It's recorded. I've got the river." And bumps my shoulder, and doesn't take it back, and goes.
  *if (final_rel = "ansel") and (st_ansel >= 5)
    #It mattered, and it's over, and we both know why. (Ansel)
      *set final_shape "parted"
      @ansel:sad We both know. He belongs to a Court and a world and a succession, and I belong to a city on the other side of a green door. "It mattered," he says, formally, and then not formally: "It mattered more than anything." And he goes back over the footbridge.
  *if (final_rel = "quentin") and (st_quentin >= 5)
    #It mattered, and it's over, and we both know why. (Quentin)
      *set final_shape "parted"
      @quentin:sad We both know. He's spent seven months being owed things, and he needs to find out who he is when nobody owes him anything, including me. "It mattered," he says, flatly, the way he says important things. "Don't make it smaller than it was." And goes.
  *if (final_rel = "reuben") and (st_reuben >= 5)
    #It mattered, and it's over, and we both know why. (Reuben)
      *set final_shape "parted"
      @reuben:sad We both know. He's only just learned he's allowed to want things, and the first thing he needs to want is a life of his own, not one built round someone else's. "It mattered," he says. "You stayed. I'll remember that you stayed." And goes.
  #Friends. The real kind. It's not a consolation.
    *set final_shape "friends"
    "Friends," I say. "The real kind. It's not a consolation."

    And we sit there, on the steps, and it isn't. It's the whole of something, not the leftover half of something else. {@final_rel = "nolan"|Nolan bumps my shoulder, and this time takes it back, and grins, and it's fine. It's better than fine.|It's fine. It's better than fine.}
*comment ---------------------------------------------------------------- CH23.FUTURE.01
*label future
*sid CH23.FUTURE.01
*date 2027-04-24 23:30
*place P06 riverside_steps_night
And me?

The knack, and a year of learning what it's for.

*choice
  *if s09 = "resolved:probation"
    #Reuben's response service needs someone who can see a failing link before the monitors do.
      *set mc_future "response"
      Reuben's response service, on probation, a medic on call at night for the city's other people. It needs someone who can see a failing link before the monitors do. It needs someone who can feel what's wrong in a room before anyone says. I'm good at that. I'm going to get better.
  *if ally_mercy
    #Mercy House training, as the first sensitive they've had in seven years, on my own terms.
      *set mc_future "warden"
      Mercy House. Training, as the first sensitive they've had in seven years. On my own terms, written down, with Florian's archive to learn from and Ruth Carrow's notes and a review board that isn't allowed to hide things any more. I'll never be a warden. I'll be something they don't have a word for yet.
  #Back on crew at the new Switchyard. Ear defenders, loading bay, the good kind of noise.
    *set mc_future "crew"
    Back on crew. The new Switchyard, in the tram shed at Foundry Reach, with the acoustics that are a gift from God. Ear defenders, loading bay, road cases, the good kind of noise. I'll know every room I rig by its weather. Nobody needs to know why I'm so good at it.
  #A course in the autumn. Something with my hands and my head both.
    *set mc_future "study"
    A course, in the autumn. Something with my hands and my head both: electrical, or conservation, or something I haven't found yet. I've spent a whole winter learning I can learn things. I want to keep going.
  #The print shop, with Martin, on paper this time, with a proper wage.
    *set mc_future "shop"
    The print shop, with Martin, on paper this time, with a proper wage and my name on the rota. The new press. The old customers. Avery & Son, still here. I'll know every customer's weather before they get to the counter. Martin says that's cheating. Martin says keep doing it.
  #I don't know yet. For once that's fine.
    *set mc_future "undecided"
    I don't know yet. For once that's fine. For once I've got time to find out.
*comment ---------------------------------------------------------------- CH23.END.01
*sid CH23.END.01
*date 2027-04-24 23:59
*place P02
Home, late. The shop dark, the new press gleaming in the streetlight through the window. Mum's suitcase still in the hall, because none of us can bring ourselves to move it; it means she's here.

I sleep with the window open, and the spring comes in.

*journal [b]Chapter 23.[/b] Six weeks later, spring. Mum's home.{@out_mum| I told her. She'd known since I was twelve.|} {@(final_shape = "together")|I said it out loud, on the Riverside Steps: together.|}{@(final_shape = "distance")|I said it out loud, on the Riverside Steps: together, across whatever distance, on purpose.|}{@(final_shape = "parted")|It mattered, and it's over, and we both know why.|}{@(final_shape = "friends")|Friends, the real kind.|}{@(final_shape = "grief")|Quentin, still.|}{@(final_rel = "single")|Nobody, not yet, and that's allowed.|} {@mc_future = "response"|Next: Reuben's response service.|}{@mc_future = "warden"|Next: Mercy House, as its first sensitive in seven years.|}{@mc_future = "crew"|Next: back on crew at the new Switchyard.|}{@mc_future = "study"|Next: a course in the autumn.|}{@mc_future = "shop"|Next: the print shop, with Martin.|}{@mc_future = "undecided"|Next: I don't know yet, and that's fine.|}
*page_break
*goto_scene ch24
`);
