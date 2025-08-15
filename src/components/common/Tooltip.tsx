import { FC, ReactNode } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./Tooltip.scss";

type TooltipPosition = "top" | "right" | "bottom" | "left";

type TooltipProps = {
  className?: string;
  position?: TooltipPosition;
  content: ReactNode;
  delay?: number;
  disabled?: boolean;
  children: ReactNode;
};

const Tooltip: FC<TooltipProps> = ({
  className,
  children,
  position = "top",
  content,
  delay = 200,
  disabled = false,
}) => {
  const containerClassnames = generateClassnames({
    "tooltip-container": true,
    [`${className}`]: Boolean(className),
  });

  const tooltipClassnames = generateClassnames({
    tooltip: true,
    [`tooltip--${position}`]: true,
    "tooltip--disabled": disabled,
  });

  const style = {
    "--tooltip-delay": `${delay}ms`,
  } as React.CSSProperties;

  return (
    <div className={containerClassnames} style={style}>
      {children}
      {!disabled && (
        <div className={tooltipClassnames} role="tooltip">
          <div className="tooltip__content">{content}</div>
          <div className="tooltip__arrow" />
        </div>
      )}
    </div>
  );
};

export { Tooltip };
export type { TooltipProps, TooltipPosition };
