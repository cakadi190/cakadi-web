import { jsxs, jsx } from "react/jsx-runtime";
import { A as ApplicationLogo } from "./ApplicationLogo-91fe4a73.js";
import { Link } from "@inertiajs/react";
function Guest({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen relative flex flex-col bg-grid sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-b to-transparent from-green-100 from-15%", children: [
    /* @__PURE__ */ jsx("div", { className: "relative z-10 ", children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "relative z-10 w-20 h-20 fill-current text-gray-500" }) }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full sm:max-w-sm mt-6 p-6 bg-white shadow overflow-hidden sm:rounded-lg", children }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full sm:max-w-sm mt-6 text-center text-gray-500 text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Catatan Cak Adi. All rights reserved."
    ] })
  ] });
}
export {
  Guest as G
};
