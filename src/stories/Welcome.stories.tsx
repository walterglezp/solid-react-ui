import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
    docs: {
      page: null,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const WelcomeComponent = () => (
  <div
    style={{
      padding: "3rem",
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      maxWidth: "1200px",
      margin: "0 auto",
      lineHeight: 1.6,
    }}
  >
    <div
      style={{
        background:
          "linear-gradient(135deg, #4d6bfe 0%, #7c3aed 50%, #db2777 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        fontSize: "3.5rem",
        fontWeight: 800,
        marginBottom: "1rem",
        letterSpacing: "-1px",
      }}
    >
      SolidReactUI
    </div>

    <p
      style={{
        fontSize: "1.25rem",
        color: "#6b7280",
        marginBottom: "2rem",
        fontWeight: 400,
      }}
    >
      A modern, customizable React component library built with TypeScript and
      SCSS
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          padding: "2rem",
          background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "linear-gradient(135deg, #4d6bfe, #6366f1)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            🎨
          </span>
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "#1f2937",
          }}
        >
          Themeable
        </h3>
        <p style={{ color: "#6b7280", margin: 0 }}>
          Dynamic theming system with CSS custom properties. Easily customize
          colors, typography, and spacing.
        </p>
      </div>

      <div
        style={{
          padding: "2rem",
          background: "linear-gradient(135deg, #f0fff4 0%, #ffffff 100%)",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "linear-gradient(135deg, #10b981, #059669)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            ⚡
          </span>
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "#1f2937",
          }}
        >
          TypeScript First
        </h3>
        <p style={{ color: "#6b7280", margin: 0 }}>
          Built with TypeScript for excellent developer experience, type safety,
          and IDE support.
        </p>
      </div>

      <div
        style={{
          padding: "2rem",
          background: "linear-gradient(135deg, #fef7ff 0%, #ffffff 100%)",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            background: "linear-gradient(135deg, #7c3aed, #8b5cf6)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
          >
            📱
          </span>
        </div>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "0.5rem",
            color: "#1f2937",
          }}
        >
          Responsive
        </h3>
        <p style={{ color: "#6b7280", margin: 0 }}>
          Mobile-first design with responsive components that work beautifully
          across all devices.
        </p>
      </div>
    </div>

    <div
      style={{
        marginTop: "3rem",
        padding: "2rem",
        background: "linear-gradient(135deg, #1f2937 0%, #374151 100%)",
        borderRadius: "12px",
        color: "white",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1rem",
          color: "white",
        }}
      >
        Getting Started
      </h3>
      <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
        Explore the component categories in the sidebar to see all available
        components, their variants, and interactive examples.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div
          style={{
            padding: "0.75rem 1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          📋 Form Components
        </div>
        <div
          style={{
            padding: "0.75rem 1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          🧭 Navigation Components
        </div>
        <div
          style={{
            padding: "0.75rem 1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          📐 Layout Components
        </div>
        <div
          style={{
            padding: "0.75rem 1rem",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "6px",
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        >
          🎨 Theme System
        </div>
      </div>
    </div>
  </div>
);

export const Welcome: Story = {
  render: () => <WelcomeComponent />,
  parameters: {
    docs: {
      disable: true,
    },
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },
  },
};
