# Component Audit Checklist: Clearline7 Monorepo

**Objective:** Verify that every component exported from `packages/components` has a corresponding, functional test page in the `preview` app. This ensures the `preview` app remains the "Source of Truth" for visual regression and functionality testing.

**Last Verified:** 2025-12-04 by Claude Agent

## 1. Document Primitives

_Core building blocks for document rendering._

|                    |                                       |                                           |            |
| ------------------ | ------------------------------------- | ----------------------------------------- | ---------- |
| **Component Name** | **Source Path (packages/components)** | **Preview Page (apps/preview)**           | **Status** |
| **Blockquote**     | `src/document/Blockquote/`            | `src/pages/components/BlockquotePage.tsx` | [x]        |
| **Card**           | `src/document/Card/`                  | `src/pages/components/CardPage.tsx`       | [x]        |
| **Code**           | `src/document/Code/`                  | `src/pages/components/CodePage.tsx`       | [x]        |
| **Heading**        | `src/document/Heading/`               | `src/pages/components/HeadingPage.tsx`    | [x]        |
| **List**           | `src/document/List/`                  | `src/pages/components/ListPage.tsx`       | [x]        |
| **Paragraph**      | `src/document/Paragraph/`             | `src/pages/components/ParagraphPage.tsx`  | [x]        |

**Agent Inspection Tasks:**

- [x] Verify `Preview Page` imports the component from `@clearline7/components` (not a relative path).
- [x] Verify all major variants (e.g., list types, heading levels) are rendered.

## 2. UI Primitives

_Components used for the application interface._

|                    |                                       |                                           |            |
| ------------------ | ------------------------------------- | ----------------------------------------- | ---------- |
| **Component Name** | **Source Path (packages/components)** | **Preview Page (apps/preview)**           | **Status** |
| **Button**         | `src/ui/Button/`                      | `src/pages/components/ButtonPage.tsx`     | [x]        |
| **Footer**         | `src/ui/Footer/`                      | `src/pages/components/FooterPage.tsx`     | [x]        |
| **Header**         | `src/ui/Header/`                      | `src/pages/components/HeaderPage.tsx`     | [x]        |
| **Navigation**     | `src/ui/Navigation/`                  | `src/pages/components/NavigationPage.tsx` | [x]        |

**Agent Inspection Tasks:**

- [x] Check interactive states (Hover, Active, Focus) are visualizable.
- [x] Verify responsive behavior (Does Navigation collapse on mobile?).

## 3. Templates & Utilities (Gap Analysis)

_High-level layouts or helper components that may be missing a direct preview page._

|                         |                                |                                             |            |
| ----------------------- | ------------------------------ | ------------------------------------------- | ---------- |
| **Component Name**      | **Source Path**                | **Expected Usage / Preview Location**       | **Status** |
| **StandardDocTemplate** | `src/StandardDocTemplate/`     | `src/pages/DocumentPreview.tsx` (Confirmed) | [x]        |
| **SpecimenSheet**       | `src/specimens/SpecimenSheet/` | `src/pages/SpecimenPage.tsx` (Confirmed)    | [x]        |

**Agent Inspection Tasks:**

- [x] **Critical:** Confirm where `StandardDocTemplate` is being tested. If it is the wrapper for `DocumentPreview.tsx`, confirm it is importing the latest version.
- [x] Verify `SpecimenSheet` is the underlying wrapper for `ColorSpecimen.tsx`, `SpacingSpecimen.tsx`, etc.

## 4. Specimen Coverage

_Design token visualization._

|                    |                   |                                              |            |
| ------------------ | ----------------- | -------------------------------------------- | ---------- |
| **Token Category** | **Source Logic**  | **Preview Page (apps/preview)**              | **Status** |
| **Colors**         | Theme definitions | `src/pages/specimens/ColorSpecimen.tsx`      | [x]        |
| **Typography**     | Theme definitions | `src/pages/specimens/TypographySpecimen.tsx` | [x]        |
| **Spacing**        | Theme definitions | `src/pages/specimens/SpacingSpecimen.tsx`    | [x]        |

**Agent Inspection Tasks:**

- [x] Ensure these pages dynamically pull from the active theme/style set, rather than hardcoded values.

## 5. Build & Export Verification

_Ensure the plumbing is correct._

- [x] **Barrel Files:** Verify `packages/components/src/index.ts` exports all components listed above.
- [x] **Types:** Verify `d.ts` files are generated for all components in `dist/`.
- [x] **Styles:** Verify CSS/Tailwind classes are correctly applying in the `preview` app (no style isolation issues between monorepo packages).
