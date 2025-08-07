import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/form/Button";
import { Input } from "../components/form/Input";
import { Select } from "../components/form/Select";
import { CheckBox } from "../components/form/CheckBox";
import { Container } from "../components/layout/Container";
import { Row } from "../components/layout/Row";
import { Column } from "../components/layout/Column";
import { useState } from "react";
import type { FormFieldProps } from "../components/form/Form";

// This story demonstrates how global theme controls affect all components
const meta: Meta = {
  title: "Theme/Theme Controls Demo",
  parameters: {
    docs: {
      description: {
        component:
          "This story demonstrates how the global theme controls in the toolbar affect all components. Use the toolbar controls to switch themes and customize colors, border radius, and font sizes.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const ThemeControlsDemo: React.FC = () => {
  const [inputField, setInputField] = useState<FormFieldProps>({
    name: "sample-input",
    formName: "theme-demo",
    error: "",
    value: "",
    section: 0,
    validate: { required: false },
  });

  const [selectField, setSelectField] = useState<FormFieldProps>({
    name: "sample-select",
    formName: "theme-demo",
    error: "",
    value: "",
    section: 0,
    validate: { required: false },
  });

  const [checkboxField, setCheckboxField] = useState<FormFieldProps>({
    name: "sample-checkbox",
    formName: "theme-demo",
    error: "",
    value: false,
    section: 0,
    validate: { required: false },
  });

  return (
    <Container>
      <Row>
        <Column>
          <h1>Theme Controls Demo</h1>
          <p>
            Use the toolbar controls at the top to switch between different
            themes and customize colors, border radius, and font sizes. All
            components will automatically update to reflect your changes.
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Buttons</h3>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <Button variant="primary" size="sm">
                Small Primary
              </Button>
              <Button variant="secondary" size="md">
                Medium Secondary
              </Button>
              <Button variant="success" size="lg">
                Large Success
              </Button>
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button variant="info">Info</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Form Elements</h3>
            <div style={{ maxWidth: "400px" }}>
              <Input
                label="Sample Input"
                field={inputField}
                onChange={setInputField}
                placeholder="Type something..."
                className="mb-3"
              />

              <Select
                label="Sample Select"
                field={selectField}
                onChange={setSelectField}
                className="mb-3"
                options={[
                  { value: "", label: "Choose an option" },
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                  { value: "option3", label: "Option 3" },
                ]}
              />

              <CheckBox
                label="Sample Checkbox"
                field={checkboxField}
                onChange={setCheckboxField}
              />
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Cards with Theme Colors</h3>
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              }}
            >
              <div
                style={{
                  padding: "var(--theme-spacing-4)",
                  backgroundColor: "var(--theme-surface)",
                  border: "1px solid var(--theme-border)",
                  borderRadius: "var(--theme-border-radius-md)",
                  boxShadow: "var(--theme-shadow-sm)",
                }}
              >
                <h4
                  style={{
                    color: "var(--theme-primary)",
                    margin: "0 0 1rem 0",
                  }}
                >
                  Primary Card
                </h4>
                <p style={{ color: "var(--theme-text)", margin: "0" }}>
                  This card uses theme variables for styling. Notice how the
                  colors and border radius change when you switch themes.
                </p>
              </div>

              <div
                style={{
                  padding: "var(--theme-spacing-4)",
                  backgroundColor: "var(--theme-primary)",
                  color: "var(--theme-white)",
                  borderRadius: "var(--theme-border-radius-lg)",
                  boxShadow: "var(--theme-shadow-md)",
                }}
              >
                <h4 style={{ margin: "0 0 1rem 0" }}>Accent Card</h4>
                <p style={{ margin: "0" }}>
                  This card uses the primary color as background. Watch how it
                  changes when you modify the primary color in the toolbar.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3>Typography Scale</h3>
            <div style={{ fontFamily: "var(--theme-font-family-base)" }}>
              <h1
                style={{
                  fontSize: "var(--theme-font-size-4xl)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Heading 1 (4xl)
              </h1>
              <h2
                style={{
                  fontSize: "var(--theme-font-size-3xl)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Heading 2 (3xl)
              </h2>
              <h3
                style={{
                  fontSize: "var(--theme-font-size-2xl)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Heading 3 (2xl)
              </h3>
              <h4
                style={{
                  fontSize: "var(--theme-font-size-xl)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Heading 4 (xl)
              </h4>
              <p
                style={{
                  fontSize: "var(--theme-font-size-base)",
                  margin: "0 0 0.5rem 0",
                }}
              >
                Body text (base) - This is the default font size for body text.
              </p>
              <p
                style={{
                  fontSize: "var(--theme-font-size-sm)",
                  color: "var(--theme-text-secondary)",
                  margin: "0",
                }}
              >
                Small text (sm) - Often used for captions and secondary
                information.
              </p>
            </div>
          </div>

          <div
            style={{
              padding: "var(--theme-spacing-4)",
              backgroundColor: "var(--theme-surface)",
              border: "1px solid var(--theme-border)",
              borderRadius: "var(--theme-border-radius-md)",
              marginTop: "2rem",
            }}
          >
            <h3 style={{ margin: "0 0 1rem 0" }}>Instructions</h3>
            <ul style={{ margin: "0", paddingLeft: "1.5rem" }}>
              <li>
                <strong>Theme Preset:</strong> Use the dropdown in the toolbar
                to switch between Light, Dark, Corporate, and Minimal themes.
              </li>
              <li>
                <strong>Primary Color:</strong> Click the color icon to quickly
                change the primary color.
              </li>
              <li>
                <strong>Secondary Color:</strong> Use the secondary color picker
                to adjust the secondary color.
              </li>
              <li>
                <strong>Border Radius:</strong> Adjust the roundness of
                components with the border radius control.
              </li>
              <li>
                <strong>Font Size:</strong> Change the base font size that
                affects all text.
              </li>
            </ul>
          </div>
        </Column>
      </Row>
    </Container>
  );
};

export const Default: Story = {
  render: () => <ThemeControlsDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Use the toolbar controls to see how theme changes affect all components in real-time.",
      },
    },
  },
};
