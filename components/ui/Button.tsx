import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "light" | "outline" | "outline-light";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-paper hover:bg-cedar-dark",
  light: "bg-paper text-ink hover:bg-cedar-light",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-paper/35 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[0.9375rem] font-medium tracking-[-0.005em] transition-colors duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${className}`}
    >
      <path
        d="M1 8h13M9 3l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 text-[0.9375rem] font-medium ${className}`}
    >
      <span className="link-underline pb-0.5">{children}</span>
      <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    </Link>
  );
}
