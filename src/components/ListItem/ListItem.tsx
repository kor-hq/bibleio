import React from 'react';
import clsx from 'clsx';

import * as RadixCollapsible from '@radix-ui/react-collapsible';
import { CollapsibleProps as RadixCollapsibleProps } from '@radix-ui/react-collapsible';

export type ListItemProps = {
  text: string;
  selected?: boolean;
  className?: string;
};

export const ListItem = ({
  text = 'List Item',
  selected = false,
  className,
}: ListItemProps) => {
  return (
    <div
      className={
        selected
          ? clsx(
              'flex w-full items-center rounded-12 border border-stroke bg-fg-2 px-12 py-8 text-text shadow-material-component',
              className
            )
          : clsx('flex w-full items-center px-12 py-8 text-text', className)
      }
    >
      {text}
    </div>
  );
};

export type ListItemCollapsibleProps = RadixCollapsibleProps & {
  text: string;
  selected?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const ListItemCollapsible = ({
  text = 'List Item',
  selected = false,
  className,
  children,
  ...props
}: ListItemCollapsibleProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <RadixCollapsible.Root
      open={open}
      onOpenChange={setOpen}
      {...props}
      className="w-full"
    >
      <RadixCollapsible.Trigger>
        <div
          className={
            selected
              ? clsx(
                  'flex w-full items-center justify-between gap-x-8 rounded-12 border border-stroke bg-fg-2 px-12 py-8 text-text shadow-material-component',
                  className
                )
              : clsx(
                  'flex w-full items-center justify-between gap-x-8 px-12 py-8 text-text',
                  className
                )
          }
        >
          {text}
          {open ? <IconChevronUp /> : <IconChevronDown />}
        </div>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="flex flex-col gap-0 pl-16">
        {children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
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
      strokeWidth={1.5}
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
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );
};
