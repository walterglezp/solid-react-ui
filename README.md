# solid-react-ui

A lightweight, production-ready React component library built with TypeScript. Includes reusable UI elements like buttons, inputs, layout primitives (Container, Row, Column, Flex), lists, and form controls — designed for performance, simplicity, and seamless integration into modern React apps.

All components are styled using **Bootstrap 5.3.6** and documented with Storybook.

---

## 🚀 Features

- ⚛️ Built with React + TypeScript
- 💡 Tree-shakeable and typed components
- 🎨 Bootstrap 5.3.6 utility class styling
- 🧪 Storybook integration for documentation and testing
- 📦 Ready to publish as an npm package
- 🧩 Includes layout, form, and input building blocks
- 🔍 Strict linting and formatting (ESLint + Prettier)

---

## 📦 Install (after publishing to npm)

```bash
npm install solid-react-ui
```

This library assumes your app loads Bootstrap 5.3.6 CSS globally. Add the following to your HTML or entry file:

```bash
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
  integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
  crossorigin="anonymous"
/>
```

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
