import * as RadixSlider from '@radix-ui/react-slider';
import type { SliderProps as RadixSliderProps } from '@radix-ui/react-slider';
import React from 'react';

export type SliderProps = RadixSliderProps;

export const Slider = ({ ...props }: RadixSliderProps) => {
  return (
    <RadixSlider.Root
      {...props}
      className="h-5 relative flex w-full touch-none select-none items-center data-[orientation='vertical']:h-full data-[orientation='vertical']:flex-col"
    >
      <RadixSlider.Track className="relative h-[2px] grow rounded-full bg-light-stroke data-[orientation='vertical']:h-full data-[orientation='vertical']:w-[2px] data-[disabled]:bg-light-stroke-disabled dark:bg-dark-stroke dark:data-[disabled]:bg-dark-stroke-disabled">
        <RadixSlider.Range className="absolute rounded-full bg-light-accent data-[orientation='horizontal']:h-full data-[orientation='vertical']:w-full data-[disabled]:opacity-[0.33] dark:bg-dark-accent" />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="block h-24 w-12 rounded-full border border-light-stroke bg-light-accent shadow-light-coloured-component outline-none duration-150 ease-out hover:scale-110 data-[orientation='vertical']:h-12 data-[orientation='vertical']:w-24 data-[disabled]:contrast-50 dark:border-dark-stroke dark:bg-dark-accent dark:shadow-dark-coloured-component dark:data-[disabled]:brightness-50"
        aria-label="Volume"
      />
    </RadixSlider.Root>
  );
};
