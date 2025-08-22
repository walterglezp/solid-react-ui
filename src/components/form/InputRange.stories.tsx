import type { Meta, StoryObj } from "@storybook/react";
import { InputRange } from "./InputRange";
import { FormFieldProps } from "./Form";
import React, { useState } from "react";

const meta: Meta<typeof InputRange> = {
  title: "Form/InputRange",
  component: InputRange,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable range input component with various display options, tick marks, tooltips, and value formatting.",
      },
    },
  },
  argTypes: {
    variant: {
      description: "Size variant of the range input",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    showValue: {
      description: "Show current value display",
      control: { type: "boolean" },
    },
    showMinMax: {
      description: "Show min/max labels",
      control: { type: "boolean" },
    },
    showTicks: {
      description: "Show tick marks",
      control: { type: "boolean" },
    },
    showTooltip: {
      description: "Show tooltip on hover",
      control: { type: "boolean" },
    },
    disabled: {
      description: "Disable the input",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputRange>;

// Helper component for interactive stories
const InputRangeWrapper = ({
  initialValue = 50,
  min = 0,
  max = 100,
  step = 1,
  label = "Range Input",
  showValue = true,
  showMinMax = false,
  showTicks = false,
  showTooltip = false,
  variant = "md" as const,
  disabled = false,
  formatValue,
  ticks,
  minLabel,
  maxLabel,
}: {
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showValue?: boolean;
  showMinMax?: boolean;
  showTicks?: boolean;
  showTooltip?: boolean;
  variant?: "sm" | "md" | "lg";
  disabled?: boolean;
  formatValue?: (value: number) => string;
  ticks?: number;
  minLabel?: string;
  maxLabel?: string;
}) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const field: FormFieldProps = {
    value,
    name: "range-input",
    formName: "test-form",
    error,
    section: 0,
    validate: {},
  };

  const handleChange = (updatedField: FormFieldProps) => {
    setValue(updatedField.value as number);
    // Example validation
    if ((updatedField.value as number) < 30) {
      setError("Value should be at least 30");
    } else {
      setError("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <InputRange
        field={field}
        onChange={handleChange}
        label={label}
        min={min}
        max={max}
        step={step}
        variant={variant}
        showValue={showValue}
        showMinMax={showMinMax}
        showTicks={showTicks}
        showTooltip={showTooltip}
        disabled={disabled}
        formatValue={formatValue}
        ticks={ticks}
        minLabel={minLabel}
        maxLabel={maxLabel}
      />
      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        Current value: {value}
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <InputRangeWrapper />,
  parameters: {
    docs: {
      description: {
        story: "Basic range input with default settings.",
      },
    },
  },
};

export const WithMinMax: Story = {
  render: () => <InputRangeWrapper showMinMax={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input displaying minimum and maximum values.",
      },
    },
  },
};

export const WithTicks: Story = {
  render: () => <InputRangeWrapper showTicks={true} ticks={11} />,
  parameters: {
    docs: {
      description: {
        story: "Range input with tick marks for visual guidance.",
      },
    },
  },
};

export const WithTooltip: Story = {
  render: () => <InputRangeWrapper showTooltip={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input with tooltip showing value on hover.",
      },
    },
  },
};

export const CustomRange: Story = {
  render: () => (
    <InputRangeWrapper
      min={-50}
      max={150}
      initialValue={25}
      step={5}
      showMinMax={true}
      minLabel="Cold"
      maxLabel="Hot"
      formatValue={(value) => `${value}°F`}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom range with temperature formatting and custom labels.",
      },
    },
  },
};

export const PriceRange: Story = {
  render: () => (
    <InputRangeWrapper
      min={0}
      max={1000}
      initialValue={250}
      step={10}
      label="Price Range"
      showMinMax={true}
      showTicks={true}
      ticks={6}
      formatValue={(value) => `$${value.toLocaleString()}`}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Price range selector with currency formatting.",
      },
    },
  },
};

export const VolumeControl: Story = {
  render: () => (
    <InputRangeWrapper
      min={0}
      max={100}
      initialValue={75}
      step={1}
      label="Volume"
      showValue={true}
      showTooltip={true}
      formatValue={(value) => `${value}%`}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Volume control with percentage display.",
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div>
        <h4>Small</h4>
        <InputRangeWrapper variant="sm" label="Small Range" />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <InputRangeWrapper variant="md" label="Medium Range" />
      </div>
      <div>
        <h4>Large</h4>
        <InputRangeWrapper variant="lg" label="Large Range" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different size variants of the range input.",
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => <InputRangeWrapper disabled={true} initialValue={30} />,
  parameters: {
    docs: {
      description: {
        story: "Disabled range input state.",
      },
    },
  },
};

export const WithoutLabel: Story = {
  render: () => <InputRangeWrapper label="" showValue={true} />,
  parameters: {
    docs: {
      description: {
        story: "Range input without label, showing only the value.",
      },
    },
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState(20);
    const field: FormFieldProps = {
      value,
      name: "range-input",
      formName: "test-form",
      error: "Value must be at least 30",
      section: 0,
      validate: {},
    };

    const handleChange = (updatedField: FormFieldProps) => {
      setValue(updatedField.value as number);
    };

    return (
      <div style={{ padding: "20px", maxWidth: "500px" }}>
        <InputRange
          field={field}
          onChange={handleChange}
          label="Range with Error"
          min={0}
          max={100}
          showValue={true}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Range input with error state styling.",
      },
    },
  },
};

