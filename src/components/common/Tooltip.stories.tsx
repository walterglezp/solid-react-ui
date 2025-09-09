import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../form/Button";

const meta = {
  title: "Common/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A modern, accessible tooltip component that displays helpful information when hovering over or focusing on an element.

## Features
- Multiple position options (top, right, bottom, left)
- Configurable delay for better UX
- Accessible with proper ARIA attributes
- Modern design matching the design system
- Smooth animations and transitions
- Focus support for keyboard navigation
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "Position of the tooltip relative to the trigger element",
    },
    content: {
      control: { type: "text" },
      description: "Content to display in the tooltip",
    },
    delay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
      description: "Delay in milliseconds before showing the tooltip",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the tooltip is disabled",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling",
    },
  },
  args: {
    content: "This is a helpful tooltip",
    position: "top",
    delay: 200,
    disabled: false,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic tooltip examples
export const Default: Story = {
  args: {
    content: "This is a default tooltip",
    children: <Button variant="primary">Hover me</Button>,
  },
};

export const Top: Story = {
  args: {
    position: "top",
    content: "Tooltip positioned at the top",
    children: <Button variant="secondary">Top Tooltip</Button>,
  },
};

export const Right: Story = {
  args: {
    position: "right",
    content: "Tooltip positioned at the right",
    children: <Button variant="success">Right Tooltip</Button>,
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    content: "Tooltip positioned at the bottom",
    children: <Button variant="warning">Bottom Tooltip</Button>,
  },
};

export const Left: Story = {
  args: {
    position: "left",
    content: "Tooltip positioned at the left",
    children: <Button variant="danger">Left Tooltip</Button>,
  },
};

// Content variations
export const LongContent: Story = {
  args: {
    content:
      "This is a much longer tooltip content that will wrap to multiple lines when it exceeds the maximum width",
    children: (
      <Button variant="primary" outline>
        Long Content
      </Button>
    ),
  },
};

export const ShortContent: Story = {
  args: {
    content: "Hi!",
    children: (
      <Button variant="secondary" outline>
        Short
      </Button>
    ),
  },
};

export const WithReactContent: Story = {
  args: {
    content: (
      <div>
        <strong>Bold text</strong> and <em>italic text</em>
      </div>
    ),
    children: (
      <Button variant="success" outline>
        React Content
      </Button>
    ),
  },
};

// Interaction variations
export const FastDelay: Story = {
  args: {
    delay: 0,
    content: "Instant tooltip (no delay)",
    children: (
      <Button variant="warning" outline>
        Fast
      </Button>
    ),
  },
};

export const SlowDelay: Story = {
  args: {
    delay: 1000,
    content: "Slow tooltip (1 second delay)",
    children: (
      <Button variant="danger" outline>
        Slow
      </Button>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    content: "You should not see this tooltip",
    children: (
      <Button variant="secondary" disabled>
        Disabled Tooltip
      </Button>
    ),
  },
};

// Layout examples
export const AllPositions: Story = {
  args: {
    children: <div />,
    content: "",
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "60px",
        padding: "60px",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <div></div>
      <Tooltip position="top" content="Top position">
        <Button variant="primary">Top</Button>
      </Tooltip>
      <div></div>

      <Tooltip position="left" content="Left position">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <div
        style={{
          padding: "20px",
          backgroundColor: "var(--color-gray-100)",
          borderRadius: "var(--border-radius-md)",
          textAlign: "center",
        }}
      >
        Center Reference
      </div>
      <Tooltip position="right" content="Right position">
        <Button variant="success">Right</Button>
      </Tooltip>

      <div></div>
      <Tooltip position="bottom" content="Bottom position">
        <Button variant="warning">Bottom</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All four position options displayed in a grid layout for easy comparison.",
      },
    },
  },
};

export const WithDifferentTriggers: Story = {
  args: {
    children: <div />,
    content: "",
  },
  render: () => (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <Tooltip content="Button tooltip">
        <Button variant="primary">Button</Button>
      </Tooltip>

      <Tooltip content="Text tooltip">
        <span
          style={{
            padding: "8px 12px",
            backgroundColor: "var(--color-primary-100)",
            borderRadius: "var(--border-radius-md)",
            cursor: "help",
          }}
        >
          Hover this text
        </span>
      </Tooltip>

      <Tooltip content="Icon tooltip">
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            backgroundColor: "var(--color-info-500)",
            color: "white",
            borderRadius: "50%",
            cursor: "help",
            fontWeight: "bold",
          }}
        >
          ?
        </span>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tooltips can be used with different types of trigger elements.",
      },
    },
  },
};

// Edge cases and accessibility
export const Accessibility: Story = {
  args: {
    children: <div />,
    content: "",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Tooltip content="Accessible via keyboard focus">
        <button
          style={{
            padding: "8px 16px",
            border: "2px solid var(--color-primary-500)",
            borderRadius: "var(--border-radius-md)",
            backgroundColor: "transparent",
            color: "var(--color-primary-500)",
            cursor: "pointer",
          }}
        >
          Focus me with Tab
        </button>
      </Tooltip>

      <Tooltip content="Also accessible via keyboard">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            color: "var(--color-primary-500)",
            textDecoration: "underline",
          }}
        >
          Focusable link
        </a>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Tooltips are accessible via keyboard navigation and work with focusable elements.",
      },
    },
  },
};
