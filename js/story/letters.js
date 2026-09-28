/* CALDER — letters, emails and cards, by id. Shown with *letter id; kept in the journal. kind: email | letter | card */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  NB.LETTERS = {
    ansel_01: {
      kind: "letter",
      head: "A letter on thick cream paper, sealed with green wax, from Bracken Court · the Saturday post",
      html: "<p>The assembly will sit on the twelfth of February. I intend to speak. I have told my father so, formally, in the hall, with the clerk writing it down. He said nothing for a long time and then asked whether I had eaten. I think that was his way of saying he had heard me.</p>" +
        "<p>I will speak for common access, and for Eamon, and for the three men in the beds, whose names I will say out loud in the Court, where they will be written down, and cannot afterwards be unwritten.</p>" +
        "<p>I have not stopped thinking about the river. I have not stopped thinking about the Toll Gardens. I find I am not able to write the second sentence properly, so I have let the first stand for both.</p>" +
        "<p>The vinegar here is still better. I say so only because I know it will annoy you.</p>",
      sign: "A.<br><small>(Mr Tern sends his regards and a complaint about Mr Tait's roof, which I am to pass on. Consider it passed.)</small>"
    },
    armand_card: {
      kind: "card",
      head: "A card: heavy cream, deckled at the edges, hand-addressed in fountain pen · brought up with the post, Wednesday",
      html: "<p>Armand Sorrell would be grateful for an hour of your time on Saturday the sixth of March, at seven o'clock, at Sorrell House, Briar Heights.</p>" +
        "<p>I understand that you have been asking questions on behalf of people I have wronged. I would like to answer some of them, and to ask one of my own.</p>" +
        "<p>Please come alone. A car can be sent, if you would prefer. I suspect you will not.</p>",
      sign: "A.S."
    },
    mum_04: {
      kind: "letter",
      head: "A letter on paper this time, in Mum's handwriting, left on my pillow · Saturday morning",
      html: "<p>I don't need to know all of it. I need to know you're all right.</p>" +
        "<p>Martin says you are. Martin also says you've been sleeping fourteen hours at a stretch and eating like a wolf and that there's a board on your bedroom wall with red string on it, which he says he hasn't looked at, which means he has.</p>" +
        "<p>I'd like to hear it from you. Not today, if today's not the day. But from you.</p>",
      sign: "Mum x<br><small>(I'm jet-lagged and I'm furious with everyone for not telling me things, and I love you, and the kettle's on.)</small>"
    },
    mum_03: {
      kind: "email",
      head: "From: Joanne Marsh · Subject: I'm so sorry, read this sitting down · received with four others, Saturday 8:14am",
      html: "<p>I'm not coming home for Christmas. I'm so sorry, sweetheart. I've typed this four times and it doesn't get better.</p>" +
        "<p>Dr Achebe's broken her wrist (ice, a dog, a sledge, don't ask) and there's nobody else for three hundred miles who can do what she does, and if I leave, the whole coast has a nurse who's never delivered a baby and a doctor with one arm. I can't. You know I can't. I'd never forgive myself and neither would the babies.</p>" +
        "<p>I'll be home in the spring. April, the rota says. I've circled it on the calendar in red and I look at it every morning like a child.</p>" +
        "<p>Make Martin do the proper stuffing, the one with the chestnuts, not the one from the packet he thinks I can't tell apart. I can tell. Make Will wear a paper hat. Wear one yourself. Send me a photo of all three of you in them and I'll put it on the wall of the clinic and tell everyone you're my bodyguards.</p>" +
        "<p>You sound different in your last few. Not tired or sad. Something else. Busier? Braver? I can't tell from here. Whatever it is, I think it suits you. Tell me about it when I'm home. All of it. I'm your mother; I can take it.</p>",
      sign: "Love you more than Christmas. Which is a LOT. Mum x"
    },
    ellis_card: {
      kind: "card",
      head: "A postcard: an ink drawing of the arts buildings on University Hill · through the letterbox, Wednesday",
      html: "<p>Open studios, Friday, from seven. Plastic wine, loud opinions, a lecturer who will tell you what the city means.</p>" +
        "<p>You might like it. You might hate it. Either would be interesting to watch.</p>",
      sign: "E.O.<br><small>(The drawing is mine. The perspective on the portico is wrong on purpose. Mostly.)</small>"
    },
    mum_02: {
      kind: "email",
      head: "From: Joanne Marsh · Subject: polar bear (not a joke) · received with five others, Monday 7:02am",
      html: "<p>There was a POLAR BEAR at the dump on Wednesday. Not a joke. Everyone got a text telling us to stay in and I stood at the window with Dr Achebe's binoculars like a child at the zoo. It was enormous and yellowish and completely uninterested in us, which I found rude.</p>" +
        "<p>Also this week: a man walked in with an axe in his boot, blade down, and asked for a plaster. For his finger. He had cut his finger opening a tin. He was entirely unbothered by the axe. We removed the axe. He was annoyed about it.</p>" +
        "<p>You sound tired in your last one. Tired or sad? I can't tell from here. That's the worst thing about being this far away, I can't see your face and work out which. Tell me which.</p>" +
        "<p>Tell Martin I said to feed you and to stop printing things for free for people who've been coming since before I was born. I KNOW he does it. He did it when I was twelve.</p>",
      sign: "Love you more than the bear. Mum x"
    },
    mum_01: {
      kind: "email",
      head: "From: Joanne Marsh · Subject: (3) Re: Re: are you alive · received all at once, Saturday 3:31pm",
      html: "<p>Sweetheart. The satellite's been down since the eighth, so you're getting three weeks of me at once. Brace.</p>" +
        "<p>It snowed on Tuesday. SNOWED. In August. Dr Achebe says this is normal up here and I said nothing about this is normal, and then I went out in it in my slippers like an idiot and the dogs thought it was the best day of their lives.</p>" +
        "<p>We had a boy come in on a sledge with a fishhook in his thumb and he was so brave about it I nearly cried. Don't tell anyone I'm soft.</p>" +
        "<p>Are you eating? Actual food, not whatever's left in the fridge at Switchyard. Is Martin charging you rent? He should. Tell him I said so and tell him I said he should also let you pay it late.</p>" +
        "<p>Give Will a hug from me and tell him good luck on Sunday, and that I believe in him, which I do, even if he still owes me a birthday card from three years ago.</p>" +
        "<p>I think about you every day, which you already know, so I'll stop.</p>",
      sign: "Love you more than the snow. Mum x<br><small>(P.S. Wear the ear things. I know you hate them. Wear them anyway.)</small>"
    }
  };
})(typeof window !== "undefined" ? window : globalThis);
