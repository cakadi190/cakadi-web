import { jsxs, jsx } from "react/jsx-runtime";
import { s as storage, a as asset, B as Badge, H as HomeLayout } from "./HomeLayout-15fea589.js";
import { g as getTextFromBg } from "./tailwind-b306cda1.js";
import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Link, Head } from "@inertiajs/react";
import "cva";
import "react-icons/fa/index.esm.js";
import "react-icons/ri/index.esm.js";
import "./ApplicationLogo-91fe4a73.js";
import "./NavLink-fbd56e69.js";
const styles = "";
const GalleryComponent = ({ gallery }) => {
  const [index, setIndex] = React.useState(-1);
  let galleries = [];
  if (gallery && (gallery == null ? void 0 : gallery.length) > 0) {
    galleries = gallery.map((item) => {
      return {
        id: item.id,
        src: storage(`uploads/${item.image}`) ?? asset("images/portofolio.png"),
        width: item.width,
        height: item.height
      };
    });
  }
  return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-bold mb-3 font-heading text-2xl", children: "Galeri" }),
    /* @__PURE__ */ jsx(
      PhotoAlbum,
      {
        layout: "masonry",
        photos: galleries,
        targetRowHeight: 150,
        onClick: ({ index: current }) => setIndex(current)
      }
    ),
    /* @__PURE__ */ jsx(
      Lightbox,
      {
        index,
        slides: galleries,
        open: index >= 0,
        close: () => setIndex(-1)
      }
    )
  ] });
};
const ProjectDetailsComponent = ({ name, published, clientName, link }) => {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 border border-gray-200 rounded-xl sticky top-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Nama Proyek" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: name })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Dipublikasikan Pada" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: new Date(published).toLocaleDateString("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pb-4 border-b mb-4 border-gray-200", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Klien" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: clientName })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-bold font-heading text-lg mb-1", children: "Link" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: /* @__PURE__ */ jsx("a", { href: link, target: "_blank", rel: "noreferrer", children: link }) })
    ] })
  ] });
};
const ImageComponent = ({ image, name }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: storage(`uploads/${image}`) ?? asset("images/portofolio.png"),
      alt: name ?? "Portofolio Saya",
      className: "rounded-lg mb-8 shadow-lg"
    }
  );
};
const BadgesComponent = ({ category }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.map((item, index) => /* @__PURE__ */ jsx(
    Badge,
    {
      className: `inline-flex`,
      size: "sm",
      style: {
        background: item.background,
        color: getTextFromBg(item.background)
      },
      children: item.name
    },
    index
  )) });
};
const PortfolioDetailContent = ({ data }) => {
  const { name, image, clientName, description, link, category, published_at, gallery } = data;
  return /* @__PURE__ */ jsx("div", { className: "relative bg-white", id: "articles", children: /* @__PURE__ */ jsx("div", { className: "container pt-4 pb-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:w-3/4", children: [
      /* @__PURE__ */ jsx(ImageComponent, { image, name }),
      /* @__PURE__ */ jsx(BadgesComponent, { category }),
      /* @__PURE__ */ jsx(
        "div",
        {
          id: "description",
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: description ?? "Tidak ada deskripsi"
          }
        }
      ),
      data.gallery && data.gallery.length > 0 && /* @__PURE__ */ jsx(GalleryComponent, { gallery: data.gallery })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:w-1/4", children: /* @__PURE__ */ jsx(
      ProjectDetailsComponent,
      {
        name,
        published: published_at,
        clientName,
        link
      }
    ) })
  ] }) }) });
};
const PortofolioDetailContent = PortfolioDetailContent;
function HeaderPartial({ data }) {
  return /* @__PURE__ */ jsx("header", { className: "grid grid-cols-12", children: /* @__PURE__ */ jsxs("div", { className: "col-span-12 md:col-span-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl mb-2 font-bold font-heading md:text-4xl", children: "Detail Portofolio Saya" }),
    /* @__PURE__ */ jsx("p", { className: "md:text-lg opacity-75", children: "Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini" }),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center flex-wrap text-sm font-semibold py-3", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", className: "text-green-500 hover:underline", children: "Home" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx(Link, { href: "/portofolio", className: "text-green-500 hover:underline", children: "Portofolio" }),
      /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: data.name })
    ] })
  ] }) });
}
function ShowPortofolio({
  portofolio
}) {
  return /* @__PURE__ */ jsxs(HomeLayout, { header: /* @__PURE__ */ jsx(HeaderPartial, { data: portofolio }), children: [
    /* @__PURE__ */ jsx(Head, { title: portofolio.name }),
    /* @__PURE__ */ jsx(PortofolioDetailContent, { data: portofolio })
  ] });
}
export {
  ShowPortofolio as default
};
