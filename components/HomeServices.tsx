import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Custom Home Framing",
    body: "Floors, walls, and roofs from the slab up — laid out clean and built to plan.",
  },
  {
    title: "Room Additions",
    body: "New rooms tied into the house you already have, so the addition sits right.",
  },
  {
    title: "Structural Work",
    body: "Beams, openings, and reinforcement when the structure has to carry more.",
  },
  {
    title: "Garages & Outbuildings",
    body: "Detached frames built with the same care as the house, ready for Colorado weather.",
  },
];

export default function HomeServices() {
  return (
    <section className="px-5 py-10 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            What we frame
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-2xl font-semibold tracking-tight sm:text-4xl">
            Four kinds of work. One standard.
          </h2>
        </Reveal>

        <ul className="mt-6 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal variant="up" delay={index * 70}>
                <article className="h-full border border-line bg-cream p-4 sm:p-8">
                  <p className="font-serif text-sm text-brass">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight sm:mt-3 sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-base">
                    {service.body}
                  </p>
                </article>
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
