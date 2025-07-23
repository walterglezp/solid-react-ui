export type ColorVariant = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type SpacingScale = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

export interface ColorPalette {
  primary: string;
  secondary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  light: string;
  dark: string;
  muted: string;
  white: string;
  black: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  borderLight: string;
  focus: string;
}

export interface ColorShades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string; // Base color
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface Typography {
  fontFamily: {
    base: string;
    heading: string;
    monospace: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
  40: string;
  48: string;
  56: string;
  64: string;
  72: string;
  80: string;
  96: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

export interface Shadows {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

export interface Breakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ZIndex {
  auto: string;
  0: number;
  10: number;
  20: number;
  30: number;
  40: number;
  50: number;
  dropdown: number;
  modal: number;
  popover: number;
  tooltip: number;
  toast: number;
}

export interface Transitions {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    ease: string;
    easeIn: string;
    easeOut: string;
    easeInOut: string;
    bounce: string;
  };
}

export interface ComponentVariants {
  button: {
    sizes: {
      xs: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      sm: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      md: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      lg: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      xl: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
    };
    variants: {
      solid: {
        background: string;
        border: string;
        color: string;
        hover: {
          background: string;
          border: string;
        };
      };
      outline: {
        background: string;
        border: string;
        color: string;
        hover: {
          background: string;
          border: string;
          color: string;
        };
      };
      ghost: {
        background: string;
        border: string;
        color: string;
        hover: {
          background: string;
          border: string;
        };
      };
    };
  };
  input: {
    sizes: {
      xs: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      sm: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      md: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      lg: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
      xl: {
        padding: string;
        fontSize: string;
        borderRadius: string;
        height: string;
      };
    };
    states: {
      default: {
        background: string;
        border: string;
        color: string;
        placeholder: string;
      };
      focus: {
        background: string;
        border: string;
        boxShadow: string;
      };
      error: {
        background: string;
        border: string;
        boxShadow: string;
      };
      disabled: {
        background: string;
        border: string;
        color: string;
        cursor: string;
      };
    };
  };
  card: {
    padding: string;
    borderRadius: string;
    background: string;
    border: string;
    shadow: string;
  };
}

export interface ThemeConfig {
  name: string;
  mode: 'light' | 'dark';
  colors: ColorPalette;
  colorShades: Partial<Record<ColorVariant, ColorShades>>;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
  shadows: Shadows;
  breakpoints: Breakpoints;
  zIndex: ZIndex;
  transitions: Transitions;
  components: ComponentVariants;
}

// Main theme context type
export type ThemeContextValue = ThemeConfig;

