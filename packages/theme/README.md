# @clearline7/theme

React context provider for theming with ClearLine7 design tokens.

## Installation

```bash
pnpm add @clearline7/theme
```

## Peer Dependencies

- React 19+

## Usage

### ThemeProvider

Wrap your application with `ThemeProvider` to make theme values available throughout your component tree.

```tsx
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

function App() {
  return (
    <ThemeProvider setDefinition={Clearline7}>
      <YourApp />
    </ThemeProvider>
  )
}
```

### useTheme Hook

Access theme values in any component.

```tsx
import { useTheme } from '@clearline7/theme'

function MyComponent() {
  const theme = useTheme()

  return (
    <div style={{
      color: theme.colors.text,
      fontFamily: theme.typography.bodyFont,
      padding: theme.spacing.scale['4'],
    }}>
      Themed content
    </div>
  )
}
```

### useSetDefinitionCSS Hook

Automatically inject CSS custom properties into the document.

```tsx
import { useSetDefinitionCSS } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

function App() {
  useSetDefinitionCSS(Clearline7)

  return (
    <div style={{ color: 'var(--cl7-color-text)' }}>
      Using CSS custom properties
    </div>
  )
}
```

## Dynamic Theme Switching

```tsx
import { useState } from 'react'
import { ThemeProvider } from '@clearline7/theme'
import { Clearline7, TechDocs, BlogPosts } from '@clearline7/set-definitions'

function App() {
  const [theme, setTheme] = useState(Clearline7)

  return (
    <ThemeProvider setDefinition={theme}>
      <button onClick={() => setTheme(TechDocs)}>
        Tech Docs Theme
      </button>
      <button onClick={() => setTheme(BlogPosts)}>
        Blog Theme
      </button>
      <YourApp />
    </ThemeProvider>
  )
}
```

## API Reference

### ThemeProvider

| Prop | Type | Description |
|------|------|-------------|
| `setDefinition` | `SetDefinition` | The theme definition to provide |
| `children` | `ReactNode` | Child components |

### useTheme

Returns the current `SetDefinition` from context.

Throws an error if used outside of `ThemeProvider`.

### useSetDefinitionCSS

| Parameter | Type | Description |
|-----------|------|-------------|
| `setDefinition` | `SetDefinition` | Theme to inject as CSS |

Injects CSS custom properties into a `<style>` element in the document head.

## Testing

```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:coverage
```

## License

ISC
