import { jsxs, jsx } from "react/jsx-runtime";
import { a as asset } from "./HomeLayout-15fea589.js";
import { t as twMerge } from "./tailwind-b306cda1.js";
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
  EmptyState as E,
  GlobalSection as G,
  GlobalSectionWithTitle as a
};
