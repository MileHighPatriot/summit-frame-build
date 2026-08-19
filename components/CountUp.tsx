"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const target = Number(value);
  const canCount = Number.isFinite(target);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canCount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [canCount]);

  useEffect(() => {
    if (!shown || !canCount) return;

    const duration = target > 100 ? 1400 : 900;
    const start = performance.now();

    let frame = requestAnimationFrame(function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(String(Math.round(target * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(frame);
  }, [shown, canCount, target]);

  return (
    <span ref={ref} className={className}>
      {current}
    </span>
  );
}
