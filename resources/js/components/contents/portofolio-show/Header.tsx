export function HeaderPartial({ data }: { data: Portofolio }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-6">
        <h1 className="text-2xl mb-2 font-bold font-heading md:text-4xl">
          Detail Portofolio Saya
        </h1>
        <p className="md:text-lg opacity-75">
          Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir ini
        </p>
      </div>
    </div>
  );
};
