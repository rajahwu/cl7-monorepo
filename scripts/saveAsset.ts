import fs from 'fs'
import path from 'path'

function saveAsset(
  set: string,
  type: 'icon' | 'emoji' | 'clipart',
  concept: string,
  content: Buffer
) {
  const dir = path.resolve(__dirname, `../brand/design-repo/ASSETS/${set}`)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const filename = `${type}_${concept.toLowerCase()}_${set.toLowerCase()}.svg`
  const filepath = path.join(dir, filename)

  fs.writeFileSync(filepath, content)
  console.log(`Saved asset: ${filepath}`)
}

// Example usage:
// saveAsset('TechLaw', 'icon', 'gavel', svgBuffer);
export { saveAsset }
