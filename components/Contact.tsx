"use client";

import { FormEvent, ReactNode, useState } from "react";

const projectTypes = [
  "Custom home framing",
  "Room addition",
  "Structural work",
  "Garage or outbuilding",
  "Not sure / other",
];

const timelines = [
  "As soon as you can get to it",
  "Within a month",
  "1–3 months",
  "This season / flexible",
  "Just gathering numbers",
];

const planOptions = [
  "Full architectural plans",
  "A sketch or engineer letter",
  "Photos of the existing house only",
  "Nothing yet — need a walkthrough",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            Project inquiry
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Tell us about the job in enough detail to bid it honestly.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            This is the start of the first step — not a marketing list. The
            more we know about the structure, the site, and your timing, the
            faster we can tell you whether we are the right crew and what a
            walkthrough should cover.
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-ink">What happens after you send this</h3>
              <p className="mt-2 text-muted">
                We read every inquiry. If the work matches what we frame, we
                follow up to set a site visit or a plans review. If it is
                outside our trade or our area, we will say so instead of
                stringing you along. Same-day replies are typical on weekdays;
                weekend notes go out Monday morning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink">What helps us bid</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                <li>City and a street address we can look up</li>
                <li>New home, addition, structural opening, or outbuilding</li>
                <li>Approximate size — stories, bays, or square feet if you know them</li>
                <li>Whether the house is occupied and how we access the yard</li>
                <li>Permit status, if you already know it</li>
                <li>Photos or a plan set, even if they are rough</li>
              </ul>
            </div>
            <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">Service area</dt>
                <dd className="mt-1 text-muted">
                  Aurora, Denver, Centennial, Lakewood, Highlands Ranch, Parker,
                  Commerce City, and nearby Front Range towns. Farther out —
                  ask. Some jobs are worth the drive.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Typical work</dt>
                <dd className="mt-1 text-muted">
                  Custom home framing, room additions tied into existing houses,
                  beams and load-bearing changes, detached garages and shops.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Weekday hours</dt>
                <dd className="mt-1 text-muted">
                  Crew on site early. Office and estimates typically 7:00 a.m. to
                  4:30 p.m., Monday through Friday. Emergency structural calls
                  are taken as we can get to them.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Who you will hear from</dt>
                <dd className="mt-1 text-muted">
                  A lead from the family crew — the same people who will walk
                  the job. Not a call center, and not a bid desk that never
                  visits the house.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border border-line bg-paper p-6 sm:p-8">
          {submitted ? (
            <div className="flex min-h-64 flex-col justify-center" role="status">
              <p className="font-serif text-2xl font-semibold">
                Form received on this page only.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Nothing was emailed. This inquiry form is not connected to an
                inbox yet, so the details stayed in your browser. Use another
                note if you want to try the fields again.
              </p>
              <button
                type="button"
                className="mt-6 w-fit rounded-sm border border-line px-4 py-2.5 text-sm font-semibold text-ink"
                onClick={() => setSubmitted(false)}
              >
                Write another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <p className="text-sm leading-relaxed text-muted">
                Required fields are marked with *. Skip anything you do not
                know — “not sure” is a useful answer.
              </p>

              <Field label="Your name" htmlFor="name" required>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone" required>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={inputClass}
                  />
                </Field>
                <Field label="Email" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Preferred way to reach you" htmlFor="contactMethod">
                <select
                  id="contactMethod"
                  name="contactMethod"
                  defaultValue="Phone"
                  className={inputClass}
                >
                  <option>Phone</option>
                  <option>Email</option>
                  <option>Either — whatever is faster</option>
                </select>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Job site city" htmlFor="city" required>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Aurora, Denver, Centennial…"
                    className={inputClass}
                  />
                </Field>
                <Field label="Street address" htmlFor="address">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    placeholder="Optional if you would rather wait"
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="Project type" htmlFor="projectType" required>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a project type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Timing" htmlFor="timeline" required>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      When do you want to start?
                    </option>
                    {timelines.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="What drawings do you have?" htmlFor="plans" required>
                  <select
                    id="plans"
                    name="plans"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {planOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field
                label="Approximate size or scope"
                htmlFor="scope"
              >
                <input
                  id="scope"
                  name="scope"
                  type="text"
                  placeholder="e.g. 16×20 addition, two-story custom, 2-car garage, open a load-bearing wall"
                  className={inputClass}
                />
              </Field>

              <Field label="Describe the work" htmlFor="message" required>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  placeholder="What is there now, what you want built, whether the house is occupied, access to the yard, permit status, and anything a framer should know before a walkthrough."
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="rounded-sm bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-mid"
              >
                Send project inquiry
              </button>
              <p className="text-xs leading-relaxed text-muted">
                Sending this does not book a date or lock a price. It starts the
                conversation so we can decide if a site visit is the next step.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-sm border border-line bg-cream px-3 py-2.5 text-ink outline-none transition-shadow focus:border-forest focus:ring-2 focus:ring-forest/20";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink">
      {label}
      {required ? (
        <span className="text-forest" aria-hidden="true">
          {" "}
          *
        </span>
      ) : null}
      {children}
    </label>
  );
}
