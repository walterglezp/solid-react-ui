import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { CheckBox } from "./CheckBox";
import { FormFieldProps } from "../form/Form";

const meta: Meta<typeof CheckBox> = {
  title: "Form/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  args: {
    label: "Accept Terms",
    variant: "checkbox",
  },
  argTypes: {
    field: { control: false },
    onChange: { control: false },
    variant: { control: "radio", options: ["checkbox", "switch"] },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

const useSampleField = (name: string, value: boolean) =>
  useState<FormFieldProps>({
    name,
    formName: "example",
    value,
    error: "",
    section: 0,
    validate: {},
  });

export const Checkbox: Story = {
  render: (args) => {
    const [field, setField] = useSampleField("acceptTerms", false);
    return <CheckBox {...args} field={field} onChange={setField} />;
  },
};

export const Switch: Story = {
  args: {
    label: "Enable Notifications",
    variant: "switch",
  },
  render: (args) => {
    const [field, setField] = useSampleField("notifications", true);
    return <CheckBox {...args} field={field} onChange={setField} />;
  },
};
