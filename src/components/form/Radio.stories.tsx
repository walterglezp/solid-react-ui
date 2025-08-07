import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Radio } from "./Radio";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "signup",
      error: "",
      value: "male",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Select Gender</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Radio
            field={genderField}
            checkedValue="male"
            label="Male"
            onChange={setGenderField}
          />
          <Radio
            field={genderField}
            checkedValue="female"
            label="Female"
            onChange={setGenderField}
          />
          <Radio
            field={genderField}
            checkedValue="other"
            label="Other"
            onChange={setGenderField}
          />
        </div>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => {
    const [colorField, setColorField] = useState<FormFieldProps>({
      name: "color",
      formName: "demo",
      error: "",
      value: "primary",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Radio Colors</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Radio
            field={colorField}
            checkedValue="primary"
            label="Primary"
            color="primary"
            onChange={setColorField}
          />
          <Radio
            field={colorField}
            checkedValue="secondary"
            label="Secondary"
            color="secondary"
            onChange={setColorField}
          />
          <Radio
            field={colorField}
            checkedValue="success"
            label="Success"
            color="success"
            onChange={setColorField}
          />
          <Radio
            field={colorField}
            checkedValue="danger"
            label="Danger"
            color="danger"
            onChange={setColorField}
          />
          <Radio
            field={colorField}
            checkedValue="warning"
            label="Warning"
            color="warning"
            onChange={setColorField}
          />
          <Radio
            field={colorField}
            checkedValue="info"
            label="Info"
            color="info"
            onChange={setColorField}
          />
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [sizeField, setSizeField] = useState<FormFieldProps>({
      name: "size",
      formName: "demo",
      error: "",
      value: "sm",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Radio Sizes</h4>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Radio
            field={sizeField}
            checkedValue="sm"
            label="Small"
            size="sm"
            color="primary"
            onChange={setSizeField}
          />
          <Radio
            field={sizeField}
            checkedValue="md"
            label="Medium"
            size="md"
            color="primary"
            onChange={setSizeField}
          />
          <Radio
            field={sizeField}
            checkedValue="lg"
            label="Large"
            size="lg"
            color="primary"
            onChange={setSizeField}
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
      value: "option1",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Disabled Radio Buttons</h4>
        <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
          <Radio
            field={disabledField}
            checkedValue="option1"
            label="Selected & Disabled"
            color="primary"
            disabled={true}
            onChange={setDisabledField}
          />
          <Radio
            field={disabledField}
            checkedValue="option2"
            label="Unselected & Disabled"
            color="primary"
            disabled={true}
            onChange={setDisabledField}
          />
        </div>
      </div>
    );
  },
};
