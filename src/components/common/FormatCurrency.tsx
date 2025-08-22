import { FC, useMemo } from "react";

type CurrencyDisplay = "symbol" | "narrowSymbol" | "code" | "name";
type CurrencySign = "standard" | "accounting";

type FormatCurrencyProps = {
  value: number;
  currency?: string;
  locale?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  currencyDisplay?: CurrencyDisplay;
  currencySign?: CurrencySign;
  useGrouping?: boolean;
  fallback?: string;
  className?: string;
};

type CurrencyConfig = {
  minimumFractionDigits: number;
  maximumFractionDigits: number;
};

// Common currency configurations
const CURRENCY_CONFIGS: Record<string, CurrencyConfig> = {
  USD: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  EUR: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  JPY: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
  GBP: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  CAD: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  AUD: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  CHF: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  CNY: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  INR: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
  BRL: { minimumFractionDigits: 2, maximumFractionDigits: 2 },
};

// Common locale mappings for better UX
const LOCALE_MAPPINGS: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-BR",
  ja: "ja-JP",
  ko: "ko-KR",
  zh: "zh-CN",
  ru: "ru-RU",
};

const FormatCurrency: FC<FormatCurrencyProps> = ({
  value,
  currency = "USD",
  locale = "en-US",
  minimumFractionDigits,
  maximumFractionDigits,
  currencyDisplay = "symbol",
  currencySign = "standard",
  useGrouping = true,
  fallback = "—",
  className,
}) => {
  const formattedValue = useMemo(() => {
    // Handle invalid values
    if (typeof value !== "number" || !isFinite(value)) {
      return fallback;
    }

    try {
      // Normalize locale (handle common short forms)
      const normalizedLocale = LOCALE_MAPPINGS[locale] || locale;

      // Get currency-specific defaults
      const currencyConfig = CURRENCY_CONFIGS[currency.toUpperCase()] || {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      };

      // Build formatter options
      const options: Intl.NumberFormatOptions = {
        style: "currency",
        currency: currency.toUpperCase(),
        currencyDisplay,
        currencySign,
        useGrouping,
        minimumFractionDigits:
          minimumFractionDigits ?? currencyConfig.minimumFractionDigits,
        maximumFractionDigits:
          maximumFractionDigits ?? currencyConfig.maximumFractionDigits,
      };

      // Create and use formatter
      const formatter = new Intl.NumberFormat(normalizedLocale, options);
      return formatter.format(value);
    } catch {
      // Fallback to basic formatting if Intl fails
      return fallback;
    }
  }, [
    value,
    currency,
    locale,
    minimumFractionDigits,
    maximumFractionDigits,
    currencyDisplay,
    currencySign,
    useGrouping,
    fallback,
  ]);

  return (
    <span className={className} title={`${value} ${currency.toUpperCase()}`}>
      {formattedValue}
    </span>
  );
};

// Utility function for quick currency formatting
const formatCurrency = (
  value: number,
  currency = "USD",
  locale = "en-US",
): string => {
  if (typeof value !== "number" || !isFinite(value)) {
    return "—";
  }

  try {
    const normalizedLocale = LOCALE_MAPPINGS[locale] || locale;
    const currencyConfig = CURRENCY_CONFIGS[currency.toUpperCase()] || {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };

    const formatter = new Intl.NumberFormat(normalizedLocale, {
      style: "currency",
      currency: currency.toUpperCase(),
      ...currencyConfig,
    });

    return formatter.format(value);
  } catch {
    return "—";
  }
};

export { FormatCurrency, formatCurrency };
export type { FormatCurrencyProps, CurrencyDisplay, CurrencySign };
