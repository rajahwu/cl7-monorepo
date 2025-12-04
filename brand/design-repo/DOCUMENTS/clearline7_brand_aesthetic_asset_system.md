Clearline7 Brand-Aesthetic Asset System

This document defines the structure, naming conventions, and prompt strategy for generating and managing visual assets across all Clearline7 SetDefinitions.

📁 Directory Tree (Rationalized)

brand/design-repo/
├── ASSET_MANIFEST.md # Master inventory of assets by set and type
├── PROMPTS/ # Prompt batch files per set
│ ├── asset_prompts_boxkit.md
│ ├── asset_prompts_techlaw.md
│ ├── asset_prompts_elementseven.md
│ └── asset_prompts_clearline7.md
├── ASSETS/ # Generated outputs
│ ├── BoxKit/
│ ├── TechLaw/
│ ├── ElementSeven/
│ └── Clearline7/
├── README.md # Overview and links to sub-readmes
├── README_assets.md # Naming conventions and asset rules
└── Clearline7_Brand_Directory_Plan.md # Governance and roadmap

📦 Asset Types

Icons: Flat SVGs, geometric, no gradients

Emoji Equivalents: PNGs mapped to brand concepts

Clip Art / Illustrations: Flat, clean-line illustrations using brand palette

🧭 Naming Conventions

icon*[concept]*[set].svg

emoji*[concept]*[set].png

clipart*[concept]*[set].png

Prompt files: asset*prompts*[set].md

📌 TODO List

[x] Define directory structure and manifest plan

[ ] Generate README.md and README_assets.md

[ ] Create prompt batch files for each set

[ ] Generate first round of icons and clip art

[ ] Store outputs in ASSETS/[SetName]/

[ ] Update ASSET_MANIFEST.md with file paths

[ ] Wire assets into apps/style-guide for preview

🔗 Cross-References

README.md links to all prompt files and asset folders

README_assets.md defines naming rules and usage

Each ASSETS/[SetName]/README.md can include palette, usage notes, and asset list

This structure ensures that brand governance (in brand/) and developer consumption (via brand-style-kit) remain clearly separated but tightly linked.
