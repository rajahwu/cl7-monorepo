import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StandardDocTemplate } from './StandardDocTemplate'
import { FederalFlow } from '@clearline7/set-definitions'

describe('StandardDocTemplate', () => {
  it('renders children correctly', () => {
    render(
      <StandardDocTemplate definition={FederalFlow}>
        <h1>Test Document</h1>
        <p>This is a test.</p>
      </StandardDocTemplate>
    )

    expect(screen.getByText('Test Document')).toBeInTheDocument()
    expect(screen.getByText('This is a test.')).toBeInTheDocument()
  })

  it('applies definition-based styles', () => {
    const { container } = render(
      <StandardDocTemplate definition={FederalFlow}>Content</StandardDocTemplate>
    )

    const page = container.firstChild as HTMLElement
    expect(page).toHaveClass('cl7-document-page')
    // Check if the provider injected CSS variables (indirectly check via computation if possible,
    // but jsdom might not compute vars perfectly without layout.
    // We can check if the style tag for print was rendered).

    // Check for the print style tag injection
    const styleTags = document.querySelectorAll('style')
    let foundPrintStyles = false
    styleTags.forEach((tag) => {
      if (tag.innerHTML.includes('@media print')) {
        foundPrintStyles = true
      }
    })
    expect(foundPrintStyles).toBe(true)
  })
})
