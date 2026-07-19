#!/usr/bin/env node
/* ------------------------------------------------------------------
   generate-audio.js — bake a real American voice for the app.

   The phone's built-in speech drops the final consonants staff most
   need, so we pre-render every spoken English line with Azure Neural
   TTS and ship the clips inside the PWA (cached by the service worker,
   so they play offline). The app plays audio/<hash>.mp3 when it exists
   and falls back to the synthetic voice when it does not.

   This never runs on a staff phone and never runs in the app. It runs
   once at build time — locally or in the GitHub Action — where an
   Azure Speech key is available. The key is read from the environment
   and is never written into any shipped file.

   Env:
     AZURE_SPEECH_KEY     required (unless DRY_RUN)  your Speech key
     AZURE_SPEECH_REGION  required (unless DRY_RUN)  e.g. eastus
     VOICE                optional  default en-US-AvaMultilingualNeural
     DRY_RUN              optional  "1" to wire-test without calling Azure

   Output:
     audio/<hash>.mp3        one clip per unique line
     audio/manifest.json     ["<hash>", ...] — build.js injects this
   ------------------------------------------------------------------ */

const fs = require("fs");
const path = require("path");

const VOICE = process.env.VOICE || "en-US-AvaMultilingualNeural";
const KEY = process.env.AZURE_SPEECH_KEY || "";
const REGION = process.env.AZURE_SPEECH_REGION || "";
const DRY_RUN = process.env.DRY_RUN === "1" || process.env.DRY_RUN === "true";
const AUDIO_DIR = path.resolve(__dirname, "..", "audio");
const CONTENT_DIR = path.resolve(__dirname, "..", "content");

/* ---- these two MUST match sands-english-fb.jsx exactly ---- */
const cleanForSpeech = (text) =>
  text
    .replace(/\[.*?\]/g, "")
    .replace(/[—–]/g, ",")
    .replace(/[“”‘’]/g, "")
    .trim();

const hashText = (str) => {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  const n = 4294967296 * (2097151 & h2) + (h1 >>> 0);
  return n.toString(36);
};

/* ---- token substitution, mirrored from the app's substNode ---- */
const isThaiKey = (k) => k === "th" || /Th$/.test(k);
const substStr = (s, vars, lang) =>
  s.replace(/\{\{([^}]+)\}\}/g, (m, key) => {
    const v = vars[key.trim()];
    if (v == null) return m;
    if (typeof v === "object") return v[lang] != null ? v[lang] : v.en != null ? v.en : m;
    return v;
  });
const substNode = (node, vars, lang) => {
  if (typeof node === "string") return substStr(node, vars, lang);
  if (Array.isArray(node)) return node.map((x) => substNode(x, vars, lang));
  if (node && typeof node === "object") {
    const out = {};
    for (const k of Object.keys(node)) {
      const childLang = isThaiKey(k) ? "th" : k === "en" ? "en" : lang;
      out[k] = substNode(node[k], vars, childLang);
    }
    return out;
  }
  return node;
};

/* ---- load content ---- */
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const readTree = (dir) => {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...readTree(full));
    else if (e.name.endsWith(".json")) out.push(full);
  }
  return out;
};

const catalogue = readJSON(path.join(CONTENT_DIR, "catalogue.json"));
const properties = {};
for (const f of readTree(path.join(CONTENT_DIR, "properties"))) {
  const j = readJSON(f);
  properties[j.id] = j;
}
const roles = {};
for (const f of readTree(path.join(CONTENT_DIR, "roles"))) {
  const j = readJSON(f);
  roles[j.id] = j;
}

/* Per-role availability — mirrors sands-english-fb.jsx. A role is voiced at a
   property when it has lessons AND every {{token}} those lessons use is a real
   (non-FILL ME) fact for that property. Token-light roles go live even where a
   property's outlet facts are still blank. */
const roleTokensOf = (roleId) => {
  const role = roles[roleId];
  const out = new Set();
  if (role && role.units) {
    const s = JSON.stringify(role.units);
    const re = /\{\{([^}]+)\}\}/g;
    let m;
    while ((m = re.exec(s))) out.add(m[1].trim());
  }
  return [...out];
};
const factReady = (propId, token) => {
  const facts = (properties[propId] && properties[propId].vars) || {};
  if (!(token in facts)) return false;
  const v = facts[token];
  const str = typeof v === "object" && v ? [v.en, v.th].join(" ") : String(v);
  return !/FILL ME/i.test(str);
};
const roleAvailableAt = (propId, roleId) => {
  const role = roles[roleId];
  if (!role || !Array.isArray(role.units) || !role.units.length) return false;
  return roleTokensOf(roleId).every((t) => factReady(propId, t));
};

