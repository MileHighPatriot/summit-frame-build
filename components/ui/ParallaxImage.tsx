"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /** Fraction of the frame height the image drifts while crossing the viewport. */
  strength?: number;
};

export default function ParallaxImage({
  src,
  alt,
  sizes = "100vw",
  className = "",
  imageClassName = "",
  priority,
  strength = 0.12,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = `${strength * 100}%`;
  const y = useTransform(scrollYProgress, [0, 1], [`-${shift}`, shift]);

  return (
    <div ref={ref} className={`relative overflow-hidden bg-sand ${className}`}>
      <motion.div
        className="absolute inset-x-0"
        style={{
          top: `-${shift}`,
          bottom: `-${shift}`,
          y: reduce ? 0 : y,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`grade object-cover ${imageClassName}`}
        />
      </motion.div>
    </div>
  );
}
