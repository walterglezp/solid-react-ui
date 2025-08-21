import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormatCurrency, formatCurrency } from "./FormatCurrency";

describe("FormatCurrency", () => {
  test("renders formatted currency with default props", () => {
    render(<FormatCurrency value={1234.56} />);

    // Should format as USD with en-US locale by default
    expect(screen.getByText("$1,234.56")).toBeInTheDocument();
  });

  test("formats different currencies correctly", () => {
    const currencies = [
      { currency: "USD", expected: "$1,234.56" },
      { currency: "EUR", expected: "€1,234.56" },
      { currency: "GBP", expected: "£1,234.56" },
      { currency: "JPY", expected: "¥1,235" }, // JPY has no decimal places by default
    ];

    currencies.forEach(({ currency, expected }) => {
      const { unmount } = render(
        <FormatCurrency value={1234.56} currency={currency} />,
      );

      expect(screen.getByText(expected)).toBeInTheDocument();
      unmount();
    });
  });

  test("respects different locales", () => {
    const locales = [
      { locale: "en-US", expected: "$1,234.56" },
      { locale: "de-DE", expected: "1.234,56 $" }, // German format for USD
      { locale: "fr-FR", expected: "1 234,56 $US" }, // French format for USD
    ];

    locales.forEach(({ locale, expected }) => {
      const { unmount } = render(
        <FormatCurrency value={1234.56} currency="USD" locale={locale} />,
      );

      expect(screen.getByText(expected)).toBeInTheDocument();
      unmount();
    });
  });

  test("handles precision control", () => {
    render(
      <FormatCurrency
        value={1234.567}
        minimumFractionDigits={0}
        maximumFractionDigits={0}
      />,
    );

    expect(screen.getByText("$1,235")).toBeInTheDocument();
  });

  test("handles negative values", () => {
    const { rerender } = render(
      <FormatCurrency value={-1234.56} currencySign="standard" />,
    );

    expect(screen.getByText("-$1,234.56")).toBeInTheDocument();

    rerender(<FormatCurrency value={-1234.56} currencySign="accounting" />);

    expect(screen.getByText("($1,234.56)")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    const customClass = "custom-currency-class";
    render(<FormatCurrency value={123.45} className={customClass} />);

    const element = screen.getByText("$123.45");
    expect(element).toHaveClass(customClass);
  });

  test("renders tooltip with raw value and currency", () => {
    render(<FormatCurrency value={1234.56} currency="EUR" />);

    const element = screen.getByText("€1,234.56");
    expect(element).toHaveAttribute("title", "1234.56 EUR");
  });

  test("handles currency display options", () => {
    const displayOptions = [
      { display: "symbol" as const, expected: "$1,234.56" },
      { display: "code" as const, expected: "USD 1,234.56" },
      { display: "name" as const, expected: "1,234.56 US dollars" },
    ];

    displayOptions.forEach(({ display, expected }) => {
      const { unmount } = render(
        <FormatCurrency value={1234.56} currencyDisplay={display} />,
      );

      expect(screen.getByText(expected)).toBeInTheDocument();
      unmount();
    });
  });

  test("handles grouping option", () => {
    const { rerender } = render(
      <FormatCurrency value={12345.67} useGrouping={true} />,
    );

    expect(screen.getByText("$12,345.67")).toBeInTheDocument();

    rerender(<FormatCurrency value={12345.67} useGrouping={false} />);

    expect(screen.getByText("$12345.67")).toBeInTheDocument();
  });

  test("handles invalid values with fallback", () => {
    const invalidValues = [NaN, Infinity, -Infinity];

    invalidValues.forEach((value) => {
      const { unmount } = render(
        <FormatCurrency value={value} fallback="N/A" />,
      );

      expect(screen.getByText("N/A")).toBeInTheDocument();
      unmount();
    });
  });

  test("uses default fallback for invalid values", () => {
    render(<FormatCurrency value={NaN} />);

    expect(screen.getByText("—")).toBeInTheDocument();
  });

  test("handles locale mappings", () => {
    // Test short locale codes that should be mapped
    const { rerender } = render(<FormatCurrency value={1234.56} locale="en" />);

    // Should map 'en' to 'en-US'
    expect(screen.getByText("$1,234.56")).toBeInTheDocument();

    rerender(<FormatCurrency value={1234.56} currency="EUR" locale="de" />);

    // Should map 'de' to 'de-DE'
    expect(screen.getByText("1.234,56 €")).toBeInTheDocument();
  });

  test("handles zero value", () => {
    render(<FormatCurrency value={0} />);

    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  test("handles very small values", () => {
    render(<FormatCurrency value={0.01} />);

    expect(screen.getByText("$0.01")).toBeInTheDocument();
  });

  test("handles very large values", () => {
    render(<FormatCurrency value={1000000.99} />);

    expect(screen.getByText("$1,000,000.99")).toBeInTheDocument();
  });
});

describe("formatCurrency utility function", () => {
  test("formats currency correctly", () => {
    expect(formatCurrency(1234.56)).toBe("$1,234.56");
    expect(formatCurrency(1234.56, "EUR")).toBe("€1,234.56");
    expect(formatCurrency(1234.56, "JPY")).toBe("¥1,235");
  });

  test("handles different locales", () => {
    expect(formatCurrency(1234.56, "USD", "en-US")).toBe("$1,234.56");
    expect(formatCurrency(1234.56, "USD", "de-DE")).toBe("1.234,56 $");
  });

  test("handles locale mapping", () => {
    expect(formatCurrency(1234.56, "USD", "en")).toBe("$1,234.56");
    expect(formatCurrency(1234.56, "EUR", "de")).toBe("1.234,56 €");
  });

  test("handles invalid values", () => {
    expect(formatCurrency(NaN)).toBe("—");
    expect(formatCurrency(Infinity)).toBe("—");
    expect(formatCurrency(-Infinity)).toBe("—");
  });

  test("handles currency case insensitive", () => {
    expect(formatCurrency(123.45, "usd")).toBe("$123.45");
    expect(formatCurrency(123.45, "eur")).toBe("€123.45");
  });

  test("falls back gracefully on formatting errors", () => {
    // This should not throw an error
    const result = formatCurrency(123.45, "INVALID_CURRENCY");
    expect(typeof result).toBe("string");
  });
});

// Property-based tests
describe("FormatCurrency Properties", () => {
  test("always renders a span element", () => {
    render(<FormatCurrency value={123.45} />);

    const element = screen.getByText("$123.45");
    expect(element.tagName).toBe("SPAN");
  });

  test("currency code is always uppercase in tooltip", () => {
    render(<FormatCurrency value={123.45} currency="eur" />);

    const element = screen.getByText("€123.45");
    expect(element).toHaveAttribute("title", "123.45 EUR");
  });

  test("handles all supported currencies without errors", () => {
    const currencies = [
      "USD",
      "EUR",
      "GBP",
      "JPY",
      "CAD",
      "AUD",
      "CHF",
      "CNY",
      "INR",
      "BRL",
    ];

    currencies.forEach((currency) => {
      const { unmount } = render(
        <FormatCurrency value={100} currency={currency} />,
      );

      // Should not throw and should render something
      const element = screen.getByRole("generic");
      expect(element).toBeInTheDocument();
      expect(element.textContent).toBeTruthy();

      unmount();
    });
  });

  test("fraction digits constraints are respected", () => {
    // Test that min <= max constraint is handled
    render(
      <FormatCurrency
        value={123.456789}
        minimumFractionDigits={3}
        maximumFractionDigits={2} // This is invalid: min > max
      />,
    );

    // Should still render without crashing
    const element = screen.getByRole("generic");
    expect(element).toBeInTheDocument();
  });

  test("maintains consistent behavior across renders", () => {
    const { rerender } = render(<FormatCurrency value={123.45} />);
    const firstRender = screen.getByText("$123.45").textContent;

    rerender(<FormatCurrency value={123.45} />);
    const secondRender = screen.getByText("$123.45").textContent;

    expect(firstRender).toBe(secondRender);
  });
});
