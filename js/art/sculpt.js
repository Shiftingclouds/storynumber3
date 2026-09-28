/* Calder — sculpted pixel portraits.
 * A face is authored as a signed-distance sculpture in head space (per character, in js/art/faces.js), rendered
 * orthographically at native size under one key light, then reduced to per-material colour ramps with no dithering
 * on skin. Eyes, lash lines, brows, the mouth line and nostrils are drawn as deliberate pixel clusters at their
 * projected landmarks, so a three-quarter pose stays coherent (the far side is narrower) and expressions move only
 * the parts that move. NB.sculpt.render(model) -> { canvas, layers }.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var P = NB.pixel;

  /* ---------------------------------------------------------------- math */

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function smin(a, b, k) {
    var d = a - b;
    if (k <= 0 || d >= k) return a < b ? a : b;
    if (d <= -k) return a;
    var h = (k - (d < 0 ? -d : d)) / k;
    return (a < b ? a : b) - h * h * k * 0.25;
  }
  function smax(a, b, k) { return -smin(-a, -b, k); }
  function sphere(x, y, z, r) { return Math.sqrt(x * x + y * y + z * z) - r; }
  function ellipsoid(x, y, z, rx, ry, rz) {
    var a = x / rx, b = y / ry, c = z / rz;
    var k0 = Math.sqrt(a * a + b * b + c * c);
    var a2 = a / rx, b2 = b / ry, c2 = c / rz;
    var k1 = Math.sqrt(a2 * a2 + b2 * b2 + c2 * c2);
    return k1 < 1e-9 ? -Math.min(rx, ry, rz) : k0 * (k0 - 1) / k1;
  }
  /** Capsule from a to b whose radius runs from ra to rb. */
  function capsule(x, y, z, a, b, ra, rb) {
    var pax = x - a[0], pay = y - a[1], paz = z - a[2];
    var bax = b[0] - a[0], bay = b[1] - a[1], baz = b[2] - a[2];
    var h = clamp((pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz), 0, 1);
    var dx = pax - bax * h, dy = pay - bay * h, dz = paz - baz * h;
    return Math.sqrt(dx * dx + dy * dy + dz * dz) - (ra + ((rb === undefined ? ra : rb) - ra) * h);
  }
  function norm(v) { var l = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]) || 1; return [v[0] / l, v[1] / l, v[2] / l]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }

  // integer hash -> [0,1)
  function hash3(i, j, k, s) {
    var h = (i * 374761393 + j * 668265263 + k * 2147483647 + (s || 0) * 144665) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }
  /** Distance to the nearest jittered feature point (Worley F1) in cells of size cs. */
  function worley(x, y, z, cs, seed) {
    var fx = x / cs, fy = y / cs, fz = z / cs;
    var ix = Math.floor(fx), iy = Math.floor(fy), iz = Math.floor(fz);
    var best = 9;
    for (var k = -1; k <= 1; k++) for (var j = -1; j <= 1; j++) for (var i = -1; i <= 1; i++) {
      var cx = ix + i, cy = iy + j, cz = iz + k;
      var px = cx + hash3(cx, cy, cz, seed), py = cy + hash3(cx, cy, cz, seed + 1), pz = cz + hash3(cx, cy, cz, seed + 2);
      var dx = px - fx, dy = py - fy, dz = pz - fz;
      var d = dx * dx + dy * dy + dz * dz;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }

  /* ---------------------------------------------------------------- frames */

  /** A rigid frame: position plus yaw (turn; negative faces screen-left), pitch (nod; positive looks down), roll. */
  function Frame(pos, yaw, pitch, roll, scale) {
    this.p = pos;
    this.s = scale || 1;
    var a = (yaw || 0) * Math.PI / 180, b = (pitch || 0) * Math.PI / 180, c = (roll || 0) * Math.PI / 180;
    // R = Ry(a) * Rx(b) * Rz(c)
    var ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b), cc = Math.cos(c), sc = Math.sin(c);
    var Ry = [[ca, 0, sa], [0, 1, 0], [-sa, 0, ca]];
    var Rx = [[1, 0, 0], [0, cb, -sb], [0, sb, cb]];
    var Rz = [[cc, -sc, 0], [sc, cc, 0], [0, 0, 1]];
    this.R = mul(mul(Ry, Rx), Rz);
  }
  function mul(A, B) {
    var C = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) C[i][j] = A[i][0] * B[0][j] + A[i][1] * B[1][j] + A[i][2] * B[2][j];
    return C;
  }
  Frame.prototype.toLocal = function (x, y, z, out) {
    var R = this.R, k = 1 / this.s, dx = (x - this.p[0]) * k, dy = (y - this.p[1]) * k, dz = (z - this.p[2]) * k;
    out[0] = R[0][0] * dx + R[1][0] * dy + R[2][0] * dz;
    out[1] = R[0][1] * dx + R[1][1] * dy + R[2][1] * dz;
    out[2] = R[0][2] * dx + R[1][2] * dy + R[2][2] * dz;
    return out;
  };
  Frame.prototype.toWorld = function (l) {
    var R = this.R, k = this.s;
    return [(R[0][0] * l[0] + R[0][1] * l[1] + R[0][2] * l[2]) * k + this.p[0],
      (R[1][0] * l[0] + R[1][1] * l[1] + R[1][2] * l[2]) * k + this.p[1],
      (R[2][0] * l[0] + R[2][1] * l[1] + R[2][2] * l[2]) * k + this.p[2]];
  };
  Frame.prototype.dirToWorld = function (l) {
    var R = this.R;
    return [R[0][0] * l[0] + R[0][1] * l[1] + R[0][2] * l[2], R[1][0] * l[0] + R[1][1] * l[1] + R[1][2] * l[2], R[2][0] * l[0] + R[2][1] * l[1] + R[2][2] * l[2]];
  };
  Frame.prototype.dirToLocal = function (w) {
    var R = this.R;
    return [R[0][0] * w[0] + R[1][0] * w[1] + R[2][0] * w[2], R[0][1] * w[0] + R[1][1] * w[1] + R[2][1] * w[2], R[0][2] * w[0] + R[1][2] * w[1] + R[2][2] * w[2]];
  };

  /* ---------------------------------------------------------------- parts
   * A part: { t: "ell"|"sph"|"cap"|"fn", op: "add"|"sub"|"int", k: blend, m: material, mirror: bool, ... }
   *   ell: c [x,y,z], r [rx,ry,rz]      sph: c, r      cap: a, b, r, r2      fn: f(x,y,z) -> distance
   * A group is { name, frame: "head"|"body", parts, bound: [cx, cy, cz, R] (local) }.
   */
  function partDist(pt, x, y, z) {
    switch (pt.t) {
      case "ell": return ellipsoid(x - pt.c[0], y - pt.c[1], z - pt.c[2], pt.r[0], pt.r[1], pt.r[2]);
      case "sph": return sphere(x - pt.c[0], y - pt.c[1], z - pt.c[2], pt.r);
      case "cap": return capsule(x, y, z, pt.a, pt.b, pt.r, pt.r2);
      case "fn": return pt.f(x, y, z);
    }
    return 1e9;
  }
  function expand(parts) {
    var out = [];
    parts.forEach(function (pt) {
      if (!pt) return;
      out.push(pt);
      if (pt.mirror) {
        var q = {};
        for (var k in pt) q[k] = pt[k];
        q.mirror = false;
        q.side = -1;
        if (q.c) q.c = [-q.c[0], q.c[1], q.c[2]];
        if (q.a) q.a = [-q.a[0], q.a[1], q.a[2]];
        if (q.b) q.b = [-q.b[0], q.b[1], q.b[2]];
        if (q.f) { var f = pt.f; q.f = function (x, y, z) { return f(-x, y, z); }; }
        out.push(q);
      }
    });
    return out;
  }
  function groupDist(g, x, y, z) {
    var d = 1e9;
    for (var i = 0; i < g.parts.length; i++) {
      var pt = g.parts[i];
      var v = partDist(pt, x, y, z);
      var k = pt.kk;
      if (pt.op === "sub") d = smax(d, -v, k);
      else if (pt.op === "int") d = smax(d, v, k);
      else d = smin(d, v, k);
    }
    return d;
  }
  function groupMat(g, x, y, z) {
    var best = 1e9, m = g.m || null, which = null;
    for (var i = 0; i < g.parts.length; i++) {
      var pt = g.parts[i];
      if (pt.op === "sub" || pt.op === "int" || !pt.m) continue;
      var v = partDist(pt, x, y, z) - (pt.bias || 0);
      if (v < best) { best = v; m = pt.m; which = pt; }
    }
    return { m: m, part: which };
  }

  /* ---------------------------------------------------------------- renderer */

  /**
   * model = {
   *   w, h, cy: world y at the canvas's vertical centre (default 0),
   *   frames: { head: Frame, body: Frame },
   *   groups: [ group... ],
   *   light: [x,y,z] toward the light (world), ambient,
   *   materials: { id: { ramp: [hex...], th: [thresholds], spec: shininess, specMin, out: hex, flat: bool } },
   *   paint(hit) -> material override (optional),
   *   features(ctx) -> draws 2D clusters (optional)
   * }
   */
  function render(model) {
    var W = model.w, H = model.h;
    var frames = model.frames;
    var groups = model.groups.map(function (g) {
      var gg = {}; for (var k in g) gg[k] = g[k];
      gg.parts = expand(g.parts);
      gg.parts.forEach(function (pt) { pt.kk = +(pt.k === undefined ? g.k || 0 : pt.k) || 0; });
      gg.F = frames[g.frame];
      return gg;
    });
    var tmp = [0, 0, 0];

    function map(x, y, z) {
      var d = 1e9;
      for (var i = 0; i < groups.length; i++) {
        var g = groups[i];
        var l = g.F.toLocal(x, y, z, tmp);
        if (g.bound) {
          var bx = l[0] - g.bound[0], by = l[1] - g.bound[1], bz = l[2] - g.bound[2];
          var bd = (Math.sqrt(bx * bx + by * by + bz * bz) - g.bound[3]) * g.F.s;
          if (bd > 2 && bd > d) continue;
          if (bd > 2) { d = Math.min(d, bd); continue; }
        }
        var v = groupDist(g, l[0], l[1], l[2]) * g.F.s;
        if (v < d) d = v;
      }
      return d;
    }
    function nearestGroup(x, y, z) {
      var best = 1e9, gi = -1;
      for (var i = 0; i < groups.length; i++) {
        var g = groups[i];
        var l = g.F.toLocal(x, y, z, tmp);
        var v = groupDist(g, l[0], l[1], l[2]) * g.F.s;
        if (v < best) { best = v; gi = i; }
      }
      return gi;
    }
    function normal(x, y, z) {
      var e = 0.3;
      return norm([map(x + e, y, z) - map(x - e, y, z), map(x, y + e, z) - map(x, y - e, z), map(x, y, z + e) - map(x, y, z - e)]);
    }
    var L = norm(model.light || [-0.55, 0.6, 0.6]);
    var V = [0, 0, 1];
    var F2 = model.fill ? norm([model.fill[0], model.fill[1], model.fill[2]]) : null;
    var Hv = norm([L[0] + V[0], L[1] + V[1], L[2] + V[2]]);
    function shadowed(x, y, z, n) {
      var ox = x + n[0] * 0.7, oy = y + n[1] * 0.7, oz = z + n[2] * 0.7;
      var t = 0.4;
      for (var s = 0; s < 90 && t < 90; s++) {
        var d = map(ox + L[0] * t, oy + L[1] * t, oz + L[2] * t);
        if (d < 0.03) return true;
        t += Math.max(0.25, d * 0.9);
      }
      return false;
    }
    function occlusion(x, y, z, n) {
      var occ = 0, w = 1;
      for (var i = 1; i <= 5; i++) {
        var h = 1.1 * i;
        var d = map(x + n[0] * h, y + n[1] * h, z + n[2] * h);
        occ += (h - d) * w;
        w *= 0.6;
      }
      return clamp(1 - occ * 0.09, 0, 1);
    }

    var N = W * H;
    var matOf = new Array(N).fill(null);
    var band = new Int8Array(N).fill(-1);
    var depth = new Float32Array(N).fill(-1e9);
    var light = new Float32Array(N);
    var hits = new Array(N).fill(null);
    var CY = model.cy || 0;
    var Z0 = 120;

    // world-space bounding spheres: rays start where they first enter one, and skip the canvas that none covers
    var bounds = groups.filter(function (g) { return g.bound; }).map(function (g) {
      var c = g.F.toWorld([g.bound[0], g.bound[1], g.bound[2]]);
      return [c[0], c[1], c[2], g.bound[3] * g.F.s + 1];
    });
    var unbounded = groups.some(function (g) { return !g.bound; });
    for (var py = 0; py < H; py++) {
      for (var px = 0; px < W; px++) {
        var X = px + 0.5 - W / 2, Y = CY + H / 2 - (py + 0.5);
        var t = 0, hit = false, z = Z0;
        if (!unbounded) {
          var zin = -1e9;
          for (var bi = 0; bi < bounds.length; bi++) {
            var bb = bounds[bi], ddx = X - bb[0], ddy = Y - bb[1], rr = bb[3] * bb[3] - ddx * ddx - ddy * ddy;
            if (rr > 0) zin = Math.max(zin, bb[2] + Math.sqrt(rr));
          }
          if (zin === -1e9) continue;
          t = Math.max(0, Z0 - zin);
        }
        for (var s = 0; s < 400; s++) {
          z = Z0 - t;
          var d = map(X, Y, z);
          if (d < 0.02) { hit = true; break; }
          t += Math.max(0.02, d * 0.7);
          if (t > 2 * Z0) break;
        }
        if (!hit) continue;
        var idx = py * W + px;
        var n = normal(X, Y, z);
        var gi = nearestGroup(X, Y, z);
        var g = groups[gi];
        var l = g.F.toLocal(X, Y, z, [0, 0, 0]);
        var gm = groupMat(g, l[0], l[1], l[2]);
        var info = { x: px, y: py, P: [X, Y, z], n: n, g: g.name, l: l, m: gm.m, part: gm.part, F: g.F };
        if (model.paint) { var m2 = model.paint(info); if (m2) info.m = m2; }
        var mat = model.materials[info.m] || model.materials.default;
        var sh = mat.noShadow ? false : shadowed(X, Y, z, n);
        var diff = Math.max(0, dot(n, L));
        var ao = mat.noAO ? 1 : occlusion(X, Y, z, n);
        var amb = mat.ambient === undefined ? (model.ambient === undefined ? 0.2 : model.ambient) : mat.ambient;
        var fill = model.fill ? Math.max(0, dot(n, F2)) * (mat.fill === undefined ? model.fill[3] : mat.fill) : 0;
        var lv = (amb + (1 - amb) * diff * (sh ? 0 : 1) + fill) * Math.pow(ao, mat.aoPow || 0.8);
        if (mat.lift) lv = clamp(lv + mat.lift, 0, 1);
        info.sh = sh; info.diff = diff; info.ao = ao; info.lv = lv;
        var th = mat.th || evenTh(mat.ramp.length - (mat.spec ? 1 : 0));
        var b = th.length;
        for (var k = 0; k < th.length; k++) if (lv >= th[k]) { b = k; break; }
        if (mat.spec) {
          b += 1;
          var sp = Math.pow(Math.max(0, dot(n, Hv)), mat.spec);
          if (!sh && sp > (mat.specMin || 0.55)) b = 0;
        }
        info.spec = mat.spec ? Math.pow(Math.max(0, dot(n, Hv)), mat.spec) : 0;
        matOf[idx] = info.m;
        band[idx] = Math.min(b, mat.ramp.length - 1);
        depth[idx] = z;
        light[idx] = lv;
        hits[idx] = info;
      }
    }

    var layers = { w: W, h: H, mat: matOf, band: band, depth: depth, light: light, hits: hits, materials: model.materials, frames: frames, cy: CY, map: map };

    // clean orphans: a pixel whose band no same-material neighbour shares takes the neighbours' majority band
    for (var pass = 0; pass < 2; pass++) {
      var nb = band.slice();
      for (var y2 = 0; y2 < H; y2++) for (var x2 = 0; x2 < W; x2++) {
        var i2 = y2 * W + x2, m0 = matOf[i2];
        if (!m0 || (model.materials[m0] && model.materials[m0].keep)) continue;
        var same = 0, share = false, counts = {};
        [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (o) {
          var xx = x2 + o[0], yy = y2 + o[1];
          if (xx < 0 || yy < 0 || xx >= W || yy >= H) return;
          var j = yy * W + xx;
          if (matOf[j] !== m0) return;
          same++;
          if (band[j] === band[i2]) share = true;
          counts[band[j]] = (counts[band[j]] || 0) + 1;
        });
        if (!share && same >= 3) {
          var bestB = band[i2], bc = 0;
          for (var kk in counts) if (counts[kk] > bc) { bc = counts[kk]; bestB = +kk; }
          nb[i2] = bestB;
        }
      }
      band.set(nb);
    }

    if (model.features) model.features(featureCtx(layers));

    // outlines
    var outline = new Array(N).fill(null);
    for (var y3 = 0; y3 < H; y3++) for (var x3 = 0; x3 < W; x3++) {
      var i3 = y3 * W + x3, m3 = matOf[i3];
      if (!m3) continue;
      var mm = model.materials[m3];
      if (mm.noOutline) continue;
      var edge = null;
      var nbs = [[1, 0, "r"], [-1, 0, "l"], [0, 1, "d"], [0, -1, "u"]];
      for (var q = 0; q < 4; q++) {
        var xx = x3 + nbs[q][0], yy = y3 + nbs[q][1];
        var j = (xx < 0 || yy < 0 || xx >= W || yy >= H) ? -1 : yy * W + xx;
        if (j < 0 || !matOf[j]) { edge = edge || "sil"; continue; }
        var dz = depth[i3] - depth[j];
        var mj = model.materials[matOf[j]];
        if (dz > (mm.edgeDepth || 5) && !(mj && mj.noOutline) && !(mm.inner === false)) edge = edge || "depth";
        if (mm.seam && mm.seam.indexOf(matOf[j]) >= 0) edge = edge || "depth";
      }
      if (edge) outline[i3] = edge;
    }
    layers.outline = outline;

    // colour
    var c = P.canvas(W, H);
    for (var i4 = 0; i4 < N; i4++) {
      var m4 = matOf[i4];
      if (!m4) continue;
      var M = model.materials[m4];
      var col = M.ramp[clamp(band[i4], 0, M.ramp.length - 1)];
      if (outline[i4] === "sil" && M.out) col = M.out;
      else if (outline[i4] === "depth" && (M.inner || M.out)) col = M.inner || M.out;
      if (layers.over && layers.over[i4]) col = layers.over[i4];
      c.set(i4 % W, Math.floor(i4 / W), col);
    }
    if (layers.post) layers.post.forEach(function (fn) { fn(c); });
    return { canvas: c, layers: layers };
  }

  function evenTh(n) {
    var out = [];
    for (var i = 1; i < n; i++) out.push(1 - i / n);
    return out;
  }

  /* ---------------------------------------------------------------- 2D feature context */

  function featureCtx(layers) {
    var W = layers.w, H = layers.h;
    layers.over = new Array(W * H).fill(null);
    var ctx = {
      layers: layers,
      /** Project a point in a frame's local space to pixel coordinates and depth. */
      project: function (frameName, l) {
        var w = layers.frames[frameName].toWorld(l);
        return { x: Math.floor(w[0] + W / 2), y: Math.floor(layers.cy + H / 2 - w[1]), z: w[2], w: w };
      },
      /** Find the surface point of the sculpture along the local -z axis at local (x, y). */
      surface: function (frameName, x, y, zStart) {
        var F = layers.frames[frameName];
        var dir = F.dirToWorld([0, 0, -1]);
        var z0 = zStart === undefined ? 70 : zStart;
        var o = F.toWorld([x, y, z0]);
        var t = 0;
        var k = F.s;
        for (var s = 0; s < 300; s++) {
          var d = layers.map(o[0] + dir[0] * t * k, o[1] + dir[1] * t * k, o[2] + dir[2] * t * k) / k;
          if (d < 0.02) return [x, y, z0 - t];
          t += Math.max(0.02, d * 0.7);
          if (t > 140) break;
        }
        return null;
      },
      visible: function (pp, tol) {
        if (pp.x < 0 || pp.y < 0 || pp.x >= W || pp.y >= H) return false;
        var z = layers.depth[pp.y * W + pp.x];
        return pp.z >= z - (tol === undefined ? 1.2 : tol);
      },
      matAt: function (x, y) { return x < 0 || y < 0 || x >= W || y >= H ? null : layers.mat[y * W + x]; },
      bandAt: function (x, y) { return layers.band[y * W + x]; },
      setBand: function (x, y, b) { if (x >= 0 && y >= 0 && x < W && y < H && layers.mat[y * W + x]) layers.band[y * W + x] = b; },
      setMat: function (x, y, m, b) { if (x >= 0 && y >= 0 && x < W && y < H) { layers.mat[y * W + x] = m; if (b !== undefined) layers.band[y * W + x] = b; } },
      put: function (x, y, col) { if (x >= 0 && y >= 0 && x < W && y < H && col) layers.over[y * W + x] = col; },
      get: function (x, y) { return x >= 0 && y >= 0 && x < W && y < H ? layers.over[y * W + x] : null; }
    };
    return ctx;
  }

  NB.sculpt = {
    render: render, Frame: Frame, smin: smin, smax: smax, sphere: sphere, ellipsoid: ellipsoid, capsule: capsule,
    worley: worley, hash3: hash3, clamp: clamp, norm: norm, dot: dot
  };
})(typeof window !== "undefined" ? window : globalThis);
