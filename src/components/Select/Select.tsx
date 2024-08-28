import React, { ReactNode } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import {
  SelectItemProps as RadixSelectItemProps,
  SelectProps as RadixSelectProps,
} from '@radix-ui/react-select';

interface CustomSelectProps {
  label: string;
}

export type SelectProps = CustomSelectProps & RadixSelectProps;
export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className="flex justify-between gap-12 rounded-12 border border-light-stroke bg-light-fg-2 px-16 py-8 font-serif text-light-text shadow-light-material-component outline-1 duration-150 ease-out hover:-translate-y-[2px] focus-visible:outline-light-accent active:translate-y-4 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[state='open']:rounded-b-4 data-[disabled]:border-light-stroke-disabled data-[disabled]:bg-light-fg-disabled data-[disabled]:text-light-text-subtle dark:border-dark-stroke dark:bg-dark-fg-2 dark:text-dark-text dark:shadow-dark-material-component dark:data-[disabled]:border-dark-stroke-disabled dark:data-[disabled]:bg-dark-fg-disabled dark:data-[disabled]:text-dark-text-subtle"
        aria-label={label}
      >
        <RadixSelect.Value placeholder={label} />
        <RadixSelect.Icon>
          <IconChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="bg-fg-2 relative z-50 mt-4 max-h-[512px] w-full overflow-hidden rounded-12 rounded-t-4 border border-light-stroke bg-light-fg-2 font-serif shadow-light-material-component data-[state='open']:animate-scale-in dark:border-dark-stroke dark:bg-dark-fg-2 dark:shadow-dark-material-component"
        >
          <RadixSelect.ScrollUpButton className="py-2 flex h-fit cursor-default items-center justify-center border-b border-light-stroke dark:border-dark-stroke">
            <IconChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-12 p-16">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="py-2 flex h-fit cursor-default items-center justify-center border-t border-light-stroke dark:border-dark-stroke">
            <IconChevronDown />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

export type SelectItemProps = RadixSelectItemProps;
export const SelectItem = React.forwardRef<
  HTMLDivElement,
  RadixSelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <RadixSelect.Item
      className={`body relative flex h-fit cursor-pointer select-none items-center px-32 font-serif leading-none text-light-text outline-none duration-150 ease-out data-[disabled]:pointer-events-none data-[highlighted]:translate-x-4 data-[state='checked']:font-semibold data-[disabled]:text-light-text-subtle data-[state='checked']:text-light-accent dark:text-dark-text dark:data-[disabled]:text-dark-text-subtle`}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemIndicator className="absolute left-0 inline-flex w-24 items-center justify-center">
        <IconCheck />
      </RadixSelect.ItemIndicator>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
    </RadixSelect.Item>
  );
});

export const SelectGroup = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Group className="flex flex-col gap-16">
      {children}
    </RadixSelect.Group>
  );
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Label className="px-24 text-sub text-light-text/80 dark:text-dark-text/80">
      {children}
    </RadixSelect.Label>
  );
};

export const SelectSeparator = () => {
  return (
    <RadixSelect.Separator className="h-[1px] w-full bg-light-stroke dark:bg-dark-stroke" />
  );
};

const IconChevronDown = () => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
};
const IconChevronUp = () => {
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
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
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
