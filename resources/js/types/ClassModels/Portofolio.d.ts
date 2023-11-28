interface Portofolio {
  id: string;
  created_at?: Date | null;
  updated_at?: Date | null;
  published_at?: Date | null;
  name: string;
  image: string;
  link: string;
  clientName: string;
  video: string;
  description: string;
  highlight: string;

  category?: PortofolioCategories[];
  gallery?: Gallery[];
};
