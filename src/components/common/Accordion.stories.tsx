import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, type AccordionItemProps } from "./Accordion";
import React from "react";

const meta: Meta<typeof Accordion> = {
  title: "Common/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible accordion component with expandable panels, similar styling to Menu component, supporting various configurations and animations.",
      },
    },
  },
  argTypes: {
    allowMultiple: {
      description: "Allow multiple panels to be open at once",
      control: { type: "boolean" },
    },
    allowToggle: {
      description: "Allow all panels to be closed",
      control: { type: "boolean" },
    },
    variant: {
      description: "Visual variant of the accordion",
      control: { type: "select" },
      options: ["default", "bordered", "filled"],
    },
    size: {
      description: "Size variant",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    chevronIcon: {
      description: "Custom chevron icon",
      control: { type: "select" },
      options: [
        "chevron-down",
        "chevron-up",
        "caret-down",
        "caret-up",
        "arrow-down",
        "arrow-up",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// Sample content for stories
const sampleItems: AccordionItemProps[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: (
      <div>
        <p>Welcome to our platform! Here's how to get started:</p>
        <ol>
          <li>Create your account</li>
          <li>Complete your profile</li>
          <li>Explore the dashboard</li>
          <li>Start your first project</li>
        </ol>
        <p>If you need help, don't hesitate to contact our support team.</p>
      </div>
    ),
    icon: "home-fill",
    defaultOpen: true,
  },
  {
    id: "account-settings",
    title: "Account Settings",
    content: (
      <div>
        <p>Manage your account preferences and security settings:</p>
        <ul>
          <li>
            <strong>Profile Information:</strong> Update your name, email, and
            photo
          </li>
          <li>
            <strong>Privacy Settings:</strong> Control who can see your
            information
          </li>
          <li>
            <strong>Security:</strong> Change password and enable two-factor
            authentication
          </li>
          <li>
            <strong>Notifications:</strong> Customize your notification
            preferences
          </li>
        </ul>
      </div>
    ),
    icon: "user-settings",
    badge: "New",
  },
  {
    id: "billing",
    title: "Billing & Payments",
    content: (
      <div>
        <p>Manage your subscription and payment methods:</p>
        <ul>
          <li>View current plan and usage</li>
          <li>Update payment methods</li>
          <li>Download invoices and receipts</li>
          <li>Upgrade or downgrade your plan</li>
        </ul>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            marginTop: "16px",
          }}
        >
          <strong>Current Plan:</strong> Professional ($29/month)
        </div>
      </div>
    ),
    icon: "save-disc",
    badge: 3,
  },
  {
    id: "help-support",
    title: "Help & Support",
    content: (
      <div>
        <p>Find answers and get help when you need it:</p>
        <ul>
          <li>
            <strong>Documentation:</strong> Comprehensive guides and tutorials
          </li>
          <li>
            <strong>FAQ:</strong> Frequently asked questions
          </li>
          <li>
            <strong>Community:</strong> Connect with other users
          </li>
          <li>
            <strong>Contact Support:</strong> Reach out to our team directly
          </li>
        </ul>
        <p>
          Average response time: <strong>2 hours</strong>
        </p>
      </div>
    ),
    icon: "support",
  },
  {
    id: "advanced-features",
    title: "Advanced Features",
    content: (
      <div>
        <p>Explore advanced functionality for power users:</p>
        <ul>
          <li>API access and webhooks</li>
          <li>Custom integrations</li>
          <li>Advanced analytics</li>
          <li>Bulk operations</li>
        </ul>
        <p>Note: Some features may require a higher-tier subscription.</p>
      </div>
    ),
    icon: "gear",
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Basic accordion with default settings. Only one panel can be open at a time.",
      },
    },
  },
};

export const AllowMultiple: Story = {
  args: {
    items: sampleItems,
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion allowing multiple panels to be open simultaneously.",
      },
    },
  },
};

export const BorderedVariant: Story = {
  args: {
    items: sampleItems,
    variant: "bordered",
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Bordered variant with enhanced visual separation and background.",
      },
    },
  },
};

export const FilledVariant: Story = {
  args: {
    items: sampleItems,
    variant: "filled",
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Filled variant with background color and rounded corners.",
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4>Small</h4>
        <Accordion
          items={sampleItems.slice(0, 3)}
          size="sm"
          variant="bordered"
          allowMultiple
        />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <Accordion
          items={sampleItems.slice(0, 3)}
          size="md"
          variant="bordered"
          allowMultiple
        />
      </div>
      <div>
        <h4>Large</h4>
        <Accordion
          items={sampleItems.slice(0, 3)}
          size="lg"
          variant="bordered"
          allowMultiple
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different size variants of the accordion component.",
      },
    },
  },
};

export const CustomChevron: Story = {
  args: {
    items: sampleItems,
    variant: "bordered",
    chevronIcon: "arrow-down",
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Accordion with custom chevron icon (arrow instead of chevron).",
      },
    },
  },
};

