"use client";

import type {
  ButtonHTMLAttributes,
  ReactNode,
  MouseEvent,
} from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  scrollTo?: string;
};

export default function Button({
  children,
  variant = "primary",
  scrollTo,
  onClick,
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-gray-800 hover:bg-gray-300";

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    onClick?.(event);

    if (event.defaultPrevented || !scrollTo) return;

    document.getElementById(scrollTo)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (
      scrollTo === "artikel" &&
      window.location.hash !== "#artikel"
    ) {
      window.history.replaceState(null, "", "#artikel");
    }
  }

  return (
    <button
      type="button"
      className={`rounded-lg px-4 py-2 font-medium transition ${styles} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}