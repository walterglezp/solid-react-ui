import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "xxl" | "fluid" | ""; // Default container

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  className?: string;
}

const Container: FC<ContainerProps> = ({
  size = "",
  className = "",
  children,
  ...rest
}) => {
  const classnames = generateClassnames({
    container: size === "",
    [`container-${size}`]: size !== "" && size !== "fluid",
    "container-fluid": size === "fluid",
    [className]: !!className,
  });

  return (
    <div className={classnames} {...rest}>
      {children}
    </div>
  );
};

export default Container;
