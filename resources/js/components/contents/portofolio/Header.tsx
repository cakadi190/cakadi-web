import { Link } from "@inertiajs/react";

export function HeaderPartial() {
  return (
    <header className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-5">
        <h1 className="text-2xl mb-2 font-bold font-heading md:text-4xl">
          Portofolio Saya
        </h1>
        <p className="md:text-lg opacity-75">
          Berikut merupakan semua proyek yang pernah saya kerjakan akhir-akhir
          ini
        </p>

        <nav className="flex items-center flex-wrap text-sm font-semibold py-3">
          <Link href="/" className="text-green-500 hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Portofolio</span>
        </nav>
      </div>
    </header>
  );
};
