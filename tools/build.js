#!/usr/bin/env node
// Builds two single-file versions of the game from index.html:
//   dist/calder.html           a complete standalone page (double-click to play, works offline)
//   dist/calder-artifact.html  the same content without the document skeleton, for claude.ai
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), "utf8"); }
function safeScript(src) { return src.replace(/<\/script/gi, "<\\/script"); }

const css = read("css/style.css");
const favicon = "data:image/png;base64," + fs.readFileSync(path.join(ROOT, "favicon.png")).toString("base64");
let inlined = html
  .replace('<link rel="stylesheet" href="css/style.css">', () => "<style>\n" + css + "\n</style>")
  .replace('href="favicon.png"', () => 'href="' + favicon + '"');
// Art: every file path in the asset list becomes a data URI, so the page is one self-contained file.
function inlineAssets(src) {
  return src.replace(/"(art\/[^"]+\.png)"/g, (m, f) => '"data:image/png;base64,' + fs.readFileSync(path.join(ROOT, f)).toString("base64") + '"');
}
inlined = inlined.replace(/<script src="([^"]+)"><\/script>/g, (m, src) => "<script>\n" + safeScript(src === "js/art/asset-files.js" ? inlineAssets(read(src)) : read(src)) + "\n</script>");
if (/<script src=|href="css\//.test(inlined)) throw new Error("build: something was left un-inlined");

fs.mkdirSync(path.join(ROOT, "dist"), { recursive: true });
fs.writeFileSync(path.join(ROOT, "dist/calder.html"), inlined);

// Artifact variant: title + styles first, then the body content. No doctype/html/head/body tags.
const head = /<head>([\s\S]*?)<\/head>/.exec(inlined)[1];
const body = /<body>([\s\S]*?)<\/body>/.exec(inlined)[1];
const title = /<title>[\s\S]*?<\/title>/.exec(head)[0];
// Inline event handlers may be blocked by the artifact CSP, so load the fonts with a plain link there.
const fontLink = (head.match(/<link rel="stylesheet" href="https:\/\/fonts[^>]+>/) || [""])[0]
  .replace(/\s+media="print"\s+onload="[^"]*"/, "");
const style = /<style>[\s\S]*?<\/style>/.exec(head)[0];
const artifact = [title, style, fontLink, body.trim()].join("\n");
fs.writeFileSync(path.join(ROOT, "dist/calder-artifact.html"), artifact);

const kb = (f) => Math.round(fs.statSync(path.join(ROOT, f)).size / 1024) + " KB";
console.log("built dist/calder.html (" + kb("dist/calder.html") + ") and dist/calder-artifact.html (" + kb("dist/calder-artifact.html") + ")");
