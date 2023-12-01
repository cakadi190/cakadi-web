import { ImagePartial } from "./Content";

export default function PortofolioDetailContent({ data }: { data: Portofolio }) {
  return (
    <div className="relative">
      <ImagePartial data={data} />
    </div>
  )
}
