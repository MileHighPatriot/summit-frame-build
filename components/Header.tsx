"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { primaryNav } from "@/data/nav";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo variant="header" />
          <span className="min-w-0">
            <p className="font-serif text-lg font-semibold tracking-tight text-forest sm:text-xl">
              Summit Frame & Build
            </p>
            <p className="text-xs tracking-wide text-muted">
              Aurora / Denver metro
            </p>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ink ${
                isActive(link.href) ? "text-ink" : "text-muted"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="whitespace-nowrap text-sm font-semibold text-forest hover:text-forest-mid"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-forest px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-mid"
          >
            Free Estimate
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-line px-3 py-2 text-sm font-medium text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-base font-medium text-ink"
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="py-1 text-base font-semibold text-forest"
            >
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="py-1 text-sm text-muted">
              {site.email}
            </a>
            <Link
              href="/contact"
              className="mt-2 rounded-sm bg-forest px-4 py-3 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Get a Free Estimate
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
