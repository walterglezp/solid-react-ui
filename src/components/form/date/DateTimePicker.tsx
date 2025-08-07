import React, { useRef, useState } from "react";
import {
  format,
  parseISO,
  setHours,
  setMinutes,
  getHours,
  getMinutes as _getMinutes,
  isValid,
} from "date-fns";

import { uuid } from "../../../utils/uuid-helper";
import { CalendarDayType } from "./Calendar";
import { CalendarDaysList } from "./CalendarDaysList";
import { CalendarNavigationMenu } from "./CalendarNavigationMenu";
import { CalendarWeekDayNames } from "./CalendarWeekDayNames";
import { Input } from "../Input";
import { Icon } from "../../graphic/Icon";
import { InputError } from "../InputError";
import { generateClassnames } from "../../../utils/classnames-helper";
import { DATE_FORMATS } from "../../../constants/date";
import { FormFieldProps } from "../Form";
import {
  isValueEmpty,
  validateOnChange,
} from "../../../utils/validation-helper";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./DateTimePicker.scss";

interface DateTimePickerProps {
  label?: string | React.ReactNode;
  markedDays?: CalendarDayType[];
  className?: string;
  hideTimePicker?: boolean;
  minimumDate?: string;
  maximunDate?: string;
  readOnly?: boolean;
  disabled?: boolean;
  isRequired?: boolean;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  label,
  minimumDate,
  maximunDate,
  markedDays = [],
  readOnly = false,
  disabled = false,
  hideTimePicker = false,
  className,
  isRequired = false,
  field,
  onChange,
}) => {
  const idAM = uuid();
  const idPM = uuid();
  const calendarRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const currentDate = isValueEmpty(field.value)
    ? new Date()
    : parseISO(field.value as string);

  const isCurrentDateValid = isValid(currentDate);

  useClickOutside(calendarRef, () => {
    setShowCalendar(false);
  });

  const classnames = generateClassnames({
    "date-time-picker": true,
    [className || ""]: !!className,
  });

  const updateDateTime = (type: "hour" | "minute", value: number) => {
    if (readOnly || disabled || !isCurrentDateValid) return;

    let updatedDate = new Date(currentDate);
    if (type === "hour") {
      updatedDate = setHours(updatedDate, value);
    } else if (type === "minute") {
      updatedDate = setMinutes(updatedDate, value);
    }

    validateOnChange({ ...field, value: updatedDate.toISOString() }, onChange);
  };

  const updateMeridian = (meridian: "AM" | "PM") => {
    if (readOnly || disabled || !isCurrentDateValid) return;

    let hour = getHours(currentDate);
    if (meridian === "PM" && hour < 12) hour += 12;
    if (meridian === "AM" && hour >= 12) hour -= 12;

    const updatedDate = setHours(currentDate, hour);
    validateOnChange({ ...field, value: updatedDate.toISOString() }, onChange);
  };

  return (
    <div className={classnames}>
      <div
        className="date-time-picker-view"
        onClick={() => !disabled && setShowCalendar(!showCalendar)}
      >
        <Input
          field={{
            ...field,
            value: format(currentDate, DATE_FORMATS.FRIENDLY_TIMESTAMP),
          }}
          label={label}
          onChange={() => {}}
          append={<Icon name="calendar" size={15} />}
          placeholder={DATE_FORMATS.DEFAULT}
          required={isRequired}
        />
        {field.error && <InputError error={field.error} />}
      </div>

      {showCalendar && (
        <div className="date-time-picker-calendar" ref={calendarRef}>
          <CalendarNavigationMenu
            disabled={disabled}
            field={field}
            onChange={onChange}
          />
          <CalendarWeekDayNames />
          <CalendarDaysList
            field={field}
            onChange={onChange}
            disabled={disabled}
            markedDays={markedDays}
            minimumDate={minimumDate}
            maximunDate={maximunDate}
          />

          {!hideTimePicker && (
            <div className="date-time-picker-timepicker mt-3">
              {/* Hour Input */}
              <input
                className="input-time me-2"
                type="number"
                value={format(currentDate, "hh")}
                onChange={(e) => updateDateTime("hour", Number(e.target.value))}
                onBlur={(e) => updateDateTime("hour", Number(e.target.value))}
                readOnly={readOnly}
                disabled={disabled}
                min={1}
                max={12}
              />
              <strong>:</strong>
              {/* Minute Input */}
              <input
                className="input-time ms-2 me-2"
                type="number"
                value={format(currentDate, "mm")}
                onChange={(e) =>
                  updateDateTime("minute", Number(e.target.value))
                }
                onBlur={(e) => updateDateTime("minute", Number(e.target.value))}
                readOnly={readOnly}
                disabled={disabled}
                min={0}
                max={59}
              />
              {/* AM/PM Toggle */}
              <div className="time-picker-meridian">
                <input
                  type="radio"
                  id={idAM}
                  className="form-check-input ms-2 me-2"
                  checked={format(currentDate, "a") === "AM"}
                  onChange={() => updateMeridian("AM")}
                  disabled={readOnly || disabled}
                />
                <label className="form-check-label me-2" htmlFor={idAM}>
                  AM
                </label>
                <input
                  type="radio"
                  id={idPM}
                  className="form-check-input me-2"
                  checked={format(currentDate, "a") === "PM"}
                  onChange={() => updateMeridian("PM")}
                  disabled={readOnly || disabled}
                />
                <label className="form-check-label" htmlFor={idPM}>
                  PM
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { DateTimePicker };
