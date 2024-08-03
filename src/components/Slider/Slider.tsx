import * as RadixSlider from "@radix-ui/react-slider";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import React from "react";

export type SliderProps = RadixSliderProps;

export const Slider = ({ ...props }: RadixSliderProps) => {
  return (
    <RadixSlider.Root
      {...props}
      className="relative flex data-[orientation='vertical']:flex-col items-center select-none touch-none w-full  data-[orientation='vertical']:h-full h-5"
    >
      <RadixSlider.Track className="bg-light-stroke dark:bg-dark-stroke data-[disabled]:bg-light-stroke-disabled dark:data-[disabled]:bg-dark-stroke-disabled relative grow rounded-full h-[2px] data-[orientation='vertical']:w-[2px]  data-[orientation='vertical']:h-full">
        <RadixSlider.Range className="absolute data-[orientation='horizontal']:h-full data-[orientation='vertical']:w-full rounded-full bg-light-accent dark:bg-dark-accent data-[disabled]:opacity-[0.33]" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block w-12 h-24 data-[orientation='vertical']:h-12  data-[orientation='vertical']:w-24 data-[disabled]:contrast-50 dark:data-[disabled]:brightness-50 rounded-full border duration-150 ease-out outline-none bg-light-accent dark:bg-dark-accent border-light-stroke dark:border-dark-stroke shadow-light-coloured-component dark:shadow-dark-coloured-component hover:scale-110"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};
