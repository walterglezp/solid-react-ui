import React, { FC } from "react";

import { InputError } from "./InputError";
import { SelectOptionsUiProps } from "./Select";
import { FormFieldProps } from "./Form";
import { Icon } from "../graphic/Icon";
import { generateClassnames } from "../../utils/classnames-helper";
import { validateOnChange } from "../../utils/validation-helper";
import { useClickOutside } from "../../hooks/useClickOutside";
import "./autoselect.scss";

export interface AutoselectProps {
  id?: string;
  label?: string | React.ReactNode;
  className?: string;
  append?: string | React.ReactNode;
  variant?: "sm" | "md" | "lg";
  isRequired?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  borderless?: boolean;
  tabIndex?: number;
  options: SelectOptionsUiProps;
  placeholder?: string;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const Autoselect: FC<AutoselectProps> = ({
  id,
  label,
  className,
  tabIndex,
  readOnly,
  disabled,
  variant = "sm",
  isRequired = false,
  borderless = false,
  options = [],
  placeholder,
  field,
  onChange,
}) => {
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [activeSuggestion, setActiveSuggestion] = React.useState<number>(0);
  const [optionsList, setOptions] =
    React.useState<SelectOptionsUiProps>(options);

  const classnames: string = generateClassnames({
    [`autoselect input-group input-group-${variant}`]: true,
    "invalid-field": field.error !== "",
    "required-field": isRequired,
    borderless: borderless,
    [`${className}`]: className !== undefined,
  });

  const containerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => {
    setShowSuggestions(false);
  });

  React.useEffect(() => {
    setOptions(options);
  }, [options]);

  React.useEffect(() => {
    if (disabled) {
      setInputValue(placeholder ?? "");
    }
  }, [disabled, placeholder]);

  const onClickSuggestion = (suggestionIndex: number) => {
    const suggestion = optionsList[suggestionIndex];
    if (suggestion) {
      setInputValue(suggestion.label);
      setShowSuggestions(false);
      validateOnChange({ ...field, value: suggestion.value }, onChange);
    }
  };

  const onChangeInput = (value: string) => {
    if (readOnly || disabled) return;
    const currentValue = value.toLowerCase();
    setShowSuggestions(true);
    const filteredList = options.filter((s) =>
      s.label.toLowerCase().includes(currentValue),
    );
    setInputValue(value);
    setOptions(filteredList);
  };

  const openSuggestions = () => {
    if (disabled) return;

    // Find the index of the currently selected option
    const currentSelectedIndex = options.findIndex(
      (option) => option.value === field.value,
    );

    // Set active suggestion to current selection, or 0 if no selection found
    setActiveSuggestion(currentSelectedIndex >= 0 ? currentSelectedIndex : 0);
    setShowSuggestions(true);
    setOptions(options); // Reset to full options list
  };

  const onEnterSuggestion = React.useCallback(() => {
    setShowSuggestions(false);
    const newValue = optionsList[activeSuggestion];
    setInputValue(newValue.label);
    validateOnChange(
      { ...field, value: newValue.value?.toString() ?? "" },
      onChange,
    );
  }, [onChange, optionsList, activeSuggestion, field]);

  const moveUpDown = React.useCallback(
    (direction: "up" | "down") => {
      let next = activeSuggestion;
      if (direction === "up" && activeSuggestion > 0) next--;
      if (direction === "down" && activeSuggestion < optionsList.length - 1)
        next++;
      setActiveSuggestion(next);
      const suggestion = optionsList[next];
      if (suggestion) {
        setInputValue(suggestion.label);
        validateOnChange({ ...field, value: suggestion.value }, onChange);
      }
    },
    [activeSuggestion, optionsList, onChange, field],
  );

  React.useEffect(() => {
    if (!showSuggestions) return;
    const onKeyup = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") moveUpDown("down");
      if (e.key === "ArrowUp") moveUpDown("up");
      if (e.key === "Enter") onEnterSuggestion();
    };
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [moveUpDown, onEnterSuggestion, showSuggestions]);

  return (
    <>
      <div ref={containerRef} className={classnames} title={inputValue}>
        {label && (
          <span className="input-group-text">
            {label}
            {isRequired && <span className="asterisk">&nbsp;*</span>}&nbsp;
          </span>
        )}
        <input
          id={id}
          name={field.name}
          className={`form-control form-control-${variant}`}
          type="text"
          value={inputValue}
          tabIndex={tabIndex}
          onChange={(e) => onChangeInput(e.target.value)}
          placeholder={placeholder}
          onFocus={() => openSuggestions()}
          onClick={() => openSuggestions()}
          disabled={disabled}
        />
        {showSuggestions && !disabled && (
          <ul className="suggestions">
            {optionsList.map((s, index) => (
              <li
                key={index}
                className={
                  activeSuggestion === index ? "active-suggestion" : ""
                }
                onClick={() => onClickSuggestion(index)}
              >
                {s.label}
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
                setInputValue("");
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

export { Autoselect };
