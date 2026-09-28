#!/usr/bin/env python3
"""Turns ChatGPT's art masters into the game's files. Needs Pillow (pip install pillow).

  art/masters/portraits/*.png     (1122 x 1402 RGBA)  -> art/portraits/*.png   256 x 320, shown at 128 x 160
  art/masters/environments/*.png  (1672 x 941 RGB)    -> art/places/*.png      640 x 360, shown at 640 x 360
  art/masters/snapshots/*.png     (any 16:9)          -> art/snapshots/*.png   640 x 360

Portraits: downscaled with premultiplied alpha (no dark or light fringe), then the alpha is made binary (solid figure,
fully transparent background: this also fixes the masters' 250-254 "almost opaque" interior pixels and the soft matte
edge), then reduced to a 256-colour palette. The masters are painted pixel-style at no fixed grid (block size varies
from 3 to 6 source pixels between files), so there is no native grid to snap to; a 2x export keeps faces readable.
Environments and snapshots: centre-cropped to exactly 16:9, downscaled, 256-colour palette with dithering.

  python3 tools/import-art.py            export everything
  python3 tools/import-art.py --check    report what's there without writing
"""
import os
import sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
M = os.path.join(ROOT, "art", "masters")
PORTRAIT = (256, 320)
WIDE = (640, 360)


def pngs(d):
    return sorted(f for f in os.listdir(d) if f.lower().endswith(".png")) if os.path.isdir(d) else []


def portrait(src, dst):
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    # fit the 4:5 frame exactly (the masters already are; crop the centre if one isn't)
    tw, th = (w, round(w * 5 / 4)) if w * 5 / 4 <= h else (round(h * 4 / 5), h)
    im = im.crop(((w - tw) // 2, 0, (w - tw) // 2 + tw, th))
    out = im.convert("RGBa").resize(PORTRAIT, Image.LANCZOS, reducing_gap=3.0).convert("RGBA")
    a = out.getchannel("A").point(lambda v: 255 if v >= 128 else 0)
    out.putalpha(a)
    px = out.load()
    for y in range(out.height):
        for x in range(out.width):
            if px[x, y][3] == 0:
                px[x, y] = (0, 0, 0, 0)
    out.quantize(256, method=Image.FASTOCTREE, dither=Image.NONE).save(dst, optimize=True)


def wide(src, dst):
    im = Image.open(src).convert("RGB")
    w, h = im.size
    tw, th = (w, round(w * 9 / 16)) if w * 9 / 16 <= h else (round(h * 16 / 9), h)
    im = im.crop(((w - tw) // 2, (h - th) // 2, (w - tw) // 2 + tw, (h - th) // 2 + th))
    out = im.resize(WIDE, Image.LANCZOS, reducing_gap=3.0)
    out.quantize(256, method=Image.MEDIANCUT, dither=Image.FLOYDSTEINBERG).save(dst, optimize=True)


def main():
    check = "--check" in sys.argv
    jobs = [("portraits", "portraits", portrait), ("environments", "places", wide), ("snapshots", "snapshots", wide)]
    for sub, target, fn in jobs:
        files = pngs(os.path.join(M, sub))
        print(f"{sub}: {len(files)} master(s)")
        if check:
            continue
        os.makedirs(os.path.join(ROOT, "art", target), exist_ok=True)
        for f in files:
            fn(os.path.join(M, sub, f), os.path.join(ROOT, "art", target, f.lower()))
    print("done" if not check else "checked")


if __name__ == "__main__":
    main()
