# @clearline7/theme

React Context and Hooks for injecting Set Definitions into an application.

## Overview

The theme package is **the bridge** between raw design tokens (`@clearline7/set-definitions`) and React components (`@clearline7/components`). It provides a React Context that makes style sets available throughout your component tree.

## Main Component: SetDefinitionProvider

Wrap your application with `SetDefinitionProvider` to make a design set available to all child components.

```typescript
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7 } from '@clearline7/set-definitions';

function App() {
  return (
    <SetDefinitionProvider definition={Clearline7}>
      <YourApp />
    </SetDefinitionProvider>
  );
}
```

## The useTheme Hook

Access the active set tokens within any component:

```typescript
import { useTheme } from '@clearline7/theme';

function MyComponent() {
  const theme = useTheme();

  return (
    <div style={{
      fontFamily: theme.typography.fontFamily.body,
      color: theme.colors.text,
      padding: theme.spacing.md
    }}>
      Themed content
    </div>
  );
}
```

## Dynamic Theme Switching

Change the active theme at runtime:

```typescript
import { useState } from 'react';
import { SetDefinitionProvider } from '@clearline7/theme';
import { Clearline7, ClericalOfficePro } from '@clearline7/set-definitions';

function App() {
  const [activeSet, setActiveSet] = useState(Clearline7);

  return (
    <SetDefinitionProvider definition={activeSet}>
      <button onClick={() => setActiveSet(ClericalOfficePro)}>
        Switch to Clerical Pro
      </button>
      <YourApp />
    </SetDefinitionProvider>
  );
}
```

## API Reference

### `<SetDefinitionProvider>`

**Props:**

- `definition: DocumentSet` - The set definition to use (required)
- `children: ReactNode` - Your application components (required)

**Example:**

```typescript
<SetDefinitionProvider definition={Clearline7}>
  <App />
</SetDefinitionProvider>
```

### `useTheme()`

**Returns:** The active `DocumentSet`

**Example:**

```typescript
const theme = useTheme()
console.log(theme.name) // "Clearline7"
```

## Installation

```bash
pnpm add @clearline7/theme @clearline7/set-definitions
```

## Peer Dependencies

- `react: ^19.0.0`
- `@clearline7/set-definitions: workspace:*`

## TypeScript Support

Full TypeScript definitions included. The `useTheme` hook returns a fully-typed `DocumentSet` object with autocompletion for all token paths.

## Related Packages

- `@clearline7/set-definitions` - Design token definitions (required)
- `@clearline7/components` - Theme-aware components
- `@clearline7/types` - TypeScript definitions

## Usage Notes

⚠️ **Context Provider Required**: Components using `useTheme` must be descendants of `SetDefinitionProvider` or they will throw an error.

✅ **Single Source of Truth**: All theme tokens come from the set definition - no CSS variables or external configuration needed.
