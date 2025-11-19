# ClearLine7 Monorepo

A design system monorepo for creating consistent, themeable documents and React components.

## Overview

ClearLine7 provides a unified approach to styling across different output formats:
- React web components
- Microsoft Word documents
- Google Docs

## Package Structure

```
packages/
  set-definitions/   # Core design tokens and preset themes
  theme/             # React context provider for theming
  components/        # React UI components
  generators/        # Document generators (Word, Google Docs)

apps/
  style-guide/       # Interactive style guide application
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

React context provider for distributing theme values and generating CSS custom properties.

### @clearline7/components

Themeable React components:
- Heading (H1-H6)
- Paragraph
- Blockquote
- Card
- Code (inline/block)
- List/ListItem

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
