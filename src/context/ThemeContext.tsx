import React, { createContext, useContext, useState, ReactNode } from "react";

export type ThemeName = "light" | "dark" | "dark-thin" | "custom";

export interface ThemeSettings {
  name: ThemeName;
  borderRadius?: string; // e.g., '0.25rem', '1rem'
  custom?: Record<string, string>; // future support for custom properties
}

interface ThemeContextProps {
  theme: ThemeSettings;
  setTheme: (theme: ThemeSettings) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeSettings>({
    name: "light",
    borderRadius: "0.25rem",
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme.name}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
