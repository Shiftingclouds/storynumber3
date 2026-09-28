/* Calder — the place-building kit: a scene builder, surface textures, skies, a shared master palette and overlay
 * helpers, so every view in js/art/views.js is short authored geometry rather than renderer code.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var K = NB.places.kit, P = NB.pixel;
  var rgb = K.rgb, lerp = K.lerp, hash = K.hash, vnoise = K.vnoise;
  var cache = {};
  function c(h) { return cache[h] || (cache[h] = rgb(h)); }
  function hex(v) { return "#" + v.map(function (x) { return ("0" + Math.max(0, Math.min(255, Math.round(x * 255))).toString(16)).slice(-2); }).join(""); }

  /* ---------------------------------------------------------------- the master palette
   * Hue-shifted ramps (shadows lean indigo, lights lean warm cream) for every family the city needs, plus neon.
   */
  var DARK = rgb("#120e28"), LIGHT = rgb("#fff4d8");
  function ramp(mid) {
    var m = rgb(mid), out = [];
    [0.2, 0.42, 0.66].forEach(function (t) { out.push(hex(lerp(DARK, m, t))); });
    out.push(mid);
    [0.3, 0.58, 0.82].forEach(function (t) { out.push(hex(lerp(m, LIGHT, t))); });
    return out;
  }
  var FAMILIES = ["#4a3a9a", "#2e5ab8", "#2a8a9a", "#3a9a5a", "#7a9a3a", "#d0a030", "#e07030", "#b03a34", "#c0407a", "#7a4a8a",
    "#8a5a3a", "#6a6a86", "#8a7a6a", "#5a8ad0", "#e8c8a0"];
  var PALETTE = [];
  FAMILIES.forEach(function (f) { ramp(f).forEach(function (h) { if (PALETTE.indexOf(h) < 0) PALETTE.push(h); }); });
  PALETTE.push("#0a0818", "#ffffff", "#ff4fa0", "#ff86c2", "#3ce8e8", "#9af4f0", "#ffe14a", "#ff6a3a", "#7af07a", "#f4ecd2", "#cfc6ae");

  /* ---------------------------------------------------------------- materials */
  var M = {
    flat: function (h, extra) { var a = c(h); return function () { var r = { albedo: a }; for (var k in extra || {}) r[k] = extra[k]; return r; }; },
    emit: function (h, base) { var e = c(h), b = c(base || "#000000"); return function () { return { albedo: b, emit: e }; }; },
    brick: function (base, mortar, o) {
      o = o || {}; var B = c(base), Mo = c(mortar), ch = o.h || 0.075, cl = o.w || 0.23, vary = o.vary === undefined ? 1 : o.vary;
      return function (h, sc) {
        var u = h.uv[0], v = h.uv[1], fp = h.t / sc.cam.f;
        var row = Math.floor(v / ch), off = (row % 2) * cl * 0.5, col = Math.floor((u + off) / cl);
        var n = hash(col, row);
        var a = lerp(B, K.scale(B, 0.8 + 0.35 * vary * n), 0.9);
        if (ch / fp > 2.6) { var fu = (u + off) / cl - col, fv = v / ch - row; if (fv < 0.14 || fu < 0.05) a = Mo; }
        return { albedo: a };
      };
    },
    planks: function (base, o) {
      o = o || {}; var B = c(base), w = o.w || 0.18, gap = c(o.gap || "#2a1a18");
      return function (h, sc) {
        var u = o.axis === "v" ? h.uv[1] : h.uv[0], v = o.axis === "v" ? h.uv[0] : h.uv[1];
        if (h.obj.ax === 1 || (h.face >> 1) === 1) { u = o.along === "x" ? h.p[2] : h.p[0]; v = o.along === "x" ? h.p[0] : h.p[2]; }
        var k = Math.floor(u / w), fp = h.t / sc.cam.f;
        var n = hash(k, Math.floor(v / 1.6 + hash(k, 3) * 3));
        if (w / fp > 3 && u / w - k < 0.1) return { albedo: gap };
        return { albedo: K.scale(B, 0.86 + 0.24 * n), wet: o.wet };
      };
    },
    tiles: function (a, b, size, o) {
      var A = c(a), Bc = c(b), s = size || 0.3; o = o || {};
      return function (h) {
        var u = h.obj.ax === 1 || (h.face >> 1) === 1 ? h.p[0] : h.uv[0], v = h.obj.ax === 1 || (h.face >> 1) === 1 ? h.p[2] : h.uv[1];
        return { albedo: (Math.floor(u / s) + Math.floor(v / s)) % 2 ? A : Bc, wet: o.wet };
      };
    },
    plaster: function (base, o) {
      o = o || {}; var B = c(base);
      return function (h) { var n = vnoise(h.uv[0] * (o.f || 1.3), h.uv[1] * (o.f || 1.3)); return { albedo: K.scale(B, 0.9 + 0.18 * n), wet: o.wet }; };
    },
    stripes: function (a, b, w, o) {
      var A = c(a), Bc = c(b); o = o || {};
      return function (h) {
        if (o.dado && h.uv[1] < o.dado) return { albedo: c(o.dadoCol) };
        return { albedo: Math.floor(h.uv[0] / w) % 2 ? A : Bc };
      };
    },
    /** A wall with windows: wins [u0, u1, v0, v1, glass] where glass is a hex (emissive) or "sky". */
    windows: function (base, wins, o) {
      o = o || {}; var fr = c(o.frame || "#2a2230"), cols = o.cols || 2, rows = o.rows || 2, bar = o.bar || 0.05;
      return function (h, sc) {
        var u = h.uv[0], v = h.uv[1];
        for (var i = 0; i < wins.length; i++) {
          var w = wins[i];
          if (u > w[0] && u < w[1] && v > w[2] && v < w[3]) {
            if (u < w[0] + bar || u > w[1] - bar || v < w[2] + bar || v > w[3] - bar) return { albedo: fr };
            var fu = (u - w[0]) / (w[1] - w[0]), fv = (v - w[2]) / (w[3] - w[2]);
            var cc = w[5] || cols, rr = w[6] || rows;
            if (Math.abs(fu * cc - Math.round(fu * cc)) * (w[1] - w[0]) / cc < bar * 0.5 && Math.round(fu * cc) > 0 && Math.round(fu * cc) < cc) return { albedo: fr };
            if (Math.abs(fv * rr - Math.round(fv * rr)) * (w[3] - w[2]) / rr < bar * 0.5 && Math.round(fv * rr) > 0 && Math.round(fv * rr) < rr) return { albedo: fr };
            var g = w[4];
            if (g === "sky") { var d = K.norm([h.p[0] - sc.cam.p[0], h.p[1] - sc.cam.p[1] + 1.5, h.p[2] - sc.cam.p[2]]); return { albedo: [0, 0, 0], emit: K.scale(sc.sky(d), o.skyK || 0.9) }; }
            if (g === "dark") return { albedo: c(o.darkGlass || "#1a1840") };
            return { albedo: [0, 0, 0], emit: c(g) };
          }
        }
        return base(h, sc);
      };
    },
    /** Lettering in the 3×5 font, painted or lit. */
    sign: function (base, text, u0, v0, cell, ink, lit) {
      var I = c(ink);
      return function (h, sc) {
        if (K.stencil(text, u0, v0, cell, h.uv[0], h.uv[1])) return lit ? { albedo: [0, 0, 0], emit: I } : { albedo: I };
        return base(h, sc);
      };
    },
    /** A facade with a grid of windows, some lit; o: { wx, wy (spacing), ww, wh (window size), ground (shopfront height), lit: [hex], dark, seed, frame } */
    facade: function (base, o) {
      o = o || {}; var wx = o.wx || 1.8, wy = o.wy || 2.8, ww = o.ww || 0.9, wh = o.wh || 1.5, g = o.ground || 0, lit = o.lit || ["#ffcc66", "#ffdc7c", "#3ce8e8", "#ff86c2"];
      var fr = c(o.frame || "#2a2230"), dk = c(o.dark || "#1f1a4e");
      return function (h, sc) {
        var u = h.uv[0], v = h.uv[1];
        if (v > g + 0.6) {
          var i = Math.floor(u / wx), j = Math.floor((v - g - 0.6) / wy);
          var fu = u - i * wx - (wx - ww) / 2, fv = v - g - 0.6 - j * wy;
          if (fu > 0 && fu < ww && fv > 0 && fv < wh && (!o.top || v < o.top)) {
            if (fu < 0.06 || fu > ww - 0.06 || fv < 0.06 || fv > wh - 0.06 || Math.abs(fu - ww / 2) < 0.03) return { albedo: fr };
            var r = hash(i * 7 + (o.seed || 0), j);
            return r > (o.dim || 0.55) ? { albedo: [0, 0, 0], emit: c(lit[Math.floor(r * 91) % lit.length]) } : { albedo: dk };
          }
        }
        return base(h, sc);
      };
    },
    leaves: function (a, b) {
      var A = c(a), Bc = c(b);
      return function (h) { var n = hash(Math.floor(h.p[0] * 6), Math.floor(h.p[1] * 6) + Math.floor(h.p[2] * 6) * 31); return { albedo: n > 0.55 ? A : Bc }; };
    },
    water: function (base, k) { var B = c(base); return function (h) { var r = vnoise(h.p[0] * 0.6, h.p[2] * 3); return { albedo: K.scale(B, 0.8 + 0.4 * r), wet: k || 0.7 }; }; }
  };

  /* ---------------------------------------------------------------- skies */
  function skyFn(stops, o) {
    o = o || {};
    var S = stops.map(function (s) { return [s[0], c(s[1])]; });
    return function (d) {
      var t = Math.max(-0.2, d[1]);
      var col = S[S.length - 1][1];
      for (var i = 1; i < S.length; i++) if (t <= S[i][0]) { var a = S[i - 1], b = S[i]; col = lerp(a[1], b[1], Math.max(0, (t - a[0]) / (b[0] - a[0]))); break; }
      if (o.body) {
        var md = K.norm(o.body.d), cc = d[0] * md[0] + d[1] * md[1] + d[2] * md[2];
        if (cc > Math.cos(o.body.r)) return c(o.body.col);
        if (cc > Math.cos(o.body.r * (o.body.halo || 2.6))) col = lerp(col, c(o.body.glow || o.body.col), 0.35);
      }
      if (o.clouds) {
        var n = vnoise(d[0] / (d[1] + 0.25) * 4 + 10, d[2] / (d[1] + 0.25) * 9);
        if (d[1] > 0.02 && n > o.clouds.at) col = lerp(col, c(o.clouds.col), Math.min(1, (n - o.clouds.at) * 4) * o.clouds.k);
      }
      if (o.stars && d[1] > 0.12 && hash(Math.floor(d[0] * 900), Math.floor(d[1] * 900)) > 0.9972) col = c(o.stars);
      return col;
    };
  }
  var SKY = {
    night: function (o) { return skyFn([[0, "#e8707e"], [0.08, "#b04a8a"], [0.25, "#5e3f9e"], [0.6, "#1f1a4e"], [1, "#0e0c24"]], Object.assign({ stars: "#d8d0f4" }, o)); },
    dusk: function (o) { return skyFn([[0, "#ffb86a"], [0.07, "#ff8a6a"], [0.2, "#d05a86"], [0.45, "#6a3fa0"], [1, "#2a2262"]], o); },
    day: function (o) { return skyFn([[0, "#d8ecf4"], [0.15, "#9ad0ec"], [0.5, "#5aa0e0"], [1, "#3a78d0"]], Object.assign({ clouds: { at: 0.6, col: "#ffffff", k: 0.9 } }, o)); },
    dawn: function (o) { return skyFn([[0, "#ffd08a"], [0.1, "#f4a0a0"], [0.3, "#a890d0"], [1, "#4a5aa8"]], o); },
    winter: function (o) { return skyFn([[0, "#c8b8d8"], [0.2, "#8a88c0"], [0.6, "#4a4a8a"], [1, "#2a2a5a"]], Object.assign({ stars: "#e8e8ff" }, o)); }
  };

  /* ---------------------------------------------------------------- builder */
  function Builder() { this.objs = []; this.lights = []; this.overlays = []; }
  Builder.prototype.rect = function (ax, at, u, v, mat, extra) { var r = { ax: ax, at: at, u: u, v: v, mat: mat }; for (var k in extra || {}) r[k] = extra[k]; this.objs.push(r); return r; };
  Builder.prototype.box = function (min, max, mat, extra) { var b = { box: true, min: min, max: max, mat: mat }; for (var k in extra || {}) b[k] = extra[k]; this.objs.push(b); return b; };
  Builder.prototype.sph = function (cc, r, mat, extra) { var b = { sph: true, c: cc, r: r, mat: mat }; for (var k in extra || {}) b[k] = extra[k]; this.objs.push(b); return b; };
  Builder.prototype.cyl = function (x, z, r, y0, y1, mat, extra) { var b = { cyl: true, c: [x, 0, z], r: r, y0: y0, y1: y1, mat: mat }; for (var k in extra || {}) b[k] = extra[k]; this.objs.push(b); return b; };
  Builder.prototype.poly = function (pts, mat, extra) { var b = { poly: true, pts: pts, mat: mat }; for (var k in extra || {}) b[k] = extra[k]; this.objs.push(b); return b; };
  /** A gabled roof over the box [x0,x1]×[z0,z1] at eave height y, ridge along x (or z) rising by rise. */
  Builder.prototype.gable = function (x0, x1, z0, z1, y, rise, roofMat, endMat, alongZ) {
    var ov = 0.25;
    if (!alongZ) {
      var zm = (z0 + z1) / 2;
      this.poly([[x0 - ov, y - 0.1, z0 - ov], [x1 + ov, y - 0.1, z0 - ov], [x1 + ov, y + rise, zm], [x0 - ov, y + rise, zm]], roofMat);
      this.poly([[x0 - ov, y + rise, zm], [x1 + ov, y + rise, zm], [x1 + ov, y - 0.1, z1 + ov], [x0 - ov, y - 0.1, z1 + ov]], roofMat);
      if (endMat) { this.poly([[x0, y, z0], [x0, y, z1], [x0, y + rise, zm]], endMat); this.poly([[x1, y, z0], [x1, y + rise, zm], [x1, y, z1]], endMat); }
    } else {
      var xm = (x0 + x1) / 2;
      this.poly([[x0 - ov, y - 0.1, z0 - ov], [xm, y + rise, z0 - ov], [xm, y + rise, z1 + ov], [x0 - ov, y - 0.1, z1 + ov]], roofMat);
      this.poly([[xm, y + rise, z0 - ov], [x1 + ov, y - 0.1, z0 - ov], [x1 + ov, y - 0.1, z1 + ov], [xm, y + rise, z1 + ov]], roofMat);
      if (endMat) { this.poly([[x0, y, z0], [xm, y + rise, z0], [x1, y, z0]], endMat); this.poly([[x0, y, z1], [x1, y, z1], [xm, y + rise, z1]], endMat); }
    }
  };
  Builder.prototype.light = function (p, col, i, r, extra) { var l = { p: p, c: c(col), i: i, r: r }; for (var k in extra || {}) l[k] = extra[k]; this.lights.push(l); return l; };
  Builder.prototype.sun = function (dir, col, i, extra) { var l = { dir: K.norm(dir), c: c(col), i: i }; for (var k in extra || {}) l[k] = extra[k]; this.lights.push(l); return l; };
  Builder.prototype.over = function (fn) { this.overlays.push(fn); };
  /** A room: floor, ceiling, back wall at z = d, side walls at x = ±w/2; each surface's material given (null = open). */
  Builder.prototype.room = function (o) {
    var hw = o.w / 2, H = o.h, z0 = o.z0 === undefined ? -4 : o.z0, d = o.d;
    if (o.floor) this.rect(1, 0, [-hw, hw], [z0, d], o.floor, { noShadow: true });
    if (o.ceil) this.rect(1, H, [-hw, hw], [z0, d], o.ceil);
    if (o.back) this.rect(2, d, [-hw, hw], [0, H], o.back, { holes: o.backHoles });
    if (o.left) this.rect(0, -hw, [z0, d], [0, H], o.left, { holes: o.leftHoles });
    if (o.right) this.rect(0, hw, [z0, d], [0, H], o.right, { holes: o.rightHoles });
  };
  Builder.prototype.tree = function (x, z, h, r, leafA, leafB, trunk) {
    this.cyl(x, z, r * 0.12, 0, h * 0.6, M.flat(trunk || "#4a3020"));
    var lm = M.leaves(leafA, leafB);
    this.sph([x, h * 0.72, z], r, lm);
    this.sph([x - r * 0.55, h * 0.58, z + r * 0.2], r * 0.7, lm);
    this.sph([x + r * 0.5, h * 0.62, z - r * 0.25], r * 0.72, lm);
  };
  Builder.prototype.scene = function (o) {
    var self = this;
    return {
      w: 320, h: 180, cam: o.cam, objs: this.objs, lights: this.lights,
      ambient: c(o.ambient || "#5a48a8"), bounce: c(o.bounce || "#201238"),
      fog: o.fog ? { c: c(o.fog[0]), d: o.fog[1], max: o.fog[2] } : null,
      dither: o.dither || 0.04, sky: o.sky || SKY.night(), palette: o.palette || PALETTE,
      overlay: function (ctx) { self.overlays.forEach(function (f) { f(ctx); }); }
    };
  };

  /* ---------------------------------------------------------------- overlay helpers */
  var O = {
    glow: function (ctx, p, r, col, k) {
      if (!p) return;
      var C = c(col);
      for (var j = -r; j <= r; j++) for (var i = -r; i <= r; i++) { var d = Math.sqrt(i * i + j * j) / r; if (d < 1) ctx.addLight(p.x + i, p.y + j, C, k * (1 - d) * (1 - d)); }
    },
    text: function (ctx, s, x, y, col) {
      var C = c(col);
      for (var i = 0; i < s.length; i++) { var g = K.FONT[s[i]] || K.FONT[" "]; for (var k = 0; k < 15; k++) if (g[k] === "1") ctx.set(x + i * 4 + (k % 3), y + Math.floor(k / 3), C); }
    },
    line: function (ctx, a, b, col, alpha) { ctx.line(ctx.project(a), ctx.project(b), c(col), alpha); },
    /** A sagging wire (or string of lights) between two points; bulbs every n segments. */
    wire: function (ctx, a, b, sag, col, bulbs, bulbCols) {
      var prev = null, n = 30;
      for (var k = 0; k <= n; k++) {
        var t = k / n, p = [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t - Math.sin(Math.PI * t) * sag, a[2] + (b[2] - a[2]) * t];
        var q = ctx.project(p);
        if (prev && q) ctx.line(prev, q, c(col));
        if (bulbs && q && k % bulbs === 0 && k > 0 && k < n) { var bc = bulbCols[(k / bulbs) % bulbCols.length]; ctx.set(q.x, q.y + 1, c(bc)); O.glow(ctx, { x: q.x, y: q.y + 1 }, 3, bc, 0.25); }
        prev = q;
      }
    },
    snow: function (ctx, n, seed, col) { for (var i = 0; i < n; i++) { var x = Math.floor(hash(i, seed) * ctx.W), y = Math.floor(hash(seed, i) * ctx.H); ctx.set(x, y, c(col || "#f4f0ff")); } },
    rain: function (ctx, n, seed, col) { for (var i = 0; i < n; i++) { var x = Math.floor(hash(i, seed) * ctx.W), y = Math.floor(hash(seed, i) * ctx.H); ctx.line({ x: x, y: y }, { x: x - 1, y: y + 3 }, c(col || "#8a9ad0"), 0.5); } }
  };

  NB.kit = { M: M, SKY: SKY, O: O, Builder: Builder, PALETTE: PALETTE, c: c, hex: hex, ramp: ramp, hash: hash, vnoise: vnoise, lerp: lerp };
})(typeof window !== "undefined" ? window : globalThis);
