import Image from "next/image";
import { crew } from "@/data/crew";

export default function Crew() {
  return (
    <section id="crew" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          The crew
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Names, faces, and who does what.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          You will not get a rotating project manager. These are the people who
          bid the work and the people who frame it.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {crew.map((person) => (
            <li key={person.name}>
              <article>
                <div className="relative aspect-square overflow-hidden bg-line">
                  <Image
                    src={person.photo.src}
                    alt={person.photo.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-forest">
                  {person.role}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                  With us since {person.since}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
