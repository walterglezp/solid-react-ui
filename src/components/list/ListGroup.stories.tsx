import type { Meta, StoryObj } from "@storybook/react";
import ListGroup from "./ListGroup";
import ListGroupItem from "./ListGroupItem";

const meta: Meta<typeof ListGroup> = {
  title: "List/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

export const BasicList: Story = {
  render: () => (
    <ListGroup>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
    </ListGroup>
  ),
};

export const FlushNumbered: Story = {
  render: () => (
    <ListGroup variant="flush" numbered>
      <ListGroupItem>One</ListGroupItem>
      <ListGroupItem>Two</ListGroupItem>
    </ListGroup>
  ),
};
