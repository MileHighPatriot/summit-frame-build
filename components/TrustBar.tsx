import Link from "next/link";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/testimonials";
import { trustMarks } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        <Reveal variant="fade">
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustMarks.map((mark) => (
              <li key={mark.label}>
                <p className="font-serif text-xl font-semibold text-forest sm:text-2xl">
                  {mark.value}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
                  {mark.label}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            {testimonials.length} written reviews from homeowners we framed for.{" "}
            <Link href="/testimonials" className="font-semibold text-forest hover:text-forest-mid">
              Read them
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
