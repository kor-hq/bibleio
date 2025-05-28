import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function Skeleton({ ...props }) {
  return (
    <div
      className={twMerge(
        clsx(props.className, "rounded-8 bg-text/15 animate-pulse")
      )}
    />
  );
}
