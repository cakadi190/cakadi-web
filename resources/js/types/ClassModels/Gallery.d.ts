interface Gallery {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string | null;
  image: string | null;
  link: string | null;
  portofolioId: string;
}
