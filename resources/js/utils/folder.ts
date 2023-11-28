/**
 * Returns the asset path for the given file.
 * @param path - The file path.
 * @returns The asset path.
 */
const asset = (path: string) => {
  return `/assets/${path}`;
};

/**
 * Returns the asset image path.
 *
 * @param path - The path of the image.
 * @returns The asset image path.
 */
const assetImage = (path: string) => {
  return asset(`images/${path}`);
};

const storage = (path: string) => {
  return `/storage/${path}`;
};

export { asset, assetImage, storage };
