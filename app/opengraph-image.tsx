import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const dynamic = "force-static";
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
          background: "#0b1d36",
          color: "#f8fafc",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#9aa8b5",
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
              color: "rgba(248,250,252,0.75)",
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