export const FullyLoaded: Story = {
  render: () => (
    <InputRangeWrapper
      min={0}
      max={200}
      initialValue={120}
      step={10}
      label="Feature-Rich Range"
      showValue={true}
      showMinMax={true}
      showTicks={true}
      showTooltip={true}
      ticks={11}
      variant="lg"
      formatValue={(value) => `${value} units`}
      minLabel="Min"
      maxLabel="Max"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Range input with all features enabled - ticks, tooltip, min/max labels, custom formatting.",
      },
    },
  },
};

// Interactive playground story
const InteractivePlayground = () => {
  const [config, setConfig] = useState({
    min: 0,
    max: 100,
    step: 1,
    variant: "md" as "sm" | "md" | "lg",
    showValue: true,
    showMinMax: false,
    showTicks: false,
    showTooltip: false,
    disabled: false,
    ticks: 5,
  });

  const [value, setValue] = useState(50);

  const field: FormFieldProps = {
    value,
    name: "playground-range",
    formName: "playground-form",
    error: "",
    section: 0,
    validate: {},
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h3>Interactive Playground</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div>
          <label>
            Min:
            <input
              type="number"
              value={config.min}
              onChange={(e) =>
                setConfig({ ...config, min: Number(e.target.value) })
              }
              style={{ marginLeft: "8px", width: "80px" }}
            />
          </label>
        </div>

        <div>
          <label>
            Max:
            <input
              type="number"
              value={config.max}
              onChange={(e) =>
                setConfig({ ...config, max: Number(e.target.value) })
              }
              style={{ marginLeft: "8px", width: "80px" }}
            />
          </label>
        </div>

        <div>
          <label>
            Step:
            <input
              type="number"
              value={config.step}
              onChange={(e) =>
                setConfig({ ...config, step: Number(e.target.value) })
              }
              style={{ marginLeft: "8px", width: "80px" }}
            />
          </label>
        </div>

        <div>
          <label>
            Variant:
            <select
              value={config.variant}
              onChange={(e) =>
                setConfig({
                  ...config,
                  variant: e.target.value as "sm" | "md" | "lg",
                })
              }
              style={{ marginLeft: "8px" }}
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={config.showValue}
              onChange={(e) =>
                setConfig({ ...config, showValue: e.target.checked })
              }
            />
            Show Value
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={config.showMinMax}
              onChange={(e) =>
                setConfig({ ...config, showMinMax: e.target.checked })
              }
            />
            Show Min/Max
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={config.showTicks}
              onChange={(e) =>
                setConfig({ ...config, showTicks: e.target.checked })
              }
            />
            Show Ticks
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={config.showTooltip}
              onChange={(e) =>
                setConfig({ ...config, showTooltip: e.target.checked })
              }
            />
            Show Tooltip
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={config.disabled}
              onChange={(e) =>
                setConfig({ ...config, disabled: e.target.checked })
              }
            />
            Disabled
          </label>
        </div>

        {config.showTicks && (
          <div>
            <label>
              Ticks:
              <input
                type="number"
                min={2}
                max={20}
                value={config.ticks}
                onChange={(e) =>
                  setConfig({ ...config, ticks: Number(e.target.value) })
                }
                style={{ marginLeft: "8px", width: "80px" }}
              />
            </label>
          </div>
        )}
      </div>

      <InputRange
        field={field}
        onChange={(updatedField) => setValue(updatedField.value as number)}
        label="Playground Range"
        min={config.min}
        max={config.max}
        step={config.step}
        variant={config.variant}
        showValue={config.showValue}
        showMinMax={config.showMinMax}
        showTicks={config.showTicks}
        showTooltip={config.showTooltip}
        disabled={config.disabled}
        ticks={config.showTicks ? config.ticks : undefined}
      />

      <div style={{ marginTop: "20px", fontSize: "14px", color: "#666" }}>
        Current value: {value}
      </div>
    </div>
  );
};

export const Playground: Story = {
  render: () => <InteractivePlayground />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test all InputRange features and configurations.",
      },
    },
  },
};
