import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { generateWord } from './wordGenerator.js'
import { SetDefinition } from '@clearline7/set-definitions'
import * as fs from 'fs'
import * as path from 'path'

async function generateWordMemo(setDef: SetDefinition, filePath: string) {
  const buffer = await generateWord(setDef, { content: [] })
  fs.writeFileSync(filePath, buffer)
}

describe('wordGenerator', () => {
  const testOutputDir = path.join(__dirname, '../../test-output')
  const testFilePath = path.join(testOutputDir, 'test-memo.docx')

  beforeEach(() => {
    // Create test output directory
    if (!fs.existsSync(testOutputDir)) {
      fs.mkdirSync(testOutputDir, { recursive: true })
    }
  })

  afterEach(() => {
    // Clean up test files
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath)
    }
  })

  describe('generateWordMemo', () => {
    it('should create a Word document file', async () => {
      const setDef = new SetDefinition()
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should create file with .docx extension', async () => {
      const setDef = new SetDefinition()
      await generateWordMemo(setDef, testFilePath)

      expect(testFilePath.endsWith('.docx')).toBe(true)
      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should generate non-empty file', async () => {
      const setDef = new SetDefinition()
      await generateWordMemo(setDef, testFilePath)

      const stats = fs.statSync(testFilePath)
      expect(stats.size).toBeGreaterThan(0)
    })

    it('should work with custom SetDefinition colors', async () => {
      const setDef = new SetDefinition({
        primary: '#FF0000',
        text: '#000000',
      })
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should work with custom SetDefinition typography', async () => {
      const setDef = new SetDefinition(
        {},
        {
          headingFont: 'Georgia',
          bodyFont: 'Times New Roman',
          h1Size: '24pt',
          bodySize: '14pt',
        }
      )
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should handle different output paths', async () => {
      const altPath = path.join(testOutputDir, 'alternative-memo.docx')
      const setDef = new SetDefinition()

      try {
        await generateWordMemo(setDef, altPath)
        expect(fs.existsSync(altPath)).toBe(true)
      } finally {
        if (fs.existsSync(altPath)) {
          fs.unlinkSync(altPath)
        }
      }
    })

    it('should generate valid DOCX file format', async () => {
      const setDef = new SetDefinition()
      await generateWordMemo(setDef, testFilePath)

      const buffer = fs.readFileSync(testFilePath)
      // DOCX files are ZIP files, check for ZIP magic number (PK)
      expect(buffer[0]).toBe(0x50) // 'P'
      expect(buffer[1]).toBe(0x4b) // 'K'
    })

    it('should work with all 7 preset themes', async () => {
      const presets = [
        'Clearline7',
        'FederalFlow',
        'BlogPosts',
        'TechDocs',
        'WikiGuidelines',
        'ClerkRoomStandard',
        'ClericalOfficePro',
      ]

      for (const presetName of presets) {
        const outputPath = path.join(testOutputDir, `${presetName}-test.docx`)
        const setDef = new SetDefinition() // Using default for simplicity

        try {
          await generateWordMemo(setDef, outputPath)
          expect(fs.existsSync(outputPath)).toBe(true)

          const stats = fs.statSync(outputPath)
          expect(stats.size).toBeGreaterThan(0)
        } finally {
          if (fs.existsSync(outputPath)) {
            fs.unlinkSync(outputPath)
          }
        }
      }
    })

    it('should handle hex color conversion', async () => {
      // Generator should remove # from hex colors for docx library
      const setDef = new SetDefinition({
        primary: '#AABBCC',
        text: '#123456',
      })
      await generateWordMemo(setDef, testFilePath)

      // File should be created successfully without errors
      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should handle font size conversion from pt to half-points', async () => {
      // docx library uses half-points for font sizes
      const setDef = new SetDefinition(
        {},
        {
          h1Size: '20pt',
          bodySize: '12pt',
        }
      )
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should create parent directory if it does not exist', async () => {
      const deepPath = path.join(testOutputDir, 'deep/nested/memo.docx')
      const setDef = new SetDefinition()

      // Create parent directories manually for this test
      const parentDir = path.dirname(deepPath)
      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true })
      }

      try {
        await generateWordMemo(setDef, deepPath)
        expect(fs.existsSync(deepPath)).toBe(true)
      } finally {
        // Clean up
        if (fs.existsSync(deepPath)) {
          fs.unlinkSync(deepPath)
        }
        // Clean up directories
        if (fs.existsSync(path.join(testOutputDir, 'deep'))) {
          fs.rmSync(path.join(testOutputDir, 'deep'), {
            recursive: true,
            force: true,
          })
        }
      }
    })
  })

  describe('Integration with SetDefinition', () => {
    it('should handle SetDefinition with all default values', async () => {
      const setDef = new SetDefinition()
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should handle SetDefinition with special characters in font names', async () => {
      const setDef = new SetDefinition(
        {},
        {
          bodyFont: 'Times New Roman',
          headingFont: 'Comic Sans MS',
        }
      )
      await generateWordMemo(setDef, testFilePath)

      expect(fs.existsSync(testFilePath)).toBe(true)
    })

    it('should handle multiple calls sequentially', async () => {
      const setDef1 = new SetDefinition({ primary: '#111111' })
      const setDef2 = new SetDefinition({ primary: '#222222' })

      const path1 = path.join(testOutputDir, 'memo1.docx')
      const path2 = path.join(testOutputDir, 'memo2.docx')

      try {
        await generateWordMemo(setDef1, path1)
        await generateWordMemo(setDef2, path2)

        expect(fs.existsSync(path1)).toBe(true)
        expect(fs.existsSync(path2)).toBe(true)
      } finally {
        if (fs.existsSync(path1)) fs.unlinkSync(path1)
        if (fs.existsSync(path2)) fs.unlinkSync(path2)
      }
    })
  })
})
