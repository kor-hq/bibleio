import React from 'react';

export type InputProps = React.HTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="body placeholder:body flex h-[40px] items-center rounded-12 border border-light-stroke bg-light-fg-2 px-16 text-light-text placeholder-light-text-subtle shadow-light-material-component outline-none focus:border-light-accent disabled:cursor-not-allowed disabled:border-light-stroke-disabled disabled:bg-light-fg-disabled dark:border-dark-stroke dark:bg-dark-fg-2 dark:text-dark-text dark:placeholder-dark-text-subtle dark:shadow-dark-material-component dark:focus:border-dark-accent dark:disabled:border-dark-stroke-disabled dark:disabled:bg-dark-fg-disabled"
    />
  );
};
