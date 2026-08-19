"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function RouteWipe() {
  const pathname = usePathname();
  const first = useRef(true);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const start = window.requestAnimationFrame(() => setOn(true));
    const timer = window.setTimeout(() => setOn(false), 720);
    return () => {
      window.cancelAnimationFrame(start);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return <div className={`route-wipe${on ? " is-on" : ""}`} aria-hidden="true" />;
}
