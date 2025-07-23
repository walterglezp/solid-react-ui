import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./ButtonGroup.scss";

type ButtonGroupProps = {
  variant?: "group" | "toolbar";
  className?: string;
  size?: "sm" | "md" | "lg";
  vertical?: boolean;
  children: React.ReactNode;
  role?: string;
  "aria-label"?: string;
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  variant = "group",
  size = "sm",
  className = "",
  vertical = false,
  children,
  role,
  "aria-label": ariaLabel,
}) => {
  const classes = generateClassnames({
    "btn-group": variant === "group" && !vertical,
    "btn-group-vertical": vertical,
    "btn-toolbar": variant === "toolbar",
    [`btn-group-${size}`]: variant !== "toolbar", // size applies only to group
    [className]: !!className,
  });

  return (
    <div className={classes} role={role} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export { ButtonGroup };
