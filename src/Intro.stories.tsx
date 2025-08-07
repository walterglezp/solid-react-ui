// .storybook/stories/Intro.stories.tsx

import React from "react";
import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Intro",
  parameters: {
    controls: { hideNoControlsWarning: true },
    options: { showPanel: false },
  },
};
export default meta;

export const Overview = () => (
  <div style={{ padding: "1rem", lineHeight: 1.6 }}>
    <h1>solid-react-ui</h1>
    <p>
      <strong>Storybook Docs:</strong>{" "}
      <a
        href="https://walterglezp.github.io/solid-react-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        walterglezp.github.io/solid-react-ui
      </a>
      <br />
      <strong>Github Repo</strong>{" "}
      <a
        href="https://github.com/walterglezp/solid-react-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/walterglezp/solid-react-ui
      </a>
      <br />
      <strong>Npm: solid-react-ui</strong>{" "}
      <a
        href="https://www.npmjs.com/package/solid-react-ui"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.npmjs.com/package/solid-react-ui
      </a>
    </p>
    <p>
      A lightweight, production-ready React component library built with
      TypeScript. Includes reusable UI elements like
      <strong> buttons, inputs, layout primitives</strong> (Container, Row,
      Column, Flex), and form controls.
    </p>
    <p>
      All components are styled using a <strong>custom design system</strong>{" "}
      and support custom theming via a<code> ThemeProvider</code>. Everything is
      documented with Storybook.
    </p>

    <h2>🚀 Features</h2>
    <ul>
      <li>⚛️ Built with React + TypeScript</li>
      <li>💡 Tree-shakeable and fully typed components</li>
      <li>🎨 Custom utility-based styling system</li>
      <li>🎭 Theme customization with ThemeProvider</li>
      <li>🧪 Storybook for UI documentation and testing</li>
      <li>📦 Ready to publish as an npm package</li>
      <li>🧩 Includes layout, form, and input building blocks</li>
      <li>🔍 Strict ESLint + Prettier integration</li>
    </ul>

    <h2>📦 Install</h2>
    <pre>
      <code>npm install solid-react-ui</code>
    </pre>

    <h2>🎨 Styles</h2>
    <p>
      Import styles in your app entry point:
      <pre>
        <code>import 'solid-react-ui/dist/index.css';</code>
      </pre>
    </p>

    <h2>🎭 Theme Customization</h2>
    <pre>
      <code>{`<ThemeProvider
  value={{
    name: 'custom',
    borderRadius: '0.5rem',
    borderRadiusSm: '0.25rem',
    borderRadiusLg: '1rem',
  }}
>
  <App />
</ThemeProvider>`}</code>
    </pre>

    <h2>🧪 Run Storybook</h2>
    <pre>
      <code>npx storybook dev -p 6006</code>
    </pre>

    <h2>🛠 Development</h2>
    <pre>
      <code>npx tsup # Build for npm{"\n"}npx eslint src --ext .ts,.tsx</code>
    </pre>

    <h2>📄 License</h2>
    <p>MIT © 2025 Walter Gonzalez</p>
  </div>
);
