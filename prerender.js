/**
 * Build-time prerender.
 *
 * Renders every real route with React on the server and writes a static HTML
 * file per route, with the route's own metadata baked into the head. Runs
 * after `vite build` (client) and `vite build --ssr` (server bundle), so the
 * files Vercel serves contain the actual page content — not an empty shell
 * that only fills in once JavaScript runs.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { render } from './dist-ssr/entry-server.js'
import { SITE_URL, pageMeta } from './src/data/site.js'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Swap the content of one meta tag, whatever attribute order or wrapping it uses. */
function setMeta(html, attr, name, value) {
  const pattern = new RegExp(
    `<meta\\s+${attr}="${name}"\\s+content="[^"]*"\\s*/>|<meta\\s*\\n\\s*${attr}="${name}"\\s*\\n\\s*content="[^"]*"\\s*\\n\\s*/>`,
    's',
  )
  const replacement = `<meta ${attr}="${name}" content="${escapeAttr(value)}" />`
  return pattern.test(html) ? html.replace(pattern, replacement) : html
}

const routes = Object.keys(pageMeta)
const written = []

for (const route of routes) {
  const meta = pageMeta[route]
  const url = SITE_URL + (route === '/' ? '/' : route)

  const appHtml = render(route)

  let html = template
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)

  html = setMeta(html, 'name', 'description', meta.description)
  html = setMeta(html, 'property', 'og:title', meta.title)
  html = setMeta(html, 'property', 'og:description', meta.description)
  html = setMeta(html, 'property', 'og:url', url)
  html = setMeta(html, 'name', 'twitter:title', meta.title)
  html = setMeta(html, 'name', 'twitter:description', meta.description)

  // "/" stays dist/index.html; every other route becomes dist/<route>/index.html
  // so the host serves it as a directory index without extra rewrite rules.
  const outFile =
    route === '/'
      ? path.join(dist, 'index.html')
      : path.join(dist, route.replace(/^\//, ''), 'index.html')

  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  written.push([route, path.relative(dist, outFile), Buffer.byteLength(html)])
}

const pad = (s, n) => String(s).padEnd(n)
console.log(`\nPrerendered ${written.length} routes:`)
for (const [route, file, bytes] of written) {
  console.log(`  ${pad(route, 16)} → dist/${pad(file, 24)} ${(bytes / 1024).toFixed(1)} kB`)
}
