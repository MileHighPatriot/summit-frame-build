import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  aspect?: string;
  sizes?: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className={`relative overflow-hidden bg-sand ${aspect}`}>
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          sizes={sizes}
          className="grade object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h3 className="t-h3">
            <span className="link-underline pb-0.5">{project.name}</span>
          </h3>
          <p className="mt-2 text-stone">
            {project.type} &middot; {project.location} &middot; {project.year}
          </p>
        </div>
        <span className="t-eyebrow shrink-0 pt-2 text-stone">{project.size}</span>
      </div>
    </Link>
  );
}
