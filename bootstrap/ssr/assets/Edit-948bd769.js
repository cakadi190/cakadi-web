import { jsxs, jsx } from "react/jsx-runtime";
import { A as Authenticated } from "./AuthenticatedLayout-e732cde2.js";
import DeleteUserForm from "./DeleteUserForm-15e13415.js";
import UpdatePasswordForm from "./UpdatePasswordForm-32d88cb3.js";
import UpdateProfileInformation from "./UpdateProfileInformationForm-c9f6d583.js";
import { Head } from "@inertiajs/react";
import "react";
import "./ApplicationLogo-91fe4a73.js";
import "@headlessui/react";
import "./NavLink-dc9632a1.js";
import "./tailwind-3a0d7fb3.js";
import "./InputError-4ef2eb93.js";
import "./InputLabel-747c5b8a.js";
import "./TextInput-36edeb8b.js";
import "./PrimaryButton-eeb7392f.js";
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(DeleteUserForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
