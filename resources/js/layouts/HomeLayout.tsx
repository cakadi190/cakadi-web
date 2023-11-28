import Footer from "@/components/partials/front/Footer";
import NavbarMain from "@/components/partials/front/Navbar";
import { twMerge } from "@/utils/tailwind";
import { PropsWithChildren, ReactNode } from "react";

function HeaderPartial({ header }: { header: ReactNode | JSX.Element }) {
  return (
    <header className="bg-gradient-to-t from-white min-h-[25vh] pt-28 pb-8">
      <div className="container">{header}</div>
    </header>
  );
}

const HomeLayout = ({
  children,
  className,
  header,
}: PropsWithChildren & {
  className?: string;
  header?: ReactNode | JSX.Element;
}) => {
  return (
    <div
      className={twMerge(
        "bg-grid relative min-h-screen",
        className ?? ("" as string)
      )}
    >
      <NavbarMain />
      {header && <HeaderPartial header={header} />}
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
