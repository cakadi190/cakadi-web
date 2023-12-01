import PortofolioContent from "@/components/contents/portofolio";
import HomeLayout from "@/layouts/HomeLayout";
import { HeaderPartial } from "@/components/contents/portofolio/Header";
import { LaravelResponse } from "@/types";
import { Head } from "@inertiajs/react";

export default function PortofolioIndex({ portofolio }: { portofolio: LaravelResponse }) {
  return (
    <HomeLayout
      className="flex flex-col justify-between min-h-screen"
      header={<HeaderPartial />}
    >
      <Head title="Portofolio" />
      <PortofolioContent data={portofolio} />
    </HomeLayout>
  );
}
