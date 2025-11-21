# Header

A themeable header component for application layouts.

## Usage

```tsx
import { Header } from '@clearline7/components'

<Header logo={<img src="/logo.png" alt="Logo" />}>
  <nav>Navigation items</nav>
</Header>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Header content (typically navigation) |
| logo | ReactNode | - | Optional logo element |
| style | CSSProperties | - | Custom styles |
