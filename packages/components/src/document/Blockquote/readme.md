# Blockquote

A styled blockquote component for displaying quotations or callouts.

## Usage

```tsx
import { Blockquote } from '@clearline7/components'

<Blockquote>
  This is a quoted passage that will be styled with theme colors and typography.
</Blockquote>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Content to display in the blockquote |
| `style` | `CSSProperties` | Custom styles to override theme defaults |

## Theming

The component uses the following theme values:

- `typography.bodyFont` - Font family
- `typography.bodySize` - Font size
- `typography.lineHeightNormal` - Line height
- `colors.muted` - Text color
- `colors.accent` - Left border color
- `spacing.scale['4']` - Left padding
- `spacing.paragraphAfter` - Bottom margin

## Example

```tsx
import { Blockquote } from '@clearline7/components'
import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

function App() {
  return (
    <SetDefinitionProvider setDefinition={Clearline7}>
      <Blockquote>
        "Design is not just what it looks like and feels like.
        Design is how it works." - Steve Jobs
      </Blockquote>
    </SetDefinitionProvider>
  )
}
```
