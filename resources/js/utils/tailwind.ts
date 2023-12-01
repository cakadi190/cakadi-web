/**
 * Merges an array of CSS classes into a single string.
 *
 * @param classes - The array of CSS classes to merge.
 * @returns The merged CSS classes as a string.
 */
export const twMerge = (...classes: string[]): string => {
  return classes.join(" ");
};

/**
 * Get color (black/white) depending on bgColor so it would be clearly seen.
 * @param {string} bgColor - Background color in hex format.
 * @returns {string}
 */
export function getTextFromBg(bgColor: string) {
  let r = bgColor.substring(1, 3);
  let g = bgColor.substring(3, 5);
  let b = bgColor.substring(5, 7);

  const bgDelta =
    parseInt(r, 16) * 0.2 + parseInt(g, 16) * 0.5 + parseInt(b, 16) * 0.114;
  return 255 - bgDelta < 105 ? "#000" : "#fff";
}
