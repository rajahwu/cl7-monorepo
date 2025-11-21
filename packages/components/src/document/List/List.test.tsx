import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { List, ListItem } from './List'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('List', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#111827',
    },
    {
      bodyFont: 'Inter',
      bodySize: '16px',
      lineHeightNormal: 1.6,
    },
    {
      bulletIndent: '24px',
      paragraphAfter: '16px',
    }
  )

  describe('Basic Rendering - Unordered', () => {
    it('should render ul tag by default', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Item 1</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul')
      expect(list?.tagName).toBe('UL')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>First item</li>
            <li>Second item</li>
          </List>
        </ThemeProvider>
      )

      expect(screen.getByText('First item')).toBeInTheDocument()
      expect(screen.getByText('Second item')).toBeInTheDocument()
    })

    it('should render when ordered prop is false', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List ordered={false}>
            <li>Item</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul')
      expect(list?.tagName).toBe('UL')
    })
  })

  describe('Basic Rendering - Ordered', () => {
    it('should render ol tag when ordered is true', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List ordered>
            <li>Item 1</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ol')
      expect(list?.tagName).toBe('OL')
    })

    it('should render ordered list items', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List ordered>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </List>
        </ThemeProvider>
      )

      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply bodyFont from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.fontFamily).toBe('Inter')
    })

    it('should apply bodySize from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.fontSize).toBe('16px')
    })

    it('should apply lineHeightNormal from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.lineHeight).toBe('1.6')
    })

    it('should apply text color from theme', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.color).toBe('#111827')
    })

    it('should apply bulletIndent as paddingLeft', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.paddingLeft).toBe('24px')
    })

    it('should apply marginBottom from paragraphAfter', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.marginBottom).toBe('16px')
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List style={{ marginTop: '32px' }}>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.marginTop).toBe('32px')
      expect(list.style.fontFamily).toBe('Inter') // Theme style still applies
    })

    it('should allow overriding theme styles', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List style={{ fontSize: '14px', paddingLeft: '32px' }}>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.fontSize).toBe('14px')
      expect(list.style.paddingLeft).toBe('32px')
    })

    it('should allow custom list styles', () => {
      const { container } = render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List style={{ listStyleType: 'square' }}>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      const list = container.querySelector('ul') as HTMLElement
      expect(list.style.listStyleType).toBe('square')
    })
  })

  describe('Different Themes', () => {
    it('should update styles when theme changes', () => {
      const theme1 = new SetDefinition(
        { text: '#000000' },
        { bodyFont: 'Arial', bodySize: '14px' },
        { bulletIndent: '16px' }
      )
      const theme2 = new SetDefinition(
        { text: '#FFFFFF' },
        { bodyFont: 'Verdana', bodySize: '18px' },
        { bulletIndent: '32px' }
      )

      const { container, rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      let list = container.querySelector('ul') as HTMLElement
      expect(list.style.fontFamily).toBe('Arial')
      expect(list.style.fontSize).toBe('14px')
      expect(list.style.paddingLeft).toBe('16px')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <List>
            <li>Test</li>
          </List>
        </ThemeProvider>
      )

      list = container.querySelector('ul') as HTMLElement
      expect(list.style.fontFamily).toBe('Verdana')
      expect(list.style.fontSize).toBe('18px')
      expect(list.style.paddingLeft).toBe('32px')
    })
  })

  describe('Complex Lists', () => {
    it('should render nested lists', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>
              Parent item 1
              <List>
                <li>Child item 1</li>
                <li>Child item 2</li>
              </List>
            </li>
            <li>Parent item 2</li>
          </List>
        </ThemeProvider>
      )

      expect(screen.getByText('Parent item 1')).toBeInTheDocument()
      expect(screen.getByText('Child item 1')).toBeInTheDocument()
      expect(screen.getByText('Child item 2')).toBeInTheDocument()
      expect(screen.getByText('Parent item 2')).toBeInTheDocument()
    })

    it('should render mixed content in list items', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <List>
            <li>
              <strong>Bold item</strong>
            </li>
            <li>
              <a href="/test">Link item</a>
            </li>
          </List>
        </ThemeProvider>
      )

      expect(screen.getByText('Bold item')).toBeInTheDocument()
      expect(screen.getByText('Link item')).toBeInTheDocument()
    })
  })
})

