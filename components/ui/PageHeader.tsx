import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image?: { src: string; alt: string };
  actions?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  lede,
  image,
  actions,
}: PageHeaderProps) {
  return (
    <header className="bg-bone pt-36 sm:pt-44 lg:pt-52">
      <div className="container-x">
        <Reveal>
          <Eyebrow className="text-stone">{eyebrow}</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal delay={0.08} className="lg:col-span-8">
            <h1 className="t-h1 max-w-[14ch] text-balance">{title}</h1>
          </Reveal>
          {lede || actions ? (
            <Reveal delay={0.16} className="lg:col-span-4 lg:pb-3">
              {lede ? <p className="t-lede text-stone">{lede}</p> : null}
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </Reveal>
          ) : null}
        </div>
      </div>
      {image ? (
        <div className="mt-16 sm:mt-24">
          <ParallaxImage
            src={image.src}
            alt={image.alt}
            priority
            className="h-[62vh] min-h-[22rem] sm:h-[78vh]"
          />
        </div>
      ) : (
        <div className="container-x">
          <div className="hairline mt-16 text-ink sm:mt-24" />
        </div>
      )}
    </header>
  );
}
