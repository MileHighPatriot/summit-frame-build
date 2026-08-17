import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
        404
      </p>
      <h1 className="mt-3 max-w-xl font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        That page is not in the plans.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted">
        The link is missing or the page moved. The work is still here.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-sm bg-forest px-5 py-3 text-sm font-semibold text-cream hover:bg-forest-mid"
        >
          Back to the homepage
        </Link>
        <Link
          href="/work"
          className="rounded-sm border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-forest/40"
        >
          See selected work
        </Link>
      </div>
    </main>
  );
}
