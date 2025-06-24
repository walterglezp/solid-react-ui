import React from "react";
import { uuid } from "../../utils/uuid";
import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps, FormFieldValueProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";

interface RadioProps {
  field: FormFieldProps;
  label: string | React.ReactNode;
  title?: string;
  className?: string;
  checkedValue: FormFieldValueProps;
  inline?: boolean;
  readOnly?: boolean;
  outline?: boolean;
  noBorder?: boolean;
  btnSize?: "sm" | "md" | "lg";
  variant?:
    | false
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark"
    | "link";
  onChange(field: FormFieldProps): void;
}

const Radio: React.FC<RadioProps> = ({
  field,
  checkedValue,
  label,
  className,
  title,
  btnSize = "sm",
  outline = false,
  inline = false,
  noBorder = false,
  variant = false,
  readOnly = false,
  onChange,
  ...rest
}) => {
  const universalID = uuid();

  const classnames: string = generateClassnames({
    "form-check": true,
    "form-check-inline": inline,
    [`${className}`]: className !== undefined,
  });

  const classnamesBtn: string = generateClassnames({
    btn: true,
    [`btn-${btnSize}`]: true,
    [`btn-${variant}`]: !outline,
    [`btn-outline-${variant}`]: outline,
    "btn-no-border": noBorder,
    [`${className}`]: className !== undefined,
  });

  if (variant)
    return (
      <>
        <input
          name={field.name}
          value={field.value as string}
          type="radio"
          id={universalID}
          className="btn-check"
          {...rest}
          checked={field.value === checkedValue}
          onChange={() =>
            validateOnChange({ ...field, value: checkedValue }, onChange)
          }
          readOnly={readOnly}
        />
        <label className={classnamesBtn} htmlFor={universalID} title={title}>
          {label}
        </label>
      </>
    );

  return (
    <div className={classnames}>
      <input
        name={field.name}
        value={field.value as string}
        type="radio"
        id={universalID}
        className="form-check-input"
        {...rest}
        checked={field.value === checkedValue}
        onChange={() =>
          validateOnChange({ ...field, value: checkedValue }, onChange)
        }
        readOnly={readOnly}
      />
      <label className="form-check-label" htmlFor={universalID} title={title}>
        {label}
      </label>
    </div>
  );
};

export { Radio };
