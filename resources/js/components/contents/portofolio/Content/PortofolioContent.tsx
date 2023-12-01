import { Badge } from "@/components/ui/badge";

export default function PortofolioContent({ data }: { data: Portofolio }) {
  const { name, category, highlight } = data;

  return (
    <div className="p-4 flex flex-col">
      <div className="flex flex-row justify-between gap-4 mb-3">
        <h3 className="font-semibold font-heading text-lg truncate">{name}</h3>
        {category && (
          <Badge
            variant="primary"
            style={{ background: `${category[0].background}!important` }}
            className="self-center flex-shrink-0"
            size="sm"
            tag="div"
            children={category[0]?.name}
          />
        )}
      </div>

      <p className="text-gray-500 mb-0">{highlight}</p>
    </div>
  );
}
