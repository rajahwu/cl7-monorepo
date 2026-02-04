import { describe, it, expect } from 'vitest'
import SetDefinition from './SetDefinition.js'

describe('SetDefinition', () => {
  describe('Constructor', () => {
    it('should create instance with all default values', () => {
      const set = new SetDefinition()

      // Check colors
      expect(set.colors.primary).toBe('#000000')
      expect(set.colors.secondary).toBe('#555555')
      expect(set.colors.accent).toBe('#999999')
      expect(set.colors.success).toBe('#00AA00')
      expect(set.colors.bg).toBe('#FFFFFF')
      expect(set.colors.card).toBe('#F0F0F0')
      expect(set.colors.text).toBe('#111111')
      expect(set.colors.muted).toBe('#888888')
      expect(set.colors.border).toBe('#CCCCCC')

      // Check typography
      expect(set.typography.bodyFont).toBe('Arial')
      expect(set.typography.bodyFallback).toBe('sans-serif')
      expect(set.typography.headingFont).toBe('Arial')
      expect(set.typography.monoFont).toBe('Courier New')
      expect(set.typography.bodySize).toBe('12pt')
      expect(set.typography.h1Size).toBe('20pt')
      expect(set.typography.h2Size).toBe('16pt')
      expect(set.typography.h3Size).toBe('14pt')
      expect(set.typography.lineHeightNormal).toBe(1.5)
      expect(set.typography.lineHeightTight).toBe(1.3)

      // Check spacing
      expect(set.spacing.bulletIndent).toBe('0.25in')
      expect(set.spacing.paragraphBefore).toBe('6pt')
      expect(set.spacing.paragraphAfter).toBe('6pt')
      expect(set.spacing.scale).toBeDefined()
      expect(set.spacing.scale?.['0']).toBe('0px')
      expect(set.spacing.scale?.['4']).toBe('16px')

      // Check radius
      expect(set.radius.button).toBe('4px')
      expect(set.radius.card).toBe('4px')
      expect(set.radius.input).toBe('4px')

      // Check shadows
      expect(set.shadows.low).toBe('0 1px 2px rgba(0,0,0,0.04)')
      expect(set.shadows.medium).toBe('0 2px 4px rgba(0,0,0,0.06)')
      expect(set.shadows.high).toBe('0 4px 8px rgba(0,0,0,0.08)')
    })

    it('should merge partial color overrides with defaults', () => {
      const set = new SetDefinition({
        primary: '#FF0000',
        secondary: '#00FF00',
      })

      expect(set.colors.primary).toBe('#FF0000')
      expect(set.colors.secondary).toBe('#00FF00')
      expect(set.colors.accent).toBe('#999999') // default
      expect(set.colors.bg).toBe('#FFFFFF') // default
    })

    it('should merge partial typography overrides with defaults', () => {
      const set = new SetDefinition(
        {},
        {
          bodyFont: 'Georgia',
          h1Size: '24pt',
        }
      )

      expect(set.typography.bodyFont).toBe('Georgia')
      expect(set.typography.h1Size).toBe('24pt')
      expect(set.typography.bodyFallback).toBe('sans-serif') // default
      expect(set.typography.h2Size).toBe('16pt') // default
    })

    it('should handle nested spacing.scale overrides', () => {
      const set = new SetDefinition(
        {},
        {},
        {
          bulletIndent: '0.5in',
          scale: {
            '0': '0rem',
            '20': '5rem',
          },
        }
      )

      expect(set.spacing.bulletIndent).toBe('0.5in')
      expect(set.spacing.scale?.['0']).toBe('0rem') // overridden
      expect(set.spacing.scale?.['20']).toBe('5rem') // new key
      expect(set.spacing.scale?.['4']).toBe('16px') // default preserved
    })

    it('should merge radius overrides correctly', () => {
      const set = new SetDefinition(
        {},
        {},
        {},
        {
          button: '8px',
        }
      )

      expect(set.radius.button).toBe('8px')
      expect(set.radius.card).toBe('4px') // default
      expect(set.radius.input).toBe('4px') // default
    })

    it('should merge shadow overrides correctly', () => {
      const set = new SetDefinition(
        {},
        {},
        {},
        {},
        {
          low: '0 0 4px rgba(0,0,0,0.1)',
        }
      )

      expect(set.shadows.low).toBe('0 0 4px rgba(0,0,0,0.1)')
      expect(set.shadows.medium).toBe('0 2px 4px rgba(0,0,0,0.06)') // default
    })

    it('should handle optional paragraphBefore spacing', () => {
      const set = new SetDefinition(
        {},
        {},
        {
          paragraphBefore: undefined,
        }
      )

      expect(set.spacing.paragraphBefore).toBeUndefined()
    })

    it('should preserve user-provided values over defaults', () => {
      const customColors = {
        primary: '#123456',
        secondary: '#ABCDEF',
        accent: '#FEDCBA',
        success: '#00FF00',
        bg: '#000000',
        card: '#111111',
        text: '#FFFFFF',
        muted: '#999999',
        border: '#CCCCCC',
        surface: '#FFFFFF',
        danger: '#FF0000',
        focus: '#0000FF',
      }

      const set = new SetDefinition(customColors)

      expect(set.colors).toEqual(customColors)
    })
  })

  describe('toCSS()', () => {
    it('should generate valid CSS custom properties', () => {
      const set = new SetDefinition()
      const css = set.toCSS()

      expect(css).toContain(':root {')
      expect(css).toContain('--color-primary: #000000;')
      expect(css).toContain('--color-secondary: #555555;')
      expect(css).toContain('--color-bg: #FFFFFF;')
      expect(css).toContain('--font-bodyFont: Arial;')
      expect(css).toContain('--font-bodySize: 12pt;')
      expect(css).toContain('--radius-button: 4px;')
      expect(css).toContain('--shadow-low: 0 1px 2px rgba(0,0,0,0.04);')
      expect(css).toContain('--bullet-indent: 0.25in;')
      expect(css).toContain('--paragraph-after: 6pt;')
      expect(css).toContain('}')
    })

    it('should include all color variables with --color- prefix', () => {
      const set = new SetDefinition({
        primary: '#FF0000',
        secondary: '#00FF00',
      })
      const css = set.toCSS()

      expect(css).toContain('--color-primary: #FF0000;')
      expect(css).toContain('--color-secondary: #00FF00;')
    })

    it('should handle optional paragraphBefore spacing', () => {
      const setWithBefore = new SetDefinition({}, {}, { paragraphBefore: '8pt' })
      const cssWithBefore = setWithBefore.toCSS()

      expect(cssWithBefore).toContain('--paragraph-before: 8pt;')

      const setWithoutBefore = new SetDefinition({}, {}, { paragraphBefore: undefined })
      const cssWithoutBefore = setWithoutBefore.toCSS()

      expect(cssWithoutBefore).not.toContain('--paragraph-before')
    })

    it('should include spacing scale variables', () => {
      const set = new SetDefinition()
      const css = set.toCSS()

      expect(css).toContain('--scale-0: 0px;')
      expect(css).toContain('--scale-1: 4px;')
      expect(css).toContain('--scale-4: 16px;')
      expect(css).toContain('--scale-16: 64px;')
    })

    it('should handle custom spacing scale', () => {
      const set = new SetDefinition(
        {},
        {},
        {
          scale: {
            xs: '2px',
            sm: '4px',
            md: '8px',
          },
        }
      )
      const css = set.toCSS()

      expect(css).toContain('--scale-xs: 2px;')
      expect(css).toContain('--scale-sm: 4px;')
      expect(css).toContain('--scale-md: 8px;')
    })

    it('should include all typography properties', () => {
      const set = new SetDefinition()
      const css = set.toCSS()

      expect(css).toContain('--font-bodyFont:')
      expect(css).toContain('--font-bodyFallback:')
      expect(css).toContain('--font-headingFont:')
      expect(css).toContain('--font-monoFont:')
      expect(css).toContain('--font-h1Size:')
      expect(css).toContain('--font-h2Size:')
      expect(css).toContain('--font-h3Size:')
      expect(css).toContain('--font-lineHeightNormal: 1.5;')
      expect(css).toContain('--font-lineHeightTight: 1.3;')
    })

    it('should include all radius properties', () => {
      const set = new SetDefinition()
      const css = set.toCSS()

      expect(css).toContain('--radius-button: 4px;')
      expect(css).toContain('--radius-card: 4px;')
      expect(css).toContain('--radius-input: 4px;')
    })

    it('should include all shadow properties', () => {
      const set = new SetDefinition()
      const css = set.toCSS()

      expect(css).toContain('--shadow-low:')
      expect(css).toContain('--shadow-medium:')
      expect(css).toContain('--shadow-high:')
    })
  })

  describe('toTailwindCSS()', () => {
    it('should generate a valid @theme block', () => {
      const set = new SetDefinition()
      const tw = set.toTailwindCSS()

      expect(tw).toContain('@theme {')
      expect(tw).toContain('--color-primary: #000000;')
      expect(tw).toContain('--font-body: Arial, sans-serif;')
      expect(tw).toContain('--radius-button: 4px;')
      expect(tw).toContain('--spacing-4: 16px;')
      expect(tw).toContain('}')
    })

    it('should correctly format fonts', () => {
      const set = new SetDefinition(
        {},
        {
          bodyFont: 'Georgia',
          bodyFallback: 'serif',
          headingFont: 'Oswald',
        }
      )
      const tw = set.toTailwindCSS()

      expect(tw).toContain('--font-body: Georgia, serif;')
      expect(tw).toContain('--font-heading: Oswald;')
    })
  })

  describe('toJSON()', () => {
    it('should serialize all attributes correctly', () => {
      const set = new SetDefinition()
      const json = set.toJSON()
      const parsed = JSON.parse(json)

      expect(parsed).toHaveProperty('colors')
      expect(parsed).toHaveProperty('typography')
      expect(parsed).toHaveProperty('spacing')
      expect(parsed).toHaveProperty('radius')
      expect(parsed).toHaveProperty('shadows')
    })

    it('should produce valid JSON output', () => {
      const set = new SetDefinition()
      const json = set.toJSON()

      expect(() => JSON.parse(json)).not.toThrow()
    })

    it('should include all 5 attribute groups', () => {
      const set = new SetDefinition()
      const json = set.toJSON()
      const parsed = JSON.parse(json)

      expect(Object.keys(parsed)).toHaveLength(5)
      expect(parsed.colors).toBeDefined()
      expect(parsed.typography).toBeDefined()
      expect(parsed.spacing).toBeDefined()
      expect(parsed.radius).toBeDefined()
      expect(parsed.shadows).toBeDefined()
    })

    it('should preserve custom values in JSON', () => {
      const set = new SetDefinition({
        primary: '#CUSTOM',
      })
      const json = set.toJSON()
      const parsed = JSON.parse(json)

      expect(parsed.colors.primary).toBe('#CUSTOM')
    })

    it('should format JSON with indentation', () => {
      const set = new SetDefinition()
      const json = set.toJSON()

      // JSON.stringify with null, 2 adds indentation
      expect(json).toContain('\n  ')
    })
  })

  describe('getPrintStyles()', () => {
    it('should generate valid @media print block', () => {
      const set = new SetDefinition()
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('@media print {')
      expect(printCSS).toContain('body {')
      expect(printCSS).toContain('}')
    })

    it('should include all heading sizes h1-h6', () => {
      const set = new SetDefinition()
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('h1 {')
      expect(printCSS).toContain('h2 {')
      expect(printCSS).toContain('h3 {')
      expect(printCSS).toContain('h4 {')
      expect(printCSS).toContain('h5 {')
      expect(printCSS).toContain('h6 {')
    })

    it('should use correct typography values', () => {
      const set = new SetDefinition(
        {},
        {
          bodyFont: 'Times New Roman',
          bodySize: '14pt',
          h1Size: '28pt',
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('font-family: Times New Roman')
      expect(printCSS).toContain('font-size: 14pt')
      expect(printCSS).toContain('h1 { font-size: 28pt')
    })

    it('should reference color values correctly', () => {
      const set = new SetDefinition({
        bg: '#FAFAFA',
        text: '#222222',
      })
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('background-color: #FAFAFA')
      expect(printCSS).toContain('color: #222222')
    })

    it('should include paragraph spacing', () => {
      const set = new SetDefinition(
        {},
        {},
        {
          paragraphBefore: '8pt',
          paragraphAfter: '12pt',
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('p {')
      expect(printCSS).toContain('margin-top: 8pt')
      expect(printCSS).toContain('margin-bottom: 12pt')
    })

    it('should include list indentation', () => {
      const set = new SetDefinition(
        {},
        {},
        {
          bulletIndent: '0.5in',
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('ul, ol {')
      expect(printCSS).toContain('padding-left: 0.5in')
    })

    it('should apply lineHeightNormal to body', () => {
      const set = new SetDefinition(
        {},
        {
          lineHeightNormal: 1.8,
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('line-height: 1.8')
    })

    it('should apply lineHeightTight to headings', () => {
      const set = new SetDefinition(
        {},
        {
          lineHeightTight: 1.2,
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('h1 { font-size: 20pt; line-height: 1.2')
      expect(printCSS).toContain('h2 { font-size: 16pt; line-height: 1.2')
    })

    it('should remove box-shadow from cards in print', () => {
      const set = new SetDefinition()
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('.card {')
      expect(printCSS).toContain('box-shadow: none')
    })

    it('should apply border-radius to inputs and buttons', () => {
      const set = new SetDefinition(
        {},
        {},
        {},
        {
          input: '6px',
        }
      )
      const printCSS = set.getPrintStyles()

      expect(printCSS).toContain('input, button {')
      expect(printCSS).toContain('border-radius: 6px')
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty constructor arguments', () => {
      const set = new SetDefinition({}, {}, {}, {}, {})

      expect(set.colors).toBeDefined()
      expect(set.typography).toBeDefined()
      expect(set.spacing).toBeDefined()
      expect(set.radius).toBeDefined()
      expect(set.shadows).toBeDefined()
    })

    it('should handle color values with different formats', () => {
      const set = new SetDefinition({
        primary: 'rgb(255, 0, 0)',
        secondary: 'hsl(120, 100%, 50%)',
      })

      const css = set.toCSS()
      expect(css).toContain('--color-primary: rgb(255, 0, 0);')
      expect(css).toContain('--color-secondary: hsl(120, 100%, 50%);')
    })

    it('should handle font names with spaces', () => {
      const set = new SetDefinition(
        {},
        {
          bodyFont: 'Times New Roman',
          headingFont: 'Comic Sans MS',
        }
      )

      const css = set.toCSS()
      expect(css).toContain('--font-bodyFont: Times New Roman;')
      expect(css).toContain('--font-headingFont: Comic Sans MS;')
    })

    it('should handle numeric values as strings for typography', () => {
      const set = new SetDefinition(
        {},
        {
          lineHeightNormal: 2.0,
          lineHeightTight: 1.1,
        }
      )

      expect(typeof set.typography.lineHeightNormal).toBe('number')
      expect(typeof set.typography.lineHeightTight).toBe('number')
    })
  })
})
