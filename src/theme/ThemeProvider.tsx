import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { ThemeConfig } from "../types/theme.types";
import { defaultTheme } from "./presets";
import { darkenColor, lightenColor } from "../utils/color-utils";

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeConfig;
}

const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = defaultTheme,
}) => {
  useEffect(() => {
    const root = document.documentElement;
    applyThemeVariables(root, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Apply theme variables to CSS custom properties
const applyThemeVariables = (root: HTMLElement, theme: ThemeConfig) => {
  // Core color palette
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--theme-${key}`, value);
  });

  // Color shades
  Object.entries(theme.colorShades).forEach(([colorName, shades]) => {
    if (shades) {
      Object.entries(shades).forEach(([shade, value]) => {
        root.style.setProperty(`--theme-${colorName}-${shade}`, value);
      });
    }
  });

  // Typography
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    root.style.setProperty(`--theme-font-size-${key}`, value);
  });

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    root.style.setProperty(`--theme-font-weight-${key}`, value.toString());
  });

  Object.entries(theme.typography.fontFamily).forEach(([key, value]) => {
    root.style.setProperty(`--theme-font-family-${key}`, value);
  });

  Object.entries(theme.typography.lineHeight).forEach(([key, value]) => {
    root.style.setProperty(`--theme-line-height-${key}`, value.toString());
  });

  Object.entries(theme.typography.letterSpacing).forEach(([key, value]) => {
    root.style.setProperty(`--theme-letter-spacing-${key}`, value);
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--theme-spacing-${key}`, value);
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    root.style.setProperty(`--theme-border-radius-${key}`, value);
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    root.style.setProperty(`--theme-shadow-${key}`, value);
  });

  // Breakpoints
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    root.style.setProperty(`--theme-breakpoint-${key}`, value);
  });

  // Z-index
  Object.entries(theme.zIndex).forEach(([key, value]) => {
    root.style.setProperty(`--theme-z-index-${key}`, value.toString());
  });

  // Transitions
  Object.entries(theme.transitions.duration).forEach(([key, value]) => {
    root.style.setProperty(`--theme-transition-duration-${key}`, value);
  });

  Object.entries(theme.transitions.easing).forEach(([key, value]) => {
    root.style.setProperty(`--theme-transition-easing-${key}`, value);
  });

  // Component variants
  // Button sizes
  Object.entries(theme.components.button.sizes).forEach(([size, config]) => {
    Object.entries(config).forEach(([property, value]) => {
      root.style.setProperty(`--theme-button-${size}-${property}`, value);
    });
  });

  // Input sizes
  Object.entries(theme.components.input.sizes).forEach(([size, config]) => {
    Object.entries(config).forEach(([property, value]) => {
      root.style.setProperty(`--theme-input-${size}-${property}`, value);
    });
  });

  // Card component
  Object.entries(theme.components.card).forEach(([property, value]) => {
    root.style.setProperty(`--theme-card-${property}`, value);
  });

  // Map theme colors to our design system color variables
  // This ensures compatibility with our custom CSS color() function
  Object.entries(theme.colors).forEach(([key, value]) => {
    // Map semantic colors to our color system
    if (
      ["primary", "secondary", "success", "info", "warning", "danger"].includes(
        key,
      )
    ) {
      root.style.setProperty(`--color-${key}-500`, value);
      root.style.setProperty(`--color-${key}-600`, darkenColor(value, 0.1));
      root.style.setProperty(`--color-${key}-700`, darkenColor(value, 0.2));
      root.style.setProperty(`--color-${key}-400`, lightenColor(value, 0.1));
      root.style.setProperty(`--color-${key}-300`, lightenColor(value, 0.2));
      root.style.setProperty(`--color-${key}-200`, lightenColor(value, 0.3));
      root.style.setProperty(`--color-${key}-100`, lightenColor(value, 0.4));
      root.style.setProperty(`--color-${key}-50`, lightenColor(value, 0.5));
    }
  });

  // Map gray colors from theme (use text/textSecondary/border colors)
  const grayBase = theme.colors.textSecondary || "#6b7280";
  root.style.setProperty(`--color-gray-500`, grayBase);
  root.style.setProperty(`--color-gray-50`, lightenColor(grayBase, 0.8));
  root.style.setProperty(`--color-gray-100`, lightenColor(grayBase, 0.7));
  root.style.setProperty(`--color-gray-200`, lightenColor(grayBase, 0.5));
  root.style.setProperty(`--color-gray-300`, lightenColor(grayBase, 0.3));
  root.style.setProperty(`--color-gray-400`, lightenColor(grayBase, 0.1));
  root.style.setProperty(`--color-gray-600`, darkenColor(grayBase, 0.1));
  root.style.setProperty(`--color-gray-700`, darkenColor(grayBase, 0.2));
  root.style.setProperty(`--color-gray-800`, darkenColor(grayBase, 0.3));
  root.style.setProperty(
    `--color-gray-900`,
    theme.colors.text || darkenColor(grayBase, 0.4),
  );
  root.style.setProperty(`--color-gray-950`, darkenColor(grayBase, 0.5));

  // Apply color shades if defined
  Object.entries(theme.colorShades).forEach(([colorName, shades]) => {
    if (shades) {
      Object.entries(shades).forEach(([shade, value]) => {
        root.style.setProperty(`--color-${colorName}-${shade}`, value);
      });
    }
  });

  // Focus styling
  root.style.setProperty("--focus-border-color", theme.colors.focus);
  root.style.setProperty("--focus-border-thickness", "2px");
};

export const useTheme = (): ThemeConfig => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Hook to get theme tokens with better TypeScript support
export const useThemeTokens = () => {
  const theme = useTheme();

  return {
    colors: theme.colors,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
    shadows: theme.shadows,
    typography: theme.typography,
    components: theme.components,
    breakpoints: theme.breakpoints,
    zIndex: theme.zIndex,
    transitions: theme.transitions,
  };
};

// Utility hook to check if dark mode is preferred
export const usePrefersDarkMode = (): boolean => {
  const [prefersDark, setPrefersDark] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setPrefersDark(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersDark(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersDark;
};
