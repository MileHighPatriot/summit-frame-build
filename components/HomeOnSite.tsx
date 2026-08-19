import Image from "@/components/SiteImage";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const shots = [
  {
    src: "/home/framers-nailing-wall.jpg",
    alt: "Framers toenailing wall studs and standing a wood-framed wall on a job site",
    title: "Walls going up",
    caption: "Layout checked, then the wall goes vertical. We do not bury a racked plate and hope drywall hides it.",
  },
  {
    src: "/home/framers-setting-truss.jpg",
    alt: "Two framers setting a roof truss on a two-story wood house frame",
    title: "Roof framing",
    caption: "Trusses and rafters set to the plan, with snow load and wind in mind — not a brochure from somewhere else.",
  },
  {
    src: "/home/framers-sheathing.jpg",
    alt: "Crew nailing OSB sheathing onto an exterior framed wall",
    title: "Closing the shell",
    caption: "Sheathing, fasteners, and a pad the next trade can walk. The site stays workable until we lock the gate.",
  },
];

export default function HomeOnSite() {
  return (
    <section className="bg-cream px-5 py-10 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="roll">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            On the tools
          </p>
          <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-xl font-serif text-3xl font-semibold tracking-tight sm:text-5xl">
              The crew on a real pad, not a showroom.
            </h2>
            <Link
              href="/work"
              className="text-sm font-semibold text-forest hover:text-forest-mid"
            >
              See selected work
            </Link>
          </div>
        </Reveal>

        <ul className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-1 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {shots.map((shot, index) => (
            <li key={shot.src} className="w-[82%] shrink-0 snap-start sm:w-auto">
              <Reveal variant="up" delay={index * 80}>
                <figure>
                  <div className="reveal-media relative aspect-[4/3] overflow-hidden bg-line">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="font-serif text-xl font-semibold tracking-tight text-ink">
                      {shot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {shot.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
