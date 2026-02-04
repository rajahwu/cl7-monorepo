# @clearline7/components

Theme-aware React component library for document rendering and UI.

## Overview

The components package is **the payload** - the visible output of the ClearLine7 design system. It provides production-ready React components that automatically adapt to the active theme set.

## Categories

### Document Components

Standard document elements that form the foundation of styled content:

- `<Heading>` - H1 through H6 with theme-aware typography
- `<Paragraph>` - Body text with proper spacing and line height
- `<Blockquote>` - Styled quotations with attribution support
- `<Code>` - Inline and block code with syntax theming
- `<List>` - Ordered and unordered lists
- `<Card>` - Content containers with elevation

### UI Components

Interface elements for navigation and interaction:

- `<Button>` - Primary, secondary, and tertiary button variants
- `<Header>` - Page headers with title and subtitle
- `<Footer>` - Page footers with links and metadata
- `<Navigation>` - Responsive navigation bars

### Specimen Components

Utilities for showcasing and testing styles:

- `<SpecimenSheet>` - Display design tokens visually
- `<TypographySpecimen>` - Show font scales and weights
- `<ColorSpecimen>` - Display color palettes
- `<SpacingSpecimen>` - Visualize spacing scales

## Installation

```bash
pnpm add @clearline7/components @clearline7/theme @clearline7/set-definitions
```

## Critical Setup

⚠️ **This package requires `@clearline7/theme`'s `SetDefinitionProvider` to be present in the component tree to render styles correctly.**

```typescript
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7 } from '@clearline7/set-definitions';
import { Header, Paragraph, Button } from '@clearline7/components';

// Import CSS (required for base styles)
import '@clearline7/components/dist/index.css';

function App() {
  return (
    <SetDefinitionProvider definition={Clearline7}>
      <Header title="My Document" subtitle="Professional styling" />
      <Paragraph>
        This paragraph will automatically use Clearline7 typography tokens.
      </Paragraph>
      <Button variant="primary">Call to Action</Button>
    </SetDefinitionProvider>
  );
}
```

## Quick Start

### Basic Document

```typescript
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7 } from '@clearline7/set-definitions';
import { Heading, Paragraph, Blockquote } from '@clearline7/components';
import '@clearline7/components/dist/index.css';

function Document() {
  return (
    <SetDefinitionProvider definition={Clearline7}>
      <article>
        <Heading level={1}>Getting Started</Heading>
        <Paragraph>
          ClearLine7 components adapt to your chosen style set automatically.
        </Paragraph>
        <Blockquote author="Design System">
          Theme-aware components eliminate manual styling.
        </Blockquote>
      </article>
    </SetDefinitionProvider>
  );
}
```

### With Multiple Sets

```typescript
import { useState } from 'react';
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7, ClericalOfficePro } from '@clearline7/set-definitions';
import { Header, Button, Paragraph } from '@clearline7/components';

function App() {
  const [set, setSet] = useState(Clearline7);

  return (
    <SetDefinitionProvider definition={set}>
      <Header title="Dynamic Theming" />
      <Button onClick={() => setSet(ClericalOfficePro)}>
        Switch to Clerical Pro
      </Button>
      <Paragraph>
        This paragraph changes style when you switch sets.
      </Paragraph>
    </SetDefinitionProvider>
  );
}
```

## Component API

### `<Heading>`

```typescript
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
}
```

### `<Paragraph>`

```typescript
interface ParagraphProps {
  children: ReactNode
  variant?: 'body' | 'lead' | 'small'
  className?: string
}
```

### `<Button>`

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  children: ReactNode
}
```

### `<Blockquote>`

```typescript
interface BlockquoteProps {
  children: ReactNode
  author?: string
  source?: string
  className?: string
}
```

## CSS Import

All components require the base CSS to be imported once at your application root:

```typescript
import '@clearline7/components/dist/index.css'
```

This provides:

- CSS reset and normalization
- Base component styles
- Theme variable definitions
- Responsive breakpoints

## Peer Dependencies

- `react: ^19.0.0`
- `react-dom: ^19.0.0`
- `@clearline7/theme: workspace:*`
- `@clearline7/set-definitions: workspace:*`

## TypeScript Support

Full TypeScript definitions with prop validation and autocompletion for all components.

## Testing

Components are tested with:

- Unit tests (Vitest)
- Type checking (TypeScript)
- Coverage reports available in `coverage/`

## Related Packages

- `@clearline7/theme` - Theme context provider (required)
- `@clearline7/set-definitions` - Design token sets (required)
- `@clearline7/types` - TypeScript definitions
- `@clearline7/generators` - Document generation tools

## Package Structure

```
src/
├── document/          # Document components (Heading, Paragraph, etc.)
├── ui/                # UI components (Button, Header, etc.)
├── specimens/         # Style showcase components
└── index.ts           # Main exports
```

## Usage Notes

✅ **Always wrap with SetDefinitionProvider**: Components will not render correctly without theme context

✅ **Import CSS once**: Add the CSS import at your application root

✅ **TypeScript recommended**: Full type safety for props and theme tokens

⚠️ **Not standalone**: This package is designed to work within the ClearLine7 ecosystem
