import { GeneratorAdapter } from './GeneratorAdapter'
import { SetDefinition } from '@clearline7/set-definitions'
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx'

// This is a simplified representation of our React content structure for the generator
// In a real scenario, we might traverse the React tree or use a shared JSON content format
interface DocContent {
  type: 'paragraph' | 'heading' | 'code' | 'list' | 'card'
  text?: string
  children?: DocContent[]
  level?: number // for headings
  ordered?: boolean // for lists
}

export class WordAdapter implements GeneratorAdapter {
  async generate(content: DocContent[], definition: SetDefinition): Promise<Buffer> {
    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: definition.spacing.scale?.['12']
                  ? parseInt(definition.spacing.scale['12']) * 15
                  : 720, // rough px to twip conversion
                right: 720,
                bottom: 720,
                left: 720,
              },
            },
          },
          children: this.mapContentToDocx(content, definition),
        },
      ],
      styles: {
        default: {
          document: {
            run: {
              font: definition.typography.bodyFont,
              size: parseInt(definition.typography.bodySize) * 2, // pt to half-pt
              color: definition.colors.text.replace('#', ''),
            },
            paragraph: {
              spacing: {
                after: 200, // default
              },
            },
          },
        },
      },
    })

    return await Packer.toBuffer(doc)
  }

  private mapContentToDocx(content: DocContent[], definition: SetDefinition): Paragraph[] {
    const elements: Paragraph[] = []

    content.forEach((block) => {
      switch (block.type) {
        case 'heading':
          elements.push(
            new Paragraph({
              text: block.text,
              heading: this.getHeadingLevel(block.level),
              spacing: {
                after: 240,
                before: 120,
              },
              children: [
                new TextRun({
                  text: block.text || '',
                  font: definition.typography.headingFont,
                  bold: true,
                  color: definition.colors.text.replace('#', ''),
                }),
              ],
            })
          )
          break

        case 'paragraph':
        default:
          elements.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: block.text || '',
                  font: definition.typography.bodyFont,
                  size: parseInt(definition.typography.bodySize) * 2,
                }),
              ],
              spacing: {
                after: 200,
              },
            })
          )
          break
      }
    })

    return elements
  }

  private getHeadingLevel(level?: number): (typeof HeadingLevel)[keyof typeof HeadingLevel] {
    switch (level) {
      case 1:
        return HeadingLevel.HEADING_1
      case 2:
        return HeadingLevel.HEADING_2
      case 3:
        return HeadingLevel.HEADING_3
      case 4:
        return HeadingLevel.HEADING_4
      case 5:
        return HeadingLevel.HEADING_5
      case 6:
        return HeadingLevel.HEADING_6
      default:
        return HeadingLevel.HEADING_1
    }
  }
}
