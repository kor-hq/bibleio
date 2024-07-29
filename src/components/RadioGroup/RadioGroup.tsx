import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import type {
  RadioGroupProps as RadixRadioGroupProps,
  RadioGroupItemProps as RadixRadioGroupItemProps,
} from "@radix-ui/react-radio-group";
import { ReactNode } from "react";

export type RadioGroupProps = RadixRadioGroupProps & { children: ReactNode };

export const RadioGroup = ({ children, ...props }: RadioGroupProps) => {
  return (
    <RadixRadioGroup.Root
      className="flex flex-col gap-4"
      aria-label="View density"
      {...props}
    >
      {children}
    </RadixRadioGroup.Root>
  );
};

export type RadioGroupItemProps = RadixRadioGroupItemProps & { label: string };

export const RadioGroupItem = ({ label, ...props }: RadioGroupItemProps) => {
  return (
    <div className="flex gap-8 items-center">
      <RadixRadioGroup.Item
        className="size-[30px] rounded-full bg-light-fg-2 border border-light-stroke shadow-light-material-component dark:bg-dark-fg-2 dark:border-dark-stroke dark:shadow-dark-material-component data-[disabled]:bg-light-fg-disabled dark:data-[disabled]:bg-dark-fg-disabled data-[disabled]:border-light-stroke-disabled dark:data-[disabled]:border-dark-stroke-disabled data-[disabled]:cursor-not-allowed"
        {...props}
      >
        <RadixRadioGroup.Indicator className="flex items-center justify-center size-full relative after:content-[''] after:block after:size-16 after:rounded-full after:bg-light-accent dark:after:bg-dark-accent after:data-[state='checked']:animate-scale-in after:data-[state='unchecked']:animate-scale-out data-[disabled]:opacity-30 " />
      </RadixRadioGroup.Item>
      <label className="leading-none text-light-text dark:text-dark-text body">
        {label}
      </label>
    </div>
  );
};
