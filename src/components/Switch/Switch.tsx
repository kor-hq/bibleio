import * as RadixSwitch from "@radix-ui/react-switch";
import { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";
import React from "react";

export type SwitchProps = RadixSwitchProps;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="w-[50px] h-[30px] bg-light-fg-2 border border-light-stroke shadow-light-material-component dark:bg-dark-fg-2 dark:border-dark-stroke dark:shadow-dark-material-component p-4 rounded-full relative outline-none cursor-pointer data-[disabled]:cursor-not-allowed"
      {...props}
    >
      <RadixSwitch.Thumb className="block size-20 bg-light-stroke/30 dark:bg-white/10 data-[state=checked]:bg-light-accent dark:data-[state=checked]:bg-dark-accent rounded-full transition-[transform, background-color] duration-150 ease-out translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[20px]" />
    </RadixSwitch.Root>
  );
};
