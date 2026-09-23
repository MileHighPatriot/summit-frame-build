import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Summit Frame & Build works: a conversation, a site visit, a written estimate, and a family crew that frames it.",
};

const steps = [
  {
    title: "Conversation",
    lead: "A short note is enough to start.",
    body: "Tell us the address, what you want built, and roughly when. Plans, a sketch, or a few phone photos of the existing house all help, but plenty of our projects start with a homeowner describing a room they wish they had. We'll let you know quickly whether the job is a fit, before anyone drives out.",
    details: ["Job site address", "Project type and a short description", "Target timing, even if loose", "Any plans or photos you have"],
  },
  {
    title: "Site visit",
    lead: "We look at the real conditions before we talk price.",
    body: "For additions and structural work, we walk the existing house: foundation, bearing walls, roof tie-ins, and access. For new homes and garages, we walk the lot and check the plans against what's actually in the ground. If an engineer or the city needs to weigh in, we flag it now, not after work has started.",
    details: ["Walkthrough of the lot or structure", "Plan review, or field measurements", "Access, staging, and neighbors", "Open questions to resolve before pricing"],
  },
  {
    title: "Written estimate",
    lead: "Scope, schedule, and price, in plain language.",
    body: "Our estimate names exactly what we're framing and exactly what we're not. You'll see how we'll sequence the work, what we need from you, and a schedule that accounts for Colorado weather. We'd rather lose a bid for being straightforward than win one with a number that won't hold.",
    details: ["Inclusions and exclusions", "Price and change-order terms", "Start window and duration", "What we need from you"],
  },
  {
    title: "Build",
    lead: "The same family crew, from layout to walkthrough.",
    body: "A lead framer and a small crew run your job start to finish. Layout is checked before walls go up, and hardware and load paths get the time they deserve. You'll hear from us if a plan detail doesn't match the field or weather costs a day. When we're done, we walk the frame with you before handing off to the next trade.",
    details: ["Regular updates from the lead", "Clean, organized job site", "Final walkthrough together", "The same people answer after we leave"],
  },
];

export default function ProcessPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Process"
        title="Four steps. No surprises."
        lede="Whether it's a custom home, an addition, a beam, or a garage, you always know who's coming, what they're looking at, and what happens next."
        image={{
          src: "/home/framers-nailing-wall.jpg",
          alt: "Framers standing a wood-framed wall on a job site",
        }}
      />

      <ol className="container-x section-y">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="grid gap-10 border-t border-ink/15 py-16 first:border-t-0 first:pt-0 sm:py-24 lg:grid-cols-12 lg:gap-8"
          >
            <Reveal className="lg:col-span-5">
              <span className="block font-serif text-[clamp(5rem,12vw,11rem)] leading-[0.8] text-cedar">
                {index + 1}
              </span>
            </Reveal>
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="t-h2">{step.title}</h2>
                <p className="t-lede mt-5">{step.lead}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="t-body mt-8 max-w-2xl text-stone">{step.body}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <ul className="mt-10 grid border-t border-ink/15 sm:grid-cols-2 sm:gap-x-8">
                  {step.details.map((detail) => (
                    <li key={detail} className="border-b border-ink/15 py-4">
                      {detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>

      <section className="container-x pb-24 sm:pb-36">
        <Reveal className="flex flex-col items-start gap-8 border-t border-ink/15 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-h3 max-w-xl">Have questions about permits, timing, or scope?</p>
          <Button href="/faq" variant="outline">
            Read the FAQ
          </Button>
        </Reveal>
      </section>
    </main>
  );
}
