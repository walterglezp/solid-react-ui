import type { Meta, StoryObj } from "@storybook/react";
import { ModalDialog } from "./ModalDialog";
import { Button } from "../form/Button";
import { useState } from "react";

const meta = {
  title: "Common/ModalDialog",
  component: ModalDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A clean, minimal modal dialog component inspired by modern design patterns.

## Features
- Clean white background with subtle drop shadow
- No visual separators between sections
- Typography-based hierarchy (bold titles, regular body text)
- Flexible layouts supporting various content types
- Keyboard navigation (Escape to close)
- Backdrop click to dismiss
- Multiple size options
- Smooth animations
- Mobile responsive design
- Proper accessibility with ARIA attributes
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
      description: "Whether the modal is open",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the modal",
    },
    title: {
      control: { type: "text" },
      description: "Modal title",
    },
    children: {
      control: { type: "text" },
      description: "Modal body content",
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
      description: "Whether to close modal when clicking backdrop",
    },
    closeOnEscape: {
      control: { type: "boolean" },
      description: "Whether to close modal when pressing Escape",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
  },
  args: {
    isOpen: false,
    size: "md",
    closeOnBackdropClick: true,
    closeOnEscape: true,
    showCloseButton: true,
  },
} satisfies Meta<typeof ModalDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic confirmation modal
export const BasicConfirmation: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Connect Account</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Connect External Service"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>
                Continue
              </Button>
            </>
          }
        >
          <p>
            You're about to connect to an external service. You will need to
            authorize the connection to allow data synchronization between your
            accounts.
          </p>
          <p style={{ marginTop: "16px", color: "#666" }}>
            By continuing, future connections will be established automatically.
          </p>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A confirmation modal with title, body text, and action buttons for important decisions.",
      },
    },
  },
};

// Feedback modal with rating
export const FeedbackRating: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);

    const StarRating = () => (
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            style={{
              background: "none",
              border: "none",
              fontSize: "32px",
              cursor: "pointer",
              color: star <= rating ? "#ffd700" : "#ddd",
            }}
          >
            ★
          </button>
        ))}
      </div>
    );

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Give Feedback</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          title="How was your experience?"
        >
          <p
            style={{ textAlign: "center", marginBottom: "24px", color: "#666" }}
          >
            Your feedback helps us improve our platform.
          </p>
          <StarRating />
          <p
            style={{
              textAlign: "center",
              marginTop: "16px",
              color: "#999",
              fontSize: "14px",
            }}
          >
            Click to rate
          </p>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A feedback modal with star rating, demonstrating centered content and interactive elements.",
      },
    },
  },
};

// Simple content modal
export const SimpleContent: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Learn More</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          title="Getting Started Guide"
          footer={
            <Button variant="danger" onClick={() => setIsOpen(false)}>
              Got it
            </Button>
          }
        >
          <div style={{ padding: "20px 0" }}>
            <div
              style={{
                minHeight: "200px",
                background: "#f8f9fa",
                borderRadius: "8px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              Media content area
            </div>
            <p>
              Learn the fundamentals of using our platform effectively. This
              comprehensive guide covers all the essential features and best
              practices to help you get the most out of your experience.
            </p>
          </div>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A simple content modal with media area and instructional content.",
      },
    },
  },
};

