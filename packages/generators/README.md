# @clearline7/generators

Document generators for ClearLine7 design system. Create styled Word documents and Google Docs from theme definitions.

## Installation

```bash
pnpm add @clearline7/generators
```

## Usage

### Word Document Generator

Generate Microsoft Word documents with ClearLine7 theming.

```typescript
import { generateWord } from '@clearline7/generators'
import { Clearline7 } from '@clearline7/set-definitions'

// Generate a Word document
const buffer = await generateWord(Clearline7, {
  title: 'My Document',
  content: [
    { type: 'heading', level: 1, text: 'Introduction' },
    { type: 'paragraph', text: 'This is themed content.' },
    { type: 'heading', level: 2, text: 'Details' },
    { type: 'paragraph', text: 'More content here.' },
  ]
})

// Save to file (Node.js)
import fs from 'fs'
fs.writeFileSync('output.docx', buffer)
```

### Google Docs Generator

Generate Google Docs with ClearLine7 theming (requires Google API credentials).

```typescript
import { generateGDocs } from '@clearline7/generators'
import { TechDocs } from '@clearline7/set-definitions'

// Generate a Google Doc
const docId = await generateGDocs(TechDocs, {
  title: 'Technical Documentation',
  content: [
    { type: 'heading', level: 1, text: 'API Reference' },
    { type: 'paragraph', text: 'Documentation content.' },
  ],
  credentials: {
    // Google API credentials
  }
})

console.log(`Document created: https://docs.google.com/document/d/${docId}`)
```

## Scripts

```bash
# Build the package
pnpm build

# Generate a Word document
pnpm generate:word

# Generate a Google Doc
pnpm generate:gdocs
```

## Content Types

### Heading

```typescript
{
  type: 'heading',
  level: 1 | 2 | 3 | 4 | 5 | 6,
  text: 'Heading text'
}
```

### Paragraph

```typescript
{
  type: 'paragraph',
  text: 'Paragraph content'
}
```

### List

```typescript
{
  type: 'list',
  ordered: boolean,
  items: ['Item 1', 'Item 2', 'Item 3']
}
```

### Code Block

```typescript
{
  type: 'code',
  language: 'javascript',
  code: 'const x = 1;'
}
```

## Theme Application

The generators apply theme values to documents:

- **Typography**: Font families, sizes, line heights
- **Colors**: Text colors, backgrounds
- **Spacing**: Margins, indentation
- **Styles**: Bold, italic, underline based on semantic elements

## Dependencies

- `docx` - Word document generation
- `googleapis` - Google Docs API

## Testing

```bash
# Run tests
pnpm test

# Run with coverage
pnpm test:coverage
```

## License

ISC
