import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "@/components/Contact";
import PageHero from "@/components/PageHero";
import ScopeEstimator from "@/components/ScopeEstimator";
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
        lede="Call, text the address, or send the form with plans or photos. We will say if we are the right crew."
        image="/services/structural/struct-beam-v2.jpg"
      />
      <Suspense fallback={<div className="bg-cream px-5 py-20 text-center text-muted">Loading the estimate desk…</div>}>
        <Contact />
      </Suspense>
      <ScopeEstimator />
      <ServiceArea />
    </main>
  );
}
