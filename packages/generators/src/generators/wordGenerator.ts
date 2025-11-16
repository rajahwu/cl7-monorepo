import { Document, Paragraph, TextRun, HeadingLevel, Packer } from 'docx'
import { SetDefinition } from '@clearline7/set-definitions'
import * as fs from 'fs'

export async function generateWordMemo(setDef: SetDefinition, outputPath: string) {
  const doc = new Document({
    styles: {
      paragraphStyles: [
        {
          id: 'Heading1',
          name: 'Heading 1',
          basedOn: 'Normal',
          run: {
            font: setDef.typography.headingFont,
            size: parseInt(setDef.typography.h1Size) * 2,
            color: setDef.colors.primary.replace('#', ''),
          },
        },
        {
          id: 'Normal',
          name: 'Normal',
          run: {
            font: setDef.typography.bodyFont,
            size: parseInt(setDef.typography.bodySize) * 2,
            color: setDef.colors.text.replace('#', ''),
          },
        },
      ],
    },
    sections: [{
      children: [
        new Paragraph({
          text: 'Memorandum',
          heading: HeadingLevel.HEADING_1,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'TO: ', bold: true }),
            new TextRun('[Recipient Name]'),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'FROM: ', bold: true }),
            new TextRun('[Sender Name]'),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'DATE: ', bold: true }),
            new TextRun('[Date]'),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: 'RE: ', bold: true }),
            new TextRun('[Subject]'),
          ],
        }),
      ],
    }],
  })

  const buffer = await Packer.toBuffer(doc)
  fs.writeFileSync(outputPath, buffer)
}
