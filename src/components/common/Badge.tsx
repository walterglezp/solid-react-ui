import { FC, ReactNode } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon, type IconNameProps } from "../graphic/Icon";
import "./Badge.scss";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";

type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = {
  className?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: IconNameProps;
  children: ReactNode;
  pill?: boolean;
  outline?: boolean;
  style?: React.CSSProperties;
};

const Badge: FC<BadgeProps> = ({
  className,
  variant = "primary",
  size = "md",
  icon,
  children,
  pill = false,
  outline = false,
  style,
}) => {
  const badgeClassnames = generateClassnames({
    badge: true,
    [`badge--${variant}`]: true,
    [`badge--${size}`]: true,
    "badge--pill": pill,
    "badge--outline": outline,
    [`${className}`]: Boolean(className),
  });

  return (
    <span className={badgeClassnames} style={style}>
      {icon && (
        <Icon
          name={icon}
          size={size === "sm" ? 12 : size === "md" ? 14 : 16}
          className="badge__icon"
        />
      )}
      <span className="badge__content">{children}</span>
    </span>
  );
};

export { Badge };
export type { BadgeProps, BadgeVariant, BadgeSize };
