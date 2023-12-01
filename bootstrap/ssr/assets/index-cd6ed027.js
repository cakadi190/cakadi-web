import { jsxs, jsx } from "react/jsx-runtime";
import { D as Dropdown } from "./Dropdown-18a9895b.js";
import { T as TextInput } from "./TextInput-a083da08.js";
import { usePage, router, Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { s as storage, H as HomeLayout } from "./HomeLayout-9a45364e.js";
import { B as Badge, G as GlobalSection, E as EmptyState } from "./Global-fc183bad.js";
import "@headlessui/react";
import "react-icons/fa/index.esm.js";
import "react-icons/ri/index.esm.js";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-dc9632a1.js";
import "cva";
function SearchForm() {
  const [query, setQuery] = useState("");
  const { request } = usePage().props;
  const onChangeForm = (e) => {
    setQuery(e.target.value);
    const params = {
      search: e.target.value || void 0,
      page: request == null ? void 0 : request.page,
      show: request == null ? void 0 : request.show
    };
    router.get(route(route().current()), params, {
      preserveState: true,
      replace: true
    });
  };
  useEffect(() => {
    setQuery((request == null ? void 0 : request.search) ?? "");
  }, []);
  return /* @__PURE__ */ jsx(
    TextInput,
    {
      className: "w-full",
      onChange: onChangeForm,
      value: query,
      placeholder: "Cari portofolio saya…"
    }
  );
}
function DropdownShowData() {
  const { request } = usePage().props;
  const [show, setShow] = useState((request == null ? void 0 : request.show) ? parseInt(request.show) : 12);
  const [showItems] = useState([6, 12, 24, 48, 56, 64, 72, 80, 88, 96]);
  return /* @__PURE__ */ jsxs(Dropdown, { children: [
    /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
        children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Show ",
            show,
            " Data"
          ] }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "ms-2 -me-0.5 h-4 w-4",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              )
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(Dropdown.Content, { align: "right", children: showItems.map((item, i) => /* @__PURE__ */ jsx(
      Dropdown.Link,
      {
        href: route(route().current(), {
          search: request == null ? void 0 : request.search,
          page: request == null ? void 0 : request.page,
          show: item || (request == null ? void 0 : request.show)
        }),
        className: item === show && "bg-gray-200",
        onClick: () => setShow(item),
        children: item
      },
      i
    )) })
  ] });
}
function HeaderSearchPartial() {
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "col-span-6 md:col-span-4", children: /* @__PURE__ */ jsx(SearchForm, {}) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:inline-flex md:col-span-4" }),
    /* @__PURE__ */ jsx("div", { className: "col-span-6 ml-auto md:col-span-4", children: /* @__PURE__ */ jsx(DropdownShowData, {}) })
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
function PortofolioContent$1({ data }) {
  var _a;
  const { name, category, highlight } = data;
  return /* @__PURE__ */ jsxs("div", { className: "p-4 flex flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between gap-4 mb-3", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold font-heading text-lg truncate", children: name }),
      category && /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "primary",
          style: { background: `${category[0].background}!important` },
          className: "self-center flex-shrink-0",
          size: "sm",
          tag: "div",
          children: (_a = category[0]) == null ? void 0 : _a.name
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-0", children: highlight })
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
        /* @__PURE__ */ jsx(PortofolioContent$1, { data })
      ]
    }
  );
}
function PortofolioPagination({ page }) {
  const { request } = usePage().props;
  return /* @__PURE__ */ jsx("ul", { className: "flex justify-center pt-16 gap-1", children: page && page.map((item, i) => {
    var _a;
    return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      Link,
      {
        href: item.url === null ? "#" : (((_a = item.url) == null ? void 0 : _a.includes("page=1")) ? item.url.replace("page=1", "") : item.url) + ((request == null ? void 0 : request.search) ? `&search=${request == null ? void 0 : request.search}` : "") + ((request == null ? void 0 : request.show) ? `&show=${request == null ? void 0 : request.show}` : ""),
        dangerouslySetInnerHTML: {
          __html: item.label
        },
        className: twMerge(
          "px-3 py-2 !min-w-[2.5rem] !min-h-[2.5rem] flex items-center justify-center duration-200 transition-all rounded-lg hover:bg-green-600 hover:text-white",
          item.active ? "bg-green-500 text-white" : "bg-white text-gray-500",
          item.url === null ? "opacity-80 cursor-not-allowed hover:bg-transparent hover:!text-gray-500" : ""
        )
      }
    ) }, i);
  }) });
}
function PortofolioSection({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-4 mt-4", children: data.length > 0 ? data.map((item, i) => /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4", children: /* @__PURE__ */ jsx(PortofolioCard, { data: item }) }, i)) : /* @__PURE__ */ jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsx(EmptyState, { title: "Data Tidak Dapat Ditemukan!" }) }) });
}
function PortofolioContent({ data }) {
  return /* @__PURE__ */ jsxs(GlobalSection, { children: [
    /* @__PURE__ */ jsx(HeaderSearchPartial, {}),
    /* @__PURE__ */ jsx(PortofolioSection, { data: data == null ? void 0 : data.data }),
    /* @__PURE__ */ jsx(PortofolioPagination, { page: data == null ? void 0 : data.links })
  ] });
}
function HeaderPartial() {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-5", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-2 font-bold font-heading md:text-4xl", children: "Portofolio Saya" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-lg opacity-75", children: "Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini" })
  ] }) });
}
function PortofolioIndex({ portofolio }) {
  return /* @__PURE__ */ jsxs(
    HomeLayout,
    {
      className: "flex flex-col justify-between min-h-screen",
      header: /* @__PURE__ */ jsx(HeaderPartial, {}),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Portofolio" }),
        /* @__PURE__ */ jsx(PortofolioContent, { data: portofolio })
      ]
    }
  );
}
export {
  PortofolioIndex as default
};
