import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { TextArea } from "./TextArea";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof TextArea> = {
  title: "Form/TextArea",
  component: TextArea,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  render: () => {
    const [bioField, setBioField] = useState<FormFieldProps>({
      name: "bio",
      formName: "profile",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    return (
      <div style={{ maxWidth: "600px", padding: "2rem" }}>
        <TextArea
          label="Bio"
          field={bioField}
          onChange={setBioField}
          rows={5}
          cols={50}
          variant="md"
        />
      </div>
    );
  },
};
