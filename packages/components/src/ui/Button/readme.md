# Button

A themeable button component with variants and sizes.

## Usage

```tsx
import { Button } from '@clearline7/components'

<Button variant="primary" size="md" onClick={() => {}}>
  Click me
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' | 'primary' | Visual style variant |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| children | ReactNode | - | Button content |
| disabled | boolean | false | Disable the button |
| onClick | () => void | - | Click handler |
