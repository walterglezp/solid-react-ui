import React, {
  FC,
  LiHTMLAttributes,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { generateClassnames } from "../../utils/classnames-helper";

type AsType = "li" | "a" | "button";

export interface ListGroupItemBaseProps {
  className?: string;
  active?: boolean;
  disabled?: boolean;
  as?: AsType;
  href?: string;
  children: React.ReactNode;
}

type NativeProps =
  | LiHTMLAttributes<HTMLLIElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

const ListGroupItem: FC<ListGroupItemBaseProps & NativeProps> = ({
  className = "",
  as = "li",
  active = false,
  disabled = false,
  children,
  href,
  ...rest
}) => {
  const classnames = generateClassnames({
    "list-group-item": true,
    "list-group-item-action": as !== "li",
    active,
    disabled,
    [className]: !!className,
  });

  if (as === "a") {
    return (
      <a
        className={classnames}
        href={href}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  if (as === "button") {
    return (
      <button
        className={classnames}
        type="button"
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }

  return (
    <li className={classnames} {...(rest as LiHTMLAttributes<HTMLLIElement>)}>
      {children}
    </li>
  );
};

export { ListGroupItem };
