// pages/_error.tsx
import { Button } from "react-bootstrap";
import { NextPageContext } from "next";
import { FC, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useLocale, useTranslations } from "next-intl";
import SEO from "@/components/SeoMeta";
import Link from "next/link";
import jQuery from "jquery";

interface ErrorProps {
  statusCode?: number;
}

const ErrorPage: FC<ErrorProps> = ({ statusCode }) => {
  const { theme } = useTheme();
  const locale = useLocale();
  const t = useTranslations();

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", theme);
    jQuery('html').attr('lang', locale);
  }, [theme, locale]);

  return (
    <>
      <SEO
        title={
          statusCode === 404
            ? t("Halaman Tidak Ditemukan")
            : t("Peladen Bermasalah")
        }
        description={
          statusCode === 404
            ? t("Halaman yang kamu akses saat ini tidak dapat ditemukan.")
            : t("Ada masalah yang telah terjadi, dicoba lagi nanti.")
        }
      />

      <div className="container text-center">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-8 col-lg-6">
            <h1 className="display-1 fw-normal">{statusCode}</h1>
            <h2 className="display-6 mb-0 fw-normal">
              {statusCode === 404
                ? t("Halaman Tidak Ditemukan")
                : t("Peladen Bermasalah")}
            </h2>
            <p className="lead fw-normal opacity-50">
              {statusCode === 404
                ? t("Halaman yang kamu akses saat ini tidak dapat ditemukan.")
                : t("Ada masalah yang telah terjadi, dicoba lagi nanti.")}
            </p>
            <Button as={Link} href="/">
              {t("Kembali Ke Beranda")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ErrorPage.getInitialProps = async (ctx: NextPageContext) => {
  const statusCode = ctx.res?.statusCode || ctx.err?.statusCode || 500;
  return { statusCode };
};

export default ErrorPage;
