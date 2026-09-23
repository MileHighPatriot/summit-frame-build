"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import { asset } from "@/lib/asset";
import { site } from "@/data/site";

const ease = [0.16, 1, 0.3, 1] as const;

const PORTRAIT = "(max-aspect-ratio: 4/5)";
const LARGE = "(min-width: 1600px), (min-resolution: 2dppx) and (min-width: 1100px)";

function subscribe(onChange: () => void) {
  const queries = [PORTRAIT, LARGE].map((query) => window.matchMedia(query));
  queries.forEach((query) => query.addEventListener("change", onChange));
  return () => queries.forEach((query) => query.removeEventListener("change", onChange));
}

function currentVideo() {
  if (window.matchMedia(PORTRAIT).matches) return asset("/hero/hero-portrait.mp4");
  if (window.matchMedia(LARGE).matches) return asset("/hero/hero-1440.mp4");
  return asset("/hero/hero-1080.mp4");
}

function useHeroVideo() {
  return useSyncExternalStore(subscribe, currentVideo, () => null);
}

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
  const videoSrc = useHeroVideo();
  const [playing, setPlaying] = useState(false);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[40rem] flex-col overflow-hidden bg-char text-paper"
    >
      <motion.div className="absolute inset-0" style={{ y: reduce ? 0 : y }}>
        <div className="hero-video absolute inset-0">
          {reduce ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset("/hero/hero-still.jpg")}
              alt=""
              className="grade h-full w-full object-cover"
            />
          ) : (
            <>
              <picture>
                <source media={PORTRAIT} srcSet={asset("/hero/hero-poster-portrait.jpg")} />
                <img
                  src={asset("/hero/hero-poster.jpg")}
                  alt=""
                  fetchPriority="high"
                  className="grade absolute inset-0 h-full w-full object-cover"
                />
              </picture>
              {videoSrc ? (
                <video
                  key={videoSrc}
                  src={videoSrc}
                  className={`grade absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    playing ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                  onPlaying={() => setPlaying(true)}
                />
              ) : null}
            </>
          )}
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-char/25" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-char/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-char via-char/55 to-transparent to-75%" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-char/70 via-char/25 to-transparent to-70% md:block" />

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
