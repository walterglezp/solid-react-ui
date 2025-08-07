import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { InputNumber } from "./InputNumber";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof InputNumber> = {
  title: "Form/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  args: {
    label: "Quantity",
    min: 0,
    max: 10,
    isRequired: true,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    field: { control: false },
    onChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

const useNumberField = (
  initial: number,
): [FormFieldProps, (f: FormFieldProps) => void] => {
  const [field, setField] = useState<FormFieldProps>({
    name: "qty",
    formName: "cart",
    value: initial,
    error: "",
    section: 0,
    validate: { required: true },
  });
  return [field, setField];
};

export const Default: Story = {
  render: (args) => {
    const [field, setField] = useNumberField(2);
    return <InputNumber {...args} field={field} onChange={setField} />;
  },
};

export const WithError: Story = {
  render: (args) => {
    const [field, setField] = useNumberField(5);
    field.error = "This field is required";
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const [field, setField] = useNumberField(3);
    return <InputNumber {...args} field={field} onChange={() => {}} />;
  },
};
