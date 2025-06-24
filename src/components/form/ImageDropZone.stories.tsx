import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ImageDropZone } from "./ImageDropZone";
import type { FormFieldProps } from "../form/Form";

const meta: Meta<typeof ImageDropZone> = {
  title: "Form/ImageDropZone",
  component: ImageDropZone,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ImageDropZone>;

export const Default: Story = {
  render: () => {
    const [imagesField, setImagesField] = useState<
      FormFieldProps & { value: string[] }
    >({
      name: "images",
      formName: "sampleForm",
      error: "",
      section: 0,
      validate: { required: false },
      value: [],
    });

    return (
      <div style={{ maxWidth: "100%", padding: "2rem" }}>
        <ImageDropZone
          field={imagesField}
          onChange={setImagesField}
          maxImages={6}
        />
      </div>
    );
  },
};
