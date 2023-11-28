import { Button } from "@/components/ui/buttons";
import { twMerge } from "@/utils/tailwind";
import { Link } from "@inertiajs/react";
import { FaArrowRight } from "react-icons/fa";

export function Title() {
  return (
    <>
      <h3
        className={twMerge(
          twMerge(
            "font-bold relative text-3xl mb-3 w-fit pb-2 font-heading",
            "hover:text-green-500 transition-all duration-200"
          ),
          twMerge(
            "before:rounded-lg before:absolute before:bottom-0 before:left-0 before:content-[''] before:w-1/4 before:h-1 before:bg-green-500 before:transition-all before:duration-200",
            "before:hover:w-[85%]"
          )
        )}
      >
        Tentang Saya
      </h3>

      <h3 className="font-title text-green-500 font-bold text-3xl md:text-5xl">
        Web Developer, Desainer Grafis, Android Apps Dev
      </h3>
    </>
  );
}

export function Description() {
  return (
    <p className="text-md mb-4 text-gray-500">
      Saya adalah seorang fullstack web developer, junior android developer dan
      desainer grafis yang berasal dari Kota Ngawi, Jawa Timur. Saya memiliki
      pengalaman dalam membuat website dengan menggunakan teknologi Laravel,
      ReactJS, dan TailwindCSS. Saya juga memiliki pengalaman dalam membuat
      aplikasi android dengan menggunakan teknologi Kotlin dan Java. Saya juga
      memiliki pengalaman dalam membuat desain grafis dengan menggunakan
      aplikasi CorelDraw dan Adobe Illustrator.
    </p>
  );
}

export function ButtonCTA() {
  return (
    <div className="flex gap-2">
      <Link href="/about-me">
        <Button>
          <span>Lihat Selengkapnya</span>
          <FaArrowRight />
        </Button>
      </Link>
      <Link href="/contact-me">
        <Button variant={`ghost-primary`}>Hubungi Saya</Button>
      </Link>
    </div>
  );
}
