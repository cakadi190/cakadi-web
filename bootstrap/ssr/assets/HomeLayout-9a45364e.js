import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { FaFacebook, FaStackOverflow, FaFigma, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa/index.esm.js";
import { RiTwitterXFill, RiCloseLine, RiBarChartHorizontalLine, RiHome2Fill, RiProfileFill, RiFilePaperFill, RiTrophyFill, RiBriefcase2Fill, RiGraduationCapFill, RiFilePaper2Fill } from "react-icons/ri/index.esm.js";
import { a as ApplicationLogoAlt } from "./ApplicationLogo-91fe4a73.js";
import { N as NavLink } from "./NavLink-dc9632a1.js";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { useState, useEffect } from "react";
const asset = (path) => {
  return `/assets/${path}`;
};
const storage = (path) => {
  return `/storage/${path}`;
};
function SocialMediaPartial({
  socialMedia
}) {
  return socialMedia.map((data, index) => /* @__PURE__ */ jsx(
    "a",
    {
      className: "hover:text-white text-lg duration-200 transition-all",
      "aria-label": "Cak Adi's Facebook",
      href: data.url,
      children: data.icon
    },
    index
  ));
}
function FooterLinks({ links }) {
  return links.map((data, index) => /* @__PURE__ */ jsx("li", { children: data.internal ? /* @__PURE__ */ jsx(
    Link,
    {
      href: data.url,
      className: "text-white transition-all duration-200 hover:text-gray-300",
      children: data.title
    }
  ) : /* @__PURE__ */ jsx(
    "a",
    {
      className: "text-white transition-all duration-200 hover:text-gray-300",
      href: data.url,
      target: data.openNewTab ? "_blank" : "_self",
      children: data.title
    }
  ) }, index));
}
function FooterWidget({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-bold mb-3 font-heading", children: title }),
    Array.isArray(children) ? children : [children]
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "footer-main text-gray-300 bg-gray-900 border-t border-transparent dark:bg-gray-900/[.25] pb-6 pt-12 dark:border-gray-800", children: [
    /* @__PURE__ */ jsx("div", { className: "container mx-auto pb-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6", children: /* @__PURE__ */ jsxs(FooterWidget, { title: "Tentang Saya", children: [
        /* @__PURE__ */ jsx("p", { children: "Saya adalah seorang fullstack website developer asli dari Bumi Kartonyono Medot Janji (Kabupaten Ngawi, Jawa Timur) yang suka ngulik soal teknologi dan suka jalan-jalan sendirian." }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-3 mt-4", children: /* @__PURE__ */ jsx(
          SocialMediaPartial,
          {
            socialMedia: [
              {
                name: "Facebook",
                url: "https://www.facebook.com/cakadi190",
                icon: /* @__PURE__ */ jsx(FaFacebook, {})
              },
              {
                name: "StackOverflow",
                url: "https://stackoverflow.com/users/17911271/amir-zuhdi-wibowo",
                icon: /* @__PURE__ */ jsx(FaStackOverflow, {})
              },
              {
                name: "Twitter",
                url: "https://www.twitter.com/cakadi190",
                icon: /* @__PURE__ */ jsx(RiTwitterXFill, {})
              },
              {
                name: "Figma",
                url: "https://www.figma.com/@cakadi190",
                icon: /* @__PURE__ */ jsx(FaFigma, {})
              },
              {
                name: "Instagram",
                url: "https://www.instagram.com/cakadi190",
                icon: /* @__PURE__ */ jsx(FaInstagram, {})
              },
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/in/cakadi190",
                icon: /* @__PURE__ */ jsx(FaLinkedin, {})
              }
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-2", children: /* @__PURE__ */ jsx(FooterWidget, { title: "Kenali Saya", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(
        FooterLinks,
        {
          links: [
            { title: "Karir", url: "/about-me/career", internal: true },
            {
              title: "Pendidikan",
              url: "/about-me/education",
              internal: true
            },
            {
              title: "Galeri",
              url: "/about-me/gallery",
              internal: true
            },
            {
              title: "Penghargaan",
              url: "/about-me/penghargaan",
              internal: true
            },
            {
              title: "Skill & Perkakas",
              url: "/about-me/skill-and-tools",
              internal: true
            },
            {
              title: "Layanan",
              url: "/about-me/services",
              internal: true
            },
            {
              title: "Portofolio Saya",
              url: "/portofolio",
              internal: true
            }
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-2", children: /* @__PURE__ */ jsx(FooterWidget, { title: "Sumber Daya", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(
        FooterLinks,
        {
          links: [
            {
              title: "Blog Pribadi",
              url: "https://www.catatancakadi.my.id",
              openNewTab: true
            },
            {
              title: "Referensi Ngoding",
              url: "/resources/code-learning",
              internal: true
            },
            {
              title: "Contekan Kode",
              url: "/resources/snippet-code",
              internal: true
            },
            {
              title: "Tempat Ngopi",
              url: "/resources/tempat-ngopi",
              internal: true
            }
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-2", children: /* @__PURE__ */ jsx(FooterWidget, { title: "Tautan Lain-lain", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx(
        FooterLinks,
        {
          links: [
            {
              title: "Kredit",
              url: "/kredit",
              internal: true
            },
            {
              title: "Donasi Di trakteer.id",
              url: "https://trakteer.id/cakadi190",
              openNewTab: true
            },
            {
              title: "Donasi Di ko-fi.com",
              url: "https://ko-fi.com/cakadi190",
              openNewTab: true
            }
          ]
        }
      ) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center pt-8 border-t border-gray-800 flex-col lg:text-left lg:flex-row dark:text-gray-400 lg:max-w-7xl flex justify-between", children: [
      /* @__PURE__ */ jsxs("p", { children: [
        "© 2003-",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-white duration-200 transition-all hover:text-green-400",
            href: "https://www.cakadi.my.id",
            children: "Cak Adi"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-1 justify-center md:justify-end", children: [
        "Made with ",
        /* @__PURE__ */ jsx(FaHeart, { className: "text-pink-500" }),
        " by",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-white duration-200 transition-all hover:text-green-400",
            href: "https://www.dasakreativa.web.id",
            children: "Dasa Kreativa Studio"
          }
        ),
        "."
      ] })
    ] })
  ] });
}
function MenuItem() {
  const menuList = [
    { label: "Beranda", icon: /* @__PURE__ */ jsx(RiHome2Fill, {}), href: "/", name: "home" },
    {
      label: "Tentang",
      icon: /* @__PURE__ */ jsx(RiProfileFill, {}),
      href: "/about-me",
      name: "about-me"
    },
    {
      label: "Portofolio",
      href: "/portofolio",
      name: "portofolio.index",
      icon: /* @__PURE__ */ jsx(RiFilePaperFill, {})
    },
    {
      label: "Penghargaan",
      href: "/about-me/achievements",
      name: "achievements",
      icon: /* @__PURE__ */ jsx(RiTrophyFill, {})
    },
    {
      label: "Karir",
      icon: /* @__PURE__ */ jsx(RiBriefcase2Fill, {}),
      href: "/about-me/career",
      name: "career"
    },
    {
      label: "Pendidikan",
      href: "/about-me/education",
      name: "education",
      icon: /* @__PURE__ */ jsx(RiGraduationCapFill, {})
    },
    {
      label: "Kontak",
      icon: /* @__PURE__ */ jsx(RiFilePaper2Fill, {}),
      href: "/contact-me",
      name: "contact-me"
    }
  ];
  return menuList.map((data, index) => /* @__PURE__ */ jsxs(
    NavLink,
    {
      active: route().current() === data.name,
      className: "w-full md:w-auto gap-1 text-base items-center md:text-sm",
      href: data.href,
      children: [
        /* @__PURE__ */ jsx("span", { className: "md:hidden", children: data.icon }),
        data.label
      ]
    },
    index
  ));
}
function NavMobile({ show }) {
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: twMerge(
        "fixed top-0 left-0 shadow-lg h-screen md:hidden bg-white border-r z-50 flex duration-200 transition-all border-gray-300 flex-col rounded-r-xl w-[20rem] dark:border-slate-700 dark:bg-slate-900",
        !show ? "translate-x-[-20rem]" : "translate-x-0"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogoAlt, { height: 36 }) }) }),
        /* @__PURE__ */ jsx("div", { className: "p-4 flex border-t border-gray-100 flex-col gap-2", children: /* @__PURE__ */ jsx(MenuItem, {}) })
      ]
    }
  );
}
function NavbarMain() {
  const [show, setShow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
  });
  return /* @__PURE__ */ jsxs("nav", { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: twMerge(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrollHeight > 100 ? "bg-white dark:bg-slate-900 shadow-sm" : "bg-transparent dark:bg-transparent shadow-none"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "container py-3 mx-auto md:flex md:justify-between md:items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogoAlt, { height: 36 }) }) }),
            /* @__PURE__ */ jsx("div", { className: "flex md:hidden", children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300",
                "aria-label": "toggle menu",
                onClick: () => setShow(!show),
                children: show ? /* @__PURE__ */ jsx(RiCloseLine, { className: "!w-6 !h-6" }) : /* @__PURE__ */ jsx(RiBarChartHorizontalLine, { className: "!w-6 !h-6" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "items-center gap-1 hidden md:flex", children: /* @__PURE__ */ jsx(MenuItem, {}) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(NavMobile, { show })
  ] });
}
function HeaderPartial({ header }) {
  return /* @__PURE__ */ jsx("header", { className: "bg-gradient-to-t from-white min-h-[25vh] pt-28 pb-8", children: /* @__PURE__ */ jsx("div", { className: "container", children: header }) });
}
const HomeLayout = ({
  children,
  className,
  header
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        "bg-grid relative min-h-screen",
        className ?? ""
      ),
      children: [
        /* @__PURE__ */ jsx(NavbarMain, {}),
        header && /* @__PURE__ */ jsx(HeaderPartial, { header }),
        children,
        /* @__PURE__ */ jsx(Footer, {})
      ]
    }
  );
};
const HomeLayout$1 = HomeLayout;
export {
  HomeLayout$1 as H,
  asset as a,
  storage as s
};
