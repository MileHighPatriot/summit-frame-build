import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1e3a32",
          color: "#faf7f1",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#a6854d",
          }}
        >
          {`Family-run since ${site.founded}`}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 960,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 26,
              color: "rgba(250,247,241,0.75)",
            }}
          >
            {`${site.name}  ·  ${site.area}`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
