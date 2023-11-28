import { ApplicationLogoAlt } from "@/components/ui/ApplicationLogo";
import NavLink from "@/components/ui/NavLink";
import { twMerge } from "@/utils/tailwind";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
  RiBarChartHorizontalLine,
  RiBriefcase2Fill,
  RiCloseLine,
  RiFilePaper2Fill,
  RiFilePaperFill,
  RiGraduationCapFill,
  RiHome2Fill,
  RiProfileFill,
  RiTrophyFill,
} from "react-icons/ri";

function MenuItem() {
  const menuList = [
    { label: "Beranda", icon: <RiHome2Fill />, href: "/", name: "home" },
    {
      label: "Tentang",
      icon: <RiProfileFill />,
      href: "/about-me",
      name: "about-me",
    },
    {
      label: "Portofolio",
      href: "/portofolio",
      name: "portofolio.index",
      icon: <RiFilePaperFill />,
    },
    {
      label: "Penghargaan",
      href: "/about-me/achievements",
      name: "achievements",
      icon: <RiTrophyFill />,
    },
    {
      label: "Karir",
      icon: <RiBriefcase2Fill />,
      href: "/about-me/career",
      name: "career",
    },
    {
      label: "Pendidikan",
      href: "/about-me/education",
      name: "education",
      icon: <RiGraduationCapFill />,
    },
    {
      label: "Kontak",
      icon: <RiFilePaper2Fill />,
      href: "/contact-me",
      name: "contact-me",
    },
  ];

  return menuList.map((data, index) => (
    <NavLink
      active={route().current() === data.name}
      className="w-full md:w-auto gap-1 text-base items-center md:text-sm"
      href={data.href}
      key={index}
    >
      <span className="md:hidden">{data.icon}</span>
      {data.label}
    </NavLink>
  ));
}

function NavMobile({ show }: { show: boolean }) {
  return (
    <aside
      className={twMerge(
        "fixed top-0 left-0 shadow-lg h-screen md:hidden bg-white border-r z-50 flex duration-200 transition-all border-gray-300 flex-col rounded-r-xl w-[20rem] dark:border-slate-700 dark:bg-slate-900",
        !show ? "translate-x-[-20rem]" : "translate-x-0"
      )}
    >
      <div className="p-4">
        <Link href="/">
          <ApplicationLogoAlt height={36} />
        </Link>
      </div>
      <div className="p-4 flex border-t border-gray-100 flex-col gap-2">
        <MenuItem />
      </div>
    </aside>
  );
}

export default function NavbarMain() {
  const [show, setShow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  });

  return (
    <nav>
      <div
        className={twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrollHeight > 100
            ? "bg-white dark:bg-slate-900 shadow-sm"
            : "bg-transparent dark:bg-transparent shadow-none"
        )}
      >
        <div className="container py-3 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/">
                <ApplicationLogoAlt height={36} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300"
                aria-label="toggle menu"
                onClick={() => setShow(!show)}
              >
                {show ? <RiCloseLine className="!w-6 !h-6" /> : <RiBarChartHorizontalLine className="!w-6 !h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="items-center gap-1 hidden md:flex">
            <MenuItem />
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <NavMobile show={show} />
    </nav>
  );
}
