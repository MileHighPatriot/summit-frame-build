export function LogoMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
      <path d="M3 15 16 4l13 11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 12.5V28h18V12.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 4v24M7 20h18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.35rem] tracking-[-0.02em]">Summit</span>
        <span className="mt-1 text-[0.625rem] font-medium uppercase tracking-[0.28em] opacity-70">
          Frame &amp; Build
        </span>
      </span>
    </span>
  );
}
