```markdown
# CL7 Monorepo Restructure - Work Log

**Status:** In Progress  
**Owner:** Claude (Autonomous Work)  
**Context:** Restructuring component library, renaming core concepts, extracting reusable specimens

---

## Architecture Overview

### Current State
```
packages/
├── set-definitions/      # 7 opinionated document style sets
├── theme/               # ThemeProvider (to be renamed)
├── components/          # Flat structure, only document components
├── generators/          # Word/GDocs generators
└── types/              # Shared types

apps/
├── style-guide/        # Component showcase (no navigation)
├── landing/           # Product landing page
└── playground/        # Empty (to be repurposed)
```

### Target State
```
packages/
├── set-definitions/      # 7 opinionated document style sets (unchanged)
├── brand-style-kit/      # CL7 product brand tokens (user creating)
├── theme/               # SetDefinitionProvider (renamed)
├── components/
│   ├── document/        # Document components (nested structure)
│   ├── ui/              # App UI components (new)
│   └── specimens/       # SpecimenSheet showcase component
├── generators/          # Word/GDocs generators (unchanged)
└── types/              # Shared types (unchanged)

apps/
├── style-guide/        # Component showcase (with navigation)
├── landing/           # Product landing page (unchanged for now)
└── preview/           # Live document preview tool (renamed)
```

---

## Phase 1: Renames & Foundation

### Task 1.1: Rename playground → preview
- [ ] Rename folder `apps/playground` → `apps/preview`
- [ ] Update `apps/preview/package.json`:
  ```json
  {
    "name": "@clearline7/preview",
    "private": true,
    "version": "0.0.1"
  }
  ```
- [ ] Update root `package.json` scripts:
  ```json
  {
    "scripts": {
      "dev:preview": "pnpm --filter @clearline7/preview dev"
    }
  }
  ```
- [ ] Run `pnpm install` to update workspace
- [ ] Verify: `pnpm dev:preview` should work (even if empty)

**Commands:**
```bash
cd ~/core_projects/clearline/clearline7-monorepo
mv apps/playground apps/preview
# Edit files as noted above
pnpm install
```

---

### Task 1.2: Rename ThemeProvider → SetDefinitionProvider

**Rationale:** Users select ONE complete set definition, not mixing themes. Name should reflect this constraint.

#### Files to Update

**packages/theme/src/ThemeContext.tsx**
- [ ] Rename `ThemeProvider` → `SetDefinitionProvider`
- [ ] Rename `ThemeContext` → `SetDefinitionContext`
- [ ] Keep hook name as `useTheme` OR rename to `useSetDefinition` (decide during implementation)

**packages/theme/src/index.ts**
- [ ] Update all exports to reflect new names

**packages/theme/package.json**
- [ ] Verify package name is `@clearline7/theme` (no change needed)
- [ ] Update description if needed

#### Downstream Updates

**apps/style-guide/src/App.tsx**
- [ ] Change import: `import { SetDefinitionProvider } from '@clearline7/theme'`
- [ ] Update JSX: `<SetDefinitionProvider setDefinition={Clearline7}>`

**Other files using theme:**
- [ ] Search for all `ThemeProvider` imports across repo
- [ ] Update each one

**Commands:**
```bash
cd packages/theme
# Make code changes
pnpm build
cd ../..
pnpm test  # Verify nothing broke
```

---

## Phase 2: Restructure Components Package

### Task 2.1: Create New Folder Structure

**Create directories:**
```bash
cd packages/components/src
mkdir -p document ui specimens
```

**Target structure:**
```
packages/components/src/
├── document/
│   ├── Blockquote/
│   ├── Heading/
│   ├── Paragraph/
│   ├── Code/
│   └── List/
├── ui/
│   ├── Button/
│   ├── Header/
│   ├── Footer/
│   └── Navigation/
├── specimens/
│   └── SpecimenSheet/
├── index.ts          # Main barrel export
└── [old flat files]  # Delete after migration
```

---

### Task 2.2: Extract SpecimenSheet from style-guide

**Source:** `apps/style-guide/src/pages/QABoard.tsx`

**Target:** `packages/components/src/specimens/SpecimenSheet/`

#### Steps
- [ ] Create folder: `packages/components/src/specimens/SpecimenSheet/`
- [ ] Create files:
  - `index.ts` - export { SpecimenSheet } from './SpecimenSheet'
  - `SpecimenSheet.tsx` - component logic (copied from QABoard)
  - `style.css` - component-specific styles
  - `SpecimenSheet.test.tsx` - basic render test
  - `readme.md` - usage documentation

**SpecimenSheet.tsx structure:**
```tsx
import { H1, H2, H3, Paragraph, List, ListItem, Blockquote, Code, Card } from '../document'

