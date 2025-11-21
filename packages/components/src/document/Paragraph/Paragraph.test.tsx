import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Paragraph } from './Paragraph'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Paragraph', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#222222',
    },
    {
      bodyFont: 'Arial',
      bodySize: '16px',
      lineHeightNormal: 1.6,
    },
    {
      paragraphAfter: '12px',
    }
  )

  describe('Basic Rendering', () => {
    it('should render p tag', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test paragraph</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test paragraph')
      expect(paragraph.tagName).toBe('P')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>This is a test paragraph with some text.</Paragraph>
        </ThemeProvider>
      )

      expect(
        screen.getByText('This is a test paragraph with some text.')
      ).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply bodyFont from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.fontFamily).toBe('Arial')
    })

    it('should apply bodySize from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.fontSize).toBe('16px')
    })

    it('should apply lineHeightNormal from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.lineHeight).toBe('1.6')
    })

    it('should apply text color from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.color).toBe('#222222') // #222222 converted
    })

    it('should apply paragraphAfter spacing from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.marginBottom).toBe('12px')
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph style={{ marginTop: '20px' }}>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.marginTop).toBe('20px')
      expect(paragraph.style.fontFamily).toBe('Arial') // Theme style still applies
    })

    it('should allow overriding theme styles with custom styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph style={{ fontSize: '20px' }}>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.fontSize).toBe('20px') // Custom overrides theme
    })

    it('should handle multiple custom style properties', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph
            style={{
              padding: '10px',
              margin: '5px',
              textAlign: 'center',
            }}
          >
            Test
          </Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.padding).toBe('10px')
      expect(paragraph.style.margin).toBe('5px')
      expect(paragraph.style.textAlign).toBe('center')
    })

    it('should allow overriding color', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph style={{ color: 'red' }}>Test</Paragraph>
        </ThemeProvider>
      )

      const paragraph = screen.getByText('Test')
      expect(paragraph.style.color).toBe('red')
    })
  })

  describe('Different Themes', () => {
    it('should update styles when theme changes', () => {
      const theme1 = new SetDefinition(
        {},
        { bodyFont: 'Georgia', bodySize: '14px' }
      )
      const theme2 = new SetDefinition(
        {},
        { bodyFont: 'Verdana', bodySize: '18px' }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      let paragraph = screen.getByText('Test')
      expect(paragraph.style.fontFamily).toBe('Georgia')
      expect(paragraph.style.fontSize).toBe('14px')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      paragraph = screen.getByText('Test')
      expect(paragraph.style.fontFamily).toBe('Verdana')
      expect(paragraph.style.fontSize).toBe('18px')
    })

    it('should work with different line heights', () => {
      const tightTheme = new SetDefinition(
        {},
        {
          lineHeightNormal: 1.2,
        }
      )

      const looseTheme = new SetDefinition(
        {},
        {
          lineHeightNormal: 2.0,
        }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={tightTheme}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      let paragraph = screen.getByText('Test')
      expect(paragraph.style.lineHeight).toBe('1.2')

      rerender(
        <ThemeProvider setDefinition={looseTheme}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      paragraph = screen.getByText('Test')
      expect(paragraph.style.lineHeight).toBe('2')
    })

    it('should handle different spacing values', () => {
      const theme1 = new SetDefinition({}, {}, { paragraphAfter: '8pt' })
      const theme2 = new SetDefinition({}, {}, { paragraphAfter: '1rem' })

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      let paragraph = screen.getByText('Test')
      expect(paragraph.style.marginBottom).toBe('8pt')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Paragraph>Test</Paragraph>
        </ThemeProvider>
      )

      paragraph = screen.getByText('Test')
      expect(paragraph.style.marginBottom).toBe('1rem')
    })
  })

  describe('Complex Children', () => {
    it('should render complex children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>
            This is <strong>bold</strong> and <em>italic</em> text.
          </Paragraph>
        </ThemeProvider>
      )

      expect(screen.getByText('bold')).toBeInTheDocument()
      expect(screen.getByText('italic')).toBeInTheDocument()
      expect(screen.getByText(/text\./)).toBeInTheDocument()
    })

    it('should render links as children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>
            Visit our{' '}
            <a href="https://example.com" data-testid="link">
              website
            </a>
            .
          </Paragraph>
        </ThemeProvider>
      )

      const link = screen.getByTestId('link')
      expect(link).toBeInTheDocument()
      expect(link.tagName).toBe('A')
    })

    it('should render components as children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>
            <span data-testid="child-span">Child Component</span>
          </Paragraph>
        </ThemeProvider>
      )

      expect(screen.getByTestId('child-span')).toBeInTheDocument()
    })

    it('should render nested elements', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>
            Outer text
            <span>
              Middle text
              <strong>Inner text</strong>
            </span>
          </Paragraph>
        </ThemeProvider>
      )

      expect(screen.getByText('Outer text')).toBeInTheDocument()
      expect(screen.getByText('Middle text')).toBeInTheDocument()
      expect(screen.getByText('Inner text')).toBeInTheDocument()
    })
  })

  describe('Real-world Scenarios', () => {
    it('should render long paragraphs', () => {
      const longText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph>{longText}</Paragraph>
        </ThemeProvider>
      )

      expect(screen.getByText(longText)).toBeInTheDocument()
    })

    it('should render multiple paragraphs independently', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <>
            <Paragraph>First paragraph</Paragraph>
            <Paragraph>Second paragraph</Paragraph>
            <Paragraph>Third paragraph</Paragraph>
          </>
        </ThemeProvider>
      )

      expect(screen.getByText('First paragraph')).toBeInTheDocument()
      expect(screen.getByText('Second paragraph')).toBeInTheDocument()
      expect(screen.getByText('Third paragraph')).toBeInTheDocument()
    })

    it('should work with empty paragraphs', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Paragraph></Paragraph>
        </ThemeProvider>
      )

      const paragraph = container.querySelector('p')
      expect(paragraph).not.toBeNull()
      expect(paragraph?.tagName).toBe('P')
    })
  })
})
