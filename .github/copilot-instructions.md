# ClearLine7 Monorepo - AI Coding Agent Instructions

## Project Overview

**ClearLine7** is a design system monorepo providing opinionated, governed document styling through themeable React components. The core innovation is the **SetDefinition** concept: users select one complete, opinionated "Set Definition" that governs all styling—avoiding the confusion of mixing incompatible theme elements.

### Key Architecture Decisions

- **SetDefinitionProvider** (formerly ThemeProvider): Enforces one unified theme per app. This is NOT mixing-and-matching typography/colors; it's one cohesive set. Reference: `packages/theme`
- **Components Architecture**: Separated into `document/` (content-focused) and `ui/` (application controls). The `Card` component lives in `document/` because it structures content, not application UI.
- **Single Source of Truth for Rendering**: `StandardDocTemplate` ensures web preview and generated documents (Word/PDF/Markdown) look identical. Adapter pattern in `packages/generators` converts to target formats.

## Monorepo Structure

```
packages/
├── set-definitions/     # Core tokens: 7 presets (Clearline7, BlogPosts, TechDocs, etc.)
├── theme/              # React SetDefinitionProvider + useTheme hook
├── components/         # Themeable React components (document/ + ui/)
├── generators/         # Document adapters (Word, Markdown)
└── brand-style-kit/    # Brand tokens and color definitions

apps/
├── workspace/          # Next.js app (primary workspace, uses TailwindCSS)
├── style-guide/        # Vite component showcase
├── landing/            # Vite landing page
└── preview/            # Vite live document preview tool
```

## Essential Commands

| Command              | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `pnpm install`       | Install all dependencies (uses pnpm workspaces) |
| `pnpm dev`           | Run all apps in parallel (via Turbo)            |
| `pnpm dev:workspace` | Run Next.js workspace only                      |
| `pnpm dev:guide`     | Run Vite style-guide                            |
| `pnpm test`          | Run all tests (Vitest) with coverage            |
| `pnpm build`         | Build all packages (Turbo task runner)          |
| `pnpm asset:save`    | Save brand assets (uses Bun)                    |
| `pnpm sync:colors`   | Sync colors to AI prompts                       |

**Task Runner**: Turbo manages dependency graph. Check `turbo.json` for task definitions. Tests require `^build` of dependencies.

## Testing Patterns

- **Framework**: Vitest with happy-dom environment
- **Location**: `*.test.tsx` files alongside components
- **Coverage Thresholds**: 75% lines/functions/statements (checked in CI)
- **Setup**: `vitest.setup.ts` provides React Testing Library globals
- **Aliases**: Path aliases in `vitest.config.ts` allow `@clearline7/*` imports

Example test location: `packages/components/src/document/Heading/Heading.test.tsx`

## Component Patterns

### Component Structure

```typescript
// src/document/ComponentName/
ComponentName.tsx         // Main logic
ComponentName.test.tsx    # Unit tests
style.css                # Scoped styles (CSS Modules if needed)
index.ts                 # Barrel export: export * from './ComponentName'
README.md                # Usage documentation
```

### Theming Hook Usage

```typescript
import { useTheme } from '@clearline7/theme'

export function MyComponent() {
  const theme = useTheme()
  return (
    <div style={{
      color: theme.colors.text,
      fontFamily: theme.typography.bodyFont,
      padding: theme.spacing.scale['4'],
    }}>
      Content
    </div>
  )
}
```

### SetDefinition Pattern

SetDefinitions are immutable instances with `colors`, `typography`, `spacing`, `radius`, and `shadows`. Access presets from `@clearline7/set-definitions`:

```typescript
import { Clearline7, TechDocs, BlogPosts } from '@clearline7/set-definitions'

// Pass to provider
<SetDefinitionProvider setDefinition={Clearline7}>...</SetDefinitionProvider>

// Serialize for export
const css = Clearline7.toCSS()       // CSS custom properties
const json = Clearline7.toJSON()     // JSON object
const printCSS = Clearline7.getPrintStyles()  // Print-optimized
```

## Key Files & Patterns

| File                                            | Purpose                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------- |
| `ARCHITECTURE.md`                               | Detailed decisions and diagrams                                           |
| `DESIGN_SYSTEM_SPEC.md`                         | Brand voice, color system, typography rules                               |
| `packages/set-definitions/src/SetDefinition.ts` | Core SetDefinition class with ColorAttributes, TypographyAttributes, etc. |
| `packages/components/src/index.ts`              | All component exports (barrel pattern)                                    |
| `apps/workspace/scripts/compile-theme.ts`       | Generates CSS from SetDefinition for Next.js                              |
| `vitest.config.ts` (per-package)                | Path aliases like `@clearline7/theme`                                     |

## Document Generation Workflow

1. **React App** renders content with SetDefinition styling
2. **StandardDocTemplate** ensures consistent styling
3. **Adapters** in `packages/generators` convert React structure:
   - `WordAdapter` → Word document
   - `MarkdownAdapter` → Markdown with styling
4. Result: Web preview and generated docs are pixel-perfect identical

## Naming Conventions

- **Exports**: Use named exports, barrel files (`index.ts`) re-export
- **Hooks**: `useTheme`, `useSetDefinitionCSS`
- **Components**: PascalCase (`Heading`, `H1`, `Card`)
- **Styles**: CSS Modules or inline via theme values (no BEM prefixes for themed components)
- **Files**: Match exported component name (e.g., `Heading.tsx` exports `Heading` component)

## Pre-commit Checks

- ESLint + Prettier run on staged files (lint-staged)
- Husky enforces via git hooks
- Fix automatically: `pnpm lint:fix` or use ESLint rules in `.config.js`

## Debugging Tips

1. **Theme not applying**: Ensure `SetDefinitionProvider` wraps your component tree
2. **CSS variables missing**: Run `pnpm generate:theme` (workspace) or check `toCSS()` output
3. **Test failures**: Check `vitest.setup.ts` for globals; tests run in `happy-dom` not jsdom
4. **Build failures**: Run `pnpm build` to see full dependency chain via Turbo
5. **Component not visible in style-guide**: Ensure it's exported from `packages/components/src/index.ts`

## Integration Points

- **Workspace** (Next.js): Primary app, integrates all packages, uses TailwindCSS + SetDefinition styles
- **Style-guide** (Vite): Showcases all components and preset themes
- **Preview** (Vite): Live document preview with generator output
- **Landing** (Vite): Public-facing marketing page

All apps consume packages via pnpm workspace protocol (`workspace:*` in `package.json`).

---

**Last Updated**: December 2025 | Built with Turbo + TypeScript + React 19
