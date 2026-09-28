#!/usr/bin/env node
// Renders Calder's pixel art to PNG: native-size masters in art/, and enlarged review sheets in docs/art/.
//   node tools/art.js pilot            the three-face pilot (neutral + one expression each) and the lane
//   node tools/art.js turn <id>        construction views of one head (front, three-quarter, profile)
//   node tools/art.js face <id> [ex]   one portrait, native and ×4
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { encode } = require("./png");

const ROOT = path.resolve(__dirname, "..");
const sandbox = { console, Math, JSON };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ["js/art/pixel.js", "js/art/sculpt.js", "js/art/faces.js", "js/art/places.js", "js/art/kit.js", "js/art/views.js"]) {
  const p = path.join(ROOT, f);
  if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
}
const NB = sandbox.NB;
const P = NB.pixel;

function save(file, c, scale) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, encode(c.w, c.h, c.data, scale || 1));
  console.log("wrote " + path.relative(ROOT, file) + (scale > 1 ? ` (×${scale})` : ""));
}
function sheet(tiles, cols, pad, bg) {
  const tw = Math.max(...tiles.map((t) => t.w)), th = Math.max(...tiles.map((t) => t.h));
  const rows = Math.ceil(tiles.length / cols);
  const c = P.canvas(cols * (tw + pad) + pad, rows * (th + pad) + pad);
  c.fill(bg || "#2b2833");
  tiles.forEach((t, i) => c.blit(t, pad + (i % cols) * (tw + pad), pad + Math.floor(i / cols) * (th + pad)));
  return c;
}
function onBg(c, bg) {
  const o = P.canvas(c.w, c.h);
  o.fill(Array.isArray(bg) ? bg[0] : bg || "#3a3644");
  o.blit(c, 0, 0);
  return o;
}

const [cmd, id, ex] = process.argv.slice(2);
const t0 = Date.now();
if (cmd === "turn") {
  const spec = NB.faces.specs[id || "test"];
  const tiles = [0, -24, -90].map((yaw) => onBg(NB.faces.draw(spec, "neutral", { pose: { yaw, bodyYaw: yaw * 0.4 } })));
  save(path.join(ROOT, "docs/art/wip", `turn-${id || "test"}.png`), sheet(tiles, 3, 4), 3);
} else if (cmd === "face") {
  const exs = (ex || "neutral").split(",");
  const tiles = exs.map((e) => onBg(NB.faces.draw(id, e), NB.faces.specs[id].bg));
  save(path.join(ROOT, "docs/art/wip", `${id}-${exs.join("-")}.png`), tiles.length > 1 ? sheet(tiles, tiles.length, 2) : tiles[0], exs.length > 2 ? 2 : 3);
} else if (cmd === "place") {
  const ids = (id || "switchyard_lane").split(",");
  const tiles = ids.map((i) => { const c = NB.places.draw(i); save(path.join(ROOT, "art/places", `${i.replace(/_/g, "-")}.png`), c, 1); return c; });
  save(path.join(ROOT, "docs/art/wip", `place-${ids.length > 1 ? "sheet" : ids[0]}.png`), tiles.length > 1 ? sheet(tiles, 2, 3) : tiles[0], ids.length > 1 ? 2 : 3);
} else if (cmd === "variant") {
  // node tools/art.js variant iron_footbridge winter  -> art/places/iron-footbridge-winter.png (view id iron_footbridge_winter)
  const flag = ex;
  const c = NB.places.draw(id, { [flag]: true });
  save(path.join(ROOT, "art/places", `${id.replace(/_/g, "-")}-${flag}.png`), c, 1);
  save(path.join(ROOT, "docs/art/wip", `place-${id}-${flag}.png`), c, 3);
} else if (cmd === "places") {
  const tiles = NB.places.ids.map((i) => { const c = NB.places.draw(i); save(path.join(ROOT, "art/places", `${i.replace(/_/g, "-")}.png`), c, 1); return c; });
  save(path.join(ROOT, "docs/art", "places.png"), sheet(tiles, 3, 3), 1);
} else if (cmd === "icon") {
  // the app icon: a moon over the Iron Footbridge's truss, and the river under it. 32 × 32, drawn by hand.
  function icon(n) {
    const k = n / 32, c = P.canvas(n, n);
    c.vgrad(0, 0, n, Math.round(20 * k), ["#0e0c24", "#1f1a4e", "#5e3f9e", "#b04a8a"]);
    c.vgrad(0, Math.round(20 * k), n, n - Math.round(20 * k), ["#2a2262", "#1e2a62", "#0e0c24"]);
    c.ellipse(Math.round(22 * k), Math.round(8 * k), Math.round(4 * k), Math.round(4 * k), "#f4ecd2");
    // the deck, the truss above it, two brick piers
    c.rect(0, Math.round(18 * k), n, Math.max(1, Math.round(2 * k)), "#3a2a6a");
    c.hline(0, n - 1, Math.round(13 * k), "#3ce8e8");
    for (let x = 0; x < 32; x += 4) { c.line(Math.round(x * k), Math.round(18 * k), Math.round((x + 4) * k), Math.round(13 * k), "#3ce8e8"); c.vline(Math.round(x * k), Math.round(13 * k), Math.round(18 * k), "#2a8a9a"); }
    [[4, 9], [24, 29]].forEach(([a, b]) => c.rect(Math.round(a * k), Math.round(20 * k), Math.round((b - a) * k), Math.round(12 * k), "#a8403a"));
    // lamps on the deck, and their reflections
    [12, 16, 20].forEach((x) => { c.set(Math.round(x * k), Math.round(17 * k), "#ffcf80"); for (let y = 23; y < 31; y += 2) c.set(Math.round(x * k), Math.round(y * k), "#ffcf80"); });
    // the green seam of the door in the pier
    c.vline(Math.round(26 * k), Math.round(23 * k), Math.round(27 * k), "#7af07a");
    return c;
  }
  const small = icon(32), big = icon(128);
  save(path.join(ROOT, "favicon.png"), small, 1);
  save(path.join(ROOT, "art", "icon-128.png"), big, 1);
  save(path.join(ROOT, "docs/art/wip", "icon.png"), small, 8);
} else if (cmd === "pilot") {
  const pilot = [["c01", "adrian"], ["c02", "micah"], ["c03", "ellis"]];
  const tiles = [];
  for (const [cid, name] of pilot) {
    const spec = NB.faces.specs[cid];
    for (const e of ["neutral", spec.pilotExpression]) {
      const c = NB.faces.draw(cid, e);
      save(path.join(ROOT, "art/portraits", `${cid}-${name}-${e}.png`), c, 1);
      tiles.push(onBg(c, spec.bg));
    }
  }
  save(path.join(ROOT, "docs/art", "pilot-portraits.png"), sheet(tiles, 6, 4), 3);
  if (NB.places) {
    const lane = NB.places.draw("switchyard_lane");
    save(path.join(ROOT, "art/places", "switchyard-lane.png"), lane, 1);
    save(path.join(ROOT, "docs/art", "pilot-lane.png"), lane, 3);
  }
}
console.log(`${Date.now() - t0} ms`);
