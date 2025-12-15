// packages/generators/src/scripts/test-gdocs-real.ts

import { google } from 'googleapis'
import { Clearline7 } from '@clearline7/set-definitions'
import { generateGDocs, ContentBlock } from '../generators/gdocsGenerator'
import * as path from 'path'

// Standard Test Content
const TEST_CONTENT: ContentBlock[] = [
  { type: 'heading', level: 1, text: 'Real Live Google Doc Test' },
  {
    type: 'paragraph',
    text: 'If this works, this text is "Normal Text" but looks like Clearline7 Inter.',
  },
  { type: 'heading', level: 2, text: 'Style Check' },
  { type: 'list', ordered: true, items: ['Item 1', 'Item 2'] },
  { type: 'code', code: 'System.out.println("Hello Real World");' },
]

async function runRealTest() {
  console.log('🚀 Authenticating with Google...')

  // 1. AUTHENTICATE
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, '../../credentials.json'), // Points to packages/generators/credentials.json
    scopes: ['https://www.googleapis.com/auth/documents', 'https://www.googleapis.com/auth/drive'],
  })

  const client = google.docs({ version: 'v1', auth })

  // 2. GENERATE
  console.log('📄 Generating Clearline7 Doc...')
  try {
    const docId = await generateGDocs(client, Clearline7, {
      title: 'Clearline7 Integration Test',
      content: TEST_CONTENT,
    })

    console.log('\n✅ SUCCESS! Document created.')
    console.log(`🔗 Link: https://docs.google.com/document/d/${docId}/edit`)
  } catch (error) {
    console.error('\n❌ FAILED:', error)
    console.log('Tip: Ensure "Google Docs API" is enabled in your Cloud Console.')
  }
}

runRealTest()