// Settings/Form modal
export const SettingsForm: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    children: "Content",
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
      notifications: false,
      autoSave: false,
      language: "English",
    });

    const Toggle = ({
      checked,
      onChange,
      label,
    }: {
      checked: boolean;
      onChange: (checked: boolean) => void;
      label: string;
    }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <span>{label}</span>
        <button
          onClick={() => onChange(!checked)}
          style={{
            width: "48px",
            height: "24px",
            borderRadius: "12px",
            border: "none",
            background: checked ? "#007bff" : "#ddd",
            position: "relative",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "white",
              position: "absolute",
              top: "2px",
              left: checked ? "26px" : "2px",
              transition: "left 0.2s",
            }}
          />
        </button>
      </div>
    );

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Settings</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
          title="Application Settings"
        >
          <Toggle
            checked={settings.notifications}
            onChange={(checked) =>
              setSettings((prev) => ({ ...prev, notifications: checked }))
            }
            label="Enable notifications"
          />

          <Toggle
            checked={settings.autoSave}
            onChange={(checked) =>
              setSettings((prev) => ({ ...prev, autoSave: checked }))
            }
            label="Auto-save documents"
          />

          <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
            Automatically save your work every few minutes to prevent data loss.
          </p>

          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>Theme preference</span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                Select theme ›
              </button>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Display language</span>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
              }}
            >
              {settings.language} ›
            </button>
          </div>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A settings/form modal with toggles and selectors, demonstrating form-like layouts.",
      },
    },
  },
};

// Different sizes
export const Sizes: Story = {
  args: {
    children: <div />,
    onClose: () => {},
  },
  render: () => {
    const [openModal, setOpenModal] = useState<string | null>(null);

    const sizes = [
      { size: "sm" as const, label: "Small (400px)" },
      { size: "md" as const, label: "Medium (500px)" },
      { size: "lg" as const, label: "Large (800px)" },
      { size: "xl" as const, label: "Extra Large (1200px)" },
    ];

    return (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {sizes.map(({ size, label }) => (
          <div key={size}>
            <Button onClick={() => setOpenModal(size)}>{label}</Button>
            <ModalDialog
              isOpen={openModal === size}
              onClose={() => setOpenModal(null)}
              size={size}
              title={`${label} Modal`}
              footer={<Button onClick={() => setOpenModal(null)}>Close</Button>}
            >
              <p>
                This is a {size} modal demonstrating the {label.toLowerCase()}{" "}
                size option. The modal automatically adjusts its width based on
                the size prop while maintaining responsive behavior on smaller
                screens.
              </p>
            </ModalDialog>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Different modal sizes from small to extra large.",
      },
    },
  },
};

// Without close button
export const NoCloseButton: Story = {
  args: {
    children: <div />,
    onClose: () => {},
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>
          Open Modal (No Close Button)
        </Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          showCloseButton={false}
          title="Action Required"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>
            This modal doesn't have a close button in the header. You can only
            close it using the footer buttons, the Escape key, or by clicking
            the backdrop.
          </p>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal without the close button, forcing users to use footer actions.",
      },
    },
  },
};

// Complex content
export const ComplexContent: Story = {
  args: {
    children: <div />,
    onClose: () => {},
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Complex Modal</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
          title="User Profile Settings"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Save Changes
              </Button>
            </>
          }
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <div>
              <h4 style={{ margin: "0 0 12px 0", fontWeight: "600" }}>
                Personal Information
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "4px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "4px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ margin: "0 0 12px 0", fontWeight: "600" }}>
                Preferences
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <label
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input type="checkbox" defaultChecked />
                  <span>Email notifications</span>
                </label>
                <label
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input type="checkbox" />
                  <span>SMS notifications</span>
                </label>
                <label
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input type="checkbox" defaultChecked />
                  <span>Marketing communications</span>
                </label>
              </div>
            </div>
          </div>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Modal with complex form content including multiple sections and form elements.",
      },
    },
  },
};

// Edge cases
export const EmptyContent: Story = {
  args: {
    children: "",
    onClose: () => {},
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Empty Modal</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Empty Modal"
        >
          <div>{/* Empty content */}</div>
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with empty content to test edge cases.",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    children: <div />,
    onClose: () => {},
  },
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    const longContent = Array.from({ length: 20 }, (_, i) => (
      <p key={i} style={{ marginBottom: "16px" }}>
        This is paragraph {i + 1} of a very long modal content. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    ));

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Long Content Modal</Button>
        <ModalDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal with Long Content"
          footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
        >
          {longContent}
        </ModalDialog>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Modal with very long content to test scrolling behavior.",
      },
    },
  },
};
