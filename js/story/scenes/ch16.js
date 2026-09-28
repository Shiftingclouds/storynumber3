NB.scene("ch16", String.raw`
*mood winter
*set ch 16
*chapter 16 The Third Return
*comment ---------------------------------------------------------------- CH16.HOME.01
*sid CH16.HOME.01
*date 2027-01-04 09:00
*place P02 print_shop
*present martin will
*set strain 0
Monday. The shop in January.

It's dead quiet. It always is, the first week of the year: nobody wants anything printed, the Christmas money's already gone to the bank, and the press sits under its dust sheet like a horse in a stable. Martin's at the counter with a mug of tea and the accounts book open.

He's decided something while I was away. I can tell from the way he's sitting.
*if savings_given
  @martin:warm "I'm selling the old press," he says, before I've got my coat off. "The second one. The one in the back that nobody's used since your grandad." He turns the accounts book round to show me. "A man from Wexmoor wants it for a museum. A [i]museum[/i]. It'll pay you back, all of it, with interest, and it'll keep the shop, and there'll be enough left over..." He clears his throat. "Enough left over to pay you properly. A real wage. On the books. If you'll stay."
*elseif shop_hours
  @martin:warm "I've taken on a part-timer," he says, before I've got my coat off. "Mrs Okonedo, from the chapel. She used to be a typesetter, forty years ago; she knows more than I do. Three mornings a week." He looks at me over his glasses. "So you can have your mornings back. You've been doing too much. Don't argue. I've seen your face."
*else
  @martin:neutral "Shorter hours," he says, before I've got my coat off. "Closed Mondays and Wednesdays, till spring. The Crescent money's carried us, but there's no sense heating a shop nobody comes into." He turns the page of the accounts book. "It'll be fine. It'll be fine if we're careful. We're good at careful."
@will:amused Will's on the sofa in the back room with the laptop, watching his own game footage for the fourth time that morning, pausing it every ten seconds and writing things down in a notebook. His programme trial's in April. He's got a chart on the wall. The chart has colours.

And there's a text on my phone. From Ellis, sent last night at three o'clock in the morning. Ellis, who doesn't text, who sends postcards or turns up.

[i]Felix isn't right. Can you come?[/i]
*if warned_felix
  And under it, twenty minutes later, from a number saved as [i]EXITS[/i]:

  [i]you said who do I call. I'm calling[/i]

*choice
  #Tell Martin where I really was. Not all of it. More than before.
    *set fr_martin +1
    Before I go, I sit down on the stool at the counter, and I tell Martin where I really was.

    Not all of it. Not the donors, or the warehouse, or the man with the calm voice. But more than before. {@gift_martin|He knows what I am now. So I tell him what I did with it: another country, through a door in the Iron Footbridge, with a friend looking for someone who's missing. That we found him. That he's alive. That we couldn't bring him home yet.|That there's another country, through a door in the Iron Footbridge. That I went there, with a friend, to look for someone who's missing. That we found him. That he's alive. That we couldn't bring him home yet.}

    @martin:attentive Martin listens with his glasses pushed up into his hair. He doesn't interrupt. When I've finished, he's quiet for a long time.

    @martin:tired "Another country," he says eventually. "Through the footbridge." He takes his glasses down and polishes them on his jumper, very slowly. "Your grandad used to say there was something funny about that bridge. We all laughed at him." He puts them back on. "Thank you for telling me. I know you didn't tell me everything. I know that's not because you don't trust me." He looks at me. "Be careful. That's all. I've only got the one of you."
  #Go. Ellis never asks.
    *set st_ellis +1
    I go. Ellis never asks. I've got my coat back on before I've finished reading it.

    @martin:attentive "Where are you off to?" says Martin.

    "A friend. He's not well."

    @martin:neutral He looks at me over the accounts book, and doesn't ask anything else, and says, "Take a hat."
*comment ---------------------------------------------------------------- CH16.FELIX.01
*sid CH16.FELIX.01
*date 2027-01-04 14:00
*place P21
*present felix ellis
*set felix_returned true
*set fr_felix +1
*variant felix returned
Felix's room at Bellweather Court is on the second floor, at the end of the corridor with the six fridges. The door's ajar.

The knack hits me in the doorway.

I know this. I've felt it three times now. The doubled pulse, two heartbeats where there should be one, tangled and wrong. And running out of the middle of his chest, raw and fresh, like a wound that hasn't closed, a rope. Taut. Humming. Running out through the wall, towards the river, and away, north-east, over the city, to somewhere I've been.

To a bed in a warehouse in Stillwater. To a big man in a flat cap with clay under his fingernails, who was brought in by boat at dawn on the second of January, and whose slack thread I watched waiting for someone.

It was waiting for Felix.

The room's dark. The blackout blinds are down, and taped at the edges with gaffer tape. There's a laptop open on the desk, the only light, with a paused video on it: night, a chain-link fence, a dark building. And Felix, on the bed, under two duvets and a coat, with his bleached hair flat and dark at the roots, grey under the pale, shivering.

@ellis:tired Ellis is sitting on the floor beside the bed, in yesterday's clothes, holding Felix's hand. He looks up at me. He's not performing anything. He hasn't got anything left to perform with.

@felix:small "Hi," says Felix. His voice is quiet, slow, like a record at the wrong speed. "Exits." He tries to smile. "I did a stupid thing."

@felix:small He tells me. In pieces, the way you'd tell a dream. He went to Pump Nine. Again. On the second, at night, with Milo's camera, because he'd seen the light on inside again and he had to know. {@warned_felix|"You told me not to," he says. "I know. I know you did."|} He filmed the fence, and the building, and a van. And then a car pulled up behind him on the towpath, and a man got out. A kind voice. A nice coat. Asked if he was all right, out here, in the cold. Offered him a lift.

@felix:scared "And then I woke up in my bed," he says. "Yesterday. Cold. So cold. With all my clothes on. And a text on my phone from a number I don't know." He holds his phone out to me. [i]You had a turn. You're very lucky. Please keep this to yourself, for your own safety. Someone will be in touch about your follow-up.[/i]

@ellis:sad "He rang me at two this morning," says Ellis. "He couldn't get warm. He said his heart was doing something wrong. He said..." He stops. "He said he thought he'd died."

@felix:small "I did," says Felix, very quietly, to the ceiling. "Didn't I."

*choice
  #Ask to see the footage. Tell him why. Let him say no.
    *set e11 true
    *set e11_src "felix"
    *set pump_film true
    *set felix_shared true
    "The footage," I say. "From Pump Nine. Could I see it?" And then, because he deserves to know: "The man who did this to you has done it before. Twice. Two men I know. Whatever's on that camera might help us stop him." I sit down on the end of the bed. "You can say no. It's yours."

    @felix:attentive Felix looks at me for a long time. Then he turns the laptop round.

    It's forty minutes of night. The fence. The padlock. The building, a Victorian pumping station on the river, brick, with tall arched windows and a chimney, and in one of the arched windows, a light. A van reversing up to a side door. Two men unloading something long, in a crate, the way they unloaded Clive at Stillwater. And a third man, standing by the door, in a good coat, turning to look at the camera. Not at the camera. At the car headlights behind it.

    You can't see his face. It's too dark, too far. But you can see the coat.

    @felix:small "Take it," Felix says. "Copy it. All of it." He closes his eyes. "I want him to have filmed the wrong person."
  #Don't ask. Milo lent him the camera; Milo keeps backups.
    *set e11 true
    *set e11_src "milo"
    *set pump_film true
    *set fr_milo +1
    I don't ask him for the footage. He's shivering under two duvets; he doesn't need anyone wanting anything from him. But he said it was Milo's camera. And Milo backs up everything.
    *present felix ellis milo
    *meet milo
    *if fr_milo >= 2
      @milo:tense So I ring Milo from the corridor. He answers from the Regent, from the projection box, and when I tell him what I need and why, he goes very quiet, and then he says, "It syncs. Every night. I'll send it all. Give me an hour." And then: "Is Felix okay?"
    *else
      @milo:tense So I get Milo's number from Felix's phone, and ring him from the corridor: a quick, bright voice, a stranger's, who listens to me explain who I am and why I'm ringing about his camera, and then goes very quiet. "It syncs," he says. "Every night. I'll send it all. Give me an hour." And then: "Is Felix okay?"

    I don't know how to answer that. I say he's alive.

    The footage comes through an hour later. Forty minutes of night: the fence, the padlock, a Victorian pumping station on the river, a light in an arched window, a van, a crate. And a man in a good coat by the side door, turning to look at the headlights behind the camera. You can't see his face. You can see the coat.
  #Tell Felix about Quentin and Silas. He isn't alone.
    *set fr_felix +1
    *set felix_told true
    I sit down on the floor next to Ellis, where Felix can see me without lifting his head.

    "You're not the only one," I say. "There are two others. It happened to them too. One in August, one in October. A barista and a baker." I don't say their names; they're not mine to say. "They're cold all the time. They forget things. They're frightened. And they're alive, and they're themselves, and they get up every day and make coffee and fold croissants." I look at him. "You're not going mad. And you're not on your own."

    @felix:surprised Felix turns his head on the pillow and looks at me for a long time.

    @felix:small "There's others," he says.

    "Two. You'll meet them. If you want."

    @felix:warm And something in him, the frightened bright bird-on-a-feeder thing, stops flapping. Just for a moment. He closes his eyes. "Okay," he says. "Okay. I'd like that." And Ellis, on the floor, holding his hand, looks at me over the edge of the bed with an expression I've never seen on his face before.
*page_break
*comment ---------------------------------------------------------------- CH16.FELIX.02
*sid CH16.FELIX.02
*date 2027-01-04 22:00
*place P20 okafor_restoration
*present felix ellis chukwudi
*mood night
That night, Ellis brings Felix to Okafor Restoration, because Chukwudi says the workroom is the safest place in the city for a man with a binding in him, and because Ellis won't let Felix out of his sight.

And at ten o'clock, the link flares.

I feel it before anyone sees it. The rope in Felix's chest, the raw fresh one, suddenly pulls, hard, as if something at the far end of it, in a bed in Stillwater, has jerked. Felix goes grey in the chair. Then white. He gasps, a horrible dragging gasp, like a man surfacing from deep water, and his hands clamp on the arms of the chair, and his eyes go wide and blind.

@ellis:scared Ellis is on his knees in front of him in a second. "It's straining," he says. "The link. It's new, it hasn't settled, it's pulling. I can steady it." He's got a token in his hand, a brass disc, from Chukwudi's bench. "I need my hands on this, and my back to the room, and I need him still."

@felix:scared But Felix isn't still. He's frightened out of his mind. He's fighting it, fighting Ellis, fighting the chair, gasping, trying to get up, trying to get away from the thing pulling at his chest, and every time he fights it the rope pulls harder.

*choice
  *if (st_ellis >= 3) and not(b_ellis_danger)
    #Hold Felix. Talk. Keep him still while Ellis works.
      *set b_ellis_danger true
      *set st_ellis 4
      I hold Felix.

      I get behind the chair and put my arms round him, round his chest and his arms, and hold on, and talk. In my own voice, in his ear. Nothing clever. His name. That he's here. That he's in a workroom on Paternoster Row that smells of glue and linseed. That Ellis is here. That it's going to stop. That he doesn't have to fight it; he just has to breathe.

      He fights me. He's stronger than he looks. Then he doesn't. His breathing comes in ragged, and then less ragged, and then, slowly, in time with mine.

      @ellis:tense And Ellis, with his back to us, on his knees, with the brass token between his palms and his head bowed, works. I feel it: the ropes and nerves in him pulled tight as wires, and something coming off him like a low hum, and the rope in Felix's chest, the one that was jerking like a hooked fish, slowly, slowly, going still.

      @ellis:tired Four minutes. When he turns round, his face is grey and wet. "It's settled," he says. "For now." He looks at me, holding Felix, in the chair. "You held him," he says. "While I didn't know if I could."

      "You could."

      @ellis:small "I didn't know," says Ellis, very quietly. "I never know anymore."
  *selectable_if (knack >= 25) #Watch the rope and tell Ellis when it slackens.
    *set knack +3
    *set st_ellis +1
    "Ellis," I say. "I can see it. The rope. Tell me when you're ready and I'll tell you when it slackens. It's pulling in waves. Like breathing."

    @ellis:attentive He looks at me for half a second, and nods, and turns his back, and puts his hands on the token.

    So I watch it. The rope in Felix's chest, running out through the wall, jerking and slackening, jerking and slackening, like a line with something fighting on the end of it. And every time it slackens, I say "Now," and Ellis pushes, and every time it jerks, I say "Hold," and Ellis holds. Now. Hold. Now. Hold. Like calling cues on a lighting desk. Like running a show.

    @ellis:tired It takes six minutes. At the end of it the rope's gone still, humming, steady, and Felix is slumped in the chair breathing, and Ellis sits back on his heels and stares at me. "You were calling it," he says. "Like a stage manager." He laughs, shakily. "Nobody's ever called cues for me."
  #Get Chukwudi. He's done this before.
    *set fr_chukwudi +1
    "Chukwudi!" I shout. "[i]Chukwudi![/i]"

    @chukwudi:tense He's there in seconds, in his dressing gown, with his glass on its chain, and he takes it in with one look: Felix, Ellis, the token, the rope I can feel and he can't. "Ellis," he says, very calm. "Hands on the token. I've got him."

    And he takes Felix's face in his big gentle hands and talks to him, low, steady, in a voice like a deep bell, until Felix stops fighting, while Ellis works. It's like watching two people who've done this together for years, which they have. Four minutes. The rope goes still.

    @chukwudi:neutral Afterwards, Chukwudi writes it in the error book. All of it. And then, drying his hands, he says, without turning round: "That's the third one. Three men, held up from outside, by the same method, in five months." He hangs up the cloth. "We have to find a way to end this that doesn't kill anyone. We don't have one yet."
*page_break
*comment ---------------------------------------------------------------- CH16.PATIENTS.01
*sid CH16.PATIENTS.01
*date 2027-01-06 19:00
*place P20 okafor_restoration
*present quentin silas felix chukwudi ilyas
*set e14_c true
*set patients_matched true
*set know_donors 3
Wednesday evening. Okafor Restoration, the big workroom, all the lamps on.

Three men who died and came back, in one room, for the first time.
*if felix_told
  Quentin, and Silas, and Felix. Felix asked to meet them. He's sitting between them now, very straight, in a borrowed jumper of Ellis's, looking from one to the other as if they might disappear.
*else
  Quentin, and Silas, and Felix. I told Felix about them on Tuesday, in the end, because Chukwudi said they needed to be in the same room, and Felix went very quiet and then asked when.
Quentin in his work hoodie, grey under the brown, with his cold hands round a mug. Silas in his baker's whites, straight from the ovens, with flour still on his wrists. Felix, with his bleached hair and his fingerless gloves, shivering in a room that's warm. Three men pretending to be fine.
*meet ilyas
*if fr_ilyas >= 1
  @ilyas:attentive Ilyas has come, with a bag of equipment and his pen. "Numbers," he says, when I thank him. "I want numbers. All three at once. Nobody's ever had that."
*else
  @ilyas:attentive And a thin, intense man in a white coat with a neat black beard and a pen he clicks while he thinks: Ilyas Qureshi, from the lab at the General, who Reuben says is the best in the building. "Numbers," he says, when I thank him for coming. "I want numbers. All three at once. Nobody's ever had that."

@chukwudi:attentive Chukwudi tests the material anchors, the tokens: Quentin's tin charm from his keys, Silas's (a little brass disc that was in the envelope with his trial letters), Felix's (a button, sewn into the lining of his coat, that he never noticed). The same work. The same hand. Ilyas takes his numbers: three heart rates of forty, three temperatures that aren't real numbers, three bodies being supplied from outside.

And I trace the ropes.

All three, at once, out of three chests, taut and humming, running out through the workroom wall, north-east, over the city, into the Marches, down the river, to Stillwater. To three beds in a row in a warehouse.

"Quentin's runs to Eamon," I say. "The courier. The first bed. Silas's runs to Hugo. The mechanic from the depot. Felix's runs to Clive." I have to stop for a second. "The potter. They brought him in by boat on the second. The day before you woke up."

It's very quiet in the workroom.

The donors are alive. I say that too. They're alive. Every one of them is lying in a bed in a warehouse with a drip in his arm, and every day Quentin gets up and makes coffee, and Silas folds a croissant, and Felix breathes, is a day taken out of the man on the other end of the rope.

@quentin:angry And Quentin is the first to say it out loud.

@quentin:angry He puts his mug down, very carefully, on the bench. "So I'm killing him," he says. "Eamon. Every day I'm alive, I'm taking it out of him. Every coffee. Every time I get up in the morning." His voice is shaking. He's furious. "I didn't ask for this. Nobody asked me. And I'm walking around on someone else's life like it's a free bus pass." He looks round the room. "And nobody's going to tell me that's fine. Because it isn't."

Silas has gone white. Felix has his hands over his mouth.

He's right. He's angry, and he's right, and nobody in the room can tell him he isn't.

*choice
  *if (st_quentin >= 3) and not(b_quentin_acts)
    #Let Quentin run the room. He's earned it.
      *set b_quentin_acts true
      *set st_quentin 4
      I don't say anything. I look at Quentin, and I sit back against the bench, and I let him run the room.

      @quentin:attentive He does. He's good at it. Better than me. He's furious, and he uses it. He asks Ilyas how long the donors can last like this; Ilyas tells him, honestly: months, not years, and less every week. He asks Chukwudi whether the links can be cut; Chukwudi tells him: not without killing whoever's on this end. He asks Silas and Felix what they want, straight out, and waits, and lets them not know.

      @quentin:angry "Then we find a third way," he says. "One where nobody dies. Them or us." He looks at me. "You're the one who can see it. So you find it. And the rest of us help." He picks his mug back up. "I'm not being a case any more. I'm being a person who's part of this."

      And the steady thing under his jokes, the floor, is the steadiest I've ever felt it.
  #Ask each of them what they want. Separately. No audience.
    *set people +2
    *set patients_asked true
    Afterwards, I ask them. Each of them. On his own, in the corridor, or on the stairs, or in the yard by the bins. What do you want?

    @quentin:angry Quentin says, "I want to not be killing someone. And I want to live. And I don't know how to have both, and I'm so angry I can't see straight."

    @silas:small Silas says, "I want to go back to work and not think about it." And then, after a long time: "I want to meet him. Hugo. I want to say sorry to his face."

    @felix:small Felix says, "I want to film it. Whatever happens. I want there to be a record. So nobody can say it didn't happen." And then he laughs, shakily. "And I want to be warm. Just once. Just for an afternoon."

    I write it all down. Three men, three answers. None of them the same. All of them true.
*comment ---------------------------------------------------------------- CH16.IDENT.01
*sid CH16.IDENT.01
*date 2027-01-07 11:00
*place P30 rusk_funeral
*present simeon reuben
*mood day
*set e04 true
*set e04_src "rusk"
*set know_damian true
Who is the man in the good coat?

We've got a voice, and a coat, and a van. And the van had a lily painted on it.

I saw it in the lane, on the night Quentin fell: white, reversing, lights off, and on its side, painted, a lily. And last week, walking home from the bus through Old Ward, I passed a sign I've walked past a hundred times without seeing: black and gold, a funeral director's, on Chapel Street. [i]Rusk Funeral Rooms. Est. 1911.[/i] With a lily.

@reuben:neutral Reuben comes with me. He knows the Rusks; Mercy House has used them for years, he says, for "certain arrangements", which he doesn't explain.
*meet simeon
@simeon:neutral Simeon Rusk is gentle with the bereaved and harsh with anyone who treats their grief as an inconvenience. I know this within about a minute. He's a round-faced, balding man in an immaculate black suit, with a funeral director's quiet hands, and he greets Reuben like an old colleague and me like a mourner, and then listens to what we want with his face going very still.

@simeon:guarded "The van," he says. "Yes. We have three. The lily's on all of them. My grandfather painted the first one." He folds his hands. "Mercy House has an arrangement with us. An old one. For bodies that need to be handled... discreetly. We collect. We record. We don't ask." He looks at Reuben. "It's not supposed to be used without an authorisation code."

He brings out the ledger.

A big black book, leather, like Chukwudi's error book. Every collection, in fifty years, in careful copperplate. He turns to the thirtieth of August.

There's an entry. Half past midnight. A collection from a lane off Arden Street. [i]Adult male. Transfer under Mercy House arrangement.[/i] And then the destination's been changed: the original line scratched out so carefully you'd only see it with a lamp, and a new one written over it, in a slightly different ink. [i]Private clinic.[/i] And at the end of the line, an authorisation code. Six characters.

@reuben:attentive Reuben reads the code.

@reuben:hurt And then he sits down. On a coffin trolley. Just sits, as if his legs have gone, with the ledger still open in front of him and his big hands flat on his knees.

@reuben:hurt "That's Damian's," he says.
*if ch10_way = "orchard"
  Damian Holt. The man who took a nineteen-year-old seriously. Who gave Reuben his first medic's bag with his initials on it. Who left two years ago and stopped answering. Reuben said his name on the reservoir path with love.
*else
  D. Holt. The junior ritual physician on the closed program's staff list. And, it turns out, as Reuben tells me in a flat voice on the coffin trolley, the instructor who taught him emergency methods at Mercy House, who took a nineteen-year-old seriously when nobody else did, who gave him his first medic's bag with his initials on it, and who left two years ago and stopped answering.
@reuben:hurt "Every code's personal," Reuben says. "You get it when you qualify. Nobody else knows it. He must have kept using it. After he left." He looks at the ledger. "Damian collected Quentin. From the lane. In a Rusk van. Under our arrangement." His voice cracks. "Damian did this."

*choice
  *if st_reuben >= 3
    #Stay with Reuben. Let him say whatever he needs to about the man who taught him.
      *set b_reuben_damian true
      *set st_reuben 4
      I don't say anything clever. I sit down on the coffin trolley next to Reuben, which creaks, and I stay.

      @reuben:sad He talks. Not about the code, or the ledger, or the lane. About Damian. About the first time Damian let him run a drill and he got it wrong and Damian said [i]good, now you'll never get it wrong again[/i]. About Damian's terrible jokes. About the letters Reuben wrote him, three of them, that never got answers. About sitting by the phone. "I thought I'd done something," he says. "I thought it was me. I spent two years thinking it was me."

      @reuben:hurt "And he was doing this," says Reuben. "The whole time. Collecting people from lanes." He puts his face in his hands.

      I put my hand on his back, between his shoulders, and leave it there. The radiator-warmth of him, the steady heat you don't notice until you step away from it, is almost out. I stay until it comes back, a little, enough. Simeon Rusk, very quietly, brings us two cups of tea on a tray, and goes away again.
  #Press Simeon: who else has used the arrangement, and when?
    *set e04_c true
    *set simeon_pressed true
    "Who else?" I say to Simeon. "Has this code been used before? Since he left? When?"

    @simeon:angry Simeon Rusk's gentle face goes hard. Not at me. At the ledger. At someone treating his books as an inconvenience. He goes through it himself, page by page, with a lamp, for an hour, while Reuben sits on the trolley and doesn't move.

    @simeon:tense Three times. The same code, the same scratched-out destination, the same slightly different ink. The thirtieth of August. The thirteenth of October, a collection from an address the ledger doesn't give: only a map reference, somewhere out past the ridge road. And the second of January, a collection from a towpath by the river, late at night. [i]Private clinic.[/i]

    Quentin. Silas. Felix.

    @simeon:angry "Someone's been using my family's name," says Simeon Rusk, very quietly, "to carry the dead to somewhere that isn't a grave." He closes the ledger. "I'll give you copies. All of it. Signed." He looks at me. "And I'll be changing the locks on my garage tonight."
  *if course_lead
    #Check it a second way: the Southmere first-aid course that gave Quentin his token. Who taught it?
      *set e04_c true
      *set course_confirms true
      "The course," I say. "Quentin's first-aid course, in August, at the Southmere rec centre. The one where they gave everyone a token. Who taught it?"

      @reuben:tense Reuben looks up at me from the trolley.

      We go straight there, on the bus, and the woman on the rec centre desk, who's known Reuben since he was a cadet, finds the August register in a filing cabinet in the back. Evening first aid, Tuesdays. Twelve names. Quentin's among them, in his own handwriting. And at the top, in the box marked [i]Instructor[/i], in a neat, pleasant, confident hand:

      [i]Dr D. Holt.[/i]

      @reuben:hurt Reuben looks at it for a long time. "The same man," he says. "He taught the course. He gave Quentin the token. He chose him." He puts the register down very gently, as if it might break. "He chose them."
*comment ---------------------------------------------------------------- CH16.WEEK.01
*sid CH16.WEEK.01
*date 2027-01-07 18:00
*place P02
*mood night
Thursday night. My room above the shop.

We know who. Damian Holt. We know where: a warehouse at Stillwater, and whatever's at Pump Nine. We know what: three patients, three donors, three ropes.

And we don't know how. How to get three men out of a warehouse in another country without killing the three men on the other end of the ropes. We can't cut the links. We can't leave them. Every day we wait costs the donors something they can't get back.

I can't think straight. I've been sitting on the floor under the board for an hour and the lines won't hold still.

There's one person I want to spend the rest of this week with.

*choice
  *if st_adrian >= 3
    #Adrian.
      *set wk16 "adrian"
      *goto mercy
  *if st_micah >= 3
    #Micah.
      *set wk16 "micah"
      *goto eastbank
  *if st_dominic >= 3
    #Dominic.
      *set wk16 "dominic"
      *goto regent
  *if st_nolan >= 3
    #Nolan.
      *set wk16 "nolan"
      *goto steps
  *if st_quentin >= 3
    #Quentin.
      *set wk16 "quentin"
      *goto market
  *if st_ellis >= 3
    #Ellis.
      *set wk16 "ellis"
      *goto observatory
  *if st_reuben >= 3
    #Reuben.
      *set wk16 "reuben"
      *goto infirmary
  #Martin and Will. Home.
    *set wk16 "home"
    *goto family

*comment ================================================================ Adrian
*comment ---------------------------------------------------------------- CH16.MERCY.01
*label mercy
*sid CH16.MERCY.01
*date 2027-01-08 20:00
*place P01 mercy_house
*present adrian
Mercy House's workshop, in the basement, at eight on a Friday night: benches, tools on pegboards, a smell of oil and solder, Kenji's radio playing something classical very quietly.

@adrian:neutral Adrian's at a bench under a lamp, mending the elastic on his jacket cuffs. The same jacket. Everyone at Mercy House has told him to throw it away. He's re-elasticated the cuffs by hand, with a needle and a spool of black elastic, four times. He's doing it a fifth.

"You could get a new one," I say.

@adrian:amused "It's a perfectly good jacket," says Adrian, without looking up. "The cuffs are the only thing wrong with it. You don't throw away a whole thing because one part's gone." He bites off a thread. "It's wasteful."

The promotion review is next month. I know because he's told me, three times, in the voice of someone telling you about a dentist appointment. And the training report he wrote for Emmett is in the file.

*choice
  *if not(b_adrian_report)
    #Ask him about the report. Let him tell it.
      *set b_adrian_report true
      *set st_adrian 4
      *set s07 "fore"
      "The review," I say. "Is there something in the file you're worried about?"

      @adrian:guarded He stops sewing.

      @adrian:tense And then he tells me. Emmett Hsu, a trainee, last spring: two weeks missed, a sick mother, every shift at the museum to pay for her care, too proud to say. And Adrian, his training lead, writing the report: [i]on assignment with me[/i]. A lie. In his handwriting. In the file. "It kept him on the programme," he says. "It was the right thing to do for Emmett. It was the wrong thing to do." He puts the needle down. "And now it's going to be read by a panel deciding whether I'm fit to be trusted. And they'll be right to wonder."

      "What are you going to do?"

      @adrian:small "I don't know," says Adrian Keene, who always knows. "I've never not known before." And he looks at me across the workbench, in the lamplight, as if I might.
  #Help with the jacket. Talk about anything but work.
    *set people +1
    I pull a stool over and hold the jacket while he sews, and we don't talk about work.

    We talk about the elastic, which he buys from a shop on Market Crescent that's been there since 1952. We talk about Kenji's radio, which only gets one station. We talk about his brother Victor, who once tried to teach him to dance and broke a toe, Victor's own, and blamed Adrian. He laughs, telling it. Adrian laughing is a strange sight; it takes over his whole face and he looks about twelve.

    @adrian:warm "Thank you," he says, when the cuffs are done. "For not talking about work." He puts the jacket on and pulls the cuffs down. They're perfect. "Nobody does that."
*comment ---------------------------------------------------------------- CH16.MERCY.02
*sid CH16.MERCY.02
*date 2027-01-08 23:30
*place P01 mercy_house
*present adrian
The roof at half eleven, cold enough to hurt. The city below, the bridges lit, the river black between them.

@adrian:tense Adrian's standing at the parapet with his hands in his re-elasticated cuffs. He's been quiet since we came up. Then he says it, in complete, practical sentences, the way he'd give evidence.

@adrian:tense "I keep coming to find you," he says. "When there's no reason. The Regent. The diner. Tonight. I get in the car, or I walk up the stairs, and I haven't decided to, and there's no procedure, and I'm there." He looks at the city. "And when you disagree with me, it stays with me. For days. I go over it. I've never cared what anyone thought of a decision once I'd made it. I care what you think." He stops. "I don't know what to do about either of those things."

And then he waits.

He's learning to wait. I can feel how hard it is for him: the engine at idle, running hot, and his hands in his pockets, not moving, not planning, not deciding for me.

*choice
  *if b_adrian_offduty and b_adrian_report and (hurt_adrian < 2)
    #"I know what to do about it." Tell him what I want.
      *set b_adrian_want true
      *set st_adrian 5
      *set out_adrian true
      *achieve told_truth
      "I know what to do about it," I say.

      @adrian:surprised He turns and looks at me.
      *if out_micah or out_dominic or out_ansel
        And I tell him. I've said it out loud before, this winter. It doesn't get easier. It gets truer.
      *else
        And I tell him. The thing I've never said out loud to anyone. Not Mum. Not Nolan. Not the internet.
      "I'm gay," I say. "And I keep wanting to be where you are too. And when you disagree with me it stays with me for days. That's what that is. For me, anyway. I know what it is. I've known for a while."

      @adrian:small He's very still. The knack can't tell me what he feels about me; it never can. But the engine at idle, the heat under the order, all of it goes quiet at once, like a car engine switched off, and in the quiet, for the first time since I've known him, nothing's running at all.

      @adrian:small "I've never..." he says. "I haven't got a..." He stops. Starts again. "I've never let myself think about it. What I want. It wasn't on the list." He looks at his hands. "You're on the list. You've been on the list since {@ch04_first = "mercy"|the lane|the Regent}. I just didn't know what list it was."

      "Now you do."

      @adrian:warm "Now I do," says Adrian Keene. And then, very carefully, the way he does everything, as though it's a procedure he's reading off a card for the first time: he takes one hand out of his pocket and holds it out, palm up, on the cold parapet, and waits. He's learning to wait.

      I put mine in it.
  #"You're my friend. That's what that is." Close the door gently.
    *set closed_adrian true
    "You're my friend," I say. Gently. "That's what that is. You're my friend, and you care what your friends think. That's all."

    @adrian:neutral He's quiet for a long moment. And then he nods, once, the way he nods at a finding. "Right," he says. "Yes. That makes sense." He looks at the city. "That's a relief, actually. That it's something with a name."

    @adrian:neutral It isn't a relief. I can feel that it isn't. But he takes it, the way he takes everything, and puts it where it goes, very neatly, and doesn't argue. And later, going down the stairs, he says, "Thank you for being clear," and means it, and I think he'll be all right, and I think it'll take him a while.
  #"Ask me again when this is over."
    *set adrian_later true
    "Ask me again," I say. "When this is over. When there's nobody in a warehouse and nobody on the other end of a rope. Ask me then."

    @adrian:attentive He looks at me for a long time. Then he takes a notebook out of his jacket, and a pencil, and writes something in it, and shows me. [i]Ask again. After.[/i] Underlined twice.

    @adrian:warm "I'll hold you to that," he says. "It's written down now."
*goto end

*comment ================================================================ Micah
*comment ---------------------------------------------------------------- CH16.EASTBANK.01
*label eastbank
*sid CH16.EASTBANK.01
*date 2027-01-08 19:00
*place P07 serrano_yard
*present micah ernesto leandro
Serrano Yard on a Friday night in January: vans in the frost, the workshop lit, the stove going upstairs. The family's at the table: two tables pushed together, one slightly higher than the other.{@fr_ernesto >= 1|| Ernesto Serrano at the head, Micah in thirty years, with a thick moustache and builder's hands; Leandro opposite, Micah's build gone lean, with a boxer's flattened nose.} I'm at the table.
*meet ernesto
*meet leandro
@micah:tired And Micah's agreeing to everything in a flat voice.

His outside apprenticeship starts on Monday. Halvorsen's, across the river: the proper one, the full qualification, the one Ernesto never got round to.{@ch07_evening = "serrano"| The one he told me at the gym he was going to say no to. He didn't say no, in the end. He said yes. And now he has to go.| He took it in December, he tells me, quietly, before dinner. The first thing he's ever said yes to that was just for him.} And Ernesto has booked him onto three family jobs the same week. The Hendry rewire, the chapel lighting, the Castillos' boiler. "You'll manage," Ernesto says, carving. "Evenings. The weekend. Here is what we'll do."

@leandro:guarded Leandro, who said at Christmas that he'd cover, is looking at his plate and has quietly stopped saying it.

@micah:tired "Yeah," says Micah. "Course. Yeah. I'll manage."

He won't. I can feel that he won't. The deep animal tiredness in him, the one I felt the very first night at Switchyard, is so deep now it's like standing next to a well.

*choice
  *if (st_micah >= 3) and not(b_micah_boundary)
    #Take Micah out to the yard and ask him what he'd say if he were allowed to.
      *set b_micah_boundary true
      *set st_micah 4
      *set s04 "fore"
      After dinner I take Micah out to the yard. It's freezing. The stars are out over the vans.

      "If you were allowed to say anything," I say. "Anything at all. To your dad. What would you say?"

      @micah:small He stands there by the van with his breath going up in clouds for a long time.

      @micah:tense "I'd say no," he says at last. "I'd say I can't do the Hendry job and the chapel and the boiler and start the apprenticeship. I'd say Leandro promised. I'd say I'm tired, Dad, I'm so tired, I've been tired since I was thirteen." His voice cracks. "I'd say I want one thing that's mine."

      "Then say it."

      @micah:scared "I can't."

      "You just did. To me. Say it to him."

      He looks at me for a long time. Then he turns round and goes back in, up the stairs, and I hear him, through the window, in the kitchen, saying it. Not all of it. Enough. [i]No, Dad. Not this week. Leandro said he'd cover.[/i] And then a silence. And then Ernesto's voice, rough, surprised: [i]All right. All right, son.[/i]

      @micah:warm When he comes back out he's shaking. He leans on the van next to me. "I said no," he says, as if reporting a car crash. And then he starts laughing, and can't stop.
  #Tell Ernesto the apprenticeship is the job, and the family can find someone else.
    *set fr_ernesto -1
    *set s04 "fore"
    *set nerve +2
    I say it. At the table. To Ernesto.

    "The apprenticeship's the job," I say. "Starting Monday. That's his week. The family can find someone else for the Hendry rewire. Leandro said he'd cover."

    @ernesto:angry The table goes silent. Ernesto puts the carving knife down, very slowly. "Here is what we'll do," he starts.

    "No," I say. "Here's what [i]he'll[/i] do. He'll go to his apprenticeship. It's his."

    @ernesto:angry It costs me. I watch it cost me: Ernesto's face going red and then very still, a father being told about his son by a stranger at his own table.

    @leandro:guarded And then Leandro, not looking up from his plate, says: "I'll do the Hendry job. I said I would. I'll do it."

    @micah:small Micah doesn't say anything at all. But under the table, his knee presses against mine, hard, and stays.
*goto end

*comment ================================================================ Dominic
*comment ---------------------------------------------------------------- CH16.REGENT.01
*label regent
*sid CH16.REGENT.01
*date 2027-01-08 21:00
*place P14 regent
*present dominic gideon quentin
The Regent in January, snow on the marquee, [i]LATE SHOW[/i] in black letters on the white.

In the auditorium, in the red velvet seats, Gideon and Quentin are having the first honest argument of their lives.

@gideon:angry I can hear it from the lobby. Gideon's voice, the one that says things like instructions: [i]You didn't call me for two years.[/i]

@quentin:angry And Quentin's, cracking: [i]You died, Gid. Two years ago. You died and you came back and you didn't tell anyone, and I had to work it out because you'd stopped eating Sunday dinner.[/i]

It goes on. [i]You're the one who turned your back.[/i] [i]No, you did.[/i] It's the first time, Dominic tells me, that they've been in the same room since August without one of them walking out. It's loud and ugly and long overdue. We leave them to it.

@dominic:warm Dominic takes me up to the projection booth, the little room at the back of the circle with the old projector and the window onto the screen, and a kettle, and two chairs.

@dominic:tense He's been asked to sing at Benoît's spring showcase. At the Lantern Rooms, in April. A proper set: six songs, his own, with the ensemble. In front of people who've paid for tickets. He hasn't answered. The letter's in his jumper pocket, folded very small.

@dominic:tense "I don't know," he says. "I don't know if I can. If it's too much. If I'll get up there and it'll all go wrong. If I'll get hungry, in the lights, with all those people." He looks at the letter. "Everyone's got an opinion. Milo says do it. Benoît says do it. Lucien says it's my decision and then looks at me like I've already decided."

He doesn't ask me what I think. He lets me sit with the question with him, instead.

*choice
  *if (st_dominic >= 3) and not(b_dominic_dawn)
    #Stay until nearly dawn. Help him with the shutters when it's time, the way he asks.
      *set b_dominic_dawn true
      *set st_dominic 4
      I stay.

      All night. In the projection booth, with the kettle and the two chairs. We don't solve anything. We talk about the showcase, and about other things: his dad, who's started coming to the Lantern Rooms on Thursdays and sitting at the back; the song he's writing about the last bus; the terrible sailor musical. Downstairs, eventually, Gideon and Quentin stop shouting, and then, much later, I hear them laughing.

      @dominic:attentive At half six, he says, "It's time. The shutters. Will you help?" Not [i]do you mind[/i]. Not apologising. Asking. "The east wing. I'll show you how I like them."

      So I help. The way he asks. He shows me: this one first, then this, pull the strap like this, not like that. And I do exactly what he says, and don't do anything he doesn't, and at five past seven, with the sky going grey behind the last shutter, he stands in the dark corridor and looks at me.

      @dominic:warm "Thank you," he says. "For doing it my way."
  #Tell him he should do the showcase. Decide it for him.
    *set managed_dominic true
    *set s05 "fore"
    "Do it," I say. "You should do it. You're ready. You were ready at Nolan's party."

    @dominic:guarded He looks at me.

    "I'll be there. I'll sort the lights. I'll make sure you're not hungry, I'll talk to Rafi, I'll arrange it all. You just have to sing."

    @dominic:hurt Something goes over his face, fast. "Right," he says. "Yeah. Okay." He puts the letter back in his pocket. "If you think so."

    And the knack gives me the thing I felt from him once before, on the night of the frost: the feeling of a man being put in a box for his own good, by someone who likes him. He says yes to the showcase. He says it because I decided. I don't know if that's the same as him deciding.
*goto end

*comment ================================================================ Nolan
*comment ---------------------------------------------------------------- CH16.HOME.02
*label steps
*sid CH16.HOME.02
*date 2027-01-08 22:00
*place P06 riverside_steps_night
*present nolan
The Riverside Steps at ten at night, frozen at the edges. The river black and fast. The Winter Lights still up along the embankment, a week past Christmas, half of them broken.
*if nolan_applied
  Nolan's deposit for Wexmoor is due in a week. The halls, the first term, all of it. After that, he's going. It's real.
*else
  Nolan's place at Wexmoor is still open. He asked for an extension, in October, and they gave him till the fifteenth of January, and it's the eighth. After that, it's gone.
@nolan:tense And he asks me.

We're sitting on the steps with a bag of chips from the stall under the bridge, not eating them. He doesn't turn anything over in his hands. His hands are still, on his knees, which is how I know. He's holding still for this.

@nolan:small "Is there a reason," he says. "For me to stay." He's looking at the river, not at me. Awkward, and direct, the way he never is. "I need to know. Before I send it. If there's a reason. Because if there is, I'd want to know. And if there isn't..." He stops. "Then I'll go, and it'll be brilliant, and I'll be fine, and you'll visit." He swallows. "But I need to know."

*choice
  *if (b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)
    #"Yes. There's a reason." Say it plainly.
      *set b_nolan_talk true
      *set st_nolan 5
      *set out_nolan true
      *achieve told_truth
      "Yes," I say. "There's a reason."

      @nolan:surprised He turns and looks at me.
      *if out_micah or out_dominic or out_ansel or out_adrian
        I say it out loud. I've said it before, this winter. It's different, saying it to him. It's like saying it to myself.
      *else
        And I tell him. The thing I've known since I was twelve and never said. Not to Mum. Not to anyone. Not to him, who's been sitting next to me on steps like this since we were sixteen.
      "I'm gay," I say. "And it's you. It's been you for a long time. I didn't know what to do with it, so I didn't do anything. That's the reason."

      @nolan:small He doesn't say anything. The river goes past. The knack can't tell me what he's feeling about me; it never has, not once, in all these years, and it doesn't now.

      @nolan:warm And then he laughs. Not at me. A shaky, disbelieving, wet laugh, with his hand over his face. "Oh my God," he says. "Oh my [i]God[/i]. I've been doing this since the [i]balcony[/i]. I've been bumping your shoulder for [i]four years[/i]." He takes his hand away. His face is doing something I've never seen it do. "Me too," he says. "Obviously. Me too. I thought you'd never..." He stops. "I thought I was going to have to go to Wexmoor to get over you."

      "Don't go to Wexmoor to get over me."

      @nolan:warm "No," he says. "No, I won't." And he puts his shoulder against mine, on the frozen step, and this time neither of us pretends it's anything else.
  #"Send it. Go. You'd be brilliant." And mean it as a friend.
    *set closed_nolan true
    *set s02 "fore"
    "Send it," I say. "Go. You'd be brilliant. You'll be the best one there."

    @nolan:small He looks at me for a long time. And I mean it. I mean it as his friend, his best friend, and he can hear that that's what I mean, and he can hear what I don't say.

    @nolan:warm "Okay," he says. Very quietly. "Okay. Yeah." He nods, several times, at the river. "Thanks. For being straight with me." He picks up a chip. It's cold. He eats it anyway. "You'll visit."

    "Every month."

    @nolan:sad "Pinkie," he says, holding it out, and his voice goes, and he pretends it didn't. And we sit on the steps until the chips are gone, the way we always have, and it's all right, and it's the saddest all-right I've ever felt.
  *if (b_nolan_birthday or b_nolan_work) and (hurt_nolan < 2)
    #"Send it anyway. A reason to stay shouldn't have to be a reason not to go."
      *set b_nolan_talk true
      *set st_nolan 5
      *set out_nolan true
      *set s02 "fore"
      *achieve told_truth
      "There's a reason," I say. "And send it anyway."

      @nolan:surprised He stares at me.

      "I'm gay," I say. It comes out steadier than I thought it would. "And it's you. It's been you for a long time. That's the reason. And you should still go. A reason to stay shouldn't have to be a reason not to go. Wexmoor's four hours. They have trains."

      @nolan:small He doesn't say anything for a long time. And then he laughs, shaky and wet, with his hand over his face. "You absolute..." he says. "You told me to send it on my [i]birthday[/i]. You told me they have trains." He takes his hand away. "Me too. Obviously. Me too."

      @nolan:warm "I'll send it," he says. "I'll go in September. And you'll come on the train. Every month. Every [i]fortnight[/i]." He puts his shoulder against mine on the frozen step. "And it'll still be us. Just with a train in the middle."
*goto end

*comment ================================================================ Quentin
*comment ---------------------------------------------------------------- CH16.PATIENTS.02
*label market
*sid CH16.PATIENTS.02
*date 2027-01-08 13:00
*place P32
*present quentin
*mood day
Crescent Market on a cold Friday lunchtime: forty-one stalls under striped awnings, steam from the soup van, the olive woman who helped Martin, a man selling socks shouting about socks.

It's Quentin's idea. He texted at nine: [i]market. 1pm. I want oranges and I want to be rude about the price. come and watch.[/i]

@quentin:amused He's buying oranges. He's being rude about the price. "Two for [i]that[/i]? Two? What are they, royalty?" The stallholder, who's known him since he was six, gives him four and tells him to clear off.

@quentin:warm He says it on the way down the next aisle, with the oranges in a paper bag, not looking at me. That he's sick of being a case. That everyone looks at him like a case now, even Gideon, even his mum. That I'm the only person who looks at him like a person and a case at the same time. "And today," he says, "I'd like just the first thing. If that's all right. Just for an afternoon."

*choice
  *if (st_quentin >= 3) and not(b_quentin_nothing)
    #Be just the first thing. Carry the oranges.
      *set b_quentin_nothing true
      *set st_quentin 4
      I take the oranges off him and carry them.

      And for an afternoon I'm just the first thing. I don't ask how he's sleeping. I don't look at his hands, which are cold, or his chest, where the rope is, humming. I let him be rude about the price of everything in Crescent Market. I let him buy a terrible hat from a stall and wear it. We eat soup from the van standing up, and he burns his mouth and swears, and he can taste it, a bit, he says, which is new, and we don't talk about what that might mean.

      @quentin:warm At the bus stop, in his terrible hat, he says: "Thanks. For today." And then, not looking at me: "You're the only person I don't have to be brave for." And the steady thing under his jokes, the floor, isn't holding anything up today. It's just a floor. Somewhere to stand.
  #Ask how he's sleeping.
    *set hurt_quentin +1
    I can't help it. By the soup van, I ask. "How are you sleeping? Really?"

    @quentin:guarded He goes quiet.

    @quentin:guarded "Fine," he says. "Twelve hours a night and I wake up tired." And he doesn't say anything else for the rest of the market, and buys nothing else, and at the bus stop he says "Thanks for coming," politely, and means it, and also means the other thing, and I know exactly what I've done.
*goto end

*comment ================================================================ Ellis
*comment ---------------------------------------------------------------- CH16.FELIX.03
*label observatory
*sid CH16.FELIX.03
*date 2027-01-08 23:00
*place P24
*present ellis
Observatory Hill at eleven at night, snow on the little dome, the whole city below lit up and cold.

@ellis:tired Ellis hasn't slept since Felix. I can see it. His coat's done up wrong. His coils are coming loose from their scarf. He's been at the workroom every night, watching Felix's binding, checking it, rechecking it, and in the daytime he's been at the university pretending everything's fine, and his placement interview is in two weeks, and he hasn't told his father he's been shortlisted.

For once he doesn't make any of it look easy. He sits on the steps of the dome with his elbows on his knees and his head down, and doesn't perform anything at all.

@ellis:small "I can't do it," he says. "Any of it. The interview. Felix. My father. I keep thinking if I'm careful enough, if I'm good enough, if I'm impressive enough..." He laughs, not really. "I'm so tired of being impressive."

*choice
  *if b_ellis_danger and (hurt_ellis < 2) and not(b_ellis_badday)
    #Stay. Let him be a mess. Don't try to fix it.
      *set b_ellis_badday true
      *set st_ellis 5
      *set out_ellis true
      *achieve told_truth
      I don't fix it. I sit down on the step next to him, in the snow, and I let him be a mess.

      @ellis:hurt And he is. For a long time. Angry about Felix, who went back to Pump Nine when everyone told him not to. Frightened for Felix, who might die if we get this wrong. Angry at his father for being so understanding it's unbearable. Angry at himself for being angry. Uncertain, for the first time in his life, whether he's any good at anything at all. He says all of it. He doesn't make it charming. I don't make it better.

      @ellis:small "You're still here," he says, eventually, with his head on his knees.

      "I'm still here."

      @ellis:small "Why?"
      *if out_micah or out_dominic or out_ansel or out_adrian or out_nolan
        So I tell him. I've said it out loud before this winter. I say it again, on the steps of a dome in the snow, because it's true, and because he asked.
      *else
        So I tell him. The thing I've never said to anyone. On the steps of a dome in the snow, because it's true, and because he asked.
      "Because I'm gay," I say. "And because I like you best like this. Not impressive. Just you, on a bad day, with your coat done up wrong. That's why."

      @ellis:surprised He lifts his head and looks at me.

      @ellis:warm And something happens to his face that I've seen once before, in his family's kitchen, over cereal: the younger, more startled thing, under the real smile and under the performance. "I've noticed men," he says, very quietly. "For years. I put it on a shelf. I said I'd decide later. I said there wasn't time." He looks at the city. "I don't want to decide later."

      He reaches over, slowly, and does up my coat's top button, which was undone. Then he doesn't take his hand away.
  #Help him plan how to tell his father.
    *set s03 "fore"
    "Let's plan it," I say. "Telling your dad. Right now. What you'll say, and when, and where. So it's one thing that's done."

    @ellis:small He looks at me, and then, slowly, he nods. And we plan it, on the steps of the dome, in the snow: Sunday, after lunch, in the workroom, where his father's happiest. What he'll say first. What his father will say, which will be [i]go[/i]. What Ellis will say back, which will be the true thing, that he minds leaving, that he minds terribly.

    @ellis:warm "You made it into a procedure," he says, when we're done. "Like Adrian would." But he's almost smiling. "It helps. It actually helps." He stands up and brushes the snow off. "Sunday. After lunch." He looks at me. "Will you be in the kitchen? Just in case?"

    "I'll be in the kitchen."
*goto end

*comment ================================================================ Reuben
*comment ---------------------------------------------------------------- CH16.REUBEN.01
*label infirmary
*sid CH16.REUBEN.01
*date 2027-01-08 20:00
*place P01 mercy_house
*present reuben
Mercy House's infirmary at eight on Friday night. Empty beds, the lights low, the smell of antiseptic and toast.

@reuben:tired Reuben's arranging the supply cupboard. For the third time today, the nurse on duty tells me on the way in, with a look. He hasn't eaten since the funeral rooms on Thursday. He doesn't want to talk about Damian. He doesn't want to be alone either, and he's never once in his life asked for the second thing.

He's got every box of gauze out on the counter, and he's sorting them by size, and then by date, and then by size again.

*choice
  *if (st_reuben >= 3) and not(b_reuben_needs)
    #Sit on the counter and hand him things until he stops. Then make him eat.
      *set b_reuben_needs true
      *set st_reuben 4
      I don't say anything. I get up on the counter, next to the gauze, and I hand him things.

      Box after box. He puts them on the shelves. He takes them down again. I hand them to him again. We don't talk. It goes on for forty minutes. And somewhere in the forty minutes, his hands slow down, and then they stop, and he stands in front of the open cupboard with a box of plasters in his hand and doesn't put it anywhere.

      @reuben:sad "I loved him," he says. To the cupboard. "Like a dad. Better than my dad. And he..." He stops.

      I get down off the counter. I take the plasters off him and put them on the shelf. And then I take him by the sleeve, very gently, to the kitchen that never closes, and make him eggs, and toast, and tea, and sit across from him at the long steel table until he's eaten all of it.

      @reuben:warm "You didn't ask me to talk," he says, when the plate's empty.

      "No."

      @reuben:warm "Thank you," says Reuben Pike. "I didn't want to." He looks at the plate. "I didn't want to be on my own, either." It's the first time I've ever heard him say he wanted anything.
  #Leave him to it. He likes to be useful.
    I leave him to it. He likes to be useful. It's how he gets through things.

    I say goodnight from the doorway. He says goodnight without turning round. The last thing I see is him taking the gauze down off the shelf, again, to sort it by size.
*goto end

*comment ================================================================ home
*comment ---------------------------------------------------------------- CH16.FAMILY.01
*label family
*sid CH16.FAMILY.01
*date 2027-01-08 19:00
*place P02 print_shop
*present martin will
*set fr_will +1
*set fr_martin +1
Friday tea above the shop. Fish fingers, because it's Friday and Martin has never in his life cooked anything else on a Friday. Peas. Ketchup. The radio.

@will:amused Afterwards, Will sets up the laptop on the kitchen table and makes us watch his game film. All of it. Forty minutes of a youth-league match in the rain, with commentary. "See, there. There. I should've gone left. See how the full-back's leaning? I should've gone [i]left[/i]." He pauses it every ten seconds. He's drawn arrows on a printout. He's so serious and so happy that I don't look at my phone once.

@martin:tired Martin falls asleep in his chair twenty minutes in, with his glasses on his forehead and his mouth open, and snores through the second half.

It's ordinary. That's all. Fish fingers and game film and Martin snoring. And I needed ordinary more than I've needed anything since August.

@will:small "You're all right, you," Will says, at the end, not looking at me, closing the laptop. "For a cousin."

*comment ---------------------------------------------------------------- CH16.END.01
*label end
*sid CH16.END.01
*date 2027-01-09 22:00
*place P02
Saturday night. The board on my wall.

It's not a sheet of proof paper any more. It's half the wall. Three patients: Quentin, Silas, Felix. Three donors: Eamon, Hugo, Clive. Three ropes, drawn in red, running across the wall from one to the other. A warehouse in the Marches. A pumping station on the river called Pump Nine. A funeral director's ledger. And a name.

Damian Holt.

And no way to end it that doesn't kill someone.

If we cut the links, the patients die. If we leave them, the donors die, slowly, a day at a time. If we go in with the wardens and force it, someone gets hurt, and probably someone dies, and it might be anyone. We need a method. Something we can defend. Something that doesn't make us into him.

I don't have one.

The post came this afternoon. Martin brought it up. A letter, on real paper, thick and cream, with a wax seal, from Bracken Court.
*letter ansel_01
I read it four times. Then I pin it to the board, next to the name, in the middle of all the red lines.

*journal [b]Chapter 16.[/b] Felix Brecht went back to Pump Nine and came home dead and returned, with a rope running to Clive. At Okafor Restoration, Quentin, Silas and Felix were in one room for the first time: their ropes run to Eamon, Hugo and Clive, who are alive in warehouse seven, and every day costs them. The lily van belongs to Rusk Funeral Rooms, and the ledger for 30 August carries an authorisation code: Damian Holt's.{@course_confirms| He taught Quentin's first-aid course, too.|} We know who. We don't know how to end it without killing someone. Ansel means to speak at the Court's assembly in February.
*page_break
*goto_scene ch17
`);
