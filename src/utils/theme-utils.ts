import { ThemeConfig, ColorVariant, SizeVariant } from "../types/theme.types";
import { generateColorShades, darkenColor, lightenColor } from "./color-utils";

// Get a theme token value by path
export const getThemeToken = (theme: ThemeConfig, path: string): string => {
  const keys = path.split(".");
  let value: unknown = theme;

  for (const key of keys) {
    if (typeof value === "object" && value !== null && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return "";
    }
  }

  return typeof value === "string" ? value : "";
};

// Get CSS variable name for a theme token
export const getThemeVariableName = (path: string): string => {
  return `--theme-${path.replace(/\./g, "-")}`;
};

// Get CSS variable value for a theme token
export const getThemeVariable = (path: string): string => {
  return `var(${getThemeVariableName(path)})`;
};

// Create a complete theme from partial configuration
export const createTheme = (
  baseTheme: ThemeConfig,
  overrides: Partial<ThemeConfig>,
): ThemeConfig => {
  const theme: ThemeConfig = {
    ...baseTheme,
    ...overrides,
    colors: {
      ...baseTheme.colors,
      ...overrides.colors,
    },
    colorShades: {
      ...baseTheme.colorShades,
      ...overrides.colorShades,
    },
    typography: {
      ...baseTheme.typography,
      ...overrides.typography,
      fontFamily: {
        ...baseTheme.typography.fontFamily,
        ...overrides.typography?.fontFamily,
      },
      fontSize: {
        ...baseTheme.typography.fontSize,
        ...overrides.typography?.fontSize,
      },
      fontWeight: {
        ...baseTheme.typography.fontWeight,
        ...overrides.typography?.fontWeight,
      },
      lineHeight: {
        ...baseTheme.typography.lineHeight,
        ...overrides.typography?.lineHeight,
      },
      letterSpacing: {
        ...baseTheme.typography.letterSpacing,
        ...overrides.typography?.letterSpacing,
      },
    },
    spacing: {
      ...baseTheme.spacing,
      ...overrides.spacing,
    },
    borderRadius: {
      ...baseTheme.borderRadius,
      ...overrides.borderRadius,
    },
    shadows: {
      ...baseTheme.shadows,
      ...overrides.shadows,
    },
    breakpoints: {
      ...baseTheme.breakpoints,
      ...overrides.breakpoints,
    },
    zIndex: {
      ...baseTheme.zIndex,
      ...overrides.zIndex,
    },
    transitions: {
      ...baseTheme.transitions,
      ...overrides.transitions,
      duration: {
        ...baseTheme.transitions.duration,
        ...overrides.transitions?.duration,
      },
      easing: {
        ...baseTheme.transitions.easing,
        ...overrides.transitions?.easing,
      },
    },
    components: {
      ...baseTheme.components,
      ...overrides.components,
      button: {
        ...baseTheme.components.button,
        ...overrides.components?.button,
        sizes: {
          ...baseTheme.components.button.sizes,
          ...overrides.components?.button?.sizes,
        },
        variants: {
          ...baseTheme.components.button.variants,
          ...overrides.components?.button?.variants,
        },
      },
      input: {
        ...baseTheme.components.input,
        ...overrides.components?.input,
        sizes: {
          ...baseTheme.components.input.sizes,
          ...overrides.components?.input?.sizes,
        },
        states: {
          ...baseTheme.components.input.states,
          ...overrides.components?.input?.states,
        },
      },
      card: {
        ...baseTheme.components.card,
        ...overrides.components?.card,
      },
    },
  };

  // Auto-generate color shades if not provided
  const colorVariants: ColorVariant[] = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ];

  colorVariants.forEach((colorName) => {
    if (!theme.colorShades[colorName]) {
      theme.colorShades[colorName] = generateColorShades(
        theme.colors[colorName],
      );
    }
  });

  return theme;
};

// Generate theme variants (hover, active, etc.) for a color
export const generateColorVariants = (baseColor: string) => {
  return {
    base: baseColor,
    hover: darkenColor(baseColor, 0.1),
    active: darkenColor(baseColor, 0.2),
    disabled: lightenColor(baseColor, 0.3),
    light: lightenColor(baseColor, 0.4),
    lighter: lightenColor(baseColor, 0.6),
    dark: darkenColor(baseColor, 0.3),
    darker: darkenColor(baseColor, 0.5),
  };
};

