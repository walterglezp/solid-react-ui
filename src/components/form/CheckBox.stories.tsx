import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckBox } from "./CheckBox";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof CheckBox> = {
  title: "Form/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "danger", "warning", "info"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  render: () => {
    const [termsField, setTermsField] = useState<FormFieldProps>({
      name: "terms",
      formName: "signup",
      error: "",
      value: false,
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Checkbox Options</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <CheckBox
            field={termsField}
            label="Accept Terms and Conditions"
            onChange={setTermsField}
          />
          <CheckBox
            field={{ ...termsField, name: "newsletter" }}
            label="Subscribe to Newsletter"
            onChange={setTermsField}
          />
          <CheckBox
            field={{ ...termsField, name: "notifications" }}
            label="Enable Notifications"
            onChange={setTermsField}
          />
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [colorFields, setColorFields] = useState({
      primary: true,
      secondary: false,
      success: true,
      danger: false,
      warning: true,
      info: false,
    });

    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "demo",
      error: "",
      value,
      section: 0,
      validate: { required: true },
    });

    const handleChange = (name: string) => (field: FormFieldProps) => {
      setColorFields((prev) => ({ ...prev, [name]: field.value }));
    };

    return (
      <div style={{ padding: "2rem" }}>
        <h4>CheckBox Colors</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <CheckBox
            field={createField("primary", colorFields.primary)}
            label="Primary"
            color="primary"
            onChange={handleChange("primary")}
          />
          <CheckBox
            field={createField("secondary", colorFields.secondary)}
            label="Secondary"
            color="secondary"
            onChange={handleChange("secondary")}
          />
          <CheckBox
            field={createField("success", colorFields.success)}
            label="Success"
            color="success"
            onChange={handleChange("success")}
          />
          <CheckBox
            field={createField("danger", colorFields.danger)}
            label="Danger"
            color="danger"
            onChange={handleChange("danger")}
          />
          <CheckBox
            field={createField("warning", colorFields.warning)}
            label="Warning"
            color="warning"
            onChange={handleChange("warning")}
          />
          <CheckBox
            field={createField("info", colorFields.info)}
            label="Info"
            color="info"
            onChange={handleChange("info")}
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [sizeFields, setSizeFields] = useState({
      sm: true,
      md: false,
      lg: true,
    });

    const createField = (name: string, value: boolean): FormFieldProps => ({
      name,
      formName: "demo",
      error: "",
      value,
      section: 0,
      validate: { required: true },
    });

    const handleChange = (name: string) => (field: FormFieldProps) => {
      setSizeFields((prev) => ({ ...prev, [name]: field.value }));
    };

    return (
      <div style={{ padding: "2rem" }}>
        <h4>CheckBox Sizes</h4>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <CheckBox
            field={createField("sm", sizeFields.sm)}
            label="Small"
            size="sm"
            color="primary"
            onChange={handleChange("sm")}
          />
          <CheckBox
            field={createField("md", sizeFields.md)}
            label="Medium"
            size="md"
            color="primary"
            onChange={handleChange("md")}
          />
          <CheckBox
            field={createField("lg", sizeFields.lg)}
            label="Large"
            size="lg"
            color="primary"
            onChange={handleChange("lg")}
          />
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [disabledField, setDisabledField] = useState<FormFieldProps>({
      name: "disabled",
      formName: "demo",
      error: "",
      value: true,
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Disabled CheckBox</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <CheckBox
            field={disabledField}
            label="Checked & Disabled"
            color="primary"
            disabled={true}
            onChange={setDisabledField}
          />
          <CheckBox
            field={{ ...disabledField, value: false }}
            label="Unchecked & Disabled"
            color="primary"
            disabled={true}
            onChange={setDisabledField}
          />
        </div>
      </div>
    );
  },
};
