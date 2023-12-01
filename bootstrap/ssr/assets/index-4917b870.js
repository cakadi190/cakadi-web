import { jsx } from "react/jsx-runtime";
import React from "react";
import { cva } from "cva";
const buttonSize = {
  sm: ["px-3 py-2 text-sm", "rounded-md", "gap-1"],
  md: ["px-4 py-2 text-base", "rounded-lg", "gap-2"],
  lg: ["px-5 py-2.5 text-xl", "rounded-xl", "gap-3"],
  xl: ["px-5 py-4 text-2xl", "rounded-xl", "gap-5"]
};
const buttonSolid = {
  primary: [
    "text-white bg-green-500",
    "hover:bg-green-600 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  secondary: [
    "text-white bg-indigo-500",
    "hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  success: [
    "text-white bg-teal-500",
    "hover:bg-teal-600 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  danger: [
    "text-white bg-red-500",
    "hover:bg-red-600 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const buttonOutline = {
  "outline-primary": [
    "bg-transparent text-green-500 border border-green-500",
    "hover:bg-green-50 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "outline-secondary": [
    "bg-transparent text-indigo-500 border border-indigo-500",
    "hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "outline-success": [
    "bg-transparent text-teal-500 border border-teal-500",
    "hover:bg-teal-50 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "outline-danger": [
    "bg-transparent text-red-500 border border-red-500",
    "hover:bg-red-50 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const buttonGhost = {
  "ghost-primary": [
    "text-green-500",
    "hover:bg-green-600 hover:text-white focus:bg-green-700 focus:text-white focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "ghost-secondary": [
    "text-indigo-500",
    "hover:bg-indigo-600 hover:text-white focus:bg-indigo-700 focus:text-white focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "ghost-success": [
    "text-teal-500",
    "hover:bg-teal-600 hover:text-white focus:bg-teal-700 focus:text-white focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "ghost-danger": [
    "text-red-500",
    "hover:bg-red-600 hover:text-white focus:bg-red-700 focus:text-white focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const buttonLink = {
  "link-primary": [
    "text-green-500",
    "hover:bg-green-500 hover:text-white focus:bg-green-700 focus:text-white focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "link-secondary": [
    "text-indigo-500",
    "hover:bg-indigo-500 hover:text-white focus:bg-indigo-700 focus:text-white focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "link-success": [
    "text-teal-500",
    "hover:bg-teal-500 hover:text-white focus:bg-teal-700 focus:text-white focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "link-danger": [
    "text-red-500",
    "hover:bg-red-500 hover:text-white focus:bg-red-700 focus:text-white focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const buttonTint = {
  "tint-primary": [
    "text-green-500 bg-green-50",
    "hover:bg-green-100 focus:ring-2 focus:ring-green-500/[.75] focus:ring-offset-2"
  ],
  "tint-secondary": [
    "text-indigo-500 bg-indigo-50",
    "hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-500/[.75] focus:ring-offset-2"
  ],
  "tint-success": [
    "text-teal-500 bg-teal-50",
    "hover:bg-teal-100 focus:ring-2 focus:ring-teal-500/[.75] focus:ring-offset-2"
  ],
  "tint-danger": [
    "text-red-500 bg-red-50",
    "hover:bg-red-100 focus:ring-2 focus:ring-red-500/[.75] focus:ring-offset-2"
  ]
};
const button = cva(
  "outline-0 outline-none duration-200 transition-all flex items-center",
  {
    variants: {
      variant: {
        ...buttonSolid,
        ...buttonOutline,
        ...buttonGhost,
        ...buttonTint,
        ...buttonLink
      },
      size: {
        ...buttonSize
      }
    },
    compoundVariants: [{ variant: "primary", size: "md" }],
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, style, ...props }, ref) => /* @__PURE__ */ jsx(
    "button",
    {
      style,
      ref,
      className: button({ className, variant, size }),
      ...props
    }
  )
);
export {
  Button as B
};
