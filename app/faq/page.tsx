import type { Metadata } from "next";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Permits, timelines, what is included, and where Summit Frame & Build works.",
};

export default function FaqPage() {
  return (
    <main id="main">
      <Faq />
    </main>
  );
}
