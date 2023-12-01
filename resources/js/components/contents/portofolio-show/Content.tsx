import { Badge } from "@/components/ui/badge";
import { asset, storage } from "@/utils/folder";

const ProjectDetailsComponent: React.FC<{
  name: string;
  published: Date | string;
  clientName: string;
  link: string;
}> = ({ name, published, clientName, link }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl sticky top-20">
      <div className="pb-4 border-b mb-4 border-gray-200">
        <h3 className="font-bold font-heading text-lg mb-1">Nama Proyek</h3>
        <p className="text-gray-600">{name}</p>
      </div>
      <div className="pb-4 border-b mb-4 border-gray-200">
        <h3 className="font-bold font-heading text-lg mb-1">
          Dipublikasikan Pada
        </h3>
        <p className="text-gray-600">
          {new Date(published as Date).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="pb-4 border-b mb-4 border-gray-200">
        <h3 className="font-bold font-heading text-lg mb-1">Klien</h3>
        <p className="text-gray-600">{clientName}</p>
      </div>
      <div>
        <h3 className="font-bold font-heading text-lg mb-1">Link</h3>
        <p className="text-gray-600">
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

const ImageComponent: React.FC<{
  image: string;
  name: string;
}> = ({ image, name }) => {
  return (
    <img
      src={storage(`uploads/${image}`) ?? asset("images/portofolio.png")}
      alt={name ?? "Portofolio Saya"}
      className="rounded-lg mb-8 shadow-lg"
    />
  );
};

const BadgesComponent: React.FC<{
  category: PortofolioCategories[];
}> = ({ category }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {category.map((item, index) => (
        <Badge
          key={index}
          className={`bg-[${item.background}] inline-flex`}
          size={"sm"}
        >
          {item.name}
        </Badge>
      ))}
    </div>
  );
};

export { ProjectDetailsComponent, ImageComponent, BadgesComponent };
