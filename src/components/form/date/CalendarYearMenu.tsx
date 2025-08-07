import React, { JSX } from "react";
import "./CalendarYearMenu.scss";

type CalendarYearMenuProps = {
  year: number;
  selectYear(year: number): void;
};

const CalendarYearMenu: React.FC<CalendarYearMenuProps> = ({
  year,
  selectYear,
}) => {
  // Generate a list of 12 years starting from `year`
  const years = Array.from({ length: 12 }, (_, i) => year + i);

  // Chunk into rows of 3
  const rows = years.reduce<JSX.Element[][]>((acc, y, i) => {
    if (i % 3 === 0) acc.push([]);
    acc[acc.length - 1].push(
      <td key={y} className="year-item" onClick={() => selectYear(y)}>
        <span>{y}</span>
      </td>,
    );
    return acc;
  }, []);

  return (
    <table className="calendar-year-menu">
      <thead>
        <tr>
          <th colSpan={4}>Select a Year</th>
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

export { CalendarYearMenu };
