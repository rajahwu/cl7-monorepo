# Asset Prompt System Refactor

## Phase 1: Alignment & Discovery

- [x] Rename ASSETS folders to match SetDefinition names:
  - `BlogPost/` → `BlogPosts/`
  - `WikiGuides/` → `WikiGuidelines/`
- [x] Rename corresponding prompt files in `PROMPTS/`:
  - `asset_prompts_blogpost.md` → `asset_prompts_blogposts.md`
  - `enhanced_image_prompts_blogpost.md` → `enhanced_image_prompts_blogposts.md`
  - (same for wikiguides → wikiguidelines)
- [x] Verify all SetDefinition source files and document color palettes

## Phase 2: Create Sync Script

- [x] Create `scripts/syncColorsToPrompts.ts`
  - Read `packages/set-definitions/src/*.ts` and `src/brand-aesthetics/*.ts`
  - Extract `primary`, `secondary`, `accent` (and optionally `bg`, `text`) from each
  - Output `brand/design-repo/TOKENS_SOURCE/set_colors.json`
- [x] Add script to package.json: `"sync:colors": "bun scripts/syncColorsToPrompts.ts"`

## Phase 3: Update Prompt Templates

- [x] Create prompt template format with color placeholders: `{{primary}}`, `{{accent}}`
- [x] Update `asset_prompts_*.md` files to use set-specific colors (Example: BlogPosts done)
- [x] Update `enhanced_image_prompts_*.md` files:
  - Add section labels (## icon_concept)
  - Replace hardcoded colors with set-specific palette (Example: BlogPosts done)

## Phase 4: Update Generation Scripts

- [x] Modify `generateAssetsFromPrompts.ts` to:
  - Parse labeled sections from enhanced prompts
  - Name output files based on section labels
  - Support color replacement from `set_colors.json`
- [x] Update `assetTool.ts`:
  - Add `generate` command (stub/redirect)
  - Update `save` command to handle new naming convention
- [x] Update `updateAssestStatus.ts` (fix typo: Assest → Asset)

## Phase 5: Validation & Cleanup

- [x] Run sync script and verify `set_colors.json` output
- [ ] Generate one complete asset set (e.g., BlogPosts) as proof of concept (Attempted, hit API Quota)
- [ ] Update `ASSET_MANIFEST.md` structure if needed
- [ ] Update `README.md` with new workflow documentation

## Color Reference (from SetDefinitions)

| Set               | Primary | Secondary | Accent  | Source                               |
| ----------------- | ------- | --------- | ------- | ------------------------------------ |
| BlogPosts         | #1A1A1A | #333333   | #0066CC | src/BlogPosts.ts                     |
| Clearline7        | #3B82F6 | #60A5FA   | #06B6D4 | src/Clearline7.ts                    |
| ClericalOfficePro | #2F5597 | #385D8A   | #64748B | src/ClericalOfficePro.ts             |
| ClerkRoomStandard | #003366 | #004080   | #6B7280 | src/ClerkRoomStandard.ts             |
| FederalFlow       | #1B3A6B | #2E5090   | #4A7BA7 | src/FederalFlow.ts                   |
| TechDocs          | #0F172A | #1E293B   | #06B6D4 | src/TechDocs.ts                      |
| WikiGuidelines    | #4F7328 | #5F9B2E   | #84CC16 | src/WikiGuidelines.ts                |
| BoxKit            | #0F9D9A | (missing) | #FF8A4B | src/brand-aesthetics/BoxKit.ts       |
| ElementSeven      | #25304A | (missing) | #00C2D1 | src/brand-aesthetics/ElementSeven.ts |
| TechLaw           | #162447 | (missing) | #D97706 | src/brand-aesthetics/TechLaw.ts      |
