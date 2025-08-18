import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

const BADGE_CONTENT = "Test Badge";

describe("Badge", () => {
  test("renders badge with content", () => {
    render(<Badge>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT);
    expect(badge).toBeInTheDocument();
    expect(badge.closest(".badge")).toBeInTheDocument();
  });

  test("applies correct variant classes", () => {
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

    variants.forEach((variant) => {
      const { unmount } = render(
        <Badge variant={variant}>{BADGE_CONTENT}</Badge>,
      );

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      expect(badge).toHaveClass(`badge--${variant}`);

      unmount();
    });
  });

  test("applies correct size classes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Badge size={size}>{BADGE_CONTENT}</Badge>);

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      expect(badge).toHaveClass(`badge--${size}`);

      unmount();
    });
  });

  test("applies pill class when pill prop is true", () => {
    render(<Badge pill>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toHaveClass("badge--pill");
  });

  test("applies outline class when outline prop is true", () => {
    render(<Badge outline>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toHaveClass("badge--outline");
  });

  test("applies custom className", () => {
    const customClass = "custom-badge-class";

    render(<Badge className={customClass}>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toHaveClass(customClass);
  });

  test("renders with icon when icon prop is provided", () => {
    render(<Badge icon="check">{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toBeInTheDocument();

    const icon = badge?.querySelector(".badge__icon");
    expect(icon).toBeInTheDocument();
  });

  test("does not render icon when icon prop is not provided", () => {
    render(<Badge>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    const icon = badge?.querySelector(".badge__icon");
    expect(icon).not.toBeInTheDocument();
  });

  test("supports React node content", () => {
    const reactContent = (
      <div>
        <strong>Bold</strong> and <em>italic</em>
      </div>
    );

    render(<Badge>{reactContent}</Badge>);

    expect(screen.getByText("Bold")).toBeInTheDocument();
    expect(screen.getByText("italic")).toBeInTheDocument();
  });

  test("supports numeric content", () => {
    const numericContent = 42;

    render(<Badge>{numericContent}</Badge>);

    expect(screen.getByText("42")).toBeInTheDocument();
  });

  test("applies multiple modifier classes correctly", () => {
    render(
      <Badge variant="success" size="lg" pill outline>
        {BADGE_CONTENT}
      </Badge>,
    );

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toHaveClass("badge--success");
    expect(badge).toHaveClass("badge--lg");
    expect(badge).toHaveClass("badge--pill");
    expect(badge).toHaveClass("badge--outline");
  });

  test("has correct default props", () => {
    render(<Badge>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge).toHaveClass("badge--primary"); // default variant
    expect(badge).toHaveClass("badge--md"); // default size
    expect(badge).not.toHaveClass("badge--pill"); // default pill: false
    expect(badge).not.toHaveClass("badge--outline"); // default outline: false
  });

  test("renders as span element", () => {
    render(<Badge>{BADGE_CONTENT}</Badge>);

    const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
    expect(badge?.tagName).toBe("SPAN");
  });

  test("handles empty content gracefully", () => {
    render(<Badge>{""}</Badge>);

    const badge = document.querySelector(".badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("badge--primary");
  });

  test("handles whitespace-only content", () => {
    render(<Badge> </Badge>);

    const badge = document.querySelector(".badge");
    expect(badge).toBeInTheDocument();
    expect(badge?.textContent?.trim()).toBe("");
  });
});

// Property-based tests
describe("Badge Properties", () => {
  test("all variant values produce valid CSS classes", () => {
    const validVariants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
      "info",
      "light",
      "dark",
    ];

    validVariants.forEach((variant) => {
      const { unmount } = render(
        <Badge variant={variant as any}>{BADGE_CONTENT}</Badge>,
      );

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      expect(badge).toHaveClass(`badge--${variant}`);

      unmount();
    });
  });

  test("all size values produce valid CSS classes", () => {
    const validSizes = ["sm", "md", "lg"];

    validSizes.forEach((size) => {
      const { unmount } = render(
        <Badge size={size as any}>{BADGE_CONTENT}</Badge>,
      );

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      expect(badge).toHaveClass(`badge--${size}`);

      unmount();
    });
  });

  test("boolean props work correctly", () => {
    const booleanProps = [
      { prop: "pill", expectedClass: "badge--pill" },
      { prop: "outline", expectedClass: "badge--outline" },
    ];

    booleanProps.forEach(({ prop, expectedClass }) => {
      const { unmount } = render(
        <Badge {...{ [prop]: true }}>{BADGE_CONTENT}</Badge>,
      );

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      expect(badge).toHaveClass(expectedClass);

      unmount();
    });
  });

  test("icon sizes scale with badge size", () => {
    const sizeIconMap = [
      { size: "sm" as const, expectedSize: "12px" },
      { size: "md" as const, expectedSize: "14px" },
      { size: "lg" as const, expectedSize: "16px" },
    ];

    sizeIconMap.forEach(({ size, expectedSize }) => {
      const { unmount } = render(
        <Badge size={size} icon="check">
          {BADGE_CONTENT}
        </Badge>,
      );

      const badge = screen.getByText(BADGE_CONTENT).closest(".badge");
      const icon = badge?.querySelector("svg");
      expect(icon).toHaveAttribute("width", expectedSize);
      expect(icon).toHaveAttribute("height", expectedSize);

      unmount();
    });
  });

  test("content structure is consistent", () => {
    render(<Badge icon="check">{BADGE_CONTENT}</Badge>);

    const badge = document.querySelector(".badge");
    expect(badge?.children).toHaveLength(2); // icon + content

    const icon = badge?.querySelector(".badge__icon");
    const content = badge?.querySelector(".badge__content");

    expect(icon).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent(BADGE_CONTENT);
  });
});
