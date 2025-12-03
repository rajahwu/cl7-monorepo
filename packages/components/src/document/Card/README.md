# Card

A container component that groups content with a background, border, and shadow defined by the Set Definition.

## Usage

```tsx
import { Card } from '@clearline7/components/document/Card'

;<Card>
  <H2>Card Title</H2>
  <Paragraph>This content is inside a card.</Paragraph>
</Card>
```

## Props

| Prop     | Type          | Description                       |
| :------- | :------------ | :-------------------------------- |
| children | ReactNode     | Content to render inside the card |
| style    | CSSProperties | Optional style overrides          |
