import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./ScrollBar.scss";

export interface ScrollBarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "grey";
  axis?: "horizontal" | "vertical" | "both";
  height?: string;
  width?: string;
}

const ScrollBar: React.FC<ScrollBarProps> = ({
  className,
  variant = "grey",
  axis = "vertical",
  height,
  width,
  children,
  ...rest
}) => {
  const style: React.CSSProperties = {
    ...(height ? { height } : {}),
    ...(width ? { width } : {}),
  };

  const classnames = generateClassnames({
    [`scroll-bar-${variant}`]: true,
    [`scroll-bar-${axis}`]: true,
    [className ?? ""]: !!className,
  });

  return (
    <div className={classnames} style={style} {...rest}>
      {children}
    </div>
  );
};

export { ScrollBar };
