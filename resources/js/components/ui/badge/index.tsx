import badgeSize from "./size";
import React, { forwardRef } from "react";
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
  style?: React.CSSProperties;
}

export const Badge = forwardRef<HTMLElement, BadgeProps>(
  ({ className, variant, size, tag, style, ...props }, ref) => {
    return React.createElement(tag ?? 'span', {
      ...props,
      ref,
      className: badge({ className, variant, size }),
      style: style,
    });
  }
);
