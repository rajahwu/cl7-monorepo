# Clearline7 Brand Directory Plan

## 1. Directory Structure

- **BRAND_KIT/**: Production-ready assets (Logos, Favicons).
- **TOKENS_SOURCE/**: The single source of truth for design tokens.
- **DOCUMENTS/**: Strategic specs and writing guides.
- **PROMPTS/**: AI prompts for generating on-brand imagery.
- **MOOD_BOARDS/**: Visual references.

## 2. Implementation Roadmap

1. [x] Define Color & Type (Completed v0 Spec)
2. [ ] Generate CSS Variables from TOKENS_SOURCE
3. [ ] Update 'apps/style-guide' to consume tokens.json
4. [ ] Export SVG Logos to BRAND_KIT

## 3. Governance

All changes to colors or type must be committed to 'tokens.json' first, then propagated to the apps.
