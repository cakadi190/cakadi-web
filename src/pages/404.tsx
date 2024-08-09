// pages/404.tsx
import { FC, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLocale, useTranslations } from "next-intl";
import SEO from "@/components/SeoMeta";
import Link from "next/link";
import jQuery from "jquery";

const Custom404: FC = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    jQuery("html").attr("lang", locale);
  }, [theme, locale]);

  return (
    <>
      <SEO
        title={t("Halaman Tidak Ditemukan")}
        description={t("Halaman yang kamu akses saat ini tidak dapat ditemukan")}
      />

      <div className="container text-center">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="display-1 fw-normal">404</h1>
            <h2 className="display-6 mb-0 fw-normal">
              {t("Halaman Tidak Ditemukan")}
            </h2>
            <p className="lead fw-normal opacity-50">
              {t("Halaman yang kamu akses saat ini tidak dapat ditemukan")}
            </p>

            <Link className="btn btn-primary" href="/">
              {t("Kembali Ke Beranda")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
