import { jsxs, jsx } from "react/jsx-runtime";
import { a as ApplicationLogoAlt } from "./ApplicationLogo-91fe4a73.js";
import { B as Button } from "./index-4917b870.js";
import { Link } from "@inertiajs/react";
import { FaHome } from "react-icons/fa/index.esm.js";
import "react";
import "cva";
function ErrorPage({ status }) {
  const title = {
    503: "Service Unavailable",
    500: "Server Error",
    419: "Page Expired",
    404: "Page Not Found",
    403: "Forbidden"
  };
  const description = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    419: "Whoops, your access token has been expired or revoked.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page."
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen text-center container flex flex-col items-center bg-gradient-to-t from-white from-[0.5%] to-transparent justify-center bg-grid", children: [
    /* @__PURE__ */ jsx("div", { className: "font-title text-8xl mb-3 font-bold", children: status }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl md:text-4xl mb-2 font-bold font-heading text-green-600", children: title[status] }),
    /* @__PURE__ */ jsx("div", { className: "md:text-xl", children: description[status] }),
    !status.toString().includes("50") && /* @__PURE__ */ jsx(Link, { href: "/", className: "mt-3", children: /* @__PURE__ */ jsxs(Button, { children: [
      /* @__PURE__ */ jsx(FaHome, {}),
      /* @__PURE__ */ jsx("span", { children: "Back To Home" })
    ] }) }),
    /* @__PURE__ */ jsx(ApplicationLogoAlt, { className: "h-8 mt-8" })
  ] });
}
export {
  ErrorPage as default
};
