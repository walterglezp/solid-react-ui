import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "around" | "between" | "evenly";
  noGutters?: boolean;
}

const Row: FC<RowProps> = ({
  className = "",
  align,
  justify,
  noGutters = false,
  children,
  ...rest
}) => {
  const classnames = generateClassnames({
    row: true,
    "gx-0": noGutters,
    [`align-items-${align}`]: !!align,
    [`justify-content-${justify}`]: !!justify,
    [className]: !!className,
  });

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default Row;
