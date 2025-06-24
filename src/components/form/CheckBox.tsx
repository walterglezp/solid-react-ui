import React from "react";
import { uuid } from "../../utils/uuid";
import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import { InputError } from "./InputError";

export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string | React.ReactNode;
  className?: string;
  inline?: boolean;
  variant?: "checkbox" | "switch";
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  className,
  variant = "checkbox",
  inline = false,
  field,
  onChange,
  disabled = false,
  ...rest
}) => {
  const universalID = uuid();

  const classnames = generateClassnames({
    "custom-checkbox": true,
    "form-check": true,
    "form-switch": variant === "switch",
    "form-check-inline": inline,
    [className ?? ""]: !!className,
  });

  return (
    <div className={classnames}>
      <input
        id={universalID}
        name={field.name}
        type="checkbox"
        className="form-check-input"
        checked={Boolean(field.value)}
        onChange={(e) =>
          validateOnChange({ ...field, value: e.target.checked }, onChange)
        }
        disabled={disabled}
        {...rest}
      />
      {label && (
        <label className="form-check-label" htmlFor={universalID}>
          {label}
        </label>
      )}
      {field.error && <InputError error={field.error} />}
    </div>
  );
};

export { CheckBox };
