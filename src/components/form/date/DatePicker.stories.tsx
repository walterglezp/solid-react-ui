import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { format } from "date-fns";
import { DatePicker } from "./DatePicker";
import { DATE_FORMATS } from "../../../constants/date";
import { FormFieldProps } from "../Form";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    isRequired: { control: "boolean" },
    minimumDate: { control: "text" },
    maximunDate: { control: "text" },
    markedDays: { control: "object" },
    className: { control: "text" },
    onChange: { action: "changed" },
  },
  args: {
    label: "Select a date",
    disabled: false,
    isRequired: false,
    markedDays: [
      {
        date: format(new Date(), DATE_FORMATS.DEFAULT),
        type: "selected",
      },
    ],
    minimumDate: "",
    maximunDate: "",
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const Today = format(new Date(), DATE_FORMATS.DEFAULT);

const Wrapper = (props: any) => {
  const [field, setField] = useState<FormFieldProps>({
    name: "date-picker",
    value: Today,
    error: "",
    formName: "storybook-form",
    section: 1,
    validate: {},
  });

  return (
    <div style={{ width: 300 }}>
      <DatePicker
        {...props}
        field={field}
        onChange={setField}
        markedDays={props.markedDays}
      />
      <p className="mt-2 text-muted">
        Current: {format(new Date(field.value as string), DATE_FORMATS.DEFAULT)}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
};

export const WithError: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    markedDays: [],
    isRequired: true,
  },
};

export const Disabled: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    disabled: true,
  },
};
