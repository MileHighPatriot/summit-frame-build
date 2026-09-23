"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Arrow, TextLink } from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function ServiceList() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="section-y bg-char text-paper">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="03" className="text-paper/55">
              What we build
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <h2 className="t-h2 max-w-[18ch] text-balance">
              Four kinds of work, one standard for all of them.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 sm:mt-24 lg:grid-cols-12 lg:gap-8">
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="sticky top-32 aspect-[4/5] overflow-hidden bg-paper/5">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.slug}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={current.images[0].src}
                    alt={current.images[0].alt}
                    fill
                    sizes="40vw"
                    className="grade object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <ul className="border-t border-paper/15 lg:col-span-6 lg:col-start-7">
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-paper/15">
                <Link
                  href={`/services#${service.slug}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className="group grid grid-cols-[3rem_1fr_auto] items-start gap-4 py-8 sm:grid-cols-[4rem_1fr_auto] sm:py-10"
                >
                  <span
                    aria-hidden="true"
                    className={`t-eyebrow pt-3 transition-colors duration-500 ${
                      active === index ? "text-cedar-light" : "text-paper/40"
                    }`}
                  >
                    {`0${index + 1}`}
                  </span>
                  <span>
                    <span
                      className={`t-h3 block transition-[color,transform] duration-700 ease-out-expo sm:text-[2.75rem] ${
                        active === index ? "text-paper lg:translate-x-2" : "text-paper/55"
                      }`}
                    >
                      {service.title}
                    </span>
                    <span className="mt-3 block max-w-md leading-relaxed text-paper/60">
                      {service.short}
                    </span>
                    <span className="relative mt-6 block aspect-[16/10] overflow-hidden lg:hidden">
                      <Image
                        src={service.images[0].src}
                        alt={service.images[0].alt}
                        fill
                        sizes="100vw"
                        className="grade object-cover"
                      />
                    </span>
                  </span>
                  <span
                    className={`mt-3 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${
                      active === index
                        ? "border-paper bg-paper text-ink"
                        : "border-paper/25 text-paper"
                    }`}
                  >
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="mt-14 lg:ml-[50%] lg:pl-4">
          <TextLink href="/services" className="text-paper">
            Explore our services
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}
