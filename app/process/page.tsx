import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Four steps from first inquiry to a square frame: reach out, walk the job, get a clear estimate, we build it.",
};

export default function ProcessPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="How we work"
        title="No sales office. Four steps, then we build."
        lede="Same process for a custom home, an addition, a beam, or a garage. You always know who is coming, what they are looking at, and what happens next."
        image="/services/framing/home-slab.jpg"
      />
      <HowWeWork />
      <PageCta
        title="Ready for the first step?"
        lede="A short note is enough. Send the address, what you want framed, and when you need it."
        image="/services/framing/home-slab.jpg"
      />
    </main>
  );
}
