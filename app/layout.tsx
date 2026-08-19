import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Logo from "@/components/Logo";
import MobileDock from "@/components/MobileDock";
import RouteWipe from "@/components/RouteWipe";
import { site } from "@/data/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b1d36",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Custom Framing in Aurora & Denver`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: site.locale,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-paper font-sans text-ink">
        <JsonLd />
        <div
          className="pointer-events-none absolute top-28 right-[-4rem] z-0 w-[28rem] text-forest opacity-[0.06] sm:right-[-2rem] sm:w-[34rem] lg:right-8"
          aria-hidden="true"
        >
          <Logo className="h-auto w-full" />
        </div>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="relative z-10">
          <RouteWipe />
          <Header />
          {children}
          <Footer />
          <MobileDock />
        </div>
      </body>
    </html>
  );
}
