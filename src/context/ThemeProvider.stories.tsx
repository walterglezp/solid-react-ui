import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "./ThemeContext";
import type { ThemeContextProps } from "./ThemeContext";
import { Button } from "../components/form/Button";

// Match your actual ThemeName type if exported, e.g. "light" | "dark"
type ThemeName = "light" | "dark";

const meta: Meta<typeof ThemeProvider> = {
  title: "Theme/ThemeProvider",
  component: ThemeProvider,
  tags: ["autodocs"],
  args: {
    value: {
      name: "light" as ThemeName,
      borderRadius: "0.25rem",
    },
  },
  argTypes: {
    value: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const RadiusDemo: Story = {
  render: (args) => {
    const [radius, setRadius] = useState(args.value?.borderRadius ?? "0.25rem");
    const themeName = args.value?.name ?? "light";

    return (
      <div style={{ padding: "2rem" }}>
        <label className="form-label mb-2">Border Radius</label>
        <select
          className="form-select mb-3 w-auto"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        >
          <option value="0rem">None</option>
          <option value="0.25rem">Small (4px)</option>
          <option value="0.375rem">Medium (6px)</option>
          <option value="0.5rem">Large (8px)</option>
          <option value="1rem">Extra Large (16px)</option>
        </select>

        <ThemeProvider
          value={{ name: themeName as ThemeName, borderRadius: radius }}
        >
          <Button variant="primary">Primary Button</Button>{" "}
          <Button variant="success">Success Button</Button>
        </ThemeProvider>
      </div>
    );
  },
};
