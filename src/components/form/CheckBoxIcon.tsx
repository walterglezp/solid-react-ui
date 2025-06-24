import React from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { FormFieldProps } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";

interface CheckBoxIconProps {
  className?: string;
  title?: string;
  inline?: boolean;
  children: React.ReactNode;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const CheckBoxIcon: React.FC<CheckBoxIconProps> = ({
  title,
  className,
  inline = false,
  children,
  field,
  onChange,
}) => {
  const classnames: string = generateClassnames({
    "checkbox-icon": true,
    "d-inline": inline,
    checked: Boolean(field.value),
    [className ?? ""]: !!className,
  });

  const handleClick = (): void => {
    const newValue = !field.value;
    validateOnChange({ ...field, value: newValue }, onChange);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={classnames}
      role="checkbox"
      aria-checked={!!field.value}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      title={title}
    >
      <input
        type="checkbox"
        name={field.name}
        checked={!!field.value}
        onChange={() => {}} // avoid double trigger — handled by parent
        style={{ display: "none" }}
      />
      {children}
    </div>
  );
};

export { CheckBoxIcon };
