"use client";

import Image from "@/components/SiteImage";
import { useEffect, useId, useRef, useState, type RefObject } from "react";
import Reveal from "@/components/Reveal";
import { crew, type CrewMember } from "@/data/crew";

export default function Crew() {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const person = active !== null ? crew[active] : null;

  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [active]);

  function openBio(index: number, trigger: HTMLButtonElement) {
    lastTrigger.current = trigger;
    setActive(index);
  }

  return (
    <section id="crew" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {crew.map((member, index) => (
            <li key={member.name}>
              <Reveal variant="swing" delay={index * 90}>
                <article className="card-lift">
                  <button
                    type="button"
                    className="reveal-media group relative aspect-square w-full overflow-hidden bg-line text-left"
                    onClick={(event) => openBio(index, event.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 text-xs font-semibold tracking-wide text-cream opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      Read full bio
                    </span>
                  </button>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-forest">
                    {member.role}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    With us since {member.since}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {member.bio}
                  </p>
                  <button
                    type="button"
                    className="mt-3 text-sm font-semibold text-forest hover:text-forest-mid"
                    onClick={(event) => openBio(index, event.currentTarget)}
                  >
                    Full bio
                  </button>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {person ? (
        <CrewBioDialog
          person={person}
          titleId={titleId}
          closeRef={closeRef}
          onClose={() => setActive(null)}
        />
      ) : null}
    </section>
  );
}

function CrewBioDialog({
  person,
  titleId,
  closeRef,
  onClose,
}: {
  person: CrewMember;
  titleId: string;
  closeRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-cream"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid lg:grid-cols-[minmax(0,16rem)_1fr]">
          <div className="relative aspect-[4/5] min-h-64 bg-line lg:aspect-auto lg:min-h-full">
            <Image
              src={person.photo.src}
              alt={person.photo.alt}
              fill
              sizes="(min-width: 1024px) 16rem, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
              With us since {person.since}
            </p>
            <h2
              id={titleId}
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-ink"
            >
              {person.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-forest">{person.role}</p>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
              {person.story.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <button
              ref={closeRef}
              type="button"
              className="mt-8 rounded-sm bg-forest px-4 py-2.5 text-sm font-semibold text-cream hover:bg-forest-mid"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
