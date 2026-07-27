import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tramano Creative — We build the websites people remember.";
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
            "radial-gradient(ellipse 65% 60% at 50% 115%, rgba(224,118,61,0.28), transparent 62%), radial-gradient(ellipse 50% 45% at 15% 10%, rgba(217,164,65,0.12), transparent 60%), #14100d",
          color: "#f2e9dc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: 12,
            color: "#6f635a",
            display: "flex",
            fontFamily: "sans-serif",
          }}
        >
          TRAMANO · CREATIVE
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 68,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>We build the websites</span>
          <span style={{ color: "#e0763d" }}>people remember.</span>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            color: "#a8988a",
            display: "flex",
            fontFamily: "sans-serif",
          }}
        >
          tramanocreative.com
        </div>
      </div>
    ),
    size,
  );
}
