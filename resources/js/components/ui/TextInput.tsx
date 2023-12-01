import { twMerge } from "@/utils/tailwind";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  InputHTMLAttributes,
} from "react";

export default forwardRef(function TextInput(
  {
    type = "text",
    className = "",
    isFocused = false,
    disabled = false,
    readOnly = false,
    ...props
  }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  return (
    <input
      {...props}
      disabled={disabled}
      readOnly={readOnly}
      type={type}
      className={twMerge(
        className,
        "px-3 py-2 text-base border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-0",
        ((disabled || readOnly) && "bg-gray-100 text-gray-500 cursor-default") as string,
        (disabled && "cursor-not-allowed") as string,
      )}
      ref={localRef}
    />
  );
});
