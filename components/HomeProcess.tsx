import Link from "next/link";
import Reveal from "@/components/Reveal";

const steps = [
  {
    title: "You reach out",
    body: "A short note, an address, and what you want framed. Plans help. Photos of the house help more.",
  },
  {
    title: "We look at the job",
    body: "We walk the pad or the existing house before we talk price. Drawings get checked against what is actually there.",
  },
  {
    title: "You get a clear estimate",
    body: "Scope, what is in, what is out, and a timeline that accounts for Colorado weather.",
  },
  {
    title: "We frame it",
    body: "The same crew that bid it runs the site. Square, plumb, and ready for the next trade.",
  },
];

export default function HomeProcess() {
  return (
    <section className="relative overflow-hidden bg-forest px-5 py-12 text-cream sm:px-8 sm:py-24">
      <div className="steel-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            How we work
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
            Four steps. No sales office.
          </h2>
        </Reveal>

        <ol className="mt-6 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal variant="up" delay={index * 70}>
                <p className="font-serif text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal variant="fade" delay={200}>
          <Link
            href="/process"
            className="mt-10 inline-block text-sm font-semibold text-brass hover:text-brass-hover"
          >
            Read the full process
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
