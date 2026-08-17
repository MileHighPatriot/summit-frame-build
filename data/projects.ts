export type Project = {
  slug: string;
  title: string;
  location: string;
  type: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "aurora-ranch-addition",
    title: "Ranch addition that lines up with the old house",
    location: "Aurora",
    type: "Room addition",
    year: "2024",
    summary:
      "A one-story family-room addition tied into a 1970s ranch — new walls, a roof that tucks under the existing eave, and an opening into the old living room.",
    challenge:
      "The existing ranch was out of square in places, and the owners wanted the new room to feel like it had always been there. The roof had to meet the original eave without a step that would leak or look bolted on.",
    approach:
      "We walked the existing bearing walls, set a new stem wall, and framed the addition so the roof tucked under the eave. The opening into the house got a proper header and king studs. Layout was checked against the old floor so the new doorway sat on the same plane.",
    result:
      "The addition sits flush with the ranch. Next trades walked into a square room with a clean roof tie-in and an opening that did not need to be rebuilt.",
    cover: {
      src: "/services/additions/add-ranch-v2.jpg",
      alt: "Wood-framed ranch addition sharing a wall with the existing house",
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
    ],
  },
  {
    slug: "denver-custom-home",
    title: "Custom home framed from the slab up",
    location: "Denver",
    type: "Custom home framing",
    year: "2023",
    summary:
      "A two-story custom home: first walls on the slab, then floors, then roof trusses. Layout stayed true so the finish trades inherited a square house.",
    challenge:
      "A full custom plan with wide openings and a roof that had to land clean for the roofer. The lot is windy. Walls had to be plumbed and braced before the second floor went on.",
    approach:
      "We snapped the first-floor layout on the slab, stood walls, and set the second-floor joists before the roof package. Headers and LVLs were set as drawn. Trusses went on after the walls were braced for Front Range wind.",
    result:
      "The house stood square. Openings matched the plan. The roofer and the drywall crew did not have to argue with the frame.",
    cover: {
      src: "/services/framing/home-shell.jpg",
      alt: "Two-story custom home wood frame on a suburban lot",
    },
    gallery: [
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
  },
  {
    slug: "highlands-ranch-beam",
    title: "Load-bearing wall opened for a wider kitchen",
    location: "Highlands Ranch",
    type: "Structural work",
    year: "2025",
    summary:
      "A homeowner wanted the wall between kitchen and living room gone. We shored the floor, set a beam, and left the span carrying what it used to carry.",
    challenge:
      "The wall was load-bearing. The house stayed occupied. The new opening had to be wide enough for the kitchen they wanted without guessing at the load path.",
    approach:
      "Temporary shoring went in first. We cut the wall, set a doubled LVL with jack and king studs, and transferred the load. In the basement, a steel beam and lally columns picked up the span where the old wall had sat.",
    result:
      "The opening is square. The floor above did not settle. The kitchen remodel started on a structure that was already finished.",
    cover: {
      src: "/services/structural/struct-beam-v2.jpg",
      alt: "Doubled LVL header over an interior opening",
    },
    gallery: [
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
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
