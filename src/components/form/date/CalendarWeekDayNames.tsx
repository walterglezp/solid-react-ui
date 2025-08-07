import React from "react";
import { format, addDays, startOfWeek } from "date-fns";
import "./CalendarWeekDayNames.scss";

const CalendarWeekDayNames: React.FC = () => {
  const start = startOfWeek(new Date(), { weekStartsOn: 0 }); // Sunday
  const weekDays = Array.from({ length: 7 }, (_, i) =>
    format(addDays(start, i), "EEE"),
  );

  return (
    <div className="calendar-week-day-names">
      {weekDays.map((dayName) => (
        <span key={dayName} className="day-cell text-capitalize">
          {dayName}
        </span>
      ))}
    </div>
  );
};

export { CalendarWeekDayNames };
