import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { CheckBox } from "./CheckBox";
import { FormFieldProps } from "../form/Form";

const meta: Meta<typeof CheckBox> = {
  title: "Form/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  render: () => {
    const [fieldCheckbox, setFieldCheckbox] = useState<FormFieldProps>({
      name: "acceptTerms",
      formName: "signup",
      value: false,
      error: "",
      section: 0,
      validate: { required: true },
    });

    const [fieldSwitch, setFieldSwitch] = useState<FormFieldProps>({
      name: "notifications",
      formName: "settings",
      value: true,
      error: "",
      section: 0,
      validate: {},
    });

    return (
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <CheckBox
          label="Accept Terms"
          field={fieldCheckbox}
          onChange={setFieldCheckbox}
        />
        <CheckBox
          label="Enable Notifications"
          variant="switch"
          field={fieldSwitch}
          onChange={setFieldSwitch}
        />
      </div>
    );
  },
};
