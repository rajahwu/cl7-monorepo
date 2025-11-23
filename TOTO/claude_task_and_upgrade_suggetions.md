# CL7 Monorepo - Task & Upgrade Suggestions

> Generated: 2025-11-23
> Overall Score: **7.3/10** - Good foundation with addressable gaps

---

## Critical Issues (P1)

### 1. React Version Mismatch
**File:** `/apps/landing/package.json`
**Issue:** React 19.1.1 vs 19.2.0 in other packages
**Fix:**
```json
"react": "^19.2.0",
"react-dom": "^19.2.0"
```

### 2. ESLint Configs Missing
**Affected:** `/apps/landing/`, `/apps/preview/`, all `/packages/*`
**Task:** Create root `eslint.config.js` that extends to all packages

### 3. Component READMEs Missing
Missing documentation for 5 components:
- `/packages/components/src/document/Paragraph/`
- `/packages/components/src/document/Heading/`
- `/packages/components/src/document/Code/`
- `/packages/components/src/document/Card/`
- `/packages/components/src/document/List/`

---

## Important Issues (P2)

### 4. No Prettier Configuration
**Task:** Create `/.prettierrc.json`:
```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}
```

### 5. No Pre-commit Hooks
**Task:** Install husky + lint-staged
```bash
pnpm add -D husky lint-staged
```

### 6. Linting Not in CI/CD
**File:** `.github/workflows/test.yml`
**Task:** Add linting job to GitHub Actions

### 7. TypeScript Settings Gap
**File:** `/apps/landing/tsconfig.app.json`
**Task:** Add `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

---

## Enhancement Opportunities (P3)

### 8. Inconsistent Coverage Thresholds
**Issue:** Different thresholds across packages (65-80%)
**Recommendation:** Standardize to 75% across all vitest.config.ts

### 9. No Bundle Analysis Tool
**Task:** Add `rollup-plugin-visualizer` for build analysis

### 10. Missing Code Splitting
**Location:** `/apps/style-guide/src/App.tsx`
**Task:** Implement lazy loading for route components

### 11. pnpm Version Mismatch
**Issue:** 10.22.0 in code vs 10.23.0 in lockfile
**Task:** Align versions

---

## Nice-to-Have (P4/P5)

### 12. Create ARCHITECTURE.md
Document design decisions and package relationships

### 13. React Compiler Setup
Could improve runtime performance across apps

### 14. Image Optimization
Add `vite-plugin-imagemin` for landing page assets

### 15. Vite Build Optimization
Add manual chunks for vendor splitting:
```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        react: ['react', 'react-dom'],
        vendor: ['lucide-react', 'react-router-dom'],
      }
    }
  }
}
```

---

## From Existing TODO.md

### Git Hygiene
- [ ] Delete stale branches (`claude/testing-*`, `vincent/coverage-*`)

### Refactoring Completion
- [ ] Delete `apps/playground` (replaced by `apps/preview`)
- [ ] Update root package.json scripts
- [ ] Verify pnpm-workspace.yaml

### Verification & Testing
- [ ] Run full test suite: `pnpm test`
- [ ] Check coverage: `pnpm test:coverage`
- [ ] Run full build: `pnpm build`
- [ ] Manual app testing (all 3 apps)

---

## Scorecard by Category

| Category | Score | Notes |
|----------|-------|-------|
| Package Structure | 9/10 | Excellent modular design |
| Dependency Management | 6/10 | Version inconsistencies |
| Code Quality | 7/10 | Good but inconsistent configs |
| Testing | 8/10 | Solid Vitest setup |
| Documentation | 6/10 | Missing component docs |
| Build/Tooling | 8/10 | Modern Vite, minimal config |
| Security | 9/10 | No vulnerabilities found |
| Developer Experience | 6/10 | Missing pre-commit, prettier |
| Performance | 7/10 | Good baseline |
| CI/CD | 7/10 | Works, needs linting |

---

## Quick Wins (< 1 hour each)

1. **Fix React version** - 5 mins
2. **Add Prettier config** - 10 mins
3. **Add missing TypeScript flags** - 10 mins
4. **Standardize coverage thresholds** - 15 mins
5. **Create component README template** - 30 mins

## Medium Effort (1-3 hours)

1. **Root ESLint config** - 2 hours
2. **Husky/lint-staged setup** - 1 hour
3. **Update CI/CD workflow** - 1 hour
4. **Bundle analysis tooling** - 1 hour

## Larger Efforts (half day+)

1. **Complete all component READMEs** - 3 hours
2. **Implement code splitting** - 2 hours
3. **Create ARCHITECTURE.md** - 3 hours
4. **Complete TODO.md verification** - 4 hours

---

## Recommended Priority Order

1. Fix version mismatches (React, pnpm)
2. Add Prettier + ESLint configs
3. Set up pre-commit hooks
4. Update CI/CD with linting
5. Complete component documentation
6. Implement performance optimizations
7. Create architectural documentation