/* Roles assigned to a property (unique), per the catalogue. */
const assignedRoles = (propId) => {
  const prop = (catalogue.properties || []).find((p) => p.id === propId);
  const ids = new Set((prop && prop.assignments ? prop.assignments : []).map((a) => a.role));
  return [...ids];
};

/* Every English line the app will speak for one property + role. */
const linesForRole = (propId, roleId) => {
  const vars = (properties[propId] && properties[propId].vars) || {};
  const role = roles[roleId];
  const lines = [];
  for (const unitRaw of role.units) {
    const u = substNode(unitRaw, vars, "en");
    for (const q of u.questions || []) {
      if (q.guest && q.guest.en) lines.push(q.guest.en);
      for (const o of q.options || []) if (o.t) lines.push(o.t);
      if (q.type === "order" && Array.isArray(q.words)) lines.push(q.words.join(" "));
      if (q.type === "gap" && Array.isArray(q.sentence)) {
        lines.push(q.sentence.join(" ").replace("____", q.answer));
      }
    }
  }
  return lines;
};

/* ---- collect the unique, cleaned line set ---- */
const byHash = new Map(); // hash -> cleaned text
const addLine = (raw) => {
  if (!raw) return;
  const clean = cleanForSpeech(raw);
  if (!clean) return;
  const h = hashText(clean);
  if (!byHash.has(h)) byHash.set(h, clean);
};

const voiced = [];
for (const propId of Object.keys(properties)) {
  const avail = assignedRoles(propId).filter((rid) => roleAvailableAt(propId, rid));
  if (!avail.length) continue;
  voiced.push(`${propId}:[${avail.join(",")}]`);
  // greeting spoken on the home screen
  const nameEn = (properties[propId].name && properties[propId].name.en) || "our hotel";
  addLine("Good evening. Welcome to " + nameEn + ".");
  for (const roleId of avail) {
    for (const line of linesForRole(propId, roleId)) addLine(line);
  }
}

console.log(
  `voicing ${voiced.join(" ")}, ` +
  `${byHash.size} unique lines, voice ${VOICE}${DRY_RUN ? " (DRY RUN)" : ""}`
);

/* ---- Azure Neural TTS ---- */
const xmlEscape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
   .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

const ssmlFor = (text) =>
  `<speak version='1.0' xml:lang='en-US'>` +
  `<voice name='${VOICE}'>${xmlEscape(text)}</voice></speak>`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function synth(text, outPath) {
  const url = `https://${REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  for (let attempt = 1; attempt <= 5; attempt++) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
        "User-Agent": "katathani-lingo-tts",
      },
      body: ssmlFor(text),
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(outPath, buf);
      return buf.length;
    }
    if (res.status === 429 || res.status >= 500) {
      const wait = Number(res.headers.get("retry-after")) * 1000 || attempt * 2000;
      console.warn(`  ${res.status} on attempt ${attempt}, waiting ${wait}ms`);
      await sleep(wait);
      continue;
    }
    const body = await res.text().catch(() => "");
    throw new Error(`Azure TTS ${res.status}: ${body.slice(0, 200)}`);
  }
  throw new Error("Azure TTS failed after retries");
}

async function main() {
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
  if (!DRY_RUN && (!KEY || !REGION)) {
    console.error("ERROR: AZURE_SPEECH_KEY and AZURE_SPEECH_REGION are required (or set DRY_RUN=1).");
    process.exit(1);
  }

  const hashes = [...byHash.keys()].sort();
  let made = 0, skipped = 0;
  for (const h of hashes) {
    const outPath = path.join(AUDIO_DIR, h + ".mp3");
    if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) { skipped++; continue; }
    if (DRY_RUN) {
      // minimal placeholder so build.js + wiring can be verified without Azure
      fs.writeFileSync(outPath, Buffer.from("DRYRUN"));
      made++;
      continue;
    }
    process.stdout.write(`  [${made + skipped + 1}/${hashes.length}] ${h} … `);
    const bytes = await synth(byHash.get(h), outPath);
    console.log(`${bytes} bytes`);
    made++;
    await sleep(50); // be gentle on the endpoint
  }

  fs.writeFileSync(path.join(AUDIO_DIR, "manifest.json"), JSON.stringify(hashes, null, 0) + "\n");
  console.log(`done: ${made} new, ${skipped} already present, ${hashes.length} total clips.`);
}

main().catch((e) => { console.error(e.message || e); process.exit(1); });
