import { ImageResponse } from "next/og";

// Static OG/Twitter share card (also used as the Twitter image fallback).
export const alt = "Sam Randall — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1000px 600px at 50% -10%, rgba(168,85,247,0.30), transparent 60%), #09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: "-0.03em" }}>
          Sam Randall
        </div>
        <div style={{ fontSize: 40, marginTop: 12, color: "#a1a1aa" }}>
          Software Engineer
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#71717a" }}>
          samarandall.com
        </div>
      </div>
    ),
    size
  );
}
