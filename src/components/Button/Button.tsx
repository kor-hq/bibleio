import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const variants = cva([""], {
  variants: {
    variant: {
      primary: [],
      secondary: [],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonVariantProps = VariantProps<typeof variants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}
export const Button = ({
  children,
  varientType,
  colour,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={variants({ varientType, colour })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
