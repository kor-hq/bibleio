import * as RadixProgress from '@radix-ui/react-progress';
import { ProgressProps as RadixProgressProps } from '@radix-ui/react-progress';
import React from 'react';

export type ProgressProps = RadixProgressProps;
export const Progress = ({ value = 50, ...props }: ProgressProps) => {
  return (
    <RadixProgress.Root
      {...props}
      value={value}
      className="relative h-[40px] min-w-128 overflow-hidden rounded-12 border border-light-stroke bg-light-fg-2 shadow-light-material-component dark:border-dark-stroke dark:bg-dark-fg-2 dark:shadow-dark-material-component"
    >
      <RadixProgress.Indicator
        className="h-full w-full bg-light-accent shadow-light-coloured-component transition-transform duration-[300ms] ease-out dark:bg-dark-accent dark:shadow-dark-coloured-component"
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </RadixProgress.Root>
  );
};
