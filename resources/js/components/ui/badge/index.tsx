import badgeSize from "./size";
import React from "react";
import { cva, type VariantProps } from "cva";
import {
  badgeSolid,
  badgeOutline,
  badgeLink,
  badgeTint,
  badgeGhost,
} from "./variance";

const badge = cva(
  "outline-0 outline-none duration-200 transition-all flex items-center",
  {
    variants: {
      variant: {
        ...badgeSolid,
        ...badgeOutline,
        ...badgeGhost,
        ...badgeTint,
        ...badgeLink,
      },
      size: {
        ...badgeSize,
      },
    },
    compoundVariants: [{ variant: "primary", size: "md" }],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement | HTMLElement>,
    VariantProps<typeof badge> {
  tag?: string | keyof JSX.IntrinsicElements;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  tag,
  ...props
}) => {
  return React.createElement(tag ?? "span", {
    className: badge({ className, variant, size }),
    ...props,
  });
};
