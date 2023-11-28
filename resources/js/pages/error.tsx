import ApplicationLogo, { ApplicationLogoAlt } from "@/components/ui/ApplicationLogo";
import { Button } from "@/components/ui/buttons";
import { Link } from "@inertiajs/react";
import { FaHome } from "react-icons/fa";

export default function ErrorPage({ status }: { status: number }) {
  const title: { [key: number]: string } = {
    503: "Service Unavailable",
    500: "Server Error",
    419: "Page Expired",
    404: "Page Not Found",
    403: "Forbidden",
  };

  const description: { [key: number]: string } = {
    503: "Sorry, we are doing some maintenance. Please check back soon.",
    500: "Whoops, something went wrong on our servers.",
    419: "Whoops, your access token has been expired or revoked.",
    404: "Sorry, the page you are looking for could not be found.",
    403: "Sorry, you are forbidden from accessing this page.",
  };

  return (
    <div className="min-h-screen text-center container flex flex-col items-center bg-gradient-to-t from-white from-[0.5%] to-transparent justify-center bg-grid">
      <div className="font-title text-8xl mb-3 font-bold">
        {status}
      </div>
      <h1 className="text-2xl md:text-4xl mb-2 font-bold font-heading text-green-600">
        {title[status]}
      </h1>
      <div className="md:text-xl">{description[status]}</div>

      {!status.toString().includes("50") && (
        <Link href="/" className="mt-3">
          <Button>
            <FaHome />
            <span>Back To Home</span>
          </Button>
        </Link>
      )}

      <ApplicationLogoAlt className="h-8 mt-8" />
    </div>
  );
}
