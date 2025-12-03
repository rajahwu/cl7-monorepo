# ClearLine7 Monorepo - Master Task List

## 🚨 High Priority (Quick Wins & Critical)

- [x] **Configuration**
  - [x] Create root `.prettierrc.json` for consistent formatting.
  - [x] Setup `husky` and `lint-staged` for pre-commit hooks.
  - [x] Add specific TypeScript flags (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`) to `apps/landing/tsconfig.app.json`.

- [x] **Documentation**
  - [x] Create `README.md` for `packages/components/src/document/Paragraph`.
  - [x] Create `README.md` for `packages/components/src/document/Heading`.
  - [x] Create `README.md` for `packages/components/src/document/Code`.
  - [x] Create `README.md` for `packages/components/src/document/Card`.
  - [x] Create `README.md` for `packages/components/src/document/List`.

- [ ] **Testing**
  - [ ] Standardize coverage thresholds to 75% across all `vitest.config.ts` files.

## 🏗️ Architecture & Refactoring (Generator Pipeline)

### Phase 1: Centralize Data

- [x] **Migrate Editions:** Refactor `apps/landing` to remove local `src/editions` and consume `@clearline7/set-definitions`.
  - [x] Verify `packages/set-definitions` contains all necessary definitions from landing page.

  - [x] Update `apps/landing` imports.

  - [x] Delete `apps/landing/src/editions`.

### Phase 2: Build the Engine

- [ ] **StandardDocTemplate:** Create/Verify `StandardDocTemplate` component in `packages/components`.
  - [ ] Should accept a `SetDefinition` and content.
  - [ ] Should drive both screen rendering and export generation logic.

### Phase 3: Build Exporters (`packages/generators`)

- [ ] **Scaffold Generators:**
  - [ ] Create `src/adapters/WordAdapter.ts` (using `docx` or similar).
  - [ ] Create `src/adapters/MarkdownAdapter.ts`.
  - [ ] Implement Adapter pattern for pluggable outputs.

## 🛠️ DevOps & Code Quality

- [ ] **CI/CD**
  - [ ] Add linting job to `.github/workflows/test.yml`.
  - [ ] Ensure `pnpm build` and `pnpm test` run successfully in CI.

- [ ] **Tooling**
  - [ ] Add `rollup-plugin-visualizer` for bundle analysis.
  - [ ] Refine root `eslint.config.js` and ensure all packages extend it correctly.

## 📝 Documentation & Hygiene

- [ ] **Cleanup**
  - [x] Delete `TOTO` directory after verifying all tasks are captured.
  - [ ] Delete stale branches (check git).

- [ ] **Architecture**
  - [ ] Update `ARCHITECTURE.md` with diagram of the Generator Pipeline.
