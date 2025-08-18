import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
  title: "Common/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A versatile badge component for displaying short snippets of information.

## Features
- Multiple color variants (primary, secondary, success, danger, warning, info, light, dark)
- Three size options (sm, md, lg)
- Support for icons with text
- Pill-shaped variant for modern appearance
- Outline style for subtle emphasis
- Responsive design for mobile devices
- Empty state for notification dots
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
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
      ],
      description: "Color variant of the badge",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the badge",
    },
    pill: {
      control: { type: "boolean" },
      description: "Whether to use pill-shaped border radius",
    },
    outline: {
      control: { type: "boolean" },
      description: "Whether to use outline style",
    },
    icon: {
      control: { type: "text" },
      description: "Icon to display before the text",
    },
    children: {
      control: { type: "text" },
      description: "Badge content",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    variant: "primary",
    size: "md",
    pill: false,
    outline: false,
    children: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic variants
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "Info",
  },
};

export const Light: Story = {
  args: {
    variant: "light",
    children: "Light",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "Dark",
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Badge size="sm" variant="primary">
        Small
      </Badge>
      <Badge size="md" variant="primary">
        Medium
      </Badge>
      <Badge size="lg" variant="primary">
        Large
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Three different size options for various use cases.",
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Badge variant="success" icon="check">
        Completed
      </Badge>
      <Badge variant="danger" icon="times">
        Failed
      </Badge>
      <Badge variant="warning" icon="exclamation-triangle">
        Warning
      </Badge>
      <Badge variant="info" icon="info-circle">
        Info
      </Badge>
      <Badge variant="primary" icon="star">
        Featured
      </Badge>
      <Badge variant="secondary" icon="clock">
        Pending
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges with icons to provide visual context.",
      },
    },
  },
};

// Pill shaped
export const Pill: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Badge variant="primary" pill>
        Primary Pill
      </Badge>
      <Badge variant="success" pill>
        Success Pill
      </Badge>
      <Badge variant="danger" pill>
        Danger Pill
      </Badge>
      <Badge variant="warning" pill>
        Warning Pill
      </Badge>
      <Badge variant="info" pill>
        Info Pill
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pill-shaped badges with rounded borders for a modern look.",
      },
    },
  },
};

// Outline style
export const Outline: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      <Badge variant="primary" outline>
        Primary
      </Badge>
      <Badge variant="success" outline>
        Success
      </Badge>
      <Badge variant="danger" outline>
        Danger
      </Badge>
      <Badge variant="warning" outline>
        Warning
      </Badge>
      <Badge variant="info" outline>
        Info
      </Badge>
      <Badge variant="dark" outline>
        Dark
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Outline badges with border styling for subtle emphasis.",
      },
    },
  },
};

// Numbers and counts
export const NumberBadges: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          Messages
        </button>
        <Badge
          variant="danger"
          size="sm"
          style={{ position: "absolute", top: "-8px", right: "-8px" }}
        >
          3
        </Badge>
      </div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          Notifications
        </button>
        <Badge
          variant="primary"
          size="sm"
          style={{ position: "absolute", top: "-8px", right: "-8px" }}
        >
          12
        </Badge>
      </div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          style={{
            padding: "8px 16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            background: "white",
            cursor: "pointer",
          }}
        >
          Cart
        </button>
        <Badge
          variant="success"
          size="sm"
          style={{ position: "absolute", top: "-8px", right: "-8px" }}
        >
          99+
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Badges used as notification counters positioned over buttons or other elements.",
      },
    },
  },
};

// Status badges
export const StatusBadges: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #eee",
          borderRadius: "4px",
        }}
      >
        <span>Order #1234</span>
        <Badge variant="success" icon="check">
          Delivered
        </Badge>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #eee",
          borderRadius: "4px",
        }}
      >
        <span>Order #1235</span>
        <Badge variant="warning" icon="truck">
          Shipping
        </Badge>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #eee",
          borderRadius: "4px",
        }}
      >
        <span>Order #1236</span>
        <Badge variant="info" icon="clock">
          Processing
        </Badge>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #eee",
          borderRadius: "4px",
        }}
      >
        <span>Order #1237</span>
        <Badge variant="danger" icon="times">
          Cancelled
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges used to display status information in lists or cards.",
      },
    },
  },
};

// Tag-style badges
export const Tags: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "6px",
        maxWidth: "400px",
      }}
    >
      <Badge variant="light" pill size="sm">
        React
      </Badge>
      <Badge variant="light" pill size="sm">
        TypeScript
      </Badge>
      <Badge variant="light" pill size="sm">
        JavaScript
      </Badge>
      <Badge variant="light" pill size="sm">
        CSS
      </Badge>
      <Badge variant="light" pill size="sm">
        HTML
      </Badge>
      <Badge variant="light" pill size="sm">
        Node.js
      </Badge>
      <Badge variant="light" pill size="sm">
        Storybook
      </Badge>
      <Badge variant="light" pill size="sm">
        Jest
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Small pill badges used as tags or labels for categorization.",
      },
    },
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Filled Badges
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="light">Light</Badge>
          <Badge variant="dark">Dark</Badge>
        </div>
      </div>

      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Outline Badges
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Badge variant="primary" outline>
            Primary
          </Badge>
          <Badge variant="secondary" outline>
            Secondary
          </Badge>
          <Badge variant="success" outline>
            Success
          </Badge>
          <Badge variant="danger" outline>
            Danger
          </Badge>
          <Badge variant="warning" outline>
            Warning
          </Badge>
          <Badge variant="info" outline>
            Info
          </Badge>
          <Badge variant="light" outline>
            Light
          </Badge>
          <Badge variant="dark" outline>
            Dark
          </Badge>
        </div>
      </div>

      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Pill Badges with Icons
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Badge variant="primary" pill icon="user">
            User
          </Badge>
          <Badge variant="success" pill icon="check">
            Verified
          </Badge>
          <Badge variant="danger" pill icon="times">
            Blocked
          </Badge>
          <Badge variant="warning" pill icon="exclamation-triangle">
            Alert
          </Badge>
          <Badge variant="info" pill icon="info-circle">
            Help
          </Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive showcase of all badge variants, styles, and features.",
      },
    },
  },
};
