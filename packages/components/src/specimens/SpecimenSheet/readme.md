# SpecimenSheet

A comprehensive specimen sheet that displays all available document components with their default styling.

## Usage

```tsx
import { SpecimenSheet } from '@clearline7/components'

function App() {
  return <SpecimenSheet title="My Component Library" />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | 'Component Specimen Sheet' | The main title displayed at the top |

## Features

- Displays all typography components (H1, H2, H3, Paragraph)
- Shows ordered and unordered lists
- Demonstrates blockquote styling
- Shows inline and block code examples
- Wraps sections in Card components
- Automatically adapts to the active SetDefinition
