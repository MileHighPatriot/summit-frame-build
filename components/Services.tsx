import ServiceGallery from "@/components/ServiceGallery";

const services = [
  {
    title: "Custom Home Framing",
    body: "New construction framing from the foundation up—floors, walls, and roofs laid out clean and built to plan.",
    images: [
      {
        src: "/services/framing/home-shell.jpg",
        alt: "Two-story custom home wood frame on a suburban lot",
      },
      {
        src: "/services/framing/home-trusses.jpg",
        alt: "Roof trusses on a new custom home with the Front Range beyond",
      },
      {
        src: "/services/framing/home-interior.jpg",
        alt: "Interior wall studs, joists, and an LVL header in a new home",
      },
      {
        src: "/services/framing/home-slab.jpg",
        alt: "First exterior walls going up on a new-home slab",
      },
    ],
  },
  {
    title: "Room Additions",
    body: "Expand the house you already have. We tie new framing into the existing structure so the addition sits right.",
    images: [
      {
        src: "/services/additions/add-ranch-v2.jpg",
        alt: "One-story wood-framed addition tied onto an existing ranch",
      },
      {
        src: "/services/additions/add-second-story-v2.jpg",
        alt: "Second-story addition framed after the original roof was stripped",
      },
      {
        src: "/services/additions/add-roof-tie-v2.jpg",
        alt: "New addition rafters landing on a ledger at the existing roof",
      },
      {
        src: "/services/additions/add-into-house.jpg",
        alt: "New addition interior opening into an existing finished living room",
      },
    ],
  },
  {
    title: "Structural Work",
    body: "Beams, load-bearing changes, repairs, and reinforcement when the structure has to carry more than it used to.",
    images: [
      {
        src: "/services/structural/struct-beam-v2.jpg",
        alt: "Doubled LVL header with jack studs over an interior opening",
      },
      {
        src: "/services/structural/struct-steel-v2.jpg",
        alt: "Steel I-beam and lally columns supporting floor joists",
      },
      {
        src: "/services/structural/struct-basement.jpg",
        alt: "New mid-span beam and posts reinforcing floor joists",
      },
      {
        src: "/services/structural/struct-hardware.jpg",
        alt: "Hold-down hardware and bracing on a wood-framed wall",
      },
    ],
  },
  {
    title: "Garages & Outbuildings",
    body: "Detached structures framed with the same care as the house: square, sturdy, and ready for Colorado weather.",
    images: [
      {
        src: "/services/garages/garage-twocar.jpg",
        alt: "Detached two-car garage wood frame on a concrete pad",
      },
      {
        src: "/services/garages/garage-header.jpg",
        alt: "Long header over a two-car garage-door opening",
      },
      {
        src: "/services/garages/garage-shop.jpg",
        alt: "Three-bay workshop garage frame with three door openings",
      },
      {
        src: "/services/garages/garage-bays.jpg",
        alt: "Interior of a framed garage looking down the parking bays",
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
          What we build
        </p>
        <h2 className="mt-3 max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Framing and structural work, done the right way.
        </h2>
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">
          We focus on the bones of the house. If it has to be square, strong,
          and ready for the next trade, that is our job.
        </p>

        <div className="mt-12 space-y-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border border-line bg-cream p-6 sm:p-8"
            >
              <p className="font-serif text-sm text-brass">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                {service.body}
              </p>
              <ServiceGallery images={service.images} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
