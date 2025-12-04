# Asset Prompt System Refactor

## Phase 1: Alignment & Discovery

- [ ] Rename ASSETS folders to match SetDefinition names:
  - `BlogPost/` → `BlogPosts/`
  - `WikiGuides/` → `WikiGuidelines/`
- [ ] Rename corresponding prompt files in `PROMPTS/`:
  - `asset_prompts_blogpost.md` → `asset_prompts_blogposts.md`
  - `enhanced_image_prompts_blogpost.md` → `enhanced_image_prompts_blogposts.md`
  - (same for wikiguides → wikiguidelines)
- [ ] Verify all SetDefinition source files and document color palettes

## Phase 2: Create Sync Script

- [ ] Create `scripts/syncColorsToPrompts.ts`
  - Read `packages/set-definitions/src/*.ts` and `src/brand-aesthetics/*.ts`
  - Extract `primary`, `secondary`, `accent` (and optionally `bg`, `text`) from each
  - Output `brand/design-repo/TOKENS_SOURCE/set_colors.json`
- [ ] Add script to package.json: `"sync:colors": "bun scripts/syncColorsToPrompts.ts"`

## Phase 3: Update Prompt Templates

- [ ] Create prompt template format with color placeholders:

```
  {{primary}}, {{secondary}}, {{accent}}
```

- [ ] Update `asset_prompts_*.md` files to use set-specific colors
- [ ] Update `enhanced_image_prompts_*.md` files:
  - Add section labels (## Icon 1, ## Icon 2, ## Clip Art 1, ## Clip Art 2)
  - Replace hardcoded colors with set-specific palette

## Phase 4: Update Generation Scripts

- [ ] Modify `generateAssetsFromPrompts.ts` to:
  - Parse labeled sections from enhanced prompts
  - Name output files based on section labels
- [ ] Update `assetTool.ts`:
  - Add `generate` command to create prompts from template + colors
  - Update `save` command to handle new naming convention
- [ ] Update `updateAssestStatus.ts` (fix typo: Assest → Asset)

## Phase 5: Validation & Cleanup

- [ ] Run sync script and verify `set_colors.json` output
- [ ] Generate one complete asset set (e.g., BlogPosts) as proof of concept
- [ ] Update `ASSET_MANIFEST.md` structure if needed
- [ ] Update `README.md` with new workflow documentation

## Color Reference (from SetDefinitions)

| Set               | Primary | Secondary | Accent  | Source                               |
| ----------------- | ------- | --------- | ------- | ------------------------------------ |
| BlogPosts         | #1A1A1A | #333333   | #0066CC | src/BlogPosts.ts                     |
| Clearline7        | ?       | ?         | ?       | src/Clearline7.ts                    |
| ClericalOfficePro | ?       | ?         | ?       | src/ClericalOfficePro.ts             |
| ClerkRoomStandard | ?       | ?         | ?       | src/ClerkRoomStandard.ts             |
| FederalFlow       | ?       | ?         | ?       | src/FederalFlow.ts                   |
| TechDocs          | ?       | ?         | ?       | src/TechDocs.ts                      |
| WikiGuidelines    | ?       | ?         | ?       | src/WikiGuidelines.ts                |
| BoxKit            | ?       | ?         | ?       | src/brand-aesthetics/BoxKit.ts       |
| ElementSeven      | ?       | ?         | ?       | src/brand-aesthetics/ElementSeven.ts |
| TechLaw           | ?       | ?         | ?       | src/brand-aesthetics/TechLaw.ts      |
