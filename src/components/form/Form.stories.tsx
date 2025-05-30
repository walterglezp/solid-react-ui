import type { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import Input from "./Input";
import { useState } from "react";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

const Template: Story = {
  render: () => {
    const [field, setField] = useState<FormFieldProps>({
      name: "username",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    return (
      <Form>
        <Input
          label={<>Username 👱</>}
          field={field}
          onFieldChange={(f) => setField(f)}
        />
      </Form>
    );
  },
};
export const Default = Template;
