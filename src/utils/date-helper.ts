import {
  format,
  parseISO,
  differenceInDays,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  getDay as dfnsGetDay,
  getMonth,
  getYear as dfnsGetYear,
  addDays,
  isValid,
  isBefore,
  isAfter,
  isEqual,
  parse,
} from "date-fns";
import { DATE_FORMATS } from "../constants/date";

export const getFormatedDateToRFC2822 = (): string =>
  format(new Date(), DATE_FORMATS.DEFAULT);

export const calculateNights = (startDate: string, endDate: string): number => {
  if (!startDate || !endDate) return 0;
  const start = parseISO(startDate);
  const end = parseISO(endDate);
  const nights = differenceInDays(end, start);
  return nights > 0 ? nights : 0;
};

export function getDatesBetween(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  const current = new Date(start);

  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

export const formatToRFC2822 = (value: string): string =>
  format(parseISO(value), DATE_FORMATS.RFC2822);

export const extractDayFromDateString = (value: string): string => {
  const date = value ? parseISO(value) : new Date();
  return format(date, "d");
};

export const getFirstWeekDayOfMonth = (date: string): number =>
  dfnsGetDay(startOfMonth(parseISO(date)));

export const getLastWeekDayOfMonth = (date: string): number =>
  dfnsGetDay(endOfMonth(parseISO(date)));

export const getMonthName = (date: string): string =>
  format(parseISO(date), "MMMM");

export const extractYearFromDateString = (date: string): number =>
  dfnsGetYear(parseISO(date));

export const formatToMMDDYYYY = (input: string): string => {
  let currentInput = input;

  if (/[a-zA-Z]/.test(currentInput)) return "";

  if (/\D\/$/.test(currentInput)) {
    currentInput = currentInput.slice(0, -3);
  }

  const values = currentInput.split("/").map((v) => v.replace(/\D/g, ""));

  const checkValue = (str: string, max: number): string => {
    let num = parseInt(str, 10);
    if (isNaN(num) || num <= 0 || num > max) num = 1;
    return num < 10 ? `0${num}` : `${num}`;
  };

  if (values[0]) values[0] = checkValue(values[0], 12);
  if (values[1]) values[1] = checkValue(values[1], 31);

  const formatted = values.map((v, i) =>
    v.length === 2 && i < 2 ? `${v} / ` : v,
  );

  return formatted.join("").slice(0, 14);
};

export const isValidUTC = (dateString: string): boolean => {
  const parsed = parseISO(dateString);
  return isValid(parsed);
};
