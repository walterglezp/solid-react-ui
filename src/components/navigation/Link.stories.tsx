import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Navigation/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Link key={variant} variant={variant as any} to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Link
        </Link>
      ))}
    </div>
  ),
};

export const Underlined: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Link key={variant} variant={variant as any} underlined to="#">
          {variant.charAt(0).toUpperCase() + variant.slice(1)} Underlined
        </Link>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    to: "#",
    variant: "danger",
    disabled: true,
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
