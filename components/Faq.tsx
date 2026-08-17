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
      "Aurora, Denver, and nearby Front Range communities — Centennial, Lakewood, Highlands Ranch, and similar. If you are farther out, ask. Some jobs are worth the drive.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          Common questions
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Straight answers before you call.
        </h2>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
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
          ))}
        </div>
      </div>
    </section>
  );
}
