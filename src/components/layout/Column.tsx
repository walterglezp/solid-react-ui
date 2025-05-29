import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: string; // col-*
  sm?: string; // col-sm-*
  md?: string; // col-md-*
  lg?: string; // col-lg-*
  xl?: string; // col-xl-*
  align?: "start" | "center" | "end";
  order?: "first" | "last" | `${number}`;
  offset?: string; // e.g. "md-4", "lg-2"
}

const Column: FC<ColumnProps> = ({
  size = "",
  sm = "",
  md = "",
  lg = "",
  xl = "",
  align = "",
  order = "",
  offset = "",
  className = "",
  children,
  ...rest
}) => {
  const classnames = generateClassnames({
    col: !size && !sm && !md && !lg && !xl,
    [`col-${size}`]: !!size,
    [`col-sm-${sm}`]: !!sm,
    [`col-md-${md}`]: !!md,
    [`col-lg-${lg}`]: !!lg,
    [`col-xl-${xl}`]: !!xl,
    [`order-${order}`]: !!order,
    [`offset-${offset}`]: !!offset,
    [`align-self-${align}`]: !!align,
    [className]: !!className,
  });

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default Column;
