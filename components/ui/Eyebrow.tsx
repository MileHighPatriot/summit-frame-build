import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  index,
  className = "",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <p className={`t-eyebrow flex items-center gap-3 ${className}`}>
      {index ? <span className="text-cedar">{index}</span> : null}
      {index ? <span aria-hidden="true" className="h-px w-8 bg-current opacity-30" /> : null}
      <span>{children}</span>
    </p>
  );
}
