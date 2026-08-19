import Link from "next/link";
import Logo from "@/components/Logo";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Logo variant="footer" />
            <p className="font-serif text-xl font-semibold">Summit Frame & Build</p>
          </div>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/65">
            Custom home framing, room additions, and structural work in Aurora
            and the Denver metro area.
          </p>
          <p className="mt-4 text-sm">
            <a href={site.phoneHref} className="text-cream hover:text-brass">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={site.emailHref} className="text-cream/75 hover:text-cream">
              {site.email}
            </a>
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          {footerNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream/75 hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} Summit Frame & Build. Aurora / Denver
          metro, Colorado. Family-run since 1989.
        </p>
      </div>
    </footer>
  );
}
