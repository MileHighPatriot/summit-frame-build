import Link from "next/link";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";

export default function HomeQuotes() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="px-5 py-10 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Testimonials
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              What homeowners say about the work.
            </h2>
            <Link
              href="/testimonials"
              className="text-sm font-semibold text-forest hover:text-forest-mid"
            >
              Read all testimonials
            </Link>
          </div>
        </Reveal>

        <ul className="mt-6 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {preview.map((testimonial, index) => (
            <li key={testimonial.name}>
              <Reveal variant="up" delay={index * 80} className="h-full">
                <blockquote className="flex h-full flex-col border border-line bg-cream p-7 sm:p-8">
                  <p className="font-serif text-lg leading-relaxed text-ink">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-6 border-t border-line pt-5">
                    <p className="font-semibold text-ink">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-muted">
                      {testimonial.location} · {testimonial.project}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
