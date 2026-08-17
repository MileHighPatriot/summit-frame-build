"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function ServiceGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        return;
      }
      if (event.key === "ArrowRight") {
        setActive((index) =>
          index === null ? index : (index + 1) % images.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((index) =>
          index === null ? index : (index - 1 + images.length) % images.length,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [active, images.length]);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={(event) => {
              lastTrigger.current = event.currentTarget;
              setActive(index);
            }}
            className="group relative aspect-[4/3] overflow-hidden bg-line text-left"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink">
              <Image
                src={images[active].src}
                alt={images[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p id={titleId} className="mt-3 text-sm text-cream/80">
              {images[active].alt}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-sm border border-cream/30 px-4 py-2 text-sm font-semibold text-cream"
                onClick={() =>
                  setActive((index) =>
                    index === null
                      ? index
                      : (index - 1 + images.length) % images.length,
                  )
                }
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-sm border border-cream/30 px-4 py-2 text-sm font-semibold text-cream"
                onClick={() =>
                  setActive((index) =>
                    index === null ? index : (index + 1) % images.length,
                  )
                }
              >
                Next
              </button>
              <button
                ref={closeRef}
                type="button"
                className="rounded-sm bg-cream px-4 py-2 text-sm font-semibold text-ink"
                onClick={() => setActive(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
