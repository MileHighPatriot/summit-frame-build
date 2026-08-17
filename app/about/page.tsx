import type { Metadata } from "next";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Summit Frame & Build is a family framing crew founded in Aurora in 1989.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <About />
      <WhyChooseUs />
    </main>
  );
}
