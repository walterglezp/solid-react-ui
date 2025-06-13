import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Autoselect } from "./Autoselect";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Autoselect> = {
  title: "Form/Autoselect",
  component: Autoselect,
  tags: ["autodocs"],
  args: {
    label: "City",
    placeholder: "Start typing...",
    options: [
      { value: "nyc", label: "New York City" },
      { value: "la", label: "Los Angeles" },
      { value: "chi", label: "Chicago" },
      { value: "hou", label: "Houston" },
    ],
    disabled: false,
    borderless: false,
    variant: "md",
  },
  argTypes: {
    field: { control: false },
    onChange: { control: false },
    options: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Autoselect>;

const useSampleField = (name = "city") =>
  useState<FormFieldProps>({
    name,
    formName: "example",
    error: "",
    value: "",
    section: 0,
    validate: { required: true },
  });

export const Default: Story = {
  render: (args) => {
    const [field, setField] = useSampleField();
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled",
    placeholder: "Cannot type",
  },
  render: (args) => {
    const [field, setField] = useSampleField("city-disabled");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>
    );
  },
};

export const Borderless: Story = {
  args: {
    borderless: true,
    label: "Borderless",
    placeholder: "Type something...",
  },
  render: (args) => {
    const [field, setField] = useSampleField("city-borderless");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>
    );
  },
};

export const Large: Story = {
  args: {
    label: "Large",
    placeholder: "Select city",
    variant: "lg",
  },
  render: (args) => {
    const [field, setField] = useSampleField("city-lg");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect {...args} field={field} onChange={setField} />
      </div>
    );
  },
};
