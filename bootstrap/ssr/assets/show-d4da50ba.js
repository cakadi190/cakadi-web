import { jsx, jsxs } from "react/jsx-runtime";
import { a as asset, H as HomeLayout } from "./HomeLayout-9a45364e.js";
import { Head } from "@inertiajs/react";
import "react-icons/fa/index.esm.js";
import "react-icons/ri/index.esm.js";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-dc9632a1.js";
import "./tailwind-3a0d7fb3.js";
import "react";
const ImagePartial = ({ data }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid justify-center grid-cols-12", children: /* @__PURE__ */ jsx("div", { className: "col-span-12 md:col-span-6", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: data.image ?? asset("images/portofolio.png"),
      alt: data.name ?? "Portofolio Saya",
      className: "rounded-lg shadow-lg"
    }
  ) }) });
};
function PortofolioDetailContent({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(ImagePartial, { data }) });
}
function HeaderPartial({ data }) {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-2 font-bold font-heading md:text-4xl", children: data.name ?? "Portofolio Saya" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-lg opacity-75", children: data.description ?? "Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini" })
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
