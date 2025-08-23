import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ShopCard } from "./ShopCard";

const DEFAULT_PROPS = {
  image: "https://example.com/image.jpg",
  imageAlt: "Test product",
  title: "Test Product Title",
  salesCount: "1.2K+ overall shop sales",
  rating: 4.5,
  reviewCount: 123,
  price: 25.99,
};

describe("ShopCard", () => {
  test("renders shop card with all required content", () => {
    render(<ShopCard {...DEFAULT_PROPS} />);

    expect(screen.getByText("Test Product Title")).toBeInTheDocument();
    expect(screen.getByText("1.2K+ overall shop sales")).toBeInTheDocument();
    expect(screen.getByText("4.5 | 123 sold")).toBeInTheDocument();
    expect(screen.getByText("$25.99")).toBeInTheDocument();

    const image = screen.getByAltText("Test product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");
  });

  test("applies correct CSS classes", () => {
    render(<ShopCard {...DEFAULT_PROPS} />);

    const card = document.querySelector(".shop-card");
    expect(card).toBeInTheDocument();
    expect(card).not.toHaveClass("shop-card--clickable");
  });

  test("applies clickable class when onClick is provided", () => {
    const mockOnClick = vi.fn();
    render(<ShopCard {...DEFAULT_PROPS} onClick={mockOnClick} />);

    const card = document.querySelector(".shop-card");
    expect(card).toHaveClass("shop-card--clickable");
  });

  test("calls onClick when card is clicked", () => {
    const mockOnClick = vi.fn();
    render(<ShopCard {...DEFAULT_PROPS} onClick={mockOnClick} />);

    const card = document.querySelector(".shop-card");
    fireEvent.click(card!);

    expect(mockOnClick).toHaveBeenCalledOnce();
  });

  test("does not call onClick when not provided", () => {
    render(<ShopCard {...DEFAULT_PROPS} />);

    const card = document.querySelector(".shop-card");
    expect(() => fireEvent.click(card!)).not.toThrow();
  });

  test("applies custom className", () => {
    const customClass = "custom-shop-card";
    render(<ShopCard {...DEFAULT_PROPS} className={customClass} />);

    const card = document.querySelector(".shop-card");
    expect(card).toHaveClass(customClass);
  });

  test("shows free shipping badge when freeShipping is true", () => {
    render(<ShopCard {...DEFAULT_PROPS} freeShipping={true} />);

    expect(screen.getByText("Free shipping")).toBeInTheDocument();

    const badge = screen
      .getByText("Free shipping")
      .closest(".shop-card__free-shipping-badge");
    expect(badge).toBeInTheDocument();
  });

  test("does not show free shipping badge when freeShipping is false", () => {
    render(<ShopCard {...DEFAULT_PROPS} freeShipping={false} />);

    expect(screen.queryByText("Free shipping")).not.toBeInTheDocument();
  });

  test("shows top sale badge when topSale is true", () => {
    render(<ShopCard {...DEFAULT_PROPS} topSale={true} />);

    expect(screen.getByText("Top Sale")).toBeInTheDocument();

    const badge = screen
      .getByText("Top Sale")
      .closest(".shop-card__top-sale-badge");
    expect(badge).toBeInTheDocument();
  });

  test("does not show top sale badge when topSale is false", () => {
    render(<ShopCard {...DEFAULT_PROPS} topSale={false} />);

    expect(screen.queryByText("Top Sale")).not.toBeInTheDocument();
  });

  test("shows both badges when both freeShipping and topSale are true", () => {
    render(<ShopCard {...DEFAULT_PROPS} freeShipping={true} topSale={true} />);

    expect(screen.getByText("Free shipping")).toBeInTheDocument();
    expect(screen.getByText("Top Sale")).toBeInTheDocument();

    const freeShippingBadge = screen
      .getByText("Free shipping")
      .closest(".shop-card__free-shipping-badge");
    const topSaleBadge = screen
      .getByText("Top Sale")
      .closest(".shop-card__top-sale-badge");

    expect(freeShippingBadge).toBeInTheDocument();
    expect(topSaleBadge).toBeInTheDocument();
  });

  test("displays discount pricing correctly", () => {
    render(
      <ShopCard
        {...DEFAULT_PROPS}
        price={19.99}
        originalPrice={29.99}
        discountPercentage={33}
      />,
    );

    expect(screen.getByText("$19.99")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("(-33%)")).toBeInTheDocument();

    const originalPrice = screen.getByText("$29.99");
    expect(originalPrice).toHaveClass("shop-card__original-price");

    const discount = screen.getByText("(-33%)");
    expect(discount).toHaveClass("shop-card__discount");
  });

  test("does not show discount when originalPrice is not provided", () => {
    render(<ShopCard {...DEFAULT_PROPS} price={25.99} />);

    expect(screen.getByText("$25.99")).toBeInTheDocument();
    expect(screen.queryAllByText(/^\$/)).toHaveLength(1); // Only current price
    expect(
      document.querySelector(".shop-card__original-price"),
    ).not.toBeInTheDocument();
    expect(
      document.querySelector(".shop-card__discount"),
    ).not.toBeInTheDocument();
  });

  test("does not show discount when originalPrice equals current price", () => {
    render(
      <ShopCard
        {...DEFAULT_PROPS}
        price={25.99}
        originalPrice={25.99}
        discountPercentage={0}
      />,
    );

    expect(screen.getByText("$25.99")).toBeInTheDocument();
    expect(
      document.querySelector(".shop-card__original-price"),
    ).not.toBeInTheDocument();
    expect(
      document.querySelector(".shop-card__discount"),
    ).not.toBeInTheDocument();
  });

  test("formats prices correctly", () => {
    render(<ShopCard {...DEFAULT_PROPS} price={5} originalPrice={10.5} />);

    expect(screen.getByText("$5.00")).toBeInTheDocument();
    expect(screen.getByText("$10.50")).toBeInTheDocument();
  });

  test("displays rating with correct format", () => {
    render(<ShopCard {...DEFAULT_PROPS} rating={3.7} reviewCount={456} />);

    expect(screen.getByText("3.7 | 456 sold")).toBeInTheDocument();
  });

  test("handles zero rating", () => {
    render(<ShopCard {...DEFAULT_PROPS} rating={0} reviewCount={0} />);

    expect(screen.getByText("0.0 | 0 sold")).toBeInTheDocument();
  });

  test("handles maximum rating", () => {
    render(<ShopCard {...DEFAULT_PROPS} rating={5.0} reviewCount={9999} />);

    expect(screen.getByText("5.0 | 9999 sold")).toBeInTheDocument();
  });

  test("renders StarRating component with correct props", () => {
    render(<ShopCard {...DEFAULT_PROPS} rating={4.2} />);

    const starRating = document.querySelector(".star-rating");
    expect(starRating).toBeInTheDocument();
    expect(starRating).toHaveClass("star-rating--readonly");
    expect(starRating).toHaveClass("star-rating--sm");
    expect(starRating).toHaveClass("star-rating--compact");
  });

  test("renders image with correct attributes", () => {
    render(
      <ShopCard
        {...DEFAULT_PROPS}
        image="https://example.com/product.png"
        imageAlt="Product image alt text"
      />,
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/product.png");
    expect(image).toHaveAttribute("alt", "Product image alt text");
    expect(image).toHaveClass("shop-card__image");
  });

  test("handles long titles gracefully", () => {
    const longTitle =
      "This is a very long product title that should be handled gracefully by the component";

    render(<ShopCard {...DEFAULT_PROPS} title={longTitle} />);

    expect(screen.getByText(longTitle)).toBeInTheDocument();

    const titleElement = screen.getByText(longTitle);
    expect(titleElement).toHaveClass("shop-card__title");
  });

  test("handles empty sales count", () => {
    render(<ShopCard {...DEFAULT_PROPS} salesCount="" />);

    const salesElement = document.querySelector(".shop-card__sales");
    expect(salesElement).toBeInTheDocument();
    expect(salesElement).toHaveTextContent("");
  });

  test("has correct DOM structure", () => {
    render(<ShopCard {...DEFAULT_PROPS} />);

    const card = document.querySelector(".shop-card");
    const imageContainer = card?.querySelector(".shop-card__image-container");
    const content = card?.querySelector(".shop-card__content");
    const title = content?.querySelector(".shop-card__title");
    const sales = content?.querySelector(".shop-card__sales");
    const rating = content?.querySelector(".shop-card__rating");
    const pricing = content?.querySelector(".shop-card__pricing");

    expect(imageContainer).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(sales).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(pricing).toBeInTheDocument();
  });
});

// Property-based tests
describe("ShopCard Properties", () => {
  test("price formatting is consistent for various values", () => {
    const priceValues = [0, 0.99, 1, 9.99, 10, 99.99, 100, 999.99, 1000];

    priceValues.forEach((price) => {
      const { unmount } = render(<ShopCard {...DEFAULT_PROPS} price={price} />);

      const formattedPrice = `$${price.toFixed(2)}`;
      expect(screen.getByText(formattedPrice)).toBeInTheDocument();

      unmount();
    });
  });

  test("rating display is consistent for various values", () => {
    const ratingValues = [
      { rating: 0, expected: "0.0" },
      { rating: 1.5, expected: "1.5" },
      { rating: 2.75, expected: "2.8" },
      { rating: 4.99, expected: "5.0" },
      { rating: 5, expected: "5.0" },
    ];

    ratingValues.forEach(({ rating, expected }) => {
      const { unmount } = render(
        <ShopCard {...DEFAULT_PROPS} rating={rating} reviewCount={100} />,
      );

      expect(screen.getByText(`${expected} | 100 sold`)).toBeInTheDocument();

      unmount();
    });
  });

  test("discount percentage display is consistent", () => {
    const discountValues = [1, 10, 25, 50, 75, 99];

    discountValues.forEach((discount) => {
      const { unmount } = render(
        <ShopCard
          {...DEFAULT_PROPS}
          price={20}
          originalPrice={40}
          discountPercentage={discount}
        />,
      );

      expect(screen.getByText(`(-${discount}%)`)).toBeInTheDocument();

      unmount();
    });
  });

  test("free shipping badge positioning and styling", () => {
    render(<ShopCard {...DEFAULT_PROPS} freeShipping={true} />);

    const badge = screen.getByText("Free shipping");
    const badgeElement = badge.closest(".shop-card__free-shipping-badge");

    expect(badgeElement).toBeInTheDocument();
    expect(
      badgeElement?.closest(".shop-card__image-container"),
    ).toBeInTheDocument();
  });

  test("top sale badge positioning and styling", () => {
    render(<ShopCard {...DEFAULT_PROPS} topSale={true} />);

    const badge = screen.getByText("Top Sale");
    const badgeElement = badge.closest(".shop-card__top-sale-badge");

    expect(badgeElement).toBeInTheDocument();
    expect(
      badgeElement?.closest(".shop-card__image-container"),
    ).toBeInTheDocument();
  });

  test("top sale badge has star icon", () => {
    render(<ShopCard {...DEFAULT_PROPS} topSale={true} />);

    const badge = screen
      .getByText("Top Sale")
      .closest(".shop-card__top-sale-badge");
    const icon = badge?.querySelector(".badge__icon");

    expect(icon).toBeInTheDocument();
  });

  test("shows add to cart button when onAddToCart is provided", () => {
    const mockAddToCart = vi.fn();
    render(<ShopCard {...DEFAULT_PROPS} onAddToCart={mockAddToCart} />);

    const addButton = screen.getByLabelText("Add to cart");
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveClass("shop-card__add-to-cart-button");
  });

  test("does not show add to cart button when onAddToCart is not provided", () => {
    render(<ShopCard {...DEFAULT_PROPS} />);

    const addButton = screen.queryByLabelText("Add to cart");
    expect(addButton).not.toBeInTheDocument();
  });

  test("calls onAddToCart when add to cart button is clicked", () => {
    const mockAddToCart = vi.fn();
    render(<ShopCard {...DEFAULT_PROPS} onAddToCart={mockAddToCart} />);

    const addButton = screen.getByLabelText("Add to cart");
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledOnce();
  });

  test("prevents card click when add to cart button is clicked", () => {
    const mockOnClick = vi.fn();
    const mockAddToCart = vi.fn();
    render(
      <ShopCard
        {...DEFAULT_PROPS}
        onClick={mockOnClick}
        onAddToCart={mockAddToCart}
      />,
    );

    const addButton = screen.getByLabelText("Add to cart");
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledOnce();
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test("add to cart button has plus icon", () => {
    const mockAddToCart = vi.fn();
    render(<ShopCard {...DEFAULT_PROPS} onAddToCart={mockAddToCart} />);

    const addButton = screen.getByLabelText("Add to cart");
    const icon = addButton.querySelector("svg");

    expect(icon).toBeInTheDocument();
  });
});
