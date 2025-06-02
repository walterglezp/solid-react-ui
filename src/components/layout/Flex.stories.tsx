import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Centered: Story = {
  args: {
    align: "center",
    justify: "center",
    children: <div>Centered Flex Content</div>,
  },
};
