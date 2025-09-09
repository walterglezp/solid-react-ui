/**
 * @fileoverview Tests for Alert component
 */

import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Alert } from "./Alert";

const ALERT_CONTENT = "Test alert message";
const ALERT_TITLE = "Test Alert Title";

describe("Alert", () => {
  test("renders basic alert with content", () => {
    render(<Alert>{ALERT_CONTENT}</Alert>);

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(ALERT_CONTENT);
  });

  test("applies correct variant classes", () => {
    const variants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Alert variant={variant}>{ALERT_CONTENT}</Alert>,
      );

      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass(`alert--${variant}`);

      unmount();
    });
  });

  test("displays default icon by variant", () => {
    const variants = [
      { variant: "success" as const, expectedIcon: "✅" },
      { variant: "danger" as const, expectedIcon: "❌" },
      { variant: "warning" as const, expectedIcon: "⚠️" },
      { variant: "info" as const, expectedIcon: "ℹ️" },
    ];

    variants.forEach(({ variant, expectedIcon }) => {
      const { unmount } = render(
        <Alert variant={variant}>{ALERT_CONTENT}</Alert>,
      );

      expect(screen.getByText(expectedIcon)).toBeInTheDocument();

      unmount();
    });
  });

  test("displays custom icon when provided", () => {
    const customIcon = "🎉";

    render(<Alert icon={customIcon}>{ALERT_CONTENT}</Alert>);

    expect(screen.getByText(customIcon)).toBeInTheDocument();
    // Should not display default icon
    expect(screen.queryByText("ℹ️")).not.toBeInTheDocument();
  });

  test("hides icon when showIcon is false", () => {
    render(<Alert showIcon={false}>{ALERT_CONTENT}</Alert>);

    // Should not display any default icons
    expect(screen.queryByText("ℹ️")).not.toBeInTheDocument();
    expect(screen.queryByText("✅")).not.toBeInTheDocument();
  });

  test("displays title when provided", () => {
    render(<Alert title={ALERT_TITLE}>{ALERT_CONTENT}</Alert>);

    expect(screen.getByText(ALERT_TITLE)).toBeInTheDocument();
    expect(screen.getByText(ALERT_CONTENT)).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const customClass = "custom-alert-class";

    render(<Alert className={customClass}>{ALERT_CONTENT}</Alert>);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass(customClass);
  });

  test("renders dismiss button when dismissible is true", () => {
    render(<Alert dismissible>{ALERT_CONTENT}</Alert>);

    const dismissButton = screen.getByRole("button", {
      name: /dismiss alert/i,
    });
    expect(dismissButton).toBeInTheDocument();
    expect(dismissButton).toHaveClass("alert__dismiss");
  });

  test("does not render dismiss button when dismissible is false", () => {
    render(<Alert dismissible={false}>{ALERT_CONTENT}</Alert>);

    expect(
      screen.queryByRole("button", { name: /dismiss alert/i }),
    ).not.toBeInTheDocument();
  });

  test("calls onDismiss when dismiss button is clicked", async () => {
    const onDismissMock = vi.fn();
    const user = userEvent.setup();

    render(
      <Alert dismissible onDismiss={onDismissMock}>
        {ALERT_CONTENT}
      </Alert>,
    );

    const dismissButton = screen.getByRole("button", {
      name: /dismiss alert/i,
    });
    await user.click(dismissButton);

    expect(onDismissMock).toHaveBeenCalledTimes(1);
  });

  test("dismiss button works with keyboard interaction", async () => {
    const onDismissMock = vi.fn();
    const user = userEvent.setup();

    render(
      <Alert dismissible onDismiss={onDismissMock}>
        {ALERT_CONTENT}
      </Alert>,
    );

    const dismissButton = screen.getByRole("button", {
      name: /dismiss alert/i,
    });
    dismissButton.focus();

    await user.keyboard("{Enter}");
    expect(onDismissMock).toHaveBeenCalledTimes(1);
  });

  test("applies dismissible class when dismissible", () => {
    render(<Alert dismissible>{ALERT_CONTENT}</Alert>);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("alert--dismissible");
  });

  test("supports React node content", () => {
    const reactContent = (
      <div>
        <strong>Bold text</strong> and <em>italic text</em>
      </div>
    );

    render(<Alert>{reactContent}</Alert>);

    expect(screen.getByText("Bold text")).toBeInTheDocument();
    expect(screen.getByText("italic text")).toBeInTheDocument();
  });

  test("supports React node title", () => {
    const reactTitle = (
      <span>
        <strong>Important</strong> Notice
      </span>
    );

    render(<Alert title={reactTitle}>{ALERT_CONTENT}</Alert>);

    expect(screen.getByText("Important")).toBeInTheDocument();
    expect(screen.getByText("Notice")).toBeInTheDocument();
  });

  test("supports React node custom icon", () => {
    const reactIcon = (
      <svg data-testid="custom-svg-icon">
        <circle cx="10" cy="10" r="5" />
      </svg>
    );

    render(<Alert icon={reactIcon}>{ALERT_CONTENT}</Alert>);

    expect(screen.getByTestId("custom-svg-icon")).toBeInTheDocument();
  });

  test("has proper ARIA attributes", () => {
    render(<Alert>{ALERT_CONTENT}</Alert>);

    const alert = screen.getByRole("alert");
    expect(alert).toHaveAttribute("role", "alert");
  });

  test("dismiss button has proper accessibility attributes", () => {
    render(<Alert dismissible>{ALERT_CONTENT}</Alert>);

    const dismissButton = screen.getByRole("button", {
      name: /dismiss alert/i,
    });
    expect(dismissButton).toHaveAttribute("aria-label", "Dismiss alert");
    expect(dismissButton).toHaveAttribute("type", "button");
  });

  test("handles empty content gracefully", () => {
    render(<Alert title={ALERT_TITLE}>{""}</Alert>);

    expect(screen.getByText(ALERT_TITLE)).toBeInTheDocument();
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });

  test("handles missing title gracefully", () => {
    render(<Alert>{ALERT_CONTENT}</Alert>);

    expect(screen.getByText(ALERT_CONTENT)).toBeInTheDocument();
    expect(screen.queryByText(ALERT_TITLE)).not.toBeInTheDocument();
  });

  test("handles missing onDismiss callback gracefully", () => {
    render(<Alert dismissible>{ALERT_CONTENT}</Alert>);

    const dismissButton = screen.getByRole("button", {
      name: /dismiss alert/i,
    });

    // Should not throw error when clicking without onDismiss
    expect(() => {
      fireEvent.click(dismissButton);
    }).not.toThrow();
  });
});

