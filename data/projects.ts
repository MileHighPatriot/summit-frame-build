export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  year: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  scope: string[];
  notIncluded: string[];
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  beforeAfter: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
};

export const projects: Project[] = [
  {
    slug: "aurora-ranch-addition",
    title: "Ranch addition that lines up with the old house",
    location: "Aurora",
    type: "Room addition",
    year: "2024",
    duration: "4 weeks on frame",
    summary:
      "A one-story family-room addition tied into a 1970s ranch — new walls, a roof that tucks under the existing eave, and an opening into the old living room.",
    challenge:
      "The existing ranch was out of square in places, and the owners wanted the new room to feel like it had always been there. The roof had to meet the original eave without a step that would leak or look bolted on.",
    approach:
      "We walked the existing bearing walls, set a new stem wall, and framed the addition so the roof tucked under the eave. The opening into the house got a proper header and king studs. Layout was checked against the old floor so the new doorway sat on the same plane.",
    result:
      "The addition sits flush with the ranch. Next trades walked into a square room with a clean roof tie-in and an opening that did not need to be rebuilt.",
    scope: [
      "Stem wall and sill layout on the existing house",
      "Wall framing and sheathing for a one-story family room",
      "Roof framed to tuck under the original eave",
      "Header, king, and jack studs at the opening into the old living room",
    ],
    notIncluded: [
      "Excavation and concrete by others",
      "Windows, doors, and exterior finish",
      "Roofing, insulation, and drywall",
      "Interior trim and paint",
    ],
    cover: {
      src: "/work/before-after/aurora-ranch-after.jpg",
      alt: "Sheathed family-room addition tied into a 1970s Aurora ranch",
    },
    gallery: [
      {
        src: "/work/before-after/aurora-ranch-before.jpg",
        alt: "Rear of the ranch before the addition",
      },
      {
        src: "/services/additions/add-roof-tie-v2.jpg",
        alt: "Roof tie-in at the existing eave",
      },
      {
        src: "/services/additions/add-into-house.jpg",
        alt: "New room opening into the finished living room",
      },
    ],
    beforeAfter: {
      before: {
        src: "/work/before-after/aurora-ranch-before.jpg",
        alt: "Backyard of a 1970s Aurora ranch before the addition was framed",
      },
      after: {
        src: "/work/before-after/aurora-ranch-after.jpg",
        alt: "Same ranch after the one-story addition was framed and sheathed",
      },
    },
  },
  {
    slug: "denver-custom-home",
    title: "Custom home framed from the slab up",
    location: "Denver",
    type: "Custom home framing",
    year: "2023",
    duration: "8 weeks on frame",
    summary:
      "A two-story custom home: first walls on the slab, then floors, then roof trusses. Layout stayed true so the finish trades inherited a square house.",
    challenge:
      "A full custom plan with wide openings and a roof that had to land clean for the roofer. The lot is windy. Walls had to be plumbed and braced before the second floor went on.",
    approach:
      "We snapped the first-floor layout on the slab, stood walls, and set the second-floor joists before the roof package. Headers and LVLs were set as drawn. Trusses went on after the walls were braced for Front Range wind.",
    result:
      "The house stood square. Openings matched the plan. The roofer and the drywall crew did not have to argue with the frame.",
    scope: [
      "First-floor layout and wall package on the slab",
      "Second-floor joists, stairs opening, and load path",
      "Roof trusses set and braced",
      "Headers and LVLs at the wide openings on the plan",
    ],
    notIncluded: [
      "Foundation and slab by others",
      "Windows, doors, and exterior siding",
      "Roofing and mechanicals",
      "Insulation, drywall, and finish carpentry",
    ],
    cover: {
      src: "/work/before-after/denver-home-after.jpg",
      alt: "Two-story custom home wood frame on a Denver lot",
    },
    gallery: [
      {
        src: "/work/before-after/denver-home-before.jpg",
        alt: "Empty lot and slab before walls went up",
      },
      {
        src: "/services/framing/home-slab.jpg",
        alt: "First exterior walls on the slab",
      },
      {
        src: "/services/framing/home-interior.jpg",
        alt: "Interior studs, joists, and header",
      },
      {
        src: "/services/framing/home-trusses.jpg",
        alt: "Roof trusses set on the custom home",
      },
    ],
    beforeAfter: {
      before: {
        src: "/work/before-after/denver-home-before.jpg",
        alt: "Denver lot with a poured slab before any walls were stood",
      },
      after: {
        src: "/work/before-after/denver-home-after.jpg",
        alt: "Same lot after the two-story custom home was framed and trussed",
      },
    },
  },
  {
    slug: "highlands-ranch-beam",
    title: "Load-bearing wall opened for a wider kitchen",
    location: "Highlands Ranch",
    type: "Structural work",
    year: "2025",
    duration: "5 working days",
    summary:
      "A homeowner wanted the wall between kitchen and living room gone. We shored the floor, set a beam, and left the span carrying what it used to carry.",
    challenge:
      "The wall was load-bearing. The house stayed occupied. The new opening had to be wide enough for the kitchen they wanted without guessing at the load path.",
    approach:
      "Temporary shoring went in first. We cut the wall, set a doubled LVL with jack and king studs, and transferred the load. In the basement, a steel beam and lally columns picked up the span where the old wall had sat.",
    result:
      "The opening is square. The floor above did not settle. The kitchen remodel started on a structure that was already finished.",
    scope: [
      "Temporary shoring in an occupied house",
      "Removal of the load-bearing wall between kitchen and living room",
      "Doubled LVL header with jack and king studs",
      "Basement steel beam and columns on the same load path",
    ],
    notIncluded: [
      "Kitchen cabinets, counters, and appliances",
      "Drywall, paint, and flooring",
      "Electrical and plumbing relocates",
      "Engineer stamp — supplied by the owner’s designer",
    ],
    cover: {
      src: "/work/before-after/highlands-kitchen-after.jpg",
      alt: "Kitchen opened to the living room with a new structural beam",
    },
    gallery: [
      {
        src: "/work/before-after/highlands-kitchen-before.jpg",
        alt: "Kitchen closed off by the original load-bearing wall",
      },
      {
        src: "/services/structural/struct-steel-v2.jpg",
        alt: "Steel beam and columns in the basement",
      },
      {
        src: "/services/structural/struct-basement.jpg",
        alt: "Mid-span beam and posts under floor joists",
      },
      {
        src: "/services/structural/struct-hardware.jpg",
        alt: "Hold-down hardware on the wood frame",
      },
    ],
    beforeAfter: {
      before: {
        src: "/work/before-after/highlands-kitchen-before.jpg",
        alt: "Highlands Ranch kitchen closed off from the living room by a load-bearing wall",
      },
      after: {
        src: "/work/before-after/highlands-kitchen-after.jpg",
        alt: "Same kitchen after the wall was opened and a structural beam was set",
      },
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
