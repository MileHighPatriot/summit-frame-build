import type { Metadata } from "next";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom home framing, room additions, structural work, and garages in Aurora and the Denver metro.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="What we build"
        title="Framing and structural work, done the right way."
        lede="We focus on the bones of the house. If it has to be square, strong, and ready for the next trade, that is our job."
        image="/services/framing/home-interior.jpg"
      />
      <Services />
      <PageCta
        title="Need one of these trades?"
        lede="Tell us the city, the structure, and the timing. We will say if we are the right crew."
        image="/services/framing/home-interior.jpg"
      />
    </main>
  );
}