describe('ListItem', () => {
  const mockSetDefinition = new SetDefinition({
    text: '#111827',
  })

  describe('Basic Rendering', () => {
    it('should render li tag', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>Test item</ListItem>
          </ul>
        </ThemeProvider>
      )

      const item = screen.getByText('Test item')
      expect(item.tagName).toBe('LI')
    })

    it('should render children content', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>Item content here</ListItem>
          </ul>
        </ThemeProvider>
      )

      expect(screen.getByText('Item content here')).toBeInTheDocument()
    })

    it('should render multiple list items', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </ul>
        </ThemeProvider>
      )

      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })
  })

  describe('Theme Styling', () => {
    it('should apply text color from theme', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>Test</ListItem>
          </ul>
        </ThemeProvider>
      )

      const item = screen.getByText('Test')
      expect(item.style.color).toBe('#111827')
    })

    it('should apply marginBottom', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>Test</ListItem>
          </ul>
        </ThemeProvider>
      )

      const item = screen.getByText('Test')
      expect(item.style.marginBottom).toBe('0.5em')
    })
  })

  describe('Custom Styles', () => {
    it('should merge custom style prop with theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem style={{ fontWeight: 'bold' }}>Test</ListItem>
          </ul>
        </ThemeProvider>
      )

      const item = screen.getByText('Test')
      expect(item.style.fontWeight).toBe('bold')
      expect(item.style.color).toBe('#111827') // Theme style still applies
    })

    it('should allow overriding theme styles', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem style={{ color: 'red', marginBottom: '1em' }}>
              Test
            </ListItem>
          </ul>
        </ThemeProvider>
      )

      const item = screen.getByText('Test')
      expect(item.style.color).toBe('red')
      expect(item.style.marginBottom).toBe('1em')
    })
  })

  describe('Different Themes', () => {
    it('should update color when theme changes', () => {
      const theme1 = new SetDefinition({ text: '#000000' })
      const theme2 = new SetDefinition({ text: '#FFFFFF' })

      const { rerender } = render(
        <ThemeProvider setDefinition={theme1}>
          <ul>
            <ListItem>Test</ListItem>
          </ul>
        </ThemeProvider>
      )

      let item = screen.getByText('Test')
      expect(item.style.color).toBe('#000000')

      rerender(
        <ThemeProvider setDefinition={theme2}>
          <ul>
            <ListItem>Test</ListItem>
          </ul>
        </ThemeProvider>
      )

      item = screen.getByText('Test')
      expect(item.style.color).toBe('#FFFFFF')
    })
  })

  describe('Complex Children', () => {
    it('should render complex children', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>
              <strong>Bold</strong> and <em>italic</em> text
            </ListItem>
          </ul>
        </ThemeProvider>
      )

      expect(screen.getByText('Bold')).toBeInTheDocument()
      expect(screen.getByText('italic')).toBeInTheDocument()
    })

    it('should render links in list items', () => {
      render(
        <ThemeProvider setDefinition={mockSetDefinition}>
          <ul>
            <ListItem>
              <a href="/test">Click here</a> for more info
            </ListItem>
          </ul>
        </ThemeProvider>
      )

      expect(screen.getByText('Click here')).toBeInTheDocument()
      expect(screen.getByText(/for more info/)).toBeInTheDocument()
    })
  })
})

describe('List + ListItem Integration', () => {
  const mockSetDefinition = new SetDefinition(
    { text: '#111827' },
    { bodyFont: 'Inter', bodySize: '16px' },
    { bulletIndent: '24px' }
  )

  it('should work together for unordered lists', () => {
    const { container } = render(
      <ThemeProvider setDefinition={mockSetDefinition}>
        <List>
          <ListItem>First item</ListItem>
          <ListItem>Second item</ListItem>
          <ListItem>Third item</ListItem>
        </List>
      </ThemeProvider>
    )

    expect(screen.getByText('First item')).toBeInTheDocument()
    expect(screen.getByText('Second item')).toBeInTheDocument()
    expect(screen.getByText('Third item')).toBeInTheDocument()

    const list = container.querySelector('ul')
    expect(list?.tagName).toBe('UL')
  })

  it('should work together for ordered lists', () => {
    const { container } = render(
      <ThemeProvider setDefinition={mockSetDefinition}>
        <List ordered>
          <ListItem>Step 1</ListItem>
          <ListItem>Step 2</ListItem>
          <ListItem>Step 3</ListItem>
        </List>
      </ThemeProvider>
    )

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()

    const list = container.querySelector('ol')
    expect(list?.tagName).toBe('OL')
  })

  it('should handle nested lists with ListItem', () => {
    render(
      <ThemeProvider setDefinition={mockSetDefinition}>
        <List>
          <ListItem>
            Parent
            <List>
              <ListItem>Child 1</ListItem>
              <ListItem>Child 2</ListItem>
            </List>
          </ListItem>
        </List>
      </ThemeProvider>
    )

    expect(screen.getByText('Parent')).toBeInTheDocument()
    expect(screen.getByText('Child 1')).toBeInTheDocument()
    expect(screen.getByText('Child 2')).toBeInTheDocument()
  })

  it('should apply consistent theme across List and ListItem', () => {
    const { container } = render(
      <ThemeProvider setDefinition={mockSetDefinition}>
        <List>
          <ListItem>Test item</ListItem>
        </List>
      </ThemeProvider>
    )

    const list = container.querySelector('ul') as HTMLElement
    const item = screen.getByText('Test item')

    expect(list.style.fontFamily).toBe('Inter')
    expect(item.style.color).toBe('#111827')
  })
})