// Property-based tests
describe("Alert Properties", () => {
  test("all variant values produce valid CSS classes", () => {
    const validVariants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
    ];

    validVariants.forEach((variant) => {
      const { unmount } = render(
        <Alert variant={variant as any}>{ALERT_CONTENT}</Alert>,
      );

      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass(`alert--${variant}`);

      unmount();
    });
  });

  test("boolean props work correctly", () => {
    const booleanProps = [
      { prop: "dismissible", expectedClass: "alert--dismissible" },
    ];

    booleanProps.forEach(({ prop, expectedClass }) => {
      const { unmount } = render(
        <Alert {...{ [prop]: true }}>{ALERT_CONTENT}</Alert>,
      );

      const alert = screen.getByRole("alert");
      expect(alert).toHaveClass(expectedClass);

      unmount();
    });
  });

  test("showIcon prop controls icon visibility", () => {
    // Test with showIcon true (default)
    const { unmount: unmount1 } = render(
      <Alert showIcon={true} variant="success">
        {ALERT_CONTENT}
      </Alert>,
    );

    expect(screen.getByText("✅")).toBeInTheDocument();
    unmount1();

    // Test with showIcon false
    const { unmount: unmount2 } = render(
      <Alert showIcon={false} variant="success">
        {ALERT_CONTENT}
      </Alert>,
    );

    expect(screen.queryByText("✅")).not.toBeInTheDocument();
    unmount2();
  });
});
