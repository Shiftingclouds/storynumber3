/* Calder — places. Each view is a small scene of axis-aligned walls and boxes, seen through a real one-point
 * perspective camera and lit by a handful of practical lights (a doorway, a wall lamp, a street lamp, the moon),
 * then reduced to the place's palette with ordered dithering. Painted details (posters, stencils, bricks) are textures
 * in the surfaces' own coordinates, so they sit in perspective; thin iron (stairs, rails, wires) is drawn afterwards
 * from projected points. NB.places.draw(id) -> Canvas (320×180).
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;

  function rgb(h) { var c = P.hex(h); return [c[0] / 255, c[1] / 255, c[2] / 255]; }
  function add(a, b, k) { return [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k]; }
  function mulc(a, b) { return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]; }
  function scale(a, k) { return [a[0] * k, a[1] * k, a[2] * k]; }
  function lerp(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
  function hash(i, j) { var h = (i * 374761393 + j * 668265263) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; }
  function vnoise(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    var a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
  }

  var FONT = {
    A: "010101111101101", B: "110101110101110", C: "011100100100011", D: "110101101101110", E: "111100110100111",
    F: "111100110100100", G: "011100101101011", H: "101101111101101", I: "111010010010111", K: "101101110101101", L: "100100100100111",
    M: "101111111101101", N: "110101101101101", O: "010101101101010", P: "110101110100100", R: "110101110101101", S: "011100010001110",
    T: "111010010010010", U: "101101101101111", V: "101101101101010", W: "101101111111101", Y: "101101010010010", " ": "000000000000000",
    "0": "111101101101111", "1": "010110010010111", "2": "110001010100111", "7": "111001010010010", "/": "001001010100100", "-": "000000111000000"
  };
  /** Is (u, v) inside a stencilled letter of `s`, laid out from (u0, v0) downward with cell size c (metres)? */
  function stencil(s, u0, v0, c, u, v) {
    var cx = Math.floor((u - u0) / c), cy = Math.floor((v0 - v) / c);
    if (cy < 0 || cy > 4 || cx < 0) return false;
    var i = Math.floor(cx / 4), k = cx % 4;
    if (i >= s.length || k === 3) return false;
    var g = FONT[s[i]] || FONT[" "];
    return g[cy * 3 + k] === "1";
  }

  /* ---------------------------------------------------------------- geometry */

  // rect: { ax: 0|1|2 (the constant axis), at, u: [min,max] (first free axis), v: [min,max] (second), holes: [[u0,u1,v0,v1]], mat }
  // free axes: ax 0 (x) -> u = z, v = y; ax 1 (y) -> u = x, v = z; ax 2 (z) -> u = x, v = y
  function rectUV(ax, p) { return ax === 0 ? [p[2], p[1]] : ax === 1 ? [p[0], p[2]] : [p[0], p[1]]; }
  function hitRect(r, o, d) {
    var dd = d[r.ax];
    if (Math.abs(dd) < 1e-9) return null;
    var t = (r.at - o[r.ax]) / dd;
    if (t <= 1e-4) return null;
    var p = [o[0] + d[0] * t, o[1] + d[1] * t, o[2] + d[2] * t];
    var uv = rectUV(r.ax, p);
    if (uv[0] < r.u[0] || uv[0] > r.u[1] || uv[1] < r.v[0] || uv[1] > r.v[1]) return null;
    if (r.holes) for (var i = 0; i < r.holes.length; i++) { var h = r.holes[i]; if (uv[0] > h[0] && uv[0] < h[1] && uv[1] > h[2] && uv[1] < h[3]) return null; }
    var n = [0, 0, 0]; n[r.ax] = dd > 0 ? -1 : 1;
    return { t: t, p: p, n: n, uv: uv, obj: r };
  }
  function hitBox(b, o, d) {
    var tmin = -1e9, tmax = 1e9, nax = 0, nsg = 1;
    for (var a = 0; a < 3; a++) {
      if (Math.abs(d[a]) < 1e-9) { if (o[a] < b.min[a] || o[a] > b.max[a]) return null; continue; }
      var t1 = (b.min[a] - o[a]) / d[a], t2 = (b.max[a] - o[a]) / d[a];
      var s = -1;
      if (t1 > t2) { var tt = t1; t1 = t2; t2 = tt; s = 1; }
      if (t1 > tmin) { tmin = t1; nax = a; nsg = s; }
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) return null;
    }
    if (tmin <= 1e-4) return null;
    var p = [o[0] + d[0] * tmin, o[1] + d[1] * tmin, o[2] + d[2] * tmin];
    var n = [0, 0, 0]; n[nax] = nsg;
    // face-local coordinates: for boxes, uv on the hit face
    return { t: tmin, p: p, n: n, uv: rectUV(nax, p), obj: b, face: nax * 2 + (nsg > 0 ? 1 : 0) };
  }
  function trace(scene, o, d, skip) {
    var best = null;
    for (var i = 0; i < scene.objs.length; i++) {
      var ob = scene.objs[i];
      if (ob === skip) continue;
      var h = ob.box ? hitBox(ob, o, d) : hitRect(ob, o, d);
      if (h && (!best || h.t < best.t)) best = h;
    }
    return best;
  }
  function occluded(scene, p, lp, self) {
    var d = [lp[0] - p[0], lp[1] - p[1], lp[2] - p[2]];
    var dist = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d = [d[0] / dist, d[1] / dist, d[2] / dist];
    var o = [p[0] + d[0] * 0.01, p[1] + d[1] * 0.01, p[2] + d[2] * 0.01];
    for (var i = 0; i < scene.objs.length; i++) {
      var ob = scene.objs[i];
      if (ob.noShadow || ob === self) continue;
      var h = ob.box ? hitBox(ob, o, d) : hitRect(ob, o, d);
      if (h && h.t < dist - 0.02) return true;
    }
    return false;
  }

  function shade(scene, h, d, depth) {
    var m = h.obj.mat;
    var s = m(h, scene);
    var col = s.emit ? scale(s.albedo, 0) : [0, 0, 0];
    var amb = scene.ambient;
    // sky light from above, weaker on vertical faces, plus a floor of ambient
    var up = Math.max(0, h.n[1]);
    col = add(col, mulc(s.albedo, add(scale(amb, 0.55 + 0.45 * up), scene.bounce, 1)), 1);
    for (var i = 0; i < scene.lights.length; i++) {
      var L = scene.lights[i];
      var lv = [L.p[0] - h.p[0], L.p[1] - h.p[1], L.p[2] - h.p[2]];
      var dist2 = lv[0] * lv[0] + lv[1] * lv[1] + lv[2] * lv[2], dist = Math.sqrt(dist2);
      var ndl = (h.n[0] * lv[0] + h.n[1] * lv[1] + h.n[2] * lv[2]) / dist;
      if (ndl <= 0) continue;
      if (L.cone) {
        var cd = (-lv[0] * L.cone.d[0] - lv[1] * L.cone.d[1] - lv[2] * L.cone.d[2]) / dist;
        if (cd < L.cone.cos) continue;
        ndl *= Math.min(1, (cd - L.cone.cos) / 0.12);
      }
      if (!L.noShadow && occluded(scene, h.p, L.p, h.obj)) continue;
      var fall = L.i / (1 + dist2 / (L.r * L.r));
      col = add(col, mulc(s.albedo, L.c), ndl * fall);
    }
    if (s.emit) col = add(col, s.emit, 1);
    // wet ground: mirror the scene above, darkened
    if (s.wet && depth < 1) {
      var rd = [d[0], -d[1], d[2]];
      var o = [h.p[0], 0.001, h.p[2]];
      var rh = trace(scene, o, rd, h.obj);
      var rc = rh ? shade(scene, rh, rd, depth + 1) : scene.sky(rd);
      col = lerp(col, rc, s.wet);
    }
    return col;
  }

  /* ---------------------------------------------------------------- render + palette */

  function render(scene) {
    var W = scene.w, H = scene.h, c = P.canvas(W, H);
    var cam = scene.cam, f = cam.f;
    var pal = scene.palette.map(function (h) { return rgb(h); });
    var BAY = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
    var cy = Math.cos(cam.yaw || 0), sy = Math.sin(cam.yaw || 0), cp = Math.cos(cam.pitch || 0), sp = Math.sin(cam.pitch || 0);
    var buf = [];
    for (var py = 0; py < H; py++) for (var px = 0; px < W; px++) {
      var x = (px + 0.5 - cam.cx) / f, y = -(py + 0.5 - cam.cy) / f;
      // pitch then yaw
      var dy = y * cp + sp, dz = -y * sp + cp;
      var dx = x * cy + dz * sy; dz = -x * sy + dz * cy;
      var l = Math.sqrt(dx * dx + dy * dy + dz * dz);
      var d = [dx / l, dy / l, dz / l];
      var h = trace(scene, cam.p, d);
      var col = h ? shade(scene, h, d, 0) : scene.sky(d, px, py);
      if (scene.fog && h) col = lerp(col, scene.fog.c, Math.min(scene.fog.max, h.t / scene.fog.d));
      buf.push(col);
    }
    // overlays in linear colour (glows, thin iron) before quantising
    var ctx = {
      W: W, H: H,
      project: function (p) {
        var vx = p[0] - cam.p[0], vy = p[1] - cam.p[1], vz = p[2] - cam.p[2];
        var x = vx * cy - vz * sy, z = vx * sy + vz * cy;
        var y = vy * cp - z * sp; z = vy * sp + z * cp;
        if (z <= 0.05) return null;
        return { x: cam.cx + x / z * f, y: cam.cy - y / z * f, z: z };
      },
      get: function (x, y) { return buf[y * W + x]; },
      set: function (x, y, col) { x = Math.round(x); y = Math.round(y); if (x >= 0 && y >= 0 && x < W && y < H) buf[y * W + x] = col; },
      addLight: function (x, y, col, k) { x = Math.round(x); y = Math.round(y); if (x >= 0 && y >= 0 && x < W && y < H) buf[y * W + x] = add(buf[y * W + x], col, k); },
      line: function (a, b, col, alpha) {
        if (!a || !b) return;
        var n = Math.ceil(Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y))) + 1;
        for (var i = 0; i <= n; i++) {
          var t = i / n, x = Math.round(a.x + (b.x - a.x) * t), y = Math.round(a.y + (b.y - a.y) * t);
          if (x >= 0 && y >= 0 && x < W && y < H) buf[y * W + x] = alpha === undefined ? col : lerp(buf[y * W + x], col, alpha);
        }
      }
    };
    if (scene.overlay) scene.overlay(ctx);
    for (var i = 0; i < buf.length; i++) {
      var X = i % W, Y = Math.floor(i / W);
      var th = (BAY[Y & 3][X & 3] + 0.5) / 16 - 0.5;
      var q = buf[i], spread = scene.dither || 0.05;
      var r = q[0] + th * spread, g = q[1] + th * spread, b = q[2] + th * spread;
      var best = 0, bd = 1e9;
      for (var k = 0; k < pal.length; k++) {
        var pr = pal[k][0] - r, pg = pal[k][1] - g, pb = pal[k][2] - b;
        var dist = pr * pr * 0.3 + pg * pg * 0.59 + pb * pb * 0.11 + (pr - pg) * (pr - pg) * 0.08;
        if (dist < bd) { bd = dist; best = k; }
      }
      c.set(X, Y, scene.palette[best]);
    }
    if (scene.post) scene.post(c, ctx);
    return c;
  }

  /* ---------------------------------------------------------------- Switchyard: the rear lane, the night of the murder
   * Behind the venue, late August, load-out. Venue wall on the left (black-painted to door height, posters, the loading
   * door rolled up and lit, a caged lamp), an older building on the right (fire escape, bins, a skip), wet asphalt with a
   * setts gutter down the middle, and the far end opening onto Arden Street under a sodium lamp. A nearly full moon.
   */
  function switchyardLane() {
    var objs = [];
    var LW = -3, RW = 3, END = 40;
    function brick(u, v, base, mortar, fp, vary) {
      var ch = 0.075, cl = 0.23;
      var row = Math.floor(v / ch), off = (row % 2) * cl * 0.5;
      var col = Math.floor((u + off) / cl);
      var n = hash(col, row);
      var c = lerp(base, scale(base, 0.8 + 0.35 * (vary || 1) * n), 0.9);
      if (ch / fp > 2.6) {
        var fu = (u + off) / cl - col, fv = v / ch - row;
        if (fv < 0.14 || fu < 0.05) return mortar;
      }
      return c;
    }
    var venueBrick = rgb("#a8403a"), venueMortar = rgb("#4a1e2a"), blackPaint = rgb("#2a2240");
    var oldBrick = rgb("#3e8a8c"), oldMortar = rgb("#1e4450");
    var posters = [
      { u: [3.2, 4.05], v: [1.0, 2.3], bg: rgb("#b8324a"), ink: rgb("#f0e6cc"), txt: "LIVE", band: rgb("#1c1a20") },
      { u: [9.2, 10.1], v: [1.1, 2.2], bg: rgb("#2f6fa8"), ink: rgb("#f0e6cc"), txt: "NOVA", band: rgb("#e8d8b0") },
      { u: [10.25, 11.2], v: [0.95, 2.3], bg: rgb("#e8d8b0"), ink: rgb("#1c1a20"), txt: "SAT", band: rgb("#b8324a") }
    ];
    // venue wall (left), with the loading door cut out
    objs.push({ ax: 0, at: LW, u: [-4, END], v: [0, 12], holes: [[5, 8.6, 0, 2.7]], mat: function (h, sc) {
      var u = h.uv[0], v = h.uv[1], fp = h.t / sc.cam.f;
      if (v < 4.4) {
        for (var i = 0; i < posters.length; i++) {
          var po = posters[i];
          if (u > po.u[0] && u < po.u[1] && v > po.v[0] && v < po.v[1]) {
            var peel = (po.v[1] - v) < 0.12 && (u - po.u[0]) > 0.6 * (po.u[1] - po.u[0]);
            if (peel) return { albedo: blackPaint };
            if (stencil(po.txt, po.u[0] + 0.1, po.v[1] - 0.14, 0.055, u, v)) return { albedo: po.ink };
            if (v < po.v[0] + 0.25 && v > po.v[0] + 0.12) return { albedo: po.band };
            return { albedo: po.bg };
          }
        }
        var scuff = vnoise(u * 3, v * 6) > 0.72 ? 0.85 : 1;
        return { albedo: scale(blackPaint, scuff) };
      }
      return { albedo: brick(u, v, venueBrick, venueMortar, fp) };
    } });
    // old building (right)
    objs.push({ ax: 0, at: RW, u: [-4, END], v: [0, 16], mat: function (h, sc) {
      var u = h.uv[0], v = h.uv[1], fp = h.t / sc.cam.f;
      // windows on the upper floors, a few lit
      for (var fl = 0; fl < 3; fl++) {
        var wy = 5.2 + fl * 3.4;
        var k = Math.floor((u - 2) / 4.2);
        var wu = 2 + k * 4.2;
        if (k >= 0 && v > wy && v < wy + 1.8 && u > wu && u < wu + 1.3) {
          var lit = hash(k, fl) > 0.72;
          if (u < wu + 0.08 || u > wu + 1.22 || v < wy + 0.08 || Math.abs(v - (wy + 1.05)) < 0.05) return { albedo: rgb("#2a2628") };
          return lit ? { albedo: rgb("#000000"), emit: rgb("#ffcc66") } : { albedo: rgb("#1e2a52") };
        }
      }
      return { albedo: brick(u, v, oldBrick, oldMortar, fp, 0.6) };
    } });
    // ground: asphalt with a setts gutter and puddles
    objs.push({ ax: 1, at: 0, u: [LW, RW], v: [-4, END], noShadow: true, mat: function (h, sc) {
      var x = h.uv[0], z = h.uv[1], fp = h.t / sc.cam.f;
      var puddle = vnoise(x * 0.9 + 3, z * 0.45) > 0.62 && Math.abs(x) < 2.6;
      if (Math.abs(x) < 0.32) {
        var sz = 0.2, rr = Math.floor(z / sz), cc = Math.floor((x + (rr % 2) * 0.1) / sz);
        var n = hash(cc + 50, rr);
        var base = scale(rgb("#3a3458"), 0.8 + 0.3 * n);
        if (sz / fp > 3 && (z / sz - rr < 0.12 || (x + (rr % 2) * 0.1) / sz - cc < 0.12)) base = rgb("#24242c");
        return { albedo: base, wet: puddle ? 0.55 : 0.18 };
      }
      var grit = 0.9 + 0.2 * vnoise(x * 4, z * 4);
      return { albedo: scale(rgb("#221e3a"), grit), wet: puddle ? 0.75 : 0.22 };
    } });
    // the street across the end, and the buildings on its far side
    objs.push({ ax: 1, at: 0, u: [-30, 30], v: [END, 56], noShadow: true, mat: function (h) {
      var kerb = h.uv[1] > 53.5;
      return { albedo: kerb ? rgb("#5a5078") : rgb("#262040"), wet: 0.5 };
    } });
    objs.push({ ax: 2, at: 56, u: [-30, 30], v: [0, 11], mat: function (h) {
      var x = h.uv[0], y = h.uv[1];
      if (y < 3.2 && x > -4 && x < 2.5) {
        // a closed shop shutter, and its sign
        if (y > 2.6) return x > -3.6 && x < 2.1 && y > 2.7 && y < 3.1 ? { albedo: rgb("#000000"), emit: rgb("#ff4fa0") } : { albedo: rgb("#2a2240") };
        return { albedo: (Math.floor(y / 0.12) % 2) ? rgb("#6a6a72") : rgb("#55555e") };
      }
      if (y > 4.2) {
        var k = Math.floor((x + 30) / 3.1), wy = Math.floor((y - 4.2) / 3.2);
        var fx = (x + 30) / 3.1 - k, fy = (y - 4.2) / 3.2 - wy;
        if (fx > 0.25 && fx < 0.72 && fy > 0.2 && fy < 0.75) return hash(k, wy + 9) > 0.55 ? { albedo: rgb("#000000"), emit: (hash(k, wy) > 0.8 ? rgb("#3ce8e8") : rgb("#ffcc66")) } : { albedo: rgb("#2a2262") };
      }
      return { albedo: rgb("#7a3a6a") };
    } });
    // inside the loading door: floor, back wall, flight cases in the light
    objs.push({ ax: 1, at: 0, u: [-10, LW], v: [4.8, 8.8], noShadow: true, mat: function () { return { albedo: rgb("#4a4038") }; } });
    objs.push({ ax: 0, at: -9, u: [4.8, 8.8], v: [0, 3], mat: function (h) {
      var u = h.uv[0], v = h.uv[1];
      if (u > 6.2 && u < 7.4 && v < 2.2) return { albedo: rgb("#000000"), emit: rgb("#c89a60") };
      if (v > 2.3) return { albedo: rgb("#3a2e2a") };
      return { albedo: rgb("#6a5040") };
    } });
    objs.push({ ax: 2, at: 4.9, u: [-10, LW], v: [0, 3], mat: function () { return { albedo: rgb("#6a5040") }; } });
    objs.push({ ax: 2, at: 8.7, u: [-10, LW], v: [0, 3], mat: function () { return { albedo: rgb("#6a5040") }; } });
    objs.push({ ax: 1, at: 2.95, u: [-10, LW], v: [4.8, 8.8], mat: function () { return { albedo: rgb("#3a3030") }; } });
    function box(min, max, mat, extra) { var b = { box: true, min: min, max: max, mat: mat }; for (var k in extra || {}) b[k] = extra[k]; objs.push(b); return b; }
    var caseMat = function (h) {
      var u = h.uv[0], v = h.uv[1], b = h.obj;
      var edge = 0.06;
      var near = function (a, lo, hi) { return a - lo < edge || hi - a < edge; };
      var ax = h.face >> 1, U = ax === 0 ? 2 : 0, V = ax === 1 ? 2 : 1;
      if (near(u, b.min[U], b.max[U]) && near(v, b.min[V], b.max[V])) return { albedo: rgb("#9a9ea8") };
      if (near(u, b.min[U], b.max[U]) || near(v, b.min[V], b.max[V])) return { albedo: rgb("#4a4c56") };
      return { albedo: rgb("#2a2240") };
    };
    box([-8.2, 0, 5.2], [-7.2, 1.1, 6.0], caseMat);
    box([-8.2, 1.1, 5.25], [-7.3, 1.8, 5.95], caseMat);
    box([-6.4, 0, 7.6], [-5.7, 0.9, 8.4], caseMat);
    // out in the lane: cases waiting for the van
    box([-2.75, 0, 9.3], [-1.85, 1.0, 10.1], caseMat);
    box([-2.7, 1.0, 9.4], [-1.95, 1.6, 10.0], caseMat);
    box([-2.85, 0, 10.4], [-2.2, 0.75, 11.6], caseMat);
    // the door: steel frame with hazard paint at the foot, the rolled shutter
    var frameMat = function (h) { var v = h.p[1]; if (v < 0.9) return { albedo: (Math.floor((v + h.p[2]) / 0.18) % 2) ? rgb("#d0aa3e") : rgb("#1e1e24") }; return { albedo: rgb("#3a3c44") }; };
    box([-3.12, 0, 4.85], [-2.95, 2.85, 5.0], frameMat);
    box([-3.12, 0, 8.6], [-2.95, 2.85, 8.75], frameMat);
    box([-3.25, 2.7, 4.85], [-2.9, 3.2, 8.75], function (h) { return { albedo: (Math.floor(h.p[1] / 0.07) % 2) ? rgb("#7a7e88") : rgb("#5a5e68") }; });
    // caged lamp over the door
    box([-3.0, 4.5, 6.55], [-2.72, 4.85, 6.95], function (h) { return h.n[0] > 0.5 || h.n[1] < -0.5 ? { albedo: rgb("#000000"), emit: rgb("#9af4f0") } : { albedo: rgb("#2a2a30") }; }, { noShadow: true });
    // the blade sign: SWITCHYARD down its face, on a bracket over the lane
    box([-2.95, 2.6, 9.9], [-2.2, 7.1, 10.1], function (h) {
      if (h.n[2] > -0.5) return { albedo: rgb("#2a2830") };
      var u = h.p[0], v = h.p[1];
      if (u < -2.88 || u > -2.27 || v < 2.67 || v > 7.03) return { albedo: rgb("#8a8e98") };
      return { albedo: rgb("#1c1a22") };
    });
    box([-3.0, 7.0, 9.95], [-2.15, 7.08, 10.05], function () { return { albedo: rgb("#3a3a40") }; });
    // drainpipes
    box([-3.0, 0, 3.0], [-2.88, 12, 3.12], function () { return { albedo: rgb("#2a2c34") }; });
    box([2.88, 0, 9.4], [3.0, 16, 9.52], function () { return { albedo: rgb("#3a3a40") }; });
    // extractor unit on the right wall
    box([2.55, 2.1, 3.2], [3.0, 2.8, 4.3], function (h) { return { albedo: h.n[0] < -0.5 && (Math.floor(h.p[1] / 0.08) % 2) ? rgb("#4a4e58") : rgb("#8a8e98") }; });
    // bins and a skip
    var bin = function (col) { return function (h) { var lid = h.p[1] > 1.02; return { albedo: lid ? scale(rgb(col), 0.8) : rgb(col) }; }; };
    box([2.2, 0, 5.3], [2.95, 1.1, 6.05], bin("#2fcf7a"));
    box([2.2, 0, 6.2], [2.95, 1.1, 6.95], bin("#2a4ab8"));
    box([1.6, 0, 18], [2.95, 1.3, 21.2], function (h) { var v = h.p[1]; return { albedo: v > 1.18 ? rgb("#8a6a24") : (h.n[0] < -0.5 && Math.floor(h.p[2] / 0.8) % 2 && v < 1.1 && v > 0.2) ? rgb("#b8922e") : rgb("#d0aa3e") }; });
    // fire escape platforms on the right wall
    var iron = function () { return { albedo: rgb("#2a2a30") }; };
    [3.8, 7.2, 10.6].forEach(function (y) { box([1.9, y - 0.08, 11], [2.98, y, 15.4], iron); });

    var scene = {
      w: 320, h: 180,
      cam: { p: [0.2, 1.62, -2], f: 190, cx: 172, cy: 98, yaw: 0.06, pitch: 0.05 },
      objs: objs,
      ambient: rgb("#5a48a8"), bounce: rgb("#201238"),
      fog: { c: rgb("#8a4a9a"), d: 120, max: 0.4 },
      dither: 0.035,
      lights: [
        { p: [-3.5, 2.2, 6.8], c: rgb("#ffa050"), i: 2.4, r: 3.2 },                 // through the loading door
        { p: [-2.6, 4.55, 6.75], c: rgb("#6af0e8"), i: 2.6, r: 3.0 },                // caged lamp, cold teal
        { p: [0, 3.2, 55], c: rgb("#ff4fa0"), i: 4, r: 4 },                           // the shop sign across the street
        { p: [1.8, 5.4, 45], c: rgb("#ff9a3a"), i: 5, r: 2.6 },                       // sodium lamp on Arden Street
        { p: [-6.5, 2.4, 6.8], c: rgb("#ffcc88"), i: 0.7, r: 2.0 }                    // inside, over the cases
      ],
      moon: { d: [-0.04, 0.46, 1], r: 0.045 },
      sky: function (d) {
        var t = Math.max(0, Math.min(1, d[1] * 1.6));
        var col = t < 0.12 ? lerp(rgb("#f48c78"), rgb("#d05a86"), t / 0.12) : t < 0.3 ? lerp(rgb("#d05a86"), rgb("#6a3fa0"), (t - 0.12) / 0.18) : lerp(rgb("#6a3fa0"), rgb("#16133a"), Math.min(1, (t - 0.3) / 0.55));
        var md = S3.norm(scene.moon.d), c = d[0] * md[0] + d[1] * md[1] + d[2] * md[2];
        if (c > Math.cos(scene.moon.r)) {
          var edge = (1 - c) / (1 - Math.cos(scene.moon.r));
          return edge > 0.55 && d[0] - md[0] > 0.004 ? rgb("#cfc6ae") : rgb("#f4ecd2");
        }
        if (c > Math.cos(scene.moon.r * 2.6)) col = lerp(col, rgb("#b08ad0"), 0.35);
        var sx = Math.floor(d[0] * 900), sy2 = Math.floor(d[1] * 900);
        if (d[1] > 0.3 && hash(sx, sy2) > 0.9975) col = rgb("#c8c8e0");
        return col;
      },
      palette: [
        // night blues and violets
        "#0e0c24", "#16133a", "#1f1a4e", "#2a2262", "#382a78", "#4a348c", "#5e3f9e", "#7a4cae",
        // city glow: magenta to coral
        "#8e3c8a", "#b04a8a", "#d05a86", "#e8707e", "#f48c78", "#fab07a",
        // venue brick reds
        "#2e1422", "#461a26", "#62222a", "#7e2c2e", "#9a3a32", "#b44e3a", "#c86a48",
        // painted teal building
        "#12222e", "#18323e", "#1e4450", "#285a64", "#347278", "#468c8a", "#62a8a0",
        // asphalt and stone, cool
        "#141424", "#1e1e32", "#2a2a42", "#383852", "#4a4a66", "#626282", "#8080a0", "#a8a8c4",
        // warm light
        "#5a2a1e", "#8a3e22", "#b85a28", "#e07a30", "#f49a3c", "#fbbf52", "#ffdc7c", "#fff2b8", "#fffbe6",
        // neon and accents
        "#ff4fa0", "#ff86c2", "#3ce8e8", "#9af4f0", "#1a9e8e", "#2fcf7a", "#1f6a44", "#2a4ab8", "#4a7af0",
        "#e8d8b0", "#f4ecd2", "#cfc6ae", "#e8c040", "#b08a24"
      ],
      overlay: function (ctx) {
        // fire-escape stairs and rails, iron drawn thin
        var ironC = rgb("#16161c");
        var st = [[3.8, 11.1, 0, 15.3], [7.2, 15.3, 3.8, 11.1], [10.6, 11.1, 7.2, 15.3]];
        st.forEach(function (s) {
          var a = ctx.project([2.1, s[0], s[1]]), b = ctx.project([2.1, s[2], s[3]]);
          var a2 = ctx.project([2.8, s[0], s[1]]), b2 = ctx.project([2.8, s[2], s[3]]);
          ctx.line(a, b, ironC); ctx.line(a2, b2, ironC);
          for (var k = 1; k < 10; k++) { var t = k / 10; ctx.line(ctx.project([2.1, s[0] + (s[2] - s[0]) * t, s[1] + (s[3] - s[1]) * t]), ctx.project([2.8, s[0] + (s[2] - s[0]) * t, s[1] + (s[3] - s[1]) * t]), ironC, 0.8); }
        });
        [3.8, 7.2, 10.6].forEach(function (y) {
          ctx.line(ctx.project([1.9, y + 0.95, 11]), ctx.project([1.9, y + 0.95, 15.4]), ironC);
          for (var z = 11; z <= 15.41; z += 0.55) ctx.line(ctx.project([1.9, y, z]), ctx.project([1.9, y + 0.95, z]), ironC, 0.85);
        });
        // wires across the lane, sagging
        [[[LW, 8.5, 12], [RW, 9.2, 16]], [[LW, 7.8, 22], [RW, 8.4, 25]], [[LW, 10, 30], [RW, 9.5, 33]]].forEach(function (w) {
          var prev = null;
          for (var k = 0; k <= 24; k++) {
            var t = k / 24;
            var p = [w[0][0] + (w[1][0] - w[0][0]) * t, w[0][1] + (w[1][1] - w[0][1]) * t - Math.sin(Math.PI * t) * 0.9, w[0][2] + (w[1][2] - w[0][2]) * t];
            var q = ctx.project(p);
            if (prev && q) ctx.line(prev, q, rgb("#101018"));
            prev = q;
          }
        });
        // the blade sign's letters, one per row down its face, in warm tube light
        var st = ctx.project([-2.575, 6.95, 9.9]), sb = ctx.project([-2.575, 2.72, 9.9]);
        if (st && sb) {
          var word = "SWITCHYARD", pitch = (sb.y - st.y) / word.length;
          for (var i = 0; i < word.length; i++) {
            var g = FONT[word[i]], gx = Math.round(st.x + (sb.x - st.x) * (i + 0.5) / word.length) - 1, gy = Math.round(st.y + pitch * i + (pitch - 5) / 2);
            for (var k = 0; k < 15; k++) if (g[k] === "1") { ctx.set(gx + (k % 3), gy + Math.floor(k / 3), rgb("#ffd08a")); }
          }
          glow(ctx, (st.x + sb.x) / 2, (st.y + sb.y) / 2, Math.round((sb.y - st.y) / 2), rgb("#ff9a4a"), 0.06);
        }
        // the sodium lamp's head and the glow around bright points
        var lampTop = ctx.project([1.8, 5.6, 45]), lampFoot = ctx.project([1.8, 0, 45]);
        if (lampTop && lampFoot) {
          ctx.line(lampFoot, { x: lampTop.x, y: lampTop.y + 1 }, rgb("#1a1a22"));
          glow(ctx, lampTop.x, lampTop.y + 1, 9, rgb("#ff9a3a"), 0.5);
          ctx.set(lampTop.x, lampTop.y + 1, rgb("#fff0c4")); ctx.set(lampTop.x - 1, lampTop.y + 1, rgb("#f7d68a"));
        }
        var lamp = ctx.project([-2.7, 4.67, 6.75]);
        if (lamp) glow(ctx, lamp.x, lamp.y, 12, rgb("#6af0e8"), 0.4);
        var door = ctx.project([-3.1, 1.3, 6.8]);
        if (door) glow(ctx, door.x, door.y, 10, rgb("#ffb866"), 0.05);
      }
    };
    function glow(ctx, x, y, r, col, k) {
      for (var j = -r; j <= r; j++) for (var i = -r; i <= r; i++) {
        var d = Math.sqrt(i * i + j * j) / r;
        if (d < 1) ctx.addLight(x + i, y + j, col, k * (1 - d) * (1 - d));
      }
    }
    return scene;
  }

  var S3 = { norm: function (v) { var l = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]); return [v[0] / l, v[1] / l, v[2] / l]; } };

  var VIEWS = { switchyard_lane: switchyardLane };
  NB.places = {
    draw: function (id) { return render(VIEWS[id]()); },
    ids: Object.keys(VIEWS)
  };
})(typeof window !== "undefined" ? window : globalThis);
