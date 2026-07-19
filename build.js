const babel = require("@babel/standalone");
const fs = require("fs");
const path = require("path");

/* ------------------------------------------------------------------
   Content is the single source of truth. Read every JSON under
   content/ and bundle it into one object the app resolves at runtime.
   The app has no bundler and no server — it loads app.js as a plain
   script and must run offline — so the lessons ride along inside it
   rather than being fetched. Edit content/, run build, and the new
   lessons are in the app (then bump CACHE in sw.js).
   ------------------------------------------------------------------ */

const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

/* Drop $-prefixed keys ($comment, $note, ...): they document the files,
   the engine never reads them, and there is no reason to ship them. */
const strip = (node) => {
  if (Array.isArray(node)) return node.map(strip);
  if (node && typeof node === "object") {
    const out = {};
    for (const k of Object.keys(node)) if (k[0] !== "$") out[k] = strip(node[k]);
    return out;
  }
  return node;
};

/* Every .json under a directory, recursively (roles live in roles/,
   roles/core/ and one day roles/overrides/). */
const readJSONTree = (dir) => {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...readJSONTree(full));
    else if (entry.name.endsWith(".json")) files.push(full);
  }
  return files;
};

const content = { catalogue: {}, properties: {}, roles: {} };
content.catalogue = strip(readJSON("./content/catalogue.json"));
for (const f of readJSONTree("./content/properties")) {
  const j = strip(readJSON(f));
  content.properties[j.id] = j;
}
for (const f of readJSONTree("./content/roles")) {
  const j = strip(readJSON(f));
  content.roles[j.id] = j;
}
console.log(
  "content: %d properties, %d roles (%s)",
  Object.keys(content.properties).length,
  Object.keys(content.roles).length,
  Object.keys(content.roles).join(", ")
);

/* The pre-generated voice-over clips (scripts/generate-audio.js writes them
   plus audio/manifest.json). Inject the list of clip hashes so the app knows
   which lines it can play in a real voice; empty until the audio is built. */
let audioManifest = [];
try {
  if (fs.existsSync("./audio/manifest.json")) {
    audioManifest = JSON.parse(fs.readFileSync("./audio/manifest.json", "utf8"));
  } else if (fs.existsSync("./audio")) {
    audioManifest = fs
      .readdirSync("./audio")
      .filter((f) => f.endsWith(".mp3"))
      .map((f) => f.replace(/\.mp3$/, ""));
  }
} catch (e) {
  audioManifest = [];
}
console.log("audio clips:", audioManifest.length);

let src = fs.readFileSync("./sands-english-fb.jsx", "utf8");
src = src.replace('import React, { useState, useEffect, useMemo, useRef } from "react";', "");
src = src.replace("export default function App()", "function App()");

const prelude =
  `const { useState, useEffect, useMemo, useRef } = React;\n` +
  `const CONTENT = ${JSON.stringify(content)};\n` +
  `const AUDIO_MANIFEST = ${JSON.stringify(audioManifest)};\n`;
const tail = `\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));\n`;

const out = babel.transform(prelude + src + tail, { presets: ["react"] }).code;
fs.writeFileSync("app.js", out);
console.log("app.js bytes:", out.length);
