import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Selected Work",
  description: `Case studies from ${site.name} — custom homes, additions, and structural jobs in ${site.area}.`,
};

export default function WorkPage() {
  return (
    <main id="main">
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Selected work
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
            Three jobs. The same standard.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
            An addition, a custom home, and a structural opening. Each one
            written up the way we talk about the work — scope, problem, and
            what the next trade inherited. These are representative jobs for
            the site, not a live client archive.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <ul className="mx-auto grid max-w-6xl gap-10">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid overflow-hidden border border-line bg-cream transition-colors hover:border-forest/40 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-80">
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
                  <p className="mt-6 text-sm font-semibold text-forest">
                    Read the case study
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
