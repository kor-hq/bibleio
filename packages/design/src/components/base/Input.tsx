import clsx from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={twMerge(
        clsx(
          props.className,
          "rounded-12 border-stroke bg-fg-2 text-body text-text placeholder-text-subtle shadow-material-component placeholder:text-body focus:border-accent-reversed disabled:opacity-33 flex h-[2.5rem] items-center border px-16 outline-none disabled:cursor-not-allowed"
        )
      )}
    />
  );
};
