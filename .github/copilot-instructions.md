# ClearLine7 Monorepo - AI Coding Agent Instructions

## Project Overview

**ClearLine7** is a design system monorepo providing opinionated, governed document styling through themeable React components. The core innovation is the **SetDefinition** concept: users select one complete, opinionated "Set Definition" that governs all styling—avoiding the confusion of mixing incompatible theme elements.

### Core Concept: SetDefinition

A **SetDefinition** is an immutable instance containing:

- **Colors** – palette + semantic mappings (text, backgrounds, accents)
- **Typography** – font families, scales, weights for headings/body/code
- **Spacing** – scale values (e.g., `['1', '2', '4', '8']` for rem multipliers)
- **Radius** – border-radius scale values
- **Shadows** – elevation-based shadow definitions

Users select ONE complete set that governs all document styling. There are 7 preset editions (e.g., `Clearline7`, `TechDocs`, `BlogPosts`, `FederalFlow`, `ClericalOfficePro`, `ClerkRoomStandard`, `WikiGuidelines`).

### Key Architecture Decisions

- **SetDefinitionProvider** (formerly ThemeProvider): Enforces one unified theme per app via React Context. Reference: `packages/theme/src/ThemeContext.tsx`. This is NOT mixing-and-matching typography/colors; it's one cohesive set.
- **Components Architecture**: Separated into `document/` (content-focused, e.g., Heading, Paragraph, Card) and `ui/` (application controls). The `Card` component lives in `document/` because it structures content, not application UI.
- **Single Source of Truth for Rendering**: `StandardDocTemplate` ensures web preview and generated documents (Word/PDF/Markdown) look identical. Adapter pattern in `packages/generators` converts React structures to target formats (Word, Markdown, Google Docs).

## Monorepo Structure

````
packages/
├── set-definitions/     # 7 presets (SetDefinition.ts) + editions (Clearline7, TechDocs, etc.)
│   └── src/brand-aesthetics/  # Brand-specific aesthetic instances (BoxKit, ElementSeven, TechLaw)
├── theme/              # React SetDefinitionProvider + useTheme/useSetDefinitionCSS hooks
├── components/         # Themeable React components
│   ├── document/       # Content components: Heading, H1-H6, Paragraph, Card, List, Code, Blockquote
│   ├── ui/             # Application UI components (TBD: Button, Navigation, etc.)
│   ├── specimens/      # Component showcase/preview utilities
│   ├── markdown/       # Markdown rendering components
│   └── StandardDocTemplate/  # Single source of truth for document rendering
├── generators/         # Document adapters
│   ├── WordAdapter → generateWord()  # .docx output
│   ├── MarkdownAdapter              # .md output with inline styles
│   ├── gdocsGenerator               # Google Docs API integration
│   └── styleBuilder, styleMap       # Cross-format style utilities
├── brand-style-kit/    # ClearLine7 product brand tokens + color system
└── types/              # Shared TypeScript type definitions

apps/
├── workspace/          # Next.js app (primary workspace, uses TailwindCSS + SetDefinition)
│   ├── src/app/        # Next.js app routerapp                       |
| `pnpm dev:guide`     | Run style-guide component showcase              |
| `pnpm dev:preview`   | Run document preview + generator testing        |
| `pnpm dev:landing`   | Run marketing landing page                      |
| `pnpm test`          | Run all tests with coverage (Vitest)            |
| `pnpm test:watch`    | Watch mode for active development               |
| `pnpm test:coverage` | Full coverage report                            |
| `pnpm build`         | Build all packages (Turbo dependency graph)     |
| `pnpm lint:fix`      | ESLint + Prettier (husky runs on staged files)  |
| `pnpm asset:save`    | Save brand assets (requires Bun)                |
| `pnpm asset:update`  | Update existing brand assets                    |
| `pnpm sync:colors`   | Sync colors to AI prompt files                  |

**Task Runner**: Turbo orchestrates build graph (see `turbo.json`). Key rule: tests depend on `^build` (upstream packages must build first)

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
- **Aliases**:File Structure

