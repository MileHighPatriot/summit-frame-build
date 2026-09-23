import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Summit Frame & Build: custom home framing, additions, and structural work in the Denver metro.",
};

const nextSteps = [
  "We reply within one business day.",
  "If it's a fit, we schedule a site visit or plan review.",
  "You get a written estimate with scope and schedule.",
];

export default function ContactPage() {
  return (
    <main id="main" className="pt-36 pb-24 sm:pt-44 sm:pb-36 lg:pt-52">
      <div className="container-x grid gap-20 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="t-eyebrow text-stone">Contact</p>
            <h1 className="t-h1 mt-8 max-w-[10ch]">Let&rsquo;s talk about your project.</h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="t-lede mt-8 max-w-md text-stone">
              Tell us what you&rsquo;re planning. We&rsquo;ll let you know
              quickly if we&rsquo;re the right crew for it.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="t-eyebrow text-stone">Call</p>
              <a href={site.phoneHref} className="t-h3 link-underline mt-3 inline-block pb-0.5">
                {site.phoneDisplay}
              </a>
              <p className="mt-2 text-stone">Mon&ndash;Fri, 7:00 am &ndash; 4:30 pm</p>
            </div>
            <div>
              <p className="t-eyebrow text-stone">Email</p>
              <a
                href={site.emailHref}
                className="link-underline mt-3 inline-block break-all pb-0.5 text-xl"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="t-eyebrow text-stone">What happens next</p>
              <ol className="mt-4 space-y-3">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="font-serif text-cedar">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="t-eyebrow text-stone">Service area</p>
              <p className="mt-4 leading-relaxed text-stone">{site.cities.join(", ")}.</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="bg-paper p-6 sm:p-12">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
