import type { Metadata } from "next";
import Crew from "@/components/Crew";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Crew",
  description:
    "Meet the Summit Frame & Build crew — founder, estimator, lead framer, and crew lead.",
};

export default function CrewPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="The crew"
        title="Names, faces, and who does what."
        lede="You will not get a rotating project manager. These are the people who bid the work and the people who frame it. Click a photo for the full story."
        image="/services/garages/garage-shop.jpg"
      />
      <Crew />
      <PageCta
        title="Talk to the same people who build it"
        lede="The estimate and the job site are the same crew. Send the project and we will follow up."
        image="/services/garages/garage-shop.jpg"
      />
    </main>
  );
}
