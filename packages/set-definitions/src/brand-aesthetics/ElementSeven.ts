import SetDefinition from '../SetDefinition'

export const ElementSeven = new SetDefinition(
  {
    primary: '#25304A',
    accent: '#00C2D1',
    bg: '#0F1724',
    surface: '#111827',
    text: '#E6EEF6',
    muted: '#9AA6B2',
    success: '#16A34A',
    danger: '#EF4444',
    focus: '#7CFFFA',
  },
  {
    bodyFont: 'Inter, system-ui, sans-serif',
    headingFont: 'Inter, system-ui, sans-serif',
    monoFont: 'JetBrains Mono, ui-monospace, monospace',
    bodySize: '14px',
    h1Size: '22px',
    h2Size: '18px',
    h3Size: '16px',
    lineHeightTight: 1.25,
  },
  {
    paragraphAfter: '12px',
    scale: {
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
    },
  }
)
