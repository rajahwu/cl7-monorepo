import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card } from './Card'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Card', () => {
  const mockSetDefinition = new SetDefinition(
    {
      card: '#F9FAFB',
      border: '#D1D5DB',
    },
    {},
    {
      paragraphAfter: '16px',
      scale: {
        '6': '24px',
      },
    },
    {
      card: '8px',
    },
    {
      medium: '0 2px 4px rgba(0,0,0,0.08)',
    }
  )

  describe('Basic Rendering', () => {
    it('should render div tag', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Card content</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div')
      expect(card?.tagName).toBe('DIV')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>This is card content</Card>
        </ThemeProvider>
      )

      expect(screen.getByText('This is card content')).toBeInTheDocument()
    })

    it('should render multiple children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>
            <h2>Card Title</h2>
            <p>Card description text</p>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card description text')).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply card background color from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.backgroundColor).toBe('#F9FAFB')
    })

    it('should apply border radius from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.borderRadius).toBe('8px')
    })

    it('should apply padding from spacing scale', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.padding).toBe('24px')
    })

    it('should apply marginBottom from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.marginBottom).toBe('16px')
    })

    it('should apply box shadow from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.boxShadow).toBe('0 2px 4px rgba(0,0,0,0.08)')
    })

    it('should apply border with border color from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.border).toContain('1px solid')
      expect(card.style.border).toContain('D1D5DB')
    })

    it('should handle fallback when spacing scale is undefined', () => {
      const themeWithoutScale = new SetDefinition({}, {}, { scale: undefined })

      const { container } = render(
        <ThemeProvider setDefinition={themeWithoutScale}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.padding).toBe('24px') // Fallback value
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card style={{ marginTop: '32px' }}>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.marginTop).toBe('32px')
      expect(card.style.padding).toBe('24px') // Theme style still applies
    })

    it('should allow overriding theme styles with custom styles', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card style={{ padding: '16px', backgroundColor: '#FFFFFF' }}>
            Test
          </Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.padding).toBe('16px')
      expect(card.style.backgroundColor).toBe('#FFFFFF')
    })

    it('should allow custom border radius', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card style={{ borderRadius: '16px' }}>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.borderRadius).toBe('16px')
    })

    it('should allow custom box shadow', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>Test</Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.boxShadow).toBe('0 4px 8px rgba(0,0,0,0.2)')
    })

    it('should allow multiple custom style properties', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              cursor: 'pointer',
            }}
          >
            Test
          </Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div') as HTMLElement
      expect(card.style.maxWidth).toBe('600px')
      expect(card.style.margin).toBe('0px auto')
      expect(card.style.cursor).toBe('pointer')
    })
  })

  describe('Different Themes', () => {
    it('should update styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { card: '#FFFFFF', border: '#000000' },
        {},
        {},
        { card: '4px' },
        { medium: '0 1px 2px rgba(0,0,0,0.05)' }
      )
      const theme2 = new SetDefinition(
        { card: '#000000', border: '#FFFFFF' },
        {},
        {},
        { card: '12px' },
        { medium: '0 4px 8px rgba(0,0,0,0.2)' }
      )

      const { container, rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      let card = container.querySelector('div') as HTMLElement
      expect(card.style.backgroundColor).toBe('#FFFFFF')
      expect(card.style.borderRadius).toBe('4px')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      card = container.querySelector('div') as HTMLElement
      expect(card.style.backgroundColor).toBe('#000000')
      expect(card.style.borderRadius).toBe('12px')
    })

    it('should work with different shadow values', () => {
      const theme1 = new SetDefinition({}, {}, {}, {}, { medium: 'none' })
      const theme2 = new SetDefinition(
        {},
        {},
        {},
        {},
        { medium: '0 10px 20px rgba(0,0,0,0.3)' }
      )

      const { container, rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      let card = container.querySelector('div') as HTMLElement
      expect(card.style.boxShadow).toBe('none')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <Card>Test</Card>
        </ThemeProvider>
      )

      card = container.querySelector('div') as HTMLElement
      expect(card.style.boxShadow).toBe('0 10px 20px rgba(0,0,0,0.3)')
    })
  })

  describe('Complex Children', () => {
    it('should render complex nested content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>
            <h3>Card Title</h3>
            <p>
              Card description with <strong>bold text</strong>
            </p>
            <button>Action Button</button>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('bold text')).toBeInTheDocument()
      expect(screen.getByText('Action Button')).toBeInTheDocument()
    })

    it('should render lists inside card', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('should render images inside card', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>
            <img src="/test.jpg" alt="Test image" />
            <p>Image caption</p>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByAltText('Test image')).toBeInTheDocument()
      expect(screen.getByText('Image caption')).toBeInTheDocument()
    })

    it('should render nested cards', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>
            <h2>Outer Card</h2>
            <Card>
              <p>Inner Card Content</p>
            </Card>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByText('Outer Card')).toBeInTheDocument()
      expect(screen.getByText('Inner Card Content')).toBeInTheDocument()
    })
  })

  describe('Real-world Scenarios', () => {
    it('should work as a clickable card', () => {
      const handleClick = () => {}

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card style={{ cursor: 'pointer' }}>
            <div onClick={handleClick}>Clickable content</div>
          </Card>
        </ThemeProvider>
      )

      expect(screen.getByText('Clickable content')).toBeInTheDocument()
    })

    it('should render multiple cards in a grid', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <div style={{ display: 'grid', gap: '16px' }}>
            <Card>Card 1</Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
          </div>
        </ThemeProvider>
      )

      expect(screen.getByText('Card 1')).toBeInTheDocument()
      expect(screen.getByText('Card 2')).toBeInTheDocument()
      expect(screen.getByText('Card 3')).toBeInTheDocument()
    })

    it('should work with empty content', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card></Card>
        </ThemeProvider>
      )

      const card = container.querySelector('div')
      expect(card).not.toBeNull()
      expect(card?.style.padding).toBe('24px')
    })

    it('should handle very long content', () => {
      const longContent =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(20)

      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <Card>{longContent}</Card>
        </ThemeProvider>
      )

      expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    })
  })
})
