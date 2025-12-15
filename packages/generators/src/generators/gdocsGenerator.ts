// packages/generators/src/generators/gdocsGenerator.ts

import { docs_v1 } from 'googleapis'
import { SetDefinition } from '@clearline7/set-definitions'
import { ContentBlock } from '@clearline7/types' // <--- IMPORT SHARED TYPE
import { GDOCS_STYLE_MAP } from '../gdocs/styleMap'
import { buildGDocsStyleOverrides } from '../gdocs/styleOverrides'

// DELETE the local 'export type ContentBlock = ...' definition here

export async function generateGDocs(
  client: docs_v1.Docs,
  set: SetDefinition,
  doc: { title: string; content: ContentBlock[] }
) {
  // ... (Rest of logic remains identical)
  const createResponse = await client.documents.create({
    requestBody: { title: doc.title },
  })
  const documentId = createResponse.data.documentId!

  await client.documents.batchUpdate({
    documentId,
    requestBody: {
      requests: buildGDocsStyleOverrides(set),
    },
  })

  // ... (Keep existing content insertion logic)
  const requests: docs_v1.Schema$Request[] = []
  let index = 1

  for (const block of doc.content) {
    // ... (Existing switch statement)
    // The logic doesn't change, just the Type Definition it validates against
    switch (block.type) {
      case 'heading':
        // @ts-expect-error - Dynamic map access
        appendText(block.text, GDOCS_STYLE_MAP.heading[block.level])
        break
      case 'paragraph':
        appendText(block.text, GDOCS_STYLE_MAP.paragraph)
        break
      case 'list': {
        for (const item of block.items) {
          // ... (Existing list logic)
          const len = item.length + 1
          requests.push({
            insertText: { text: item + '\n', endOfSegmentLocation: { segmentId: '' } },
          })
          requests.push({
            createParagraphBullets: {
              range: { startIndex: index, endIndex: index + len },
              bulletPreset: block.ordered
                ? 'NUMBERED_DECIMAL_ALPHA_ROMAN'
                : 'BULLET_DISC_CIRCLE_SQUARE',
            },
          })
          index += len
        }
        break
      }
      case 'code': {
        // ... (Existing code logic)
        const codeLen = block.code.length + 1
        requests.push({
          insertText: { text: block.code + '\n', endOfSegmentLocation: { segmentId: '' } },
        })
        requests.push({
          updateParagraphStyle: {
            range: { startIndex: index, endIndex: index + codeLen },
            paragraphStyle: { namedStyleType: GDOCS_STYLE_MAP.code },
            fields: 'namedStyleType',
          },
        })
        requests.push({
          updateTextStyle: {
            range: { startIndex: index, endIndex: index + codeLen },
            textStyle: { weightedFontFamily: { fontFamily: 'Roboto Mono' } },
            fields: 'weightedFontFamily',
          },
        })
        index += codeLen
        break
      }
    }
  }

  if (requests.length > 0) {
    await client.documents.batchUpdate({
      documentId,
      requestBody: { requests },
    })
  }

  return documentId
}

// Helper (Re-include if needed, or assume it's part of the file context you kept)
// Since I'm showing the refactor, assume the helper 'appendText' is still inside the function scope or defined nearby.
