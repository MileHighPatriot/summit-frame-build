type LogoProps = {
  className?: string;
  variant?: "header" | "footer" | "watermark";
};

export default function Logo({
  className = "h-10 w-10",
  variant = "header",
}: LogoProps) {
  const tone =
    variant === "footer" || variant === "watermark"
      ? "text-cream/55"
      : "text-forest/70";

  return (
    <svg
      viewBox="0 0 48 48"
      className={`${tone} ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 22 L24 8 L40 22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="miter"
      />
      <path
        d="M12 22 V40 H36 V22"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      <path
        d="M18 40 V26 H30 V40"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M24 8 V40"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
      <path
        d="M12 31 H36"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.55"
      />
    </svg>
  );
}
