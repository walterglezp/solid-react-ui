import type { Meta, StoryObj } from "@storybook/react";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "./ListGroupItem";

const meta: Meta<typeof ListGroup> = {
  title: "List/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
  args: {
    variant: "basic", // assuming "default" is your base variant
    numbered: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["default", "flush"], // update based on your supported variants
    },
    numbered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

export const BasicList: Story = {
  render: (args) => (
    <ListGroup {...args}>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
    </ListGroup>
  ),
};

export const FlushNumbered: Story = {
  args: {
    variant: "flush",
    numbered: true,
  },
  render: (args) => (
    <ListGroup {...args}>
      <ListGroupItem>One</ListGroupItem>
      <ListGroupItem>Two</ListGroupItem>
    </ListGroup>
  ),
};
