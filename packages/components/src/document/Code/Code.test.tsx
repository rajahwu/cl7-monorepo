import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Code } from './Code'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Code', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#111827',
      accent: '#06B6D4',
      card: '#F3F4F6',
    },
    {
      monoFont: 'Courier New',
      bodySize: '16px',
    },
    {
      paragraphAfter: '16px',
      scale: {
        '4': '16px',
      },
    },
    {
      input: '4px',
    }
  )

  describe('Basic Rendering - Inline', () => {
    it('should render code tag when inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>const x = 5</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('const x = 5')
      expect(code.tagName).toBe('CODE')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>console.log('hello')</Code>
        </ThemeProvider>
      )

      expect(screen.getByText("console.log('hello')")).toBeInTheDocument()
    })

    it('should default to block when inline prop not provided', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code>block code</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('block code')
      expect(code.style.display).toBe('block')
    })
  })

  describe('Basic Rendering - Block', () => {
    it('should render pre tag when not inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>const x = 5</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('const x = 5')
      expect(code.tagName).toBe('PRE')
    })

    it('should render multiline code', () => {
      const code = `function greet() {
  console.log('Hello');
}`

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>{code}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText(/function greet/)).toBeInTheDocument()
    })
  })

  describe('Theme Styling - Inline', () => {
    it('should apply monoFont from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.fontFamily).toBe('"Courier New"')
    })

    it('should apply smaller fontSize for inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.fontSize).toBe('0.9em')
    })

    it('should apply accent color for inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.color).toBe('#06B6D4')
    })

    it('should apply card background color', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.backgroundColor).toBe('#F3F4F6')
    })

    it('should apply small padding for inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.padding).toBe('0.2em 0.4em')
    })

    it('should apply border radius from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.borderRadius).toBe('4px')
    })

    it('should use inline display', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.display).toBe('inline')
    })

    it('should have zero margin for inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.marginBottom).toBe('0px')
    })

    it('should have visible overflow for inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.overflowX).toBe('visible')
    })
  })

  describe('Theme Styling - Block', () => {
    it('should apply bodySize for block code', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.fontSize).toBe('16px')
    })

    it('should apply text color for block code', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.color).toBe('#111827')
    })

    it('should apply larger padding for block from spacing scale', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.padding).toBe('16px')
    })

    it('should use block display', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.display).toBe('block')
    })

    it('should apply marginBottom for block', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.marginBottom).toBe('16px')
    })

    it('should have auto overflow for block', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.overflowX).toBe('auto')
    })

    it('should handle fallback when spacing scale is undefined', () => {
      const themeWithoutScale = new SetDefinition({}, {}, { scale: undefined })

      render(
        <ThemeProvider setDefinition={themeWithoutScale}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.padding).toBe('16px') // Fallback value
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline style={{ marginLeft: '8px' }}>
            test
          </Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.marginLeft).toBe('8px')
      expect(code.style.fontFamily).toBe('"Courier New"') // Theme style still applies
    })

    it('should allow overriding theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline style={{ fontSize: '14px', color: 'red' }}>
            test
          </Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.fontSize).toBe('14px')
      expect(code.style.color).toBe('red')
    })

    it('should allow custom padding for block code', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false} style={{ padding: '32px' }}>
            test
          </Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.padding).toBe('32px')
    })

    it('should allow custom background color', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline style={{ backgroundColor: '#000000' }}>
            test
          </Code>
        </ThemeProvider>
      )

      const code = screen.getByText('test')
      expect(code.style.backgroundColor).toBe('#000000')
    })
  })

  describe('Different Themes', () => {
    it('should update inline styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { accent: '#FF0000', card: '#FFFFFF' },
        { monoFont: 'Monaco' }
      )
      const theme2 = new SetDefinition(
        { accent: '#00FF00', card: '#000000' },
        { monoFont: 'Consolas' }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      let code = screen.getByText('test')
      expect(code.style.color).toBe('#FF0000')
      expect(code.style.fontFamily).toBe('Monaco')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Code inline>test</Code>
        </ThemeProvider>
      )

      code = screen.getByText('test')
      expect(code.style.color).toBe('#00FF00')
      expect(code.style.fontFamily).toBe('Consolas')
    })

    it('should update block styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { text: '#000000' },
        { monoFont: 'Monaco', bodySize: '14px' }
      )
      const theme2 = new SetDefinition(
        { text: '#FFFFFF' },
        { monoFont: 'Consolas', bodySize: '18px' }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      let code = screen.getByText('test')
      expect(code.style.fontSize).toBe('14px')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Code inline={false}>test</Code>
        </ThemeProvider>
      )

      code = screen.getByText('test')
      expect(code.style.fontSize).toBe('18px')
    })
  })

  describe('Real-world Scenarios', () => {
    it('should render JavaScript code inline', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <p>
            Use <Code inline>const</Code> instead of <Code inline>var</Code>
          </p>
        </ThemeProvider>
      )

      expect(screen.getByText('const')).toBeInTheDocument()
      expect(screen.getByText('var')).toBeInTheDocument()
    })

    it('should render multi-line code block', () => {
      const codeBlock = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>{codeBlock}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText(/function fibonacci/)).toBeInTheDocument()
    })

    it('should render JSON code', () => {
      const json = `{
  "name": "test",
  "version": "1.0.0"
}`

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>{json}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText(/version/)).toBeInTheDocument()
    })

    it('should handle special characters', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline>{'<div className="test">'}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText('<div className="test">')).toBeInTheDocument()
    })

    it('should work with syntax highlighting wrapper', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>
            <span style={{ color: 'blue' }}>function</span>{' '}
            <span style={{ color: 'green' }}>test</span>()
          </Code>
        </ThemeProvider>
      )

      expect(screen.getByText('function')).toBeInTheDocument()
      expect(screen.getByText('test')).toBeInTheDocument()
    })

    it('should render empty code blocks', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}></Code>
        </ThemeProvider>
      )

      const code = container.querySelector('pre')
      expect(code).not.toBeNull()
      expect(code?.tagName).toBe('PRE')
    })
  })

  describe('Edge Cases', () => {
    it('should handle very long single-line code', () => {
      const longCode = 'const x = ' + '1'.repeat(1000)

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>{longCode}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText(/const x =/)).toBeInTheDocument()
    })

    it('should handle code with tabs and spaces', () => {
      const indentedCode = '\t\tindented code'

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Code inline={false}>{indentedCode}</Code>
        </ThemeProvider>
      )

      expect(screen.getByText(/indented code/)).toBeInTheDocument()
    })

    it('should handle inline code within text', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <p>
            The <Code inline>map()</Code> function iterates over arrays.
          </p>
        </ThemeProvider>
      )

      const code = screen.getByText('map()')
      expect(code.tagName).toBe('CODE')
      expect(code.style.display).toBe('inline')
    })
  })
})
