# Heading

A heading component that supports levels H1-H6 and applies the document's heading typography.

## Usage

```tsx
import { Heading, H1, H2 } from '@clearline7/components/document/Heading';

<H1>Main Title</H1>
<H2>Subtitle</H2>
<Heading level={3}>Section Title</Heading>
```

## Props

| Prop     | Type                       | Description              | Default    |
| :------- | :------------------------- | :----------------------- | :--------- |
| level    | 1 \| 2 \| 3 \| 4 \| 5 \| 6 | The heading level        | (Required) |
| children | ReactNode                  | Text content             | -          |
| style    | CSSProperties              | Optional style overrides | -          |

## Exports

- `Heading`: Main component requiring `level`.
- `H1`, `H2`, `H3`: Convenience wrappers.
