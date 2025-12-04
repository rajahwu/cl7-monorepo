import SetDefinition from '../SetDefinition'

export const BoxKit = new SetDefinition(
  {
    primary: '#0F9D9A',
    accent: '#FF8A4B',
    bg: '#FFFFFF',
    text: '#0F172A',
    muted: '#6B7280',
  },
  {
    bodyFont: 'Inter, system-ui, sans-serif',
    headingFont: 'Poppins, system-ui, sans-serif',
    bodySize: '16px',
    h1Size: '34px',
    h2Size: '26px',
    h3Size: '20px',
    lineHeightTight: 1.2,
  },
  {
    paragraphAfter: '18px',
    scale: {
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '48': '48px',
    },
  }
)
