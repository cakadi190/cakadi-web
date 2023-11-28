import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = "Catatan Cak Adi";
createInertiaApp({
  title: (title) => title ? `${title} &bull; ${appName}` : appName,
  resolve: (name) => resolvePageComponent(
    `./pages/${name}.tsx`,
    /* @__PURE__ */ Object.assign({ "./pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-e5f2ad3d.js"), "./pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-83ebc2dc.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-4b7cb94b.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-8ea772ba.js"), "./pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-650fb7bf.js"), "./pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-7531bac3.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-34e7980e.js"), "./pages/Profile/Edit.tsx": () => import("./assets/Edit-948bd769.js"), "./pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-15e13415.js"), "./pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-32d88cb3.js"), "./pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-c9f6d583.js"), "./pages/error.tsx": () => import("./assets/error-5a89bf3b.js"), "./pages/index.tsx": () => import("./assets/index-70729503.js"), "./pages/portofolio/index.tsx": () => import("./assets/index-59173f52.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