```typescript
// packages/components/src/document/ComponentName/
ComponentName.tsx         // Main component logic
ComponentName.test.tsx    // Unit tests (happy-dom, React Testing Library)
README.md                 // Usage docs + prop examples
index.ts                  // Barrel export: export * from './ComponentName'
style.css                 // Optional: CSS Modules or inline styles via useTheme
````

All components are exported from `packages/components/src/index.ts` (barrel pattern).

### Theming Hook Usage

Always use `useTheme()` to access the current SetDefinition:

```typescript
import { useTheme } from '@clearline7/theme'

export function MyComponent() {
  const theme = useTheme()  // Returns current SetDefinition instance
  return (
    <div style={{
      color: theme.colors.text,
      fontFamily: theme.typography.bodyFont,
      padding: `${theme.spacing.scale['4']}rem`,
    }}>
      Content
    </div>
  )
}
```

Alternative hook for CSS variable generation:

```typescript
import { useSetDefinitionCSS } from '@clearline7/theme'

export function MyComponent() {
  const cssVars = useSetDefinitionCSS()  // Returns CSS custom properties object
  return <div style={cssVars}>...</div>
}
```

### SetDefinition Instance Usage

Reference Patterns

| File                                             | Purpose                                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `ARCHITECTURE.md`                                | Detailed architectural decisions (ThemeProvider→SetDefinitionProvider rename, component categorization) |
| `DESIGN_SYSTEM_SPEC.md`                          | Brand voice, color system, typography rules, and aesthetic definitions                                  |
| `packages/set-definitions/src/SetDefinition.ts`  | Core SetDefinition class; implements `toCSS()`, `toJSON()`, `getPrintStyles()`                          |
| `packages/set-definitions/src/editions.ts`       | 7 preset editions (Clearline7, TechDocs, BlogPosts, FederalFlow, etc.)                                  |
| `packages/set-definitions/src/brand-aesthetics/` | Brand-specific aesthetic instances (BoxKit, ElementSeven, TechLaw)                                      |
| `packages/theme/src/ThemeContext.tsx`            | SetDefinitionProvider + context implementation + useTheme hook                                          |
| `packages/components/src/index.ts`               | Main barrel export of all document/ui components                                                        |
| `packages/components/src/StandardDocTemplate/`   | Single source of truth for consistent document rendering                                                |
| `packages/generators/src/WordAdapter.ts`         | Converts React structure to Word .docx format                                                           |
| `packages/generators/src/MarkdownAdapter.ts`     | Converts React structure to Markdown with inline styles                                                 |
| `packages/generators/src/gdocsGenerator.ts`      | Google Docs API integration                                                                             |
| `apps/workspace/scripts/compile-theme.ts`        | Pre-builds CSS variables from SetDefinition for Next.js                                                 |
| `vitest.config.ts` (per-package)                 | Path aliases: `@clearline7/theme`, `@clearline7/components`, etc.                                       |

// Serialize SetDefinition for export or storage
const cssVars = Clearline7.toCSS()rapped in SetDefinitionProvider + StandardDocTemplate 2. **StandardDocTemplate** applies SetDefinition styles consistently 3. **Generator Adapters** convert React AST to target formats:

- `WordAdapter` (via `generateWord()`) → `.docx` with native Word styles
- `MarkdownAdapter` → `.md` with HTML comments for styling metadata
- `gdocsGenerator` → Google Docs via API with formatting

4. **Result**: Web preview and exported documents are pixel-perfect identical in layout and typography
5. **Key**: Styles are embedded in the document format (e.g., Word native styles), not external CSS

Data flow: ReacNamed exports only; re-export through barrel files (`index.ts`)

- **Hooks**: `useTheme()` (returns SetDefinition), `useSetDefinitionCSS()` (returns CSS vars object)
- **Components**: PascalCase (`Heading`, `H1`, `Card`, `Paragraph`, `Blockquote`, `List`, `Code`)
- **Heading Levels**: Use semantic components `H1`–`H6` (not generic `Heading` with level prop in document/) for accessibility
- **Styles**: Inline via `useTheme()` hook values; CSS Modules for scoped utility styles only. No BEM prefixes.
- **Files**: Match component name (e.g., `Heading.tsx` exports `Heading` component)
- **SetDefinition Instances**: UPPERCASE (e.g., `Clearline7`, `TechDocs`, `FederalFlow`
  import { StandardDocTemplate } from '@clearline7/components'

export function MyDocument() {
return (
<StandardDocTemplate>
{/_ Content here is styled consistently across all formats _/}
<Heading level={1}>Title</Heading>
<Paragraph>Content</Paragraph>
</StandardDocTemplate>
)
}
<SetDefinitionProvider setDefinition={Clearline7}>...</SetDefinitionProvider>

// Serialize for export
const css = Clearline7.toCSS() // CSS custom properties
const json = Clearline7.toJSON() // JSON object
const printCSS = Clearline7.getPrintStyles() // Print-optimized

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
3. **Adapters** in ` & Code Quality

