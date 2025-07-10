// Helper function to darken colors for hover states
export const darkenColor = (hex: string, amount = 0.2): string => {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * amount * 100);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, ((num >> 8) & 0x00ff) - amt);
  const B = Math.max(0, (num & 0x0000ff) - amt);
  return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};
