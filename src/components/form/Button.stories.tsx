import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../graphic/Icon";

const meta: Meta<typeof Button> = {
  title: "Form/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link",
      ],
    },
    disabled: {
      control: "boolean",
    },
    outline: {
      control: "boolean",
    },
    noBorder: {
      control: "boolean",
    },
    active: {
      control: "boolean",
    },
    block: {
      control: "boolean",
    },
    btnIcon: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic button examples
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    variant: "primary",
    size: "md",
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "primary",
    size: "md",
    disabled: true,
  },
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm" variant="primary">
        Small
      </Button>
      <Button size="md" variant="primary">
        Medium
      </Button>
      <Button size="lg" variant="primary">
        Large
      </Button>
    </div>
  ),
};

// All variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// Outline variants
export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      <Button variant="primary" outline>
        Primary
      </Button>
      <Button variant="secondary" outline>
        Secondary
      </Button>
      <Button variant="success" outline>
        Success
      </Button>
      <Button variant="danger" outline>
        Danger
      </Button>
      <Button variant="warning" outline>
        Warning
      </Button>
      <Button variant="info" outline>
        Info
      </Button>
      <Button variant="light" outline>
        Light
      </Button>
      <Button variant="dark" outline>
        Dark
      </Button>
    </div>
  ),
};

// Size comparison for all variants
export const SizeComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <strong>Small:</strong>
        <Button size="sm" variant="primary">
          Primary
        </Button>
        <Button size="sm" variant="secondary">
          Secondary
        </Button>
        <Button size="sm" variant="success">
          Success
        </Button>
        <Button size="sm" variant="danger">
          Danger
        </Button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <strong>Medium:</strong>
        <Button size="md" variant="primary">
          Primary
        </Button>
        <Button size="md" variant="secondary">
          Secondary
        </Button>
        <Button size="md" variant="success">
          Success
        </Button>
        <Button size="md" variant="danger">
          Danger
        </Button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <strong>Large:</strong>
        <Button size="lg" variant="primary">
          Primary
        </Button>
        <Button size="lg" variant="secondary">
          Secondary
        </Button>
        <Button size="lg" variant="success">
          Success
        </Button>
        <Button size="lg" variant="danger">
          Danger
        </Button>
      </div>
    </div>
  ),
};

// Loading states
export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm" variant="primary" isLoading>
        Small Loading
      </Button>
      <Button size="md" variant="secondary" isLoading>
        Medium Loading
      </Button>
      <Button size="lg" variant="success" isLoading>
        Large Loading
      </Button>
    </div>
  ),
};

// Buttons with icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary">
        <Icon name="plus" size={16} className="me-2" />
        Add Item
      </Button>
      <Button variant="danger">
        <Icon name="trash-alt" size={16} className="me-2" />
        Delete
      </Button>
      <Button variant="success">
        <Icon name="check-mark-fill" size={16} className="me-2" />
        Approve
      </Button>
      <Button variant="info">
        <Icon name="save-disc" size={16} className="me-2" />
        Download
      </Button>
    </div>
  ),
};

// Icon-only buttons
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
      <Button variant="primary" btnIcon size="sm">
        <Icon name="plus" size={14} />
      </Button>
      <Button variant="secondary" btnIcon size="md">
        <Icon name="edit" size={16} />
      </Button>
      <Button variant="danger" btnIcon size="lg">
        <Icon name="trash-alt" size={18} />
      </Button>
    </div>
  ),
};

// Block button
export const BlockButton: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Button variant="primary" block size="lg">
        Full Width Block Button
      </Button>
    </div>
  ),
};

// Special states
export const SpecialStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <strong>Active State:</strong>
        <Button variant="primary" active>
          Active Primary
        </Button>
        <Button variant="secondary" active>
          Active Secondary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <strong>No Border:</strong>
        <Button variant="primary" noBorder>
          No Border Primary
        </Button>
        <Button variant="secondary" noBorder>
          No Border Secondary
        </Button>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <strong>Disabled:</strong>
        <Button variant="primary" disabled>
          Disabled Primary
        </Button>
        <Button variant="secondary" disabled>
          Disabled Secondary
        </Button>
      </div>
    </div>
  ),
};

// Interactive playground
export const Playground: Story = {
  args: {
    children: "Playground Button",
    variant: "primary",
    size: "md",
    disabled: false,
    outline: false,
    noBorder: false,
    active: false,
    block: false,
    btnIcon: false,
    isLoading: false,
  },
};
