import * as RadixCheckbox from '@radix-ui/react-checkbox';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';
import React from 'react';

export type CheckboxProps = RadixCheckboxProps;

export const Checkbox = ({ ...props }: RadixCheckboxProps) => {
  return (
    <RadixCheckbox.Root
      className="flex size-[30px] items-center justify-center rounded-8 border border-light-stroke bg-light-fg-2 shadow-light-material-component data-[disabled]:border-light-stroke-disabled data-[disabled]:bg-light-fg-disabled dark:border-dark-stroke dark:bg-dark-fg-2 dark:shadow-dark-material-component"
      {...props}
    >
      <RadixCheckbox.Indicator className="text-light-accent data-[state='checked']:animate-scale-in data-[state='unchecked']:animate-scale-out data-[disabled]:opacity-30 dark:text-dark-accent">
        <IconCheck />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

const IconCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 12l5 5l10 -10" />
    </svg>
  );
};
