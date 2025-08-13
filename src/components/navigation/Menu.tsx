import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon, type IconNameProps } from "../graphic/Icon";
import "./Menu.scss";

export interface MenuItemProps {
  id: string;
  label: string;
  icon?: IconNameProps;
  badge?: string | number;
  description?: string;
  onClick?: () => void;
  href?: string;
  active?: boolean;
  disabled?: boolean;
}

export interface MenuSectionProps {
  id: string;
  title?: string;
  items: MenuItemProps[];
}

export interface MenuProps {
  sections: MenuSectionProps[];
  className?: string;
  width?: string;
  height?: string;
  position?: "fixed" | "regular";
  placement?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  visible?: boolean;
  onClose?: () => void;
  activeColor?: string;
  activeTextColor?: string;
}

const MenuItem: React.FC<{
  item: MenuItemProps;
}> = ({ item }) => {
  const {
    label,
    icon,
    badge,
    description,
    onClick,
    href,
    active = false,
    disabled = false,
  } = item;

  const classnames = generateClassnames({
    "menu-item": true,
    "menu-item--active": active,
    "menu-item--disabled": disabled,
  });

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {icon && (
        <div className="menu-item__icon">
          <Icon name={icon} size={20} />
        </div>
      )}
      <div className="menu-item__content">
        <span className="menu-item__label">{label}</span>
        {description && (
          <span className="menu-item__description">{description}</span>
        )}
      </div>
      {badge && <div className="menu-item__badge">{badge}</div>}
      {!disabled && (
        <div className="menu-item__chevron">
          <Icon name="chevron-right" size={16} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classnames} onClick={handleClick} title={label}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classnames}
      onClick={handleClick}
      disabled={disabled}
      title={label}
      type="button"
    >
      {content}
    </button>
  );
};

const MenuSection: React.FC<{
  section: MenuSectionProps;
}> = ({ section }) => {
  return (
    <div className="menu-section">
      {section.title && (
        <h3 className="menu-section__title">{section.title}</h3>
      )}
      <div className="menu-section__items">
        {section.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const Menu: React.FC<MenuProps> = ({
  sections,
  className,
  width = "280px",
  height = "auto",
  position = "regular",
  placement = "top-left",
  visible = true,
  onClose,
  activeColor,
  activeTextColor = "white",
}) => {
  const classnames = generateClassnames({
    menu: true,
    "menu--fixed": position === "fixed",
    "menu--regular": position === "regular",
    [`menu--${placement}`]: position === "fixed",
    "menu--hidden": !visible,
    [`${className}`]: className !== undefined,
  });

  const menuStyle = {
    width,
    height: height !== "auto" ? height : undefined,
    ...(activeColor && {
      "--menu-active-color": activeColor,
      "--menu-active-text-color": activeTextColor,
    }),
  } as React.CSSProperties;

  return (
    <>
      {position === "fixed" && visible && (
        <div className="menu-backdrop" onClick={onClose} />
      )}
      <div className={classnames} style={menuStyle}>
        {position === "fixed" && onClose && (
          <div className="menu__header">
            <button
              className="menu__close"
              onClick={onClose}
              title="Close menu"
              type="button"
            >
              <Icon name="x" size={20} />
            </button>
          </div>
        )}

        <div className="menu__content">
          {sections.map((section) => (
            <MenuSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </>
  );
};

export { Menu, MenuItem, MenuSection };
