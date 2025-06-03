import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs"],
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...config.define,
        "process.env": {},
      },
    };
  },
};

export default config;
