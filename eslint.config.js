const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsparser = require("@typescript-eslint/parser");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // Node.js globals
        console: "readonly",
        process: "readonly",
        Buffer: "readonly",
        global: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",

        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        location: "readonly",
        history: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        atob: "readonly",
        btoa: "readonly",

        // DOM/Browser types
        HTMLElement: "readonly",
        HTMLDivElement: "readonly",
        HTMLInputElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLSelectElement: "readonly",
        HTMLTextAreaElement: "readonly",
        HTMLAnchorElement: "readonly",
        HTMLLIElement: "readonly",
        HTMLUListElement: "readonly",
        HTMLImageElement: "readonly",
        HTMLFormElement: "readonly",
        Node: "readonly",
        Element: "readonly",
        Event: "readonly",
        MouseEvent: "readonly",
        KeyboardEvent: "readonly",
        TouchEvent: "readonly",
        MediaQueryListEvent: "readonly",
        File: "readonly",
        FileReader: "readonly",
        Image: "readonly",
        Blob: "readonly",
        BlobPart: "readonly",

        // React
        React: "readonly",
        JSX: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
      "react-hooks": reactHooks,
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",

      // React rules
      "react/react-in-jsx-scope": "off", // Not needed with React 17+
      "react/prop-types": "off", // We use TypeScript for prop validation
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // General JavaScript rules
      "no-unused-vars": "off", // Use TypeScript version instead
      "prefer-const": "error",
      "no-console": "warn",
      "no-debugger": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.stories.{ts,tsx}", "**/*.test.{ts,tsx}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/rules-of-hooks": "off", // Storybook render functions can use hooks
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    ignores: [
      "dist/",
      "node_modules/",
      "storybook-static/",
      "*.config.js",
      "*.config.ts",
    ],
  },
];
