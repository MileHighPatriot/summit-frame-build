import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { climateFor } from "@/data/climate";
import { serviceCities } from "@/data/service-area";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Service area",
  description: `Framing notes for ${site.area} — snow, wind, and the lots we actually work.`,
};

export default function AreaIndexPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Aurora / Denver metro"
        title="Eleven cities. The same crew."
        lede="Pick a town. You will get the climate notes we walk with, the kind of jobs we take there, and a straight path to an estimate."
        image="/services/framing/home-trusses.jpg"
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <ul className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCities.map((city, index) => {
            const climate = climateFor(city.id);
            return (
              <li key={city.id}>
                <Reveal variant="up" delay={index * 50}>
                  <Link
                    href={`/area/${city.id}`}
                    className="card-lift group flex h-full flex-col overflow-hidden border border-line bg-paper"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-line">
                      <Image
                        src={climate.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                        {climate.elevation}
                      </p>
                      <h2 className="mt-2 font-serif text-2xl font-semibold">
                        {city.name}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                        {city.note}
                      </p>
                      <p className="mt-5 text-sm font-semibold text-forest">
                        Climate notes and jobs
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <PageCta
        title="Not sure which city page you need?"
        lede="Send the address. We will tell you if the lot is in range."
        image="/services/framing/home-slab.jpg"
      />
    </main>
  );
}
