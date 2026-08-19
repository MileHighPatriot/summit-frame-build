import type { Project } from "@/data/projects";
import Reveal from "@/components/Reveal";

export default function JobStatus({ project }: { project: Project }) {
  return (
    <section className="border-t border-line bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass">
            Job tracker
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-2xl font-semibold sm:text-3xl">
            How this job moved from the first note to the walk-through.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
            Live jobs get a private version of this. The same crew that bid it
            updates it — inquiry, walk, estimate, on frame, done.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-0 sm:grid-cols-5">
          {project.phases.map((phase, index) => (
            <li
              key={phase.label}
              className="relative border-l border-brass/50 pl-5 sm:border-l-0 sm:border-t sm:pl-0 sm:pt-5"
            >
              <span
                className="absolute top-0 left-0 h-2.5 w-2.5 -translate-x-[5px] rounded-full bg-brass sm:top-0 sm:left-0 sm:translate-x-0 sm:-translate-y-[5px]"
                aria-hidden="true"
              />
              <p className="font-serif text-sm text-brass">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-serif text-lg font-semibold">{phase.label}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {phase.when}
              </p>
              <p className="mt-2 pr-4 text-sm leading-relaxed text-muted">
                {phase.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
