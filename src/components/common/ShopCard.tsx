import type { FC } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";
import { Icon } from "../graphic/Icon";
import "./ShopCard.scss";

type ShopCardProps = {
  className?: string;
  image: string;
  imageAlt: string;
  title: string;
  salesCount: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  freeShipping?: boolean;
  topSale?: boolean;
  onClick?: () => void;
  onAddToCart?: () => void;
};

const ShopCard: FC<ShopCardProps> = ({
  className,
  image,
  imageAlt,
  title,
  salesCount,
  rating,
  reviewCount,
  price,
  originalPrice,
  discountPercentage,
  freeShipping = false,
  topSale = false,
  onClick,
  onAddToCart,
}) => {
  const cardClassnames = generateClassnames({
    "shop-card": true,
    "shop-card--clickable": Boolean(onClick),
    [`${className}`]: Boolean(className),
  });

  const formatPrice = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking add to cart
    onAddToCart?.();
  };

  return (
    <div className={cardClassnames} onClick={onClick}>
      <div className="shop-card__image-container">
        <img src={image} alt={imageAlt} className="shop-card__image" />
        {freeShipping && (
          <Badge
            variant="success"
            size="sm"
            className="shop-card__free-shipping-badge"
          >
            Free shipping
          </Badge>
        )}
        {topSale && (
          <Badge
            variant="warning"
            size="sm"
            icon="star"
            className="shop-card__top-sale-badge"
          >
            Top Sale
          </Badge>
        )}
      </div>

      <div className="shop-card__content">
        <h3 className="shop-card__title">{title}</h3>

        <p className="shop-card__sales">{salesCount}</p>

        <div className="shop-card__rating">
          <StarRating rating={rating} readonly size="sm" compact />
          <span className="shop-card__rating-text">
            {rating.toFixed(1)} | {reviewCount} sold
          </span>
        </div>

        <div className="shop-card__pricing">
          <span className="shop-card__current-price">{formatPrice(price)}</span>
          {originalPrice && originalPrice > price && (
            <>
              <span className="shop-card__original-price">
                {formatPrice(originalPrice)}
              </span>
              {discountPercentage && (
                <span className="shop-card__discount">
                  (-{discountPercentage}%)
                </span>
              )}
            </>
          )}
        </div>
      </div>

      {onAddToCart && (
        <button
          type="button"
          className="shop-card__add-to-cart-button"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <Icon name="plus" size={16} />
        </button>
      )}
    </div>
  );
};

export { ShopCard };
export type { ShopCardProps };
