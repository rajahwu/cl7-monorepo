import { describe, it, expect } from 'vitest'
import Clearline7 from './Clearline7.js'
import FederalFlow from './FederalFlow.js'
import BlogPosts from './BlogPosts.js'
import TechDocs from './TechDocs.js'
import WikiGuidelines from './WikiGuidelines.js'
import ClerkRoomStandard from './ClerkRoomStandard.js'
import ClericalOfficePro from './ClericalOfficePro.js'
import SetDefinition from './SetDefinition.js'

describe('Preset Definitions', () => {
  const presets = {
    Clearline7,
    FederalFlow,
    BlogPosts,
    TechDocs,
    WikiGuidelines,
    ClerkRoomStandard,
    ClericalOfficePro,
  }

  // Test that all presets are instances of SetDefinition
  describe('Instance Validation', () => {
    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should be an instance of SetDefinition`, () => {
        expect(preset).toBeInstanceOf(SetDefinition)
      })
    })
  })

  // Test that all presets have required color attributes
  describe('Color Attributes', () => {
    const requiredColorKeys = [
      'primary',
      'secondary',
      'accent',
      'success',
      'bg',
      'card',
      'text',
      'muted',
      'border',
    ]

    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should have all required color attributes`, () => {
        requiredColorKeys.forEach((key) => {
          expect(preset.colors).toHaveProperty(key)
          expect(preset.colors[key as keyof typeof preset.colors]).toBeTruthy()
        })
      })

      it(`${name} should have valid color values`, () => {
        Object.entries(preset.colors).forEach(([key, value]) => {
          // Color values should be strings (hex, rgb, hsl, etc.)
          expect(typeof value).toBe('string')
          expect(value.length).toBeGreaterThan(0)
        })
      })
    })
  })

  // Test that all presets have valid typography attributes
  describe('Typography Attributes', () => {
    const requiredTypographyKeys = [
      'bodyFont',
      'bodyFallback',
      'headingFont',
      'monoFont',
      'bodySize',
      'h1Size',
      'h2Size',
      'h3Size',
      'h4Size',
      'h5Size',
      'h6Size',
      'lineHeightNormal',
      'lineHeightTight',
    ]

    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should have all required typography attributes`, () => {
        requiredTypographyKeys.forEach((key) => {
          expect(preset.typography).toHaveProperty(key)
          expect(
            preset.typography[key as keyof typeof preset.typography]
          ).toBeTruthy()
        })
      })

      it(`${name} should have valid font size values with units`, () => {
        const sizeKeys = [
          'bodySize',
          'h1Size',
          'h2Size',
          'h3Size',
          'h4Size',
          'h5Size',
          'h6Size',
        ]

        sizeKeys.forEach((key) => {
          const size = preset.typography[key as keyof typeof preset.typography]
          expect(typeof size).toBe('string')
          // Should contain px, pt, rem, or em
          expect(size).toMatch(/\d+(px|pt|rem|em)/)
        })
      })

      it(`${name} should have numeric line height values`, () => {
        expect(typeof preset.typography.lineHeightNormal).toBe('number')
        expect(typeof preset.typography.lineHeightTight).toBe('number')
        expect(preset.typography.lineHeightNormal).toBeGreaterThan(1)
        expect(preset.typography.lineHeightTight).toBeGreaterThan(1)
      })
    })
  })

  // Test that all presets have valid spacing attributes
  describe('Spacing Attributes', () => {
    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should have bulletIndent`, () => {
        expect(preset.spacing.bulletIndent).toBeTruthy()
        expect(typeof preset.spacing.bulletIndent).toBe('string')
      })

      it(`${name} should have paragraphAfter`, () => {
        expect(preset.spacing.paragraphAfter).toBeTruthy()
        expect(typeof preset.spacing.paragraphAfter).toBe('string')
      })

      it(`${name} should have valid spacing scale (if defined)`, () => {
        if (preset.spacing.scale) {
          expect(typeof preset.spacing.scale).toBe('object')
          Object.entries(preset.spacing.scale).forEach(([key, value]) => {
            expect(typeof value).toBe('string')
            expect(value.length).toBeGreaterThan(0)
          })
        }
      })
    })
  })

  // Test that all presets have valid radius attributes
  describe('Radius Attributes', () => {
    const requiredRadiusKeys = ['button', 'card', 'input']

    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should have all required radius attributes`, () => {
        requiredRadiusKeys.forEach((key) => {
          expect(preset.radius).toHaveProperty(key)
          expect(preset.radius[key as keyof typeof preset.radius]).toBeTruthy()
        })
      })

      it(`${name} should have valid radius values`, () => {
        Object.entries(preset.radius).forEach(([key, value]) => {
          expect(typeof value).toBe('string')
          // Should contain px, rem, em, or %
          expect(value).toMatch(/\d+(px|rem|em|%)/)
        })
      })
    })
  })

  // Test that all presets have valid shadow attributes
  describe('Shadow Attributes', () => {
    const requiredShadowKeys = ['low', 'medium', 'high']

    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should have all required shadow attributes`, () => {
        requiredShadowKeys.forEach((key) => {
          expect(preset.shadows).toHaveProperty(key)
          expect(
            preset.shadows[key as keyof typeof preset.shadows]
          ).toBeTruthy()
        })
      })

      it(`${name} should have valid CSS shadow values`, () => {
        Object.entries(preset.shadows).forEach(([key, value]) => {
          expect(typeof value).toBe('string')
          expect(value.length).toBeGreaterThan(0)
          // Should contain px or rem for offset values
          expect(value).toMatch(/\d+(px|rem)/)
          // Should contain rgba for shadow color (or none for no shadow)
          expect(value).toMatch(/rgba|none/)
        })
      })
    })
  })

  // Test that presets can generate CSS
  describe('CSS Generation', () => {
    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should generate valid CSS`, () => {
        const css = preset.toCSS()
        expect(css).toContain(':root {')
        expect(css).toContain('--color-primary:')
        expect(css).toContain('--font-bodyFont:')
        expect(css).toContain('--radius-button:')
        expect(css).toContain('--shadow-low:')
        expect(css).toContain('}')
      })

      it(`${name} CSS should not have syntax errors`, () => {
        const css = preset.toCSS()
        // Basic CSS syntax validation
        const openBraces = (css.match(/{/g) || []).length
        const closeBraces = (css.match(/}/g) || []).length
        expect(openBraces).toBe(closeBraces)
      })
    })
  })

  // Test that presets can generate JSON
  describe('JSON Serialization', () => {
    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should generate valid JSON`, () => {
        const json = preset.toJSON()
        expect(() => JSON.parse(json)).not.toThrow()
      })

      it(`${name} JSON should contain all attribute groups`, () => {
        const json = preset.toJSON()
        const parsed = JSON.parse(json)
        expect(parsed).toHaveProperty('colors')
        expect(parsed).toHaveProperty('typography')
        expect(parsed).toHaveProperty('spacing')
        expect(parsed).toHaveProperty('radius')
        expect(parsed).toHaveProperty('shadows')
      })
    })
  })

  // Test that presets can generate print styles
  describe('Print Styles Generation', () => {
    Object.entries(presets).forEach(([name, preset]) => {
      it(`${name} should generate valid print styles`, () => {
        const printCSS = preset.getPrintStyles()
        expect(printCSS).toContain('@media print {')
        expect(printCSS).toContain('body {')
        expect(printCSS).toContain('h1 {')
        expect(printCSS).toContain('p {')
        expect(printCSS).toContain('}')
      })

      it(`${name} print styles should not have syntax errors`, () => {
        const printCSS = preset.getPrintStyles()
        // Basic CSS syntax validation
        const openBraces = (printCSS.match(/{/g) || []).length
        const closeBraces = (printCSS.match(/}/g) || []).length
        expect(openBraces).toBe(closeBraces)
      })
    })
  })

  // Test specific presets for their unique characteristics
  describe('Preset-Specific Characteristics', () => {
    it('Clearline7 should use Inter font', () => {
      expect(Clearline7.typography.bodyFont).toBe('Inter')
      expect(Clearline7.typography.headingFont).toBe('Inter')
    })

    it('FederalFlow should use Times New Roman/Georgia fonts', () => {
      expect(FederalFlow.typography.bodyFont).toBe('Times New Roman')
      expect(FederalFlow.typography.headingFont).toBe('Georgia')
    })

    it('Clearline7 should use modern blue primary color', () => {
      expect(Clearline7.colors.primary).toBe('#3B82F6')
    })

    it('FederalFlow should use formal dark blue primary color', () => {
      expect(FederalFlow.colors.primary).toBe('#1B3A6B')
    })

    it('Clearline7 should have larger font sizes (pixels)', () => {
      expect(Clearline7.typography.bodySize).toContain('px')
      expect(parseInt(Clearline7.typography.bodySize)).toBeGreaterThanOrEqual(
        16
      )
    })

    it('FederalFlow should use print-friendly font sizes (points)', () => {
      expect(FederalFlow.typography.bodySize).toContain('pt')
    })
  })

  // Test preset uniqueness
  describe('Preset Uniqueness', () => {
    it('all presets should have unique primary colors', () => {
      const primaryColors = Object.values(presets).map((p) => p.colors.primary)
      const uniqueColors = new Set(primaryColors)
      expect(uniqueColors.size).toBe(primaryColors.length)
    })

    it('presets should have different style characteristics', () => {
      // Ensure we have variety in the design system
      const bodyFonts = Object.values(presets).map((p) => p.typography.bodyFont)
      const uniqueFonts = new Set(bodyFonts)
      // Should have at least 3 different body fonts across 7 presets
      expect(uniqueFonts.size).toBeGreaterThanOrEqual(3)
    })
  })
})
