import { jsx, jsxs } from "react/jsx-runtime";
import { t as twMerge } from "./tailwind-b306cda1.js";
import { I as InputError } from "./InputError-4ef2eb93.js";
import { I as InputLabel } from "./InputLabel-747c5b8a.js";
import { T as TextInput } from "./TextInput-127daedc.js";
import { B as Button } from "./index-4917b870.js";
import { G as Guest } from "./GuestLayout-55cf3e36.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { RiEyeCloseFill, RiEyeFill } from "react-icons/ri/index.esm.js";
import "cva";
import "./ApplicationLogo-91fe4a73.js";
function Checkbox({
  className = "",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: twMerge(
        "transition-all p-2 duration-200 rounded border-gray-300 text-green-600 shadow-sm focus:border-green-500 focus:ring-green-500",
        className
      )
    }
  );
}
function Login({
  status,
  canResetPassword
}) {
  const [passwordType, setPasswordType] = useState("password");
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => reset("password");
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  const buttonPasswordChange = () => setPasswordType(passwordType === "password" ? "text" : "password");
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Masuk" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Surel kamu" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            placeholder: "Misal: email@domain.tld",
            isFocused: true,
            onChange: (e) => setData("email", e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            TextInput,
            {
              id: "password",
              type: passwordType,
              name: "password",
              placeholder: "Masukkan kata sandi",
              value: data.password,
              className: "mt-1 block w-full",
              autoComplete: "current-password",
              onChange: (e) => setData("password", e.target.value)
            }
          ),
          /* @__PURE__ */ jsx(Button, { onClick: buttonPasswordChange, type: "button", variant: "ghost-primary", className: "absolute w-8 h-8 !p-0 top-[5px] bottom-[5px] rounded-md right-1 flex items-center justify-center", children: passwordType === "password" ? /* @__PURE__ */ jsx(RiEyeCloseFill, {}) : /* @__PURE__ */ jsx(RiEyeFill, {}) })
        ] }),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            checked: data.remember,
            onChange: (e) => setData("remember", e.target.checked)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ms-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline outline-none outline-0 text-sm text-gray-600 hover:text-gray-900 rounded-md",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(Button, { variant: "primary", disabled: processing, children: "Login" })
      ] })
    ] })
  ] });
}
export {
  Login as default
};
