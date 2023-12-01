import { jsx } from "react/jsx-runtime";
import { t as twMerge } from "./tailwind-3a0d7fb3.js";
import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
const TextInput = forwardRef(function TextInput2({
  type = "text",
  className = "",
  isFocused = false,
  disabled = false,
  readOnly = false,
  ...props
}, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      var _a;
      return (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }));
  useEffect(() => {
    var _a;
    if (isFocused) {
      (_a = localRef.current) == null ? void 0 : _a.focus();
    }
  }, []);
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      disabled,
      readOnly,
      type,
      className: twMerge(
        className,
        "px-3 py-2 text-base border border-gray-300 rounded-lg outline-none focus:border-green-500 focus:ring-0",
        (disabled || readOnly) && "bg-gray-100 text-gray-500 cursor-default",
        disabled && "cursor-not-allowed"
      ),
      ref: localRef
    }
  );
});
export {
  TextInput as T
};
