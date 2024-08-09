export const buildUrl = (url: string): string => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return new URL(url, baseUrl).href;
};

export const buildTitle = (title: string): string => {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  return `${title} • ${appName}`
}