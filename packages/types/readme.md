# @clearline7/types

Centralized TypeScript definitions and interfaces for the ClearLine7 ecosystem.

## Overview

This package provides the foundational type definitions that power the ClearLine7 design system. It ensures type safety and IDE autocompletion across all ClearLine7 packages.

## Key Exports

### `DocumentSet`

Shape of a full style definition including typography, colors, spacing, and layout rules.

```typescript
interface DocumentSet {
  name: string
  typography: TypographyTokens
  colors: ColorTokens
  spacing: SpacingTokens
  layout: LayoutTokens
}
```

### `ComponentProps`

Base interfaces for UI element properties, ensuring consistent prop types across components.

```typescript
interface ComponentProps {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}
```

## Usage

**Internal use only.** This package is typically consumed as a dependency by other `@clearline7` packages and should not be imported directly in application code.

## Installation

```bash
pnpm add @clearline7/types
```

## Package Information

- **Type definitions only** - No runtime code
- **Zero dependencies** - Pure TypeScript interfaces
- **Workspace protocol** - Designed for monorepo consumption

## Related Packages

- `@clearline7/set-definitions` - Uses these types to define style sets
- `@clearline7/theme` - Uses these types for theme context
- `@clearline7/components` - Uses these types for component props
