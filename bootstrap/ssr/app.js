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
    /* @__PURE__ */ Object.assign({ "./pages/Dashboard.tsx": () => import("./assets/Dashboard-58dd4e4c.js"), "./pages/Profile/Edit.tsx": () => import("./assets/Edit-debb8fff.js"), "./pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-b761b597.js"), "./pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-84b9388d.js"), "./pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-089985c4.js"), "./pages/auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-05ea0d33.js"), "./pages/auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-8571ea75.js"), "./pages/auth/Login.tsx": () => import("./assets/Login-e24bb050.js"), "./pages/auth/Register.tsx": () => import("./assets/Register-7b5ee15c.js"), "./pages/auth/ResetPassword.tsx": () => import("./assets/ResetPassword-4fc3f334.js"), "./pages/auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-7531bac3.js"), "./pages/error.tsx": () => import("./assets/error-d5255568.js"), "./pages/index.tsx": () => import("./assets/index-e20a3809.js"), "./pages/portofolio/index.tsx": () => import("./assets/index-c25d5c2e.js"), "./pages/portofolio/show.tsx": () => import("./assets/show-ec1cf493.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
