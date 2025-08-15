import { FC, ReactNode } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./Alert.scss";

type AlertVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info";

type AlertProps = {
  className?: string;
  variant?: AlertVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
  showIcon?: boolean;
  icon?: ReactNode;
  title?: ReactNode;
  children: ReactNode;
};

const defaultIcons: Record<AlertVariant, string> = {
  primary: "ℹ️",
  secondary: "ℹ️",
  success: "✅",
  danger: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

const Alert: FC<AlertProps> = ({
  className,
  variant = "primary",
  dismissible = false,
  onDismiss,
  showIcon = true,
  icon,
  title,
  children,
}) => {
  const alertClassnames = generateClassnames({
    alert: true,
    [`alert--${variant}`]: true,
    "alert--dismissible": dismissible,
    [`${className}`]: Boolean(className),
  });

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  const displayIcon = icon || defaultIcons[variant];

  return (
    <div className={alertClassnames} role="alert">
      <div className="alert__content">
        {showIcon && <div className="alert__icon">{displayIcon}</div>}
        <div className="alert__body">
          {title && <div className="alert__title">{title}</div>}
          <div className="alert__message">{children}</div>
        </div>
      </div>
      {dismissible && (
        <button
          className="alert__dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          type="button"
        />
      )}
    </div>
  );
};

export { Alert };
export type { AlertProps, AlertVariant };
