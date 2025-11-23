# ClearLine7 Monorepo

## Architecture

### Packages

- **set-definitions** - 7 opinionated document style sets
- **brand-style-kit** - CL7 product brand tokens
- **theme** - SetDefinitionProvider for React apps
- **components** - Themeable React components
  - `document/` - Document content components
  - `ui/` - Application UI components  
  - `specimens/` - Component showcase utilities
- **generators** - Document generators (Word, Google Docs)

### Apps

- **style-guide** - Interactive component documentation
- **landing** - Product landing page
- **preview** - Live document preview tool

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

## Usage

### Install dependencies
```bash
pnpm install
```

### Development
```bash
pnpm dev:guide      # Style guide
pnpm dev:landing    # Landing page
pnpm dev:preview    # Preview app
```

### Testing
```bash
pnpm test           # Run all tests
pnpm test:coverage  # With coverage
```

### Building
```bash
pnpm build          # Build all packages
```
---

## Architecture Diagram

**ASCII Diagram:**
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
│  brand-style-kit │     │                              │
└──────────────────┘     └──────────────────────────────┘
```
