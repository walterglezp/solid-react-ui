import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { useState } from "react";
import { FormFieldProps } from "../../form/Form";
import { format } from "date-fns";
import { DATE_FORMATS } from "../../../constants/date";

const meta: Meta<typeof Calendar> = {
  title: "Form/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the calendar input",
    },
    field: {
      control: { type: "object" },
      description: "Form field properties",
      table: {
        type: { summary: "FormFieldProps" },
      },
    },
    onChange: {
      action: "changed",
      description: "Callback when date selection changes",
    },
    markedDays: { control: false },
  },
  args: {
    disabled: false,
    markedDays: [
      { date: format(new Date(), DATE_FORMATS.DEFAULT), type: "selected" },
      { date: format(new Date(), DATE_FORMATS.DEFAULT), type: "current-day" },
    ],
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

const Today = format(new Date(), DATE_FORMATS.DEFAULT);

const Wrapper = (props: Partial<FormFieldProps> & { disabled?: boolean }) => {
  const [field, setField] = useState<FormFieldProps>({
    name: "calendar",
    value: Today,
    error: "",
    formName: "storybook-form",
    section: 1,
    validate: {}, // stubbed
    ...props,
  });

  return (
    <div style={{ width: 300 }}>
      <Calendar
        disabled={props.disabled}
        field={field}
        onChange={setField}
        markedDays={[
          { date: Today, type: "selected" },
          { date: Today, type: "current-day" },
        ]}
      />

      <p className="mt-2 text-muted">
        {format(new Date(field.value as string), DATE_FORMATS.DEFAULT)}
      </p>
    </div>
  );
};
export const Default: Story = {
  render: (args) => <Wrapper {...args} />,
};

export const WithError: Story = {
  render: (args) => <Wrapper {...args} error="Invalid date selection" />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Wrapper {...args} />,
};
