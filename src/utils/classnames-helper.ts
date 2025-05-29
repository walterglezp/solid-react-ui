export type ClassMap = Record<string, boolean>;

export const generateClassnames = (classMap: ClassMap): string => {
  return Object.entries(classMap)
    .filter(([_, enabled]) => enabled)
    .map(([className]) => className)
    .join(" ");
};
