import React, { createContext, useContext, ReactNode, useEffect } from "react";

export type ThemeName = "light" | "dark" | "dark-thin" | "custom";

export type ThemeContextProps = {
  name: ThemeName;
  borderRadius: string;
  borderRadiusSm?: string;
  borderRadiusLg?: string;
};

const defaultTheme: ThemeContextProps = {
  name: "light",
  borderRadius: "0.375rem", // default 6px
};

const ThemeContext = createContext<ThemeContextProps>(defaultTheme);

export const ThemeProvider = ({
  children,
  value = defaultTheme,
}: {
  children: ReactNode;
  value?: ThemeContextProps;
}) => {
  useEffect(() => {
    const root = document.documentElement;

    if (value.borderRadius) {
      root.style.setProperty("--bs-border-radius", value.borderRadius);
      root.style.setProperty(
        "--bs-border-radius-sm",
        value.borderRadiusSm ?? value.borderRadius
      );
      root.style.setProperty(
        "--bs-border-radius-lg",
        value.borderRadiusLg ?? value.borderRadius
      );
    }
  }, [value.borderRadius, value.borderRadiusSm, value.borderRadiusLg]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
