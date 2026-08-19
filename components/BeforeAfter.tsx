"use client";

import Image from "next/image";
import { PointerEvent, useId, useRef, useState } from "react";

type Shot = { src: string; alt: string };

export default function BeforeAfter({
  before,
  after,
}: {
  before: Shot;
  after: Shot;
}) {
  const [value, setValue] = useState(52);
  const frame = useRef<HTMLDivElement>(null);
  const labelId = useId();

  function setFromClientX(clientX: number) {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setValue(Math.min(100, Math.max(0, next)));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setFromClientX(event.clientX);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    setFromClientX(event.clientX);
  }

  return (
    <div>
      <div
        ref={frame}
        className="relative aspect-[3/2] cursor-ew-resize overflow-hidden bg-line select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-cream"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cream/80 bg-forest text-cream">
            <span className="sr-only">Drag to compare</span>
            <span aria-hidden="true" className="text-xs font-semibold tracking-widest">
              ‹ ›
            </span>
          </span>
        </div>
        <p className="pointer-events-none absolute top-3 left-3 rounded-sm bg-forest/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream">
          Before
        </p>
        <p className="pointer-events-none absolute top-3 right-3 rounded-sm bg-forest/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream">
          After
        </p>
      </div>
      <label htmlFor={labelId} className="sr-only">
        Before and after comparison
      </label>
      <input
        id={labelId}
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="mt-3 w-full accent-forest"
      />
      <p className="mt-2 text-sm text-muted">
        Drag the slider to compare the job before we framed it and after we left
        it.
      </p>
    </div>
  );
}
