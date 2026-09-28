NB.scene("ch17", String.raw`
*mood winter
*set ch 17
*chapter 17 What I Ask of Him
*comment ---------------------------------------------------------------- CH17.OPEN.01
*sid CH17.OPEN.01
*date 2027-01-23 10:00
*place P02 print_shop
*present martin
*set strain 0
The deepest cold of the year.

The river's frozen at the edges, a white crust along both banks with the black water sliding past in the middle. The buses run late, when they run. Every morning the print shop's pipes are frozen, and Martin goes down in his dressing gown with my old hairdryer and a look of great patience and thaws them, one joint at a time, while the kettle boils.

@martin:tired "Every January," he says, blowing hot air at a pipe. "Every single January. Your grandad used to do this with a candle."

Quentin, Silas and Felix are tiring. I can feel it from here, across the whole city, down the ropes: three threads, and all three of them thinner than they were at New Year. Quentin's grey by the afternoon. Silas fell asleep standing up at the ovens on Tuesday and Otis caught him. Felix sleeps twelve hours a night and wakes up cold. The donors are weakening, in their beds at Stillwater, and the patients feel it. Ilyas says weeks. He won't say how many.

We need a method. Something that doesn't kill anyone.

And I think I've got the start of one. I lay awake with it last night, with the board on the wall in the dark.

The old program, seven years ago, used one donor for one patient, and the link strained, and Kit Maddox walks with a stick. Too much weight on one person.{@e08| But at the Okafors', on Halloween, three workers shared the strain of the binding on the screen, a part each, and nobody broke.|} So what if it isn't one person carrying a whole life? What if it's six? Ten? Several willing people, each carrying a little, and the weight spread between them, like a load on six ropes instead of one?

A shared bridge.

I don't know if it's possible. I don't know if it's mad. But if it is possible, we'll need people. People who say yes, knowing what they're saying yes to.

And before all that, before the method and the materials and the coalition and the night, there's something I need to ask someone. Something that matters.

*comment ---------------------------------------------------------------- CH17.CHOICE.01
*sid CH17.CHOICE.01
*date 2027-01-23 12:00
*place P02
Whom do I ask?

*choice
  *if (st_adrian >= 3) and not(closed_adrian)
    #Adrian.
      *set ch17_ask "adrian"
      *goto adrian
  *if (st_micah >= 3) and not(closed_micah)
    #Micah.
      *set ch17_ask "micah"
      *goto micah
  *if (st_ellis >= 3) and not(closed_ellis)
    #Ellis.
      *set ch17_ask "ellis"
      *goto ellis
  *if (st_dominic >= 3) and not(closed_dominic)
    #Dominic.
      *set ch17_ask "dominic"
      *goto dominic
  *if (st_nolan >= 3) and not(closed_nolan)
    #Nolan.
      *set ch17_ask "nolan"
      *goto nolan
  *if (st_ansel >= 3) and not(closed_ansel)
    #Ansel. He's in Calder this week for the passage papers.
      *set ch17_ask "ansel"
      *goto ansel
  *if (st_quentin >= 3) and not(closed_quentin)
    #Quentin.
      *set ch17_ask "quentin"
      *goto quentin
  *if (st_reuben >= 3) and not(closed_reuben)
    #Reuben.
      *set ch17_ask "reuben"
      *goto reuben
  #Martin and Will. It's time they knew something true.
    *set ch17_ask "family"
    *goto family

*comment ================================================================ Adrian
*comment ---------------------------------------------------------------- CH17.ADRIAN.01
*label adrian
*sid CH17.ADRIAN.01
*date 2027-01-24 20:00
*place P01 mercy_house
*present adrian
*mood night
Mercy House's old training hall at eight on a Sunday night: a long room with a sprung floor and mats stacked against the walls, under the lamps from when it was an operating theatre, huge round ones on jointed arms, most of them dead. Adrian's running drills on his own, under the one that still works. He stops when I come in.

@adrian:attentive "You've got the face," he says. "The one where you're going to say something I won't like."

So I ask him. The whole of it. That when this comes, when we go for Stillwater and Pump Nine, it'll be a rescue Orrell will want to control, and I need Mercy House behind it, not in front of it. I need Adrian to stand up in a room and argue for a coalition, not a command. And I need him to tell the truth about Emmett's report at his review in three weeks, because we're going to need people to trust his word, and a word with a lie folded inside it won't hold.

@adrian:tense He listens with his arms folded. The engine at idle, running hot underneath.

*choice
  *if not(out_adrian)
    #Tell him everything first: what I am, and who I am.
      *achieve told_truth
      Before he answers, I tell him the rest. Because I'm asking him to put his word on the line, and I'm not going to ask that with anything folded inside mine.

      The knack: what it is, what it's done, how I found the lane. And the other thing.{@out_micah or out_dominic or out_ansel or out_nolan or out_ellis| I've said it out loud before this winter. It gets truer, not easier.|} "I'm gay," I say, under the one working lamp. "That's the other thing. You might as well know who's asking."

      @adrian:surprised He looks at me for a long time. Nothing in his face moves. And then he nods, once, the way he nods at a finding, and something in the engine changes pitch.
      *set out_adrian true
      *set gift_adrian true
  *if not(gift_adrian)
    #Tell him about the knack, properly. Not the other thing. Not yet.
      So I tell him about the knack, properly. Not the version for reports. The weather in rooms. The ropes. How I found the lane. What I felt when Quentin died.

      @adrian:attentive He listens the way he listens to everything, as if he's going to be tested on it afterwards. "That explains a great deal," he says, when I've finished. "Most of what I've written down about you, in fact."
      *set gift_adrian true
  #Just ask. The rest can wait.
    I just ask. The rest can wait.
*comment ---------------------------------------------------------------- CH17.ADRIAN.02
*sid CH17.ADRIAN.02
*date 2027-01-24 23:00
*place P01 mercy_house
*present adrian
@adrian:attentive He says yes to the rescue in complete, practical sentences. Yes, Mercy House behind it, not in front of it; he'll argue it in the room and he'll argue it with Orrell. Yes, the review: he'll tell them about the report, in his own words, before anyone else can. It'll probably cost him the promotion. He says that too, practically, as a line item.

@adrian:small And then he can't finish the next sentence.

He starts it three times. We're sitting on the stacked mats under the one working lamp, and it's nearly eleven, and the rest of it's in the room with us, the thing neither of us has said since the roof, or since the diner, or since the pie. It's sitting between us on the mats like a third person.

*choice
  *if (st_adrian >= 5) and (hurt_adrian < 2)
    #Close the distance. He's allowed to stop planning.
      *set st_adrian 6
      *achieve told_truth
      {@not(out_adrian)|First, the thing I haven't said out loud to him: that I'm gay. That it's him. |}I close the distance.

      Not far. We're on the same stack of mats. I just move, the way you'd move to share a coat, until my shoulder's against his. "You're allowed to stop planning," I say. "Just for tonight. Nobody's writing this down."

      @adrian:small He laughs, very quietly, shaky. "I'm always writing it down," he says. "In my head. I can't stop."

      "Then write this down."
      *if steam
        And I kiss him. Under the old operating-theatre lamp, on a stack of training mats in an empty hall at Mercy House, and for once in his life Adrian Keene doesn't have a procedure, and doesn't need one. His hands, which are always so certain, are shaking. He holds on to my jacket like a man holding a rope. When we stop, his forehead's against mine, and he's laughing, silently, and his eyes are shut.

        @adrian:warm "I don't know what I'm doing," he says. "I've never not known what I'm doing."

        "You're doing all right."
      *else
        And the lamp goes out, the one that still worked, just then, with a click, as if the building knew. We don't get up to fix it.
      *snapshot together-adrian
      *set out_adrian true
  *if (st_adrian = 4) and (b_adrian_offduty and b_adrian_report) and (hurt_adrian < 2)
    #Tell him the thing he keeps not saying is the thing I keep not saying.
      *set st_adrian 5
      *set b_adrian_want true
      *achieve told_truth
      "The thing you keep not saying," I say. "The thing that's sitting here on the mats." I look at him. "It's the thing I keep not saying too."
      *if not(gift_adrian)
      @adrian:surprised He goes very still.

      "I want to be where you are," I say. "When you come and find me for no reason, I want you to. When I disagree with you and it stays with you for days, it stays with me too."{@out_adrian|| I'm gay, Adrian. That's the rest of it.}

      @adrian:small He looks at his hands for a long time. "I've never let myself want anything that wasn't on a list," he says. "You've been on the list since {@ch04_first = "mercy"|the lane|the Regent}. I didn't know what list it was." He takes a breath. "It's this list. Isn't it."

      "It's this list."

      @adrian:warm And he takes one hand out of his folded arms, very carefully, and holds it out, palm up, on the mat between us, and waits. He's learning to wait. I put mine in it.
      *set out_adrian true
      *set gift_adrian true
  #Keep it where it is: the best partner I've had. He nods, relieved and not.
    *set friends_ch17 true
    "You're the best partner I've ever had," I say. "On any of this. I want to keep it that. Exactly that."

    @adrian:neutral He nods. Relieved, and not. I can feel both. "Partners," he says. "Yes. That's... good. That's a good word for it." He stands up and puts the mats straight, very precisely, all the edges lined up. "Thank you. For the ask. And for being clear."
*comment ---------------------------------------------------------------- CH17.ADRIAN.03
*sid CH17.ADRIAN.03
*date 2027-01-25 07:00
*place P01 mercy_house
*present adrian
*mood day
*set volunteers +1
Morning in the Mercy House kitchen that never closes. Porridge, and tea, and somebody's radio, and Adrian across the long steel table from me in his re-elasticated jacket, with his notebook open.
*if st_adrian >= 6
  He keeps looking up from the notebook. He keeps looking back down. Every time, his ears go red. Victor comes in, takes one look at both of us, and backs out again without getting his toast.
He's written it down. The review's in three weeks. On the first page of a new section of the notebook, in his neat capitals: [i]THE REPORT. EMMETT. TELL THEM FIRST.[/i] He's decided to tell the truth in it. Whatever the night was, he's decided that.

*choice
  *if st_adrian = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_adrian 6
      "I don't want to wait until March," I say, across the porridge. "For whatever this is. I don't want to put it on a list for after."

      @adrian:surprised He looks up. The spoon stops halfway.

      @adrian:warm "No," he says slowly. "No. Neither do I." He closes the notebook. He puts his hand over mine on the steel table, in front of the whole kitchen, which has gone suddenly very interested in its porridge. "On purpose," he says. "Now. I'd like that." And his ears go red, and he doesn't take his hand back.
      *snapshot together-adrian
  *if st_adrian = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say. "We both know. That's enough, for this winter. There's a lot to get through first."

      @adrian:warm He nods. "Slowly," he agrees. "I'm good at slowly. It's a procedure." And he almost smiles, and nudges my foot under the table, once, and goes back to his notebook.
  *if st_adrian != 5
    #Get up. There's work.
      "Right," I say, getting up. "There's work."

      @adrian:neutral "There's always work," says Adrian, and gets up too, and takes both our bowls to the sink. It's something. In his way, it's a lot.
*goto end

*comment ================================================================ Micah
*comment ---------------------------------------------------------------- CH17.MICAH.01
*label micah
*sid CH17.MICAH.01
*date 2027-01-24 19:00
*place P07 serrano_yard
*present micah
*mood night
Serrano Yard's workshop on a Sunday night, the stove going, the vans outside in the frost. Micah's at the bench rewinding a coil of cable, in a jumper with holes in the elbows, because he doesn't know how to sit still.

So I ask him. Whether, if we build a shared bridge, he'd be one of the volunteers. His body. His strength. A little of his life, carried across to a stranger in a bed, for however long it takes. And I tell him, because he's the person in this city least able to say no to anyone: he can say no. He can say no and I'll still be here. Nothing changes.

@micah:tense He stops rewinding the cable.

*choice
  *if not(out_micah)
    #Tell him everything: the knack, and me.
      *achieve told_truth
      And before he can answer, I tell him everything. Because I'm asking him for something big, and I'm not going to ask it with anything hidden.
      *if not(gift_micah)
        The knack. The weather in rooms. The thing I felt from him the first night at Switchyard, the deep patient animal tiredness, before I knew what it was.
      {@out_micah|| }"And I'm gay," I say. "That's the other thing. I wanted you to know who's asking."

      @micah:surprised He looks at me for a long time, with the cable in his hands.
      *set out_micah true
      *set gift_micah true
  *if not(gift_micah)
    #Tell him about the knack. Just that.
      So I tell him about the knack. Just that. The weather in rooms. What I felt from him the first night at Switchyard, before I knew what it was.

      @micah:laugh "So you [i]knew[/i]," he says. "Before I told you. The whole time." He laughs, shaking his head. "Of course you did."
      *set gift_micah true
  #Just ask, and make the no easy.
    I just ask, and I make the no as easy as I can. I say it three times. [i]You can say no.[/i]
*comment ---------------------------------------------------------------- CH17.MICAH.02
*sid CH17.MICAH.02
*date 2027-01-24 23:30
*place P07 serrano_yard
*present micah
@micah:small He takes a long time. He winds the whole coil, and then another one, and then puts them both on the shelf, and sits down on an upturned crate by the stove.

@micah:tense "Yes," he says. "To the bridge. Yes." He looks at me. "Not for Dad. Not for the family. Not because someone asked and I can't say no." He swallows. "Because I want to. For me. Because it's the right thing and I want to be the person who does it." He laughs, shakily. "That's the first time I've ever said that."

@micah:small And then he says the other thing. Clumsily. Looking at the stove. Not naming anything bigger than tonight.

@micah:small "And I don't want you to go home," he says. "Tonight. That's all. I'm not saying anything else. I just don't want you to go home yet."

*choice
  *if (st_micah >= 5) and (hurt_micah < 2)
    #Say yes to tonight. And to the next one.
      *set st_micah 6
      *achieve told_truth
      {@not(out_micah)|First, the thing I haven't said out loud to him: that I'm gay. That it's him. |}"Then I won't," I say. "Tonight. Or the next one."

      @micah:surprised He looks up.
      *if steam
        And he gets up off the crate, and comes over, big and warm and clumsy, like a man walking towards something he's afraid he'll knock over. He puts his hands on my face, both of them, rough and warm, and kisses me, in the workshop, by the stove, with the vans outside in the frost. He's shaking. So am I. When he stops, he laughs, the big surprised laugh, right against my mouth.

        @micah:warm "I've wanted to do that since the barn," he says. "Since before the barn. Since the distro board, probably." He doesn't let go of my face. "I'm rubbish at this."

        "You're not."
      *else
        And he gets up off the crate and comes over, big and warm and clumsy, and the stove crackles, and the frost goes on outside, and neither of us says anything for a long time.
      *snapshot together-micah
      *set out_micah true
  *if (st_micah = 4) and (b_micah_wolf and b_micah_boundary) and (hurt_micah < 2)
    #Name the one specific thing I want, and let him name his.
      *set st_micah 5
      *set b_micah_want true
      *achieve told_truth
      "I'll name mine," I say, "if you name yours. Just one thing. Nothing bigger than that."

      @micah:small He nods, slowly.

      "I want to stay," I say.{@out_micah|| "Because I'm gay, Micah, and because it's you."} "Tonight. That's mine."

      @micah:small He looks at the stove for a long time. Then: "I want to hold your hand," he says. "That's mine. That's the one thing. I don't know what the rest is. I just know that."

      "That's enough."

      @micah:warm He holds out his hand, big and rough, with the little burn scar across one knuckle. I take it. We sit by the stove like that until it burns down, not saying anything bigger than that.
      *set out_micah true
  #Keep it a friendship. He's relieved, and a bit sad, and he'll still be a volunteer.
    *set friends_ch17 true
    "I'll stay for a bit," I say. "As your friend. That's what I want to be, Micah. Your friend. The one who says no for you when you can't."

    @micah:sad He looks at me for a long moment, relieved and a bit sad, both at once; I can feel both. Then he nods. "Yeah," he says. "Yeah. That's... yeah." He bumps my shoulder, hard. "I'll still do the bridge. That's mine now. That doesn't change."
*comment ---------------------------------------------------------------- CH17.MICAH.03
*sid CH17.MICAH.03
*date 2027-01-25 08:00
*place P07 serrano_yard
*present micah ernesto
*mood day
*set volunteers +1
Morning in the yard, frost on the vans, breath in the air.

His apprenticeship started last week: Halvorsen's, across the river, the full qualification. He goes at half eight. He's got a new lunchbox. Leandro bought it for him, as a joke, with a cartoon on it. He's taking it anyway.
*meet ernesto
@ernesto:warm And Ernesto comes out into the yard in his coat, with a mug, and stands next to Micah by the van, and says: "The chapel job. Next Saturday. Would you be able to? If you're not too tired?" And waits.

@micah:warm He asked. He didn't assign. It's the first time. Micah looks at his dad for a long moment, and then says, "Not this Saturday. The one after," and Ernesto nods, and says, "All right," and goes back in. Learning to ask instead of assign. Slowly.
*if st_micah >= 6
  @micah:warm Micah watches him go. Then he turns round and, in the middle of the yard, in front of the whole street, kisses me on the forehead, quick and clumsy, and goes bright red, and gets in the van.

*choice
  *if st_micah = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_micah 6
      "Micah," I say, at the van door. "I don't want to wait. For whatever this is. I don't want to put it off till after."

      @micah:surprised He stops with his hand on the door.

      @micah:warm And then he grins, the uneven one, the real one, and leans down, and kisses me, in the yard, in the frost, clumsily, on purpose. "Me neither," he says. "Obviously." And gets in the van, and drives to his apprenticeship with the cartoon lunchbox on the seat beside him, and waves all the way down the lane.
      *snapshot together-micah
  *if st_micah = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say, at the van door. "We both know. That's enough, for now."

      @micah:warm "Slowly," he agrees. "Yeah. I can do slowly." He grins. "I'm an electrician. We do everything slowly. It's why we don't die." And he squeezes my hand, once, and gets in the van.
  *if st_micah != 5
    #Get up. There's work.
      "Go on," I say. "You'll be late. There's work."

      @micah:amused "There's always work," says Micah, and gets in the van, and waves all the way down the lane with the cartoon lunchbox.
*goto end

*comment ================================================================ Ellis
*comment ---------------------------------------------------------------- CH17.ELLIS.01
*label ellis
*sid CH17.ELLIS.01
*date 2027-01-24 18:00
*place P20 okafor_restoration
*present ellis chukwudi
*mood night
The Okafors' workroom after hours. The lamps on over the benches, the error book on its shelf, the smell of glue and linseed and the air after lightning.

@ellis:warm Ellis's placement interview went well. Better than well. Sallowford rang on Friday: they want him in September. He tells me in the doorway, and he's shining, and under the shine he's frightened, because he's already started packing in his head.

@chukwudi:warm Chukwudi, at the far bench, is pretending not to listen and listening to everything.

So I ask him. To stay until March. Not forever, not instead of Sallowford: until March. And to design a shared bridge with his father. The most important work either of them will ever do: the thing that might let three men live without killing three others. The thing most likely, if I'm honest, to keep him here.

@ellis:tense He goes very still.

*choice
  *if not(out_ellis)
    #Tell him everything, and that he doesn't owe me staying.
      *achieve told_truth
      "And I want to tell you something," I say. "Before you answer. So you know who's asking." {@out_micah or out_dominic or out_ansel or out_nolan or out_adrian|I've said it out loud before this winter. It gets truer.|}"I'm gay. And I'd want you here in March for that reason too, and you don't owe me anything for it. Not staying. Not anything. The work's the ask. The rest is just true."

      @ellis:surprised He looks at me for a long time. Behind him, Chukwudi very quietly leaves the room.
      *set out_ellis true
      *set gift_ellis true
  *if not(gift_ellis)
    #Tell him what I see when I look at a bond. It's the tool he needs.
      "And you should know what I see," I say. "When I look at a bond. The ropes. How thick they are. Whether they're straining. It's the tool you'll need, for a bridge. I can watch it move."

      @ellis:attentive He stares at me. "You can see the load," he says. "On a link. Live." He sits down, slowly. "That changes everything."
      *set gift_ellis true
  #Just ask.
    I just ask.
*comment ---------------------------------------------------------------- CH17.ELLIS.02
*sid CH17.ELLIS.02
*date 2027-01-24 23:00
*place P20 okafor_restoration
*present ellis
@ellis:attentive He says yes to March. And yes to the work. He says it straight away, and then keeps talking, about how you'd do it, a bridge for three, the anchors, the frame, the load-bearing, his father's old notes, sketching on the back of an envelope and then on the back of another envelope and then on the bench itself in chalk.

It's eleven before he stops. The workroom's covered in sketches.

@ellis:small And then, for once, he doesn't curate what comes next. He doesn't make it charming. He sits on the old couch at the back of the workroom, among the paper, with chalk on his hands, and looks at me, and lets whatever's on his face be on his face.

*choice
  *if (st_ellis >= 5) and (hurt_ellis < 2)
    #Let him be ordinary with me. Stay.
      *set st_ellis 6
      *achieve told_truth
      *if not(out_ellis)
        First, the thing I haven't said out loud to him: that I'm gay. That it's him.
      I stay. I sit down next to him on the couch, among the sketches, and let him be ordinary with me.

      @ellis:warm "You're still here," he says.

      "I'm still here."
      *if steam
        @ellis:warm He reaches over, the way he did on the steps of the dome, and does up the top button of my coat, which is undone again. And then he doesn't take his hand away, and then he kisses me, with chalk on his fingers, very carefully, as if I'm something old and valuable he's been trusted to restore. It isn't a performance. It's the least performed thing I've ever felt from him.

        "You've got chalk on my face," I say.

        @ellis:laugh "Good," says Ellis Okafor. "Now it's attributed."
      *else
        @ellis:warm He reaches over and does up the top button of my coat, which is undone again, and doesn't take his hand away. The lamps hum. The sketches rustle. Neither of us moves for a long, long time.
      *snapshot together-ellis
      *set out_ellis true
  *if (st_ellis = 4) and b_ellis_danger and (hurt_ellis < 2)
    #Tell him I'd want him on a bad day. Especially on a bad day.
      *set st_ellis 5
      *set b_ellis_badday true
      *achieve told_truth
      "I'd want you on a bad day," I say. "Especially on a bad day. Not impressive. Just you, with chalk on your hands and your coat done up wrong."{@out_ellis|| "I'm gay, Ellis. That's what this is, for me."}

      @ellis:surprised He looks at me for a long time.

      @ellis:small "I've noticed men for years," he says, very quietly. "I put it on a shelf. I said I'd decide later." He looks at the chalk on his hands. "I don't want to decide later any more." And he leans, very slightly, against my shoulder, and stays there.
      *set out_ellis true
  #Keep it the best kind of friendship: the one where you tell each other the truth about the work.
    *set friends_ch17 true
    "This," I say, looking at the sketches. "This is the best thing. The two of us telling each other the truth about the work. I want to keep that. Exactly that."

    @ellis:warm He looks at me, and I feel him understand, and something in him settle, not unhappily. "The truth about the work," he says. "Yes. That's rarer than the other thing, you know." He hands me a piece of chalk. "Help me with the anchor points."
*comment ---------------------------------------------------------------- CH17.ELLIS.03
*sid CH17.ELLIS.03
*date 2027-01-25 09:00
*place P20 okafor_restoration
*present ellis chukwudi
*mood day
*set volunteers +1
Morning.

@chukwudi:amused Chukwudi comes down the stairs at nine in his dressing gown and finds us asleep on the workroom couch among the sketches, Ellis's head on my shoulder, both of us covered in chalk. He looks at us for a long moment. He looks at the sketches, which cover every bench and half the floor. He says nothing, pointedly, and makes a pot of tea loud enough to wake the dead.
*if st_ellis >= 6
  @ellis:shy Ellis wakes up, and sees his father, and goes grey, and then very pink, and then sits up very straight and says "Good morning," in his most impressive voice. Chukwudi hands him a cup of tea without a word and goes back upstairs. On the stairs, very quietly, he starts to hum.

*choice
  *if st_ellis = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_ellis 6
      When Chukwudi's gone back up, I say it. "I don't want to wait for March. For this. For us."

      @ellis:surprised Ellis looks at me over his tea.

      @ellis:warm "No," he says. "No. I've waited for everything my whole life. I planned it all. I don't want to plan this." He puts his tea down and kisses me, quickly, chalk and all, in his father's workroom, on purpose. "There," he says, going pink. "Now it's decided."
      *snapshot together-ellis
  *if st_ellis = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say. "We both know. That's enough for now. There's a bridge to build."

      @ellis:warm "Slowly," he agrees. "Restoration's always slow. You don't rush a varnish." He smiles, the lopsided real one. "I'm very good at slow."
  *if st_ellis != 5
    #Get up. There's work.
      "Right," I say, looking at the sketches. "There's work."

      @ellis:amused "There's always work," says Ellis, and picks up the chalk.
*goto end

*comment ================================================================ Dominic
*comment ---------------------------------------------------------------- CH17.DOMINIC.01
*label dominic
*sid CH17.DOMINIC.01
*date 2027-01-24 19:00
*place P14 regent
*present dominic
*mood night
The Regent's projection booth, the kettle, the two chairs, the window onto the dark auditorium. Snow on the marquee outside.

So I ask him. To be at the patient site on the night, when we move the links. The fastest, strongest person we've got, in a room full of blood and fear and three men whose hearts are doing things hearts shouldn't. Someone who can carry a man down a stair in the dark. And I ask him to tell me honestly if he can't. If the blood, or the fear, or the hunger, is too much. I won't think less of him. I just need to know.

@dominic:tense He's quiet for a long time, looking out of the little window at the dark screen.

*choice
  *if not(out_dominic)
    #Tell him everything, and don't manage his answer.
      *achieve told_truth
      And I tell him everything, before he answers. The knack. What I see of him when I look: the stillness, the loneliness, the careful hunger on its short lead. And the other thing.{@out_micah or out_ansel or out_nolan or out_ellis or out_adrian| I've said it before this winter. It gets truer.|} "I'm gay," I say. "And whatever you say about the night, I'm not going to manage it. It's your answer."

      @dominic:surprised He turns from the window and looks at me.
      *set out_dominic true
      *set gift_dominic true
  *if not(gift_dominic)
    #Tell him what the knack shows me of him. It's not what he fears.
      "Can I tell you what I see?" I say. "When I look at you. With the knack." And I tell him. Not a monster. Not hunger. A stillness, careful, held. A lonely twenty-two-year-old who misses the sound of a room going quiet for him. "That's what's there," I say. "That's all that's ever been there."

      @dominic:surprised He's very still. "That's not what I thought you'd see," he says.
      *set gift_dominic true
  #Just ask.
    I just ask. I don't add anything.
*comment ---------------------------------------------------------------- CH17.DOMINIC.02
*sid CH17.DOMINIC.02
*date 2027-01-24 23:45
*place P14 regent
*present dominic
@dominic:attentive He tells me honestly. He can do it. He can be in that room, with the blood and the fear. If someone he trusts is watching him. Not managing him. Watching. Someone who'll tell him if he's going wrong, and trust him to stop.

@dominic:attentive And then he asks me what I want.

@dominic:small Not about the night. About me. "Nobody's asked me that about myself for a year," he says. "Until you did. On the roof, or in the lobby, or wherever. So I'm asking you. What do you want?"

*choice
  *if (st_dominic >= 5) and (hurt_dominic < 2)
    #Tell him what I want is him, all of him, changed hours and all.
      *set st_dominic 6
      *achieve told_truth
      {@not(out_dominic)|First, the thing I haven't said out loud to him: that I'm gay. That it's him. |}"You," I say. "All of you. Changed hours and all. Cold hands. No breakfast. The shutters. You."

      @dominic:surprised He stares at me.
      *if steam
        And then he laughs, low and rough, the laugh from the stage, and puts down the mug he wasn't drinking, and kisses me, in the projection booth, with the snow falling past the little window. He's careful. He's so careful. His hands are cold on my face and his mouth is cold and I don't care at all. When he stops, he rests his forehead on mine and breathes, out of habit, the way he does before a song.

        @dominic:warm "Changed hours and all," he says. "Nobody's ever wanted the changed hours."
      *else
        @dominic:warm And then he laughs, low and rough, the laugh from the stage, and puts down the mug he wasn't drinking, and reaches for my hand with his cold one, and the snow goes on falling past the little window, and we don't turn the lamp back on.
      *snapshot together-dominic
      *set out_dominic true
  *if (st_dominic = 4) and (b_dominic_dawn and not(managed_dominic)) and (hurt_dominic < 2)
    #Answer him, finally.
      *set st_dominic 5
      *set b_dominic_ask true
      *achieve told_truth
      So I answer him, finally.

      "You," I say.{@out_dominic|| "I'm gay, Dominic, and it's you."} "That's what I want. I've wanted it since the Regent lobby. I didn't think I was allowed to say it to someone who's been told for a year what he's allowed."

      @dominic:small He's very still. Then: "I want you too," he says. "I didn't think I was allowed either." He puts his cold hand on the arm of my chair, an inch from mine, and waits, the way you'd wait for a deer to come to you. I close the inch.
      *set out_dominic true
  #Tell him I want him singing in April. It's true, and it's all I say.
    *set friends_ch17 true
    "I want you singing in April," I say. "At the showcase. I want to be doing the lights. That's what I want."

    @dominic:warm It's true. It's all I say. He looks at me for a long moment, and I feel him hear what I don't say, and decide to let it be. "April," he says. "Okay. Six songs. You do the lights." He smiles. "It's a deal, friend."
*comment ---------------------------------------------------------------- CH17.DOMINIC.03
*sid CH17.DOMINIC.03
*date 2027-01-25 06:30
*place P14 regent
*present dominic
*set volunteers +1
Before dawn. The shutters.

@dominic:warm He asks me to help, the way he likes it, and I do: this one first, then this, pull the strap like this, not like that. And while we do them, we talk about the showcase. Six songs, in April, at the Lantern Rooms. He's going to do it, or he isn't. I don't decide for him. I ask what he's afraid of, and he tells me, and I ask what he'd need, and he tells me that too, and at the end of the east wing, at the last shutter, he says, "I think I'm going to do it," and it's his.
*if st_dominic >= 6
  @dominic:warm At the last shutter, with the sky going grey behind it, he kisses me, quick, before it closes. "Go home," he says. "Get some sleep. Come back at dusk." And the shutter comes down, and the corridor goes dark, and I walk home through the snow grinning like an idiot.

*choice
  *if st_dominic = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_dominic 6
      At the last shutter, I stop him. "Dominic. I don't want to wait. For whatever this is. Not till March. Not till after."

      @dominic:surprised He looks at me in the grey light.

      @dominic:warm "No," he says. "Neither do I. I've spent a year waiting for permission." And he kisses me, cold and careful and on purpose, with the dawn coming up behind the shutter, and then pulls it down and laughs in the dark. "There. I didn't ask anyone."
      *snapshot together-dominic
  *if st_dominic = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say. "We both know. That's enough, for now."

      @dominic:warm "Slowly," he agrees. "I've got nothing but time." He grins. "Literally. That's the one good thing about it."
  *if st_dominic != 5
    #Get up. There's work.
      "Right," I say, as the last shutter comes down. "There's work."

      @dominic:amused "There's always work," says Dominic, from the dark. "Come back at dusk."
*goto end

*comment ================================================================ Nolan
*comment ---------------------------------------------------------------- CH17.NOLAN.01
*label nolan
*sid CH17.NOLAN.01
*date 2027-01-24 20:00
*place P28
*present nolan
*mood night
Nolan's room at Laird's: a mattress on a frame he built himself, three guitars, a mixing desk from a skip, cables coiled on every surface, and his Wexmoor letter pinned over the desk where he can see it.

So I ask him. To run the radios and the relays on the night. Across a crossing, into another world, where phones don't work. To keep everyone talking to everyone: the patient site, the docks, the crossing, whatever the plan turns out to be. And I tell him to know exactly what that means before he says yes. It's dangerous. It's another country. It's the man who killed Quentin in the lane.
*if nolan_knows
  He knows about the other world now; he's {@tunnels_done|been under Northline with a speaker and a monster|heard it from me, all of it, in the house lights at Switchyard}.
*else
  He doesn't know. Not about any of it. So the ask starts with the other world: I tell him, sitting on his desk chair among the cables, the way you'd explain the rules of a house to someone who's lived in it for years without knowing there was an upstairs. Wardens. The Regent. Eastbank. A door in the Iron Footbridge. He listens with his mouth open, and doesn't interrupt once.
*set nolan_knows true

*choice
  *if not(out_nolan)
    #Tell him everything I haven't. All of it.
      *achieve told_truth
      So I tell him everything I haven't. All of it. {@gift_nolan|The knack he already knows about, and what it's been doing since August.|The knack. What I am. What I've always been, since I was eight, every time I knew he was in a mood before he did.} And the other thing.

      "I'm gay," I say. "I've known since I was twelve. You're the first person I ever wanted to tell. I'm telling you now."

      @nolan:surprised He looks at me for a long time. He doesn't turn anything over in his hands. His hands are still.
      *set out_nolan true
      *set gift_nolan true
  *if not(gift_nolan)
    #Tell him the parts about the knack he doesn't know yet.
      So I tell him about the knack. From the beginning. The weather in rooms. The ear defenders. The lane.

      @nolan:amused "That's why you always know when I'm in a mood," he says. "I [i]knew[/i] it. I knew I wasn't that obvious."

      "You are that obvious."
      *set gift_nolan true
  #Just ask.
    I just ask.
*comment ---------------------------------------------------------------- CH17.NOLAN.02
*sid CH17.NOLAN.02
*date 2027-01-24 23:30
*place P28
*present nolan
@nolan:warm He says yes.

@nolan:small He says yes before I've finished, and then he says it again, properly, when I have. "I've been waiting for you to ask me for something that mattered," he says. "Since we were sixteen. Since the first night at Switchyard. You never ask anyone for anything. You just carry it." He looks at the Wexmoor letter. "So yes. Radios. Relays. Another world. Whatever. Yes."

And then neither of us knows what to do with our hands.

He's sitting on the mattress. I'm on the desk chair. There's about three feet of cable-covered floor between us, and it's half eleven at night, and his hands are on his knees, and mine are on mine, and the knack, which could tell me what a stranger in a bus queue had for breakfast, can't tell me a single thing.

*choice
  *if (st_nolan >= 5) and (hurt_nolan < 2)
    #Do something with our hands.
      *set st_nolan 6
      *achieve told_truth
      {@not(out_nolan)|First, the thing I haven't said out loud to him: that I'm gay. That it's him. |}I get up off the chair and cross the three feet of cable-covered floor, and sit down next to him on the mattress, and take his hand. That's something to do with our hands.

      @nolan:laugh He laughs, a shaky, disbelieving laugh. "Four years," he says. "Four years of shoulder bumps."
      *if steam
        And then he kisses me. Or I kiss him. I genuinely don't know which, and when we argue about it afterwards, neither of us will give in. It's clumsy and it's four years late and he knocks a guitar over with his elbow and neither of us stops. When we do stop, he's still laughing, with his forehead on my shoulder.

        @nolan:warm "That," he says, "was a very bad mix. We'll need to do it again. For levels."
      *else
        @nolan:warm And then he stops laughing, and puts his forehead against mine, and one of the guitars falls over, and neither of us picks it up.
      *snapshot together-nolan
      *set out_nolan true
  *if (st_nolan = 4) and (b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)
    #Have the direct, awkward conversation, finally.
      *set st_nolan 5
      *set b_nolan_talk true
      *achieve told_truth
      "We should talk," I say. "About the shoulder thing. About the balcony. Properly."

      @nolan:small "Oh God," says Nolan. "Okay. Okay. Yes."

      So we have the direct, awkward conversation, finally, on opposite sides of three feet of cables.{@out_nolan|| I tell him I'm gay. That I've known since I was twelve.} I tell him it's him, it's been him for a long time. He tells me, going red to the ears, that it's been me since the balcony, and before the balcony, and probably since the first night at Switchyard when I handed him the crimper before he asked. It's the most awkward conversation either of us has ever had, and at the end of it, he holds out his hand across the cables, and I take it.
      *set out_nolan true
  #Tell him he's my best friend and always will be. It's the truest thing I say all year.
    *set friends_ch17 true
    "You're my best friend," I say. "You always will be. Whatever else happens. That's the truest thing I know."

    @nolan:warm He looks at me for a long time. Then he nods, and smiles, and it's only a little bit sad. "Yeah," he says. "Same." He picks up a cable and coils it, over and under, the way we do. "Best friends. Radios. Relays. Another world." He grins. "Easy."
*comment ---------------------------------------------------------------- CH17.NOLAN.03
*sid CH17.NOLAN.03
*date 2027-01-25 10:00
*place P28
*present nolan peter owen
*mood day
*set volunteers +1
Morning at Laird's.

@peter:amused Peter's in the kitchen in his lanyard, on a Monday, making coffee with a scale, and pretends not to notice anything at all. With enormous effort. He notices everything. He says "Morning" to me in the voice of a man reading a very neutral statement off a card.

@owen:amused Owen, off a night shift, in his union fleece, makes too much toast. Eight slices. He puts four in front of me and four in front of Nolan and says, "Big day," to nobody, about nothing, and goes to bed.
*if st_nolan >= 6
  @nolan:warm Nolan's hand finds mine under the kitchen table and stays there, and Peter, at the coffee, very carefully does not look.

*choice
  *if st_nolan = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_nolan 6
      Under the table, I take his hand. "I don't want to wait," I say, low, so Peter can't hear. "Not till March. Not till after."

      @nolan:surprised He looks at me over the toast.

      @nolan:warm "No," he says. "God, no." And he leans across the table, in front of Peter and the scale and the coffee, and kisses me, quick and toast-flavoured and on purpose. Peter drops a spoon.
      *snapshot together-nolan
  *if st_nolan = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say, under the table, with his hand in mine. "We both know. That's enough, for now."

      @nolan:warm "Slowly," he agrees. "Like a fade. A long one." He squeezes my hand. "I'm good at fades."
  *if st_nolan != 5
    #Get up. There's work.
      "Right," I say, finishing Owen's toast. "There's work. Radios."

      @nolan:amused "There's always work," says Nolan. "Radios." And he gets a notebook and starts drawing.
*goto end

*comment ================================================================ Ansel
*comment ---------------------------------------------------------------- CH17.ANSEL.01
*label ansel
*sid CH17.ANSEL.01
*date 2027-01-26 19:30
*place P35 neutral_table
*present ansel
*mood night
The Neutral Table's upstairs room, on the Tuesday. Ansel's in Calder for the passage papers: the court's limited passage made permanent, pending the assembly, stamped and sealed. He's booked the room for dinner. He has opinions about the dinner.

So I ask him. To secure our crossing on the night, and the way to Stillwater: the door, the road, the gate, the cart. Against his father's wishes, if it comes to that. Not as his father's son, carrying his father's intentions. As himself. His first unassigned choice.

@ansel:tense He puts his knife and fork down together, very precisely.

*choice
  *if not(out_ansel)
    #Tell him everything. No bargain attached.
      *achieve told_truth
      And I tell him everything, with no bargain attached. {@gift_ansel|He already knows about the knack; he called it listening, on the Riverside Steps.|The knack. The weather in rooms. How I felt Eamon's gloves.} And the other thing.{@out_micah or out_dominic or out_nolan or out_ellis or out_adrian| I've said it before this winter. It gets truer.|} "I'm gay," I say. "That's not part of the ask. It's not a bargain. You should just know who's asking."

      @ansel:surprised He looks at me across the table for a very long time. The cold water in the glass, very still.
      *set out_ansel true
      *set gift_ansel true
  *if not(gift_ansel)
    #Tell him about the knack; he'll understand keeping a thing quiet.
      So I tell him about the knack. He's a man who understands keeping a thing quiet.

      @ansel:attentive "At home," he says, when I've finished, "we'd call you a listener." He considers me. "They're rare. They're usually very tired." A pause. "That explains your face."
      *set gift_ansel true
  #Just ask.
    I just ask.
*comment ---------------------------------------------------------------- CH17.ANSEL.02
*sid CH17.ANSEL.02
*date 2027-01-26 23:00
*place P35 neutral_table
*present ansel
@ansel:attentive He says yes as if he's been practising.

He has been practising. I can tell. It comes out in complete, formal sentences: the door, the road, the gate, the cart; his cousin's goodwill, the court's passage, a man at the Stillwater gate who owes him nothing but will listen. His father's wishes, noted, and set aside. His first unassigned choice, made.

@ansel:small And then, with no practice at all, he says: "I don't have an official reason to stay tonight."

It's eleven o'clock. The restaurant's closing below us; I can hear the grandmother at the till counting coins. He's looking at the tablecloth.

@ansel:small "I've looked," he says. "I've looked for one. I haven't got one."

*choice
  *if (st_ansel >= 5) and (hurt_ansel < 2)
    #He doesn't need one.
      *set st_ansel 6
      *achieve told_truth
      {@not(out_ansel)|First, the thing I haven't said out loud to him: that I'm gay. That it's him. |}"You don't need one," I say.

      @ansel:surprised He looks up.
      *if steam
        And I reach across the table, past the plates and the wrong-shaped bread, and take his hand, and he looks at it, and then at me, and then he stands up, very straight, and comes round the table, and kisses me, formally, carefully, as though it's a thing with rules he's looked up. It isn't formal for long. When he stops, he's breathing hard and his collar's crooked and he doesn't straighten it.

        @ansel:warm "I've never done anything without a reason," he says. "I think I like it."
      *else
        And I reach across the table, past the plates and the wrong-shaped bread, and take his hand. He looks at it for a long time. Then he doesn't let go. Downstairs, the grandmother turns the lights off, one by one, and we don't move.
      *snapshot together-ansel
      *set out_ansel true
  *if (st_ansel = 4) and b_ansel_confidence and (hurt_ansel < 2)
    #Tell him he never needed a reason to come to my door.
      *set st_ansel 5
      *set b_ansel_nopretext true
      *achieve told_truth
      "You never needed a reason," I say. "Not the lease papers. Not the crossing arrangements. Not any of it. You never needed a reason to come to my door."{@out_ansel|| "I'm gay, Ansel. I wanted you to come."}

      @ansel:small He's very still. "I know," he says, eventually. "I think I knew on the Riverside Steps. I just didn't know I was allowed to know." He looks at me. "I'm very bad at saying things that aren't messages."

      "You're doing all right."

      @ansel:warm He takes my hand across the table, formally, carefully, as though it's a thing with rules he's looked up, and holds it.
      *set out_ansel true
  #Tell him he's the best friend I've made this year, and watch him be moved and formal about it.
    *set friends_ch17 true
    "You're the best friend I've made this year," I say. "Maybe ever. That's what I want you to know."

    @ansel:warm He's moved. He's so moved he goes completely formal, like a shutter coming down, and thanks me in three complete sentences, and bows, slightly, from his chair. "I'm honoured," he says. And then, much less formally, going pink above his collar: "You're mine too. My second. You know that."
*comment ---------------------------------------------------------------- CH17.ANSEL.03
*sid CH17.ANSEL.03
*date 2027-01-27 08:30
*place P35 neutral_table
*present ansel
*mood day
*set volunteers +1
Morning. The Neutral Table's grandmother gives us coffee downstairs before she opens, on the house, and a look.

@ansel:warm Ansel goes back through the crossing at nine, with his passage papers and his own intentions, for once, and a paper bag of Calder pastries from the bakery on the corner that he claims to despise and has chosen with great care.
*if st_ansel >= 6
  At the footbridge, before the green door, he turns round and kisses me, briefly, formally, on the mouth, in full view of Harlan Greaves and his ledger, and Harlan drops his pen.

*choice
  *if st_ansel = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_ansel 6
      At the footbridge, before the green door, I say it. "Ansel. I don't want to wait until March."

      @ansel:surprised He stops with his hand on the door.

      @ansel:warm "Nor do I," he says. "I've been waiting for permission my whole life." And he kisses me, formally and not formally at all, in front of Harlan and his ledger, and goes through the door without looking back, and I can hear him laughing on the other side.
      *snapshot together-ansel
  *if st_ansel = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say, at the door. "We both know. That's enough."

      @ansel:warm "Slowly," he agrees. "In the Marches, everything takes three hundred years. I'm used to it." He bows, slightly, with the pastries. "Soon, {name}."
  *if st_ansel != 5
    #Get up. There's work.
      "Go on," I say. "There's work."

      @ansel:amused "There is always work," says Ansel, and goes through the green door with his pastries.
*goto end

*comment ================================================================ Quentin
*comment ---------------------------------------------------------------- CH17.QUENTIN.01
*label quentin
*sid CH17.QUENTIN.01
*date 2027-01-24 18:00
*place P43
*present quentin
*mood night
Quentin's room in Willow Court, in Southmere: fourth floor, a window onto the rec centre car park, a single bed, a kettle, a poster for a film about a dog, a paramedic textbook he's still reading, cover to cover, a chapter a night.

I don't ask him for anything. That's the ask.

I ask him what he wants done with his own life, in all of this. When we move the links. When we try to get Eamon out. What he wants. Not what's best for the plan, or what the wardens think, or what I think. His. And I mean it, and I wait.

@quentin:surprised He looks at me for a long time, sitting on the edge of his bed with his cold hands between his knees.

*choice
  *if not(out_quentin)
    #Tell him everything about me first, so it's even.
      *achieve told_truth
      "First," I say. "So it's even. You've had everyone looking at you for five months. Here's me."

      And I tell him. {@gift_quentin|The knack he knows about; what it's shown me of him, which he doesn't.|The knack: that I felt him die in the lane, that I've felt the rope every day since.} And the other thing.{@out_micah or out_dominic or out_nolan or out_ellis or out_adrian or out_ansel| I've said it before this winter. It gets truer.|} "I'm gay," I say. "There. Now you know something about me nobody's decided for you."

      @quentin:laugh He laughs. A real one, startled. "That's the nicest thing anyone's said to me in months," he says. "Weirdly."
      *set out_quentin true
      *set gift_quentin true
  *if not(gift_quentin)
    #Tell him what I see in him, the rope, all of it.
      So I tell him what I see. The rope, running out of his chest. What it's done to him. What it hasn't. The steady thing under his jokes, the floor, that's still there, every day, holding.

      @quentin:small He's quiet for a long time. "The floor," he says. "Yeah. That's about right."
      *set gift_quentin true
  #Just ask, and wait.
    I just ask, and wait.
*comment ---------------------------------------------------------------- CH17.QUENTIN.02
*sid CH17.QUENTIN.02
*date 2027-01-24 22:30
*place P43
*present quentin
@quentin:tense He tells me what he wants.

@quentin:angry "I want to be free of him," he says. "Eamon. His life. I want to stop running on someone else's battery. Whatever it costs me." He looks at his hands. "If the bridge works, great. If it doesn't, if the only way Eamon lives is if I stop, then I stop. That's mine to decide. Not yours. Not Ilyas's. Not Gideon's. Mine." He breathes out. "And the rest of it, the rest of my life, whatever's left of it, I want to decide myself. The course. The job. Everything."

It's not a speech. It's four months of not being asked, coming out all at once, flat and practical and certain.

@quentin:small And then, because nothing needs investigating, and nobody's watching, and it's half ten at night in a small room in Southmere with a paramedic textbook on the pillow, he decides something else.

*choice
  *if (st_quentin = 4) and (b_quentin_acts and b_quentin_nothing) and (hurt_quentin < 2)
    #He reaches first. I meet him.
      *set st_quentin 5
      *set b_quentin_initiates true
      *achieve told_truth
      He reaches first.

      @quentin:small He gets up off the bed, and crosses the room, and stops in front of me, and puts his cold hand on the side of my face, and looks at me, very direct, the way he does everything important. "This is me deciding something," he says. "Just so you know. Nobody told me to."{@out_quentin|| And I tell him, then, that I'm gay, and that it's him, and he says, "Yeah. I'd worked that one out," and grins.}

      I meet him.
      *if steam
        He kisses me like he makes coffee: with total concentration, as if nothing else in the world is happening. His hands are cold. His mouth is cold. He's warm everywhere else, and so alive it hurts. When he stops, he rests his forehead on mine and laughs, quietly.

        @quentin:warm "I've wanted to do that since the bar," he says. "The blister. The plasters. You said [i]ask Des for the gel ones[/i] and I thought, [i]oh no[/i]."
      *else
        @quentin:warm And he laughs, quietly, with his forehead against mine, and the paramedic textbook slides off the pillow onto the floor, and neither of us picks it up.
      *set out_quentin true
  #Tell him I'm his friend, whatever happens in March. He holds me to it.
    *set friends_ch17 true
    "I'm your friend," I say. "Whatever happens in March. Whatever you decide. I'll be there for all of it."

    @quentin:warm He looks at me for a long time. Then he holds out his cold hand, like the start of an arm-wrestle, the way he did with Silas at the diner. "Deal," he says. "I'm holding you to that." And he does, then and afterwards, every single time.
*comment ---------------------------------------------------------------- CH17.QUENTIN.03
*sid CH17.QUENTIN.03
*date 2027-01-25 09:30
*place P43
*present quentin
*mood day
*set volunteers +1
Morning. He's grey, and cold, and he burns the toast in his tiny kitchen, and he laughs at something on the radio, a proper laugh, head back, and I'd do anything, anything at all, to keep hearing that.

*choice
  *if st_quentin = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_quentin 6
      "Quentin," I say. "I don't want to wait for March. For this."

      @quentin:surprised He looks at me over the burnt toast.

      @quentin:warm "Good," he says. "Because I might not have till March." He says it lightly. He means it. "So let's not." And he kisses me, in his tiny kitchen, with the smoke alarm going off, on purpose, and doesn't stop to turn it off.
      *snapshot together-quentin
  *if st_quentin = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say. "We both know. That's enough."

      @quentin:warm "Slowly," he agrees. "Fine. But not too slowly. I'm on a clock." He grins, and it's only half a joke. "I'll let you know when."
  *if st_quentin != 5
    #Get up. There's work.
      "Right," I say. "There's work."

      @quentin:amused "There's always work," says Quentin. "Eat your toast. It's the burnt kind. It's the best kind."
*goto end

*comment ================================================================ Reuben
*comment ---------------------------------------------------------------- CH17.REUBEN.01
*label reuben
*sid CH17.REUBEN.01
*date 2027-01-24 21:00
*place P01 mercy_house
*present reuben
*mood night
Mercy House infirmary after lights out: the beds empty, the lamps low, the smell of antiseptic and toast. Reuben's at the nurses' desk, writing up a shift, with his reading lamp on.

So I ask him. Two things. To lead the medical side of a rescue against the man who taught him everything: to stand in a room and plan how to beat Damian Holt, with everything Damian taught him. And then I ask him the second thing. To let someone take care of him while he does it. Because he won't. Because he never has.

@reuben:tense He puts his pen down.

*choice
  *if not(out_reuben)
    #Tell him everything, and that I'm asking as more than a colleague.
      *achieve told_truth
      And I tell him everything. {@gift_reuben|He knows about the knack; he believed me carefully, the first time.|The knack. What I see. The ropes.} And that I'm asking the second thing as more than a colleague.{@out_micah or out_dominic or out_nolan or out_ellis or out_adrian or out_ansel or out_quentin| I've said it before this winter. It gets truer.|} "I'm gay," I say. "And I'm asking because I care what happens to you. Not just to the rescue. To you."

      @reuben:surprised He looks at me for a long time, in the lamplight.
      *set out_reuben true
      *set gift_reuben true
  #Tell him what the knack says about the links. He'll need it.
    So I tell him what the knack says about the links. {@gift_reuben|Not the rope; he knows about the rope. The detail, the part a medic can use:|All of it:} how thick they are, when they strain, how I can watch them move. "You'll need it," I say. "On the night. To know when to stop."

    @reuben:attentive He listens carefully, the way he always does, and writes it down on the back of the shift sheet in block capitals. Then he says, {@gift_reuben|"I believed you the first time."|"I believe you."} Carefully, like a man setting something heavy down. "Of course I do."
    *set gift_reuben true
  #Just ask.
    I just ask.
*comment ---------------------------------------------------------------- CH17.REUBEN.02
*sid CH17.REUBEN.02
*date 2027-01-24 23:59
*place P01 mercy_house
*present reuben
@reuben:attentive He says yes to the rescue before I've finished the first question. Of course he does. He's already thinking about drip rates and shift patterns and what Damian would do and how to do it better.

@reuben:small The second question takes him much longer.

We sit in the empty infirmary until nearly midnight. He doesn't answer. He tidies the desk. He sorts a tray of pens. He looks at his hands. And then, at one minute to twelve, he answers it, and it isn't as a medic.

@reuben:small "Yes," he says. "I'd like that. Someone to..." He stops. "I've never let anyone. I don't know how." He looks at me. "Will you show me?"

*choice
  *if (st_reuben = 4) and b_reuben_needs and (hurt_reuben < 2)
    #Tell him the reason's gone and I'm still here.
      *set st_reuben 5
      *set b_reuben_stay true
      *achieve told_truth
      "The rescue's asked," I say. "You said yes. That's done. There's no reason for me to still be here."

      @reuben:small He looks at me.

      "I'm still here," I say.{@out_reuben|| "I'm gay, Reuben. I'm still here because of you."}

      @reuben:warm And the radiator-warmth of him, the steady heat you don't notice until you step away from it, turns up, and up, until it fills the whole dim infirmary. "The reason's gone," he says slowly. "And you stayed." He puts his big hand over mine on the desk. "I've been waiting all my life for someone to stay after the reason's gone."
      *set out_reuben true
  #Tell him he's the best person I know. He goes red to the ears.
    *set friends_ch17 true
    "You're the best person I know," I say. "That's all. That's the whole answer."

    @reuben:shy He goes red to the ears. All the way. "That's... thank you," he says, and doesn't know where to look, and sorts the pens again. "I'll let you. Take care of me, I mean. As a friend. I'll try."
*comment ---------------------------------------------------------------- CH17.REUBEN.03
*sid CH17.REUBEN.03
*date 2027-01-25 07:30
*place P01 mercy_house
*present reuben
*mood day
*set volunteers +1
Morning in the infirmary kitchen. He lets me make the tea.

It's a small thing. It isn't. He stands by the counter with his hands in his pockets, not doing anything, watching me put the kettle on and find the mugs and the milk, and every muscle in him wants to take over, and he doesn't. He just lets me. When I hand him the mug, he holds it in both hands like something precious.

*choice
  *if st_reuben = 5
    #Don't wait for March. Take the next step together, now, on purpose.
      *set st_reuben 6
      "Reuben," I say. "I don't want to wait. Not till March. Not till after."

      @reuben:surprised He looks at me over the tea.

      @reuben:warm "No," he says, very quietly. "I don't want to wait either. I've waited for everything." And he puts his mug down, very carefully, and kisses me, in the infirmary kitchen, gently, on purpose, as if I'm the thing that needs taking care of. Then he laughs, surprised at himself. "I did that," he says. "Nobody told me to."
      *snapshot together-reuben
  *if st_reuben = 5
    #Go slowly. We both know. That's enough for this winter.
      *set slow_ch17 true
      "Slowly," I say. "We both know. That's enough."

      @reuben:warm "Slowly," he agrees. "I'm good at slowly. Everyone says so." He smiles over the tea. "It's the first time it's been a compliment."
  *if st_reuben != 5
    #Get up. There's work.
      "Right," I say. "There's work."

      @reuben:amused "There's always work," says Reuben, and drinks the tea I made him, all of it, and doesn't wash the mug up, for once.
*goto end

*comment ================================================================ family
*comment ---------------------------------------------------------------- CH17.FAMILY.01
*label family
*sid CH17.FAMILY.01
*date 2027-01-24 19:00
*place P02 print_shop
*present martin will
*mood night
The kitchen table above the shop, Sunday night, snow outside. Will's homework and Martin's accounts pushed to one end. The radio off.

I ask them for their trust. For six weeks. Without all the reasons. There's something I'm doing, with people I trust, that matters more than anything I've ever done, and it'll end in March, one way or another, and I need them to let me do it without asking why.

@martin:attentive Martin takes his glasses off and puts them on again.

@will:guarded Will looks at me over his maths.

And I tell them something true. Because I can't ask for trust with nothing in my hands.

*choice
  *if not(gift_martin)
    #Tell them about the knack. All of it, from when I was small.
      *set fr_martin +1
      *set fr_will +1
      So I tell them about the knack. All of it, from when I was small. The weather in rooms. Martin's kettle-warmth and his grey worry. Will's bright tight wire. The ear defenders. Why I sat on Mum's feet after her bad shifts.

      @will:surprised Will stares at me. "So when you said my trial nerves were [i]loud[/i]," he says. "In August. You meant [i]loud[/i]."

      "I meant loud."
      *set gift_martin true
  *if gift_martin
    #Tell Will about the knack too. Martin already knows.
      *set fr_will +1
      *set fr_martin +1
      So I tell Will about the knack. Martin already knows; he sits with his hands round his tea and nods along, as if confirming a story. The weather in rooms. Will's bright tight wire.

      @will:surprised Will stares at me. "So when you said my trial nerves were [i]loud[/i]," he says. "You meant [i]loud[/i]." He looks at his dad. "And you [i]knew[/i]?"

      @martin:amused "Since Christmas," says Martin. "I was sworn to secrecy."
  #Tell them I'm gay. Just that.
    *set fr_martin +1
    *set fr_will +1
    *achieve told_truth
    So I tell them I'm gay. Just that.{@out_micah or out_dominic or out_nolan or out_ellis or out_adrian or out_ansel or out_quentin or out_reuben| I've said it out loud before this winter, to someone else. It's different, saying it here, at this table, to them.| It's the first time I've ever said it out loud to anyone.}

    "I'm gay," I say, to the kitchen table. "I've known since I was twelve. I wanted you to know."

    @martin:surprised Martin takes his glasses off again, and doesn't put them back on.
    *set out_family true
  #Tell them both things.
    *set fr_martin +1
    *set fr_will +1
    *achieve told_truth
    So I tell them both things. The knack, from when I was small. And the other thing.{@out_micah or out_dominic or out_nolan or out_ellis or out_adrian or out_ansel or out_quentin or out_reuben| I've said it before, this winter, to someone else. It's different here.| I've never said it out loud to anyone.} "I'm gay," I say. "That's the other thing. Both of them are true. I wanted you to have both."

    @martin:surprised Martin takes his glasses off, and doesn't put them back on.
    *set gift_martin true
    *set out_family true
  #Tell them about the case, and ask them to trust me about the rest.
    *set family_case true
    So I tell them about the case. Not the knack, not me. The case. Men going missing. Men coming back. A warehouse in another country. That I'm helping. That it's dangerous, and it matters, and it'll end in March.

    @martin:tense Martin listens with his hands flat on the accounts book.

    @will:tense Will doesn't say anything at all.
*comment ---------------------------------------------------------------- CH17.FAMILY.02
*sid CH17.FAMILY.02
*date 2027-01-24 22:00
*place P02 print_shop
*present martin will
*set volunteers +1
@martin:tired Martin takes his glasses off and puts them on again. Three times.

@will:angry Will says something unfair: "You could've [i]said[/i]. You could've said any time. You let us think you were just weird." And then, a minute later, not looking at me, something kind: "You're still weird. It's fine. I'm weird. Dad's [i]extremely[/i] weird." He pushes his maths book across the table at me. "Question six. I can't do question six."

Nobody leaves the table. That's the thing. Nobody gets up and goes. We sit there until eleven, with question six and the accounts and the tea going cold, and the knack gives me the kitchen like it's always been: Martin's kettle-warmth, Will's bright wire. Nothing's gone cold. If anything, it's warmer.
*if out_family
  @martin:warm At the end, Martin puts his hand on the back of my neck, the way he did when I was sixteen and new. "I'm glad you told us," he says. "I'd have been glad whenever. I'm glad it was now."
Later, he knocks on my bedroom door with a mug of tea, and stands in the doorway in his cardigan, and says he'd like to help. With whatever it is. If there's anything a printer can do.

@martin:attentive "I'm very good at forms," he says. "And I can print anything. Badges. Maps. Signs. Official-looking letters." He looks at the board on my wall, the red lines, and doesn't ask. "Whatever you need. I'm in."

*comment ---------------------------------------------------------------- CH17.END.01
*label end
*sid CH17.END.01
*date 2027-01-31 18:00
*place P02
*mood dusk
The last day of January.
*if ch17_ask = "family"
  I asked my family. I was answered at a kitchen table, over question six.
*elseif friends_ch17
  I asked. I was answered, and I answered back, and what we are is what we said: a friendship, the real kind, the kind that turns up.
*elseif ((ch17_ask = "adrian") and (st_adrian >= 6)) or ((ch17_ask = "micah") and (st_micah >= 6)) or ((ch17_ask = "ellis") and (st_ellis >= 6)) or ((ch17_ask = "dominic") and (st_dominic >= 6)) or ((ch17_ask = "nolan") and (st_nolan >= 6)) or ((ch17_ask = "ansel") and (st_ansel >= 6)) or ((ch17_ask = "quentin") and (st_quentin >= 6)) or ((ch17_ask = "reuben") and (st_reuben >= 6))
  I asked. And I was answered, and what I asked for turned into something else, something I didn't know I was allowed to ask for.
*else
  I asked. And I was answered. Whatever it is between us, we both know now, and that's enough for this winter.
Whatever I asked, whatever I was answered, the coalition is waiting. We need a method we can defend, by March. The shared bridge, if it can be built. The materials. The volunteers. A table to sit at, and people to sit round it.

And the patients are getting colder. Quentin, Silas, Felix. Every day a little greyer. Every day the ropes a little thinner.

February tomorrow. Six weeks.

*journal [b]Chapter 17.[/b] The deepest cold of the year. I've started to think about a shared bridge: not one donor per patient, but several willing people each carrying a little. {@ch17_ask = "family"|I asked Martin and Will for six weeks of trust, and told them something true; Martin wants to help.|}{@ch17_ask = "adrian"|I asked Adrian for something that mattered, and he said yes.|}{@ch17_ask = "micah"|I asked Micah for something that mattered, and he said yes.|}{@ch17_ask = "ellis"|I asked Ellis for something that mattered, and he said yes.|}{@ch17_ask = "dominic"|I asked Dominic for something that mattered, and he said yes.|}{@ch17_ask = "nolan"|I asked Nolan for something that mattered, and he said yes.|}{@ch17_ask = "ansel"|I asked Ansel for something that mattered, and he said yes.|}{@ch17_ask = "quentin"|I asked Quentin for something that mattered, and he said yes.|}{@ch17_ask = "reuben"|I asked Reuben for something that mattered, and he said yes.|} The patients are getting colder. Six weeks.
*page_break
*goto_scene ch18
`);
