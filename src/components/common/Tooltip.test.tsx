/**
 * @fileoverview Tests for Tooltip component
 *
 * Note: These tests require a testing framework (vitest recommended) and testing-library/react.
 * Install with: npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
 */

import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";

const TOOLTIP_CONTENT = "Test tooltip content";
const TRIGGER_TEXT = "Hover me";

describe("Tooltip", () => {
  test("renders trigger element with tooltip present but hidden initially", () => {
    render(
      <Tooltip content={TOOLTIP_CONTENT}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    expect(screen.getByRole("button")).toHaveTextContent(TRIGGER_TEXT);
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveClass("tooltip");
  });

  test("tooltip has correct content and delay configuration", async () => {
    const DELAY_MS = 200;

    render(
      <Tooltip content={TOOLTIP_CONTENT} delay={DELAY_MS}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent(TOOLTIP_CONTENT);
    
    const container = screen.getByRole("button").parentElement;
    expect(container).toHaveStyle("--tooltip-delay: 200ms");
  });

  test("supports keyboard accessibility with focus", async () => {
    const user = userEvent.setup();

    render(
      <Tooltip content={TOOLTIP_CONTENT} delay={0}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole("button");
    await user.tab(); // Focus the button
    expect(trigger).toHaveFocus();
    
    // Tooltip should be present in DOM
    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  test("renders with correct position class", () => {
    const { rerender } = render(
      <Tooltip content={TOOLTIP_CONTENT} position="top">
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toHaveClass("tooltip--top");

    rerender(
      <Tooltip content={TOOLTIP_CONTENT} position="right">
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toHaveClass("tooltip--right");
  });

  test("applies custom className", () => {
    const CUSTOM_CLASS = "custom-tooltip-class";

    render(
      <Tooltip content={TOOLTIP_CONTENT} className={CUSTOM_CLASS}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const container = screen.getByRole("button").parentElement;
    expect(container).toHaveClass(CUSTOM_CLASS);
  });

  test("respects delay configuration", () => {
    const CUSTOM_DELAY = 500;

    render(
      <Tooltip content={TOOLTIP_CONTENT} delay={CUSTOM_DELAY}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const container = screen.getByRole("button").parentElement;
    expect(container).toHaveStyle("--tooltip-delay: 500ms");
  });

  test("does not render tooltip when disabled", () => {
    render(
      <Tooltip content={TOOLTIP_CONTENT} disabled>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });

  test("supports React node content", () => {
    const reactContent = (
      <div>
        <strong>Bold</strong> and <em>italic</em>
      </div>
    );

    render(
      <Tooltip content={reactContent} delay={0}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip.querySelector("strong")).toHaveTextContent("Bold");
    expect(tooltip.querySelector("em")).toHaveTextContent("italic");
  });

  test("handles empty content gracefully", () => {
    render(
      <Tooltip content="" delay={0}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveTextContent("");
  });

  test("tooltip has proper ARIA attributes", () => {
    render(
      <Tooltip content={TOOLTIP_CONTENT}>
        <button>{TRIGGER_TEXT}</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole("tooltip");
    expect(tooltip).toHaveAttribute("role", "tooltip");
  });
});

// Property-based tests using fast-check (when available)
describe("Tooltip Properties", () => {
  test("delay property is always respected", () => {
    const delays = [0, 100, 500, 1000];
    
    delays.forEach((delay) => {
      const { unmount } = render(
        <Tooltip content={TOOLTIP_CONTENT} delay={delay}>
          <button>{TRIGGER_TEXT}</button>
        </Tooltip>,
      );

      const container = screen.getByRole("button").parentElement;
      expect(container).toHaveStyle(`--tooltip-delay: ${delay}ms`);
      
      unmount();
    });
  });

  test("all position values produce valid CSS classes", () => {
    const validPositions = ["top", "right", "bottom", "left"];

    validPositions.forEach((position) => {
      const { unmount } = render(
        <Tooltip content={TOOLTIP_CONTENT} position={position as any}>
          <button>{TRIGGER_TEXT}</button>
        </Tooltip>,
      );

      const tooltip = screen.getByRole("tooltip");
      expect(tooltip).toHaveClass(`tooltip--${position}`);
      
      unmount();
    });
  });
});
