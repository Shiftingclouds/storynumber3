/* Calder — the authored views. Each is a place at a moment (time of day, season), built with js/art/kit.js.
 * No people are drawn here: snapshots with people are painted over these backgrounds separately.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var KIT = NB.kit, M = KIT.M, SKY = KIT.SKY, O = KIT.O, B = KIT.Builder, hash = KIT.hash, vnoise = KIT.vnoise, c = KIT.c;
  var add = NB.places.add;

  function disc(b, cx, cy, cz, r, axis, mat, n) {
    var pts = [];
    n = n || 14;
    for (var i = 0; i < n; i++) {
      var a = i / n * Math.PI * 2;
      pts.push(axis === "x" ? [cx, cy + Math.sin(a) * r, cz + Math.cos(a) * r] : [cx + Math.cos(a) * r, cy + Math.sin(a) * r, cz]);
    }
    return b.poly(pts, mat);
  }
  /** A city of lit windows: box facades whose windows light up by chance. */
  function skyline(b, x0, x1, z, seed, o) {
    o = o || {};
    var x = x0, k = 0;
    while (x < x1) {
      var w = 4 + hash(k, seed) * 7, h = (o.min || 8) + hash(seed, k) * (o.span || 22), zz = z + hash(k + 7, seed) * 10;
      var base = (o.cols || ["#2a2262", "#382a78", "#1f1a4e"])[k % (o.cols || [0, 0, 0]).length];
      var lit = o.lit || ["#ffcc66", "#ffdc7c", "#3ce8e8", "#ff86c2"];
      (function (bx, bw, bh, bz, bc, kk) {
        b.box([bx, 0, bz], [bx + bw, bh, bz + 6], function (h) {
          var u = h.uv[0], v = h.uv[1];
          var fu = u * 1.4 - Math.floor(u * 1.4), fv = v / 1.3 - Math.floor(v / 1.3);
          if (fu > 0.3 && fu < 0.8 && fv > 0.3 && fv < 0.75 && v < bh - 0.8) {
            var r = hash(Math.floor(u * 1.4) + kk * 13, Math.floor(v / 1.3) + seed);
            if (r > (o.dark || 0.62)) return { albedo: [0, 0, 0], emit: c(lit[Math.floor(r * 97) % lit.length]) };
          }
          return { albedo: c(bc) };
        }, { noShadow: true });
      })(x, w, h, zz, base, k);
      x += w + 0.4; k++;
    }
  }

  /* ---------------------------------------------------------------- P02 the print shop, downstairs, early evening */
  add("print_shop", function () {
    var b = new B();
    var reams = ["#f4ecd2", "#ff86c2", "#3ce8e8", "#ffe14a", "#5a8ad0", "#e07030", "#7af07a", "#c0407a", "#fff4d8"];
    b.room({ w: 5.2, d: 6, h: 3, z0: -4,
      floor: M.planks("#9a6440", { w: 0.16, along: "z" }),
      ceil: M.plaster("#4a3a6a"),
      back: M.windows(M.stripes("#3a8a8a", "#348080", 0.12, { dado: 1.0, dadoCol: "#6a3a4a" }), [[1.2, 2.2, 0, 2.2, "#3a2a4a", 1, 1]], { frame: "#5a3a2a" }),
      left: M.windows(M.plaster("#d8b890"), [[-2.2, 3.2, 0.9, 2.6, "sky", 4, 2]], { frame: "#2a4a4a", bar: 0.06 }),
      right: function (h) {
        var u = h.uv[0], v = h.uv[1];
        // pinned prints: a grid of colour, each with a darker band of "type"
        if (v > 1.3 && v < 2.6 && u > -1.5 && u < 3.8) {
          var i = Math.floor((u + 1.5) / 0.55), j = Math.floor((v - 1.3) / 0.62);
          var fu = (u + 1.5) / 0.55 - i, fv = (v - 1.3) / 0.62 - j;
          if (fu > 0.1 && fu < 0.9 && fv > 0.08 && fv < 0.92) {
            var col = reams[(i * 3 + j * 5) % reams.length];
            if (fv > 0.6 && fv < 0.7) return { albedo: c("#2a2230") };
            return { albedo: c(col) };
          }
        }
        return { albedo: c("#d8b890") };
      }
    });
    // beams
    [-1, 1.5, 4].forEach(function (z) { b.box([-2.6, 2.75, z], [2.6, 3, z + 0.22], M.flat("#5a3a2a")); });
    // shelving of paper along the back wall
    b.box([-2.5, 0, 5.4], [0.9, 2.5, 6], M.flat("#5a3a2a"));
    for (var j = 0; j < 5; j++) for (var i = 0; i < 6; i++) {
      var col = reams[(i + j * 2) % reams.length];
      b.box([-2.4 + i * 0.55, 0.12 + j * 0.48, 5.35], [-2.4 + i * 0.55 + 0.46, 0.12 + j * 0.48 + 0.22 + hash(i, j) * 0.14, 5.9], M.flat(col));
    }
    // the stairs up to the flat, glimpsed through the back doorway
    for (var s = 0; s < 6; s++) b.box([1.25, s * 0.3, 6 + s * 0.28], [2.15, s * 0.3 + 0.3, 6.3 + s * 0.28], M.flat(s % 2 ? "#7a4a2a" : "#6a3e24"));
    b.rect(2, 7.9, [1, 2.4], [0, 3], M.flat("#4a3050"));
    // the platen press: base, body and flywheel
    b.box([-1.1, 0, 2.2], [0.2, 0.7, 3.2], M.flat("#2a6a5a"));
    b.box([-0.9, 0.7, 2.4], [0, 1.7, 3.0], M.flat("#2a7a66"));
    b.box([-0.95, 1.2, 2.3], [0.05, 1.45, 2.45], M.flat("#c0c0d0"));
    disc(b, 0.25, 1.15, 2.7, 0.62, "x", function (h) { var r = Math.hypot(h.p[1] - 1.15, h.p[2] - 2.7); return { albedo: c(r > 0.52 ? "#1f5a4a" : r < 0.1 ? "#d0a030" : (Math.floor(Math.atan2(h.p[1] - 1.15, h.p[2] - 2.7) / 0.785) % 2 ? "#3a8a74" : "#12302a")) }; });
    // type cabinet by the window, drawers striped
    b.box([-2.6, 0, 0.2], [-1.9, 1.05, 1.9], function (h) { return { albedo: c(h.n[0] > 0.5 && (Math.floor(h.p[1] / 0.13) % 2) ? "#b87a4a" : "#8a5a3a") }; });
    b.box([-2.62, 1.05, 0.15], [-1.85, 1.12, 1.95], M.flat("#5a3a2a"));
    // flyer stacks on the cabinet
    [["#ff86c2", 0.4], ["#ffe14a", 0.9], ["#3ce8e8", 1.4]].forEach(function (f) { b.box([-2.5, 1.12, f[1]], [-2.1, 1.22, f[1] + 0.35], M.flat(f[0])); });
    // the counter, the till, a mug
    b.box([1.6, 0, -1.8], [2.6, 1.0, 1.8], function (h) { return { albedo: c(h.n[0] < -0.5 && (Math.floor(h.p[2] / 0.4) % 2) ? "#7a4a2a" : "#8a5634") }; });
    b.box([1.55, 1.0, -1.85], [2.62, 1.06, 1.85], M.flat("#c08a5a"));
    b.box([1.9, 1.06, 0.4], [2.4, 1.3, 0.9], M.flat("#3a3a50"));
    b.cyl(1.85, -0.6, 0.06, 1.06, 1.18, M.flat("#e07030"));
    // pendant lamps
    [[-0.4, 1.2], [1.2, 3.6]].forEach(function (l) {
      b.cyl(l[0], l[1], 0.01, 2.2, 3, M.flat("#1a1420"), { noShadow: true });
      b.sph([l[0], 2.12, l[1]], 0.12, M.emit("#ffe0a0"), { noShadow: true });
      b.light([l[0], 2.0, l[1]], "#ffc070", 1.6, 1.8);
    });
    b.light([-3.5, 2.2, 1.0], "#ff8aa0", 0.9, 4);   // dusk through the shop window
    b.over(function (ctx) {
      O.glow(ctx, ctx.project([-0.4, 2.12, 1.2]), 12, "#ffd080", 0.35);
      O.glow(ctx, ctx.project([1.2, 2.12, 3.6]), 9, "#ffd080", 0.3);
    });
    return b.scene({ cam: { p: [0.7, 1.5, -3.4], f: 150, cx: 160, cy: 92, yaw: -0.12, pitch: 0.03 }, ambient: "#6a4a8a", bounce: "#2a1a30", sky: SKY.dusk() });
  });

  /* ---------------------------------------------------------------- P14 the Regent, from across the street, late */
  add("regent", function () {
    var b = new B();
    // street and pavement
    b.rect(1, 0, [-40, 40], [-10, 6.5], M.plaster("#261f44", { wet: 0.55, f: 0.4 }), { noShadow: true });
    b.box([-40, 0, 6.5], [40, 0.15, 10], M.tiles("#4a4078", "#3e3668", 0.6, { wet: 0.25 }), { noShadow: true });
    b.rect(1, 0.15, [-40, 40], [10, 30], M.flat("#3a3468"), { noShadow: true });
    // the cinema: cream deco facade with fluting, upper windows, lit doors under the marquee
    var facade = function (h) {
      var u = h.uv[0], v = h.uv[1];
      if (v < 3.3 && u > -3.2 && u < 3.2) {
        if (Math.abs(u - Math.round(u / 1.6) * 1.6) < 0.06 || v > 3.0) return { albedo: c("#3a2a3a") };
        return { albedo: [0, 0, 0], emit: c("#ffcf80") };
      }
      if (v < 3.3 && ((u > -5.4 && u < -3.8) || (u > 3.8 && u < 5.4)) && v > 0.6 && v < 2.8) return { albedo: [0, 0, 0], emit: c(u < 0 ? "#ff86c2" : "#9af4f0") };
      if (v > 5 && v < 10 && Math.abs(u) < 6.2) {
        var k = Math.floor((u + 6.2) / 1.55), fu = (u + 6.2) / 1.55 - k;
        if (fu > 0.28 && fu < 0.72 && (v - 5) % 2.6 > 0.5 && (v - 5) % 2.6 < 2.1) return hash(k, Math.floor((v - 5) / 2.6)) > 0.5 ? { albedo: [0, 0, 0], emit: c("#ffdc7c") } : { albedo: c("#2a2262") };
      }
      if (v > 10.2 && v < 10.6) return { albedo: c("#2fcf7a") };
      return { albedo: c(Math.floor(u / 0.4) % 2 ? "#e8d0a8" : "#dcc49c") };
    };
    b.box([-7, 0.15, 10], [7, 11, 22], facade);
    b.box([-7.2, 11, 9.8], [7.2, 11.6, 22], M.flat("#2a8a7a"));
    b.box([-2.5, 11.6, 10], [2.5, 12.8, 12], M.flat("#e8d0a8"));
    // marquee canopy and its lettered face
    b.box([-5, 3.4, 7.6], [5, 4.6, 10], function (h) {
      if (h.n[2] < -0.5) {
        var u = h.uv[0], v = h.uv[1];
        if (KIT.hash && NB.places.kit.stencil("LATE SHOW", -3.9, 4.35, 0.12, u, v)) return { albedo: [0, 0, 0], emit: c("#1a1440") };
        return { albedo: [0, 0, 0], emit: c("#fff2b8") };
      }
      return { albedo: c(h.n[1] < -0.5 ? "#ffcf80" : "#2a2262") };
    });
    // the blade sign
    b.box([-0.55, 4.8, 9.2], [0.55, 10.8, 9.8], function (h) { return { albedo: c(h.n[2] < -0.5 ? "#1a1440" : "#e8d0a8") }; });
    // neighbours
    b.box([-30, 0.15, 11], [-7.3, 12, 20], M.windows(M.facade(M.brick("#a8403a", "#4a1e2a"), { ground: 3, seed: 2 }), [[-12.5, -8, 0.6, 2.8, "#ff86c2", 3, 1]]));
    b.box([7.3, 0.15, 11], [30, 14, 20], M.windows(M.facade(M.brick("#3e8a8c", "#1e4450"), { ground: 3, seed: 5, wx: 2.1 }), [[8, 12.5, 0.6, 2.8, "#ffcc66", 4, 1]]));
    // lamp posts
    [-6.2, 6.2].forEach(function (x) { b.cyl(x, 6.9, 0.07, 0.15, 4.6, M.flat("#1a1430")); b.sph([x, 4.7, 6.9], 0.2, M.emit("#fff2b8"), { noShadow: true }); b.light([x, 4.6, 6.6], "#ffb070", 2.2, 3); });
    b.light([0, 3.2, 8.4], "#ffd090", 3, 2.6);
    b.light([0, 1.6, 9.6], "#ffcf80", 2, 2.4);
    b.over(function (ctx) {
      // bulbs around the marquee, and REGENT down the blade
      for (var x = -5; x <= 5.01; x += 0.5) { var q = ctx.project([x, 4.62, 7.58]), q2 = ctx.project([x, 3.38, 7.58]); [q, q2].forEach(function (p) { if (p) { ctx.set(p.x, p.y, c("#fff2b8")); O.glow(ctx, p, 3, "#ffcf80", 0.2); } }); }
      var st = ctx.project([0, 10.5, 9.19]), sb = ctx.project([0, 5.1, 9.19]);
      if (st && sb) { var w = "REGENT", pitch = (sb.y - st.y) / w.length; for (var i = 0; i < w.length; i++) O.text(ctx, w[i], Math.round(st.x) - 1, Math.round(st.y + pitch * i + (pitch - 5) / 2), "#ff86c2"); O.glow(ctx, { x: st.x, y: (st.y + sb.y) / 2 }, Math.round((sb.y - st.y) / 1.6), "#ff4fa0", 0.12); }
      [-6.2, 6.2].forEach(function (x) { O.glow(ctx, ctx.project([x, 4.7, 6.9]), 8, "#ffcf80", 0.35); });
    });
    return b.scene({ cam: { p: [0.6, 1.6, -7], f: 150, cx: 160, cy: 104, yaw: -0.02, pitch: 0.16 }, ambient: "#5a48a8", bounce: "#1a1030", fog: ["#6a3f9a", 90, 0.4], sky: SKY.night({ body: { d: [0.5, 0.75, 1], r: 0.04, col: "#f4ecd2", glow: "#b08ad0" } }) });
  });

  /* ---------------------------------------------------------------- P15 the Iron Footbridge over the Calder, night */
  add("iron_footbridge", function (opt) {
    var b = new B();
    var winter = opt && opt.winter;
    b.rect(1, 0, [-80, 80], [-10, 120], M.water("#1e2a62", 0.75), { noShadow: true });
    // embankments
    b.box([-40, 0, -10], [-11, 3, 120], M.brick(winter ? "#8a88b0" : "#6a5a8a", "#2a2262", { h: 0.35, w: 0.8, vary: 0.6 }), { noShadow: true });
    b.box([11, 0, -10], [40, 3, 120], M.brick("#6a5a8a", "#2a2262", { h: 0.35, w: 0.8, vary: 0.6 }), { noShadow: true });
    // piers and the bridge deck with its truss
    var pier = M.brick("#a8403a", "#4a1e2a", { h: 0.2, w: 0.5 });
    b.box([-12.5, 0, 22.5], [-9.5, 6, 27], pier);
    b.box([9.5, 0, 22.5], [12.5, 6, 27], function (h) {
      // the maintenance door in the far pier, faintly green at the seams
      if (h.n[0] < -0.5 && h.p[2] > 23.8 && h.p[2] < 25.2 && h.p[1] > 3 && h.p[1] < 5.2) return (h.p[2] < 23.9 || h.p[2] > 25.1 || h.p[1] > 5.1) ? { albedo: [0, 0, 0], emit: c("#7af07a") } : { albedo: c("#2a2230") };
      return pier(h, arguments[1]);
    });
    b.box([-12.5, 6, 23], [12.5, 6.4, 26.5], M.flat("#2a2262"));
    var iron = M.flat("#3a2a6a");
    [23.05, 26.45].forEach(function (z) { b.box([-12.5, 9, z - 0.1], [12.5, 9.3, z + 0.1], iron); for (var x = -12; x <= 12.01; x += 3) b.box([x - 0.1, 6.4, z - 0.1], [x + 0.1, 9, z + 0.1], iron); });
    // the city beyond
    skyline(b, -80, 80, 70, 3, { min: 10, span: 30 });
    b.box([-80, 0, 60], [80, 3, 70], M.flat("#1f1a4e"), { noShadow: true });
    for (var x = -10.5; x <= 10.51; x += 3) b.light([x, 8.6, 24.75], "#ffcf80", 1.1, 2.2);
    b.light([10.2, 4, 24.5], "#7af07a", 0.6, 1.5);
    b.over(function (ctx) {
      // diagonals between the posts, both faces
      [23.05, 26.45].forEach(function (z) { for (var x = -12; x < 12; x += 3) { O.line(ctx, [x, 6.4, z], [x + 3, 9, z], "#2a1f5a"); } });
      for (var x2 = -10.5; x2 <= 10.51; x2 += 3) { var p = ctx.project([x2, 8.7, 23]); if (p) { ctx.set(p.x, p.y, c("#fff2b8")); O.glow(ctx, p, 6, "#ffcf80", 0.35); } }
      if (winter) O.snow(ctx, 260, 7);
    });
    var sky = winter ? SKY.winter({ body: { d: [-0.35, 0.3, 1], r: 0.05, col: "#f4ecd2", glow: "#c8b8e8" } }) : SKY.night({ body: { d: [-0.35, 0.3, 1], r: 0.05, col: "#f4ecd2", glow: "#b08ad0" } });
    return b.scene({ cam: { p: [-8.5, 3.6, -4], f: 165, cx: 160, cy: 112, yaw: 0.16, pitch: 0.1 }, ambient: winter ? "#6a6ab8" : "#5a48a8", bounce: "#1a1030", fog: ["#6a3f9a", 140, 0.45], sky: sky });
  });

  /* ---------------------------------------------------------------- P51 Orchard House, an autumn afternoon */
  add("orchard_house", function () {
    var b = new B();
    b.rect(1, 0, [-80, 80], [-10, 140], function (h) { var n = vnoise(h.p[0] * 0.5, h.p[2] * 0.5); return { albedo: c(n > 0.6 ? "#7a9a3a" : n > 0.35 ? "#5a8a3a" : "#4a7a3a") }; }, { noShadow: true });
    b.rect(1, 0.01, [-0.9, 0.9], [5, 12], M.plaster("#c8b090"), { noShadow: true });
    // the cottage
    var wall = M.windows(M.plaster("#f0e0c0", { f: 2 }), [[-2.2, -0.9, 1.1, 2.4, "#ffdc7c", 2, 2], [0.9, 2.2, 1.1, 2.4, "#ffdc7c", 2, 2]], { frame: "#f4f0e8" });
    b.box([-3.5, 0, 12], [3.5, 3.2, 17], function (h, sc) {
      if (h.n[2] < -0.5 && Math.abs(h.p[0]) < 0.5 && h.p[1] < 2.2) return { albedo: c(h.p[1] > 2.1 ? "#f4f0e8" : "#b03a34") };
      return wall(h, sc);
    });
    b.gable(-3.5, 3.5, 12, 17, 3.2, 2.2, M.tiles("#4a4a86", "#40407a", 0.35), M.plaster("#f0e0c0"));
    b.box([2, 4, 14.2], [2.7, 6.2, 14.9], M.brick("#b03a34", "#6a2a2a", { h: 0.12, w: 0.25 }));
    // dry-stone wall with a gate gap, and the kennel
    b.box([-30, 0, 5], [-1.2, 0.8, 5.6], M.brick("#8a8aa0", "#4a4a6a", { h: 0.2, w: 0.4 }));
    b.box([1.2, 0, 5], [30, 0.8, 5.6], M.brick("#8a8aa0", "#4a4a6a", { h: 0.2, w: 0.4 }));
    b.box([4.5, 0, 9], [5.6, 0.8, 10.1], M.flat("#b03a34"));
    b.gable(4.4, 5.7, 9, 10.1, 0.8, 0.45, M.flat("#4a4a86"), M.flat("#b03a34"), true);
    // apple trees in autumn, a washing line
    [[-7, 9, 4.2, 1.8], [-11, 16, 5, 2.2], [8.5, 15, 4.6, 2], [12, 22, 5, 2.2], [-4, 24, 4.4, 1.9], [-15, 30, 5.2, 2.4], [16, 32, 5, 2.3]].forEach(function (t, i) {
      b.tree(t[0], t[1], t[2], t[3], i % 2 ? "#e07030" : "#f49a3c", i % 3 ? "#b03a34" : "#d0a030", "#5a3a2a");
    });
    b.cyl(-9.5, 12, 0.05, 0, 1.9, M.flat("#5a3a2a")); b.cyl(-5.5, 13, 0.05, 0, 1.9, M.flat("#5a3a2a"));
    // hills beyond
    b.sph([-40, -60, 160], 90, M.flat("#5a8a6a"), { noShadow: true });
    b.sph([50, -70, 180], 100, M.flat("#4a7a7a"), { noShadow: true });
    b.sun([-0.6, 0.55, -0.45], "#fff0c8", 0.9);
    b.over(function (ctx) {
      O.wire(ctx, [-9.5, 1.85, 12], [-5.5, 1.85, 13], 0.12, "#2a2230");
      var cols = ["#ff86c2", "#ffffff", "#5a8ad0", "#ffe14a"];
      for (var i = 1; i < 5; i++) { var p = ctx.project([-9.5 + i * 0.8, 1.72, 12 + i * 0.2]); if (p) for (var y = 0; y < 3; y++) { ctx.set(p.x, p.y + y, c(cols[i - 1])); ctx.set(p.x + 1, p.y + y, c(cols[i - 1])); } }
    });
    return b.scene({ cam: { p: [1.2, 1.7, -3], f: 160, cx: 160, cy: 100, yaw: -0.04, pitch: 0.02 }, ambient: "#8aa8d8", bounce: "#3a3020", fog: ["#b8c8e8", 180, 0.5], sky: SKY.day({ body: { d: [-0.6, 0.55, -0.45], r: 0.04, col: "#fff8e0" } }), dither: 0.035 });
  });

  /* ---------------------------------------------------------------- P01 Mercy House, the old hospital, dusk */
  add("mercy_house", function () {
    var b = new B();
    b.rect(1, 0, [-80, 80], [-10, 120], M.plaster("#3a3468", { f: 0.6 }), { noShadow: true });
    b.rect(1, 0.01, [-2.2, 2.2], [0, 14], M.tiles("#8a7a9a", "#7a6a8a", 0.5), { noShadow: true });
    var brick = M.brick("#b44e3a", "#5a2a2a", { h: 0.09, w: 0.26 });
    // main block with a central gabled pavilion, arched lamp over the door, two wings
    b.box([-16, 0, 14], [16, 9, 24], M.facade(brick, { wx: 2.2, wy: 3, ww: 1.1, wh: 1.9, seed: 4, dim: 0.5, lit: ["#ffdc7c", "#ffcc66", "#fbbf52"] }));
    b.box([-4.5, 0, 12.5], [4.5, 11, 24], function (h, sc) {
      if (h.n[2] < -0.5) {
        var u = h.p[0], v = h.p[1];
        if (Math.abs(u) < 1.1 && v < 3) return v > 2.9 || Math.abs(u) > 1.0 ? { albedo: c("#e8d8b0") } : { albedo: c(Math.abs(u) < 0.03 ? "#2a2230" : "#2a4ab8") };
        if (v > 7.6 && v < 8.3) return NB.places.kit.stencil("MERCY HOUSE", -3.6, 8.25, 0.13, u, v) ? { albedo: c("#2a2230") } : { albedo: c("#e8d8b0") };
        if (v > 3.6 && v < 7 && Math.abs(u) < 3.4 && Math.abs(Math.abs(u) - 2) < 0.8) return (v > 3.7 && v < 6.9 && Math.abs(Math.abs(u) - 2) < 0.7) ? { albedo: [0, 0, 0], emit: c("#ffcc66") } : { albedo: c("#e8d8b0") };
        if (v > 3.6 && v < 7 && Math.abs(u) < 0.7) return v < 6.9 && Math.abs(u) < 0.6 ? { albedo: [0, 0, 0], emit: c("#fbbf52") } : { albedo: c("#e8d8b0") };
        if (v < 0.5 || (v > 3.2 && v < 3.5)) return { albedo: c("#e8d8b0") };
      }
      return brick(h, sc);
    });
    b.gable(-4.5, 4.5, 12.5, 24, 11, 3.2, M.tiles("#3a3a7a", "#34346e", 0.4), brick, true);
    b.gable(-16, 16, 14, 24, 9, 2.6, M.tiles("#3a3a7a", "#34346e", 0.4), null);
    [-12, 12].forEach(function (x) { b.box([x - 0.5, 9, 18], [x + 0.5, 13, 19], brick); });
    // railings and gate piers, lamps
    [-2.6, 2.6].forEach(function (x) { b.box([x - 0.35, 0, 1.2], [x + 0.35, 2.2, 1.9], M.flat("#e8d8b0")); b.sph([x, 2.45, 1.55], 0.25, M.emit("#fff2b8"), { noShadow: true }); b.light([x, 2.4, 1.2], "#ffcf80", 1.5, 2.5); });
    b.box([-30, 0, 1.4], [-3, 1.3, 1.6], function (h) { return { albedo: c(Math.floor(h.p[0] / 0.18) % 2 ? "#1a1430" : "#2a2262") }; });
    b.box([3, 0, 1.4], [30, 1.3, 1.6], function (h) { return { albedo: c(Math.floor(h.p[0] / 0.18) % 2 ? "#1a1430" : "#2a2262") }; });
    b.light([0, 3.2, 11.8], "#ffcf80", 1.8, 3);
    [[-10, 8, 6, 2.6], [11, 7, 6.5, 2.8], [-20, 10, 7, 3]].forEach(function (t) { b.tree(t[0], t[1], t[2], t[3], "#2a4a6a", "#1e3a5a", "#2a1a2a"); });
    b.over(function (ctx) { [-2.6, 2.6].forEach(function (x) { O.glow(ctx, ctx.project([x, 2.45, 1.55]), 9, "#ffcf80", 0.35); }); });
    return b.scene({ cam: { p: [1, 1.7, -9], f: 150, cx: 160, cy: 112, yaw: -0.03, pitch: 0.12 }, ambient: "#6a58b8", bounce: "#2a1838", fog: ["#8a4a9a", 110, 0.35], sky: SKY.dusk() });
  });

  /* ---------------------------------------------------------------- P07 Serrano Yard, the workshop, a warm evening */
  add("serrano_yard", function () {
    var b = new B();
    b.room({ w: 7, d: 8, h: 3.6, z0: -5, floor: M.plaster("#6a6a8a", { f: 0.8 }), ceil: M.flat("#3a3050"),
      left: M.windows(M.brick("#c86a48", "#6a3a2a"), [[0.5, 2.5, 1.3, 2.6, "#ffb86a", 3, 2]], { frame: "#2a2230" }),
      right: function (h) {
        // pegboard of tools and cable
        var u = h.uv[0], v = h.uv[1];
        if (v > 1.2 && v < 2.8 && u > -3 && u < 3) {
          if (Math.abs((u % 0.12)) < 0.02 && Math.abs((v % 0.12)) < 0.02) return { albedo: c("#3a2a2a") };
          var k = Math.floor((u + 3) / 0.5), fv = (v - 1.2) / 1.6;
          if (Math.abs(((u + 3) % 0.5) - 0.25) < 0.04 && fv > 0.2 && fv < 0.8) return { albedo: c(["#e8c040", "#2a4ab8", "#b03a34", "#2fcf7a"][k % 4]) };
          return { albedo: c("#c8a070") };
        }
        return { albedo: c("#d8c8a8") };
      },
      back: M.plaster("#d8c8a8"), backHoles: [[-2.2, 2.2, 0, 3]] });
    // roller door open onto the yard: string lights, the house's lit kitchen window, a van
    b.box([-2.3, 3, 7.8], [2.3, 3.5, 8.2], function (h) { return { albedo: c(Math.floor(h.p[1] / 0.08) % 2 ? "#8a8aa0" : "#6a6a86") }; });
    b.rect(1, 0, [-20, 20], [8, 30], M.plaster("#4a4078", { f: 0.7 }), { noShadow: true });
    b.box([-10, 0, 20], [10, 7, 24], M.windows(M.plaster("#e0a070"), [[-6, -3.5, 3.2, 5, "#ffdc7c", 2, 2], [2, 4.5, 3.2, 5, "#ffcc66", 2, 2], [-1, 1, 0, 2.3, "#fbbf52", 1, 2]]));
    b.gable(-10, 10, 20, 24, 7, 2, M.tiles("#b03a34", "#9a3430", 0.4), null);
    b.box([3, 0.3, 12], [5.2, 2.3, 16.5], function (h) { return { albedo: c(h.p[1] > 1.4 && h.p[2] < 13 ? "#3a4a8a" : "#f4ecd2") }; });
    [3.3, 4.9].forEach(function (x) { [12.6, 15.8].forEach(function (z) { b.cyl(x, z, 0.3, 0, 0.6, M.flat("#1a1430")); }); });
    // workbench, cable drums, a boxed motor on the bench
    b.box([-3.5, 0, 1], [-2, 0.95, 5.5], M.planks("#b87a4a", { w: 0.2 }));
    b.box([-3.3, 0.95, 2], [-2.6, 1.35, 2.8], M.flat("#2a8a9a"));
    b.box([-3.2, 0.95, 3.4], [-2.4, 1.1, 4.4], M.flat("#e8c040"));
    [[1.8, 1.4, "#b03a34"], [2.6, 3.2, "#2a4ab8"], [1.5, 4.6, "#2fcf7a"]].forEach(function (d) { b.cyl(d[0], d[1], 0.55, 0, 0.9, function (h) { return h.cap ? { albedo: c("#b87a4a") } : { albedo: c(Math.floor(h.p[1] / 0.06) % 2 ? d[2] : "#2a2230") }; }); });
    b.box([-1, 0, 5.5], [0.4, 1.8, 6.3], M.flat("#5a8ad0"));
    b.cyl(0, 1.5, 0.02, 2.8, 3.6, M.flat("#1a1430"), { noShadow: true });
    b.sph([0, 2.75, 1.5], 0.14, M.emit("#fff2b8"), { noShadow: true });
    b.light([0, 2.6, 1.5], "#ffd090", 1.8, 2.4);
    b.light([0, 2.6, 12], "#ff9a4a", 1.4, 4);
    b.over(function (ctx) {
      O.glow(ctx, ctx.project([0, 2.75, 1.5]), 12, "#ffd080", 0.35);
      O.wire(ctx, [-8, 5.8, 20], [8, 5.2, 20], 1.2, "#1a1430", 3, ["#ffe14a", "#ff86c2", "#3ce8e8", "#ff6a3a"]);
      O.wire(ctx, [-8, 5.2, 14], [8, 5.6, 14], 1, "#1a1430", 3, ["#ff6a3a", "#ffe14a", "#7af07a"]);
    });
    return b.scene({ cam: { p: [0.3, 1.6, -4.3], f: 150, cx: 160, cy: 96, yaw: 0.02, pitch: 0.02 }, ambient: "#6a4a8a", bounce: "#2a1830", sky: SKY.dusk() });
  });

  /* ---------------------------------------------------------------- P09 Lyle's Bakery, four in the morning */
  add("lyles_bakery", function () {
    var b = new B();
    b.room({ w: 6, d: 7, h: 3.1, z0: -5, floor: M.tiles("#c8b8a0", "#a89880", 0.35), ceil: M.flat("#4a3a4a"),
      back: function (h) {
        var u = h.uv[0], v = h.uv[1];
        // the ovens: three iron doors in a tiled wall, glowing at the seams
        if (v > 0.6 && v < 2.2 && u > -2.6 && u < 2.6) {
          var k = Math.floor((u + 2.6) / 1.73), fu = (u + 2.6) - k * 1.73;
          if (fu > 0.15 && fu < 1.58) {
            if (v > 1.2 && v < 1.6 && fu > 0.3 && fu < 1.43) return { albedo: [0, 0, 0], emit: c("#ff6a3a") };
            return { albedo: c(Math.abs(v - 1.9) < 0.06 ? "#d0a030" : "#2a2230") };
          }
        }
        return { albedo: c((Math.floor(u / 0.15) + Math.floor(v / 0.15)) % 2 ? "#e8e0c8" : "#d8d0b8") };
      },
      left: M.windows(M.plaster("#e8c8a0"), [[-2.5, 1, 1, 2.6, "sky", 3, 2]], { frame: "#2a4a4a" }),
      right: M.plaster("#e8c8a0") });
    // racks of loaves and the long table
    for (var r = 0; r < 4; r++) {
      b.box([2.2, 0.4 + r * 0.5, -1], [2.95, 0.44 + r * 0.5, 3], M.flat("#8a8aa0"));
      for (var i = 0; i < 6; i++) b.sph([2.55, 0.52 + r * 0.5, -0.7 + i * 0.65], 0.14, M.flat(["#d0913a", "#b86e30", "#eab45a"][(i + r) % 3]));
    }
    b.box([-1.6, 0.8, -1.5], [0.6, 0.9, 4], M.planks("#c08a5a", { w: 0.22 }));
    [[-1.4, -1.3], [0.4, -1.3], [-1.4, 3.8], [0.4, 3.8]].forEach(function (l) { b.box([l[0], 0, l[1]], [l[0] + 0.1, 0.8, l[1] + 0.1], M.flat("#5a3a2a")); });
    b.box([-1.2, 0.9, 0.5], [-0.2, 0.92, 1.5], M.flat("#f4ecd2"));
    b.cyl(-0.7, 2.5, 0.35, 0.9, 1.1, M.flat("#b8bcd0"));
    [["#eab45a", -1, -0.8], ["#d0913a", 0.1, 3.2]].forEach(function (x) { b.sph([x[1], 1.0, x[2]], 0.13, M.flat(x[0])); });
    b.light([0, 1.3, 6.8], "#ff7a3a", 2.4, 3);
    b.sph([-0.5, 2.6, 1.2], 0.12, M.emit("#fff2b8"), { noShadow: true });
    b.light([-0.5, 2.5, 1.2], "#ffd8a0", 1.4, 2.4);
    b.over(function (ctx) { O.glow(ctx, ctx.project([-0.5, 2.6, 1.2]), 11, "#ffd080", 0.3); O.glow(ctx, ctx.project([0, 1.4, 6.9]), 26, "#ff6a3a", 0.12); });
    return b.scene({ cam: { p: [-0.9, 1.55, -4.3], f: 150, cx: 160, cy: 96, yaw: 0.05, pitch: 0.02 }, ambient: "#4a3a8a", bounce: "#2a1420", sky: SKY.night({}) });
  });

  /* ---------------------------------------------------------------- P26 Double Shift Café, a weekday morning */
  add("double_shift", function () {
    var b = new B();
    b.room({ w: 6.5, d: 6, h: 3, z0: -5, floor: M.tiles("#5a8ad0", "#e8dcc4", 0.25), ceil: M.flat("#c8b8a8"),
      back: M.windows(M.stripes("#2fcf7a", "#2ab86c", 0.3, { dado: 1.1, dadoCol: "#f4ecd2" }), [[-2.6, -0.4, 1.4, 2.4, "#1a1840", 1, 1]], { frame: "#2a2230" }),
      left: M.windows(M.plaster("#f4ecd2"), [[-3.5, 3.5, 0.9, 2.7, "sky", 4, 1]], { frame: "#b03a34", bar: 0.07 }),
      right: M.plaster("#e0c8a8") });
    // the menu board on the back wall (chalk lines), the counter, the machine, stools
    b.box([0.2, 1.4, 5.9], [2.8, 2.5, 5.98], function (h) { var v = h.p[1], u = h.p[0]; return { albedo: c(Math.abs(((v - 1.4) % 0.18) - 0.09) < 0.02 && u > 0.35 && u < 0.35 + 2.2 * hash(Math.floor(v / 0.18), 3) ? "#f4ecd2" : "#1a2a2a") }; });
    b.box([0, 0, 3.4], [3.25, 1.05, 4.3], function (h) { return { albedo: c(h.n[2] < -0.5 ? (Math.floor(h.p[0] / 0.2) % 2 ? "#b03a34" : "#c0403a") : "#8a5a3a") }; });
    b.box([-0.05, 1.05, 3.35], [3.25, 1.12, 4.35], M.flat("#e8e0d0"));
    b.box([1.6, 1.12, 3.7], [2.5, 1.7, 4.2], M.flat("#c0c8d8"));
    b.box([1.7, 1.25, 3.65], [2.4, 1.35, 3.7], M.flat("#2a2230"));
    b.cyl(0.8, 3.8, 0.18, 1.12, 1.4, M.flat("#f4ecd2"));
    b.box([0.1, 1.12, 3.6], [0.5, 1.55, 4.1], function (h) { return { albedo: c(h.p[1] > 1.4 ? "#d0913a" : "#f4ecd2") }; });
    [-0.8, 0.8, 2.4].forEach(function (x) { b.cyl(x, 2.9, 0.22, 0.72, 0.78, M.flat("#b03a34")); b.cyl(x, 2.9, 0.04, 0, 0.72, M.flat("#c0c0d0")); });
    // window seats and a small table
    b.box([-3.25, 0, -3], [-2.6, 0.5, 3], M.flat("#b03a34"));
    b.cyl(-1.9, 0.5, 0.35, 0.72, 0.76, M.flat("#f4ecd2")); b.cyl(-1.9, 0.5, 0.04, 0, 0.72, M.flat("#2a2230"));
    b.cyl(-1.9, 0.4, 0.05, 0.76, 0.84, M.flat("#ffffff"));
    // the street outside, morning: a bus shelter and the building opposite
    b.rect(1, 0, [-20, -3.3], [-10, 20], M.plaster("#8a8aa8"), { noShadow: true });
    b.box([-14, 0, -8], [-8, 9, 16], M.facade(M.brick("#e07030", "#8a3a22"), { lit: ["#fff4d8"], dim: 0.9, seed: 8, frame: "#f4ecd2", dark: "#5a8ad0" }));
    b.sun([-0.8, 0.5, 0.3], "#fff4d8", 0.9);
    [[-1, 1.5], [1.5, 1.5]].forEach(function (l) { b.sph([l[0], 2.6, l[1]], 0.18, M.emit("#fff2b8"), { noShadow: true }); b.light([l[0], 2.5, l[1]], "#ffe0b0", 0.6, 2.2); });
    return b.scene({ cam: { p: [0.6, 1.5, -4.4], f: 150, cx: 160, cy: 94, yaw: -0.06, pitch: 0.02 }, ambient: "#7a88c0", bounce: "#3a2a28", sky: SKY.day({}) });
  });

  /* ---------------------------------------------------------------- P19 the university arts building: a studio, late afternoon */
  add("university", function () {
    var b = new B();
    var canv = ["#ff86c2", "#3ce8e8", "#ffe14a", "#e07030", "#5a8ad0", "#7af07a", "#c0407a"];
    b.room({ w: 9, d: 9, h: 4.6, z0: -5, floor: M.planks("#c8905a", { w: 0.3, along: "z" }), ceil: M.flat("#e8c8b0"),
      left: M.windows(M.plaster("#f0e8e0"), [[-3, 1.5, 1, 4.2, "sky", 3, 3], [2.5, 7, 1, 4.2, "sky", 3, 3]], { frame: "#3a3a5a", bar: 0.06 }),
      back: function (h) {
        var u = h.uv[0], v = h.uv[1];
        // a pin-up wall of work
        if (v > 1.2 && v < 3.8 && u > -4 && u < 4) {
          var i = Math.floor((u + 4) / 1.1), j = Math.floor((v - 1.2) / 0.9), fu = (u + 4) / 1.1 - i, fv = (v - 1.2) / 0.9 - j;
          if (fu > 0.1 && fu < 0.9 && fv > 0.1 && fv < 0.9 && hash(i, j) > 0.25) {
            var a = canv[(i * 2 + j) % canv.length], bb = canv[(i + j * 3 + 1) % canv.length];
            return { albedo: c(vnoise(u * 6, v * 6) > 0.5 ? a : bb) };
          }
        }
        return { albedo: c("#f0e8e0") };
      },
      right: M.plaster("#e8d8c8") });
    // easels with canvases, a plan chest, paint-spattered floor tarp
    [[-1.8, 3.5, 0], [1.6, 2.2, 1], [0.2, 5.8, 2]].forEach(function (e) {
      var x = e[0], z = e[1], col = canv[e[2] * 2 % canv.length];
      b.box([x - 0.05, 0, z], [x + 0.05, 2.2, z + 0.05], M.flat("#8a5a3a"));
      b.box([x - 0.6, 0.85, z - 0.1], [x + 0.6, 0.9, z + 0.1], M.flat("#8a5a3a"));
      b.box([x - 0.55, 0.9, z - 0.08], [x + 0.55, 1.9, z - 0.02], function (h) { return { albedo: c(h.n[2] < -0.5 ? (vnoise(h.p[0] * 4 + e[2], h.p[1] * 4) > 0.5 ? col : canv[(e[2] * 2 + 3) % canv.length]) : "#f4ecd2") }; });
    });
    b.box([3.6, 0, 1], [4.5, 1, 3.4], M.planks("#8a5a3a", { w: 0.25, axis: "v" }));
    b.rect(1, 0.01, [-3, 2], [1, 7], function (h) { var n = hash(Math.floor(h.p[0] * 5), Math.floor(h.p[2] * 5)); return { albedo: c(n > 0.93 ? canv[Math.floor(n * 70) % canv.length] : "#d8d0c0") }; }, { noShadow: true });
    b.light([-4.2, 2.8, -0.8], "#ffc890", 1.5, 3);
    b.light([-4.2, 2.8, 4.8], "#ffc890", 1.5, 3);
    return b.scene({ cam: { p: [0.8, 1.7, -4.4], f: 150, cx: 160, cy: 92, yaw: -0.08, pitch: 0.02 }, ambient: "#7a68b0", bounce: "#3a2030", sky: SKY.dusk({ clouds: { at: 0.62, col: "#ffb8a0", k: 0.8 } }) });
  });

  /* ---------------------------------------------------------------- P20 Okafor Restoration, the warded workroom, night */
  add("okafor_restoration", function () {
    var b = new B();
    var jars = ["#e8c040", "#b03a34", "#2a4ab8", "#2fcf7a", "#c0407a", "#e07030", "#3ce8e8", "#7a4a8a", "#f4ecd2"];
    b.room({ w: 6, d: 6.5, h: 3.2, z0: -5, floor: M.planks("#7a4a3a", { w: 0.2, along: "z" }), ceil: M.flat("#2a2040"),
      back: M.stripes("#2a5a5a", "#265454", 0.25, { dado: 1, dadoCol: "#5a3a2a" }),
      left: function (h) {
        var u = h.uv[0], v = h.uv[1];
        // shelves of pigment jars
        if (v > 0.9 && v < 2.9 && u > -2 && u < 5) {
          var row = Math.floor((v - 0.9) / 0.5), fv = (v - 0.9) / 0.5 - row;
          if (fv < 0.08) return { albedo: c("#5a3a2a") };
          var k = Math.floor((u + 2) / 0.16), fu = (u + 2) / 0.16 - k;
          if (fv > 0.15 && fv < 0.75 && fu > 0.15 && fu < 0.85) return { albedo: c(jars[(k * 7 + row * 3) % jars.length]) };
          return { albedo: c("#3a2a3a") };
        }
        return { albedo: c("#2a5a5a") };
      },
      right: M.stripes("#2a5a5a", "#265454", 0.25, { dado: 1, dadoCol: "#5a3a2a" }) });
    // the painted folding screen, standing open: four panels of a stylised garden and a moon
    var panels = [[-1.8, 5.2, -0.9, 5.7], [-0.9, 5.7, 0, 5.2], [0, 5.2, 0.9, 5.7], [0.9, 5.7, 1.8, 5.2]];
    panels.forEach(function (pn, i) {
      b.poly([[pn[0], 0.1, pn[1]], [pn[2], 0.1, pn[3]], [pn[2], 2.3, pn[3]], [pn[0], 2.3, pn[1]]], function (h) {
        var x = h.p[0], y = h.p[1];
        if (y > 2.2 || y < 0.2) return { albedo: c("#d0a030") };
        if (Math.hypot(x - 0.5, y - 1.8) < 0.22) return { albedo: [0, 0, 0], emit: c("#f4ecd2") };
        var hill = 0.7 + Math.sin(x * 2.3) * 0.25;
        if (y < hill) return { albedo: c(vnoise(x * 8, y * 8) > 0.55 ? "#2fcf7a" : "#1a9e8e") };
        if (y < hill + 0.35 && Math.abs(Math.sin(x * 9)) > 0.93) return { albedo: c("#ff86c2") };
        return { albedo: c(y > 1.6 ? "#1f1a4e" : "#382a78") };
      });
    });
    // workbench with a lamp, a frame being regilded
    b.box([1.2, 0, 0.5], [2.9, 0.92, 3.5], M.planks("#a8703a", { w: 0.2 }));
    b.box([1.6, 0.92, 1.2], [2.6, 0.97, 2.3], function (h) { var e = Math.min(h.p[0] - 1.6, 2.6 - h.p[0], h.p[2] - 1.2, 2.3 - h.p[2]); return { albedo: c(e < 0.12 ? "#e8c040" : "#382a78") }; });
    b.cyl(2.4, 3, 0.02, 0.92, 1.6, M.flat("#1a1430"));
    b.sph([2.25, 1.62, 2.8], 0.1, M.emit("#fff2b8"), { noShadow: true });
    b.light([2.2, 1.55, 2.6], "#ffd090", 1.8, 1.6);
    b.light([0.5, 1.8, 5], "#9af4f0", 1.2, 2.2);
    b.light([-1.5, 2.6, 0.5], "#ffb070", 1.2, 2.6);
    b.over(function (ctx) {
      O.glow(ctx, ctx.project([2.25, 1.62, 2.8]), 10, "#ffd080", 0.35);
      // the wards: faint lines of light across the doorway and floor
      O.line(ctx, [-3, 0.02, 1], [3, 0.02, 1], "#9af4f0", 0.3);
      O.line(ctx, [-3, 0.02, 4.6], [3, 0.02, 4.6], "#9af4f0", 0.3);
    });
    return b.scene({ cam: { p: [0.3, 1.55, -2.6], f: 150, cx: 160, cy: 94, yaw: 0.02, pitch: 0.02 }, ambient: "#6a50a8", bounce: "#2a1838" });
  });

  /* ---------------------------------------------------------------- P23 Calder General, a corridor on the night shift */
  add("calder_general", function () {
    var b = new B();
    b.room({ w: 3.4, d: 30, h: 2.8, z0: -5, floor: function (h) { return { albedo: c(Math.floor(h.p[2] / 1.2) % 2 ? "#6ab0a8" : "#62a8a0"), wet: 0.18 }; },
      ceil: function (h) { var z = h.p[2]; return (z % 3 > 1.2 && z % 3 < 2.4 && Math.abs(h.p[0]) < 0.25) ? { albedo: [0, 0, 0], emit: c("#e8fff4") } : { albedo: c("#c8d0d8") }; },
      back: M.windows(M.plaster("#d8e0e8"), [[-1.2, 1.2, 0.2, 2.3, "#1a1840", 2, 1]], { frame: "#2a4ab8" }),
      left: function (h) {
        var u = h.uv[0], v = h.uv[1];
        if (v < 1.0) return { albedo: c(v > 0.95 ? "#2a4ab8" : "#8ab8c8") };
        if ((u % 6) > 1 && (u % 6) < 2.4 && v < 2.2) return { albedo: c(v > 2.1 || (u % 6) < 1.1 || (u % 6) > 2.3 ? "#2a4ab8" : "#5a8ad0") };
        return { albedo: c("#e0e8e8") };
      },
      right: function (h) {
        var u = h.uv[0], v = h.uv[1];
        if (v < 1.0) return { albedo: c(v > 0.95 ? "#2a4ab8" : "#8ab8c8") };
        if ((u % 7) > 3 && (u % 7) < 5.5 && v > 1 && v < 2.1) return { albedo: [0, 0, 0], emit: c((u % 7) < 3.1 || (u % 7) > 5.4 ? "#2a2262" : "#1f1a4e") };
        return { albedo: c("#e0e8e8") };
      } });
    // chairs, a vending machine glowing, signage
    for (var i = 0; i < 4; i++) b.box([-1.7, 0.42, 1 + i * 0.6], [-1.25, 0.48, 1.5 + i * 0.6], M.flat("#ff6a3a"));
    b.box([1.1, 0, 3], [1.7, 1.9, 3.8], function (h) { return h.n[0] < -0.5 && h.p[1] > 0.7 && h.p[1] < 1.8 ? { albedo: [0, 0, 0], emit: c((Math.floor(h.p[1] / 0.25) + Math.floor(h.p[2] / 0.2)) % 3 ? "#9af4f0" : "#ff86c2") } : { albedo: c("#2a4ab8") }; });
    b.box([-0.8, 2.3, 8], [0.8, 2.6, 8.05], M.sign(M.flat("#2fcf7a"), "WARD 7", -0.45, 2.55, 0.05, "#f4ecd2"));
    for (var z = 1.8; z < 30; z += 3) b.light([0, 2.6, z], "#d8fff0", 0.55, 2, { noShadow: true });
    b.light([1.0, 1.3, 3.4], "#9af4f0", 0.8, 1.2);
    return b.scene({ cam: { p: [0.3, 1.55, -3.8], f: 150, cx: 160, cy: 92, yaw: 0, pitch: 0 }, ambient: "#5a6aa8", bounce: "#1a2030", fog: ["#8ab8c8", 60, 0.35] });
  });

  /* ---------------------------------------------------------------- P25 Northline Station, the late platform */
  add("northline_station", function (opt) {
    var b = new B();
    // platform, edge line, track bed, the train with lit windows, the canopy on iron columns
    b.box([-4, 0, -10], [4, 1, 80], function (h) { if (h.n[1] > 0.5) return { albedo: c(h.p[0] > 3.4 ? (h.p[0] > 3.6 ? "#e8c040" : "#f4ecd2") : "#6a6a86"), wet: 0.2 }; return { albedo: c("#4a4a66") }; });
    b.rect(1, 0, [4, 20], [-10, 80], M.flat("#1f1a4e"), { noShadow: true });
    b.box([4.6, 0.2, 0], [7.6, 3.8, 80], function (h) {
      var z = h.p[2], y = h.p[1];
      if (h.n[0] < -0.5) {
        if (y > 1.9 && y < 2.9 && (z % 3.2) > 0.4 && (z % 3.2) < 2.8) return { albedo: [0, 0, 0], emit: c("#ffdc7c") };
        if (y > 0.9 && y < 1.1) return { albedo: c("#b03a34") };
        if ((z % 22) > 8 && (z % 22) < 9.4 && y > 0.6 && y < 3) return { albedo: c("#1a1430") };
      }
      return { albedo: c(y > 3.3 ? "#6a6a86" : "#3a78d0") };
    });
    b.box([-4.5, 5, -10], [5, 5.3, 80], M.flat("#2a2262"));
    b.rect(1, 4.99, [-4.5, 5], [-10, 80], function (h) { return (((h.p[2] % 5) + 5) % 5) < 0.6 && Math.abs(h.p[0]) < 1.5 ? { albedo: [0, 0, 0], emit: c("#fff2b8") } : { albedo: c("#382a78") }; });
    for (var z = 0; z < 80; z += 8) b.cyl(-1.8, z, 0.12, 1, 5, M.flat("#b03a34"));
    // the back wall with posters and the departures board, a bench, a clock
    b.rect(0, -4, [-10, 80], [1, 5], M.facade(M.brick("#c86a48", "#6a3a2a", { h: 0.1, w: 0.3 }), { ground: -0.6, wx: 6, wy: 10, ww: 2.2, wh: 1.4, lit: ["#ff86c2", "#3ce8e8", "#ffe14a"], dim: 0.1, seed: 3 }));
    b.box([-3.9, 3.2, 5], [-3.6, 4.2, 8.5], function (h) { return h.n[0] > 0.5 ? { albedo: [0, 0, 0], emit: c(Math.abs((h.p[1] - 3.2) % 0.25) < 0.06 ? "#1a1440" : "#ffb03a") } : { albedo: c("#1a1430") }; });
    b.box([-3.9, 1, 12], [-3.3, 1.45, 15], M.planks("#8a5a3a", { w: 0.15, axis: "v" }));
    disc(b, -1.8, 4.2, 20, 0.45, "x", function (h) { var r = Math.hypot(h.p[1] - 4.2, h.p[2] - 20); return { albedo: c(r > 0.38 ? "#1a1430" : "#f4ecd2") }; });
    for (var z2 = 2; z2 < 80; z2 += 5) b.light([0, 4.6, z2], "#fff0c8", 0.9, 2.4, { noShadow: true });
    b.light([4.2, 2.4, 10], "#ffcf80", 0.9, 3);
    b.over(function (ctx) {
      var cc = ctx.project([-1.78, 4.2, 20]); if (cc) { ctx.line(cc, { x: cc.x, y: cc.y - 3 }, c("#1a1430")); ctx.line(cc, { x: cc.x + 2, y: cc.y }, c("#1a1430")); }
      var bd = ctx.project([-3.55, 3.9, 5.2]); if (bd) O.text(ctx, "NORTH", Math.round(bd.x) + 2, Math.round(bd.y), "#ffe14a");
      if (opt && opt.snow) O.snow(ctx, 220, 3);
    });
    return b.scene({ cam: { p: [0.5, 2.6, -8], f: 150, cx: 150, cy: 100, yaw: 0.02, pitch: 0.02 }, ambient: "#5a48a8", bounce: "#1a1030", fog: ["#6a3fa0", 70, 0.5] });
  });

  /* ---------------------------------------------------------------- P30 Rusk Funeral Rooms, the viewing room, afternoon */
  add("rusk_funeral", function () {
    var b = new B();
    b.room({ w: 6, d: 7, h: 3.2, z0: -5, floor: function (h) { var v = h.p[0]; return { albedo: c(Math.abs(v) < 1 ? "#7a2a4a" : "#5a4a6a") }; }, ceil: M.flat("#e8d8c8"),
      back: M.windows(M.stripes("#8a9ab8", "#8294b0", 0.2, { dado: 1, dadoCol: "#5a3a3a" }), [[-1, 1, 1, 2.8, "#f4d8e8", 2, 3]], { frame: "#f4ecd2", bar: 0.06 }),
      left: M.stripes("#8a9ab8", "#8294b0", 0.2, { dado: 1, dadoCol: "#5a3a3a" }), right: M.stripes("#8a9ab8", "#8294b0", 0.2, { dado: 1, dadoCol: "#5a3a3a" }) });
    // rows of chairs, a lectern, white lilies in tall vases, a draped stand
    for (var r = 0; r < 3; r++) for (var i = 0; i < 4; i++) { var x = (i < 2 ? -2.4 : 1.2) + (i % 2) * 0.6, z = 0.5 + r * 1.1; b.box([x, 0.45, z], [x + 0.5, 0.52, z + 0.5], M.flat("#b03a34")); b.box([x, 0.52, z + 0.44], [x + 0.5, 1.05, z + 0.5], M.flat("#8a2a2a")); }
    b.box([-0.9, 0, 5.4], [0.9, 0.9, 6.2], M.flat("#f4ecd2"));
    b.box([-0.95, 0.9, 5.35], [0.95, 0.95, 6.25], M.flat("#e8e0d0"));
    [-2.2, 2.2].forEach(function (x) {
      b.cyl(x, 5.8, 0.18, 0, 0.9, M.flat("#5a8ad0"));
      for (var k = 0; k < 7; k++) { var a = k * 0.9; b.sph([x + Math.cos(a) * 0.22, 1.15 + (k % 3) * 0.12, 5.8 + Math.sin(a) * 0.22], 0.09, M.flat("#fff8f0")); }
      b.sph([x, 1.0, 5.8], 0.2, M.flat("#3a9a5a"));
    });
    b.light([0, 2.4, 7], "#ffe0f0", 1.8, 3);
    b.light([0, 2.9, 2], "#fff0d8", 0.8, 3);
    return b.scene({ cam: { p: [0.2, 1.55, -3.8], f: 150, cx: 160, cy: 92, yaw: 0, pitch: 0.02 }, ambient: "#7a78b8", bounce: "#2a2030" });
  });

  /* ---------------------------------------------------------------- P31 Rell & Company, antiques, a dim afternoon */
  add("rell_company", function () {
    var b = new B();
    var brass = "#e8c040";
    b.room({ w: 6, d: 8, h: 3.4, z0: -5, floor: M.planks("#6a3a2a", { w: 0.14, along: "z" }), ceil: M.flat("#2a2040"),
      back: M.plaster("#3a5a4a"), left: function (h) {
        var u = h.uv[0], v = h.uv[1];
        // a wall of frames, clocks and mirrors
        var i = Math.floor((u + 5) / 0.9), j = Math.floor(v / 0.8), fu = (u + 5) / 0.9 - i, fv = v / 0.8 - j;
        if (v > 0.9 && v < 3.2 && hash(i, j) > 0.25 && fu > 0.12 && fu < 0.88 && fv > 0.1 && fv < 0.9) {
          var e = Math.min(fu - 0.12, 0.88 - fu, fv - 0.1, 0.9 - fv);
          if (e < 0.08) return { albedo: c(hash(j, i) > 0.5 ? brass : "#8a5a3a") };
          return { albedo: c(["#2a4ab8", "#3a9a5a", "#b03a34", "#c8d8e8", "#e07030"][(i + j) % 5]) };
        }
        return { albedo: c("#3a5a4a") };
      }, right: M.plaster("#3a5a4a") });
    // a long display counter, a grandfather clock, lamps with coloured shades, a cabinet of curios
    b.box([1.4, 0, -1], [2.6, 0.95, 4.5], function (h) { return h.n[1] > 0.5 || h.p[1] < 0.3 ? { albedo: c("#5a3a2a") } : { albedo: c("#2a3a5a") }; });
    for (var k = 0; k < 6; k++) b.sph([1.7 + (k % 2) * 0.5, 0.55, -0.6 + k * 0.85], 0.1, M.flat([brass, "#c8d8e8", "#b03a34", "#2fcf7a"][k % 4]));
    b.box([-2.9, 0, 5], [-2.3, 2.4, 5.6], function (h) { return h.n[0] > 0.5 && Math.hypot(h.p[1] - 1.9, h.p[2] - 5.3) < 0.2 ? { albedo: c("#f4ecd2") } : { albedo: c("#6a3a2a") }; });
    b.box([0.5, 0, 7.3], [2.8, 2.6, 7.95], function (h) { return h.n[2] < -0.5 && (Math.floor(h.p[1] / 0.5) % 2) ? { albedo: c(["#e8c040", "#c8d8e8", "#b03a34"][Math.floor(h.p[0] * 3) % 3]) } : { albedo: c("#4a2a2a") }; });
    [[-1.2, 3, "#ff86c2"], [0.6, 5.5, "#3ce8e8"], [2, 1.2, "#ffe14a"]].forEach(function (l) {
      b.cyl(l[0], l[1], 0.01, 1.2, 3.4, M.flat("#1a1430"), { noShadow: true });
      b.cyl(l[0], l[1], 0.25, 1.05, 1.25, M.emit(l[2], "#000000"), { noShadow: true });
      b.light([l[0], 1.0, l[1]], l[2], 1.3, 1.8);
    });
    b.light([0, 3, -2], "#ffd8a0", 0.7, 4);
    return b.scene({ cam: { p: [0.2, 1.5, -4.2], f: 150, cx: 160, cy: 94, yaw: 0.04, pitch: 0.02 }, ambient: "#5a48a0", bounce: "#2a1830" });
  });

  /* ---------------------------------------------------------------- P35 the Neutral Table, the upstairs room, night */
  add("neutral_table", function () {
    var b = new B();
    b.room({ w: 7, d: 8, h: 3.4, z0: -5, floor: M.planks("#5a2a2a", { w: 0.3, along: "z" }), ceil: M.flat("#2a1a2a"),
      back: M.windows(M.stripes("#2a5a4a", "#265444", 0.3, { dado: 1, dadoCol: "#4a2a1a" }), [[-2.6, -0.8, 1, 2.9, "sky", 2, 3], [0.8, 2.6, 1, 2.9, "sky", 2, 3]], { frame: "#e8c040" }),
      left: M.stripes("#2a5a4a", "#265444", 0.3, { dado: 1, dadoCol: "#4a2a1a" }), right: M.stripes("#2a5a4a", "#265444", 0.3, { dado: 1, dadoCol: "#4a2a1a" }) });
    // brass wall sconces
    [[-3.4, 1], [-3.4, 4], [3.4, 1], [3.4, 4]].forEach(function (w) { b.sph([w[0] * 0.97, 2.2, w[1]], 0.1, M.emit("#ffcf80"), { noShadow: true }); b.light([w[0] * 0.9, 2.2, w[1]], "#ffcf80", 0.6, 1.2); });
    // the long table, white cloth, candles down the middle, chairs set evenly on both sides
    b.box([-1, 0.78, -0.5], [1, 0.85, 6], M.flat("#f4ecd2"));
    b.box([-1.02, 0.55, -0.52], [1.02, 0.78, 6.02], M.flat("#e8e0d0"));
    for (var z = 0; z < 6; z += 1.1) {
      [-1.5, 1.5].forEach(function (x) { b.box([x - 0.25, 0.45, z], [x + 0.25, 0.52, z + 0.45], M.flat("#3a1a2a")); b.box([x < 0 ? x - 0.25 : x + 0.2, 0.52, z], [x < 0 ? x - 0.2 : x + 0.25, 1.3, z + 0.45], M.flat("#3a1a2a")); });
      b.cyl(0, z + 0.2, 0.04, 0.85, 1.12, M.flat("#f4ecd2"));
      b.sph([0, 1.18, z + 0.2], 0.04, M.emit("#ffe14a"), { noShadow: true });
      b.light([0, 1.22, z + 0.2], "#ffb050", 1.1, 1.8);
    }
    b.over(function (ctx) { for (var z = 0; z < 6; z += 1.1) O.glow(ctx, ctx.project([0, 1.18, z + 0.2]), 6, "#ffb050", 0.3); });
    return b.scene({ cam: { p: [0.4, 1.9, -4.2], f: 150, cx: 160, cy: 100, yaw: -0.02, pitch: -0.05 }, ambient: "#6a4898", bounce: "#2a1228", sky: SKY.night({}) });
  });

  /* ---------------------------------------------------------------- P37 Sorrell House on Briar Heights, a charity evening */
  add("sorrell_house", function () {
    var b = new B();
    b.rect(1, 0, [-80, 80], [-10, 140], function (h) { return { albedo: c(vnoise(h.p[0] * 0.4, h.p[2] * 0.4) > 0.5 ? "#2a5a4a" : "#244e42") }; }, { noShadow: true });
    b.rect(1, 0.01, [-3, 3], [-10, 18], M.plaster("#d8c8b8", { f: 3 }), { noShadow: true });
    b.cyl(0, 10, 3, 0, 0.3, M.plaster("#d8c8b8"));
    b.cyl(0, 10, 1.2, 0.3, 1.2, M.flat("#c8c8d8")); b.cyl(0, 10, 0.3, 1.2, 2.2, M.flat("#c8c8d8"));
    var stone = M.facade(M.plaster("#f0e8e0", { f: 1.5 }), { wx: 2.6, wy: 3.4, ww: 1.2, wh: 2.2, ground: 0.2, dim: 0.25, lit: ["#ffdc7c", "#fbbf52", "#fff2b8"], seed: 11, frame: "#f4f0e8" });
    b.box([-14, 0, 20], [14, 10.5, 30], stone);
    b.box([-4, 0, 18], [4, 12, 30], stone);
    b.box([-4.3, 12, 17.8], [4.3, 12.5, 30], M.flat("#f4f0e8"));
    b.gable(-4, 4, 18, 30, 12.5, 2.4, M.tiles("#2a3a6a", "#26346a", 0.4), M.plaster("#f0e8e0"), true);
    b.gable(-14, 14, 20, 30, 10.5, 2.8, M.tiles("#2a3a6a", "#26346a", 0.4), null);
    [-3, -1, 1, 3].forEach(function (x) { b.cyl(x, 17.5, 0.28, 0, 5.2, M.flat("#f4f0e8")); });
    b.box([-4, 5.2, 16.8], [4, 5.8, 18], M.flat("#f4f0e8"));
    b.rect(2, 17.98, [-1.2, 1.2], [0, 3], M.emit("#ffcf80"));
    // lanterns along the drive, dark cypress trees
    for (var z = -4; z < 16; z += 4) [-3.6, 3.6].forEach(function (x) { b.cyl(x, z, 0.05, 0, 1.3, M.flat("#1a1430")); b.sph([x, 1.4, z], 0.14, M.emit("#ffcf80"), { noShadow: true }); b.light([x, 1.4, z], "#ffb060", 0.8, 1.6); });
    [[-9, 12], [9, 12], [-18, 16], [18, 16]].forEach(function (t) { b.cyl(t[0], t[1], 1, 0, 7, M.leaves("#1f3a4a", "#18303e")); b.sph([t[0], 7, t[1]], 1, M.leaves("#1f3a4a", "#18303e")); });
    b.light([0, 4, 16], "#ffcf80", 2, 3);
    b.over(function (ctx) { for (var z = -4; z < 16; z += 4) [-3.6, 3.6].forEach(function (x) { O.glow(ctx, ctx.project([x, 1.4, z]), 5, "#ffcf80", 0.35); }); });
    return b.scene({ cam: { p: [0.6, 1.8, -10], f: 150, cx: 160, cy: 110, yaw: -0.02, pitch: 0.13 }, ambient: "#5a58b0", bounce: "#1a1030", fog: ["#6a3fa0", 120, 0.35], sky: SKY.dusk() });
  });

  /* ---------------------------------------------------------------- P55 Bracken Court at the Candle Fair, snow */
  add("bracken_court", function () {
    var b = new B();
    b.rect(1, 0, [-40, 40], [-10, 120], function (h) { return { albedo: c(vnoise(h.p[0], h.p[2]) > 0.55 ? "#e8e8ff" : "#d8d8f4") }; }, { noShadow: true });
    // a street of timbered houses, every window with a candle, stalls down the middle
    function house(x0, x1, z0, z1, h, wall, seed, side) {
      var m = function (hh, sc) {
        var u = side ? hh.p[2] : hh.p[0], v = hh.p[1];
        if ((side ? Math.abs(hh.n[0]) : Math.abs(hh.n[2])) > 0.5) {
          var fu = ((u % 2.2) + 2.2) % 2.2, fv = v % 2.6;
          if (fu > 0.6 && fu < 1.6 && fv > 1 && fv < 2.1 && v > 0.8) {
            if (fu < 0.66 || fu > 1.54 || fv < 1.06 || fv > 2.04) return { albedo: c("#3a2a2a") };
            return { albedo: [0, 0, 0], emit: c(hash(Math.floor(u / 2.2) + seed, Math.floor(v / 2.6)) > 0.2 ? "#ffcf6a" : "#1f1a4e") };
          }
          if (Math.abs(fv - 0.4) < 0.08 || fu < 0.1) return { albedo: c("#4a2a2a") };
        }
        return { albedo: c(wall) };
      };
      b.box([x0, 0, z0], [x1, h, z1], m);
      b.gable(x0, x1, z0, z1, h, 2.4, M.flat("#f4f4ff"), M.flat(wall), side);
    }
    var walls = ["#e8c8a0", "#c8d8e8", "#e8b8b8", "#d8e0b0", "#f0e0c8"];
    for (var i = 0; i < 6; i++) { house(-12, -5, i * 7, i * 7 + 6.6, 5 + (i % 2), walls[i % 5], i, true); house(5, 12, i * 7 + 2, i * 7 + 8.6, 4.6 + ((i + 1) % 2), walls[(i + 2) % 5], i + 9, true); }
    // stalls with striped awnings
    [[-2.6, 6, "#b03a34"], [2.4, 11, "#2a4ab8"], [-2.4, 18, "#3a9a5a"], [2.6, 25, "#c0407a"]].forEach(function (st) {
      b.box([st[0] - 1, 0, st[1]], [st[0] + 1, 1, st[1] + 1.2], M.planks("#8a5a3a", { w: 0.2 }));
      [st[0] - 0.9, st[0] + 0.9].forEach(function (x) { b.box([x - 0.04, 1, st[1]], [x + 0.04, 2.2, st[1] + 0.08], M.flat("#5a3a2a")); });
      b.poly([[st[0] - 1.1, 2.2, st[1] - 0.4], [st[0] + 1.1, 2.2, st[1] - 0.4], [st[0] + 1.1, 2.5, st[1] + 1.3], [st[0] - 1.1, 2.5, st[1] + 1.3]], function (h) { return { albedo: c(Math.floor(h.p[0] / 0.3) % 2 ? st[2] : "#f4ecd2") }; });
      b.light([st[0], 1.8, st[1] - 0.2], "#ffc060", 1, 1.6);
    });
    b.box([-1.2, 0, 50], [1.2, 9, 53], M.plaster("#c8b8a8"));
    b.box([-1.5, 9, 49.7], [1.5, 9.4, 53.3], M.flat("#8a8aa8"));
    disc(b, 0, 7.4, 49.95, 0.8, "z", function (h) { return { albedo: [0, 0, 0], emit: c(Math.hypot(h.p[0], h.p[1] - 7.4) > 0.7 ? "#3a2a2a" : "#fff2b8") }; });
    for (var z = 2; z < 44; z += 7) { b.light([-4.6, 2.2, z], "#ffcf6a", 1.1, 2.2); b.light([4.6, 2.2, z + 2], "#ffcf6a", 1.1, 2.2); }
    b.over(function (ctx) {
      O.wire(ctx, [-5, 4.6, 8], [5, 4.4, 9], 0.6, "#2a2230", 3, ["#ffe14a", "#ff86c2", "#ffcf6a"]);
      O.wire(ctx, [-5, 4.8, 20], [5, 4.6, 21], 0.6, "#2a2230", 3, ["#3ce8e8", "#ffe14a", "#ff6a3a"]);
      O.wire(ctx, [-5, 4.6, 32], [5, 4.6, 33], 0.5, "#2a2230", 3, ["#ffcf6a", "#ff86c2"]);
      O.snow(ctx, 320, 11);
    });
    return b.scene({ cam: { p: [0.3, 1.7, -6], f: 150, cx: 160, cy: 100, yaw: 0, pitch: 0.06 }, ambient: "#6a6ab8", bounce: "#2a2040", fog: ["#8a88c0", 70, 0.5], sky: SKY.winter({}) });
  });

  /* ---------------------------------------------------------------- P56 Stillwater Docks, night */
  add("stillwater_docks", function () {
    var b = new B();
    b.rect(1, 0, [-100, 100], [-20, 200], M.water("#1a2a5a", 0.8), { noShadow: true });
    b.box([-40, 0, -20], [-2, 1.4, 80], M.planks("#4a4078", { w: 0.4, along: "x", wet: 0.2 }), { noShadow: true });
    // warehouses along the quay, one with a high lit window
    for (var i = 0; i < 4; i++) {
      var z0 = 8 + i * 14;
      b.box([-26, 1.4, z0], [-8, 11, z0 + 12], function (h) {
        if (h.n[0] > 0.5) {
          var z = h.p[2], y = h.p[1];
          if (y > 8 && y < 9.6 && ((z - 12) % 14) > 3 && ((z - 12) % 14) < 5.6) return { albedo: [0, 0, 0], emit: c(Math.floor(z / 14) === 0 ? "#ffcf6a" : "#1f1a4e") };
          if (y < 5.4 && ((z - 8) % 14) > 3.5 && ((z - 8) % 14) < 8.5) return { albedo: c(Math.floor(y / 0.25) % 2 ? "#3a4a8a" : "#34447e") };
        }
        if (h.n[2] < -0.5) { var u = h.p[0], y2 = h.p[1]; if (y2 < 5 && u > -20 && u < -14) return { albedo: c(Math.floor(y2 / 0.25) % 2 ? "#3a4a8a" : "#34447e") }; if (y2 > 7 && y2 < 8.6 && ((u + 26) % 4) > 1.2 && ((u + 26) % 4) < 2.8) return i === 0 ? { albedo: [0, 0, 0], emit: c("#ffcf6a") } : { albedo: c("#1f1a4e") }; if (NB.places.kit.stencil("STILLWATER " + (i + 1), -24, 10.4, 0.16, u, y2)) return { albedo: c("#f4ecd2") }; }
        return { albedo: c(i % 2 ? "#7a3a4a" : "#5a4a7a") };
      });
      b.gable(-26, -8, z0, z0 + 12, 11, 3, M.flat("#2a2262"), M.flat(i % 2 ? "#7a3a4a" : "#5a4a7a"), true);
    }
    // a crane, bollards, a moored boat, a lamp
    b.box([-4, 1.4, 20], [-3, 14, 21], M.flat("#e07030"));
    b.box([-4, 13, 20], [8, 14, 21], M.flat("#e07030"));
    for (var z = 0; z < 60; z += 6) b.cyl(-2.6, z, 0.25, 1.4, 1.9, M.flat("#1a1430"));
    b.box([2, 0, 10], [5.5, 1.6, 22], function (h) { return { albedo: c(h.p[1] > 1.3 ? "#f4ecd2" : "#2a4ab8") }; });
    b.box([2.8, 1.6, 16], [4.8, 3.2, 20], M.windows(M.flat("#f4ecd2"), [[16.4, 19.6, 2.2, 2.9, "#ffcf6a", 3, 1]]));
    b.cyl(-3.4, 4, 0.08, 1.4, 6.5, M.flat("#1a1430"));
    b.sph([-3.1, 6.5, 4], 0.22, M.emit("#ffb050"), { noShadow: true });
    b.light([-3, 6.2, 4], "#ffa050", 3, 4);
    b.light([-8, 9, 13], "#ffcf6a", 0.8, 3);
    skyline(b, -100, 100, 170, 9, { min: 6, span: 18 });
    b.over(function (ctx) {
      O.glow(ctx, ctx.project([-3.1, 6.5, 4]), 12, "#ffa050", 0.4);
      O.line(ctx, [7.5, 13, 20.5], [7.5, 5, 20.5], "#1a1430");
      O.wire(ctx, [-2.6, 1.9, 12], [2.2, 1.5, 12], 0.3, "#8a8aa0");
    });
    for (var zl = 10; zl < 60; zl += 14) b.light([-6.5, 5, zl], "#ffb060", 1.4, 3);
    return b.scene({ cam: { p: [1.5, 3.4, -6], f: 160, cx: 170, cy: 104, yaw: -0.2, pitch: 0.06 }, ambient: "#4a48a0", bounce: "#10102a", fog: ["#4a3a8a", 110, 0.5], sky: SKY.night({ body: { d: [0.6, 0.35, 1], r: 0.05, col: "#f4ecd2", glow: "#b08ad0" } }) });
  });

  /* ---------------------------------------------------------------- P16 Pump Nine, the old pumping station, moonlight */
  add("pump_nine", function () {
    var b = new B();
    b.rect(1, 0, [-80, 80], [-10, 160], M.plaster("#2a2458", { f: 0.5 }), { noShadow: true });
    var brick = M.brick("#8a3a44", "#3a1a2a", { h: 0.1, w: 0.28 });
    var hall = M.windows(brick, [[-6, -3.6, 2, 7.5, "#1a1840", 3, 5], [-1.2, 1.2, 2, 7.5, "sky", 3, 5], [3.6, 6, 2, 7.5, "#1a1840", 3, 5]], { frame: "#2a2230", skyK: 0.6 });
    b.box([-8, 0, 20], [8, 9, 32], function (h, sc) {
      if (h.n[2] < -0.5 && h.p[1] > 8 && h.p[1] < 8.7) return NB.places.kit.stencil("PUMP 9", -2.6, 8.6, 0.13, h.p[0], h.p[1]) ? { albedo: c("#e8d8b0") } : brick(h, sc);
      return h.n[2] < -0.5 ? hall(h, sc) : brick(h, sc);
    });
    b.gable(-8, 8, 20, 32, 9, 3, M.flat("#2a2a5a"), brick, true);
    b.cyl(12, 30, 1.3, 0, 26, M.brick("#7a3040", "#3a1a2a", { h: 0.1, w: 0.28 }));
    b.cyl(12, 30, 1.6, 25, 26.2, M.flat("#3a1a2a"));
    // chain-link fence with a sign, a single security light, a van half in shadow
    b.rect(2, 8, [-30, 30], [0, 2.6], function (h) { var u = h.uv[0], v = h.uv[1]; if (v > 2.5) return { albedo: c("#6a6a86") }; if (Math.abs(u - 6) < 1.4 && v > 1 && v < 1.8) return { albedo: c(Math.abs(v - 1.4) < 0.12 ? "#b03a34" : "#f4ecd2") }; return (Math.abs(((u + v) % 0.3)) < 0.03 || Math.abs(((u - v) % 0.3)) < 0.03) ? { albedo: c("#6a6a86") } : null; }, { noShadow: true, see: true });
    b.box([-11, 0.3, 12], [-7, 2.4, 17], M.flat("#f4ecd2"));
    [-10.5, -7.5].forEach(function (x) { [12.6, 16.4].forEach(function (z) { b.cyl(x, z, 0.35, 0, 0.7, M.flat("#1a1430")); }); });
    b.sph([3, 6.8, 19.7], 0.2, M.emit("#e8fff4"), { noShadow: true });
    b.light([3, 6.6, 19], "#c8fff0", 3, 4);
    b.sun([0.4, 0.7, -0.6], "#8a8ad8", 0.35);
    b.over(function (ctx) { O.glow(ctx, ctx.project([3, 6.8, 19.7]), 12, "#c8fff0", 0.4); });
    return b.scene({ cam: { p: [0.5, 1.6, 3], f: 150, cx: 160, cy: 118, yaw: 0.02, pitch: 0.2 }, ambient: "#4a48a0", bounce: "#10102a", fog: ["#4a3a8a", 110, 0.4], sky: SKY.night({ body: { d: [-0.5, 0.55, 1], r: 0.045, col: "#f4ecd2", glow: "#b08ad0" } }) });
  });
})(typeof window !== "undefined" ? window : globalThis);
