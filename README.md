# Calder: The Unquiet City

A branching interactive novel (in planning). Start with `docs/01-story.md`.

- `docs/00-decisions.md` — what we changed from the source bible and why
- `docs/source/calder-bible-v1_1.md` — the source bible
- `docs/02-calendar.md` … `docs/09-cast-and-places.md` — generated from `plan/`
- `plan/` — the plan as checkable data

```bash
node tools/plan-check.js   # continuity and consistency checks
node tools/plan-docs.js    # regenerate docs/ from plan/
```
