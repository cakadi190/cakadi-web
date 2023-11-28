import {
  BootstrapPlain,
  FigmaOriginal,
  LaravelOriginal,
  NuxtjsPlain,
  VscodeOriginal,
  VuejsOriginal,
  WordpressPlain,
} from "@beta/devicons-react";
import { Tooltip } from "react-tooltip";

export default function StackTech() {
  const stackTechList = [
    {
      icon: <LaravelOriginal className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "Laravel",
    },
    {
      icon: <WordpressPlain className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "WordPress",
    },
    {
      icon: <NuxtjsPlain className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "NuxtJS",
    },
    {
      icon: <VuejsOriginal className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "VueJS",
    },
    {
      icon: <BootstrapPlain className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "Bootstrap",
    },
    {
      icon: <VscodeOriginal className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "Visual Studio Code",
    },
    {
      icon: <FigmaOriginal className="!w-7 md:!w-9 !h-7 md:!h-9" />,
      title: "Figma",
    },
  ];

  return (
    <div className="mt-8">
      <p className="text-lg mb-1">
        <em>Stack Tech</em> Andalan
      </p>

      <div className="flex flex-nowrap gap-4 justify-center md:justify-start items-center">
        {stackTechList.map((stackTech, index) => (
          <div
            key={index}
            data-tooltip-id="stack-tech-tooltip"
            data-tooltip-content={stackTech.title}
            className="cursor-pointer"
          >
            {stackTech.icon}
          </div>
        ))}

        <Tooltip id="stack-tech-tooltip" className="!rounded-xl" />
      </div>
    </div>
  );
}
