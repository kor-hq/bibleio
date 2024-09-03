import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
  [
    'text-body px-12 py-8 h-fit w-fit leading-none flex justify-center flex-center gap-4 font-serif rounded-full border border-light-stroke dark:border-dark-stroke',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-light-accent text-white dark:text-black dark:bg-dark-accent shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
        secondary: [
          'bg-light-fg-2 text-black dark:bg-dark-fg-2 dark:text-white shadow-light-material-component dark:shadow-dark-material-component',
        ],
        success: [
          'bg-dark-green text-white dark:text-black dark:bg-light-green shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
        warning: [
          'bg-dark-yellow text-white dark:text-black dark:bg-light-yellow shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
        danger: [
          'bg-dark-red text-white dark:text-black dark:bg-light-red shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
        blue: [
          'bg-dark-blue text-white dark:text-black dark:bg-light-blue shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
        purple: [
          'bg-dark-purple text-white dark:text-black dark:bg-light-purple shadow-light-coloured-component dark:shadow-dark-coloured-component',
        ],
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type BadgeVariantProps = VariantProps<typeof variants>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variants> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'blue'
    | 'purple';
}
export const Badge = ({ children, variant }: BadgeProps) => {
  return <div className={variants({ variant })}>{children}</div>;
};
