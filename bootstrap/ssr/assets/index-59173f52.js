import { jsx, jsxs } from "react/jsx-runtime";
import { T as TextInput } from "./TextInput-36edeb8b.js";
import { usePage, router, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { B as Badge, s as storage, G as GlobalSection, E as EmptyState, H as HomeLayout } from "./HomeLayout-a6e59143.js";
import "cva";
import "react-icons/fa/index.esm.js";
import "react-icons/ri/index.esm.js";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-dc9632a1.js";
function SearchContent() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { request } = usePage().props;
  const onChangeForm = (e) => {
    setQuery(e.target.value);
    setLoading(true);
    router.get(
      route(route().current()),
      { search: e.target.value ?? null },
      {
        preserveState: true,
        replace: true,
        onSuccess: () => setLoading(false)
      }
    );
  };
  useEffect(() => {
    setQuery((request == null ? void 0 : request.search) ?? "");
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4", children: /* @__PURE__ */ jsx(
    TextInput,
    {
      className: "w-full",
      onChange: onChangeForm,
      value: query,
      placeholder: "Cari portofolio saya…"
    }
  ) }) });
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
        /* @__PURE__ */ jsx(PortofolioContent$1, { data })
      ]
    }
  );
}
function PortofolioPagination({ page }) {
  return /* @__PURE__ */ jsx("ul", { className: "flex justify-center pt-16 gap-1", children: page && page.map((item, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
    Link,
    {
      href: item.url,
      dangerouslySetInnerHTML: {
        __html: item.label
      },
      className: twMerge(
        "py-2 px-3 duration-200 transition-all rounded hover:bg-green-600 hover:text-white",
        item.active ? "bg-green-500 text-white" : "bg-white text-gray-500"
      )
    }
  ) }, i)) });
}
function PortofolioSection({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-4 mt-4", children: data.length > 0 ? data.map((item, i) => /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-4", children: /* @__PURE__ */ jsx(PortofolioCard, { data: item }) }, i)) : /* @__PURE__ */ jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsx(EmptyState, { title: "Data Tidak Dapat Ditemukan!" }) }) });
}
function PortofolioContent({ data }) {
  return /* @__PURE__ */ jsxs(GlobalSection, { children: [
    /* @__PURE__ */ jsx(SearchContent, {}),
    /* @__PURE__ */ jsx(PortofolioSection, { data: data == null ? void 0 : data.data }),
    /* @__PURE__ */ jsx(PortofolioPagination, { page: data == null ? void 0 : data.links })
  ] });
}
function HeaderPartial() {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-5", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-2 font-bold font-heading md:text-4xl", children: "Portofolio Saya" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-lg opacity-75", children: "Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini" })
  ] }) });
}
function PortofolioIndex({ portofolio }) {
  return /* @__PURE__ */ jsx(
    HomeLayout,
    {
      className: "flex flex-col justify-between min-h-screen",
      header: /* @__PURE__ */ jsx(HeaderPartial, {}),
      children: /* @__PURE__ */ jsx(PortofolioContent, { data: portofolio })
    }
  );
}
export {
  PortofolioIndex as default
};
