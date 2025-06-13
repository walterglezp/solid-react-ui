import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Autoselect } from "./Autoselect";
import type { FormFieldProps } from "./Form";

const meta: Meta<typeof Autoselect> = {
  title: "Form/Autoselect",
  component: Autoselect,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Autoselect>;

const sampleOptions = [
  { value: "nyc", label: "New York City" },
  { value: "la", label: "Los Angeles" },
  { value: "chi", label: "Chicago" },
  { value: "hou", label: "Houston" },
];

const useSampleField = (name = "city") =>
  useState<FormFieldProps>({
    name,
    formName: "example",
    error: "",
    value: "",
    section: 0,
    validate: { required: true },
  });

export const Default: Story = {
  render: () => {
    const [field, setField] = useSampleField();
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect
          label="City"
          placeholder="Start typing..."
          field={field}
          options={sampleOptions}
          onChange={setField}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [field, setField] = useSampleField("city-disabled");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect
          label="Disabled"
          placeholder="Cannot type"
          field={field}
          options={sampleOptions}
          disabled
          onChange={setField}
        />
      </div>
    );
  },
};

export const Borderless: Story = {
  render: () => {
    const [field, setField] = useSampleField("city-borderless");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect
          label="Borderless"
          placeholder="Type something..."
          field={field}
          options={sampleOptions}
          borderless
          onChange={setField}
        />
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [field, setField] = useSampleField("city-lg");
    return (
      <div style={{ maxWidth: 300 }}>
        <Autoselect
          label="Large"
          placeholder="Select city"
          field={field}
          options={sampleOptions}
          variant="lg"
          onChange={setField}
        />
      </div>
    );
  },
};
