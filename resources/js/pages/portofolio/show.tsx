import PortofolioDetailContent from "@/components/contents/portofolio-show";
import { HeaderPartial } from "@/components/contents/portofolio-show/Header";
import HomeLayout from "@/layouts/HomeLayout";
import { Head } from "@inertiajs/react";

export default function ShowPortofolio({
  portofolio,
}: {
  portofolio: Portofolio;
}) {
  return (
    <HomeLayout header={<HeaderPartial data={portofolio} />}>
      <Head title={portofolio.name} />
      <PortofolioDetailContent data={portofolio} />
    </HomeLayout>
  );
}
