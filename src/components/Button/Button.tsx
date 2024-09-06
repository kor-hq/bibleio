import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const variants = cva(
  [
    'text-body px-16 py-8 h-[40px] flex justify-center flex-center rounded-12 border border-light-stroke dark:border-dark-stroke',
    'hover:-translate-y-[2px] active:translate-y-4 duration-150 ease-out',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-dark-blue text-white dark:text-black dark:bg-light-blue shadow-light-coloured-component dark:shadow-dark-coloured-component',
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
      },
      fullWidth: {
        true: ['w-full'],
        false: ['w-fit'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      fullWidth: false,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}
export const Button = ({
  children,
  variant,
  disabled,
  onClick,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={variants({ variant, fullWidth })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
