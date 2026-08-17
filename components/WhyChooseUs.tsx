const points = [
  {
    title: "Local and accountable",
    body: "We work in Aurora and across the Denver metro. You are hiring a crew that lives with the same weather and the same codes.",
  },
  {
    title: "Square, plumb, and to code",
    body: "The frame is the bones. Layout, fasteners, and load paths get the time they deserve—before anyone covers them up.",
  },
  {
    title: "Clear estimates",
    body: "You will know the scope, the approach, and what we are building. No runaround. No flashy pitch. Just the work.",
  },
  {
    title: "Built for the Front Range",
    body: "Snow load, wind, and freeze-thaw are part of the job here. We frame for Colorado, not a brochure from somewhere else.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Why choose us
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Trust is earned on the job, not in the tagline.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className="border-t border-cream/15 pt-6">
              <h3 className="font-serif text-xl font-semibold">{point.title}</h3>
              <p className="mt-3 leading-relaxed text-cream/75">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
