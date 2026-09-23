export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  project: string;
  photo: { src: string; alt: string };
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our addition lines up with the old house so well that guests ask which part is new. Frank's crew was honest, careful, and exactly on schedule.",
    name: "Miguel Herrera",
    location: "Aurora",
    project: "Room addition",
    photo: {
      src: "/people/customers/miguel-herrera.jpg",
      alt: "Miguel Herrera",
    },
  },
  {
    quote:
      "Our builder told us the framing is where most custom homes go wrong. Summit's was the reason everything after it went right.",
    name: "James Thornton",
    location: "Denver",
    project: "Custom home",
    photo: {
      src: "/people/customers/james-thornton.jpg",
      alt: "James Thornton",
    },
  },
  {
    quote:
      "Taking out a load-bearing wall with our kids at home was nerve-wracking. They explained every step, kept the house clean, and finished in five days.",
    name: "Raj Shah",
    location: "Centennial",
    project: "Structural opening",
    photo: {
      src: "/people/customers/raj-shah.jpg",
      alt: "Raj Shah",
    },
  },
  {
    quote:
      "The garage sits perfectly square on the pad and looks like it came with the house. Clear estimate, tidy site, no surprises.",
    name: "Chris Molina",
    location: "Aurora",
    project: "Detached garage",
    photo: {
      src: "/people/customers/chris-molina.jpg",
      alt: "Chris Molina",
    },
  },
  {
    quote:
      "They tied two new rooms into our 1970s ranch without disturbing the old framing. We've already booked them for the next phase.",
    name: "Carlos Ramirez",
    location: "Lakewood",
    project: "Room addition",
    photo: {
      src: "/people/customers/carlos-ramirez.jpg",
      alt: "Carlos Ramirez",
    },
  },
  {
    quote:
      "We had a sagging span and a lot of worry. They reinforced it properly, priced it fairly, and never tried to upsell us.",
    name: "David Keane",
    location: "Highlands Ranch",
    project: "Structural repair",
    photo: {
      src: "/people/customers/david-keane.jpg",
      alt: "David Keane",
    },
  },
];
