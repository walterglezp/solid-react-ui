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
  children: React.ReactNode;
};

const Link: FC<LinkProps> = ({
  className,
  children,
  disabled = false,
  variant = "primary",
  blank = false,
  active = false,
  to,
}) => {
  const classnames: string = generateClassnames({
    "app-link": true,
    disabled,
    active,
    [`link-${variant}`]: true,
    [className ?? ""]: !!className,
  });

  return (
    <a className={classnames} href={to} target={blank ? "_blank" : "_self"}>
      {children}
    </a>
  );
};

export { Link };
