import { serviceCities } from "@/data/service-area";

export type ClimateNote = {
  cityId: string;
  elevation: string;
  snow: string;
  wind: string;
  soil: string;
  image: string;
  summary: string;
};

export const climateNotes: ClimateNote[] = [
  {
    cityId: "aurora",
    elevation: "5,400 ft",
    snow: "About 30 psf on many lots",
    wind: "Open east-metro fetch",
    soil: "Expansive clay is common",
    image: "/work/before-after/aurora-ranch-after.jpg",
    summary:
      "Home base. Ranch additions and new frames see the same snow and wind as the rest of the east metro. We check roof tie-ins and hold-downs before we talk schedule.",
  },
  {
    cityId: "denver",
    elevation: "5,280 ft",
    snow: "About 30 psf, drifted at roofs",
    wind: "Infill lots can tunnel wind",
    soil: "Varies block to block",
    image: "/work/before-after/denver-home-after.jpg",
    summary:
      "Custom frames and occupied-house openings inside the city. Access, neighbors, and what is already bearing matter as much as the snow number.",
  },
  {
    cityId: "commerce-city",
    elevation: "5,160 ft",
    snow: "Similar to Denver, more open pads",
    wind: "Exposed north-metro lots",
    soil: "Fill and clay on newer streets",
    image: "/services/garages/garage-twocar.jpg",
    summary:
      "Garages and new frames on the north side. Open pads mean we brace walls for wind before the second floor or the trusses go on.",
  },
  {
    cityId: "lakewood",
    elevation: "5,500 ft",
    snow: "A step toward the foothills",
    wind: "West-metro downslope gusts",
    soil: "Slope and drainage on older lots",
    image: "/services/additions/add-second-story-v2.jpg",
    summary:
      "Additions on established houses. We walk the existing roof, the grade, and how water already leaves the lot before we cut a tie-in.",
  },
  {
    cityId: "greenwood-village",
    elevation: "5,430 ft",
    snow: "South-corridor typical loads",
    wind: "I-25 corridor exposure",
    soil: "Mixed infill and custom lots",
    image: "/services/framing/home-trusses.jpg",
    summary:
      "Custom homes and additions along the south Denver corridor. Wide openings and clean roof packages are the usual ask.",
  },
  {
    cityId: "dtc",
    elevation: "5,500 ft",
    snow: "South-east metro typical",
    wind: "Open office-park edges",
    soil: "Residential pockets nearby",
    image: "/services/framing/home-shell.jpg",
    summary:
      "Nearby residential framing around the Tech Center — Greenwood Village, Centennial, and the adjacent streets.",
  },
  {
    cityId: "littleton",
    elevation: "5,350 ft",
    snow: "South-metro typical loads",
    wind: "Older streets, tighter lots",
    soil: "Established yards and additions",
    image: "/services/additions/add-into-house.jpg",
    summary:
      "Room additions and load-bearing openings on houses that have already settled. We measure the old frame before we promise a new one.",
  },
  {
    cityId: "centennial",
    elevation: "5,830 ft",
    snow: "A little higher than Denver",
    wind: "South-east fetch",
    soil: "Newer pads and older ranches",
    image: "/services/framing/home-interior.jpg",
    summary:
      "Custom homes, additions, and garage frames. Elevation is a step up from the city — we treat snow and fasteners accordingly.",
  },
  {
    cityId: "highlands-ranch",
    elevation: "5,760 ft",
    snow: "HOA lots, drifted roofs",
    wind: "Open tracts and ridges",
    soil: "Occupied houses, tight access",
    image: "/work/before-after/highlands-kitchen-after.jpg",
    summary:
      "Structural openings and additions while people still live in the house. Shoring, dust, and a load path that does not guess.",
  },
  {
    cityId: "parker",
    elevation: "5,870 ft",
    snow: "Higher and more exposed",
    wind: "East Douglas County fetch",
    soil: "New pads and outbuildings",
    image: "/services/garages/garage-shop.jpg",
    summary:
      "New frames and shops on the east side of Douglas County. Wind on an open pad is why we plumb and brace before we get ahead of ourselves.",
  },
  {
    cityId: "castle-rock",
    elevation: "6,200 ft",
    snow: "Higher load, longer winters",
    wind: "Ridge and mesa exposure",
    soil: "Rock, grade, and longer drives",
    image: "/services/framing/home-slab.jpg",
    summary:
      "Worth the drive for the right custom home, addition, or garage. Higher, windier, and a longer weather window — we say so in the estimate.",
  },
];

export function climateFor(cityId: string) {
  return climateNotes.find((note) => note.cityId === cityId) ?? climateNotes[0];
}

export function cityWithClimate(cityId: string) {
  const city = serviceCities.find((item) => item.id === cityId);
  return city ? { city, climate: climateFor(cityId) } : null;
}
