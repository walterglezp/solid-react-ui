import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { StarRating } from "./StarRating";

const meta = {
  title: "Common/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A flexible star rating component that supports both display and interactive modes.

## Features
- Large view (5 stars) and compact view (single star + rating text)
- Interactive rating selection with hover tooltips
- Read-only mode for display purposes
- Supports half-star ratings with visual feedback
- Three size options (sm, md, lg)
- Customizable maximum rating (default 5 stars)
- Accessible with proper ARIA labels and keyboard support
- Responsive design with reduced motion support
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
      description: "Current rating value (0-5)",
    },
    maxRating: {
      control: { type: "number", min: 1, max: 10 },
      description: "Maximum rating value",
    },
    compact: {
      control: { type: "boolean" },
      description: "Show compact view (single star + rating text)",
    },
    readonly: {
      control: { type: "boolean" },
      description: "Disable interaction and show as read-only",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the star rating component",
    },
    onRatingChange: {
      description: "Callback function when rating changes",
    },
    totalRatings: {
      control: { type: "number", min: 0 },
      description: "Total number of ratings",
    },
    showDetailedTooltip: {
      control: { type: "boolean" },
      description: "Show detailed rating breakdown in tooltip",
    },
    ratingBreakdown: {
      description:
        "Percentage breakdown by star rating (object with star rating as key, percentage as value)",
    },
    reviewsLink: {
      control: { type: "text" },
      description: "URL link for 'See all reviews' (used in detailed tooltip)",
    },
    onReviewsClick: {
      description:
        "Click handler for 'See all reviews' button (alternative to reviewsLink)",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    rating: 3.5,
    maxRating: 5,
    compact: false,
    readonly: false,
    size: "md",
    totalRatings: 58,
    showDetailedTooltip: false,
    onRatingChange: (rating: number) => console.log("Rating changed:", rating),
  },
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage
export const Default: Story = {
  args: {
    rating: 3.5,
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
  },
};

export const ZeroRating: Story = {
  args: {
    rating: 0,
  },
};

// Compact views
export const Compact: Story = {
  args: {
    rating: 4.3,
    compact: true,
  },
};

export const CompactHighRating: Story = {
  args: {
    rating: 4.8,
    compact: true,
  },
};

export const CompactLowRating: Story = {
  args: {
    rating: 2.1,
    compact: true,
  },
};

// With total ratings count
export const WithTotalRatings: Story = {
  args: {
    rating: 4.2,
    totalRatings: 158,
    readonly: true,
  },
};

export const CompactWithTotalRatings: Story = {
  args: {
    rating: 3.8,
    totalRatings: 42,
    compact: true,
    readonly: true,
  },
};

// Detailed tooltip examples
export const WithDetailedTooltip: Story = {
  args: {
    rating: 4.2,
    totalRatings: 58,
    showDetailedTooltip: true,
    ratingBreakdown: {
      5: 72,
      4: 7,
      3: 7,
      2: 3,
      1: 11,
    },
    onReviewsClick: () => window.alert("Navigate to reviews page!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click on any star to pin the detailed tooltip with rating breakdown and 'See all reviews' link. Click outside to dismiss, or click another star to switch.",
      },
    },
  },
};

// Clickable tooltip demo
export const ClickablePinnedTooltip: Story = {
  args: {
    rating: 4.5,
    totalRatings: 124,
    showDetailedTooltip: true,
    ratingBreakdown: {
      5: 65,
      4: 20,
      3: 10,
      2: 3,
      1: 2,
    },
    readonly: true,
    reviewsLink: "/reviews/product",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click any star to pin the tooltip, then click 'See all reviews' link. The tooltip stays open until you click outside or another star.",
      },
    },
  },
};

// Read-only modes
export const ReadOnly: Story = {
  args: {
    rating: 3.7,
    readonly: true,
  },
};

export const ReadOnlyCompact: Story = {
  args: {
    rating: 4.2,
    compact: true,
    readonly: true,
  },
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Small
        </h4>
        <StarRating rating={4.5} size="sm" readonly />
      </div>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Medium
        </h4>
        <StarRating rating={4.5} size="md" readonly />
      </div>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Large
        </h4>
        <StarRating rating={4.5} size="lg" readonly />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Three different size options for various use cases.",
      },
    },
  },
};

