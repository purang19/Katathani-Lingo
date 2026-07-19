#!/usr/bin/env node
/* Bump the service-worker CACHE version (katathani-lingo-vN -> vN+1) so
   every phone fetches the freshly built app and audio instead of serving
   the old copy from its own cache. Run after anything that changes app.js,
   the lessons, or the audio. See THE TRAP in CLAUDE.md. */
const fs = require("fs");
const p = "sw.js";
const src = fs.readFileSync(p, "utf8");
const m = src.match(/katathani-lingo-v(\d+)/);
if (!m) { console.error("could not find CACHE version in sw.js"); process.exit(1); }
const next = Number(m[1]) + 1;
fs.writeFileSync(p, src.replace(/katathani-lingo-v\d+/, "katathani-lingo-v" + next));
console.log(`sw.js CACHE: v${m[1]} -> v${next}`);
