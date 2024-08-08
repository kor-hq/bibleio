import React, { ReactNode } from "react";
import * as RadixSelect from "@radix-ui/react-select";
import {
  SelectItemProps as RadixSelectItemProps,
  SelectProps as RadixSelectProps,
} from "@radix-ui/react-select";

interface CustomSelectProps {
  label: string;
}

export type SelectProps = CustomSelectProps & RadixSelectProps;
export const Select = ({ label, children, ...props }: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className="flex gap-12 justify-between px-16 py-8 font-serif border outline-1 text-light-text dark:text-dark-text bg-light-fg-2 dark:bg-dark-fg-2 border-light-stroke dark:border-dark-stroke shadow-light-material-component dark:shadow-dark-material-component rounded-12 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-light-fg-disabled data-[disabled]:border-light-stroke-disabled data-[disabled]:text-light-text-subtle dark:data-[disabled]:bg-dark-fg-disabled dark:data-[disabled]:border-dark-stroke-disabled dark:data-[disabled]:text-dark-text-subtle data-[state='open']:rounded-b-4 hover:-translate-y-[2px] active:translate-y-4 duration-150 ease-out focus-visible:outline-light-accent"
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
          className="font-serif overflow-hidden relative z-50 bg-fg-2 mt-4 max-h-[512px] w-full rounded-12 rounded-t-4 bg-light-fg-2 dark:bg-dark-fg-2 shadow-light-material-component dark:shadow-dark-material-component border border-light-stroke dark:border-dark-stroke data-[state='open']:animate-scale-in"
        >
          <RadixSelect.ScrollUpButton className="flex justify-center items-center py-2 border-b cursor-default border-light-stroke dark:border-dark-stroke h-fit">
            <IconChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-12 p-16">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex justify-center items-center py-2 border-t cursor-default border-light-stroke dark:border-dark-stroke h-fit">
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
      className={` body leading-none px-32 text-light-text dark:text-dark-text font-serif flex items-center h-fit relative select-none cursor-pointer data-[disabled]:text-light-text-subtle dark:data-[disabled]:text-dark-text-subtle data-[disabled]:pointer-events-none outline-none data-[highlighted]:translate-x-4 data-[state='checked']:font-semibold data-[state='checked']:text-light-accent duration-150 ease-out`}
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemIndicator className="inline-flex absolute left-0 justify-center items-center w-24">
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
