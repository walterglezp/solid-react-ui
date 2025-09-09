import {
  ColorPalette,
  ColorShades,
  Typography,
  Spacing,
  BorderRadius,
  Shadows,
  Breakpoints,
  ZIndex,
  Transitions,
  ComponentVariants,
} from "../types/theme.types";

// Color palette for light theme
export const lightColorPalette: ColorPalette = {
  primary: "#4d6bfe",
  secondary: "#6c757d",
  success: "#198754",
  info: "#0dcaf0",
  warning: "#ffc107",
  danger: "#dc3545",
  light: "#f8f9fa",
  dark: "#212529",
  muted: "#6c757d",
  white: "#ffffff",
  black: "#000000",
  background: "#ffffff",
  surface: "#f8f9fa",
  text: "#212529",
  textSecondary: "#6c757d",
  border: "#dee2e6",
  borderLight: "#e9ecef",
  focus: "#86b7fe",
};

// Color palette for dark theme
export const darkColorPalette: ColorPalette = {
  primary: "#6c7fff",
  secondary: "#8a8e96",
  success: "#20c997",
  info: "#17a2b8",
  warning: "#ffd43b",
  danger: "#fa5252",
  light: "#495057",
  dark: "#343a40",
  muted: "#adb5bd",
  white: "#ffffff",
  black: "#000000",
  background: "#121212",
  surface: "#1e1e1e",
  text: "#ffffff",
  textSecondary: "#adb5bd",
  border: "#495057",
  borderLight: "#343a40",
  focus: "#86b7fe",
};

// Color shades for primary color
export const primaryShades: ColorShades = {
  50: "#f0f4ff",
  100: "#e5edff",
  200: "#d1ddff",
  300: "#b3c5ff",
  400: "#8da4ff",
  500: "#4d6bfe", // Base
  600: "#3b5bfd",
  700: "#2847fc",
  800: "#1a38f7",
  900: "#1230e8",
  950: "#0f2bd4",
};

// Typography system
export const typography: Typography = {
  fontFamily: {
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
  },
};

// Spacing system (based on 4px grid)
export const spacing: Spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
  40: "10rem", // 160px
  48: "12rem", // 192px
  56: "14rem", // 224px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

// Border radius system
export const borderRadius: BorderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Shadow system
export const shadows: Shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
};

// Breakpoint system
export const breakpoints: Breakpoints = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Z-index system
export const zIndex: ZIndex = {
  auto: "auto",
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  dropdown: 1000,
  modal: 1050,
  popover: 1070,
  tooltip: 1080,
  toast: 1090,
};

// Transition system
export const transitions: Transitions = {
  duration: {
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
  },
  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
};

// Component variants
export const componentVariants: ComponentVariants = {
  button: {
    sizes: {
      xs: {
        padding: "0.25rem 0.5rem",
        fontSize: "0.75rem",
        borderRadius: "0.125rem",
        height: "1.5rem",
      },
      sm: {
        padding: "0.375rem 0.75rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
        height: "2rem",
      },
      md: {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "0.375rem",
        height: "2.5rem",
      },
      lg: {
        padding: "0.75rem 1.5rem",
        fontSize: "1.125rem",
        borderRadius: "0.5rem",
        height: "3rem",
      },
      xl: {
        padding: "1rem 2rem",
        fontSize: "1.25rem",
        borderRadius: "0.75rem",
        height: "3.5rem",
      },
    },
    variants: {
      solid: {
        background: "var(--theme-primary)",
        border: "var(--theme-primary)",
        color: "var(--theme-white)",
        hover: {
          background: "var(--theme-primary-600)",
          border: "var(--theme-primary-600)",
        },
      },
      outline: {
        background: "transparent",
        border: "var(--theme-primary)",
        color: "var(--theme-primary)",
        hover: {
          background: "var(--theme-primary)",
          border: "var(--theme-primary)",
          color: "var(--theme-white)",
        },
      },
      ghost: {
        background: "transparent",
        border: "transparent",
        color: "var(--theme-primary)",
        hover: {
          background: "var(--theme-primary-50)",
          border: "transparent",
        },
      },
    },
  },
  input: {
    sizes: {
      xs: {
        padding: "0.25rem 0.5rem",
        fontSize: "0.75rem",
        borderRadius: "0.125rem",
        height: "1.5rem",
      },
      sm: {
        padding: "0.375rem 0.75rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
        height: "2rem",
      },
      md: {
        padding: "0.5rem 0.75rem",
        fontSize: "1rem",
        borderRadius: "0.375rem",
        height: "2.5rem",
      },
      lg: {
        padding: "0.75rem 1rem",
        fontSize: "1.125rem",
        borderRadius: "0.5rem",
        height: "3rem",
      },
      xl: {
        padding: "1rem 1.25rem",
        fontSize: "1.25rem",
        borderRadius: "0.75rem",
        height: "3.5rem",
      },
    },
    states: {
      default: {
        background: "var(--theme-white)",
        border: "var(--theme-border)",
        color: "var(--theme-text)",
        placeholder: "var(--theme-text-secondary)",
      },
      focus: {
        background: "var(--theme-white)",
        border: "var(--theme-focus)",
        boxShadow: "0 0 0 3px var(--theme-focus)",
      },
      error: {
        background: "var(--theme-white)",
        border: "var(--theme-danger)",
        boxShadow: "0 0 0 3px var(--theme-danger)",
      },
      disabled: {
        background: "var(--theme-surface)",
        border: "var(--theme-border-light)",
        color: "var(--theme-text-secondary)",
        cursor: "not-allowed",
      },
    },
  },
  card: {
    padding: "1.5rem",
    borderRadius: "0.5rem",
    background: "var(--theme-white)",
    border: "var(--theme-border)",
    shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
  },
};
