import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

const useField = (
  initial: Partial<FormFieldProps>
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
  render: () => {
    const [field, setField] = useField({});
    return (
      <Select
        label="Fruit"
        placeholder="Select fruit"
        field={field}
        onChange={setField}
        options={options}
      />
    );
  },
};

export const WithAppendIcon: Story = {
  render: () => {
    const [field, setField] = useField({});
    return (
      <Select
        label="Fruit"
        placeholder="Choose one"
        field={field}
        onChange={setField}
        options={options}
        append={<span>🍌</span>}
      />
    );
  },
};

export const LargeVariant: Story = {
  render: () => {
    const [field, setField] = useField({});
    return (
      <Select
        label="Fruit"
        placeholder="Select fruit"
        field={field}
        onChange={setField}
        options={options}
        variant="lg"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [field, setField] = useField({ error: "Required field" });
    return (
      <Select
        label="Fruit"
        placeholder="Select fruit"
        field={field}
        onChange={setField}
        options={options}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [field, setField] = useField({});
    return (
      <Select
        label="Fruit"
        placeholder="Select fruit"
        field={field}
        onChange={setField}
        options={options}
        disabled
      />
    );
  },
};
