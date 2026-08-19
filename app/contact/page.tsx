import type { Metadata } from "next";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import ServiceArea from "@/components/ServiceArea";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a project inquiry to Summit Frame & Build for custom framing, additions, or structural work.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Project inquiry"
        title="Tell us about the job."
        lede="Call, email, or send the form with plans or photos. We will say if we are the right crew."
        image="/services/structural/struct-beam-v2.jpg"
      />
      <Contact />
      <ServiceArea />
    </main>
  );
}
