import Image from "next/image";
import type { ReactNode } from "react";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  image: string;
  actions?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[center_40%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
      </div>

      <div className="hero-mark pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] items-center justify-center opacity-90 lg:flex">
        <Logo variant="watermark" className="h-auto w-[72%]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-10 sm:px-8 sm:pt-24 sm:pb-20 lg:pt-28">
        <Reveal variant="roll" instant delay={80}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            {eyebrow}
          </p>
          <span className="reveal-rule mb-5 block h-px w-16 bg-brass/80" />
        </Reveal>
        <Reveal variant="swing" instant delay={180}>
          <h1 className="max-w-3xl font-serif text-3xl font-semibold leading-[1.12] tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal variant="up" instant delay={300}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:mt-5 sm:text-lg">
            {lede}
          </p>
        </Reveal>
        {actions ? (
          <Reveal variant="up" instant delay={420}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