export const CompactSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Compact Small
        </h4>
        <StarRating rating={4.3} size="sm" compact readonly />
      </div>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Compact Medium
        </h4>
        <StarRating rating={4.3} size="md" compact readonly />
      </div>
      <div style={{ textAlign: "center" }}>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          Compact Large
        </h4>
        <StarRating rating={4.3} size="lg" compact readonly />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact view in different sizes.",
      },
    },
  },
};

// Half-star ratings
export const HalfStarRatings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <StarRating rating={0.5} readonly />
        <span>0.5 stars</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <StarRating rating={1.5} readonly />
        <span>1.5 stars</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <StarRating rating={2.7} readonly />
        <span>2.7 stars</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <StarRating rating={3.8} readonly />
        <span>3.8 stars</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <StarRating rating={4.9} readonly />
        <span>4.9 stars</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Examples of half-star ratings showing partial fill states.",
      },
    },
  },
};

// Interactive usage
export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <StarRating rating={rating} onRatingChange={setRating} readonly={false} />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Click on stars to set rating. Hover to see tooltip with rating preview.",
      },
    },
  },
};

export const InteractiveWithInitialRating: Story = {
  render: () => {
    const [rating, setRating] = useState(3);
    return (
      <StarRating rating={rating} onRatingChange={setRating} readonly={false} />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive rating with an initial value. Click to change rating.",
      },
    },
  },
};

// Custom max rating
export const CustomMaxRating: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          3-Star Rating
        </h4>
        <StarRating rating={2.5} maxRating={3} readonly />
      </div>
      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          7-Star Rating
        </h4>
        <StarRating rating={5.5} maxRating={7} readonly />
      </div>
      <div>
        <h4
          style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600" }}
        >
          10-Star Rating
        </h4>
        <StarRating rating={8.2} maxRating={10} readonly />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Star ratings with custom maximum values.",
      },
    },
  },
};

// Product review examples
export const ProductReviews: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "400px",
      }}
    >
      <div
        style={{
          marginTop: "220px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>
            Wireless Headphones
          </h4>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
            124 reviews
          </p>
        </div>
        <StarRating
          rating={4.5}
          totalRatings={124}
          compact
          showDetailedTooltip
          ratingBreakdown={{
            5: 65,
            4: 20,
            3: 10,
            2: 3,
            1: 2,
          }}
          reviewsLink="/reviews/headphones"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>
            Gaming Mouse
          </h4>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
            87 reviews
          </p>
        </div>
        <StarRating
          rating={3.8}
          totalRatings={87}
          compact
          showDetailedTooltip
          ratingBreakdown={{
            5: 45,
            4: 30,
            3: 15,
            2: 7,
            1: 3,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",
          border: "1px solid #eee",
          borderRadius: "8px",
        }}
      >
        <div>
          <h4 style={{ margin: "0 0 4px 0", fontSize: "16px" }}>
            Mechanical Keyboard
          </h4>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
            203 reviews
          </p>
        </div>
        <StarRating
          rating={4.9}
          totalRatings={203}
          compact
          showDetailedTooltip
          ratingBreakdown={{
            5: 85,
            4: 12,
            3: 2,
            2: 1,
            1: 0,
          }}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Product listing with compact star ratings for reviews.",
      },
    },
  },
};

// Review form
export const ReviewForm: Story = {
  render: () => {
    const handleRatingChange = (rating: number) => {
      console.log("Rating changed to:", rating);
    };

    return (
      <div
        style={{
          maxWidth: "400px",
          padding: "24px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fafafa",
        }}
      >
        <h3 style={{ margin: "0 0 16px 0", fontSize: "18px" }}>
          Leave a Review
        </h3>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
          >
            Overall Rating
          </label>
          <StarRating rating={0} onRatingChange={handleRatingChange} />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
          >
            Quality
          </label>
          <StarRating rating={0} onRatingChange={handleRatingChange} />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}
          >
            Value for Money
          </label>
          <StarRating rating={0} onRatingChange={handleRatingChange} />
        </div>

        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit Review
        </button>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive review form with multiple star rating inputs.",
      },
    },
  },
};
