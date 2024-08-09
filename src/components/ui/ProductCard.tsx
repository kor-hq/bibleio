import type { ReactNode } from "react";

export default function ProductCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="w-[512px] h-[384px] bg-light-fg-1 border border-light-stroke flex min-w-0 flex-col p-32 justify-end items-start gap-16 rounded-[44px]">
      <h2 className="text-h2 font-medium">{title}</h2>
      <p className="text-body leading-none">{description}</p>
      {children}
    </div>
  );
}
