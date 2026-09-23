"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

const headline = [
  "Square, plumb,",
  <>
    and built to <em className="text-cedar-light">last.</em>
  </>,
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[40rem] flex-col overflow-hidden bg-char text-paper"
    >
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y }}>
        {reduce ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset("/hero/drone-poster.jpg")}
            alt=""
            className="grade h-full w-full object-cover"
          />
        ) : (
          <video
            className="hero-video grade h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={asset("/hero/drone-poster.jpg")}
            aria-hidden="true"
          >
            <source src={asset("/hero/drone-reveal.mp4")} type="video/mp4" />
          </video>
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-char/90 via-char/25 to-char/40" />

      <motion.div
        className="container-x relative mt-auto pb-10 sm:pb-14"
        style={{ opacity: reduce ? 1 : fade }}
      >
        <motion.p
          className="t-eyebrow text-paper/75"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
        >
          Custom framing &middot; Aurora &amp; Denver &middot; Est. {site.founded}
        </motion.p>

        <h1 className="t-display mt-6">
          {headline.map((line, index) => (
            <span key={index} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 + index * 0.12, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-8 border-t border-paper/20 pt-8 sm:mt-14 md:flex-row md:items-end md:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75, ease }}
        >
          <p className="t-lede max-w-md text-paper/80">
            A family framing crew building custom homes, additions, and
            structural work across the Denver metro since {site.founded}.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/work" variant="light">
              View our work
            </Button>
            <a
              href={site.phoneHref}
              className="link-underline pb-0.5 text-paper/80 hover:text-paper"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
