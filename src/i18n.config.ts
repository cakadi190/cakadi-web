// i18n.config.ts

import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["id", "en", "jv", "es", "fr"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = {
  "en": "English",
  "id": "Bahasa Indonesia",
  "jv": "Boso Jowo",
  "es": "Español",
  "fr": "Français",
};

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });