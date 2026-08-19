import type { Metadata } from "next";
import About from "@/components/About";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About",
  description:
    "Summit Frame & Build is a family framing crew founded in Aurora in 1989.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About the crew"
        title="A family framing business, founded in 1989."
        lede="Summit Frame & Build is still run by the family that started it. We are tradesmen first — early mornings, clean layout, and a job site you do not have to apologize for."
        image="/services/additions/add-ranch-v2.jpg"
      />
      <About />
      <WhyChooseUs />
    </main>
  );
}
