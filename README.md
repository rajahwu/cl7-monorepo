# ClearLine7 Monorepo

A design system monorepo for creating consistent, themeable documents and React components.

## Overview

ClearLine7 provides a unified approach to styling across different output formats:
- React web components
- Microsoft Word documents
- Google Docs

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    CL7 Monorepo                         │
└─────────────────────────────────────────────────────────┘

┌──────────────────┐     ┌──────────────────────────────┐
│   Packages       │────▶│   Apps                       │
│                  │     │                              │
│ set-definitions  │     │  style-guide                 │
│       ↓          │     │  landing                     │
│    theme         │     │  preview                     │
│       ↓          │     │                              │
│  components      │     │  All apps consume packages   │
│   - document/    │     │  via workspace protocol      │
│   - ui/          │     │                              │
│   - specimens/   │     │                              │
│                  │     │                              │
│  generators      │     │                              │
└──────────────────┘     └──────────────────────────────┘
```

## Package Structure

```
packages/
  set-definitions/   # Core design tokens and 7 preset themes
  theme/             # SetDefinitionProvider for React apps
  components/        # Themeable React components
    document/        #   - Document content components
    ui/              #   - Application UI components
    specimens/       #   - Component showcase utilities
  generators/        # Document generators (Word, Google Docs)

apps/
  style-guide/       # Interactive component documentation
  landing/           # Product landing page
  preview/           # Live document preview tool
```

## Component Structure

Each component follows this pattern:

```
ComponentName/
├── index.ts           # Barrel export
├── ComponentName.tsx  # Main logic
├── style.css         # Component styles
├── motion.ts         # Animations
├── ComponentName.test.tsx
└── readme.md         # Usage docs
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

```bash
# Run all packages in dev mode
pnpm dev:all

# Run the style guide
pnpm dev:guide

# Run the preview app
pnpm dev:preview

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch
```

## Packages

### @clearline7/set-definitions

Core design tokens including colors, typography, spacing, and shadows. Includes 7 preset themes:
- Clearline7 (default)
- BlogPosts
- ClericalOfficePro
- ClerkRoomStandard
- FederalFlow
- TechDocs
- WikiGuidelines

### @clearline7/theme

React context provider (`SetDefinitionProvider`) for distributing set definition values and generating CSS custom properties.

```tsx
import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

<SetDefinitionProvider setDefinition={Clearline7}>
  <App />
</SetDefinitionProvider>
```

### @clearline7/components

Themeable React components organized by category:

**Document Components:**
- Heading (H1-H6)
- Paragraph
- Blockquote
- Card
- Code (inline/block)
- List/ListItem

**UI Components:**
- Button
- Header
- Footer
- Navigation

**Specimens:**
- SpecimenSheet (component showcase)

### @clearline7/generators

Document generators that output styled documents:
- Word document generator (using docx library)
- Google Docs generator (using Google APIs)

## Testing

The project uses Vitest for testing with comprehensive coverage:

```bash
# Run all tests
pnpm test

# Run with coverage report
pnpm test:coverage

# Interactive test UI
pnpm test:ui
```

Coverage thresholds are set at 75% for lines, functions, and statements.

## Tech Stack

- **Build System**: Turbo
- **Package Manager**: pnpm (workspaces)
- **Language**: TypeScript 5.9
- **Testing**: Vitest 4.0 with @testing-library/react
- **React**: 19.2

## License

ISC
