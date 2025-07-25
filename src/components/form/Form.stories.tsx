import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "./Button";
import { Form } from "./Form";
import { Input } from "./Input";
import { Select } from "./Select";
import { Autoselect } from "./Autoselect";
import { CheckBox } from "./CheckBox";
import { CheckBoxIcon } from "./CheckBoxIcon";
import { InputNumber } from "./InputNumber";
import { Link } from "../navigation/Link";
import { ImageDropZone } from "./ImageDropZone";
import { Radio } from "./Radio";
import { TextArea } from "./TextArea";
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

    const [quantityField, setQuantityField] = useState<FormFieldProps>({
      name: "quantity",
      formName: "login",
      error: "",
      value: 1,
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

    const [imagesField, setImagesField] = useState<
      FormFieldProps & { value: string[] }
    >({
      name: "images",
      formName: "login",
      error: "",
      value: [],
      section: 0,
      validate: { required: false },
    });

    const [genderField, setGenderField] = useState<FormFieldProps>({
      name: "gender",
      formName: "login",
      error: "",
      value: "male",
      section: 0,
      validate: { required: true },
    });

    const [bioField, setBioField] = useState<FormFieldProps>({
      name: "bio",
      formName: "login",
      error: "",
      value: "",
      section: 0,
      validate: { required: false },
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
          onChange={setUsernameField}
        />

        <Select
          className="mt-4"
          label="Country 🌍"
          placeholder="Select your country"
          field={countryField}
          variant="md"
          onChange={setCountryField}
          options={[
            { value: "", label: "--" },
            { value: "us", label: "United States" },
            { value: "ca", label: "Canada" },
            { value: "mx", label: "Mexico" },
          ]}
        />

        <Autoselect
          className="mt-4"
          label="City 🌆"
          placeholder="Start typing a city..."
          field={cityField}
          options={cityOptions}
          onChange={setCityField}
        />

        <InputNumber
          className="mt-4"
          label="Quantity"
          min={1}
          max={10}
          field={quantityField}
          onChange={setQuantityField}
        />

        <ImageDropZone
          className="mt-4"
          field={imagesField}
          onChange={setImagesField}
          maxImages={5}
        />

        <div className="mt-4">
          <h6>Select Gender</h6>
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
              variant={false}
              btnSize="sm"
              onChange={setGenderField}
            />
            <Radio
              field={genderField}
              checkedValue="other"
              label="Other"
              variant={false}
              btnSize="sm"
              onChange={setGenderField}
            />
          </div>
        </div>

        <TextArea
          className="mt-4"
          label="Bio"
          field={bioField}
          onChange={setBioField}
          rows={4}
          cols={40}
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
          onChange={setTermsField}
        />

        <div className="mt-3">
          <CheckBoxIcon
            field={termsField}
            onChange={setTermsField}
            title="Agree to terms"
          >
            <span
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: termsField.value ? "#198754" : "#f8f9fa",
                borderRadius: "0.375rem",
                color: termsField.value ? "#fff" : "#000",
                userSelect: "none",
                cursor: "pointer",
              }}
            >
              ✅ Custom Toggle Consent
            </span>
          </CheckBoxIcon>
        </div>

        <Button variant="primary" className="mt-4" isLoading={false}>
          Submit Form
        </Button>
      </Form>
    );
  },
};
