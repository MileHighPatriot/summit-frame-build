import { TextLink } from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/data/services";

export default function Process() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="04" className="text-stone">
              How we work
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="t-h2 max-w-[16ch] text-balance">
                One crew, from the first call to the last nail.
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-8">
              <TextLink href="/process">The full process</TextLink>
            </Reveal>
          </div>
        </div>

        <ol className="mt-16 grid gap-px bg-ink/15 sm:mt-24 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="flex min-h-72 flex-col bg-bone py-8 sm:px-8 sm:first:pl-0 lg:min-h-96"
            >
              <span className="font-serif text-6xl leading-none text-cedar sm:text-7xl">
                {index + 1}
              </span>
              <h3 className="t-h3 mt-auto pt-12">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-stone">{step.short}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
