import React from "react";

import { CalendarDaysList } from "./CalendarDaysList";
import { CalendarNavigationMenu } from "./CalendarNavigationMenu";
import { CalendarWeekDayNames } from "./CalendarWeekDayNames";
import { InputError } from "../../form/InputError";
import { FormFieldProps } from "../../form/Form";
import "./Calendar.scss";

export type CalendarDayType = {
  date: string; // ISO string in DEFAULT_DATE_FORMAT
  type: DayType;
};

export type DayType =
  | "selected"
  | "regular"
  | "current-day"
  | "disabled"
  | "reserved"
  | "new-reservation"
  | "new-reservation-start"
  | "new-reservation-end";

export type CalendarProps = {
  defaultDate?: string; // optional default
  markedDays?: CalendarDayType[];
  fullWidthHeigh?: boolean; // NOTE: typo kept for compatibility; rename in future to `fullWidthHeight`
  disabled?: boolean;
  setDate?: (date: string) => void; // optional legacy fallback, not used internally
  field: FormFieldProps;
  onChange: (field: FormFieldProps) => void;
};

const Calendar: React.FC<CalendarProps> = ({
  fullWidthHeigh = false,
  disabled = false,
  markedDays = [],
  field,
  onChange,
}) => {
  const containerStyle = fullWidthHeigh
    ? { height: "100%", width: "100%" }
    : {};

  // If disabled, pass a noop to prevent updates
  const safeOnChange = disabled ? () => {} : onChange;

  return (
    <div className="calendar" style={containerStyle}>
      <CalendarNavigationMenu
        disabled={disabled}
        field={field}
        onChange={safeOnChange}
      />
      <CalendarWeekDayNames />
      <CalendarDaysList
        markedDays={markedDays}
        field={field}
        onChange={safeOnChange}
        disabled={disabled}
      />
      {field.error && <InputError error={field.error} />}
    </div>
  );
};

export { Calendar };
