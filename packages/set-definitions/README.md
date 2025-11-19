# @clearline7/set-definitions

Core design tokens and preset themes for the ClearLine7 design system.

## Installation

```bash
pnpm add @clearline7/set-definitions
```

## Usage

### Using Preset Themes

```typescript
import { Clearline7, BlogPosts, TechDocs } from '@clearline7/set-definitions'

// Use the default theme
const theme = Clearline7

// Access theme properties
console.log(theme.colors.primary)      // '#000000'
console.log(theme.typography.bodyFont) // 'Arial'
console.log(theme.spacing.scale['4'])  // '16px'
```

### Creating Custom Themes

```typescript
import { SetDefinition } from '@clearline7/set-definitions'

const customTheme = new SetDefinition(
  // Colors
  {
    primary: '#1a1a1a',
    accent: '#06B6D4',
    bg: '#FFFFFF',
  },
  // Typography
  {
    bodyFont: 'Inter',
    headingFont: 'Montserrat',
    bodySize: '16px',
  },
  // Spacing
  {
    paragraphAfter: '16px',
    scale: {
      '4': '16px',
      '6': '24px',
    },
  },
  // Radius
  {
    card: '8px',
    button: '4px',
  },
  // Shadows
  {
    medium: '0 4px 6px rgba(0,0,0,0.1)',
  }
)
```

### Generating CSS Custom Properties

```typescript
const css = theme.toCSS()
// Returns CSS custom properties like:
// --cl7-color-primary: #000000;
// --cl7-typography-body-font: Arial;
// etc.
```

### Serializing to JSON

```typescript
const json = theme.toJSON()
// Returns the complete theme as a JSON object
```

### Print Styles

```typescript
const printCSS = theme.getPrintStyles()
// Returns CSS optimized for print media
```

## Available Presets

| Preset | Description |
|--------|-------------|
| `Clearline7` | Default balanced theme |
| `BlogPosts` | Optimized for blog content |
| `ClericalOfficePro` | Professional office documents |
| `ClerkRoomStandard` | Standard clerical formatting |
| `FederalFlow` | Government document style |
| `TechDocs` | Technical documentation |
| `WikiGuidelines` | Wiki-style formatting |

## Theme Attributes

### Colors

- `primary` - Primary brand color
- `secondary` - Secondary color
- `accent` - Accent/highlight color
- `success` - Success state color
- `bg` - Background color
- `card` - Card/surface background
- `text` - Primary text color
- `muted` - Muted/secondary text
- `border` - Border color

### Typography

- `bodyFont` - Body text font family
- `bodyFallback` - Fallback font
- `headingFont` - Heading font family
- `monoFont` - Monospace font
- `bodySize` - Base body text size
- `h1Size` - `h6Size` - Heading sizes
- `lineHeightNormal` - Normal line height
- `lineHeightTight` - Tight line height

### Spacing

- `bulletIndent` - List bullet indentation
- `paragraphBefore` - Space before paragraphs
- `paragraphAfter` - Space after paragraphs
- `scale` - Spacing scale (0-16)

### Radius

- `button` - Button border radius
- `card` - Card border radius
- `input` - Input border radius

### Shadows

- `low` - Subtle shadow
- `medium` - Medium shadow
- `high` - Prominent shadow

## Testing

```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:coverage
```

## License

ISC
