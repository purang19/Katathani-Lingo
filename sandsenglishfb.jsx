import React, { useState, useEffect, useMemo, useRef } from "react";

/* ============================================================
   KATATHANI LINGO — Learn. Practice. Serve.
   F&B / Restaurant & Room Service
   Source: FB-SAN English Manual (Rev. Feb 2024)

   v2 — Thai throughout, Thai toggle, pronunciation coach.
   Deliberately NO Thai-script transliteration of English:
   it teaches dropped final consonants. Ear first, then mouth.
   ============================================================ */

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Sans+Thai:wght@400;500;600&display=swap');

:root{
  --shell:#F6F1E8; --card:#FFFDF9; --ink:#1C2B2C; --ink-soft:#5C6D6C;
  --line:#E2DACD; --sea:#0E6E63; --sea-tint:#E4F0ED;
  --gold:#B87A2B; --gold-tint:#F6EBD8; --coral:#B8452F; --coral-tint:#F7E6E1;
}
.se-root *{box-sizing:border-box;margin:0;padding:0;}
.se-root{font-family:'IBM Plex Sans','IBM Plex Sans Thai',sans-serif;background:var(--shell);color:var(--ink);min-height:100vh;display:flex;justify-content:center;-webkit-font-smoothing:antialiased;}
.se-phone{width:100%;max-width:430px;min-height:100vh;display:flex;flex-direction:column;background:var(--shell);}
.th{font-family:'IBM Plex Sans Thai',sans-serif;}

