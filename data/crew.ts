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
    bio: "Started the crew with a pickup and a framing hammer. Still walks the jobs and still checks the diagonals.",
    story: [
      "Frank Calder grew up in Aurora when the east metro was still more dirt roads than subdivisions. His father hung doors and trim for production builders; Frank was stacking stickers and packing walls on Saturdays before he had a driver’s license. After high school he went to work for a volume crew that could stand a house in two days. The pay was fine. The walls were not. He lasted three years, learned every shortcut he never wanted to take, and quit after a superintendent told him to let a racked wall go because the drywallers would hide it.",
      "In 1989 he bought a used F-250, a worm-drive Skilsaw, and enough insurance to put his own name on a job. The first work was not custom homes. It was additions on ranches along Chambers and Mississippi, a garage in Derby, a bearing wall for a kitchen that had been opened with a Sawzall and a prayer. He measured twice, pulled diagonals in front of the homeowner, and came back if a header sat proud. Builders who had seen the last one started calling. He kept the crew small on purpose. Growth that watered down the work was never the point.",
      "Colorado taught him the rest. Snow load is not a line on a plan here; it is March sitting on a roof you framed in October. He learned Front Range wind, freeze-thaw on plates, and why you do not leave a load path as an assumption. He still keeps a shop on the east side — lumber racked, miter saw on a bench that has seen thirty-five years of offcuts — and he still walks jobs. If the name is on the truck, he wants to hang a door in those walls himself.",
      "Luis is his son. The rest of the crew came the same way the work did: one job at a time, people who stayed because the standard made sense. Frank does not give speeches. He checks the layout, asks who is running the next wall, and goes back to the shop if the answers are right.",
    ],
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
    story: [
      "Luis Calder grew up on these pads. Summers meant fetching blocks, covering units before a storm, and riding home in the dusty cab of the same pickup his father still drives. He could read a tape before he could drive. After high school he took construction classes at the community college and spent two years on Marcus’s crew as a framer — not because the office needed a son, but because Frank would not let anyone write a scope who had not packed a wall in January.",
      "He came inside in 2008, which was a hard year to learn estimating. New homes slowed. Additions, openings, and structural repairs kept the lights on. Luis learned to bid what was actually there, not what a drawing hoped was there. He walks the existing house before he prices an addition: foundation, bearing, roof tie-in, access for a boom, where the dumpster can sit without blocking a neighbor. If a number cannot hold, it does not go out.",
      "On a typical week he is in the field office with rolls of plans on an OSB table, a hard hat at his elbow, and the estimates drawer labeled in Sharpie. Homeowners get a call back the same day when he can. GCs get a scope that names inclusions and exclusions in plain language. He will talk through a change order before anyone cuts, and he will say no to finish work, roofing, or a job that is too far out for the crew to stand behind.",
      "He is the second generation on purpose, not as a slogan. The people who talk to you about money are the same family that has to look at the job when it is done. If Frank is the standard, Luis is how that standard gets written down so nobody has to guess.",
    ],
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
    story: [
      "Marcus Hale started as a helper at seventeen on a production crew in Adams County. He was the kid who held the end of the string, packed plates, and got sent for coffee until someone noticed he could snap a chalk line that did not wander. By twenty-two he was running walls. He came to Summit in 2003 after a superintendent on another job told him to bury a floor that was out of level. He walked off. Frank hired him the next week.",
      "He has run layout for this crew ever since. That means he is first on the pad with the plans, the pencil behind his ear, and the tape that has had the same leather holder for a decade. He sets plates, checks diagonals, and will recut a header rather than shim a mistake into the next trade. Hold-downs, king studs, and load paths are not extras to him. They are the job. If the drawings and the field disagree, the field gets a phone call before the saw comes out — usually to Luis, sometimes to the engineer.",
      "Crews like Marcus because he does not yell and he does not hide. If a wall is out, he says so while it can still be fixed. If weather is going to cost a day, he says that too. He has framed custom homes in Aurora and Denver, second-story additions on ranches that were never meant to take another floor, and openings where a homeowner wanted a wall gone and the house still had to carry snow. The jacket is torn because it has been on every one of those jobs.",
      "He lives in the east metro, same as most of the crew. Off the clock he is not on social media talking about craft. He is sharpening blades, watching the weather, and showing up at 6:30 with the layout already in his head.",
    ],
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
    story: [
      "Sam Ortiz grew up in Commerce City and learned the trade the unglamorous way: laborer on a remodel crew, then a framing helper who could keep a stack straight and a sawhorse from walking. He hired on at Summit in 2016 after Marcus watched him pack walls on a garage job without being told twice. Frank’s rule still applied. You earn the right to run a site by doing the work well when nobody is watching.",
      "He is the crew lead now, which on this company means he is not a clipboard. He is first on the lumber, last to lock the gate, and the person who keeps the pad from turning into a mess the plumber has to climb through. Units get covered. Offcuts get stacked. The street stays passable. Neighbors get a civil radio and a crew that does not treat their cul-de-sac like a dump. He thinks one trade ahead: sheathing that leaves the electrician a path, openings that match the window schedule, a subfloor you can walk without twisting an ankle.",
      "Sam has a particular patience for the jobs that look simple on paper and are not — a three-bay garage that has to sit square on a pad that was poured a half-inch out, a shop that has to take snow and a future hoist, an addition that has to land on an old ranch without making the existing roof look like an afterthought. He will stay late to get a wall plumb rather than leave a problem for morning.",
      "When the sun drops behind the Front Range and the SPF stamps are still readable on the stack, he is usually the one leaning on it, counting what is left for tomorrow. The estimate has Luis’s name on it. The layout has Marcus’s. The day-to-day of the site — the part a homeowner sees when they pull in after work — is Sam’s.",
    ],
    photo: {
      src: "/people/crew/sam-ortiz.jpg",
      alt: "Sam Ortiz, crew lead",
    },
  },
];
