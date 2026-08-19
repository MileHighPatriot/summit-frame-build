import Reveal from "@/components/Reveal";

const items = [
  {
    question: "Do you pull permits?",
    answer:
      "We work to code and can coordinate with the permit process. On some jobs the homeowner or general contractor holds the permit; on others we handle it. We will say which applies before we start.",
  },
  {
    question: "Do you work with homeowners or only general contractors?",
    answer:
      "Both. Homeowners hiring us directly, and GCs who need a framing crew. Either way you get the same work: square, plumb, and ready for the next trade.",
  },
  {
    question: "How long does a typical job take?",
    answer:
      "A garage or small structural repair can be days. A room addition is usually weeks. A custom home depends on the plans and weather. We give a timeline with the estimate, not a guess on the first call.",
  },
  {
    question: "What is not included?",
    answer:
      "We frame. Drywall, roofing, siding, windows, electrical, plumbing, and finish work are separate trades unless we agree otherwise in writing. The estimate will say exactly where our work stops.",
  },
  {
    question: "Where do you work?",
    answer:
      "Aurora, Denver, and nearby Front Range communities — Centennial, Lakewood, Highlands Ranch, and similar. City pages under Service area list the snow and wind notes we walk with. If you are farther out, ask. Some jobs are worth the drive.",
  },
  {
    question: "Is the scope desk a bid?",
    answer:
      "No. It is a typical frame window so you know if the job is in our range. The number moves after we see the lot, the drawings, and the weather. A bid is a letter after a walk — not a form.",
  },
  {
    question: "Can I text instead of filling out the form?",
    answer:
      "Yes. Text the address and what you want framed. We will tell you if we are the right crew and whether we need a lot walk or a plans review first.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-cream px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="divide-y divide-line border-y border-line">
          {items.map((item, index) => (
            <Reveal key={item.question} variant="up" delay={index * 70}>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-serif text-lg font-semibold tracking-tight marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 text-brass transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                {item.answer}
              </p>
            </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
