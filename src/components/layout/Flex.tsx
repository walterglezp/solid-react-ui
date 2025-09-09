import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./Flex.scss";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "around" | "between" | "evenly";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: boolean;
  nowrap?: boolean;
}

const Flex: FC<FlexProps> = ({
  className = "",
  align,
  justify,
  direction,
  wrap,
  nowrap,
  children,
  ...rest
}) => {
  const classnames = generateClassnames({
    "d-flex": true,
    [`flex-${direction}`]: !!direction,
    "flex-wrap": !!wrap,
    "flex-nowrap": !!nowrap,
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

export { Flex };
