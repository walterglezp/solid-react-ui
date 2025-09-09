import React, { FC, HTMLAttributes } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import "./ListGroup.scss";

export interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
  variant?: "basic" | "flush";
  numbered?: boolean;
  horizontal?: boolean;
  equalWidth?: boolean;
  className?: string;
}

const ListGroup: FC<ListGroupProps> = ({
  className = "",
  children,
  variant = "basic",
  numbered = false,
  horizontal = false,
  equalWidth = false,
  ...rest
}) => {
  const classnames = generateClassnames({
    "list-group": true,
    "list-group-flush": variant === "flush",
    "list-group-numbered": numbered,
    "list-group-horizontal": horizontal,
    "flex-fill": equalWidth,
    [className]: !!className,
  });

  return (
    <ul className={classnames} {...rest}>
      {children}
    </ul>
  );
};

export { ListGroup };
