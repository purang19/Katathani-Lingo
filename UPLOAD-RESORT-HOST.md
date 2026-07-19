# Ship the Resort Host role (The Little Shore)

Two steps: upload these files, then run the same Action you used before.
This ships the text AND Ava's voice in one run (the audio is generated on
GitHub, where your existing clips already live, so nothing is lost).

## 1. Upload these files to `main`
GitHub → Add file → Upload files → drag in the contents of this folder
(keep the folders). It updates four files:
- content/roles/fo-resort-host.json  ← the new Resort Host lessons
- content/catalogue.json             ← adds the dedicated Resort Host role
- sands-english-fb.jsx               ← per-role unlocking + pronunciation words
- scripts/generate-audio.js          ← so the Action voices Resort Host too

Do NOT upload app.js from anywhere — the Action rebuilds it on GitHub. Uploading
an app.js from your computer would erase the voice-over you already generated.

## 2. Run the Action
Actions → Generate voice-over audio → Run workflow.
It rebuilds the app, generates ONLY the ~121 new Resort Host clips (your 367
existing clips are reused), bumps the cache, and commits. ~1–2 minutes.

## What you'll see afterwards
- The Little Shore is no longer "Coming soon".
- The Little Shore → Front Office → **Resort Host** is live, in Ava's voice.
- Its Food & Beverage, Housekeeping, Kitchen stay "Coming soon" until you send
  those manuals / the outlet facts (restaurant, bar, pool names, etc.).
- Note: Maintenance also appears under The Little Shore → Engineering, because
  that lesson content doesn't depend on any hotel-specific facts. If you'd
  rather it not show there yet, tell me and I'll remove that one assignment.

## Still to come for The Little Shore (when you're ready)
- Bellboy (Front Office) — needs its manual.
- Food & Beverage, Kitchen, Housekeeping — need their manuals, and the
  little-shore.json outlet facts to unlock the F&B roles.
