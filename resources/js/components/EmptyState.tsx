
import { asset } from '@/utils/folder';
import { twMerge } from '@/utils/tailwind';
import React from 'react';

interface PageProp {
  title?: string;
  imageUrl?: string;
  description?: string;
  className?: string;
};

const EmptyState: React.FC<PageProp> = ({
  title,
  imageUrl,
  description,
  className,
}) => {
  return (
    <div className={
      twMerge(
        "flex flex-col items-center justify-center",
        className ?? ""
      )
    }>
      <img src={imageUrl ?? asset('error-page/data-empty.svg')} alt={title} className="w-96 mb-4" />
      <h1 className="text-2xl font-bold">{title ?? "Data Tidak Ditemukan"}</h1>
      <p className="text-gray-500">{description ?? "Maaf, data yang akan ditampilkan tidak ada dalam daftar."}</p>
    </div>
  );
};

export default EmptyState;
