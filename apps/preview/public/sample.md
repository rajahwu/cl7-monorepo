# Monorepo Detail Report

**Generated:** 2025-11-22

This report provides a detailed overview of the ClearLine7 monorepo, including its structure, dependencies, available components, and current build and test status.

---

## 1. Build & Test Status

The repository's health was verified by running the primary build and test commands.

- ✅ **Build Status:** **Successful**. All packages and applications compiled without errors after fixing dependency issues in the `style-guide` and `preview` apps.
- ✅ **Test Status:** **Passing**. The `pnpm test:coverage` command completed successfully, with all tests passing across all packages.

### Test Coverage Summary

| Package                 | Statements | Branches | Functions | Lines   |
| ----------------------- | ---------- | -------- | --------- | ------- |
| `@clearline7/components`| 88.88%     | 93.93%   | 100%      | 88.23%  |
| `@clearline7/theme`     | 100%       | 100%     | 100%      | 100%    |
| `@clearline7/set-definitions`| 100%   | 88.88%   | 100%      | 100%    |
| `@clearline7/generators`| 100%       | 100%     | 100%      | 100%    |

*Note: Coverage for applications (`landing`, `style-guide`, `preview`) is not currently measured.*

---

## 2. Workspace Structure

The monorepo is managed by `pnpm` workspaces and `turbo`. The structure is divided into `apps` (runnable applications) and `packages` (shared libraries).

### Applications

- `apps/landing`: The public-facing landing page.
- `apps/style-guide`: An interactive style guide and component documentation viewer.
- `apps/preview`: A live preview tool for editing content with different style sets.

### Packages

- `packages/components`: The core React component library.
- `packages/theme`: Provides the React context and hooks for applying style sets.
- `packages/set-definitions`: Contains the core style sets (themes).
- `packages/generators`: Tools for generating documents (e.g., Microsoft Word).
- `packages/types`: (Directory exists but seems unused) Contains shared TypeScript types.
- `packages/brand-style-kit`: (Directory exists but is empty) Intended for product-specific brand tokens.

---

## 3. Core Dependencies & Tech Stack

- **Package Manager:** pnpm v10.23.0
- **Build System:** Turborepo v2.6.1
- **Language:** TypeScript
- **UI Framework:** React v19.2
- **Testing:** Vitest v4.0.10 with React Testing Library
- **Linting:** ESLint v9.36.0

---

## 4. Available Scripts

The following scripts can be run from the root of the monorepo:

- `pnpm build`: Builds all packages and apps.
- `pnpm test`: Runs the full test suite for all packages.
- `pnpm test:coverage`: Runs the test suite and generates a coverage report.
- `pnpm dev:all`: Runs all applications in parallel development mode.
- `pnpm dev:landing`: Runs the `landing` app.
- `pnpm dev:guide`: Runs the `style-guide` app.
- `pnpm dev:preview`: Runs the `preview` app.

---

## 5. Component Library (`@clearline7/components`)

The component package is organized into three categories: `document`, `ui`, and `specimens`.

### Document Components

- `Blockquote`
- `Card`
- `Code`
- `Heading` (H1-H6)
- `List` (ul, ol)
- `Paragraph`

### UI Components

- `Button`
- `Footer`
- `Header`
- `Navigation`

### Specimen Components

- `SpecimenSheet`: A utility component used to display all other components for testing and demonstration.

---

## 6. Theme Sets (`@clearline7/set-definitions`)

The repository contains 8 distinct style sets that can be applied to components and documents:

- `Clearline7` (Default)
- `BlogPosts`
- `ClericalOfficePro`
- `ClerkRoomStandard`
- `FederalFlow`
- `TechDocs`
- `WikiGuidelines`
- `SetDefinition` (Base class)
