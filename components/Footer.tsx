import Link from "next/link";
import HideOn from "@/components/HideOn";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { footerNav } from "@/data/nav";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-char text-paper">
      <HideOn paths={["/contact", "/contact/"]}>
      <div className="container-x section-y">
        <Reveal>
          <p className="t-eyebrow text-paper/50">Start a project</p>
          <h2 className="t-display mt-8 max-w-[12ch]">
            Let&rsquo;s build something that <em className="text-cedar-light">lasts.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Button href="/contact" variant="light">
            Request an estimate
          </Button>
          <a
            href={site.phoneHref}
            className="link-underline pb-0.5 text-lg text-paper/80 hover:text-paper"
          >
            or call {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
      </HideOn>

      <div className="container-x pt-4">
        <div className="hairline text-paper" />
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm leading-relaxed text-paper/60">
              A family framing company in Aurora, Colorado. Custom homes,
              additions, structural work, and outbuildings across the Denver
              metro since {site.founded}.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <p className="t-eyebrow text-paper/40">Explore</p>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline pb-0.5 text-paper/75 hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="t-eyebrow text-paper/40">Contact</p>
            <ul className="mt-5 space-y-2.5 text-paper/75">
              <li>
                <a href={site.phoneHref} className="link-underline pb-0.5 hover:text-paper">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="link-underline break-all pb-0.5 hover:text-paper"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-paper/50">Mon&ndash;Fri, 7:00&ndash;4:30</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="t-eyebrow text-paper/40">Service area</p>
            <p className="mt-5 leading-relaxed text-paper/60">
              {site.cities.join(" · ")}
            </p>
          </div>
        </div>

        <div className="hairline text-paper" />
        <div className="flex flex-col gap-3 py-8 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Aurora, Colorado.
          </p>
          <p>
            Concept project &mdash; a fictional company designed as a portfolio
            piece. People, projects, and reviews are illustrative.
          </p>
        </div>
      </div>
    </footer>
  );
}
