import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const variants = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
] as const;

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    to: "#",
    children: "Link Text",
    variant: "primary",
    underlined: false,
    disabled: false,
    blank: false,
  },
  argTypes: {
    variant: { control: "radio", options: variants },
    underlined: { control: "boolean" },
    disabled: { control: "boolean" },
    blank: { control: "boolean" },
    to: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: (args) => <Link {...args} />,
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
        </Link>
      ))}
    </div>
  ),
};

export const Underlined: Story = {
  args: {
    underlined: true,
    children: "Underlined Link",
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {variants.map((variant) => (
        <Link key={variant} {...args} variant={variant} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Underlined
        </Link>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: "danger",
    children: "Disabled Link",
  },
};

export const ExternalLink: Story = {
  args: {
    to: "https://example.com",
    variant: "info",
    blank: true,
    children: "Open in new tab",
  },
};

export const HoverFocus: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Link variant="primary" to="#" className="hover-example">
        Hover Me (use your mouse)
      </Link>
      <Link
        variant="success"
        to="#"
        className="focus-example"
        style={{ outline: "2px dashed #198754" }}
      >
        Focus Me (tab key)
      </Link>
    </div>
  ),
};
