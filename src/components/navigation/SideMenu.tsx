import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon, type IconNameProps } from "../graphic/Icon";
import "./SideMenu.scss";

export interface SideMenuItemProps {
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

export interface SideMenuSectionProps {
  id: string;
  title: string;
  items: SideMenuItemProps[];
}

export interface SideMenuProps {
  sections: SideMenuSectionProps[];
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
  width?: string;
  collapsedWidth?: string;
  position?: "left" | "right";
}

const SideMenuItem: React.FC<{
  item: SideMenuItemProps;
  collapsed: boolean;
}> = ({ item, collapsed }) => {
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
    "side-menu-item": true,
    "side-menu-item--active": active,
    "side-menu-item--disabled": disabled,
    "side-menu-item--collapsed": collapsed,
  });

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {icon && (
        <div className="side-menu-item__icon">
          <Icon name={icon} size={20} />
        </div>
      )}
      {!collapsed && (
        <div className="side-menu-item__content">
          <span className="side-menu-item__label">{label}</span>
          {description && (
            <span className="side-menu-item__description">{description}</span>
          )}
        </div>
      )}
      {!collapsed && badge && (
        <div className="side-menu-item__badge">{badge}</div>
      )}
      {!collapsed && !disabled && (
        <div className="side-menu-item__chevron">
          <Icon name="chevron-right" size={16} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classnames}
        onClick={handleClick}
        title={collapsed ? label : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classnames}
      onClick={handleClick}
      disabled={disabled}
      title={collapsed ? label : undefined}
      type="button"
    >
      {content}
    </button>
  );
};

const SideMenuSection: React.FC<{
  section: SideMenuSectionProps;
  collapsed: boolean;
}> = ({ section, collapsed }) => {
  return (
    <div className="side-menu-section">
      {!collapsed && (
        <h3 className="side-menu-section__title">{section.title}</h3>
      )}
      <div className="side-menu-section__items">
        {section.items.map((item) => (
          <SideMenuItem key={item.id} item={item} collapsed={collapsed} />
        ))}
      </div>
    </div>
  );
};

const SideMenu: React.FC<SideMenuProps> = ({
  sections,
  collapsed = false,
  onToggleCollapse,
  className,
  width = "280px",
  collapsedWidth = "60px",
  position = "left",
}) => {
  const classnames = generateClassnames({
    "side-menu": true,
    "side-menu--collapsed": collapsed,
    "side-menu--right": position === "right",
    [`${className}`]: className !== undefined,
  });

  const menuStyle = {
    width: collapsed ? collapsedWidth : width,
  };

  return (
    <div className={classnames} style={menuStyle}>
      <div className="side-menu__header">
        {onToggleCollapse && (
          <button
            className="side-menu__toggle"
            onClick={onToggleCollapse}
            title={collapsed ? "Expand menu" : "Collapse menu"}
            type="button"
          >
            <Icon name={collapsed ? "expand" : "compress"} size={20} />
          </button>
        )}
      </div>

      <div className="side-menu__content">
        {sections.map((section) => (
          <SideMenuSection
            key={section.id}
            section={section}
            collapsed={collapsed}
          />
        ))}
      </div>
    </div>
  );
};

export { SideMenu, SideMenuItem, SideMenuSection };
