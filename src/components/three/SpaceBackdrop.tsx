"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Starfield = dynamic(() => import("./Starfield"), { ssr: false });

/**
 * Fixed full-viewport backdrop: CSS nebula glows always render (cheap,
 * works everywhere); the WebGL starfield mounts only when motion is OK.
 */
export default function SpaceBackdrop() {
  const [mode, setMode] = useState<"static" | "lite" | "full" | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setMode("static");
    } else {
      setMode(window.innerWidth < 768 ? "lite" : "full");
    }
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10">
      {/* Nebula glows */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 20% 15%, rgba(212,175,92,0.09), transparent 60%)," +
            "radial-gradient(ellipse 55% 50% at 80% 70%, rgba(90,127,184,0.10), transparent 60%)," +
            "radial-gradient(ellipse 40% 35% at 60% 25%, rgba(240,212,138,0.05), transparent 60%)",
        }}
      />
      {mode === "static" && (
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 12% 22%, #e8dcc0 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 34% 68%, #f0d48a 50%, transparent 51%)," +
              "radial-gradient(1.5px 1.5px at 56% 12%, #e6edf6 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 71% 45%, #8fadd6 50%, transparent 51%)," +
              "radial-gradient(1.5px 1.5px at 88% 78%, #e8dcc0 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 45% 88%, #e6edf6 50%, transparent 51%)," +
              "radial-gradient(1px 1px at 92% 8%, #f0d48a 50%, transparent 51%)",
            backgroundSize: "420px 420px",
          }}
        />
      )}
      {(mode === "full" || mode === "lite") && <Starfield dense={mode === "full"} />}
    </div>
  );
}
