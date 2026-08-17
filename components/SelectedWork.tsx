import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Selected work
        </p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Jobs that show how we actually frame.
          </h2>
          <Link
            href="/work"
            className="text-sm font-semibold text-forest hover:text-forest-mid"
          >
            All case studies
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col border border-line bg-cream transition-colors hover:border-forest/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-line">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    {project.location} · {project.type}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-forest">
                    Read the job
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
