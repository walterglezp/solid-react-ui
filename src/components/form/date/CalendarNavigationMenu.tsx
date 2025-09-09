import React, { useState } from "react";
import {
  parseISO,
  format,
  addMonths,
  subMonths,
  setMonth,
  setYear,
  addYears,
  subYears,
} from "date-fns";

import { CalendarMonthMenu } from "./CalendarMonthMenu";
import { CalendarYearMenu } from "./CalendarYearMenu";
import { Icon } from "../../graphic/Icon";
import { generateClassnames } from "../../../utils/classnames-helper";
import {
  getMonthName,
  extractYearFromDateString,
} from "../../../utils/date-helper";
import { FormFieldProps } from "../../form/Form";
import {
  validateOnChange,
  isValueEmpty,
} from "../../../utils/validation-helper";
import "./CalendarNavigationMenu.scss";

type CalendarNavigationMenuProps = {
  disabled?: boolean;
  field: FormFieldProps;
  onChange(field: FormFieldProps): void;
};

const CalendarNavigationMenu: React.FC<CalendarNavigationMenuProps> = ({
  disabled = false,
  field,
  onChange,
}) => {
  const [showYearMenu, setShowYearMenu] = useState(false);
  const [showMonthMenu, setShowMonthMenu] = useState(false);

  const currentDate = isValueEmpty(field.value)
    ? new Date()
    : parseISO(field.value as string);

  const updateDate = (date: Date) => {
    validateOnChange({ ...field, value: date.toISOString() }, onChange);
  };

  const actionClassnames = generateClassnames({
    action: true,
    "text-capitalize": true,
    disabled: disabled,
  });

  const toggleYearMenu = () => {
    if (disabled) return;
    setShowYearMenu((prev) => !prev);
    setShowMonthMenu(false);
  };

  const toggleMonthMenu = () => {
    if (disabled) return;
    setShowMonthMenu((prev) => !prev);
    setShowYearMenu(false);
  };

  const navigationMovePrevious = () => {
    if (disabled) return;
    const newDate = showYearMenu
      ? subYears(currentDate, 11)
      : subMonths(currentDate, 1);
    updateDate(newDate);
  };

  const navigationMoveNext = () => {
    if (disabled) return;
    const newDate = showYearMenu
      ? addYears(currentDate, 11)
      : addMonths(currentDate, 1);
    updateDate(newDate);
  };

  const selectMonth = (month: string) => {
    const monthIndex =
      format(setMonth(new Date(), 0), "MMMM") === month
        ? 0
        : Array.from({ length: 12 }, (_, i) =>
            format(setMonth(new Date(), i), "MMMM"),
          ).indexOf(month);
    const newDate = setMonth(currentDate, monthIndex);
    updateDate(newDate);
    setShowMonthMenu(false);
  };

  const selectYear = (year: number) => {
    const newDate = setYear(currentDate, year);
    updateDate(newDate);
    setShowYearMenu(false);
  };

  return (
    <div className="calendar-navigation-menu">
      <div className="d-flex justify-content-between">
        <div className={actionClassnames} onClick={navigationMovePrevious}>
          <Icon name="caret-left" size={15} />
        </div>
        <div className={actionClassnames} onClick={toggleMonthMenu}>
          {getMonthName(currentDate.toISOString())}
        </div>
        <div className={actionClassnames} onClick={toggleYearMenu}>
          {extractYearFromDateString(currentDate.toISOString())}
        </div>
        <div className={actionClassnames} onClick={navigationMoveNext}>
          <Icon name="caret-right" size={15} />
        </div>
      </div>

      {showYearMenu && (
        <CalendarYearMenu
          year={extractYearFromDateString(currentDate.toISOString())}
          selectYear={selectYear}
        />
      )}
      {showMonthMenu && <CalendarMonthMenu selectMonth={selectMonth} />}
    </div>
  );
};

export { CalendarNavigationMenu };
