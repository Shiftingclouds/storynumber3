NB.scene("ch07", String.raw`
*mood day
*set ch 7
*chapter 7 An Evening Already Promised
*comment ---------------------------------------------------------------- CH07.HOME.01
*sid CH07.HOME.01
*date 2026-10-02 12:00
*place P02 print_shop
*present martin will
October comes in wet. The plane trees on Latch Lane give up all at once, in one night of wind, and in the morning the whole street is yellow and slippery and Martin sweeps the step three times before he admits it's a losing game.

Two weeks since the Riverside Steps. Ansel sends notes, actual notes, on thick cream paper, delivered by hand by people I never see arrive: [i]Nothing new. I have asked everyone I am permitted to ask. I am beginning to ask people I am not.[/i] Quentin's hands are colder. He says it's October. I say nothing, and he knows exactly what kind of nothing it is.

And yesterday, the bank called in the overdraft.

@martin:tense I know because I was in the back putting away a delivery of card stock when the phone went, and Martin said "Yes," and "I see," and "By when?" in a voice I've never heard him use, and then, "Thank you for letting me know," which is what Martin says when someone has told him something terrible.
*if s01 = "fore"
  The catering money came in, after we chased it. It wasn't enough. It turns out that when a bank decides it's worried about you, it stops caring how nicely anyone else is paying you back.
*else
  I didn't know it was this bad. I'm not sure Martin did either, until yesterday.
So it's Friday lunchtime, and he's at the counter doing sums on the back of a proof sheet (a wedding invitation, [i]Gemma & Liam, the fourteenth of November[/i], a hundred and twenty copies on cream) and pretending he isn't. The knack gives me the kettle-warmth of him, same as always. And under it, this week, a cold weight, like a stone in a coat pocket that he keeps putting his hand on to check it's still there.

Will's home. It's a teacher-training day, which he announced at breakfast as if he'd personally negotiated it. He comes down the stairs for a sandwich and stops on the bottom step.

@will:guarded "How much?" he says.

@martin:tense Martin turns the proof sheet over. "How much what?"

@will:guarded "The sums. On the back of Gemma and Liam." Will leans on the banister, all elbows. "Everyone's dad at school does that face when it's the mortgage. I'm seventeen, Dad. I'm not stupid."

@martin:shy "Nobody said you were stupid." Martin takes his glasses off, and then can't find anywhere to put them, and puts them back on. "It's a cash-flow thing. It's nothing to worry about."

The stone in his pocket gets heavier while he says it. Will looks at me. I look at Will. It's the chin thing, from the match fence: [i]you're the grown-up here too now, apparently. Do something.[/i]

*choice
  #Put my savings on the counter. It's not much. It's not nothing.
    *set s01 "fore"
    *set fr_martin +1
    *set savings_given true
    I go upstairs and get the bank card out of the tin under my bed, and come back down and put it on the counter on top of Gemma and Liam.

    "Everything in there," I say. "It's the camera fund. Three summers of Switchyard and the Saturday market. Take it."

    @martin:hurt Martin looks at the card as if it's bitten him. "Absolutely not."

    "It's not a present. It's a loan. You can write me an invoice. You love an invoice."

    @martin:shy "{name}..."

    "You took me in," I say. "When Mum went. You gave me the room and the key and never once made me feel like a lodger. Let me do one thing."

    The stone in his pocket doesn't go anywhere. But the kettle-warmth comes up round it, all at once, so strongly that I have to look at the till.

    @martin:warm "A loan," he says at last, gruffly. "With terms. Written down."

    @will:amused "He's going to write it on a proof sheet," says Will, from the stairs.

    He does. He writes it on the back of a spoiled business card, in his careful capitals, [i]I.O.U., WITH INTEREST, M.A.[/i], and pins it to the corkboard behind the till between a taxi number and a photo of Mum in a hat, where every customer can see it, and I think it's the most embarrassing and the best thing he's ever done.
  #Offer to take on more shop shifts, and mean the hours.
    *set s01 "fore"
    *set fr_martin +1
    *set shop_hours true
    "Put me on the rota," I say. "The early shifts. Tuesdays, Thursdays, Saturdays. Then you can stop paying the Saturday girl, and do the quotes instead of the counter."

    @martin:tense "I can't pay you for them."

    "You can pay me in toast."

    @martin:shy "You've got your crew calls. Your lights."

    "I've got four crew calls a month and a lot of evenings I spend lying on my bed looking at the ceiling. I'll do mornings. I'm up anyway." That's not true, and he knows it isn't, and I let him know I know he knows.

    @will:amused "He's not up anyway," says Will. "He's never up anyway."

    @martin:warm Martin looks between us for a long time. Then he gets the rota down off its nail and writes me in, in pencil, three mornings a week, and hands me the pencil. "Sign it," he says. "So it's official." The kettle-warmth comes up round the stone and holds it, the way you'd hold a hot mug in both hands.
  #Tell Martin to ask his biggest client for the money in person, and go with him.
    *set s01 "fore"
    *set nerve +2
    *set people +2
    "Who owes you the most?" I say.

    @martin:guarded Martin gives me a look over his glasses. "Nobody owes me. I invoice. People pay."

    "Who invoices you the least, then? Who have you been doing for twenty years without chasing?"

    @will:amused "The market," says Will, from the stairs, with his mouth full. "The Crescent. Every price card on every stall. Every Christmas flyer. You did the traders' association's [i]raffle tickets[/i]."

    @martin:shy "They're very good customers."

    "They're very [i]old[/i] customers. When did they last pay a quarter on time?"

    Martin doesn't answer, which is an answer.

    So at three o'clock we walk up to Crescent Market together, in the rain, Martin in his good coat with a folder of invoices under it, and find the treasurer of the traders' association at her olive stall. She's seventy if she's a day and has done the association's books since before I was born. The knack gives me her the moment Martin says hello: fond, and deeply embarrassed, and not at all surprised to see us.

    I do most of the talking. I don't say [i]bank[/i]. I say [i]two quarters[/i], and [i]the winter order[/i], and [i]in advance, this year, if the association can manage it[/i], and she looks at Martin, who is studying the olives as if they're the most interesting thing on earth, and says, "Oh, Martin. You should have [i]said[/i]."

    We walk home with a cheque for two quarters and a handshake on the winter order, paid up front. It isn't the overdraft. It's a lot of it. Martin doesn't say anything all the way down the hill. At the shop door he stops, and puts his hand on my shoulder, and squeezes once, hard, and goes in.
It won't fix everything. I know that. The bank's letter is still in the drawer under the till with the red-striped invoices. But when Will goes back upstairs with his sandwich, he knocks on the banister twice as he goes, which in Will is practically a speech.
*page_break
*comment ---------------------------------------------------------------- CH07.CHOICE.01
*sid CH07.CHOICE.01
*date 2026-10-02 17:00
*place P02
By five o'clock, the evening has three doors in it.

The first one I've known about for three weeks. Nolan turns twenty today. He made me swear, back in September, with an actual pinkie, like we were eleven, that whatever was going on with me, whatever [i]weird week[/i] I was having, I'd be at his on the second of October. My phone's had four texts from him since noon.

[i]reminder that you PROMISED[/i]

[i]9pm. bring nothing. bring yourself. bring crisps[/i]

[i]peter has made a PLAYLIST with a PRINTED TRACK LISTING. I need backup[/i]

[i]not that I care if you come. but you promised[/i]

The second door is Micah.{@b_micah_seat| He put his number in my phone at the lights on Truss Road, the night he drove Ansel and me home from the depot, and typed it in himself because I was too tired to spell Serrano.| He got my number off Nolan, apparently, which Nolan denies.} He asked on Sunday:

[i]hey it's micah (serrano, the distro). dad says you have to come to dinner friday, his words not mine. 7pm. eastbank. there will be far too much food and my brother will do a bit[/i]

And again, this morning, as if he thought I might have forgotten, or might not have wanted to say no to his face:

[i]still on? no pressure. there's a seat[/i]

And the third came through the print shop's letterbox on Wednesday, in an envelope with my name on it in brown ink, addressed to me, [i]c/o the printer, Latch Lane[/i], as if I were a character in a novel.
*letter ellis_card
I look at the three of them on the kitchen table for a long time: my phone, my phone, a postcard. The knack's no use for this. It never tells me anything about what people feel about me. I'll have to decide like everyone else does: badly, and in a hurry, and with my coat already on.

*choice
  #Nolan's party. I promised.
    *set ch07_evening "nolan"
    *goto nolan
  *if st_micah >= 1
    #Micah's family dinner in Eastbank. He asked twice.
      *set ch07_evening "serrano"
      [i]still on,[/i] I text Micah. [i]what do I bring?[/i]

      The reply comes before I've put the phone down. [i]nothing. dad will be offended. bring an appetite and a thick skin[/i]

      Then I text Nolan: [i]I'm so sorry. Something came up tonight. I'll try and get there later.[/i] I look at [i]try[/i] for a long time before I send it.
      *goto serrano
  *if st_ellis >= 2
    #The open studio night on University Hill. Ellis said I might like it.
      *set ch07_evening "uni"
      I put the postcard in my jacket pocket, as if it's a ticket.

      Then I text Nolan: [i]I'm so sorry. Something came up tonight. I'll try and get there later.[/i] I look at [i]try[/i] for a long time before I send it.
      *goto uni

*comment ================================================================ Nolan's party
*comment ---------------------------------------------------------------- CH07.NOLAN.01
*label nolan
*sid CH07.NOLAN.01
*date 2026-10-02 21:00
*place P28
*present nolan peter owen milo hugo
*mood night
*set b_nolan_kept true
*set hugo_met true
*set fr_hugo 1
*set fr_peter 1
*set fr_milo 1
Laird's Flatshare is three floors up over a key-cutting shop in Northline, five minutes' walk from the depot: three bedrooms, one bathroom, a balcony the size of a doormat, and tonight, at a conservative estimate, twenty people.

@nolan:amused Nolan opens the door in a paper crown. He looks at me for about a second. "Oh," he says. "You came," as if it's nothing, as if he'd forgotten he asked, and then he hugs me so hard my back clicks.
*if hurt_nolan >= 1
  He holds on a beat longer than a hug needs. I know what the beat is for. The busy week. All the busy weeks. He lets go before I can say anything about it, and takes the crisps, and says they're the wrong kind, and they are.
@peter:neutral Peter's hosting as if it's a job interview. He has a lanyard on. At his own flat. The playlist really does have a printed track listing, blu-tacked to the fridge, with timings. "We're eleven minutes behind," he tells me, instead of hello. "It's fine. I've built in slack."
*meet owen
*if fr_owen >= 1
  And Owen's here. Owen Price, from the depot, the driver who remembered Eamon. Which is how I find out that Nolan's third flatmate, the one Nolan calls the Ghost because he works nights and communicates entirely in notes about the bins, is a man I've already met at midnight under a strip light.

  @owen:amused "Small city," Owen says, when he sees my face. He's got the good wine glasses on the top shelf of the kitchen cupboard behind him and he's standing in front of it like a bouncer. "Don't tell Nolan how we met. He thinks I don't have a life."
*else
  Owen, the third flatmate, is the one Nolan calls the Ghost, because he drives night buses and communicates entirely in notes about the bins. In person he's a long, patient face and short twists and a union pin on his fleece, even at a party. He's standing in front of the kitchen cupboard with the good wine glasses in it like a bouncer.

  @owen:amused "Owen," he says, and shakes my hand. "You're the one who fixes Nolan's cables. He talks about you like you're a legend." He considers. "A small legend. A local one."
*set fr_owen +1
*meet milo
There's a small freckled lad with a mop of red-brown hair filming the cake: a camera always on a strap round his neck, and the look of someone who's always half behind it. Milo Finch. He knows Nolan from the all-ages nights at Switchyard, and he works days at the Regent. I keep my face very still when he says that.

@milo:amused "I'm making a documentary," he says, pointing the camera at me. "Say something about Nolan."

"He's the best sound tech in Calder and he still can't fold a cable properly."

@milo:laugh "Perfect. That's going in." He swings round to film the cake again, which is shaped like a mixing desk and is listing badly to the left.
*meet hugo
And there's Hugo.

@hugo:laugh Hugo Naranjo is a depot mechanic on Owen's rota, invited, as far as I can tell, because he was in the canteen when Owen mentioned it. He's got a broad friendly face and black hair and a hi-vis vest on over a good shirt, which he clearly wore to look smart and then forgot to take off, and he's arguing cheerfully with anyone who'll listen about a hinge. "I fixed it [i]wrong[/i]," he's saying, delighted. "The back door on the forty-two. I put the hinge on upside down. It opened the wrong way for three days and nobody noticed, because it still opened. That's buses. That's buses in a sentence."

@owen:amused "Pavel noticed," says Owen.

@hugo:amused "Pavel notices everything. Pavel's going to write my reference and it's going to say [i]hinge[/i] on it and nothing else." He turns to me as if we've been talking for an hour. "I've got an interview. Monday week. Permanent post. A pension. A locker with my name on it instead of [i]AGENCY 3[/i]."

The knack gives me him like the smell of bread: simple and warm and filling up the room. He's the only person here happier than Nolan, and Nolan is very, very happy. He's pretending not to be. It's the paper crown. You can't pretend anything in a paper crown.

*choice
  #Talk to Hugo. He's the only person here happier than Nolan.
    *set fr_hugo +1
    I end up on the arm of the sofa with Hugo, who talks the way some people breathe.

    @hugo:warm He tells me everything. He's from Southmere, Willow Court, the flats by the rec. He's been agency for four years: nights, weekends, Christmas Day, whatever needs a body. He likes buses. Not in a train-spotter way, he says; in a [i]people[/i] way. "A bus is a room that goes places," he says. "Forty people who'd never be in a room together, all going somewhere. And if the door doesn't open, none of them get there. That's me. I'm the door."

    "I do lights," I say. "At Switchyard. Same thing, sort of. If they don't come on, nobody sees anything."

    @hugo:laugh "Yes!" He points at me with his drink. "Yes. Nobody thanks the door. Nobody thanks the lights. But you know." He taps his chest. "You know it was you."

    @hugo:warm He shows me a photo on his phone of the depot at five in the morning, every bus lit, nosing out of the shed one after another like something being born, and says it's the best view in Calder, and I believe him. When he goes to get another drink he claps me on the shoulder and says, "Monday week. Wish me luck," and I do.
  #Stick with Nolan. It's his night.
    *set st_nolan +1
    I stick with Nolan. It's his night, and he's spending it the way he always spends parties, which is making sure everybody else is having one.

    So I do it with him. I rescue the playlist from Peter at track fourteen, when the printed timings are forty minutes out and Peter is visibly suffering. I find the bottle opener, which is in the bathroom, for reasons nobody can explain. I stand beside Nolan while his mum rings from the coast and sings him happy birthday down the phone, and he holds it away from his ear and pulls a face and doesn't hang up until she's finished, all three verses.

    @nolan:amused "She does a harmony," he says, afterwards. "On her own. She does both parts."

    @nolan:warm It's the same thing we've always done, him and me, the two of us working a room from the side of it. Around eleven he stops, in the kitchen doorway, with a bin bag in one hand and a paper plate in the other, and looks at me. "Thanks," he says. "For coming. I mean it." And then he gets embarrassed and gives me the bin bag.
*page_break
*comment ---------------------------------------------------------------- CH07.NOLAN.02
*sid CH07.NOLAN.02
*date 2026-10-02 23:00
*place P28
*present nolan dominic milo owen peter hugo
At eleven the buzzer goes, and Milo goes down, and comes back up with Dominic Bell.

I didn't know he was coming. From the look on Nolan's face, neither did Nolan.

@nolan:surprised "Dominic [i]Bell[/i]," Nolan says. "Dominic Bell. We thought you'd moved to the moon."

@dominic:shy "Nights," says Dominic. "I work nights now." He's in an old jumper, the thick kind with a hole at one cuff, with his dark hair falling in his eyes, and he looks at the twenty people in the tiny flat the way you'd look at the sea from a cliff.

I know exactly what [i]nights[/i] means. So, I realise, watching Milo steer him through the crowd with one hand on his elbow, does Milo. Milo, who works days at the Regent. Milo, who asked him here.

@milo:warm "I told him it was a small do," Milo says to me, not quite apologising. "He needs to get out. He's been in that building for a year."

The flat is warm and loud with twenty heartbeats, and Dominic stands in the middle of it holding a glass of red wine he isn't drinking. The knack gives me the stillness of him, the careful, held stillness, like someone standing very straight on a bus that keeps braking. And under it, the thing I felt in the Regent: a lonely twenty-two-year-old who misses the sound of a room going quiet for him.

@owen:neutral Then Owen, of all people, comes out of his bedroom with a guitar nobody knew he owned, and says, "I heard you used to play," and holds it out.

Dominic looks at it for a long time.

@dominic:tense "I haven't," he says. "For anyone. In a year."

@nolan:warm "So it's not for anyone," Nolan says. "It's for me. It's my birthday. You have to. It's the law."

He takes the guitar. He sits on the arm of the sofa. He tunes it, slowly, head down, taking far longer than it needs. And then he plays the one everybody at Switchyard used to ask for, the one about the last bus home, and his voice comes out low and rough and warm and not quite steady, and the room goes quiet.

Not the awkward quiet. The good kind. The kind I used to watch from the lighting desk at Switchyard, when a whole bar would stop ordering drinks for him. Peter stops fiddling with the playlist. Hugo stops talking, which I didn't think was possible. Milo lifts the camera, and then, after a second, lowers it again, and just watches.

*choice
  *if st_dominic >= 2
    #Sing the harmony. Badly. Make it easy for him to keep going.
      *set b_dominic_music true
      *set st_dominic 3
      *set s05 "intro"
      On the second chorus his voice catches, on the high line, and I can feel him about to stop. Not the music: him. The whole of him about to fold up and put the guitar down and apologise.

      So I sing the harmony.

      Badly. Really badly. I've heard this song forty times from the side of a stage and I've never once sung it out loud, and it shows. Nolan looks at me in open horror. Owen winces.

      @dominic:laugh But Dominic laughs, in the middle of the line, the low rough laugh from the stage, and doesn't stop. He comes back in under me and carries the tune while I mangle the harmony, and by the last chorus half the room is singing, and it's a mess, and it's wonderful, and when it's over he looks up at me through his hair.

      @dominic:warm "That was terrible," he says.

      "I know."

      @dominic:warm "Thank you." He means it. The knack gives me it, plain, like a light left on in a window. And he plays another one.
  #Just listen.
    *set s05 "intro"
    I don't do anything. I just listen.

    @dominic:tense His voice catches on the high line in the second chorus, and I feel him wobble, and then I feel him decide. He goes back for the line and gets it, and finishes the song, and the room stays quiet for a second after the last chord, the way rooms used to for him.

    @peter:amused Then everyone claps, too loudly, and Peter says "Encore," very formally, as though reading it off the track listing.

    @dominic:shy Dominic ducks his head. "I'm out of practice," he says, to nobody. But he doesn't give the guitar back. He plays another one, quieter. And I stand in the kitchen doorway and watch the stillness in him loosen, just a little, like a knot somebody's been worrying at for a year.
@milo:warm Later, when Dominic's gone, early, the way he has to, Milo finds me by the fridge. "He'll kill me for saying it," he says, "but that's the first time I've seen him look like himself since last summer." He turns the camera over in his hands and doesn't lift it. "Thanks for not making it weird."
*page_break
*comment ---------------------------------------------------------------- CH07.NOLAN.03
*sid CH07.NOLAN.03
*date 2026-10-03 01:45
*place P28
*present nolan
By quarter to two the party has shrunk to five people asleep in various positions and Peter, who is hoovering.

Nolan and I are on the balcony. It's the size of a doormat, with two chairs on it: a camping chair and a kitchen chair, which Nolan says is the best-furnished room in the flat. Below us, over the rooftops, the Night Bus Depot is lit up orange, and every few minutes a bus noses out of the big shed and turns onto Signal Road with its windows glowing, empty, going somewhere.

His paper crown's torn. He's still wearing it.

He's got his phone in his hand, and he's turning it over and over, the way he turns everything over, and then he stops and holds it out to me.
*if s02 = "intro"
  The screen says [i]Wexmoor School of Sound: Confirm your place. Deadline: Monday 5 October.[/i] The course. The one he told me about at the sound desk at Switchyard in August, and then never mentioned again, and neither did I.
*else
  The screen says [i]Wexmoor School of Sound: Confirm your place. Deadline: Monday 5 October.[/i]

  @nolan:tense "They offered me a place," he says, very fast, like pulling off a plaster. "In the summer. Sound engineering. The proper one, the good one. It starts next September. I haven't told anyone. I haven't told my [i]mum[/i]."
@nolan:tense "Monday," he says. "I've got to say yes by Monday or they give it to someone else." He looks at the depot. "Wexmoor's four hours on the train. I looked."

"I know it is."

@nolan:small "It's stupid," he says. "It's a course. People do courses."

And then he bumps my shoulder with his, the way he's done since we were sixteen, the way he did on the step by the river, the way he does a hundred times a year.

And this time he doesn't take it back.

He leaves it there. His shoulder against mine, on the balcony, in the cold, with the buses going out below us. And the knack, which can tell me what a stranger in a bus queue had for breakfast and whether she's worried about her son, can't tell me a single thing about what he means by it. It never can, with me. It's the one thing it won't do.
*if gift_nolan
  @nolan:amused "Don't do your thing," he says, without looking at me.

  "I can't. Not about me. It doesn't work like that. I told you."

  @nolan:small "That's a stupid design," he says, and doesn't move his shoulder.

*choice
  *if hurt_nolan < 2
    #Let it mean something. Stay against his shoulder.
      *set b_nolan_birthday true
      *set st_nolan 4
      *set s02 "fore"
      I don't move.

      I don't make a joke. I don't say [i]anyway[/i] and get up to find another drink. I let my shoulder stay against his, and after a while I let my head go back against the wall of the flat, and after a longer while I feel him let out a breath he's been holding, I think, since about August.

      Neither of us says anything. That's the point. Below us, a bus comes out of the shed and turns onto Signal Road and goes off into the city with all its lights on and nobody on it, and then another one does, and then another.

      @nolan:warm "Happy birthday to me," he says at last, very quietly.

      "Happy birthday."

      I don't know what it means. I don't know what it means for [i]me[/i], which is worse. I only know that it isn't habit any more, the shoulder, and that he knows it isn't, and that neither of us is going to say so tonight. We stay out there until the cold gets into our hands and Peter knocks on the glass to say he's going to bed and would we please lock the balcony, as though anyone could climb up three floors to steal a camping chair.
  #Tell him to send the application. Tonight. He's good enough.
    *set s02 "fore"
    *set nolan_applied true
    "Send it," I say.

    @nolan:surprised He looks at me.

    "Tonight. Now. You're the best sound tech in this city and you know it. Des knows it. Every band that's ever played Switchyard knows it. You've been waiting for someone to tell you you're allowed. So I'm telling you. You're allowed."

    @nolan:tense "It's four hours away."

    "It's a train. They have trains."

    He looks at the phone for a long time. Then he looks at me, for a longer time, and there's something in his face I can't read, and the knack won't read it for me.

    @nolan:small "Okay," he says. And presses [i]confirm[/i], and puts the phone face down on his knee as if it might go off, and laughs, a short, shaky laugh. "Oh, God. I've done it. I've actually done it."

    "You've done it."

    @nolan:warm "You're coming to visit," he says. "Every month. Swear. Pinkie."

    I swear. Pinkie. On the balcony, at two in the morning, like we're eleven, while the buses go out below us to the whole rest of the world.
  #Make a joke. Go back inside before it becomes anything.
    *set s02 "fore"
    "If you go," I say, "who's going to fold the cables wrong at Switchyard? It'll be chaos. Des will have to hire someone competent."

    @nolan:amused He laughs. It's a real laugh, mostly.

    And he takes his shoulder back, and I tell myself I didn't see how carefully he did it, and I get up and say I'm going to find the last of the crisps, the wrong kind, and I go inside where it's warm and Peter's hoovering and everything is exactly as it's always been.

    Through the balcony door I watch him sit out there on his own for a while with the phone in his hand, turning it over and over. He doesn't send anything. He doesn't come in.
*goto morning

*comment ================================================================ the Serrano table
*comment ---------------------------------------------------------------- CH07.SERRANO.01
*label serrano
*sid CH07.SERRANO.01
*date 2026-10-02 19:00
*place P07 serrano_yard
*present micah ernesto leandro tomas wesley pavel hugo
*mood dusk
*set hugo_met true
*set fr_hugo 1
*set fr_ernesto 1
*set fr_leandro 1
*set fr_wesley 1
*set fr_pavel +1
*set b_micah_seat true
*set st_micah +1
*set s04 "intro"
*set s08 "intro"
Serrano Yard is on the far side of Eastbank, down a lane of lock-ups and repair shops: a gated yard full of vans and cable drums and one enormous skip, with the workshop on the ground floor and the family above it, and every window lit.

The table's upstairs, and it's two tables pushed together, one slightly higher than the other, with a cloth over the top that hides the join and not the step. There are eleven chairs, none of them matching. There's enough food for thirty.

@micah:warm Micah meets me at the top of the stairs, in a clean shirt with the collar still creased from the packet, and says "You came," with his uneven grin, as if it had been in doubt. Then he steers me to the table with a hand between my shoulder blades, and there's a chair beside his that's been pushed in close, with a folded napkin on it, and he doesn't say anything about it at all. He just sits me in it, as if I was always coming.
*meet ernesto
@ernesto:neutral Ernesto Serrano sits at the head. He's Micah in thirty years: the same big square face, grey coming in at the temples, a thick moustache, builder's hands that make the cutlery look like a doll's. He doesn't do small talk. He does proposals. "Here is what we'll do," he says, when I've barely sat down. "You'll eat first. Then you'll tell me about my son and the breaker at Switchyard, because he tells it one way and I don't believe him."
*meet leandro
@leandro:laugh "He tells it with him as the hero," says the brother opposite. Leandro: Micah's build gone lean, close-cut hair, a boxer's nose that's been flattened at least once. "He always does. Ask him about the time he rewired the church hall. Go on. Ask him how many times the organ caught fire."

@micah:amused "[i]Once.[/i] It caught fire [i]once.[/i]"

@leandro:amused "Once is a lot of times for an organ."
*if s13 = "fore"
  @tomas:amused Next to him, wiry, with a dark ponytail and taped knuckles, is Will's coach: the young guy from the match with the clipboard and the voice that could strip paint. Tomas Rivas. Micah's cousin, it turns out, which in Eastbank seems to cover about half the population. "Avery's cousin," he says, pointing his fork at me. "Tell that kid he passes now. Tell him I noticed."
*else
  @tomas:amused Next to him, wiry, with a dark ponytail and taped knuckles, is a cousin. Tomas Rivas, who coaches kids' football at the community ground and boxing at his cousin's gym and, from the sound of it, anyone who'll stand still long enough. "You're the lighting one," he says, pointing his fork at me. "Micah says you've got good hands. He never says that. He says everyone's hands are rubbish."
*meet tomas
He reaches for the bread with his right hand, across himself, instead of the left, which is closer. I notice it because the knack notices it first: a flinch, very small, kept very quiet, like a door eased shut so nobody hears.
*meet wesley
And at the far end of the table, in a hoodie too thin for October, with a shaved head growing out into dark fuzz, is a lad about my age who hasn't said a word since I sat down. Wesley Dent. He moved in with Pavel in the summer, Micah tells me, low. New to Eastbank. New to a lot of things.

@wesley:guarded "Don't," says Wesley, before I've said anything. "Whatever the face is. Don't."

"I didn't do a face."

@wesley:guarded "Everyone does a face." He goes back to his plate.
*meet pavel
@pavel:neutral At seven thirty the buzzer goes and it's Pavel Kolar{@fr_pavel >= 2|, the mechanic from under the bus at the depot, who nods at me as if we see each other every day| (a long face, a short brown beard, a mechanic's overalls, few words)}, come to borrow a torque wrench. "Five minutes," he says.
*meet hugo
@hugo:laugh He's brought a friend: a big, cheerful man in a depot hi-vis vest with a broad friendly face and black hair, who is already apologising for being in the way before he's through the door. Hugo Naranjo. Pavel put in a word for him at the depot, it turns out. "I'm just here for the wrench," Hugo says. "Honestly. I'm not stopping."

@ernesto:neutral "Sit," says Ernesto. "Here is what we'll do. You'll sit. You'll eat. Then you'll take the wrench."

Hugo sits. Everyone sits for Ernesto. It's like weather.

It's the loudest meal I've ever eaten. Leandro does a bit, as promised, about Micah and the organ. Ernesto makes three separate proposals about my future, all of them concrete and involving cable. Hugo tells the whole table about a hinge he fixed upside down, and about his interview on Monday week for a permanent post, a proper one, with a pension, and Ernesto proposes that he wear a tie, and Leandro proposes that he doesn't, and they argue about it for ten minutes as if it's their interview.

And the knack gives me the room, and there's something under it.

I felt it from Micah at Switchyard the first night: a deep, patient tiredness, right down in the bones, like something animal. I feel it again now. Not just from Micah. From Ernesto at the head of the table. From Leandro. From Tomas, under the hidden flinch. From the silent lad at the end, loudest of all, raw and new and frightened. The same undertone, running through the family like a note held on an organ.

Pavel doesn't have it. Hugo doesn't have it. Nor do I.

[i]There are families in Eastbank who change on full-moon nights.[/i] I've known that for a month. I didn't know I was going to have dinner with one.

*choice
  #Talk to Wesley like he isn't a project.
    *set fr_wesley +1
    I pick up my plate and go and sit at the far end, in the empty chair beside Wesley, and don't do a face.

    @wesley:guarded He looks at me sideways. "What."

    "Nothing. Leandro's doing the organ bit again. I've heard it."

    @wesley:guarded "You've been here an hour."

    "He's done it twice."

    @wesley:amused Something happens at the corner of his mouth. It's not a smile. It's the idea of one, considered and rejected.

    We don't talk about anything. That's the trick, I think. We talk about the food, which is incredible, and about his hoodie, which he says is fine, and about Pavel's flat, which has a boiler that screams at four in the morning, and about the fact that he's looking for a room of his own and nobody will rent to a nineteen-year-old with no references and no deposit and a face like his. He says that last bit like a joke. It isn't.

    @wesley:guarded "Everyone here's being really nice to me," he says, low, looking at his plate. "It's doing my head in."

    "Because they feel sorry for you?"

    @wesley:hurt "Because I don't know what I'd do if they stopped."

    The knack gives me him: a boy standing in a doorway in the rain, not sure if he's allowed in. I don't say anything. I pass him the bread. He takes it.
  #Ask Hugo about the depot job. He lights up.
    *set fr_hugo +1
    "What's the job?" I ask Hugo, across the table, and he lights up like I've switched him on at the wall.

    @hugo:warm "Depot mechanic. Permanent." He says [i]permanent[/i] the way other people say [i]lottery[/i]. "Four years agency. Nights, Christmas Day, whatever needs a body. And now there's a post, a real one, with my name on the locker instead of [i]AGENCY 3[/i]." He grins at Pavel. "If this one writes me a reference that says more than [i]hinge[/i]."

    @pavel:amused "It will say [i]hinge[/i]," says Pavel. "And [i]reliable[/i]."

    @hugo:laugh Hugo puts his hand on his heart. "Reliable. From Pavel. I'll have it framed."

    @hugo:warm He tells me about the buses: how a bus is a room that goes places, forty strangers all getting somewhere together, and if the door won't open none of them do. "I'm the door," he says. "Nobody thanks the door. But you know it was you." The knack gives me him like the smell of bread. Simple and warm and filling the room. He's the happiest person at a very happy table.
*page_break
*comment ---------------------------------------------------------------- CH07.SERRANO.02
*sid CH07.SERRANO.02
*date 2026-10-02 21:30
*place P08
*present micah leandro tomas
After the pudding (three puddings), Leandro wants to show me the gym.

The Eastbank Boxing Club is two streets away, in an old chapel with a roof that leaks: there are buckets in a line down the middle of the ring, catching three separate drips in three separate notes. Heavy bags in a row, patched with gaffer tape. A wall of photos of kids in oversized gloves, grinning. A whiteboard with a timetable on it that's mostly Leandro's name.

@leandro:tense "Youth program," Leandro says, flicking the lights on. "Tuesdays, Thursdays, Saturday mornings. Forty kids. No money." He taps a thick document pinned to the noticeboard, covered in yellow highlighter. "Grant application. For the roof, and a second coach. Deadline's January. I've rewritten the bit about [i]community impact[/i] nine times."

@tomas:amused "It says [i]we stop kids getting stabbed[/i]," says Tomas, from the ring, where he's taping his hands. "He keeps making it sound nicer."

@leandro:laugh "They don't give money to [i]we stop kids getting stabbed[/i]. They give it to [i]positive outcomes[/i]."

Micah's leaning on the ropes. He's quieter here than at the table. Then, too casually, like dropping something he hopes nobody will pick up:

@micah:guarded "Halvorsen's rang again," he says. "The apprenticeship."

@leandro:surprised Leandro stops. "The one across the river?"

@micah:guarded "The proper one. The full qualification. The one Dad never got round to." He shrugs, with his whole enormous shoulders. "I'm going to say no. Obviously. Dad needs me at the yard. Who's going to do the ladders?"

@leandro:neutral "Obviously," says Leandro, after a second. "Yeah. Obviously."

And the knack gives me Micah, big and warm and raw at the edges, and right in the middle of him, where he's just said [i]obviously[/i], something that isn't obvious at all. Something that wants so badly it's gone quiet, like a dog that's learned it won't be let out.

*choice
  #Ask him what he wants. Not the family. Him.
    *set st_micah +1
    *set s04 "fore"
    Leandro goes to hold the pads for Tomas, and I lean on the ropes next to Micah.

    "What do you want?" I say.

    @micah:amused "I just said. The yard. Dad needs..."

    "Not your dad. Not the yard. You."

    He opens his mouth. He shuts it. He looks at me as if I've asked him a question in a language he used to speak as a child and hasn't heard since.

    @micah:small "Nobody asks me that," he says.

    "I know. I'm asking."

    @micah:tense He looks at his hands on the rope for a long time. The little burn scar across one knuckle. "I want to do it," he says at last, very low, so Leandro can't hear. "I want to do it so much I feel sick. And I'm going to say no. Because that's what you do." He laughs, not really. "God. Don't tell anyone I said that."

    "I won't."

    @micah:warm "Thanks for asking," he says. And he bumps his shoulder into mine, hard enough that the ropes sway.
  #Spar with Tomas. Notice the shoulder. Say nothing, yet.
    *set nerve +2
    *set tomas_injury true
    @tomas:amused "You," says Tomas, from the ring, pointing at me with a taped fist. "Lighting boy. In."

    "I've never boxed in my life."

    @tomas:laugh "Good. No bad habits." He throws me a pair of gloves that smell like a hundred other people's hands.

    So I get in the ring, under the drips, and Tomas teaches me to stand and to keep my chin down and to breathe out when I punch, in the voice that could strip paint, and I'm terrible at it, and it's the most fun I've had in a month. For ten minutes I don't think about ropes or rope-burn or who's on the other end of anything.

    But I notice.

    He never lifts his left arm above his shoulder. He blocks with his right when the left would be quicker. When I get a lucky jab in, clumsy, on his left side, the knack gives me a flare of pain in him like a struck match, bright and white and hidden instantly, and his face doesn't change at all.

    @tomas:guarded "Good," he says. "Again."

    I don't say anything. It isn't mine to say. Not yet. But I file it, the way I file everything.
*page_break
*comment ---------------------------------------------------------------- CH07.SERRANO.03
*sid CH07.SERRANO.03
*date 2026-10-03 00:30
*place P12
*present micah
*set b_micah_wolf true
*set know_micah_wolf true
*set st_micah 3
At half past twelve, Micah's supposed to be driving me home. Instead he's driving me to the allotments.

@micah:shy "I just want to show you the patch," he says. "Our patch. It'll take five minutes."

It takes an hour.

The Eastbank Allotments run down the slope to the river behind a chain-link fence: a hundred little plots of beans and cabbages and sheds made of old doors, and in the middle, the Serranos', which is the neatest, with a shed Ernesto built and a bench Micah says he built, which is the least neat. We sit on it. The moon's up over the river, a week past full, lopsided, like a plate somebody's taken a bite out of.

Micah looks at it. Then he looks at me, and I can feel him deciding something, the way you can feel a car deciding to pull out.

@micah:tense "You asked me," he says. "At Switchyard. What [i]rough night[/i] meant."
*if micah_deflects
  "You said a dog got out."

  @micah:small "There wasn't a dog."
*else
  "You said you'd had a rough night. I remember."
@micah:tense He's watching my face. Really watching it, the way you'd watch a horse you weren't sure of, ready to turn the whole thing into a joke the moment I give him a reason.

@micah:small "The twenty-eighth of August," he says. "Full moon. And last Saturday. And every one before that since I was thirteen, and every one after it until I die." He swallows. "We change. The family. Dad, Leandro, Tomas. Wesley now, God help him. Me." He tries a laugh and it doesn't come out. "I spend one night a month as something with four legs and a lot of opinions about rabbits. That's what [i]rough night[/i] means. That's what the tired is. It takes days to come back all the way."

The moon sits on the river. Somewhere on the far bank a fox screams, and neither of us jumps, which feels like it means something.

I think about the deep animal tiredness I felt from him at Switchyard, the first night, that I've never felt from anyone. I think about the table tonight, and the note under it, held through the whole family like a chord.

"I know about Eastbank," I say. "I've known for a month. I just didn't know it was you."

@micah:surprised He stares at me.

"I didn't know it was [i]anyone[/i]. Not anyone I'd..." I stop. "Not anyone who'd saved me a seat."

*choice
  #"Okay." And stay, and ask the ordinary questions.
    *set people +1
    "Okay," I say.

    @micah:surprised "Okay?"

    "Okay. Does it hurt?"

    @micah:small He blinks. And then, slowly, he answers. Yes, it hurts, like the worst growing pains in the world, all at once, for about a minute. No, he doesn't remember much after, just smells and running and a feeling like being very, very happy and very, very hungry. Yes, it's true about the rabbits. No, he's never hurt anyone. They go to Quarry Lake, out past the edge of the city, the whole family, and Pavel drives the van and keeps watch, and Ernesto brings a flask.

    "Of what?"

    @micah:laugh "Tea," he says, and he laughs, properly, the big surprised laugh from Switchyard. "Tea. For after. He brings [i]biscuits[/i]."

    I ask about the clothes, and he tells me, and it's so undignified that I laugh until I have to hold on to the bench. I ask about Wesley, and his face goes serious and careful, and he tells me that too. I ask the ordinary questions, one after another, and he answers every one, and somewhere in the middle of it, the tension goes out of his shoulders like a rope let off a winch.

    @micah:warm "Nobody's ever just [i]asked[/i]," he says, much later. "They either know, or they run."

    "I'm not running."

    @micah:warm "No," he says, looking at me in the moonlight. "You're not, are you."
  #Tell him about the knack. Trade a secret for a secret.
    *set gift_micah true
    "Can I tell you something back?" I say. "Since we're doing this."

    @micah:attentive He nods, wary.

    "I feel things. What people feel. I have since I was eight. You come through like..." I look for it. "Like walking out of a cold room into the sun. Big and warm. And under it, since the first night I met you, something tired and animal and patient, that I've never felt from anyone else. I didn't know what it was. Now I do."

    @micah:surprised He stares at me.

    @micah:attentive "So you [i]knew[/i]," he says.

    "I knew something. I didn't know it had four legs."

    @micah:laugh He laughs so hard he nearly falls off the bench he built. Then he stops, and looks at me, and the knack gives me something in him I don't have a word for: like a door that's been held shut for years, swinging open in a wind, and him not stopping it.

    @micah:warm "Secret for a secret," he says. "That's fair." And then, after a while, quietly: "Can you feel what I'm feeling now?"

    "Mostly. Not about me. It never works about me."

    @micah:warm "Huh," he says, and looks at the moon, and doesn't tell me.
*page_break
*goto late

*comment ================================================================ the university crowd
*comment ---------------------------------------------------------------- CH07.UNI.01
*label uni
*sid CH07.UNI.01
*date 2026-10-02 19:30
*place P19 university
*present ellis felix caspar basil
*mood dusk
*set fr_felix 1
*set fr_caspar 1
*set s03 "intro"
*set s12 "intro"
The arts buildings on University Hill are all lit up for open studios: every window gold, a banner across the old portico, a queue for the plastic wine that goes down the steps. Inside it's corridors and corridors of rooms full of work and the people who made it, standing next to it trying to look as if they don't care what you think.

It's loud. The knack gives me a hundred people all performing something at once: confidence, boredom, depth. It's like standing inside a bag of fireworks.

@basil:neutral In the atrium, a handsome man going to seed, in a corduroy jacket, with floppy grey-blond hair, has a first-year pinned against a plinth. "What you have to understand," he's saying, in a lecturer's voice that carries to the roof, "is that the city is [i]material[/i]. The city is a text written in brick. We don't read it. It reads [i]us[/i]."
*meet basil
*if b_ellis_offstage
  Basil Duret. I know who he is before anyone tells me, because Ellis described him, over the washing-up, in terms I won't repeat. [i]The one who puts his own name on other people's work.[/i]
*else
  Basil Duret, a lecturer, it says on his name badge, in a larger font than anyone else's.
@ellis:amused "Don't make eye contact," says a voice in my ear. "He'll ask you what the city means to you, and then he'll tell you."

Ellis. In a dark green suit that's clearly second-hand and fits as though it was made for him, with his coils tied up off his long, fine-boned face and the much-mended leather bag across his chest. He's performing ease, beautifully. He's performing it at everyone: a nod to a lecturer, a hand on a shoulder, a laugh for a joke across the room he can't possibly have heard. The knack gives me the ropes and nerves behind the curtain, same as at the workroom. Working very hard to look like he isn't.

@ellis:warm "You came," he says. "Good. I was going to be very gracious about it if you didn't." He hands me a plastic cup. "The wine's appalling. That's traditional."
*meet caspar
@caspar:angry Up on a scaffold tower in the corner, with a beanie pulled down over his curls and gaffer tape stuck to his jeans for later, Caspar Neri from Switchyard is focusing a light and swearing at it. "They're paying me in [i]exposure[/i]," he tells me, when I go over. "Exposure. I've been exposed. I'm going to die of exposure, on this tower, and they'll make an installation out of me." He points his spanner at the ceiling. "Look at that. Look at the rig. Who hangs a rig like that? A [i]sculptor[/i] hangs a rig like that."

"The fresnel on the end's out of focus."

@caspar:laugh "[i]Thank[/i] you." He adjusts it. "See? Someone who can see. Stay. Be my assistant. I'll pay you in exposure too."
*meet felix
@felix:amused And everywhere, weaving through the crowd, is a lad with bleached hair gone dark at the roots, a camera on a shoulder rig, fingerless gloves, and a sharp, quick, expressive face that keeps doing six things at once. He films Basil from very low, like a monument. He films Ellis from over his shoulder. He films me, for about four seconds, and then lowers the camera and looks at me without it, which is somehow more exposing. "Hi," he says. "Felix. You're new. You've got the face of someone who's counting the exits."

"I do lights," I say. "I always count the exits."

@felix:laugh "That's so much better than what I was going to guess," he says, and grins, and is gone again into the crowd.

*choice
  #Let Ellis give me the tour, and watch how he does it.
    *set st_ellis +1
    I let Ellis give me the tour.

    And I watch how he does it, because it's extraordinary. He gives every room a different Ellis. In the painting studio he's funny and a bit rude. With the ceramicists he's serious and technical and asks about kiln temperatures. With a nervous second-year whose work is in the corridor by the toilets, he's so kind, so exactly and specifically kind about the one good thing in her piece, that she goes pink to the ears and I see her stand up straighter for the rest of the night.

    @ellis:amused "You're staring," he says, in the stairwell.

    "You're very good at this."

    @ellis:guarded "At what?"

    "At being whoever the room needs."

    @ellis:surprised He stops on the stair. For one second the performance flickers, like a bulb about to go, and I see him being surprised that someone noticed. Then it steadies.

    @ellis:amused "It's a transferable skill," he says lightly. "Like restoration. You find what's there, and you make it look as if it was always meant to be." And he goes on up the stairs, and the ropes and nerves under the curtain are pulled very tight.
  #Talk to Felix about what he's filming. He's funny and nervous.
    *set fr_felix +1
    I find Felix by the plastic wine, filming the queue for the plastic wine.

    "What's it for?" I ask. "The film."

    @felix:tense "Portfolio," he says. "Final year. There's a placement. There's always a placement." He lowers the camera. "It's about..." He stops. "It's going to sound pretentious."

    "Everything here sounds pretentious. There's a man over there who says the city reads us."

    @felix:laugh He laughs, a quick snort. "Okay. It's about what people do with their faces when they think nobody's looking. Like, just before they go into a room. That second where they decide who to be." He turns the camera round and shows me the screen: Basil, in the gents' mirror, before his speech, looking old and frightened for one second. The first-year from the plinth, rolling her eyes. Ellis, in a doorway, alone, with his face completely empty, and then, the moment someone calls his name, lighting up like a switched-on sign. "Everyone does it. I just like the second before."

    @felix:shy "You don't, by the way," he says. "Do it. You've got the same face on the whole time. It's a bit unnerving." He grins, and the knack gives me him: quick and nervous and delighted, like a bird on a feeder. "I mean that as a compliment. Mostly."
*page_break
*comment ---------------------------------------------------------------- CH07.UNI.02
*sid CH07.UNI.02
*date 2026-10-02 22:30
*place P21
*present ellis nabil felix
*set fr_nabil +1
*set s03 "fore"
*meet nabil
The after-party is in the shared kitchen at Bellweather Court, the student halls behind the arts buildings: a long, tired room with six fridges, each with a name on it, and a window that won't shut, and a pan of pasta on the go big enough to bathe in.
*if ch05_route = "hospital"
  @nabil:amused At the stove, stirring, with his glasses steamed up and a tea towel over his shoulder, is Nabil Haddad, from the hospital front desk. He looks at me, and then at Ellis, and then at me again, with the resigned expression of a man whose worlds keep overlapping without asking. "You," he says. "You were never here. And I was on my break." He hands me a wooden spoon. "Stir. I've got twelve people and a budget for two."
*else
  @nabil:amused At the stove, stirring, with his glasses steamed up and a tea towel over his shoulder, is a round-faced lad with thick black brows and a neat short beard along his jaw: Nabil Haddad, who lives on this corridor and works reception at Calder General. "Twelve people," he says, to nobody. "Budget for two. Loaves and fishes. Loaves and [i]pasta[/i]." He hands me a wooden spoon without asking who I am. "Stir. You look like a stirrer."
@felix:amused Felix films the pasta. From above, very close, like a disaster documentary. "The pasta is the protagonist," he says, when Nabil threatens him with a ladle. "It's a coming-of-age story."

It's a good night. It's a really good night: twelve people round a table built for six, the pasta slightly too salty, somebody's speaker playing something jangly, Nabil and Felix arguing about whether you're allowed to put ketchup on anything, ever. The knack gives me the room like the inside of a coat.

Around half eleven, Ellis ends up next to me on the counter by the window that won't shut, with a paper plate on his knee, and says, quite casually, the way you'd mention the weather:

@ellis:guarded "I've been shortlisted for a placement."

"That's brilliant."

@ellis:guarded "It's in Sallowford." Another city, four hours north. "A conservation studio. Eighteen months. The best in the country. I applied in June." He looks at his pasta. "I haven't told my father I've been shortlisted."
*if b_ellis_offstage
  The placement. The one he told me about over the washing-up, that his father pretends he doesn't mind about and minds terribly.
"Why not?"

@ellis:tense "Because he'll say [i]go[/i]," says Ellis. "He'll say it immediately, and mean it, and help me pack, and then he'll be alone in that workroom with Isaac and forty years of other people's broken things, and he'll never once say that he minds." He smiles, not the performance smile. "It's much worse than if he said [i]stay[/i]."

@felix:amused From the other end of the kitchen, Felix, who apparently hears everything, says without turning round: "Tell him. Parents always know anyway. It's like a smell." And then, to Nabil: "Ketchup on eggs is a human right."
*page_break
*comment ---------------------------------------------------------------- CH07.UNI.03
*sid CH07.UNI.03
*date 2026-10-03 00:45
*place P24
*present ellis
Ellis walks me to the bus, and then doesn't, and instead we're in Observatory Hill Park at quarter to one, sitting on the steps of the little teaching dome at the top, with the whole city spread out below us like something spilled.

He stops performing somewhere around the gate.

I feel it happen. The ropes and nerves go slack, like stage-hands when the curtain comes down, and what's left is a tall, tired twenty-year-old in a borrowed-looking suit who is, it turns out, very irritable about his shoes.

@ellis:angry "They were my grandfather's," he says. "They're beautiful. They're a size too small. Every single time I wear them I think, [i]this time they'll have stretched[/i], and every single time they haven't." He takes one off and looks at it with loathing. "I'm going to be buried in these shoes. Out of spite."

And he's funny about Basil, properly funny, a whole performance of Basil discovering the concept of a wall. And then he stops, and he looks at me, and he asks:

@ellis:attentive "What did you think? Tonight. Honestly."

It takes me a second to understand that he means it. That he isn't asking the room. He's asking me.

*choice
  *if not(b_ellis_offstage)
    #Tell him. And ask him the same back.
      *set b_ellis_offstage true
      *set st_ellis 3
      So I tell him.

      I tell him I liked the second-year by the toilets, and that Basil's a fraud, and that the lighting was criminal and Caspar knows it. I tell him that I watched him give every room a different Ellis, and that it was the most skilful thing I've ever seen anyone do, and that it looked exhausting.

      Then I say: "What did [i]you[/i] think?"

      @ellis:surprised He looks at me for a long time.

      @ellis:guarded "Nobody asks me that," he says. "They ask what I [i]think about[/i] things. Not what I thought." And then he tells me: that he was bored for most of it, and anxious for the rest; that he hates the plastic wine and drinks it anyway; that he likes his father's workroom better than any gallery; that he's not sure, some days, whether he's good at restoration or just good at looking as if he is.

      @ellis:warm "Sorry," he says, when he's done. "I don't usually... this isn't..."

      "I know. I like it."

      @ellis:warm He laughs, short, embarrassed, real. "Irritable and ordinary," he says. "What a treat for you." But he doesn't put the performance back on. We sit on the dome steps with one of his grandfather's shoes between us, and he stays exactly as he is.
  *if not(gift_ellis)
    #Tell him about the knack, up here where nobody can hear.
      *set gift_ellis true
      "Can I tell you something?" I say. "Up here. Where nobody can hear."

      @ellis:attentive He puts the shoe down.

      So I tell him. The weather in rooms. The warmth of people. The ear defenders. Tonight: a hundred people performing, like standing inside a bag of fireworks. And him: the ropes and nerves behind the curtain, all night, and the moment, at the park gate, when they went slack.

      @ellis:surprised He's very still. Not the performance stillness. The real one.

      @ellis:attentive "You felt me stop," he says.

      "Yeah."

      @ellis:tense "That's..." He laughs, uncertain. "That's the most frightening thing anyone's ever said to me. I've spent twenty years making sure nobody could see backstage." He looks at the city. "And you can just... walk in."

      "I don't walk in. I just stand in the wings. I can't help it."

      @ellis:warm He's quiet for a long time. Then: "Do you know what we call that, on the Hill? The old word?" He shakes his head at himself. "No. Not tonight. Tonight you're just a person who came to a terrible open studio. Tell me something ordinary."
  *if gift_ellis
    #Ask him what he's found out about the knack. He said he would.
      "You said you'd find out," I say. "About the knack. About what I can do."

      @ellis:amused He smiles, and it's a real one, slightly lopsided. "I have been [i]reading[/i]," he says. "My father's library. The locked shelves. Isaac helped me with the lock, which I'll deny."

      @ellis:attentive "There aren't many of you," he says. "There never were. There's an old word for it, and three books that mention it, and one of them's wrong." He looks at me in the moonlight, with the same look he gave me in the workroom: as if I'm a painting he's just realised is older than its frame. "The other two say the same thing. That people like you are always very tired, and always very useful, and nobody ever asks you what [i]you[/i] want."

      "Are you asking?"

      @ellis:warm "I'm asking," he says.
  #Talk about the placement. He should take it.
    *set s03 "fore"
    "You should take it," I say. "Sallowford. If they offer."

    @ellis:guarded "Should I?"

    "It's the best studio in the country. You said. And you're the best person I've ever seen at anything, and you're wasted standing in doorways making sure everyone else is comfortable."

    @ellis:hurt He flinches, very slightly. Then he laughs. "That's the rudest compliment I've ever been paid."

    "Tell your dad. Felix is right. He'll know anyway."

    @ellis:sad "He'll say go," says Ellis, looking at the city. "That's the problem. He'll say go." He picks up his grandfather's shoe and turns it over in his hands, and doesn't put it back on. "Maybe I need someone to tell me it's all right to [i]want[/i] to."

    "It's all right to want to."

    @ellis:warm He looks at me. "Thank you," he says, and it's very quiet, and nothing like the performance at all.
*page_break
*comment ---------------------------------------------------------------- CH07.BUS.01
*sid CH07.BUS.01
*date 2026-10-03 02:10
*place P27
*present hugo
*set hugo_met true
*set fr_hugo 1
*meet hugo
The night bus down the Hill is empty except for me, a lot of chewing gum, and a big man in a depot hi-vis vest sitting halfway down, eating a sausage roll with enormous concentration.

@hugo:amused He looks up when I get on, and nods, and when I sit down across the aisle he says, "Sorry. Breakfast," and holds up the sausage roll as evidence.

"At two in the morning?"

@hugo:laugh "Shift starts at three. So it's breakfast. Technically." He's got a broad, friendly face and black hair squashed flat on one side, as if he's slept on it, and he talks the whole way down the hill as if we've known each other for years. His name's Hugo. He's a mechanic at the depot. Agency, four years, nights and Christmas Day and whatever needs a body. And on Monday week, he tells me, he's got an interview for a permanent post: a proper one, with a pension, and a locker with his name on it instead of [i]AGENCY 3[/i].

@hugo:warm "And yesterday," he says, "I found out I put a hinge on upside down. On the back door of the forty-two. Three days, it opened the wrong way. Nobody noticed. That's buses." He shakes his head, delighted. "Don't tell the interview panel."

"Your secret's safe."

@hugo:warm He tells me a bus is a room that goes places. Forty strangers who'd never be in the same room, all going somewhere, and if the door won't open none of them get there. "I'm the door," he says. "Nobody thanks the door." The knack gives me him like the smell of bread, simple and warm, filling up the whole empty bus.

At the depot he gets up and swings his bag over his shoulder, and at the doors, which open the right way, he turns back and waves, a big wave, with the last bit of sausage roll still in his hand.

@hugo:amused "Monday week!" he calls. "Wish me luck!"

"Good luck!"

The doors close. I watch him walk across the forecourt in his hi-vis, into the big lit shed full of buses, whistling. The bus pulls away.

*comment ================================================================ the promise
*comment ---------------------------------------------------------------- CH07.LATE.CHOICE
*label late
*sid CH07.LATE.CHOICE
*date 2026-10-03 02:15
*place P27
*if ch07_evening = "serrano"
  Micah drops me at the Northline depot, which is on nobody's way home from anywhere, and says it's on his. The van smells of solder and oranges and something from the allotments. He waits until I'm under the forecourt lights before he pulls away.
*else
  I get off at the depot, where the night buses change over, and stand on the forecourt while the bus pulls away without me.
It's after two. Nolan's flat is five minutes from here. Three floors up, over the key-cutting shop. I can see the corner of the building from where I'm standing, and a window on the third floor with fairy lights in it, still on.

Nolan's parties don't end. They just get quieter, and then someone's asleep in the bath.

My phone's got one text on it, from half past ten. Just a photo: a cake shaped like a mixing desk, listing badly to the left, and one candle, and no words at all.

*choice
  #Go. Late is better than never. Probably.
    *set ch07_late true
    *goto late_party
  #Text him happy birthday and go home.
    *set hurt_nolan +1
    [i]Happy birthday. I'm so sorry. I'll make it up to you. x[/i]

    I stand on the forecourt and watch the three dots come up, and go away, and come up, and go away.

    Nothing comes through.

    I walk home. It's forty minutes. It's cold, and the streets are empty, and every bus that passes me is lit up and going somewhere with nobody on it.
    *goto morning

*comment ---------------------------------------------------------------- CH07.LATE.01
*label late_party
*sid CH07.LATE.01
*date 2026-10-03 02:50
*place P28
*present nolan
It takes me half an hour to go up. I stand across the road from the key-cutting shop and watch the window with the fairy lights and feel stupid, and then I feel stupider, and then I cross the road.

@nolan:tired Nolan's on the stairs. Sitting halfway up, on his own, in his torn paper crown, with a paper plate on his knee with a slab of cake on it, the corner of the mixing desk, with the little fader knobs made of chocolate buttons. "Saved you the good bit," he says. "The master fader."

I sit down on the step below him. He hands me the plate.

He's glad I came. The knack gives me that, clear as anything: glad, right through. And he's hurt, and that's clear too: a bruise under the glad, where you press and it aches. And he's so tired, from the party and the week and the twenty years, that he can't be bothered to pick one of them. He just sits there with all three.

@nolan:hurt "You said you'd try," he says. Not angry. Just saying it. "And you did. I suppose. At three in the morning."

*choice
  #Apologise without an excuse.
    *set people +1
    "I'm sorry," I say. "I promised, and I didn't come. There isn't a reason that makes that better. I'm just sorry."

    @nolan:surprised He looks at me for a long time, over the plate.

    @nolan:tired "Okay," he says at last. "Okay. That's... actually, that's better than a reason." He leans his head against the banister. "Everyone always has a reason."

    I eat the master fader. It's mostly icing. He watches me eat it, and something in the bruise under the glad eases, just a little, the way a bruise does when you stop pressing.

    @nolan:amused "You've got chocolate on your face," he says. "Twenty years old and I've still got to tell you that."

    "I'm nineteen."

    @nolan:warm "I know. I'm older than you now. Respect your elders." And he bumps my shoulder with his knee, from the step above, and leaves it there.
  #Explain where I was. Some of it.
    *set hurt_nolan +1
    "I was..." I start. And then I find out I can't say it. Not the real version. [i]I was{@ch07_evening = "serrano"| having dinner with a family who turn into wolves, and then one of them told me his secret on a bench at midnight| on a hill with someone who's shortlisted for a placement in another city, being told things nobody's ever told him}.[/i] So I tell him the version with the edges filed off. {@ch07_evening = "serrano"|Micah's family. A dinner. It ran late.|A thing on the Hill. Someone I'm helping with something. It ran late.}

    @nolan:guarded He listens. He nods. The knack gives me the bruise, and something going over it like a door being eased shut.

    @nolan:guarded "Right," he says. "Cool. Yeah. Sounds good." He picks at the edge of the paper plate. "You've got a lot of people now. That you're helping with things."

    "Nolan..."

    @nolan:tired "It's fine," he says. "Honestly. Eat your cake." And I eat it, and it's mostly icing, and he watches me the whole time with a face I can't read, and the knack won't read it for me.
*goto morning

*comment ---------------------------------------------------------------- CH07.MORNING.01
*label morning
*sid CH07.MORNING.01
*date 2026-10-03 10:30
*place P02 print_shop
*present martin will
*mood day
Saturday morning above the shop. Toast. A headache like someone's tightening a clamp on it a quarter-turn at a time. Martin's got the radio on, which is a good sign.
*if savings_given
  The I.O.U. is still on the corkboard behind the till. A customer asked about it at nine. Martin told her, with enormous dignity, that it was a private financial instrument.
*elseif shop_hours
  My name's on the rota in pencil for eight o'clock tomorrow. Martin's drawn a small sun next to it, which I think is supposed to be encouraging.
*else
  The traders' cheque went into the bank at nine sharp. Martin walked it there himself, in his good coat, and came back looking ten years younger and pretending he didn't.
@will:amused Will's at the kitchen table in his team hoodie, eating cereal out of a mixing bowl. He looks at me when I come in, for a long time, with his spoon halfway to his mouth.
*if ch07_evening = "nolan"
  @will:amused "You look like you've been at a party," he says. "A good one. You've got crown glitter on your ear."

  I have. It's gold. It's from Nolan's crown.
*elseif ch07_evening = "serrano"
  @will:attentive "You look like someone told you a secret," he says. "Also you smell of garlic. A lot of garlic."

  "The Serranos. Micah's family. Dinner."

  @will:surprised "Coach Tomas's lot? You had dinner with [i]Tomas[/i]?" He looks genuinely impressed, for the first time in about four years.
*else
  @will:amused "You look like you've been somewhere posh," he says. "And then walked home from it."

  "An open studio. On the Hill."

  @will:guarded "An open [i]what[/i]?"
*if ch07_late
  "I went to Nolan's, after. Late."

  @will:guarded Will looks at me over the mixing bowl. "How late?"

  "Three."

  @will:guarded "Was he annoyed?"

  I think about the stairs, and the cake, and the master fader. "He saved me a bit of cake."

  @will:attentive "That's not what I asked," says Will, who is seventeen and not stupid.
*elseif ch07_evening != "nolan"
  My phone's on the table by the toast. Still nothing from Nolan. Not since the photo of the cake at half ten, with its one candle and no words.

  @will:attentive Will follows my eyes to it and back. He doesn't say anything, which from Will is a whole lecture.
@martin:warm Martin puts a plate of toast in front of me without being asked, and a glass of water, and two paracetamol, lined up very neatly, like a place setting. "Whatever it was," he says, "eat that."

I eat it. The radio plays something from before I was born. The rain's stopped, and the light through the kitchen window is thin and bright and October.

Whatever I chose last night, I chose it. The people it happened to will remember it the way it happened to them. I can't feel what any of them think about me. I never can. But I can feel the kettle-warmth of Martin, and Will's bright, tight wire, and the whole wet city waking up outside the window, going on.
*if ch07_evening = "nolan"
  *snapshot evening-nolan
*elseif ch07_evening = "serrano"
  *snapshot evening-micah
*else
  *snapshot evening-ellis

*journal [b]Chapter 7.[/b] The bank called in the print shop's overdraft{@savings_given|; I lent Martin my savings, and he pinned the I.O.U. behind the till|}{@shop_hours|; I took on three shop mornings a week|}{@savings_given or shop_hours|.|; Martin and I got the Crescent Market traders to pay what they owed.} {@ch07_evening = "nolan"|I kept my promise and went to Nolan's twentieth. Dominic played for a room again, for the first time in a year.{@b_nolan_birthday| On the balcony, Nolan leaned against my shoulder and didn't take it back.|}{@nolan_applied| Nolan accepted his place at Wexmoor.|}|}{@ch07_evening = "serrano"|I ate at the Serrano table in Eastbank. At the allotments, Micah told me what his family is: they change on full-moon nights.{@tomas_injury| Tomas is hiding a shoulder injury.|}|}{@ch07_evening = "uni"|I went to the open studio night on University Hill with Ellis, who has been shortlisted for a placement in Sallowford and hasn't told his father.|}{@ch07_late| I got to Nolan's at three. He'd saved me cake.|}{@ch07_evening != "nolan" and not(ch07_late)| I didn't make it to Nolan's birthday.|} I met Hugo Naranjo, a depot mechanic with an interview on Monday week for a permanent post.
*page_break
*goto_scene ch08
`);
