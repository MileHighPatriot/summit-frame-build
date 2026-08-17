const steps = [
  {
    title: "You reach out",
    lead: "A short note is enough to start. We do not need a polished packet.",
    body: "Use the inquiry form or call and tell us the address, what you want framed, and when you need it. If you have plans, a sketch, or a few phone photos of the existing house, send those too. If you do not, that is fine — a lot of our work starts with a homeowner standing in a yard describing a room they want. We will confirm we received you the same day when we can, and we will tell you if the job is a fit before anyone drives out. We take custom homes, additions, structural openings, and outbuildings. If it is finish work, roofing, or a trade we do not do, we will say so up front.",
    details: [
      "Job site city and a rough address",
      "Project type and a one-paragraph description",
      "Target start or finish, even if it is loose",
      "Plans, photos, or “we do not have drawings yet”",
    ],
  },
  {
    title: "We look at the job",
    lead: "We come to the site, or we sit with the drawings, before we talk price.",
    body: "On an addition or structural job we walk the existing house: foundation, bearing walls, roof tie-in, access for lumber, and what the next trades will need. On a new home or garage we walk the pad or foundation and check the plans against what is actually in the ground. We look at snow load, spans, headers, and whether the existing frame can take what you want to add. If an engineer or the city will need to see something, we flag it here — not after we have already started cutting. You will get a crew lead who talks like a framer, not a salesperson. Bring questions. We would rather spend an extra twenty minutes on site than guess later.",
    details: [
      "Walkthrough of the lot, pad, or existing structure",
      "Review of plans, or a measured look if there are none",
      "Notes on access, dumpsters, and neighbor constraints",
      "A short list of what has to be decided before we bid",
    ],
  },
  {
    title: "You get a clear estimate",
    lead: "Scope, approach, and price in writing. What is in, what is out.",
    body: "The estimate names the work: floors, walls, roof, sheathing, hardware, and any beams or openings we are responsible for. It also names what we are not doing — drywall, roofing, windows, electrical, plumbing, and finish — unless we agreed to it. You will see how we plan to sequence the job, what we need from you (permit status, materials decisions, site access), and a timeline that accounts for Colorado weather instead of pretending winter does not exist. If something is an allowance or a maybe, it is labeled that way. We would rather lose a bid for being plain than win one on a number that cannot hold. Ask us to walk the line items. That is part of the job.",
    details: [
      "Written scope with inclusions and exclusions",
      "Price and how change orders would be handled",
      "Target start window and a realistic duration",
      "What we need from you before the first day",
    ],
  },
  {
    title: "We frame it",
    lead: "We show up, build it square, and keep you posted.",
    body: "A lead and a small crew run the job. Layout is checked before walls go up. Headers, hold-downs, and load paths get the time they deserve. We keep the site as orderly as a framing job can be — lumber stacked, scraps cut down, neighbors considered. You will hear from us if a plan detail does not match the field, if weather is going to cost a day, or if a change will affect cost or schedule. When we are done, the frame is plumb, the openings are right, and the next trade can walk in without inheriting our mess. We do not disappear after the last nail. If something we built needs a look, you call the same people who framed it.",
    details: [
      "Daily or regular updates from the lead on site",
      "Layout, walls, roof, and hardware built to the agreed scope",
      "A walk-through before we call the frame complete",
      "The same crew accountable after we leave",
    ],
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          How we work
        </p>
        <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          No sales office. Four steps, then we build.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Same process for a custom home, an addition, a beam, or a garage.
          You always know who is coming, what they are looking at, and what
          happens next.
        </p>

        <ol className="mt-14 space-y-12">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12"
            >
              <div>
                <p className="font-serif text-sm text-brass">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink">{step.lead}</p>
              </div>
              <div>
                <p className="leading-relaxed text-muted">{step.body}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="border-l-2 border-brass/70 pl-3 text-sm leading-relaxed text-ink"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
