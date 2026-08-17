import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Customer Testimonials",
  description:
    "What Aurora and Denver metro homeowners say about Summit Frame & Build — custom framing, room additions, and structural work.",
};

export default function TestimonialsPage() {
  return (
    <main id="main">
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Customer testimonials
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            The work has to hold up. So do the reviews.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            Homeowners in Aurora and the Denver metro hired us for framing,
            additions, and structural jobs. These are the kinds of notes we aim
            to earn.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Planning a project?
            </h2>
            <p className="mt-2 text-muted">
              Tell us what you need framed. We will follow up with a clear
              estimate.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-cream hover:bg-forest-mid"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
