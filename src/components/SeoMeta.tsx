// components/SEO.tsx
import React from "react";
import Head from "next/head";
import { buildTitle, buildUrl } from "../utils/seo";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  url?: string;
  image?: string;
  locale?: string;
  robots?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "cakadi190, web portfolio, fullstack, webdev, webdesign",
  url = "/",
  image = "/",
  locale = 'id',
  robots = 'index,follow',
}) => {
  const generatedUrl = buildUrl(url);
  const generatedImage = buildUrl(image);
  const generatedTitle = buildTitle(title);

  return (
    <Head>
      <title>{generatedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Cak Adi" />
      <meta name="robots" content={robots} />
      <meta property="og:url" content={generatedUrl} />
      <meta property="og:title" content={generatedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={generatedImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <link rel="canonical" href={generatedUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={generatedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={generatedImage} />
    </Head>
  );
};

export default SEO;
