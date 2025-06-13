import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Form/ButtonGroup",
  tags: ["autodocs"],
  args: {
    size: "sm",
    vertical: false,
    variant: "group",
    "aria-label": "Button group",
    role: "group",
  },
  argTypes: {
    children: { control: false }, // hide from Controls panel
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Medium: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="primary">Left</Button>
      <Button variant="primary">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
  ),
};

export const Toolbar: Story = {
  args: {
    variant: "toolbar",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <ButtonGroup size="sm" role="group" aria-label="Group 1">
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" role="group" aria-label="Group 2">
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
      </ButtonGroup>
    </ButtonGroup>
  ),
};
