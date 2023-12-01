import React from "react";
import { asset, storage } from "@/utils/folder";
import { Badge } from "@/components/ui/badge";
import { BadgesComponent, ImageComponent, ProjectDetailsComponent } from "./Content";

const PortfolioDetailContent: React.FC<{ data: Portofolio }> = ({ data }) => {
  const { name, image, clientName, description, link, category, published_at } =
    data;

  return (
    <div className="relative bg-white">
      <div className="container pt-4 pb-16">
        <div className="flex gap-4">
          <div className="md:w-1/4">
            <ImageComponent image={image} name={name} />
            <BadgesComponent category={category as PortofolioCategories[]} />

            <div
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: description ?? "Tidak ada deskripsi",
              }}
            />
          </div>
          <div className="md:w-1/4">
            <ProjectDetailsComponent
              name={name}
              published={published_at as Date}
              clientName={clientName}
              link={link}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailContent;
