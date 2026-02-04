# @clearline7/set-definitions

The "Source of Truth" for ClearLine7 style sets.

## Overview

This package defines the **7 opinionated document styles** that drive the ClearLine7 design system. Each set is a complete design language with typography, colors, spacing, and layout tokens.

## The 7 Sets

1. **Clearline7** - Modern, clean technical documentation
2. **ClericalOfficePro** - Professional business correspondence
3. **ClerkRoomStandard** - Traditional administrative documents
4. **FederalFlow** - Government-compliant formatting
5. **TechDocs** - Software documentation and API references
6. **WikiGuidelines** - Collaborative knowledge base styling
7. **BlogPosts** - Editorial and content-focused layouts

## Quick Start

```typescript
import { Clearline7, ClericalOfficePro } from '@clearline7/set-definitions'

// Access design tokens
console.log(Clearline7.typography.fontFamily.body)
console.log(ClericalOfficePro.colors.primary)
```

## Important Note

⚠️ **These are raw data objects, not React components.**

Set definitions contain token values only. To use them in a React application, wrap your app with `@clearline7/theme`'s `SetDefinitionProvider`.

## Package Structure

```
src/
├── Clearline7.ts           # Modern technical docs
├── ClericalOfficePro.ts    # Business correspondence
├── ClerkRoomStandard.ts    # Administrative documents
├── FederalFlow.ts          # Government compliance
├── TechDocs.ts             # Software documentation
├── WikiGuidelines.ts       # Knowledge base
├── BlogPosts.ts            # Editorial content
└── index.ts                # Exports all sets
```

## Token Structure

Each set exports:

```typescript
{
  name: string;              // Set identifier
  typography: {
    fontFamily: {...},
    fontSize: {...},
    lineHeight: {...},
    fontWeight: {...}
  },
  colors: {
    primary: string,
    secondary: string,
    background: string,
    text: string,
    // ... more color tokens
  },
  spacing: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
    xl: string
  },
  layout: {
    maxWidth: string,
    margins: {...},
    // ... layout rules
  }
}
```

## Installation

```bash
pnpm add @clearline7/set-definitions
```

## Usage with Theme

```typescript
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7 } from '@clearline7/set-definitions';

function App() {
  return (
    <SetDefinitionProvider definition={Clearline7}>
      <YourApp />
    </SetDefinitionProvider>
  );
}
```

## Related Packages

- `@clearline7/types` - TypeScript definitions for sets
- `@clearline7/theme` - React context for using sets
- `@clearline7/components` - Components that consume sets
- `@clearline7/generators` - Document generators using sets
