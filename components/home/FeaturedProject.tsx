import Link from "next/link";
import { TextLink } from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import { getProject } from "@/data/projects";

export default function FeaturedProject() {
  const project = getProject("denver-custom-home");
  if (!project) return null;

  const specs = [
    { label: "Location", value: project.location },
    { label: "Completed", value: project.year },
    { label: "Size", value: project.size },
    { label: "Frame time", value: project.duration },
  ];

  return (
    <section className="pb-24 sm:pb-36">
      <div className="container-x mb-10 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
        <Reveal>
          <Eyebrow index="02" className="text-stone">
            Featured project
          </Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <TextLink href="/work">All projects</TextLink>
        </Reveal>
      </div>

      <Link href={`/work/${project.slug}`} className="group block">
        <ParallaxImage
          src={project.cover.src}
          alt={project.cover.alt}
          className="h-[70vh] min-h-[24rem] sm:h-[92vh]"
          imageClassName="transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.03]"
        />
        <div className="container-x mt-10 grid gap-10 sm:mt-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-6">
            <p className="t-eyebrow text-cedar">{project.type}</p>
            <h2 className="t-h2 mt-5 max-w-[16ch] text-balance">
              <span className="link-underline pb-1">{project.name}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="t-body text-stone">{project.summary}</p>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-ink/15 pt-8">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <dt className="t-eyebrow text-stone">{spec.label}</dt>
                  <dd className="mt-2 text-lg">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Link>
    </section>
  );
}
