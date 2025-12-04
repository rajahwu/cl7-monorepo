import fs from 'fs'
import path from 'path'

// Configuration
const PACKAGES_DIR = path.resolve(__dirname, '../packages/set-definitions/src')
const BRAND_AESTHETICS_DIR = path.join(PACKAGES_DIR, 'brand-aesthetics')
const OUTPUT_FILE = path.resolve(__dirname, '../brand/design-repo/TOKENS_SOURCE/set_colors.json')

function extractColor(content: string, key: string): string | null {
  // Try a simpler regex that doesn't rely on \s
  // key followed by anything until colon, then anything until quote
  const regexStr = `${key}[^:]*:[^"']*["']([^"']+)["']`
  const regex = new RegExp(regexStr)
  const match = content.match(regex)
  // if (key === 'primary') console.log(`[DEBUG] ${key} regex: ${regexStr} -> match: ${match ? match[1] : 'null'}`);
  return match ? match[1] : null
}

function processFile(filePath: string): Record<string, string> | null {
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf-8')

  // We only care about files that instantiate SetDefinition
  if (!content.includes('new SetDefinition')) return null

  const colors = {
    primary: extractColor(content, 'primary'),
    secondary: extractColor(content, 'secondary'),
    accent: extractColor(content, 'accent'),
    bg: extractColor(content, 'bg'),
    text: extractColor(content, 'text'),
    surface: extractColor(content, 'surface'),
    success: extractColor(content, 'success'),
    muted: extractColor(content, 'muted'),
  }

  // Filter out nulls
  return Object.fromEntries(Object.entries(colors).filter(([, v]) => v !== null)) as Record<
    string,
    string
  >
}

function main() {
  const results: Record<string, Record<string, string>> = {}

  // 1. Scan main directory
  const mainFiles = fs
    .readdirSync(PACKAGES_DIR)
    .filter((f) => f.endsWith('.ts') && !f.includes('.test.'))

  for (const file of mainFiles) {
    const name = path.basename(file, '.ts')
    if (name === 'index' || name === 'SetDefinition' || name === 'editions' || name === 'test')
      continue

    const data = processFile(path.join(PACKAGES_DIR, file))
    if (data) {
      results[name] = data
    }
  }

  // 2. Scan brand-aesthetics directory
  if (fs.existsSync(BRAND_AESTHETICS_DIR)) {
    const aestheticsFiles = fs
      .readdirSync(BRAND_AESTHETICS_DIR)
      .filter((f) => f.endsWith('.ts') && !f.includes('.test.'))

    for (const file of aestheticsFiles) {
      const name = path.basename(file, '.ts')
      if (name === 'index') continue

      const data = processFile(path.join(BRAND_AESTHETICS_DIR, file))
      if (data) {
        results[name] = data
      }
    }
  }

  const outputDir = path.dirname(OUTPUT_FILE)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2))
  console.log(`✅ Synced ${Object.keys(results).length} sets to ${OUTPUT_FILE}`)
}

main()
