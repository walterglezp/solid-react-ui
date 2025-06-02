import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  outline?: boolean;
  noBorder?: boolean;
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
  active?: boolean;
  block?: boolean;
  btnIcon?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  id,
  className,
  size = "sm",
  children,
  disabled = false,
  outline = false,
  noBorder = false,
  variant = "primary",
  active = false,
  block = false,
  btnIcon = false,
  isLoading = false,
  ...rest
}) => {
  const classnames: string = generateClassnames({
    btn: true,
    [`btn-${size}`]: true,
    [`btn-${variant}`]: !outline,
    [`btn-outline-${variant}`]: outline,
    "btn-no-border": noBorder,
    active,
    "btn-block": block,
    disabled,
    "btn-icon": btnIcon,
    [className ?? ""]: !!className,
  });

  return (
    <button
      id={id}
      className={classnames}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {children}
      {isLoading && (
        <>
          &nbsp;&nbsp;
          <div className="lds-spinner"></div>
        </>
      )}
    </button>
  );
};

export default Button;
