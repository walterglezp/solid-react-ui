import React from "react";
import { InputError } from "./InputError";
import { generateClassnames } from "../../utils/classnames-helper";
import {
  FormFieldProps,
  FormFieldValueProps,
  FormFieldChangeHandler,
} from "./Form";
import { validateOnChange } from "../../utils/validation-helper";
import { Icon } from "../graphic/Icon";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./Input.scss";
import "./autoselect.scss";

export type SelectOptionsUiProps = Array<{
  value: FormFieldValueProps;
  label: string;
}>;

export interface SelectProps {
  id?: string;
  placeholder?: string;
  label?: string | React.ReactNode;
  field: FormFieldProps;
  variant?: "sm" | "md" | "lg";
  className?: string;
  append?: string | React.ReactNode;
  isRequired?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  borderless?: boolean;
  tabIndex?: number;
  options: SelectOptionsUiProps;
  onChange: FormFieldChangeHandler;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  field,
  className,
  tabIndex,
  readOnly,
  disabled,
  variant = "md",
  isRequired = false,
  borderless = false,
  options = [],
  placeholder = "Select an option...",
  onChange,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const [activeOption, setActiveOption] = React.useState<number>(0);

  const classnames: string = generateClassnames({
    [`autoselect input-group input-group-${variant}`]: true,
    "invalid-field": field.error !== "",
    "required-field": isRequired,
    borderless: borderless,
    [`${className}`]: className !== undefined,
  });

  const containerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setShowOptions(false);
  });

  React.useEffect(() => {
    if (disabled) {
      setShowOptions(false);
    }
  }, [disabled]);

  const onClickOption = (optionIndex: number) => {
    const selectedOption = options[optionIndex];
    if (selectedOption) {
      setShowOptions(false);
      validateOnChange({ ...field, value: selectedOption.value }, onChange);
    }
  };

  const openDropdown = () => {
    if (disabled || readOnly) return;

    // Find the index of the currently selected option
    const currentSelectedIndex = options.findIndex(
      (option) => option.value === field.value,
    );

    // Set active option to current selection, or 0 if no selection found
    setActiveOption(currentSelectedIndex >= 0 ? currentSelectedIndex : 0);
    setShowOptions(true);
  };

  const onEnterOption = React.useCallback(() => {
    setShowOptions(false);
    const newValue = options[activeOption];
    if (newValue) {
      validateOnChange(
        { ...field, value: newValue.value?.toString() ?? "" },
        onChange,
      );
    }
  }, [onChange, options, activeOption, field]);

  const moveUpDown = React.useCallback(
    (direction: "up" | "down") => {
      let next = activeOption;
      if (direction === "up" && activeOption > 0) next--;
      if (direction === "down" && activeOption < options.length - 1) next++;
      setActiveOption(next);
    },
    [activeOption, options.length],
  );

  React.useEffect(() => {
    if (!showOptions) return;
    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") moveUpDown("down");
      if (e.key === "ArrowUp") moveUpDown("up");
      if (e.key === "Enter") onEnterOption();
      if (e.key === "Escape") setShowOptions(false);
    };
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [moveUpDown, onEnterOption, showOptions]);

  // Get display label for selected value
  const getDisplayLabel = () => {
    if (
      field.value === "" ||
      field.value === null ||
      field.value === undefined
    ) {
      return placeholder;
    }
    const selectedOption = options.find(
      (option) => option.value === field.value,
    );
    return selectedOption ? selectedOption.label : String(field.value);
  };

  return (
    <>
      <div ref={containerRef} className={classnames} title={getDisplayLabel()}>
        {label && (
          <span className="input-group-text">
            {label}
            {isRequired && <span className="asterisk">&nbsp;*</span>}&nbsp;
          </span>
        )}
        <div
          id={id}
          className={`form-control form-control-${variant}`}
          tabIndex={tabIndex}
          onClick={() => (showOptions ? setShowOptions(false) : openDropdown())}
          onFocus={() => openDropdown()}
          style={{
            cursor: disabled ? "not-allowed" : readOnly ? "default" : "pointer",
            color: field.value === "" ? "var(--color-gray-400)" : "#707072",
            display: "flex",
            alignItems: "center",
          }}
        >
          {getDisplayLabel()}
        </div>
        {showOptions && !disabled && (
          <ul className="suggestions">
            {options.map((option, index) => (
              <li
                key={index}
                className={activeOption === index ? "active-suggestion" : ""}
                onClick={() => onClickOption(index)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        <span className="input-group-text input-group-text-arrow">
          {field.value !== "" ? (
            <Icon
              className="clear cursor-pointer me-2"
              name="x"
              size={15}
              onClick={() => {
                onChange({ ...field, value: "" });
              }}
            />
          ) : null}
          <span className="down-arrow" />
        </span>
      </div>
      {field.error && <InputError error={field.error} />}
    </>
  );
};

export { Select };
