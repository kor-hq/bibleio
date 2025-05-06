import * as RadixSelect from "@radix-ui/react-select";
import type {
  SelectItemProps as RadixSelectItemProps,
  SelectProps as RadixSelectProps,
} from "@radix-ui/react-select";
import { clsx } from "clsx";
import React, { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CustomSelectProps {
  label: string;
  className?: string;
}

export type SelectProps = CustomSelectProps & RadixSelectProps;
export const Select = ({
  label,
  children,
  className,
  ...props
}: SelectProps) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className={twMerge(
          clsx(
            "rounded-12 border-stroke bg-fg-2 text-text shadow-material-component data-[disabled]:opacity-33 group flex w-fit justify-between gap-12 border px-16 py-8 outline-1 duration-150 ease-out enabled:hover:-translate-y-[2px] enabled:active:translate-y-4 data-[disabled]:cursor-not-allowed",
            className
          )
        )}
        aria-label={label}
      >
        <RadixSelect.Value placeholder={label} />
        <RadixSelect.Icon
          asChild
          className="duration-150 ease-out group-data-[state=open]:-rotate-180"
        >
          <IconChevronDown />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="rounded-12 border-stroke bg-fg-2 shadow-material-component data-[state='open']:animate-scale-in relative z-50 mt-4 max-h-[512px] w-full overflow-hidden border font-serif"
        >
          <RadixSelect.ScrollUpButton className="flex h-fit cursor-default items-center justify-center py-2">
            <IconChevronUp />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="flex flex-col gap-14 p-16">
            {children}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="flex h-fit cursor-default items-center justify-center py-2">
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
      className="text-body text-text data-[state='checked']:text-accent-reversed data-[disabled]:opacity-33 relative flex h-fit cursor-pointer select-none items-center justify-between gap-8 font-serif leading-none outline-none duration-150 ease-out data-[disabled]:pointer-events-none data-[highlighted]:translate-x-4 data-[state='checked']:font-semibold"
      {...props}
      ref={forwardedRef}
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator asChild>
        <IconCheck />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
});

export const SelectGroup = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Group className="flex flex-col gap-14">
      {children}
    </RadixSelect.Group>
  );
};

export const SelectLabel = ({ children }: { children: ReactNode }) => {
  return (
    <RadixSelect.Label className="text-sub text-text">
      {children}
    </RadixSelect.Label>
  );
};

export const SelectSeparator = () => {
  return <RadixSelect.Separator className="bg-stroke h-[1px] w-full" />;
};

const IconChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text duration-100 ease-out group-data-[state=open]:-rotate-180"
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
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
};

const IconCheck = () => {
  return (
    <svg
      width="1rem"
      height="1rem"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icons-tabler-outline icon-tabler-check"
    >
      <path
        d="M3.33334 8L6.66667 11.3333L13.3333 4.66667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
