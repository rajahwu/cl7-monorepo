#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'

const assetsDir = path.resolve(__dirname, '../brand/design-repo/ASSETS')
const readmePath = path.join(assetsDir, 'README.md')
const manifestPath = path.resolve(__dirname, '../brand/design-repo/ASSET_MANIFEST.md')

// Utility: generate governed filename
function generateFilename(set: string, type: 'icon' | 'emoji' | 'clipart', concept: string) {
  return `${type}_${concept.toLowerCase()}_${set.toLowerCase()}.svg`
}

// Save asset with correct naming and update manifest
function saveAsset(
  set: string,
  type: 'icon' | 'emoji' | 'clipart',
  concept: string,
  filePath: string
) {
  const dir = path.join(assetsDir, set)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const filename = generateFilename(set, type, concept)
  const filepath = path.join(dir, filename)

  console.log(`📄 Suggested filename: ${filename}`)
  console.log(`➡️ Saving to: ${filepath}`)

  const content = fs.readFileSync(filePath)
  fs.writeFileSync(filepath, content)
  console.log(`✅ Asset saved successfully!`)

  updateManifest(set, filename)
}

// Update ASSET_MANIFEST.md
function updateManifest(set: string, filename: string) {
  const relativePath = `ASSETS/${set}/${filename}`
  let manifest = fs.existsSync(manifestPath)
    ? fs.readFileSync(manifestPath, 'utf-8')
    : '# Asset Manifest\n\n'

  const heading = `## ${set}`
  if (!manifest.includes(heading)) {
    // Add new heading if it doesn't exist
    manifest += `\n${heading}\n`
  }

  // Ensure entry is under the correct heading
  const regex = new RegExp(`(${heading}[\\s\\S]*?)(?=\\n##|$)`)
  const match = manifest.match(regex)

  if (match) {
    const section = match[1]
    if (!section.includes(relativePath)) {
      const updatedSection = section.trimEnd() + `\n- ${relativePath}\n`
      manifest = manifest.replace(regex, updatedSection)
      fs.writeFileSync(manifestPath, manifest)
      console.log(`📒 Manifest updated under ${set}: ${relativePath}`)
    } else {
      console.log(`ℹ️ Manifest already contains: ${relativePath}`)
    }
  }
}

// Check status of a set
function checkStatus(set: string) {
  const dir = path.join(assetsDir, set)
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : []

  const icons = files.some((f) => f.startsWith('icon_'))
  const emoji = files.some((f) => f.startsWith('emoji_'))
  const clipart = files.some((f) => f.startsWith('clipart_'))

  return {
    icons: icons ? '✅' : '☐',
    emoji: emoji ? '✅' : '☐',
    clipart: clipart ? '✅' : '☐',
    prompts: '✅',
  }
}

// Update tracker table
function updateTracker() {
  const sets = fs
    .readdirSync(assetsDir)
    .filter((f) => fs.statSync(path.join(assetsDir, f)).isDirectory())

  const tableHeader = `| Set | Icons | Emoji Equivalents | Clip Art | Prompt Stub |
|-----|-------|-------------------|----------|-------------|`

  const rows = sets.map((set) => {
    const status = checkStatus(set)
    return `| ${set} | ${status.icons} | ${status.emoji} | ${status.clipart} | ${status.prompts} |`
  })

  const table = [tableHeader, ...rows].join('\n')

  let readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf-8') : ''
  const marker = '## Progress Tracker'
  if (readme.includes(marker)) {
    readme = readme.replace(/## Progress Tracker[\\s\\S]*?(?=##|$)/, `${marker}\n\n${table}\n`)
  } else {
    readme += `\n\n${marker}\n\n${table}\n`
  }

  fs.writeFileSync(readmePath, readme)
  console.log('✅ Asset status tracker updated!')
}

function reindexManifest() {
  const sets = fs
    .readdirSync(assetsDir)
    .filter((f) => fs.statSync(path.join(assetsDir, f)).isDirectory())

  let manifest = '# Asset Manifest\n\n'

  sets.forEach((set) => {
    manifest += `## ${set}\n`
    const dir = path.join(assetsDir, set)
    const files = fs.readdirSync(dir)

    files.forEach((file) => {
      manifest += `- ASSETS/${set}/${file}\n`
    })

    manifest += '\n'
  })

  fs.writeFileSync(manifestPath, manifest)
  console.log('📒 Manifest fully rebuilt and grouped by set!')
}

// CLI entry
const [, , cmd, ...args] = process.argv

const isAssetType = (v: string): v is 'icon' | 'emoji' | 'clipart' =>
  v === 'icon' || v === 'emoji' || v === 'clipart'

switch (cmd) {
  case 'save': {
    // Usage: bun scripts/assetTool.ts save <set> <type> <concept> <filePath>
    const [set, type, concept, filePath] = args

    if (!set || !type || !concept || !filePath) {
      console.error('Usage: assetTool save <set> <type> <concept> <filePath>')
      process.exit(1)
    }

    if (!isAssetType(type)) {
      console.error('Type must be one of: icon | emoji | clipart')
      process.exit(1)
    }

    saveAsset(set, type, concept, filePath)
    break
  }

  case 'update': {
    updateTracker()
    break
  }

  case 'reindex':
    reindexManifest()
    break

  default:
    console.log(`Usage:
  bun scripts/assetTool.ts save <set> <type> <concept> <filePath>
  bun scripts/assetTool.ts update
  bun scripts/assetTool.ts reindex`)
}
