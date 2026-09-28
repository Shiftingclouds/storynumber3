# Calder character art — Claude handoff

This pack currently contains **128 generated portrait masters** out of the **128 portraits** requested in `calder-art-for-chatgpt.md`: 122 cast portraits/states and the permitted six complete protagonist alternatives. Check `asset-checklist.csv` for exact status. An absent expression is not a duplicate neutral relabeled as finished art.

## Use the actual files

`portraits/` contains individual PNGs. Use the exact lowercase, hyphenated filenames from the checklist and map them by C01–C58, rather than matching an image to a character by appearance. C18 uses `c18-orrell`, following the supplied handoff. The six complete protagonist alternatives use `mc-neutral-<skin>.png` because these are full portraits, not compositing layers. `player-portrait-options.json` maps the six permitted presets; the manifest records which image files are actually delivered. Use these complete presets in the look creator and journal. Hair, beard, and eye layers are not supplied. The player is not assigned a fixed face in narrative snapshots.

These images were made with ChatGPT's built-in image generation. The supplied prompts are in `generation-prompts.json`. The latest Micah supersedes the earlier broad-faced draft. Preserve the character identities that Trent liked; use the selected neutral file as the reference for subsequent expressions. Do not procedurally redraw the faces from generic shapes.

## Format and what still needs checking

These are **larger pixel-style master PNGs**, not images drawn natively at 128 × 160. `manifest.json` reports each real file's dimensions, alpha, and checksum. They contain genuine transparency and partially transparent edges. Inspection also found many solid-looking interior pixels with alpha 250–254 rather than 255. Normalize solid areas deliberately during export and inspect the silhouette on light and dark backgrounds. Do not claim the native-size/no-halo/fully-opaque-figure requirement is already met.

Keep the masters. In the game project, make separate 128 × 160 exports with nearest-neighbor sampling, no smoothing, and an opaque/transparent edge cleanup where necessary. Inspect the eyes and mouth at native size and in the real interface; touch up individual clusters if needed. A size conversion alone does not prove hand-pixelled quality. Respect the actual aspect ratio and do not stretch faces. Use whole-number enlargement in the game.

The masters reflect the larger, close portrait framing Trent liked. Some are near-frontal rather than strictly screen-left, and the faces are larger than the handoff's 50–60-pixel-width target when scaled directly to 128 × 160. Choose a consistent export framing and check the actual game layout; do not silently assert that the original geometry specification was met. Do not simply mirror images, which would also reverse the lighting.

No game source or `docs/09-cast-and-places.md` was provided. The existing Calder bible and Trent's feedback supplied the character direction. Details absent from that bible are proposed visual casting, not claims about unseen appearance-column canon. Compare the supplied images against that column during integration and flag any actual conflict.

## Expression meanings

Attentive: visibly engaged eyes and brows. Amused: real but restrained humor. Tense: guarded mouth and brow tension. Hurt: emotional pain, without automatic wounds. A lead's warm expression can convey private, guarded affection after an earned relationship beat. Supporting characters' warm expressions convey friendly, familial, or professional warmth; they do not create romance routes. Special states preserve identity; Micah stays recognizably human, Dominic stays restrained, and Quentin keeps his original features and skin identity.

No animation, facial layers, or optional 64 × 64 journal redraws are included unless explicitly listed in the checklist. The journal can use the main neutral portrait as the attached handoff permits.

## Snapshot dependencies

Scene composites have not been produced. They need Claude's actual background PNGs so the people can be painted into the same setting. Upload those backgrounds and identify the intended scene and variant. In particular, start with `art/places/switchyard-lane.png`, Double Shift's counter view, the three evening settings, and the exhibition view.

Keep the protagonist out of identifiable snapshot views. A relationship scene can show the partner from first-person perspective, with a clothed foreground arm or hand where needed, rather than inventing a fixed player face. Preserve survival conditions: no living Quentin after END_E or END_F_S/F. The crossing request says eight variants but lists eight leads plus alone, which is nine; the alone view and single epilogue contain no people and belong to Claude's environment work.

This portrait pack does not include the snapshot production set. `snapshot-dependencies.json` lists each scene variant, its needed background, and applicable cast or survival constraints. Only mark a deliverable complete when its actual file is present and checked.

## Current continuation point

All 58 neutral cast portraits are present. Complete lead sets: Adrian Keene, Micah Serrano, Ellis Okafor, Dominic Bell, Nolan Voss, Ansel Marr, Quentin Shaw, Reuben Pike. All three supernatural states are present. 6 of six complete player options are present.

All 128 requested portrait masters are present: 122 cast portraits/states and six complete player options. No portrait-generation jobs remain. The optional journal crops are not separate assets. Native exports and narrative snapshots remain separate integration work as described above.
