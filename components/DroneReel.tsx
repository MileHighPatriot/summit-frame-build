"use client";

import { useSyncExternalStore } from "react";
import SiteImage from "@/components/SiteImage";
import { asset } from "@/lib/asset";

function subscribeMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export default function DroneReel({ fill = false }: { fill?: boolean }) {
  const reduceMotion = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const frame = fill
    ? "absolute inset-0 overflow-hidden bg-ink"
    : "relative aspect-video w-full overflow-hidden bg-ink";

  return (
    <div aria-hidden={fill} className={frame}>
      {reduceMotion ? (
        <SiteImage
          src="/hero/drone-poster.jpg"
          alt={
            fill
              ? ""
              : "Two-story wood house frame on a suburban lot with lumber staged on the ground"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <video
          className="drone-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={asset("/hero/drone-poster.jpg?v=1440")}
          width={2560}
          height={1440}
        >
          <source src={asset("/hero/drone-reveal.mp4?v=1440")} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
