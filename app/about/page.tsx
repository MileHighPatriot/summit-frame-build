import type { Metadata } from "next";
import Crew from "@/components/about/Crew";
import Eyebrow from "@/components/ui/Eyebrow";
import PageHeader from "@/components/ui/PageHeader";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Summit Frame & Build is a family framing company founded in Aurora, Colorado in 1989. Meet the crew.",
};

const timeline = [
  {
    year: "1989",
    title: "One truck, one crew",
    body: "Frank Calder starts Summit with a used F-250, a worm-drive saw, and a rule: frame every wall like you'll hang the door yourself.",
  },
  {
    year: "1990s",
    title: "Growth by referral",
    body: "Builders who saw the last job call about the next one. The crew stays small on purpose, so the standard never slips.",
  },
  {
    year: "2008",
    title: "The second generation",
    body: "Luis Calder comes in from the field to run estimates, bidding what's actually there instead of what the drawing hopes for.",
  },
  {
    year: "Today",
    title: "Still family-run",
    body: "Custom homes, additions, structural work, and garages across the Denver metro. Better tools, same expectations.",
  },
];

const values = [
  {
    title: "Accountable",
    body: "The people who bid your job are the people who build it, and the people who answer the phone afterward.",
  },
  {
    title: "Precise",
    body: "Layout, hardware, and load paths get checked before anything is covered. Square and plumb isn't a slogan.",
  },
  {
    title: "Straightforward",
    body: "Clear scopes, honest schedules, and change orders written before the work, not after.",
  },
  {
    title: "Built for Colorado",
    body: "Snow load, Front Range wind, and freeze-thaw cycles are part of every decision we make on site.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="About"
        title="A family business, since 1989."
        lede="Summit is still run by the family that started it. We're tradespeople first: early mornings, clean layout, and job sites you'd be happy to have next door."
        image={{
          src: "/home/framers-sheathing.jpg",
          alt: "Crew nailing sheathing onto an exterior framed wall",
        }}
      />

      <section className="container-x section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01" className="text-stone">
              Our story
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <blockquote className="t-h2 text-balance">
                &ldquo;If your name is on the truck, the walls have to be
                straight enough that you&rsquo;d hang a door in them
                yourself.&rdquo;
              </blockquote>
              <p className="mt-6 text-stone">Frank Calder, founder</p>
            </Reveal>
            <div className="t-body mt-16 grid gap-8 text-stone md:grid-cols-2">
              <Reveal>
                <p>
                  Frank started Summit in Aurora after three years on a volume
                  crew that could stand a house in two days, and never wanted
                  to work that way again. The first jobs were ranch additions,
                  garages, and bearing walls opened by someone who shouldn&rsquo;t
                  have. He measured twice, pulled diagonals in front of the
                  homeowner, and came back if a header sat proud.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>
                  Three decades later, that rule still shapes how we hire, how
                  we bid, and how we leave a site. There&rsquo;s no sales
                  office and no rotating project manager. There&rsquo;s a lead,
                  a crew, and a standard that was passed down because it
                  worked. We frame, and we leave finish work to finish trades.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/15">
        <ol className="container-x grid sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <Reveal
              as="li"
              key={item.year}
              delay={index * 0.08}
              className="border-b border-ink/15 py-12 sm:border-r sm:px-8 sm:first:pl-0 lg:border-b-0 lg:py-16 lg:last:border-r-0"
            >
              <p className="font-serif text-5xl leading-none text-cedar">{item.year}</p>
              <h3 className="t-h3 mt-10">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-stone">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="section-y bg-char text-paper">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="02" className="text-paper/55">
                What we stand for
              </Eyebrow>
              <h2 className="t-h2 mt-8 max-w-[12ch]">Trust is earned on the job site.</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-12 hidden lg:block">
              <ParallaxImage
                src="/services/framing/home-trusses.jpg"
                alt="Roof trusses on a new home with the Front Range beyond"
                sizes="40vw"
                className="aspect-[4/5]"
              />
            </Reveal>
          </div>
          <ul className="border-t border-paper/15 lg:col-span-6 lg:col-start-7 lg:self-end">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 0.06} className="border-b border-paper/15 py-10">
                <h3 className="t-h3">{value.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-paper/65">{value.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="crew" className="container-x section-y scroll-mt-24">
        <div className="mb-16 grid gap-10 sm:mb-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="03" className="text-stone">
              The crew
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <h2 className="t-h2 max-w-[18ch] text-balance">
              The people who bid it are the people who build it.
            </h2>
          </Reveal>
        </div>
        <Crew />
      </section>
    </main>
  );
}
