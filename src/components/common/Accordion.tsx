import React, { useState, useCallback } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon, type IconNameProps } from "../graphic/Icon";
import "./Accordion.scss";

export interface AccordionItemProps {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: IconNameProps;
  badge?: string | number;
  disabled?: boolean;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  className?: string;
  /** Allow multiple panels to be open at once */
  allowMultiple?: boolean;
  /** Allow all panels to be closed */
  allowToggle?: boolean;
  /** Variant styling */
  variant?: "default" | "bordered" | "filled";
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Custom chevron icon */
  chevronIcon?: IconNameProps;
  /** Animation duration in ms */
  animationDuration?: number;
}

const AccordionItem: React.FC<{
  item: AccordionItemProps;
  isOpen: boolean;
  onToggle: () => void;
  chevronIcon: IconNameProps;
  size: "sm" | "md" | "lg";
}> = ({ item, isOpen, onToggle, chevronIcon, size }) => {
  const { title, content, icon, badge, disabled = false } = item;

  const headerClassnames = generateClassnames({
    "accordion-item__header": true,
    "accordion-item__header--open": isOpen,
    "accordion-item__header--disabled": disabled,
    [`accordion-item__header--${size}`]: true,
  });

  const contentClassnames = generateClassnames({
    "accordion-item__content": true,
    "accordion-item__content--open": isOpen,
  });

  const chevronClassnames = generateClassnames({
    "accordion-item__chevron": true,
    "accordion-item__chevron--open": isOpen,
  });

  const handleClick = useCallback(() => {
    if (!disabled) {
      onToggle();
    }
  }, [disabled, onToggle]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  return (
    <div className="accordion-item">
      <button
        className={headerClassnames}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        type="button"
      >
        {icon && (
          <div className="accordion-item__icon">
            <Icon
              name={icon}
              size={size === "lg" ? 24 : size === "sm" ? 16 : 20}
            />
          </div>
        )}

        <div className="accordion-item__title-content">
          <span className="accordion-item__title">{title}</span>
        </div>

        {badge && <div className="accordion-item__badge">{badge}</div>}

        <div className={chevronClassnames}>
          <Icon
            name={chevronIcon}
            size={size === "lg" ? 20 : size === "sm" ? 14 : 16}
          />
        </div>
      </button>

      <div
        className={contentClassnames}
        id={`accordion-content-${item.id}`}
        aria-hidden={!isOpen}
      >
        <div className="accordion-item__content-inner">{content}</div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
  allowToggle = true,
  variant = "default",
  size = "md",
  chevronIcon = "chevron-down",
  animationDuration = 300,
}) => {
  // Initialize open items based on defaultOpen
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const initialOpenItems = new Set<string>();
    items.forEach((item) => {
      if (item.defaultOpen && !item.disabled) {
        initialOpenItems.add(item.id);
      }
    });
    return initialOpenItems;
  });

  const classnames = generateClassnames({
    accordion: true,
    [`accordion--${variant}`]: true,
    [`accordion--${size}`]: true,
    [className ?? ""]: !!className,
  });

  const toggleItem = useCallback(
    (itemId: string) => {
      setOpenItems((prev) => {
        const newOpenItems = new Set(prev);

        if (newOpenItems.has(itemId)) {
          // Closing an item
          if (allowToggle || newOpenItems.size > 1) {
            newOpenItems.delete(itemId);
          }
        } else {
          // Opening an item
          if (!allowMultiple) {
            // Close all other items if multiple not allowed
            newOpenItems.clear();
          }
          newOpenItems.add(itemId);
        }

        return newOpenItems;
      });
    },
    [allowMultiple, allowToggle],
  );

  return (
    <div
      className={classnames}
      style={
        {
          "--accordion-animation-duration": `${animationDuration}ms`,
        } as React.CSSProperties
      }
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
          chevronIcon={chevronIcon}
          size={size}
        />
      ))}
    </div>
  );
};

export { Accordion };
