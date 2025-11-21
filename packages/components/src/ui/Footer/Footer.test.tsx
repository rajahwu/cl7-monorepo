import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Footer', () => {
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

  it('renders children', () => {
    renderWithProvider(<Footer>Copyright 2025</Footer>)
    expect(screen.getByText('Copyright 2025')).toBeInTheDocument()
  })

  it('renders as footer element', () => {
    const { container } = renderWithProvider(<Footer>Content</Footer>)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
