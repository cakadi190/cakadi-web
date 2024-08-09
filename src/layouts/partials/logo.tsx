import { useTheme } from "@/context/ThemeContext";
import useLocalStorage from "@/hooks/localstorage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Logo() {
  const { theme } = useTheme();
  const [logo, setLogo] = useState<string>('/images/brands/icon-color.svg');

  useEffect(() => {
    setLogo(theme === 'dark' 
      ? '/images/brands/icon-white.svg' 
      : '/images/brands/icon-color.svg');
  }, [theme]);

  return (
    <Image
      src={logo}
      width={100}
      priority={true}
      height={100}
      alt="Logo"
      className="logo"
    />
  )
}
