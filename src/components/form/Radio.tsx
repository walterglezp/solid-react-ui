import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps, FormFieldValueProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import "./Radio.scss";

interface RadioProps {
  field: FormFieldProps;
  label: string | React.ReactNode;
  title?: string;
  className?: string;
  checkedValue: FormFieldValueProps;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onChange(field: FormFieldProps): void;
}

const Radio: React.FC<RadioProps> = ({
  field,
  checkedValue,
  label,
  className,
  title,
  disabled = false,
  size = "md",
  color,
  onChange,
}) => {
  const isChecked = field.value === checkedValue;

  const classnames: string = generateClassnames({
    "custom-radio": true,
    [`radio-${color}`]: color !== undefined,
    [`radio-${size}`]: size !== "md",
    checked: isChecked,
    disabled: disabled,
    [`${className}`]: className !== undefined,
  });

  const handleChange = () => {
    if (!disabled) {
      validateOnChange({ ...field, value: checkedValue }, onChange);
    }
  };

  return (
    <label className={classnames} title={title}>
      <input
        type="radio"
        name={field.name}
        value={checkedValue as string}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="radio-input"
      />
      <div className="radio-button" />
      <span className="radio-label">{label}</span>
    </label>
  );
};

export { Radio };
