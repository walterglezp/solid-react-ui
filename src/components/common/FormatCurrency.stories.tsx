import type { Meta, StoryObj } from "@storybook/react";
import { FormatCurrency, formatCurrency } from "./FormatCurrency";

const meta = {
  title: "Common/FormatCurrency",
  component: FormatCurrency,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A component for formatting currency values using the Intl.NumberFormat API.

## Features
- Support for all major world currencies
- Automatic locale-based formatting
- Flexible decimal precision control
- Multiple currency display options (symbol, code, name)
- Error handling with fallback values
- Currency-specific default configurations
- Accessibility features with tooltips
- Utility function for programmatic use
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number" },
      description: "The numeric value to format",
    },
    currency: {
      control: { type: "text" },
      description: "Currency code (ISO 4217)",
    },
    locale: {
      control: { type: "text" },
      description: "Locale for formatting (BCP 47)",
    },
    minimumFractionDigits: {
      control: { type: "number", min: 0, max: 20 },
      description: "Minimum number of decimal places",
    },
    maximumFractionDigits: {
      control: { type: "number", min: 0, max: 20 },
      description: "Maximum number of decimal places",
    },
    currencyDisplay: {
      control: { type: "select" },
      options: ["symbol", "narrowSymbol", "code", "name"],
      description: "How to display the currency",
    },
    currencySign: {
      control: { type: "select" },
      options: ["standard", "accounting"],
      description: "How to display negative values",
    },
    useGrouping: {
      control: { type: "boolean" },
      description: "Whether to use grouping separators",
    },
    fallback: {
      control: { type: "text" },
      description: "Fallback text for invalid values",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    value: 1234.56,
    currency: "USD",
    locale: "en-US",
    currencyDisplay: "symbol",
    currencySign: "standard",
    useGrouping: true,
    fallback: "—",
  },
} satisfies Meta<typeof FormatCurrency>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    value: 1234.56,
  },
};

// Different currencies
export const MultipleCurrencies: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>USD:</strong> <FormatCurrency value={1234.56} currency="USD" /></div>
      <div><strong>EUR:</strong> <FormatCurrency value={1234.56} currency="EUR" /></div>
      <div><strong>GBP:</strong> <FormatCurrency value={1234.56} currency="GBP" /></div>
      <div><strong>JPY:</strong> <FormatCurrency value={1234.56} currency="JPY" /></div>
      <div><strong>CAD:</strong> <FormatCurrency value={1234.56} currency="CAD" /></div>
      <div><strong>AUD:</strong> <FormatCurrency value={1234.56} currency="AUD" /></div>
      <div><strong>CHF:</strong> <FormatCurrency value={1234.56} currency="CHF" /></div>
      <div><strong>CNY:</strong> <FormatCurrency value={1234.56} currency="CNY" /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different currencies with their specific formatting rules.",
      },
    },
  },
};

// Different locales
export const MultipleLocales: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>US English:</strong> <FormatCurrency value={1234.56} currency="USD" locale="en-US" /></div>
      <div><strong>British English:</strong> <FormatCurrency value={1234.56} currency="GBP" locale="en-GB" /></div>
      <div><strong>German:</strong> <FormatCurrency value={1234.56} currency="EUR" locale="de-DE" /></div>
      <div><strong>French:</strong> <FormatCurrency value={1234.56} currency="EUR" locale="fr-FR" /></div>
      <div><strong>Spanish:</strong> <FormatCurrency value={1234.56} currency="EUR" locale="es-ES" /></div>
      <div><strong>Japanese:</strong> <FormatCurrency value={1234.56} currency="JPY" locale="ja-JP" /></div>
      <div><strong>Portuguese:</strong> <FormatCurrency value={1234.56} currency="BRL" locale="pt-BR" /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Same value formatted according to different locales and their conventions.",
      },
    },
  },
};

// Currency display options
export const CurrencyDisplayOptions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>Symbol:</strong> <FormatCurrency value={1234.56} currency="USD" currencyDisplay="symbol" /></div>
      <div><strong>Narrow Symbol:</strong> <FormatCurrency value={1234.56} currency="USD" currencyDisplay="narrowSymbol" /></div>
      <div><strong>Code:</strong> <FormatCurrency value={1234.56} currency="USD" currencyDisplay="code" /></div>
      <div><strong>Name:</strong> <FormatCurrency value={1234.56} currency="USD" currencyDisplay="name" /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different ways to display currency information.",
      },
    },
  },
};

