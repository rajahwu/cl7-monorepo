# Preview App - Todo List

> Live document preview tool for Clearline7 style sets
> Interactive specimen sheets and component demonstrations

## Overview

This app serves as the **interactive preview layer** for the Clearline7 style system—allowing users to see components rendered in real-time across different style sets, preview documents, and explore visual specimens.

---

## Current State

The `apps/preview` app exists but has minimal content. Much of the component/specimen preview functionality currently lives in `apps/style-guide` and should be migrated here.

---

## 🔴 P1 - Foundation

### Core Setup

- [x] Verify `apps/preview` builds and runs (`pnpm dev:preview`)
- [x] Review existing `src/` structure
- [x] Set up routing (if not present)
- [x] Create base layout with style set selector

### Style Set Switcher

- [x] Create `StyleSetSelector.tsx` dropdown/tabs
- [x] Wire up `SetDefinitionProvider` to switch sets dynamically
- [x] Persist selection in URL params or localStorage
- [x] Show current set name in header

---

## 🟠 P2 - Migrate from Style Guide

### Move Component Preview Pages

- [x] Migrate `BlockquotePage.tsx` → preview app
- [x] Migrate `HeadingPage.tsx` → preview app
- [x] Migrate `ParagraphPage.tsx` → preview app
- [x] Migrate `CodePage.tsx` → preview app
- [x] Migrate `ListPage.tsx` → preview app
- [x] Migrate `CardPage.tsx` → preview app
- [x] Migrate `ButtonPage.tsx` → preview app
- [x] Migrate `HeaderPage.tsx` → preview app
- [x] Migrate `FooterPage.tsx` → preview app
- [x] Migrate `NavigationPage.tsx` → preview app

### Move Specimen Sheet

- [x] Migrate `SpecimenPage.tsx` → preview app
- [x] Enhance with style set switching
- [x] Add export/download functionality

### Update Style Guide

- [x] Remove migrated pages from style-guide
- [x] Update style-guide nav to link to preview app
- [x] Keep style-guide focused on documentation only

---

## 🟡 P3 - Enhanced Previews

### Document Preview

- [ ] Create `DocumentPreview.tsx` — full page document mock
- [ ] Sample memo template
- [ ] Sample report template
- [ ] Sample technical doc template
- [ ] Side-by-side style set comparison

### Component Playground

- [ ] Interactive props editor for components
- [ ] Live code preview (like Storybook)
- [ ] Copy code snippet button
- [ ] Reset to defaults button

### Typography Specimen

- [ ] Full alphabet display (A–Z, a–z, 0–9)
- [ ] Paragraph samples at different sizes
- [ ] Heading hierarchy display
- [ ] Font stack fallback visualization

### Color Specimen

- [ ] Full palette grid with hex values
- [ ] Contrast ratio checker
- [ ] Color blindness simulation
- [ ] Copy color value buttons

### Spacing Specimen

- [ ] Visual scale representation
- [ ] Box model demonstrations
- [ ] Paragraph spacing examples
- [ ] Grid/layout examples

---

## 🟢 P4 - Export & Integration

### Document Generation

- [ ] "Export to Word" button (uses generators package)
- [ ] "Export to PDF" button
- [ ] "Export to Markdown" button
- [ ] "Copy CSS Variables" button

### Template Preview

- [ ] Load `.dotx` template info
- [ ] Show template metadata
- [ ] Download template button
- [ ] "Open in Word" deep link (if possible)

### Embed Mode

- [ ] `/embed/specimen` — embeddable specimen sheet
- [ ] `/embed/colors` — embeddable color palette
- [ ] `/embed/typography` — embeddable type specimen
- [ ] iframe-friendly styling

---

## 🔵 P5 - Advanced Features

### Comparison Mode

- [ ] Split-screen style set comparison
- [ ] Diff view for token values
- [ ] Side-by-side document rendering
- [ ] A/B testing interface

### Custom Style Set Builder

- [ ] Token editor interface
- [ ] Real-time preview
- [ ] Export custom set as JSON
- [ ] Save/load custom sets

