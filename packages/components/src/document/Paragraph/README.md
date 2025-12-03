# Paragraph

A standard paragraph component that applies the document's body typography and spacing.

## Usage

```tsx
import { Paragraph } from '@clearline7/components/document/Paragraph'

;<Paragraph>
  This is a paragraph of text that will inherit the correct font family, size, and spacing from the
  active Set Definition.
</Paragraph>
```

## Props

| Prop     | Type          | Description              |
| :------- | :------------ | :----------------------- |
| children | ReactNode     | Text or inline content   |
| style    | CSSProperties | Optional style overrides |
