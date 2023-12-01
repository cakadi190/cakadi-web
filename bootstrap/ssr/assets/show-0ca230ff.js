import { jsxs, jsx } from "react/jsx-runtime";
import { s as storage, a as asset, B as Badge, H as HomeLayout } from "./HomeLayout-cbdfc63e.js";
import { Head } from "@inertiajs/react";
import "react";
import "cva";
import "react-icons/fa/index.esm.js";
import "react-icons/ri/index.esm.js";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-dc9632a1.js";
import "./tailwind-3a0d7fb3.js";
const ProjectDetailsComponent = ({ name, published, clientName, link }) => {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 border border-gray-200 rounded-xl sticky top-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Nama Proyek" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Dipublikasikan Pada" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: new Date(published).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Klien" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: clientName })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Link" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: /* @__PURE__ */ jsx("a", { href: link, target: "_blank", rel: "noreferrer", children: link }) })
    ] })
  ] });
};
const ImageComponent = ({ image, name }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: storage(`uploads/${image}`) ?? asset("images/portofolio.png"),
      alt: name ?? "Portofolio Saya",
      className: "rounded-lg mb-8 shadow-lg"
    }
  );
};
const BadgesComponent = ({ category }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.map((item, index) => /* @__PURE__ */ jsx(
    Badge,
    {
      className: `bg-[${item.background}] inline-flex`,
      size: "sm",
      children: item.name
    },
    index
  )) });
};
const PortfolioDetailContent = ({ data }) => {
  const { name, image, clientName, description, link, category, published_at } = data;
  return /* @__PURE__ */ jsx("div", { className: "relative bg-white", children: /* @__PURE__ */ jsx("div", { className: "container pt-4 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-1/4", children: [
      /* @__PURE__ */ jsx(ImageComponent, { image, name }),
      /* @__PURE__ */ jsx(BadgesComponent, { category }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: description ?? "Tidak ada deskripsi"
          }
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-1/4", children: /* @__PURE__ */ jsx(
      ProjectDetailsComponent,
      {
        name,
        published: published_at,
        clientName,
        link
      }
    ) })
  ] }) }) });
};
const PortofolioDetailContent = PortfolioDetailContent;
function HeaderPartial({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-2 font-bold font-heading md:text-4xl", children: "Detail Portofolio Saya" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-lg opacity-75", children: "Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini" })
  ] }) });
}
function ShowPortofolio({
  portofolio
}) {
  return /* @__PURE__ */ jsxs(HomeLayout, { header: /* @__PURE__ */ jsx(HeaderPartial, { data: portofolio }), children: [
    /* @__PURE__ */ jsx(Head, { title: portofolio.name }),
    /* @__PURE__ */ jsx(PortofolioDetailContent, { data: portofolio })
  ] });
}
export {
  ShowPortofolio as default
};
