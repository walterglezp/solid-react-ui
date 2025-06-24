import React, { FC } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export type LinkProps = {
  to: string;
  blank?: boolean;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;

  // Shared
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";

  // Styling options for button
  asButton?: boolean;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  block?: boolean;
  noBorder?: boolean;
  underlined?: boolean; // for link-style only
};

const Link: FC<LinkProps> = ({
  to,
  blank = false,
  active = false,
  disabled = false,
  className,
  children,
  variant = "primary",
  asButton = false,
  size = "sm",
  outline = false,
  block = false,
  noBorder = false,
  underlined = false,
}) => {
  const baseClass = generateClassnames({
    active,
    disabled,
    [className ?? ""]: !!className,
  });

  const classnames = asButton
    ? generateClassnames({
        "link-btn": true,
        btn: true,
        [`btn-${size}`]: true,
        [`btn-${variant}`]: !outline,
        [`btn-outline-${variant}`]: outline,
        "btn-no-border": noBorder,
        "btn-block": block,
      }) + (baseClass ? ` ${baseClass}` : "")
    : generateClassnames({
        [`link-${variant}`]: true,
      }) + (baseClass ? ` ${baseClass}` : "");

  const style = !asButton
    ? ({
        "--bs-link-underline-opacity": underlined ? "0.5" : "0",
      } as React.CSSProperties)
    : undefined;

  return (
    <a
      className={classnames}
      href={to}
      target={blank ? "_blank" : "_self"}
      style={style}
    >
      {children}
    </a>
  );
};

export { Link };
