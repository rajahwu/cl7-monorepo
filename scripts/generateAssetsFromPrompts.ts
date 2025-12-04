#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import { GoogleGenAI } from '@google/genai'

const [, , promptFile, outputDir] = process.argv

if (!promptFile || !outputDir) {
  console.error('Usage: bun generateAssetsFromPrompts.ts <prompts> <folder>')
  process.exit(1)
}

const API_KEY = process.env.GOOGLE_API_KEY
if (!API_KEY) {
  console.error('Missing GOOGLE_API_KEY')
  process.exit(1)
}

const genAI = new GoogleGenAI({ apiKey: API_KEY })

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Load colors
const setColorsPath = path.resolve(__dirname, '../brand/design-repo/TOKENS_SOURCE/set_colors.json')
let setColors: Record<string, Record<string, string>> = {}
if (fs.existsSync(setColorsPath)) {
  setColors = JSON.parse(fs.readFileSync(setColorsPath, 'utf-8'))
}

function sanitizeFilename(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
}

function getSetColors(filename: string) {
  const match = path.basename(filename).match(/_([a-zA-Z0-9]+)\.md$/)
  const suffix = match ? match[1] : null
  if (!suffix) return null
  return Object.keys(setColors).find((k) => k.toLowerCase() === suffix.toLowerCase())
}

async function run() {
  const content = fs.readFileSync(promptFile, 'utf-8')
  const setKey = getSetColors(promptFile)
  const colors = setKey ? setColors[setKey] : {}

  if (setKey) {
    console.log(`🎨 Using colors for set: ${setKey}`)
  } else {
    console.log(`⚠️  Could not infer Set from filename. Color replacement skipped.`)
  }

  // Regex: start of line, ##, whitespace
  const sections = content
    .split(new RegExp('^##\\s+', 'm'))
    .slice(1)
    .map((section) => {
      const lines = section.split('\n')
      const label = lines[0].trim()
      let prompt = lines.slice(1).join('\n').trim()

      // Replace placeholders
      if (setKey) {
        prompt = prompt.replace(/{{(\w+)}}/g, (_, key) => {
          const val = colors[key] || colors[key.toLowerCase()]
          if (!val) console.warn(`⚠️  Missing color value for {{${key}}}`)
          return val || `{{${key}}}`
        })
      }

      return { label, prompt }
    })
    .filter((s) => s.prompt.length > 0)

  console.log(`Found ${sections.length} prompts to generate.\n`)

  for (let i = 0; i < sections.length; i++) {
    const { label, prompt } = sections[i]
    const filename = `${sanitizeFilename(label)}.png`
    const outputPath = path.join(outputDir, filename)

    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${label} (already exists)`)
      continue
    }

    console.log(`🎨 Generating: ${label}...`)
    // console.log(`   Prompt: ${prompt.substring(0, 50)}...`);

    try {
      const response = await genAI.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: [
          {
            role: 'user',
            parts: [{ text: 'Generate an image of ' + prompt }],
          },
        ],
      })

      const candidate = response.candidates?.[0]
      const parts = candidate?.content?.parts

      let imageFound = false
      if (parts) {
        for (const part of parts) {
          if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
            const buffer = Buffer.from(part.inlineData.data, 'base64')
            fs.writeFileSync(outputPath, buffer)
            console.log(`✅ Saved ${filename}`)
            imageFound = true
            break
          }
        }
      }

      if (!imageFound) {
        console.error(`❌ No image found for ${label}.`)
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)
      console.error(`❌ Failed to generate ${label}:`, errorMessage)
    }
  }

  console.log('\nDone.')
}

run()
