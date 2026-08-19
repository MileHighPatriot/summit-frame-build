import type { Metadata } from "next";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
      <PageHero
        eyebrow="Customer testimonials"
        title="The work has to hold up. So do the reviews."
        lede="Homeowners in Aurora and the Denver metro hired us for framing, additions, and structural jobs. These are the kinds of notes we aim to earn."
        image="/services/additions/add-into-house.jpg"
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              variant={index % 2 === 0 ? "roll" : "swing"}
              delay={(index % 2) * 90}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </section>

      <PageCta
        title="Planning a project?"
        lede="Tell us what you need framed. We will follow up with a clear estimate."
        image="/services/additions/add-into-house.jpg"
      />
    </main>
  );
}
