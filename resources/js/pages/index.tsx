import { AboutMe, FeaturedSection, Header, PortofolioSection } from "@/components/contents/index";
import {
  GlobalSection,
  GlobalSectionWithTitle,
} from "@/components/partials/front/Global";
import HomeLayout from "@/layouts/HomeLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
  portofolio,
}: PageProps<{ portofolio?: Portofolio[] }>) {
  return (
    <HomeLayout className="flex flex-col justify-between min-h-screen">
      <Head title="Fullstack Web Developer" />

      <Header />

      <GlobalSection>
        <FeaturedSection />
      </GlobalSection>

      <GlobalSection>
        <AboutMe />
      </GlobalSection>

      <GlobalSectionWithTitle
        moreButton={{ link: "/portofolio", title: "Selengkapnya", internal: true }}
        title="Portofolio Saya"
      >
        <PortofolioSection data={portofolio} />
      </GlobalSectionWithTitle>
    </HomeLayout>
  );
}
