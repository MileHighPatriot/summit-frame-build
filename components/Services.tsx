import Reveal from "@/components/Reveal";
import ServiceGallery from "@/components/ServiceGallery";
import { serviceLines } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          {serviceLines.map((service, index) => (
            <Reveal
              key={service.title}
              variant={index % 2 === 0 ? "swing" : "roll"}
              delay={index * 70}
            >
              <article className="card-lift border border-line border-t-4 border-t-forest bg-paper p-6 sm:p-8">
                <p className="font-serif text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                  {service.home}
                </p>
                <ServiceGallery images={service.images} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
