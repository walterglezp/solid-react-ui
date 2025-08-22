import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { StarRating } from "./StarRating";

describe("StarRating", () => {
  test("renders large view with 5 stars by default", () => {
    render(<StarRating rating={3.5} />);
    const stars = screen.getAllByRole("button");
    expect(stars).toHaveLength(5);
  });

  test("renders compact view with single star and rating text", () => {
    render(<StarRating rating={4.3} compact />);
    const stars = screen.getAllByRole("button");
    expect(stars).toHaveLength(1);
    expect(screen.getByText("4.3")).toBeInTheDocument();
  });

  test("displays filled stars based on rating value", () => {
    render(<StarRating rating={3} />);
    const filledStars = screen
      .getAllByRole("button")
      .filter((star) => star.classList.contains("star--filled"));
    expect(filledStars).toHaveLength(3);
  });

  test("calls onRatingChange when star is clicked in interactive mode", () => {
    const handleRatingChange = vi.fn();
    render(<StarRating rating={2} onRatingChange={handleRatingChange} />);

    const fourthStar = screen.getAllByRole("button")[3];
    fireEvent.click(fourthStar);

    expect(handleRatingChange).toHaveBeenCalledWith(4);
  });

  test("does not call onRatingChange in readonly mode", () => {
    const handleRatingChange = vi.fn();
    render(
      <StarRating rating={2} onRatingChange={handleRatingChange} readonly />,
    );

    const fourthStar = screen.getAllByRole("button")[3];
    fireEvent.click(fourthStar);

    expect(handleRatingChange).not.toHaveBeenCalled();
  });

  test("shows tooltip on hover when not readonly", () => {
    render(<StarRating rating={2} />);
    const thirdStar = screen.getAllByRole("button")[2];

    fireEvent.mouseEnter(thirdStar);
    expect(screen.getByText("3 stars")).toBeInTheDocument();
  });

  test("handles half-star ratings correctly", () => {
    render(<StarRating rating={2.7} />);
    const stars = screen.getAllByRole("button");

    expect(stars[0]).toHaveClass("star--filled");
    expect(stars[1]).toHaveClass("star--filled");
    expect(stars[2]).toHaveClass("star--half");
    expect(stars[3]).toHaveClass("star--empty");
    expect(stars[4]).toHaveClass("star--empty");
  });

  test("displays total ratings count in compact mode", () => {
    render(<StarRating rating={4.3} totalRatings={58} compact />);
    expect(screen.getByText("4.3")).toBeInTheDocument();
    expect(screen.getByText("(58)")).toBeInTheDocument();
  });

  test("displays total ratings count in large mode", () => {
    render(<StarRating rating={3.8} totalRatings={124} readonly />);
    expect(screen.getByText("(124)")).toBeInTheDocument();
  });

  test("shows detailed tooltip with rating breakdown", () => {
    const ratingBreakdown = {
      5: 72,
      4: 7,
      3: 7,
      2: 3,
      1: 11,
    };

    render(
      <StarRating
        rating={4.2}
        totalRatings={58}
        showDetailedTooltip
        ratingBreakdown={ratingBreakdown}
        readonly
      />,
    );

    const firstStar = screen.getAllByRole("button")[0];
    fireEvent.mouseEnter(firstStar);

    expect(screen.getAllByText("4.2 out of 5")[0]).toBeInTheDocument();
    expect(screen.getAllByText("(58) global ratings")[0]).toBeInTheDocument();
    expect(screen.getAllByText("5 star")[0]).toBeInTheDocument();
    expect(screen.getAllByText("72%")[0]).toBeInTheDocument();
    expect(screen.getAllByText("1 star")[0]).toBeInTheDocument();
    expect(screen.getAllByText("11%")[0]).toBeInTheDocument();
  });

  test("falls back to simple tooltip when detailed tooltip is disabled", () => {
    render(
      <StarRating
        rating={3.5}
        totalRatings={58}
        showDetailedTooltip={false}
        ratingBreakdown={{
          5: 50,
          4: 25,
          3: 15,
          2: 7,
          1: 3,
        }}
      />,
    );

    const thirdStar = screen.getAllByRole("button")[2];
    fireEvent.mouseEnter(thirdStar);

    expect(screen.getByText("3 stars")).toBeInTheDocument();
    expect(screen.queryByText("out of 5")).not.toBeInTheDocument();
  });

  test("does not show tooltip in readonly mode without detailed tooltip", () => {
    render(<StarRating rating={3.5} readonly />);

    const thirdStar = screen.getAllByRole("button")[2];
    fireEvent.mouseEnter(thirdStar);

    expect(screen.queryByText("3 stars")).not.toBeInTheDocument();
  });

  test("shows 'See all reviews' link in detailed tooltip", () => {
    render(
      <StarRating
        rating={4.2}
        totalRatings={58}
        showDetailedTooltip
        ratingBreakdown={{ 5: 72, 4: 7, 3: 7, 2: 3, 1: 11 }}
        reviewsLink="/reviews"
        readonly
      />,
    );

    const firstStar = screen.getAllByRole("button")[0];
    fireEvent.mouseEnter(firstStar);

    const reviewLinks = screen.getAllByText("See all reviews");
    expect(reviewLinks[0]).toBeInTheDocument();
    expect(reviewLinks[0].getAttribute("href")).toBe("/reviews");
  });

  test("calls onReviewsClick when reviews button is clicked", () => {
    const handleReviewsClick = vi.fn();
    render(
      <StarRating
        rating={4.2}
        totalRatings={58}
        showDetailedTooltip
        ratingBreakdown={{ 5: 72, 4: 7, 3: 7, 2: 3, 1: 11 }}
        onReviewsClick={handleReviewsClick}
        readonly
      />,
    );

    const firstStar = screen.getAllByRole("button")[0];
    fireEvent.mouseEnter(firstStar);

    const reviewButtons = screen.getAllByText("See all reviews");
    fireEvent.click(reviewButtons[0]);

    expect(handleReviewsClick).toHaveBeenCalled();
  });

  test("tooltip stays visible when clicking reviews link", () => {
    render(
      <StarRating
        rating={4.2}
        totalRatings={58}
        showDetailedTooltip
        ratingBreakdown={{ 5: 72, 4: 7, 3: 7, 2: 3, 1: 11 }}
        reviewsLink="/reviews"
        readonly
      />,
    );

    // Click to pin tooltip
    const firstStar = screen.getAllByRole("button")[0];
    fireEvent.click(firstStar);

    // Verify tooltip is visible
    expect(screen.getAllByText("4.2 out of 5")[0]).toBeInTheDocument();

    // Click the reviews link
    const reviewLinks = screen.getAllByText("See all reviews");
    fireEvent.click(reviewLinks[0]);

    // Tooltip should still be visible after clicking the link
    expect(screen.getAllByText("4.2 out of 5")[0]).toBeInTheDocument();
  });
});
