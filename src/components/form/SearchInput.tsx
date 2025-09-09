import type { FC, ReactNode } from "react";
import { useState, useRef, useEffect, Children } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { Icon } from "../graphic/Icon";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./SearchInput.scss";

type FilterProps = {
  title: string;
  children: ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
};

const Filter: FC<FilterProps> = ({
  title,
  children,
  collapsible = false,
  defaultCollapsed = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className="search-input__filter">
      <div
        className={generateClassnames({
          "search-input__filter-header": true,
          "search-input__filter-header--clickable": collapsible,
        })}
        onClick={toggleCollapse}
      >
        <h4 className="search-input__filter-title">{title}</h4>
        {collapsible && (
          <Icon
            name={isCollapsed ? "chevron-down" : "chevron-up"}
            size={16}
            className="search-input__filter-toggle"
          />
        )}
      </div>
      {!isCollapsed && (
        <div className="search-input__filter-content">{children}</div>
      )}
    </div>
  );
};

type SearchInputProps = {
  className?: string;
  placeholder?: string;
  value?: string;
  onSearch?: (query: string) => void;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  showSearchButton?: boolean;
  searchButtonText?: string;
  children?: ReactNode;
  popupTitle?: string;
  showFilters?: boolean;
  onFiltersChange?: (show: boolean) => void;
};

type SearchInputComponent = FC<SearchInputProps> & {
  Filter: typeof Filter;
};

const SearchInputBase: FC<SearchInputProps> = ({
  className,
  placeholder = "Search...",
  value = "",
  onSearch,
  onValueChange,
  disabled = false,
  showSearchButton = true,
  searchButtonText = "Search",
  children,
  popupTitle = "Filters",
  showFilters = false,
  onFiltersChange,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isPopupOpen, setIsPopupOpen] = useState(showFilters);

  const popupRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(popupRef, () => {
    setIsPopupOpen(false);
    onFiltersChange?.(false);
  });

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    setIsPopupOpen(showFilters);
  }, [showFilters]);

  const containerClassnames = generateClassnames({
    "search-input": true,
    "search-input--disabled": disabled,
    "search-input--popup-open": isPopupOpen,
    [`${className}`]: Boolean(className),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onValueChange?.(newValue);
  };

  const handleSearch = () => {
    onSearch?.(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const togglePopup = () => {
    if (!disabled && children) {
      const newState = !isPopupOpen;
      setIsPopupOpen(newState);
      onFiltersChange?.(newState);
    }
  };

  const hasFilters = Boolean(children && Children.count(children) > 0);

  return (
    <div className={containerClassnames}>
      <div className="search-input__container">
        {/* Search Icon */}
        <div className="search-input__search-icon">
          <Icon name="search" size={20} />
        </div>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          className="search-input__input"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
        />

        {/* Filter Button */}
        {hasFilters && (
          <button
            type="button"
            className={generateClassnames({
              "search-input__filter-button": true,
              "search-input__filter-button--active": isPopupOpen,
            })}
            onClick={togglePopup}
            disabled={disabled}
            aria-label="Toggle filters"
          >
            <Icon name="filter" size={20} />
          </button>
        )}

        {/* Search Button */}
        {showSearchButton && (
          <button
            type="button"
            className="search-input__search-button"
            onClick={handleSearch}
            disabled={disabled}
          >
            {searchButtonText}
          </button>
        )}
      </div>

      {/* Filter Popup */}
      {hasFilters && isPopupOpen && (
        <div className="search-input__popup" ref={popupRef}>
          <div className="search-input__popup-header">
            <h3 className="search-input__popup-title">{popupTitle}</h3>
            <button
              type="button"
              className="search-input__popup-close"
              onClick={togglePopup}
              aria-label="Close filters"
            >
              <Icon name="x" size={18} />
            </button>
          </div>
          <div className="search-input__popup-content">{children}</div>
        </div>
      )}
    </div>
  );
};

// Attach Filter as a static property for the composable API
const SearchInput = SearchInputBase as SearchInputComponent;
SearchInput.Filter = Filter;

export { SearchInput, Filter };
export type { SearchInputProps, FilterProps, SearchInputComponent };
