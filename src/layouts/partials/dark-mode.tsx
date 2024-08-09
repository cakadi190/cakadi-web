import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { sans } from "../../utils/fonts";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setIsClient(true); // Menandakan bahwa client-side rendering sudah selesai
  }, []);

  const toggleTheme = (selectedTheme: string = 'light') => {
    document.body.setAttribute('data-bs-theme', selectedTheme);
    setTheme(selectedTheme);
  };

  const isTheme = (selectedTheme: string = 'light') => {
    return selectedTheme === theme;
  };

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div className="darkmode-toggler">
      <button
        className={twMerge(sans.className, isClient && isTheme('light') ? 'current' : '')}
        onClick={() => toggleTheme('light')}
      >
        <FaSun />
        {t('Terang')}
      </button>
      <button
        className={twMerge(sans.className, isClient && isTheme('dark') ? 'current' : '')}
        onClick={() => toggleTheme('dark')}
      >
        <FaMoon />
        {t('Gelap')}
      </button>
    </div>
  );
}
