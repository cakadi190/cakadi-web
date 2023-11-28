import { asset } from "@/utils/folder";
import HeaderCTA from "./HeaderCTA";
import HeaderTitle from "./HeaderTitle";
import StackTech from "./StackTech";

export default function HeaderInner() {
  return (
    <div className="grid grid-cols-12 gap-2 text-center items-center">
      <div className="col-span-12 md:col-span-6 md:text-start">
        <HeaderTitle />
        <HeaderCTA />
        <StackTech />
      </div>
      <div className="col-span-12 hidden md:inline-flex md:col-span-6">
        <img
          loading="lazy"
          src={asset("fotoku.min.png")}
          alt="Cak Adi"
          className="w-full"
        />
      </div>
    </div>
  );
}
