/* Calder engine: Sandbox mode. No written choices: the player types what they do, and Claude plays the world. The same
 * city, the same people and the same events trying to happen (the story bible), with the player free to go anywhere.
 * Claude writes in the game's own markup, so the reader shows portraits, places and first meetings as it would in the
 * written story:
 *   @adrian:tense "Line," he says.     a paragraph that belongs to a character (portrait in that expression)
 *   *place P13 / *time 2026-08-30 21:00 / *present adrian nolan / *meet micah / *note ... / *bond adrian +1
 * Pure logic (prompt, state, parsing) lives here and is tested in Node; ui.js draws it.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var KEEP_TURNS = 40;          // conversation turns sent back each time (older ones live on as notes)
  var MAX_NOTES = 60;

  function world() { return NB.SANDBOX_WORLD; }
  function personById(id) { var w = world(); for (var i = 0; i < w.people.length; i++) if (w.people[i].id === id) return w.people[i]; return null; }
  function placeById(id) { var w = world(); for (var i = 0; i < w.places.length; i++) if (w.places[i].id === id) return w.places[i]; return null; }

  /** The fixed part of the prompt (cached): how to play, and the world. */
  function systemPrompt() {
    var w = world();
    var people = w.people.map(function (p) {
      return "- " + p.id + ": " + p.name + " (" + p.age + ", " + p.kind + (p.knows ? ", knows " + p.knows : "") + "). " + p.look + (p.limits ? " Limits: " + p.limits + "." : "");
    }).join("\n");
    var places = w.places.map(function (p) { return "- " + p.id + " " + p.name + " (" + p.district + "): " + p.notes; }).join("\n");
    return [
      "You are the world of CALDER, an interactive novel, running in SANDBOX mode. There are no written choices: the player types what their character does or says, and you narrate what happens next.",
      "",
      "VOICE",
      "- First person, present tense: the narrator ('I') is the player character, a nineteen-year-old lighting technician. British spelling. Young-adult literary voice that can carry mature themes: specific, sensory, dry humour, never purple.",
      "- 3 to 7 short paragraphs per reply. End on a moment that invites the player's next move. Never list options, never ask 'what do you do?', never mention the player, turns, stats or the game.",
      "",
      "HOW TO PLAY THE WORLD",
      "- Honour what the player writes: it's their character. Carry it out faithfully, including their exact words when they speak. Don't add big actions or decisions they didn't make; small natural follow-through is fine.",
      "- The world is alive. People have their own wants, moods, jobs, fears and secrets, and remember what the player did to them. Consequences are real and lasting. Not everyone agrees, helps, or is available; vampires can't be out in daylight, werewolves turn at the full moon, people are at work.",
      "- The story's events keep trying to happen. The STORY BIBLE below is the plan of what the world is doing, month by month: the murder, the returns, the missing men, the villain's schedule. Unless the player's actions change them, those events arrive on their dates. The player can get ahead of them, miss them, or change them. Keep secrets secret until they're discovered in play: reveal the truth only through evidence, echoes and what people say.",
      "- The narrator's gift (the knack) follows its rules exactly: he feels emotions as weather, gets echoes from objects and places, sees the life-threads between people. It never reads thoughts, never detects lies, and never tells him how anyone feels about him.",
      "- The narrator is gay and has told no one. Whether and whom he tells is only ever the player's choice. Never state or imply another character is gay or attracted to him unless it has been earned in play, and romance builds slowly and through ordinary signs. Intimate scenes fade to black.",
      "- The player may try anything. Impossible things fail believably; dangerous things are dangerous. Keep the tone of the book: wonder, warmth, dread.",
      "- Use the cast below whenever someone fits. Minor unnamed people are fine. If a new named character is truly needed, they speak without a tag.",
      "",
      "MARKUP (the reader turns this into portraits, pictures and journal entries; get it exactly right)",
      "- Paragraphs are separated by one blank line. Plain text, *asterisks* for rare emphasis.",
      "- A paragraph in which a cast member speaks, or which is mostly about their reaction, starts with @id:mood and a space, e.g. @adrian:tense \"Don't touch that,\" he says. One character per paragraph. ids come from the CAST list; moods only from: " + w.moods.join(", ") + ". (moon: a werewolf near the change; hungry: a vampire holding hunger down; returned: one of the dead-returned in their uncanny stillness.) Never tag the narrator.",
      "- Directives, each alone on its own line, only when something changes:",
      "  *place P13        the scene moves to a place from the PLACES list (put it before the paragraph that arrives there)",
      "  *time 2026-08-30 21:00   time moves on meaningfully (a new hour, a new day). Time only moves forward.",
      "  *present adrian nolan    who is now in the scene (ids; empty line '*present' for nobody)",
      "  *meet micah       the first time the narrator meets a cast member in this sandbox (see MET in the state); put it just before their first paragraph",
      "  *note text        one short line for the journal when the narrator learns something important",
      "  *bond adrian +1   a relationship clearly warms (+1) or cools (-1) because of what happened",
      "- Put no other text on directive lines, and no markup anywhere else.",
      "",
      "Each player message starts with a STATE block (date, place, who's present, who's been met, bonds, recent notes). Treat it as true. Then comes what the player does.",
      "",
      "CAST (id: name)",
      people,
      "",
      "PLACES (id name (district): notes)",
      places,
      "",
      "STORY BIBLE (spoilers: for you, not the player)",
      w.bible
    ].join("\n");
  }

  function newState(opts) {
    opts = opts || {};
    var st = {
      v: 1, name: opts.name || "Theo", look_skin: opts.look_skin || 0,
      date: opts.date || "2026-08-29 21:30", place: opts.place || null, present: opts.present || [],
      met: opts.met || {}, bonds: opts.bonds || {}, notes: opts.notes || [],
      start: opts.start || "beginning", turns: [], created: Date.now()
    };
    st.init = { date: st.date, place: st.place, present: st.present.slice(), met: JSON.parse(JSON.stringify(st.met)), bonds: JSON.parse(JSON.stringify(st.bonds)), notes: st.notes.slice() };
    return st;
  }

  /** The state with the last turn taken back: replayed from the start through the remaining replies. */
  function undo(st) {
    if (st.turns.length < 4) return st;
    var s = JSON.parse(JSON.stringify(st));
    var init = st.init || {};
    s.date = init.date || s.date; s.place = init.place || null; s.present = init.present || [];
    s.met = init.met || {}; s.bonds = init.bonds || {}; s.notes = init.notes || [];
    s.turns = st.turns.slice(0, -2);
    s.turns.forEach(function (t) { if (t.role === "assistant") { var r = parse(t.content, s); var keep = s.turns; s = r.state; s.turns = keep; } });
    return s;
  }

  function stateBlock(st) {
    var pl = placeById(st.place);
    var met = Object.keys(st.met);
    return [
      "STATE",
      "Narrator's first name: " + st.name,
      "Date and time: " + st.date,
      "Place: " + st.place + (pl ? " " + pl.name : ""),
      "Present: " + (st.present.length ? st.present.join(", ") : "nobody in particular"),
      "Met: " + (met.length ? met.join(", ") : "nobody yet"),
      "Bonds: " + (Object.keys(st.bonds).length ? Object.keys(st.bonds).map(function (k) { return k + " " + st.bonds[k]; }).join(", ") : "none yet"),
      "Recent notes: " + (st.notes.length ? st.notes.slice(-12).join(" | ") : "none")
    ].join("\n");
  }

  /** The messages to send for the player's next action. */
  function messagesFor(st, action) {
    var turns = st.turns.slice(-KEEP_TURNS * 2);
    if (turns.length && turns[0].role !== "user") turns = turns.slice(1);
    var msgs = turns.map(function (t) { return { role: t.role, content: t.content }; });
    msgs.push({ role: "user", content: stateBlock(st) + "\n\n" + action });
    return msgs;
  }

  var DIRECTIVE = /^\*(place|time|present|meet|note|bond)\b\s*(.*)$/;
  var TAG = /^@(\w+):(\w+)\s+/;

  /**
   * Parse a reply. Applies its directives to a copy of the state and returns {blocks, state, events}.
   * blocks use the story renderer's shapes: view, date, meet, p (with who/mood).
   */
  function parse(text, st) {
    var w = world();
    var next = JSON.parse(JSON.stringify(st));
    var blocks = [], events = [];
    var lines = String(text || "").replace(/\r/g, "").split("\n");
    var para = [];
    function flush() {
      var raw = para.join(" ").replace(/\s+/g, " ").trim();
      para = [];
      if (!raw) return;
      var who = null, mood = null, m = TAG.exec(raw);
      if (m) {
        raw = raw.slice(m[0].length);
        if (personById(m[1])) { who = m[1]; mood = w.moods.indexOf(m[2]) >= 0 ? m[2] : "neutral"; }
      }
      raw = raw.replace(/^@\w+(:\w+)?\s*/, "");
      if (raw) blocks.push({ k: "p", html: toHTML(raw), who: who, mood: mood });
    }
    lines.forEach(function (line) {
      var t = line.trim();
      var d = DIRECTIVE.exec(t);
      if (!d) { if (t) para.push(t); else flush(); return; }
      flush();
      var arg = d[2].trim();
      if (d[1] === "place") {
        var pid = (/^P\d\d/.exec(arg) || [])[0];
        if (pid && placeById(pid) && pid !== next.place) {
          next.place = pid;
          var view = placeById(pid).view;
          if (view) blocks.push({ k: "view", id: view });
          events.push({ kind: "place", id: pid });
        }
      } else if (d[1] === "time") {
        var tm = /^(\d{4}-\d\d-\d\d)(?:[ T](\d\d:\d\d))?/.exec(arg);
        if (tm) {
          var when = tm[1] + " " + (tm[2] || next.date.slice(11) || "09:00");
          if (when > next.date) {
            if (tm[1] !== next.date.slice(0, 10)) blocks.push({ k: "date", date: tm[1] });
            next.date = when;
          }
        }
      } else if (d[1] === "present") {
        next.present = arg.split(/[\s,]+/).filter(function (id) { return id && personById(id); });
      } else if (d[1] === "meet") {
        var id = arg.split(/\s+/)[0];
        if (personById(id) && !next.met[id]) { next.met[id] = next.date.slice(0, 10); blocks.push({ k: "meet", id: id, first: true }); events.push({ kind: "meet", id: id }); }
      } else if (d[1] === "note") {
        if (arg) { next.notes.push(arg.slice(0, 240)); if (next.notes.length > MAX_NOTES) next.notes = next.notes.slice(-MAX_NOTES); events.push({ kind: "note", text: arg }); }
      } else if (d[1] === "bond") {
        var b = /^(\w+)\s*([+-]\d)/.exec(arg);
        if (b && personById(b[1])) {
          var n = Math.max(-3, Math.min(6, (next.bonds[b[1]] || 0) + Math.max(-1, Math.min(1, Number(b[2])))));
          next.bonds[b[1]] = n; events.push({ kind: "bond", id: b[1], delta: Number(b[2]) });
        }
      }
    });
    flush();
    return { blocks: blocks, state: next, events: events };
  }

  /** Streaming preview: the prose so far, without markup. */
  function preview(text) {
    return String(text || "").replace(/\r/g, "").split("\n").filter(function (l) { return !DIRECTIVE.test(l.trim()) && !/^\*\w*$/.test(l.trim()); })
      .join("\n").split(/\n\s*\n/).map(function (p) { return p.replace(TAG, "").replace(/^@\w*(:\w*)?/, "").replace(/\s+/g, " ").trim(); })
      .filter(Boolean);
  }

  function toHTML(s) {
    var h = NB.text && NB.text.escapeHTML ? NB.text.escapeHTML(s) : s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
    h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return NB.text && NB.text.smartQuotes ? NB.text.smartQuotes(h) : h;
  }

  /** Play one turn: resolves {blocks, state, events, text}. The caller saves the state. */
  function turn(st, action, settings, onText, signal) {
    var msgs = messagesFor(st, action);
    return NB.narrator.converse(systemPrompt(), msgs, settings, onText, signal, 16000).then(function (text) {
      if (!String(text || "").trim()) throw { code: "empty", message: "Claude didn't reply. Try again." };
      var r = parse(text, st);
      r.state.turns = st.turns.concat([{ role: "user", content: msgs[msgs.length - 1].content }, { role: "assistant", content: text }]);
      r.text = text;
      return r;
    });
  }

  /** The opening action for a new sandbox. */
  function opening(st) {
    if (st.start === "story") return "(Begin the sandbox here, where my story has reached. Open with a short scene that sets where I am and who's around, then leave me free to act.)";
    return "(Begin the sandbox on the night of the Last Set: Saturday 29 August, half nine, at Switchyard, where I'm working the lights. The story bible's first chapter is what the world is about to do tonight. Open with the venue, the crowd and the people I work with, then leave me free to act.)";
  }

  /** Rebuild the page history for display after loading a save. */
  function replay(st) {
    var out = [], s = newState({ name: st.name, date: "0000-00-00 00:00" });
    s.place = null;
    for (var i = 0; i < st.turns.length; i++) {
      var t = st.turns[i];
      if (t.role === "user") {
        var said = t.content.replace(/^STATE[\s\S]*?\n\n/, "");
        if (!/^\(Begin the sandbox/.test(said)) out.push({ k: "you", text: said });
        continue;
      }
      var r = parse(t.content, s);
      out = out.concat(r.blocks.filter(function (b) { return b.k !== "meet"; }));
      s = r.state;
    }
    return out;
  }

  NB.sandbox = { systemPrompt: systemPrompt, newState: newState, stateBlock: stateBlock, messagesFor: messagesFor,
    parse: parse, undo: undo, preview: preview, turn: turn, opening: opening, replay: replay, personById: personById, placeById: placeById };
})(typeof window !== "undefined" ? window : globalThis);
