# ClearLine7 Monorepo TODO

**Project Status:** The initial refactoring and component restructuring outlined in `claude_TODO.md` is largely complete. The component library has been reorganized, the style guide has been updated with routes, and the preview app is functional.

This TODO list focuses on the remaining cleanup, verification, documentation, and future feature development.

---

## P1: Finalize Refactoring & Cleanup

These tasks address items left over from the initial refactor.

- [ ] **Delete `apps/playground`:** The `apps/playground` directory has been replaced by `apps/preview` and should be removed from the monorepo.
- [ ] **Update Root `package.json`:** Ensure all scripts related to the old `playground` app are removed or have been updated to point to `preview`.
- [ ] **Verify `pnpm-workspace.yaml`:** Confirm that the `pnpm-workspace.yaml` file does not contain any references to the old `apps/playground` path.

---

## P2: Verification & Testing

This project has a comprehensive test suite. The next step is to run a full verification to ensure the recent, large-scale changes haven't introduced regressions.

- [ ] **Run Full Test Suite:** Execute `pnpm test` and fix any failing tests.
- [ ] **Check Test Coverage:** Run `pnpm test:coverage` and ensure coverage remains above the 75% threshold for all packages. Add tests for any new, uncovered code.
- [ ] **Run Full Build:** Execute `pnpm build` to check for any TypeScript or build-related errors across the entire monorepo.
- [ ] **Manual App Testing:**
    - [ ] **Style Guide:** Run `pnpm dev:guide` and manually navigate through all component pages and style set pages. Check for rendering errors, broken links, and console errors.
    - [ ] **Preview App:** Run `pnpm dev:preview` and test switching between all available style sets. Verify that the styles update correctly and there are no console errors.
    - [ ] **Landing Page:** Run `pnpm dev:landing` to ensure no regressions were introduced.

---

## P3: Documentation

The project's documentation needs to be updated to reflect the new architecture.

- [ ] **Update Main `README.md`:**
    - [ ] Add the new architecture overview, including the `document/`, `ui/`, and `specimens/` structure within `@clearline7/components`.
    - [ ] Update the app descriptions for `style-guide` and `preview`.
    - [ ] Add the ASCII architecture diagram from `claude_TODO.md`.
    - [ ] Update the development scripts section if necessary.
- [ ] **Component `readme.md` files:**
    - [ ] Spot-check the `readme.md` files within the new component folders (e.g., `packages/components/src/document/Blockquote/readme.md`).
    - [ ] Ensure they exist and contain basic usage examples as planned.
- [ ] **Formally Document Decisions:** Create a new `ARCHITECTURE.md` file in the root or a `docs/` folder to formally record the decisions made (e.g., `ThemeProvider` -> `SetDefinitionProvider`, `Card` component location, `useTheme` alias).

---

## P4: Future Enhancements

These are new features to build on the new, stable foundation.

- [ ] **Enhance Preview App:**
    - [ ] Implement a rich text editor (e.g., TipTap, Lexical) to allow users to write their own content instead of only viewing the `SpecimenSheet`.
    - [ ] Add an "Export to Word" feature, leveraging the existing `@clearline7/generators` package.
    - [ ] Add an "Export to PDF" feature.
- [ ] **Improve Style Guide Navigation:**
    - [ ] Implement "active link" highlighting in the style guide's navigation sidebar.
    - [ ] Make the navigation sidebar responsive for mobile devices.
- [ ] **Create `brand-style-kit` Package:**
    - [ ] Begin work on the `@clearline7/brand-style-kit` package as envisioned in the target architecture. This would hold brand-specific tokens (logos, product colors) separate from the document `set-definitions`.

---
