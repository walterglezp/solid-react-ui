import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CheckBoxIcon } from "./CheckBoxIcon";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof CheckBoxIcon> = {
  title: "Form/CheckBoxIcon",
  component: CheckBoxIcon,
  tags: ["autodocs"],
  args: {
    title: "Toggle Option",
    inline: false,
  },
  argTypes: {
    field: { control: false },
    onChange: { control: false },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBoxIcon>;

const useField = (): [FormFieldProps, (f: FormFieldProps) => void] => {
  const [field, setField] = useState<FormFieldProps>({
    name: "icon-check",
    formName: "demo",
    value: false,
    error: "",
    section: 0,
    validate: { required: true },
  });
  return [field, setField];
};

export const Default: Story = {
  render: (args) => {
    const [field, setField] = useField();

    return (
      <CheckBoxIcon {...args} field={field} onChange={setField}>
        <span
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: field.value ? "#0d6efd" : "#e9ecef",
            color: field.value ? "#fff" : "#000",
            borderRadius: "0.375rem",
            userSelect: "none",
            cursor: "pointer",
          }}
        >
          Click Me
        </span>
      </CheckBoxIcon>
    );
  },
};
