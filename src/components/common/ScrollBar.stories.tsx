import type { Meta, StoryObj } from "@storybook/react";
import { ScrollBar } from "./ScrollBar";

const meta: Meta<typeof ScrollBar> = {
  title: "Common/ScrollBar",
  component: ScrollBar,
  tags: ["autodocs"],
  args: {
    axis: "vertical",
    variant: "grey",
    height: "200px",
    width: "300px",
  },
  argTypes: {
    axis: {
      control: "radio",
      options: ["horizontal", "vertical", "both"],
    },
    variant: {
      control: "radio",
      options: ["grey", "light"],
    },
    height: { control: "text" },
    width: { control: "text" },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollBar>;

const generateParagraphs = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <p key={i} style={{ margin: 0, padding: "0.5rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. #{i + 1}
    </p>
  ));

export const Vertical: Story = {
  args: {
    axis: "vertical",
  },
  render: (args) => <ScrollBar {...args}>{generateParagraphs(20)}</ScrollBar>,
};

export const Horizontal: Story = {
  args: {
    axis: "horizontal",
    height: "120px",
  },
  render: (args) => (
    <ScrollBar {...args}>
      <div style={{ display: "flex", gap: "2rem", width: "1000px" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            style={{
              minWidth: "100px",
              padding: "1rem",
              background: "#dee2e6",
              borderRadius: "0.25rem",
              textAlign: "center",
            }}
          >
            Box {i + 1}
          </div>
        ))}
      </div>
    </ScrollBar>
  ),
};

export const BothAxes: Story = {
  args: {
    axis: "both",
    height: "200px",
    width: "400px",
  },
  render: (args) => (
    <ScrollBar {...args}>
      <div style={{ width: "800px", height: "400px", background: "#f8f9fa" }}>
        <p style={{ padding: "1rem" }}>Scroll me both ways! 👀</p>
      </div>
    </ScrollBar>
  ),
};

export const LightTheme: Story = {
  args: {
    variant: "light",
    axis: "vertical",
  },
  render: (args) => <ScrollBar {...args}>{generateParagraphs(15)}</ScrollBar>,
};
