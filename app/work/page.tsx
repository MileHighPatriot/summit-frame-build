import type { Metadata } from "next";
import Image from "@/components/SiteImage";
import Link from "next/link";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Work",
  description: `Case studies from ${site.name} — custom homes, additions, and structural jobs in ${site.area}.`,
};

export default function WorkPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Selected work"
        title="Three jobs. The same standard."
        lede="An addition, a custom home, and a structural opening. Each one has a job snapshot — city, year, duration, what we framed, and what we did not — plus before and after photos. These are representative jobs for the site, not a live client archive."
        image="/services/framing/home-trusses.jpg"
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <ul className="mx-auto grid max-w-6xl gap-10">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal variant={index % 2 === 0 ? "roll" : "swing"}>
              <Link
                href={`/work/${project.slug}`}
                className="card-lift group grid overflow-hidden border border-line bg-paper transition-colors hover:border-forest/40 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="reveal-media relative aspect-[16/10] lg:aspect-auto lg:min-h-80">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    {project.year} · {project.location} · {project.type}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Duration
                      </dt>
                      <dd className="mt-0.5 font-medium text-ink">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Scope
                      </dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {project.scope.length} framing items
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-6 text-sm font-semibold text-forest">
                    Job snapshot and before / after
                  </p>
                </div>
              </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <PageCta
        title="Have a job like one of these?"
        lede="Send the address, the scope, and whatever drawings you have. We will tell you if we are the right crew."
        image="/services/framing/home-trusses.jpg"
      />
    </main>
  );
}
