import { ThemeConfig } from "../types/theme.types";
import { themes, mergeTheme } from "./presets";

// Theme preset options for Storybook
export const THEME_PRESETS = {
  light: themes.light,
  dark: themes.dark,
  corporate: themes.corporate,
  minimal: themes.minimal,
} as const;

export type ThemePresetKey = keyof typeof THEME_PRESETS;

// Custom theme configuration for Storybook controls
export interface StorybookThemeConfig {
  preset: ThemePresetKey;
  customColors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
  };
  customBorderRadius: {
    base: string;
    md: string;
    lg: string;
  };
  customFontSizes: {
    base: string;
    lg: string;
    xl: string;
  };
  customSpacing: {
    base: string;
    lg: string;
  };
}

// Default Storybook theme configuration
export const DEFAULT_STORYBOOK_THEME: StorybookThemeConfig = {
  preset: "light",
  customColors: {
    primary: "#4d6bfe",
    secondary: "#6c757d",
    success: "#198754",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#0dcaf0",
  },
  customBorderRadius: {
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
  },
  customFontSizes: {
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  customSpacing: {
    base: "1rem",
    lg: "1.5rem",
  },
};

// Create theme from Storybook configuration
export const createStorybookTheme = (
  config: StorybookThemeConfig,
): ThemeConfig => {
  const baseTheme = THEME_PRESETS[config.preset];

  return mergeTheme(baseTheme, {
    colors: {
      ...baseTheme.colors,
      ...config.customColors,
    },
    borderRadius: {
      ...baseTheme.borderRadius,
      ...config.customBorderRadius,
    },
    typography: {
      ...baseTheme.typography,
      fontSize: {
        ...baseTheme.typography.fontSize,
        ...config.customFontSizes,
      },
    },
    spacing: {
      ...baseTheme.spacing,
      4: config.customSpacing.base,
      6: config.customSpacing.lg,
    },
  });
};

// Storybook control definitions
export const STORYBOOK_THEME_CONTROLS = {
  preset: {
    control: { type: "select" },
    options: Object.keys(THEME_PRESETS),
    description: "Choose a theme preset",
  },
  "customColors.primary": {
    control: { type: "color" },
    description: "Primary color",
  },
  "customColors.secondary": {
    control: { type: "color" },
    description: "Secondary color",
  },
  "customColors.success": {
    control: { type: "color" },
    description: "Success color",
  },
  "customColors.danger": {
    control: { type: "color" },
    description: "Danger color",
  },
  "customColors.warning": {
    control: { type: "color" },
    description: "Warning color",
  },
  "customColors.info": {
    control: { type: "color" },
    description: "Info color",
  },
  "customBorderRadius.base": {
    control: { type: "text" },
    description: "Base border radius (e.g., 0.25rem)",
  },
  "customBorderRadius.md": {
    control: { type: "text" },
    description: "Medium border radius (e.g., 0.375rem)",
  },
  "customBorderRadius.lg": {
    control: { type: "text" },
    description: "Large border radius (e.g., 0.5rem)",
  },
  "customFontSizes.base": {
    control: { type: "text" },
    description: "Base font size (e.g., 1rem)",
  },
  "customFontSizes.lg": {
    control: { type: "text" },
    description: "Large font size (e.g., 1.125rem)",
  },
  "customFontSizes.xl": {
    control: { type: "text" },
    description: "Extra large font size (e.g., 1.25rem)",
  },
  "customSpacing.base": {
    control: { type: "text" },
    description: "Base spacing (e.g., 1rem)",
  },
  "customSpacing.lg": {
    control: { type: "text" },
    description: "Large spacing (e.g., 1.5rem)",
  },
};

// Helper to get theme name for display
export const getThemeDisplayName = (config: StorybookThemeConfig): string => {
  const isCustomized =
    config.customColors.primary !==
      DEFAULT_STORYBOOK_THEME.customColors.primary ||
    config.customColors.secondary !==
      DEFAULT_STORYBOOK_THEME.customColors.secondary ||
    config.customBorderRadius.base !==
      DEFAULT_STORYBOOK_THEME.customBorderRadius.base ||
    config.customFontSizes.base !==
      DEFAULT_STORYBOOK_THEME.customFontSizes.base;

  return isCustomized ? `${config.preset} (customized)` : config.preset;
};

// Export theme configuration as JSON
export const exportThemeConfig = (config: StorybookThemeConfig): string => {
  const theme = createStorybookTheme(config);
  return JSON.stringify(theme, null, 2);
};

// Export theme configuration as TypeScript
export const exportThemeConfigAsTypeScript = (
  config: StorybookThemeConfig,
): string => {
  const theme = createStorybookTheme(config);
  return `import { ThemeConfig } from 'solid-react-ui';

export const customTheme: ThemeConfig = ${JSON.stringify(theme, null, 2)};`;
};
