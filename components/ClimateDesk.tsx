"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { climateFor, climateNotes } from "@/data/climate";
import { serviceCities } from "@/data/service-area";

export default function ClimateDesk() {
  const [activeId, setActiveId] = useState("aurora");
  const city = useMemo(
    () => serviceCities.find((item) => item.id === activeId) ?? serviceCities[0],
    [activeId],
  );
  const climate = climateFor(activeId);

  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="steel-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-0">
        <Image
          src={climate.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/92 to-forest/70" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-20">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Front Range desk
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-4xl">
            We frame for this climate, not a brochure from somewhere else.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/75 sm:text-base">
            Snow, wind, and soil change from Aurora to Castle Rock. Pick a city.
            These are the notes we walk with — not a stamped calc.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {climateNotes.map((note) => {
            const name =
              serviceCities.find((item) => item.id === note.cityId)?.shortName ??
              note.cityId;
            const active = note.cityId === activeId;
            return (
              <button
                key={note.cityId}
                type="button"
                onClick={() => setActiveId(note.cityId)}
                className={`rounded-sm px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                  active
                    ? "bg-brass text-ink"
                    : "border border-cream/20 text-cream/80 hover:border-cream/50 hover:text-cream"
                }`}
              >
                {name}
              </button>
            );
          })}
        </div>

        <Reveal variant="up" delay={60} className="mt-8">
          <div className="grid gap-6 border border-cream/15 bg-forest/70 p-6 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                {city.name}
              </p>
              <p className="mt-3 font-serif text-2xl font-semibold">{climate.elevation}</p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream/80">
                {climate.summary}
              </p>
              <Link
                href={`/area/${city.id}`}
                className="mt-6 inline-block text-sm font-semibold text-brass hover:text-brass-hover"
              >
                Open the {city.shortName} page
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <Fact label="Snow" value={climate.snow} />
              <Fact label="Wind" value={climate.wind} />
              <Fact label="Ground" value={climate.soil} />
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-cream/15 pt-3">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/50">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-cream/90">{value}</dd>
    </div>
  );
}
