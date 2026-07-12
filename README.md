# Katathani Lingo

**Learn. Practice. Serve.**

A phone app that teaches service English to Thai hotel staff, built from each department's
own English Manual. Katathani Collection — The Sands Khao Lak, The Little Shore Khao Lak.

Live: _(add your GitHub Pages URL here)_

## Run it

Any static server. There is no backend.

```bash
npx serve .            # then open the printed URL on your phone (same wifi)
```

## Change the lessons

Lessons live in the `MODULES` array in `sands-english-fb.jsx`. Then:

```bash
npm install
node build.js          # compiles the .jsx to app.js
```

**Then bump `CACHE` in `sw.js`** (`katathani-lingo-v2` → `v3`) or phones will keep serving
the old lessons from their own cache.

## Deploy

Push to `main`. Settings → Pages → deploy from `main` / root. HTTPS is required for offline
mode; GitHub Pages provides it.

## Install on a staff phone

Open the URL in Safari or Chrome → Share → **Add to Home Screen.**

Works offline after the first load.

## Docs

- `CLAUDE.md` — context for Claude Code. Read first.
- `docs/SCHEMA.md` — the content model: roles, properties, departments.
