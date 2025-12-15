// packages/generators/src/generators/wordGenerator.ts

import { Document, Paragraph, TextRun, Packer, AlignmentType, LevelFormat } from 'docx'
import { SetDefinition } from '@clearline7/set-definitions'
import { ContentBlock } from '@clearline7/types' // <--- IMPORT SHARED TYPE
import { WORD_STYLE_NAMES } from '../word/styleMap'
import { buildWordStyles } from '../word/styleBuilder'

// DELETE the local 'export type ContentBlock = ...' definition here

export async function generateWord(
  set: SetDefinition,
  doc: { title?: string; content: ContentBlock[] }
): Promise<Buffer> {
  // ... (Rest of the function remains exactly the same)

  const paragraphStyles = buildWordStyles(set)

  const document = new Document({
    styles: { paragraphStyles },
    numbering: {
      config: [
        {
          reference: 'cl7-ordered',
          levels: [
            {
              level: 0,
              format: LevelFormat.DECIMAL,
              text: '%1.',
              alignment: AlignmentType.START,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
        {
          reference: 'cl7-unordered',
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: '\u2022',
              alignment: AlignmentType.START,
              style: { paragraph: { indent: { left: 720, hanging: 360 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        children: [...(doc.title ? [renderTitle(doc.title)] : []), ...renderContent(doc.content)],
      },
    ],
  })

  return Buffer.from(await Packer.toBuffer(document))
}

// ... (Renderers remain the same)
function renderTitle(text: string) {
  return new Paragraph({ text, style: WORD_STYLE_NAMES.title })
}

function renderContent(blocks: ContentBlock[]): Paragraph[] {
  const out: Paragraph[] = []
  for (const block of blocks) {
    switch (block.type) {
      case 'heading':
        out.push(new Paragraph({ text: block.text, style: WORD_STYLE_NAMES.heading[block.level] }))
        break
      case 'paragraph':
        out.push(new Paragraph({ text: block.text, style: WORD_STYLE_NAMES.paragraph }))
        break
      case 'list':
        out.push(...renderList(block))
        break
      case 'code':
        out.push(
          new Paragraph({ children: [new TextRun(block.code)], style: WORD_STYLE_NAMES.code })
        )
        break
    }
  }
  return out
}

function renderList(block: { ordered: boolean; items: string[] }): Paragraph[] {
  return block.items.map(
    (item) =>
      new Paragraph({
        text: item,
        style: WORD_STYLE_NAMES.list,
        numbering: block.ordered
          ? { reference: 'cl7-ordered', level: 0 }
          : { reference: 'cl7-unordered', level: 0 },
      })
  )
}
