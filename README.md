# Calder: The Unquiet City

A branching interactive novel in 24 chapters, first person, present tense. A lighting tech with a knack for feeling other people's weather sees a man die in a lane behind a music venue, and then sees him making coffee two days later. Eight romance routes (or none), eight endings, and a one-year epilogue assembled from what you did.

## Play

Open `index.html` in a browser, or build a single self-contained file:

```bash
node tools/build.js        # dist/calder.html (double-click to play, works offline)
```

## Check

```bash
node tools/gen-config.js   # plan/ -> js/story/plan-data.js
node tools/gen-assets.js   # art/ -> js/art/asset-files.js
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
- `art/places/`: environment views (drawn by `node tools/art.js place <id>`); `art/portraits/` and `art/snapshots/` take the character art as it arrives

Character portraits and snapshots with people are still to come; until they arrive, the game shows a framed placeholder.
