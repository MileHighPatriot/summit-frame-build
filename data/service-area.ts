export type ServiceCity = {
  id: string;
  name: string;
  shortName: string;
  lat: number;
  lng: number;
  note: string;
};

export const serviceCities: ServiceCity[] = [
  {
    id: "aurora",
    name: "Aurora",
    shortName: "Aurora",
    lat: 39.7294,
    lng: -104.8319,
    note: "Home base. Custom homes, ranch additions, and structural work across the east metro.",
  },
  {
    id: "denver",
    name: "Denver",
    shortName: "Denver",
    lat: 39.7392,
    lng: -104.9903,
    note: "Infill lots, occupied-house openings, and custom frames inside the city.",
  },
  {
    id: "commerce-city",
    name: "Commerce City",
    shortName: "Commerce City",
    lat: 39.8083,
    lng: -104.9339,
    note: "Garages, additions, and new frames on the north side of the metro.",
  },
  {
    id: "lakewood",
    name: "Lakewood",
    shortName: "Lakewood",
    lat: 39.7047,
    lng: -105.0814,
    note: "West-metro additions and structural work on existing houses.",
  },
  {
    id: "greenwood-village",
    name: "Greenwood Village",
    shortName: "Greenwood Village",
    lat: 39.6172,
    lng: -104.9508,
    note: "Custom homes and additions along the south Denver corridor.",
  },
  {
    id: "dtc",
    name: "Denver Tech Center",
    shortName: "DTC",
    lat: 39.6275,
    lng: -104.894,
    note: "Nearby residential framing around the Tech Center — Greenwood Village, Centennial, and adjacent streets.",
  },
  {
    id: "littleton",
    name: "Littleton",
    shortName: "Littleton",
    lat: 39.6133,
    lng: -105.0166,
    note: "Room additions and load-bearing openings on established south-metro houses.",
  },
  {
    id: "centennial",
    name: "Centennial",
    shortName: "Centennial",
    lat: 39.5807,
    lng: -104.8772,
    note: "Custom homes, additions, and garage frames in the south-east metro.",
  },
  {
    id: "highlands-ranch",
    name: "Highlands Ranch",
    shortName: "Highlands Ranch",
    lat: 39.5539,
    lng: -104.9694,
    note: "Occupied-house structural work and additions in Highlands Ranch.",
  },
  {
    id: "parker",
    name: "Parker",
    shortName: "Parker",
    lat: 39.5186,
    lng: -104.7614,
    note: "New frames, outbuildings, and additions on the east side of Douglas County.",
  },
  {
    id: "castle-rock",
    name: "Castle Rock",
    shortName: "Castle Rock",
    lat: 39.3722,
    lng: -104.8561,
    note: "Worth the drive for the right custom home, addition, or garage. Ask.",
  },
];

export const mapBounds = {
  minLng: -105.16,
  maxLng: -104.68,
  minLat: 39.3,
  maxLat: 39.86,
  width: 640,
  height: 740,
};

export function projectLngLat(lng: number, lat: number) {
  const { minLng, maxLng, minLat, maxLat, width, height } = mapBounds;
  return {
    x: ((lng - minLng) / (maxLng - minLng)) * width,
    y: (1 - (lat - minLat) / (maxLat - minLat)) * height,
  };
}

function path(points: [number, number][]) {
  return points
    .map(([lng, lat], index) => {
      const { x, y } = projectLngLat(lng, lat);
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

export const highways = {
  i25: path([
    [-104.988, 39.85],
    [-104.99, 39.739],
    [-104.9, 39.63],
    [-104.88, 39.55],
    [-104.856, 39.372],
  ]),
  i70: path([
    [-105.14, 39.74],
    [-104.99, 39.739],
    [-104.82, 39.73],
    [-104.7, 39.728],
  ]),
  c470: path([
    [-105.14, 39.68],
    [-105.05, 39.63],
    [-104.97, 39.55],
    [-104.86, 39.53],
    [-104.76, 39.52],
  ]),
};
