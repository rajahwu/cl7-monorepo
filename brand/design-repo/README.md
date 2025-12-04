# Clearline7 Brand Repository

This repository contains the governance, specifications, and assets for the Clearline7 brand system.

## Document Set

- [Clearline7_Brand_Directory_Plan.md](./Clearline7_Brand_Directory_Plan.md) — directory structure and governance roadmap
- [DOCUMENTS/Brand_System_Spec_v0.md](./DOCUMENTS/Brand_System_Spec_v0.md) — brand essence, voice, color, typography
- [DOCUMENTS/clearline7_brand_aesthetic_asset_system.md](./DOCUMENTS/clearline7_brand_aesthetic_asset_system.md) — asset manifest and conventions
- [README_assets.md](./README_assets.md) — naming conventions and usage rules

## Directory Tree

- **BRAND_KIT/** — production logos and favicons
- **TOKENS_SOURCE/** — single source of truth for design tokens
- **DOCUMENTS/** — specs and guides
- **PROMPTS/** — AI prompt batches
- **MOOD_BOARDS/** — visual references
- **ASSETS/** — generated icons, emoji, clip art

## TODO List

- [x] Define directory structure and manifest plan
- [x] Draft Brand System Spec v0
- [x] Draft Asset System doc and README_assets
- [ ] Create prompt batch files for each set (BoxKit, TechLaw, ElementSeven, Clearline7)
- [ ] Generate first round of icons and clip art
- [ ] Store outputs in `ASSETS/[SetName]/`
- [ ] Update `ASSET_MANIFEST.md` with file paths
- [ ] Wire assets into `apps/style-guide` for preview
- [ ] Automate sync between `TOKENS_SOURCE/tokens.json` and `packages/brand-style-kit`

## Governance

All changes to colors or type must be committed to `tokens.json` first, then propagated to apps and packages.
