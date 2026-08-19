import {
  getEstimatorDrawing,
  getEstimatorSize,
  getEstimatorType,
  scopeWindow,
} from "@/data/estimator";
import { site } from "@/data/site";

export const projectTypes = [
  "Custom home framing",
  "Room addition",
  "Structural work",
  "Garage or outbuilding",
  "Not sure / other",
];

export const typeFromId: Record<string, string> = {
  "custom-home": "Custom home framing",
  addition: "Room addition",
  structural: "Structural work",
  garage: "Garage or outbuilding",
};

export const drawingFromId: Record<string, string> = {
  plans: "Full architectural plans",
  sketch: "A sketch or engineer letter",
  photos: "Photos of the existing house only",
  walk: "Nothing yet — need a walkthrough",
};

export function sizeLabel(id: string) {
  return getEstimatorSize(id).label;
}

export function buildInquiryText(fields: Record<string, string>, fileNames: string[]) {
  const window = scopeWindow({
    typeId: fields.typeId || "addition",
    sizeId: fields.sizeId || "mid",
    drawingId: fields.drawingId || "photos",
    city: fields.city || "",
  });

  return [
    `Name: ${fields.name ?? ""}`,
    `Phone: ${fields.phone ?? ""}`,
    `Email: ${fields.email ?? ""}`,
    `Preferred contact: ${fields.contactMethod ?? ""}`,
    `Visit window: ${fields.visitWindow ?? ""}`,
    `City: ${fields.city ?? ""}`,
    `Address: ${fields.address || "Not given"}`,
    `Project type: ${fields.projectType ?? ""}`,
    `Timing: ${fields.timeline ?? ""}`,
    `Drawings on hand: ${fields.plans ?? ""}`,
    `Scope: ${fields.scope || "Not given"}`,
    `Desk window: ${window.headline}`,
    "",
    fields.message ?? "",
    "",
    fileNames.length
      ? `Files selected on the website: ${fileNames.join(", ")}`
      : "No files selected on the website.",
  ].join("\n");
}

export function mailtoHref(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitInquiry(
  fields: Record<string, string>,
  files: File[],
): Promise<"sent" | "mailto"> {
  const subject = `Framing estimate — ${fields.city || "job"}`;
  const body = buildInquiryText(fields, files.map((file) => file.name));
  const data = new FormData();
  data.append("name", fields.name);
  data.append("email", fields.email);
  data.append("phone", fields.phone);
  data.append("message", body);
  data.append("_subject", subject);
  data.append("_template", "table");
  data.append("_captcha", "false");
  files.forEach((file, index) => {
    data.append(`attachment_${index}`, file);
  });

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    if (!response.ok) throw new Error("submit failed");
    return "sent";
  } catch {
    const link = document.createElement("a");
    link.href = mailtoHref(subject, body);
    link.click();
    return "mailto";
  }
}

export function estimatorPrefill(params: URLSearchParams) {
  const typeId = params.get("type") ?? "";
  const sizeId = params.get("size") ?? "";
  const drawingId = params.get("drawings") ?? "";
  const city = params.get("city") ?? "";

  return {
    typeId,
    sizeId,
    drawingId,
    city,
    projectType: typeFromId[typeId] ?? "",
    plans: drawingFromId[drawingId] ?? "",
    scope: sizeId ? sizeLabel(sizeId) : "",
    typeLabel: typeId ? getEstimatorType(typeId).label : "",
    drawingLabel: drawingId ? getEstimatorDrawing(drawingId).label : "",
  };
}
