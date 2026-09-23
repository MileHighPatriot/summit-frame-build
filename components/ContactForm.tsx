"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Arrow } from "@/components/ui/Button";
import { site } from "@/data/site";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const projectTypes = ["Custom home", "Addition", "Structural work", "Garage or shop", "Something else"];
const timelines = ["As soon as possible", "Within 3 months", "3–6 months", "Just planning"];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [projectType, setProjectType] = useState(projectTypes[0]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!accessKey) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not given"}`,
        `Project: ${data.project}`,
        `Location: ${data.location}`,
        `Timing: ${data.timing}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project inquiry: ${data.project}, ${data.location}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: accessKey,
          subject: `Project inquiry: ${data.project}, ${data.location}`,
          from_name: site.name,
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!result.success) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex min-h-[28rem] flex-col justify-center">
        <p className="t-eyebrow text-cedar">Message received</p>
        <p className="t-h2 mt-6 max-w-[14ch]">Thank you. We&rsquo;ll be in touch.</p>
        <p className="t-body mt-6 max-w-md text-stone">
          {accessKey
            ? "We reply to most inquiries within one business day. If it's urgent, give us a call."
            : "Your email app should have opened with the details filled in. Just hit send."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="link-underline mt-10 w-fit pb-0.5 text-[0.9375rem] font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <fieldset>
        <legend className="t-eyebrow text-stone">What are you planning?</legend>
        <div className="mt-5 flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                name="project"
                value={type}
                checked={projectType === type}
                onChange={() => setProjectType(type)}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-ink/20 px-5 py-2.5 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cedar hover:border-ink">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" optional />
        <Field
          label="Project location"
          name="location"
          autoComplete="address-level2"
          placeholder="City or neighborhood"
          required
        />
      </div>

      <Field label="Timing" name="timing" as="select" required>
        {timelines.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </Field>

      <Field
        label="Tell us about the project"
        name="message"
        as="textarea"
        placeholder="What's there now, what you'd like built, and whether you have plans or an engineer."
        required
      />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink px-8 py-4 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-cedar-dark disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
          <Arrow className="transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
        </button>
        <p className="max-w-xs text-sm text-stone">
          Have plans or photos? Email them to{" "}
          <a href={site.emailHref} className="text-ink underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      </div>

      {status === "error" ? (
        <p role="alert" className="text-cedar-dark">
          Something went wrong sending your message. Please try again, or call{" "}
          {site.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}

const inputClass =
  "mt-3 block w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-lg text-ink placeholder:text-stone/60 transition-colors focus:border-ink focus:ring-0 focus:outline-none";

function Field({
  label,
  name,
  type = "text",
  as = "input",
  required,
  optional,
  autoComplete,
  placeholder,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
  optional?: boolean;
  autoComplete?: string;
  placeholder?: string;
  children?: ReactNode;
}) {
  return (
    <label className="block">
      <span className="t-eyebrow text-stone">
        {label}
        {optional ? <span className="ml-2 normal-case tracking-normal opacity-70">(optional)</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          className={`${inputClass} resize-y`}
        />
      ) : as === "select" ? (
        <select name={name} required={required} className={`${inputClass} cursor-pointer`}>
          {children}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </label>
  );
}
