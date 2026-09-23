export type CrewMember = {
  name: string;
  role: string;
  since: string;
  bio: string;
  story: string[];
  photo: { src: string; alt: string };
};

export const crew: CrewMember[] = [
  {
    name: "Frank Calder",
    role: "Founder",
    since: "1989",
    bio: "Started the company with one truck and a framing hammer. Still walks every job and still checks the diagonals.",
    story: [
      "Frank grew up in Aurora when the east metro was more dirt roads than subdivisions. His father hung doors and trim for production builders, and Frank was stacking lumber on Saturdays before he could drive. After high school he joined a volume framing crew that could stand a house in two days. He lasted three years, and left the day a superintendent told him to leave a wall out of plumb because the drywall would hide it.",
      "In 1989 he bought a used pickup, a worm-drive saw, and enough insurance to put his own name on a job. The early work was ranch additions, garages, and kitchen walls that had been opened by someone who shouldn't have. He measured twice, pulled diagonals in front of the homeowner, and came back if anything wasn't right. Builders started calling. He kept the crew small on purpose.",
      "Three decades on, Frank still runs the shop on the east side and still visits every site. His son Luis runs estimates, and the rest of the crew joined the same way the work came in: one job at a time, people who stayed because the standard made sense.",
    ],
    photo: {
      src: "/people/crew/frank-calder.jpg",
      alt: "Frank Calder, founder of Summit Frame & Build",
    },
  },
  {
    name: "Luis Calder",
    role: "Estimates & Operations",
    since: "2008",
    bio: "Second generation. Writes the scopes, returns the calls, and makes sure every number will hold.",
    story: [
      "Luis grew up on job sites, fetching blocks and covering lumber before storms. After studying construction at community college, he spent two years framing on Marcus's crew, because Frank wouldn't let anyone write an estimate who hadn't framed a wall in January.",
      "He moved into estimating in 2008, a hard year to learn the job. New construction slowed, and additions and structural repairs kept the company busy. Luis learned to price what was actually there, not what a drawing hoped for. He walks every existing house before bidding: foundation, bearing walls, roof tie-ins, and access.",
      "Homeowners get a call back the same day whenever possible. Contractors get a scope that spells out inclusions and exclusions in plain language. And if a job is outside what the crew does best, Luis will say so up front.",
    ],
    photo: {
      src: "/people/crew/luis-calder.jpg",
      alt: "Luis Calder, estimates and operations",
    },
  },
  {
    name: "Marcus Hale",
    role: "Lead Framer",
    since: "2003",
    bio: "Runs layout and the crew on site. If something is off, he catches it before anyone covers it up.",
    story: [
      "Marcus started as a helper at seventeen on a production crew in Adams County. By twenty-two he was running walls. He came to Summit in 2003 after refusing a superintendent's order to cover a floor that was out of level. Frank hired him the next week.",
      "He's run layout for the crew ever since: first on site with the plans, setting plates, checking diagonals, and recutting a header rather than shimming a mistake into the next trade's work. When the drawings and the field disagree, he calls Luis or the engineer before anyone picks up a saw.",
      "Marcus has framed custom homes across Aurora and Denver, second stories on ranches never designed to carry one, and openings where a wall had to go but the house still had to carry snow. Crews like working with him because he's calm, direct, and always ready at 6:30.",
    ],
    photo: {
      src: "/people/crew/marcus-hale.jpg",
      alt: "Marcus Hale, lead framer",
    },
  },
  {
    name: "Sam Ortiz",
    role: "Crew Lead",
    since: "2016",
    bio: "Keeps the site organized and the next trade in mind. First one on the lumber, last one to lock the gate.",
    story: [
      "Sam grew up in Commerce City and learned the trade from the ground up, first as a laborer on a remodeling crew, then as a framing helper. Marcus noticed him on a garage job in 2016 and brought him to Summit.",
      "As crew lead, Sam runs the day-to-day on site. Lumber gets covered, scraps get cleared, the street stays passable, and neighbors are treated with respect. He thinks one trade ahead: sheathing that leaves the electrician a clear path, and openings that match the window schedule.",
      "He has a particular patience for jobs that look simple on paper and aren't: a garage on a pad poured out of square, a shop that needs to carry a future hoist, or an addition that has to meet an old roofline cleanly. He'll stay late to get a wall right rather than leave it for the morning.",
    ],
    photo: {
      src: "/people/crew/sam-ortiz.jpg",
      alt: "Sam Ortiz, crew lead",
    },
  },
];
