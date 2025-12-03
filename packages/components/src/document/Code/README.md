# Code

A component for displaying code snippets, either inline or as a block.

## Usage

```tsx
import { Code } from '@clearline7/components/document/Code';

// Inline code
<p>Use the <Code inline>Code</Code> component.</p>

// Block code
<Code>
  const foo = 'bar';
  console.log(foo);
</Code>
```

## Props

| Prop     | Type          | Description                                           | Default |
| :------- | :------------ | :---------------------------------------------------- | :------ |
| children | ReactNode     | The code content                                      | -       |
| inline   | boolean       | If true, renders inline `code`; otherwise `pre` block | `false` |
| style    | CSSProperties | Optional style overrides                              | -       |
