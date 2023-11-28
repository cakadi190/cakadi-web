import PortofolioContent from "@/components/contents/portofolio";
import HomeLayout from "@/layouts/HomeLayout";
import { HeaderPartial } from "@/components/contents/portofolio/Header";
import { LaravelResponse } from "@/types";

export default function PortofolioIndex({ portofolio }: { portofolio: LaravelResponse }) {
  return (
    <HomeLayout
      className="flex flex-col justify-between min-h-screen"
      header={<HeaderPartial />}
    >
      <PortofolioContent data={portofolio} />
    </HomeLayout>
  );
}
