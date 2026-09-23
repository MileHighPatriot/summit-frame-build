"use client";

import Image from "next/image";
import { type KeyboardEvent, type PointerEvent, useRef, useState } from "react";

type Shot = { src: string; alt: string };

export default function BeforeAfter({ before, after }: { before: Shot; after: Shot }) {
  const [value, setValue] = useState(50);
  const frame = useRef<HTMLDivElement>(null);

  function setFromClientX(clientX: number) {
    const rect = frame.current?.getBoundingClientRect();
    if (!rect) return;
    setValue(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) setFromClientX(event.clientX);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") setValue((v) => Math.max(0, v - step));
    else if (event.key === "ArrowRight") setValue((v) => Math.min(100, v + step));
    else if (event.key === "Home") setValue(0);
    else if (event.key === "End") setValue(100);
    else return;
    event.preventDefault();
  }

  return (
    <div
      ref={frame}
      className="relative aspect-[4/3] cursor-ew-resize touch-pan-y overflow-hidden bg-sand select-none sm:aspect-[16/9]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <Image src={after.src} alt={after.alt} fill sizes="100vw" className="grade object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes="100vw" className="grade object-cover" />
      </div>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value)}
        aria-valuetext={`${Math.round(value)}% before`}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-paper outline-none"
        style={{ left: `${value}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 rounded-full bg-paper text-ink shadow-[0_10px_40px_-10px_rgb(0_0_0/0.5)] transition-transform duration-300 hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M9 6 3 12l6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </div>

      <span className="t-eyebrow pointer-events-none absolute bottom-5 left-5 rounded-full bg-char/70 px-4 py-2 text-paper backdrop-blur">
        Before
      </span>
      <span className="t-eyebrow pointer-events-none absolute right-5 bottom-5 rounded-full bg-char/70 px-4 py-2 text-paper backdrop-blur">
        After
      </span>
    </div>
  );
}
