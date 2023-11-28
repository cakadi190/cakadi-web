import { jsx } from "react/jsx-runtime";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { Link } from "@inertiajs/react";
function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      children,
      className: twMerge(
        "outline-hidden items-center outline-0 flex gap-2 px-3 py-1.5 rounded-md text-gray-500 transition-all duration-200",
        active ? "bg-green-500 text-white hover:bg-green-700" : "hover:text-green-500 hover:bg-green-500/10 focus:bg-green-500 focus:text-white focus-within:bg-green-500 focus-within:text-white",
        className
      )
    }
  );
}
export {
  NavLink as N
};
