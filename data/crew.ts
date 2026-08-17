export type CrewMember = {
  name: string;
  role: string;
  since: string;
  bio: string;
  photo: { src: string; alt: string };
};

export const crew: CrewMember[] = [
  {
    name: "Frank Calder",
    role: "Founder",
    since: "1989",
    bio: "Started the crew with a pickup and a framing hammer. Still walks the jobs and still checks the diagonals.",
    photo: {
      src: "/people/crew/frank-calder.jpg",
      alt: "Frank Calder, founder of Summit Frame & Build",
    },
  },
  {
    name: "Luis Calder",
    role: "Estimates & operations",
    since: "2008",
    bio: "Second generation. He writes the scopes, returns the calls, and keeps the bid honest.",
    photo: {
      src: "/people/crew/luis-calder.jpg",
      alt: "Luis Calder, estimates and operations",
    },
  },
  {
    name: "Marcus Hale",
    role: "Lead framer",
    since: "2003",
    bio: "Runs layout and the crew on site. If a wall is out, he is the one who says so before anyone covers it.",
    photo: {
      src: "/people/crew/marcus-hale.jpg",
      alt: "Marcus Hale, lead framer",
    },
  },
  {
    name: "Sam Ortiz",
    role: "Crew lead",
    since: "2016",
    bio: "Keeps the pad orderly and the next trade in mind. First one on the stack, last one to lock the gate.",
    photo: {
      src: "/people/crew/sam-ortiz.jpg",
      alt: "Sam Ortiz, crew lead",
    },
  },
];
