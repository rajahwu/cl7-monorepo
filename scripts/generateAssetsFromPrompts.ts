#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import { GoogleGenerativeAI } from '@google/generative-ai'

/*
Usage:
bun scripts/generateAssetsFromPrompts.ts enhanced_prompts.md output_folder
*/

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

const genAI = new GoogleGenerativeAI(API_KEY)
const model = genAI.getGenerativeModel({ model: 'imagen-3.0-generate-002' })

const prompts = fs
  .readFileSync(promptFile, 'utf-8')
  .split('\n')
  .filter((l) => l.trim() && /^\d+\./.test(l))
  .map((l) => l.replace(/^\d+\.\s*/, ''))

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

async function run() {
  console.log(`Generating ${prompts.length} images...\n`)

  for (let i = 0; i < prompts.length; i++) {
    const prompt = prompts[i]
    console.log(`🎨 ${i + 1}/${prompts.length}`)

    const result = await model.generateImage({
      prompt,
      size: '1024x1024',
    })

    const imageBase64 = result.image.base64
    const buffer = Buffer.from(imageBase64, 'base64')

    const filename = path.join(outputDir, `asset_${i + 1}.png`)
    fs.writeFileSync(filename, buffer)

    console.log(`✓ Saved ${filename}`)
  }

  console.log('\n✅ All assets generated.')
}

run()
