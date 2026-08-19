import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        eyebrow="404"
        title="That page is not in the plans."
        lede="The link is missing or the page moved. The work is still here."
        image="/services/framing/home-shell.jpg"
        actions={
          <>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-brass-hover"
            >
              Back to the homepage
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-sm border border-cream/25 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream/50 hover:bg-white/5"
            >
              See selected work
            </Link>
          </>
        }
      />
    </main>
  );
}
