"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  highways,
  mapBounds,
  projectLngLat,
  serviceCities,
  type ServiceCity,
} from "@/data/service-area";

export default function ServiceAreaMap() {
  const [activeId, setActiveId] = useState("aurora");
  const active = useMemo(
    () => serviceCities.find((city) => city.id === activeId) ?? serviceCities[0],
    [activeId],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="border border-line bg-paper p-3 sm:p-5">
        <svg
          viewBox={`0 0 ${mapBounds.width} ${mapBounds.height}`}
          role="img"
          aria-label="Interactive map of Summit Frame & Build service cities in the Denver metro"
          className="h-auto w-full"
        >
          <rect width={mapBounds.width} height={mapBounds.height} fill="#f3f5f8" />
          <path
            d="M 0 80 L 70 40 L 120 90 L 90 180 L 40 320 L 70 480 L 20 740 L 0 740 Z"
            fill="#0b1d36"
            opacity="0.06"
          />
          <text
            x="36"
            y="300"
            fill="#5c6775"
            fontSize="13"
            letterSpacing="0.18em"
            transform="rotate(-90 36 300)"
          >
            FRONT RANGE
          </text>
          <path
            d={highways.i25}
            fill="none"
            stroke="#9aa8b5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={highways.i70}
            fill="none"
            stroke="#9aa8b5"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d={highways.c470}
            fill="none"
            stroke="#c5ced6"
            strokeWidth="2"
            strokeDasharray="8 7"
            strokeLinecap="round"
          />
          <text x="238" y="168" fill="#5c6775" fontSize="11">
            I-25
          </text>
          <text x="48" y="148" fill="#5c6775" fontSize="11">
            I-70
          </text>
          <text x="168" y="455" fill="#5c6775" fontSize="11">
            C-470
          </text>
          {serviceCities.map((city) => (
            <CityPin
              key={city.id}
              city={city}
              selected={city.id === activeId}
              onSelect={setActiveId}
            />
          ))}
        </svg>
        <p className="mt-3 px-1 text-xs leading-relaxed text-muted">
          Pins are placed by city, not street address. Click a city for what we
          typically frame there. Farther out than Castle Rock — ask.
        </p>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
          Service area
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
          {active.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{active.note}</p>
        <Link
          href={`/area/${active.id}`}
          className="mt-4 inline-block text-sm font-semibold text-forest hover:text-forest-mid"
        >
          {active.shortName} climate notes
        </Link>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {serviceCities.map((city) => {
            const selected = city.id === activeId;
            return (
              <li key={city.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(city.id)}
                  className={`w-full rounded-sm border px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                    selected
                      ? "border-forest bg-forest text-cream"
                      : "border-line bg-cream text-ink hover:border-forest/40"
                  }`}
                >
                  {city.shortName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function CityPin({
  city,
  selected,
  onSelect,
}: {
  city: ServiceCity;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const { x, y } = projectLngLat(city.lng, city.lat);
  const labelSide = city.lng > -104.9 ? "left" : "right";

  return (
    <g>
      <title>{city.name}</title>
      <circle
        cx={x}
        cy={y}
        r={selected ? 16 : 11}
        fill={selected ? "#0b1d36" : "#163052"}
        opacity={selected ? 0.18 : 0.1}
      />
      <circle
        cx={x}
        cy={y}
        r={selected ? 7 : 5.5}
        fill={selected ? "#0b1d36" : "#9aa8b5"}
        stroke="#f8fafc"
        strokeWidth="2"
        className="cursor-pointer"
        tabIndex={0}
        role="button"
        aria-label={city.name}
        aria-pressed={selected}
        onClick={() => onSelect(city.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(city.id);
          }
        }}
      />
      <text
        x={labelSide === "right" ? x + 12 : x - 12}
        y={y + 4}
        textAnchor={labelSide === "right" ? "start" : "end"}
        fill="#0b1220"
        fontSize="13"
        fontWeight={selected ? 700 : 500}
        className="pointer-events-none"
      >
        {city.shortName}
      </text>
    </g>
  );
}
