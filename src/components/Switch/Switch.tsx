import * as RadixSwitch from '@radix-ui/react-switch';
import { SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';
import React from 'react';

export type SwitchProps = RadixSwitchProps;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="relative h-[30px] w-[50px] cursor-pointer rounded-full border border-stroke bg-fg-2 p-4 shadow-material-component outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-33"
      {...props}
    >
      <RadixSwitch.Thumb className="transition-[transform, background-color] translate-x-0.5 data-[state=checked]:bg-light-accent dark:bg-white/10 block size-20 rounded-full bg-text duration-150 ease-out will-change-transform data-[state=checked]:translate-x-[20px] data-[state=checked]:bg-accent-reversed" />
    </RadixSwitch.Root>
  );
};
