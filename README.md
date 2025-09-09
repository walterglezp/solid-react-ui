# solid-react-ui

📘 **Storybook Docs:** [https://walterglezp.github.io/solid-react-ui](https://walterglezp.github.io/solid-react-ui)

A lightweight, production-ready React component library built with TypeScript. Includes reusable UI elements like buttons, inputs, layout primitives (Container, Row, Column, Flex), lists, and form controls — designed for performance, simplicity, and seamless integration into modern React apps.

All components are styled using a **custom design system**, enhanced with optional theming via a custom ThemeContext, and documented with Storybook.

---

## 🚀 Features

- ⚛️ Built with React + TypeScript
- 💡 Tree-shakeable and typed components
- 🎨 Custom utility class styling system
- 🎭 Optional theme customization via ThemeProvider-
- 🧪 Storybook integration for documentation and testing
- 📦 Ready to publish as an npm package
- 🧩 Includes layout, form, and input building blocks
- 🔍 Strict linting and formatting (ESLint + Prettier)

---

## 📦 Install

```bash
npm install solid-react-ui
```

---

🎨 Styles

- This library is styled using a custom design system with SCSS-based components and utilities.
- All required styles are fully bundled in the package.

To use the styles, you need to import them into your app entry:

```
import 'solid-react-ui/dist/index.css';
```

## 🎭 Theme Customization

Use the ThemeProvider to dynamically customize component styles globally. Example:

```bash
import { ThemeProvider } from 'solid-react-ui'

<ThemeProvider
  value={{
    name: 'custom',
    borderRadius: '0.5rem',
    borderRadiusSm: '0.25rem',
    borderRadiusLg: '1rem',
  }}
>
  <App />
</ThemeProvider>
```

This automatically maps values to CSS custom properties like --border-radius-md, --border-radius-sm, and --border-radius-lg.

## 🧪 Run Storybook

```bash
npx storybook dev -p 6006
```

Then open your browser to http://localhost:6006

## 🛠 Development

```bash
# Build the library for npm
npx tsup

# Lint the code
npx eslint src --ext .ts,.tsx
```

## 📄 License

MIT © 2025 Walter Gonzalez
