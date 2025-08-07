import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import { InputError } from "./InputError";
import "./CheckBox.scss";

export interface CheckBoxProps {
  label?: string | React.ReactNode;
  title?: string;
  className?: string;
  field: FormFieldProps;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onChange(field: FormFieldProps): void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  className,
  title,
  field,
  disabled = false,
  size = "md",
  color,
  onChange,
}) => {
  const isChecked = Boolean(field.value);

  const classnames: string = generateClassnames({
    "custom-checkbox": true,
    [`checkbox-${color}`]: color !== undefined,
    [`checkbox-${size}`]: size !== "md",
    checked: isChecked,
    disabled: disabled,
    [`${className}`]: className !== undefined,
  });

  const handleChange = () => {
    if (!disabled) {
      validateOnChange({ ...field, value: !isChecked }, onChange);
    }
  };

  return (
    <>
      <label className={classnames} title={title}>
        <input
          type="checkbox"
          name={field.name}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="checkbox-input"
        />
        <div className="checkbox-button" />
        {label && <span className="checkbox-label">{label}</span>}
      </label>
      {field.error && <InputError error={field.error} />}
    </>
  );
};

export { CheckBox };
