import { site } from "@/data/site";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    foundingDate: String(site.founded),
    areaServed: site.cities.map((name) => ({
      "@type": "City",
      name,
      containedInPlace: { "@type": "State", name: "Colorado" },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aurora",
      addressRegion: "CO",
      addressCountry: "US",
    },
    knowsAbout: [
      "Custom home framing",
      "Room additions",
      "Structural carpentry",
      "Garage framing",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
