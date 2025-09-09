import React, { useState, useCallback } from "react";
import { generateClassnames } from "../../utils/classnames-helper";
import { InputError } from "./InputError";
import { FormFieldProps, FormFieldChangeHandler } from "../form/Form";
import { validateOnChange } from "../../utils/validation-helper";
import "./InputRange.scss";

export interface InputRangeProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "type"
  > {
  /** Label for the range input */
  label?: string | React.ReactNode;
  /** Size variant */
  variant?: "sm" | "md" | "lg";
  /** Form field props */
  field: FormFieldProps;
  /** Change handler */
  onChange: FormFieldChangeHandler;
  /** Show current value */
  showValue?: boolean;
  /** Value display format function */
  formatValue?: (value: number) => string;
  /** Show min/max labels */
  showMinMax?: boolean;
  /** Custom min label */
  minLabel?: string;
  /** Custom max label */
  maxLabel?: string;
  /** Number of tick marks to show */
  ticks?: number;
  /** Show tick marks */
  showTicks?: boolean;
  /** Tooltip on hover */
  showTooltip?: boolean;
}

const InputRange: React.FC<InputRangeProps> = ({
  label,
  variant = "md",
  className = "",
  disabled = false,
  field,
  onChange,
  showValue = true,
  formatValue,
  showMinMax = false,
  minLabel,
  maxLabel,
  ticks,
  showTicks = false,
  showTooltip = false,
  min = 0,
  max = 100,
  step = 1,
  ...rest
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [tooltipValue, setTooltipValue] = useState<number | null>(null);

  const currentValue =
    typeof field.value === "number"
      ? field.value
      : Number(field.value) || Number(min);

  const wrapperClass = generateClassnames({
    "input-range": true,
    [`input-range--${variant}`]: true,
    "input-range--disabled": disabled,
    "input-range--dragging": isDragging,
    "input-range--with-ticks": showTicks,
    "invalid-field": !!field.error,
    [className]: !!className,
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      validateOnChange({ ...field, value: newValue }, onChange);
    },
    [field, onChange],
  );

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTooltipValue(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      if (showTooltip) {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const range = Number(max) - Number(min);
        const value = Number(min) + percent * range;
        const steppedValue = Math.round(value / Number(step)) * Number(step);
        const clampedValue = Math.min(
          Number(max),
          Math.max(Number(min), steppedValue),
        );
        setTooltipValue(clampedValue);
      }
    },
    [showTooltip, min, max, step],
  );

  const handleMouseLeave = useCallback(() => {
    if (!isDragging) {
      setTooltipValue(null);
    }
  }, [isDragging]);

  const getDisplayValue = (value: number): string => {
    return formatValue ? formatValue(value) : value.toString();
  };

  const getPercentage = (value: number): number => {
    const range = Number(max) - Number(min);
    return range > 0 ? ((value - Number(min)) / range) * 100 : 0;
  };

  const renderTicks = () => {
    if (!showTicks || !ticks || ticks < 2) return null;

    const tickElements = [];
    const range = Number(max) - Number(min);
    const tickStep = range / (ticks - 1);

    for (let i = 0; i < ticks; i++) {
      const tickValue = Number(min) + i * tickStep;
      const percentage = getPercentage(tickValue);

      tickElements.push(
        <div
          key={i}
          className="input-range__tick"
          style={{ left: `${percentage}%` }}
        >
          <div className="input-range__tick-mark" />
        </div>,
      );
    }

    return <div className="input-range__ticks">{tickElements}</div>;
  };

  return (
    <div className={wrapperClass}>
      {label && (
        <div className="input-range__header">
          <label className="input-range__label">{label}</label>
          {showValue && (
            <span className="input-range__value">
              {getDisplayValue(currentValue)}
            </span>
          )}
        </div>
      )}

      <div className="input-range__wrapper">
        {showMinMax && (
          <span className="input-range__min-label">
            {minLabel || min.toString()}
          </span>
        )}

        <div className="input-range__container">
          <div className="input-range__track">
            <div
              className="input-range__fill"
              style={{ width: `${getPercentage(currentValue)}%` }}
            />
          </div>

          {renderTicks()}

          <input
            {...rest}
            type="range"
            className="input-range__input"
            name={field.name}
            value={currentValue}
            onChange={handleInputChange}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            disabled={disabled}
            min={min}
            max={max}
            step={step}
          />

          <div
            className="input-range__thumb"
            style={{ left: `${getPercentage(currentValue)}%` }}
          />

          {showTooltip && tooltipValue !== null && (
            <div
              className="input-range__tooltip"
              style={{ left: `${getPercentage(tooltipValue)}%` }}
            >
              {getDisplayValue(tooltipValue)}
            </div>
          )}
        </div>

        {showMinMax && (
          <span className="input-range__max-label">
            {maxLabel || max.toString()}
          </span>
        )}
      </div>

      {!label && showValue && (
        <div className="input-range__value-only">
          {getDisplayValue(currentValue)}
        </div>
      )}

      {field.error && <InputError error={field.error} />}
    </div>
  );
};

export { InputRange };
