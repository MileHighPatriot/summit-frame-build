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
          background: "#1f1d1a",
          color: "#faf8f4",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(250,248,244,0.6)",
            fontFamily: "sans-serif",
          }}
        >
          <span>{site.name}</span>
          <span>{`Est. ${site.founded}`}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, lineHeight: 1, letterSpacing: "-0.03em" }}>
            Square, plumb,
          </div>
          <div style={{ display: "flex", fontSize: 96, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            <span>and built to&nbsp;</span>
            <span style={{ color: "#c9a27c", fontStyle: "italic" }}>last.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 26,
              color: "rgba(250,248,244,0.65)",
              fontFamily: "sans-serif",
            }}
          >
            Custom framing in Aurora &amp; the Denver metro
          </div>
        </div>
      </div>
    ),
    size,
  );
}
