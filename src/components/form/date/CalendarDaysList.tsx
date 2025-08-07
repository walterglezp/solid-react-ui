import React from "react";
import {
  parseISO,
  format,
  isBefore,
  isAfter,
  isValid,
  isSameDay as _isSameDay,
  startOfMonth as _startOfMonth,
  endOfMonth as _endOfMonth,
  getYear,
  getMonth,
  getDaysInMonth,
  subMonths,
  addMonths as _addMonths,
  endOfMonth as _getEndOfMonth,
  startOfMonth as _getStartOfMonth,
} from "date-fns";

import { generateClassnames } from "../../../utils/classnames-helper";
import {
  getFirstWeekDayOfMonth,
  getLastWeekDayOfMonth,
} from "../../../utils/date-helper";
import { DATE_FORMATS } from "../../../constants/date";
import { CalendarDayType, DayType } from "./Calendar";
import { FormFieldProps } from "../../form/Form";
import {
  validateOnChange,
  isValueEmpty,
} from "../../../utils/validation-helper";
import "./CalendarDaysList.scss";

const translate = (text: string) => text;

export type CalendarDaysListProps = {
  disabled?: boolean;
  markedDays?: Array<CalendarDayType>;
  minimumDate?: string;
  maximunDate?: string;
  field: FormFieldProps;
  onChange: (field: FormFieldProps) => void;
};

export type CalendarDayListType = {
  number: number;
  type: DayType;
};

const CalendarDaysList: React.FC<CalendarDaysListProps> = ({
  minimumDate,
  maximunDate,
  markedDays = [],
  disabled = false,
  field,
  onChange,
}) => {
  const today = new Date();
  const todayString = format(today, DATE_FORMATS.DEFAULT);
  const currentDate = isValueEmpty(field.value)
    ? today
    : parseISO(field.value as string);
  const currentDateString = format(currentDate, DATE_FORMATS.DEFAULT);

  const markedDaysFormatted = markedDays.map((x) => ({
    date: format(parseISO(x.date), DATE_FORMATS.DEFAULT),
    type: x.type,
  }));

  const generateDaysList = (): CalendarDayListType[] => {
    const allDays: CalendarDayListType[] = [];
    const reservedDays = markedDaysFormatted
      .filter((d) => d.type === "reserved")
      .map((d) => d.date);
    const newReservationDays = markedDaysFormatted
      .filter((d) => d.type === "new-reservation")
      .map((d) => d.date);

    const year = getYear(currentDate);
    const month = getMonth(currentDate);
    const daysInMonth = getDaysInMonth(currentDate);
    const firstWeekday = getFirstWeekDayOfMonth(currentDateString);
    const lastWeekday = getLastWeekDayOfMonth(currentDateString);

    const prevMonth = subMonths(currentDate, 1);
    const prevMonthDays = getDaysInMonth(prevMonth);

    // Previous month days
    for (let i = 0; i < firstWeekday; i++) {
      const day = prevMonthDays - firstWeekday + i + 1;
      const date = new Date(year, month - 1, day);
      const dateStr = format(date, DATE_FORMATS.DEFAULT);

      allDays.push({
        number: day,
        type: reservedDays.includes(dateStr)
          ? "reserved"
          : newReservationDays.includes(dateStr)
            ? "new-reservation"
            : "disabled",
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = format(date, DATE_FORMATS.DEFAULT);

      if (reservedDays.includes(dateStr)) {
        allDays.push({ number: day, type: "reserved" });
      } else if (newReservationDays.includes(dateStr)) {
        const index = newReservationDays.indexOf(dateStr);
        allDays.push({
          number: day,
          type:
            index === 0
              ? "new-reservation-start"
              : index === newReservationDays.length - 1
                ? "new-reservation-end"
                : "new-reservation",
        });
      } else if (dateStr === todayString) {
        allDays.push({ number: day, type: "current-day" });
      } else if (dateStr === currentDateString) {
        allDays.push({ number: day, type: "selected" });
      } else if (
        (minimumDate &&
          isValid(parseISO(minimumDate)) &&
          isBefore(date, parseISO(minimumDate))) ||
        (maximunDate &&
          isValid(parseISO(maximunDate)) &&
          isAfter(date, parseISO(maximunDate)))
      ) {
        allDays.push({ number: day, type: "disabled" });
      } else {
        allDays.push({ number: day, type: "regular" });
      }
    }

    // Next month days
    for (let i = lastWeekday + 1; i <= 6; i++) {
      const day = i - lastWeekday;
      const date = new Date(year, month + 1, day);
      const dateStr = format(date, DATE_FORMATS.DEFAULT);

      allDays.push({
        number: day,
        type: reservedDays.includes(dateStr)
          ? "reserved"
          : newReservationDays.includes(dateStr)
            ? "new-reservation"
            : "disabled",
      });
    }

    return allDays;
  };

  const onDayClick = (day: number): void => {
    if (disabled) return;
    const newDate = new Date(currentDate);
    newDate.setDate(day);
    validateOnChange({ ...field, value: newDate.toISOString() }, onChange);
  };

  const generateListOfDayRows = (): React.ReactNode[] => {
    const rows: React.ReactNode[] = [];
    let cells: React.ReactNode[] = [];
    const daysList = generateDaysList();

    daysList.forEach((day, i) => {
      const classnames = generateClassnames({
        "day-cell disabled selected": day.type === "selected",
        "day-cell disabled reserved": day.type === "reserved",
        "day-cell disabled new-reservation": day.type === "new-reservation",
        "day-cell disabled new-reservation-start":
          day.type === "new-reservation-start",
        "day-cell disabled new-reservation-end":
          day.type === "new-reservation-end",
        "day-cell disabled": day.type === "disabled",
        "day-cell enabled": day.type === "regular",
        "day-cell enabled current-day": day.type === "current-day",
      });

      const tooltipMap: Partial<Record<DayType, string>> = {
        reserved: translate("Day is reserved"),
        "current-day": translate("This is current day"),
        "new-reservation": translate("This is a new reservation"),
      };

      const dayCell = (
        <div
          key={i}
          className={classnames}
          onClick={() => {
            if (!disabled && day.type === "regular") {
              onDayClick(day.number);
            }
          }}
          title={tooltipMap[day.type] || ""}
        >
          <div>
            <div>
              <span>{day.number}</span>
            </div>
          </div>
        </div>
      );

      if (i % 7 !== 0) {
        cells.push(dayCell);
      } else {
        rows.push(cells);
        cells = [dayCell];
      }

      if (i === daysList.length - 1) {
        rows.push(cells);
      }
    });

    return rows;
  };

  return (
    <div className="calendar-days-list">
      {generateListOfDayRows().map((days, i) => (
        <div key={i} className="row-calendar-week">
          {days}
        </div>
      ))}
    </div>
  );
};

export { CalendarDaysList };
