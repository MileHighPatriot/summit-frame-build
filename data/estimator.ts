export const estimatorTypes = [
  {
    id: "custom-home",
    label: "Custom home framing",
    unit: "weeks on frame",
    base: [6, 10] as const,
    note: "Slab to dried-in shell. Wide openings and a custom roof add time.",
  },
  {
    id: "addition",
    label: "Room addition",
    unit: "weeks on frame",
    base: [3, 6] as const,
    note: "Tie-in, roof meeting the old eave, and an opening into the house.",
  },
  {
    id: "structural",
    label: "Structural work",
    unit: "working days",
    base: [4, 8] as const,
    note: "Shoring, beam, and load path. Occupied houses take a careful sequence.",
  },
  {
    id: "garage",
    label: "Garage or outbuilding",
    unit: "weeks on frame",
    base: [2, 4] as const,
    note: "Pad to sheathed shell, headers sized for the door openings.",
  },
] as const;

export const estimatorSizes = [
  { id: "small", label: "Under 400 sq ft", factor: 0.85 },
  { id: "mid", label: "400–1,200 sq ft", factor: 1 },
  { id: "large", label: "1,200–2,500 sq ft", factor: 1.2 },
  { id: "xl", label: "2,500+ or two-story", factor: 1.4 },
] as const;

export const estimatorDrawings = [
  { id: "plans", label: "Full architectural plans", delay: 0 },
  { id: "sketch", label: "Sketch or engineer letter", delay: 0.1 },
  { id: "photos", label: "Photos of the house only", delay: 0.2 },
  { id: "walk", label: "Nothing yet — need a walkthrough", delay: 0.25 },
] as const;

export const visitWindows = [
  "Weekday morning lot walk",
  "Weekday afternoon plans review",
  "Friday wrap-up call",
  "Flexible — propose times",
] as const;

export type EstimatorInput = {
  typeId: string;
  sizeId: string;
  drawingId: string;
  city: string;
};

export type ScopeWindow = {
  low: number;
  high: number;
  unit: string;
  headline: string;
  next: string;
  disclaimer: string;
};

function roundNice(value: number, unit: string) {
  if (unit === "working days") return Math.max(2, Math.round(value));
  return Math.max(1, Math.round(value * 2) / 2);
}

export function getEstimatorType(id: string) {
  return estimatorTypes.find((item) => item.id === id) ?? estimatorTypes[0];
}

export function getEstimatorSize(id: string) {
  return estimatorSizes.find((item) => item.id === id) ?? estimatorSizes[1];
}

export function getEstimatorDrawing(id: string) {
  return estimatorDrawings.find((item) => item.id === id) ?? estimatorDrawings[3];
}

export function scopeWindow({
  typeId,
  sizeId,
  drawingId,
  city,
}: EstimatorInput): ScopeWindow {
  const type = getEstimatorType(typeId);
  const size = getEstimatorSize(sizeId);
  const drawing = getEstimatorDrawing(drawingId);
  const stretch = size.factor + drawing.delay;
  const low = roundNice(type.base[0] * Math.max(0.8, stretch - 0.15), type.unit);
  const high = roundNice(type.base[1] * stretch, type.unit);
  const place = city.trim() || "the Front Range";

  return {
    low,
    high,
    unit: type.unit,
    headline: `Typical ${type.label.toLowerCase()} in ${place}: ${low}–${high} ${type.unit}.`,
    next:
      drawing.id === "plans"
        ? "We can review the set before we drive out. A site walk still confirms what the drawings miss."
        : "Next step is a lot walk or a plans review — not a locked price from a form.",
    disclaimer:
      "This is a calibrated frame window, not a bid. Weather, access, and what is already in the ground move the number.",
  };
}

export function inquiryQuery(input: EstimatorInput) {
  const params = new URLSearchParams({
    type: input.typeId,
    size: input.sizeId,
    drawings: input.drawingId,
  });
  if (input.city.trim()) params.set("city", input.city.trim());
  return `/contact/?${params.toString()}`;
}
