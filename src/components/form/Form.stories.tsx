import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";
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
    const [usernameField, setUsernameField] = useState<FormFieldProps>({
      name: "username",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    const [countryField, setCountryField] = useState<FormFieldProps>({
      name: "country",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    return (
      <Form>
        <div className="cursor-pointer">Clickable Button</div>
        <Input
          label={<>Username 👱</>}
          field={usernameField}
          onChange={(f) => setUsernameField(f)}
        />

        <Select
          className="mt-4"
          label="Country 🌍"
          placeholder="Select your country"
          field={countryField}
          variant="md"
          onChange={(f) => setCountryField(f)}
          options={[
            { value: "", label: "--" },
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "mx", label: "Mexico" },
          ]}
        />
        <Button variant="primary" className="mt-3" isLoading={true}>
          Submit Form
        </Button>
      </Form>
    );
  },
};

export const Default = Template;
