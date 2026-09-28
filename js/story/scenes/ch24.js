NB.scene("ch24", String.raw`
*mood thaw
*set ch 24
*chapter 24 One Year Later
*comment ---------------------------------------------------------------- CH24.ANCHOR.01
*sid CH24.ANCHOR.01
*date 2028-03-13 17:30
*place P06 riverside_steps
*mood day
The thirteenth of March. A year.

The Riverside Steps at half past five, with the river low and green and slow, and the flood mark from last spring still on the stone, halfway up, where nobody's scrubbed it off. I don't think anyone's going to. I think it's staying.

I've been here an hour. I've been everywhere today.
*comment ---- anchors: exactly one, by ending
*if ending = "A"
  *comment ANC_A
  This morning I was at Mercy House's recovery wing, for a board meeting I was late for, because I'm always late for board meetings, because I'm on the board, which still seems ridiculous. There's a plaque in the corridor now, brass, small, by the door of the side ward: [i]In this house, in 2017 and 2026, people were harmed by a program this house created and concealed. We name it so it cannot happen again.[/i] Florian wrote it. Orrell signed it. Everybody walks past it every day.

  The programme has rules, because we made it have them: consent in writing, a monitor on every link, a limit of forty-eight hours in capitals on the wall, and a review every quarter with two members who aren't wardens. It's dull. It's meant to be dull. Dull is what safe looks like, from the inside.
*elseif ending = "B"
  *comment ANC_B
  Tonight's the coalition's anniversary dinner, at Eastbank's long table, and I've been helping Ernesto carry chairs since two. There'll be forty of us: Serranos and Okafors and the Regent's night people and a print shop and three restorers and a bus driver. Three copies of the evidence are still in three safes, and nobody's ever needed to open them, which is the point.

  Ernesto's going to make a toast. He's been practising. He's going to get as far as [i]Here is what we did[/i] and then not be able to finish it, the way he couldn't last year, and somebody's going to pass him a napkin, and it'll be fine.
*elseif ending = "C"
  *comment ANC_C
  This morning I was at the Okafors', taking the recovery timetable down off the workroom wall, one pin at a time.

  It went up on the fourteenth of March last year, in marker, a column for each of them. It came down today, with every row ticked, every notch weaned, every volunteer's rent paid out of a tin on Martin's counter that somehow never ran out. Chukwudi made me do it slowly. He wrote in the error book when the last pin came out: [i]March 13. The long way. Not an error.[/i]
*elseif ending = "D"
  *comment ANC_D
  This morning I walked through Briar Heights, the way I do every Monday, past a clinic with a brass plate on the door: [i]The Octavian Sorrell Clinic. Private Care.[/i] Armand's foundation funds it. It's very good, I'm told. It asks no questions and keeps no public record, and there's a waiting list.

  I walk past it every week. I never go in. It's the deal I made, and it's the cost of the deal, and I carry it past that door every Monday like a stone in my boot, which is exactly where it belongs.
*elseif ending = "E"
  *comment ANC_E
  This afternoon I was at Hillview Cemetery, on the hill, where there are three graves in a row: Quentin, Silas, Felix. Plain stones. The dates.

  And three living men, who come every month, on the thirteenth, and bring each other coffee in paper cups, and stand there for half an hour not saying much. Eamon comes over the footbridge for it. Hugo drives. Clive brings flowers he's too embarrassed to arrange. They didn't ask to be alive because of the three of them. They come anyway. It's allowed to be both.
*elseif ending = "F_Q"
  *comment ANC_FQ
  Quentin's late. He's always late now, on purpose, he says, because he spent too long being on time for things other people scheduled. He comes down the steps at twenty to six with two coffees, one for me, and sits down, and says two names out loud, the way he does every day: Silas. Felix.

  He says them every day. At the academy, before his shift. In the ambulance, sometimes, between calls. He told me once he's not doing it for them, because they're dead and it doesn't matter to them. He's doing it so he never gets to forget he's the one who got to keep going.
*elseif ending = "F_S"
  *comment ANC_FS
  At four o'clock this morning I was at Lyle's Bakery, because Silas asked me to be. The ovens, the long table, the smell of the first bake. Silas at the ovens, running all of them, on his own, with his cold hands, folding the croissants with exactly the same care.

  Otis has retired. Officially. He sits on a chair by the door in his apron, which he refuses to take off, and drinks the tea Silas brings him, and tells every customer who comes in at six that the lad's better than he ever was, and it isn't true yet, and it will be.
*else
  *comment ANC_FF
  Tonight's the premiere of Felix's film, at the Southmere Cinema, at eight, and I've come down to the river first, because I needed to.

  He finished it. Of course he did. Ninety minutes, about a city and a winter and a pumping station and three men in beds, with every patient's name kept out except the two he insisted on. They're in the dedication, at the start, not the end, before anything else. [i]For Quentin Shaw and Silas Fenwick, who chose.[/i] Ellis did the titles, by hand.
*comment ---------------------------------------------------------------- CH24.PATIENTS.01
*sid CH24.PATIENTS.01
*date 2028-03-13 18:00
*place P06 riverside_steps
*mood dusk
The sun goes down over the far bank. I say their names, the way I've said them every day for a year. And I think about where each of them is.
*if alive_quentin
  *comment QUENTIN_ALIVE
  Quentin's off the bridge. He weaned the last notch in July, and cried about it in the Double Shift stockroom, where nobody could see, and then went back out and made eleven flat whites. {@quentin_away|He's at the emergency-service academy in the capital now, top of his year, and he texts me photos of ambulances like other people send photos of dogs.|He's training at the emergency service, here, on nights, and he's good at it.} His hands still go cold in winter. That's all that's left of it. Cold hands, in winter, and nothing else.
*else
  *comment QUENTIN_DEAD
  Quentin's at Hillview, on the hill. His brother goes on the anniversary, after dark. {@st_quentin >= 3|I go more often than that.|I go when I can.} What he wanted, he said once, was to be good at something that wasn't surviving. He was. He was good at deciding. He decided the last thing himself.
*if alive_silas
  *comment SILAS_ALIVE
  Silas is off the bridge too, since September. He runs the ovens at Lyle's. He's taken up running, very slowly, very politely, round the park at five in the morning, and apologises to the pigeons. He wrote to Hugo, once, a long letter, to say sorry to his face on paper, and Hugo wrote back, and now they meet for breakfast on the first Sunday of the month and argue about bread.
*else
  *comment SILAS_DEAD
  Silas is at Hillview, on the hill. Otis goes every Sunday, before the bakery opens, and leaves a paper bag with a croissant in it, folded with the same exact care, and it's never quite right, and Otis keeps practising. What Silas wanted, he said once, was to meet Hugo afterwards and say sorry to his face. Hugo goes too, sometimes. He says it to the stone, for him.
*if alive_felix
  *comment FELIX_ALIVE
  Felix is off the bridge, and editing, and impossible, and alive. {@ending = "F_F"|Tonight's his premiere.|He's shooting something new: Milo's documentary about the Regent, as director of photography, which Milo says is a promotion and Felix says is a demotion.} He still films everything. He's stopped filming the ceiling.
*else
  *comment FELIX_DEAD
  Felix is at Hillview, on the hill. Milo and Ellis finished his footage between them, and it's on a hard drive in Ellis's drawer, labelled in careful capitals, [i]FOR WHEN IT'S TIME[/i]. What Felix wanted, he said once, was for there to be a record. There is. It's got his name at the start, not the end.
*if donors_freed and (ending = "D")
  *comment EAMON_PAID
  Eamon didn't sign. He took nothing from Armand's lawyer, and went home to the Marches in May, and posted his letter on the way, and was there for the harvest. He writes to Ansel. He's a courier again. He says nobody's going to tell him which crossings he's allowed to use, and he's right.
*else
  *comment EAMON_FREE
  Eamon went home to the Marches in May, and was there for the harvest, like his letter said. He's a courier again, carrying letters and parcels over the footbridge, officially, written in the ledger every time. He won't use the word [i]link[/i]. He won't let anyone use it near him. He whistles on the stairs.
*if donors_freed and (ending = "D")
  *comment HUGO_PAID
  Hugo signed, because he had a mortgage, and isn't proud of it. He paid the mortgage off. He's driving the night buses now, the ninety-one, the one that goes out past the depot, and he doesn't talk about last winter, because he signed something that says he won't. When anyone asks why he's so kind to the lads who fall asleep on the back seat, he says it's a room that goes places, and leaves it there.
*else
  *comment HUGO_FREE
  Hugo got his depot job back, and his lost wages, in the end, after a fight, and an apology in writing that he had framed and hung in the depot canteen. He's driving the night buses. He's angry, some days. He's allowed to be. He sits on Eastbank's association now, and gets counted.
*if donors_freed and (ending = "D")
  *comment CLIVE_PAID
  Clive signed, and asked for a copy, and then a second copy, for his students, in case they ever needed to know. He spent the money on a new kiln. He teaches Tuesday and Thursday evenings, and makes bowls that are cracked on purpose, with the cracks filled in gold, and sells them for too little.
*else
  *comment CLIVE_FREE
  Clive went back to his studio, with the yellow door and the gold crack, and taught his first class a week on Thursday after Reuben said a fortnight. He makes bowls that are cracked on purpose now, all of them, with the cracks filled in gold. His students call them Clives. He pretends to mind.
*comment ---------------------------------------------------------------- CH24.REL.01
*sid CH24.REL.01
*date 2028-03-13 19:00
*place P02
*mood night
Home. The shop, the new press, Martin's light on upstairs.
*if (final_rel = "single") or (final_rel = "")
  *comment REL_SINGLE
  *snapshot epilogue-single
  A single life, chosen. It turns out to be a very full one.

  The knack, a year older, and me learning what it's for. The city, all of it, the weather of a million people, and my work in the middle of it. Martin's kettle-warmth. Will's bright wire, brighter since the academy took him. Mum's calls from the coast, every Sunday, in batches, like her emails. The people I carried a little of, and who carried a little of me. The steps. The river.

  Nobody, not like that, not yet. I thought, a year ago, that would feel like something missing. It doesn't. It feels like room.
*elseif (final_rel = "quentin") and (final_shape = "grief")
  *comment REL_QUENTIN_GRIEF
  Quentin.

  I don't have a photograph of him that I can look at yet. I have his texts, in lower case, without apostrophes, and I read them sometimes when I can't sleep. [i]who do you think i am.[/i] [i]warm. how are you always warm.[/i]

  He'd hate this. He'd hate me sitting in my room on the anniversary being sad about him. He'd say, flatly, the way he said important things, that he decided it himself, and that I don't get to make it smaller by being sorry, or bigger by being sad. He'd tell me to go out. He'd tell me to be warm at someone.

  I'm going to. Not yet. But I'm going to. He'd want it said out loud, so I say it out loud, to my empty room, in case.
*elseif final_rel = "adrian"
  *if final_shape = "together"
    *comment REL_ADRIAN_TOGETHER
    *present adrian
    *snapshot epilogue-adrian
    @adrian:warm Adrian comes round at seven{@adrian_transfer|, off the footbridge from Bracken Court, as he does every Friday and every anniversary,| from Mercy House}, in his high-collared jacket with the cuffs re-elasticated by hand, and kisses me in the kitchen before he's taken it off. Privately, and properly, and ours. He's got a notebook with a page in it headed [i]Us[/i], and I'm not allowed to read it, and he updates it every week, and his ears go red every time.

    @adrian:small "I wrote a procedure," he says, tonight, over Martin's stew. "For the anniversary. It's one line." He shows me. [i]Be here.[/i]
  *elseif final_shape = "distance"
    *comment REL_ADRIAN_DISTANCE
    *present adrian
    *snapshot parting
    @adrian:warm Adrian's on the six o'clock from the footbridge, the way he is every other Friday, with his rucksack packed so neatly it looks vacuum-sealed. Two years at Bracken Court, and we're halfway, and we've never missed a weekend we planned, because he plans them, in a timetable, in his notebook, and I keep the other copy.

    @adrian:attentive "Known," he says, when I ask how he is. "Tired. Glad. Here." He puts his rucksack down. "In that order. Reversing now."
  *elseif final_shape = "parted"
    *comment REL_ADRIAN_PARTED
    Adrian's running the joint station now, or Mercy House's new training floor; I hear it from Victor, who tells me things I don't ask. We had a coffee in November, by accident, in the queue at the General. It mattered, what we were. It ended, and we both know why: he needed a life that fits in a notebook, and I'm not a procedure. He said "known" when I asked if he was happy, and meant it, and so did I.
  *else
    *comment REL_ADRIAN_FRIENDS
    *present adrian
    @adrian:amused Adrian comes round at seven with a folder, because he always comes round with a folder. The best partner I've ever had, and my friend, the real kind. We do the crossword. He's terrible at it. He reads the clues aloud as if they're charges. "Known or inferred," he says, about every single answer, and I tell him, and he writes it in two colours.
*elseif final_rel = "micah"
  *if final_shape = "together"
    *comment REL_MICAH_TOGETHER
    *present micah
    *snapshot epilogue-micah
    @micah:warm Micah comes round at seven{@micah_away|, off the train from the dam, a week early, because he couldn't wait,| from the Yard}, with a toolbag, because he can't imagine going anywhere without one, and fixes the dripping tap in the kitchen before he's said hello. Then he says hello. Privately, and properly, and ours.

    @micah:amused "Dad says hello," he says. "Dad says bring you on Sunday. Dad says, here is what we'll do." His uneven smile. "I said I'd ask you. That's new."
  *elseif final_shape = "distance"
    *comment REL_MICAH_DISTANCE
    *present micah
    *snapshot parting
    @micah:warm Micah's on the late train from up north, off the dam for a week, thinner and browner and with a qualification he carries round in his wallet to show people. His letters have been terrible all year. I've kept every one. He drew the dam on all of them.

    @micah:small "I did something that was only mine," he says, on the platform, holding on. "And then I came back to you. That was mine too."
  *elseif final_shape = "parted"
    *comment REL_MICAH_PARTED
    Micah's {@micah_away|up north still, on the second year of the dam|running his own jobs now, out of the Yard, with his own van}. I see him at Eastbank, at the long table, on Sundays sometimes. It mattered. I was the first thing he ever chose that wasn't for his family. It ended because he needed to learn what that meant without me in the middle of it. He bumps my shoulder when he passes, and I bump his back.
  *else
    *comment REL_MICAH_FRIENDS
    *present micah
    @micah:laugh Micah comes round at seven to fix the press, which doesn't need fixing, because Martin asked him, because Martin likes him. My friend. The real kind. We eat chips on the step outside the shop with the vinegar the Marches say is inferior, and argue about whether it is, and he wins, because he's bigger.
*elseif final_rel = "ellis"
  *if final_shape = "together"
    *comment REL_ELLIS_TOGETHER
    *present ellis
    *snapshot epilogue-ellis
    @ellis:warm Ellis comes round at seven{@ellis_leaving|, home for the weekend from the placement, which the plan says is the first of the month and the plan was wrong,| from the workroom}, with his sketchbook and a bottle of something cheap. Privately, and properly, and ours. He's stopped performing with me. All of it. He's allowed to have bad days in my kitchen, and he does, and I don't fix them, and he says that's the most romantic thing anyone's ever done.

    @ellis:amused He draws Martin, badly on purpose, while Martin pretends not to notice. "Accurate," he says, and shows me.
  *elseif final_shape = "distance"
    *comment REL_ELLIS_DISTANCE
    *present ellis
    *snapshot parting
    @ellis:warm Ellis is on the half six, home from the placement for the anniversary, which isn't on the plan, which he's added to the plan, in ink. He gets off the train with his much-mended bag and his careful clothes and stands on the platform and waits for me to reach him, instead of performing that he doesn't mind waiting.

    @ellis:small "I missed you," he says. "I'm not going to say it cleverly. I missed you."
  *elseif final_shape = "parted"
    *comment REL_ELLIS_PARTED
    Ellis is {@ellis_leaving|at the placement, being brilliant at it, on his own for the first time|at the workroom, taking over the gilding}. He sends a postcard, sometimes: an ink drawing, with the perspective wrong on purpose. It mattered. It ended because he needed to find out who he was without anyone waiting for him, and he couldn't do that with me waiting. The last postcard said [i]Still accurate.[/i] I've got it on my wall.
  *else
    *comment REL_ELLIS_FRIENDS
    *present ellis
    @ellis:amused Ellis comes round at seven, in a second-hand suit, to take me to Felix's thing, or Milo's thing, or somebody's thing; there's always a thing with Ellis. My friend. The real kind. He tells me who's lying at every party. I tell him who's frightened. Between us we're unbearable.
*elseif final_rel = "dominic"
  *if final_shape = "together"
    *comment REL_DOMINIC_TOGETHER
    *present dominic
    *snapshot epilogue-dominic
    @dominic:warm Dominic comes round at seven, the sun an hour gone, {@dominic_away|back from the residency with a band and an album and a tan he says is a joke,|from the Regent,} with his collar up and cold hands. Privately, and properly, and ours. Every decision about us, he makes with me, not for me and not because of me. He says it's the hardest thing he's ever learned, harder than the dark.

    @dominic:shy He sings in the kitchen while Martin washes up. Martin pretends not to listen. Martin always listens.
  *elseif final_shape = "distance"
    *comment REL_DOMINIC_DISTANCE
    *present dominic
    *snapshot parting
    @dominic:warm Dominic's off the night train from the residency, at the station after dark, with his guitar case and a new song he won't sing until we're home. Six months turned into a year, on purpose, because he chose it, and I went to the ten o'clock shows, and he left a ticket at the door every night.

    @dominic:small "I kept deciding," he says, on the platform. "All year. And every time, I decided you."
  *elseif final_shape = "parted"
    *comment REL_DOMINIC_PARTED
    Dominic's {@dominic_away|still away, on the residency's second year, playing to rooms that start at ten|singing at the Lantern Rooms on Thursdays, to a full house}. His dad goes every week. It mattered. It ended because he's only just learning to decide things for himself, and he couldn't learn it with my life wrapped round his. I went to one of his shows in the autumn. He dedicated a song to "someone who never managed me," and didn't look at the back of the room, and didn't need to.
  *else
    *comment REL_DOMINIC_FRIENDS
    *present dominic
    @dominic:amused Dominic comes round at seven with a film from Milo's collection that's unforgivably bad. My friend. The real kind. We watch it in the back room with the lights off, and he explains every scene at length, and at midnight he helps Martin with the shutters on the shop, the way he likes them done.
*elseif final_rel = "nolan"
  *if final_shape = "together"
    *comment REL_NOLAN_TOGETHER
    *present nolan
    *snapshot epilogue-nolan
    @nolan:warm Nolan comes round at seven{@nolan_leaving|, home from Wexmoor for the weekend, three hours on the train with a playlist exactly three hours long,| from the new Switchyard}, with his field recorder and a jack plug going over and over in his fingers. Privately, and properly, and ours. He bumps my shoulder when he comes in, the way he has for five years now, and doesn't take it back.

    @nolan:amused "I recorded the river," he says. "This morning. For the anniversary." He plays it to me in the kitchen. It's the loudest thing in the room.
  *elseif final_shape = "distance"
    *comment REL_NOLAN_DISTANCE
    *present nolan
    *snapshot parting
    @nolan:warm Nolan's on the half six from Wexmoor, three hours with a playlist exactly three hours long, with a bag full of cables and a course report that says [i]outstanding[/i] which he pretends not to be proud of.

    @nolan:laugh "Best on the course," he says, on the platform. "By Christmas. You said." He bumps my shoulder. "You were right. I hate it."
  *elseif final_shape = "parted"
    *comment REL_NOLAN_PARTED
    Nolan's {@nolan_leaving|at Wexmoor, best on the course, like I said|running the desk at the new Switchyard, and brilliant at it}. We were best friends for four years before we were anything else, and we want to be best friends for forty more, and that's what it cost to find out. It mattered. He sends me recordings: a station, a storm, a room full of people clapping. He still bumps my shoulder when he's home. He takes it back now. It's fine.
  *else
    *comment REL_NOLAN_FRIENDS
    *present nolan
    @nolan:amused Nolan comes round at seven, like he's done every anniversary of every stupid thing since we were sixteen. My best friend. The real kind. We sit on the back step with two cans and argue about the lighting plot for Saturday, and he bumps my shoulder, and takes it back, and grins.
*elseif final_rel = "ansel"
  *if final_shape = "together"
    *comment REL_ANSEL_TOGETHER
    *present ansel
    *snapshot epilogue-ansel
    @ansel:warm Ansel comes over the footbridge at seven, in his formal collar, with a paper cone of chips from the Marches side, purely as a comparison. Privately, and properly, and ours, in two worlds. He speaks in the Court now, for common access, and they write it down. He signs his letters to me with a single initial and green wax.

    @ansel:amused "The vinegar," he says, eating one of Martin's chips, "is still worse." And then, not formally at all: "I missed you. Since Tuesday."
  *elseif final_shape = "distance"
    *comment REL_ANSEL_DISTANCE
    *present ansel
    *snapshot parting
    @ansel:warm Ansel comes over the footbridge at seven, on the Friday crossing, written in the ledger in Harlan's round hand. Two worlds, one footbridge, and a letter every week on thick cream paper with green wax, and the best correspondence in either world.

    @ansel:attentive "I should like it recorded," he says, on the step, "that the queue on the Marches side was forty minutes, and that I would have waited four hours."
  *elseif final_shape = "parted"
    *comment REL_ANSEL_PARTED
    Ansel speaks in the Court now, for common access, and they write it down. I read about it in Eamon's letters. It mattered: more than anything, he said, formally and then not. It ended because he belongs to a Court and a succession, and I belong to a city on the other side of a green door, and neither of us could ask the other to give that up. He sent a paper boat at the Candle Fair, with my name on it. Eamon carried it over.
  *else
    *comment REL_ANSEL_FRIENDS
    *present ansel
    @ansel:amused Ansel comes over the footbridge at seven, with a folder, and a complaint from Mr Tern about Mr Tait's roof, which he passes on. My friend. The real kind, in two worlds. We eat chips, and he says the vinegar's worse, and I say it's the same vinegar, and he says it's the principle, and it's the best argument I have all month.
*elseif final_rel = "quentin"
  *if final_shape = "together"
    *comment REL_QUENTIN_TOGETHER
    *present quentin
    *snapshot epilogue-quentin
    @quentin:warm Quentin comes round at seven{@quentin_away|, off the train from the capital, still in his academy jacket,| after his shift}, and puts his cold hands on the back of my neck without asking, because he says I owe him the warm. Privately, and properly, and ours. He's never grateful. He's never on his knees. He's here because he decided to be, every day, and says so.

    @quentin:amused "Who do you think I am," he says, when I ask if he's all right, and it isn't a question, and it's the answer.
  *elseif final_shape = "distance"
    *comment REL_QUENTIN_DISTANCE
    *present quentin
    *snapshot parting
    @quentin:warm Quentin's on the six o'clock from the capital, the one I've been getting on on Fridays all year. Tonight he got on it instead. He gets off the train in his academy jacket with his hands in his armpits and walks straight to me through the crowd like a man who's decided something.

    @quentin:neutral "Two hours," he says. "I've checked." And then: "Warm. Still. How?"
  *elseif final_shape = "parted"
    *comment REL_QUENTIN_PARTED
    Quentin's {@quentin_away|at the academy in the capital, top of his year|on nights with the emergency service, here}, being good at something that isn't surviving. It mattered. He said not to make it smaller than it was, so I don't. It ended because he needed to find out who he was when nobody owed him anything, me included. He texts me on the anniversary. [i]still here. you?[/i] I text back. [i]still here.[/i]
  *else
    *comment REL_QUENTIN_FRIENDS
    *present quentin
    @quentin:amused Quentin comes round at seven with coffee from Double Shift, which he still says is better than anywhere else, which it isn't. My friend. The real kind. He tells me flatly what's wrong with my life, and I tell him what's wrong with his, and we're both right, and he stays till eleven.
*else
  *if final_shape = "together"
    *comment REL_REUBEN_TOGETHER
    *present reuben
    *snapshot epilogue-reuben
    @reuben:warm Reuben comes round at seven{@reuben_away|, off the train from the city he's building a service for, a year of every other weekend,| after his shift}, with his medic's bag and a flask. Privately, and properly, and ours. He's learned he's allowed to want things. He wants me. He says so, out loud, often, in the kitchen, and Martin pretends not to hear.

    @reuben:amused "I've done the numbers," he says, tonight. "A year. Every weekend. It comes out the same every time." He puts the flask down. "That's good. That's what numbers are for."
  *elseif final_shape = "distance"
    *comment REL_REUBEN_DISTANCE
    *present reuben
    *snapshot parting
    @reuben:warm Reuben's on the six o'clock, home for the weekend from the city he's building a service for, his own team, his own rules. Every other weekend and all the bank holidays, like he worked out on the Riverside Steps. It came out the same every time.

    @reuben:small "I'm still here," he says, on the platform. "Just so you know." He's said it every time for a year. He means it more every time.
  *elseif final_shape = "parted"
    *comment REL_REUBEN_PARTED
    Reuben's {@reuben_away|in another city, building their response service, leading a team for the first time in his life|running the response service here, off probation at last}. It mattered. I stayed; he said he'd remember that. It ended because the first thing he needed to want was a life of his own, not one built round anyone else's. He sends a text on the anniversary. [i]Still here. Just so you know.[/i]
  *else
    *comment REL_REUBEN_FRIENDS
    *present reuben
    @reuben:warm Reuben comes round at seven, after a shift, and falls asleep on the sofa in the back room within twenty minutes, the way he does, and I put a blanket over him, the way I do. My friend. The real kind. He carries the other end of everything. Sometimes I carry his.
*comment ---------------------------------------------------------------- CH24.CONSEQ.01
*sid CH24.CONSEQ.01
*date 2028-03-13 20:00
*place P02
*set conseq_n 0
Later, when the house is quiet, I think about everyone else. The whole city, the way the knack gives it to me. A year of other people's lives, going on.
*if (s01 != "") and (conseq_n < 3)
  *comment CONSEQ_S01
  The print shop's still here. {@s01 = "resolved:kept"|The new press has paid for itself twice over; Martin says so to every customer, whether they ask or not.|Martin kept it open, somehow, through the worst year it's had, on shorter hours and stubbornness.} Avery & Son, Printers. There's a sign in the window that says [i]STILL HERE[/i] in a very nice serif.{@mc_future = "shop"| My name's on the rota, on paper.|}
  *set conseq_n +1
*if (s13 != "") and (conseq_n < 3)
  *comment CONSEQ_S13
  Will's at the academy. {@s13 = "resolved"|The scout at the trial wrote a lot of things down.|He got in on his second try, in the autumn, and nobody was surprised except him.} He's seventeen, going on eighteen, and all elbows still, and he runs every morning in the hat Martin knitted him, and Isaac Okafor's his best friend, and they're both unbearable about it.
  *set conseq_n +1
*if (s06 != "") and (conseq_n < 3)
  *comment CONSEQ_S06
  Switchyard's in the tram shed at Foundry Reach now. The acoustics are a gift from God, Desmond says, every night, to every band. The pigeons are still a problem. There's a plaque by the loading bay that says [i]The Last Set, 2026[/i], and nothing else, and the crew know what it means.{@mc_future = "crew"| I'm on the loading bay four nights a week, in my ear defenders.|}
  *set conseq_n +1
*if (s09 != "") and (conseq_n < 3)
  *comment CONSEQ_S09
  {@s09 = "resolved:probation"|The response service is off probation. A medic on call at night for the city's other people, with a rota, and a budget, and a van with no lily on it.|The response service got its hearing, in the end, and a van.} {@reuben_away|Reuben's building another one, somewhere else.|Reuben still writes [i]probation[/i] on things and crosses it out.}{@mc_future = "response"| I'm on nights with them, three a week, seeing the links fail before the monitors do.|}
  *set conseq_n +1
*if (s07 != "") and (conseq_n < 3)
  *comment CONSEQ_S07
  Mercy House's review board has two members who aren't wardens, and one of them is Florian, who retired from the archive and immediately became more frightening. {@adrian_transfer|Adrian runs the joint warden station in Bracken Court, his own unit, earned.|Adrian's on the training floor, teaching trainees to say which is known and which is inferred.}{@mc_future = "warden"| I train there, on Tuesdays and Thursdays, as their first sensitive in eight years, on my own terms, written down.|}
  *set conseq_n +1
*if (s16 != "") and (conseq_n < 3)
  *comment CONSEQ_S16
  The Regent's {@s16 = "resolved:shared"|still a home, with shared rules and no bought exceptions, and Lucien on the stage once a month with a gavel he still doesn't use|still arguing about fees, in the same room, which Lucien says is what a home is}. Milo's documentary about it premieres in the autumn. Everyone in it is in a dressing gown.
  *set conseq_n +1
*if (s14 != "") and (conseq_n < 3)
  *comment CONSEQ_S14
  The crossing succession held. The footbridge ledger has every line filled now, day and night, in Harlan's round hand{@harlan_hostile| or somebody else's; Harlan left the keeping in the summer, and nobody asked where he went|}. Nobody sells Northwood any more.
  *set conseq_n +1
*if (s15 != "") and (conseq_n < 3)
  *comment CONSEQ_S15
  Lyle's Bakery still opens at six. {@alive_silas|Silas runs the ovens. Otis sits by the door.|Otis runs the ovens, slower than he used to, and keeps a chair.} The long table at the back is where everyone ends up, eventually, after everything.
  *set conseq_n +1
*if (s08 != "") and (conseq_n < 3)
  *comment CONSEQ_S08
  Wesley's still in his room on Lock Street, above the launderette, with the lease in his own name. The plant's alive. He went to the gathering at North Ridge in October and ran with the pack for the joy of it, and didn't run anywhere else.
  *set conseq_n +1
*if (s11 != "") and (conseq_n < 3)
  *comment CONSEQ_S11
  Winton Court's tenants won. Russell's got a new boiler and a bad-knee allowance and a residents' committee that meets in flat thirty-one, which has been painted, and has a kettle, and no couch with a paper sheet on it.
  *set conseq_n +1
*if (s12 != "") and (conseq_n < 3)
  *comment CONSEQ_S12
  {@alive_felix|Felix's film is finished. Milo's documentary is nearly.|Milo finished his documentary, and dedicated it to Felix, at the start.} Between them they've filmed half the city's other people, with their permission, in their own words, and none of it's ever going to be on the news, and all of it's true.
  *set conseq_n +1
*if (s02 != "") and (conseq_n < 3)
  *comment CONSEQ_S02
  Nolan's {@nolan_leaving|at Wexmoor, on the technical course, best in his year|still at the desk at Switchyard, and he turned Wexmoor down in the end, for reasons he says are his}.
  *set conseq_n +1
*if (s03 != "") and (conseq_n < 3)
  *comment CONSEQ_S03
  Ellis is {@ellis_leaving|on his placement, in another city, restoring someone else's ceilings, and home the first weekend of every month|at the workroom, and Chukwudi's handed him the gilding}. The error book has a new line in his handwriting: [i]Mistakes I have now made. Several. Worth it.[/i]
  *set conseq_n +1
*if (s04 != "") and (conseq_n < 3)
  *comment CONSEQ_S04
  Micah's {@micah_away|up north on the dam, qualified, and coming home for full moons|running his own jobs out of the Yard}. Ernesto says, at the long table, that here is what we'll do, and then, every time now, asks Micah what he thinks.
  *set conseq_n +1
*if (s05 != "") and (conseq_n < 3)
  *comment CONSEQ_S05
  Dominic sings. {@dominic_away|On the residency, to rooms that start at ten.|At the Lantern Rooms on Thursdays, to a full house.} His dad's in the third row every time.
  *set conseq_n +1
*if (s10 != "") and (conseq_n < 3)
  *comment CONSEQ_S10
  The night rota at the depot has two drivers on every late bus now, after the ballot. Owen says nobody's been called by name from under the city since. He says it like he's knocking on wood.
  *set conseq_n +1
*comment ---------------------------------------------------------------- CH24.FINAL.01
*sid CH24.FINAL.01
*date 2028-03-13 22:00
*place P06 riverside_steps_night
*mood night
The Riverside Steps, at ten, a year to the night.
*if (final_shape = "together") or (final_shape = "distance")
  *comment FIN_TOGETHER
  He's beside me on the cold stone, where we sat a year ago, or near enough. The river's low and slow and green under the lamps. The flood mark's still there.

  And I let the knack have the room. It's the thing I do; it's the thing I've always done, ever since I was small and sat on Mum's feet after her bad shifts. I read the weather. The river, cold and patient. The city behind us, a million people having an ordinary Monday. Him, beside me, warm or cold-handed, steady, here.

  And, for the first time, in the middle of it, clear as anything, like a light I've been standing in front of all my life: me.

  I've always been able to feel what everyone else feels. I've never been able to feel what anyone feels about me. I still can't. It turns out I don't need to. I can feel what I feel. And what I feel is here, on the steps, with him, in the room, included.
*else
  *comment FIN_OTHER
  I'm on my own, on the cold stone, where I sat a year ago. The river's low and slow and green under the lamps. The flood mark's still there.

  And I let the knack have the city. It's the thing I do; it's the thing I've always done, ever since I was small and sat on Mum's feet after her bad shifts. I read the weather. All of it, from here: the river, cold and patient; Martin's kettle-warmth, three streets away; Will's bright wire; a party on a barge; a row above the chip shop; someone in love, very near, very new. The whole city, a million people, having an ordinary Monday.

  And, for the first time, in the middle of it, clear as anything, like a light I've been standing in front of all my life: me.

  I've always been able to feel what everyone else feels. I never thought to feel for myself. I can now. I'm in the room. I'm included.

The river goes on. So do I.
*if ending = "A"
  *ending A
*elseif ending = "B"
  *ending B
*elseif ending = "C"
  *ending C
*elseif ending = "D"
  *ending D
*elseif ending = "E"
  *ending E
*elseif ending = "F_Q"
  *ending F_Q
*elseif ending = "F_S"
  *ending F_S
*else
  *ending F_F
`);
