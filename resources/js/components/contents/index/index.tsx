import EmptyState from "@/components/EmptyState";
import FeaturedCard from "@/components/FeaturedCard";
import { twMerge } from "@/utils/tailwind";
import { RiCodeLine, RiEye2Fill, RiTimeFill } from "react-icons/ri";
import { ButtonCTA, Description, Title } from "./AboutMe/Content";
import ImageStack from "./AboutMe/ImageStack";
import HeaderInner from "./Header";
import PortofolioCard from "./Portofolio";

export function FeaturedSection() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <FeaturedCard
        icon={
          <div
            className={twMerge(
              "rounded-full bg-amber-300 p-3.5",
              "dark:bg-amber-900"
            )}
          >
            <RiTimeFill className={twMerge("h-5 w-5 text-white")} />
          </div>
        }
        title="Cepat & Tanggap"
        desc="Mengerjakan proyek dengan cepat dan tanggap terhadap perubahan."
      />
      <FeaturedCard
        icon={
          <div
            className={twMerge(
              "rounded-full bg-red-400 p-3.5",
              "dark:bg-pink-900"
            )}
          >
            <RiEye2Fill className={twMerge("h-5 w-5 text-white")} />
          </div>
        }
        title="Catchy & Simpel"
        desc="Membuat tampilan website yang catchy dan simpel untuk dilihat dan digunakan."
      />
      <FeaturedCard
        icon={
          <div
            className={twMerge(
              "rounded-full bg-green-400 p-3.5",
              "dark:bg-sky-900"
            )}
          >
            <RiCodeLine className={twMerge("h-5 w-5 text-white")} />
          </div>
        }
        title="Rapi & Teroptimasi"
        desc="Menuliskan baris-baris kode yang rapi dan mudah dipahami semua orang."
      />
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="grid gap-6 items-center grid-cols-12">
      <div className="col-span-12 md:col-span-4">
        <Title />
      </div>
      <div className="hidden md:inline-block md:col-span-4">
        <ImageStack />
      </div>
      <div className="col-span-12 md:col-span-4">
        <Description />
        <ButtonCTA />
      </div>
    </div>
  );
}

export function PortofolioSection({ data }: { data?: Portofolio[] }) {
  return (
    <div className="grid gap-4 grid-cols-12">
      {data && data.length > 0 ? (
        data.map((data, index) => (
          <div key={index} className="col-span-12 md:col-span-4">
            <PortofolioCard data={data} />
          </div>
        ))
      ) : (
        <EmptyState className="col-span-12" />
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="pt-24 pb-16 md:pb-0 flex bg-gradient-to-t from-white from-[1%] to-transparent flex-col justify-center md:min-h-screen md:py-6">
      <div className="container">
        <HeaderInner />
      </div>
    </header>
  );
}