export function SpecimenSheet() {
  return (
    <div className="specimen-sheet">
      <H1>Component Specimen</H1>
      {/* All component examples */}
    </div>
  )
}
```

- [ ] Update `packages/components/src/index.ts` to export SpecimenSheet
- [ ] Build: `pnpm --filter @clearline7/components build`
- [ ] Update `apps/style-guide/src/pages/QABoard.tsx` to import from `@clearline7/components`

---

### Task 2.3: Migrate Blockquote Component

**Template for all component migrations:**

#### Create folder structure
```
document/Blockquote/
├── index.ts
├── Blockquote.tsx
├── style.css
├── motion.ts
├── Blockquote.test.tsx
└── readme.md
```

#### index.ts
```typescript
export { Blockquote } from './Blockquote'
export type { BlockquoteProps } from './Blockquote'
```

#### Blockquote.tsx
```typescript
import './style.css'
import { motion } from './motion'

export interface BlockquoteProps {
  children: React.ReactNode
  // ... existing props
}

export function Blockquote({ children, ...props }: BlockquoteProps) {
  // ... existing logic
}
```

#### style.css
```css
.blockquote {
  /* Component-specific styles */
}
```

#### motion.ts
```typescript
export const motion = {
  // Animation/transition configs
  fadeIn: { /* ... */ },
  slideIn: { /* ... */ }
}
```

#### Blockquote.test.tsx
```typescript
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { Blockquote } from './Blockquote'

describe('Blockquote', () => {
  it('renders children', () => {
    const { getByText } = render(<Blockquote>Test quote</Blockquote>)
    expect(getByText('Test quote')).toBeInTheDocument()
  })
})
```

#### readme.md
```markdown
# Blockquote

A styled blockquote component for displaying quotations or callouts.

## Usage

\`\`\`tsx
import { Blockquote } from '@clearline7/components'

<Blockquote>
  This is a quoted passage.
</Blockquote>
\`\`\`

## Props

- `children` - Content to display
```

#### Migration checklist for Blockquote
- [ ] Create folder structure
- [ ] Move component logic from flat file
- [ ] Extract styles to style.css
- [ ] Add motion.ts (can be empty initially)
- [ ] Update tests
- [ ] Write readme.md
- [ ] Delete old flat file
- [ ] Update exports in components/src/index.ts

---

### Task 2.4: Migrate Remaining Document Components

**Repeat Task 2.3 pattern for:**

- [ ] Heading
  - Special consideration: H1, H2, H3, H4, H5, H6 variants
- [ ] Paragraph
- [ ] Code
  - Special consideration: inline vs block variants
- [ ] List
  - Special consideration: ordered vs unordered
- [ ] Card (decide if document/ or ui/)

**After each migration:**
```bash
cd packages/components
pnpm test
pnpm build
```

---

### Task 2.5: Create New UI Components

**Components to create from scratch:**

#### Button
```
ui/Button/
├── index.ts
├── Button.tsx
├── style.css
├── motion.ts
├── Button.test.tsx
└── readme.md
```

**Button.tsx:**
```typescript
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export function Button({ 
  variant = 'primary',
  size = 'md',
  children,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      {...props}
    >
      {children}
    </button>
  )
}
```

- [ ] Create Button component
- [ ] Write tests
- [ ] Write documentation

#### Header
- [ ] Create Header component
- [ ] Add logo/branding area
- [ ] Add navigation integration
- [ ] Tests + docs

#### Footer
- [ ] Create Footer component
- [ ] Add links/copyright areas
- [ ] Tests + docs

#### Navigation
- [ ] Create Navigation component
- [ ] Add mobile responsive behavior
- [ ] Tests + docs

---

### Task 2.6: Update Component Exports

**packages/components/src/index.ts:**
```typescript
// Document Components
export * from './document/Blockquote'
export * from './document/Heading'
export * from './document/Paragraph'
export * from './document/Code'
export * from './document/List'
export * from './document/Card'

// UI Components
export * from './ui/Button'
export * from './ui/Header'
export * from './ui/Footer'
export * from './ui/Navigation'

// Specimens
export * from './specimens/SpecimenSheet'
```

**Verification:**
- [ ] All imports in apps still work
- [ ] No breaking changes to public API
- [ ] Tests pass: `pnpm --filter @clearline7/components test`
- [ ] Build succeeds: `pnpm --filter @clearline7/components build`

---

## Phase 3: Style-Guide Navigation

### Task 3.1: Create Navigation Component

**Location:** `apps/style-guide/src/components/Navigation.tsx`

