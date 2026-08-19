import Image from "@/components/SiteImage";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <blockquote className="card-lift flex h-full flex-col border border-line bg-paper p-7 sm:p-8">
      <p className="font-serif text-lg leading-relaxed text-ink">
        “{testimonial.quote}”
      </p>
      <footer className="mt-6 flex items-center gap-4 border-t border-line pt-5">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-line">
          <Image
            src={testimonial.photo.src}
            alt=""
            fill
            sizes="56px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="font-semibold text-ink">{testimonial.name}</p>
          <p className="mt-0.5 text-sm text-muted">
            {testimonial.role} · {testimonial.location}
          </p>
          <p className="text-sm text-muted">{testimonial.project}</p>
        </div>
      </footer>
    </blockquote>
  );
}
