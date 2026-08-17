import Link from "next/link";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Testimonials
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            The kind of notes we aim to earn.
          </h2>
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-forest hover:text-forest-mid"
          >
            Read all testimonials
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {preview.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
