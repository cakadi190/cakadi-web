import { Badge } from "@/components/ui/badge";

export default function PortofolioContent({ data }: { data: Portofolio }) {
  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-row justify-between gap-4 mb-3">
        <h3 className="font-semibold font-heading text-lg truncate">{data.name}</h3>
        <Badge variant="primary" className="self-center flex-shrink-0" size="sm" children={data.category && data.category[0]?.name} />
      </div>
      <p className="text-gray-500 mb-0">{data.highlight}</p>
    </div>
  )
}
