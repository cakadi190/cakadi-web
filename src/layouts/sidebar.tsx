import { twMerge } from "tailwind-merge";
import { sans } from "@/utils/fonts";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";
import { convertDate } from "@/utils/dayFormatter";
import { RefObject, useRef } from "react";
import LocaleSwitcher from "./partials/lang-switch";
import DarkMode from "./partials/dark-mode";
import Logo from "./partials/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavigationItem from "@/components/NavItems";

function NavigationMenu() {
  const t = useTranslations();
  const pathname = usePathname();

  const items = useRef([
    { name: "Beranda", href: "/" },
    { name: "Tentang Saya", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pendidikan", href: "/education" },
    { name: "Karir", href: "/career" },
    { name: "Hubungi Saya", href: "/contact-me" },
    { name: "Catatan Saya", href: "https://blog.cakadi.id" },
  ]);

  return (
    <nav className="nav-menu">
      <ul className="nav">
        {items.current.map((item) => (
          <NavigationItem
            key={item.name}
            name={item.name}
            href={item.href}
            isActive={pathname === item.href}
            translate={t}
          />
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  const t = useTranslations();

  return (
    <footer>
      <p className="text-sm opacity-75">
        {t("Hak Cipta")} © 2023-{new Date().getFullYear()}{" "}
        <a href="https://github.com/cakadi190" target="_blank" rel="noreferrer">
          Cak Adi
        </a>
        .
      </p>
    </footer>
  );
}

function Greeting() {
  const t = useTranslations();

  return (
    <div className="mt-4 mb-3">
      <h1 className={twMerge(sans.className, "main-title mb-0")}>
        {t("Selamat Datang")}
      </h1>
      <p className={twMerge(sans.className, "main-subtitle opacity-75")}>
        {t("Diperbaharui pada {date}", {
          date: convertDate("2024-08-07", "LL"),
        })}
      </p>
    </div>
  );
}

interface SidebarTogglerProps {
  refElement: RefObject<HTMLElement>;
}

function SidebarToggler({ refElement }: SidebarTogglerProps) {
  return (
    <button
      className="sidebar-toggler"
      onClick={() => {
        refElement.current?.classList.toggle("open");
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export function Sidebar() {
  const sidebarRef = useRef<HTMLElement>(null);
  
  return (
    <>
      <aside className={sans.className} id="sidebar" ref={sidebarRef}>
        <Logo />
        <Greeting />
        <DarkMode />
        <LocaleSwitcher />
        <NavigationMenu />
        <Footer />
      </aside>

      <SidebarToggler refElement={sidebarRef} />
    </>
  );
}
