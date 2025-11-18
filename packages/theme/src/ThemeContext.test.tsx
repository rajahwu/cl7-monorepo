import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from './ThemeContext'
import { SetDefinition } from '@clearline7/set-definitions'

describe('ThemeContext', () => {
  const mockSetDefinition = new SetDefinition({
    primary: '#FF0000',
    secondary: '#00FF00',
  })

  describe('ThemeProvider', () => {
    it('should render children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <div data-testid="child">Test Child</div>
        </ThemeProvider>
      )

      expect(screen.getByTestId('child')).toBeInTheDocument()
      expect(screen.getByText('Test Child')).toBeInTheDocument()
    })

    it('should provide setDefinition to children', () => {
      let capturedTheme: SetDefinition | null = null

      function TestComponent() {
        capturedTheme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(capturedTheme).toBe(mockSetDefinition)
    })

    it('should update theme when setDefinition prop changes', () => {
      const setDef1 = new SetDefinition({ primary: '#111111' })
      const setDef2 = new SetDefinition({ primary: '#222222' })

      let currentTheme: SetDefinition | null = null

      function TestComponent() {
        currentTheme = useTheme()
        return <div>{currentTheme.colors.primary}</div>
      }

      const { rerender } = render(
        <ThemeProvider setDefinition={setDef1}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(currentTheme?.colors.primary).toBe('#111111')

      rerender(
        <ThemeProvider setDefinition={setDef2}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(currentTheme?.colors.primary).toBe('#222222')
    })
  })

  describe('useTheme', () => {
    it('should return the setDefinition instance', () => {
      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme).toBeInstanceOf(SetDefinition)
      expect(theme).toBe(mockSetDefinition)
    })

    it('should return correct colors from theme', () => {
      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme?.colors.primary).toBe('#FF0000')
      expect(theme?.colors.secondary).toBe('#00FF00')
    })

    it('should throw error when used outside ThemeProvider', () => {
      function TestComponent() {
        useTheme()
        return <div>Test</div>
      }

      // Suppress console.error for this test
      const consoleError = console.error
      console.error = () => {}

      expect(() => {
        render(<TestComponent />)
      }).toThrow('useTheme must be used within ThemeProvider')

      console.error = consoleError
    })

    it('should provide access to typography values', () => {
      const customSetDef = new SetDefinition(
        {},
        {
          bodyFont: 'Comic Sans MS',
          h1Size: '48px',
        }
      )

      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={customSetDef}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme?.typography.bodyFont).toBe('Comic Sans MS')
      expect(theme?.typography.h1Size).toBe('48px')
    })

    it('should provide access to spacing values', () => {
      const customSetDef = new SetDefinition(
        {},
        {},
        {
          bulletIndent: '1in',
          paragraphAfter: '12pt',
        }
      )

      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={customSetDef}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme?.spacing.bulletIndent).toBe('1in')
      expect(theme?.spacing.paragraphAfter).toBe('12pt')
    })

    it('should provide access to radius values', () => {
      const customSetDef = new SetDefinition(
        {},
        {},
        {},
        {
          button: '8px',
          card: '12px',
          input: '6px',
        }
      )

      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={customSetDef}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme?.radius.button).toBe('8px')
      expect(theme?.radius.card).toBe('12px')
      expect(theme?.radius.input).toBe('6px')
    })

    it('should provide access to shadow values', () => {
      const customSetDef = new SetDefinition(
        {},
        {},
        {},
        {},
        {
          low: '0 0 4px rgba(0,0,0,0.1)',
          medium: '0 0 8px rgba(0,0,0,0.2)',
          high: '0 0 12px rgba(0,0,0,0.3)',
        }
      )

      let theme: SetDefinition | null = null

      function TestComponent() {
        theme = useTheme()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={customSetDef}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(theme?.shadows.low).toBe('0 0 4px rgba(0,0,0,0.1)')
      expect(theme?.shadows.medium).toBe('0 0 8px rgba(0,0,0,0.2)')
      expect(theme?.shadows.high).toBe('0 0 12px rgba(0,0,0,0.3)')
    })
  })

  describe('Multiple consumers', () => {
    it('should provide same theme to multiple child components', () => {
      let theme1: SetDefinition | null = null
      let theme2: SetDefinition | null = null

      function Component1() {
        theme1 = useTheme()
        return <div>Component 1</div>
      }

      function Component2() {
        theme2 = useTheme()
        return <div>Component 2</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Component1 />
          <Component2 />
        </ThemeProvider>
      )

      expect(theme1).toBe(theme2)
      expect(theme1).toBe(mockSetDefinition)
    })

    it('should provide theme to deeply nested components', () => {
      let deepTheme: SetDefinition | null = null

      function DeepComponent() {
        deepTheme = useTheme()
        return <div>Deep Component</div>
      }

      function MiddleComponent() {
        return (
          <div>
            <DeepComponent />
          </div>
        )
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <MiddleComponent />
        </ThemeProvider>
      )

      expect(deepTheme).toBe(mockSetDefinition)
    })
  })

  describe('Theme methods availability', () => {
    it('should allow calling toCSS() on theme', () => {
      let css: string = ''

      function TestComponent() {
        const theme = useTheme()
        css = theme.toCSS()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(css).toContain(':root {')
      expect(css).toContain('--color-primary: #FF0000;')
    })

    it('should allow calling toJSON() on theme', () => {
      let json: string = ''

      function TestComponent() {
        const theme = useTheme()
        json = theme.toJSON()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      const parsed = JSON.parse(json)
      expect(parsed.colors.primary).toBe('#FF0000')
    })

    it('should allow calling getPrintStyles() on theme', () => {
      let printCSS: string = ''

      function TestComponent() {
        const theme = useTheme()
        printCSS = theme.getPrintStyles()
        return <div>Test</div>
      }

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <TestComponent />
        </ThemeProvider>
      )

      expect(printCSS).toContain('@media print {')
    })
  })
})
