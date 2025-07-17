import type { Preview } from "@storybook/react";
import "../src/styles/global.scss";

const preview: Preview = {
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
          "Layout",
          ["Container", "Row", "Flex"],
          "Form",
          ["Form", "ButtonGroup", "Autoselect"],
        ],
      },
    },
  },
};

export default preview;
