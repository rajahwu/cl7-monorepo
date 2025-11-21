# @clearline7/components

Themeable React UI components for the ClearLine7 design system.

## Installation

```bash
pnpm add @clearline7/components @clearline7/theme @clearline7/set-definitions
```

## Setup

Wrap your app with `ThemeProvider`:

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

## Components

### Heading

Semantic heading components with theme-aware styling.

```tsx
import { Heading, H1, H2, H3 } from '@clearline7/components'

// Using wrapper components
<H1>Page Title</H1>
<H2>Section Title</H2>
<H3>Subsection</H3>

// Using level prop
<Heading level={1}>Page Title</Heading>
<Heading level={2}>Section Title</Heading>

// Custom styles
<H1 style={{ color: 'red' }}>Custom Title</H1>
```

### Paragraph

Theme-aware paragraph component.

```tsx
import { Paragraph } from '@clearline7/components'

<Paragraph>
  This is a paragraph with theme-aware typography and spacing.
</Paragraph>

// Custom styles
<Paragraph style={{ fontWeight: 'bold' }}>
  Bold paragraph
</Paragraph>
```

### Blockquote

Styled blockquote with accent border.

```tsx
import { Blockquote } from '@clearline7/components'

<Blockquote>
  "Design is not just what it looks like and feels like.
  Design is how it works."
</Blockquote>
```

### Card

Container component with background, border, and shadow.

```tsx
import { Card } from '@clearline7/components'

<Card>
  <H2>Card Title</H2>
  <Paragraph>Card content goes here.</Paragraph>
</Card>

// Custom styles
<Card style={{ padding: '32px' }}>
  Custom padding
</Card>
```

### Code

Inline and block code display.

```tsx
import { Code } from '@clearline7/components'

// Inline code (default is block)
<Paragraph>
  Use <Code inline>const</Code> instead of <Code inline>var</Code>
</Paragraph>

// Block code
<Code inline={false}>
{`function greet(name) {
  return \`Hello, \${name}!\`;
}`}
</Code>
```

### List / ListItem

Ordered and unordered lists.

```tsx
import { List, ListItem } from '@clearline7/components'

// Unordered list
<List>
  <ListItem>First item</ListItem>
  <ListItem>Second item</ListItem>
  <ListItem>Third item</ListItem>
</List>

// Ordered list
<List ordered>
  <ListItem>Step one</ListItem>
  <ListItem>Step two</ListItem>
  <ListItem>Step three</ListItem>
</List>

// Nested lists
<List>
  <ListItem>Parent item</ListItem>
  <List>
    <ListItem>Nested item</ListItem>
  </List>
</List>
```

## Props

All components accept a `style` prop for custom CSS overrides:

```tsx
<Card style={{
  backgroundColor: '#f0f0f0',
  borderRadius: '16px'
}}>
  Custom styled card
</Card>
```

## Theming

Components automatically use values from the current theme:

- **Colors**: text, muted, accent, card, border
- **Typography**: fonts, sizes, line heights
- **Spacing**: margins, padding from scale
- **Radius**: border radius values
- **Shadows**: box shadows

## Testing

```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:coverage

# Interactive test UI
pnpm test:ui
```

## License

ISC
