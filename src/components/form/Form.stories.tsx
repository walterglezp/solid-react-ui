import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";
import { Autoselect } from "./Autoselect";
import { CheckBox } from "./CheckBox";
import { Link } from "../navigation/Link";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
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

    const [cityField, setCityField] = useState<FormFieldProps>({
      name: "city",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: true },
    });

    const [termsField, setTermsField] = useState<FormFieldProps>({
      name: "terms",
      formName: "login",
      error: "",
      value: false,
      section: 0,
      validate: { required: true },
    });

    const cityOptions = [
      { value: "nyc", label: "New York" },
      { value: "la", label: "Los Angeles" },
      { value: "chi", label: "Chicago" },
      { value: "hou", label: "Houston" },
    ];

    return (
      <Form>
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

        <Autoselect
          className="mt-4"
          label="City 🏙️"
          placeholder="Start typing a city..."
          field={cityField}
          options={cityOptions}
          onChange={(f) => setCityField(f)}
        />

        <CheckBox
          className="mt-4"
          label={
            <>
              I accept the{" "}
              <Link to="https://example.com/terms" variant="info" blank>
                terms and conditions
              </Link>
            </>
          }
          field={termsField}
          onChange={(f) => setTermsField(f)}
        />

        <Button variant="primary" className="mt-3" isLoading={true}>
          Submit Form
        </Button>
      </Form>
    );
  },
};
