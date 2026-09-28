# Calder: The Unquiet City

A branching interactive novel in 24 chapters, first person, present tense. A lighting tech with a knack for feeling other people's weather sees a man die in a lane behind a music venue, and then sees him making coffee two days later. Eight romance routes (or none), eight endings, and a one-year epilogue assembled from what you did.

## Play

Open `index.html` in a browser, or build a single self-contained file:

```bash
node tools/build.js        # dist/calder.html (double-click to play, works offline)
```

## Windows app

`downloads/Calder.exe` is a portable build: download it and double-click, no install. It's unsigned, so Windows SmartScreen warns the first time: click **More info → Run anyway**. Saves are kept by the app itself, separately from the browser version. To rebuild it, see `desktop/README.md`.

## Check

```bash
node tools/gen-config.js   # plan/ -> js/story/plan-data.js
node tools/gen-assets.js   # art/ -> js/art/asset-files.js
node tools/gen-sandbox.js  # plan/ + docs/01-story.md -> js/story/sandbox-world.js (what Sandbox tells Claude)
node tools/validate.js     # the script: syntax, speakers present and tagged, plan cross-checks
node tools/lint-prose.js   # voice and style
node tools/plan-check.js   # the plan: continuity, routes, endings, epilogue slots
node tools/playtest.js --runs 3000 --unshown   # bots play to the end; reports errors and unreached text
```

## Where things are

- `js/story/scenes/ch01.js` … `ch24.js`: the script
- `plan/`: the storyboard as checkable data; `docs/02-…09-` are generated from it (`node tools/plan-docs.js`)
- `docs/01-story.md`: start here for the story; `docs/00-decisions.md` for what changed from the source bible
- `docs/10-art-handoff.md`: the character art spec (portraits, expressions, snapshots) for the art partner
- `art/masters/`: ChatGPT's full-size originals (portraits, environments) and its notes and checklist
- `art/portraits/`, `art/places/`: the game's exports, made from the masters by `python3 tools/import-art.py` (needs Pillow): portraits 256 × 320 (shown at 128 × 160), environments 640 × 360, 256-colour palettes, clean binary edges on portraits
- `art/drawn/`: Claude's original procedural views (`node tools/art.js place <id>`), kept for reference; they no longer feed the game
- `index.html`, `css/style.css`, `js/engine/ui.js`: the reading UI (ChatGPT's redesign, merged). Settings has colour palettes (Neon, Golden hour, Moonlight, Ember, River), the blurred scene backdrop, and full-screen arrivals (a new place fills the screen, then settles into the page)
- Every portrait expression and every environment appears somewhere in the story; a plan scene can list secondary places with `also: [...]` when one branch steps somewhere else
- `js/engine/sandbox.js`: Sandbox mode. The player types actions; Claude plays the world from the story bible, cast and places, writing in the game's own markup (`@who:mood`, `*place`, `*meet`, `*note`, `*bond`) so portraits and places appear live. Saved separately from the story.
