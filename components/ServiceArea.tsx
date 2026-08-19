import Reveal from "@/components/Reveal";
import ServiceAreaMap from "@/components/ServiceAreaMap";

export default function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-24 border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-20">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Where we work
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-2xl font-semibold tracking-tight sm:text-4xl">
            Aurora, Denver, and the south metro — including DTC and Castle Rock.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Click a city on the map. If your job is in one of these towns, we
            already know the drive. If it is farther, send it anyway — some
            frames are worth the miles.
          </p>
        </Reveal>
        <Reveal variant="up" delay={120} className="mt-10">
          <ServiceAreaMap />
        </Reveal>
      </div>
    </section>
  );
}