.hd{padding:20px 20px 12px;display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
.hd h1{font-family:'Fraunces',serif;font-size:22px;font-weight:700;letter-spacing:-.01em;line-height:1.1;}
.hd .sub{font-size:11px;color:var(--ink-soft);letter-spacing:.14em;text-transform:uppercase;margin-top:5px;}
.xp{display:flex;align-items:center;gap:6px;font-family:'Fraunces',serif;font-weight:700;font-size:17px;color:var(--gold);white-space:nowrap;}
.xp small{font-family:'IBM Plex Sans';font-weight:600;font-size:10px;letter-spacing:.1em;color:var(--ink-soft);}

/* Thai toggle */
.thai-toggle{display:flex;align-items:center;gap:8px;margin:0 20px 14px;background:var(--card);border:1px solid var(--line);border-radius:10px;padding:9px 13px;cursor:pointer;width:calc(100% - 40px);}
.thai-toggle .sw{width:36px;height:20px;border-radius:999px;background:var(--line);position:relative;flex:0 0 36px;transition:background .18s;}
.thai-toggle .sw i{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .18s;box-shadow:0 1px 3px rgba(0,0,0,.2);}
.thai-toggle.on .sw{background:var(--sea);}
.thai-toggle.on .sw i{transform:translateX(16px);}
.thai-toggle .lb{font-size:13px;font-weight:600;text-align:left;flex:1;}
.thai-toggle .lb span{display:block;font-weight:400;font-size:11.5px;color:var(--ink-soft);margin-top:1px;}

.list{padding:0 16px 40px;display:flex;flex-direction:column;gap:10px;}
.mod{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:15px 16px;text-align:left;cursor:pointer;width:100%;display:flex;gap:14px;align-items:center;transition:transform .12s,box-shadow .12s;}
.mod:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(28,43,44,.07);}
.mod:focus-visible{outline:2px solid var(--sea);outline-offset:2px;}
.mod.soon{opacity:.6;cursor:default;}
.mod.soon:hover{transform:none;box-shadow:none;}
.badge{font-size:10px;font-weight:600;letter-spacing:.03em;color:var(--gold);background:var(--gold-tint);border:1px solid #EAD6B4;border-radius:999px;padding:4px 10px;white-space:nowrap;flex:0 0 auto;}
.chev{font-size:22px;color:var(--ink-soft);line-height:1;flex:0 0 auto;padding-right:2px;}
.num{font-family:'Fraunces',serif;font-weight:700;font-size:15px;width:38px;height:38px;flex:0 0 38px;border-radius:11px;display:flex;align-items:center;justify-content:center;background:var(--sea-tint);color:var(--sea);}
.num.done{background:var(--sea);color:#fff;}
.mod .body{flex:1;min-width:0;}
.mod .en{font-weight:600;font-size:15px;line-height:1.25;}
.mod .thai{font-size:12.5px;color:var(--ink-soft);margin-top:2px;}
.mod .meta{font-size:11px;color:var(--ink-soft);margin-top:7px;display:flex;gap:10px;align-items:center;}
.bar{height:3px;background:var(--line);border-radius:2px;flex:1;overflow:hidden;}
.bar i{display:block;height:100%;background:var(--sea);border-radius:2px;transition:width .4s;}

.top{padding:14px 16px;display:flex;align-items:center;gap:12px;}
.x{background:none;border:none;font-size:22px;color:var(--ink-soft);cursor:pointer;line-height:1;padding:2px 6px;}
.track{flex:1;height:6px;background:var(--line);border-radius:3px;overflow:hidden;}
.track i{display:block;height:100%;background:var(--sea);transition:width .35s;}
.q{flex:1;padding:6px 20px 20px;display:flex;flex-direction:column;}
.tag{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.scene{font-size:13px;color:var(--ink-soft);margin-top:10px;line-height:1.5;}
.scene .thai{display:block;margin-top:2px;}
.ask{font-family:'Fraunces',serif;font-size:19px;font-weight:500;line-height:1.35;margin-top:8px;}
.ask .thai{display:block;font-family:'IBM Plex Sans Thai',sans-serif;font-size:13px;font-weight:400;color:var(--ink-soft);margin-top:4px;}

.guest{margin-top:16px;background:var(--card);border:1px solid var(--line);border-left:3px solid var(--gold);border-radius:0 12px 12px 0;padding:14px 16px;}
.guest .who{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);font-weight:600;}
.guest .said{font-family:'Fraunces',serif;font-size:18px;font-weight:500;margin-top:6px;line-height:1.35;}
.guest .thai{font-size:12.5px;color:var(--ink-soft);margin-top:5px;}

.audio{margin-top:12px;display:flex;gap:8px;}
.abtn{display:flex;align-items:center;gap:6px;background:var(--card);border:1px solid var(--line);border-radius:999px;padding:8px 14px;font-size:12.5px;font-weight:600;color:var(--sea);cursor:pointer;}
.abtn:active{transform:scale(.97);}

.opts{margin-top:18px;display:flex;flex-direction:column;gap:9px;}
.opt{background:var(--card);border:1.5px solid var(--line);border-radius:12px;padding:12px 14px;text-align:left;cursor:pointer;font-size:15px;line-height:1.4;transition:border-color .12s,background .12s;width:100%;}
.opt .thai{display:block;font-size:12.5px;color:var(--ink-soft);margin-top:4px;line-height:1.45;}
.opt:hover:not(:disabled){border-color:var(--ink-soft);}
.opt:focus-visible{outline:2px solid var(--sea);outline-offset:2px;}
.opt.sel{border-color:var(--ink);background:#fff;}
.opt.right{border-color:var(--sea);background:var(--sea-tint);}
.opt.warm{border-color:var(--gold);background:var(--gold-tint);}
.opt.bad{border-color:var(--coral);background:var(--coral-tint);}
.opt:disabled{cursor:default;}

.slot{min-height:56px;border-bottom:1.5px dashed var(--line);display:flex;flex-wrap:wrap;gap:7px;padding:10px 0;align-content:flex-start;margin-top:18px;}
.hint{font-size:13px;color:var(--ink-soft);margin-top:12px;line-height:1.5;}
.bank{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px;}
.chip{background:var(--card);border:1.5px solid var(--line);border-bottom-width:3px;border-radius:9px;padding:8px 12px;font-size:15px;cursor:pointer;}
.chip:active{transform:translateY(1px);}
.chip.ghost{opacity:.28;pointer-events:none;}

.foot{padding:16px 20px 26px;border-top:1px solid var(--line);background:var(--card);}
.foot.ok{background:var(--sea-tint);border-top-color:#C9E0DA;}
.foot.warm{background:var(--gold-tint);border-top-color:#EAD6B4;}
.foot.bad{background:var(--coral-tint);border-top-color:#EBCFC7;}
.verdict{display:flex;align-items:center;gap:8px;font-family:'Fraunces',serif;font-size:16px;font-weight:700;}
.verdict.ok{color:var(--sea);} .verdict.warm{color:var(--gold);} .verdict.bad{color:var(--coral);}
.verdict .thai{font-family:'IBM Plex Sans Thai',sans-serif;font-weight:500;font-size:13px;color:var(--ink-soft);}
.note{font-size:13.5px;line-height:1.5;margin-top:8px;color:var(--ink);}
.note .thai{display:block;color:var(--ink-soft);font-size:12.5px;margin-top:3px;}
.answer{font-size:14.5px;margin-top:10px;line-height:1.45;background:rgba(255,255,255,.6);border-radius:10px;padding:11px 13px;}
.answer .lbl{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;display:block;margin-bottom:5px;}
.answer b{font-weight:600;}
.answer .thai{color:var(--ink-soft);font-size:12.5px;display:block;margin-top:4px;}

/* pronunciation coach */
.pron{margin-top:10px;background:rgba(255,255,255,.6);border-radius:10px;padding:11px 13px;}
.pron .lbl{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.pron ul{list-style:none;margin-top:8px;display:flex;flex-direction:column;gap:8px;}
.pron li{font-size:13.5px;line-height:1.4;}
.pron .say{font-family:'Fraunces',serif;font-weight:700;font-size:15px;color:var(--sea);letter-spacing:.01em;}
.pron .tip{display:block;color:var(--ink-soft);font-size:12.5px;margin-top:2px;}

.cta{width:100%;margin-top:14px;padding:15px;border:none;border-radius:12px;background:var(--sea);color:#fff;font-size:15px;font-weight:600;cursor:pointer;font-family:'IBM Plex Sans','IBM Plex Sans Thai',sans-serif;}
.cta:disabled{background:var(--line);color:#9AA6A4;cursor:default;}
.cta.dark{background:var(--ink);}

.done-wrap{flex:1;display:flex;flex-direction:column;justify-content:center;padding:30px 24px 40px;text-align:center;}
.score{font-family:'Fraunces',serif;font-size:64px;font-weight:700;color:var(--sea);line-height:1;}
.score small{font-size:20px;color:var(--ink-soft);}
.done-wrap h2{font-family:'Fraunces',serif;font-size:24px;margin-top:14px;}
.done-wrap p{font-size:14px;color:var(--ink-soft);margin-top:8px;line-height:1.5;}
.recap{margin-top:24px;text-align:left;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;}
.recap h3{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);font-weight:600;}
.recap ul{list-style:none;margin-top:10px;display:flex;flex-direction:column;gap:11px;}
.recap li{font-size:13.5px;line-height:1.45;padding-left:12px;border-left:2px solid var(--coral);}
.recap li span{display:block;color:var(--ink-soft);font-size:12px;margin-top:3px;}
.recap li button{margin-top:5px;background:none;border:none;color:var(--sea);font-size:12px;font-weight:600;cursor:pointer;padding:0;font-family:inherit;}
`;

/* ============================================================
   PRONUNCIATION COACH
   Only the words Thai speakers actually lose. No Thai script —
   Thai script cannot hold an English final consonant, and a
   dropped final consonant is the main reason a guest says
   "sorry?" Stress is marked in CAPS.
   ============================================================ */

const PRON = {
  certainly: ["SER-tuhn-lee", "Three beats, stress the first. Finish the L — not 'ser-ten-lee'.", "สามพยางค์ เน้นพยางค์แรก อย่าลืมออกเสียง L ท้ายคำ"],
  reservation: ["reh-zer-VAY-shun", "Stress the third beat. The middle is a Z sound, not S.", "เน้นพยางค์ที่สาม ตรงกลางเป็นเสียง Z ไม่ใช่ S"],
  reserved: ["ree-ZERVD", "Two beats. The end is -VD, both sounds. Hard, but the guest is listening for it.", "สองพยางค์ ท้ายคำต้องออกทั้ง V และ D"],
  allergies: ["AL-er-jeez", "Stress the first beat. Ends in a Z sound.", "เน้นพยางค์แรก ท้ายคำเป็นเสียง Z"],
  allergic: ["uh-LER-jik", "Stress the middle. Hard K at the end.", "เน้นพยางค์กลาง ท้ายคำเป็นเสียง K ชัด ๆ"],
  cutlery: ["KUT-luh-ree", "Stress the first beat. Do not say 'cut-la-lee' — it is an R.", "เน้นพยางค์แรก เป็นเสียง R ไม่ใช่ L"],
  questionnaire: ["kwes-chun-AIR", "Stress the LAST beat. Most people get this one wrong.", "เน้นพยางค์สุดท้าย คำนี้คนมักออกเสียงผิด"],
  corkage: ["KOR-kij", "Two beats, stress the first. Short second beat.", "สองพยางค์ เน้นพยางค์แรก"],
  thousand: ["THOW-zuhnd", "Tongue between the teeth for TH. Ends -ND.", "เอาลิ้นแตะฟันสำหรับเสียง TH ท้ายคำออก -ND"],
  terribly: ["TEH-ruh-blee", "Stress the first beat. Finish the -bly.", "เน้นพยางค์แรก ออกเสียง -bly ให้ครบ"],
  recommend: ["reh-kuh-MEND", "Stress the LAST beat. Ends -ND, both sounds.", "เน้นพยางค์สุดท้าย ท้ายคำออก -ND"],
  vegetables: ["VEJ-tuh-buhls", "Three beats, not four. V not W — lip on teeth.", "สามพยางค์ ไม่ใช่สี่ ใช้เสียง V ฟันแตะริมฝีปาก"],
  available: ["uh-VAY-luh-buhl", "Stress the second beat. V not W.", "เน้นพยางค์ที่สอง ใช้เสียง V ไม่ใช่ W"],
  settle: ["SET-uhl", "Two beats. Finish the L.", "สองพยางค์ ออกเสียง L ท้ายคำ"],
  signature: ["SIG-nuh-chur", "Stress the first beat.", "เน้นพยางค์แรก"],
  apologise: ["uh-POL-uh-jize", "Stress the second beat. Ends in a Z sound.", "เน้นพยางค์ที่สอง ท้ายคำเป็นเสียง Z"],
  crème: ["krem", "One beat. Just 'krem'.", "พยางค์เดียว ออกเสียงสั้น ๆ"],
  museum: ["myoo-ZEE-um", "Stress the middle beat.", "เน้นพยางค์กลาง"],
  buffet: ["BUFF-ay", "The T is silent.", "ตัว T ไม่ออกเสียง"],
  escort: ["ess-KORT", "Stress the second beat. Hard T at the end.", "เน้นพยางค์ที่สอง ท้ายคำออกเสียง T ชัด"],
  spicy: ["SPY-see", "Two beats. Ends with an S sound, not a stop.", "สองพยางค์ ท้ายคำเป็นเสียง S"],
  wonderful: ["WUN-der-full", "Stress the first beat. W not V.", "เน้นพยางค์แรก ใช้เสียง W ไม่ใช่ V"],
  delicious: ["duh-LISH-us", "Stress the middle beat.", "เน้นพยางค์กลาง"],
  arrange: ["uh-RAYNJ", "Stress the second beat. It is an R, not an L.", "เน้นพยางค์ที่สอง เป็นเสียง R ไม่ใช่ L"],
  supervisor: ["SOO-per-vy-zer", "Stress the first beat. V not W.", "เน้นพยางค์แรก ใช้เสียง V"],
  monsoon: ["mon-SOON", "Stress the second beat.", "เน้นพยางค์ที่สอง"],
  laundry: ["LAWN-dree", "Two beats. It is an R, not an L.", "สองพยางค์ เป็นเสียง R ไม่ใช่ L"],
  sirloin: ["SIR-loyn", "Stress the first beat. Ends -N.", "เน้นพยางค์แรก ท้ายคำออก -N"],
  tourists: ["TOO-rists", "Ends with -sts. Say all of it, slowly if you must.", "ท้ายคำออก -sts ให้ครบ ช้าได้ แต่ต้องครบ"],
  privacy: ["PRIV-uh-see", "Stress the first beat.", "เน้นพยางค์แรก"],
};

const findPron = (sentence) => {
  const words = sentence.toLowerCase().replace(/[^a-zà-ÿ\s]/g, " ").split(/\s+/);
  const hits = [];
  for (const w of words) {
    if (PRON[w] && !hits.find((h) => h.word === w)) {
      hits.push({ word: w, say: PRON[w][0], tip: PRON[w][1], tipTh: PRON[w][2] });
    }
    if (hits.length === 2) break;
  }
  return hits;
};

/* ============================================================
   CONTENT RESOLVER
   The lessons no longer live in this file. They live in content/
   (see docs/SCHEMA.md) and are compiled into the app by build.js,
   which reads every content/ JSON and injects it here as `CONTENT`.

   buildCurriculum() turns a property + role into the module list the
   UI renders: it resolves the role's units, substitutes {{tokens}}
   from the property's facts (language-aware — an English field gets
   the token's .en, a Thai field its .th), and can prepend the shared
   core units a role inherits.

   v: "best" = full marks — the magic-word answer
      "ok"   = correct English, flat service. Half marks.
      "bad"  = wrong, or a sensitive phrase we never say.
   ============================================================ */

/* A field is Thai if its key is "th" or ends in "Th" (sceneTh, askTh, nTh). */
const isThaiKey = (k) => k === "th" || /Th$/.test(k);

/* Replace {{token}} with the property fact, in the right language.
   A fact is either a plain string (same both languages) or { en, th }. */
const substStr = (s, vars, lang) =>
  s.replace(/\{\{([^}]+)\}\}/g, (m, key) => {
    const v = vars[key.trim()];
    if (v == null) return m;
    if (typeof v === "object") return v[lang] != null ? v[lang] : v.en != null ? v.en : m;
    return v;
  });

/* Walk a unit, substituting tokens. lang flips to "th" under a Thai key
   and to "en" under an "en" key, so every string resolves in its own tongue. */
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

/* property + role -> the [{ id, en, th, questions }] the UI expects.
   includeCore prepends the inherited core units. It is off for now: the
   core is still placeholder content (roadmap #3 — fill from the Magic Word
   and Sensitive Word documents), and the F&B app must stay as it is until
   then. Flip it to true once the core is written and every role inherits it. */
const buildCurriculum = (content, propertyId, roleId, opts) => {
  opts = opts || {};
  if (!content || !content.roles || !content.roles[roleId]) return [];
  const property = content.properties[propertyId] || {};
  const vars = property.vars || {};
  const role = content.roles[roleId];

  let units = [];
  if (opts.includeCore && Array.isArray(role.inherits)) {
    for (const coreId of role.inherits) {
      const core = content.roles[coreId];
      if (core && Array.isArray(core.units)) units = units.concat(core.units);
    }
  }
  units = units.concat(role.units || []);

  return units.map((u) => {
    const r = substNode(u, vars, "en");
    return { id: r.id, en: r.name.en, th: r.name.th, questions: r.questions };
  });
};

/* build.js injects `const CONTENT = {...}` (compiled from content/) ahead of
   this file. The guard keeps the raw .jsx harmless if it is ever run un-built. */
const C =
  typeof CONTENT !== "undefined"
    ? CONTENT
    : { catalogue: { departments: [], properties: [], roles: {} }, properties: {}, roles: {} };

/* ============================================================
   SELECTION — hotel, then department, then role.
   All of it reads the catalogue (the org chart) that ships inside
   CONTENT. A hotel/department/role is "available" only if it has real
   lessons behind it; everything else shows but is marked Coming soon,
   so the whole collection is visible from day one.
   ============================================================ */

/* A role is playable once its file has at least one unit of questions. */
const roleAvailable = (roleId) =>
  !!(C.roles[roleId] && C.roles[roleId].units && C.roles[roleId].units.length);

/* A property whose facts still say "FILL ME" would render placeholders in
   the lessons, so it is not ready even if it inherits a built role. */
const propertyReady = (propertyId) => {
  const facts = (C.properties[propertyId] && C.properties[propertyId].vars) || {};
  return !Object.keys(facts).some((k) => {
    const v = facts[k];
    const s = typeof v === "object" && v ? [v.en, v.th].join(" ") : String(v);
    return /FILL ME/i.test(s);
  });
};

const assignmentsOf = (propertyId) => {
  const p = (C.catalogue.properties || []).find((x) => x.id === propertyId);
  return (p && p.assignments) || [];
};

const propertyAvailable = (propertyId) =>
  propertyReady(propertyId) && assignmentsOf(propertyId).some((a) => roleAvailable(a.role));

const listProperties = () =>
  (C.catalogue.properties || []).map((p) => ({
    id: p.id,
    name: (C.properties[p.id] && C.properties[p.id].name) || { en: p.id, th: p.id },
    available: propertyAvailable(p.id),
  }));

const deptName = (deptId) => {
  const d = (C.catalogue.departments || []).find((x) => x.id === deptId);
  return (d && d.name) || { en: deptId, th: deptId };
};

/* Departments a property actually has, in catalogue order, deduped.
   A department is available if any of its roles is. */
const listDepartments = (propertyId) => {
  const rows = [];
  for (const a of assignmentsOf(propertyId)) {
    let row = rows.find((x) => x.id === a.department);
    if (!row) {
      row = { id: a.department, name: deptName(a.department), available: false };
      rows.push(row);
    }
    if (roleAvailable(a.role)) row.available = true;
  }
  return rows;
};

/* Label priority: the per-assignment override (e.g. Melon Minimart, Resort
   Host), then a built role's own name, then the catalogue name registry. */
const roleLabel = (roleId, labelOverride) =>
  labelOverride ||
  (C.roles[roleId] && C.roles[roleId].name) ||
  (C.catalogue.roles && C.catalogue.roles[roleId]) ||
  { en: roleId, th: roleId };

const listRoles = (propertyId, departmentId) =>
  assignmentsOf(propertyId)
    .filter((a) => a.department === departmentId)
    .map((a) => ({
      id: a.role,
      name: roleLabel(a.role, a.labelOverride),
      available: roleAvailable(a.role),
    }));

/* ============================================================ */

const shuffle = (a) => {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
};

/* ------------------------------------------------------------
   SPEECH ENGINE
   Three things break browser speech, and all three bite here:
   1. Voices load asynchronously — speak() before they arrive = silence.
   2. iOS Safari refuses to speak until it has spoken once inside a
      real tap. So we "unlock" with a silent utterance on first touch.
   3. The iPhone side mute switch silences speech entirely. Nothing
      we can do in code — but we can tell the user.
   ------------------------------------------------------------ */

const SPEECH = {
  engine: typeof window !== "undefined" ? window.speechSynthesis : null,
  voice: null,
  unlocked: false,
  ready: false,
};

const pickVoice = () => {
  if (!SPEECH.engine) return;
  const vs = SPEECH.engine.getVoices() || [];
  if (!vs.length) return;
  SPEECH.voice =
    vs.find((v) => /en[-_]GB/i.test(v.lang)) ||
    vs.find((v) => /en[-_]US/i.test(v.lang)) ||
    vs.find((v) => /^en/i.test(v.lang)) ||
    vs[0];
  SPEECH.ready = true;
};

if (SPEECH.engine) {
  pickVoice();
  SPEECH.engine.onvoiceschanged = pickVoice;
}

/* iOS will not speak unless the first utterance happens inside a tap. */
const unlockSpeech = () => {
  if (!SPEECH.engine || SPEECH.unlocked) return;
  try {
    const u = new SpeechSynthesisUtterance(" ");
    u.volume = 0;
    SPEECH.engine.speak(u);
    SPEECH.unlocked = true;
    pickVoice();
  } catch (e) {
    /* nothing to unlock */
  }
};

const say = (text, slow) => {
  const s = SPEECH.engine;
  if (!s || !text) return false;
  try {
    unlockSpeech();
    s.cancel();
    s.resume(); // Chrome sometimes parks the queue
    const clean = text
      .replace(/\[.*?\]/g, "")
      .replace(/[—–]/g, ",")
      .replace(/[“”‘’]/g, "")
      .trim();
    const u = new SpeechSynthesisUtterance(clean);
    if (SPEECH.voice) u.voice = SPEECH.voice;
    u.lang = SPEECH.voice ? SPEECH.voice.lang : "en-GB";
    u.rate = slow ? 0.55 : 0.92;
    u.volume = 1;
    u.pitch = 1;
    s.speak(u);
    return true;
  } catch (e) {
    return false;
  }
};

const speechAvailable = () => !!SPEECH.engine;

const POINTS = { best: 10, ok: 5, bad: 0 };
const sentenceOf = (q) =>
  q.type === "order" ? q.words.join(" ") : q.sentence.join(" ").replace("____", q.answer);

/* ============================================================ */

export default function App() {
  /* property -> department -> role -> home (that role's lessons) -> lesson */
  const [view, setView] = useState("property");
  const [propertyId, setPropertyId] = useState(null);
  const [departmentId, setDepartmentId] = useState(null);
  const [roleId, setRoleId] = useState(null);
  const [activeId, setActiveId] = useState(null);

  /* One store for everyone: { thaiOn, roles: { "property/role": { progress, xp } } } */
  const [store, setStore] = useState({ thaiOn: true, roles: {} });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let next = null;
      try {
        const r = await window.storage.get("katathani_lingo_v3");
        if (r && r.value) next = JSON.parse(r.value);
      } catch (e) {
        /* no v3 yet */
      }
      if (!next) {
        /* migrate the old F&B-only save so no one loses their progress */
        try {
          const old = await window.storage.get("sands_fb_english_v2");
          if (old && old.value) {
            const d = JSON.parse(old.value);
            next = {
              thaiOn: typeof d.thaiOn === "boolean" ? d.thaiOn : true,
              roles: { "sands/fb-restaurant-service": { progress: d.progress || {}, xp: d.xp || 0 } },
            };
          }
        } catch (e2) {
          /* first run ever */
        }
      }
      if (!next) next = { thaiOn: true, roles: {} };
      if (!next.roles) next.roles = {};
      if (typeof next.thaiOn !== "boolean") next.thaiOn = true;
      setStore(next);
      setLoaded(true);
    })();
  }, []);

  const persist = async (s) => {
    try {
      await window.storage.set("katathani_lingo_v3", JSON.stringify(s));
    } catch (e) {
      /* in-memory only */
    }
  };

  const curKey = propertyId && roleId ? propertyId + "/" + roleId : null;
  const roleState = (curKey && store.roles[curKey]) || { progress: {}, xp: 0 };
  const totalXp = Object.keys(store.roles).reduce((n, k) => n + (store.roles[k].xp || 0), 0);

  const finish = (modId, earned, maxPts) => {
    if (!curKey) return;
    const pct = Math.round((earned / maxPts) * 100);
    const prev = store.roles[curKey] || { progress: {}, xp: 0 };
    const progress = { ...prev.progress, [modId]: { pct: Math.max(pct, prev.progress[modId]?.pct || 0) } };
    const s = { ...store, roles: { ...store.roles, [curKey]: { progress, xp: (prev.xp || 0) + earned } } };
    setStore(s);
    persist(s);
  };

  const toggleThai = () => {
    const s = { ...store, thaiOn: !store.thaiOn };
    setStore(s);
    persist(s);
  };

  const modules = useMemo(
    () => (propertyId && roleId ? buildCurriculum(C, propertyId, roleId) : []),
    [propertyId, roleId]
  );
  const active = modules.find((m) => m.id === activeId);

  const property = propertyId
    ? { id: propertyId, name: (C.properties[propertyId] && C.properties[propertyId].name) || { en: propertyId, th: propertyId } }
    : null;
  const selectedRoleName = () => {
    const a = assignmentsOf(propertyId).find((x) => x.role === roleId && x.department === departmentId);
    return roleLabel(roleId, a && a.labelOverride);
  };

  return (
    <div className="se-root">
      <style>{STYLES}</style>
      <div className="se-phone">
        {loaded && view === "property" && (
          <Picker
            title="Which hotel?"
            titleTh="เลือกโรงแรมของคุณ"
            thaiOn={store.thaiOn}
            items={listProperties()}
            onPick={(id) => {
              setPropertyId(id);
              setDepartmentId(null);
              setRoleId(null);
              setView("department");
            }}
          />
        )}
        {loaded && view === "department" && (
          <Picker
            title="Which department?"
            titleTh="เลือกแผนกของคุณ"
            thaiOn={store.thaiOn}
            items={listDepartments(propertyId)}
            onBack={() => setView("property")}
            onPick={(id) => {
              setDepartmentId(id);
              setRoleId(null);
              setView("role");
            }}
          />
        )}
        {loaded && view === "role" && (
          <Picker
            title="Which role?"
            titleTh="เลือกตำแหน่งของคุณ"
            thaiOn={store.thaiOn}
            items={listRoles(propertyId, departmentId)}
            onBack={() => setView("department")}
            onPick={(id) => {
              setRoleId(id);
              setActiveId(null);
              setView("home");
            }}
          />
        )}
        {loaded && view === "home" && (
          <Home
            modules={modules}
            property={property}
            roleName={selectedRoleName()}
            progress={roleState.progress}
            xp={totalXp}
            thaiOn={store.thaiOn}
            toggleThai={toggleThai}
            onBack={() => setView("role")}
            onPick={(id) => {
              setActiveId(id);
              setView("lesson");
            }}
          />
        )}
        {loaded && view === "lesson" && active && (
          <Lesson
            key={active.id}
            module={active}
            thaiOn={store.thaiOn}
            onQuit={() => setView("home")}
            onDone={(e, m) => finish(active.id, e, m)}
            onHome={() => setView("home")}
          />
        )}
      </div>
    </div>
  );
}

/* ---------------- PICKER (hotel / department / role) ---------------- */

function Picker({ title, titleTh, items, onPick, onBack, thaiOn }) {
  return (
    <>
      <div className="top">
        {onBack ? (
          <button className="x" onClick={onBack} aria-label="Back">‹</button>
        ) : (
          <span style={{ width: 22 }} />
        )}
        <div style={{ flex: 1 }} />
      </div>

      <div className="hd" style={{ paddingTop: 2 }}>
        <div>
          <h1>Katathani Lingo</h1>
          <div className="sub">Learn. Practice. Serve.</div>
        </div>
      </div>

      <div style={{ padding: "2px 20px 12px" }}>
        <div style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700 }}>{title}</div>
        {thaiOn && (
          <div className="th" style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{titleTh}</div>
        )}
      </div>

      <div className="list">
        {items.map((it) => (
          <button
            key={it.id}
            className={"mod" + (it.available ? "" : " soon")}
            disabled={!it.available}
            onClick={() => it.available && onPick(it.id)}
          >
            <div className="body">
              <div className="en">{it.name.en}</div>
              {thaiOn && <div className="thai th">{it.name.th}</div>}
            </div>
            {it.available ? (
              <span className="chev">›</span>
            ) : (
              <span className="badge">{thaiOn ? "Coming soon · เร็ว ๆ นี้" : "Coming soon"}</span>
            )}
          </button>
        ))}
      </div>
    </>
  );
}

/* ---------------- HOME ---------------- */

function Home({ modules, property, roleName, progress, xp, thaiOn, toggleThai, onPick, onBack }) {
  const totalQ = modules.reduce((n, m) => n + m.questions.length, 0);
  const [sound, setSound] = useState(null); // null | "ok" | "none"
  const hotelEn = (property && property.name.en) || "our hotel";
  const roleEn = (roleName && roleName.en) || "";
  const roleTh = (roleName && roleName.th) || "";

  const testSound = () => {
    if (!speechAvailable()) {
      setSound("none");
      return;
    }
    const spoke = say("Good evening. Welcome to " + hotelEn + ".");
    setSound(spoke ? "ok" : "none");
  };

  return (
    <>
      <div className="top">
        <button className="x" onClick={onBack} aria-label="Change hotel or department">‹</button>
        <div style={{ flex: 1 }} />
      </div>

      <div className="hd" style={{ paddingTop: 2 }}>
        <div>
          <h1>Katathani Lingo</h1>
          <div className="sub">Learn. Practice. Serve.</div>
        </div>
        <div className="xp">
          {xp}
          <small>XP</small>
        </div>
      </div>

      <div style={{ padding: "0 20px 14px", fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
        <b style={{ color: "var(--ink)", fontWeight: 600 }}>
          {hotelEn}
          {roleEn ? " · " + roleEn : ""}
        </b>
        {thaiOn && roleTh && <span className="th" style={{ display: "block" }}>{roleTh}</span>}
        <span style={{ display: "block", marginTop: 3 }}>{totalQ} real situations from the floor.</span>
        <span className="th" style={{ display: "block" }}>
          {totalQ} สถานการณ์จริงจากหน้างาน ฝึกวันละ 5 นาทีก่อนเข้ากะ
        </span>
      </div>

      <button className={"thai-toggle" + (thaiOn ? " on" : "")} onClick={toggleThai}>
        <div className="sw">
          <i />
        </div>
        <div className="lb">
          {thaiOn ? "Thai meaning shown" : "English only"}
          <span className="th">{thaiOn ? "แสดงคำแปลภาษาไทย" : "ซ่อนคำแปล — ทดสอบตัวเอง"}</span>
        </div>
      </button>

      <div style={{ margin: "0 20px 16px" }}>
        <button className="abtn" onClick={testSound} style={{ width: "100%", justifyContent: "center", padding: "11px" }}>
          ◗ Test the sound · ทดสอบเสียง
        </button>
        {sound === "ok" && (
          <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 8, lineHeight: 1.5 }}>
            You should have heard “Good evening. Welcome to {hotelEn}.” If not, check the side switch on your
            phone and turn the volume up — the silent switch mutes speech.
            <span className="th" style={{ display: "block" }}>
              หากไม่ได้ยิน ให้ตรวจสอบสวิตช์ปิดเสียงด้านข้างเครื่อง และเพิ่มระดับเสียง
            </span>
          </div>
        )}
        {sound === "none" && (
          <div style={{ fontSize: 12, color: "var(--coral)", marginTop: 8, lineHeight: 1.5 }}>
            This browser has no speech voice. Try opening the app in Chrome or Safari directly.
            <span className="th" style={{ display: "block" }}>
              เบราว์เซอร์นี้ไม่มีเสียงพูด ลองเปิดแอปใน Chrome หรือ Safari โดยตรง
            </span>
          </div>
        )}
      </div>

      <div className="list">
        {modules.map((m, i) => {
          const pct = progress[m.id]?.pct || 0;
          return (
            <button key={m.id} className="mod" onClick={() => onPick(m.id)}>
              <div className={"num" + (pct >= 80 ? " done" : "")}>
                {pct >= 80 ? "✓" : String(i + 1).padStart(2, "0")}
              </div>
              <div className="body">
                <div className="en">{m.en}</div>
                <div className="thai th">{m.th}</div>
                <div className="meta">
                  <div className="bar">
                    <i style={{ width: pct + "%" }} />
                  </div>
                  <span>{pct ? pct + "%" : m.questions.length + " questions"}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

/* ---------------- LESSON ---------------- */

function Lesson({ module: mod, thaiOn, onQuit, onDone, onHome }) {
  const [i, setI] = useState(0);
  const [earned, setEarned] = useState(0);
  const [misses, setMisses] = useState([]);
  const [state, setState] = useState("asking");
  const [picked, setPicked] = useState(null);
  const [built, setBuilt] = useState([]);
  const doneRef = useRef(false);

  const q = mod.questions[i];
  const max = mod.questions.length * 10;

  const opts = useMemo(() => (q && q.options ? shuffle(q.options) : []), [i]); // eslint-disable-line
  const bank = useMemo(() => (q && q.words ? shuffle(q.words) : q && q.pool ? shuffle(q.pool) : []), [i]); // eslint-disable-line

  useEffect(() => {
    setPicked(null);
    setBuilt([]);
    setState("asking");
  }, [i]);

  if (state === "finished") {
    const pct = Math.round((earned / max) * 100);
    if (!doneRef.current) {
      doneRef.current = true;
      onDone(earned, max);
    }
    return (
      <>
        <div className="top">
          <button className="x" onClick={onHome}>✕</button>
        </div>
        <div className="done-wrap">
          <div className="score">
            {pct}
            <small>%</small>
          </div>
          <h2>{pct >= 90 ? "Excellent." : pct >= 70 ? "Good work." : "Keep practising."}</h2>
          <p>
            {earned} of {max} points · {mod.en}
            <br />
            <span className="th">
              {pct >= 90 ? "เยี่ยมมาก พร้อมขึ้นกะแล้ว" : pct >= 70 ? "ดีแล้ว ลองอีกครั้งให้ได้ 90%" : "ลองทำอีกรอบนะคะ"}
            </span>
          </p>

          {misses.length > 0 && (
            <div className="recap">
              <h3>Worth remembering · ควรจำไว้</h3>
              <ul>
                {misses.map((m, k) => (
                  <li key={k}>
                    {m.correct}
                    <span className="th">{m.th}</span>
                    <button onClick={() => say(m.correct)}>◗ Hear it</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="cta" onClick={onHome} style={{ marginTop: 22 }}>
            Back to units · กลับหน้าหลัก
          </button>
        </div>
      </>
    );
  }

  const judgeChoice = (o) => {
    if (state !== "asking") return;
    setPicked(o);
    setState("judged");
    setEarned((e) => e + POINTS[o.v]);
    const best = q.options.find((x) => x.v === "best");
    if (o.v !== "best") setMisses((m) => [...m, { correct: best.t, th: best.th }]);
    else say(o.t);
  };

  const judgeBuild = () => {
    const target = q.type === "order" ? q.words : [q.answer];
    const good = built.join(" ") === target.join(" ");
    setPicked({ v: good ? "best" : "bad" });
    setState("judged");
    setEarned((e) => e + (good ? 10 : 0));
    if (!good) setMisses((m) => [...m, { correct: sentenceOf(q), th: q.th }]);
    else say(sentenceOf(q));
  };

  const next = () => {
    if (i + 1 >= mod.questions.length) setState("finished");
    else setI(i + 1);
  };

  const cls = picked ? (picked.v === "best" ? "ok" : picked.v === "ok" ? "warm" : "bad") : "";
  const canSubmit = q.type === "order" ? built.length === q.words.length : q.type === "gap" ? built.length === 1 : false;

  const bestLine =
    q.type === "choice" || q.type === "guest" ? q.options.find((o) => o.v === "best") : null;
  const targetSentence = bestLine ? bestLine.t : sentenceOf(q);
  const prons = state === "judged" ? findPron(targetSentence) : [];

  return (
    <>
      <div className="top">
        <button className="x" onClick={onQuit}>✕</button>
        <div className="track">
          <i style={{ width: ((i + (state === "judged" ? 1 : 0)) / mod.questions.length) * 100 + "%" }} />
        </div>
        <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 600, minWidth: 34, textAlign: "right" }}>
          {i + 1}/{mod.questions.length}
        </div>
      </div>

      <div className="q">
        <div className="tag">{mod.en}</div>
        <div className="scene">
          {q.scene}
          {thaiOn && <span className="thai th">{q.sceneTh}</span>}
        </div>
        <div className="ask">
          {q.ask}
          {thaiOn && <span className="thai th">{q.askTh}</span>}
        </div>

        {q.guest && (
          <>
            <div className="guest">
              <div className="who">The guest says · ลูกค้าพูดว่า</div>
              <div className="said">“{q.guest.en}”</div>
              <div className="thai th">{q.guest.th}</div>
            </div>
            <div className="audio">
              <button className="abtn" onClick={() => say(q.guest.en)}>◗ Hear it</button>
              <button className="abtn" onClick={() => say(q.guest.en, true)}>◗ Slowly</button>
            </div>
          </>
        )}

        {(q.type === "choice" || q.type === "guest") && (
          <div className="opts">
            {opts.map((o, k) => {
              let c = "opt";
              if (state === "judged") {
                if (o.v === "best") c += " right";
                else if (picked === o && o.v === "ok") c += " warm";
                else if (picked === o && o.v === "bad") c += " bad";
              } else if (picked === o) c += " sel";
              return (
                <button key={k} className={c} disabled={state === "judged"} onClick={() => judgeChoice(o)}>
                  {o.t}
                  {thaiOn && <span className="thai th">{o.th}</span>}
                </button>
              );
            })}
          </div>
        )}

        {q.type === "order" && (
          <>
            {thaiOn && <div className="hint th">{q.th}</div>}
            <div className="slot">
              {built.map((w, k) => (
                <button key={k} className="chip" disabled={state === "judged"} onClick={() => setBuilt(built.filter((_, x) => x !== k))}>
                  {w}
                </button>
              ))}
            </div>
            <div className="bank">
              {bank.map((w, k) => {
                const usedCount = built.filter((b) => b === w).length;
                const bankCount = bank.slice(0, k + 1).filter((b) => b === w).length;
                const used = bankCount <= usedCount;
                return (
                  <button key={k} className={"chip" + (used ? " ghost" : "")} disabled={state === "judged"} onClick={() => setBuilt([...built, w])}>
                    {w}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {q.type === "gap" && (
          <>
            {thaiOn && <div className="hint th">{q.th}</div>}
            <div className="slot" style={{ borderBottom: "none", alignItems: "center" }}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 19, lineHeight: 1.6 }}>
                {q.sentence[0]}{" "}
                <span
                  style={{
                    borderBottom: "2px solid var(--sea)",
                    padding: "0 10px",
                    color: built[0] ? "var(--sea)" : "var(--line)",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={() => setBuilt([])}
                >
                  {built[0] || "\u00A0\u00A0\u00A0\u00A0\u00A0"}
                </span>{" "}
                {q.sentence[2]}
              </div>
            </div>
            <div className="bank">
              {bank.map((w, k) => (
                <button key={k} className={"chip" + (built[0] === w ? " ghost" : "")} disabled={state === "judged"} onClick={() => setBuilt([w])}>
                  {w}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <div className={"foot " + cls}>
        {state === "asking" && (q.type === "order" || q.type === "gap") && (
          <button className="cta" disabled={!canSubmit} onClick={judgeBuild}>
            Check · ตรวจคำตอบ
          </button>
        )}

        {state === "asking" && (q.type === "choice" || q.type === "guest") && (
          <div style={{ fontSize: 12.5, color: "var(--ink-soft)", textAlign: "center", lineHeight: 1.5 }}>
            Choose what you would actually say to the guest.
            <span className="th" style={{ display: "block" }}>เลือกประโยคที่คุณจะพูดกับลูกค้าจริง ๆ</span>
          </div>
        )}

        {state === "judged" && (
          <>
            <div className={"verdict " + cls}>
              {picked.v === "best" && (
                <span>
                  ✓ That is the one. <span className="th">ถูกต้อง</span>
                </span>
              )}
              {picked.v === "ok" && (
                <span>
                  ◐ Correct — but there is a warmer way. <span className="th">ถูก แต่ยังมีวิธีพูดที่อบอุ่นกว่านี้</span>
                </span>
              )}
              {picked.v === "bad" && (
                <span>
                  ✕ Not this one. <span className="th">ไม่ใช่ข้อนี้</span>
                </span>
              )}
            </div>

            {picked.n && (
              <div className="note">
                {picked.n}
                {thaiOn && <span className="thai th">{picked.nTh}</span>}
              </div>
            )}

            <div className="answer">
              <span className="lbl">Say this · ให้พูดแบบนี้</span>
              <b>{targetSentence}</b>
              <span className="thai th">{bestLine ? bestLine.th : q.th}</span>
              <div className="audio" style={{ marginTop: 10 }}>
                <button className="abtn" onClick={() => say(targetSentence)}>◗ Hear it</button>
                <button className="abtn" onClick={() => say(targetSentence, true)}>◗ Slowly</button>
              </div>
            </div>

            {prons.length > 0 && (
              <div className="pron">
                <span className="lbl">Say it right · ออกเสียงให้ถูก</span>
                <ul>
                  {prons.map((p, k) => (
                    <li key={k}>
                      <span className="say">{p.say}</span>
                      <span className="tip">
                        {p.tip}
                        {thaiOn && (
                          <span className="th" style={{ display: "block" }}>
                            {p.tipTh}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="cta dark" onClick={next}>
              {i + 1 >= mod.questions.length ? "Finish · จบบทเรียน" : "Continue · ทำต่อ"}
            </button>
          </>
        )}
      </div>
    </>
  );
}