export const FAQ: Story = {
  args: {
    items: [
      {
        id: "what-is-pricing",
        title: "What is your pricing model?",
        content: (
          <div>
            <p>We offer flexible pricing based on your usage and needs:</p>
            <ul>
              <li>
                <strong>Free Plan:</strong> Perfect for getting started (up to 3
                projects)
              </li>
              <li>
                <strong>Professional:</strong> $29/month for small teams (up to
                25 projects)
              </li>
              <li>
                <strong>Enterprise:</strong> Custom pricing for large
                organizations
              </li>
            </ul>
            <p>
              All plans include 24/7 support and a 30-day money-back guarantee.
            </p>
          </div>
        ),
        defaultOpen: true,
      },
      {
        id: "how-to-cancel",
        title: "How can I cancel my subscription?",
        content: (
          <div>
            <p>You can cancel your subscription at any time:</p>
            <ol>
              <li>Go to Account Settings</li>
              <li>Click on "Billing & Subscription"</li>
              <li>Select "Cancel Subscription"</li>
              <li>Follow the prompts to confirm</li>
            </ol>
            <p>
              Your account will remain active until the end of your current
              billing period.
            </p>
          </div>
        ),
      },
      {
        id: "data-security",
        title: "How do you protect my data?",
        content: (
          <div>
            <p>We take data security very seriously:</p>
            <ul>
              <li>All data is encrypted in transit and at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II certified</li>
              <li>GDPR and CCPA compliant</li>
              <li>24/7 monitoring and threat detection</li>
            </ul>
            <p>
              For more details, please review our{" "}
              <a href="#">Security Documentation</a>.
            </p>
          </div>
        ),
        icon: "shield",
      },
      {
        id: "api-access",
        title: "Do you provide API access?",
        content: (
          <div>
            <p>Yes! We offer comprehensive API access:</p>
            <ul>
              <li>RESTful API with full CRUD operations</li>
              <li>Real-time webhooks for instant notifications</li>
              <li>SDKs available for popular programming languages</li>
              <li>Rate limiting: 1000 requests/minute</li>
              <li>Comprehensive documentation and examples</li>
            </ul>
            <p>API access is available on Professional and Enterprise plans.</p>
          </div>
        ),
        icon: "coding",
        badge: "API",
      },
      {
        id: "mobile-app",
        title: "Is there a mobile app available?",
        content: (
          <div>
            <p>We're currently working on mobile applications:</p>
            <ul>
              <li>
                <strong>iOS App:</strong> In beta testing (Q2 2024)
              </li>
              <li>
                <strong>Android App:</strong> In development (Q3 2024)
              </li>
              <li>
                <strong>Mobile Web:</strong> Fully responsive and available now
              </li>
            </ul>
            <p>
              Sign up for our newsletter to get notified when the mobile apps
              are released!
            </p>
          </div>
        ),
        badge: "Coming Soon",
      },
    ],
    variant: "default",
    allowToggle: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "FAQ-style accordion with realistic content and mixed configurations.",
      },
    },
  },
};

export const SimpleContent: Story = {
  args: {
    items: [
      {
        id: "section1",
        title: "Section One",
        content: "This is a simple text content for the first section.",
      },
      {
        id: "section2",
        title: "Section Two",
        content: "This is another simple text content for the second section.",
        icon: "star",
      },
      {
        id: "section3",
        title: "Section Three",
        content: "And this is the content for the third section.",
        badge: "New",
      },
    ],
    variant: "filled",
    allowMultiple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Simple accordion with basic text content and minimal configuration.",
      },
    },
  },
};

export const InteractiveDemo: Story = {
  render: () => {
    const [config, setConfig] = React.useState({
      allowMultiple: false,
      allowToggle: true,
      variant: "default" as "default" | "bordered" | "filled",
      size: "md" as "sm" | "md" | "lg",
      chevronIcon: "chevron-down" as const,
    });

    return (
      <div style={{ maxWidth: "800px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "32px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <div>
            <label>
              <input
                type="checkbox"
                checked={config.allowMultiple}
                onChange={(e) =>
                  setConfig({ ...config, allowMultiple: e.target.checked })
                }
              />{" "}
              Allow Multiple Open
            </label>
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={config.allowToggle}
                onChange={(e) =>
                  setConfig({ ...config, allowToggle: e.target.checked })
                }
              />{" "}
              Allow Toggle (Close All)
            </label>
          </div>

          <div>
            <label>
              Variant:{" "}
              <select
                value={config.variant}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    variant: e.target.value as
                      | "default"
                      | "bordered"
                      | "filled",
                  })
                }
              >
                <option value="default">Default</option>
                <option value="bordered">Bordered</option>
                <option value="filled">Filled</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              Size:{" "}
              <select
                value={config.size}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    size: e.target.value as "sm" | "md" | "lg",
                  })
                }
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </label>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label>
              Chevron Icon:{" "}
              <select
                value={config.chevronIcon}
                onChange={(e) =>
                  setConfig({ ...config, chevronIcon: e.target.value as any })
                }
              >
                <option value="chevron-down">Chevron Down</option>
                <option value="caret-down">Caret Down</option>
                <option value="arrow-down">Arrow Down</option>
              </select>
            </label>
          </div>
        </div>

        <Accordion
          items={sampleItems.slice(0, 4)}
          allowMultiple={config.allowMultiple}
          allowToggle={config.allowToggle}
          variant={config.variant}
          size={config.size}
          chevronIcon={config.chevronIcon}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demo allowing you to test different accordion configurations in real-time.",
      },
    },
  },
};
