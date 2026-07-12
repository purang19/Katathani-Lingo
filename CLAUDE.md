# CLAUDE.md — Katathani Lingo

Context for Claude Code. Read this first, every session.

## What this is

**Katathani Lingo — Learn. Practice. Serve.**

A phone web app that teaches service English to Thai hotel staff at the Katathani
Collection, built from each department's own English Manual. Not a language course —
a service course delivered in English.

Owner: Puran, Resident Manager, The Sands Khao Lak.

## The thing that makes it work

**Three verdicts, not two.** This is the whole product. Do not simplify it away.

| verdict | `v` | meaning |
|---|---|---|
| ✓ That is the one | `"best"` | Uses the magic word. Full marks. |
| ◐ Correct — but there is a warmer way | `"ok"` | Perfect English, flat service. Half marks, with the reason. |
| ✕ Not this one | `"bad"` | Wrong, or a sensitive phrase we never say. |

*"I'm sorry, we are fully booked tonight"* is correct English and a lost cover. That gap
is what the app teaches, and no off-the-shelf app can, because only the manual knows it.

Every question must have **exactly one** `"best"` option.

## Rules that are not negotiable

**Never write English pronunciation in Thai script.** `เซอร์เทนลี่` for *certainly* feels
helpful and teaches a permanent mistake — Thai script cannot hold an English final
consonant, and dropped final consonants are the main reason a guest says "sorry?" to
staff who said everything correctly. Same for /v/, /th/, /z/, and r vs l.

Instead: audio first, then English respelling with stress in caps and the ending flagged.
The *tip* is in Thai. The *pronunciation* never is. See the `PRON` dictionary.

**Thai on every string the staff read.** Options, scenes, instructions, and the reason an
answer is wrong. There is a toggle to hide it for staff who want to test themselves.

**Safety answers are marked as safety, not service.** The red-flag / swimming question is
one where a wrong answer could kill someone, and the app says so.

## Architecture

```
index.html            PWA shell. iOS meta, manifest, service worker registration.
sands-english-fb.jsx  THE APP. Everything is in here: engine + lesson data.
app.js                compiled output. Never edit — it is generated.
build.js              node build.js  → compiles the .jsx to app.js
sw.js                 offline cache
vendor-react*.js      React, vendored. Nothing loads from a CDN — it runs offline.
content/              the schema (see docs/SCHEMA.md). Not yet wired into the app.
```

Progress is stored on the phone (`window.storage`, backed by localStorage). No accounts,
no server, no backend. Staff have no work email — do not build anything that needs one.

## THE TRAP

After any content change you must **bump `CACHE` in `sw.js`** (`katathani-lingo-v2` → `v3`).

If you don't, every phone that already has the app keeps serving the old lessons from its
own cache, and you will spend an afternoon convinced the deploy is broken. It is the first
line of that file for exactly this reason.

Build → bump cache → commit. Every time.

## Content model

Read `docs/SCHEMA.md`. Short version:

- **Roles** hold the lessons. **Properties** hold the variables. **Departments** are just an
  assignment saying who learns what.
- Lesson text uses `{{outlet.signature}}`, not "Talay", so one file serves both hotels.
- **The core** (`content/roles/core/`) holds the magic words, the sensitive words, and the
  apology standard. Every guest-facing role inherits it. Twenty roles, one file. This is the
  highest-leverage content in the project.
- Where a property's manual genuinely differs, put a file in `content/roles/overrides/`
  named `{property}.{role}.json`. It merges over the shared role. Only write the difference.

Current state: the F&B app is hard-coded with its lesson data inline. The schema exists but
the engine does not read it yet. **That migration is the next job.**

## Properties and roles

Two properties today, five in the Katathani Collection. The schema is shaped so a third
property costs one file of facts, not a rewrite.

**The Sands Khao Lak** (439 rooms) — Front Office (Guest Service Agent, Airport Rep, Service
Center, Bellboy, Operator, Tour Counter), F&B (Restaurant & Room Service, Bar, Activity &
Kids Club, Pool Attendant, Cashier), Housekeeping (Room Attendant, Area Cleaner, Gardener),
Kitchen, Reservations, Customer Relations, Spa, IT, HR, Melon Minimart.

**The Little Shore Khao Lak** — Front Office (Resort Host, Bellboy), F&B (Restaurant, Bar,
Pool Attendant & Activity, Shop), Housekeeping (Room Attendant, Area Cleaner, Gardener),
Kitchen.

Note that Shop sits under F&B at The Little Shore but is its own department at The Sands.
That is why department is an assignment, not a property of the role.

## Voice and writing

Puran writes plain, human, non-corporate prose and expects the same back. The coaching notes
in the lessons are written like a good supervisor talking to staff on the floor — direct,
specific, occasionally blunt. Not HR language. Not "please be advised."

Keep it. It is why staff will read them.

## Roadmap

1. **Migrate the app to read `content/`** instead of its inline data. Until this is done,
   adding a second department means forking the app, which is the wrong direction.
2. **Front Office** — the next manual. Same engine, new data.
3. **The core** — fill from the Magic Word and Sensitive Word documents when Puran sends them.
4. **Speech recognition** — staff say the line, the phone scores it. Needs a mic prompt.
5. **Department leaderboard** — Talay vs Floating Market on a screen in the staff canteen.
   This will do more for engagement than any XP system. Needs a backend (Supabase) — the
   first thing here that does.

## Deploy

Static. GitHub Pages, root of `main`. HTTPS is required for the service worker.

Staff install it with Safari → Share → Add to Home Screen. No App Store, no Play Store,
no annual fee.
