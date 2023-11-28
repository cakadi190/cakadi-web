import { twMerge } from "@/utils/tailwind";
import { InputHTMLAttributes } from "react";

export default function Checkbox({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="checkbox"
      className={twMerge(
        "transition-all p-2 duration-200 rounded border-gray-300 text-green-600 shadow-sm focus:border-green-500 focus:ring-green-500",
        className
      )}
    />
  );
}
