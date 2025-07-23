import { ThemeConfig } from '../types/theme.types';
import {
  lightColorPalette,
  darkColorPalette,
  primaryShades,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
  componentVariants,
} from './tokens';

// Light theme preset
export const lightTheme: ThemeConfig = {
  name: 'light',
  mode: 'light',
  colors: lightColorPalette,
  colorShades: {
    primary: primaryShades,
  },
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  zIndex,
  transitions,
  components: componentVariants,
};

// Dark theme preset
export const darkTheme: ThemeConfig = {
  name: 'dark',
  mode: 'dark',
  colors: darkColorPalette,
  colorShades: {
    primary: primaryShades,
  },
  typography,
  spacing,
  borderRadius,
  shadows: {
    ...shadows,
    // Darker shadows for dark theme
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.2)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.4)',
  },
  breakpoints,
  zIndex,
  transitions,
  components: componentVariants,
};

// Corporate/Professional theme preset
export const corporateTheme: ThemeConfig = {
  name: 'corporate',
  mode: 'light',
  colors: {
    ...lightColorPalette,
    primary: '#1e40af',
    secondary: '#64748b',
    success: '#059669',
    info: '#0284c7',
    warning: '#d97706',
    danger: '#dc2626',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    borderLight: '#f1f5f9',
    focus: '#3b82f6',
  },
  colorShades: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#1e40af',
      600: '#1d4ed8',
      700: '#1e3a8a',
      800: '#1e3a8a',
      900: '#1e3a8a',
      950: '#172554',
    },
  },
  typography: {
    ...typography,
    fontFamily: {
      base: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      monospace: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },
  spacing,
  borderRadius: {
    ...borderRadius,
    base: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
  },
  shadows,
  breakpoints,
  zIndex,
  transitions,
  components: componentVariants,
};

// Minimal theme preset
export const minimalTheme: ThemeConfig = {
  name: 'minimal',
  mode: 'light',
  colors: {
    ...lightColorPalette,
    primary: '#000000',
    secondary: '#666666',
    success: '#22c55e',
    info: '#3b82f6',
    warning: '#f59e0b',
    danger: '#ef4444',
    background: '#ffffff',
    surface: '#fafafa',
    text: '#000000',
    textSecondary: '#666666',
    border: '#e5e5e5',
    borderLight: '#f5f5f5',
    focus: '#000000',
  },
  colorShades: {
    primary: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000',
      950: '#000000',
    },
  },
  typography,
  spacing,
  borderRadius: {
    ...borderRadius,
    base: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
  },
  shadows: {
    ...shadows,
    // Minimal shadows
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
  },
  breakpoints,
  zIndex,
  transitions,
  components: componentVariants,
};

// Collection of all themes
export const themes = {
  light: lightTheme,
  dark: darkTheme,
  corporate: corporateTheme,
  minimal: minimalTheme,
};

// Default theme
export const defaultTheme = lightTheme;

// Type for theme names
export type ThemePresetName = keyof typeof themes;

// Utility function to create a theme by merging with base theme
export const mergeTheme = (baseTheme: ThemeConfig, overrides: Partial<ThemeConfig>): ThemeConfig => {
  return {
    ...baseTheme,
    ...overrides,
    colors: {
      ...baseTheme.colors,
      ...overrides.colors,
    },
    typography: {
      ...baseTheme.typography,
      ...overrides.typography,
      fontSize: {
        ...baseTheme.typography.fontSize,
        ...overrides.typography?.fontSize,
      },
      fontFamily: {
        ...baseTheme.typography.fontFamily,
        ...overrides.typography?.fontFamily,
      },
    },
    borderRadius: {
      ...baseTheme.borderRadius,
      ...overrides.borderRadius,
    },
    spacing: {
      ...baseTheme.spacing,
      ...overrides.spacing,
    },
    shadows: {
      ...baseTheme.shadows,
      ...overrides.shadows,
    },
    components: {
      ...baseTheme.components,
      ...overrides.components,
    },
  };
};