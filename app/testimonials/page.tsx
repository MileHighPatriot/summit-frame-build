import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Aurora and Denver metro homeowners say about Summit Frame & Build.",
};

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonials;

  return (
    <main id="main">
      <PageHeader
        eyebrow="Testimonials"
        title="The work holds up. So do the reviews."
        lede="Homeowners across the Denver metro on what it's like to have our crew on their property."
      />

      <section className="container-x section-y">
        <Reveal as="figure" className="mx-auto max-w-5xl">
          <blockquote className="t-h2 text-balance">
            <span className="text-cedar">&ldquo;</span>
            {featured.quote}
            <span className="text-cedar">&rdquo;</span>
          </blockquote>
          <Person testimonial={featured} className="mt-10" />
        </Reveal>

        <ul className="mt-24 grid border-t border-ink/15 sm:mt-36 md:grid-cols-2">
          {rest.map((testimonial, index) => (
            <Reveal
              as="li"
              key={testimonial.name}
              delay={(index % 2) * 0.08}
              className="flex flex-col border-b border-ink/15 py-12 md:px-10 md:odd:border-r md:odd:pl-0 md:even:pr-0 lg:py-16"
            >
              <figure className="flex h-full flex-col">
                <blockquote className="t-h3 text-balance">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <Person testimonial={testimonial} className="mt-auto pt-10" />
              </figure>
            </Reveal>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Person({
  testimonial,
  className = "",
}: {
  testimonial: (typeof testimonials)[number];
  className?: string;
}) {
  return (
    <figcaption className={`flex items-center gap-4 ${className}`}>
      <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full bg-sand">
        <Image
          src={testimonial.photo.src}
          alt={testimonial.photo.alt}
          fill
          sizes="56px"
          className="grade object-cover"
        />
      </span>
      <span>
        <span className="block text-lg">{testimonial.name}</span>
        <span className="block text-stone">
          {testimonial.project}, {testimonial.location}
        </span>
      </span>
    </figcaption>
  );
}
