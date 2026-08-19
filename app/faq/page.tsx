import type { Metadata } from "next";
import Faq from "@/components/Faq";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Permits, timelines, what is included, and where Summit Frame & Build works.",
};

export default function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Common questions"
        title="Straight answers before you call."
        lede="Permits, timelines, what is included, and where we work. If the job is a fit, we will say so. If it is not, we will say that too."
        image="/services/structural/struct-hardware.jpg"
      />
      <Faq />
      <PageCta
        title="Still have a question?"
        lede="Send the job. If we cannot bid it, we will tell you why instead of guessing."
        image="/services/structural/struct-hardware.jpg"
      />
    </main>
  );
}