// Precision control
export const PrecisionControl: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>No decimals:</strong> <FormatCurrency value={1234.567} minimumFractionDigits={0} maximumFractionDigits={0} /></div>
      <div><strong>1 decimal:</strong> <FormatCurrency value={1234.567} minimumFractionDigits={1} maximumFractionDigits={1} /></div>
      <div><strong>2 decimals:</strong> <FormatCurrency value={1234.567} minimumFractionDigits={2} maximumFractionDigits={2} /></div>
      <div><strong>3 decimals:</strong> <FormatCurrency value={1234.567} minimumFractionDigits={3} maximumFractionDigits={3} /></div>
      <div><strong>Variable (0-2):</strong> <FormatCurrency value={1234.5} minimumFractionDigits={0} maximumFractionDigits={2} /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Control decimal precision with minimum and maximum fraction digits.",
      },
    },
  },
};

// Negative values
export const NegativeValues: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>Standard:</strong> <FormatCurrency value={-1234.56} currencySign="standard" /></div>
      <div><strong>Accounting:</strong> <FormatCurrency value={-1234.56} currencySign="accounting" /></div>
      <div><strong>Zero:</strong> <FormatCurrency value={0} /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different ways to display negative values and zero.",
      },
    },
  },
};

// Large numbers
export const LargeNumbers: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>Thousands:</strong> <FormatCurrency value={12345.67} /></div>
      <div><strong>Millions:</strong> <FormatCurrency value={12345678.90} /></div>
      <div><strong>Billions:</strong> <FormatCurrency value={12345678901.23} /></div>
      <div><strong>Without grouping:</strong> <FormatCurrency value={12345678.90} useGrouping={false} /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Formatting large numbers with and without grouping separators.",
      },
    },
  },
};

// Error handling
export const ErrorHandling: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div><strong>Valid number:</strong> <FormatCurrency value={123.45} /></div>
      <div><strong>Invalid number (NaN):</strong> <FormatCurrency value={NaN} /></div>
      <div><strong>Infinity:</strong> <FormatCurrency value={Infinity} /></div>
      <div><strong>Custom fallback:</strong> <FormatCurrency value={NaN} fallback="N/A" /></div>
      <div><strong>Very small number:</strong> <FormatCurrency value={0.001} /></div>
      <div><strong>Very large number:</strong> <FormatCurrency value={Number.MAX_SAFE_INTEGER} /></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "How the component handles invalid or edge case values.",
      },
    },
  },
};

// Real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}>E-commerce Product Prices</h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div>Regular Price: <FormatCurrency value={299.99} /></div>
          <div style={{ textDecoration: "line-through", color: "#999" }}>
            Original Price: <FormatCurrency value={399.99} />
          </div>
          <div style={{ color: "#e74c3c", fontWeight: "bold" }}>
            You Save: <FormatCurrency value={100.00} />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}>Banking Statement</h4>
        <div style={{ fontFamily: "monospace", display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", minWidth: "300px" }}>
            <span>Opening Balance</span>
            <FormatCurrency value={5432.10} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", minWidth: "300px", color: "#e74c3c" }}>
            <span>Transaction Fee</span>
            <FormatCurrency value={-25.00} currencySign="accounting" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", minWidth: "300px", borderTop: "1px solid #ddd", paddingTop: "4px", fontWeight: "bold" }}>
            <span>Closing Balance</span>
            <FormatCurrency value={5407.10} />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}>International Pricing</h4>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          <div>🇺🇸 <FormatCurrency value={99.99} currency="USD" locale="en-US" /></div>
          <div>🇪🇺 <FormatCurrency value={89.99} currency="EUR" locale="de-DE" /></div>
          <div>🇬🇧 <FormatCurrency value={79.99} currency="GBP" locale="en-GB" /></div>
          <div>🇯🇵 <FormatCurrency value={10999} currency="JPY" locale="ja-JP" /></div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Real-world usage examples in different contexts like e-commerce, banking, and international pricing.",
      },
    },
  },
};

// Utility function usage
export const UtilityFunction: Story = {
  render: () => {
    const prices = [29.99, 149.50, 1299.99, 45.00, 0.99];
    const total = prices.reduce((sum, price) => sum + price, 0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h4 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}>
          Shopping Cart (using formatCurrency utility)
        </h4>
        {prices.map((price, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", minWidth: "200px" }}>
            <span>Item {index + 1}</span>
            <code>{formatCurrency(price)}</code>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", minWidth: "200px", borderTop: "1px solid #ddd", paddingTop: "8px", fontWeight: "bold" }}>
          <span>Total</span>
          <code>{formatCurrency(total)}</code>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Using the formatCurrency utility function for programmatic formatting.",
      },
    },
  },
};