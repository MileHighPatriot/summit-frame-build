import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected projects from ${site.name}: custom homes, additions, and structural work in ${site.area}.`,
};

export default function WorkPage() {
  const [first, second, third] = projects;

  return (
    <main id="main">
      <PageHeader
        eyebrow="Selected work"
        title="Frames we're proud to put our name on."
        lede="A custom home, an addition, and a structural opening. Each one shows what we framed, how we did it, and what we left for the next trade."
      />

      <section className="container-x pt-16 pb-24 sm:pt-24 sm:pb-36">
        <Reveal>
          <ProjectCard project={first} aspect="aspect-[4/3] sm:aspect-[21/10]" sizes="100vw" />
        </Reveal>
        <div className="mt-20 grid gap-20 sm:mt-28 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <ProjectCard project={second} aspect="aspect-[4/3]" sizes="(min-width: 768px) 58vw, 100vw" />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5 md:mt-40">
            <ProjectCard project={third} sizes="(min-width: 768px) 42vw, 100vw" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
