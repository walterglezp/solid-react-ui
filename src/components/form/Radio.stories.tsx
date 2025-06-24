import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Radio } from "./Radio";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        false,
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link",
      ],
    },
    btnSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "signup",
      error: "",
      value: "male",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ padding: "2rem" }}>
        <h4>Select Gender</h4>
        <div className="d-flex gap-2">
          <Radio
            field={genderField}
            checkedValue="male"
            label="Male"
            variant={false}
            btnSize="sm"
            onChange={setGenderField}
          />
          <Radio
            field={genderField}
            checkedValue="female"
            label="Female"
            variant="danger"
            btnSize="sm"
            onChange={setGenderField}
          />
          <Radio
            field={genderField}
            checkedValue="other"
            label="Other"
            variant="success"
            btnSize="sm"
            onChange={setGenderField}
          />
        </div>
      </div>
    );
  },
};
