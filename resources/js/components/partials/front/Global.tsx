import { twMerge } from "@/utils/tailwind";
import { Link } from "@inertiajs/react";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

type GlobalSectionProps<T = {}> = T & {
  children: JSX.Element[] | ReactNode | ReactNode[] | JSX.Element;
  className?: string;
  containerClassName?: string;
};

export function GlobalSection({
  children,
  className,
  containerClassName,
}: GlobalSectionProps) {
  return (
    <section className={twMerge(className as string, "bg-white py-16")}>
      <div className={twMerge(containerClassName as string, "container")}>
        {children}
      </div>
    </section>
  );
}

export function GlobalSectionWithTitle({
  title,
  children,
  className,
  containerClassName,
  moreButton,
}: GlobalSectionProps<{
  title: string;
  moreButton?: { title: string; link: string; internal?: boolean };
}>) {
  return (
    <GlobalSection
      className={className}
      containerClassName={containerClassName}
    >
      <div className="flex flex-col md:flex-row md:items-center mb-4 gap-1 md:gap-6">
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
          {title}
        </h3>
        {moreButton &&
          (moreButton.internal ? (
            <Link
              href={moreButton.link}
              className="flex group w-fit items-center gap-2"
            >
              <span className="z-10 bg-white">{moreButton.title}</span>
              <FaArrowRight className="invisible -ml-10 group-hover:visible group-hover:m-0 transition-all duration-200" />
            </Link>
          ) : (
            <a
              target="_blank"
              href={moreButton.link}
              className="flex group w-fit items-center gap-2"
            >
              <span className="z-10 bg-white">{moreButton.title}</span>
              <FaArrowRight className="invisible -ml-10 group-hover:visible group-hover:m-0 transition-all duration-200" />
            </a>
          ))}
      </div>
      {Array.isArray(children) ? children : [children]}
    </GlobalSection>
  );
}
