import React, { JSX } from "react";
import { format, setMonth } from "date-fns";
import "./CalendarMonthMenu.scss";

type CalendarMonthMenuProps = {
  selectMonth(monthName: string): void;
};

const CalendarMonthMenu: React.FC<CalendarMonthMenuProps> = ({
  selectMonth,
}) => {
  const months = Array.from({ length: 12 }, (_, i) =>
    format(setMonth(new Date(), i), "MMMM"),
  );

  const rows = months.reduce<JSX.Element[][]>((acc, month, i) => {
    if (i % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(
      <td key={month} className="month-item" onClick={() => selectMonth(month)}>
        <span>{month}</span>
      </td>,
    );
    return acc;
  }, []);

  return (
    <table className="calendar-month-menu">
      <thead>
        <tr>
          <th colSpan={4}>Select a Month</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row}</tr>
        ))}
      </tbody>
    </table>
  );
};

export { CalendarMonthMenu };
