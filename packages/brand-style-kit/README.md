# ClearLine7 Brand Style Kit

This package contains brand-specific style tokens for the ClearLine7 design system. These tokens are used across all ClearLine7 applications and marketing materials to ensure brand consistency.

## Tokens

### Colors

- `primary`: The primary brand color, used for links, buttons, and other interactive elements.
- `secondary`: The secondary brand color, used for backgrounds and other subtle UI elements.
- `accent`: The accent brand color, used for highlights and call-to-actions.

### Logo

- `light`: The brand logo for use on dark backgrounds.
- `dark`: The brand logo for use on light backgrounds.

## Usage

```typescript
import { brandColors, brandLogo } from '@clearline7/brand-style-kit';

const primaryColor = brandColors.primary;
const logoUrl = brandLogo.dark;
```
