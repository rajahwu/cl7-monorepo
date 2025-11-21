# Navigation

A themeable navigation component with support for horizontal and vertical layouts.

## Usage

```tsx
import { Navigation, NavItem } from '@clearline7/components'

<Navigation orientation="horizontal">
  <NavItem active>Home</NavItem>
  <NavItem>About</NavItem>
  <NavItem>Contact</NavItem>
</Navigation>
```

## Props

### Navigation

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | NavItem children |
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | Layout direction |
| style | CSSProperties | - | Custom styles |

### NavItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Item content |
| active | boolean | false | Highlight as active |
| style | CSSProperties | - | Custom styles |
