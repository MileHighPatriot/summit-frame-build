export const site = {
  name: "Summit Frame & Build",
  shortName: "Summit",
  url: "https://summit-frame-build.vercel.app",
  locale: "en_US",
  founded: 1989,
  tagline: "Solid framing for homes that last.",
  description:
    "Family-run framing crew in Aurora and the Denver metro. Custom homes, room additions, structural work, and outbuildings since 1989.",
  area: "Aurora / Denver metro, Colorado",
  phone: "7202606089",
  phoneDisplay: "(720) 260-6089",
  phoneHref: "tel:+17202606089",
  email: "kluper0393@outlook.com",
  emailHref: "mailto:kluper0393@outlook.com",
  cities: [
    "Aurora",
    "Denver",
    "Centennial",
    "Lakewood",
    "Highlands Ranch",
    "Parker",
    "Commerce City",
    "Greenwood Village",
    "Littleton",
    "Denver Tech Center",
    "Castle Rock",
  ],
};

export const stats = [
  { value: "1989", label: "Family-run since" },
  { value: "4", label: "Trades we frame" },
  { value: "Metro", label: "Aurora & Denver" },
  { value: "One crew", label: "Estimate to last nail" },
];

export function cityList(cities: string[] = site.cities) {
  if (cities.length === 0) return "";
  if (cities.length === 1) return cities[0];
  if (cities.length === 2) return `${cities[0]} and ${cities[1]}`;
  return `${cities.slice(0, -1).join(", ")}, and ${cities[cities.length - 1]}`;
}
