import {
  format,
  getHours,
  getMinutes,
  isAfter,
  isBefore,
  isSameDay,
  isValid,
  parseISO,
  set,
  startOfDay,
  startOfToday,
} from "date-fns";
import React from "react";

import { useClickOutside } from "../../../hooks/useClickOutside";
import { generateClassnames } from "../../../utils/classnames-helper";
import { getDatesBetween } from "../../../utils/date-helper";
import {
  isValueEmpty,
  validateOnChange,
} from "../../../utils/validation-helper";
import { Icon } from "../../graphic/Icon";
import { Flex } from "../../layout/Flex";
import { FormFieldProps } from "../Form";
import { InputError } from "../InputError";
import { Radio } from "../Radio";
import { CalendarDayType } from "./Calendar";
import { CalendarDaysList } from "./CalendarDaysList";
import { CalendarNavigationMenu } from "./CalendarNavigationMenu";
import { CalendarWeekDayNames } from "./CalendarWeekDayNames";
import "./DateTimeRangePicker.scss";

type DateTarget = "start" | "end";

interface DateTimeRangePickerProps {
  label?: string | React.ReactNode;
  markedDays?: Array<CalendarDayType>;
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

const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  minimumDate,
  maximunDate,
  markedDays = [],
  readOnly,
  disabled,
  hideTimePicker = false,
  className,
  field,
  onChange,
}) => {
  const todayDate = startOfToday();
  let startDate = todayDate;
  let endDate: Date | null = null;

  if (!isValueEmpty(field.value)) {
    try {
      const parsed = JSON.parse(field.value as string);
      if (parsed?.start) {
        startDate = isValid(parseISO(parsed.start))
          ? parseISO(parsed.start)
          : todayDate;
      }
      if (parsed?.end) {
        endDate = isValid(parseISO(parsed.end)) ? parseISO(parsed.end) : null;
      }
    } catch {
      // fallback
    }
  }

  const currentMarkedDays: CalendarDayType[] = [
    ...(endDate
      ? getDatesBetween(startOfDay(startDate), startOfDay(endDate))
      : [startOfDay(startDate)]
    ).map(
      (day): CalendarDayType => ({
        date: format(day, "yyyy-MM-dd"),
        type: "new-reservation",
      }),
    ),
    ...markedDays,
  ];

  const [showCalendar, setShowCalendar] = React.useState(false);
  const [displayDate, setDisplayDate] = React.useState(startDate.toISOString());
  const calendarContainerRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(calendarContainerRef, () => setShowCalendar(false));

  const classnames: string = generateClassnames({
    "date-time-range-picker": true,
    border: true,
    [`${className}`]: className !== undefined,
  });

  const updateDisplayDate = (updatedField: FormFieldProps): void => {
    setDisplayDate(parseISO(updatedField.value as string).toISOString());
  };

  const updateFieldValue = (start: Date, end: Date | null) => {
    const newValue = JSON.stringify({
      start: start.toISOString(),
      end: end ? end.toISOString() : null,
    });
    validateOnChange({ ...field, value: newValue }, onChange);
  };

  const updateDateTime = (
    target: DateTarget,
    type: "hour" | "minute",
    value: number,
  ) => {
    const newStart =
      target === "start"
        ? set(startDate, {
            hours: type === "hour" ? value : getHours(startDate),
            minutes: type === "minute" ? value : getMinutes(startDate),
            seconds: 0,
          })
        : startDate;

    const newEnd =
      target === "end" && endDate
        ? set(endDate, {
            hours: type === "hour" ? value : getHours(endDate),
            minutes: type === "minute" ? value : getMinutes(endDate),
            seconds: 0,
          })
        : endDate;

    updateFieldValue(newStart, newEnd);
  };

  const updateMeridian = (target: DateTarget, meridian: "AM" | "PM") => {
    const date = target === "start" ? startDate : endDate;
    if (!date) return;

    let hour = getHours(date);
    hour =
      meridian === "PM" && hour < 12
        ? hour + 12
        : meridian === "AM" && hour >= 12
          ? hour - 12
          : hour;

    const newDate = set(date, { hours: hour });
    const newStart = target === "start" ? newDate : startDate;
    const newEnd = target === "end" ? newDate : endDate;

    updateFieldValue(newStart, newEnd);
  };

  return (
    <div className={classnames}>
      <div
        className="date-time-range-picker-view"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Icon className="me-2" name="calendar" size={17} />
        <span className="check-in">
          {field.value ? format(startDate, "MMM do yy") : "Check-in"}
        </span>
        {!hideTimePicker && field.value && (
          <span className="check-in-time">
            &nbsp;{format(startDate, "h:mm a")}
          </span>
        )}
        <Icon className="ms-1 me-1" name="swap-arrows" size={17} />
        <span className="check-out">
          {field.value && endDate ? format(endDate, "MMM do yy") : "Check-out"}
        </span>
        {!hideTimePicker && field.value && endDate && (
          <span className="check-out-time">
            &nbsp;{format(endDate, "h:mm a")}
          </span>
        )}
        {field.error && <InputError error={field.error} />}
      </div>
      {showCalendar && (
        <div
          className="date-time-range-picker-calendar"
          ref={calendarContainerRef}
        >
          <CalendarNavigationMenu
            disabled={disabled}
            field={{ ...field, value: displayDate }}
            onChange={updateDisplayDate}
          />
          <CalendarWeekDayNames />
          <CalendarDaysList
            field={{ ...field, value: displayDate }}
            onChange={({ value }) => {
              const selected = parseISO(value as string);
              const selectedDay = startOfDay(selected);
              const currentStart = startOfDay(startDate);
              const currentEnd = endDate ? startOfDay(endDate) : null;

              if (currentStart && currentEnd) {
                updateFieldValue(selectedDay, null);
              } else if (!currentEnd && isBefore(selectedDay, currentStart)) {
                updateFieldValue(selectedDay, null);
              } else if (!currentEnd && isAfter(selectedDay, currentStart)) {
                updateFieldValue(currentStart, selectedDay);
              } else if (!currentEnd && isSameDay(selectedDay, currentStart)) {
                updateFieldValue(currentStart, currentStart);
              }
            }}
            disabled={disabled}
            markedDays={currentMarkedDays}
            minimumDate={minimumDate}
            maximunDate={maximunDate}
          />
          {!hideTimePicker && (
            <Flex justify="center" align="center">
              {(["start", "end"] as DateTarget[]).map((target) => (
                <div
                  key={target}
                  className="date-time-range-picker-timepicker mt-3 ps-1 pe-1"
                >
                  <input
                    className="input-time me-2"
                    type="number"
                    value={format(
                      target === "start" ? startDate : endDate || startDate,
                      "hh",
                    )}
                    onChange={(e) =>
                      updateDateTime(target, "hour", Number(e.target.value))
                    }
                    onBlur={(e) =>
                      updateDateTime(target, "hour", Number(e.target.value))
                    }
                    readOnly={readOnly}
                    disabled={disabled}
                    min="1"
                    max="12"
                  />
                  <strong>:</strong>
                  <input
                    className="input-time ms-2 me-2"
                    type="number"
                    value={format(
                      target === "start" ? startDate : endDate || startDate,
                      "mm",
                    )}
                    onChange={(e) =>
                      updateDateTime(target, "minute", Number(e.target.value))
                    }
                    onBlur={(e) =>
                      updateDateTime(target, "minute", Number(e.target.value))
                    }
                    readOnly={readOnly}
                    disabled={disabled}
                    min="0"
                    max="60"
                  />
                  <div className="time-picker-meridian d-flex gap-2">
                    <Radio
                      className="me-2"
                      field={{
                        name: `meridian-${target}`,
                        formName: "timerangepicker",
                        error: "",
                        value: format(
                          target === "start" ? startDate : endDate || startDate,
                          "a",
                        ),
                        section: 0,
                        validate: {},
                      }}
                      checkedValue="AM"
                      label="AM"
                      size="sm"
                      disabled={readOnly}
                      onChange={() => updateMeridian(target, "AM")}
                    />
                    <Radio
                      field={{
                        name: `meridian-${target}`,
                        formName: "timerangepicker",
                        error: "",
                        value: format(
                          target === "start" ? startDate : endDate || startDate,
                          "a",
                        ),
                        section: 0,
                        validate: {},
                      }}
                      checkedValue="PM"
                      label="PM"
                      size="sm"
                      disabled={readOnly}
                      onChange={() => updateMeridian(target, "PM")}
                    />
                  </div>
                </div>
              ))}
            </Flex>
          )}
        </div>
      )}
    </div>
  );
};

export { DateTimeRangePicker };
