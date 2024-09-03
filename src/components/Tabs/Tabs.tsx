import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import {
  TabsProps as RadixTabsProps,
  TabsTriggerProps as RadixTabTriggerProps,
  TabsContentProps as RadixTabContentProps,
} from '@radix-ui/react-tabs';
import { clsx } from 'clsx';

export type TabsProps = RadixTabsProps & { children: React.ReactNode };
export const Tabs = ({ children, ...props }: TabsProps) => {
  return <RadixTabs.Root {...props}>{children}</RadixTabs.Root>;
};

export const TabsList = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <RadixTabs.List className={clsx(className, 'flex gap-12')} {...props}>
      {children}
    </RadixTabs.List>
  );
};

export type TabItemProps = RadixTabTriggerProps & {
  children: React.ReactNode;
};
export const TabItemText = ({ children, ...props }: TabItemProps) => {
  return (
    <RadixTabs.Trigger
      className="group flex h-[25px] flex-col gap-4 text-body leading-none text-light-text dark:text-dark-text"
      {...props}
    >
      {children}
      <div className="h-6 w-full rounded-full bg-light-accent opacity-0 group-data-[state=active]:opacity-100 dark:bg-dark-accent" />
    </RadixTabs.Trigger>
  );
};
export const TabItemPillButton = ({ children, ...props }: TabItemProps) => {
  return (
    <RadixTabs.Trigger
      className="h-40 rounded-0 rounded-full border border-light-stroke bg-light-fg-2 px-20 py-8 text-black shadow-light-material-component data-[state=active]:bg-light-accent data-[state=active]:text-white data-[state=active]:shadow-light-coloured-component dark:border-dark-stroke dark:bg-dark-fg-2 dark:text-white dark:shadow-dark-material-component dark:data-[state=active]:bg-dark-accent dark:data-[state=active]:text-black dark:data-[state=active]:shadow-dark-coloured-component"
      {...props}
    >
      {children}
    </RadixTabs.Trigger>
  );
};

export type TabContentProps = RadixTabContentProps & { className?: string };
export const TabContent = ({ className, ...props }: TabContentProps) => {
  return (
    <RadixTabs.Content
      className={clsx(className, 'text-light-text dark:text-dark-text')}
      {...props}
    ></RadixTabs.Content>
  );
};
