import React from "react";

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="h-[40px] bg-light-fg-2 dark:bg-dark-fg-2 rounded-12 border border-light-stroke dark:border-dark-stroke px-16 flex items-center shadow-light-material-component dark:shadow-dark-material-component focus:border-light-accent dark:focus:border-dark-accent outline-none placeholder-light-text-subtle dark:placeholder-dark-text-subtle text-light-text dark:text-dark-text disabled:cursor-not-allowed disabled:bg-light-fg-disabled disabled:border-light-stroke-disabled dark:disabled:bg-dark-fg-disabled dark:disabled:border-dark-stroke-disabled body placeholder:body"
    />
  );
};
