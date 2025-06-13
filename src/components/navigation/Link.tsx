import React, { FC } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export type LinkProps = {
  className?: string;
  disabled?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  active?: boolean;
  to: string;
  blank?: boolean;
  underlined?: boolean;
  children: React.ReactNode;
};

const Link: FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  variant = "primary",
  blank = false,
  active = false,
  underlined = false,
  to,
}) => {
  const classnames: string = generateClassnames({
    disabled,
    active,
    [`link-${variant}`]: true,
    [className ?? ""]: !!className,
  });

  const style = {
    "--bs-link-underline-opacity": underlined ? "0.5" : "0",
  } as React.CSSProperties;

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
