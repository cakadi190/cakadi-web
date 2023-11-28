import { Button } from "@/components/ui/buttons";
import { Link } from "@inertiajs/react";
import { RiFilePdf2Fill } from "react-icons/ri";

export default function HeaderCTA() {
  return (
    <div className="flex justify-center md:justify-start gap-2 mt-5">
      <Link href="/contact-me" className="outline-0 outline-none">
        <Button size="lg">Hubungi Saya</Button>
      </Link>
      <a href="" target="_blank" className="outline-0 outline-none">
        <Button
          size="lg"
          variant="ghost-primary"
          className="!text-gray-500 hover:!text-white focus:!text-white"
        >
          <RiFilePdf2Fill />
          <span>Resume</span>
        </Button>
      </a>
    </div>
  );
}
