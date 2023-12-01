import HeaderSearchPartial from "./Content/Search";
import PortofolioCard from "./Content/Content";
import EmptyState from "@/components/EmptyState";
import { GlobalSection } from "@/components/partials/front/Global";
import { LaravelPagination, LaravelResponse } from "@/types";
import { Link, usePage } from "@inertiajs/react";
import { twMerge } from "@/utils/tailwind";

function PortofolioPagination({ page }: { page: LaravelPagination[] }) {
  const { request } = usePage<{
    request?: {
      search?: string;
      page?: string;
      show?: string;
    };
  }>().props;

  return (
    <ul className="flex justify-center pt-16 gap-1">
      {page &&
        page.map((item, i) => (
          <li key={i}>
            <Link
              href={
                item.url === null
                  ? "#"
                  : (item.url?.includes("page=1")
                      ? item.url.replace("page=1", "")
                      : (item.url as string)) +
                    (request?.search ? `&search=${request?.search}` : "") +
                    (request?.show ? `&show=${request?.show}` : "")
              }
              dangerouslySetInnerHTML={{
                __html: item.label as string,
              }}
              className={twMerge(
                "px-3 py-2 !min-w-[2.5rem] !min-h-[2.5rem] flex items-center justify-center duration-200 transition-all rounded-lg hover:bg-green-600 hover:text-white",
                item.active
                  ? "bg-green-500 text-white"
                  : "bg-white text-gray-500",
                item.url === null ? "opacity-80 cursor-not-allowed hover:bg-transparent hover:!text-gray-500" : ""
              )}
            />
          </li>
        ))}
    </ul>
  );
}

function PortofolioSection({ data }: { data: Portofolio[] }) {
  return (
    <div className="grid grid-cols-12 gap-4 mt-4">
      {data.length > 0 ? (
        data.map((item, i) => (
          <div className="col-span-12 md:col-span-4" key={i}>
            <PortofolioCard data={item} />
          </div>
        ))
      ) : (
        <div className="col-span-12">
          <EmptyState title="Data Tidak Dapat Ditemukan!" />
        </div>
      )}
    </div>
  );
}

export default function PortofolioContent({ data }: { data: LaravelResponse }) {
  return (
    <GlobalSection>
      <HeaderSearchPartial />
      <PortofolioSection data={data?.data} />
      <PortofolioPagination page={data?.links} />
    </GlobalSection>
  );
}
