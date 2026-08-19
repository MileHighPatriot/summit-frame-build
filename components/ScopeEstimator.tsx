"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  estimatorDrawings,
  estimatorSizes,
  estimatorTypes,
  inquiryQuery,
  scopeWindow,
} from "@/data/estimator";
import { site } from "@/data/site";

export default function ScopeEstimator({
  embedded = false,
}: {
  embedded?: boolean;
}) {
  const [typeId, setTypeId] = useState("addition");
  const [sizeId, setSizeId] = useState("mid");
  const [drawingId, setDrawingId] = useState("photos");
  const [city, setCity] = useState("");

  const result = useMemo(
    () => scopeWindow({ typeId, sizeId, drawingId, city }),
    [typeId, sizeId, drawingId, city],
  );

  const href = inquiryQuery({ typeId, sizeId, drawingId, city });

  return (
    <section
      id="estimator"
      className={embedded ? "" : "scroll-mt-24 bg-paper px-5 py-10 sm:px-8 sm:py-20"}
    >
      <div className={embedded ? "" : "mx-auto max-w-6xl"}>
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Scope desk
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-4xl">
            A frame window before you call.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Four answers. We give a typical duration — not a price — so you know
            if the job is in our range. Then send it and we walk the lot.
          </p>
        </Reveal>

        <Reveal variant="up" delay={80}>
          <div className="mt-8 grid gap-8 border border-line bg-cream p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
              <fieldset>
                <legend className="text-sm font-semibold text-ink">What are we framing?</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {estimatorTypes.map((item) => (
                    <Choice
                      key={item.id}
                      name="type"
                      checked={typeId === item.id}
                      onChange={() => setTypeId(item.id)}
                      label={item.label}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-semibold text-ink">Approximate size</legend>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {estimatorSizes.map((item) => (
                    <Choice
                      key={item.id}
                      name="size"
                      checked={sizeId === item.id}
                      onChange={() => setSizeId(item.id)}
                      label={item.label}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-semibold text-ink">Drawings on hand</legend>
                <div className="mt-2 grid gap-2">
                  {estimatorDrawings.map((item) => (
                    <Choice
                      key={item.id}
                      name="drawings"
                      checked={drawingId === item.id}
                      onChange={() => setDrawingId(item.id)}
                      label={item.label}
                    />
                  ))}
                </div>
              </fieldset>

              <label className="block text-sm font-semibold text-ink">
                Job site city
                <input
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  placeholder="Aurora, Parker, Castle Rock…"
                  autoComplete="address-level2"
                  className="mt-1.5 w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-sm font-normal text-ink outline-none focus:border-forest focus:ring-2 focus:ring-forest/20"
                />
              </label>
            </form>

            <aside className="flex flex-col justify-between border border-line bg-forest p-6 text-cream sm:p-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                  Calibrated window
                </p>
                <p className="mt-4 font-serif text-2xl font-semibold leading-snug sm:text-3xl">
                  {result.low}–{result.high}
                  <span className="mt-1 block text-lg font-normal text-cream/70">
                    {result.unit}
                  </span>
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/80">
                  {result.headline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {result.next}
                </p>
              </div>
              <div className="mt-8">
                <Link href={href} className="btn btn-shine w-full bg-brass text-ink hover:bg-brass-hover">
                  Send this job
                </Link>
                <p className="mt-3 text-xs leading-relaxed text-cream/55">
                  {result.disclaimer} Or call {site.phoneDisplay}.
                </p>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Choice({
  name,
  checked,
  onChange,
  label,
}: {
  name: string;
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      className={`cursor-pointer border px-3 py-2.5 text-sm transition-colors ${
        checked
          ? "border-forest bg-forest text-cream"
          : "border-line bg-paper text-ink hover:border-forest/40"
      }`}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}
