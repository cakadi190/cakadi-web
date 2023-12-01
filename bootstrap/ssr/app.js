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
    /* @__PURE__ */ Object.assign({ "./pages/Dashboard.tsx": () => import("./assets/Dashboard-ad41b39b.js"), "./pages/Profile/Edit.tsx": () => import("./assets/Edit-9e13997c.js"), "./pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-3a49d5e8.js"), "./pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-f2bbaefd.js"), "./pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-c0d77959.js"), "./pages/auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-11dd0bce.js"), "./pages/auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-b677d488.js"), "./pages/auth/Login.tsx": () => import("./assets/Login-43b53c3d.js"), "./pages/auth/Register.tsx": () => import("./assets/Register-9a49b0cb.js"), "./pages/auth/ResetPassword.tsx": () => import("./assets/ResetPassword-46b9f004.js"), "./pages/auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-7531bac3.js"), "./pages/error.tsx": () => import("./assets/error-d5255568.js"), "./pages/index.tsx": () => import("./assets/index-3553c3e8.js"), "./pages/portofolio/index.tsx": () => import("./assets/index-7782eab5.js"), "./pages/portofolio/show.tsx": () => import("./assets/show-0ca230ff.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
