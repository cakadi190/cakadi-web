/**
 * Merges an array of CSS classes into a single string.
 *
 * @param classes - The array of CSS classes to merge.
 * @returns The merged CSS classes as a string.
 */
export const twMerge = (...classes: string[]): string => {
  return classes.join(" ");
};
