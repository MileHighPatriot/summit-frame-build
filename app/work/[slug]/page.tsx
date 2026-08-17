import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((item) => item.slug !== project.slug);

  return (
    <main id="main">
      <article>
        <header className="bg-forest text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              {project.year} · {project.location} · {project.type}
            </p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
              {project.summary}
            </p>
          </div>
        </header>

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="relative -mt-2 aspect-[16/9] overflow-hidden bg-line sm:aspect-[2/1]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3">
          <section>
            <h2 className="font-serif text-xl font-semibold">The problem</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold">How we framed it</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.approach}</p>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold">What we left</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.result}</p>
          </section>
        </div>

        <div className="border-t border-line bg-cream px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
            {project.gallery
              .filter((image) => image.src !== project.cover.src)
              .map((image) => (
              <figure key={image.src} className="relative aspect-[4/3] overflow-hidden bg-line">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 30vw, 100vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-line px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-2xl font-semibold">More jobs</h2>
            <Link href="/contact" className="text-sm font-semibold text-forest">
              Get an estimate for yours
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="block border border-line bg-cream p-6 transition-colors hover:border-forest/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    {item.location} · {item.type}
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold">{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
