import { asset } from "@/utils/folder";

export const ImagePartial = ({ data }: { data: Portofolio }) => {
  return (
    <div className="grid justify-center grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <img
          src={data.image ?? asset("images/portofolio.png")}
          alt={data.name ?? "Portofolio Saya"}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
};
