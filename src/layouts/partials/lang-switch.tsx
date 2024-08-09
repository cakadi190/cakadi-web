import { useLocale, useTranslations } from "next-intl";
import { localeNames, locales } from "@/i18n.config";
import { useRouter } from "next/router";
import LocaleSwitcherSelect from "@/components/LangSwitcher";
import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import jQuery from "jquery";

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();

  const router = useRouter();
  const pathname = router.asPath;

  useEffect(() => {
    jQuery('html').attr('lang', locale);
  }, [locale]);

  // Mendefinisikan ulang semua array locales
  // untuk menjadi sebuah type data layaknya number, string, dll.
  type Locales = typeof locales[number];

  // Mengubah bahasa
  // Yang dipicu oleh menu dropdown ketika di klik
  const changeLocale = (localeTarget: Locales) => {
    router.push(pathname, undefined, { locale: localeTarget });
  };

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("Ganti Bahasa")}>
      {locales.map((cur) => (
        <Dropdown.Item key={cur} active={locale === cur} onClick={() => changeLocale(cur)}>
          {localeNames[cur]}
        </Dropdown.Item>
      ))}
    </LocaleSwitcherSelect>
  );
}
