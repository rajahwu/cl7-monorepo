import fs from 'fs'
import path from 'path'

const assetsDir = path.resolve(__dirname, '../brand/design-repo/ASSETS')
const readmePath = path.join(assetsDir, 'README.md')

const sets = fs
  .readdirSync(assetsDir)
  .filter((f) => fs.statSync(path.join(assetsDir, f)).isDirectory())

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
    prompts: '✅', // all prompt stubs scaffolded already
  }
}

const tableHeader = `| Set | Icons | Emoji Equivalents | Clip Art | Prompt Stub |
|-----|-------|-------------------|----------|-------------|`

const rows = sets.map((set) => {
  const status = checkStatus(set)
  return `| ${set} | ${status.icons} | ${status.emoji} | ${status.clipart} | ${status.prompts} |`
})

const table = [tableHeader, ...rows].join('\n')

// Replace or append to README
let readme = fs.readFileSync(readmePath, 'utf-8')
const marker = '## Progress Tracker'
if (readme.includes(marker)) {
  readme = readme.replace(/## Progress Tracker[\\s\\S]*?(?=##|$)/, `${marker}\n\n${table}\n`)
} else {
  readme += `\n\n${marker}\n\n${table}\n`
}

fs.writeFileSync(readmePath, readme)
console.log('Asset status updated!')
