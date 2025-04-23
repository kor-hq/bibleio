import * as RadixProgress from "@radix-ui/react-progress";
import type { ProgressProps as RadixProgressProps } from "@radix-ui/react-progress";
import React from "react";

export type ProgressProps = RadixProgressProps;
export const Progress = ({ value = 50, ...props }: ProgressProps) => {
  return (
    <RadixProgress.Root
      {...props}
      value={value}
      className="min-w-128 rounded-12 border-stroke bg-fg-2 shadow-material-component relative h-[2.5rem] overflow-hidden border"
    >
      <RadixProgress.Indicator
        className="bg-accent-reversed shadow-colored-component h-full w-full transition-transform duration-[300ms] ease-out"
        // @ts-expect-error - The default value is literally defined above so idk
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </RadixProgress.Root>
  );
};
