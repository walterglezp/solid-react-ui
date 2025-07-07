import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { FormFieldProps } from "../Form";
import { format, startOfToday, addMinutes } from "date-fns";
import { DATE_FORMATS } from "../../../constants/date";

const meta: Meta<typeof DateTimeRangePicker> = {
  title: "Components/DateTimeRangePicker",
  component: DateTimeRangePicker,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    hideTimePicker: { control: "boolean" },
    readOnly: { control: "boolean" },
    isRequired: { control: "boolean" },
    field: { control: false },
    onChange: { action: "onChange" },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangePicker>;

const Today = startOfToday();
const Later = addMinutes(Today, 90);

const Wrapper = (props: Partial<FormFieldProps>) => {
  const [field, setField] = useState<FormFieldProps>({
    name: "range",
    value: `{"start":"${Today.toISOString()}","end":"${Today.toISOString()}"}`,
    error: "",
    formName: "storybook-form",
    section: 1,
    validate: {},
    ...props,
  });

  return (
    <div style={{ width: 400 }}>
      <p className="mt-2 text-muted">{field.value?.toString()}</p>
      <DateTimeRangePicker
        field={field}
        onChange={setField}
        markedDays={[
          {
            date: format(Today, DATE_FORMATS.DEFAULT),
            type: "selected",
          },
        ]}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <Wrapper />,
};

export const WithError: Story = {
  render: () => <Wrapper error="Please select a date range" />,
};

export const Disabled: Story = {
  render: () => <Wrapper />,
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  render: () => <Wrapper />,
  args: {
    readOnly: true,
  },
};
