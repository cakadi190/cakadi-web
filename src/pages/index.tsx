import { GetStaticProps } from "next";
import SEO from "../components/SeoMeta";
import LayoutDefault from "../layouts/default";

export default function Home() {
  return (
    <LayoutDefault>
      <SEO title="Beranda" description="Seorang Fullstack Web Developer yang berbasis di Kabupaten Ngawi yang suka sekali dengan desain dan juga hal yang berbau teknologi" />
    </LayoutDefault>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}
