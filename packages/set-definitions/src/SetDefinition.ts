export interface ColorAttributes {
  primary: string
  secondary: string
  accent: string
  success: string
  bg: string
  card: string
  text: string
  muted: string
  border: string
  surface: string
  danger: string
  focus: string
}

export interface TypographyAttributes {
  bodyFont: string
  bodyFallback: string
  headingFont: string
  monoFont: string
  bodySize: string
  h1Size: string
  h2Size: string
  h3Size: string
  h4Size: string
  h5Size: string
  h6Size: string
  lineHeightNormal: number
  lineHeightTight: number
}

export interface SpacingAttributes {
  bulletIndent: string
  paragraphBefore?: string
  paragraphAfter: string
  scale: { [key: string]: string }
}

export interface RadiusAttributes {
  button: string
  card: string
  input: string
}

export interface ShadowAttributes {
  low: string
  medium: string
  high: string
}

export default class SetDefinition {
  colors: ColorAttributes
  typography: TypographyAttributes
  spacing: SpacingAttributes
  radius: RadiusAttributes
  shadows: ShadowAttributes

  constructor(
    colors: Partial<ColorAttributes> = {},
    typography: Partial<TypographyAttributes> = {},
    spacing: Partial<SpacingAttributes> = {},
    radius: Partial<RadiusAttributes> = {},
    shadows: Partial<ShadowAttributes> = {}
  ) {
    // --- Default Colors ---
    this.colors = {
      primary: '#000000',
      secondary: '#555555',
      accent: '#999999',
      success: '#00AA00',
      bg: '#FFFFFF',
      card: '#F0F0F0',
      text: '#111111',
      muted: '#888888',
      border: '#CCCCCC',
      danger: '#FF0000',
      focus: '#0000FF',
      surface: '#FFFFFF',
      ...colors, // override with user-provided
    }

    // --- Default Typography ---
    this.typography = {
      bodyFont: 'Arial',
      bodyFallback: 'sans-serif',
      headingFont: 'Arial',
      monoFont: 'Courier New',
      bodySize: '12pt',
      h1Size: '20pt',
      h2Size: '16pt',
      h3Size: '14pt',
      h4Size: '12pt',
      h5Size: '12pt',
      h6Size: '12pt',
      lineHeightNormal: 1.5,
      lineHeightTight: 1.3,
      ...typography,
    }

    // --- Default Spacing ---
    const defaultScale = {
      '0': '0px',
      '1': '4px',
      '2': '8px',
      '3': '12px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
      '12': '48px',
      '16': '64px',
      '20': '72px',
    }

    this.spacing = {
      bulletIndent: '0.25in',
      paragraphBefore: '6pt',
      paragraphAfter: '6pt',
      ...spacing,
      scale: {
        ...defaultScale,
        ...spacing.scale,
      },
    }

    // --- Default Radius ---
    this.radius = {
      button: '4px',
      card: '4px',
      input: '4px',
      ...radius,
    }

    // --- Default Shadows ---
    this.shadows = {
      low: '0 1px 2px rgba(0,0,0,0.04)',
      medium: '0 2px 4px rgba(0,0,0,0.06)',
      high: '0 4px 8px rgba(0,0,0,0.08)',
      ...shadows,
    }
  }

  // --- Standard CSS Variables (Runtime switching) ---
  toCSS(): string {
    const colorVars = Object.entries(this.colors)
      .map(([key, value]) => `--color-${key}: ${value};`)
      .join('\n')
    const fontVars = Object.entries(this.typography)
      .map(([key, value]) => `--font-${key}: ${value};`)
      .join('\n')
    const radiusVars = Object.entries(this.radius)
      .map(([key, value]) => `--radius-${key}: ${value};`)
      .join('\n')
    const shadowVars = Object.entries(this.shadows)
      .map(([key, value]) => `--shadow-${key}: ${value};`)
      .join('\n')

    let spacingVars = `--bullet-indent: ${this.spacing.bulletIndent};\n--paragraph-after: ${this.spacing.paragraphAfter};\n`
    if (this.spacing.paragraphBefore)
      spacingVars += `--paragraph-before: ${this.spacing.paragraphBefore};\n`
    if (this.spacing.scale) {
      spacingVars += Object.entries(this.spacing.scale)
        .map(([key, value]) => `--scale-${key}: ${value};`)
        .join('\n')
    }

    return `:root {\n${colorVars}\n${fontVars}\n${radiusVars}\n${shadowVars}\n${spacingVars}}\n`
  }

  // --- Tailwind v4 Theme Block ---
  // In v4, you define theme variables inside @theme { ... }
  // This method outputs a CSS block that you can inject into your main CSS file
  toTailwindCSS(): string {
    const colorVars = Object.entries(this.colors)
      .map(([key, value]) => `--color-${key}: ${value};`)
      .join('\n  ')

    const fontVars = `
  --font-body: ${this.typography.bodyFont}, ${this.typography.bodyFallback};
  --font-heading: ${this.typography.headingFont};
  --font-mono: ${this.typography.monoFont};`

    const radiusVars = Object.entries(this.radius)
      .map(([key, value]) => `--radius-${key}: ${value};`)
      .join('\n  ')

    // Tailwind v4 uses --spacing-* for spacing scale
    const spacingVars = Object.entries(this.spacing.scale)
      .map(([key, value]) => `--spacing-${key}: ${value};`)
      .join('\n  ')

    return `
@theme {
  /* Colors */
  ${colorVars}

  /* Typography */
  ${fontVars}

  /* Radius */
  ${radiusVars}

  /* Spacing */
  ${spacingVars}
}
`
  }

  toJSON(): string {
    return JSON.stringify(
      {
        colors: this.colors,
        typography: this.typography,
        spacing: this.spacing,
        radius: this.radius,
        shadows: this.shadows,
      },
      null,
      2
    )
  }

  getPrintStyles(): string {
    return `
@media print {
  body {
    font-family: ${this.typography.bodyFont}, ${this.typography.bodyFallback};
    font-size: ${this.typography.bodySize};
    line-height: ${this.typography.lineHeightNormal};
    background-color: ${this.colors.bg};
    color: ${this.colors.text};
  }

  h1 { font-size: ${this.typography.h1Size}; line-height: ${this.typography.lineHeightTight}; }
  h2 { font-size: ${this.typography.h2Size}; line-height: ${this.typography.lineHeightTight}; }
  h3 { font-size: ${this.typography.h3Size}; line-height: ${this.typography.lineHeightTight}; }
  h4 { font-size: ${this.typography.h4Size}; line-height: ${this.typography.lineHeightTight}; }
  h5 { font-size: ${this.typography.h5Size}; line-height: ${this.typography.lineHeightTight}; }
  h6 { font-size: ${this.typography.h6Size}; line-height: ${this.typography.lineHeightTight}; }

  p {
    margin-top: ${this.spacing.paragraphBefore};
    margin-bottom: ${this.spacing.paragraphAfter};
  }

  ul, ol {
    padding-left: ${this.spacing.bulletIndent};
  }

  .card {
    border-radius: ${this.radius.card};
    box-shadow: none;
  }

  input, button {
    border-radius: ${this.radius.input};
  }
}
    `
  }
}
