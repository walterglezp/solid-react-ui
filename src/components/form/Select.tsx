import React from "react";

import InputError from "./InputError";
import { generateClassnames } from "../../utils/classnames-helper";
import {
  FormFieldProps,
  FormFieldValueProps,
  FormFieldChangeHandler,
} from "./Form";
import { validateOnChange } from "../../utils/validation-helper";
import Icon from "../graphic/Icon";

export type SelectOptionsUiProps = Array<{
  value: FormFieldValueProps;
  label: string;
}>;

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  placeholder?: string;
  label?: string | React.ReactNode;
  field: FormFieldProps;
  variant?: "sm" | "md" | "lg";
  className?: string;
  append?: string | React.ReactNode;
  isRequired?: boolean;
  options: SelectOptionsUiProps;
  onChange: FormFieldChangeHandler;
}

const Select: React.FC<SelectProps> = ({
  label,
  field,
  className = "",
  append,
  variant = "md",
  options,
  isRequired = false,
  placeholder = "Select an option...",
  onChange,
  ...rest
}) => {
  const classnames = generateClassnames({
    "input-group": true,
    [`input-group-${variant}`]: true,
    "invalid-field": !!field.error,
    "required-field": isRequired,
    [className]: !!className,
  });

  const handleChange = (value: string) =>
    validateOnChange({ ...field, value }, onChange);

  return (
    <>
      <div className={classnames}>
        {label && (
          <span className="input-group-text">
            {label}
            {isRequired && <span className="asterisk">&nbsp;*</span>}
          </span>
        )}

        <select
          name={field.name}
          value={field.value as string}
          className={`form-control form-control-${variant}`}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={(e) => handleChange(e.target.value)}
          {...rest}
        >
          {field.value === "" && <option value="">{placeholder}</option>}
          {options.map((o, i) => (
            <option key={i} value={o.value as string}>
              {o.label}
            </option>
          ))}
        </select>

        {(field.value !== "" || append) && (
          <span className="input-group-text pe-1 ps-1">
            {field.value !== "" && (
              <Icon
                className="cursor-pointer me-2"
                name="x"
                size={13}
                onClick={() => onChange({ ...field, value: "" })}
              />
            )}
            {append}
          </span>
        )}
      </div>

      {field.error && <InputError error={field.error} />}
    </>
  );
};

export default Select;
