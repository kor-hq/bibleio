import * as RadixSwitch from "@radix-ui/react-switch";
import type { SwitchProps as RadixSwitchProps } from "@radix-ui/react-switch";
import React from "react";

export type SwitchProps = RadixSwitchProps;

export const Switch = ({ ...props }: SwitchProps) => {
  return (
    <RadixSwitch.Root
      className="border-stroke bg-fg-2 shadow-material-component data-[disabled]:opacity-33 relative h-[1.875rem] w-[3.125rem] cursor-pointer rounded-full border p-4 outline-none data-[disabled]:cursor-not-allowed"
      {...props}
    >
      <RadixSwitch.Thumb className="transition-[transform, background-color] data-[state=checked]:bg-light-accent data-[state=checked]:bg-accent-reversed block size-[1.25rem] translate-x-0.5 rounded-full bg-[#000000]/50 duration-150 ease-out will-change-transform data-[state=checked]:translate-x-[1.25rem] dark:data-[state=unchecked]:bg-[#ffffff]/50" />
    </RadixSwitch.Root>
  );
};
