import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { B as Badge, E as EmptyState, G as GlobalSection, a as GlobalSectionWithTitle } from "./Global-fc183bad.js";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { RiFilePdf2Fill, RiTimeFill, RiEye2Fill, RiCodeLine } from "react-icons/ri/index.esm.js";
import { B as Button } from "./index-4917b870.js";
import { Link, Head } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa/index.esm.js";
import { a as asset, s as storage, H as HomeLayout } from "./HomeLayout-9a45364e.js";
import { KotlinOriginal, LaravelOriginal, TypescriptOriginal, JavascriptOriginal, FigmaOriginal, NextjsOriginal, NodejsOriginal, FlutterOriginal, WordpressPlain, NuxtjsPlain, VuejsOriginal, BootstrapPlain, VscodeOriginal } from "@beta/devicons-react";
import { Tooltip } from "react-tooltip";
import "react";
import "cva";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-dc9632a1.js";
function FeaturedCard({ icon, title, desc }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: twMerge(
        "border-divider-light relative z-10 flex-1 rounded-2xl border bg-white",
        "dark:border-divider-dark dark:bg-slate-900"
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "border-divider-light absolute inset-x-0 inset-y-8 z-[-1] border-t",
              "dark:border-divider-dark"
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "border-divider-light absolute inset-y-0 inset-x-8 z-[-1] border-l",
              "dark:border-divider-dark"
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: twMerge("-mt-0.5"), children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: twMerge(
              "mt-4 mr-2 ml-4 flex items-center gap-6 rounded-full bg-slate-100",
              "dark:bg-slate-800"
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: twMerge("-m-2"), children: icon }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: twMerge(
                    "truncate py-2 pr-4 text-base font-bold text-slate-700",
                    "dark:text-slate-300 font-title"
                  ),
                  children: title
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "p-4 pl-12 text-sm text-slate-600",
              "dark:text-slate-400"
            ),
            children: desc
          }
        )
      ]
    }
  );
}
function Title() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "h3",
      {
        className: twMerge(
          twMerge(
            "font-bold relative text-3xl mb-3 w-fit pb-2 font-heading",
            "hover:text-green-500 transition-all duration-200"
          ),
          twMerge(
            "before:rounded-lg before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-1/4 before:h-1 before:bg-green-500 before:transition-all before:duration-200",
            "before:hover:w-[85%]"
          )
        ),
        children: "Tentang Saya"
      }
    ),
    /* @__PURE__ */ jsx("h3", { className: "font-title text-green-500 font-bold text-3xl md:text-5xl", children: "Web Developer, Desainer Grafis, Android Apps Dev" })
  ] });
}
function Description() {
  return /* @__PURE__ */ jsx("p", { className: "text-md mb-4 text-gray-500", children: "Saya adalah seorang fullstack web developer, junior android developer dan desainer grafis yang berasal dari Kota Ngawi, Jawa Timur. Saya memiliki pengalaman dalam membuat website dengan menggunakan teknologi Laravel, ReactJS, dan TailwindCSS. Saya juga memiliki pengalaman dalam membuat aplikasi android dengan menggunakan teknologi Kotlin dan Java. Saya juga memiliki pengalaman dalam membuat desain grafis dengan menggunakan aplikasi CorelDraw dan Adobe Illustrator." });
}
function ButtonCTA() {
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ jsx(Link, { href: "/about-me", children: /* @__PURE__ */ jsxs(Button, { children: [
      /* @__PURE__ */ jsx("span", { children: "Lihat Selengkapnya" }),
      /* @__PURE__ */ jsx(FaArrowRight, {})
    ] }) }),
    /* @__PURE__ */ jsx(Link, { href: "/contact-me", children: /* @__PURE__ */ jsx(Button, { variant: `ghost-primary`, children: "Hubungi Saya" }) })
  ] });
}
function IconSection({
  className,
  icon,
  title
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: twMerge(
        className,
        "bg-white absolute p-4 2xl:p-5 rounded-full shadow-lg border border-gray-300 transition-all duration-200 hover:scale-125"
      ),
      "data-tooltip-id": "profile-tech-circle",
      "data-tooltip-content": title,
      children: icon
    }
  );
}
function IconStacks({ icons }) {
  return icons.map((icon, index) => /* @__PURE__ */ jsx(
    IconSection,
    {
      title: icon.title,
      className: icon.className,
      icon: icon.icon
    },
    index
  ));
}
const ImageStack = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex justify-center items-center h-full aspect-square", children: [
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden border-gray-200 border-8 rounded-full w-56 2xl:w-72 h-56 2xl:h-72", children: /* @__PURE__ */ jsx("img", { loading: "lazy", src: asset("pp.png"), className: "w-full h-full" }) }),
    /* @__PURE__ */ jsx(
      IconStacks,
      {
        icons: [
          {
            className: "top-12 right-12",
            icon: /* @__PURE__ */ jsx(KotlinOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Kotlin"
          },
          {
            className: "top-12 left-12",
            icon: /* @__PURE__ */ jsx(LaravelOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Laravel"
          },
          {
            className: "top-0 left-0 right-0 mx-auto w-fit",
            icon: /* @__PURE__ */ jsx(TypescriptOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Typescript"
          },
          {
            className: "bottom-0 left-0 right-0 mx-auto w-fit",
            icon: /* @__PURE__ */ jsx(JavascriptOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Javascript"
          },
          {
            className: "bottom-0 top-0 bottom-0 my-auto h-fit left-0",
            icon: /* @__PURE__ */ jsx(FigmaOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Figma"
          },
          {
            className: "bottom-0 top-0 bottom-0 my-auto h-fit right-0",
            icon: /* @__PURE__ */ jsx(NextjsOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "NextJS"
          },
          {
            className: "bottom-12 right-12",
            icon: /* @__PURE__ */ jsx(NodejsOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "NodeJS"
          },
          {
            className: "bottom-12 left-12",
            icon: /* @__PURE__ */ jsx(FlutterOriginal, { className: "!w-8 2xl:!w-12 !h-8 2xl:!h-12" }),
            title: "Flutter"
          }
        ]
      }
    ),
    /* @__PURE__ */ jsx(Tooltip, { id: "profile-tech-circle", className: "!rounded-xl !bg-gray-900" })
  ] });
};
function HeaderCTA() {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center md:justify-start gap-2 mt-5", children: [
    /* @__PURE__ */ jsx(Link, { href: "/contact-me", className: "outline-0 outline-none", children: /* @__PURE__ */ jsx(Button, { size: "lg", children: "Hubungi Saya" }) }),
    /* @__PURE__ */ jsx("a", { href: "", target: "_blank", className: "outline-0 outline-none", children: /* @__PURE__ */ jsxs(
      Button,
      {
        size: "lg",
        variant: "ghost-primary",
        className: "!text-gray-500 hover:!text-white focus:!text-white",
        children: [
          /* @__PURE__ */ jsx(RiFilePdf2Fill, {}),
          /* @__PURE__ */ jsx("span", { children: "Resume" })
        ]
      }
    ) })
  ] });
}
function HeaderTitle() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("p", { className: "text-xl mb-2 text-green-700 font-light dark:text-green-500", children: "Halo rek! 👋 Kenalin nih, namaku…" }),
    /* @__PURE__ */ jsxs(
      "h1",
      {
        className: "text-4xl font-heading font-bold pb-3 text-gray-700 lg:pb-1 lg:text-6xl dark:text-gray-300",
        title: "Cak Adi",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-green-500 underline underline-offset-4", children: "A" }),
          "mir Zuh",
          /* @__PURE__ */ jsx("span", { className: "text-green-500 underline underline-offset-4", children: "di" }),
          " Wibowo"
        ]
      }
    ),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-400 md:mt-1 mb-2 md:mb-4", children: [
      "Yang bisa dan biasa dipanggil ",
      /* @__PURE__ */ jsx("strong", { children: "Cak Adi" }),
      "."
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-500 lg:text-xl dark:text-gray-400", children: "Fullstack website developer asli dari Bumi Kartonyono Medot Janji (Kabupaten Ngawi, Jawa Timur) yang suka ngulik soal teknologi dan suka jalan-jalan sendirian." })
  ] });
}
function StackTech() {
  const stackTechList = [
    {
      icon: /* @__PURE__ */ jsx(LaravelOriginal, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "Laravel"
    },
    {
      icon: /* @__PURE__ */ jsx(WordpressPlain, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "WordPress"
    },
    {
      icon: /* @__PURE__ */ jsx(NuxtjsPlain, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "NuxtJS"
    },
    {
      icon: /* @__PURE__ */ jsx(VuejsOriginal, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "VueJS"
    },
    {
      icon: /* @__PURE__ */ jsx(BootstrapPlain, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "Bootstrap"
    },
    {
      icon: /* @__PURE__ */ jsx(VscodeOriginal, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "Visual Studio Code"
    },
    {
      icon: /* @__PURE__ */ jsx(FigmaOriginal, { className: "!w-7 md:!w-9 !h-7 md:!h-9" }),
      title: "Figma"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
    /* @__PURE__ */ jsxs("p", { className: "text-lg mb-1", children: [
      /* @__PURE__ */ jsx("em", { children: "Stack Tech" }),
      " Andalan"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-nowrap gap-4 justify-center md:justify-start items-center", children: [
      stackTechList.map((stackTech, index) => /* @__PURE__ */ jsx(
        "div",
        {
          "data-tooltip-id": "stack-tech-tooltip",
          "data-tooltip-content": stackTech.title,
          className: "cursor-pointer",
          children: stackTech.icon
        },
        index
      )),
      /* @__PURE__ */ jsx(Tooltip, { id: "stack-tech-tooltip", className: "!rounded-xl" })
    ] })
  ] });
}
function HeaderInner() {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-2 text-center items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6 md:text-start", children: [
      /* @__PURE__ */ jsx(HeaderTitle, {}),
      /* @__PURE__ */ jsx(HeaderCTA, {}),
      /* @__PURE__ */ jsx(StackTech, {})
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-12 hidden md:inline-flex md:col-span-6", children: /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: asset("fotoku.min.png"),
        alt: "Cak Adi",
        className: "w-full"
      }
    ) })
  ] });
}
function PortofolioImage({ data, className }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: data.url,
      alt: data.name,
      className: twMerge(
        "rounded-xl aspect-[16/9] object-cover w-full border-b border-gray-300",
        className
      )
    }
  );
}
function PortofolioContent({ data }) {
  var _a;
  return /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold font-heading text-lg truncate", children: data.name }),
      /* @__PURE__ */ jsx(Badge, { variant: "primary", className: "self-center flex-shrink-0", size: "sm", children: data.category && ((_a = data.category[0]) == null ? void 0 : _a.name) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-0", children: data.description })
  ] });
}
function PortofolioCard({ data }) {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      href: route("portofolio.show", { id: data.id }),
      className: twMerge(
        "flex flex-col rounded-xl transition-all duration-200 border border-gray-200",
        "hover:shadow-md hover:shadow-gray-100 hover:border-green-500"
      ),
      children: [
        /* @__PURE__ */ jsx(
          PortofolioImage,
          {
            data: {
              name: data.name,
              url: storage(`uploads/${data.image}`)
            }
          }
        ),
        /* @__PURE__ */ jsx(PortofolioContent, { data })
      ]
    }
  );
}
function FeaturedSection() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:gap-8", children: [
    /* @__PURE__ */ jsx(
      FeaturedCard,
      {
        icon: /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "rounded-full bg-amber-300 p-3.5",
              "dark:bg-amber-900"
            ),
            children: /* @__PURE__ */ jsx(RiTimeFill, { className: twMerge("h-5 w-5 text-white") })
          }
        ),
        title: "Cepat & Tanggap",
        desc: "Mengerjakan proyek dengan cepat dan tanggap terhadap perubahan."
      }
    ),
    /* @__PURE__ */ jsx(
      FeaturedCard,
      {
        icon: /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "rounded-full bg-red-400 p-3.5",
              "dark:bg-pink-900"
            ),
            children: /* @__PURE__ */ jsx(RiEye2Fill, { className: twMerge("h-5 w-5 text-white") })
          }
        ),
        title: "Catchy & Simpel",
        desc: "Membuat tampilan website yang catchy dan simpel untuk dilihat dan digunakan."
      }
    ),
    /* @__PURE__ */ jsx(
      FeaturedCard,
      {
        icon: /* @__PURE__ */ jsx(
          "div",
          {
            className: twMerge(
              "rounded-full bg-green-400 p-3.5",
              "dark:bg-sky-900"
            ),
            children: /* @__PURE__ */ jsx(RiCodeLine, { className: twMerge("h-5 w-5 text-white") })
          }
        ),
        title: "Rapi & Teroptimasi",
        desc: "Menuliskan baris-baris kode yang rapi dan mudah dipahami semua orang."
      }
    )
  ] });
}
function AboutMe() {
  return /* @__PURE__ */ jsxs("div", { className: "grid gap-6 items-center grid-cols-12", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4", children: /* @__PURE__ */ jsx(Title, {}) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:inline-block md:col-span-4", children: /* @__PURE__ */ jsx(ImageStack, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-4", children: [
      /* @__PURE__ */ jsx(Description, {}),
      /* @__PURE__ */ jsx(ButtonCTA, {})
    ] })
  ] });
}
function PortofolioSection({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-12", children: data && data.length > 0 ? data.map((data2, index) => /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4", children: /* @__PURE__ */ jsx(PortofolioCard, { data: data2 }) }, index)) : /* @__PURE__ */ jsx(EmptyState, { className: "col-span-12" }) });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "pt-24 pb-16 md:pb-0 flex bg-gradient-to-t from-white from-[1%] to-transparent flex-col justify-center md:min-h-screen md:py-6", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx(HeaderInner, {}) }) });
}
function Welcome({
  portofolio
}) {
  return /* @__PURE__ */ jsxs(HomeLayout, { className: "flex flex-col justify-between min-h-screen", children: [
    /* @__PURE__ */ jsx(Head, { title: "Fullstack Web Developer" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(GlobalSection, { children: /* @__PURE__ */ jsx(FeaturedSection, {}) }),
    /* @__PURE__ */ jsx(GlobalSection, { children: /* @__PURE__ */ jsx(AboutMe, {}) }),
    /* @__PURE__ */ jsx(
      GlobalSectionWithTitle,
      {
        moreButton: { link: "/portofolio", title: "Selengkapnya", internal: true },
        title: "Portofolio Saya",
        children: /* @__PURE__ */ jsx(PortofolioSection, { data: portofolio })
      }
    )
  ] });
}
export {
  Welcome as default
};
