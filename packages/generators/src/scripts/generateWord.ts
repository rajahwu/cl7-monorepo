// packages/generators/src/scripts/generateWord.ts

import {
  Clearline7,
  FederalFlow,
  ClerkRoomStandard,
  ClericalOfficePro,
  TechDocs,
  WikiGuidelines,
  BlogPosts,
} from '@clearline7/set-definitions'
import { generateWord } from '../generators/wordGenerator'
import { ContentBlock } from '@clearline7/types'
import * as fs from 'fs'
import * as path from 'path'

const styleSets = {
  'clearline-7': Clearline7,
  'federal-flow': FederalFlow,
  'clerkroom-standard': ClerkRoomStandard,
  'clerical-pro': ClericalOfficePro,
  techdocs: TechDocs,
  'wiki-guidelines': WikiGuidelines,
  'blog-posts': BlogPosts,
}

// Standard content to verify styles appear correctly
const TEST_CONTENT: ContentBlock[] = [
  { type: 'heading', level: 1, text: 'Style System Verification' },
  {
    type: 'paragraph',
    text: 'This document validates that the selected Clearline7 set is applying named styles natively.',
  },

  { type: 'heading', level: 2, text: '1. Typography Check' },
  {
    type: 'paragraph',
    text: 'This body text should match the set definition for font family and size. It should be styled as "CL7 Body" in Word.',
  },

  { type: 'heading', level: 2, text: '2. List Structure' },
  { type: 'list', ordered: false, items: ['List Item A', 'List Item B', 'List Item C'] },

  { type: 'heading', level: 2, text: '3. Technical Data' },
  { type: 'code', code: 'console.log("Monospace check passed");' },
]

async function generateAll() {
  const outputDir = path.join(__dirname, '../../output/word')

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  console.log(`🚀 Generating .docx for ${Object.keys(styleSets).length} sets...`)

  for (const [name, setDef] of Object.entries(styleSets)) {
    const buffer = await generateWord(setDef, {
      title: `${name} Output`,
      content: TEST_CONTENT,
    })

    const outputPath = path.join(outputDir, `${name}-memo.docx`)
    fs.writeFileSync(outputPath, buffer)
    console.log(`✅ Generated ${name}-memo.docx`)
  }
}

generateAll()
