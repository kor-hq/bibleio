import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva(
  [
    "text-body px-16 py-8 h-[40px] flex justify-center flex-center font-serif text-white dark:text-black rounded-12 border",
    "hover:-translate-y-[2px] active:translate-y-4 duration-150 ease-out",
    " disabled:pointer-events-none disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-dark-blue border-light-stroke dark:border-dark-stroke dark:bg-light-blue",
        ],
        secondary: [
          "bg-light-fg-2 text-black border-light-stroke dark:bg-dark-fg-2 dark:border-dark-stroke dark:text-white",
        ],
        success: [
          "bg-dark-green border-light-stroke dark:border-dark-stroke dark:bg-light-green",
        ],
        warning: [
          "bg-dark-yellow border-light-stroke dark:border-dark-stroke dark:bg-light-yellow",
        ],
        danger: [
          "bg-dark-red border-light-stroke dark:border-dark-stroke dark:bg-light-red",
        ],
      },
      fullWidth: {
        true: ["w-full"],
        false: ["w-fit"],
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}
export const Button = ({
  children,
  variant,
  disabled,
  onClick,
  fullWidth,
}: ButtonProps) => {
  return (
    <button
      className={variants({ variant })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
