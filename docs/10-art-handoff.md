# Calder: art handoff (characters, for ChatGPT)

The split: **ChatGPT draws everything with a person in it. Claude draws everything else** (places, chapter cards, ending cards, letters and paper, icons, the story map). Claude wires every file into the game as it arrives. Until then, the game shows a plain framed placeholder where a picture belongs.

## File rules (all character art)

- PNG with a **transparent background**, drawn at native size (no upscaling, no smoothing, no semi-transparent edge halo). The game enlarges by whole numbers with nearest-neighbour.
- Name files exactly as listed below: lower case, hyphens.
- Keep one identity per man across all his files: the same skull, hairline, nose, eye spacing and palette. Expressions change only the brows, lids, cheeks and mouth.

## 1. Portraits: 128 × 160

Head and shoulders in a three-quarter view, **facing screen-left**, eye level. The head is about 50–60 px wide, with the eye line about 50 px from the top. Key light comes from the upper left, and the head and neck sit in the top two-thirds of the frame. Appearance notes for every character are in `docs/09-cast-and-places.md` (the "Appearance" column), with more on the eight leads in the bible (§15.5).

### The eight leads: six expressions each (48 files)

Expressions: `neutral`, `attentive`, `amused`, `tense`, `hurt`, `warm`. (`warm` is guarded warmth, used only after an earned relationship beat.)

| File prefix | Who |
|---|---|
| `c01-adrian` | Adrian Keene, 20, junior warden |
| `c02-micah` | Micah Serrano, 21, werewolf electrician |
| `c03-ellis` | Ellis Okafor, 20, spell-worker, restorer |
| `c04-dominic` | Dominic Bell, 22, vampire (turned at 21), singer |
| `c05-nolan` | Nolan Voss, 19, sound tech, best friend |
| `c06-ansel` | Ansel Marr, 21, courier from the Marches |
| `c07-quentin` | Quentin Shaw, 22, café worker, the first returned |
| `c08-reuben` | Reuben Pike, 23, warden medic |

Example: `c04-dominic-hurt.png`.

Extra states, one file each: `c02-micah-moon` (full-moon night; still recognisably Micah, not a wolf), `c04-dominic-hungry` (restrained, not a monster), `c07-quentin-returned` (after his return: cold, too still; same face).

### Frequent characters: `neutral` plus one more (42 files)

Second expression in brackets. Prefix: id plus first name, e.g. `c10-martin-neutral.png`.

C09 Will (`amused`) · C10 Martin (`tense`) · C11 Peter (`amused`) · C13 Nabil (`amused`) · C15 Benoît (`warm`) · C17 Victor (`tense`) · C18 Orrell (`tense`) · C20 Darius (`amused`) · C24 Malcolm (`warm`) · C25 Ernesto (`warm`) · C30 Otis (`warm`) · C31 Lucien (`amused`) · C32 Gideon (`tense`) · C33 Rafi (`amused`) · C37 Chukwudi (`warm`) · C44 Armand (`hurt`) · C45 Severin (`tense`) · C51 Silas (`amused`) · C52 Felix (`tense`) · C54 Desmond (`tense`) · C56 Damian (`warm`: pleasant is the point; he never looks like a villain).

### Supporting characters: `neutral` only (29 files)

C12 Owen · C14 Russell · C16 Gareth · C19 Simeon · C21 Emmett · C22 Florian · C23 Kenji · C26 Leandro · C27 Tomas · C28 Pavel · C29 Wesley · C34 Sylvester · C35 Milo · C36 Abel · C38 Isaac · C39 August · C40 Caspar · C41 Basil · C42 Ilyas · C43 Jonah · C46 Harlan · C47 Lucan · C48 Percival · C49 Eamon · C50 Oswin · C53 Graham · C55 Soren · C57 Hugo · C58 Clive.

### The player (Theo, name chosen): look options

He is **never shown in snapshots**. His portrait appears only in the journal and the look creator. Provide it as layers that line up exactly on the 128 × 160 frame, so the game can stack them:

