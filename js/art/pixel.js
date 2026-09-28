/* Calder — a tiny raster library for pixel art.
 * Draws into plain RGBA buffers, so the same art code runs in the browser (painted into a canvas) and in Node
 * (written out as PNG previews by tools/art-preview.js). No anti-aliasing anywhere: every pixel is deliberate.
 */
(function (root) {
  "use strict";
  var NB = root.NB || (root.NB = {});

  function hex(s) {
    if (Array.isArray(s)) return s;
    s = String(s).replace("#", "");
    if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
    var a = s.length === 8 ? parseInt(s.slice(6, 8), 16) : 255;
    return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16), a];
  }

  function mix(a, b, t) {
    a = hex(a); b = hex(b);
    return [
      Math.round(a[0] + (b[0] - a[0]) * t),
      Math.round(a[1] + (b[1] - a[1]) * t),
      Math.round(a[2] + (b[2] - a[2]) * t),
      Math.round(a[3] + (b[3] - a[3]) * t)
    ];
  }

  /** Lighten (amt > 0) or darken (amt < 0) toward white/black, keeping a little hue shift toward warm/cool. */
  function shade(c, amt) {
    c = hex(c);
    if (amt >= 0) return mix(c, [255, 246, 226, c[3]], amt);
    return mix(c, [18, 12, 36, c[3]], -amt);
  }

  function Canvas(w, h) {
    this.w = w;
    this.h = h;
    this.data = new Uint8ClampedArray(w * h * 4);
  }

  Canvas.prototype.set = function (x, y, col) {
    x = Math.round(x); y = Math.round(y);
    if (x < 0 || y < 0 || x >= this.w || y >= this.h || !col) return;
    var c = hex(col);
    var i = (y * this.w + x) * 4;
    var a = c[3] / 255;
    if (a >= 1) {
      this.data[i] = c[0]; this.data[i + 1] = c[1]; this.data[i + 2] = c[2]; this.data[i + 3] = 255;
    } else if (a > 0) {
      var da = this.data[i + 3] / 255;
      var oa = a + da * (1 - a);
      for (var k = 0; k < 3; k++) this.data[i + k] = Math.round((c[k] * a + this.data[i + k] * da * (1 - a)) / (oa || 1));
      this.data[i + 3] = Math.round(oa * 255);
    }
  };

  Canvas.prototype.get = function (x, y) {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return null;
    var i = (y * this.w + x) * 4;
    return [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
  };

  Canvas.prototype.filled = function (x, y) {
    var p = this.get(x, y);
    return !!(p && p[3] > 0);
  };

  Canvas.prototype.fill = function (col) { this.rect(0, 0, this.w, this.h, col); };

  Canvas.prototype.rect = function (x, y, w, h, col) {
    for (var j = 0; j < h; j++) for (var i = 0; i < w; i++) this.set(x + i, y + j, col);
  };

  Canvas.prototype.hline = function (x0, x1, y, col) {
    if (x1 < x0) { var t = x0; x0 = x1; x1 = t; }
    for (var x = Math.round(x0); x <= Math.round(x1); x++) this.set(x, y, col);
  };

  Canvas.prototype.vline = function (x, y0, y1, col) {
    if (y1 < y0) { var t = y0; y0 = y1; y1 = t; }
    for (var y = Math.round(y0); y <= Math.round(y1); y++) this.set(x, y, col);
  };

  /** Bresenham line. */
  Canvas.prototype.line = function (x0, y0, x1, y1, col) {
    x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    var dy = -Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    var err = dx + dy;
    for (;;) {
      this.set(x0, y0, col);
      if (x0 === x1 && y0 === y1) break;
      var e2 = 2 * err;
      if (e2 >= dy) { err += dy; x0 += sx; }
      if (e2 <= dx) { err += dx; y0 += sy; }
    }
  };

  /** Filled ellipse. fn(x, y) may return a colour per pixel instead of col. */
  Canvas.prototype.ellipse = function (cx, cy, rx, ry, col) {
    for (var y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++) {
      for (var x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
        var nx = (x - cx) / (rx + 0.35), ny = (y - cy) / (ry + 0.35);
        if (nx * nx + ny * ny <= 1) this.set(x, y, typeof col === "function" ? col(x, y) : col);
      }
    }
  };

  /** Ellipse ring (outline only). */
  Canvas.prototype.ring = function (cx, cy, rx, ry, col) {
    var steps = Math.max(24, Math.round((rx + ry) * 4));
    for (var i = 0; i < steps; i++) {
      var a = (i / steps) * Math.PI * 2;
      this.set(Math.round(cx + Math.cos(a) * rx), Math.round(cy + Math.sin(a) * ry), col);
    }
  };

  /** Scanline polygon fill. pts: [[x,y],...]. col may be a function(x,y). */
  Canvas.prototype.poly = function (pts, col) {
    var minY = Infinity, maxY = -Infinity;
    pts.forEach(function (p) { minY = Math.min(minY, p[1]); maxY = Math.max(maxY, p[1]); });
    for (var y = Math.floor(minY); y <= Math.ceil(maxY); y++) {
      var xs = [];
      var yc = y + 0.5;
      for (var i = 0; i < pts.length; i++) {
        var a = pts[i], b = pts[(i + 1) % pts.length];
        if ((a[1] <= yc && b[1] > yc) || (b[1] <= yc && a[1] > yc)) {
          xs.push(a[0] + (yc - a[1]) / (b[1] - a[1]) * (b[0] - a[0]));
        }
      }
      xs.sort(function (p, q) { return p - q; });
      for (var k = 0; k + 1 < xs.length; k += 2) {
        for (var x = Math.ceil(xs[k] - 0.5); x <= Math.floor(xs[k + 1] - 0.5); x++) {
          this.set(x, y, typeof col === "function" ? col(x, y) : col);
        }
      }
    }
  };

  var BAYER = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
  ];
  function dither(x, y, t) {
    return t * 16 > BAYER[((y % 4) + 4) % 4][((x % 4) + 4) % 4] + 0.5;
  }

  /** Vertical gradient through colour stops, ordered-dithered between bands. */
  Canvas.prototype.vgrad = function (x, y, w, h, stops) {
    var n = stops.length - 1;
    for (var j = 0; j < h; j++) {
      var t = h > 1 ? (j / (h - 1)) * n : 0;
      var i0 = Math.min(n - 1, Math.floor(t));
      var f = t - i0;
      for (var i = 0; i < w; i++) {
        this.set(x + i, y + j, dither(x + i, y + j, f) ? stops[Math.min(n, i0 + 1)] : stops[i0]);
      }
    }
  };

  /** Draw an outline in `col` around every filled pixel of `src` (a Canvas or this canvas snapshot). */
  Canvas.prototype.outline = function (col, diag) {
    var copy = new Canvas(this.w, this.h);
    copy.data.set(this.data);
    for (var y = 0; y < this.h; y++) {
      for (var x = 0; x < this.w; x++) {
        if (copy.filled(x, y)) continue;
        var near = copy.filled(x + 1, y) || copy.filled(x - 1, y) || copy.filled(x, y + 1) || copy.filled(x, y - 1) ||
          (diag && (copy.filled(x + 1, y + 1) || copy.filled(x - 1, y - 1) || copy.filled(x + 1, y - 1) || copy.filled(x - 1, y + 1)));
        if (near) this.set(x, y, col);
      }
    }
  };

  /** Copy src onto this canvas at (dx, dy), with optional alpha multiplier. */
  Canvas.prototype.blit = function (src, dx, dy, alpha) {
    alpha = alpha === undefined ? 1 : alpha;
    for (var y = 0; y < src.h; y++) {
      for (var x = 0; x < src.w; x++) {
        var p = src.get(x, y);
        if (!p || p[3] === 0) continue;
        this.set(x + dx, y + dy, [p[0], p[1], p[2], Math.round(p[3] * alpha)]);
      }
    }
  };

  /** Recolour every pixel through fn(rgba, x, y) -> rgba|null. */
  Canvas.prototype.map = function (fn) {
    for (var y = 0; y < this.h; y++) {
      for (var x = 0; x < this.w; x++) {
        var i = (y * this.w + x) * 4;
        var p = [this.data[i], this.data[i + 1], this.data[i + 2], this.data[i + 3]];
        var q = fn(p, x, y);
        if (q) { this.data[i] = q[0]; this.data[i + 1] = q[1]; this.data[i + 2] = q[2]; this.data[i + 3] = q[3] === undefined ? p[3] : q[3]; }
      }
    }
  };

  /** Deterministic PRNG (mulberry32). */
  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /** Browser: convert a canvas buffer to a PNG data URL (cached by key). */
  var urlCache = {};
  function toDataURL(c, key) {
    if (key && urlCache[key]) return urlCache[key];
    var doc = root.document;
    if (!doc) return "";
    var el = doc.createElement("canvas");
    el.width = c.w;
    el.height = c.h;
    var ctx = el.getContext("2d");
    if (!ctx) return "";
    var img = ctx.createImageData(c.w, c.h);
    img.data.set(c.data);
    ctx.putImageData(img, 0, 0);
    var url = el.toDataURL("image/png");
    if (key) urlCache[key] = url;
    return url;
  }

  NB.pixel = {
    Canvas: Canvas,
    canvas: function (w, h) { return new Canvas(w, h); },
    hex: hex,
    mix: mix,
    shade: shade,
    dither: dither,
    rng: rng,
    toDataURL: toDataURL
  };
})(typeof window !== "undefined" ? window : globalThis);
