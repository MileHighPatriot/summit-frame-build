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
          background: "#1f1d1a",
          borderRadius: 14,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <path d="M3 15 16 4l13 11" stroke="#c9a27c" strokeWidth="2.2" />
          <path d="M7 12.5V28h18V12.5" stroke="#faf8f4" strokeWidth="2.2" />
        </svg>
      </div>
    ),
    size,
  );
}
