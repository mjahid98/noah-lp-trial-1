/**
 * to-webp.js
 *
 * 1. Converts every .jpg / .png in src/assets/ to WebP.
 * 2. Resizes any image (including existing .webp) whose longest side exceeds
 *    the configured limit for its folder — photos are capped at 1920 px,
 *    icons at their natural size (no upscaling ever).
 * 3. Rewrites every import / url() reference in src/ from the old extension
 *    to .webp so the project keeps working without manual edits.
 *
 * Usage:  node scripts/to-webp.js
 */

import sharp             from 'sharp'
import fs                from 'fs'
import path              from 'path'
import { fileURLToPath } from 'url'

const ROOT       = fileURLToPath(new URL('..', import.meta.url))
const ASSETS_DIR = path.join(ROOT, 'src', 'assets')
const SRC_DIR    = path.join(ROOT, 'src')

// Maximum pixel dimension (longest side) per asset sub-folder.
// Images already smaller than this are never upscaled.
const MAX_PX = {
  images: 1920,   // hero / section photos
  icons:   512,   // service icons (displayed at ~64 px, keep a bit of headroom)
  logo:    512,   // logo files
  _default: 1920,
}

const QUALITY_PHOTO = 82
const QUALITY_ICON  = 90

// ── Helpers ──────────────────────────────────────────────────────────────────

function walk(dir, exts) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...walk(full, exts))
    else if (exts.includes(path.extname(entry.name).toLowerCase())) results.push(full)
  }
  return results
}

function walkSrc(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'node_modules') results.push(...walkSrc(full))
    else if (/\.(jsx?|tsx?|css)$/.test(entry.name)) results.push(full)
  }
  return results
}

// Resolve the configured max-px for a file based on its parent folder name
function maxPxFor(filePath) {
  const rel    = path.relative(ASSETS_DIR, filePath)
  const folder = rel.split(path.sep)[0]
  return MAX_PX[folder] ?? MAX_PX._default
}

// ── Step 1: Convert .jpg / .png → .webp ──────────────────────────────────────

const toConvert = walk(ASSETS_DIR, ['.jpg', '.jpeg', '.png'])
let converted = 0

if (toConvert.length) {
  console.log(`\nConverting ${toConvert.length} image(s) to WebP…\n`)

  for (const src of toConvert) {
    const ext     = path.extname(src).toLowerCase()
    const dest    = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    const maxPx   = maxPxFor(src)
    const quality = ext === '.png' ? QUALITY_ICON : QUALITY_PHOTO
    const before  = fs.statSync(src).size

    await sharp(src)
      .resize(maxPx, maxPx, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(dest)

    fs.unlinkSync(src)

    const after  = fs.statSync(dest).size
    const saving = Math.round((1 - after / before) * 100)
    const meta   = await sharp(dest).metadata()
    console.log(
      `  ✓  ${path.relative(ROOT, dest).padEnd(58)}` +
      `${meta.width}×${meta.height}  ` +
      `${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (${saving > 0 ? saving + '% smaller' : Math.abs(saving) + '% larger'})`
    )
    converted++
  }
} else {
  console.log('\nNo .jpg / .png files found — all images already WebP.')
}

// ── Step 2: Resize oversized .webp files in-place ────────────────────────────

const existing = walk(ASSETS_DIR, ['.webp'])
let resized = 0

console.log(`\nChecking ${existing.length} existing WebP file(s) for oversized dimensions…\n`)

for (const file of existing) {
  const maxPx  = maxPxFor(file)
  const meta   = await sharp(file).metadata()
  const longest = Math.max(meta.width, meta.height)

  if (longest <= maxPx) continue  // already within limits

  const before  = fs.statSync(file).size
  const isIcon  = file.includes(`${path.sep}icons${path.sep}`) || file.includes(`${path.sep}logo${path.sep}`)
  const quality = isIcon ? QUALITY_ICON : QUALITY_PHOTO

  // Read entire file into memory first so the output write doesn't conflict
  // with Vite's file-watcher holding a read handle on the same path.
  const inputBuf  = fs.readFileSync(file)
  const outputBuf = await sharp(inputBuf)
    .resize(maxPx, maxPx, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer()

  try {
    fs.writeFileSync(file, outputBuf)
  } catch (err) {
    if (err.code === 'UNKNOWN' || err.code === 'EPERM' || err.code === 'EBUSY') {
      console.error(`  ✗  ${path.relative(ROOT, file)}  — file locked (stop the dev server and re-run)`)
      continue
    }
    throw err
  }

  const after   = fs.statSync(file).size
  const newMeta = await sharp(file).metadata()
  const saving  = Math.round((1 - after / before) * 100)

  console.log(
    `  ✓  ${path.relative(ROOT, file).padEnd(58)}` +
    `${meta.width}×${meta.height} → ${newMeta.width}×${newMeta.height}  ` +
    `${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (${saving}% smaller)`
  )
  resized++
}

if (!resized) console.log('  All files are within size limits.\n')

// ── Step 3: Rewrite import paths .jpg/.jpeg/.png → .webp ─────────────────────

const srcFiles    = walkSrc(SRC_DIR)
let updatedFiles  = 0

const anyUpdated = srcFiles.some(file => {
  const content = fs.readFileSync(file, 'utf8')
  return /(from\s+['"]|import\s+['"]|url\(['"]?)(.*?)\.(jpg|jpeg|png)(['"]?\)|['"])/i.test(content)
})

if (anyUpdated) {
  console.log('\nUpdating import paths in src/…\n')
  for (const file of srcFiles) {
    const original = fs.readFileSync(file, 'utf8')
    const updated  = original.replace(
      /(from\s+['"]|import\s+['"]|url\(['"]?)(.*?)\.(jpg|jpeg|png)(['"]?\)|['"])/gi,
      (_, prefix, name, _ext, suffix) => `${prefix}${name}.webp${suffix}`
    )
    if (updated !== original) {
      fs.writeFileSync(file, updated, 'utf8')
      console.log(`  ✓  ${path.relative(ROOT, file)}`)
      updatedFiles++
    }
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`
Done.
  Converted (jpg/png → webp) : ${converted}
  Resized (oversized webp)   : ${resized}
  Source files updated       : ${updatedFiles}
`)
