import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Fruit",
    placeholder: "Select fruit",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
    disabled: false,
    variant: "md",
  },
  argTypes: {
    field: { control: false },
    onChange: { control: false },
    append: { control: false },
    options: { control: false },
    variant: { control: "radio", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const useField = (
  initial: Partial<FormFieldProps>,
): [FormFieldProps, (f: FormFieldProps) => void] => {
  const [field, setField] = useState<FormFieldProps>({
    name: "fruit",
    formName: "demoForm",
    error: "",
    value: "",
    section: 0,
    validate: { required: true },
    ...initial,
  });
  return [field, setField];
};

export const Default: Story = {
  render: (args) => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  },
};

export const WithAppendIcon: Story = {
  render: (args) => {
    const [field, setField] = useField({});
    return (
      <Select
        {...args}
        append={
          <span role="img" aria-label="banana">
            🍌
          </span>
        }
        field={field}
        onChange={setField}
      />
    );
  },
};

export const LargeVariant: Story = {
  args: {
    variant: "lg",
  },
  render: (args) => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  },
};

export const WithError: Story = {
  render: (args) => {
    const [field, setField] = useField({ error: "Required field" });
    return <Select {...args} field={field} onChange={setField} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [field, setField] = useField({});
    return <Select {...args} field={field} onChange={setField} />;
  },
};
