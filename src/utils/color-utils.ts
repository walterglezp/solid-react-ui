// Enhanced color utilities for the theme system

// Convert hex to RGB
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Convert RGB to hex
export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Darken a color by a percentage
export const darkenColor = (hex: string, amount = 0.2): string => {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * amount * 100);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, ((num >> 8) & 0x00ff) - amt);
  const B = Math.max(0, (num & 0x0000ff) - amt);
  return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

// Lighten a color by a percentage
export const lightenColor = (hex: string, amount = 0.2): string => {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * amount * 100);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
  const B = Math.min(255, (num & 0x0000ff) + amt);
  return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

// Adjust opacity of a color
export const adjustOpacity = (hex: string, opacity: number): string => {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const alpha = Math.max(0, Math.min(1, opacity));
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

// Get luminance of a color
export const getLuminance = (hex: string): number => {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  
  const { r, g, b } = rgb;
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;
  
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);
  
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
};

// Get contrast ratio between two colors
export const getContrastRatio = (color1: string, color2: string): number => {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

// Get appropriate text color (black or white) for a background
export const getContrastColor = (backgroundColor: string): string => {
  const whiteContrast = getContrastRatio(backgroundColor, '#ffffff');
  const blackContrast = getContrastRatio(backgroundColor, '#000000');
  
  return whiteContrast > blackContrast ? '#ffffff' : '#000000';
};

// Check if a color meets WCAG contrast requirements
export const meetsContrastRequirement = (
  foreground: string, 
  background: string, 
  level: 'AA' | 'AAA' = 'AA'
): boolean => {
  const contrast = getContrastRatio(foreground, background);
  return level === 'AA' ? contrast >= 4.5 : contrast >= 7;
};

// Generate color shades from a base color
export const generateColorShades = (baseColor: string) => {
  return {
    50: lightenColor(baseColor, 0.95),
    100: lightenColor(baseColor, 0.9),
    200: lightenColor(baseColor, 0.8),
    300: lightenColor(baseColor, 0.6),
    400: lightenColor(baseColor, 0.3),
    500: baseColor, // Base color
    600: darkenColor(baseColor, 0.1),
    700: darkenColor(baseColor, 0.2),
    800: darkenColor(baseColor, 0.3),
    900: darkenColor(baseColor, 0.4),
    950: darkenColor(baseColor, 0.5),
  };
};

// Mix two colors together
export const mixColors = (color1: string, color2: string, ratio = 0.5): string => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return color1;
  
  const r = Math.round(rgb1.r * (1 - ratio) + rgb2.r * ratio);
  const g = Math.round(rgb1.g * (1 - ratio) + rgb2.g * ratio);
  const b = Math.round(rgb1.b * (1 - ratio) + rgb2.b * ratio);
  
  return rgbToHex(r, g, b);
};

// Convert color to HSL
export const hexToHsl = (hex: string): { h: number; s: number; l: number } | null => {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  
  const { r, g, b } = rgb;
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const diff = max - min;
  
  let h = 0;
  const s = max === 0 ? 0 : diff / max;
  const l = (max + min) / 2;
  
  if (diff !== 0) {
    switch (max) {
      case rNorm:
        h = ((gNorm - bNorm) / diff) % 6;
        break;
      case gNorm:
        h = (bNorm - rNorm) / diff + 2;
        break;
      case bNorm:
        h = (rNorm - gNorm) / diff + 4;
        break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
};

// Convert HSL to hex
export const hslToHex = (h: number, s: number, l: number): string => {
  const hNorm = h / 360;
  const sNorm = s / 100;
  const lNorm = l / 100;
  
  const c = (1 - Math.abs(2 * lNorm - 1)) * sNorm;
  const x = c * (1 - Math.abs(((hNorm * 6) % 2) - 1));
  const m = lNorm - c / 2;
  
  let r = 0, g = 0, b = 0;
  
  if (hNorm >= 0 && hNorm < 1/6) {
    r = c; g = x; b = 0;
  } else if (hNorm >= 1/6 && hNorm < 2/6) {
    r = x; g = c; b = 0;
  } else if (hNorm >= 2/6 && hNorm < 3/6) {
    r = 0; g = c; b = x;
  } else if (hNorm >= 3/6 && hNorm < 4/6) {
    r = 0; g = x; b = c;
  } else if (hNorm >= 4/6 && hNorm < 5/6) {
    r = x; g = 0; b = c;
  } else if (hNorm >= 5/6 && hNorm < 1) {
    r = c; g = 0; b = x;
  }
  
  const rFinal = Math.round((r + m) * 255);
  const gFinal = Math.round((g + m) * 255);
  const bFinal = Math.round((b + m) * 255);
  
  return rgbToHex(rFinal, gFinal, bFinal);
};

// Adjust color saturation
export const adjustSaturation = (hex: string, amount: number): string => {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  const newSaturation = Math.max(0, Math.min(100, hsl.s + amount));
  return hslToHex(hsl.h, newSaturation, hsl.l);
};

// Adjust color lightness
export const adjustLightness = (hex: string, amount: number): string => {
  const hsl = hexToHsl(hex);
  if (!hsl) return hex;
  
  const newLightness = Math.max(0, Math.min(100, hsl.l + amount));
  return hslToHex(hsl.h, hsl.s, newLightness);
};

// Validate if a string is a valid hex color
export const isValidHex = (hex: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
};