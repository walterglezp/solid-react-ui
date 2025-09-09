import type { Meta, StoryObj } from "@storybook/react";
import { ImageViewer } from "./ImageViewer";
import React, { useState } from "react";

const meta: Meta<typeof ImageViewer> = {
  title: "Graphics/ImageViewer",
  component: ImageViewer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A modal image viewer with navigation controls for displaying single or multiple images in a gallery format.",
      },
    },
  },
  argTypes: {
    images: {
      description: "Array of image URLs to display",
      control: { type: "object" },
    },
    isOpen: {
      description: "Whether the viewer is open",
      control: { type: "boolean" },
    },
    initialIndex: {
      description: "Initial image index to display",
      control: { type: "number" },
    },
    showCounter: {
      description: "Show image counter (e.g., '1 of 5')",
      control: { type: "boolean" },
    },
    showNavigation: {
      description: "Show navigation arrows",
      control: { type: "boolean" },
    },
    enableKeyboardNavigation: {
      description: "Enable keyboard navigation (arrow keys, escape)",
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageViewer>;

// Sample images for stories
const sampleImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
];

const singleImage = [sampleImages[0]];

// Story wrapper component for interactive examples
const ImageViewerWrapper = ({
  images,
  initialIndex = 0,
  showCounter = true,
  showNavigation = true,
  enableKeyboardNavigation = true,
}: {
  images: string[];
  initialIndex?: number;
  showCounter?: boolean;
  showNavigation?: boolean;
  enableKeyboardNavigation?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "12px 24px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Open Image Viewer ({images.length} image{images.length !== 1 ? "s" : ""}
        )
      </button>

      <ImageViewer
        images={images}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialIndex={initialIndex}
        showCounter={showCounter}
        showNavigation={showNavigation}
        enableKeyboardNavigation={enableKeyboardNavigation}
      />
    </div>
  );
};

export const SingleImage: Story = {
  render: () => <ImageViewerWrapper images={singleImage} />,
  parameters: {
    docs: {
      description: {
        story:
          "ImageViewer with a single image. Navigation controls are hidden when there's only one image.",
      },
    },
  },
};

export const MultipleImages: Story = {
  render: () => <ImageViewerWrapper images={sampleImages} />,
  parameters: {
    docs: {
      description: {
        story:
          "ImageViewer with multiple images. Use navigation arrows or keyboard (left/right arrows) to navigate between images.",
      },
    },
  },
};

export const StartFromMiddle: Story = {
  render: () => <ImageViewerWrapper images={sampleImages} initialIndex={2} />,
  parameters: {
    docs: {
      description: {
        story:
          "ImageViewer starting from a specific image index (3rd image in this example).",
      },
    },
  },
};

export const NoCounter: Story = {
  render: () => (
    <ImageViewerWrapper images={sampleImages} showCounter={false} />
  ),
  parameters: {
    docs: {
      description: {
        story: "ImageViewer with the counter hidden.",
      },
    },
  },
};

export const NoNavigation: Story = {
  render: () => (
    <ImageViewerWrapper images={sampleImages} showNavigation={false} />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "ImageViewer with navigation arrows hidden. Users can still navigate with keyboard arrows.",
      },
    },
  },
};

export const MinimalViewer: Story = {
  render: () => (
    <ImageViewerWrapper
      images={sampleImages}
      showCounter={false}
      showNavigation={false}
      enableKeyboardNavigation={false}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal ImageViewer with all navigation controls disabled.",
      },
    },
  },
};

// Controlled example for advanced usage
const ControlledExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState(sampleImages.slice(0, 3));
  const [startIndex, setStartIndex] = useState(0);

  const addImage = () => {
    if (currentImages.length < sampleImages.length) {
      setCurrentImages([...currentImages, sampleImages[currentImages.length]]);
    }
  };

  const removeImage = () => {
    if (currentImages.length > 1) {
      setCurrentImages(currentImages.slice(0, -1));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: "12px 24px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Open Viewer
        </button>

        <button
          onClick={addImage}
          disabled={currentImages.length >= sampleImages.length}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            opacity: currentImages.length >= sampleImages.length ? 0.5 : 1,
          }}
        >
          Add Image
        </button>

        <button
          onClick={removeImage}
          disabled={currentImages.length <= 1}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            opacity: currentImages.length <= 1 ? 0.5 : 1,
          }}
        >
          Remove Image
        </button>

        <span>Images: {currentImages.length}</span>
      </div>

      <div>
        <label>
          Start Index:
          <input
            type="number"
            min={0}
            max={currentImages.length - 1}
            value={startIndex}
            onChange={(e) =>
              setStartIndex(
                Math.max(
                  0,
                  Math.min(
                    currentImages.length - 1,
                    parseInt(e.target.value) || 0,
                  ),
                ),
              )
            }
            style={{ marginLeft: "8px", padding: "4px", width: "60px" }}
          />
        </label>
      </div>

      <ImageViewer
        images={currentImages}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialIndex={startIndex}
        altText={currentImages.map((_, index) => `Nature Image ${index + 1}`)}
      />
    </div>
  );
};

export const ControlledViewer: Story = {
  render: () => <ControlledExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing dynamic image management and controlled props.",
      },
    },
  },
};
