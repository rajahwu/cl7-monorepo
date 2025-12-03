# ClearLine7 Monorepo - Master Task List

## 🚨 High Priority (Quick Wins & Critical)

- [ ] **Configuration**
  - [ ] Create root `.prettierrc.json` for consistent formatting.
  - [ ] Setup `husky` and `lint-staged` for pre-commit hooks.
  - [ ] Add specific TypeScript flags (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`) to `apps/landing/tsconfig.app.json`.

- [ ] **Documentation**
  - [ ] Create `README.md` for `packages/components/src/document/Paragraph`.
  - [ ] Create `README.md` for `packages/components/src/document/Heading`.
  - [ ] Create `README.md` for `packages/components/src/document/Code`.
  - [ ] Create `README.md` for `packages/components/src/document/Card`.
  - [ ] Create `README.md` for `packages/components/src/document/List`.

- [ ] **Testing**
  - [ ] Standardize coverage thresholds to 75% across all `vitest.config.ts` files.

## 🏗️ Architecture & Refactoring (Generator Pipeline)

### Phase 1: Centralize Data
- [ ] **Migrate Editions:** Refactor `apps/landing` to remove local `src/editions` and consume `@clearline7/set-definitions`.
  - [ ] Verify `packages/set-definitions` contains all necessary definitions from landing page.
  - [ ] Update `apps/landing` imports.
  - [ ] Delete `apps/landing/src/editions`.

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
  - [ ] Delete `TOTO` directory after verifying all tasks are captured.
  - [ ] Delete stale branches (check git).

- [ ] **Architecture**
  - [ ] Update `ARCHITECTURE.md` with diagram of the Generator Pipeline.
