// Theme system exports
export * from './ThemeProvider';
export * from './presets';
export * from './tokens';

// Re-export types for easier imports
export type {
  ThemeConfig,
  ThemeContextValue,
  ColorVariant,
  SizeVariant,
  SpacingScale,
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
} from '../types/theme.types';

// Re-export utilities
export * from '../utils/theme-utils';
export * from '../utils/color-utils';