import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import type {
  RadioGroupProps as RadixRadioGroupProps,
  RadioGroupItemProps as RadixRadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import React, { ReactNode } from 'react';

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
    <div className="flex items-center gap-8">
      <RadixRadioGroup.Item
        className="size-[30px] rounded-full border border-light-stroke bg-light-fg-2 shadow-light-material-component data-[disabled]:cursor-not-allowed data-[disabled]:border-light-stroke-disabled data-[disabled]:bg-light-fg-disabled dark:border-dark-stroke dark:bg-dark-fg-2 dark:shadow-dark-material-component dark:data-[disabled]:border-dark-stroke-disabled dark:data-[disabled]:bg-dark-fg-disabled"
        {...props}
      >
        <RadixRadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-16 after:rounded-full after:bg-light-accent after:content-[''] data-[disabled]:opacity-30 after:data-[state='checked']:animate-scale-in after:data-[state='unchecked']:animate-scale-out dark:after:bg-dark-accent" />
      </RadixRadioGroup.Item>
      <label className="body leading-none text-light-text dark:text-dark-text">
        {label}
      </label>
    </div>
  );
};
