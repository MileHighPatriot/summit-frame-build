import Link from "next/link";
import DroneReel from "@/components/DroneReel";
import Reveal from "@/components/Reveal";
import { site, stats } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-forest text-cream lg:min-h-0"
    >
      <DroneReel fill />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/75 to-forest/90 lg:bg-gradient-to-r lg:from-forest lg:via-forest/85 lg:to-forest/45" />

      <div className="relative mt-auto mx-auto w-full max-w-6xl px-5 pt-8 pb-8 sm:px-8 sm:pt-28 sm:pb-20 lg:mt-0 lg:pt-32">
        <Reveal variant="roll" instant delay={80}>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass sm:mb-4 sm:text-xs">
            Custom framing · Aurora & Denver metro
          </p>
          <span className="reveal-rule mb-4 block h-px w-16 bg-brass/80 sm:mb-5" />
        </Reveal>
        <Reveal variant="swing" instant delay={180}>
          <h1 className="max-w-3xl font-serif text-[2.15rem] font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Solid framing for homes that last.
          </h1>
        </Reveal>
        <Reveal variant="up" instant delay={300}>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/85 sm:mt-6 sm:text-lg">
            A family crew since 1989. Custom homes, room additions, and
            structural work — square, plumb, and built for Colorado.
          </p>
        </Reveal>
        <Reveal variant="up" instant delay={420}>
          <div className="mt-6 hidden flex-col gap-3 sm:mt-9 sm:flex sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-brass-hover"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-sm border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50 hover:bg-white/5"
            >
              See selected work
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center px-1 py-3.5 text-sm font-semibold text-cream/90 underline-offset-4 hover:text-cream hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>

      <dl className="relative mt-auto grid grid-cols-2 border-t border-cream/15 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-cream/15 px-4 py-3.5 even:border-l sm:px-8 sm:py-6 lg:border-l lg:first:border-l-0"
          >
            <dt className="text-[10px] uppercase tracking-[0.18em] text-cream/55 sm:text-xs">
              {stat.label}
            </dt>
            <dd className="mt-1 font-serif text-xl font-semibold sm:text-2xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
