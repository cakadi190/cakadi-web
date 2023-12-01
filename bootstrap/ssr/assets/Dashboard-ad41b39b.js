import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-b645bfd2.js";
import { Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-91fe4a73.js";
import "./Dropdown-18a9895b.js";
import "@headlessui/react";
import "./tailwind-3a0d7fb3.js";
import "./NavLink-dc9632a1.js";
function Dashboard({ auth }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Dashboard" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "bg-white overflow-hidden shadow-sm sm:rounded-lg", children: /* @__PURE__ */ jsx("div", { className: "p-6 text-gray-900", children: "You're logged in!" }) }) }) })
      ]
    }
  );
}
export {
  Dashboard as default
};
