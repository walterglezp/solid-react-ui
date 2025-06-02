import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: "Default container",
  },
};

export const Fluid: Story = {
  args: {
    size: "fluid",
    children: "Fluid container (100%)",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium container",
  },
};
