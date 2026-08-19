"use client";

import { ChangeEvent, FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import { cityList, site } from "@/data/site";

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

const MAX_FILES = 8;
const MAX_SIZE = 15 * 1024 * 1024;
const ACCEPT = ".jpg,.jpeg,.png,.webp,.heic,.heif,.pdf,image/*,application/pdf";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [fileNames, setFileNames] = useState<string[]>([]);

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list);
    let error = "";
    const next = [...files];

    for (const file of incoming) {
      if (next.length >= MAX_FILES) {
        error = `You can attach up to ${MAX_FILES} files.`;
        break;
      }
      if (file.size > MAX_SIZE) {
        error = `${file.name} is over 15 MB. Compress it or email it to ${site.email}.`;
        continue;
      }
      const allowed =
        file.type.startsWith("image/") ||
        file.type === "application/pdf" ||
        /\.(pdf|jpe?g|png|webp|heic|heif)$/i.test(file.name);
      if (!allowed) {
        error = `${file.name} is not a photo or PDF.`;
        continue;
      }
      if (next.some((existing) => existing.name === file.name && existing.size === file.size)) {
        continue;
      }
      next.push(file);
    }

    setFiles(next);
    setFileError(error);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const names = files.map((file) => file.name);
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `Phone: ${data.get("phone") ?? ""}`,
      `Email: ${data.get("email") ?? ""}`,
      `Preferred contact: ${data.get("contactMethod") ?? ""}`,
      `City: ${data.get("city") ?? ""}`,
      `Address: ${data.get("address") || "Not given"}`,
      `Project type: ${data.get("projectType") ?? ""}`,
      `Timing: ${data.get("timeline") ?? ""}`,
      `Drawings on hand: ${data.get("plans") ?? ""}`,
      `Scope: ${data.get("scope") || "Not given"}`,
      "",
      String(data.get("message") ?? ""),
      "",
      names.length
        ? `Please attach these files before sending: ${names.join(", ")}`
        : "No files selected on the website.",
    ].join("\n");

    const subject = `Framing estimate — ${data.get("city") ?? "job"}`;
    const mailto = document.createElement("a");
    mailto.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    mailto.click();
    setFileNames(names);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <Reveal variant="roll" className="order-2 lg:order-1">
          <div className="space-y-6 text-sm leading-relaxed">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={site.phoneHref}
                className="border border-line bg-paper px-4 py-4 transition-colors hover:border-forest/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                  Call
                </p>
                <p className="mt-1 font-serif text-xl font-semibold text-ink">
                  {site.phoneDisplay}
                </p>
              </a>
              <a
                href={site.emailHref}
                className="border border-line bg-paper px-4 py-4 transition-colors hover:border-forest/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brass">
                  Email
                </p>
                <p className="mt-1 break-all font-serif text-lg font-semibold text-ink">
                  {site.email}
                </p>
              </a>
            </div>
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
                <li>Photos or a plan set attached below, even if they are rough</li>
              </ul>
            </div>
            <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">Service area</dt>
                <dd className="mt-1 text-muted">
                  {cityList()}, and nearby Front Range towns. Farther out —
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
        </Reveal>

        <Reveal variant="swing" delay={120} className="order-1 lg:order-2">
        <div className="border border-line bg-paper p-6 sm:p-8">
          {submitted ? (
            <div className="flex min-h-64 flex-col justify-center" role="status">
              <p className="font-serif text-2xl font-semibold">
                Your email app should be open with this inquiry.
              </p>
              <p className="mt-3 leading-relaxed text-muted">
                Send that message from your mail app. If files were selected,
                attach them before you hit send
                {fileNames.length ? `: ${fileNames.join(", ")}` : ""}.
                You can also call{" "}
                <a className="font-semibold text-forest" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a className="font-semibold text-forest" href={site.emailHref}>
                  {site.email}
                </a>
                .
              </p>
              <button
                type="button"
                className="mt-6 w-fit rounded-sm border border-line px-4 py-2.5 text-sm font-semibold text-ink"
                onClick={() => {
                  setSubmitted(false);
                  setFiles([]);
                  setFileNames([]);
                  setFileError("");
                }}
              >
                Write another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5">
              <p className="text-sm leading-relaxed text-muted">
                Required fields are marked with *. Skip anything you do not
                know — “not sure” is a useful answer. Attach plans or site
                photos if you have them.
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
                    placeholder="Aurora, Littleton, Castle Rock…"
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

              <FileAttach
                files={files}
                error={fileError}
                onAdd={addFiles}
                onRemove={(index) => {
                  setFiles(files.filter((_, i) => i !== index));
                  setFileError("");
                }}
              />

              <button
                type="submit"
                className="rounded-sm bg-forest px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-mid"
              >
                Send project inquiry
              </button>
              <p className="text-xs leading-relaxed text-muted">
                Sending this opens your email to {site.email} with the details.
                Attach the files there before you send, or call{" "}
                {site.phoneDisplay}. It does not book a date or lock a price.
              </p>
            </form>
          )}
        </div>
        </Reveal>
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

function FileAttach({
  files,
  error,
  onAdd,
  onRemove,
}: {
  files: File[];
  error: string;
  onAdd: (list: FileList | File[]) => void;
  onRemove: (index: number) => void;
}) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div>
      <p className="text-sm font-semibold text-ink">Plans or photos</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">
        Optional. PDFs and pictures of the house, the yard, or the drawings.
        Up to {MAX_FILES} files, 15 MB each.
      </p>
      <label
        htmlFor="attachments"
        onDragOver={(event) => {
          event.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDragOver(false);
          if (event.dataTransfer.files.length) onAdd(event.dataTransfer.files);
        }}
        className={`mt-2 flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed px-4 py-6 text-center text-sm transition-colors ${
          dragOver
            ? "border-forest bg-forest/5 text-ink"
            : "border-line bg-cream text-muted"
        }`}
      >
        <span className="font-semibold text-ink">Drop files here or browse</span>
        <span className="mt-1 text-xs">JPG, PNG, WebP, HEIC, or PDF</span>
        <input
          id="attachments"
          name="attachments"
          type="file"
          multiple
          accept={ACCEPT}
          className="sr-only"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (event.target.files) onAdd(event.target.files);
            event.target.value = "";
          }}
        />
      </label>
      {error ? (
        <p className="mt-2 text-xs text-forest" role="alert">
          {error}
        </p>
      ) : null}
      {files.length ? (
        <ul className="mt-3 grid gap-2">
          {files.map((file, index) => (
            <FileChip
              key={`${file.name}-${file.size}-${index}`}
              file={file}
              onRemove={() => onRemove(index)}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function FileChip({ file, onRemove }: { file: File; onRemove: () => void }) {
  const preview = useMemo(
    () => (file.type.startsWith("image/") ? URL.createObjectURL(file) : null),
    [file],
  );

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <li className="flex items-center gap-3 border border-line bg-cream px-3 py-2">
      {preview ? (
        // Blob previews are local object URLs, not static assets.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview}
          alt=""
          className="h-12 w-12 shrink-0 object-cover"
        />
      ) : (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-line text-[10px] font-semibold uppercase tracking-wide text-muted">
          PDF
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-ink">{file.name}</span>
        <span className="text-xs text-muted">{formatSize(file.size)}</span>
      </span>
      <button
        type="button"
        onClick={onRemove}
        className="text-xs font-semibold text-muted hover:text-ink"
      >
        Remove
      </button>
    </li>
  );
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
