const fs = require('node:fs')
const path = require('node:path')

const TOKENS_PATH = path.resolve(__dirname, '../../../brand/design-repo/TOKENS_SOURCE/tokens.json')
const OUTPUT_DIR = path.resolve(__dirname, '../src/generated')
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'tokens.ts')

function resolveTokens(node) {
  if (typeof node !== 'object' || node === null) {
    return node
  }

  // If the node has a 'value' property, return it (unwrapping the token)
  if ('value' in node) {
    return node.value
  }

  // Otherwise, recursively resolve keys
  const resolved = {}
  for (const [key, value] of Object.entries(node)) {
    resolved[key] = resolveTokens(value)
  }
  return resolved
}

try {
  console.log(`Reading tokens from ${TOKENS_PATH}...`)
  const rawTokens = fs.readFileSync(TOKENS_PATH, 'utf-8')
  const tokensJson = JSON.parse(rawTokens)

  console.log('Resolving tokens...')
  const resolvedTokens = resolveTokens(tokensJson)

  const fileContent = `// AUTO-GENERATED FILE. DO NOT EDIT.
// Source: brand/design-repo/TOKENS_SOURCE/tokens.json

export const brandTokens = ${JSON.stringify(resolvedTokens, null, 2)} as const;

export type BrandTokens = typeof brandTokens;
`

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf-8')
  console.log(`✅ Tokens generated at ${OUTPUT_FILE}`)
} catch (error) {
  console.error('❌ Error generating tokens:', error)
  process.exit(1)
}