- `mc-base-<skin>.png`: head, neck and shoulders, with no hair and a plain T-shirt. Skins: `porcelain`, `fair`, `olive`, `tan`, `brown`, `deep`.
- `mc-hair-<style>-<colour>.png`. Styles: `short`, `curls`, `wavy`, `buzz`, `long`. Colours: `black`, `brown`, `auburn`, `blond`.
- `mc-beard-<style>-<colour>.png`. Styles: `none` (no file needed), `stubble`, `short`. Colours as for hair.
- `mc-eyes-<colour>.png`: just the irises. Colours: `brown`, `blue`, `green`, `grey`.

If layering is awkward, send 6 full neutral portraits (one per skin tone, short brown hair) and Claude will limit the creator to those.

## 2. Small journal faces: 64 × 64 (optional)

A simplified redraw or crop of each lead's neutral face (`c01-adrian-small.png` …). Without these, the journal uses a crop of the big portrait.

## 3. Narrative snapshots: 320 × 180 (the bible's twelve slots)

These are full scenes, not transparent. Claude will send each snapshot's background as a separate PNG, so ChatGPT can paint the people into the same place and the characters and settings match.

1. `snap-01-lane`: the rear lane, the night of the murder. A figure at the far end with his back turned, and Quentin down. No faces visible. (Background: `art/places/switchyard-lane.png`.)
2. `snap-02-cafe`: Quentin alive behind the Double Shift counter, handing over a coffee. It's from my point of view; my hand can show, with no skin detail.
3. `snap-03-evening`: the promised evening. Three variants: `-nolan` (his birthday: the tiny balcony of his flat at 2 a.m., a camping chair and a kitchen chair, Nolan in a torn paper crown, the lit bus depot below), `-micah` (the Serrano family table: two tables pushed together, eleven odd chairs, far too much food), `-ellis` (the open studio: Ellis in a second-hand dark green suit among lit studios, plastic wine).
4. `snap-04-exhibition`: the Whitcomb winter opening. A crowd, with the brass frame in its case.
5. `snap-05-crossing`: the first view of Bracken Court at the Candle Fair, a candle in every window. Seen from behind: Ansel beside me, plus whoever came. Five variants: `-ansel` (just the two of us), `-adrian`, `-micah`, `-nolan`, `-reuben` (Ansel and that man).
6. `snap-06-docks`: through a high window, three men in beds with threads of light leaving them.
7. `snap-07-together`: the relationship milestone, one per lead (8 files). Two men, private, clothed, tender, never explicit.
8. `snap-08-bridge`: the coalition preparing the bridge. A table of people in a warden workroom.
9. `snap-09-role`: my post on the night, in three variants: `-pump` (Pump Nine), `-docks` (Stillwater), `-crossing` (the footbridge).
10. `snap-10-aftermath`: the day after, in variants: `-all` (everyone alive, ending A/B/C/D), `-donors` (ending E: three freed men, no patients), and `-quentin`, `-silas`, `-felix` (ending F: one patient and the three donors). **Quentin must never appear alive after an ending where he died.**
11. `snap-11-parting`: a departure or reunion at Northline Station. The platform, a figure with a bag.
12. `snap-12-epilogue`: one year on, per relationship: 8 leads × `together` (8 files), plus `-single` (the city from the Riverside Steps, no people; **Claude draws that one**).

## What Claude draws (no people in any of it)

- **Places:** 320 × 180 views of the 20 base places (Mercy House, the print shop, Serrano Yard, Lyle's Bakery, Switchyard, the Regent, Iron Footbridge, Pump Nine, the university, Okafor Restoration, Calder General, Northline Station, Double Shift, Rusk Funeral Rooms, Rell & Co., the Neutral Table, Sorrell House, Orchard House, Bracken Court, Stillwater Docks). Some need more than one view or time of day. Minor places use a district view.
- **Chapter cards:** 24 of them, one per chapter, showing the place and season.
- **Ending cards:** 8, one per ending, drawn as the ending's anchor place.
- **Paper and objects:** letters (Mum's batches, Ansel's letters, Armand's cream card), Ruth Carrow's notes, texts, the evidence board, story map, icons, and the app icon.
