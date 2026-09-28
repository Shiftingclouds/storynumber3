/* CALDER — letters, emails and cards, by id. Shown with *letter id; kept in the journal. kind: email | letter | card */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  NB.LETTERS = {
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
