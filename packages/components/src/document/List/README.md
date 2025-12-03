# List

A component for ordered and unordered lists, handling proper indentation and bullet styling.

## Usage

```tsx
import { List, ListItem } from '@clearline7/components/document/List';

// Unordered
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</List>

// Ordered
<List ordered>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
</List>
```

## Props

### List

| Prop     | Type          | Description                           | Default |
| :------- | :------------ | :------------------------------------ | :------ |
| children | ReactNode     | `ListItem` components                 | -       |
| ordered  | boolean       | If true, renders `ol`; otherwise `ul` | `false` |
| style    | CSSProperties | Optional style overrides              | -       |

### ListItem

| Prop     | Type          | Description              |
| :------- | :------------ | :----------------------- |
| children | ReactNode     | List item content        |
| style    | CSSProperties | Optional style overrides |
