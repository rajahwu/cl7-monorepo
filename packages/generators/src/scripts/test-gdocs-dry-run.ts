/* eslint-disable @typescript-eslint/no-explicit-any */
import { Clearline7 } from '@clearline7/set-definitions'
import { ContentBlock } from '@clearline7/types' // <--- Fix: Import from shared types
import { generateGDocs } from '../generators/gdocsGenerator'

// Standard Test Content
const TEST_CONTENT: ContentBlock[] = [
  { type: 'heading', level: 1, text: 'GDocs Style Verification' },
  { type: 'paragraph', text: 'This text should map to NORMAL_TEXT with Clearline7 styling.' },
  { type: 'code', code: 'console.log("Monospace override active");' },
]

async function runDryTest() {
  console.log('🚀 Starting Google Docs Dry Run...')

  // --- MOCK GOOGLE CLIENT ---
  const mockClient: any = {
    documents: {
      create: async (params: any) => {
        console.log(`\n[API CALL] documents.create`)
        console.log(`   Title: "${params.requestBody.title}"`)
        return { data: { documentId: 'mock-doc-id-123' } }
      },
      batchUpdate: async (params: any) => {
        console.log(`\n[API CALL] documents.batchUpdate (Doc ID: ${params.documentId})`)
        const requests = params.requestBody.requests

        if (requests.length > 5) {
          console.log(`   Payload: Received ${requests.length} commands.`)
          const styleUpdate = requests.find(
            (r: any) => r.updateParagraphStyle?.style?.namedStyleType === 'NORMAL_TEXT'
          )
          if (styleUpdate) {
            console.log(`   ✅ VALIDATION: Found overwrite for NORMAL_TEXT`)
            console.log(
              `      Font: ${styleUpdate.updateParagraphStyle.style.textStyle.fontFamily}`
            )
            console.log(
              `      Size: ${styleUpdate.updateParagraphStyle.style.textStyle.fontSize.magnitude}pt`
            )
          } else {
            console.log(`   ❌ ERROR: No NORMAL_TEXT overwrite found!`)
          }
        } else {
          console.log(`   Payload: Insertion batch (${requests.length} commands)`)
          const content = requests.find((r: any) => r.insertText)?.insertText.text
          if (content) console.log(`   Sample content: "${content.trim()}"`)
        }

        return { data: {} }
      },
    },
  }

  // --- RUN GENERATOR ---
  await generateGDocs(mockClient, Clearline7, {
    title: 'Dry Run Test Doc',
    content: TEST_CONTENT,
  })

  console.log('\n✅ Dry Run Complete. Logic verified.')
}

runDryTest()
