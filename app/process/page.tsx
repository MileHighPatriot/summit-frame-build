import type { Metadata } from "next";
import HowWeWork from "@/components/HowWeWork";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Four steps from first inquiry to a square frame: reach out, walk the job, get a clear estimate, we build it.",
};

export default function ProcessPage() {
  return (
    <main id="main">
      <HowWeWork />
    </main>
  );
}
