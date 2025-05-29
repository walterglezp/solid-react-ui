import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
  className?: string;
}

const Container: FC<ContainerProps> = ({
  fluid = false,
  className = "",
  children,
  ...rest
}) => {
  const classnames = generateClassnames({
    container: !fluid,
    "container-fluid": fluid,
    [className]: !!className,
  });

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default Container;
