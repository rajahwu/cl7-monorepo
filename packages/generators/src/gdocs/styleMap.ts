// packages/generators/src/gdocs/styleMap.ts

export const GDOCS_STYLE_MAP = {
  title: 'TITLE',
  heading: {
    1: 'HEADING_1',
    2: 'HEADING_2',
    3: 'HEADING_3',
    4: 'HEADING_4',
    5: 'HEADING_5',
    6: 'HEADING_6',
  },
  paragraph: 'NORMAL_TEXT',
  quote: 'QUOTE',
  code: 'NORMAL_TEXT', // Exception: code blocks use inline monospace
} as const
