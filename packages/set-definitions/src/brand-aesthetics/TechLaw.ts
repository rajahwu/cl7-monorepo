import SetDefinition from '../SetDefinition'

export const TechLaw = new SetDefinition(
  {
    primary: '#162447',
    accent: '#D97706',
    bg: '#FFFFFF',
    text: '#0B1220',
    muted: '#6B7280',
  },
  {
    bodyFont: 'Source Sans 3, system-ui, sans-serif',
    headingFont: 'Merriweather, Georgia, serif',
    bodySize: '15.5px',
    h1Size: '30px',
    h2Size: '22px',
    h3Size: '18px',
    lineHeightTight: 1.18,
  },
  {
    paragraphAfter: '12px',
    scale: {
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '20': '20px',
      '28': '28px',
      '40': '40px',
    },
  }
)
