"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const items = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Estimate" },
];

export default function MobileDock() {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav
      aria-label="Phone"
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t border-line bg-cream/95 backdrop-blur-md lg:hidden"
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex min-h-12 items-center justify-center px-1 pt-2 text-[11px] font-semibold tracking-wide ${
            isActive(item.href) ? "text-forest" : "text-muted"
          }`}
          style={{ paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))" }}
          aria-current={isActive(item.href) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
      <a
        href={site.phoneHref}
        className="flex min-h-12 items-center justify-center px-1 pt-2 text-[11px] font-semibold tracking-wide text-forest"
        style={{ paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))" }}
      >
        Call
      </a>
    </nav>
  );
}
