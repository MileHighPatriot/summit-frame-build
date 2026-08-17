import type { Metadata } from "next";
import Crew from "@/components/Crew";

export const metadata: Metadata = {
  title: "Crew",
  description:
    "Meet the Summit Frame & Build crew — founder, estimator, lead framer, and crew lead.",
};

export default function CrewPage() {
  return (
    <main id="main">
      <Crew />
    </main>
  );
}