- **ESLint + Prettier**: Run on staged files via husky (`prepare` hook)
- **Coverage Thresholds**: 75% lines/functions/statements (enforced in CI)
- **Test Environment**: happy-dom (not jsdom) with React Testing Library globals from `vitest.setup.ts`
- **Fixes**: `pnpm lint:fix` auto-fixes ESLint + Prettier violations. Manual rule adjustments in `eslint.config.js` or `prettier.config.js`
- **Git Flow*& Troubleshooting

| Issue | Solution |
| --- | --- |
| Theme not applying | Ensure `SetDefinitionProvider` wraps component tree AND `useTheme()` is called inside provider |
| CSS variables missing | Run `pnpm build` first (CSS generation during build). Check `toCSS()` output in SetDefinition instance |
| Test failures | Ensure test runs in `happy-dom` (not jsdom). Check `vitest.setup.ts` for React Testing Library globals. Use `screen.debug()` to inspect DOM |
| Build failures | Run `pnpm build` to see Turbo dependency chain. Check `turbo.json` task definitions. Tests require `^build` of dependencies |
| Component not in style-guide | Verify export in `packages/components/src/index.ts` (barrel pattern). Check if component file has `index.ts` |
| Generator produces wrong styles | Verify `StandardDocTemplate` wraps content. Check adapter implementation (WordAdapter.ts, MarkdownAdapter.ts). Ensure SetDefinition has correct token values |
| Workspace app not hot-reloading | Kill existing process (`pnpm dev:workspace`). Ensure no TypeScript errors in watch mode. Check Next.js console |
- **Files**: Match exported component name (e.g., `Heading.tsx` exports `Heading` component)

## Pre-commit Checks

- ESLint + Prettier r & Data Flow

### Apps & Their Role

| App | Purpose | Tech | Integration |
| --- | --- | --- | --- |
| **workspace** | Primary working app, document editor/viewer | Next.js, TailwindCSS | Consumes all packages; tests generator adapters |
| **style-guide** | Interactive component documentation | Vite | Renders all components with preset SetDefinitions for showcase |
| **preview** | Live document preview + generator testing | Vite | Tests Word/Markdown generators; preview rendering before export |
| **landing** | Public marketing page | Vite | Minimal integration; demonstrates brand |

### Package Dependencies

```

apps → theme ← set-definitions
↘ components ↗ ↓
↓ generators → (adapters use set-definitions)

```

- All apps consume packages via pnpm workspace protocol (`workspace:*` in `package.json`)
- `components` depends on `theme` and `set-definitions`
- `generators` depends on `set-definitions`
- `theme` depends on `set-definitions`

### Cross-Package Communication

- **SetDefinition instances** flow from `set-definitions` → `theme` provider → components via `useTheme()` hook
- **Component props** should accept `children` and semantic HTML attributes; avoid SetDefinition coupling
- **Generators** independently instantiate adapters; they read SetDefinition for token values, not component props

---

**Last Updated**: February 2026 | Built with Turbo + TypeScript + React 19 + Vitest
## Integration Points

- **Workspace** (Next.js): Primary app, integrates all packages, uses TailwindCSS + SetDefinition styles
- **Style-guide** (Vite): Showcases all components and preset themes
- **Preview** (Vite): Live document preview with generator output
- **Landing** (Vite): Public-facing marketing page

All apps consume packages via pnpm workspace protocol (`workspace:*` in `package.json`).

---

**Last Updated**: December 2025 | Built with Turbo + TypeScript + React 19
```
