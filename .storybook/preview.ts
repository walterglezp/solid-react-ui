import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";
import { withTheme } from "./decorators/ThemeDecorator";
import {
  DEFAULT_STORYBOOK_THEME,
  STORYBOOK_THEME_CONTROLS,
} from "../src/theme/storybook-utils";

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      autodocs: true,
    },
    options: {
      storySort: {
        order: [
          "Intro",
          "Theme",
          "Layout",
          ["Container", "Row", "Flex"],
          "Form",
          ["Form", "Button", "ButtonGroup", "Select", "Autoselect"],
        ],
      },
    },
  },
  globalTypes: {
    // Theme preset selector
    themePreset: {
      name: "Theme Preset",
      description: "Choose a theme preset",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "corporate", title: "Corporate" },
          { value: "minimal", title: "Minimal" },
        ],
        showName: true,
      },
    },
    // Primary color control
    primaryColor: {
      name: "Primary Color",
      description: "Primary color for the theme",
      defaultValue: "#4d6bfe",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "#4d6bfe", title: "Blue" },
          { value: "#9333ea", title: "Purple" },
          { value: "#dc2626", title: "Red" },
          { value: "#16a34a", title: "Green" },
          { value: "#ea580c", title: "Orange" },
        ],
        showName: false,
      },
    },
    // Border radius control
    borderRadius: {
      name: "Border Radius",
      description: "Border radius for components",
      defaultValue: "0.25rem",
      toolbar: {
        icon: "outline",
        items: [
          { value: "0rem", title: "None" },
          { value: "0.125rem", title: "Small" },
          { value: "0.25rem", title: "Medium" },
          { value: "0.5rem", title: "Large" },
          { value: "1rem", title: "Extra Large" },
        ],
        showName: false,
      },
    },
  },
};

export default preview;
