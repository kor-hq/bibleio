import * as RadixSlider from "@radix-ui/react-slider";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export type SliderProps = RadixSliderProps;

export const Slider = ({ ...props }: RadixSliderProps) => {
  return (
    <RadixSlider.Root
      {...props}
      className={twMerge(
        clsx(
          props.className,
          "relative flex h-11 w-full touch-manipulation select-none items-center data-[orientation='vertical']:h-full data-[disabled]:cursor-not-allowed data-[orientation='vertical']:flex-col"
        )
      )}
    >
      <RadixSlider.Track className="bg-stroke data-[disabled]:opacity-33 relative h-[4px] grow rounded-full data-[orientation='vertical']:h-full data-[orientation='vertical']:w-[4px]">
        <RadixSlider.Range className="bg-accent-reversed absolute rounded-full data-[orientation='horizontal']:h-full data-[orientation='vertical']:w-full" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="border-stroke bg-accent-reversed shadow-colored-component block h-[1.5rem] w-[1.5rem] rounded-full border outline-none duration-150 ease-out enabled:hover:scale-110 data-[orientation='vertical']:h-12 data-[orientation='vertical']:w-24 data-[disabled]:contrast-50 dark:data-[disabled]:brightness-50"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};
