import buttonSize from "./size";
import React from "react";
import { cva, type VariantProps } from "cva";
import { buttonSolid, buttonOutline, buttonLink, buttonTint, buttonGhost } from "./variance";

const button = cva("outline-0 outline-none duration-200 transition-all flex items-center", {
  variants: {
    variant: {
      ...buttonSolid,
      ...buttonOutline,
      ...buttonGhost,
      ...buttonTint,
      ...buttonLink,
    },
    size: {
      ...buttonSize
    },
  },
  compoundVariants: [{ variant: "primary", size: "md" }],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => <button className={button({ className, variant, size })} {...props} />;
