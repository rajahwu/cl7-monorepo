import {
  Clearline7,
  FederalFlow,
  ClerkRoomStandard,
  ClericalOfficePro,
  TechDocs,
  WikiGuidelines,
  BlogPosts,
} from '@clearline7/set-definitions'
import { generateWordMemo } from '../generators/wordGenerator'
import * as fs from 'fs'
import * as path from 'path'

const styleSets = {
  'clearline-7': Clearline7,
  'federal-flow': FederalFlow,
  'clerkroom-standard': ClerkRoomStandard,
  'clerical-pro': ClericalOfficePro,
  'techdocs': TechDocs,
  'wiki-guidelines': WikiGuidelines,
  'blog-posts': BlogPosts,
}

async function generateAll() {
  const outputDir = path.join(__dirname, '../../output/word')
  fs.mkdirSync(outputDir, { recursive: true })

  for (const [name, setDef] of Object.entries(styleSets)) {
    const outputPath = path.join(outputDir, `${name}-memo.docx`)
    await generateWordMemo(setDef, outputPath)
    console.log(`✅ Generated ${name}-memo.docx`)
  }
}

generateAll()
