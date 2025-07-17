import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { darkenColor } from "../utils/scss-helper";

export type ThemeName = "light" | "dark" | "dark-thin" | "custom";

export type ThemeContextProps = {
  name: ThemeName;
  borderRadius: string;
  borderRadiusSm?: string;
  borderRadiusLg?: string;
  focusBorderColor: string;
  focusBorderThickness: string;
  primary?: string;
  secondary?: string;
  success?: string;
  info?: string;
  warning?: string;
  danger?: string;
};

export const defaultThemeValue: ThemeContextProps = {
  name: "light",
  borderRadius: "1rem",
  focusBorderColor: "#bec4c9",
  focusBorderThickness: "1px",
  primary: "#4d6bfe",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
};

const ThemeContext = createContext<ThemeContextProps>(defaultThemeValue);

export const ThemeProvider = ({
  children,
  value = defaultThemeValue,
}: {
  children: ReactNode;
  value?: ThemeContextProps;
}) => {
  useEffect(() => {
    const root = document.documentElement;

    // Border radius
    root.style.setProperty("--bs-border-radius", value.borderRadius);
    root.style.setProperty(
      "--bs-border-radius-sm",
      value.borderRadiusSm ?? value.borderRadius
    );
    root.style.setProperty(
      "--bs-border-radius-lg",
      value.borderRadiusLg ?? value.borderRadius
    );

    // Focus input
    root.style.setProperty("--focus-border-color", value.focusBorderColor);
    root.style.setProperty(
      "--focus-border-thickness",
      value.focusBorderThickness
    );

    // Color variables
    root.style.setProperty(
      "--bs-primary",
      value.primary ?? defaultThemeValue.primary ?? ""
    );
    root.style.setProperty(
      "--bs-secondary",
      value.secondary ?? defaultThemeValue.secondary ?? ""
    );
    root.style.setProperty(
      "--bs-success",
      value.success ?? defaultThemeValue.success ?? ""
    );
    root.style.setProperty(
      "--bs-info",
      value.info ?? defaultThemeValue.info ?? ""
    );
    root.style.setProperty(
      "--bs-warning",
      value.warning ?? defaultThemeValue.warning ?? ""
    );
    root.style.setProperty(
      "--bs-danger",
      value.danger ?? defaultThemeValue.danger ?? ""
    );

    // Additional Bootstrap variables that might need updating
    root.style.setProperty(
      "--bs-btn-bg",
      value.primary ?? defaultThemeValue.primary ?? ""
    );
    root.style.setProperty(
      "--bs-btn-border-color",
      value.primary ?? defaultThemeValue.primary ?? ""
    );
    root.style.setProperty(
      "--bs-btn-hover-bg",
      darkenColor(value.primary ?? defaultThemeValue.primary ?? "")
    );
  }, [value]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
