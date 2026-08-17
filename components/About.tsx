const timeline = [
  {
    year: "1989",
    title: "A one-crew shop in Aurora",
    body: "Summit Frame & Build started with a pickup, a framing hammer, and work that had to be right the first time. The Front Range was growing. Someone had to put the walls up so the rest of the house could follow.",
  },
  {
    year: "1990s",
    title: "Reputation over advertising",
    body: "Jobs came from builders who had seen the last one, and from homeowners whose neighbor had an addition that lined up. We stayed a family crew on purpose. Growth that watered down the work was never the point.",
  },
  {
    year: "2000s",
    title: "Second generation on the tools",
    body: "Kids who had stacked lumber in the yard came onto the crew for real. They learned layout, codes, and how to talk to a customer without a script. The name on the truck stayed the same. So did the standard.",
  },
  {
    year: "Today",
    title: "Still family-run",
    body: "We still frame custom homes, additions, structural openings, and outbuildings across Aurora and the Denver metro. The tools are better. The weather is the same. The expectation has not moved: square, plumb, and finished like someone in the family has to look at it.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          About the crew
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          A family framing business, founded in 1989.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
          Summit Frame & Build is still run by the family that started it. We
          are tradesmen first — early mornings, clean layout, and a job site
          you do not have to apologize for. Professionalism here means we
          return the call, we do what we said, and we do not leave a mess for
          the next trade.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              In 1989 the company began in Aurora as a small framing crew taking
              the work other people rushed. Custom homes were going up along
              the east metro. Room additions were being asked for on ranches
              that had run out of space. The founder’s rule was simple: if your
              name is on the job, the walls have to be straight enough that you
              would hang a door in them yourself.
            </p>
            <p>
              That rule is still how we hire, how we bid, and how we leave a
              site. We are a family-run business, which means the people who
              talk to you about the estimate are the same people who answer
              when something on site does not match the drawings. There is no
              sales office and no rotating project manager you have never met.
              There is a lead, a crew, and a standard that got passed down
              because it worked.
            </p>
            <p>
              Work ethic is not a slogan on our trucks. Framing in Colorado is
              wind, freeze-thaw, and snow load. It is lumber that has to be
              kept straight and hardware that has to be in the right place
              before anyone covers it. We show up on time. We stay until the
              day’s layout is done. We do not send a green helper to make a
              call that belongs to the lead. Hard work here looks like checking
              the diagonal twice, cutting the header again if it is proud, and
              sweeping the pad before we lock the gate.
            </p>
            <p>
              Professionalism is how we treat your house and your neighbors.
              Radios stay civil. The street stays passable. We tell you the
              day before if weather is going to cost us a shift. We write
              change orders before we build them, not after. If we are wrong,
              we say so and we fix it. That is the only way a family company
              lasts from 1989 to now without turning into something we would
              not hire ourselves.
            </p>
            <p>
              Over the years the second generation came up on these jobs —
              stacking units, packing walls, then running layout. They learned
              the old way: you earn the right to talk to the customer by doing
              the work well when nobody is watching. Today that mix of
              long-time framers and family on the tools is the crew. We take
              custom home framing, residential additions, structural beams and
              openings, and detached garages. We leave finish work to finish
              trades. We would rather do one thing thoroughly than promise a
              whole house we cannot stand behind.
            </p>
            <p>
              If you hire us, you are hiring that history. Not a franchise.
              Not a bid mill. A Front Range family that has been putting up
              walls since 1989 and still treats every plate, stud, and beam as
              if the next person through the door is going to be someone we
              know.
            </p>
          </div>

          <ol className="space-y-0 border-l border-line">
            {timeline.map((item) => (
              <li
                key={item.year}
                className="group relative py-6 pl-8 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-7 left-[-5px] h-2.5 w-2.5 rounded-full bg-brass group-first:top-1"
                />
                <p className="font-serif text-sm font-semibold text-brass">
                  {item.year}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
