import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { useSetDefinitionCSS } from './useSetDefinitionCSS'
import { SetDefinition } from '@clearline7/set-definitions'

describe('useSetDefinitionCSS', () => {
  beforeEach(() => {
    // Clean up any existing style elements before each test
    const existingStyles = document.getElementById('set-definition-styles')
    if (existingStyles) {
      existingStyles.remove()
    }
  })

  afterEach(() => {
    cleanup()
    // Clean up after each test
    const styleElement = document.getElementById('set-definition-styles')
    if (styleElement) {
      styleElement.remove()
    }
  })

  it('should create style element with correct ID', () => {
    const setDef = new SetDefinition()

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById('set-definition-styles')
    expect(styleElement).not.toBeNull()
    expect(styleElement?.tagName).toBe('STYLE')
  })

  it('should inject CSS into document head', () => {
    const setDef = new SetDefinition({ primary: '#FF0000' })

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement).not.toBeNull()
    expect(styleElement.textContent).toContain(':root {')
    expect(styleElement.textContent).toContain('--color-primary: #FF0000;')
  })

  it('should update styles when setDefinition changes', () => {
    const setDef1 = new SetDefinition({ primary: '#111111' })
    const setDef2 = new SetDefinition({ primary: '#222222' })

    function TestComponent({ setDef }: { setDef: SetDefinition }) {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    const { rerender } = render(<TestComponent setDef={setDef1} />)

    let styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement.textContent).toContain('--color-primary: #111111;')

    rerender(<TestComponent setDef={setDef2} />)

    styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement.textContent).toContain('--color-primary: #222222;')
    expect(styleElement.textContent).not.toContain('--color-primary: #111111;')
  })

  it('should reuse existing style element on re-mount', () => {
    const setDef = new SetDefinition()

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    const { unmount } = render(<TestComponent />)

    const firstElement = document.getElementById('set-definition-styles')
    expect(firstElement).not.toBeNull()

    unmount()

    // Re-mount the component
    render(<TestComponent />)

    const secondElement = document.getElementById('set-definition-styles')
    expect(secondElement).toBe(firstElement) // Should be the same element
  })

  it('should inject all CSS variables from setDefinition', () => {
    const setDef = new SetDefinition(
      { primary: '#CUSTOM' },
      { bodyFont: 'CustomFont' },
      { bulletIndent: '1in' },
      { button: '10px' },
      { low: '0 0 0 rgba(0,0,0,0)' }
    )

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    const css = styleElement.textContent || ''

    expect(css).toContain('--color-primary: #CUSTOM;')
    expect(css).toContain('--font-bodyFont: CustomFont;')
    expect(css).toContain('--bullet-indent: 1in;')
    expect(css).toContain('--radius-button: 10px;')
    expect(css).toContain('--shadow-low: 0 0 0 rgba(0,0,0,0);')
  })

  it('should append style element to document.head', () => {
    const setDef = new SetDefinition()

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById('set-definition-styles')
    expect(styleElement?.parentElement).toBe(document.head)
  })

  it('should handle multiple components using the same hook', () => {
    const setDef1 = new SetDefinition({ primary: '#111111' })
    const setDef2 = new SetDefinition({ primary: '#222222' })

    function Component1() {
      useSetDefinitionCSS(setDef1)
      return <div>Component 1</div>
    }

    function Component2() {
      useSetDefinitionCSS(setDef2)
      return <div>Component 2</div>
    }

    render(
      <>
        <Component1 />
        <Component2 />
      </>
    )

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    // The second component's setDefinition should win
    expect(styleElement.textContent).toContain('--color-primary: #222222;')
  })

  it('should handle rapid SetDefinition updates', () => {
    function TestComponent({ setDef }: { setDef: SetDefinition }) {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    const { rerender } = render(
      <TestComponent setDef={new SetDefinition({ primary: '#111111' })} />
    )

    // Rapid updates
    for (let i = 0; i < 10; i++) {
      rerender(
        <TestComponent
          setDef={new SetDefinition({ primary: `#${i}${i}${i}${i}${i}${i}` })}
        />
      )
    }

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement).not.toBeNull()
    expect(styleElement.textContent).toContain('--color-primary: #999999;')
  })

  it('should generate valid CSS that can be parsed', () => {
    const setDef = new SetDefinition()

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    const css = styleElement.textContent || ''

    // Basic CSS validation
    expect(css).toContain(':root {')
    expect(css.match(/{/g)?.length).toBe(css.match(/}/g)?.length)
    expect(css).toMatch(/--[\w-]+:\s*[^;]+;/g)
  })

  it('should handle SetDefinition with special characters in values', () => {
    const setDef = new SetDefinition(
      {},
      {
        bodyFont: 'Times New Roman, Georgia',
      }
    )

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    render(<TestComponent />)

    const styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement.textContent).toContain(
      '--font-bodyFont: Times New Roman, Georgia;'
    )
  })

  it('should maintain styles after component unmount', () => {
    const setDef = new SetDefinition({ primary: '#TESTCOLOR' })

    function TestComponent() {
      useSetDefinitionCSS(setDef)
      return <div>Test</div>
    }

    const { unmount } = render(<TestComponent />)

    let styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement.textContent).toContain('--color-primary: #TESTCOLOR;')

    unmount()

    // Style element should still exist after unmount
    styleElement = document.getElementById(
      'set-definition-styles'
    ) as HTMLStyleElement
    expect(styleElement).not.toBeNull()
    expect(styleElement.textContent).toContain('--color-primary: #TESTCOLOR;')
  })
})
