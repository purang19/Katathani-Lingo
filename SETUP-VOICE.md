# Setting up the real American voice-over

This adds a real Azure Neural voice to the app. The audio is generated **by a
GitHub Action** (not on your computer, not in the app), cached in the app, and
plays **offline**. Your Azure key stays sealed in GitHub Secrets.

There are three one-time steps. After that, the voice regenerates with one click
whenever lessons change.

---

## Step 1 — Upload these files to your repo

In GitHub: **Add file → Upload files**, drag in the contents of this bundle
(keep the folders — `scripts/`, `.github/`, `content/`), and commit to `main`.

This does two things at once: it adds the **Maintenance Technician** role and it
adds the **voice machinery**. Right after this commit the app already works, still
using the phone's built-in voice — the real voice turns on in Step 3.

Files included:
- `app.js`, `sw.js` — the live app (rebuilt).
- `sands-english-fb.jsx`, `build.js` — source.
- `scripts/generate-audio.js`, `scripts/bump-cache.js` — the audio generator.
- `.github/workflows/generate-audio.yml` — the one-click Action.
- `content/catalogue.json`, `content/roles/eng-maintenance.json` — the new role.

## Step 2 — Add your Azure key as two secrets

In your repo: **Settings → Secrets and variables → Actions → New repository secret.**
Add these two (get both from your Azure "Azure Speech - Text to Speech" resource,
under **Keys and Endpoint**):

| Secret name | Value |
|---|---|
| `AZURE_SPEECH_KEY` | your Speech resource **KEY 1** |
| `AZURE_SPEECH_REGION` | its **Region**, e.g. `eastus` |

These live only in GitHub Secrets. They are never written into the app.

## Step 3 — Run the Action

Go to the **Actions** tab → **Generate voice-over audio** → **Run workflow**
(the voice is already set to Ava; just click the green button).

It will: render every spoken line with Azure Neural TTS, save the clips under
`audio/`, rebuild `app.js`, bump the cache, and commit it all back to `main`.
Takes a couple of minutes. When it finishes, the app speaks in the real voice.

Cost: about **$0.50** against your $200 Azure credit for the whole app.

---

## Later: when you change lessons

Edit the `content/` files, upload them, then run the Action again. It only
generates clips for lines that are new or changed (existing ones are reused),
rebuilds, and bumps the cache. Done.

## Changing the voice

On the **Run workflow** screen there's a "voice" box. Any Azure `en-US` neural
name works, e.g. `en-US-JennyNeural`, `en-US-AndrewMultilingualNeural`,
`en-US-GuyNeural`. Change it and the next run re-renders in that voice.

## How it behaves on a phone

- Plays the real clip when it has one; falls back to the phone's built-in voice
  for anything not yet generated — so it never goes silent.
- Clips are cached the first time they play, then work with no internet.
- "Slowly" plays the same clip at a slower speed.
