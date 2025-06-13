import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";
import { Column } from "./Column";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],
  args: {
    className: "",
  },
  argTypes: {
    children: { control: false },
    className: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Basic: Story = {
  render: (args) => (
    <Row {...args}>
      <Column sm="6">Column 1</Column>
      <Column sm="6">Column 2</Column>
    </Row>
  ),
};
