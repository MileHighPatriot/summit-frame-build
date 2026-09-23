import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import BeforeAfter from "@/components/work/BeforeAfter";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const specs = [
    { label: "Location", value: project.location },
    { label: "Type", value: project.type },
    { label: "Completed", value: project.year },
    { label: "Size", value: project.size },
    { label: "Frame time", value: project.duration },
  ];

  const story = [
    { label: "The challenge", body: project.challenge },
    { label: "Our approach", body: project.approach },
    { label: "The result", body: project.result },
  ];

  return (
    <main id="main">
      <article>
        <header className="pt-36 sm:pt-44 lg:pt-52">
          <div className="container-x">
            <Reveal>
              <Link
                href="/work"
                className="t-eyebrow group inline-flex items-center gap-3 text-stone hover:text-ink"
              >
                <Arrow className="rotate-180 transition-transform duration-500 group-hover:-translate-x-1" />
                All work
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="t-h1 mt-8 max-w-[16ch] text-balance">{project.name}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="t-lede mt-8 max-w-2xl text-stone">{project.title}.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="mt-16 sm:mt-24">
            <ParallaxImage
              src={project.cover.src}
              alt={project.cover.alt}
              priority
              className="h-[65vh] min-h-[22rem] sm:h-[88vh]"
            />
          </Reveal>
        </header>

        <section className="container-x section-y">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-4">
              <dl className="border-t border-ink/15">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-baseline justify-between gap-6 border-b border-ink/15 py-5"
                  >
                    <dt className="t-eyebrow text-stone">{spec.label}</dt>
                    <dd className="text-right text-lg">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="t-h3 text-balance">{project.summary}</p>
              </Reveal>
              <div className="mt-16 space-y-14">
                {story.map((part, i) => (
                  <Reveal key={part.label} delay={i * 0.05} className="grid gap-4 sm:grid-cols-7 sm:gap-8">
                    <h2 className="t-eyebrow pt-1.5 text-cedar sm:col-span-2">{part.label}</h2>
                    <p className="t-body text-stone sm:col-span-5">{part.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-char py-24 text-paper sm:py-36">
          <div className="container-x">
            <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
              <Reveal>
                <Eyebrow className="text-paper/55">Before &amp; after</Eyebrow>
                <h2 className="t-h2 mt-6 max-w-[14ch]">From bare site to finished frame.</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="max-w-xs text-paper/60">
                  Drag the handle, or focus it and use the arrow keys, to compare.
                </p>
              </Reveal>
            </div>
            <Reveal>
              <BeforeAfter before={project.beforeAfter.before} after={project.beforeAfter.after} />
            </Reveal>
          </div>
        </section>

        <section className="container-x section-y">
          <div className="grid gap-4 sm:grid-cols-12 sm:gap-6">
            {project.gallery.map((image, i) => (
              <Reveal
                as="figure"
                key={image.src}
                delay={i * 0.08}
                className={
                  i === 0
                    ? "sm:col-span-12"
                    : "sm:col-span-6"
                }
              >
                <div className={`relative overflow-hidden bg-sand ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={i === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                    className="grade object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-stone">{image.alt}</figcaption>
              </Reveal>
            ))}
          </div>

          <div className="mt-24 grid gap-12 border-t border-ink/15 pt-12 sm:mt-32 md:grid-cols-2">
            <Reveal>
              <h2 className="t-eyebrow text-cedar">What we framed</h2>
              <ul className="mt-6 space-y-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-4 text-lg">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="t-eyebrow text-stone">By other trades</h2>
              <ul className="mt-6 space-y-3 text-stone">
                {project.notIncluded.map((item) => (
                  <li key={item} className="flex gap-4 text-lg">
                    <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-stone/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </article>

      <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden bg-char text-paper">
        <Image
          src={next.cover.src}
          alt=""
          fill
          sizes="100vw"
          className="grade object-cover opacity-45 transition-[opacity,transform] duration-[1.4s] ease-out-expo group-hover:scale-[1.03] group-hover:opacity-60"
        />
        <div className="container-x relative flex min-h-[60vh] flex-col justify-end py-16 sm:py-24">
          <p className="t-eyebrow text-paper/70">Next project</p>
          <p className="t-h1 mt-6 flex items-end justify-between gap-8">
            <span className="max-w-[14ch]">{next.name}</span>
            <span className="mb-3 hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-paper/40 transition-colors duration-500 group-hover:bg-paper group-hover:text-ink sm:flex">
              <Arrow className="h-6 w-6" />
            </span>
          </p>
        </div>
      </Link>
    </main>
  );
}
