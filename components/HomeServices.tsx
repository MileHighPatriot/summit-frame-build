import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { inquiryQuery } from "@/data/estimator";
import { serviceLines } from "@/data/services";

export default function HomeServices() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            What we frame
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Four kinds of work. One standard.
          </h2>
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {serviceLines.map((service, index) => (
            <li key={service.id}>
              <Reveal variant="up" delay={index * 70}>
                <Link
                  href={inquiryQuery({
                    typeId: service.id,
                    sizeId: "mid",
                    drawingId: "photos",
                    city: "",
                  })}
                  className="group relative block min-h-[22rem] overflow-hidden bg-ink text-cream sm:min-h-[26rem]"
                >
                  <Image
                    src={service.images[0].src}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-forest/10" />
                  <article className="relative flex h-full min-h-[22rem] flex-col justify-end p-6 sm:min-h-[26rem] sm:p-8">
                    <p className="font-serif text-sm text-brass">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
                      {service.body}
                    </p>
                    <p className="mt-5 text-sm font-semibold text-brass">
                      Start an estimate
                    </p>
                  </article>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal variant="fade" delay={200}>
          <Link
            href="/services"
            className="mt-8 inline-block text-sm font-semibold text-forest hover:text-forest-mid"
          >
            See services in detail
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
