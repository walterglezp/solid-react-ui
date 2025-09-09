import { FC, useState, useRef, useEffect } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon } from "../graphic/Icon";
import { Tooltip } from "./Tooltip";
import "./StarRating.scss";

type RatingBreakdown = {
  [key: number]: number; // star rating -> percentage
};

type StarRatingProps = {
  className?: string;
  rating: number;
  maxRating?: number;
  compact?: boolean;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  totalRatings?: number;
  ratingBreakdown?: RatingBreakdown;
  showDetailedTooltip?: boolean;
  reviewsLink?: string;
  onReviewsClick?: () => void;
};

const StarRating: FC<StarRatingProps> = ({
  className,
  rating,
  maxRating = 5,
  compact = false,
  readonly = false,
  onRatingChange,
  size = "md",
  totalRatings,
  ratingBreakdown,
  showDetailedTooltip = false,
  reviewsLink,
  onReviewsClick,
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [pinnedTooltip, setPinnedTooltip] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside to dismiss tooltip
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Only dismiss if clicking outside any tooltip content
      const isClickingOnTooltip =
        target.closest(".tooltip") || target.closest(".tooltip-container");

      if (!isClickingOnTooltip) {
        setPinnedTooltip(null);
      }
    };

    if (pinnedTooltip !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [pinnedTooltip]);

  const containerClassnames = generateClassnames({
    "star-rating": true,
    "star-rating--compact": compact,
    "star-rating--readonly": readonly,
    [`star-rating--${size}`]: true,
    [`${className}`]: Boolean(className),
  });

  const getStarState = (starIndex: number): "filled" | "half" | "empty" => {
    const currentRating = hoverRating ?? rating;
    if (starIndex < Math.floor(currentRating)) {
      return "filled";
    } else if (starIndex < currentRating && currentRating % 1 >= 0.5) {
      return "half";
    }
    return "empty";
  };

  const handleStarClick = (starIndex: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starIndex + 1);
    } else if (readonly && showDetailedTooltip) {
      // Toggle tooltip on/off when clicking a star in readonly mode with detailed tooltip
      setPinnedTooltip(pinnedTooltip === starIndex ? null : starIndex);
    }
  };

  const handleStarHover = (starIndex: number) => {
    if (!readonly) {
      setHoverRating(starIndex + 1);
    }
  };

  const handleStarLeave = () => {
    if (!readonly) {
      setHoverRating(null);
    }
  };

  const getIconSize = () => {
    switch (size) {
      case "sm":
        return compact ? 14 : 16;
      case "md":
        return compact ? 16 : 20;
      case "lg":
        return compact ? 18 : 24;
    }
  };

  const renderStar = (starIndex: number) => {
    const starState = getStarState(starIndex);
    const starClassnames = generateClassnames({
      star: true,
      [`star--${starState}`]: true,
      "star--interactive": !readonly,
    });

    const getTooltipContent = () => {
      // Show detailed tooltip even in readonly mode if explicitly enabled
      if (showDetailedTooltip && ratingBreakdown && totalRatings) {
        return (
          <div className="star-rating-tooltip">
            <div className="star-rating-tooltip__header">
              <strong>
                {rating.toFixed(1)} out of {maxRating}
              </strong>{" "}
              rating
            </div>
            <div className="star-rating-tooltip__subtitle">
              ({totalRatings}) global ratings
            </div>
            <div className="star-rating-tooltip__breakdown">
              {[5, 4, 3, 2, 1].map((starLevel) => {
                const percentage = ratingBreakdown[starLevel] || 0;
                return (
                  <div key={starLevel} className="star-rating-tooltip__row">
                    <span className="star-rating-tooltip__label">
                      {starLevel} star
                    </span>
                    <div className="star-rating-tooltip__progress">
                      <div
                        className="star-rating-tooltip__progress-bar"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="star-rating-tooltip__percentage">
                      {percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
            {(reviewsLink || onReviewsClick) && (
              <div className="star-rating-tooltip__footer">
                {reviewsLink ? (
                  <a
                    href={reviewsLink}
                    className="star-rating-tooltip__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See all reviews
                  </a>
                ) : (
                  <button
                    type="button"
                    className="star-rating-tooltip__link"
                    onClick={onReviewsClick}
                    style={{ border: "none", background: "none", padding: 0 }}
                  >
                    See all reviews
                  </button>
                )}
              </div>
            )}
          </div>
        );
      }

      // Show simple tooltip only if not readonly
      if (readonly) return null;
      return `${starIndex + 1} star${starIndex > 0 ? "s" : ""}`;
    };

    const tooltipContent = getTooltipContent();

    const starButton = (
      <button
        type="button"
        className={starClassnames}
        onClick={() => handleStarClick(starIndex)}
        onMouseEnter={() => handleStarHover(starIndex)}
        onMouseLeave={handleStarLeave}
        disabled={readonly}
        aria-label={`Rate ${starIndex + 1} star${starIndex > 0 ? "s" : ""}`}
      >
        <Icon name="star" size={getIconSize()} className="star__icon" />
      </button>
    );

    if (tooltipContent) {
      const shouldShowTooltip =
        pinnedTooltip === starIndex || pinnedTooltip === null;
      return (
        <Tooltip
          key={starIndex}
          content={tooltipContent}
          position="top"
          disabled={!shouldShowTooltip}
        >
          {starButton}
        </Tooltip>
      );
    }

    return <span key={starIndex}>{starButton}</span>;
  };

  if (compact) {
    return (
      <div className={containerClassnames} ref={containerRef}>
        {renderStar(0)}
        <span className="star-rating__text">
          {rating.toFixed(1)}
          {totalRatings && (
            <span className="star-rating__count"> ({totalRatings})</span>
          )}
        </span>
      </div>
    );
  }

  return (
    <div className={containerClassnames} ref={containerRef}>
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
      {totalRatings && !compact && (
        <span className="star-rating__total-count">({totalRatings})</span>
      )}
    </div>
  );
};

export { StarRating };
export type { StarRatingProps, RatingBreakdown };
