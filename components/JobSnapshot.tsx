import type { Project } from "@/data/projects";

export default function JobSnapshot({ project }: { project: Project }) {
  const facts = [
    { label: "City", value: project.location },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
    { label: "Type", value: project.type },
  ];

  return (
    <aside className="border border-line bg-paper">
      <p className="border-b border-line px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-brass">
        Job snapshot
      </p>
      <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-paper px-5 py-4">
            <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {fact.label}
            </dt>
            <dd className="mt-1 font-serif text-lg font-semibold text-ink">
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="grid gap-8 border-t border-line px-5 py-6 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-ink">What we framed</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-ink">Not included</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
            {project.notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
