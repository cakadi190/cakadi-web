import ApplicationLogo from "@/components/ui/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className={"min-h-screen relative flex flex-col bg-grid sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-b to-transparent from-green-100 from-15%"}>
      <div className="relative z-10 ">
        <Link href="/">
          <ApplicationLogo className="relative z-10 w-20 h-20 fill-current text-gray-500" />
        </Link>
      </div>

      <div className="relative z-10 w-full sm:max-w-sm mt-6 p-6 bg-white shadow overflow-hidden sm:rounded-lg">
        {children}
      </div>

      <div className="relative z-10 w-full sm:max-w-sm mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Catatan Cak Adi. All rights reserved.
      </div>
    </div>
  );
}
