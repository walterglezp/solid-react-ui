import type { Meta, StoryObj } from "@storybook/react";
import { DateTimePicker } from "./DateTimePicker";
import { useState } from "react";
import { format } from "date-fns";
import { DATE_FORMATS } from "../../../constants/date";
import { FormFieldProps } from "../Form";
import "../../../styles/global.scss";

const Today = format(new Date(), DATE_FORMATS.DEFAULT);

const meta: Meta<typeof DateTimePicker> = {
  title: "Form/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    isRequired: { control: "boolean" },
    hideTimePicker: { control: "boolean" },
    label: { control: "text" },
  },
  args: {
    disabled: false,
    readOnly: false,
    isRequired: false,
    hideTimePicker: false,
    label: "Appointment Date & Time",
  },
};
export default meta;

type Story = StoryObj<typeof DateTimePicker>;

const Wrapper = (props: Partial<FormFieldProps> & { disabled?: boolean }) => {
  const [field, setField] = useState<FormFieldProps>({
    name: "calendar",
    value: Today,
    error: "",
    formName: "storybook-form",
    section: 1,
    validate: {},
    ...props,
  });

  return (
    <div style={{ width: 300 }}>
      <DateTimePicker
        field={field}
        onChange={setField}
        disabled={props.disabled} // 💥 missing before
        markedDays={[
          { date: Today, type: "selected" },
          { date: Today, type: "current-day" },
        ]}
      />
      <p className="mt-2 text-muted">
        Current:{" "}
        {format(
          new Date(field.value as string),
          DATE_FORMATS.FRIENDLY_TIMESTAMP
        )}
      </p>
    </div>
  );
};

export const Default: Story = {
  render: () => <Wrapper />,
};

export const WithError: Story = {
  render: () => <Wrapper error="This field is required" />,
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

export const TimeOnly: Story = {
  render: () => <Wrapper />,
  args: {
    hideTimePicker: false,
  },
};

export const WithoutTimePicker: Story = {
  render: () => <Wrapper />,
  args: {
    hideTimePicker: true,
  },
};
