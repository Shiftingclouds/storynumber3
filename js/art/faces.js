/* Calder — the portrait cast. Each lead is an identity sheet written as numbers: skull, jaw, cheek, brow, eye, nose,
 * mouth, ear and neck landmarks in head space (y up, 0 at the eye line; z toward the viewer; 1 unit = 1 pixel), plus
 * hair built for that head, clothes, palette, and expressions as edits to the neutral master. The shared code below
 * only assembles parts and draws clusters; every measurement comes from the person.
 *   NB.faces.draw(id, expression) -> Canvas (128×160, transparent)
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});
  var S = NB.sculpt, P = NB.pixel;
  var W = 128, H = 160;

  function merge(a, b) {
    var o = {};
    for (var k in a) o[k] = a[k];
    for (var j in b) {
      if (b[j] && typeof b[j] === "object" && !Array.isArray(b[j]) && a[j] && typeof a[j] === "object" && !Array.isArray(a[j])) o[j] = merge(a[j], b[j]);
      else o[j] = b[j];
    }
    return o;
  }

  /* ---------------------------------------------------------------- the head */

  function headParts(f, ex) {
    var parts = [];
    var sk = f.skull, jw = f.jaw, ck = f.cheek, br = f.brow, e = f.eye, n = f.nose, m = f.mouth, ea = f.ear;
    // skull and forehead
    parts.push({ t: "ell", c: sk.c, r: sk.r, m: "skin", k: 0 });
    parts.push({ t: "ell", c: sk.front.c, r: sk.front.r, m: "skin", k: 6 });
    // brow ridge
    parts.push({ t: "cap", a: [1.5, br.y, br.z], b: [br.x1, br.y - br.drop, br.z - br.back], r: br.r, r2: br.r * 0.8, m: "skin", k: 4, mirror: true });
    // cheekbones and the soft cheek below them (cheek raise comes from the expression)
    parts.push({ t: "ell", c: [ck.x, ck.y + (ex.cheek || 0), ck.z + (ex.cheek || 0) * 0.4], r: ck.r, m: "skin", k: 6, mirror: true });
    parts.push({ t: "ell", c: ck.soft.c, r: ck.soft.r, m: "skin", k: 10, mirror: true });
    // midface and the mouth mound
    parts.push({ t: "ell", c: f.mid.c, r: f.mid.r, m: "skin", k: 7 });
    parts.push({ t: "ell", c: f.muzzle.c, r: f.muzzle.r, m: "skin", k: 5 });
    // jaw: angle to chin, both sides, then the chin
    parts.push({ t: "cap", a: jw.angle, b: jw.chin, r: jw.r, r2: jw.r2, m: "skin", k: jw.k, mirror: true });
    parts.push({ t: "ell", c: f.chin.c, r: f.chin.r, m: "skin", k: 4 });
    // eye sockets
    parts.push({ t: "sph", c: [e.x, e.y + e.socket.dy, e.z + e.socket.dz], r: e.socket.r, op: "sub", k: e.socket.k, mirror: true });
    // lids (skin), shaped by the expression
    [1, -1].forEach(function (side) {
      var cx = e.x * side, lidU = lidEdgeU(f, ex, side), lidL = lidEdgeL(f, ex, side);
      parts.push({ t: "fn", m: "lid", k: 1.2, f: function (x, y, z) {
        var qx = x - cx, qy = y - e.y, qz = z - e.z;
        var lx = qx * side;
        var s = Math.sqrt(qx * qx + qy * qy + qz * qz) - (e.r + e.lid);
        return S.smax(s, lidU(lx) - qy, 0.4);
      } });
      parts.push({ t: "fn", m: "lid", k: 1.2, f: function (x, y, z) {
        var qx = x - cx, qy = y - e.y, qz = z - e.z;
        var lx = qx * side;
        var s = Math.sqrt(qx * qx + qy * qy + qz * qz) - (e.r + e.lid * 0.75);
        return S.smax(s, qy - lidL(lx), 0.4);
      } });
    });
    // nose: bridge, tip, wings
    parts.push({ t: "cap", a: [0, n.root[1], n.root[2]], b: [0, n.tip[1] + n.tipR * 0.6, n.tip[2] - 1], r: n.bridge, r2: n.bridge2, m: "skin", k: 2.5 });
    parts.push({ t: "sph", c: n.tip, r: n.tipR, m: "skin", k: 2 });
    parts.push({ t: "sph", c: [n.wing[0], n.wing[1], n.wing[2]], r: n.wingR, m: "skin", k: 2.2, mirror: true });
    // lips
    var cu = ex.mouthCorner || [0, 0];
    parts.push({ t: "ell", c: [0, m.y + m.upper.dy + (ex.lipUp || 0), m.z + m.upper.dz], r: [m.w * m.upper.wf, m.upper.h, m.upper.d], m: "lip", k: 1.4, bias: 0.6 });
    parts.push({ t: "ell", c: [0, m.y - m.lower.dy + (ex.lipDown || 0), m.z + m.lower.dz], r: [m.w * m.lower.wf, m.lower.h, m.lower.d], m: "lip", k: 1.4, bias: 0.6 });
    // ears
    parts.push({ t: "ell", c: ea.c, r: ea.r, m: "skin", k: 1.5, mirror: true });
    return parts;
  }

  // lid edges in eye space: lx runs from inner corner (negative) to outer corner (positive)
  function lidEdgeU(f, ex, side) {
    var e = f.eye;
    var open = e.open + (ex.open || 0) + (side === 1 ? (ex.openR || 0) : (ex.openL || 0));
    return function (lx) { return open - e.arch * lx * lx / (e.r * e.r) + e.tilt * lx / e.r + (e.peak || 0) * (lx / e.r) * (1 - Math.abs(lx / e.r)); };
  }
  function lidEdgeL(f, ex, side) {
    var e = f.eye;
    var low = e.low + (ex.lowLid || 0);
    return function (lx) { return low + e.lowArch * lx * lx / (e.r * e.r) + e.tilt * 0.5 * lx / e.r; };
  }

  /* ---------------------------------------------------------------- the body */

  function bodyParts(f) {
    var b = f.body, parts = [];
    parts.push({ t: "cap", a: b.neck.a, b: b.neck.b, r: b.neck.r, r2: b.neck.r2, m: "neck", k: 0 });
    parts.push({ t: "cap", a: b.trap.a, b: b.trap.b, r: b.trap.r, r2: b.trap.r2, m: b.trapMat || "cloth", k: 8, mirror: true });
    parts.push({ t: "ell", c: b.chest.c, r: b.chest.r, m: "cloth", k: 8 });
    parts.push({ t: "ell", c: b.yoke.c, r: b.yoke.r, m: "cloth", k: 8 });
    parts.push({ t: "cap", a: b.shoulder.a, b: b.shoulder.b, r: b.shoulder.r, r2: b.shoulder.r2, m: "cloth", k: 9, mirror: true });
    parts.push({ t: "cap", a: b.arm.a, b: b.arm.b, r: b.arm.r, r2: b.arm.r2, m: "cloth", k: 5, mirror: true });
    return parts;
  }

  /* ---------------------------------------------------------------- assembly */

  function build(spec, exName) {
    var ex = merge(spec.expr.neutral || {}, exName && exName !== "neutral" ? spec.expr[exName] || {} : {});
    var f = spec.face;
    var head = new S.Frame(spec.pose.head, spec.pose.yaw, spec.pose.pitch, spec.pose.roll, spec.pose.scale || 1.12);
    var body = new S.Frame(spec.pose.body, spec.pose.bodyYaw, 0, 0);
    var groups = [
      { name: "head", frame: "head", parts: headParts(f, ex), bound: [0, -2, 0, 52] },
      { name: "eyes", frame: "head", parts: [{ t: "sph", c: [f.eye.x, f.eye.y, f.eye.z], r: f.eye.r, m: "eye", mirror: true }], bound: [0, f.eye.y, f.eye.z, 20] },
      { name: "body", frame: "body", parts: bodyParts(f), bound: [0, -30, 0, 90] }
    ];
    (spec.extraGroups || []).forEach(function (g) { groups.push(g(f, ex)); });
    // gaze: toward the viewer, then the expression's offset
    var toViewer = head.dirToLocal([0, 0, 1]);
    var gaze = S.norm([toViewer[0] + (ex.gaze ? ex.gaze[0] : 0), toViewer[1] + (ex.gaze ? ex.gaze[1] : 0), toViewer[2]]);
    var pal = spec.palette;
    var lipRamp = pal.lip.map(function (c, i) { return P.hex(P.mix(c, pal.skin[Math.min(i + 1, pal.skin.length - 1)], pal.lipMix === undefined ? 0.4 : pal.lipMix)); }).map(function (c) { return "#" + c.slice(0, 3).map(function (v) { return ("0" + v.toString(16)).slice(-2); }).join(""); });
    var materials = {
      skin: { ramp: pal.skin, th: pal.skinTh || [0.9, 0.7, 0.5, 0.33, 0.2], out: pal.skin[pal.skin.length - 1], inner: pal.skin[pal.skin.length - 2], edgeDepth: 12, aoPow: 0.55 },
      lid: { ramp: pal.skin, th: pal.skinTh || [0.9, 0.7, 0.5, 0.33, 0.2], out: pal.skin[pal.skin.length - 1], noOutline: true },
      neck: { ramp: pal.skin, th: pal.neckTh || [0.95, 0.8, 0.6, 0.4, 0.24], out: pal.skin[pal.skin.length - 1], inner: pal.skin[pal.skin.length - 1] },
      lip: { ramp: lipRamp, th: [0.7, 0.5, 0.3, 0.18], out: lipRamp[lipRamp.length - 1], noOutline: true, spec: 14, specMin: 0.8 },
      sclera: { ramp: pal.sclera, th: [0.5, 0.25], noOutline: true, keep: true, ambient: 0.45, noAO: true },
      iris: { ramp: pal.iris, th: [0.55, 0.3], noOutline: true, keep: true, ambient: 0.5, noAO: true },
      pupil: { ramp: [pal.pupil], noOutline: true, keep: true },
      cloth: { ramp: pal.cloth, th: pal.cloth.length === 5 ? [0.8, 0.55, 0.34, 0.2] : undefined, out: pal.cloth[pal.cloth.length - 1], inner: pal.cloth[pal.cloth.length - 1], edgeDepth: 6, aoPow: 0.35 },
      default: { ramp: ["#ff00ff"] }
    };
    for (var k in spec.materials || {}) materials[k] = spec.materials[k](pal);
    var model = {
      w: W, h: H, cy: 0,
      frames: { head: head, body: body },
      groups: groups,
      light: spec.light || [-0.4, 0.5, 0.78],
      ambient: 0.38,
      fill: spec.fill || [0.8, -0.1, 0.45, 0.16],
      materials: materials,
      paint: function (hit) {
        if (hit.m === "eye") {
          var side = hit.l[0] > 0 ? 1 : -1;
          var q = S.norm([hit.l[0] - f.eye.x * side, hit.l[1] - f.eye.y, hit.l[2] - f.eye.z]);
          var c = S.dot(q, gaze);
          if (c > Math.cos(f.eye.pupil * Math.PI / 180)) return "pupil";
          if (c > Math.cos(f.eye.iris * Math.PI / 180)) return "iris";
          return "sclera";
        }
        if (hit.m === "lid") return "skin";
        return spec.paint ? spec.paint(hit, f, ex) : null;
      },
      features: function (ctx) { features(ctx, spec, f, ex); if (spec.features) spec.features(ctx, f, ex); }
    };
    return model;
  }

  /* ---------------------------------------------------------------- clusters: lashes, brows, mouth, nostrils */

  function features(ctx, spec, f, ex) {
    var pal = spec.palette, L = ctx.layers, Wd = L.w;
    var isEye = function (m) { return m === "sclera" || m === "iris" || m === "pupil"; };
    // gather each eye's pixels
    var eyes = { 1: [], "-1": [] };
    for (var i = 0; i < L.mat.length; i++) if (isEye(L.mat[i])) { var h = L.hits[i]; eyes[h.l[0] > 0 ? 1 : -1].push(i); }
    [1, -1].forEach(function (side) {
      var px = eyes[side];
      if (!px.length) return;
      var cols = {};
      px.forEach(function (i) { var x = i % Wd, y = Math.floor(i / Wd); if (!cols[x]) cols[x] = [y, y]; cols[x][0] = Math.min(cols[x][0], y); cols[x][1] = Math.max(cols[x][1], y); });
      var xs = Object.keys(cols).map(Number).sort(function (a, b) { return a - b; });
      var x0 = xs[0], x1 = xs[xs.length - 1];
      // which end is the outer corner on screen: the side of the eye farther from the nose
      var nose = ctx.project("head", [0, 0, f.eye.z]);
      var outerRight = (x0 + x1) / 2 > nose.x;
      xs.forEach(function (x) {
        var top = cols[x][0], bot = cols[x][1];
        var t = outerRight ? (x - x0) / Math.max(1, x1 - x0) : (x1 - x) / Math.max(1, x1 - x0);
        // upper lash line: one pixel above the opening, doubled toward the outer corner
        ctx.put(x, top - 1, pal.lash);
        if (t > 0.55 && f.eye.heavyLash !== false) ctx.put(x, top - 2, pal.lashSoft || pal.lash);
        // the top row of the eye itself sits in lid shadow
        if (ctx.matAt(x, top) === "sclera") ctx.setBand(x, top, 1);
        // lower lid: a soft line, not a ring
        var below = L.mat[(bot + 1) * Wd + x];
        if (below === "skin" && t > 0.15 && t < 0.95) ctx.put(x, bot + 1, pal.lowLid);
      });
      // outer corner: the lash line runs one pixel past the opening and dips
      var ox = outerRight ? x1 + 1 : x0 - 1, oc = cols[outerRight ? x1 : x0];
      ctx.put(ox, oc[0], pal.lash);
      // inner corner: tear-duct pixel in lid colour instead of white
      var ic = outerRight ? x0 : x1;
      for (var y = cols[ic][0]; y <= cols[ic][1]; y++) if (ctx.matAt(ic, y) === "sclera") ctx.put(ic, y, pal.caruncle);
      // catch-light: one pixel, up and toward the light from the pupil's centre, only on the iris
      var pupils = px.filter(function (i) { return L.mat[i] === "pupil"; });
      var irises = px.filter(function (i) { return L.mat[i] === "iris" || L.mat[i] === "pupil"; });
      var src = pupils.length ? pupils : irises;
      if (src.length) {
        var cx = 0, cy = 0;
        src.forEach(function (i) { cx += i % Wd; cy += Math.floor(i / Wd); });
        cx = Math.round(cx / src.length); cy = Math.round(cy / src.length);
        var hx = cx - 1, hy = cy - 1;
        var hm = ctx.matAt(hx, hy);
        if (!(hm === "iris" || hm === "pupil")) { hx = cx - 1; hy = cy; hm = ctx.matAt(hx, hy); }
        if ((hm === "iris" || hm === "pupil") && !ctx.get(hx, hy)) ctx.put(hx, hy, pal.catch);
      }
    });

    // brows
    [1, -1].forEach(function (side) {
      var b = f.browLine, e = ex.brow || {};
      var pts = [];
      for (var k = 0; k <= 12; k++) {
        var t = k / 12;
        var x = b.x0 + (b.x1 - b.x0) * t;
        var y = b.y + b.arch * Math.sin(Math.PI * Math.pow(t, b.peak || 1)) - b.fall * t;
        y += (e.inner || 0) * (1 - t) + (e.outer || 0) * t + (side === 1 ? (e.r || 0) + (b.asym || 0) : (e.l || 0));
        x += (e.knit || 0) * (1 - t);
        var s = ctx.surface("head", x * side, y);
        if (!s) continue;
        s[2] += 0.6;
        var pp = ctx.project("head", s);
        if (!ctx.visible(pp, 2.2)) continue;
        pts.push({ x: pp.x, y: pp.y, t: t });
      }
      for (var j = 0; j < pts.length; j++) {
        var p0 = pts[j], p1 = pts[j + 1] || p0;
        var thick = b.thick[0] + (b.thick[1] - b.thick[0]) * p0.t;
        line(p0.x, p0.y, p1.x, p1.y, function (x, y) {
          ctx.put(x, y, pal.brow[1]);
          for (var tt = 1; tt < thick; tt++) ctx.put(x, y + tt, tt === Math.ceil(thick) - 1 ? pal.brow[2] : pal.brow[1]);
          if (thick >= 2 && b.soft !== false) ctx.put(x, y - 1, ctx.get(x, y - 1) || pal.brow[0]);
        });
      }
    });

    // nostrils: under the tip, both sides, only where the sculpture shows them
    [1, -1].forEach(function (side) {
      var n = f.nose;
      var p = [n.nostril[0] * side, n.nostril[1], n.nostril[2]];
      var s = ctx.surface("head", p[0], p[1]);
      if (!s) return;
      var pp = ctx.project("head", s);
      if (!ctx.visible(pp, 1.5)) return;
      ctx.put(pp.x, pp.y, pal.nostril);
      var towardCentre = ctx.project("head", [0, p[1], s[2]]).x > pp.x ? 1 : -1;
      if (n.nostrilW > 1) ctx.put(pp.x + towardCentre, pp.y, pal.nostril);
    });

    // the mouth line
    var m = f.mouth, mc = ex.mouthCorner || [0, 0];
    var mpts = [];
    for (var k2 = 0; k2 <= 16; k2++) {
      var u = -1 + 2 * k2 / 16;
      var wmul = 1 + (ex.mouthWide || 0);
      var x2 = u * m.w * wmul;
      var corner = u > 0 ? mc[0] : mc[1];
      var y2 = m.y + m.bow * (1 - u * u) * 0.5 + corner * Math.pow(Math.abs(u), 2.2) + (m.tilt || 0) * u;
      var s2 = ctx.surface("head", x2, y2);
      if (!s2) continue;
      var pp2 = ctx.project("head", s2);
      if (!ctx.visible(pp2, 1.5)) continue;
      mpts.push({ x: pp2.x, y: pp2.y, u: u });
    }
    var open = ex.open2 || 0;
    for (var j2 = 0; j2 + 1 < mpts.length; j2++) {
      var a = mpts[j2], bq = mpts[j2 + 1];
      line(a.x, a.y, bq.x, bq.y, function (x, y) {
        var edge = Math.abs(a.u) > 0.82;
        ctx.put(x, y, edge ? pal.mouthCorner : pal.mouth);
        if (open && !edge) {
          for (var oy = 1; oy <= open; oy++) ctx.put(x, y + oy, Math.abs(a.u) < 0.55 && oy <= (ex.teeth || 0) ? pal.teeth : pal.mouthIn);
        }
      });
    }
    // corners: a small dark tuck, lifted or dropped by the expression
    [mpts[0], mpts[mpts.length - 1]].forEach(function (pt, i) {
      if (!pt) return;
      var c = i === 0 ? mc[1] : mc[0];
      if (c < -0.8) ctx.put(pt.x, pt.y - 1, pal.mouthCorner);
      if (c > 0.8) ctx.put(pt.x, pt.y + 1, pal.mouthCorner);
    });
    // expression creases (smile lines), drawn on the sculpture
    if (ex.crease) {
      [1, -1].forEach(function (side) {
        var cr = ex.crease, prev = null;
        for (var k3 = 0; k3 <= 6; k3++) {
          var t3 = k3 / 6;
          var xx = (cr.x0 + (cr.x1 - cr.x0) * t3) * side, yy = cr.y0 + (cr.y1 - cr.y0) * t3;
          var s3 = ctx.surface("head", xx, yy);
          if (!s3) continue;
          var p3 = ctx.project("head", s3);
          if (!ctx.visible(p3, 1.5)) continue;
          if (prev) line(prev.x, prev.y, p3.x, p3.y, function (x, y) { if (ctx.matAt(x, y) === "skin") ctx.setBand(x, y, Math.min(ctx.bandAt(x, y) + 1, pal.skin.length - 2)); });
          prev = p3;
        }
      });
    }
  }

  function line(x0, y0, x1, y1, fn) {
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1, dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1, err = dx + dy;
    for (var guard = 0; guard < 400; guard++) {
      fn(x0, y0);
      if (x0 === x1 && y0 === y1) break;
      var e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  }

  /* ---------------------------------------------------------------- base anatomy (a starting block every lead edits) */

  var BASE = {
    skull: { c: [0, 8, -5], r: [23.5, 29, 31], front: { c: [0, 12, 11], r: [18.5, 17, 16] } },
    brow: { y: 5, z: 22.5, x1: 15, drop: 1.5, back: 5, r: 3 },
    cheek: { x: 15, y: -4, z: 14, r: [6.5, 5.5, 7.5], soft: { c: [11, -15, 10], r: [8.5, 10, 10] } },
    mid: { c: [0, -12, 14], r: [12, 12, 11] },
    muzzle: { c: [0, -21, 17.5], r: [9.5, 7.5, 7.5] },
    jaw: { angle: [15, -20, -3], chin: [4.5, -34, 15], r: 4.2, r2: 4.2, k: 6 },
    chin: { c: [0, -32.5, 19.5], r: [6, 4.8, 5] },
    eye: { x: 10.5, y: 0, z: 16.6, r: 5.9, lid: 0.8, open: 1.8, arch: 1.3, tilt: 0.5, low: -2.6, lowArch: 1.0, iris: 30, pupil: 11,
      socket: { dy: 0.6, dz: 5, r: 6.9, k: 3 } },
    nose: { root: [0, 0.5, 23.5], tip: [0, -14, 31.5], tipR: 3.1, bridge: 2, bridge2: 2.5, wing: [3.8, -15.5, 26], wingR: 2.6, nostril: [2.5, -17, 28], nostrilW: 2 },
    mouth: { y: -22, z: 24, w: 8, bow: 0.8, upper: { dy: 1.3, dz: 0, wf: 0.95, h: 1.6, d: 2.6 }, lower: { dy: 2, dz: -0.4, wf: 0.7, h: 1.8, d: 2.6 } },
    ear: { c: [23.5, -6, -5], r: [3, 9, 5.5] },
    browLine: { x0: 3, x1: 16, y: 6, arch: 1.2, fall: 1, thick: [3, 2], peak: 1 },
    body: {
      neck: { a: [0, 20, -4], b: [0, -6, -8], r: 10.5, r2: 11.5 },
      trap: { a: [0, 6, -9], b: [26, -6, -8], r: 6, r2: 5 },
      chest: { c: [0, -48, -3], r: [40, 44, 17] },
      yoke: { c: [0, -9, -3], r: [24, 11, 12.5] },
      shoulder: { a: [10, -8, -6], b: [37, -12, -6], r: 8, r2: 10.5 },
      arm: { a: [40, -14, -6], b: [45, -80, -4], r: 11, r2: 10 }
    }
  };

  var SPECS = {};
  var PAL_TEST = {
    skin: ["#f2d2b0", "#ddb48e", "#c69670", "#a67653", "#83573e", "#5c3a2c"],
    lip: ["#e0aa8e", "#c98f73", "#ae735b", "#8a5645"],
    sclera: ["#f1ebe2", "#d8cfc6", "#b3a79f"],
    iris: ["#8a6a4a", "#5e4430", "#3a281c"],
    pupil: "#1a1210",
    catch: "#fbf6ee",
    lash: "#2a1a16", lashSoft: "#5a3a2e", lowLid: "#a67653", caruncle: "#d49a88",
    brow: ["#6a4a36", "#3e2a20", "#2a1a14"],
    nostril: "#5c3a2c",
    mouth: "#7e4a3f", mouthCorner: "#6a3e34", mouthIn: "#3a1e1c", teeth: "#e8e0d4",
    cloth: ["#6a7488", "#4e576a", "#3a4150", "#272c37"]
  };

  SPECS.test = {
    face: BASE,
    pose: { head: [2, 28, 0], yaw: -24, pitch: 3, roll: 0, body: [0, -16, -4], bodyYaw: -10 },
    palette: PAL_TEST,
    expr: { neutral: {} }
  };

  /* ---------------------------------------------------------------- shared helpers: hair, collars, strokes */

  /** Hairline height (head-space y) by azimuth, from pairs [degrees from the front, y]. */
  function hairline(pts) {
    return function (phi) {
      for (var i = 1; i < pts.length; i++) {
        if (phi <= pts[i][0]) {
          var a = pts[i - 1], b = pts[i], t = (phi - a[0]) / (b[0] - a[0]);
          t = t * t * (3 - 2 * t);
          return a[1] + (b[1] - a[1]) * t;
        }
      }
      return pts[pts.length - 1][1];
    };
  }

  /**
   * A hair mass grown out of the skull: thickness t = [sides, crown, back], fading to nothing at the hairline over
   * `taper` units, optionally textured with curls { cell, amp, r, seed } or waves { freq, amp, dir }.
   */
  function hairMass(sk, o) {
    var line = hairline(o.line);
    var fc = sk.front.c, fr = sk.front.r;
    return function (x, y, z) {
      var phi = Math.atan2(Math.abs(x), z) * 57.29578;
      var h = line(phi);
      if (h - y > 3) return h - y;
      var s = S.clamp((y - h) / o.taper, 0, 1);
      var up = S.clamp((y - sk.c[1] + (o.upShift || 0)) / sk.r[1], 0, 1);
      var back = S.clamp(-(z - sk.c[2]) / sk.r[2], 0, 1);
      var t = o.t[0] + (o.t[1] - o.t[0]) * up + (o.t[2] - o.t[0]) * back * (1 - up);
      var base = S.smin(S.ellipsoid(x - sk.c[0], y - sk.c[1], z - sk.c[2], sk.r[0], sk.r[1], sk.r[2]),
        S.ellipsoid(x - fc[0], y - fc[1], z - fc[2], fr[0], fr[1], fr[2]), 6);
      var d = base - (t * s + (o.min || 0.35));
      if (o.curl) {
        var c = o.curl;
        var wv = S.worley(x, y, z, c.cell, c.seed || 7);
        var r = c.r || 0.55;
        d -= c.amp * (wv < r ? Math.sqrt(1 - (wv / r) * (wv / r)) : 0) * ((c.edge === undefined ? 0.5 : c.edge) + (1 - (c.edge === undefined ? 0.5 : c.edge)) * s);
      }
      if (o.wave) {
        var w = o.wave;
        d -= w.amp * Math.sin((y * w.dir[1] + x * w.dir[0] + z * w.dir[2]) * w.freq + Math.sin(x * 0.21 + z * 0.13) * 1.7) * s;
      }
      return S.smax(d, h - y, 0.6);
    };
  }

  /** A stand collar: a band around the neck axis (body space), lower at the front. */
  function standCollar(o) {
    return function (x, y, z) {
      var dz = z - o.z;
      var rr = Math.sqrt(x * x + dz * dz);
      var front = Math.max(0, dz / o.R);
      var top = o.top - (o.top - o.topFront) * front * front;
      var ring = Math.abs(rr - o.R) - o.th;
      var band = Math.max(o.bottom - y, y - top);
      return S.smax(ring, band, 0.8);
    };
  }

  /** Walk a stroke across a surface: pts in frame space, projected and joined, each pixel handed to fn(x, y, t). */
  function stroke(ctx, frame, pts, fn, tol) {
    var prev = null;
    for (var i = 0; i < pts.length; i++) {
      var q = pts[i];
      var s = ctx.surface(frame, q[0], q[1], q[2]);
      if (!s) { prev = null; continue; }
      var pp = ctx.project(frame, s);
      if (!ctx.visible(pp, tol === undefined ? 1.5 : tol)) { prev = null; continue; }
      if (prev) { var t = i / (pts.length - 1); line(prev.x, prev.y, pp.x, pp.y, function (x, y) { fn(x, y, t); }); }
      else fn(pp.x, pp.y, i / (pts.length - 1));
      prev = pp;
    }
  }

  /** z on the front of the skull at (x, y), for laying locks over the forehead and crown. */
  function skullZ(sk, x, y) {
    var best = -1e9;
    [[sk.c, sk.r], [sk.front.c, sk.front.r]].forEach(function (e) {
      var u = (x - e[0][0]) / e[1][0], v = (y - e[0][1]) / e[1][1], q = 1 - u * u - v * v;
      if (q > 0) best = Math.max(best, e[0][2] + e[1][2] * Math.sqrt(q));
    });
    return best === -1e9 ? 0 : best;
  }
  /** A lock of hair: a tapered chain through points [x, y, lift above the skull]. */
  function lock(sk, pts, r0, r1) {
    var Q = pts.map(function (p) { return [p[0], p[1], skullZ(sk, p[0], p[1]) + p[2]]; });
    return function (x, y, z) {
      var d = 1e9, n = Q.length - 1;
      for (var i = 0; i < n; i++) {
        var v = S.capsule(x, y, z, Q[i], Q[i + 1], r0 + (r1 - r0) * i / n, r0 + (r1 - r0) * (i + 1) / n);
        if (v < d) d = v;
      }
      return d;
    };
  }
  /**
   * Hair built from locks: each runs over the skull from near the crown to its own end, lifted by the hair's thickness,
   * with a gentle sideways wave. o.locks: [{ phi, end: y, lift: [root, end], r: [root, end], sweep, wave, crown: [x, y, z] }]
   */
  function lockHair(sk, o) {
    var chains = o.locks.map(function (L, i) {
      var root = L.crown || o.crown;
      var a = L.phi * Math.PI / 180;
      var endDir = S.norm([Math.sin(a) * Math.sqrt(Math.max(0, 1 - 0)), 0, Math.cos(a)]);
      var pts = [];
      var n = L.seg || 5;
      for (var k = 0; k <= n; k++) {
        var t = k / n;
        // direction from the skull centre: from the crown point toward the end, bowing out over the dome
        var ey = (L.end - sk.c[1]) / sk.r[1];
        var ex = endDir[0] * Math.sqrt(Math.max(0.05, 1 - ey * ey)), ez = endDir[2] * Math.sqrt(Math.max(0.05, 1 - ey * ey));
        var rx = (root[0] - sk.c[0]) / sk.r[0], ry = (root[1] - sk.c[1]) / sk.r[1], rz = (root[2] - sk.c[2]) / sk.r[2];
        var dx = rx + (ex - rx) * t, dy = ry + (ey - ry) * t, dz = rz + (ez - rz) * t;
        var len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
        dx /= len; dy /= len; dz /= len;
        var lift = L.lift[0] + (L.lift[1] - L.lift[0]) * t;
        var p = [sk.c[0] + dx * (sk.r[0] + lift), sk.c[1] + dy * (sk.r[1] + lift), sk.c[2] + dz * (sk.r[2] + lift)];
        // wave and sweep sideways (around the head), strongest toward the tip
        var side = [Math.cos(a), 0, -Math.sin(a)];
        var off = (L.wave || 0) * Math.sin(t * Math.PI * 1.6 + i * 1.3) * t + (L.sweep || 0) * t * t;
        p[0] += side[0] * off; p[2] += side[2] * off;
        if (L.hang && t > 0.6) p[1] -= L.hang * (t - 0.6) / 0.4;
        pts.push(p);
      }
      var r0 = L.r[0], r1 = L.r[1];
      var bx = 0, by = 0, bz = 0;
      pts.forEach(function (p) { bx += p[0]; by += p[1]; bz += p[2]; });
      bx /= pts.length; by /= pts.length; bz /= pts.length;
      var br = 0;
      pts.forEach(function (p) { br = Math.max(br, Math.sqrt((p[0] - bx) * (p[0] - bx) + (p[1] - by) * (p[1] - by) + (p[2] - bz) * (p[2] - bz))); });
      return { pts: pts, r0: r0, r1: r1, b: [bx, by, bz, br + Math.max(r0, r1) + 2] };
    });
    var k = o.k || 1.2;
    return function (x, y, z) {
      var d = 1e9;
      for (var i = 0; i < chains.length; i++) {
        var c = chains[i], b = c.b;
        var bd = Math.sqrt((x - b[0]) * (x - b[0]) + (y - b[1]) * (y - b[1]) + (z - b[2]) * (z - b[2])) - b[3];
        if (bd > 0) { if (bd < d) d = Math.min(d, bd + 1); continue; }
        var n = c.pts.length - 1;
        for (var j = 0; j < n; j++) {
          var v = S.capsule(x, y, z, c.pts[j], c.pts[j + 1], c.r0 + (c.r1 - c.r0) * j / n, c.r0 + (c.r1 - c.r0) * (j + 1) / n);
          d = S.smin(d, v, k);
        }
      }
      return d;
    };
  }

  /** Distance from (x, y) to the segment a-b, in 2D. */
  function seg2(x, y, a, b) {
    var px = x - a[0], py = y - a[1], bx = b[0] - a[0], by = b[1] - a[1];
    var h = S.clamp((px * bx + py * by) / (bx * bx + by * by), 0, 1);
    var dx = px - bx * h, dy = py - by * h;
    return Math.sqrt(dx * dx + dy * dy);
  }
  function lerpLine(pts, x) {
    if (x <= pts[0][0]) return pts[0][1];
    for (var i = 1; i < pts.length; i++) if (x <= pts[i][0]) { var a = pts[i - 1], b = pts[i]; return a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]); }
    return pts[pts.length - 1][1];
  }
  function clothMat(ramp, extra) { var m = { ramp: ramp, th: ramp.length === 5 ? [0.8, 0.55, 0.34, 0.2] : undefined, out: ramp[ramp.length - 1], inner: ramp[ramp.length - 1], edgeDepth: 6, aoPow: 0.35 }; for (var k in extra || {}) m[k] = extra[k]; return m; }

  function hairMaterial(pal) { return { ramp: pal.hair, spec: pal.hairSpec || 10, specMin: pal.hairSpecMin || 0.62, th: pal.hairTh || [0.72, 0.5, 0.32], out: pal.hair[pal.hair.length - 1], inner: pal.hair[pal.hair.length - 1], edgeDepth: 7 }; }

  /* ---------------------------------------------------------------- C01 Adrian Keene
   * Compact rectangular face, firm but rounded jaw, straight brows (his left a touch higher), sturdy neck. Short close
   * brown curls; medium olive complexion; a practical high-collared warden's jacket. First expression: focused
   * attention with a relaxed mouth. Pilot second: amused, the boyish smile.
   */
  SPECS.c01 = {
    name: "Adrian Keene",
    pilotExpression: "amused",
    bg: ["#3b4a5c", "#1e2632"],
    face: merge(BASE, {
      skull: { c: [0, 7.5, -5], r: [23.5, 28, 30.5], front: { c: [0, 11, 11], r: [18.5, 16, 16] } },
      brow: { y: 5, z: 22.6, x1: 15.5, drop: 0.8, back: 5, r: 3.2 },
      cheek: { x: 15.5, y: -4.5, z: 13.5, r: [6.5, 5.5, 7.5], soft: { c: [12, -15, 10], r: [8.8, 10, 10] } },
      mid: { c: [0, -12, 14], r: [12.5, 12, 11] },
      muzzle: { c: [0, -19.5, 17.5], r: [9.5, 7.5, 7.5] },
      jaw: { angle: [16.2, -19, -2.5], chin: [5.5, -30.5, 15], r: 4.7, r2: 4.7, k: 5 },
      chin: { c: [0, -29.8, 19], r: [7, 4.6, 5] },
      eye: { x: 10.5, z: 16.4, open: 1.9, arch: 1.1, tilt: 0.3, iris: 30 },
      nose: { tip: [0, -13.5, 31], tipR: 3.1, bridge: 2.1, bridge2: 2.4, wing: [3.9, -15, 26], nostril: [2.5, -16.5, 28] },
      mouth: { y: -20.6, w: 8, bow: 0.6 },
      browLine: { x0: 3, x1: 16, y: 6.4, arch: 0.35, fall: 0.2, thick: [3, 2.5], asym: 0.8 },
      body: { neck: { r: 11.5, r2: 12.5 } }
    }),
    pose: { head: [2, 30, 0], yaw: -24, pitch: 3, roll: 0, body: [0, -21, -4], bodyYaw: -10 },
    palette: {
      skin: ["#e8caa2", "#d3ae85", "#ba936b", "#997454", "#75573f", "#503a2c"],
      lip: ["#dba486", "#c48b6d", "#a77058", "#7e5242"],
      sclera: ["#efe8de", "#d6ccc0", "#b2a69a"],
      iris: ["#8e7648", "#654f30", "#40321f"],
      pupil: "#1c1510", catch: "#f6f0e2",
      lash: "#2b1c16", lashSoft: "#5a3e2e", lowLid: "#a07550", caruncle: "#cf9580",
      hair: ["#b89266", "#8e6844", "#6d4c31", "#4f3523", "#33221a"],
      brow: ["#6d4c31", "#4f3523", "#33221a"],
      nostril: "#5f3f2d", mouth: "#7e5242", mouthCorner: "#6c4536", mouthIn: "#3a201b", teeth: "#e9e0d2",
      cloth: ["#62788a", "#4b5e6d", "#384855", "#28343e", "#1c252d"],
      zip: "#9aa3a8", pin: ["#e9c46a", "#b88a36"]
    },
    materials: { hair: hairMaterial, collar: function (pal) { return { ramp: pal.cloth, th: [0.8, 0.6, 0.42, 0.28], ambient: 0.4, out: pal.cloth[4], inner: pal.cloth[4], edgeDepth: 4 }; } },
    extraGroups: [
      function (f) {
        return { name: "hair", frame: "head", bound: [0, 8, -4, 40], parts: [{ t: "fn", m: "hair", f: hairMass(f.skull, {
          line: [[0, 16.5], [14, 16.8], [30, 17.6], [44, 15], [58, 10], [70, 4], [79, -2.5], [86, -2.5], [91, 4], [112, 3.5], [126, -8], [150, -16], [180, -18]],
          t: [1.6, 3.2, 2.2], taper: 2.6, curl: { cell: 4.6, amp: 1.9, r: 0.62, seed: 11, edge: 0.7 }
        }) }] };
      },
      function (f) {
        var nk = f.body.neck;
        return { name: "collar", frame: "body", bound: [0, 10, -4, 24], parts: [{ t: "fn", m: "collar", f: standCollar({ z: -5, R: nk.r + 2.4, th: 1.5, bottom: -2, top: 16.5, topFront: 11 }) }] };
      }
    ],
    features: function (ctx, f) {
      var pal = SPECS.c01.palette;
      // zip down the centre front, and a brass warden's pin on the collar (his left)
      var pts = [];
      for (var y = 12; y >= -70; y -= 2) pts.push([0, y, 40]);
      stroke(ctx, "body", pts, function (x, y) { if (ctx.matAt(x, y) === "cloth") ctx.put(x, y, pal.cloth[4]); if (ctx.matAt(x + 1, y) === "cloth") ctx.put(x + 1, y, pal.zip); });
      var pin = ctx.surface("body", 9, 9, 40);
      if (pin) { var pp = ctx.project("body", pin); if (ctx.visible(pp, 2)) { ctx.put(pp.x, pp.y, pal.pin[0]); ctx.put(pp.x + 1, pp.y, pal.pin[1]); ctx.put(pp.x, pp.y + 1, pal.pin[1]); ctx.put(pp.x + 1, pp.y + 1, pal.pin[1]); } }
    },
    expr: {
      neutral: { brow: { inner: -0.25 } },
      attentive: { brow: { inner: 0.2, outer: 0.2 }, open: 0.3 },
      amused: { mouthCorner: [1.7, 1.2], mouthWide: 0.08, cheek: 1.1, lowLid: 0.7, open: -0.2, brow: { inner: 0.2, outer: -0.1 }, open2: 1, teeth: 1,
        crease: { x0: 9, y0: -12.5, x1: 11.2, y1: -20.5 } }
    }
  };

  /* ---------------------------------------------------------------- C02 Micah Serrano
   * Broad cheekbones and nose, fuller lower face, thick neck, wide shoulders. Dark wavy hair, untidy at the front; warm
   * tan complexion; a wide mouth whose smile comes up unevenly. A short beard that follows the jaw and leaves the cheeks
   * clear. Canvas work jacket over a tee, a pencil in the pocket. First expression: open, engaged attention. Pilot
   * second: amused.
   */
  SPECS.c02 = {
    name: "Micah Serrano",
    pilotExpression: "amused",
    bg: ["#4a3a30", "#241c18"],
    face: merge(BASE, {
      skull: { c: [0, 7.5, -5.5], r: [24.5, 28, 31], front: { c: [0, 11, 11], r: [19.5, 16, 16] } },
      brow: { y: 5, z: 22.8, x1: 16, drop: 1.2, back: 5, r: 3.4 },
      cheek: { x: 16.8, y: -3.5, z: 13.5, r: [7.5, 6, 8], soft: { c: [12.5, -15, 10.5], r: [9.5, 10.5, 10.5] } },
      mid: { c: [0, -12, 14.5], r: [13.5, 12.5, 11.5] },
      muzzle: { c: [0, -20, 18], r: [10.5, 8, 8] },
      jaw: { angle: [17.2, -20, -2.5], chin: [6, -31.5, 15], r: 5.2, r2: 5.2, k: 6 },
      chin: { c: [0, -31, 19], r: [7.5, 5, 5.2] },
      eye: { x: 10.8, z: 16.4, open: 1.8, arch: 1.2, tilt: 0.1, low: -2.8, lowArch: 1.2, iris: 31 },
      nose: { root: [0, 0.5, 23.8], tip: [0, -14, 31.2], tipR: 3.7, bridge: 2.5, bridge2: 3, wing: [4.8, -15.2, 26.2], wingR: 3.1, nostril: [3, -16.8, 28.2] },
      mouth: { y: -21.3, w: 9.8, bow: 0.5, tilt: 0.25, upper: { dy: 1.3, dz: 0, wf: 0.92, h: 1.8, d: 2.7 }, lower: { dy: 2.1, dz: -0.3, wf: 0.72, h: 2.1, d: 2.7 } },
      ear: { c: [24.8, -6, -5.5], r: [3.1, 9, 5.6] },
      browLine: { x0: 3, x1: 16.5, y: 6.2, arch: 1.3, fall: 1.2, thick: [3, 2], peak: 0.8 },
      body: {
        neck: { a: [0, 20, -4], b: [0, -6, -8], r: 13, r2: 14 },
        trap: { a: [0, 6, -9], b: [28, -6, -8], r: 7, r2: 6 },
        shoulder: { a: [10, -8, -6], b: [40, -12, -6], r: 9, r2: 11.5 },
        arm: { a: [43, -14, -6], b: [48, -80, -4], r: 12, r2: 11 },
        yoke: { c: [0, -9, -3], r: [27, 11, 13.5] }
      }
    }),
    pose: { head: [1, 30, 0], yaw: -20, pitch: 2, roll: -2.5, body: [0, -21, -4], bodyYaw: -8 },
    palette: {
      skin: ["#eebf92", "#d9a272", "#bf8656", "#9d6a41", "#784c30", "#513222"],
      lip: ["#d99a7c", "#c07f62", "#a0654d", "#7a4a39"],
      sclera: ["#efe7dc", "#d5cabd", "#ae9f92"],
      iris: ["#74503a", "#503526", "#2f1f16"],
      pupil: "#170f0b", catch: "#f5eee2",
      lash: "#1e1512", lashSoft: "#4a3226", lowLid: "#9d6a41", caruncle: "#cf8f78",
      hair: ["#8c6c56", "#4a372d", "#33261f", "#221914", "#140f0c"],
      hairSpec: 10, hairSpecMin: 0.8, hairTh: [0.68, 0.42, 0.26],
      brow: ["#4e3a2f", "#3a2b23", "#281d18"],
      beard: ["#a07a5a", "#83624a", "#684c3a", "#4c372b"],
      nostril: "#5a3624", mouth: "#7a4a39", mouthCorner: "#693e2f", mouthIn: "#35180f", teeth: "#ebe2d4",
      cloth: ["#b58e59", "#977346", "#785a36", "#5a4227", "#3e2d1a"],
      cord: ["#6e4d32", "#583c27", "#432d1d", "#2f1f14"],
      tee: ["#5c6858", "#475245", "#353f34", "#252c24"],
      pencil: ["#f2c643", "#c99a25"], ferrule: "#b9b6ae", eraser: "#e58a8a"
    },
    materials: {
      hair: hairMaterial,
      beard: function (pal) { return { ramp: pal.beard, th: [0.72, 0.48, 0.3], out: pal.beard[3], inner: pal.beard[3], edgeDepth: 12, aoPow: 0.5 }; },
      beardEdge: function (pal) { return { ramp: pal.beard.map(function (c, i) { return P.mix(c, pal.skin[Math.min(i + 2, 5)], 0.45); }), th: [0.72, 0.48, 0.3], out: pal.skin[5], edgeDepth: 12, aoPow: 0.5 }; },
      cloth: function (pal) { return clothMat(pal.cloth, { seam: ["tee"] }); },
      tee: function (pal) { return clothMat(pal.tee); },
      cord: function (pal) { return clothMat(pal.cord, { th: [0.78, 0.55, 0.36], ambient: 0.38 }); }
    },
    paint: function (hit, f) {
      var l = hit.l, m = f.mouth;
      if (hit.g === "head" && hit.m === "skin") {
        var ax = Math.abs(l[0]);
        // the beard's top edge runs parallel to the jaw, a few pixels above it, from the sideburn to the mouth corner:
        // the cheek above it stays clear skin
        var edge = lerpLine([[10.4, -20.2], [14, -21], [17.5, -18.4], [20.5, -14], [22.8, -8.5]], ax);
        var inBeard = l[1] < edge && (ax > m.w + 0.4 || l[1] < m.y - 3.3);
        var stache = ax < m.w * 0.92 && l[1] > m.y + 2 && l[1] < m.y + 3.9 - ax * 0.07;
        var corner = ax >= m.w * 0.88 && ax < m.w + 1.8 && l[1] < m.y + 2.8 && l[1] > m.y - 4;
        var burn = ax > 21.6 && l[1] >= -9 && l[1] < 5 && l[2] > -2.5 && l[2] < 4;
        if (inBeard || stache || corner || burn) return (inBeard && l[1] > edge - 1.1 && ax > 12) ? "beardEdge" : "beard";
        return null;
      }
      if (hit.g === "body" && hit.m === "cloth" && l[2] > 0) {
        // the jacket hangs open over the tee
        var open = 3.2 + Math.max(0, -l[1]) * 0.08;
        if (Math.abs(l[0] + 1) < open && l[1] < 4) return "tee";
      }
      return null;
    },
    extraGroups: [
      function (f) {
        var sk = f.skull;
        // wavy locks from a crown just behind the top, swept forward and a little to his right at the front; the
        // front ones hang onto the forehead, untidily
        var locks = [];
        var crown = [2, sk.c[1] + sk.r[1] - 3, -8];
        for (var i = 0; i < 22; i++) {
          var phi = -168 + i * (336 / 21);
          var ap = Math.abs(phi);
          var end = ap < 30 ? 13.5 + (i % 3) * 1.2 : ap < 60 ? 12.5 : ap < 100 ? 2.5 : ap < 140 ? -6 : -15;
          if (ap < 40 && i % 2) continue;
          locks.push({ phi: phi, end: end, lift: [5.4, ap < 40 ? 2.6 : 1.4], r: [3.6, ap < 40 ? 2 : 2], wave: 2, sweep: ap < 50 ? 11 : 0, hang: ap < 30 ? 1 : 0, crown: crown, seg: 7 });
        }
        for (var j = 0; j < 10; j++) {
          var phi2 = -150 + j * 33;
          locks.push({ phi: phi2, end: Math.abs(phi2) < 60 ? 17 : Math.abs(phi2) < 110 ? 7 : -10, lift: [6.4, 3.4], r: [3.6, 2.4], wave: 1.4, sweep: Math.abs(phi2) < 50 ? 4 : 0, crown: [0, sk.c[1] + sk.r[1] - 1, -3], seg: 5 });
        }
        return { name: "hair", frame: "head", bound: [0, 8, -4, 44], parts: [
          { t: "fn", m: "hair", k: 0, f: hairMass(sk, {
            line: [[0, 17], [20, 16.5], [38, 13.5], [56, 10], [68, 5], [78, 0], [88, 1], [96, 2.5], [114, 1.5], [128, -9], [150, -17], [180, -19]],
            t: [1.6, 3.5, 2.6], taper: 3
          }) },
          { t: "fn", m: "hair", k: 1.5, f: lockHair(sk, { locks: locks, k: 1.1 }) }
        ] };
      },
      function (f) {
        var nk = f.body.neck;
        return { name: "collar", frame: "body", bound: [0, 6, -4, 26], parts: [{ t: "fn", m: "cord", f: function (x, y, z) {
          var band = standCollar({ z: -5, R: nk.r + 3.4, th: 1.8, bottom: -1, top: 8.5, topFront: 3 })(x, y, z);
          // open at the front
          return S.smax(band, 5.5 - Math.abs(x) - Math.max(0, -(z + 2)) * 3, 0.8);
        } }] };
      }
    ],
    features: function (ctx) {
      var pal = SPECS.c02.palette;
      // chest pocket on his left, with a pencil standing in it, eraser up
      var tl = ctx.surface("body", 13, -27, 40), tr = ctx.surface("body", 24, -27, 40);
      if (tl && tr) {
        var a = ctx.project("body", tl), b = ctx.project("body", tr);
        if (ctx.visible(a, 2) && ctx.visible(b, 2)) {
          line(a.x, a.y, b.x, b.y, function (x, y) { ctx.put(x, y, pal.cloth[4]); ctx.put(x, y + 1, pal.cloth[1]); });
          var px = a.x + Math.round((b.x - a.x) * 0.3), py = a.y;
          for (var k = 1; k <= 6; k++) { ctx.put(px, py - k, pal.pencil[0]); ctx.put(px + 1, py - k, pal.pencil[1]); }
          ctx.put(px, py - 7, pal.ferrule); ctx.put(px + 1, py - 7, pal.ferrule);
          ctx.put(px, py - 8, pal.eraser); ctx.put(px + 1, py - 8, P.shade(pal.eraser, -0.2));
        }
      }
    },
    expr: {
      neutral: {},
      amused: { mouthCorner: [2.3, 0.9], mouthWide: 0.06, cheek: 1.3, lowLid: 0.8, open: -0.2, brow: { inner: 0.3, outer: 0 }, open2: 1, teeth: 1,
        crease: { x0: 10, y0: -12.5, x1: 12.4, y1: -21.5 } }
    }
  };

  /* ---------------------------------------------------------------- C03 Ellis Okafor
   * Long, fine-boned face with distinct cheek planes, a narrow neck and expressive brows. Dense dark coils kept off the
   * face; deep brown complexion with a cool sheen on the high planes; a defined mouth. Careful, cheap, well-kept
   * clothes: a buttoned shirt under a cardigan, and the strap of a much-mended bag. First expression: composed
   * interest. Pilot second: tense, uncertain.
   */
  SPECS.c03 = {
    name: "Ellis Okafor",
    pilotExpression: "tense",
    bg: ["#3d3550", "#1f1a2b"],
    face: merge(BASE, {
      skull: { c: [0, 8.5, -5], r: [22.5, 30, 30.5], front: { c: [0, 12, 11], r: [17.5, 17, 16] } },
      brow: { y: 5.2, z: 22.4, x1: 15, drop: 1.8, back: 5, r: 2.8 },
      cheek: { x: 14.8, y: -3, z: 14.5, r: [6, 5, 7], soft: { c: [11, -15.5, 10], r: [7.8, 10, 9.5] } },
      mid: { c: [0, -12.5, 14], r: [11.5, 12.5, 11] },
      muzzle: { c: [0, -22.5, 17.5], r: [9, 8, 7.5] },
      jaw: { angle: [14.5, -21, -3], chin: [4.5, -34, 15], r: 3.9, r2: 4.2, k: 6 },
      chin: { c: [0, -33, 19], r: [5.5, 5, 5] },
      eye: { x: 10.2, z: 16.4, open: 2.0, arch: 1.4, tilt: 0.7, iris: 30 },
      nose: { root: [0, 0.5, 23.2], tip: [0, -15, 30.8], tipR: 3.0, bridge: 1.8, bridge2: 2.3, wing: [4.4, -16.5, 26], wingR: 2.9, nostril: [2.8, -18, 28] },
      mouth: { y: -23, w: 8.2, bow: 1.3, upper: { dy: 1.4, dz: 0, wf: 0.95, h: 2.0, d: 2.8 }, lower: { dy: 2.3, dz: -0.3, wf: 0.75, h: 2.3, d: 2.8 } },
      ear: { c: [22.8, -6.5, -5], r: [2.8, 8.5, 5] },
      browLine: { x0: 3, x1: 15.5, y: 6.5, arch: 2.0, fall: 1.4, thick: [2.6, 1.6], peak: 0.8 },
      body: {
        neck: { a: [0, 20, -4], b: [0, -6, -8], r: 9.6, r2: 10.6 },
        trap: { a: [0, 6, -9], b: [24, -6, -8], r: 5.5, r2: 5 },
        shoulder: { a: [10, -8, -6], b: [35, -13, -6], r: 8, r2: 10 },
        arm: { a: [37.5, -15, -6], b: [41, -80, -4], r: 10, r2: 9.5 },
        yoke: { c: [0, -9, -3], r: [22, 11, 12] }
      }
    }),
    pose: { head: [3, 25, 0], yaw: -26, pitch: -1, roll: 1, body: [0, -26, -4], bodyYaw: -12 },
    palette: {
      skin: ["#c39377", "#a8795c", "#8d6045", "#724a33", "#583727", "#3c251b", "#281812"],
      skinTh: [0.78, 0.58, 0.42, 0.28, 0.18],
      lip: ["#a4675a", "#874f44", "#6c3c34", "#4e2a25"],
      sclera: ["#ebe2d6", "#cfc2b3", "#a79889"],
      iris: ["#654230", "#422a1d", "#261810"],
      pupil: "#120b08", catch: "#f1e9dc",
      lash: "#140d0b", lashSoft: "#3a241c", lowLid: "#583727", caruncle: "#a8695a",
      hair: ["#6a5e62", "#3a3134", "#262022", "#171314", "#0b0909"],
      hairSpec: 7, hairSpecMin: 0.6, hairTh: [0.6, 0.38, 0.22],
      brow: ["#3a2c28", "#1e1718", "#110d0d"],
      nostril: "#2e1d15", mouth: "#4e2a25", mouthCorner: "#3c221c", mouthIn: "#26120e", teeth: "#e8dfd2",
      cloth: ["#8e5e6e", "#734a59", "#5a3946", "#432a34", "#2d1c23"],
      shirt: ["#efe8da", "#d9d0bf", "#b8ad99", "#8f846f"],
      strap: ["#a57b4f", "#86623d", "#674a2d", "#48331f"],
      thread: "#d8c79a", button: "#c9bfae"
    },
    materials: {
      hair: hairMaterial,
      skin: function (pal) { return { ramp: pal.skin, th: pal.skinTh, spec: 22, specMin: 0.86, out: pal.skin[6], inner: pal.skin[5], edgeDepth: 12, aoPow: 0.55 }; },
      lid: function (pal) { return { ramp: pal.skin, th: pal.skinTh, noOutline: true }; },
      neck: function (pal) { return { ramp: pal.skin.slice(1), th: [0.9, 0.7, 0.48, 0.3, 0.18], out: pal.skin[6], inner: pal.skin[6] }; },
      cloth: function (pal) { return clothMat(pal.cloth, { seam: ["shirt", "strap"] }); },
      shirt: function (pal) { return clothMat(pal.shirt, { th: [0.8, 0.55, 0.34], ambient: 0.42 }); },
      strap: function (pal) { return clothMat(pal.strap, { th: [0.78, 0.55, 0.34] }); }
    },
    paint: function (hit) {
      var l = hit.l;
      if (hit.g === "body" && hit.m === "cloth" && l[2] > -2) {
        // bag strap from his left shoulder down across to the right hip
        if (seg2(l[0], l[1], [26, -2], [-34, -86]) < 2.6) return "strap";
        // the cardigan's V shows the shirt
        var v = 6.5 - Math.max(0, 6 - l[1]) * 0.14;
        if (Math.abs(l[0]) < v && l[1] < 10) return "shirt";
      }
      return null;
    },
    extraGroups: [
      function (f) {
        var sk = f.skull;
        return { name: "hair", frame: "head", bound: [0, 12, -4, 44], parts: [
          { t: "fn", m: "hair", f: hairMass(sk, {
            line: [[0, 19.5], [16, 19.3], [28, 18.6], [36, 16.5], [46, 16], [58, 11], [70, 6], [80, 3], [88, 3.5], [96, 5.5], [114, 5], [128, -6], [150, -14], [180, -16]],
            t: [1.2, 10.5, 5.2], upShift: -2, taper: 1.2, min: 0.6, curl: { cell: 3.4, amp: 1.5, r: 0.62, seed: 23, edge: 0.4 }
          }) }
        ] };
      },
      function (f) {
        // the shirt collar's two points, sitting on the cardigan at the neck
        return { name: "collar", frame: "body", bound: [0, 8, 2, 16], parts: [
          { t: "ell", c: [6.8, 5.5, 6.8], r: [6.8, 2.6, 2.1], m: "shirt", mirror: true },
          { t: "fn", m: "shirt", f: standCollar({ z: -4.5, R: f.body.neck.r + 1.0, th: 0.8, bottom: 3, top: 7.5, topFront: 5 }) }
        ] };
      }
    ],
    features: function (ctx) {
      var pal = SPECS.c03.palette;
      // shirt buttons down the placket
      for (var y = 4; y > -40; y -= 9) {
        var sp = ctx.surface("body", -0.5, y, 40);
        if (!sp) continue;
        var pp = ctx.project("body", sp);
        if (ctx.visible(pp, 2) && ctx.matAt(pp.x, pp.y) === "shirt") ctx.put(pp.x, pp.y, pal.button);
      }
      // the mend on the strap: cross-stitches in pale thread
      [[14, -20], [11, -24.5]].forEach(function (q) {
        var s = ctx.surface("body", q[0], q[1], 40);
        if (!s) return;
        var pp = ctx.project("body", s);
        if (!ctx.visible(pp, 2) || ctx.matAt(pp.x, pp.y) !== "strap") return;
        ctx.put(pp.x, pp.y, pal.thread); ctx.put(pp.x - 1, pp.y - 1, pal.thread); ctx.put(pp.x + 1, pp.y + 1, pal.thread);
      });
    },
    expr: {
      neutral: { brow: { inner: 0.2, outer: 0.1 } },
      tense: { brow: { inner: 1.8, outer: -0.6, knit: 1.2 }, mouthCorner: [-1.1, -0.8], mouthWide: -0.06, lipUp: -0.35, open: 0.25, lowLid: 0.35, gaze: [0.14, -0.05] }
    }
  };

  function draw(id, ex, opts) {
    var spec = typeof id === "string" ? SPECS[id] : id;
    if (opts && opts.pose) spec = merge(spec, { pose: opts.pose });
    var model = build(spec, ex);
    return S.render(model).canvas;
  }

  NB.faces = { draw: draw, build: build, specs: SPECS, BASE: BASE, merge: merge, PAL_TEST: PAL_TEST, W: W, H: H };
})(typeof window !== "undefined" ? window : globalThis);
