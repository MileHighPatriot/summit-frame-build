import Image from "next/image";
import Link from "next/link";
import { stats } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0">
        <Image
          src="/services/framing/home-shell.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/85 to-forest/40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20 lg:pt-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Custom framing · Aurora & Denver metro
        </p>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.6rem]">
          Solid framing for homes that last.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
          A family crew since 1989. Custom homes, room additions, and
          structural work — square, plumb, and built for Colorado.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#b9975c]"
          >
            Get a Free Estimate
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-sm border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50 hover:bg-white/5"
          >
            See selected work
          </Link>
        </div>
      </div>

      <dl className="relative grid border-t border-cream/15 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-cream/15 px-5 py-5 sm:px-8 sm:py-6 sm:not-first:border-l"
          >
            <dt className="text-xs uppercase tracking-[0.18em] text-cream/55">
              {stat.label}
            </dt>
            <dd className="mt-1 font-serif text-2xl font-semibold">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
