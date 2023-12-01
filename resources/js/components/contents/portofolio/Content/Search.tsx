import Dropdown from "@/components/ui/Dropdown";
import TextInput from "@/components/ui/TextInput";
import { LaravelResponse } from "@/types";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState<string>("");

  const { request } = usePage<{
    request?: {
      search?: string;
      page?: string;
      show?: string;
    };
    portofolio: LaravelResponse;
  }>().props;

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    const params = {
      search: e.target.value || undefined,
      page: request?.page,
      show: request?.show,
    };

    router.get(route(route().current() as string), params, {
      preserveState: true,
      replace: true,
    });
  };

  useEffect(() => {
    setQuery(request?.search ?? "");
  }, []);

  return (
    <TextInput
      className="w-full"
      onChange={onChangeForm}
      value={query}
      placeholder="Cari portofolio saya&hellip;"
    />
  );
}

function DropdownShowData() {
  const { request } = usePage<{
    request?: {
      search?: string;
      page?: string;
      show?: string;
    };
  }>().props;

  const [show, setShow] = useState<number>(request?.show ? parseInt(request.show) : 12);
  const [showItems] = useState<number[]>([6, 12, 24, 48, 56, 64, 72, 80, 88, 96]);

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <span className="inline-flex rounded-md">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
          >
            <span>Show {show} Data</span>
            <svg
              className="ms-2 -me-0.5 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </Dropdown.Trigger>

      <Dropdown.Content align="right">
        {showItems.map((item, i) => (
          <Dropdown.Link
            key={i}
            href={
              route(route().current() as string, {
                search: request?.search,
                page: request?.page,
                show: item || request?.show,
              })
            }
            className={
              (item === show && 'bg-gray-200') as string
            }
            onClick={() => setShow(item)}
          >
            {item}
          </Dropdown.Link>
        ))}
      </Dropdown.Content>
    </Dropdown>
  );
}

export default function HeaderSearchPartial() {
  return (
    <div className="grid grid-cols-12 items-center justify-between">
      <div className="col-span-6 md:col-span-4">
        <SearchForm />
      </div>
      <div className="hidden md:inline-flex md:col-span-4" />
      <div className="col-span-6 ml-auto md:col-span-4">
        <DropdownShowData />
      </div>
    </div>
  );
}
