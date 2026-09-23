import Image from "next/image";
import { TextLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export default function Quote() {
  const testimonial = testimonials[0];

  return (
    <section className="section-y bg-sand">
      <div className="container-x">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span aria-hidden="true" className="block font-serif text-8xl leading-none text-cedar">
              &ldquo;
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <blockquote className="t-h2 mt-2 text-balance">
              {testimonial.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.12} className="mt-12 flex flex-col items-center gap-4">
            <span className="relative block h-16 w-16 overflow-hidden rounded-full">
              <Image
                src={testimonial.photo.src}
                alt={testimonial.photo.alt}
                fill
                sizes="64px"
                className="grade object-cover"
              />
            </span>
            <span>
              <span className="block text-lg">{testimonial.name}</span>
              <span className="mt-1 block text-stone">
                {testimonial.project}, {testimonial.location}
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.16} className="mt-12">
            <TextLink href="/testimonials">Read more reviews</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
