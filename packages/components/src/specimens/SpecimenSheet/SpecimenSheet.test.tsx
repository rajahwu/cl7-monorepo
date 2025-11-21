import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SpecimenSheet } from './SpecimenSheet'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('SpecimenSheet', () => {
  const mockSetDefinition = new SetDefinition(
    {
      text: '#333333',
      background: '#ffffff',
      primary: '#0066cc',
      secondary: '#6c757d',
      accent: '#ff6b6b',
    },
    {
      headingFont: 'Georgia',
      bodyFont: 'Arial',
      h1Size: '32px',
      h2Size: '24px',
      h3Size: '20px',
      h4Size: '18px',
      h5Size: '16px',
      h6Size: '14px',
      bodySize: '16px',
      lineHeightNormal: 1.5,
      lineHeightTight: 1.2,
    },
    {
      scale: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
      },
    }
  )

  const renderWithProvider = (ui: React.ReactElement) => {
    return render(
      <ThemeProvider setDefinition={mockSetDefinition}>
        {ui}
      </ThemeProvider>
    )
  }

  it('renders with default title', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Component Specimen Sheet')).toBeInTheDocument()
  })

  it('renders with custom title', () => {
    renderWithProvider(<SpecimenSheet title="Custom Title" />)
    expect(screen.getByText('Custom Title')).toBeInTheDocument()
  })

  it('renders all typography components', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Typography Components')).toBeInTheDocument()
    expect(screen.getByText('Heading Level 1')).toBeInTheDocument()
    expect(screen.getByText('Heading Level 2')).toBeInTheDocument()
    expect(screen.getByText('Heading Level 3')).toBeInTheDocument()
  })

  it('renders list components', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Lists')).toBeInTheDocument()
    expect(screen.getByText('Unordered List')).toBeInTheDocument()
    expect(screen.getByText('Ordered List')).toBeInTheDocument()
  })

  it('renders blockquote component', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Blockquotes')).toBeInTheDocument()
  })

  it('renders code components', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('Inline Code')).toBeInTheDocument()
    expect(screen.getByText('Code Block')).toBeInTheDocument()
  })

  it('renders card component section', () => {
    renderWithProvider(<SpecimenSheet />)
    expect(screen.getByText('Card Component')).toBeInTheDocument()
  })
})
