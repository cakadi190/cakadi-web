import { twMerge } from "@/utils/tailwind";
import { Link } from "@inertiajs/react";
import { storage } from "@/utils/folder";
import PortofolioImage from "./PortofolioImage";
import PortofolioContent from "./PortofolioContent";

export default function PortofolioCard({ data }: { data: Portofolio }) {
  return (
    <Link
      href={route("portofolio.show", { id: data.id })}
      className={twMerge(
        "flex flex-col rounded-xl transition-all duration-200 border border-gray-200",
        "hover:shadow-md hover:shadow-gray-100 hover:border-green-500"
      )}
    >
      <PortofolioImage
        data={{
          name: data.name,
          url: storage(`uploads/${data.image}`),
        }}
      />
      <PortofolioContent data={data} />
    </Link>
  );
}
