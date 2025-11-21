import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { ThemeProvider } from '@clearline7/theme'
import { SetDefinition } from '@clearline7/set-definitions'

describe('Button', () => {
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
    renderWithProvider(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    renderWithProvider(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies primary variant by default', () => {
    renderWithProvider(<Button>Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: '#0066cc' })
  })

  it('applies secondary variant', () => {
    renderWithProvider(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: '#6c757d' })
  })

  it('applies outline variant', () => {
    renderWithProvider(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: 'transparent' })
  })

  it('can be disabled', () => {
    renderWithProvider(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