// Get responsive breakpoint media queries
export const getBreakpointQueries = (theme: ThemeConfig) => {
  return {
    xs: `@media (min-width: ${theme.breakpoints.xs})`,
    sm: `@media (min-width: ${theme.breakpoints.sm})`,
    md: `@media (min-width: ${theme.breakpoints.md})`,
    lg: `@media (min-width: ${theme.breakpoints.lg})`,
    xl: `@media (min-width: ${theme.breakpoints.xl})`,
    "2xl": `@media (min-width: ${theme.breakpoints["2xl"]})`,
    maxXs: `@media (max-width: ${parseInt(theme.breakpoints.sm) - 1}px)`,
    maxSm: `@media (max-width: ${parseInt(theme.breakpoints.md) - 1}px)`,
    maxMd: `@media (max-width: ${parseInt(theme.breakpoints.lg) - 1}px)`,
    maxLg: `@media (max-width: ${parseInt(theme.breakpoints.xl) - 1}px)`,
    maxXl: `@media (max-width: ${parseInt(theme.breakpoints["2xl"]) - 1}px)`,
  };
};

// Get component styles for a specific variant and size
export const getComponentStyles = (
  theme: ThemeConfig,
  component: "button" | "input",
  size: SizeVariant = "md",
) => {
  const componentConfig = theme.components[component];

  if (component === "button") {
    return {
      ...componentConfig.sizes[size],
      transition: `all ${theme.transitions.duration.normal} ${theme.transitions.easing.easeInOut}`,
    };
  }

  if (component === "input") {
    return {
      ...componentConfig.sizes[size],
      transition: `all ${theme.transitions.duration.fast} ${theme.transitions.easing.easeInOut}`,
    };
  }

  return {};
};

// Generate CSS custom properties for a theme
export const generateCSSVariables = (theme: ThemeConfig): string => {
  const variables: string[] = [];

  // Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    variables.push(`--theme-${key}: ${value};`);
  });

  // Color shades
  Object.entries(theme.colorShades).forEach(([colorName, shades]) => {
    if (shades) {
      Object.entries(shades).forEach(([shade, value]) => {
        variables.push(`--theme-${colorName}-${shade}: ${value};`);
      });
    }
  });

  // Typography
  Object.entries(theme.typography.fontSize).forEach(([key, value]) => {
    variables.push(`--theme-font-size-${key}: ${value};`);
  });

  Object.entries(theme.typography.fontWeight).forEach(([key, value]) => {
    variables.push(`--theme-font-weight-${key}: ${value};`);
  });

  Object.entries(theme.typography.fontFamily).forEach(([key, value]) => {
    variables.push(`--theme-font-family-${key}: ${value};`);
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    variables.push(`--theme-spacing-${key}: ${value};`);
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    variables.push(`--theme-border-radius-${key}: ${value};`);
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    variables.push(`--theme-shadow-${key}: ${value};`);
  });

  // Transitions
  Object.entries(theme.transitions.duration).forEach(([key, value]) => {
    variables.push(`--theme-transition-duration-${key}: ${value};`);
  });

  Object.entries(theme.transitions.easing).forEach(([key, value]) => {
    variables.push(`--theme-transition-easing-${key}: ${value};`);
  });

  return `:root {\n  ${variables.join("\n  ")}\n}`;
};

// Validate theme configuration
export const validateTheme = (
  theme: ThemeConfig,
): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Check required colors
  const requiredColors: (keyof typeof theme.colors)[] = [
    "primary",
    "secondary",
    "background",
    "text",
  ];
  requiredColors.forEach((color) => {
    if (!theme.colors[color]) {
      errors.push(`Missing required color: ${color}`);
    }
  });

  // Check font sizes
  if (!theme.typography.fontSize.base) {
    errors.push("Missing base font size");
  }

  // Check spacing
  if (!theme.spacing[0] || !theme.spacing[4]) {
    errors.push("Missing essential spacing values");
  }

  // Check border radius
  if (!theme.borderRadius.base) {
    errors.push("Missing base border radius");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

// Create a theme variant (light/dark) from a base theme
export const createThemeVariant = (
  baseTheme: ThemeConfig,
  mode: "light" | "dark",
  overrides: Partial<ThemeConfig> = {},
): ThemeConfig => {
  const modeOverrides =
    mode === "dark"
      ? {
          colors: {
            ...baseTheme.colors,
            background: "#121212",
            surface: "#1e1e1e",
            text: "#ffffff",
            textSecondary: "#adb5bd",
            border: "#495057",
            borderLight: "#343a40",
          },
          shadows: {
            ...baseTheme.shadows,
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.2)",
            base: "0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
            "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.4)",
          },
        }
      : {};

  return createTheme(baseTheme, { ...modeOverrides, ...overrides, mode });
};
