import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tramano Creative — Websites engineered like spacecraft.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(ellipse 60% 50% at 25% 20%, rgba(34,211,238,0.18), transparent 60%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(139,92,246,0.20), transparent 60%), #030509",
          color: "#e6edf6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 12,
            color: "#22d3ee",
            display: "flex",
          }}
        >
          TRAMANO · CREATIVE
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 72,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>Websites engineered</span>
          <span style={{ color: "#67e8f9" }}>like spacecraft.</span>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 26,
            color: "#8b98ab",
            display: "flex",
          }}
        >
          tramanocreative.com
        </div>
      </div>
    ),
    size,
  );
}
