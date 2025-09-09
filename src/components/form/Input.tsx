import React from "react";
import { Icon } from "../graphic/Icon";
import { generateClassnames } from "../../utils/classnames-helper";
import { InputError } from "./InputError";
import { FormFieldProps, FormFieldChangeHandler } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import "./Input.scss";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string | React.ReactNode;
  append?: string | React.ReactNode;
  variant?: "sm" | "md" | "lg";
  field: FormFieldProps;
  onChange: FormFieldChangeHandler;
}

const Input: React.FC<InputProps> = ({
  label,
  append,
  variant = "md",
  className = "",
  disabled = false,
  field,
  onChange,
  ...rest
}) => {
  const wrapperClass = generateClassnames({
    "input-group": true,
    [`input-group-${variant}`]: true,
    "invalid-field": !!field.error,
    [className]: !!className,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateOnChange({ ...field, value: e.target.value }, onChange);
  };

  return (
    <>
      <div className={wrapperClass}>
        {label && <span className="input-group-text">{label}</span>}

        <input
          {...rest}
          disabled={disabled}
          className="form-control"
          name={field.name}
          value={field.value as string}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />

        {field.value && (
          <span className="input-group-text">
            <Icon
              className="cursor-pointer"
              name="x"
              size={13}
              onClick={() => onChange({ ...field, value: "" })}
            />
          </span>
        )}

        {append && <span className="input-group-text">{append}</span>}
      </div>

      {field.error && <InputError error={field.error} />}
    </>
  );
};

export { Input };
