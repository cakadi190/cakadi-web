import { twMerge } from "tailwind-merge";
import { sans } from "@/utils/fonts";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";
import { convertDate } from "@/utils/dayFormatter";
import { useRef } from "react";
import LocaleSwitcher from "./partials/lang-switch";
import DarkMode from "./partials/dark-mode";
import Logo from "./partials/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavigationMenu() {
  const t = useTranslations();
  const pathname = usePathname();
  
  const items = useRef([
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Saya', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pendidikan', href: '/education' },
    { name: 'Karir', href: '/career' },
    { name: 'Hubungi Saya', href: '/contact-me' },
  ]);

  return (
    <nav className="nav-menu">
      <ul className="nav">
        {items.current.map((item) => (
          <li key={item.name} className={twMerge("nav-item", pathname == item.href ? 'active' : '')}>
            <Link href={item.href} className={twMerge("nav-link", pathname == item.href ? 'active' : '')}>{t(item.name)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  const t = useTranslations();

  return (
    <footer>
      <p className="text-sm opacity-75">{t("Hak Cipta")} © 2023-{new Date().getFullYear()} <a href="https://github.com/cakadi190" target="_blank" rel="noreferrer">Cak Adi</a>.</p>
    </footer>
  );
}

function Greeting() {  
  const t = useTranslations();
  
  return (
    <div className="mt-4 mb-3">
      <h1 className={twMerge(sans.className, "main-title mb-0")}>{t('Selamat Datang')}</h1>
      <p className={twMerge(sans.className, "main-subtitle opacity-75")}>{t('Diperbaharui pada {date}', { date: convertDate('2024-08-07', 'LL') })}</p>
    </div>
  );
}

export function Sidebar() {
  const locale = useLocale() as Locale;

  return (
    <aside id="sidebar">
      <Logo />
      <Greeting />
      <DarkMode />
      <LocaleSwitcher />
      <NavigationMenu />
      <Footer />
    </aside>
  );
}