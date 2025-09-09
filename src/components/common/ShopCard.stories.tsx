import type { Meta, StoryObj } from "@storybook/react";
import { ShopCard } from "./ShopCard";

const meta = {
  title: "Common/ShopCard",
  component: ShopCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A product card component designed for e-commerce applications.

## Features
- Product image display with free shipping badge overlay
- Product title with text truncation support
- Sales count display
- Star rating with review count
- Price display with discount support
- Clickable card with hover effects
- Responsive design
- White background with subtle shadow and 6px border radius
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: { type: "text" },
      description: "Product image URL",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for the product image",
    },
    title: {
      control: { type: "text" },
      description: "Product title",
    },
    salesCount: {
      control: { type: "text" },
      description: "Sales count description",
    },
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "Product rating (0-5)",
    },
    reviewCount: {
      control: { type: "number" },
      description: "Number of reviews/sold items",
    },
    price: {
      control: { type: "number", min: 0, step: 0.01 },
      description: "Current price",
    },
    originalPrice: {
      control: { type: "number", min: 0, step: 0.01 },
      description: "Original price (before discount)",
    },
    discountPercentage: {
      control: { type: "number", min: 0, max: 100 },
      description: "Discount percentage",
    },
    freeShipping: {
      control: { type: "boolean" },
      description: "Whether to show free shipping badge",
    },
    topSale: {
      control: { type: "boolean" },
      description: "Whether to show top sale badge",
    },
    onAddToCart: {
      description: "Callback function when add to cart button is clicked",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  args: {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=center",
    imageAlt: "Product image",
    title: "100ft Expandable Water Hose",
    salesCount: "9.6K+ overall shop sales",
    rating: 4.5,
    reviewCount: 145,
    price: 23.19,
    originalPrice: 28.99,
    discountPercentage: 20,
    freeShipping: true,
    topSale: false,
  },
} satisfies Meta<typeof ShopCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFreeShipping: Story = {
  args: {
    freeShipping: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with free shipping badge displayed on the image.",
      },
    },
  },
};

export const WithoutFreeShipping: Story = {
  args: {
    freeShipping: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card without free shipping badge.",
      },
    },
  },
};

export const WithTopSale: Story = {
  args: {
    topSale: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product card with top sale badge displayed in the top right corner.",
      },
    },
  },
};

export const TopSaleWithFreeShipping: Story = {
  args: {
    topSale: true,
    freeShipping: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with both top sale and free shipping badges.",
      },
    },
  },
};

export const WithDiscount: Story = {
  args: {
    price: 19.99,
    originalPrice: 39.99,
    discountPercentage: 50,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product card showing discounted pricing with original price crossed out.",
      },
    },
  },
};

export const WithoutDiscount: Story = {
  args: {
    price: 25.99,
    originalPrice: undefined,
    discountPercentage: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card showing regular pricing without discount.",
      },
    },
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.3,
    reviewCount: 12,
    title: "Budget Garden Hose",
    salesCount: "500+ overall shop sales",
    price: 9.99,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with lower rating and fewer reviews.",
      },
    },
  },
};

export const HighRating: Story = {
  args: {
    rating: 4.9,
    reviewCount: 2453,
    title: "Premium Garden Hose - Professional Grade",
    salesCount: "50K+ overall shop sales",
    price: 49.99,
    originalPrice: 59.99,
    discountPercentage: 17,
  },
  parameters: {
    docs: {
      description: {
        story: "Product card with high rating and many reviews.",
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "Extra Long Professional Grade Expandable Garden Water Hose with Brass Fittings and Storage Bag - 100ft Maximum Length",
    salesCount: "25K+ overall shop sales",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product card with long title that gets truncated with ellipsis.",
      },
    },
  },
};

export const Clickable: Story = {
  args: {
    onClick: () => window.alert("Product card clicked!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product card with click handler - hover to see the cursor change and click for interaction.",
      },
    },
  },
};

export const WithAddToCart: Story = {
  args: {
    onAddToCart: () => window.alert("Added to cart!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Product card with add to cart button in the bottom right corner. The button is subtle initially and becomes prominent on hover.",
      },
    },
  },
};

export const FullyInteractive: Story = {
  args: {
    onClick: () => window.alert("Product card clicked!"),
    onAddToCart: () => window.alert("Added to cart!"),
    freeShipping: true,
    topSale: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Fully interactive product card with click handler, add to cart button, and both badges. Notice how clicking the add to cart button doesn't trigger the card click.",
      },
    },
  },
};

export const ProductGrid: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
        maxWidth: "900px",
      }}
    >
      <ShopCard
        image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=280&h=200&fit=crop&crop=center"
        imageAlt="Garden hose"
        title="100ft Expandable Water Hose"
        salesCount="9.6K+ overall shop sales"
        rating={4.5}
        reviewCount={145}
        price={23.19}
        originalPrice={28.99}
        discountPercentage={20}
        freeShipping={true}
        topSale={true}
        onAddToCart={() => window.alert("Added Garden Hose to cart!")}
      />
      <ShopCard
        image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=280&h=200&fit=crop&crop=center"
        imageAlt="Garden tools"
        title="Professional Garden Tool Set"
        salesCount="3.2K+ overall shop sales"
        rating={4.2}
        reviewCount={89}
        price={34.99}
        originalPrice={49.99}
        discountPercentage={30}
        freeShipping={false}
        onAddToCart={() => window.alert("Added Garden Tools to cart!")}
      />
      <ShopCard
        image="https://images.unsplash.com/photo-1585329062339-53db6eb5e1fb?w=280&h=200&fit=crop&crop=center"
        imageAlt="Watering can"
        title="Vintage Metal Watering Can"
        salesCount="1.8K+ overall shop sales"
        rating={4.7}
        reviewCount={234}
        price={19.99}
        freeShipping={true}
        onAddToCart={() => window.alert("Added Watering Can to cart!")}
      />
    </div>
  ),
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Multiple product cards displayed in a responsive grid layout.",
      },
    },
  },
};
