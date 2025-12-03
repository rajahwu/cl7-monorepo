# Style Guide App - Todo List

> The official Clearline7 Style Guide documentation application
> Based on the "Version Zero" unified style guide specification

## Overview

This app serves as the **documentation layer** for the Clearline7 style system—covering philosophy, writing standards, grammar rules, layout guidelines, and implementation guidance.

---

## ✅ Completed

### Structure & Routing

- [x] Create `/pages/guide/` directory
- [x] Scaffold 9 guide pages (Part I–III)
- [x] Update `App.tsx` with guide routes
- [x] Restructure `Navigation.tsx` with guide sections
- [x] Create barrel export (`index.ts`)

### Pages Created

- [x] `IntroPage.tsx` — 1.0 Introduction & Scope
- [x] `PhilosophyPage.tsx` — 2.0 Branding Philosophy & Mission
- [x] `MatrixPage.tsx` — 3.0 Style Set Matrix
- [x] `WritingPage.tsx` — 4.0 Writing Style Guidelines
- [x] `GrammarPage.tsx` — 5.0 Grammar & Mechanics
- [x] `LayoutPage.tsx` — 6.0 Document Layout Rules
- [x] `TemplatesPage.tsx` — 7.0 Template & File Management
- [x] `ImplementationPage.tsx` — 8.0 Implementation Guide
- [x] `GovernancePage.tsx` — 9.0 Governance & Maintenance

---

## 🔴 P1 - Critical (Build & Verify)

- [ ] Run `pnpm dev:guide` and verify all pages render
- [ ] Fix any TypeScript/import errors
- [ ] Verify navigation links work correctly
- [ ] Test responsive behavior (nav toggle)

---

## 🟠 P2 - Styling & Polish

### Apply CL7 Design Tokens

- [ ] Create shared `GuideLayout.tsx` wrapper component
- [ ] Apply typography tokens to `<article>`, `<section>`, `<h1>`–`<h3>`
- [ ] Style tables with CL7 border/spacing tokens
- [ ] Style code blocks with mono font tokens
- [ ] Add consistent section spacing

### Navigation Enhancements

- [ ] Add "Home" link back to Overview
- [ ] Highlight current section in nav
- [ ] Add collapsible nav sections (optional)
- [ ] Mobile-responsive nav drawer

---

## 🟡 P3 - Content Enhancement

### Part I: The Style System

- [ ] Add CL7 logo/brand mark to Intro page
- [ ] Expand Philosophy with brand archetype details
- [ ] Add "Core Principle" column to Matrix table
- [ ] Link Matrix rows to individual set pages

### Part II: The Core Guide

- [ ] Add more on-brand/off-brand examples (Writing)
- [ ] Expand preferred terminology table (Grammar)
- [ ] Add visual examples of paragraph styles (Layout)
- [ ] Include citation format examples (APA, MLA, Chicago)

### Part III: Implementation

- [ ] Add downloadable .dotx template links (Templates)
- [ ] Expand React code examples (Implementation)
- [ ] Add version history/changelog section (Governance)
- [ ] Include feedback form or issue link

---

## 🟢 P4 - Part IV: Technical Reference

### Full Token Tables per Style Set

- [ ] Create `TokenTable.tsx` component
- [ ] Display all color attributes with swatches
- [ ] Display typography attributes with samples
- [ ] Display spacing scale visually
- [ ] Display radius/shadow attributes

### Enhance Set Pages

- [ ] `Clearline7Page.tsx` — Full token table + rationale
- [ ] `FederalFlowPage.tsx` — Full token table + rationale
- [ ] `ClerkRoomPage.tsx` — Full token table + rationale
- [ ] `ClericalProPage.tsx` — Full token table + rationale
- [ ] `TechDocsPage.tsx` — Full token table + rationale
- [ ] `WikiGuidelinesPage.tsx` — Full token table + rationale
- [ ] `BlogPostsPage.tsx` — Full token table + rationale

---

## 🔵 P5 - Advanced Features

### Search & Navigation

- [ ] Add search functionality (Cmd+K)
- [ ] Add breadcrumb navigation
- [ ] Add "On this page" sidebar (TOC)
- [ ] Add prev/next page navigation

### Export & Sharing

- [ ] PDF export of full guide
- [ ] Print stylesheet
- [ ] Shareable section links

### Accessibility

- [ ] Keyboard navigation
- [ ] Screen reader testing
- [ ] Color contrast validation
- [ ] Focus indicators

---

## File Structure (Target)

```
apps/style-guide/src/
├── components/
│   ├── Navigation.tsx        ✅
│   ├── GuideLayout.tsx       🔲 (wrapper for guide pages)
│   ├── TokenTable.tsx        🔲 (reusable token display)
│   └── CodeBlock.tsx         🔲 (syntax highlighted code)
├── pages/
│   ├── guide/
│   │   ├── index.ts          ✅
│   │   ├── IntroPage.tsx     ✅
│   │   ├── PhilosophyPage.tsx ✅
│   │   ├── MatrixPage.tsx    ✅
│   │   ├── WritingPage.tsx   ✅
│   │   ├── GrammarPage.tsx   ✅
│   │   ├── LayoutPage.tsx    ✅
│   │   ├── TemplatesPage.tsx ✅
│   │   ├── ImplementationPage.tsx ✅
│   │   └── GovernancePage.tsx ✅
│   ├── sets/                 ✅ (existing, needs enhancement)
│   └── Overview.tsx          ✅ (needs update to link to guide)
├── App.tsx                   ✅
└── main.tsx                  ✅
```

---

## Reference

- Perplexity Spec: "Version Zero" Unified Style Guide Outline
- Token Schemas: `packages/set-definitions/src/*.ts`
- Components: `packages/components/src/`

---

## Source Documentation

### Perplexity Spec

**"Version Zero" Unified Style Guide Outline**
https://www.perplexity.ai/search/style-guide-outline-revised-cr-HOveI3mjSii5Hicfuf1WLQ#0

This spec defines:

- Part I: The Style System (Intro, Philosophy, Matrix)
- Part II: The Core Guide (Writing, Grammar, Layout)
- Part III: Implementation & Governance
- Part IV: Technical Reference (Token Schemas for all 7 sets)

### Key Decisions from Spec

- Clearline7 is the **default/flagship** style set
- Other sets inherit from or diverge from CL7 baseline
- Token schemas cover: colors, typography, spacing, radius, shadows
- Writing style: Professional, confident, supportive voice
- Oxford comma: Yes
- Paragraph style: Space-between (offset), not first-line indent
