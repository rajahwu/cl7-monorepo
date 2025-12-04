# Component Audit Checklist: Clearline7 Monorepo

**Objective:** Verify that every component exported from `packages/components` has a corresponding, functional test page in the `preview` app. This ensures the `preview` app remains the "Source of Truth" for visual regression and functionality testing.

## 1. Document Primitives

_Core building blocks for document rendering._

|                    |                                       |                                           |            |
| ------------------ | ------------------------------------- | ----------------------------------------- | ---------- |
| **Component Name** | **Source Path (packages/components)** | **Preview Page (apps/preview)**           | **Status** |
| **Blockquote**     | `src/document/Blockquote/`            | `src/pages/components/BlockquotePage.tsx` | [ ]        |
| **Card**           | `src/document/Card/`                  | `src/pages/components/CardPage.tsx`       | [ ]        |
| **Code**           | `src/document/Code/`                  | `src/pages/components/CodePage.tsx`       | [ ]        |
| **Heading**        | `src/document/Heading/`               | `src/pages/components/HeadingPage.tsx`    | [ ]        |
| **List**           | `src/document/List/`                  | `src/pages/components/ListPage.tsx`       | [ ]        |
| **Paragraph**      | `src/document/Paragraph/`             | `src/pages/components/ParagraphPage.tsx`  | [ ]        |

**Agent Inspection Tasks:**

- [ ] Verify `Preview Page` imports the component from `@clearline7/components` (not a relative path).
- [ ] Verify all major variants (e.g., list types, heading levels) are rendered.

## 2. UI Primitives

_Components used for the application interface._

|                    |                                       |                                           |            |
| ------------------ | ------------------------------------- | ----------------------------------------- | ---------- |
| **Component Name** | **Source Path (packages/components)** | **Preview Page (apps/preview)**           | **Status** |
| **Button**         | `src/ui/Button/`                      | `src/pages/components/ButtonPage.tsx`     | [ ]        |
| **Footer**         | `src/ui/Footer/`                      | `src/pages/components/FooterPage.tsx`     | [ ]        |
| **Header**         | `src/ui/Header/`                      | `src/pages/components/HeaderPage.tsx`     | [ ]        |
| **Navigation**     | `src/ui/Navigation/`                  | `src/pages/components/NavigationPage.tsx` | [ ]        |

**Agent Inspection Tasks:**

- [ ] Check interactive states (Hover, Active, Focus) are visualizable.
- [ ] Verify responsive behavior (Does Navigation collapse on mobile?).

## 3. Templates & Utilities (Gap Analysis)

_High-level layouts or helper components that may be missing a direct preview page._

|                         |                                |                                                     |            |
| ----------------------- | ------------------------------ | --------------------------------------------------- | ---------- |
| **Component Name**      | **Source Path**                | **Expected Usage / Preview Location**               | **Status** |
| **StandardDocTemplate** | `src/StandardDocTemplate/`     | **Unclear.** Check `src/pages/DocumentPreview.tsx`? | [ ]        |
| **SpecimenSheet**       | `src/specimens/SpecimenSheet/` | Likely used in `src/pages/specimens/*`              | [ ]        |

**Agent Inspection Tasks:**

- [ ] **Critical:** Confirm where `StandardDocTemplate` is being tested. If it is the wrapper for `DocumentPreview.tsx`, confirm it is importing the latest version.
- [ ] Verify `SpecimenSheet` is the underlying wrapper for `ColorSpecimen.tsx`, `SpacingSpecimen.tsx`, etc.

## 4. Specimen Coverage

_Design token visualization._

|                    |                   |                                              |            |
| ------------------ | ----------------- | -------------------------------------------- | ---------- |
| **Token Category** | **Source Logic**  | **Preview Page (apps/preview)**              | **Status** |
| **Colors**         | Theme definitions | `src/pages/specimens/ColorSpecimen.tsx`      | [ ]        |
| **Typography**     | Theme definitions | `src/pages/specimens/TypographySpecimen.tsx` | [ ]        |
| **Spacing**        | Theme definitions | `src/pages/specimens/SpacingSpecimen.tsx`    | [ ]        |

**Agent Inspection Tasks:**

- [ ] Ensure these pages dynamically pull from the active theme/style set, rather than hardcoded values.

## 5. Build & Export Verification

_Ensure the plumbing is correct._

- [ ] **Barrel Files:** Verify `packages/components/src/index.ts` exports all components listed above.
- [ ] **Types:** Verify `d.ts` files are generated for all components in `dist/`.
- [ ] **Styles:** Verify CSS/Tailwind classes are correctly applying in the `preview` app (no style isolation issues between monorepo packages).
