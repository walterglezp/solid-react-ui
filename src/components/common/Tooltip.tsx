import { FC, ReactNode } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./Tooltip.scss";

type TooltipPosition = "top" | "right" | "bottom" | "left";

type TooltipProps = {
  /**
   * Additional CSS classes to apply to the tooltip container
   */
  className?: string;
  /**
   * Position of the tooltip relative to the trigger element
   * @default 'top'
   */
  position?: TooltipPosition;
  /**
   * Content to display in the tooltip
   */
  content: ReactNode;
  /**
   * Delay in milliseconds before showing the tooltip on hover
   * @default 200
   */
  delay?: number;
  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Element that triggers the tooltip
   */
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
