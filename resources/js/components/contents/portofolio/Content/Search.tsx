import TextInput from "@/components/ui/TextInput";
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function SearchContent() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { request } = usePage<{
    request?: {
      search?: string;
      page?: number;
    };
  }>().props;

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setLoading(true);

    router.get(
      route(route().current() as string),
      { search: e.target.value ?? null },
      {
        preserveState: true,
        replace: true,
        onSuccess: () => setLoading(false),
      }
    );
  };

  useEffect(() => {
    setQuery(request?.search ?? "");
  }, []);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-4">
        <TextInput
          className="w-full"
          onChange={onChangeForm}
          value={query}
          placeholder="Cari portofolio saya&hellip;"
        />
      </div>
    </div>
  );
}
