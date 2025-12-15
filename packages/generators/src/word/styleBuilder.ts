// packages/generators/src/word/styleBuilder.ts

import { SetDefinition } from '@clearline7/set-definitions'
import { IParagraphStyleOptions } from 'docx'
import { WORD_STYLE_NAMES } from './styleMap'

// --- SAFE MATH HELPERS ---
// 1. Safely parse integers, default to 0
function px(value: string | number | undefined): number {
  if (value === undefined || value === null) return 0
  const parsed = typeof value === 'string' ? parseInt(value.replace('px', ''), 10) : value
  return isNaN(parsed) ? 0 : parsed
}

// 2. Safely convert to half-points, default to 24 (12pt)
function pxToHalfPoints(value: string | number | undefined): number {
  if (value === undefined || value === null) return 24
  const val = typeof value === 'string' ? parseInt(value.replace('px', ''), 10) : value
  if (isNaN(val)) return 24
  return Math.round(val * 1.5)
}
// -------------------------

export function buildWordStyles(set: SetDefinition): IParagraphStyleOptions[] {
  const { typography, colors, spacing } = set

  return [
    // BODY STYLE
    {
      id: WORD_STYLE_NAMES.paragraph,
      name: WORD_STYLE_NAMES.paragraph,
      basedOn: 'Normal',
      next: WORD_STYLE_NAMES.paragraph,
      run: {
        font: typography.bodyFont,
        size: pxToHalfPoints(typography.bodySize),
        color: colors.text,
      },
      paragraph: {
        spacing: {
          before: px(spacing.paragraphBefore),
          after: px(spacing.paragraphAfter),
        },
      },
    },

    // HEADINGS
    ...Object.entries(WORD_STYLE_NAMES.heading).map(([level, name]) => {
      // @ts-expect-error - Dynamic key access
      const sizeKey = `h${level}Size` as keyof typeof typography

      return {
        id: name,
        name: name,
        basedOn: WORD_STYLE_NAMES.paragraph,
        next: WORD_STYLE_NAMES.paragraph,
        run: {
          font: typography.headingFont,
          size: pxToHalfPoints(typography[sizeKey]),
          bold: true,
          color: colors.primary,
        },
        paragraph: {
          spacing: {
            before: px(24),
            after: px(12),
          },
        },
      }
    }),

    // LIST STYLE
    {
      id: WORD_STYLE_NAMES.list,
      name: WORD_STYLE_NAMES.list,
      basedOn: WORD_STYLE_NAMES.paragraph,
      run: {
        font: typography.bodyFont,
        size: pxToHalfPoints(typography.bodySize),
        color: colors.text,
      },
      paragraph: {
        spacing: {
          before: 0,
          after: px(spacing.paragraphAfter),
        },
      },
    },

    // CODE STYLE
    {
      id: WORD_STYLE_NAMES.code,
      name: WORD_STYLE_NAMES.code,
      basedOn: WORD_STYLE_NAMES.paragraph,
      run: {
        font: typography.monoFont,
        size: pxToHalfPoints(typography.bodySize),
      },
      paragraph: {
        spacing: {
          before: px(12),
          after: px(12),
        },
      },
    },
  ]
}
