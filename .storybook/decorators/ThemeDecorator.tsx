import React from "react";
import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "../../src/theme/ThemeProvider";
import {
  createStorybookTheme,
  DEFAULT_STORYBOOK_THEME,
  type StorybookThemeConfig,
} from "../../src/theme/storybook-utils";

// Global theme decorator that wraps all stories
export const withTheme: Decorator = (Story, context) => {
  // Get theme configuration from global parameters
  const themeConfig: StorybookThemeConfig = {
    preset: context.globals.themePreset || "light",
    customColors: {
      primary: context.globals.primaryColor || "#4d6bfe",
      secondary: DEFAULT_STORYBOOK_THEME.customColors.secondary,
      success: DEFAULT_STORYBOOK_THEME.customColors.success,
      danger: DEFAULT_STORYBOOK_THEME.customColors.danger,
      warning: DEFAULT_STORYBOOK_THEME.customColors.warning,
      info: DEFAULT_STORYBOOK_THEME.customColors.info,
    },
    customBorderRadius: {
      base: context.globals.borderRadius || "0.25rem",
      md: DEFAULT_STORYBOOK_THEME.customBorderRadius.md,
      lg: DEFAULT_STORYBOOK_THEME.customBorderRadius.lg,
    },
    customFontSizes: {
      base: DEFAULT_STORYBOOK_THEME.customFontSizes.base,
      lg: DEFAULT_STORYBOOK_THEME.customFontSizes.lg,
      xl: DEFAULT_STORYBOOK_THEME.customFontSizes.xl,
    },
    customSpacing: {
      base: DEFAULT_STORYBOOK_THEME.customSpacing.base,
      lg: DEFAULT_STORYBOOK_THEME.customSpacing.lg,
    },
  };

  // Create the theme from configuration
  const theme = createStorybookTheme(themeConfig);

  // Apply global styles for better story presentation
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.typography.fontFamily.base,
    fontSize: theme.typography.fontSize.base,
    lineHeight: theme.typography.lineHeight.normal,
    padding: "1rem",
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>
        <Story />
      </div>
    </ThemeProvider>
  );
};

// Theme information panel (optional addon for debugging)
export const ThemeInfoPanel: React.FC<{ config: StorybookThemeConfig }> = ({
  config,
}) => {
  const theme = createStorybookTheme(config);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing[3],
        fontSize: theme.typography.fontSize.sm,
        maxWidth: "300px",
        zIndex: 1000,
        boxShadow: theme.shadows.md,
      }}
    >
      <h4 style={{ margin: "0 0 8px 0", color: theme.colors.text }}>
        Current Theme: {config.preset}
      </h4>
      <div style={{ color: theme.colors.textSecondary }}>
        <div>Primary: {theme.colors.primary}</div>
        <div>Border Radius: {theme.borderRadius.base}</div>
        <div>Font Size: {theme.typography.fontSize.base}</div>
      </div>
    </div>
  );
};
