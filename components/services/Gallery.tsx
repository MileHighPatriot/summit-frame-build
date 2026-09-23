"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@/lib/useMounted";

type GalleryImage = { src: string; alt: string };

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const mounted = useMounted();

  const step = useCallback(
    (delta: number) =>
      setActive((index) =>
        index === null ? index : (index + delta + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [active, step]);

  const [lead, ...rest] = images;

  return (
    <>
      <div className="grid gap-3 sm:gap-4">
        <Thumb
          image={lead}
          className="aspect-[4/3]"
          sizes="(min-width: 1024px) 55vw, 100vw"
          onOpen={(el) => {
            lastTrigger.current = el;
            setActive(0);
          }}
        />
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {rest.map((image, i) => (
            <Thumb
              key={image.src}
              image={image}
              className="aspect-square"
              sizes="(min-width: 1024px) 18vw, 33vw"
              onOpen={(el) => {
                lastTrigger.current = el;
                setActive(i + 1);
              }}
            />
          ))}
        </div>
      </div>

      {mounted
        ? createPortal(
      <AnimatePresence>
        {active !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-char/95 text-paper backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setActive(null)}
          >
            <div className="container-x flex h-20 items-center justify-between sm:h-24">
              <p className="t-eyebrow text-paper/60">
                {active + 1} / {images.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                className="t-eyebrow rounded-full border border-paper/30 px-5 py-2.5 hover:bg-paper hover:text-ink"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
            <div className="container-x relative flex-1" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[active].src}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <Image
                    src={images[active].src}
                    alt={images[active].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              className="container-x flex items-center justify-between gap-6 py-6 sm:py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <p id={titleId} className="text-paper/75">
                {images[active].alt}
              </p>
              <div className="flex shrink-0 gap-2">
                <NavButton label="Previous image" onClick={() => step(-1)} flip />
                <NavButton label="Next image" onClick={() => step(1)} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}

function Thumb({
  image,
  className,
  sizes,
  onOpen,
}: {
  image: GalleryImage;
  className: string;
  sizes: string;
  onOpen: (el: HTMLButtonElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(event.currentTarget)}
      className={`group relative block w-full overflow-hidden bg-sand ${className}`}
      aria-label={`Enlarge: ${image.alt}`}
    >
      <Image
        src={image.src}
        alt=""
        fill
        sizes={sizes}
        className="grade object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]"
      />
    </button>
  );
}

function NavButton({
  label,
  onClick,
  flip,
}: {
  label: string;
  onClick: () => void;
  flip?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/30 transition-colors hover:bg-paper hover:text-ink"
    >
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
      >
        <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    </button>
  );
}
