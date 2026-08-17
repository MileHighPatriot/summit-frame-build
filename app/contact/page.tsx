import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a project inquiry to Summit Frame & Build for custom framing, additions, or structural work.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <Contact />
    </main>
  );
}
