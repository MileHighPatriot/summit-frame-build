import Eyebrow from "@/components/ui/Eyebrow";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { stats } from "@/data/site";

export default function Intro() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <Eyebrow index="01" className="text-stone">
              The company
            </Eyebrow>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="t-h2 text-balance">
                Every house is only as good as its frame. For more than three
                decades, our family has built the part{" "}
                <span className="text-stone">
                  you never see &mdash; and everyone depends on.
                </span>
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <TextLink href="/about">Our story</TextLink>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <ParallaxImage
              src="/home/framers-setting-truss.jpg"
              alt="Two framers setting a roof truss on a two-story wood house frame"
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3]"
            />
          </Reveal>
          <div className="flex flex-col justify-end lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-ink/15 border-y border-ink/15">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.08} className="py-7">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="t-h1 block">{stat.value}</span>
                    <span className="mt-3 block text-stone">{stat.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
