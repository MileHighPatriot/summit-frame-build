"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "@/components/ui/Reveal";
import { crew } from "@/data/crew";
import { useMounted } from "@/lib/useMounted";

export default function Crew() {
  const [active, setActive] = useState<number | null>(null);
  const mounted = useMounted();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const person = active !== null ? crew[active] : null;

  useEffect(() => {
    if (active === null) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [active]);

  return (
    <>
      <ul className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {crew.map((member, index) => (
          <Reveal as="li" key={member.name} delay={index * 0.08}>
            <button
              type="button"
              aria-haspopup="dialog"
              onClick={(event) => {
                lastTrigger.current = event.currentTarget;
                setActive(index);
              }}
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={member.photo.src}
                  alt={member.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="grade object-cover object-top grayscale-[35%] transition-[transform,filter] duration-[1.2s] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
                />
              </span>
              <span className="mt-5 flex items-baseline justify-between gap-4">
                <span className="t-h3 link-underline pb-0.5">{member.name}</span>
                <span className="t-eyebrow shrink-0 text-stone">Since {member.since}</span>
              </span>
              <span className="mt-2 block text-cedar">{member.role}</span>
              <span className="mt-3 block leading-relaxed text-stone">{member.bio}</span>
            </button>
          </Reveal>
        ))}
      </ul>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {person ? (
                <motion.div
                  className="fixed inset-0 z-[60] flex justify-end bg-char/70 backdrop-blur-sm"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={titleId}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActive(null)}
                >
                  <motion.div
                    data-lenis-prevent
                    className="h-full w-full max-w-2xl overflow-y-auto bg-paper"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <div className="relative aspect-[4/3] bg-sand">
                      <Image
                        src={person.photo.src}
                        alt={person.photo.alt}
                        fill
                        sizes="(min-width: 672px) 672px, 100vw"
                        className="grade object-cover object-[center_25%]"
                      />
                      <button
                        ref={closeRef}
                        type="button"
                        onClick={() => setActive(null)}
                        className="t-eyebrow absolute top-5 right-5 rounded-full bg-paper px-5 py-2.5 text-ink hover:bg-ink hover:text-paper"
                      >
                        Close
                      </button>
                    </div>
                    <div className="p-8 sm:p-12">
                      <p className="t-eyebrow text-cedar">
                        {person.role} &middot; Since {person.since}
                      </p>
                      <h2 id={titleId} className="t-h2 mt-5">
                        {person.name}
                      </h2>
                      <div className="t-body mt-8 space-y-5 text-stone">
                        {person.story.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