### Print Preview

- [ ] Print-optimized stylesheet
- [ ] Paper size selection (Letter, A4)
- [ ] Margin configuration
- [ ] Print preview modal

### Accessibility Testing

- [ ] Color contrast checker per set
- [ ] Font size accessibility
- [ ] Focus state preview
- [ ] Screen reader text preview

---

## File Structure (Target)

```
apps/preview/src/
├── components/
│   ├── StyleSetSelector.tsx   🔲
│   ├── PreviewLayout.tsx      🔲
│   ├── CodeSnippet.tsx        🔲
│   └── ExportButtons.tsx      🔲
├── pages/
│   ├── SpecimenPage.tsx       🔲 (migrated)
│   ├── DocumentPreview.tsx    🔲
│   ├── components/
│   │   ├── BlockquotePage.tsx 🔲 (migrated)
│   │   ├── HeadingPage.tsx    🔲 (migrated)
│   │   ├── ParagraphPage.tsx  🔲 (migrated)
│   │   ├── CodePage.tsx       🔲 (migrated)
│   │   ├── ListPage.tsx       🔲 (migrated)
│   │   ├── CardPage.tsx       🔲 (migrated)
│   │   ├── ButtonPage.tsx     🔲 (migrated)
│   │   ├── HeaderPage.tsx     🔲 (migrated)
│   │   ├── FooterPage.tsx     🔲 (migrated)
│   │   └── NavigationPage.tsx 🔲 (migrated)
│   └── specimens/
│       ├── ColorSpecimen.tsx  🔲
│       ├── TypographySpecimen.tsx 🔲
│       └── SpacingSpecimen.tsx 🔲
├── App.tsx
└── main.tsx
```

---

## Key Differentiator from Style Guide

| Aspect      | Style Guide (`/guide`)                 | Preview (`/preview`)          |
| ----------- | -------------------------------------- | ----------------------------- |
| Purpose     | Documentation                          | Interactive exploration       |
| Content     | Rules, guidelines, rationale           | Live components, specimens    |
| Audience    | Writers, designers learning the system | Developers, designers testing |
| Interaction | Read-only reference                    | Dynamic, switchable           |
| Style Set   | Fixed to Clearline7                    | User-selectable               |

---

## Dependencies

- `@clearline7/set-definitions` — All 7 style sets
- `@clearline7/theme` — SetDefinitionProvider
- `@clearline7/components` — All document/UI components
- `@clearline7/generators` — Export functionality (Word, Markdown)

---

## Reference

- Current preview app: `apps/preview/`
- Component specimens: `packages/components/src/specimens/`
- Generators: `packages/generators/src/`

---

## Source Documentation

### Perplexity Spec

**"Version Zero" Unified Style Guide Outline**
https://www.perplexity.ai/search/style-guide-outline-revised-cr-HOveI3mjSii5Hicfuf1WLQ#0

This spec defines the complete Clearline7 style system including:

- All 7 Style Set token schemas (colors, typography, spacing, radius, shadows)
- Style Set Matrix with purpose, audience, and core principles
- Writing style guidelines and grammar rules
- Document layout conventions
- Implementation guidance for Word and React

### Token Schema Reference (from Perplexity Spec)

Each Style Set includes:

```
colors: primary, secondary, accent, success, bg, card, text, muted, border
typography: bodyFont, bodyFallback, headingFont, monoFont, sizes (body, h1-h6), lineHeight
spacing: scale (0-16), paragraphBefore, paragraphAfter, bulletIndent
radius: button, card, input
shadows: low, medium, high
```

### Style Sets Defined

1. **Clearline7** — Creative/tech marketing (flagship)
2. **Federal Flow** — Government/formal reports
3. **ClerkRoom Standard** — Office communications
4. **Clerical Office Pro** — Executive admin packages
5. **TechDocs & Code** — Developer documentation
6. **Wiki & Guidelines** — Collaborative/intranet docs
7. **Blog, Posts & Comments** — Public media content
