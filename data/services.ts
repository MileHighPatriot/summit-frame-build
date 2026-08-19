export type ServiceLine = {
  id: string;
  title: string;
  body: string;
  home: string;
  images: { src: string; alt: string }[];
};

export const serviceLines: ServiceLine[] = [
  {
    id: "custom-home",
    title: "Custom Home Framing",
    body: "Floors, walls, and roofs from the slab up — laid out clean and built to plan.",
    home: "New construction framing from the foundation up. Layout stays true so the next trade inherits a square house.",
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
    id: "addition",
    title: "Room Additions",
    body: "New rooms tied into the house you already have, so the addition sits right.",
    home: "Expand the house you already have. We tie new framing into the existing structure so the addition sits right.",
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
    id: "structural",
    title: "Structural Work",
    body: "Beams, openings, and reinforcement when the structure has to carry more.",
    home: "Beams, load-bearing changes, repairs, and reinforcement when the structure has to carry more than it used to.",
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
        alt: "Hold-down hardware and bracing on a wood-framed wall",
      },
    ],
  },
  {
    id: "garage",
    title: "Garages & Outbuildings",
    body: "Detached frames built with the same care as the house, ready for Colorado weather.",
    home: "Detached structures framed with the same care as the house: square, sturdy, and ready for Colorado weather.",
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

export function getServiceLine(id: string) {
  return serviceLines.find((line) => line.id === id);
}
