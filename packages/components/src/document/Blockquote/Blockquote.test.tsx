import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blockquote } from './Blockquote'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Blockquote', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#333333',
      muted: '#888888',
      accent: '#06B6D4',
    },
    {
      bodyFont: 'Georgia',
      bodySize: '16px',
      lineHeightNormal: 1.6,
    },
    {
      paragraphAfter: '16px',
      scale: {
        '4': '16px',
      },
    }
  )

  describe('Basic Rendering', () => {
    it('should render blockquote tag', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test quote</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test quote')
      expect(blockquote.tagName).toBe('BLOCKQUOTE')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>This is a meaningful quote from someone wise.</Blockquote>
        </ThemeProvider>
      )

      expect(
        screen.getByText('This is a meaningful quote from someone wise.')
      ).toBeInTheDocument()
    })

    it('should render multiple lines', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>
            Line one of the quote.
            <br />
            Line two of the quote.
          </Blockquote>
        </ThemeProvider>
      )

      expect(screen.getByText(/Line one of the quote/)).toBeInTheDocument()
      expect(screen.getByText(/Line two of the quote/)).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply bodyFont from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.fontFamily).toBe('Georgia')
    })

    it('should apply bodySize from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.fontSize).toBe('16px')
    })

    it('should apply lineHeightNormal from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.lineHeight).toBe('1.6')
    })

    it('should apply muted color from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.color).toBe('#888888')
    })

    it('should apply accent color border from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.borderLeft).toBe('4px solid #06B6D4')
    })

    it('should apply paddingLeft from spacing scale', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.paddingLeft).toBe('16px')
    })

    it('should apply paragraphAfter spacing from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.marginBottom).toBe('16px')
    })

    it('should apply italic font style', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.fontStyle).toBe('italic')
    })

    it('should have zero left margin', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.marginLeft).toBe('0px')
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote style={{ marginTop: '20px' }}>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.marginTop).toBe('20px')
      expect(blockquote.style.fontFamily).toBe('Georgia') // Theme style still applies
    })

    it('should allow overriding theme styles with custom styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote style={{ fontSize: '20px', color: 'red' }}>
            Test
          </Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.fontSize).toBe('20px')
      expect(blockquote.style.color).toBe('red')
    })

    it('should allow overriding border style', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote style={{ borderLeft: '2px dashed red' }}>
            Test
          </Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.borderLeft).toBe('2px dashed red')
    })

    it('should allow custom padding', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote style={{ paddingLeft: '32px' }}>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.paddingLeft).toBe('32px')
    })
  })

  describe('Different Themes', () => {
    it('should update styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { muted: '#111111', accent: '#FF0000' },
        { bodyFont: 'Arial', bodySize: '14px' }
      )
      const theme2 = new SetDefinition(
        { muted: '#999999', accent: '#00FF00' },
        { bodyFont: 'Verdana', bodySize: '18px' }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      let blockquote = screen.getByText('Test')
      expect(blockquote.style.fontFamily).toBe('Arial')
      expect(blockquote.style.fontSize).toBe('14px')
      expect(blockquote.style.color).toBe('#111111')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      blockquote = screen.getByText('Test')
      expect(blockquote.style.fontFamily).toBe('Verdana')
      expect(blockquote.style.fontSize).toBe('18px')
      expect(blockquote.style.color).toBe('#999999')
    })

    it('should handle fallback when spacing scale is undefined', () => {
      const themeWithoutScale = new SetDefinition(
        {},
        {},
        { scale: undefined }
      )

      render(
        <ThemeProvider setDefinition={themeWithoutScale}>
          <Blockquote>Test</Blockquote>
        </ThemeProvider>
      )

      const blockquote = screen.getByText('Test')
      expect(blockquote.style.paddingLeft).toBe('16px') // Fallback value
    })
  })

  describe('Complex Children', () => {
    it('should render complex children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>
            This quote has <strong>bold</strong> and <em>italic</em> text.
          </Blockquote>
        </ThemeProvider>
      )

      expect(screen.getByText('bold')).toBeInTheDocument()
      expect(screen.getByText('italic')).toBeInTheDocument()
    })

    it('should render nested elements', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>
            <p>First paragraph in quote.</p>
            <p>Second paragraph in quote.</p>
          </Blockquote>
        </ThemeProvider>
      )

      expect(screen.getByText('First paragraph in quote.')).toBeInTheDocument()
      expect(
        screen.getByText('Second paragraph in quote.')
      ).toBeInTheDocument()
    })

    it('should render citation elements', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>
            Quote text
            <cite data-testid="citation">- Author Name</cite>
          </Blockquote>
        </ThemeProvider>
      )

      expect(screen.getByTestId('citation')).toBeInTheDocument()
    })
  })

  describe('Real-world Scenarios', () => {
    it('should render long quotes', () => {
      const longQuote =
        'This is a very long quote that might span multiple lines in the rendered output. It contains several sentences and demonstrates how the component handles longer content. The styling should remain consistent throughout.'

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote>{longQuote}</Blockquote>
        </ThemeProvider>
      )

      expect(screen.getByText(longQuote)).toBeInTheDocument()
    })

    it('should render multiple blockquotes independently', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <>
            <Blockquote>First quote</Blockquote>
            <Blockquote>Second quote</Blockquote>
            <Blockquote>Third quote</Blockquote>
          </>
        </ThemeProvider>
      )

      expect(screen.getByText('First quote')).toBeInTheDocument()
      expect(screen.getByText('Second quote')).toBeInTheDocument()
      expect(screen.getByText('Third quote')).toBeInTheDocument()
    })

    it('should work with empty content', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Blockquote></Blockquote>
        </ThemeProvider>
      )

      const blockquote = container.querySelector('blockquote')
      expect(blockquote).not.toBeNull()
      expect(blockquote?.tagName).toBe('BLOCKQUOTE')
    })
  })
})
