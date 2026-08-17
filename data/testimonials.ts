export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  project: string;
  photo: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They framed our addition so it lined up with the existing house. No drama, no guessing—just a square, solid job we could hand to the next trade.",
    name: "Miguel Herrera",
    role: "Homeowner",
    location: "Aurora",
    project: "Room addition",
    photo: {
      src: "/people/customers/miguel-herrera.jpg",
      alt: "Miguel Herrera",
    },
  },
  {
    quote:
      "We hired Summit for the framing on a new build. Layout was clean, the walls were plumb, and they kept us posted without a lot of extra talk.",
    name: "James Thornton",
    role: "Homeowner",
    location: "Denver",
    project: "Custom home framing",
    photo: {
      src: "/people/customers/james-thornton.jpg",
      alt: "James Thornton",
    },
  },
  {
    quote:
      "We needed a beam and a load-bearing wall opened up. They explained the work in plain language and the structure felt right when they were done.",
    name: "Raj Shah",
    role: "Homeowner",
    location: "Centennial",
    project: "Structural work",
    photo: {
      src: "/people/customers/raj-shah.jpg",
      alt: "Raj Shah",
    },
  },
  {
    quote:
      "The detached garage sits square on the pad and looks like it belongs with the house. Straightforward estimate and a tidy job site.",
    name: "Chris Molina",
    role: "Homeowner",
    location: "Aurora",
    project: "Garage",
    photo: {
      src: "/people/customers/chris-molina.jpg",
      alt: "Chris Molina",
    },
  },
  {
    quote:
      "They tied the new rooms into our 1970s ranch without making a mess of the old framing. We would hire them again for the next phase.",
    name: "Carlos Ramirez",
    role: "Homeowner",
    location: "Lakewood",
    project: "Room addition",
    photo: {
      src: "/people/customers/carlos-ramirez.jpg",
      alt: "Carlos Ramirez",
    },
  },
  {
    quote:
      "Snow load and a sagging span had us worried. They reinforced it properly and did not oversell the job. That is hard to find.",
    name: "David Keane",
    role: "Homeowner",
    location: "Highlands Ranch",
    project: "Structural work",
    photo: {
      src: "/people/customers/david-keane.jpg",
      alt: "David Keane",
    },
  },
];
