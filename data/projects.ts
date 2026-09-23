export type Project = {
  slug: string;
  name: string;
  title: string;
  location: string;
  type: string;
  year: string;
  size: string;
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
    slug: "denver-custom-home",
    name: "The Denver Two-Story",
    title: "A custom home framed from the slab up",
    location: "Denver",
    type: "Custom home",
    year: "2023",
    size: "3,400 sq ft",
    duration: "8 weeks",
    summary:
      "A two-story custom home with wide openings, an open stair, and a roof that had to land clean for the roofer. Walls, floors, and trusses, framed in one continuous sequence.",
    challenge:
      "The plan called for wide, unsupported openings on the main floor and a complex roof over an open stair. The lot sits exposed to the west, so every wall had to be plumbed and braced for wind before the second floor went on.",
    approach:
      "We snapped the first-floor layout directly on the slab, stood and braced the walls, then set the second-floor system and stair opening. LVL headers went in exactly as engineered. The truss package was set only after the structure below was tight and true.",
    result:
      "The house stood square from corner to corner. Every opening matched the plan, and the roofing and drywall crews started on schedule without a single framing callback.",
    scope: [
      "First-floor layout and wall package",
      "Second-floor joists and stair opening",
      "LVL headers at wide openings",
      "Roof trusses, set and braced",
    ],
    notIncluded: [
      "Foundation and slab",
      "Windows, doors, and siding",
      "Roofing and mechanical",
      "Insulation, drywall, and finish",
    ],
    cover: {
      src: "/work/before-after/denver-home-after.jpg",
      alt: "Two-story custom home wood frame on a Denver lot",
    },
    gallery: [
      {
        src: "/services/framing/home-slab.jpg",
        alt: "First exterior walls standing on the slab",
      },
      {
        src: "/services/framing/home-interior.jpg",
        alt: "Interior studs, joists, and an LVL header",
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
    slug: "aurora-ranch-addition",
    name: "The Aurora Ranch",
    title: "A family room that looks like it was always there",
    location: "Aurora",
    type: "Addition",
    year: "2024",
    size: "520 sq ft",
    duration: "4 weeks",
    summary:
      "A single-story family room added to a 1970s ranch, with a roof that tucks under the original eave and a wide new opening into the existing living room.",
    challenge:
      "The original house was out of square in places, and the owners wanted the addition to feel original, not bolted on. The new roof had to meet the old eave without a step that would leak or look like an afterthought.",
    approach:
      "We surveyed the existing bearing walls first, then laid out the addition to the house as built rather than as drawn. The roof was framed to tuck beneath the original eave, and the opening into the living room got a properly sized header with king and jack studs.",
    result:
      "The addition reads as part of the original home. The floors meet on one plane, the roofline is continuous, and the finish trades walked into a room that was already square.",
    scope: [
      "Sill layout tied to the existing house",
      "Wall framing and sheathing",
      "Roof framed beneath the original eave",
      "Header and opening into the living room",
    ],
    notIncluded: [
      "Excavation and concrete",
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
        src: "/services/additions/add-roof-tie-v2.jpg",
        alt: "Roof tie-in at the existing eave",
      },
      {
        src: "/services/additions/add-into-house.jpg",
        alt: "New room opening into the finished living room",
      },
      {
        src: "/services/additions/add-ranch-v2.jpg",
        alt: "Addition framing against the original ranch",
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
    slug: "highlands-ranch-beam",
    name: "The Highlands Ranch Kitchen",
    title: "A load-bearing wall, opened for a kitchen",
    location: "Highlands Ranch",
    type: "Structural",
    year: "2025",
    size: "18 ft clear span",
    duration: "5 days",
    summary:
      "The owners wanted the wall between the kitchen and living room gone. We shored the floor, set a new beam, and transferred the load to steel in the basement, all while the family lived at home.",
    challenge:
      "The wall carried the floor above, and the house stayed occupied throughout. The opening had to be wide enough for the kitchen the owners had designed, with a load path that was engineered, not assumed.",
    approach:
      "Temporary shoring went in first. We removed the wall, set a doubled LVL with king and jack studs, and transferred the load. Below, a new steel beam and columns picked up the span on the same line.",
    result:
      "The opening is clean and square, the floor above didn't move, and the kitchen remodel started on a structure that was already finished.",
    scope: [
      "Temporary shoring in an occupied home",
      "Removal of the load-bearing wall",
      "Doubled LVL beam with king and jack studs",
      "Basement steel beam and columns",
    ],
    notIncluded: [
      "Cabinets, counters, and appliances",
      "Drywall, paint, and flooring",
      "Electrical and plumbing",
      "Engineering, by the owner's designer",
    ],
    cover: {
      src: "/work/before-after/highlands-kitchen-after.jpg",
      alt: "Kitchen opened to the living room with a new structural beam",
    },
    gallery: [
      {
        src: "/services/structural/struct-steel-v2.jpg",
        alt: "Steel beam and columns in the basement",
      },
      {
        src: "/services/structural/struct-basement.jpg",
        alt: "Mid-span beam and posts under the floor joists",
      },
      {
        src: "/services/structural/struct-beam-v2.jpg",
        alt: "Doubled LVL header over the new opening",
      },
    ],
    beforeAfter: {
      before: {
        src: "/work/before-after/highlands-kitchen-before.jpg",
        alt: "Kitchen closed off from the living room by a load-bearing wall",
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
