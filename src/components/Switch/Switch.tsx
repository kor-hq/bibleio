import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import React from 'react';

export type SwitchProps = RadixSwitchProps;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="relative h-[30px] w-[50px] cursor-pointer rounded-full border border-light-stroke bg-light-fg-2 p-4 shadow-light-material-component outline-none data-[disabled]:cursor-not-allowed dark:border-dark-stroke dark:bg-dark-fg-2 dark:shadow-dark-material-component"
      {...props}
    >
      <RadixSwitch.Thumb className="transition-[transform, background-color] translate-x-0.5 block size-20 rounded-full bg-light-stroke/30 duration-150 ease-out will-change-transform data-[state=checked]:translate-x-[20px] data-[state=checked]:bg-light-accent dark:bg-white/10 dark:data-[state=checked]:bg-dark-accent" />
    </RadixSwitch.Root>
  );
};
