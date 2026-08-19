import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { cityWithClimate } from "@/data/climate";
import { inquiryQuery } from "@/data/estimator";
import { projectsInCity } from "@/data/projects";
import { serviceCities } from "@/data/service-area";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCities.map((city) => ({ slug: city.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const match = cityWithClimate(slug);
  if (!match) return {};
  return {
    title: `Framing in ${match.city.name}`,
    description: `Custom framing, additions, and structural work in ${match.city.name}, Colorado. ${match.climate.summary}`,
  };
}

export default async function AreaCityPage({ params }: PageProps) {
  const { slug } = await params;
  const match = cityWithClimate(slug);
  if (!match) notFound();

  const { city, climate } = match;
  const jobs = projectsInCity(city.name);
  const others = serviceCities.filter((item) => item.id !== city.id).slice(0, 4);

  return (
    <main id="main">
      <PageHero
        eyebrow={`${city.name} · ${climate.elevation}`}
        title={`Framing in ${city.name}.`}
        lede={climate.summary}
        image={climate.image}
        actions={
          <>
            <Link
              href={inquiryQuery({
                typeId: "addition",
                sizeId: "mid",
                drawingId: "photos",
                city: city.name,
              })}
              className="btn btn-shine bg-brass text-ink hover:bg-brass-hover"
            >
              Estimate a {city.shortName} job
            </Link>
            <Link
              href="/area"
              className="btn border border-cream/25 text-cream hover:border-cream/50"
            >
              All cities
            </Link>
          </>
        }
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="roll">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
              What we check here
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold">
              Snow, wind, and the lot — before the price.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{city.note}</p>
            <p className="mt-4 leading-relaxed text-muted">
              These notes are how we walk a {city.name} job. They are not an
              engineer stamp. If the city or your designer has a number, we
              frame to that.
            </p>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <dl className="grid gap-px bg-line sm:grid-cols-2">
              <Fact label="Elevation" value={climate.elevation} />
              <Fact label="Snow" value={climate.snow} />
              <Fact label="Wind" value={climate.wind} />
              <Fact label="Ground" value={climate.soil} />
            </dl>
          </Reveal>
        </div>
      </section>

      {jobs.length ? (
        <section className="border-t border-line bg-paper px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-2xl font-semibold">
              Jobs we have written up in {city.name}
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {jobs.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="card-lift group grid overflow-hidden border border-line bg-cream sm:grid-cols-[0.9fr_1.1fr]"
                  >
                    <div className="relative aspect-[4/3] sm:aspect-auto">
                      <Image
                        src={project.cover.src}
                        alt={project.cover.alt}
                        fill
                        sizes="40vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                        {project.year} · {project.type}
                      </p>
                      <p className="mt-2 font-serif text-xl font-semibold">
                        {project.title}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {project.summary}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-semibold">Nearby cities</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/area/${item.id}`}
                  className="inline-flex border border-line bg-paper px-4 py-2 text-sm font-semibold text-forest hover:border-forest/40"
                >
                  {item.shortName}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Call {site.phoneDisplay} if the lot is farther out. Some jobs are
            worth the drive.
          </p>
        </div>
      </section>

      <PageCta
        title={`Need something framed in ${city.name}?`}
        lede="Send the address and the scope. We will tell you if we are the right crew."
        image={climate.image}
      />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-paper px-5 py-5">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-lg font-semibold text-ink">{value}</dd>
    </div>
  );
}
