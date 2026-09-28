/* Calder engine (from Nuit Blanche) — the optional Claude features. Nothing here is ever required: every caller falls back to
 * the written text when Claude can't be reached.
 *   retell(passage, facts, settings, onText, signal)  the Living narrator: the same page in a chosen voice
 *   speak(options, words, context, settings)            "your own words": map typed dialogue to a written option
 *   ask(question, known, settings, onText, signal)      ask your own case notes, limited to what you've discovered
 * Two backends: "claude" (the claude.ai app's sample() capability) and "api" (the official Anthropic SDK, loaded on
 * demand from jsDelivr, with the player's own key).
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});

  var SDK_URL = "https://cdn.jsdelivr.net/npm/@anthropic-ai/sdk/+esm";

  var VOICES = {
    faithful: { label: "Faithful", desc: "Close to the page, freshly worded.",
      text: "Stay close to the original's tone and rhythm; change the wording, imagery and sentence shapes so it reads as a fresh telling of the same moment." },
    noir: { label: "Night city", desc: "Sodium light, wet streets, low voices.",
      text: "Urban night: clipped and observant, streetlight, rain, the city's noise. A narrator who notices exits. Never undercut real grief." },
    lush: { label: "Lush", desc: "Warmth, texture, longing.",
      text: "Sensory and warm: fabric, breath, light, weather on skin. Longer sentences where the moment lingers. Never purple." },
    wry: { label: "Wry", desc: "Dry, quick, nineteen.",
      text: "Dry and quietly funny, the way a nineteen-year-old deflects. Humour must never undercut danger or grief." },
    gothic: { label: "Uncanny", desc: "Old stone, bad quiet, things just out of sight.",
      text: "Uncanny: dread, old buildings, the wrongness of the returned dead. Atmosphere over melodrama." },
    spare: { label: "Spare", desc: "Terse. Every word earns its place.",
      text: "Spare and exact. Short declarative sentences. Cut adjectives. Let silences do the work." }
  };

  var GLOSSARY = [
    "Setting: Calder, an unnamed modern English-speaking city (British spelling), from late August to March. Under the ordinary city live wardens (Mercy House), vampires (the Regent), werewolf families (Eastbank), spell-workers (University Hill), and the Marches, another country reached through controlled crossings.",
    "The narrator is 'sensitive': he feels people's emotions as weather, catches echoes from objects and places, and feels the threads between people. He can never read thoughts, detect lies, or read how anyone feels about him.",
    "Places: Switchyard (a music venue), the Latch Lane print shop, Double Shift Café, Mercy House, the Regent, the Iron Footbridge, Pump Nine, Okafor Restoration, Serrano Yard, Lyle's Bakery, Calder General, Northline Station, Sorrell House, Bracken Court, Stillwater Docks.",
    "Names to spell exactly: Adrian Keene, Micah Serrano, Ellis Okafor, Dominic Bell, Nolan Voss, Ansel Marr, Quentin Shaw, Reuben Pike, Martin and Will Avery, Gideon Shaw, Damian Holt, Armand Sorrell, Silas Fenwick, Felix Brecht, Eamon Kerr, Hugo Naranjo, Clive Merritt, Benoît Marchand, Lucien Arnaud."
  ].join("\n");

  var RULES = [
    "You are the narrator of CALDER, an interactive novel: first person, present tense ('I'), young-adult voice that can carry mature themes, literary but readable.",
    "Retell the PASSAGE in the requested VOICE. Your telling replaces the original on the page.",
    "Hard rules:",
    "1. Keep every event, fact, name, number, object, relationship and consequence. Add nothing new: no new events, people, objects, backstory, foreshadowing or information. Remove nothing that matters.",
    "2. First person ('I'), present tense, unless the original uses past tense for memories. The narrator is a man (he/him) whose name is given below.",
    "3. Dialogue: keep who says what and what it means. Keep short lines and key phrases exactly; you may lightly rephrase longer speech. Keep each character's voice.",
    "4. Never state or imply that another character is gay or attracted to the narrator unless the passage does. Never have the narrator's gift read someone's feelings about him.",
    "5. Do not mention choices, options, stats, the player, or the act of retelling. Do not summarise; narrate.",
    "6. Keep roughly the same length (within a quarter) and a similar number of paragraphs.",
    "7. Output ONLY the retold passage as plain paragraphs separated by one blank line. Use *asterisks* for emphasis sparingly. No headings, no preamble."
  ].join("\n");

  function playerLine(facts) {
    return "Player character: " + facts.name + " " + (facts.surname || "") + " (" + facts.pronouns + "), " + facts.background + ".";
  }

  /* ---------------- backends ---------------- */

  var samplePromise = null;
  function getSample() {
    if (!samplePromise) {
      if (root.claude && typeof root.claude.use === "function") {
        samplePromise = Promise.resolve(root.claude.use("sample")).catch(function () { return null; });
      } else {
        samplePromise = Promise.resolve(null);
      }
    }
    return samplePromise;
  }

  var sdkPromise = null;
  function getSDK() {
    if (!sdkPromise) {
      sdkPromise = import(SDK_URL).then(function (mod) { return mod.default || mod.Anthropic; });
      sdkPromise.catch(function () { sdkPromise = null; });
    }
    return sdkPromise;
  }

  /** Which backends can run here. Resolves {claude: bool, api: true}. */
  function availability() {
    return getSample().then(function (s) { return { claude: !!s, api: true }; });
  }

  function friendly(Anthropic, err) {
    if (err && err.code) return err;
    var msg = "Claude is unavailable.";
    if (Anthropic) {
      if (Anthropic.AuthenticationError && err instanceof Anthropic.AuthenticationError) msg = "Your API key was rejected.";
      else if (Anthropic.PermissionDeniedError && err instanceof Anthropic.PermissionDeniedError) msg = "This API key can't use that model.";
      else if (Anthropic.NotFoundError && err instanceof Anthropic.NotFoundError) msg = "That model isn't available to this key.";
      else if (Anthropic.RateLimitError && err instanceof Anthropic.RateLimitError) msg = "Rate limited. Try again in a moment.";
      else if (Anthropic.APIUserAbortError && err instanceof Anthropic.APIUserAbortError) msg = "cancelled";
      else if (Anthropic.APIConnectionError && err instanceof Anthropic.APIConnectionError) msg = "Couldn't reach the Claude API (offline?).";
    }
    if (err && err.name === "AbortError") msg = "cancelled";
    return { code: msg === "cancelled" ? "cancelled" : "api_error", message: msg };
  }

  /** One completion through whichever backend is selected. Streams text through onText if given. */
  function complete(system, user, settings, onText, signal, maxTokens) {
    return converse(system, [{ role: "user", content: user }], settings, onText, signal, maxTokens);
  }

  /** A conversation (alternating user/assistant messages, ending with the user) through the selected backend. */
  function converse(system, messages, settings, onText, signal, maxTokens) {
    if (settings.backend === "claude") {
      var flat = messages.length === 1 ? messages[0].content : messages.map(function (m) {
        return (m.role === "user" ? "PLAYER:\n" : "YOU WROTE:\n") + m.content;
      }).join("\n\n") + "\n\nContinue: write only your next reply.";
      return getSample().then(function (sample) {
        if (!sample) throw { code: "unavailable", message: "Claude in the app is not available here." };
        return sample(system + "\n\n" + flat, {
          onText: onText ? function (u) { onText(u.text); } : undefined,
          signal: signal,
          modelTier: settings.tier === "default" ? "default" : "quick",
          cache: settings.fresh ? false : true
        }).then(function (res) { return res.text; });
      });
    }
    if (!settings.apiKey) return Promise.reject({ code: "no_key", message: "Add an Anthropic API key in Settings." });
    return getSDK().then(function (Anthropic) {
      var client = new Anthropic({ apiKey: settings.apiKey, dangerouslyAllowBrowser: true });
      var model = settings.model || "claude-opus-5";
      var params = {
        model: model,
        max_tokens: maxTokens || 16000,
        system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
        messages: messages.map(function (m, i) {
          // cache the conversation so far too: each turn re-reads it
          return i === messages.length - 2 ? { role: m.role, content: [{ type: "text", text: m.content, cache_control: { type: "ephemeral" } }] } : { role: m.role, content: m.content };
        })
      };
      if (model === "claude-opus-5" || model === "claude-sonnet-5") params.output_config = { effort: "low" };
      var stream;
      if (model === "claude-opus-5") {
        params.betas = ["server-side-fallback-2026-07-01"];
        params.fallbacks = "default";
        stream = client.beta.messages.stream(params, { signal: signal });
      } else {
        stream = client.messages.stream(params, { signal: signal });
      }
      var text = "";
      return (async function () {
        for await (var ev of stream) {
          if (ev.type === "content_block_start" && ev.content_block && ev.content_block.type === "fallback") {
            text = "";
          } else if (ev.type === "content_block_delta" && ev.delta && ev.delta.type === "text_delta") {
            text += ev.delta.text;
            if (onText) onText(text);
          }
        }
        var final = await stream.finalMessage();
        if (final.stop_reason === "refusal") throw { code: "refused", message: "Claude declined this one." };
        return text;
      })().catch(function (err) { throw friendly(Anthropic, err); });
    }, function () {
      throw { code: "sdk_load", message: "Couldn't load the Claude SDK (offline?)." };
    });
  }

  /* ---------------- the three features ---------------- */

  function retell(passage, facts, settings, onText, signal) {
    var voice = VOICES[settings.voice] || VOICES.faithful;
    var user = playerLine(facts) + "\nVOICE: " + voice.label + " — " + voice.text + "\n\nPASSAGE:\n<<<\n" + passage + "\n>>>";
    return complete(RULES + "\n\n" + GLOSSARY, user, settings, onText, signal);
  }

  /**
   * Map the player's own words to one of the written options.
   * options: [{index, text}] (enabled options only). Resolves {index, line}.
   */
  function speak(options, words, context, settings) {
    var system = [
      "You help run an interactive novel. The player has typed what their character says instead of picking a written option.",
      "Choose the ONE listed option whose meaning, tone and intent is closest to what the player typed. Then tidy the player's words into a single line of dialogue the character says: keep their meaning and voice, fix only typos, keep it under 40 words, no quotation marks.",
      "Reply with JSON only: {\"option\": <number>, \"line\": \"...\"}"
    ].join("\n");
    var user = "Context: " + context + "\n\nOPTIONS:\n" + options.map(function (o) { return o.index + ". " + o.text; }).join("\n") +
      "\n\nTHE PLAYER TYPED:\n" + String(words).slice(0, 400);
    return complete(system, user, settings, null, undefined, 400).then(function (text) {
      var m = /\{[\s\S]*\}/.exec(text || "");
      if (!m) throw { code: "parse", message: "Couldn't understand the reply." };
      var obj = JSON.parse(m[0]);
      var ok = options.some(function (o) { return o.index === obj.option; });
      if (!ok) throw { code: "parse", message: "Couldn't match your words to a choice." };
      return { index: obj.option, line: String(obj.line || words).replace(/^["“]|["”]$/g, "").slice(0, 280) };
    });
  }

  /** Ask the case notes a question: answered only from what the player has discovered. */
  function ask(question, known, settings, onText, signal) {
    var system = [
      "You summarise a player's own case notes in an interactive novel set in the city of Calder.",
      "Answer in 1–4 sentences, plainly, in the first person as the narrator thinking it over. You may ONLY use facts from WHAT I KNOW below. If the notes don't answer it, say you don't know yet.",
      "Never invent facts, never reveal anything not in the notes."
    ].join("\n");
    var user = "WHAT I KNOW:\n" + known + "\n\nI ASK MYSELF:\n" + String(question).slice(0, 300);
    return complete(system, user, settings, onText, signal, 600);
  }

  /** Convert plain retold text into paragraph HTML strings. */
  function toParagraphs(text) {
    return String(text).trim().split(/\n\s*\n/).map(function (p) {
      var h = NB.text.escapeHTML(p.replace(/\s*\n\s*/g, " ").trim());
      h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
      return NB.text.smartQuotes(h);
    }).filter(function (p) { return p.length; });
  }

  NB.narrator = {
    _setSDK: function (Ctor) { sdkPromise = Promise.resolve(Ctor); },
    voices: VOICES,
    availability: availability,
    retell: retell,
    converse: converse,
    speak: speak,
    ask: ask,
    toParagraphs: toParagraphs,
    models: [
      { id: "claude-opus-5", label: "Claude Opus 5 (best prose)" },
      { id: "claude-sonnet-5", label: "Claude Sonnet 5 (faster)" },
      { id: "claude-haiku-4-5", label: "Claude Haiku 4.5 (fastest, cheapest)" }
    ]
  };
})(typeof window !== "undefined" ? window : globalThis);
