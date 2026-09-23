import type { Metadata } from "next";
import Gallery from "@/components/services/Gallery";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom home framing, additions, structural work, and garages in Aurora and the Denver metro.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Services"
        title="We build the bones of the house."
        lede="Framing and structural carpentry, nothing else. Four kinds of work, done by the same family crew, to the same standard."
      />

      <nav aria-label="Services" className="container-x mt-10">
        <ul className="flex flex-wrap gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <a
                href={`#${service.slug}`}
                className="inline-block rounded-full border border-ink/20 px-5 py-2.5 text-sm transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x pb-24 sm:pb-36">
        {services.map((service, index) => {
          const flip = index % 2 === 1;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="grid scroll-mt-28 gap-12 border-b border-ink/15 py-20 last:border-b-0 sm:py-28 lg:grid-cols-12 lg:gap-8"
            >
              <Reveal className={`lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
                <Gallery images={service.images} />
              </Reveal>
              <div
                className={`flex flex-col lg:col-span-4 ${
                  flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"
                }`}
              >
                <div className="lg:sticky lg:top-32">
                  <Reveal>
                    <p className="t-eyebrow text-cedar">{`0${index + 1}`}</p>
                    <h2 className="t-h2 mt-6">{service.title}</h2>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <p className="t-body mt-8 text-stone">{service.body}</p>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <ul className="mt-10 border-t border-ink/15">
                      {service.includes.map((item) => (
                        <li key={item} className="border-b border-ink/15 py-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.14} className="mt-10">
                    <Button href="/contact" variant="outline">
                      Discuss a project
                    </Button>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
