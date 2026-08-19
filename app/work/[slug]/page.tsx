import type { Metadata } from "next";
import Image from "@/components/SiteImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfter from "@/components/BeforeAfter";
import JobSnapshot from "@/components/JobSnapshot";
import JobStatus from "@/components/JobStatus";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
        <PageHero
          eyebrow={`${project.year} · ${project.location} · ${project.type}`}
          title={project.title}
          lede={project.summary}
          image={project.cover.src}
        />

        <div className="border-b border-line bg-ink">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">
            <div className="filmstrip no-scrollbar">
              {[project.cover, ...project.gallery.filter((image) => image.src !== project.cover.src)].map(
                (image) => (
                  <figure
                    key={image.src}
                    className="relative aspect-[16/10] overflow-hidden bg-forest"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="22rem"
                      className="object-cover"
                    />
                  </figure>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="bg-cream px-5 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal variant="up">
              <JobSnapshot project={project} />
            </Reveal>
          </div>
        </div>

        <div className="border-t border-line bg-paper px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal variant="roll">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                Before / after
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
                The site before we framed it, and what we left.
              </h2>
            </Reveal>
            <Reveal variant="zoom" delay={80} className="mt-8">
              <BeforeAfter
                before={project.beforeAfter.before}
                after={project.beforeAfter.after}
              />
            </Reveal>
          </div>
        </div>

        <div className="border-t border-line bg-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-3">
            <Reveal variant="roll">
              <section>
                <h2 className="font-serif text-xl font-semibold">The problem</h2>
                <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>
              </section>
            </Reveal>
            <Reveal variant="swing" delay={90}>
              <section>
                <h2 className="font-serif text-xl font-semibold">How we framed it</h2>
                <p className="mt-3 leading-relaxed text-muted">{project.approach}</p>
              </section>
            </Reveal>
            <Reveal variant="up" delay={180}>
              <section>
                <h2 className="font-serif text-xl font-semibold">What we left</h2>
                <p className="mt-3 leading-relaxed text-muted">{project.result}</p>
              </section>
            </Reveal>
          </div>
        </div>
      </article>

      <JobStatus project={project} />

      <section className="border-t border-line bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-semibold">More jobs</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {others.map((item, index) => (
              <li key={item.slug}>
                <Reveal variant={index % 2 === 0 ? "roll" : "swing"} delay={index * 80}>
                <Link
                  href={`/work/${item.slug}`}
                  className="card-lift block border border-line bg-paper p-6 transition-colors hover:border-forest/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
                    {item.location} · {item.type} · {item.duration}
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold">{item.title}</p>
                </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta
        title="Get an estimate for yours"
        lede="If this job looks like what you need framed, send the site and the scope. We will tell you the next step."
        image={project.cover.src}
      />
    </main>
  );
}
