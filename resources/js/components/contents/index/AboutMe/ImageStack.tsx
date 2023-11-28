import { asset, assetImage } from "@/utils/folder";
import { twMerge } from "@/utils/tailwind";
import {
  FigmaOriginal,
  FlutterOriginal,
  JavascriptOriginal,
  KotlinOriginal,
  LaravelOriginal,
  NextjsOriginal,
  NodejsOriginal,
  TypescriptOriginal,
} from "@beta/devicons-react";
import React from "react";
import { Tooltip } from "react-tooltip";

function IconSection({
  className,
  icon,
  title,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div
      className={twMerge(
        className as string,
        "bg-white absolute p-4 2xl:p-5 rounded-full shadow-lg border border-gray-300 transition-all duration-200 hover:scale-125"
      )}
      data-tooltip-id="profile-tech-circle"
      data-tooltip-content={title}
    >
      {icon}
    </div>
  );
}

interface IconStackInterface {
  className?: string;
  icon: React.ReactNode;
  title: string;
}

function IconStacks({ icons }: { icons: IconStackInterface[] }) {
  return icons.map((icon, index) => (
    <IconSection
      title={icon.title}
      key={index}
      className={icon.className}
      icon={icon.icon}
    />
  ));
}

const ImageStack: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center h-full aspect-square">
      <div className="overflow-hidden border-gray-200 border-8 rounded-full w-56 2xl:w-72 h-56 2xl:h-72">
        <img loading="lazy" src={asset("pp.png")} className="w-full h-full" />
      </div>

      <IconStacks
        icons={[
          {
            className: "top-12 right-12",
            icon: <KotlinOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "Kotlin",
          },
          {
            className: "top-12 left-12",
            icon: <LaravelOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "Laravel",
          },
          {
            className: "top-0 left-0 right-0 mx-auto w-fit",
            icon: (
              <TypescriptOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />
            ),
            title: "Typescript",
          },
          {
            className: "bottom-0 left-0 right-0 mx-auto w-fit",
            icon: (
              <JavascriptOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />
            ),
            title: "Javascript",
          },
          {
            className: "bottom-0 top-0 bottom-0 my-auto h-fit left-0",
            icon: <FigmaOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "Figma",
          },
          {
            className: "bottom-0 top-0 bottom-0 my-auto h-fit right-0",
            icon: <NextjsOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "NextJS",
          },
          {
            className: "bottom-12 right-12",
            icon: <NodejsOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "NodeJS",
          },
          {
            className: "bottom-12 left-12",
            icon: <FlutterOriginal className="!w-8 2xl:!w-12 !h-8 2xl:!h-12" />,
            title: "Flutter",
          },
        ]}
      />
      <Tooltip id="profile-tech-circle" className="!rounded-xl !bg-gray-900" />
    </div>
  );
};

export default ImageStack;
