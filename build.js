const babel = require("@babel/standalone");
const fs = require("fs");

let src = fs.readFileSync("./sands-english-fb.jsx", "utf8");
src = src.replace('import React, { useState, useEffect, useMemo, useRef } from "react";', "");
src = src.replace("export default function App()", "function App()");

const prelude = `const { useState, useEffect, useMemo, useRef } = React;\n`;
const tail = `\nReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));\n`;

const out = babel.transform(prelude + src + tail, { presets: ["react"] }).code;
fs.writeFileSync("app.js", out);
console.log("app.js bytes:", out.length);
