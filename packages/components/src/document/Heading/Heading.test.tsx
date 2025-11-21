import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Heading, H1, H2, H3 } from './Heading'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Heading', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#333333',
    },
    {
      headingFont: 'Georgia',
      h1Size: '32px',
      h2Size: '24px',
      h3Size: '20px',
      h4Size: '18px',
      h5Size: '16px',
      h6Size: '14px',
      lineHeightTight: 1.2,
    }
  )

  describe('Basic Rendering', () => {
    it('should render h1 tag when level is 1', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H1')
    })

    it('should render h2 tag when level is 2', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={2}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H2')
    })

    it('should render h3 tag when level is 3', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={3}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H3')
    })

    it('should render h4 tag when level is 4', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={4}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H4')
    })

    it('should render h5 tag when level is 5', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={5}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H5')
    })

    it('should render h6 tag when level is 6', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={6}>Test Heading</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test Heading')
      expect(heading.tagName).toBe('H6')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Custom Heading Text</Heading>
        </ThemeProvider>
      )

      expect(screen.getByText('Custom Heading Text')).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply headingFont from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.fontFamily).toBe('Georgia')
    })

    it('should apply correct size for h1', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.fontSize).toBe('32px')
    })

    it('should apply correct size for h2', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={2}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.fontSize).toBe('24px')
    })

    it('should apply correct size for h3', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={3}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.fontSize).toBe('20px')
    })

    it('should apply lineHeightTight from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.lineHeight).toBe('1.2')
    })

    it('should apply text color from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.color).toBe('#333333') // #333333 converted to rgb
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1} style={{ marginTop: '20px' }}>
            Test
          </Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.marginTop).toBe('20px')
      expect(heading.style.fontFamily).toBe('Georgia') // Theme style still applies
    })

    it('should allow overriding theme styles with custom styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1} style={{ fontSize: '48px' }}>
            Test
          </Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.fontSize).toBe('48px') // Custom overrides theme
    })

    it('should handle multiple custom style properties', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading
            level={1}
            style={{
              marginTop: '10px',
              marginBottom: '20px',
              padding: '5px',
            }}
          >
            Test
          </Heading>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.marginTop).toBe('10px')
      expect(heading.style.marginBottom).toBe('20px')
      expect(heading.style.padding).toBe('5px')
    })
  })

  describe('Wrapper Components', () => {
    it('H1 component should render Heading with level 1', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <H1>H1 Test</H1>
        </ThemeProvider>
      )

      const heading = screen.getByText('H1 Test')
      expect(heading.tagName).toBe('H1')
      expect(heading.style.fontSize).toBe('32px')
    })

    it('H2 component should render Heading with level 2', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <H2>H2 Test</H2>
        </ThemeProvider>
      )

      const heading = screen.getByText('H2 Test')
      expect(heading.tagName).toBe('H2')
      expect(heading.style.fontSize).toBe('24px')
    })

    it('H3 component should render Heading with level 3', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <H3>H3 Test</H3>
        </ThemeProvider>
      )

      const heading = screen.getByText('H3 Test')
      expect(heading.tagName).toBe('H3')
      expect(heading.style.fontSize).toBe('20px')
    })

    it('H1 should accept style prop', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <H1 style={{ marginTop: '30px' }}>Test</H1>
        </ThemeProvider>
      )

      const heading = screen.getByText('Test')
      expect(heading.style.marginTop).toBe('30px')
    })

    it('H2 should accept custom children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <H2>
            <span>Nested</span> Content
          </H2>
        </ThemeProvider>
      )

      expect(screen.getByText('Nested')).toBeInTheDocument()
      expect(screen.getByText('Content')).toBeInTheDocument()
    })
  })

  describe('Different Themes', () => {
    it('should update styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { text: '#000000' },
        { headingFont: 'Arial', h1Size: '24px' }
      )
      const theme2 = new SetDefinition(
        { text: '#FFFFFF' },
        { headingFont: 'Verdana', h1Size: '36px' }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      let heading = screen.getByText('Test')
      expect(heading.style.fontFamily).toBe('Arial')
      expect(heading.style.fontSize).toBe('24px')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      heading = screen.getByText('Test')
      expect(heading.style.fontFamily).toBe('Verdana')
      expect(heading.style.fontSize).toBe('36px')
    })

    it('should work with different preset themes', () => {
      const modernTheme = new SetDefinition(
        {},
        {
          headingFont: 'Inter',
          h1Size: '40px',
        }
      )

      const classicTheme = new SetDefinition(
        {},
        {
          headingFont: 'Times New Roman',
          h1Size: '28pt',
        }
      )

      const { rerender } = render(
        <ThemeProvider setDefinition={modernTheme}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      let heading = screen.getByText('Test')
      expect(heading.style.fontFamily).toBe('Inter')

      rerender(
        <ThemeProvider setDefinition={classicTheme}>
          <Heading level={1}>Test</Heading>
        </ThemeProvider>
      )

      heading = screen.getByText('Test')
      expect(heading.style.fontFamily).toBe('"Times New Roman"')
    })
  })

  describe('Complex Children', () => {
    it('should render complex children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={1}>
            <strong>Bold</strong> <em>Italic</em> Text
          </Heading>
        </ThemeProvider>
      )

      expect(screen.getByText('Bold')).toBeInTheDocument()
      expect(screen.getByText('Italic')).toBeInTheDocument()
      expect(screen.getByText('Text')).toBeInTheDocument()
    })

    it('should render components as children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Heading level={2}>
            <span data-testid="child-span">Child Component</span>
          </Heading>
        </ThemeProvider>
      )

      expect(screen.getByTestId('child-span')).toBeInTheDocument()
    })
  })
})
