import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { execSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distClient = path.resolve(root, 'dist')
const distServer = path.resolve(root, 'dist-server')

console.log('[prerender] Building SSR bundle...')
execSync(`npx vite build --ssr src/entry-server.tsx --outDir dist-server --mode production`, {
  cwd: root,
  stdio: 'inherit',
})

console.log('[prerender] Rendering to HTML...')
const { render } = await import(pathToFileURL(path.resolve(distServer, 'entry-server.js')).href)

const templatePath = path.resolve(distClient, 'index.html')
const template = fs.readFileSync(templatePath, 'utf-8')
const appHtml = render()

const output = template.replace('<!--ssr-outlet-->', appHtml)
fs.writeFileSync(templatePath, output, 'utf-8')

fs.rmSync(distServer, { recursive: true, force: true })

console.log('[prerender] dist/index.html written with pre-rendered content.')
