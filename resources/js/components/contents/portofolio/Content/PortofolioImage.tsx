import { twMerge } from "@/utils/tailwind";

interface ImageProps {
  data: {
    name: string;
    url: string;
  };
  className?: string;
}

export default function PortofolioImage({ data, className }: ImageProps) {
  return (
    <img
      src={data.url}
      alt={data.name}
      className={twMerge(
        "rounded-xl aspect-[16/9] object-cover w-full border-b border-gray-300",
        className as string
      )}
    />
  );
}
