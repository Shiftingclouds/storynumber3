/* Calder engine (from Nuit Blanche) — browser UI.
 * Pages, chapter cards, places and portraits, choices, the journal (people with stage hearts, evidence, letters,
 * snapshots, the story so far), stats, saves, settings, endings, the story map, New Game+,
 * and the optional Claude features.
 */
(function (root) {
  "use strict";
  var NB = root.NB;
  var doc = root.document;
  var S = NB.storage;

  var DEFAULT_SETTINGS = {
    theme: "night", size: 1.125, spacing: "normal", font: "serif", width: "normal", motion: "full",
    steam: true, notices: true, showChanges: true, showHints: true, focusMode: false,
    palette: "neon", backdrop: true, arrivals: true,
    narration: "varied", backend: "claude", voice: "faithful", tier: "quick", model: "claude-opus-5", ownWords: false
  };

  var ui = {
    story: null, rt: null, settings: null, meta: null, view: "title", journalTab: "people", journalPerson: null,
    narr: { ctl: null }, backends: { claude: false, api: true }, inArtifact: false, spoken: null, revealAll: false,
    boardPick: [], scrollPositions: {}, storyFocus: null, toastQueue: [], toastBusy: false, pageToken: 0
  };

  /* ---------------- DOM helpers ---------------- */

  function el(tag, attrs, kids) {
    var n = doc.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") n.className = v;
        else if (k === "html") n.innerHTML = v;
        else if (k === "text") n.textContent = v;
        else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
        else n.setAttribute(k, v === true ? "" : v);
      }
    }
    (kids || []).forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      n.appendChild(typeof c === "string" ? doc.createTextNode(c) : c);
    });
    return n;
  }
  function $(id) { return doc.getElementById(id); }
  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  function esc(s) { return NB.text.escapeHTML(s); }
  function cfg() { return ui.story.config; }
  function vars() { return ui.rt && ui.rt.state ? ui.rt.state.vars : {}; }
  function inGame() { return !!(ui.rt && ui.rt.page); }


  function pixImg(url, w, h, cls, alt) {
    var attrs = { src: url, width: w, height: h, class: 'px ' + (cls || ''), alt: alt || '', draggable: 'false', decoding: 'async' };
    if (/(^|\s)nb-card(\s|$)/.test(cls || '')) { attrs['data-pixel-width'] = NB.cards.W; attrs['data-pixel-height'] = NB.cards.H; }
    return el('img', attrs);
  }

  function variantOf(id) {
    var st = ui.rt && ui.rt.state;
    if (id === "mc") return st ? { look_skin: st.vars.look_skin || 0 } : undefined;
    return st && st.variants ? st.variants[id] : undefined;
  }
  function portrait(id, mood, size, cls) {
    return pixImg(NB.portraits.url(id, mood || "neutral", variantOf(id)), size, Math.round(size * 1.25), "nb-portrait " + (cls || ""), personName(id) + " (portrait)");
  }
  function face(id, mood, size) {
    return el("span", { class: "nb-face" + (size <= 40 ? " head" : ""), style: "width:" + size + "px;height:" + size + "px;background-image:url(" + NB.portraits.faceUrl(id, mood || "neutral", variantOf(id)) + ")" });
  }
  function icon(name, scale) {
    var c = NB.icons.draw(name);
    return pixImg(NB.icons.url(name), c.w * (scale || 2), c.h * (scale || 2), "nb-icon", "");
  }
  function personName(id) {
    var p = cfg().people[id];
    if (!p) return id;
    return typeof p.name === "function" ? p.name(vars()) : p.name;
  }
  function personShort(id) {
    var p = cfg().people[id];
    return (p && p.short) || personName(id);
  }


  function toast(title, body, faceId, iconName) {
    ui.toastQueue.push({ title: title, body: body, faceId: faceId, iconName: iconName });
    if (!ui.toastBusy) nextToast();
  }
  function nextToast() {
    var item = ui.toastQueue.shift(), box = $('nb-toast');
    if (!item || !box) { ui.toastBusy = false; return; }
    ui.toastBusy = true;
    var kids = [];
    if (item.faceId) kids.push(face(item.faceId, 'neutral', 36));
    else if (item.iconName) kids.push(icon(item.iconName, 2));
    kids.push(el('div', { class: 'tb' }, [el('b', { text: item.title }), item.body ? el('span', { text: item.body }) : null]));
    var t = el('div', { class: 't' }, kids), timer, dismissed = false;
    function dismiss() { if (dismissed) return; dismissed = true; clearTimeout(timer); t.remove(); ui.toastBusy = false; nextToast(); }
    t.appendChild(el('button', { class: 'nb-toast-close', type: 'button', 'aria-label': 'Dismiss notice', onclick: dismiss }, [mark('close')]));
    t.addEventListener('mouseenter', function () { clearTimeout(timer); });
    t.addEventListener('focusin', function () { clearTimeout(timer); });
    function schedule() { clearTimeout(timer); timer = setTimeout(dismiss, 5200); }
    t.addEventListener('mouseleave', schedule);
    t.addEventListener('focusout', schedule);
    box.appendChild(t); schedule();
  }

  /* Calder's interface vocabulary. All icons are local; no icon/font dependency. */
  function mark(name) {
    var paths = {
      book: '<path d="M3 4h6a4 4 0 0 1 3 1.4A4 4 0 0 1 15 4h6v15h-6a4 4 0 0 0-3 1.4A4 4 0 0 0 9 19H3zM12 6v14"/>',
      person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
      save: '<path d="M6 3h12v18l-6-4-6 4z"/>',
      menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
      arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
      back: '<path d="M20 12H5M11 6l-6 6 6 6"/>',
      close: '<path d="m6 6 12 12M6 18 18 6"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
      search: '<circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/>',
      pin: '<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/>',
      settings: '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/>',
      focus: '<path d="M9 3H3v6M15 3h6v6M3 15v6h6M21 15v6h-6"/>',
      moon: '<path d="M20 14A8.5 8.5 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z"/>',
      compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6z"/>',
      letter: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 6 9 7 9-7"/>',
      image: '<rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8" cy="8" r="1.5"/><path d="m3 18 6-6 4 4 3-3 5 5"/>'
    };
    return el('span', { class: 'nb-mark', 'aria-hidden': 'true', html: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">'+(paths[name] || paths.book)+'</svg>' });
  }
  function personTone(id) {
    var h = 0;
    for (var i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return String(h % 6);
  }
  function quietMotion() {
    return ui.settings.motion === 'reduced' || (root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  function focusContent(view) {
    var target = view.querySelector('h1, h2, [data-focus-heading]') || view;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  // Art fills its frame by CSS (object-fit: cover at the frame's own 16:9); kept as a hook for callers.
  function fitArt() {}
  function updateReadingProgress() {
    if (ui.view !== 'story') return;
    var content = $('nb-reading-body');
    if (!content) return;
    var start = content.getBoundingClientRect().top + root.scrollY - 100;
    var distance = Math.max(1, content.offsetHeight - root.innerHeight + 120);
    var value = Math.max(0, Math.min(100, (root.scrollY - start) / distance * 100));
    var progress = $('nb-page-progress');
    if (progress) { progress.value = value; progress.setAttribute('aria-valuetext', Math.round(value) + '% of this page'); }
  }
  function toggleFocus() {
    ui.settings.focusMode = !ui.settings.focusMode;
    saveSettings(); applySettings();
    if (inGame()) renderReadingRail(ui.rt.page);
    requestAnimationFrame(function () { fitArt(); updateReadingProgress(); });
  }
  function renderReadingRail(page) {
    var rail = $('nb-reading-rail');
    if (!rail || !page || !ui.rt.state) return;
    clear(rail);
    var st = ui.rt.state, chapter = st.chapter || {};
    rail.appendChild(el('div', { class: 'nb-rail-eyebrow', text: 'The unquiet city' }));
    rail.appendChild(el('div', { class: 'nb-rail-chapter', text: nightLabel(st.vars.ch) || 'Your story' }));
    if (chapter.title) rail.appendChild(el('h2', { class: 'nb-rail-title', text: chapter.title }));
    if (st.date) rail.appendChild(el('p', { class: 'nb-rail-date', text: cfg().fmtDate(st.date) }));
    rail.appendChild(el('div', { class: 'nb-rail-tools' }, [
      el('button', { class: 'nb-text-btn', type: 'button', onclick: function () { show('settings'); } }, [mark('settings'), el('span', { text: 'Reading settings' })]),
      el('button', { class: 'nb-text-btn', type: 'button', 'aria-pressed': String(!!ui.settings.focusMode), onclick: toggleFocus }, [mark('focus'), el('span', { text: ui.settings.focusMode ? 'Full interface' : 'Focus on the story' })])
    ]));
    var p = NB.text.toPlain(page.blocks.filter(function (b) { return b.k === 'p'; }).map(function (b) { return b.html; }).join(' '));
    var words = p.trim() ? p.trim().split(/\s+/).length : 0;
    if (words) rail.appendChild(el('p', { class: 'nb-reading-estimate', text: 'About ' + Math.max(1, Math.ceil(words / 220)) + ' min on this page' }));
  }
  function openSnapshot(id) {
    var snapshot = cfg().snapshots[id], previous = doc.activeElement;
    var dialog = el('dialog', { class: 'nb-lightbox', 'aria-label': snapshot.title });
    var close = el('button', { class: 'nb-btn nb-close', type: 'button', 'aria-label': 'Close image', onclick: function () { dialog.close(); } }, [mark('close')]);
    dialog.appendChild(close);
    dialog.appendChild(el('figure', {}, [pixImg(NB.snapshots.url(id), NB.cards.W * 3, NB.cards.H * 3, 'nb-card', snapshot.title), el('figcaption', { text: snapshot.title })]));
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', function () { dialog.remove(); if (previous && previous.isConnected) previous.focus(); });
    doc.body.appendChild(dialog);
    if (dialog.showModal) { dialog.showModal(); fitArt(dialog); close.focus(); }
    else { dialog.remove(); } // Older embedded browsers still show the inline snapshot.
  }

  /* ---------------- settings & meta ---------------- */

  function loadSettings() {
    var s = S.read("settings", {});
    var out = {};
    for (var k in DEFAULT_SETTINGS) out[k] = Object.prototype.hasOwnProperty.call(s, k) ? s[k] : DEFAULT_SETTINGS[k];
    return out;
  }
  function saveSettings() { S.write("settings", ui.settings); }

  function applySettings() {
    var r = doc.documentElement;
    var s = ui.settings;
    if (s.theme === "auto") r.removeAttribute("data-nb-theme"); else r.setAttribute("data-nb-theme", s.theme);
    r.setAttribute("data-nb-font", s.font);
    var lightAuto = s.theme === "auto" && root.matchMedia && root.matchMedia("(prefers-color-scheme: light)").matches;
    if (s.theme === "day" || lightAuto) r.removeAttribute("data-nb-palette"); else r.setAttribute("data-nb-palette", s.palette);
    r.setAttribute("data-nb-backdrop", s.backdrop ? "on" : "off");
    r.setAttribute("data-nb-focus", s.focusMode ? "on" : "off");
    var focusButton = $("nb-focus-exit");
    if (focusButton) focusButton.hidden = !s.focusMode || ui.view !== "story";
    r.setAttribute("data-nb-width", s.width);
    r.setAttribute("data-nb-spacing", s.spacing);
    if (s.motion === "reduced") r.setAttribute("data-nb-motion", "reduced"); else r.removeAttribute("data-nb-motion");
    r.style.setProperty("--size", s.size + "rem");
    if (ui.rt) {
      ui.rt.opts.variants = s.narration !== "classic";
      if (ui.rt.state) ui.rt.state.vars.steam = !!s.steam;
    }
  }

  function applyMood() {
    var m = ui.rt && ui.rt.state && ui.view !== "title" ? ui.rt.state.mood : "";
    if (m) doc.documentElement.setAttribute("data-nb-mood", m); else doc.documentElement.removeAttribute("data-nb-mood");
  }

  function loadMeta() {
    var m = S.read("meta", null) || {};
    m.achievements = m.achievements || {};
    m.endings = m.endings || {};
    m.codex = m.codex || {};
    m.nodes = m.nodes || {};
    m.memories = m.memories || {};
    m.met = m.met || {};
    m.plays = m.plays || 0;
    m.finished = m.finished || 0;
    return m;
  }
  function saveMeta() { S.write("meta", ui.meta); }

  /* ---------------- runtime ---------------- */

  function makeRuntime() {
    return new NB.Runtime(ui.story, {
      variants: ui.settings.narration !== "classic",
      onAchieve: function (id) {
        var a = cfg().achievements[id];
        if (!ui.meta.achievements[id]) { ui.meta.achievements[id] = Date.now(); saveMeta(); }
        toast("Achievement", a.title + (a.desc ? ": " + a.desc : ""), null, "flame");
      },
      onEnding: function (id) {
        ui.meta.endings[id] = (ui.meta.endings[id] || 0) + 1;
        ui.meta.finished++;
        var v = ui.rt.state.vars;
        var mem = ui.meta.memories;
        if (v.thaw) mem.mem_enzo = true;
        if (v.keyman_known) mem.mem_keyman = true;
        if (v.ded_ruari || v.accused === "ruari") mem.mem_killer = true;
        if (v.c_accord_signers) mem.mem_accord = true;
        if (v.path === "bells") mem.mem_bells = true;
        if (v.path === "wolves") mem.mem_wolves = true;
        saveMeta();
      },
      onCodex: function (id) { ui.meta.codex[id] = true; saveMeta(); },
      onMeet: function (id) { ui.meta.met[id] = true; saveMeta(); },
      onNode: function (id, branch) {
        var n = ui.meta.nodes[id] || (ui.meta.nodes[id] = {});
        if (!n[branch]) { n[branch] = true; saveMeta(); }
      },
      onCheckpoint: function (stateSnap, chap) {
        var cps = S.read("checkpoints", {});
        if (cps.seed !== stateSnap.seed) cps = { seed: stateSnap.seed, list: {} };
        cps.list[chap.num + "|" + chap.title] = { num: chap.num, title: chap.title, state: stateSnap, at: Date.now() };
        S.write("checkpoints", cps);
      }
    });
  }

  function guard(fn) {
    try { return fn(); } catch (e) { showError(e); return null; }
  }

  function showError(e) {
    if (root.console) console.error(e);
    show("story");
    var story = $("nb-story");
    clear(story);
    clear($("nb-choices"));
    story.appendChild(el("div", { class: "nb-err", role: "alert", text: "Something went wrong in the story engine:\n" + (e && e.message ? e.message : String(e)) }));
    story.appendChild(el("div", { class: "nb-actions" }, [el("button", { class: "nb-btn", text: "Return to title", onclick: function () { show("title"); } })]));
  }

  function newGame(ng) {
    stopNarrator();
    ui.rt = makeRuntime();
    ui.meta.plays++;
    saveMeta();
    S.remove("checkpoints");
    var opts = {};
    if (ng && ui.meta.finished > 0) {
      opts.ng = { ngplus: true, runs: ui.meta.finished };
      for (var k in ui.meta.memories) opts.ng[k] = ui.meta.memories[k];
    }
    var page = guard(function () {
      var p = ui.rt.newGame(opts);
      ui.rt.state.vars.steam = !!ui.settings.steam;
      return p;
    });
    if (page) renderPage(page, true);
  }

  function continueGame() {
    var snap = S.read("auto", null);
    if (!snap) return newGame();
    loadSnapshot(snap, true);
  }

  function loadSnapshot(snap, withRecap) {
    stopNarrator();
    ui.rt = makeRuntime();
    var page = guard(function () { return ui.rt.restore(snap); });
    if (!page) return;
    ui.rt.state.vars.steam = !!ui.settings.steam;
    var away = snap.savedAt ? Date.now() - snap.savedAt : 0;
    renderPage(page, false);
    if (withRecap && away > 30 * 60 * 1000 && ui.rt.state.vars.night >= 1) showRecapBanner();
  }

  function autosave() {
    if (!ui.rt || !ui.rt.page) return;
    var snap = ui.rt.snapshot();
    snap.savedAt = Date.now();
    S.write("auto", snap);
  }

  function act(fn) {
    stopNarrator();
    if (ui.rt && ui.rt.state) ui.rt.state.vars.steam = !!ui.settings.steam;
    var page = guard(fn);
    if (page) renderPage(page, true);
  }

  /* ---------------- views ---------------- */

  var VIEWS = ["title", "story", "stats", "journal", "saves", "settings", "gallery", "map", "about", "menu", "sandbox"];

  function show(name) {
    var previousView = ui.view;
    ui.scrollPositions[previousView] = root.scrollY || 0;
    if (previousView === "story" && doc.activeElement) ui.storyFocus = doc.activeElement.id || null;
    ui.view = name;
    if (name !== "story") dropArrival();
    doc.documentElement.setAttribute("data-nb-view", name);
    if ($("nb-focus-exit")) $("nb-focus-exit").hidden = !ui.settings.focusMode || name !== "story";
    VIEWS.forEach(function (v) { $("nb-view-" + v).hidden = v !== name; });
    var game = inGame();
    $("nb-bar-game").hidden = name === "title" || name === "sandbox";
    ["stats", "journal", "saves", "menu"].forEach(function (b) {
      var btn = $("nb-btn-" + b);
      btn.setAttribute("aria-pressed", name === b ? "true" : "false");
    });
    $("nb-btn-stats").disabled = !game;
    $("nb-btn-journal").disabled = !game;
    if (name === "title") renderTitle();
    if (name === "stats") renderStats();
    if (name === "journal") renderJournal();
    if (name === "saves") renderSaves();
    if (name === "settings") renderSettings();
    if (name === "gallery") renderGallery();
    if (name === "map") renderMap();
    if (name === "menu") renderMenu();
    if (name === "about") renderAbout();
    if (name === "sandbox") renderSandbox();
    updateHUD();
    applyMood();
    if (root.scrollTo) root.scrollTo(0, name === "story" ? (ui.scrollPositions.story || 0) : 0);
    if (name === "story" && ui.storyFocus && $(ui.storyFocus)) $(ui.storyFocus).focus({ preventScroll: true });
    else focusContent($("nb-view-" + name));
    requestAnimationFrame(function () { fitArt(); updateReadingProgress(); });
  }

  function toggleView(name) {
    if (ui.view === name) show(inGame() ? "story" : "title");
    else show(name);
  }


  function backButton(label) {
    var game = inGame();
    return el('div', { class: 'nb-actions left nb-back-row' }, [
      el('button', { class: 'nb-text-btn', type: 'button', onclick: function () { show(game ? 'story' : 'title'); } }, [mark('back'), el('span', { text: label || (game ? 'Back to the story' : 'Back to the title') })])
    ]);
  }

  /* ---------------- story rendering ---------------- */

  var NIGHT_WORDS = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"];
  // Nights One to Nine, then chapters of Parts Two and Three, then the epilogue.
  function nightLabel(n) {
    n = +n;
    if (!n) return "";
    return "Chapter " + (NIGHT_WORDS[n] || n);
  }


  // Story tags choose the moment; this function chooses its on-screen frame.
  function placeBlock(id) {
    var labels = cfg().placeLabels || {};
    return el('figure', { class: 'nb-art nb-view', 'data-art-id': id }, [
      el('div', { class: 'nb-location-image' }, [pixImg(NB.cards.url(id), NB.cards.W * 2, NB.cards.H * 2, 'nb-card', labels[id] || '')])
    ]);
  }
  function sceneView(container, id) {
    var opening = container.lastElementChild;
    if (opening && opening.classList.contains('nb-dateline')) opening = opening.previousElementSibling;
    if (opening && opening.classList.contains('nb-chapter')) {
      // An adjacent place tag supplies the chapter's opening image, keeping a single hero.
      var frame = opening.querySelector('.nb-chapter-art');
      if (!frame) { frame = el('div', { class: 'nb-chapter-art' }); opening.insertBefore(frame, opening.firstChild); }
      clear(frame);
      frame.appendChild(pixImg(NB.cards.url(id), NB.cards.W * 2, NB.cards.H * 2, 'nb-card', (cfg().placeLabels || {})[id] || ''));
      opening.classList.add('has-art'); opening.setAttribute('data-art-id', id);
    } else container.appendChild(placeBlock(id));
  }

  function chapterCard(b) {
    var art = b.art ? (NB.cards.ids.indexOf(b.art) >= 0 ? b.art : NB.cards.ids.indexOf('ch' + ('0' + b.art).slice(-2)) >= 0 ? 'ch' + ('0' + b.art).slice(-2) : null) : null;
    var label = /^\d+$/.test(b.num) ? nightLabel(b.num) : b.num;
    return el('div', { class: 'nb-chapter' + (art ? ' has-art' : '') }, [
      art ? el('div', { class: 'nb-chapter-art' }, [pixImg(NB.cards.url(art), NB.cards.W * 2, NB.cards.H * 2, 'nb-card', '')]) : null,
      el('div', { class: 'cap' }, [el('span', { class: 'num', text: label }), el('h1', { class: 'title', text: b.title })])
    ]);
  }

  function meetCard(b) {
    var p = cfg().people[b.id];
    return el("div", { class: "nb-meet" + (b.first ? " first" : ""), "data-person-tone": personTone(b.id) }, [
      portrait(b.id, "neutral", 128),
      el("div", { class: "who" }, [
        el("div", { class: "name", text: personName(b.id) }),
        el("div", { class: "epithet", text: p.epithet || "" }),
        b.first ? el("div", { class: "new", text: "New in your journal" }) : null
      ])
    ]);
  }

  function phone(texts) {
    var box = el("div", { class: "nb-phone", role: "group", "aria-label": "Messages" });
    box.appendChild(el("div", { class: "bar" }, [el("span", { text: "4:52" }), el("span", { text: "Messages" }), el("span", { text: "●●●" })]));
    var last = null;
    texts.forEach(function (t) {
      var mine = t.who === "me";
      var row = el("div", { class: "msg" + (mine ? " me" : "") });
      if (!mine && t.who !== last) {
        row.appendChild(el("div", { class: "from" }, [
          t.who === "unknown" ? el("span", { class: "nb-face unknown", text: "?" })
            : cfg().contacts[t.who] ? el("span", { class: "nb-face unknown", text: cfg().contacts[t.who].charAt(0) }) : face(t.who, "neutral", 36),
          el("span", { text: t.who === "unknown" ? "Unknown number" : cfg().contacts[t.who] || personShort(t.who) })
        ]));
      }
      row.appendChild(el("div", { class: "bubble", html: t.html }));
      box.appendChild(row);
      last = t.who;
    });
    return box;
  }

  function meterBlock(b) {
    var pct = Math.max(0, Math.min(100, (b.value / b.max) * 100));
    return el("div", { class: "nb-contest", role: "img", "aria-label": (b.label ? NB.text.toPlain(b.label) + ": " : "") + b.value + " of " + b.max }, [
      b.label ? el("div", { class: "lab", html: b.label }) : null,
      el("div", { class: "track" }, [el("span", { class: "fill", style: "width:" + pct + "%" }), el("span", { class: "mark", style: "left:" + pct + "%" })]),
      el("div", { class: "ends" }, [el("span", { text: b.left }), el("span", { text: b.right })])
    ]);
  }

  function pipsBlock(b) {
    var row = el("div", { class: "nb-pips", role: "img", "aria-label": NB.text.toPlain(b.label || "") + ": " + b.value + " of " + b.max });
    if (b.label) row.appendChild(el("span", { class: "lab", html: b.label }));
    for (var i = 0; i < b.max; i++) row.appendChild(icon(i < b.value ? "follet" : "flake_gone", 3));
    return row;
  }

  /** A spoken line: the speaker's portrait in the line's expression beside the paragraph. A run of lines from the same
   * speaker in the same expression shows the portrait once; a change of expression shows it again. */
  /* A spoken line: the speaker's face beside it, in the expression the line was tagged with. The same face and
   * expression straight after itself shows nothing new; back again after a line or two of mine, it shows small, so
   * a conversation reads as a conversation. A new expression always gets the full portrait. */

  function spokenLine(html, who, mood, state) {
    mood = mood || 'neutral';
    var same = state.who === who && state.mood === mood;
    var cont = same && !state.gap, again = same && state.gap > 0;
    state.who = who; state.mood = mood; state.gap = 0;
    var row = el('div', { class: 'nb-line' + (cont ? ' cont' : again ? ' again' : ''), 'data-who': who, 'data-mood': mood, 'data-person-tone': personTone(who) });
    row.appendChild(cont ? el('div', { class: 'nb-line-face empty' }) : el('div', { class: 'nb-line-face' + (again ? ' mini' : '') }, [
      pixImg(NB.portraits.url(who, mood, variantOf(who)), NB.portraits.W, NB.portraits.H, 'nb-portrait line', personName(who) + ' (' + mood + ')')
    ]));
    row.appendChild(el('div', { class: 'nb-line-copy' }, [
      !cont ? el('div', { class: 'nb-line-heading' }, [el('span', { class: 'nb-line-name', text: personShort(who) })]) : el('span', { class: 'visually-hidden', text: personShort(who) + ' continues: ' }),
      el('p', { html: html })
    ]));
    return row;
  }

  function renderBlocks(container, blocks, retold) {
    var usedRetold = false;
    var speaking = { who: null, mood: null, gap: 0 };
    var pendingPortrait = null;
    var texts = null;
    function flushTexts() { if (texts) { container.appendChild(phone(texts)); texts = null; } }
    blocks.forEach(function (b) {
      if (b.k !== "text") flushTexts();
      if (b.k !== "p" && b.k !== "text" && b.k !== "portrait" && b.k !== "effect") { speaking.who = null; speaking.mood = null; speaking.gap = 0; }
      if (b.k === "chapter") container.appendChild(chapterCard(b));
      else if (b.k === "meet") container.appendChild(meetCard(b));
      else if (b.k === "portrait") pendingPortrait = b;
      else if (b.k === "text") { (texts = texts || []).push(b); }
      else if (b.k === "art") container.appendChild(el("div", { class: "nb-art" }, [pixImg(NB.cards.url(b.id), NB.cards.W * 2, NB.cards.H * 2, "nb-card", "")]));
      else if (b.k === "date") container.appendChild(el("div", { class: "nb-dateline", text: cfg().fmtDate(b.date) }));
      else if (b.k === "view") sceneView(container, b.id);
      else if (b.k === "letter") container.appendChild(letterBlock(b.id));
      else if (b.k === "snapshot") container.appendChild(snapshotBlock(b.id));
      else if (b.k === "meter") container.appendChild(meterBlock(b));
      else if (b.k === "pips") container.appendChild(pipsBlock(b));
      else if (b.k === "effect") runEffect(b.name);
      else if (b.k === "p") {
        if (retold) {
          if (!usedRetold) {
            usedRetold = true;
            retold.forEach(function (item) { container.appendChild(item.h ? el("h3", { html: item.h }) : item.who ? spokenLine(item.html, item.who, item.mood, speaking) : el("p", { html: item })); });
          }
          pendingPortrait = null;
        } else if (b.who && b.who !== "mc" && cfg().people[b.who]) {
          pendingPortrait = null;
          container.appendChild(spokenLine(b.html, b.who, b.mood, speaking));
        } else if (pendingPortrait) {
          container.appendChild(el("div", { class: "nb-with-portrait" }, [
            portrait(pendingPortrait.id, pendingPortrait.mood, 128, "float"),
            el("p", { html: b.html })
          ]));
          pendingPortrait = null;
        } else {
          if (++speaking.gap > 3) { speaking.who = null; speaking.mood = null; }
          container.appendChild(el("p", { html: b.html }));
        }
      } else if (b.k === "h") { if (!retold) container.appendChild(el("h3", { html: b.html })); }
      else if (b.k === "hr") { if (!retold) container.appendChild(el("hr")); }
    });
    flushTexts();
    if (pendingPortrait) container.appendChild(el("div", { class: "nb-with-portrait solo" }, [portrait(pendingPortrait.id, pendingPortrait.mood, 128, "float")]));
  }

  function letterBlock(id) {
    var L = cfg().letters[id];
    return el("div", { class: "nb-letter" + (L.kind ? " " + L.kind : "") }, [
      L.head ? el("div", { class: "head", html: L.head }) : null,
      el("div", { class: "body", html: L.html }),
      L.sign ? el("div", { class: "sign", html: L.sign }) : null
    ]);
  }

  function snapshotBlock(id) {
    var s = cfg().snapshots[id];
    return el('figure', { class: 'nb-snapshot' }, [
      el('button', { class: 'nb-snapshot-open', type: 'button', 'aria-label': 'Enlarge: ' + s.title, onclick: function () { openSnapshot(id); } }, [pixImg(NB.snapshots.url(id), NB.cards.W * 2, NB.cards.H * 2, 'nb-card', s.title), el('span', { class: 'nb-snapshot-zoom', 'aria-hidden': 'true' }, [mark('focus')])]),
      el('figcaption', {}, [el('span', { class: 'nb-caption-label', text: 'A kept moment' }), el('span', { text: s.title })])
    ]);
  }

  function runEffect(name) {
    if (quietMotion()) { if (name === "thaw") toast("The Thaw", "Hushed lines in your journal have melted.", null, "flake_gone"); return; }
    var fx = el("div", { class: "nb-fx nb-fx-" + name, "aria-hidden": "true" });
    doc.body.appendChild(fx);
    setTimeout(function () { if (fx.parentNode) fx.parentNode.removeChild(fx); }, 4200);
    if (name === "thaw") setTimeout(function () { toast("The Thaw", "Hushed lines in your journal have melted.", null, "flake_gone"); }, 1400);
  }

  function changeNotes(changes) {
    if (!ui.settings.showChanges || !changes || !changes.length) return null;
    var c = cfg();
    var box = el("div", { class: "nb-changes", "aria-label": "Changes" });
    changes.forEach(function (ch) {
      var up = ch.to > ch.from;
      var pair = c.opposed[ch.v];
      var label = pair ? (up ? pair[0] : pair[1]) : (c.statNames[ch.v] || ch.v);
      var mag = Math.abs(ch.to - ch.from);
      var arrows = mag >= 15 ? 3 : mag >= 7 ? 2 : 1;
      var rel = /^(rel|st)_/.test(ch.v);
      if (/^st_/.test(ch.v)) { box.appendChild(el("span", { class: up ? "up" : "down", text: label + ": " + (cfg().stages[ch.to] || "") + " " + (up ? "♥" : "♡") })); return; }
      var sym = pair ? "▲" : rel ? (up ? "♥" : "♡") : (up ? "▲" : "▼");
      box.appendChild(el("span", { class: pair || up ? "up" : "down", text: label + " " + new Array(arrows + 1).join(sym) }));
    });
    return box;
  }

  function showNotices(notices) {
    (notices || []).forEach(function (n, i) {
      setTimeout(function () {
        if (n.kind === "remember" && ui.settings.notices) toast(personShort(n.id) + " will remember that.", n.text, n.id);
        else if (n.kind === "clue") toast("New clue", cfg().clues[n.id].title, null, "clue");
        else if (n.kind === "codex") toast("Codex", cfg().codex[n.id].title, null, "key");
        else if (n.kind === "letter") toast("A letter", "Kept in your journal.", null, "clue");
        else if (n.kind === "snapshot") toast("Snapshot", cfg().snapshots[n.id].title, null, "clue");
      }, 350 + i * 700);
    });
  }

  /* The place art, used twice over. Behind the page: the current place, softened and dimmed, so the city is always
   * there around the reading column. On arriving somewhere new: the place fills the screen first, then settles into
   * its frame in the passage when the reader moves on. */
  function pageArt(page, story) {
    var ids = page.blocks.filter(function (b) { return b.k === 'view'; }).map(function (b) { return b.id; });
    var firstView = -1, firstText = -1;
    page.blocks.forEach(function (b, i) {
      if (firstView < 0 && (b.k === 'view' || (b.k === 'chapter' && b.art))) firstView = i;
      if (firstText < 0 && b.k === 'p') firstText = i;
    });
    var opening = firstView >= 0 && (firstText < 0 || firstView < firstText);
    var frame = opening ? story.querySelector('.nb-chapter-art img, .nb-art img') : null;
    return { last: ids.length ? ids[ids.length - 1] : null, openingFrame: frame };
  }
  function setBackdrop(id) {
    var layer = $('nb-backdrop');
    if (!layer || !id) return;
    var url = NB.cards.url(id);
    if (layer.getAttribute('data-id') === id) return;
    layer.setAttribute('data-id', id);
    layer.style.backgroundImage = 'url("' + url + '")';
  }
  function dropArrival() {
    if (ui.dropArrival) { var f = ui.dropArrival; ui.dropArrival = null; f(); }
    Array.prototype.forEach.call(doc.querySelectorAll('.nb-arrival'), function (n) { n.parentNode.removeChild(n); });
    doc.documentElement.classList.remove('nb-arriving');
  }
  function arrive(frame) {
    dropArrival();
    var src = frame.getAttribute('src');
    if (!src || ui.lastArrival === src) return;
    ui.lastArrival = src;
    var big = el('img', { class: 'nb-arrival-img', src: src, alt: '' });
    var layer = el('button', { class: 'nb-arrival', type: 'button', 'aria-label': 'A new place. Continue to the story.' }, [big, el('span', { class: 'nb-arrival-hint' }, [el('span', { text: 'Continue' }), mark('arrow')])]);
    doc.body.appendChild(layer);
    doc.documentElement.classList.add('nb-arriving');
    var done = false;
    function settle() {
      if (done) return; done = true;
      doc.removeEventListener('keydown', key, true);
      var r = frame.getBoundingClientRect();
      var from = { left: '0px', top: '0px', width: root.innerWidth + 'px', height: root.innerHeight + 'px' };
      var to = { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' };
      layer.classList.add('settling');
      var finish = function () { ui.dropArrival = null; if (layer.parentNode) layer.parentNode.removeChild(layer); doc.documentElement.classList.remove('nb-arriving'); var st = $('nb-story'); if (st) st.focus({ preventScroll: true }); };
      if (big.animate) {
        big.animate([from, to], { duration: 750, easing: 'cubic-bezier(.65,0,.25,1)', fill: 'forwards' });
        layer.animate([{ backgroundColor: 'rgba(8,6,16,1)' }, { backgroundColor: 'rgba(8,6,16,0)' }], { duration: 750, easing: 'ease-in', fill: 'forwards' }).onfinish = finish;
      } else finish();
    }
    function key(e) { if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape' || e.key === 'ArrowRight') { e.preventDefault(); e.stopPropagation(); settle(); } }
    layer.addEventListener('click', settle);
    doc.addEventListener('keydown', key, true);
    ui.dropArrival = function () { done = true; doc.removeEventListener('keydown', key, true); };
    requestAnimationFrame(function () { layer.classList.add('shown'); layer.focus({ preventScroll: true }); });
  }

  function renderPage(page, fresh) {
    if (ui.view !== "story") show("story");
    ui.pageToken++;
    renderReadingRail(page);
    var story = $("nb-story");
    var choices = $("nb-choices");
    clear(story);
    clear(choices);
    if (!quietMotion()) {
      story.classList.remove("nb-fade");
      void story.offsetWidth;
      story.classList.add("nb-fade");
      story.addEventListener("animationend", function done() { story.classList.remove("nb-fade"); story.removeEventListener("animationend", done); });
    }
    if (ui.spoken && fresh) {
      page.spoken = ui.spoken;
      ui.spoken = null;
    }
    if (page.spoken) story.appendChild(el("p", { class: "nb-spoken", html: "“" + esc(page.spoken) + "”" }));

    var living = ui.settings.narration === "living" && hasProse(page) && !page.steamy;
    var retold = living && page.retold && !page.showOriginal ? page.retold : null;
    if (living && fresh && !page.retold) {
      renderBlocks(story, page.blocks.filter(function (b) { return b.k !== "p" && b.k !== "h" && b.k !== "hr" && b.k !== "portrait"; }), null);
      var prose = el("div", { class: "nb-prose" });
      var note = el("div", { class: "nb-narr-note" }, [
        el("span", { class: "nb-quill", "aria-hidden": "true" }),
        el("span", { text: "The narrator is retelling this page…" }),
        el("button", { type: "button", text: "Show the original now", onclick: function () { stopNarrator(); page.showOriginal = true; renderPage(page, false); } })
      ]);
      story.appendChild(note);
      story.appendChild(prose);
      startNarrator(page, prose, note, function () { renderControls(page); });
    } else {
      renderBlocks(story, page.blocks, retold);
      if (living && page.retold) {
        story.appendChild(el("div", { class: "nb-narr-note" }, [
          el("span", { text: page.showOriginal ? "Showing the original text." : "Retold by the narrator (" + voiceLabel() + ")." }),
          el("button", { type: "button", text: page.showOriginal ? "Show the retelling" : "Show original", onclick: function () { page.showOriginal = !page.showOriginal; renderPage(page, false); } }),
          el("button", { type: "button", text: "Retell again", onclick: function () { page.retold = null; page.showOriginal = false; page.fresh = true; renderPage(page, true); } })
        ]));
      }
      renderControls(page);
    }

    var notes = changeNotes(page.changes);
    if (notes) {
      var first = story.firstChild;
      if (first && first.classList.contains("nb-chapter")) story.insertBefore(notes, first.nextSibling);
      else story.insertBefore(notes, first);
    }
    if (fresh) showNotices(page.notices);
    updateHUD();
    applyMood();
    if (root.scrollTo) root.scrollTo(0, 0);
    autosave();
    if ($("nb-announcer")) $("nb-announcer").textContent = (ui.rt.state.chapter ? ui.rt.state.chapter.title + '. ' : '') + 'Page ready.';
    var art = pageArt(page, story);
    setBackdrop(art.last || (ui.rt.state && ui.rt.state.view));
    requestAnimationFrame(function () {
      fitArt(); updateReadingProgress();
      if (page.kind !== 'input') story.focus({ preventScroll: true });
      if (fresh && art.openingFrame && ui.settings.arrivals && !quietMotion()) arrive(art.openingFrame);
    });
  }

  function hasProse(page) { return page.blocks.some(function (b) { return b.k === "p"; }); }

  function wishRow(page) {
    if (!cfg().wishes || !ui.rt.canUndo()) return null;
    var v = vars();
    var confirm = el("div", { class: "nb-note-box", hidden: true }, [
      el("div", { text: "Spend a wish to unmake your last choice? You have " + v.wishes + (v.wishes === 1 ? " wish." : " wishes.") }),
      el("div", { class: "nb-actions left" }, [
        el("button", { class: "nb-btn primary", text: "Unmake it", onclick: function () {
          act(function () { return ui.rt.undo(); });
          if (!ui.meta.achievements.first_wish && cfg().achievements.first_wish) {
            ui.rt.state.achievements.first_wish = true;
            ui.meta.achievements.first_wish = Date.now(); saveMeta();
            toast("Achievement", cfg().achievements.first_wish.title, null, "flame");
          }
        } }),
        el("button", { class: "nb-btn", text: "Keep it", onclick: function () { confirm.hidden = true; } })
      ])
    ]);
    return el("div", { class: "nb-wishrow" }, [
      el("button", { class: "nb-btn wish", type: "button", onclick: function () { confirm.hidden = !confirm.hidden; } }, [icon("wish", 2), el("span", { text: "Wish it undone" })]),
      confirm
    ]);
  }

  function renderControls(page) {
    var box = $("nb-choices");
    clear(box);
    ui.selectOption = null;
    if (page.kind === "choice") {
      var form = el("form", { class: "nb-choices", "aria-label": "Choices" });
      var list = el("div", { class: "nb-choice-list", role: "radiogroup", "aria-label": "Choose what happens next" });
      var selected = -1, submitted = false;
      var next = el("button", { class: "nb-btn primary", type: "submit", id: "nb-next", disabled: true }, [el('span', { text: 'Continue' }), mark('arrow')]);
      form.appendChild(el('div', { class: 'nb-decision-head' }, [el('span', { class: 'nb-eyebrow', text: 'A moment of choice' }), el('span', { class: 'nb-key-help', text: '1–9 to choose · Enter to continue' })]));
      page.choices.forEach(function (c, i) {
        var id = "nb-opt-" + i;
        var input = el("input", { type: "radio", name: "nb-choice", id: id, value: String(i), disabled: !c.enabled, "aria-describedby": !c.enabled && ui.settings.showHints && c.hint ? id + '-hint' : null });
        var txt = el("span", { class: "txt", html: c.html });
        if (!c.enabled && ui.settings.showHints && c.hint) txt.appendChild(el("span", { class: "nb-hint", id: id + "-hint", text: c.hint }));
        var row = el("label", { class: "nb-choice" + (c.enabled ? "" : " disabled") + (c.deja ? " deja" : "") + (c.who ? " has-face" : ""), for: id },
          [input, el("span", { class: "nb-choice-number", "aria-hidden": "true", text: ("0" + (i + 1)).slice(-2) }), c.who ? face(c.who, "neutral", 36) : null, txt, mark(c.enabled ? "arrow" : "lock")]);
        input.addEventListener("change", function () {
          selected = i;
          Array.prototype.forEach.call(list.children, function (r) { r.classList.remove("selected"); });
          row.classList.add("selected");
          next.disabled = false;
        });
        row.addEventListener("dblclick", function () { if (c.enabled) { selected = i; submit(); } });
        list.appendChild(row);
      });
      function submit() {
        if (selected < 0 || submitted) return;
        submitted = true; next.disabled = true;
        var idx = selected;
        act(function () { return ui.rt.choose(idx); });
      }
      form.addEventListener("submit", function (e) { e.preventDefault(); submit(); });
      form.appendChild(list);
      form.appendChild(el("div", { class: "nb-actions" }, [next]));
      box.appendChild(form);
      var speak = ownWordsBox(page);
      if (speak) box.appendChild(speak);
      var w = wishRow(page);
      if (w) box.appendChild(w);
      ui.selectOption = function (i) {
        var inp = $("nb-opt-" + i);
        if (inp && !inp.disabled) { inp.checked = true; inp.dispatchEvent(new Event("change")); inp.focus(); }
      };
    } else if (page.kind === "page_break") {
      box.appendChild(el("div", { class: "nb-actions" }, [
        el("button", { class: "nb-btn primary nb-continue", type: "button", text: (page.button || "Continue") + " →", id: "nb-next",
          onclick: function () { act(function () { return ui.rt.next(); }); } })
      ]));
      var w2 = wishRow(page);
      if (w2) box.appendChild(w2);
    } else if (page.kind === "input") {
      var f = el("form", { class: "nb-choices" });
      if (page.prompt) f.appendChild(el("label", { for: "nb-input", html: page.prompt }));
      var inp = el("input", { type: "text", id: "nb-input", maxlength: "24", autocomplete: "off", spellcheck: "false", "aria-label": page.prompt ? NB.text.toPlain(page.prompt) : "Your name" });
      f.appendChild(el("div", { class: "nb-input-row" }, [inp, el("button", { class: "nb-btn primary", type: "submit", id: "nb-next", text: "Continue →" })]));
      f.addEventListener("submit", function (e) { e.preventDefault(); var val = inp.value; act(function () { return ui.rt.submit(val); }); });
      box.appendChild(f);
      setTimeout(function () { inp.focus({ preventScroll: true }); }, 30);
    } else if (page.kind === "look") {
      box.appendChild(lookCreator());
    } else if (page.kind === "ending") {
      box.appendChild(endingCard(page));
    }
  }

  /* ---------------- the look creator ---------------- */

  function lookCreator() {
    var keys = cfg().lookKeys;
    var look = {};
    var v = vars();
    keys.forEach(function (k) { look[k] = v[k] || 0; });
    var preview = el("div", { class: "preview" });
    function draw() {
      clear(preview);
      preview.appendChild(pixImg(NB.portraits.url("mc", "neutral", look), 256, 320, "nb-portrait big", "Your portrait"));
    }
    var rows = el("div", { class: "rows" });
    keys.forEach(function (k) {
      var n = NB.portraits.lookOptions[k];
      var labels = NB.portraits.lookLabels[k];
      var val = el("span", { class: "val", text: labels[look[k]] });
      function step(d) { look[k] = (look[k] + d + n) % n; val.textContent = labels[look[k]]; draw(); }
      rows.appendChild(el("div", { class: "row" }, [
        el("span", { class: "k", text: { look_skin: "Me", look_hair: "Hair colour", look_style: "Hair", look_beard: "Face", look_eyes: "Eyes" }[k] }),
        el("button", { class: "nb-btn arrow", type: "button", "aria-label": "Previous", text: "◀", onclick: function () { step(-1); } }),
        val,
        el("button", { class: "nb-btn arrow", type: "button", "aria-label": "Next", text: "▶", onclick: function () { step(1); } })
      ]));
    });
    draw();
    return el("div", { class: "nb-look" }, [
      preview, rows,
      el("div", { class: "nb-actions" }, [el("button", { class: "nb-btn primary", type: "button", text: "That's me", id: "nb-next",
        onclick: function () { act(function () { return ui.rt.submitLook(look); }); } })])
    ]);
  }

  /* ---------------- your own words (online, optional) ---------------- */

  function ownWordsBox(page) {
    if (!page.speak || !ui.settings.ownWords) return null;
    var backend = ui.settings.backend === "claude" && ui.backends.claude ? "claude" : "api";
    if (backend === "api" && !S.read("apikey", "")) return null;
    var ta = el("textarea", { id: "nb-own", rows: "2", maxlength: "300", placeholder: "Or say it in your own words…" });
    var status = el("span", { class: "status", role: "status" });
    var btn = el("button", { class: "nb-btn", type: "button", text: "Say it" });
    btn.addEventListener("click", function () {
      var words = ta.value.trim();
      if (!words) return;
      btn.disabled = true;
      status.textContent = "Listening…";
      var opts = [];
      page.choices.forEach(function (c, i) { if (c.enabled) opts.push({ index: i + 1, text: NB.text.toPlain(c.html) }); });
      var context = passageFor(page).slice(-1200);
      NB.narrator.speak(opts, words, context, { backend: backend, tier: ui.settings.tier, model: ui.settings.model, apiKey: S.read("apikey", "") })
        .then(function (res) {
          ui.spoken = res.line;
          act(function () { return ui.rt.choose(res.index - 1); });
        }, function (err) {
          btn.disabled = false;
          status.textContent = (err && err.message ? err.message : "Couldn't reach Claude.") + " Pick an option instead.";
        });
    });
    return el("div", { class: "nb-own" }, [el("label", { for: "nb-own", text: "Your own words" }), ta, el("div", { class: "nb-actions left" }, [btn, status])]);
  }

  /* ---------------- the living narrator ---------------- */

  function voiceLabel() {
    var v = NB.narrator && NB.narrator.voices[ui.settings.voice];
    return v ? v.label : "Faithful";
  }
  function stopNarrator() {
    if (ui.narr.ctl) { try { ui.narr.ctl.abort(); } catch (e) { /* ignore */ } }
    ui.narr.ctl = null;
  }
  function passageFor(page) {
    var parts = [];
    page.blocks.forEach(function (b) {
      if (b.k === "p") parts.push((b.who && b.who !== "mc" ? "⟦" + b.who + ":" + b.mood + "⟧ " : "") + NB.text.toPlain(b.html));
      else if (b.k === "h") parts.push("§§ " + NB.text.toPlain(b.html));
    });
    return parts.join("\n\n");
  }
  function retoldParagraphs(text) {
    return NB.narrator.toParagraphs(text).map(function (p) {
      var m = /^§§\s*(.*)$/.exec(p);
      if (m) return { h: m[1] };
      var t = /^⟦([a-z]+):([a-z_]+)⟧\s*/.exec(p);
      return t ? { who: t[1], mood: t[2], html: p.slice(t[0].length) } : p;
    });
  }
  function narratorSettings(fresh) {
    return {
      backend: ui.settings.backend === "claude" && ui.backends.claude ? "claude" : "api",
      voice: ui.settings.voice, tier: ui.settings.tier, model: ui.settings.model, apiKey: S.read("apikey", ""), fresh: !!fresh
    };
  }
  function startNarrator(page, prose, note, done) {
    stopNarrator();
    var ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
    ui.narr.ctl = ctl;
    var facts = cfg().narratorFacts(vars());
    var passage = passageFor(page) + "\n\n(Lines beginning with §§ are section headings: copy them unchanged on their own line. A paragraph beginning with a marker like ⟦quentin:amused⟧ is that person's spoken line: begin the matching paragraph of your retelling with the same marker, unchanged, and keep that person's words in it.)";
    var started = false;
    NB.narrator.retell(passage, facts, narratorSettings(page.fresh), function (text) {
      if (ctl && ctl.signal.aborted) return;
      if (!started) { started = true; note.children[1].textContent = "The narrator is speaking…"; }
      clear(prose);
      var sp = { who: null, mood: null };
      retoldParagraphs(text).forEach(function (item) { prose.appendChild(item.h ? el("h3", { html: item.h }) : item.who ? spokenLine(item.html, item.who, item.mood, sp) : el("p", { html: item })); });
    }, ctl ? ctl.signal : undefined).then(function (text) {
      if (ctl && ctl.signal.aborted) return;
      ui.narr.ctl = null;
      page.retold = retoldParagraphs(text);
      page.fresh = false;
      if (ui.rt && ui.rt.page && ui.rt.page.turn === page.turn) ui.rt.page.retold = page.retold;
      autosave();
      renderPage(page, false);
    }, function (err) {
      if (err && err.code === "cancelled") return;
      if (ctl && ctl.signal.aborted) return;
      ui.narr.ctl = null;
      page.showOriginal = true;
      renderPage(page, false);
      $("nb-story").insertBefore(el("div", { class: "nb-narr-note", role: "status" }, [
        el("span", { text: (err && err.message ? err.message : "The narrator is unavailable.") + " Showing the original text." })
      ]), $("nb-story").firstChild);
      if (done) done();
    });
  }

  /* ---------------- HUD ---------------- */

  function updateHUD() {
    var hud = $("nb-hud");
    clear(hud);
    var v = vars();
    var st = ui.rt && ui.rt.state;
    if (!inGame() || ui.view === "title" || !st || !st.date) { hud.hidden = true; return; }
    hud.hidden = false;
    hud.appendChild(el("span", { class: "night", text: nightLabel(v.ch) }));
    hud.appendChild(el("span", { class: "date", text: cfg().fmtDate(st.date) }));
  }

  /* ---------------- title ---------------- */

  function renderTitle() {
    var c = cfg();
    var v = $("nb-view-title");
    clear(v);
    var auto = S.read("auto", null);
    var live = auto && auto.page && auto.page.kind !== "ending";
    var found = Object.keys(ui.meta.endings).filter(function (k) { return c.endings[k]; }).length;
    var total = Object.keys(c.endings).length;
    var menu = el("div", { class: "menu" });
    if (live) {
      var night = auto.state && auto.state.vars && auto.state.vars.ch;
      menu.appendChild(el("button", { class: "nb-btn primary", text: "Continue" + (night ? " · " + nightLabel(night) : ""), onclick: continueGame }));
    }
    var confirmBox = el("div", { class: "nb-note-box", hidden: true }, [
      el("div", { text: "Starting over replaces your autosave. Your manual saves are kept." }),
      el("div", { class: "nb-actions left" }, [
        el("button", { class: "nb-btn primary", text: "Begin", onclick: function () { newGame(false); } }),
        el("button", { class: "nb-btn", text: "Cancel", onclick: function () { confirmBox.hidden = true; } })
      ])
    ]);
    menu.appendChild(el("button", { class: "nb-btn" + (live ? "" : " primary"), text: "Begin",
      onclick: function () { if (live) confirmBox.hidden = false; else newGame(false); } }));
    menu.appendChild(confirmBox);
    menu.appendChild(el("button", { class: "nb-btn sandbox", text: "Sandbox ✦", title: "The same city, no written choices: type what you do", onclick: function () { show("sandbox"); } }));
    if (ui.meta.finished > 0) {
      menu.appendChild(el("button", { class: "nb-btn ngplus", text: "New Game+ ✦", title: "Begin again, remembering", onclick: function () { newGame(true); } }));
    }
    menu.appendChild(el("button", { class: "nb-btn", text: "Load a saved game", onclick: function () { show("saves"); } }));
    menu.appendChild(el("button", { class: "nb-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }));
    if (ui.meta.finished > 0) menu.appendChild(el("button", { class: "nb-btn", text: "The story map", onclick: function () { show("map"); } }));
    menu.appendChild(el("button", { class: "nb-btn", text: "Settings", onclick: function () { show("settings"); } }));
    menu.appendChild(el("button", { class: "nb-btn", text: "How to play", onclick: function () { show("about"); } }));

    var heroImage = pixImg(NB.cards.url('title'), NB.cards.W * 4, NB.cards.H * 4, 'nb-card', 'The rear lane behind Switchyard at night');
    heroImage.setAttribute('data-pixel-cover', '');
    v.appendChild(el('div', { class: 'nb-title' }, [
      el('div', { class: 'nb-title-art' }, [heroImage]),
      el('div', { class: 'nb-title-content' }, [
        el('div', { class: 'eyebrow' }, [el('span', { class: 'nb-title-dash', 'aria-hidden': 'true' }), el('span', { text: c.eyebrow || 'An interactive novel' })]),
        el('h1', { text: c.title }),
        el('p', { class: 'sub', text: c.subtitle }),
        c.motto ? el('p', { class: 'motto', text: c.motto }) : null,
        menu,
        el('p', { class: 'nb-title-note', text: 'A branching novel. A city full of secrets.' })
      ]),
      el('div', { class: 'nb-title-footer' }, [
        el('span', { text: 'Your choices leave a trace.' }),
        el('div', { class: 'stats-line' }, [el('span', { text: found + ' / ' + total + ' endings' }), el('span', { text: Object.keys(ui.meta.achievements).filter(function (k) { return c.achievements[k]; }).length + ' / ' + Object.keys(c.achievements).length + ' achievements' })])
      ])
    ]));
  }

  function showRecapBanner() {
    var items = cfg().recap(vars(), ui.rt.state);
    if (!items.length) return;
    var story = $("nb-story");
    var box = el("details", { class: "nb-recap", open: true }, [
      el("summary", { text: "Previously…" }),
      el("div", {}, items.slice(-3).map(function (h) { return el("p", { html: h }); }))
    ]);
    story.insertBefore(box, story.firstChild);
  }

  /* ---------------- stats ---------------- */

  function meter(value, opposed) {
    var m = el("div", { class: "nb-meter" + (opposed ? " opposed" : ""), role: "presentation" });
    var s = el("span");
    s.style.width = Math.max(0, Math.min(100, value)) + "%";
    m.appendChild(s);
    return m;
  }

  function renderStats() {
    var v = $("nb-view-stats");
    clear(v);
    if (!inGame()) { v.appendChild(backButton()); return; }
    var sections = cfg().statScreen(vars(), ui.rt.state);
    var panel = el("div", { class: "nb-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("div", { class: "nb-stat-head" }, [portrait("mc", "neutral", 128), el("div", {}, [el("h2", { text: "Stats" }), el("p", { class: "lede", text: "Who you are, so far." })])]));
    sections.forEach(function (sec) {
      if (sec.title) panel.appendChild(el("h3", { text: sec.title }));
      var rows = el("div", { class: "nb-rows" });
      (sec.rows || []).forEach(function (r) {
        if (r.type === "id") {
          var card = el("div", { class: "nb-idcard" });
          r.items.forEach(function (it) { card.appendChild(el("div", {}, [el("span", { class: "k", text: it[0] }), el("span", { class: "v", html: it[1] })])); });
          rows.appendChild(card);
        } else if (r.type === "opposed") {
          rows.appendChild(el("div", { class: "nb-row" }, [
            el("div", { class: "nb-row-head" }, [el("span", { text: r.left + " " + r.value + "%" }), el("span", { class: "sub", text: (100 - r.value) + "% " + r.right })]),
            meter(r.value, true)
          ]));
        } else if (r.type === "bar") {
          rows.appendChild(el("div", { class: "nb-row" }, [
            el("div", { class: "nb-row-head" }, [el("span", { text: r.label }), el("span", { class: "sub", text: String(r.value) })]),
            meter(r.value, false),
            r.note ? el("div", { class: "note", html: r.note }) : null
          ]));
        } else if (r.type === "list") {
          var ul = el("ul", { class: "nb-list" });
          r.items.forEach(function (it) { ul.appendChild(el("li", { text: it })); });
          rows.appendChild(ul);
        }
      });
      panel.appendChild(rows);
    });
    panel.appendChild(el("p", { class: "lede", html: "Everyone you've met, and how they feel about you, is in your <b>Journal</b>." }));
    panel.appendChild(backButton());
    v.appendChild(panel);
  }

  /* ---------------- journal ---------------- */

  function hearts(rel) {
    var box = el("span", { class: "nb-hearts", title: "Regard " + rel, "aria-label": rel >= 0 ? "Regard: " + (Math.round(rel / 10) / 2) + " of 5 hearts" : "Dislike: " + Math.ceil(-rel / 20) + " broken hearts" });
    if (rel < 0) {
      var broken = Math.min(5, Math.ceil(-rel / 20));
      for (var i = 0; i < 5; i++) box.appendChild(icon(i < broken ? "heart_broken" : "heart_empty", 2));
    } else {
      var halves = Math.round(rel / 10);
      for (var j = 0; j < 5; j++) {
        var h = halves - j * 2;
        box.appendChild(icon(h >= 2 ? "heart" : h === 1 ? "heart_half" : "heart_empty", 2));
      }
    }
    return box;
  }
  function flames(des) {
    var box = el("span", { class: "nb-flames", title: "Desire " + des, "aria-label": "Desire: " + Math.round(des / 20) + " of 5" });
    var n = Math.round(des / 20);
    for (var i = 0; i < 5; i++) box.appendChild(icon(i < n ? "flame" : "flame_empty", 2));
    return box;
  }

  /** Calder: pixel hearts show how far a relationship has come (stages for the eight men, 0–3 for friends), not a score. */
  function stageHearts(id, v) {
    var lead = v["st_" + id] !== undefined, n = lead ? v["st_" + id] : v["fr_" + id];
    if (n === undefined) return null;
    var max = lead ? 6 : 3, label = lead ? cfg().stages[n] : ["Acquaintance", "Friendly", "Friends", "Close friends"][n];
    var box = el("span", { class: "nb-hearts", title: label, "aria-label": label });
    for (var i = 1; i <= max; i++) box.appendChild(icon(i <= n ? "heart" : "heart_empty", 2));
    if (lead && v["hurt_" + id] > 0) box.appendChild(icon("heart_broken", 2));
    return box;
  }
  function stageFlame(id, v) { return v["st_" + id] >= 5 ? el("span", { class: "nb-flames", title: "Both of us know" }, [icon("flame", 2)]) : null; }

  var PEOPLE_ORDER = (NB.plan ? NB.plan.leads : []).concat(["martin", "will"]);
  // The fixed order first, then anyone else the story knows (so new characters are never left out).
  function peopleOrder() {
    return PEOPLE_ORDER.concat(Object.keys(cfg().people).filter(function (id) { return id !== "mc" && PEOPLE_ORDER.indexOf(id) < 0; }));
  }

  function renderJournal() {
    var v = $("nb-view-journal");
    clear(v);
    if (!inGame()) { v.appendChild(backButton()); return; }
    var st = ui.rt.state;
    var vv = st.vars;
    var tabs = [["people", "People"]];
    if (st.codex.length) tabs.push(["codex", "The city"]);
    if (st.clues.length) tabs.push(["clues", "Evidence"]);
    if ((st.letters || []).length) tabs.push(["letters", "Letters"]);
    if ((st.album || []).length) tabs.push(["album", "Snapshots"]);
    tabs.push(["sofar", "The story so far"]);
    if (tabs.every(function (t) { return t[0] !== ui.journalTab; })) ui.journalTab = "people";
    var panel = el("div", { class: "nb-panel journal" });
    panel.appendChild(backButton());
    panel.appendChild(el('div', { class: 'nb-panel-heading' }, [el('div', {}, [el('span', { class: 'nb-eyebrow', text: 'The things I keep' }), el('h2', { text: 'My journal' })]), mark('book')]));
    panel.appendChild(el('p', { class: 'lede', text: 'People, places, and the pieces that begin to fit.' }));
    var bar = el("div", { class: "nb-tabs", role: "tablist", "aria-label": "Journal sections" });
    tabs.forEach(function (t) {
      bar.appendChild(el("button", { class: "nb-btn tab", role: "tab", id: "nb-tab-" + t[0], "aria-controls": "nb-journal-body", tabindex: ui.journalTab === t[0] ? "0" : "-1", "aria-selected": String(ui.journalTab === t[0]), text: t[1],
        onclick: function () { ui.journalTab = t[0]; ui.journalPerson = null; renderJournal(); $('nb-tab-' + t[0]).focus(); } }));
    });
    bar.addEventListener('keydown', function (e) {
      var index = tabs.findIndex(function (t) { return t[0] === ui.journalTab; }), next = index;
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = tabs.length - 1;
      else return;
      e.preventDefault(); ui.journalTab = tabs[next][0]; ui.journalPerson = null; renderJournal(); $('nb-tab-' + ui.journalTab).focus();
    });
    panel.appendChild(bar);
    var body = el("div", { class: "nb-tabbody", id: "nb-journal-body", role: "tabpanel", "aria-labelledby": "nb-tab-" + ui.journalTab, tabindex: "0" });
    if (ui.journalTab === "people") journalPeople(body);
    else if (ui.journalTab === "codex") journalCodex(body);
    else if (ui.journalTab === "clues") journalClues(body);
    else if (ui.journalTab === "letters") (st.letters || []).slice().reverse().forEach(function (id) { body.appendChild(letterBlock(id)); });
    else if (ui.journalTab === "album") { var alb = el("div", { class: "nb-album" }); (st.album || []).forEach(function (id) { alb.appendChild(snapshotBlock(id)); }); body.appendChild(alb); }
    else journalSoFar(body);
    panel.appendChild(body);
    v.appendChild(panel);
    requestAnimationFrame(function () { fitArt(v); });
  }


  function journalPeople(body) {
    var st = ui.rt.state, v = st.vars, c = cfg();
    if (ui.journalPerson) return journalPerson(body, ui.journalPerson);
    var ids = ['mc'].concat(peopleOrder().filter(function (id) { return st.met[id]; }));
    var count = el('span', { class: 'nb-collection-count', text: (ids.length - 1) + ' people met' });
    var search = el('input', { type: 'search', class: 'nb-person-search', placeholder: 'Find someone…', 'aria-label': 'Search people in your journal' });
    body.appendChild(el('div', { class: 'nb-collection-toolbar' }, [count, el('div', { class: 'nb-search' }, [mark('search'), search])]));
    var grid = el('div', { class: 'nb-people' });
    ids.forEach(function (id) {
      var self = id === 'mc', p = c.people[id] || {};
      var name = self ? (v.name || 'You') : personShort(id);
      var memories = (st.memories[id] || []).length;
      var stage = self ? 'My story' : v['st_' + id] !== undefined ? c.stages[v['st_' + id]] : ['Acquaintance', 'Friendly', 'Friends', 'Close friends'][v['fr_' + id]];
      grid.appendChild(el('button', { class: 'nb-person' + (self ? ' you' : ''), type: 'button', 'data-person-tone': personTone(id), 'data-search': (name + ' ' + (p.epithet || '')).toLowerCase(), onclick: function () { ui.journalPerson = id; renderJournal(); focusContent($('nb-journal-body')); } }, [
        el('span', { class: 'nb-person-portrait' }, [portrait(id, 'neutral', 128)]),
        el('span', { class: 'nb-person-info' }, [el('span', { class: 'nm', text: name }), el('span', { class: 'ep', text: self ? 'The story is mine to tell.' : (p.epithet || '') }), !self ? stageHearts(id, v) : null, !self ? stageFlame(id, v) : null, el('span', { class: 'nb-stage-label', text: stage || 'In my journal' }), memories ? el('span', { class: 'mem', text: memories + (memories === 1 ? ' shared memory' : ' shared memories') }) : null]),
        el('span', { class: 'nb-person-arrow', 'aria-hidden': 'true' }, [mark('arrow')])
      ]));
    });
    var empty = el('p', { class: 'nb-empty', hidden: true, role: 'status', text: 'No one by that name is in your journal yet.' });
    search.addEventListener('input', function () {
      var value = search.value.trim().toLowerCase(), shown = 0;
      Array.prototype.forEach.call(grid.children, function (card) { card.hidden = card.getAttribute('data-search').indexOf(value) < 0; if (!card.hidden) shown++; });
      empty.hidden = shown > 0;
    });
    body.appendChild(grid); body.appendChild(empty);
    body.appendChild(el('p', { class: 'nb-collection-footnote', text: 'Hearts mark how far a relationship has come. A flame means we both know.' }));
  }

  function journalPerson(body, id) {
    var st = ui.rt.state;
    var v = st.vars;
    var c = cfg();
    body.appendChild(el("div", { class: "nb-actions left" }, [el("button", { class: "nb-btn", text: "◀ Everyone", onclick: function () { ui.journalPerson = null; renderJournal(); } })]));
    if (id === "mc") {
      var looks = NB.portraits.lookLabels;
      body.appendChild(el("div", { class: "nb-entry" }, [
        portrait("mc", "neutral", 256, "big"),
        el("div", { class: "txt" }, [
          el("h3", { text: (v.name || "Theo") + " Marsh" }),
          el("div", { class: "epithet", text: "Nineteen, lighting crew at Switchyard, the room above the print shop" }),
          el("p", { text: "I rig lights, carry cases, and live above my uncle Martin's print shop on Latch Lane with my cousin Will. My mum works at a clinic up north and writes in batches. Two things I've kept to myself my whole life: that I'm gay, and that I can feel what people feel." }),
          v.trained && v.trained !== "none" ? el("p", { text: { malcolm: "Malcolm is teaching me to steer the knack.", florian: "I'm learning control from Ruth Carrow's notes, with Florian.", self: "I'm teaching myself to steer the knack.", refused: "I've said no to training. The knack is mine." }[v.trained] || "" }) : null
        ])
      ]));
      return;
    }
    var p = c.people[id];
    var memories = st.memories[id] || [];
    var favorKey = "favor_" + id;
    body.appendChild(el("div", { class: "nb-entry", "data-person-tone": personTone(id) }, [
      portrait(id, "neutral", 256, "big"),
      el("div", { class: "txt" }, [
        el("h3", { text: personName(id) }),
        el("div", { class: "epithet", text: p.epithet || "" }),
        el("div", { class: "meters" }, [stageHearts(id, v), stageFlame(id, v)]),
        el("div", { class: "desc", html: p.desc ? p.desc(v, st) : "" }),
        v[favorKey] ? el("p", { class: "favor", html: "<b>Owes you a favor.</b>" }) : null,
        memories.length ? el("div", { class: "remembers" }, [el("h4", { text: "Remembers" }), el("ul", {}, memories.map(function (m) { return el("li", { text: m }); }))]) : null
      ])
    ]));
  }

  function journalCodex(body) {
    var st = ui.rt.state;
    var c = cfg();
    var all = Object.keys(c.codex);
    var everSeen = all.filter(function (k) { return ui.meta.codex[k]; }).length;
    body.appendChild(el("p", { class: "lede", text: st.codex.length + " entries this playthrough · " + everSeen + " of " + all.length + " ever discovered" }));
    if (!st.codex.length) body.appendChild(el("p", { text: "Nothing yet." }));
    all.forEach(function (k) {
      if (st.codex.indexOf(k) < 0) return;
      body.appendChild(el("details", { class: "nb-codex" }, [el("summary", { text: c.codex[k].title }), el("p", { text: c.codex[k].text })]));
    });
  }

  function journalClues(body) {
    var st = ui.rt.state;
    var c = cfg();
    if (!st.clues.length) { body.appendChild(el("p", { text: "No clues yet." })); return; }
    body.appendChild(el("p", { class: "lede", html: "Select two clues and press <b>Connect</b>. If they fit together, you'll have a deduction you can act on. Some connections are wrong, and look right." }));
    ui.boardPick = ui.boardPick.filter(function (id) { return st.clues.indexOf(id) >= 0; });
    var grid = el("div", { class: "nb-board" });
    st.clues.forEach(function (id) {
      var cl = c.clues[id];
      var picked = ui.boardPick.indexOf(id) >= 0;
      grid.appendChild(el("button", { class: "nb-cluecard" + (picked ? " picked" : ""), id: "nb-clue-" + id, type: "button", "aria-pressed": String(picked),
        onclick: function () {
          var i = ui.boardPick.indexOf(id);
          if (i >= 0) ui.boardPick.splice(i, 1);
          else { ui.boardPick.push(id); if (ui.boardPick.length > 2) ui.boardPick.shift(); }
          renderJournal();
          $("nb-clue-" + id).focus({ preventScroll: true });
        } }, [icon("clue", 2), el("b", { text: cl.title }), el("span", { text: cl.text })]));
    });
    body.appendChild(grid);
    var result = el("div", { class: "nb-board-result", role: "status" });
    body.appendChild(el("div", { class: "nb-actions left" }, [
      el("button", { class: "nb-btn primary", text: "Connect", disabled: ui.boardPick.length !== 2, onclick: function () {
        var r = ui.rt.deduce(ui.boardPick[0], ui.boardPick[1]);
        if (r.id) {
          ui.boardPick = [];
          renderJournal();
          toast(r.fresh ? (r.deduction.theory ? "A theory" : "Deduction") : "You already know this", r.deduction.title, null, "clue");
          autosave();
        } else {
          result.textContent = "Those two don't connect. Not like that.";
        }
      } }),
      result
    ]));
    var ded = Object.keys(st.deductions);
    if (ded.length) {
      body.appendChild(el("h3", { text: "What you've worked out" }));
      ded.forEach(function (id) {
        var d = c.deductions[id];
        body.appendChild(el("div", { class: "nb-deduction" + (d.theory ? " theory" : "") }, [el("b", { text: d.title }), el("p", { text: d.text })]));
      });
    }
  }

  function knownText() {
    var st = ui.rt.state;
    var c = cfg();
    var out = [];
    st.codex.forEach(function (k) { out.push(c.codex[k].title + ": " + c.codex[k].text); });
    st.clues.forEach(function (k) { out.push("Clue — " + c.clues[k].title + ": " + c.clues[k].text); });
    Object.keys(st.met).forEach(function (id) { out.push("Met: " + personName(id) + ", " + (c.people[id].epithet || "")); });
    c.questions.forEach(function (q) { if (st.asked[q.id]) out.push("Fleurette already said: " + q.a); });
    c.recap(st.vars, st).forEach(function (r) { out.push(r.replace(/<[^>]+>/g, "")); });
    return out.join("\n");
  }

  function journalFleurette(body) {
    var st = ui.rt.state;
    var v = st.vars;
    var c = cfg();
    var gone = v.fleurette_fate === "gone";
    body.appendChild(el("div", { class: "nb-with-portrait" }, [portrait("fleurette", gone ? "sad" : "smile", 128, "float"),
      el("p", { html: gone ? "The jukebox at Chez Normande is dark. Her answers are still here, the ones you asked for. Nobody else is taking requests."
        : "“Ask me anything, chéri. The dead hear everything that's said in bars.”" })]));
    var list = el("div", { class: "nb-qa" });
    c.questions.forEach(function (q) {
      if (gone ? !st.asked[q.id] : !q.when(v, st)) return;
      var asked = !!st.asked[q.id];
      var ans = el("div", { class: "a", hidden: !asked, html: "“" + esc(q.a) + "”" });
      list.appendChild(el("div", { class: "q" + (asked ? " asked" : "") }, [
        el("button", { class: "nb-btn qbtn", type: "button", text: q.q, onclick: function () {
          ans.hidden = !ans.hidden;
          if (!st.asked[q.id]) {
            st.asked[q.id] = true;
            if (q.codex && ui.rt.grant("codex", q.codex)) toast("Codex", c.codex[q.codex].title, null, "key");
            if (q.clue && ui.rt.grant("clue", q.clue)) toast("New clue", c.clues[q.clue].title, null, "clue");
            autosave();
          }
        } }),
        ans
      ]));
    });
    body.appendChild(list);
    // online: anything at all
    var backend = ui.settings.backend === "claude" && ui.backends.claude ? "claude" : "api";
    var online = ui.settings.narration === "living" || ui.settings.ownWords;
    if (!gone && online && (backend === "claude" || S.read("apikey", ""))) {
      var input = el("input", { type: "text", id: "nb-askf", maxlength: "200", placeholder: "Ask her anything…" });
      var out = el("div", { class: "a free", role: "status" });
      var btn = el("button", { class: "nb-btn", type: "button", text: "Ask" });
      btn.addEventListener("click", function () {
        var q = input.value.trim();
        if (!q) return;
        btn.disabled = true;
        out.textContent = "Fleurette considers…";
        NB.narrator.ask(q, knownText(), { backend: backend, tier: ui.settings.tier, model: ui.settings.model, apiKey: S.read("apikey", "") }, function (t) { out.textContent = t; })
          .then(function (t) { out.textContent = t; btn.disabled = false; }, function (err) { out.textContent = (err && err.message) || "The jukebox crackles. Nothing."; btn.disabled = false; });
      });
      body.appendChild(el("div", { class: "nb-own" }, [el("label", { for: "nb-askf", text: "Or ask your own question (Claude)" }), el("div", { class: "nb-input-row" }, [input, btn]), out]));
    }
  }

  function journalSoFar(body) {
    var items = cfg().recap(vars(), ui.rt.state);
    if (!items.length) body.appendChild(el("p", { text: "It's only just begun." }));
    var timeline = el('div', { class: 'nb-recap-timeline' });
    items.forEach(function (h, i) { timeline.appendChild(el('div', { class: 'nb-recap-event' }, [el('span', { class: 'nb-recap-index', text: ('0' + (i + 1)).slice(-2), 'aria-hidden': 'true' }), el('p', { html: h })])); });
    body.appendChild(timeline);
  }

  /* ---------------- ending, gallery, map ---------------- */

  function endArt(id) { return NB.cards.ids.indexOf("end_" + id) >= 0 ? "end_" + id : "morning"; }

  function endingCard(page) {
    var c = cfg();
    var e = c.endings[page.ending];
    var found = Object.keys(ui.meta.endings).filter(function (k) { return c.endings[k]; }).length;
    var total = Object.keys(c.endings).length;
    return el("section", { class: "nb-ending", "aria-label": "Ending" }, [
      pixImg(NB.cards.url(endArt(page.ending)), NB.cards.W * 2, NB.cards.H * 2, "nb-card", ""),
      el("div", { class: "eyebrow", text: "An ending" }),
      el("h2", { text: e.title }),
      el("p", { text: e.desc }),
      el("p", { class: "count", text: "Endings found: " + found + " of " + total }),
      el("div", { class: "nb-actions" }, [
        el("button", { class: "nb-btn", text: "The story map", onclick: function () { show("map"); } }),
        el("button", { class: "nb-btn", text: "Stats", onclick: function () { show("stats"); } }),
        el("button", { class: "nb-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }),
        el("button", { class: "nb-btn ngplus", text: "New Game+ ✦", onclick: function () { newGame(true); } }),
        el("button", { class: "nb-btn primary", text: "Begin again", onclick: function () { newGame(false); } })
      ])
    ]);
  }

  function renderGallery() {
    var c = cfg();
    var v = $("nb-view-gallery");
    clear(v);
    var panel = el("div", { class: "nb-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Endings & Achievements" }));
    var ends = Object.keys(c.endings);
    var found = ends.filter(function (k) { return ui.meta.endings[k]; }).length;
    panel.appendChild(el("p", { class: "lede", text: "Kept across every playthrough in this browser. " + found + " of " + ends.length + " endings found." }));
    panel.appendChild(el("h3", { text: "Endings" }));
    var g = el("div", { class: "nb-gallery" });
    ends.forEach(function (k) {
      var e = c.endings[k];
      var n = ui.meta.endings[k];
      g.appendChild(el("div", { class: "nb-card-tile" + (n ? " has-art" : " locked") }, [
        n ? pixImg(NB.cards.url(endArt(k)), NB.cards.W, NB.cards.H, "nb-card thumb", "") : null,
        el("div", { class: "t", text: n ? e.title : "???" }),
        el("div", { class: "d", text: n ? e.desc : (e.clue || "Not yet found.") }),
        n ? el("div", { class: "c", text: "Reached " + n + (n === 1 ? " time" : " times") }) : null
      ]));
    });
    panel.appendChild(g);
    panel.appendChild(el("h3", { text: "Achievements" }));
    var a = el("div", { class: "nb-gallery" });
    Object.keys(c.achievements).forEach(function (k) {
      var ac = c.achievements[k];
      var got = ui.meta.achievements[k];
      var secret = ac.hidden && !got;
      a.appendChild(el("div", { class: "nb-card-tile" + (got ? "" : " locked") }, [
        el("div", { class: "t", text: secret ? "Hidden achievement" : ac.title }),
        el("div", { class: "d", text: secret ? "Keep playing." : ac.desc }),
        got ? el("div", { class: "c", text: "Earned" }) : null
      ]));
    });
    panel.appendChild(a);
    panel.appendChild(backButton());
    v.appendChild(panel);
  }

  function renderMap() {
    var c = cfg();
    var v = $("nb-view-map");
    clear(v);
    var cur = ui.rt && ui.rt.state ? ui.rt.state.nodes : {};
    var panel = el("div", { class: "nb-panel map" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "The Story Map" }));
    panel.appendChild(el("p", { class: "lede", html: "Your path this time is lit. Paths you've taken in other playthroughs are shown faintly. The rest are <b>???</b>, until you find them, or reveal them." }));
    var reveal = el("div", { class: "nb-note-box", hidden: true }, [
      el("div", { text: "Reveal every path in the book? This spoils branches you haven't found yet." }),
      el("div", { class: "nb-actions left" }, [
        el("button", { class: "nb-btn primary", text: "Reveal all paths", onclick: function () { ui.revealAll = true; renderMap(); } }),
        el("button", { class: "nb-btn", text: "Keep the mystery", onclick: function () { reveal.hidden = true; } })
      ])
    ]);
    panel.appendChild(el("div", { class: "nb-actions left" }, [
      ui.revealAll ? el("button", { class: "nb-btn", text: "Hide unfound paths", onclick: function () { ui.revealAll = false; renderMap(); } })
        : el("button", { class: "nb-btn", text: "Reveal all paths…", onclick: function () { reveal.hidden = false; } })
    ]));
    panel.appendChild(reveal);
    var nights = {};
    c.map.forEach(function (n) { (nights[n.night] = nights[n.night] || []).push(n); });
    var tree = el("div", { class: "nb-map" });
    Object.keys(nights).forEach(function (night) {
      var col = el("div", { class: "night" }, [el("div", { class: "nh", text: nightLabel(night) })]);
      nights[night].forEach(function (node) {
        var seen = ui.meta.nodes[node.id] || {};
        var box = el("div", { class: "node" }, [el("div", { class: "nt", text: node.title })]);
        var chips = el("div", { class: "chips" });
        Object.keys(node.branches).forEach(function (b) {
          var mine = cur[node.id] === b;
          var known = seen[b] || ui.revealAll;
          chips.appendChild(el("span", { class: "chip" + (mine ? " mine" : known ? " seen" : " unknown"), text: mine || known ? node.branches[b] : "???" }));
        });
        box.appendChild(chips);
        col.appendChild(box);
      });
      tree.appendChild(col);
    });
    var endCol = el("div", { class: "night endings" }, [el("div", { class: "nh", text: "Endings" })]);
    var echips = el("div", { class: "chips" });
    Object.keys(c.endings).forEach(function (k) {
      var mine = ui.rt && ui.rt.state && ui.rt.state.ended === k;
      var known = ui.meta.endings[k] || ui.revealAll;
      echips.appendChild(el("span", { class: "chip" + (mine ? " mine" : known ? " seen" : " unknown"), text: mine || known ? c.endings[k].title : "???" }));
    });
    endCol.appendChild(el("div", { class: "node" }, [echips]));
    tree.appendChild(endCol);
    panel.appendChild(tree);
    panel.appendChild(backButton());
    v.appendChild(panel);
  }

  /* ---------------- saves ---------------- */

  function describe(snap) {
    if (!snap || !snap.state) return "Empty";
    var st = snap.state;
    var name = st.vars && st.vars.name ? st.vars.name : "";
    var ch = st.chapter ? (/^\d+$/.test(st.chapter.num) ? nightLabel(st.chapter.num) : st.chapter.num) + ": " + st.chapter.title : "The beginning";
    return (name ? name + " · " : "") + ch;
  }
  function when(t) { if (!t) return ""; try { return new Date(t).toLocaleString(); } catch (e) { return ""; } }

  function renderSaves() {
    var v = $("nb-view-saves");
    clear(v);
    var panel = el("div", { class: "nb-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Saves" }));
    var game = inGame();
    panel.appendChild(el("p", { class: "lede", text: "The game saves itself on every page. Save slots keep a moment you want to come back to." }));
    var auto = S.read("auto", null);
    panel.appendChild(el("h3", { text: "Autosave" }));
    panel.appendChild(el("div", { class: "nb-slots" }, [el("div", { class: "nb-slot" }, [
      el("div", {}, [el("div", { class: "label", text: describe(auto) }), el("div", { class: "meta", text: auto ? when(auto.savedAt) : "" })]),
      el("div", { class: "btns" }, [auto ? el("button", { class: "nb-btn", text: "Load", onclick: function () { loadSnapshot(auto, true); } }) : null])
    ])]));
    panel.appendChild(el("h3", { text: "Save slots" }));
    var list = el("div", { class: "nb-slots" });
    for (var i = 1; i <= 6; i++) {
      (function (n) {
        var snap = S.read("slot:" + n, null);
        list.appendChild(el("div", { class: "nb-slot" }, [
          el("div", {}, [el("div", { class: "label", text: "Slot " + n + " — " + describe(snap) }), el("div", { class: "meta", text: snap ? when(snap.savedAt) : "" })]),
          el("div", { class: "btns" }, [
            game ? el("button", { class: "nb-btn", text: "Save here", onclick: function () { var s = ui.rt.snapshot(); s.savedAt = Date.now(); S.write("slot:" + n, s); toast("Saved", "Slot " + n); renderSaves(); } }) : null,
            snap ? el("button", { class: "nb-btn", text: "Load", onclick: function () { loadSnapshot(snap, false); } }) : null,
            snap ? el("button", { class: "nb-btn", text: "Delete", onclick: function () { S.remove("slot:" + n); renderSaves(); } }) : null
          ])
        ]));
      })(i);
    }
    panel.appendChild(list);
    var cps = S.read("checkpoints", null);
    if (cps && cps.list && Object.keys(cps.list).length) {
      panel.appendChild(el("h3", { text: "Chapter bookmarks · this playthrough" }));
      var cl = el("div", { class: "nb-slots" });
      Object.keys(cps.list).sort().forEach(function (k) {
        var cp = cps.list[k];
        cl.appendChild(el("div", { class: "nb-slot" }, [
          el("div", {}, [el("div", { class: "label", text: nightLabel(cp.num) + ": " + cp.title }), el("div", { class: "meta", text: when(cp.at) })]),
          el("div", { class: "btns" }, [el("button", { class: "nb-btn", text: "Restart from here", onclick: function () {
            stopNarrator();
            ui.rt = makeRuntime();
            var page = guard(function () { return ui.rt.resumeFrom(cp.state); });
            if (page) renderPage(page, true);
          } })])
        ]));
      });
      panel.appendChild(cl);
    }
    panel.appendChild(el("h3", { text: "Move a save between browsers" }));
    var io = el("div", { class: "nb-actions left" });
    if (game && !ui.inArtifact) {
      io.appendChild(el("button", { class: "nb-btn", text: "Export current game", onclick: function () {
        var s = ui.rt.snapshot(); s.savedAt = Date.now();
        var blob = new Blob([JSON.stringify(s)], { type: "application/json" });
        var a = el("a", { href: URL.createObjectURL(blob), download: "calder-save.json" });
        doc.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
      } }));
    }
    var file = el("input", { type: "file", accept: "application/json,.json", id: "nb-import", class: "visually-hidden" });
    file.addEventListener("change", function () {
      var f = file.files && file.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        try {
          var snap = JSON.parse(reader.result);
          if (!snap || !snap.state || !snap.state.vars) throw new Error("Not a Calder save file.");
          loadSnapshot(snap, false);
        } catch (e) { toast("Import failed", e.message); }
      };
      reader.readAsText(f);
    });
    io.appendChild(file);
    io.appendChild(el("label", { class: "nb-btn", for: "nb-import", text: "Import a save file", tabindex: "0",
      onkeydown: function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); file.click(); } } }));
    panel.appendChild(io);
    v.appendChild(panel);
  }

  /* ---------------- settings ---------------- */

  function seg(name, options, current, onPick) {
    var box = el("div", { class: "nb-seg", role: "group", "aria-label": name });
    options.forEach(function (o) {
      box.appendChild(el("button", { class: "nb-btn", type: "button", "aria-pressed": String(o[0] === current), text: o[1], onclick: function () { onPick(o[0]); } }));
    });
    return box;
  }

  function setting(label, help, control) {
    var id = 'nb-setting-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (control.tagName === 'INPUT' || control.tagName === 'SELECT') control.setAttribute('aria-labelledby', id);
    return el('div', { class: 'nb-setting' }, [el('div', { class: 'lab' }, [el('span', { id: id, text: label }), help ? el('small', { text: help }) : null]), el('div', { class: 'nb-setting-control' }, [control])]);
  }

  function renderSettings() {
    var v = $("nb-view-settings");
    clear(v);
    var s = ui.settings;
    function set(k, val) {
      var current = doc.activeElement, group = current && current.closest('[role=group]'), groupLabel = group && group.getAttribute('aria-label'), buttonText = current && current.textContent, id = current && current.id;
      s[k] = val; saveSettings(); applySettings(); renderSettings();
      if (id && $(id)) $(id).focus({ preventScroll: true });
      else if (groupLabel) $('nb-view-settings').querySelectorAll('[role=group]').forEach(function (g) { if (g.getAttribute('aria-label') === groupLabel) g.querySelectorAll('button').forEach(function (b) { if (b.textContent === buttonText) b.focus({ preventScroll: true }); }); });
    }
    var panel = el("div", { class: "nb-panel" });
    panel.appendChild(backButton());
    panel.appendChild(el("h2", { text: "Settings" }));

    panel.appendChild(el('p', { class: 'lede', text: 'Make room for the way you like to read.' }));
    panel.appendChild(el('div', { class: 'nb-type-preview' }, [el('span', { class: 'nb-eyebrow', text: 'Reading preview' }), el('p', { text: 'The city goes quiet for a moment. Somewhere beyond the windows, a train crosses the river.' })]));
    panel.appendChild(el("h3", { text: "Reading" }));
    panel.appendChild(setting('Focus mode', 'Hide the chapter rail while reading.', seg('Focus mode', [[false, 'Full interface'], [true, 'Focus']], s.focusMode, function (x) { set('focusMode', x); })));
    panel.appendChild(setting("Theme", "Auto follows your system.", seg("Theme", [["night", "Night"], ["day", "Day"], ["auto", "Auto"]], s.theme, function (x) { set("theme", x); })));
    panel.appendChild(setting("Colours", "The night palette. Day keeps its own paper colours.", seg("Colours", [["neon", "Neon"], ["golden", "Golden hour"], ["moonlight", "Moonlight"], ["ember", "Ember"], ["river", "River"]], s.palette, function (x) { set("palette", x); })));
    panel.appendChild(setting("Scene backdrop", "The current place, softly behind the page.", seg("Scene backdrop", [[true, "On"], [false, "Off"]], s.backdrop, function (x) { set("backdrop", x); })));
    panel.appendChild(setting("Arriving somewhere", "A new place fills the screen, then settles into the page.", seg("Arrivals", [[true, "Full screen"], [false, "In the page"]], s.arrivals, function (x) { set("arrivals", x); })));
    panel.appendChild(setting("Text size", Math.round(s.size * 16) + "px", seg("Text size", [["-", "A−"], ["=", "Reset"], ["+", "A+"]], null, function (x) {
      var n = x === "=" ? DEFAULT_SETTINGS.size : Math.max(0.875, Math.min(1.75, s.size + (x === "+" ? 0.0625 : -0.0625)));
      set("size", Math.round(n * 1000) / 1000);
    })));
    panel.appendChild(setting("Line spacing", null, seg("Line spacing", [["tight", "Tight"], ["normal", "Normal"], ["loose", "Loose"]], s.spacing, function (x) { set("spacing", x); })));
    panel.appendChild(setting("Typeface", "Legible is Atkinson Hyperlegible, designed for low vision.", seg("Typeface", [["serif", "Serif"], ["sans", "Sans"], ["legible", "Legible"]], s.font, function (x) { set("font", x); })));
    panel.appendChild(setting("Line width", null, seg("Line width", [["narrow", "Narrow"], ["normal", "Normal"], ["wide", "Wide"]], s.width, function (x) { set("width", x); })));
    panel.appendChild(setting("Motion", "Fades and screen effects.", seg("Motion", [["full", "Full"], ["reduced", "Reduced"]], s.motion, function (x) { set("motion", x); })));

    panel.appendChild(el("h3", { text: "Play" }));
    panel.appendChild(setting("Intimate scenes", "On the page, or fade to black. Nothing else changes.", seg("Intimate scenes", [[true, "On the page"], [false, "Fade to black"]], s.steam, function (x) { set("steam", x); })));
    panel.appendChild(setting("“They'll remember that”", "A notice when someone will remember what you did.", seg("Remember notices", [[true, "Show"], [false, "Hide"]], s.notices, function (x) { set("notices", x); })));
    panel.appendChild(setting("Stat changes", "Show which stats a choice moved.", seg("Stat changes", [[true, "Show"], [false, "Hide"]], s.showChanges, function (x) { set("showChanges", x); })));
    panel.appendChild(setting("Requirement hints", "Say why a greyed-out option is locked.", seg("Hints", [[true, "Show"], [false, "Hide"]], s.showHints, function (x) { set("showHints", x); })));

    panel.appendChild(el("h3", { text: "Narration & voice" }));
    panel.appendChild(el("p", { class: "lede", text: "The written novel works offline. Connect Claude to retell a page in a different voice or use your own words for supported dialogue choices. The story and its choices stay fixed." }));
    panel.appendChild(setting("Narration", null, seg("Narration", [["classic", "Classic"], ["varied", "Varied"], ["living", "Living (Claude)"]], s.narration, function (x) { set("narration", x); })));
    panel.appendChild(el("div", { class: "nb-note-box", text: {
      classic: "The text exactly as written, every time.",
      varied: "Hand-written alternate phrasings, reshuffled every playthrough. Works offline.",
      living: "Claude retells every page in the voice you choose. Facts, names and choices stay fixed. Intimate scenes are never sent."
    }[s.narration] }));
    panel.appendChild(setting("Your own words", "On some dialogue choices, type what you say instead.", seg("Own words", [[false, "Off"], [true, "On"]], s.ownWords, function (x) { set("ownWords", x); })));
    var needsClaude = s.narration === "living" || s.ownWords;
    if (needsClaude) {
      if (s.narration === "living") {
        var voices = el("select", { id: "nb-voice", onchange: function (e) { set("voice", e.target.value); } });
        Object.keys(NB.narrator.voices).forEach(function (k) {
          var vo = NB.narrator.voices[k];
          voices.appendChild(el("option", { value: k, selected: k === s.voice, text: vo.label + " — " + vo.desc }));
        });
        panel.appendChild(setting("Voice", null, voices));
      }
      connectionControls(panel, s, set);
    }

    panel.appendChild(el("h3", { text: "Your records" }));
    var confirmWipe = el("div", { class: "nb-note-box", hidden: true }, [
      el("div", { text: "Erase endings, achievements, the story map, New Game+ memories, saves and settings in this browser?" }),
      el("div", { class: "nb-actions left" }, [
        el("button", { class: "nb-btn primary", text: "Erase everything", onclick: function () {
          ["meta", "auto", "checkpoints", "settings", "apikey", "slot:1", "slot:2", "slot:3", "slot:4", "slot:5", "slot:6"].forEach(S.remove);
          ui.meta = loadMeta(); ui.settings = loadSettings(); applySettings(); ui.rt = null; show("title");
        } }),
        el("button", { class: "nb-btn", text: "Cancel", onclick: function () { confirmWipe.hidden = true; } })
      ])
    ]);
    panel.appendChild(el("div", { class: "nb-actions left" }, [el("button", { class: "nb-btn", text: "Erase all records…", onclick: function () { confirmWipe.hidden = false; } })]));
    panel.appendChild(confirmWipe);
    v.appendChild(panel);
  }

  /* ---------------- Claude connection (shared by Settings and Sandbox) ---------------- */

  function connectionBackend() {
    var backend = ui.settings.backend;
    if (!ui.backends.claude && backend === "claude") backend = "api";
    if (ui.inArtifact && backend === "api") backend = "claude";
    return backend;
  }
  function claudeSettings() {
    return { backend: connectionBackend(), tier: ui.settings.tier, model: ui.settings.model, apiKey: S.read("apikey", "") };
  }
  function claudeReady() {
    var b = connectionBackend();
    return b === "claude" ? !!ui.backends.claude : !!S.read("apikey", "");
  }
  function connectionControls(panel, s, set) {
    var backendOpts = [];
    if (ui.backends.claude) backendOpts.push(["claude", "Claude in this app"]);
    if (!ui.inArtifact) backendOpts.push(["api", "My Anthropic API key"]);
    var backend = s.backend;
    if (!ui.backends.claude && backend === "claude") backend = "api";
    if (ui.inArtifact && backend === "api") backend = "claude";
    if (backendOpts.length) panel.appendChild(setting("Connection", null, seg("Connection", backendOpts, backend, function (x) { set("backend", x); })));
    if (backend === "claude" && ui.backends.claude) {
      panel.appendChild(setting("Pace", "Quick answers in a second or two; Rich thinks first.", seg("Pace", [["quick", "Quick"], ["default", "Rich"]], s.tier, function (x) { set("tier", x); })));
    } else if (!ui.inArtifact) {
      var key = el("input", { type: "password", id: "nb-apikey", placeholder: "sk-ant-…", autocomplete: "off", value: S.read("apikey", "") });
      key.addEventListener("change", function () { var val = key.value.trim(); if (val) S.write("apikey", val); else S.remove("apikey"); toast("Saved", val ? "API key stored in this browser only." : "API key removed."); });
      panel.appendChild(setting("API key", "Stored only in this browser.", key));
      var models = el("select", { id: "nb-model", onchange: function (e) { set("model", e.target.value); } });
      NB.narrator.models.forEach(function (m) { models.appendChild(el("option", { value: m.id, selected: m.id === s.model, text: m.label })); });
      panel.appendChild(setting("Model", null, models));
      panel.appendChild(el("div", { class: "nb-note-box", text: "Requests go straight from this browser to Anthropic, billed to your key. If Claude can't be reached, the written text is used." }));
    }
  }

  /* ---------------- Sandbox mode ---------------- */

  function sandboxSave(st) { ui.sb.state = st; S.write("sandbox", st); }
  function sandboxLoad() { var st = S.read("sandbox", null); return st && st.v === 1 ? st : null; }

  function renderSandbox() {
    var v = $("nb-view-sandbox");
    clear(v);
    ui.sb = ui.sb || {};
    if (ui.sb.playing && ui.sb.state) return renderSandboxPlay(v);
    var saved = sandboxLoad();
    var auto = S.read("auto", null);
    var story = auto && auto.state && auto.state.vars;
    var panel = el("div", { class: "nb-panel nb-sb-intro" });
    panel.appendChild(backButton());
    panel.appendChild(el("p", { class: "eyebrow", text: "The fourth way to play" }));
    panel.appendChild(el("h2", { text: "Sandbox" }));
    panel.appendChild(el("p", { class: "lede", text: "The same city, the same people, the same night in the lane, and no written choices. Type what you do or say, and Claude plays the world: everyone in it has their own plans, and the story's events keep trying to happen unless you change them. Go anywhere. Talk to anyone. Portraits and places appear as you meet them." }));
    var set = function (k, val) { ui.settings[k] = val; saveSettings(); applySettings(); renderSandbox(); };
    panel.appendChild(el("h3", { text: "Connect Claude" }));
    connectionControls(panel, ui.settings, set);
    var ready = claudeReady();
    if (!ready) panel.appendChild(el("div", { class: "nb-note-box", text: connectionBackend() === "claude" ? "Claude in this app isn't available here. Add an API key instead." : "Sandbox needs Claude: add your Anthropic API key above. It stays in this browser. Sandbox needs an internet connection." }));
    panel.appendChild(el("h3", { text: "Begin" }));
    var name = el("input", { type: "text", id: "nb-sb-name", maxlength: "24", value: (story && story.name) || "Theo", "aria-label": "Your first name" });
    panel.appendChild(setting("Your first name", "Used when you start from the first night.", name));
    var actions = el("div", { class: "nb-actions left nb-sb-starts" });
    if (saved) actions.appendChild(el("button", { class: "nb-btn primary", text: "Continue my sandbox", disabled: !ready, onclick: function () { ui.sb.state = saved; ui.sb.playing = true; renderSandbox(); } }));
    actions.appendChild(el("button", { class: "nb-btn" + (saved ? "" : " primary"), text: "From the first night", disabled: !ready, onclick: function () {
      startSandbox(NB.sandbox.newState({ name: name.value.trim() || "Theo", look_skin: story ? story.look_skin || 0 : 0 }));
    } }));
    if (story) actions.appendChild(el("button", { class: "nb-btn", text: "From where my story is", disabled: !ready, onclick: function () { startSandbox(sandboxFromStory(auto.state)); } }));
    panel.appendChild(actions);
    if (saved) panel.appendChild(el("p", { class: "nb-sb-small", text: "Starting again replaces the sandbox you have (" + saved.turns.length / 2 + " turns). Your story saves are separate and never touched." }));
    panel.appendChild(el("div", { class: "nb-note-box", text: "Each turn is one request to Claude. With your own key it's billed to you: roughly a few cents a turn with Opus, less with Sonnet or Haiku." }));
    v.appendChild(panel);
  }

  function sandboxFromStory(state) {
    var vars = state.vars || {}, met = {}, bonds = {};
    Object.keys(state.met || {}).forEach(function (id) { if (state.met[id] && NB.sandbox.personById(id)) met[id] = true; });
    Object.keys(vars).forEach(function (k) {
      var m = /^(st|fr)_(\w+)$/.exec(k);
      if (m && vars[k] && NB.sandbox.personById(m[2])) bonds[m[2]] = vars[k];
    });
    var notes = (state.journal || []).slice(-12).map(function (h) { return NB.text.toPlain(h).slice(0, 240); });
    return NB.sandbox.newState({ name: vars.name || "Theo", look_skin: vars.look_skin || 0,
      date: state.date ? state.date + " " + (state.time || "20:00") : undefined,
      place: state.place || null, met: met, bonds: bonds, notes: notes, start: "story" });
  }

  function startSandbox(st) {
    ui.sb.state = st; ui.sb.playing = true; ui.sb.log = [];
    renderSandbox();
    sandboxTurn(NB.sandbox.opening(st), true);
  }

  function renderSandboxPlay(v) {
    var st = ui.sb.state;
    var log = el("article", { class: "nb-story nb-sb-log", id: "nb-sb-log", tabindex: "-1", "aria-label": "Sandbox story", "aria-live": "polite" });
    var pending = el("div", { class: "nb-sb-pending", id: "nb-sb-pending", hidden: true });
    var ta = el("textarea", { id: "nb-sb-input", rows: "3", maxlength: "1200", placeholder: "What do you do? (\"I go over to the sound desk and ask Nolan what's wrong\")", "aria-label": "What you do or say" });
    var send = el("button", { class: "nb-btn primary", type: "submit", id: "nb-sb-send" }, [el("span", { text: "Go" }), mark("arrow")]);
    var form = el("form", { class: "nb-sb-form", id: "nb-sb-form" }, [ta, el("div", { class: "nb-sb-row" }, [
      el("span", { class: "nb-sb-hint", text: "Enter to go · Shift+Enter for a new line" }),
      el("button", { class: "nb-btn", type: "button", text: "Undo last turn", onclick: sandboxUndo, disabled: st.turns.length < 4 }),
      el("button", { class: "nb-btn", type: "button", text: "Leave", onclick: function () { ui.sb.playing = false; show("title"); } }),
      send
    ])]);
    form.addEventListener("submit", function (e) { e.preventDefault(); var t = ta.value.trim(); if (!t || ui.sb.busy) return; ta.value = ""; sandboxTurn(t); });
    ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
    var side = el("aside", { class: "nb-reading-rail nb-sb-rail", "aria-label": "Sandbox" }, sandboxRail(st));
    v.appendChild(el("div", { class: "nb-reading-layout" }, [side, el("div", { class: "nb-reading-body" }, [log, pending, form])]));
    renderSandboxLog(log, NB.sandbox.replay(st));
    requestAnimationFrame(function () { root.scrollTo(0, doc.documentElement.scrollHeight); if (!ui.sb.busy) ta.focus({ preventScroll: true }); });
  }

  function sandboxRail(st) {
    var pl = NB.sandbox.placeById(st.place);
    var met = Object.keys(st.met);
    return [
      el("div", { class: "nb-rail-eyebrow", text: "Sandbox" }),
      el("h2", { class: "nb-rail-title", text: pl ? pl.name : "Calder" }),
      el("div", { class: "nb-rail-date", text: st.date ? cfg().fmtDate(st.date.slice(0, 10)) + " · " + st.date.slice(11) : "" }),
      met.length ? el("div", { class: "nb-sb-met" }, met.slice(-10).map(function (id) { return el("span", { class: "nb-sb-person", title: personName(id) }, [face(id, "neutral", 36)]); })) : null,
      st.notes.length ? el("details", { class: "nb-sb-notes" }, [el("summary", { text: "Notes (" + st.notes.length + ")" }), el("ul", {}, st.notes.slice(-12).reverse().map(function (n) { return el("li", { text: n }); }))]) : null
    ];
  }

  function renderSandboxLog(log, blocks) {
    var chunk = [];
    function flush() { if (chunk.length) { renderBlocks(log, chunk); chunk = []; } }
    blocks.forEach(function (b) {
      if (b.k === "you") { flush(); log.appendChild(el("p", { class: "nb-sb-you" }, [el("span", { class: "nb-sb-you-label", text: "You" }), el("span", { text: b.text })])); }
      else chunk.push(b);
    });
    flush();
  }

  function sandboxTurn(action, opening) {
    var st = ui.sb.state;
    var log = $("nb-sb-log"), pending = $("nb-sb-pending"), send = $("nb-sb-send");
    if (!log) return;
    ui.sb.busy = true;
    if (send) send.disabled = true;
    if (!opening) log.appendChild(el("p", { class: "nb-sb-you" }, [el("span", { class: "nb-sb-you-label", text: "You" }), el("span", { text: action })]));
    pending.hidden = false; clear(pending);
    var live = el("div", { class: "nb-sb-live" });
    var stop = el("button", { class: "nb-btn", type: "button", text: "Stop" });
    pending.appendChild(el("div", { class: "nb-sb-thinking", text: "The city answers…" }));
    pending.appendChild(live);
    pending.appendChild(stop);
    pending.scrollIntoView({ block: "end", behavior: quietMotion() ? "auto" : "smooth" });
    var ctl = root.AbortController ? new AbortController() : null;
    stop.addEventListener("click", function () { if (ctl) ctl.abort(); });
    NB.sandbox.turn(st, action, claudeSettings(), function (text) {
      clear(live);
      NB.sandbox.preview(text).forEach(function (p) { live.appendChild(el("p", { text: p })); });
    }, ctl ? ctl.signal : undefined).then(function (r) {
      ui.sb.busy = false;
      pending.hidden = true; clear(pending);
      sandboxSave(r.state);
      var mark0 = log.lastElementChild;
      renderBlocks(log, r.blocks);
      r.events.forEach(function (e) {
        if (e.kind === "note") toast("Noted", e.text, null, "clue");
        if (e.kind === "bond" && e.delta > 0) toast(personName(e.id), "That mattered.", e.id);
      });
      var view = r.blocks.filter(function (b) { return b.k === "view"; }).pop();
      if (view) setBackdrop(view.id);
      var rail = doc.querySelector(".nb-sb-rail");
      if (rail) { clear(rail); sandboxRail(r.state).forEach(function (n) { if (n) rail.appendChild(n); }); }
      var firstNew = mark0 ? mark0.nextElementSibling : log.firstElementChild;
      var frame = firstNew && firstNew.querySelector && (firstNew.matches(".nb-art") ? firstNew.querySelector("img") : null);
      if (send) send.disabled = false;
      var undo = doc.querySelector(".nb-sb-form .nb-btn:not(.primary)");
      if (undo) undo.disabled = r.state.turns.length < 4;
      if (frame && ui.settings.arrivals && !quietMotion()) arrive(frame);
      else if (firstNew && firstNew.scrollIntoView) firstNew.scrollIntoView({ block: "start", behavior: quietMotion() ? "auto" : "smooth" });
      var ta = $("nb-sb-input"); if (ta) ta.focus({ preventScroll: true });
    }, function (err) {
      ui.sb.busy = false;
      if (send) send.disabled = false;
      clear(pending);
      pending.appendChild(el("div", { class: "nb-note-box", text: err && err.code === "cancelled" ? "Stopped. Nothing happened; try again or do something else." : (err && err.message) || "Claude couldn't be reached." }));
      if (!opening) { var you = log.lastElementChild; if (you && you.classList.contains("nb-sb-you")) log.removeChild(you); var ta = $("nb-sb-input"); if (ta) ta.value = action; }
      else pending.appendChild(el("button", { class: "nb-btn primary", type: "button", text: "Try again", onclick: function () { sandboxTurn(action, true); } }));
    });
  }

  function sandboxUndo() {
    var st = ui.sb.state;
    if (!st || ui.sb.busy || st.turns.length < 4) return;
    sandboxSave(NB.sandbox.undo(st));
    renderSandbox();
    toast("Undone", "Your last turn never happened.");
  }

  /* ---------------- menu & about ---------------- */

  function renderMenu() {
    var v = $("nb-view-menu");
    clear(v);
    var game = inGame();
    var confirmBox = el("div", { class: "nb-note-box", hidden: true }, [
      el("div", { text: "Start again from the beginning? Your autosave will be replaced." }),
      el("div", { class: "nb-actions left" }, [
        el("button", { class: "nb-btn primary", text: "Start over", onclick: function () { newGame(false); } }),
        el("button", { class: "nb-btn", text: "Cancel", onclick: function () { confirmBox.hidden = true; } })
      ])
    ]);
    v.appendChild(el("div", { class: "nb-panel" }, [
      backButton(),
      el("h2", { text: "Menu" }),
      el("div", { class: "nb-slots" }, [
        game ? el("button", { class: "nb-btn", text: "Back to the story", onclick: function () { show("story"); } }) : null,
        el("button", { class: "nb-btn", text: "Settings", onclick: function () { show("settings"); } }),
        el("button", { class: "nb-btn", text: "Saves & chapter bookmarks", onclick: function () { show("saves"); } }),
        el("button", { class: "nb-btn", text: "Endings & achievements", onclick: function () { show("gallery"); } }),
        ui.meta.finished > 0 ? el("button", { class: "nb-btn", text: "The story map", onclick: function () { show("map"); } }) : null,
        el("button", { class: "nb-btn", text: "How to play", onclick: function () { show("about"); } }),
        el("button", { class: "nb-btn", text: "Start over…", onclick: function () { confirmBox.hidden = false; } }),
        confirmBox,
        el("button", { class: "nb-btn", text: "Title screen", onclick: function () { show("title"); } })
      ])
    ]));
  }

  function renderAbout() {
    var v = $("nb-view-about");
    clear(v);
    v.appendChild(el("div", { class: "nb-panel" }, [backButton(), el("h2", { text: "How to play" }), el("div", { class: "prose", html: cfg().aboutHTML }), backButton()]));
  }

  /* ---------------- boot ---------------- */


  function buildShell(mount) {
    var bar = el('header', { class: 'nb-bar' }, [
      el('div', { class: 'nb-bar-inner' }, [
        el('button', { class: 'nb-brand', type: 'button', 'aria-label': 'Calder title screen', onclick: function () { show('title'); } }, [el('span', { class: 'nb-sigil', 'aria-hidden': 'true' }), el('span', { class: 't', text: cfg().title })]),
        el('span', { class: 'nb-hud', id: 'nb-hud', hidden: true }),
        el('span', { class: 'nb-cover-label', text: 'An interactive novel' }),
        el('nav', { id: 'nb-bar-game', class: 'nb-seg', hidden: true, 'aria-label': 'Game' }, [
          el('button', { class: 'nb-btn', id: 'nb-btn-stats', type: 'button', onclick: function () { toggleView('stats'); } }, [mark('person'), el('span', { text: 'Stats' })]),
          el('button', { class: 'nb-btn', id: 'nb-btn-journal', type: 'button', onclick: function () { toggleView('journal'); } }, [mark('book'), el('span', { text: 'Journal' })]),
          el('button', { class: 'nb-btn', id: 'nb-btn-saves', type: 'button', onclick: function () { toggleView('saves'); } }, [mark('save'), el('span', { text: 'Saves' })]),
          el('button', { class: 'nb-btn', id: 'nb-btn-menu', type: 'button', onclick: function () { toggleView('menu'); } }, [mark('menu'), el('span', { text: 'Menu' })])
        ])
      ]),
      el('progress', { id: 'nb-page-progress', class: 'nb-page-progress', max: '100', value: '0', 'aria-label': 'Reading progress on this page' })
    ]);
    var main = el('main', { class: 'nb-main', id: 'nb-main', tabindex: '-1' }, [
      el('section', { class: 'nb-view', id: 'nb-view-title', 'aria-label': 'Title' }),
      el('section', { class: 'nb-view', id: 'nb-view-story', 'aria-label': 'Story', hidden: true }, [
        el('div', { class: 'nb-reading-layout' }, [el('aside', { class: 'nb-reading-rail', id: 'nb-reading-rail', 'aria-label': 'Current chapter' }), el('div', { class: 'nb-reading-body', id: 'nb-reading-body' }, [
          el('article', { class: 'nb-story', id: 'nb-story', tabindex: '-1', 'aria-label': 'Story passage' }),
          el('div', { id: 'nb-choices' }),
          el('div', { class: 'nb-page-end', 'aria-hidden': 'true' }, [el('span', { class: 'nb-sigil' })])
        ])])
      ])
    ]);
    VIEWS.filter(function (name) { return name !== 'title' && name !== 'story'; }).forEach(function (name) { main.appendChild(el('section', { class: 'nb-view', id: 'nb-view-' + name, 'aria-label': name, hidden: true })); });
    mount.appendChild(el('div', { class: 'nb-backdrop', id: 'nb-backdrop', 'aria-hidden': 'true' }));
    mount.appendChild(el('a', { class: 'nb-skip', href: '#nb-main', text: 'Skip to content' }));
    mount.appendChild(bar); mount.appendChild(main);
    mount.appendChild(el('button', { class: 'nb-btn nb-focus-exit', id: 'nb-focus-exit', type: 'button', hidden: true, onclick: toggleFocus }, [mark('focus'), el('span', { text: 'Exit focus mode' })]));
    mount.appendChild(el('div', { class: 'nb-toast', id: 'nb-toast', 'aria-live': 'polite', 'aria-atomic': 'true' }));
    mount.appendChild(el('div', { class: 'visually-hidden', id: 'nb-announcer', role: 'status' }));
    var queued = false;
    root.addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(function () { updateReadingProgress(); queued = false; }); } }, { passive: true });
    root.addEventListener('resize', function () { fitArt(); updateReadingProgress(); });
    mount.addEventListener('load', function (e) { if (e.target.tagName === 'IMG') fitArt(e.target.parentElement); }, true);
  }


  function keyboard(e) {
    if (ui.view !== 'story' || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || doc.querySelector('dialog[open]')) return;
    var t = e.target;
    if (t && (t.isContentEditable || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || (t.tagName === 'INPUT' && t.type !== 'radio'))) return;
    if (/^[1-9]$/.test(e.key) && ui.selectOption) { ui.selectOption(Number(e.key) - 1); e.preventDefault(); }
    else if (e.key === 'Enter' && !(t && t.closest('button, a, summary'))) {
      var btn = $('nb-next');
      if (btn && !btn.disabled) { btn.click(); e.preventDefault(); }
    }
  }

  function boot(mount) {
    ui.story = NB.buildStory();
    ui.settings = loadSettings();
    ui.meta = loadMeta();
    ui.inArtifact = !!(root.claude && typeof root.claude.use === "function");
    applySettings();
    buildShell(mount || doc.body);
    renderAbout();
    doc.addEventListener("keydown", keyboard);
    show("title");
    if (NB.narrator) {
      NB.narrator.availability().then(function (b) {
        ui.backends = b;
        if (ui.view === "settings") renderSettings();
      });
    }
  }

  // Testing hook: jump straight to a scene (and optionally set variables) in the current game.
  function jump(scene, label, vars) {
    if (!ui.rt || !ui.rt.state) return;
    Object.keys(vars || {}).forEach(function (k) { ui.rt.state.vars[k] = vars[k]; });
    ui.rt.gotoScene(scene, label);
    act(function () { return ui.rt.run(null); });
  }

  NB.ui = { boot: boot, _ui: ui, _jump: jump };
})(window);
