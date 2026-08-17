import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom home framing, room additions, structural work, and garages in Aurora and the Denver metro.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <Services />
    </main>
  );
}
