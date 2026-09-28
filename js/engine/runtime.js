/* Calder engine (from Nuit Blanche) — interpreter.
 * Executes a scene's line table until it must yield to the player:
 *   choice | page_break | input | look | ending
 * Holds no DOM references, so it runs identically in the browser and in Node (tests / bots).
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});

  var STEP_LIMIT = 200000;

  function clone(o) { return JSON.parse(JSON.stringify(o)); }

  // Small deterministic hash -> [0, 2^32)
  function hash32(str) {
    var h = 2166136261 >>> 0;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    h ^= h >>> 13; h = Math.imul(h, 0x5bd1e995) >>> 0; h ^= h >>> 15;
    return h >>> 0;
  }

  function RuntimeError(rt, msg) {
    var st = rt.state;
    var where = st ? st.scene + ":" + ((rt.currentLine && rt.currentLine.n) || "?") : "?";
    var e = new Error("[" + where + "] " + msg);
    e.hwWhere = where;
    return e;
  }

  /**
   * story: { config, scenes: {name: parsedScene} }
   * opts:  { onAchieve(id), onEnding(id), onCheckpoint(snapshot), variants: true|false }
   */
  function Runtime(story, opts) {
    this.story = story;
    this.config = story.config;
    this.opts = opts || {};
    this.state = null;
    this.page = null;
    this.currentLine = null;
  }

  /**
   * opts: a seed number, or { seed, ng: {var: value} } where ng holds New Game+ memory flags.
   */
  Runtime.prototype.newGame = function (opts) {
    var cfg = this.config;
    if (typeof opts === "number") opts = { seed: opts };
    opts = opts || {};
    var seed = opts.seed;
    var vars = clone(cfg.startVars);
    if (opts.ng) for (var k in opts.ng) if (Object.prototype.hasOwnProperty.call(vars, k)) vars[k] = opts.ng[k];
    this.undoSnap = null;
    this.state = {
      v: 3,
      vars: vars,
      temps: {},
      scene: cfg.sceneList[0],
      pc: 0,
      stack: [],
      used: {},
      journal: [],
      achievements: {},
      seed: seed === undefined ? Math.floor(Math.random() * 1e9) : seed,
      turn: 0,
      chapter: null,
      ended: null,
      met: {},
      memories: {},
      clues: [],
      deductions: {},
      codex: [],
      nodes: {},
      undone: [],
      asked: {},
      mood: "",
      date: "", time: "", place: "", view: "", present: [], letters: [], album: [], sids: {}
    };
    return this.run(null);
  };

  /* ---------------- variable access ---------------- */

  Runtime.prototype.has = function (name) {
    return Object.prototype.hasOwnProperty.call(this.state.temps, name) ||
      Object.prototype.hasOwnProperty.call(this.state.vars, name);
  };

  Runtime.prototype.get = function (name) {
    var st = this.state;
    if (Object.prototype.hasOwnProperty.call(st.temps, name)) return st.temps[name];
    if (Object.prototype.hasOwnProperty.call(st.vars, name)) return st.vars[name];
    throw RuntimeError(this, "Unknown variable '" + name + "'");
  };

  Runtime.prototype.put = function (name, value) {
    var st = this.state;
    var clamp = this.config.clamp && this.config.clamp[name];
    if (typeof value === "number") {
      if (!isFinite(value)) throw RuntimeError(this, "Non-finite value for " + name);
      if (clamp) value = Math.max(clamp[0], Math.min(clamp[1], value));
      value = Math.round(value * 1000) / 1000;
      if (clamp) value = Math.round(value);
    }
    if (Object.prototype.hasOwnProperty.call(st.temps, name)) st.temps[name] = value;
    else if (Object.prototype.hasOwnProperty.call(st.vars, name)) st.vars[name] = value;
    else throw RuntimeError(this, "Cannot *set unknown variable '" + name + "' (declare it in config or with *temp)");
  };

  Runtime.prototype.evalExpr = function (src) {
    var self = this;
    var fn;
    try {
      fn = NB.expr.compile(src);
    } catch (e) {
      throw RuntimeError(this, e.message);
    }
    return fn(function (name) { return self.get(name); });
  };

  Runtime.prototype.render = function (src, lineIndex) {
    var self = this;
    var st = this.state;
    var useVariants = this.opts.variants !== false;
    var ctx = {
      evalExpr: function (e) { return self.evalExpr(e); },
      variant: function (count, occ) {
        if (count <= 1 || !useVariants) return 0;
        return hash32(st.seed + ":" + st.scene + ":" + lineIndex + ":" + occ) % count;
      }
    };
    try {
      return NB.text.render(src, ctx);
    } catch (e) {
      if (e.hwWhere) throw e;
      throw RuntimeError(this, e.message);
    }
  };

  Runtime.prototype.rand = function (salt) {
    var st = this.state;
    return hash32(st.seed + ":rand:" + st.turn + ":" + st.scene + ":" + salt) / 4294967296;
  };

  /* ---------------- execution ---------------- */

  Runtime.prototype.scene = function () {
    var sc = this.story.scenes[this.state.scene];
    if (!sc) throw RuntimeError(this, "Unknown scene '" + this.state.scene + "'");
    return sc;
  };

  Runtime.prototype.gotoScene = function (name, label) {
    var sc = this.story.scenes[name];
    if (!sc) throw RuntimeError(this, "Unknown scene '" + name + "'");
    this.state.scene = name;
    this.state.temps = {};
    if (label) {
      if (sc.labels[label] === undefined) throw RuntimeError(this, "Unknown label '" + label + "' in scene " + name);
      this.state.pc = sc.labels[label];
    } else {
      this.state.pc = 0;
    }
  };

  Runtime.prototype.snapshotVars = function () {
    var out = {};
    var track = this.config.trackChanges || [];
    for (var i = 0; i < track.length; i++) out[track[i]] = this.state.vars[track[i]];
    return out;
  };

  Runtime.prototype.diffVars = function (before) {
    if (!before) return [];
    var track = this.config.trackChanges || [];
    var changes = [];
    for (var i = 0; i < track.length; i++) {
      var k = track[i];
      var a = before[k];
      var b = this.state.vars[k];
      if (typeof a === "number" && typeof b === "number" && a !== b) changes.push({ v: k, from: a, to: b });
    }
    return changes;
  };

  /** Run from the current pc until a yield. `before` = vars snapshot for change notes. */
  Runtime.prototype.run = function (before) {
    var st = this.state;
    this.before = null;
    var blocks = [];
    var para = [];
    var paraIndent = -1;
    var paraWho = null, paraMood = null;
    var page = null;
    var self = this;
    st.turn++;
    this.notices = [];
    this.steamy = false;

    function flush() {
      if (para.length) {
        var pb = { k: "p", html: para.join(" ") };
        if (paraWho) { pb.who = paraWho; pb.mood = paraMood; }
        blocks.push(pb);
        para = [];
      }
      paraIndent = -1;
      paraWho = null; paraMood = null;
    }

    var steps = 0;
    while (!page) {
      if (++steps > STEP_LIMIT) throw RuntimeError(this, "Step limit exceeded (infinite loop?)");
      var sc = this.scene();
      var lines = sc.lines;
      if (st.pc >= lines.length) {
        throw RuntimeError(this, "Reached the end of scene '" + st.scene + "' without *finish, *goto_scene or *ending");
      }
      var L = lines[st.pc];
      this.currentLine = L;
      // The first line after a *choice / *vary block always starts a new paragraph.
      if (L.afterChoice) flush();

      switch (L.kind) {
        case "blank":
          flush();
          st.pc++;
          break;
        case "nop":
          st.pc++;
          break;
        case "text":
          // Text at a different indentation (entering or leaving a block), or after an
          // *if / *elseif / *else boundary, starts a new paragraph.
          // A spoken line starts "@who:mood " (mood optional): the speaker's portrait, in that expression,
          // stands beside the paragraph. A tag always starts a new paragraph.
          var tag = /^@([a-z]+)(?::([a-z_]+))?\s+/.exec(L.raw);
          if (para.length && (L.indent !== paraIndent || this.boundary || tag)) flush();
          this.boundary = false;
          if (!para.length) paraIndent = L.indent;
          if (tag) {
            if (tag[1] !== "mc") this.person(tag[1]);
            paraWho = tag[1]; paraMood = tag[2] || "neutral";
          }
          para.push(this.render(tag ? L.raw.slice(tag[0].length) : L.raw, st.pc));
          st.pc++;
          break;
        case "option":
        case "vary_opt":
          // Reached in normal flow: an option body (or a variant) just finished. Reconverge.
          st.pc = L.structEnd;
          break;
        case "cmd":
          if (L.structEnd !== undefined) {
            // An *if / *elseif / *else wrapper around options, reached in normal flow.
            st.pc = L.structEnd;
            break;
          }
          page = this.exec(L, sc, flush, blocks, para);
          // exec may have mutated para via push; keep reference semantics
          break;
        default:
          throw RuntimeError(this, "Unknown line kind " + L.kind);
      }
    }

    page.blocks = blocks;
    page.changes = this.diffVars(this.before || before);
    page.notices = this.notices;
    if (this.steamy) page.steamy = true;
    this.before = null;
    page.turn = st.turn;
    page.chapter = st.chapter;
    this.page = page;
    this.currentLine = null;
    return page;
  };

  // Execute a command line. Returns a page object if the command yields, else null.
  Runtime.prototype.exec = function (L, sc, flush, blocks, para) {
    var st = this.state;
    var args = L.args || "";
    var m;
    switch (L.cmd) {
      case "label":
        st.pc++;
        return null;

      case "goto": {
        var target = args.trim();
        if (sc.labels[target] === undefined) throw RuntimeError(this, "Unknown label '" + target + "'");
        st.pc = sc.labels[target];
        return null;
      }

      case "goto_scene": {
        var parts = args.trim().split(/\s+/);
        this.gotoScene(parts[0], parts[1]);
        return null;
      }

      case "gosub": {
        var lbl = args.trim();
        if (sc.labels[lbl] === undefined) throw RuntimeError(this, "Unknown label '" + lbl + "'");
        st.stack.push({ scene: st.scene, pc: st.pc + 1, temps: null });
        st.pc = sc.labels[lbl];
        return null;
      }

      case "gosub_scene": {
        var gp = args.trim().split(/\s+/);
        st.stack.push({ scene: st.scene, pc: st.pc + 1, temps: st.temps });
        this.gotoScene(gp[0], gp[1]);
        return null;
      }

      case "return": {
        var frame = st.stack.pop();
        if (!frame) throw RuntimeError(this, "*return without *gosub");
        st.scene = frame.scene;
        st.pc = frame.pc;
        if (frame.temps) st.temps = frame.temps;
        return null;
      }

      case "finish": {
        var list = this.config.sceneList;
        var idx = list.indexOf(st.scene);
        if (idx < 0 || idx + 1 >= list.length) throw RuntimeError(this, "*finish with no next scene");
        this.gotoScene(list[idx + 1]);
        return null;
      }

      case "set":
        this.execSet(args);
        st.pc++;
        return null;

      case "temp": {
        m = /^(\w+)\s*(.*)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *temp");
        st.temps[m[1]] = m[2].trim() === "" ? "" : this.evalExpr(m[2].trim());
        st.pc++;
        return null;
      }

      case "rand": {
        m = /^(\w+)\s+(-?\d+)\s+(-?\d+)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *rand");
        var lo = +m[2], hi = +m[3];
        this.put(m[1], lo + Math.floor(this.rand(st.pc) * (hi - lo + 1)));
        st.pc++;
        return null;
      }

      case "if": {
        this.execIf(L, sc);
        return null;
      }

      case "elseif":
      case "else": {
        // Reached in normal flow: a previous branch ran. Skip this and any following branches.
        this.boundary = true;
        var lines = sc.lines;
        var p = L.blockEnd;
        for (;;) {
          var q = p;
          while (q < lines.length && (lines[q].kind === "blank" || lines[q].kind === "nop")) q++;
          if (q < lines.length && lines[q].kind === "cmd" && lines[q].indent === L.indent &&
              (lines[q].cmd === "elseif" || lines[q].cmd === "else")) {
            p = lines[q].blockEnd;
            continue;
          }
          break;
        }
        st.pc = p;
        return null;
      }

      case "vary": {
        var n = L.variants.length;
        var pick = this.opts.variants === false ? 0 : hash32(st.seed + ":vary:" + st.scene + ":" + st.pc) % n;
        st.pc = L.variants[pick] + 1;
        return null;
      }

      case "choice":
      case "fake_choice": {
        flush();
        var options = [];
        this.collectOptions(L.tree, sc, options);
        if (!options.length) throw RuntimeError(this, "Every option of this *choice is hidden");
        var anyEnabled = options.some(function (o) { return o.enabled; });
        if (!anyEnabled) throw RuntimeError(this, "Every option of this *choice is disabled");
        return { kind: "choice", choices: options, choiceLine: st.pc, speak: /\bspeak\b/.test(args) };
      }

      case "page_break": {
        flush();
        st.pc++;
        return { kind: "page_break", button: args.trim() || "Next", resume: st.pc };
      }

      case "input_text": {
        flush();
        m = /^(\w+)\s*(.*)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *input_text");
        st.pc++;
        return { kind: "input", variable: m[1], prompt: m[2] ? this.render(m[2], st.pc - 1) : "", resume: st.pc };
      }

      case "chapter": {
        flush();
        var cargs = args.trim();
        var art = null;
        var am = /\s*\[(\w+)\]\s*$/.exec(cargs);
        if (am) { art = am[1]; cargs = cargs.slice(0, am.index); }
        m = /^(\S+)\s+(.*)$/.exec(cargs);
        var chap = m ? { num: m[1], title: m[2] } : { num: "", title: cargs };
        chap.art = art || chap.num;
        st.chapter = chap;
        if (/^\d+$/.test(chap.num) && Object.prototype.hasOwnProperty.call(st.vars, "night")) st.vars.night = +chap.num;
        if (this.opts.onCheckpoint) {
          var snap = clone(st);
          this.opts.onCheckpoint(snap, chap);
        }
        blocks.push({ k: "chapter", num: chap.num, title: chap.title, art: chap.art });
        st.pc++;
        return null;
      }

      case "heading":
        flush();
        blocks.push({ k: "h", html: this.render(args, st.pc) });
        st.pc++;
        return null;

      case "commit_stats":
        // Changes before this point are not reported on the next page (e.g. character creation).
        this.before = this.snapshotVars();
        st.pc++;
        return null;

      case "divider":
        flush();
        blocks.push({ k: "hr" });
        st.pc++;
        return null;

      case "line_break":
        para.push("<br>");
        st.pc++;
        return null;

      case "achieve": {
        var id = args.trim();
        if (!this.config.achievements || !this.config.achievements[id]) {
          throw RuntimeError(this, "Unknown achievement '" + id + "'");
        }
        if (!st.achievements[id]) {
          st.achievements[id] = true;
          if (this.opts.onAchieve) this.opts.onAchieve(id);
        }
        st.pc++;
        return null;
      }

      case "journal": {
        var entry = NB.text.toPlain(this.render(args.trim(), st.pc));
        if (st.journal.indexOf(entry) < 0) st.journal.push(entry);
        st.pc++;
        return null;
      }

      case "ending": {
        flush();
        var eid = args.trim();
        if (!this.config.endings || !this.config.endings[eid]) throw RuntimeError(this, "Unknown ending '" + eid + "'");
        st.ended = eid;
        if (this.opts.onEnding) this.opts.onEnding(eid);
        return { kind: "ending", ending: eid };
      }

      case "meet": {
        flush();
        var who = args.trim();
        this.person(who);
        var first = !st.met[who];
        st.met[who] = true;
        if (Object.prototype.hasOwnProperty.call(st.vars, "met_" + who)) st.vars["met_" + who] = true;
        blocks.push({ k: "meet", id: who, first: first });
        if (first) this.notices.push({ kind: "meet", id: who });
        if (first && this.opts.onMeet) this.opts.onMeet(who);
        st.pc++;
        return null;
      }

      case "portrait": {
        flush();
        var pp = args.trim().split(/\s+/);
        this.person(pp[0]);
        blocks.push({ k: "portrait", id: pp[0], mood: pp[1] || "neutral" });
        st.pc++;
        return null;
      }

      case "remember": {
        m = /^(\w+)\s+(.+)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *remember: " + args);
        this.person(m[1]);
        var memo = NB.text.toPlain(this.render(m[2], st.pc));
        var list = st.memories[m[1]] || (st.memories[m[1]] = []);
        if (list.indexOf(memo) < 0) list.push(memo);
        this.notices.push({ kind: "remember", id: m[1], text: memo });
        st.pc++;
        return null;
      }

      case "clue": {
        var cid = args.trim();
        if (!this.config.clues || !this.config.clues[cid]) throw RuntimeError(this, "Unknown clue '" + cid + "'");
        if (st.clues.indexOf(cid) < 0) {
          st.clues.push(cid);
          if (Object.prototype.hasOwnProperty.call(st.vars, cid)) st.vars[cid] = true;
          this.notices.push({ kind: "clue", id: cid });
        }
        st.pc++;
        return null;
      }

      case "codex": {
        var xid = args.trim();
        if (!this.config.codex || !this.config.codex[xid]) throw RuntimeError(this, "Unknown codex entry '" + xid + "'");
        if (st.codex.indexOf(xid) < 0) {
          st.codex.push(xid);
          this.notices.push({ kind: "codex", id: xid });
          if (this.opts.onCodex) this.opts.onCodex(xid);
        }
        st.pc++;
        return null;
      }

      case "text": {
        flush();
        m = /^(\w+)\s+(.+)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *text: " + args);
        if (m[1] !== "me" && m[1] !== "unknown" && !(this.config.contacts && this.config.contacts[m[1]])) this.person(m[1]);
        blocks.push({ k: "text", who: m[1], html: this.render(m[2], st.pc) });
        st.pc++;
        return null;
      }

      case "art": {
        flush();
        var aid = args.trim();
        if (this.config.cards && this.config.cards.indexOf(aid) < 0) throw RuntimeError(this, "Unknown art '" + aid + "'");
        blocks.push({ k: "art", id: aid });
        st.pc++;
        return null;
      }

      case "mood":
        st.mood = args.trim();
        st.pc++;
        return null;

      case "meter": {
        flush();
        m = /^(\w+)\s+(\d+)\s+(.*)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *meter: " + args);
        var mparts = m[3].split("|");
        blocks.push({ k: "meter", value: Number(this.get(m[1])), max: +m[2],
          label: this.render(mparts[0] || "", st.pc), left: mparts[1] || "", right: mparts[2] || "" });
        st.pc++;
        return null;
      }

      case "pips": {
        flush();
        m = /^(\w+)\s+(\d+)\s*(.*)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *pips: " + args);
        blocks.push({ k: "pips", value: Number(this.get(m[1])), max: +m[2], label: this.render(m[3] || "", st.pc) });
        st.pc++;
        return null;
      }

      case "effect":
        flush();
        blocks.push({ k: "effect", name: args.trim() });
        st.pc++;
        return null;

      case "node": {
        m = /^(\w+)\s+(\w+)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *node: " + args);
        st.nodes[m[1]] = m[2];
        if (this.opts.onNode) this.opts.onNode(m[1], m[2]);
        st.pc++;
        return null;
      }

      /* ---- Calder: the calendar, places, presence, continuity, letters, snapshots ---- */
      case "date": {
        // *date 2026-08-29 21:40 — the story's clock; the page shows a dateline when the day changes
        m = /^(\d{4}-\d{2}-\d{2})(?:\s+(\d{2}:\d{2}))?\s*$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *date: " + args);
        var newDay = m[1] !== st.date;
        if (st.date && (m[1] + (m[2] || "")) < (st.date + (m[1] === st.date ? st.time || "" : ""))) throw RuntimeError(this, "Time runs backwards: " + st.date + " " + st.time + " -> " + args.trim());
        st.date = m[1]; st.time = m[2] || "";
        if (newDay) { flush(); blocks.push({ k: "date", date: st.date, time: st.time }); }
        st.pc++;
        return null;
      }
      case "place": {
        // *place P13 switchyard_lane — where we are, and the view to show (optional)
        m = /^(P\d\d)(?:\s+(\w+))?\s*$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *place: " + args);
        if (this.config.places && !this.config.places[m[1]]) throw RuntimeError(this, "Unknown place '" + m[1] + "'");
        st.place = m[1];
        if (m[2]) {
          if (this.config.views && this.config.views.indexOf(m[2]) < 0) throw RuntimeError(this, "Unknown view '" + m[2] + "'");
          flush(); st.view = m[2]; blocks.push({ k: "view", id: m[2] });
        }
        st.pc++;
        return null;
      }
      case "present": {
        // *present adrian nolan — who is in the scene; checked against the calendar (dead, held, daylight, full moon)
        var who2 = args.trim().split(/\s+/).filter(Boolean);
        var self2 = this;
        who2.forEach(function (w) { self2.person(w); if (self2.config.canBePresent) { var why = self2.config.canBePresent(w, st); if (why) throw RuntimeError(self2, "Continuity: " + w + " can't be here: " + why); } });
        st.present = who2;
        st.pc++;
        return null;
      }
      case "requires": {
        if (!this.evalExpr(args.trim())) throw RuntimeError(this, "Continuity: requires " + args.trim());
        st.pc++;
        return null;
      }
      case "letter": {
        var lid = args.trim();
        if (!this.config.letters || !this.config.letters[lid]) throw RuntimeError(this, "Unknown letter '" + lid + "'");
        flush();
        if (st.letters.indexOf(lid) < 0) { st.letters.push(lid); this.notices.push({ kind: "letter", id: lid }); }
        blocks.push({ k: "letter", id: lid });
        st.pc++;
        return null;
      }
      case "snapshot": {
        var snid = args.trim();
        if (!this.config.snapshots || !this.config.snapshots[snid]) throw RuntimeError(this, "Unknown snapshot '" + snid + "'");
        flush();
        if (st.album.indexOf(snid) < 0) { st.album.push(snid); this.notices.push({ kind: "snapshot", id: snid }); }
        blocks.push({ k: "snapshot", id: snid });
        st.pc++;
        return null;
      }
      case "variant": {
        // *variant quentin returned — which drawn variant of a person to show from now on ("none" clears)
        m = /^(\w+)\s+(\w+)$/.exec(args.trim());
        if (!m) throw RuntimeError(this, "Bad *variant: " + args);
        this.person(m[1]);
        if (!st.variants) st.variants = {};
        if (m[2] === "none") delete st.variants[m[1]]; else st.variants[m[1]] = m[2];
        st.pc++;
        return null;
      }
      case "sid":
        // *sid CH01.HOME.01 — marks the planned scene this passage plays (cross-checked against plan/)
        st.sids[args.trim()] = true;
        if (this.opts.onSid) this.opts.onSid(args.trim());
        st.pc++;
        return null;

      case "look":
        flush();
        st.pc++;
        return { kind: "look", resume: st.pc };

      case "bug":
        throw RuntimeError(this, "*bug " + args);

      default:
        throw RuntimeError(this, "Unhandled command *" + L.cmd);
    }
  };

  Runtime.prototype.execIf = function (L, sc) {
    var st = this.state;
    this.boundary = true;
    var lines = sc.lines;
    var cur = L;
    var idx = st.pc;
    for (;;) {
      var take;
      if (cur.cmd === "else") take = true;
      else take = !!this.evalExpr(NB.parser.condExpr(cur.args || ""));
      if (take && cur.cmd !== "else" && /^\(?\s*steam\s*\)?$/.test(cur.args || "")) this.steamy = true;
      if (take) {
        st.pc = idx + 1;
        return;
      }
      var q = cur.blockEnd;
      while (q < lines.length && (lines[q].kind === "blank" || lines[q].kind === "nop")) q++;
      if (q < lines.length && lines[q].kind === "cmd" && lines[q].indent === L.indent &&
          (lines[q].cmd === "elseif" || lines[q].cmd === "else")) {
        cur = lines[q];
        idx = q;
        this.currentLine = cur;
        continue;
      }
      st.pc = cur.blockEnd;
      return;
    }
  };

  Runtime.prototype.execSet = function (args) {
    var m = /^(\w+)\s+(.+)$/.exec(args.trim());
    if (!m) throw RuntimeError(this, "Bad *set: " + args);
    var name = m[1];
    var expr = m[2].trim();
    var cur;
    var val;
    if (/^%[+-]/.test(expr)) {
      cur = Number(this.get(name));
      var amt = Number(this.evalExpr(expr.slice(2).trim()));
      if (expr.charAt(1) === "+") val = cur + (100 - cur) * amt / 100;
      else val = cur - cur * amt / 100;
      val = Math.round(val);
    } else if (/^[+\-*\/&]/.test(expr) && !/^[+\-]\s*$/.test(expr)) {
      cur = this.get(name);
      var rhs = this.evalExpr(expr.slice(1).trim());
      var op = expr.charAt(0);
      if (op === "&") val = String(cur) + String(rhs);
      else if (op === "+") val = (typeof cur === "string") ? cur + rhs : Number(cur) + Number(rhs);
      else if (op === "-") val = Number(cur) - Number(rhs);
      else if (op === "*") val = Number(cur) * Number(rhs);
      else val = Number(cur) / Number(rhs);
    } else {
      val = this.evalExpr(expr);
    }
    this.put(name, val);
  };

  Runtime.prototype.collectOptions = function (nodes, sc, out) {
    var st = this.state;
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.type === "cond") {
        for (var b = 0; b < node.branches.length; b++) {
          var br = node.branches[b];
          if (br.expr === null || this.evalExpr(br.expr)) {
            this.collectOptions(br.nodes, sc, out);
            break;
          }
        }
        continue;
      }
      var L = sc.lines[node.idx];
      this.currentLine = L;
      var opt = L.opt;
      var visible = true;
      var enabled = true;
      var failing = [];
      var reuseKey = st.scene + ":" + node.idx;
      for (var k = 0; k < opt.mods.length; k++) {
        var mod = opt.mods[k];
        if (mod.type === "if") {
          if (!this.evalExpr(mod.expr)) visible = false;
        } else if (mod.type === "selectable_if") {
          if (!this.evalExpr(mod.expr)) { enabled = false; failing.push(mod.expr); }
        } else if (mod.type === "hide_reuse") {
          if (st.used[reuseKey]) visible = false;
        } else if (mod.type === "disable_reuse") {
          if (st.used[reuseKey]) { enabled = false; failing.push("__used__"); }
        }
      }
      if (!visible) continue;
      var otext = opt.text;
      var whoM = /^@(\w+)\s+/.exec(otext);
      var optWho = null;
      if (whoM) { optWho = whoM[1]; otext = otext.slice(whoM[0].length); }
      out.push({
        who: optWho,
        deja: /^\u2726/.test(otext),
        html: this.render(otext, node.idx),
        enabled: enabled,
        hint: enabled ? "" : this.hintFor(failing),
        line: node.idx,
        reuseKey: reuseKey
      });
    }
  };

  /* ---------------- requirement hints ---------------- */

  Runtime.prototype.hintFor = function (exprs) {
    var parts = [];
    for (var i = 0; i < exprs.length; i++) {
      if (exprs[i] === "__used__") { parts.push("Already chosen"); continue; }
      var h = this.hintForExpr(exprs[i]);
      if (h) parts.push(h);
    }
    return parts.join("; ");
  };

  // Split an expression on top-level " and " / " or ".
  function splitTopLevel(expr, word) {
    var out = [];
    var depth = 0;
    var cur = "";
    var re = new RegExp("^\\s+" + word + "\\s+", "i");
    for (var i = 0; i < expr.length; i++) {
      var c = expr[i];
      if (c === "(") depth++;
      if (c === ")") depth--;
      if (depth === 0 && (c === " ") && re.test(expr.slice(i))) {
        out.push(cur);
        cur = "";
        i += re.exec(expr.slice(i))[0].length - 1;
        continue;
      }
      cur += c;
    }
    out.push(cur);
    return out.map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function stripParens(s) {
    s = s.trim();
    while (s.charAt(0) === "(") {
      var p = NB.parser.readParens(s);
      if (p && p.rest.trim() === "") s = p.expr.trim();
      else break;
    }
    return s;
  }

  Runtime.prototype.hintForExpr = function (expr) {
    var cfg = this.config;
    var e = stripParens(expr);
    if (cfg.hints && cfg.hints[e]) return cfg.hints[e];
    if (typeof cfg.hintFallback === "function") {
      var fb = cfg.hintFallback(e);
      if (fb) return fb;
    }
    var ands = splitTopLevel(e, "and");
    if (ands.length > 1) {
      var hs = [];
      for (var i = 0; i < ands.length; i++) {
        var ok;
        try { ok = this.evalExpr(ands[i]); } catch (err) { ok = false; }
        if (!ok) {
          var h = this.hintForExpr(ands[i]);
          if (h) hs.push(h);
        }
      }
      return hs.join("; ");
    }
    var ors = splitTopLevel(e, "or");
    if (ors.length > 1) {
      var alts = [];
      for (var j = 0; j < ors.length; j++) {
        var hh = this.hintForExpr(ors[j]);
        if (hh) alts.push(hh.replace(/^Requires /, ""));
      }
      return alts.length ? "Requires " + alts.join(" or ") : "";
    }
    var m = /^(\w+)\s*(>=|>|<=|<)\s*(\d+)$/.exec(e);
    if (m) {
      var name = m[1], op = m[2], n = +m[3];
      var pair = cfg.opposed && cfg.opposed[name];
      if (pair) {
        if (op === ">=" || op === ">") return "Requires " + pair[0] + " " + (op === ">" ? n + 1 : n) + "%";
        return "Requires " + pair[1] + " " + (100 - (op === "<" ? n - 1 : n)) + "%";
      }
      var label = cfg.statNames && cfg.statNames[name];
      if (label) {
        if (op === ">=" || op === ">") return "Requires " + label + " " + (op === ">" ? n + 1 : n);
        return "Requires " + label + " below " + (op === "<" ? n : n + 1);
      }
      return "";
    }
    if (cfg.hints && cfg.hints[e]) return cfg.hints[e];
    return "";
  };

  /* ---------------- player input ---------------- */

  Runtime.prototype.choose = function (index) {
    var page = this.page;
    if (!page || page.kind !== "choice") throw new Error("Not at a choice");
    var opt = page.choices[index];
    if (!opt) throw new Error("No such option " + index);
    if (!opt.enabled) throw new Error("Option is disabled");
    this.undoSnap = { state: clone(this.state), page: clone(page), chosen: NB.text.toPlain(opt.html) };
    var before = this.snapshotVars();
    this.state.used[opt.reuseKey] = true;
    this.state.pc = opt.line + 1;
    return this.run(before);
  };

  Runtime.prototype.next = function () {
    var page = this.page;
    if (!page || page.kind !== "page_break") throw new Error("Not at a page break");
    var before = this.snapshotVars();
    this.state.pc = page.resume;
    return this.run(before);
  };

  Runtime.prototype.submit = function (value) {
    var page = this.page;
    if (!page || page.kind !== "input") throw new Error("Not at an input");
    var clean = String(value || "").replace(/[\[\]{}<>|~@*#]/g, "").replace(/\s+/g, " ").trim().slice(0, 24);
    if (!clean) clean = this.config.inputDefaults && this.config.inputDefaults[page.variable] || "Ash";
    this.put(page.variable, clean);
    this.state.pc = page.resume;
    return this.run(this.snapshotVars());
  };

  /* ---------------- save / restore ---------------- */

  Runtime.prototype.snapshot = function () {
    return { state: clone(this.state), page: clone(this.page) };
  };

  Runtime.prototype.restore = function (snap) {
    this.undoSnap = null;
    this.state = clone(snap.state);
    this.upgradeState();
    this.page = snap.page ? clone(snap.page) : null;
    if (!this.page) return this.run(null);
    return this.page;
  };

  /** Resume from a checkpoint state (pc pointing at a *chapter line). */
  Runtime.prototype.resumeFrom = function (stateSnap) {
    this.undoSnap = null;
    this.state = clone(stateSnap);
    this.upgradeState();
    return this.run(null);
  };

  /** Fill in fields and variables added since a save was made. */
  Runtime.prototype.upgradeState = function () {
    var st = this.state;
    var sv = this.config.startVars;
    for (var k in sv) if (Object.prototype.hasOwnProperty.call(sv, k) && !Object.prototype.hasOwnProperty.call(st.vars, k)) st.vars[k] = clone(sv[k]);
    ["met", "memories", "deductions", "nodes", "asked"].forEach(function (f) { if (!st[f]) st[f] = {}; });
    ["clues", "codex", "undone", "present", "letters", "album"].forEach(function (f) { if (!st[f]) st[f] = []; });
    if (!st.sids) st.sids = {};
    if (st.mood === undefined) st.mood = "";
  };

  /* ---------------- people, wishes, deductions ---------------- */

  Runtime.prototype.person = function (id) {
    if (!this.config.people || !this.config.people[id]) throw RuntimeError(this, "Unknown person '" + id + "'");
    return this.config.people[id];
  };

  /** Can the last choice be unmade with a wish? */
  Runtime.prototype.canUndo = function () {
    var st = this.state;
    return !!(this.undoSnap && st && !st.ended && Number(st.vars.wishes) > 0);
  };

  /** Spend a wish: restore the state from before the last choice. Returns the restored choice page. */
  Runtime.prototype.undo = function () {
    if (!this.canUndo()) throw new Error("Nothing to unmake");
    var wishes = Number(this.state.vars.wishes);
    var used = Number(this.state.vars.wishes_used || 0);
    var snap = this.undoSnap;
    this.undoSnap = null;
    this.state = clone(snap.state);
    this.page = clone(snap.page);
    this.state.vars.wishes = Math.max(0, wishes - 1);
    if (Object.prototype.hasOwnProperty.call(this.state.vars, "wishes_used")) this.state.vars.wishes_used = used + 1;
    this.state.undone.push(snap.chosen);
    this.page.changes = [];
    this.page.notices = [];
    this.page.undone = snap.chosen;
    return this.refreshChoices();
  };

  /** Re-evaluate the options of the current choice (after a deduction, or an undo). */
  Runtime.prototype.refreshChoices = function () {
    var page = this.page;
    if (!page || page.kind !== "choice" || page.choiceLine === undefined) return page;
    var sc = this.scene();
    var L = sc.lines[page.choiceLine];
    var options = [];
    this.collectOptions(L.tree, sc, options);
    this.currentLine = null;
    page.choices = options;
    return page;
  };

  /** Try to connect two clues. Returns { id, deduction, fresh } or { id: null }. */
  Runtime.prototype.deduce = function (a, b) {
    var st = this.state;
    var ds = this.config.deductions || {};
    if (st.clues.indexOf(a) < 0 || st.clues.indexOf(b) < 0 || a === b) return { id: null };
    for (var id in ds) {
      if (!Object.prototype.hasOwnProperty.call(ds, id)) continue;
      var pairs = ds[id].from;
      for (var i = 0; i < pairs.length; i++) {
        var p = pairs[i];
        if ((p[0] === a && p[1] === b) || (p[0] === b && p[1] === a)) {
          var fresh = !st.deductions[id];
          st.deductions[id] = true;
          if (Object.prototype.hasOwnProperty.call(st.vars, id)) st.vars[id] = true;
          if (fresh) this.refreshChoices();
          return { id: id, deduction: ds[id], fresh: fresh };
        }
      }
    }
    return { id: null };
  };

  /** Grant a clue or codex entry from outside the story (e.g. Ask Fleurette). Returns true if it was new. */
  Runtime.prototype.grant = function (kind, id) {
    var st = this.state;
    if (kind === "clue") {
      if (!this.config.clues[id] || st.clues.indexOf(id) >= 0) return false;
      st.clues.push(id);
      if (Object.prototype.hasOwnProperty.call(st.vars, id)) st.vars[id] = true;
      this.refreshChoices();
      return true;
    }
    if (kind === "codex") {
      if (!this.config.codex[id] || st.codex.indexOf(id) >= 0) return false;
      st.codex.push(id);
      if (this.opts.onCodex) this.opts.onCodex(id);
      return true;
    }
    return false;
  };

  /** Submit the portrait creator's choices. */
  Runtime.prototype.submitLook = function (look) {
    var page = this.page;
    if (!page || page.kind !== "look") throw new Error("Not at the look creator");
    var keys = this.config.lookKeys || [];
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (look && look[k] !== undefined) this.put(k, Number(look[k]) || 0);
    }
    this.state.pc = page.resume;
    return this.run(this.snapshotVars());
  };

  NB.Runtime = Runtime;
  NB.hash32 = hash32;

  /* ---------------- story registry ---------------- */

  NB.sources = NB.sources || {};
  NB.scene = function (name, source) {
    // Scenes are String.raw literals, so decode \uXXXX escapes here.
    NB.sources[name] = source.replace(/\\u([0-9a-fA-F]{4})/g, function (m, h) { return String.fromCharCode(parseInt(h, 16)); });
  };
  NB.buildStory = function () {
    var scenes = {};
    for (var name in NB.sources) {
      if (Object.prototype.hasOwnProperty.call(NB.sources, name)) scenes[name] = NB.parser.parse(name, NB.sources[name]);
    }
    return { config: NB.config, scenes: scenes };
  };
})(typeof window !== "undefined" ? window : globalThis);
