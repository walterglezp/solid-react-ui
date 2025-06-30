import React from "react";
import { format, parseISO, isValid } from "date-fns";

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
import { isValueEmpty } from "../../../utils/validation-helper";
import { useClickOutside } from "../../../hooks/useClickOutside";

interface DatePickerProps {
  label?: string | React.ReactNode;
  markedDays?: CalendarDayType[];
  className?: string;
  minimumDate?: string;
  maximunDate?: string;
  disabled?: boolean;
  isRequired?: boolean;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
}

const DatePicker: React.FC<DatePickerProps> = ({
  label,
  minimumDate,
  maximunDate,
  markedDays = [],
  disabled = false,
  className,
  isRequired = false,
  field,
  onChange,
}) => {
  const currentDate =
    !isValueEmpty(field.value) && isValid(parseISO(field.value as string))
      ? parseISO(field.value as string)
      : new Date();

  const [showCalendar, setShowCalendar] = React.useState(false);
  const calendarContainerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(calendarContainerRef, () => {
    setShowCalendar(false);
  });

  const classnames: string = generateClassnames({
    "date-picker": true,
    [`${className}`]: !!className,
  });

  return (
    <div className={classnames}>
      <div
        className="date-picker-view"
        onClick={() => {
          if (!disabled) setShowCalendar((prev) => !prev);
        }}
      >
        <Input
          field={{
            ...field,
            value: format(currentDate, DATE_FORMATS.DEFAULT),
          }}
          label={label}
          onChange={() => {}}
          append={<Icon name="calendar" size={15} />}
          placeholder={DATE_FORMATS.DEFAULT}
          required={isRequired}
          disabled={disabled}
        />
        {field.error && <InputError error={field.error} />}
      </div>

      {showCalendar && (
        <div className="date-picker-calendar" ref={calendarContainerRef}>
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
        </div>
      )}
    </div>
  );
};

export { DatePicker };
