import React from "react";

import { Icon } from "../graphic/Icon";
import { Flex } from "../layout/Flex";
import { generateClassnames } from "../../utils/classnames-helper";
import { InputError } from "./InputError";
import { FormFieldProps } from "./Form";
import { validateOnChange } from "../../utils/validation-helper";

import "./InputNumber.scss";

export interface InputNumberProps {
  label?: string | React.ReactNode;
  title?: string;
  className?: string;
  isRequired?: boolean;
  min?: number;
  max?: number;
  disabled?: boolean;
  readOnly?: boolean;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  label,
  title,
  className,
  isRequired = false,
  min = 0,
  max,
  disabled,
  readOnly,
  field,
  onChange,
}) => {
  const value = Number(field.value) || 0;

  const handleChange = (newValue: number) => {
    if (readOnly || disabled) return;
    validateOnChange({ ...field, value: newValue }, onChange);
  };

  const increment = () => {
    const next = value + 1;
    if (typeof max === "number" && next > max) return;
    handleChange(next);
  };

  const decrement = () => {
    const next = value - 1;
    if (next < min) return;
    handleChange(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") increment();
    if (e.key === "ArrowDown") decrement();
  };

  const classnames = generateClassnames({
    "input-number": true,
    "invalid-field": !!field.error,
    "required-field": isRequired,
    [className ?? ""]: !!className,
  });

  return (
    <Flex className={classnames} align="center">
      {label && <span className="mb-1">{label}</span>}

      <div
        className="number-control"
        role="spinbutton"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        title={title}
      >
        <button
          type="button"
          className="decrement"
          aria-label="Decrement"
          onClick={decrement}
          disabled={disabled || readOnly}
        >
          <Icon name="minus" size={19} />
        </button>

        <strong>{value}</strong>

        <button
          type="button"
          className="increment"
          aria-label="Increment"
          onClick={increment}
          disabled={disabled || readOnly}
        >
          <Icon name="plus" size={20} />
        </button>
      </div>

      {field.error && <InputError error={field.error} />}
    </Flex>
  );
};

export { InputNumber };
