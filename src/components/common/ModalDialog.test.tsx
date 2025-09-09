import { describe, expect, test, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ModalDialog } from "./ModalDialog";

const MODAL_TITLE = "Test Modal Title";
const MODAL_CONTENT = "Test modal content";

describe("ModalDialog", () => {
  beforeEach(() => {
    document.body.style.overflow = "unset";
  });

  afterEach(() => {
    document.body.style.overflow = "unset";
  });

  test("renders modal when isOpen is true", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent(MODAL_CONTENT);
  });

  test("does not render modal when isOpen is false", () => {
    render(
      <ModalDialog isOpen={false} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  test("displays title when provided", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}} title={MODAL_TITLE}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText(MODAL_TITLE)).toBeInTheDocument();
  });

  test("displays footer when provided", () => {
    const footerContent = "Footer content";

    render(
      <ModalDialog
        isOpen={true}
        onClose={() => {}}
        footer={<div>{footerContent}</div>}
      >
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText(footerContent)).toBeInTheDocument();
  });

  test("applies correct size classes", () => {
    const sizes = ["sm", "md", "lg", "xl"] as const;

    sizes.forEach((size) => {
      const { unmount } = render(
        <ModalDialog isOpen={true} onClose={() => {}} size={size}>
          {MODAL_CONTENT}
        </ModalDialog>,
      );

      const modal = screen.getByRole("dialog");
      expect(modal).toHaveClass(`modal--${size}`);

      unmount();
    });
  });

  test("applies custom className", () => {
    const customClass = "custom-modal-class";

    render(
      <ModalDialog isOpen={true} onClose={() => {}} className={customClass}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass(customClass);
  });

  test("renders close button by default", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    expect(closeButton).toBeInTheDocument();
  });

  test("hides close button when showCloseButton is false", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}} showCloseButton={false}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(
      screen.queryByRole("button", { name: /close modal/i }),
    ).not.toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", async () => {
    const onCloseMock = vi.fn();
    const user = userEvent.setup();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when backdrop is clicked", async () => {
    const onCloseMock = vi.fn();
    const user = userEvent.setup();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const backdrop = screen.getByRole("dialog").parentElement;
    if (backdrop) {
      await user.click(backdrop);
      expect(onCloseMock).toHaveBeenCalledTimes(1);
    }
  });

  test("does not call onClose when backdrop is clicked and closeOnBackdropClick is false", async () => {
    const onCloseMock = vi.fn();
    const user = userEvent.setup();

    render(
      <ModalDialog
        isOpen={true}
        onClose={onCloseMock}
        closeOnBackdropClick={false}
      >
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const backdrop = screen.getByRole("dialog").parentElement;
    if (backdrop) {
      await user.click(backdrop);
      expect(onCloseMock).not.toHaveBeenCalled();
    }
  });

  test("does not call onClose when modal content is clicked", async () => {
    const onCloseMock = vi.fn();
    const user = userEvent.setup();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const modal = screen.getByRole("dialog");
    await user.click(modal);

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test("calls onClose when Escape key is pressed", async () => {
    const onCloseMock = vi.fn();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when Escape key is pressed and closeOnEscape is false", async () => {
    const onCloseMock = vi.fn();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock} closeOnEscape={false}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test("sets body overflow to hidden when modal is open", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(document.body.style.overflow).toBe("hidden");
  });

  test("restores body overflow when modal is closed", () => {
    const { rerender } = render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <ModalDialog isOpen={false} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(document.body.style.overflow).toBe("unset");
  });

  test("has proper ARIA attributes", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveAttribute("role", "dialog");
    expect(modal).toHaveAttribute("aria-modal", "true");
  });

  test("close button has proper accessibility attributes", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    expect(closeButton).toHaveAttribute("aria-label", "Close modal");
    expect(closeButton).toHaveAttribute("type", "button");
  });

  test("supports React node title", () => {
    const reactTitle = (
      <span>
        <strong>Important</strong> Notice
      </span>
    );

    render(
      <ModalDialog isOpen={true} onClose={() => {}} title={reactTitle}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText("Important")).toBeInTheDocument();
    expect(screen.getByText("Notice")).toBeInTheDocument();
  });

  test("supports React node content", () => {
    const reactContent = (
      <div>
        <strong>Bold text</strong> and <em>italic text</em>
      </div>
    );

    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {reactContent}
      </ModalDialog>,
    );

    expect(screen.getByText("Bold text")).toBeInTheDocument();
    expect(screen.getByText("italic text")).toBeInTheDocument();
  });

  test("supports React node footer", () => {
    const reactFooter = (
      <div>
        <button>Cancel</button>
        <button>Confirm</button>
      </div>
    );

    render(
      <ModalDialog isOpen={true} onClose={() => {}} footer={reactFooter}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  test("handles empty content gracefully", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}} title={MODAL_TITLE}>
        {""}
      </ModalDialog>,
    );

    expect(screen.getByText(MODAL_TITLE)).toBeInTheDocument();
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  test("handles missing title gracefully", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText(MODAL_CONTENT)).toBeInTheDocument();
    expect(screen.queryByText(MODAL_TITLE)).not.toBeInTheDocument();
  });

  test("handles missing footer gracefully", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    expect(screen.getByText(MODAL_CONTENT)).toBeInTheDocument();
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  test("keyboard navigation works with close button", async () => {
    const onCloseMock = vi.fn();
    const user = userEvent.setup();

    render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    closeButton.focus();
    expect(closeButton).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});

// Property-based tests
describe("ModalDialog Properties", () => {
  test("all size values produce valid CSS classes", () => {
    const validSizes = ["sm", "md", "lg", "xl"];

    validSizes.forEach((size) => {
      const { unmount } = render(
        <ModalDialog isOpen={true} onClose={() => {}} size={size as any}>
          {MODAL_CONTENT}
        </ModalDialog>,
      );

      const modal = screen.getByRole("dialog");
      expect(modal).toHaveClass(`modal--${size}`);

      unmount();
    });
  });

  test("boolean props work correctly", () => {
    const booleanProps = [
      { prop: "closeOnBackdropClick", testValue: true },
      { prop: "closeOnEscape", testValue: true },
      { prop: "showCloseButton", testValue: false },
    ];

    booleanProps.forEach(({ prop, testValue }) => {
      const { unmount } = render(
        <ModalDialog
          isOpen={true}
          onClose={() => {}}
          {...{ [prop]: testValue }}
        >
          {MODAL_CONTENT}
        </ModalDialog>,
      );

      const modal = screen.getByRole("dialog");
      expect(modal).toBeInTheDocument();

      if (prop === "showCloseButton" && !testValue) {
        expect(
          screen.queryByRole("button", { name: /close modal/i }),
        ).not.toBeInTheDocument();
      }

      unmount();
    });
  });

  test("default prop values work correctly", () => {
    render(
      <ModalDialog isOpen={true} onClose={() => {}}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("modal--md"); // default size
    expect(
      screen.getByRole("button", { name: /close modal/i }),
    ).toBeInTheDocument(); // default showCloseButton: true
  });

  test("cleans up event listeners when component unmounts", () => {
    const onCloseMock = vi.fn();

    const { unmount } = render(
      <ModalDialog isOpen={true} onClose={onCloseMock}>
        {MODAL_CONTENT}
      </ModalDialog>,
    );

    unmount();

    // Should not call onClose after unmounting
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onCloseMock).not.toHaveBeenCalled();

    // Body overflow should be restored
    expect(document.body.style.overflow).toBe("unset");
  });
});
