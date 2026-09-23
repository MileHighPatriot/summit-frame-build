"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { Arrow } from "@/components/ui/Button";
import { primaryNav } from "@/data/nav";
import { site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    let last = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 400 && y > last);
      last = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.documentElement.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  const tone = open || overHero ? "text-paper" : "text-ink";
  const surface =
    scrolled && !open
      ? "bg-bone/85 backdrop-blur-xl border-b border-ink/10"
      : "bg-transparent border-b border-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,color] duration-500 ease-out-expo ${surface} ${tone} ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6 sm:h-24">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="relative z-10"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`link-underline pb-0.5 text-[0.9375rem] transition-opacity ${
                  isActive(link.href) ? "bg-[length:100%_1px] opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden text-[0.9375rem] opacity-75 transition-opacity hover:opacity-100 xl:inline"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className={`hidden items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-300 sm:inline-flex ${
                overHero
                  ? "bg-paper text-ink hover:bg-cedar-light"
                  : "bg-ink text-paper hover:bg-cedar-dark"
              } ${open ? "invisible" : ""}`}
            >
              Start a project
              <Arrow />
            </Link>
            <button
              type="button"
              className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3 w-7">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo ${
                    open ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-char text-paper lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center pt-24">
              <ul>
                {primaryNav.map((link, index) => (
                  <li key={link.href} className="overflow-hidden border-b border-paper/10">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.25 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        aria-current={isActive(link.href) ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-4 font-serif text-[2.75rem] leading-none tracking-[-0.03em] sm:text-6xl"
                      >
                        {link.label}
                        <span aria-hidden="true" className="t-eyebrow text-paper/40">{`0${index + 1}`}</span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              className="container-x flex flex-col gap-2 pb-10 text-paper/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href={site.phoneHref} className="text-lg text-paper">
                {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="text-sm">
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
