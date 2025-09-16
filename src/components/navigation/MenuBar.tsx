import React, { useState, useRef, useEffect } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon, type IconNameProps } from "../graphic/Icon";
import { Menu, type MenuSectionProps } from "./Menu";
import "./MenuBar.scss";

export interface MenuBarItemProps {
  id: string;
  label: React.ReactNode;
  icon?: IconNameProps;
  badge?: string | number;
  description?: string;
  onClick?: () => void;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  dropdown?: MenuSectionProps[];
  dropdownPlacement?: "bottom-left" | "bottom-right" | "bottom-center";
}

export interface MenuBarSectionProps {
  id: string;
  items: MenuBarItemProps[];
  alignment?: "left" | "center" | "right";
}

export interface MenuBarProps {
  sections: MenuBarSectionProps[];
  className?: string;
  height?: string;
  position?: "absolute" | "fixed" | "relative" | "sticky";
  placement?: "top" | "bottom";
  activeColor?: string;
  activeTextColor?: string;
  backgroundColor?: string;
  zIndex?: number;
  showLabels?: boolean;
  compact?: boolean;
  variant?: "default" | "plain";
}

const MenuBarItem: React.FC<{
  item: MenuBarItemProps;
  showLabels: boolean;
  compact: boolean;
  activeColor?: string;
  activeTextColor?: string;
}> = ({ item, showLabels, compact, activeColor, activeTextColor }) => {
  const {
    label,
    icon,
    badge,
    description,
    onClick,
    href,
    active = false,
    disabled = false,
    dropdown,
    dropdownPlacement = "bottom-left",
  } = item;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const itemRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDropdownOpen &&
        itemRef.current &&
        dropdownRef.current &&
        !itemRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const classnames = generateClassnames({
    "menu-bar-item": true,
    "menu-bar-item--active": active,
    "menu-bar-item--disabled": disabled,
    "menu-bar-item--compact": compact,
    "menu-bar-item--icon-only": !showLabels,
    "menu-bar-item--has-dropdown": !!dropdown,
    "menu-bar-item--dropdown-open": isDropdownOpen,
  });

  const handleClick = () => {
    if (disabled) return;

    if (dropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {icon && (
        <div className="menu-bar-item__icon">
          <Icon name={icon} size={compact ? 16 : 20} />
        </div>
      )}
      {showLabels && (
        <div className="menu-bar-item__content">
          <span className="menu-bar-item__label">{label}</span>
          {description && !compact && (
            <span className="menu-bar-item__description">{description}</span>
          )}
        </div>
      )}
      {badge && <div className="menu-bar-item__badge">{badge}</div>}
      {dropdown && (
        <div className="menu-bar-item__dropdown-arrow">
          <Icon name={isDropdownOpen ? "sort-up" : "sort-down"} size={12} />
        </div>
      )}
    </>
  );

  const getStringTitle = (node: React.ReactNode): string | undefined => {
    if (typeof node === "string") return node;
    if (typeof node === "number") return String(node);
    return undefined;
  };

  const titleAttr = !showLabels
    ? getStringTitle(label)
    : description || getStringTitle(label);

  const renderContent = () => {
    if (href && !dropdown) {
      return (
        <a
          ref={itemRef as React.RefObject<HTMLAnchorElement>}
          href={href}
          className={classnames}
          onClick={handleClick}
          title={titleAttr}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={itemRef as React.RefObject<HTMLButtonElement>}
        className={classnames}
        onClick={handleClick}
        disabled={disabled}
        title={titleAttr}
        type="button"
      >
        {content}
      </button>
    );
  };

  return (
    <div className="menu-bar-item-wrapper">
      {renderContent()}
      {dropdown && isDropdownOpen && (
        <div
          ref={dropdownRef}
          className={`menu-bar-item__dropdown menu-bar-item__dropdown--${dropdownPlacement}`}
        >
          <Menu
            sections={dropdown}
            position="regular"
            width="240px"
            activeColor={activeColor}
            activeTextColor={activeTextColor}
            visible={true}
          />
        </div>
      )}
    </div>
  );
};

const MenuBarSection: React.FC<{
  section: MenuBarSectionProps;
  showLabels: boolean;
  compact: boolean;
  activeColor?: string;
  activeTextColor?: string;
}> = ({ section, showLabels, compact, activeColor, activeTextColor }) => {
  const sectionClassnames = generateClassnames({
    "menu-bar-section": true,
    [`menu-bar-section--${section.alignment || "left"}`]: true,
  });

  return (
    <div className={sectionClassnames}>
      {section.items.map((item) => (
        <MenuBarItem
          key={item.id}
          item={item}
          showLabels={showLabels}
          compact={compact}
          activeColor={activeColor}
          activeTextColor={activeTextColor}
        />
      ))}
    </div>
  );
};

const MenuBar: React.FC<MenuBarProps> = ({
  sections,
  className,
  height = "60px",
  position = "relative",
  placement = "top",
  activeColor,
  activeTextColor = "white",
  backgroundColor,
  zIndex = 1000,
  showLabels = true,
  compact = false,
  variant = "default",
}) => {
  const classnames = generateClassnames({
    "menu-bar": true,
    [`menu-bar--${position}`]: true,
    [`menu-bar--${placement}`]: position === "fixed" || position === "absolute",
    "menu-bar--compact": compact,
    [`menu-bar--${variant}`]: true,
    [`${className}`]: className !== undefined,
  });

  const menuBarStyle = {
    height,
    zIndex,
    ...(backgroundColor && {
      background: backgroundColor.includes("gradient")
        ? backgroundColor
        : undefined,
      backgroundColor: backgroundColor.includes("gradient")
        ? undefined
        : backgroundColor,
    }),
    ...(activeColor && {
      "--menu-bar-active-color": activeColor,
      "--menu-bar-active-text-color": activeTextColor,
    }),
  } as React.CSSProperties;

  return (
    <nav className={classnames} style={menuBarStyle}>
      <div className="menu-bar__container">
        {sections.map((section) => (
          <MenuBarSection
            key={section.id}
            section={section}
            showLabels={showLabels}
            compact={compact}
            activeColor={activeColor}
            activeTextColor={activeTextColor}
          />
        ))}
      </div>
    </nav>
  );
};

export { MenuBar, MenuBarItem, MenuBarSection };
