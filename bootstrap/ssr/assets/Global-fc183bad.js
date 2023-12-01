import { jsxs, jsx } from "react/jsx-runtime";
import { a as asset } from "./HomeLayout-9a45364e.js";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import React, { forwardRef } from "react";
import { cva } from "cva";
import { Link } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa/index.esm.js";
const EmptyState = ({
  title,
  imageUrl,
  description,
  className
}) => {
  return /* @__PURE__ */ jsxs("div", { className: twMerge(
    "flex flex-col items-center justify-center",
    className ?? ""
  ), children: [
    /* @__PURE__ */ jsx("img", { src: imageUrl ?? asset("error-page/data-empty.svg"), alt: title, className: "w-96 mb-4" }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold", children: title ?? "Data Tidak Ditemukan" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: description ?? "Maaf, data yang akan ditampilkan tidak ada dalam daftar." })
  ] });
};
const badgeSize = {
  sm: ["px-2 py-1 text-xs", "rounded-md", "gap-1"],
  md: ["px-4 py-2 text-sm", "rounded-md", "gap-2"],
  lg: ["px-5 py-2.5 text-md", "rounded-xl", "gap-3"],
  xl: ["px-5 py-4 text-xl", "rounded-lg", "gap-4"]
};
const badgeSolid = {
  primary: [
    "text-white bg-green-500",
    "group-hover:bg-green-600 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  secondary: [
    "text-white bg-indigo-500",
    "group-hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  success: [
    "text-white bg-teal-500",
    "group-hover:bg-teal-600 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  danger: [
    "text-white bg-red-500",
    "group-hover:bg-red-600 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const badgeOutline = {
  "outline-primary": [
    "bg-transparent text-green-500 border border-green-500",
    "group-hover:bg-green-50 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "outline-secondary": [
    "bg-transparent text-indigo-500 border border-indigo-500",
    "group-hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "outline-success": [
    "bg-transparent text-teal-500 border border-teal-500",
    "group-hover:bg-teal-50 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "outline-danger": [
    "bg-transparent text-red-500 border border-red-500",
    "group-hover:bg-red-50 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const badgeGhost = {
  "ghost-primary": [
    "text-green-500",
    "group-hover:bg-green-600 group-hover:text-white focus:bg-green-700 focus:text-white focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "ghost-secondary": [
    "text-indigo-500",
    "group-hover:bg-indigo-600 group-hover:text-white focus:bg-indigo-700 focus:text-white focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "ghost-success": [
    "text-teal-500",
    "group-hover:bg-teal-600 group-hover:text-white focus:bg-teal-700 focus:text-white focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "ghost-danger": [
    "text-red-500",
    "group-hover:bg-red-600 group-hover:text-white focus:bg-red-700 focus:text-white focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const badgeLink = {
  "link-primary": [
    "text-green-500",
    "group-hover:bg-green-500 group-hover:text-white focus:bg-green-700 focus:text-white focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "link-secondary": [
    "text-indigo-500",
    "group-hover:bg-indigo-500 group-hover:text-white focus:bg-indigo-700 focus:text-white focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "link-success": [
    "text-teal-500",
    "group-hover:bg-teal-500 group-hover:text-white focus:bg-teal-700 focus:text-white focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "link-danger": [
    "text-red-500",
    "group-hover:bg-red-500 group-hover:text-white focus:bg-red-700 focus:text-white focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const badgeTint = {
  "tint-primary": [
    "text-green-500 bg-green-50",
    "group-hover:bg-green-100 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "tint-secondary": [
    "text-indigo-500 bg-indigo-50",
    "group-hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "tint-success": [
    "text-teal-500 bg-teal-50",
    "group-hover:bg-teal-100 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "tint-danger": [
    "text-red-500 bg-red-50",
    "group-hover:bg-red-100 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const badge = cva(
  "outline-0 outline-none duration-200 transition-all flex items-center",
  {
    variants: {
      variant: {
        ...badgeSolid,
        ...badgeOutline,
        ...badgeGhost,
        ...badgeTint,
        ...badgeLink
      },
      size: {
        ...badgeSize
      }
    },
    compoundVariants: [{ variant: "primary", size: "md" }],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
const Badge = forwardRef(
  ({ className, variant, size, tag, style, ...props }, ref) => {
    return React.createElement(tag ?? "span", {
      ...props,
      ref,
      className: badge({ className, variant, size }),
      style
    });
  }
);
function GlobalSection({
  children,
  className,
  containerClassName
}) {
  return /* @__PURE__ */ jsx("section", { className: twMerge(className, "bg-white py-16"), children: /* @__PURE__ */ jsx("div", { className: twMerge(containerClassName, "container"), children }) });
}
function GlobalSectionWithTitle({
  title,
  children,
  className,
  containerClassName,
  moreButton
}) {
  return /* @__PURE__ */ jsxs(
    GlobalSection,
    {
      className,
      containerClassName,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center mb-4 gap-1 md:gap-6", children: [
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
              children: title
            }
          ),
          moreButton && (moreButton.internal ? /* @__PURE__ */ jsxs(
            Link,
            {
              href: moreButton.link,
              className: "flex group w-fit items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { className: "z-10 bg-white", children: moreButton.title }),
                /* @__PURE__ */ jsx(FaArrowRight, { className: "invisible -ml-10 group-hover:visible group-hover:m-0 transition-all duration-200" })
              ]
            }
          ) : /* @__PURE__ */ jsxs(
            "a",
            {
              target: "_blank",
              href: moreButton.link,
              className: "flex group w-fit items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", { className: "z-10 bg-white", children: moreButton.title }),
                /* @__PURE__ */ jsx(FaArrowRight, { className: "invisible -ml-10 group-hover:visible group-hover:m-0 transition-all duration-200" })
              ]
            }
          ))
        ] }),
        Array.isArray(children) ? children : [children]
      ]
    }
  );
}
export {
  Badge as B,
  EmptyState as E,
  GlobalSection as G,
  GlobalSectionWithTitle as a
};
