import React from "react";

import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps } from "../form/Form";
import { InputError } from "../form/InputError";
import { validateOnChange } from "../../utils/validation-helper";

export interface TextAreaProps {
  label: string | React.ReactNode;
  className?: string;
  variant?: "sm" | "md" | "lg";
  tabIndex?: number;
  cols?: number;
  rows?: number;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  className,
  variant = "sm",
  field,
  onChange,
  ...rest
}) => {
  const classnames: string = generateClassnames({
    [`app-text-input input-group input-group-${variant}`]: true,
    "invalid-field": field.error !== "",
    [`${className}`]: className !== undefined,
  });

  return (
    <>
      <div className={classnames}>
        {label && <span className="input-group-text">{label}&nbsp;:</span>}
        <textarea
          name={field.name}
          className={`form-control form-control-${variant}`}
          value={field.value?.toString()}
          onChange={(e) =>
            validateOnChange({ ...field, value: e.target.value }, onChange)
          }
          onBlur={(e) =>
            validateOnChange({ ...field, value: e.target.value }, onChange)
          }
          {...rest}
        />
      </div>
      {field.error && <InputError error={field.error} />}
    </>
  );
};

export { TextArea };
