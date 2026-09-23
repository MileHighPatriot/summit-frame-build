import type { Metadata } from "next";
import Faq, { type FaqItem } from "@/components/Faq";
import { TextLink } from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Permits, timelines, what's included, and where Summit Frame & Build works.",
};

const items: FaqItem[] = [
  {
    question: "Do you pull permits?",
    answer:
      "It depends on the job. Sometimes the homeowner or general contractor holds the permit, and sometimes we handle it. Either way, we build to code and coordinate inspections, and we'll tell you which applies before we start.",
  },
  {
    question: "Do you work with homeowners or only general contractors?",
    answer:
      "Both. Homeowners hire us directly for additions, structural work, and garages, and general contractors bring us in to frame custom homes. You get the same crew and the same standard either way.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "A structural opening or small repair usually takes a few days. A garage takes one to two weeks, an addition three to six, and a custom home six to ten, depending on the plans and the weather. Your estimate includes a realistic schedule.",
  },
  {
    question: "What isn't included in your work?",
    answer:
      "We frame. Foundations, roofing, siding, windows, electrical, plumbing, insulation, drywall, and finish carpentry are handled by other trades unless we agree otherwise in writing. Your estimate spells out exactly where our work stops.",
  },
  {
    question: "Do you work in winter?",
    answer:
      "Yes. Colorado winters are part of the job. We plan around snow and cold, protect materials on site, and build weather days into the schedule so you're not surprised.",
  },
  {
    question: "Where do you work?",
    answer: `Aurora, Denver, and the surrounding metro, including ${site.cities.slice(2, 8).join(", ")}, and Castle Rock. If you're farther out, ask. Some projects are worth the drive.`,
  },
  {
    question: "Do you need architectural plans to give an estimate?",
    answer:
      "Plans help, but they aren't required to start the conversation. For additions and structural work we can often begin with a site visit and photos, then work with your designer or engineer on the drawings.",
  },
];

export default function FaqPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="FAQ"
        title="Straight answers."
        lede="Permits, timelines, scope, and service area. If your question isn't here, give us a call."
      />

      <section className="container-x section-y">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <p className="text-stone">Still have a question?</p>
            <a href={site.phoneHref} className="t-h3 mt-3 block">
              {site.phoneDisplay}
            </a>
            <TextLink href="/contact" className="mt-6">
              Send us a note
            </TextLink>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-8 lg:col-start-5">
            <Faq items={items} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