**Structure:**
```tsx
export function Navigation() {
  return (
    <nav className="style-guide-nav">
      <div className="nav-section">
        <h3>Overview</h3>
        <Link to="/">Home</Link>
      </div>
      
      <div className="nav-section">
        <h3>Document Components</h3>
        <Link to="/components/blockquote">Blockquote</Link>
        <Link to="/components/heading">Heading</Link>
        <Link to="/components/paragraph">Paragraph</Link>
        <Link to="/components/code">Code</Link>
        <Link to="/components/list">List</Link>
      </div>
      
      <div className="nav-section">
        <h3>UI Components</h3>
        <Link to="/components/button">Button</Link>
        <Link to="/components/header">Header</Link>
        <Link to="/components/footer">Footer</Link>
        <Link to="/components/navigation">Navigation</Link>
      </div>
      
      <div className="nav-section">
        <h3>Style Sets</h3>
        <Link to="/sets/clearline7">Clearline 7</Link>
        <Link to="/sets/blog-posts">Blog Posts</Link>
        <Link to="/sets/clerical-pro">Clerical Pro</Link>
        <Link to="/sets/clerkroom">ClerkRoom Standard</Link>
        <Link to="/sets/federal">Federal Flow</Link>
        <Link to="/sets/techdocs">TechDocs</Link>
        <Link to="/sets/wiki">Wiki Guidelines</Link>
      </div>
      
      <div className="nav-section">
        <h3>Tools</h3>
        <Link to="/specimen">Specimen Sheet</Link>
      </div>
    </nav>
  )
}
```

- [ ] Create Navigation.tsx
- [ ] Add styling
- [ ] Make mobile responsive
- [ ] Add active link highlighting

---

### Task 3.2: Add Component Showcase Pages

**Create individual pages for each component:**

**Template:** `apps/style-guide/src/pages/components/[ComponentName].tsx`

```tsx
import { Blockquote } from '@clearline7/components'
import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

export function BlockquotePage() {
  return (
    <SetDefinitionProvider setDefinition={Clearline7}>
      <div className="component-page">
        <h1>Blockquote Component</h1>
        
        <section>
          <h2>Basic Usage</h2>
          <Blockquote>
            This is a basic blockquote example.
          </Blockquote>
        </section>
        
        <section>
          <h2>With Citation</h2>
          <Blockquote cite="Author Name">
            A quote with attribution.
          </Blockquote>
        </section>
        
        <section>
          <h2>Code</h2>
          <pre><code>{`<Blockquote>...</Blockquote>`}</code></pre>
        </section>
      </div>
    </SetDefinitionProvider>
  )
}
```

**Pages to create:**
- [ ] BlockquotePage
- [ ] HeadingPage
- [ ] ParagraphPage
- [ ] CodePage
- [ ] ListPage
- [ ] ButtonPage
- [ ] HeaderPage
- [ ] FooterPage
- [ ] NavigationPage

---

### Task 3.3: Add Style Set Comparison Pages

**Template:** `apps/style-guide/src/pages/sets/[SetName].tsx`

```tsx
import { SpecimenSheet } from '@clearline7/components'
import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7 } from '@clearline7/set-definitions'

export function Clearline7Page() {
  return (
    <div className="set-page">
      <h1>Clearline 7 Style Set</h1>
      <p>The default, balanced style set.</p>
      
      <SetDefinitionProvider setDefinition={Clearline7}>
        <SpecimenSheet />
      </SetDefinitionProvider>
    </div>
  )
}
```

**Pages to create:**
- [ ] Clearline7Page
- [ ] BlogPostsPage
- [ ] ClericalProPage
- [ ] ClerkRoomPage
- [ ] FederalFlowPage
- [ ] TechDocsPage
- [ ] WikiGuidelinesPage

---

### Task 3.4: Update App.tsx with Routes

