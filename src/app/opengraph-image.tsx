import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Tramano Creative — A website is a tool. We build the whole machine.";
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
            "radial-gradient(ellipse 60% 50% at 25% 20%, rgba(212,175,92,0.16), transparent 60%), radial-gradient(ellipse 55% 50% at 80% 80%, rgba(90,127,184,0.18), transparent 60%), #070c18",
          color: "#f5f1ea",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 12,
            color: "#d4af5c",
            display: "flex",
            fontFamily: "sans-serif",
          }}
        >
          TRAMANO · CREATIVE
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span>A website is a tool.</span>
          <span style={{ color: "#f0d48a" }}>We build the whole machine.</span>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 26,
            color: "#a3abbc",
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
