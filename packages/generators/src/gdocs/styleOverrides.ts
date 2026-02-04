// packages/generators/src/gdocs/styleOverrides.ts

import { SetDefinition } from '@clearline7/set-definitions'
import { ContentBlock } from '@clearline7/types'
import { GDOCS_STYLE_MAP } from './styleMap'

// Helper: Convert px to PT (Google Docs uses Points)
function pxToPt(value: string | number): number {
  const val = typeof value === 'string' ? parseInt(value.replace('px', ''), 10) : value
  return val * 0.75 // Approx conversion (96dpi px -> 72dpi pt)
}

// Helper: Convert Hex to RGB object (0-1 scale required by GDocs API)
function rgb(hex: string) {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  return { color: { rgbColor: { red: r, green: g, blue: b } } }
}

export function buildGDocsStyleOverrides(set: SetDefinition) {
  const { typography, colors, spacing } = set
  const requests = []

  // 1. OVERWRITE BODY (NORMAL_TEXT)
  requests.push({
    updateParagraphStyle: {
      style: {
        namedStyleType: GDOCS_STYLE_MAP.paragraph,
        paragraphStyle: {
          spaceAbove: { magnitude: pxToPt(spacing.paragraphBefore ?? 0), unit: 'PT' },
          spaceBelow: { magnitude: pxToPt(spacing.paragraphAfter ?? 0), unit: 'PT' },
        },
        textStyle: {
          fontFamily: typography.bodyFont,
          fontSize: { magnitude: pxToPt(typography.bodySize), unit: 'PT' },
          foregroundColor: rgb(colors.text),
        },
      },
      fields: '*',
    },
  })

  // 2. OVERWRITE HEADINGS (1-6)
  for (let level = 1; level <= 6; level++) {
    const sizeKey = `h${level}Size` as keyof typeof typography
    const styleName = (GDOCS_STYLE_MAP.heading as any)[level]

    requests.push({
      updateParagraphStyle: {
        style: {
          namedStyleType: styleName,
          paragraphStyle: {
            spaceAbove: { magnitude: 24, unit: 'PT' },
            spaceBelow: { magnitude: 12, unit: 'PT' },
          },
          textStyle: {
            fontFamily: typography.headingFont,
            fontSize: { magnitude: pxToPt(typography[sizeKey]), unit: 'PT' },
            bold: true,
            foregroundColor: rgb(colors.primary),
          },
        },
        fields: '*',
      },
    })
  }

  return requests
}
