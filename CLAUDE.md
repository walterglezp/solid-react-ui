# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Build
```bash
npm run build              # Build library and styles
npm run build:styles       # Build SCSS styles only
```

### Development
```bash
npm run storybook          # Start Storybook dev server on port 6006
npm run lint              # Run ESLint on TypeScript files
npm run format            # Format code with Prettier
```

### Storybook
```bash
npm run storybook:build    # Build Storybook for production
npm run storybook:deploy   # Build and deploy to GitHub Pages
```

## Architecture Overview

This is a React component library built with TypeScript, styled with Bootstrap 5.3.6, and documented with Storybook. The library uses tsup for building and provides both ESM and CJS outputs.

### Key Architectural Patterns

**Component Organization**: Components are organized by category in `src/components/`:
- `form/` - Form controls, inputs, buttons, date pickers
- `layout/` - Layout primitives (Container, Row, Column, Flex)
- `list/` - List components (ListGroup, ListGroupItem)
- `navigation/` - Navigation components (Link)
- `graphic/` - Icons and visual elements
- `common/` - Shared utilities like ScrollBar

**Theming System**: The library uses a custom `ThemeProvider` that dynamically injects CSS custom properties to override Bootstrap variables. The theme context is in `src/context/ThemeContext.tsx` and supports:
- Custom border radius values
- Focus border styling
- Bootstrap color variables (primary, secondary, success, etc.)
- Dynamic color manipulation via `darkenColor` utility

**Style Architecture**: 
- Global styles in `src/styles/global.scss`
- Bootstrap overrides in `src/styles/bootstrap-overrides.scss`
- Component-specific SCSS files co-located with components
- Styles are compiled via Sass and bundled into `dist/index.css`

**Build Process**: 
- tsup builds TypeScript to ESM/CJS with type declarations
- Sass compiles SCSS to CSS
- Storybook provides component documentation and testing

### Utilities

**Helper Functions** in `src/utils/`:
- `classnames-helper.ts` - Utility for conditional class names
- `date-helper.ts` - Date manipulation utilities
- `image-helper.ts` - Image processing utilities
- `scss-helper.ts` - SCSS color manipulation (darkenColor)
- `uuid-helper.ts` - UUID generation
- `validation-helper.ts` - Form validation utilities

**Hooks** in `src/hooks/`:
- `useClickOutside.ts` - Detect clicks outside component

### Key Integration Points

**Entry Point**: `src/index.ts` exports all public components and utilities

**Storybook Configuration**: Stories are co-located with components using `.stories.tsx` files

**Theme Usage**: Wrap applications with `ThemeProvider` to enable dynamic theming

## Development Notes

- All components should have corresponding Storybook stories
- Use existing Bootstrap classes where possible
- Follow the established pattern of co-locating SCSS files with components
- Theme-aware components should use CSS custom properties that can be overridden by ThemeProvider
- Import global styles via `import 'solid-react-ui/dist/index.css'` in consuming applications