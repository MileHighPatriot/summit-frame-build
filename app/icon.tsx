import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1d36",
          color: "#9aa8b5",
          fontSize: 36,
          fontWeight: 700,
        }}
      >
        S
      </div>
    ),
    size,
  );
}