**apps/style-guide/src/App.tsx:**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation'
import Overview from './pages/Overview'
import { BlockquotePage } from './pages/components/BlockquotePage'
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navigation />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Overview />} />
            
            {/* Component pages */}
            <Route path="/components/blockquote" element={<BlockquotePage />} />
            <Route path="/components/heading" element={<HeadingPage />} />
            {/* ... other component routes */}
            
            {/* Style set pages */}
            <Route path="/sets/clearline7" element={<Clearline7Page />} />
            <Route path="/sets/blog-posts" element={<BlogPostsPage />} />
            {/* ... other set routes */}
            
            {/* Tools */}
            <Route path="/specimen" element={<SpecimenPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
```

- [ ] Update App.tsx with all routes
- [ ] Add layout styling (sidebar + content)
- [ ] Test all routes navigate correctly

---

## Phase 4: Preview App Setup

### Task 4.1: Define Preview App Purpose

**Core Features:**
- Real-time document preview
- Style set selector/switcher
- Live editing
- Export functionality

### Task 4.2: Create Basic Structure

**apps/preview/src/App.tsx:**
```tsx
import { useState } from 'react'
import { SetDefinitionProvider } from '@clearline7/theme'
import { Clearline7, FederalFlow } from '@clearline7/set-definitions'
import { SpecimenSheet } from '@clearline7/components'

const STYLE_SETS = {
  clearline7: Clearline7,
  federal: FederalFlow,
  // ... others
}

export function App() {
  const [activeSet, setActiveSet] = useState('clearline7')
  
  return (
    <div className="preview-app">
      <aside className="preview-controls">
        <h2>Style Set</h2>
        <select 
          value={activeSet} 
          onChange={(e) => setActiveSet(e.target.value)}
        >
          {Object.keys(STYLE_SETS).map(key => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </aside>
      
      <main className="preview-content">
        <SetDefinitionProvider setDefinition={STYLE_SETS[activeSet]}>
          <SpecimenSheet />
        </SetDefinitionProvider>
      </main>
    </div>
  )
}
```

- [ ] Create basic preview app structure
- [ ] Add style set selector
- [ ] Add live preview pane
- [ ] Test switching between sets

### Task 4.3: Add Advanced Features

**Future enhancements:**
- [ ] Rich text editor integration
- [ ] Export to PDF
- [ ] Export to Word
- [ ] Shareable preview URLs

---

## Testing & Verification

### Automated Tests
- [ ] Run full test suite: `pnpm test`
- [ ] Check coverage: `pnpm test:coverage`
  - Target: >75% for all packages
- [ ] Fix any failing tests

### Manual Testing
- [ ] Test style-guide app: `pnpm dev:guide`
  - [ ] Navigate to all pages
  - [ ] Verify components render
  - [ ] Check responsive behavior
  
- [ ] Test landing app: `pnpm dev:landing`
  - [ ] Verify no regressions
  - [ ] Check edition pages
  
- [ ] Test preview app: `pnpm dev:preview`
  - [ ] Switch between style sets
  - [ ] Verify live updates

### Build Verification
- [ ] Build all packages: `pnpm build`
- [ ] Check for TypeScript errors
- [ ] Verify dist/ outputs are clean

---

## Documentation

### Task: Update Main README

**Sections to add/update:**

```markdown
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

\`\`\`
ComponentName/
├── index.ts           # Barrel export
├── ComponentName.tsx  # Main logic
├── style.css         # Component styles
├── motion.ts         # Animations
├── ComponentName.test.tsx
└── readme.md         # Usage docs
\`\`\`

## Usage

### Install dependencies
\`\`\`bash
pnpm install
\`\`\`

### Development
\`\`\`bash
pnpm dev:guide      # Style guide
pnpm dev:landing    # Landing page
pnpm dev:preview    # Preview app
\`\`\`

### Testing
\`\`\`bash
pnpm test           # Run all tests
pnpm test:coverage  # With coverage
\`\`\`

### Building
\`\`\`bash
pnpm build          # Build all packages
\`\`\`
```

- [ ] Update main README.md
- [ ] Add architecture diagram (ASCII or embedded image)
- [ ] Document SetDefinitionProvider usage
- [ ] Document component folder pattern

### Task: Create Architecture Diagram

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

- [ ] Add to main README or docs/ folder

---

## Progress Tracking

### Phase 1: Renames & Foundation
- Status: Not Started
- Estimated Time: 1 hour
- Blocker: None

### Phase 2: Restructure Components
- Status: Not Started
- Estimated Time: 4-6 hours
- Blocker: Phase 1 completion

### Phase 3: Style-Guide Navigation
- Status: Not Started
- Estimated Time: 3-4 hours
- Blocker: Phase 2 completion

### Phase 4: Preview App
- Status: Not Started
- Estimated Time: 2-3 hours
- Blocker: Phase 2 completion

---

## Notes & Decisions

### Decision Log

**2025-01-XX - SpecimenSheet Location**
- Initially considered separate `packages/specimens`
- Decided to keep in `packages/components/src/specimens/`
- Rationale: It's just a component that uses other components, no need for separate package

**2025-01-XX - Theme Rename**
- Renamed ThemeProvider → SetDefinitionProvider
- Rationale: Reinforces that users select ONE complete set, not mixing themes

### Open Questions

- [ ] Should Card component live in document/ or ui/?
- [ ] Keep useTheme hook name or rename to useSetDefinition?
- [ ] What level of mobile responsiveness for style-guide nav?

---

## Completion Checklist

Before marking complete:
- [ ] All tests passing
- [ ] All builds successful
- [ ] All three apps run independently
- [ ] Documentation updated
- [ ] No console errors in any app
- [ ] TypeScript compilation clean
- [ ] Code reviewed (if applicable)

---

**Last Updated:** 2025-01-XX  
**Next Session:** Start Phase 1
```
