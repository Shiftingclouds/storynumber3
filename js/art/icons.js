/* Nuit Blanche — tiny pixel icons for the interface (hearts, flames, snowflakes, wishes...).
 * Each icon is a small string grid; letters map to palette colours. NB.icons.url(name) -> data URL.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;

  var PAL = {
    k: "#1a0f1f", r: "#e8284a", R: "#ff7a8e", d: "#8a1230", g: "#4a3f55", G: "#6d6180", w: "#ffffff",
    b: "#2b2233", B: "#55465f", o: "#ff8a2a", y: "#ffd24a", Y: "#fff2a8", s: "#cfe3ff", S: "#8fb2e6", t: "#5a7ab0",
    m: "#b9a8c9", M: "#e8dcf2", n: "#7a6a8c", c: "#d9a441", C: "#8f6420", p: "#b8ffcf", q: "#4ecb68"
  };

  var ICONS = {
    heart: [
      ".kk.kk.",
      "kRrkrrk",
      "kRrrrrk",
      "krrrrdk",
      ".krrdk.",
      "..kdk..",
      "...k..."
    ],
    heart_half: [
      ".kk.kk.",
      "kRrkGGk",
      "kRrgGGk",
      "krrgGGk",
      ".krgGk.",
      "..kgk..",
      "...k..."
    ],
    heart_empty: [
      ".kk.kk.",
      "kGGkGGk",
      "kGggggk",
      "kgggggk",
      ".kgggk.",
      "..kgk..",
      "...k..."
    ],
    heart_broken: [
      ".kk.kk.",
      "kBbkkbk",
      "kBbkbbk",
      "kbbkbbk",
      ".kbkbk.",
      "..kbk..",
      "...k..."
    ],
    flame: [
      "...k...",
      "..kyk..",
      ".kyok..",
      ".koYok.",
      "koYYok.",
      "koYYYok",
      ".kooOk.".replace("O", "o"),
      "..kkk.."
    ],
    flame_empty: [
      "...k...",
      "..kGk..",
      ".kGgk..",
      ".kggGk.",
      "kgggGk.",
      "kggggGk",
      ".kgggk.",
      "..kkk.."
    ],
    flake: [
      "...s...",
      ".s.s.s.",
      "..sSs..",
      "ssSwSss",
      "..sSs..",
      ".s.s.s.",
      "...s..."
    ],
    flake_gone: [
      ".......",
      "...t...",
      "...t...",
      ".ttttt.",
      "...t...",
      "...t...",
      "......."
    ],
    wish: [
      "..MMm..",
      ".M...m.",
      ".m..Mm.",
      "..mMm..",
      "...m...",
      ".ccCc..",
      "cccccCC",
      ".CCCCC."
    ],
    wish_empty: [
      "..nn...",
      ".n..n..",
      "....n..",
      "..nn...",
      ".......",
      ".gggg..",
      "gggggGG",
      ".GGGGG."
    ],
    clue: [
      ".kkkk..",
      "kYYYYk.",
      "kYkkYk.",
      "kYYYYk.",
      "kYkkYk.",
      "kYYYYk.",
      ".kkkk.."
    ],
    key: [
      ".cc....",
      "c..c...",
      "c..cccc",
      ".cc..cC",
      "......C"
    ],
    follet: [
      "..p..",
      ".pqp.",
      "pqwqp",
      ".pqp.",
      "..p.."
    ]
  };

  function draw(name) {
    var g = ICONS[name];
    if (!g) throw new Error("No icon " + name);
    var h = g.length, w = g[0].length;
    var c = P.canvas(w, h);
    for (var y = 0; y < h; y++) for (var x = 0; x < w; x++) {
      var ch = g[y][x];
      if (ch !== "." && PAL[ch]) c.set(x, y, PAL[ch]);
    }
    return c;
  }

  NB.icons = {
    names: Object.keys(ICONS),
    draw: draw,
    url: function (name) { return P.toDataURL(draw(name), "i:" + name); }
  };
})(typeof window !== "undefined" ? window : globalThis);
