import React from "react";
import { BadgesComponent, GalleryComponent, ImageComponent, ProjectDetailsComponent } from "./Content";

const PortfolioDetailContent: React.FC<{ data: Portofolio }> = ({ data }) => {
  const { name, image, clientName, description, link, category, published_at, gallery } =
    data;

  return (
    <div className="relative bg-white" id="articles">
      <div className="container pt-4 pb-16">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <ImageComponent image={image} name={name} />
            <BadgesComponent category={category as PortofolioCategories[]} />

            <div
              id="description"
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: description ?? "Tidak ada deskripsi",
              }}
            />

            {data.gallery && data.gallery.length > 0 && <GalleryComponent gallery={data.gallery} />}
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
