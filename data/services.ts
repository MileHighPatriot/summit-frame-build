export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  includes: string[];
  images: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    slug: "custom-homes",
    title: "Custom Homes",
    short: "Full structural frames, from the first plate on the slab to the last truss.",
    body: "We frame new custom homes from the slab up: wall packages, floor systems, stairs, and roofs, laid out to the plan and braced for Front Range wind. The finish trades inherit a house that is square, so their work goes faster and looks better.",
    includes: [
      "Layout and wall packages",
      "Floor systems and stair openings",
      "Headers, beams, and LVLs",
      "Roof trusses and rafters",
    ],
    images: [
      {
        src: "/services/framing/home-shell.jpg",
        alt: "Two-story custom home wood frame on a suburban lot",
      },
      {
        src: "/services/framing/home-trusses.jpg",
        alt: "Roof trusses on a new custom home with the Front Range beyond",
      },
      {
        src: "/services/framing/home-interior.jpg",
        alt: "Interior wall studs, joists, and an LVL header in a new home",
      },
      {
        src: "/services/framing/home-slab.jpg",
        alt: "First exterior walls going up on a new-home slab",
      },
    ],
  },
  {
    slug: "additions",
    title: "Additions",
    short: "New rooms and second stories that tie into the house as if they were always there.",
    body: "An addition is only as good as its connection to the existing house. We open up the old structure, check what is really there, and frame the new work so floors, walls, and rooflines meet without steps, gaps, or guesswork.",
    includes: [
      "Single-story and second-story additions",
      "Roof tie-ins at existing eaves",
      "New openings into the original house",
      "Ledgers and connections to old framing",
    ],
    images: [
      {
        src: "/services/additions/add-ranch-v2.jpg",
        alt: "One-story wood-framed addition tied onto an existing ranch",
      },
      {
        src: "/services/additions/add-second-story-v2.jpg",
        alt: "Second-story addition framed after the original roof was stripped",
      },
      {
        src: "/services/additions/add-roof-tie-v2.jpg",
        alt: "New addition rafters landing on a ledger at the existing roof",
      },
      {
        src: "/services/additions/add-into-house.jpg",
        alt: "New addition interior opening into an existing finished living room",
      },
    ],
  },
  {
    slug: "structural",
    title: "Structural Work",
    short: "Beams, load-bearing openings, and reinforcement in occupied homes.",
    body: "When a wall has to come out or a floor has to carry more, the load path matters more than anything else. We shore, cut, and set beams to the engineer's design, working carefully in homes where families are still living.",
    includes: [
      "Load-bearing wall removal",
      "Flush and dropped beams",
      "Steel beams and posts",
      "Joist and rafter reinforcement",
    ],
    images: [
      {
        src: "/services/structural/struct-beam-v2.jpg",
        alt: "Doubled LVL header with jack studs over an interior opening",
      },
      {
        src: "/services/structural/struct-steel-v2.jpg",
        alt: "Steel I-beam and lally columns supporting floor joists",
      },
      {
        src: "/services/structural/struct-basement.jpg",
        alt: "New mid-span beam and posts reinforcing floor joists",
      },
      {
        src: "/services/structural/struct-hardware.jpg",
        alt: "Hold-down hardware anchoring a wood-framed wall to the foundation",
      },
    ],
  },
  {
    slug: "garages",
    title: "Garages & Shops",
    short: "Detached garages, workshops, and outbuildings built to the same standard as the house.",
    body: "Long door headers, tall walls, and roofs that carry a Colorado winter. We frame detached garages and shops with the same attention we give a custom home, so they sit square on the pad and look like they belong.",
    includes: [
      "Detached one- to four-car garages",
      "Workshops and studios",
      "Long-span door headers",
      "Storage lofts and attic trusses",
    ],
    images: [
      {
        src: "/services/garages/garage-twocar.jpg",
        alt: "Detached two-car garage wood frame on a concrete pad",
      },
      {
        src: "/services/garages/garage-header.jpg",
        alt: "Long header over a two-car garage-door opening",
      },
      {
        src: "/services/garages/garage-shop.jpg",
        alt: "Three-bay workshop garage frame with three door openings",
      },
      {
        src: "/services/garages/garage-bays.jpg",
        alt: "Interior of a framed garage looking down the parking bays",
      },
    ],
  },
];

export const processSteps = [
  {
    title: "Conversation",
    short: "Send the address, the scope, and any drawings. We'll tell you quickly if we're the right fit.",
  },
  {
    title: "Site visit",
    short: "We walk the lot or the existing house and check the plans against what's actually there.",
  },
  {
    title: "Written estimate",
    short: "A clear scope with what's included, what isn't, and a schedule that accounts for Colorado weather.",
  },
  {
    title: "Build",
    short: "The same family crew that bid the job frames it, and keeps you updated every step of the way.",
  },
];
