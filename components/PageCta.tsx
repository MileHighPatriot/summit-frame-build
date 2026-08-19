import Image from "@/components/SiteImage";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type PageCtaProps = {
  title?: string;
  lede?: string;
  image?: string;
};

export default function PageCta({
  title = "Planning a project?",
  lede = "Tell us what you need framed. We will follow up with a clear estimate.",
  image = "/services/framing/home-shell.jpg",
}: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/90 to-forest/65" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
        <Reveal variant="roll">
          <h2 className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl leading-relaxed text-cream/80">{lede}</p>
        </Reveal>
        <Reveal variant="swing" delay={140}>
          <Link
            href="/contact"
            className="btn btn-shine shrink-0 bg-brass text-ink hover:bg-brass-hover"
          >
            Get a Free Estimate
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
