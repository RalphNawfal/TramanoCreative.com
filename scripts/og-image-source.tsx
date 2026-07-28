import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Design source for the share card at public/og.png. NOT a live route.
 *
 * Palette is Carbon & Signal, matching globals.css — this previously rendered
 * in the retired warm brown and orange, so every link shared to WhatsApp or
 * LinkedIn advertised a brand the site no longer uses.
 *
 * Why this doesn't live in src/app/ any more: Next's opengraph-image file
 * convention emits the route at /opengraph-image with *no file extension*.
 * GitHub Pages serves that as application/octet-stream, and scrapers that
 * check Content-Type — Facebook and LinkedIn both do — drop the image, so
 * shared links render with no preview. That was confirmed against the live
 * site, not assumed. The convention also silently overrides any
 * `openGraph.images` set in metadata, so the URL cannot be redirected while
 * the route exists. Deleting it is the only way to point og:image at a real
 * .png, which is why the card is now a committed static asset alongside
 * public/logo-lockup.png.
 *
 * To regenerate after editing this file:
 *   1. cp scripts/og-image-source.tsx src/app/opengraph-image.tsx
 *   2. npm run build
 *   3. cp out/opengraph-image public/og.png
 *   4. rm src/app/opengraph-image.tsx
 *   5. npm run build   (confirm og:image is /og.png again)
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 118%, rgba(63,123,255,0.30), transparent 62%), radial-gradient(ellipse 55% 50% at 8% -8%, rgba(63,123,255,0.10), transparent 60%), #0c0c0d",
          color: "#f5f4f2",
        }}
      >
        {/* Wordmark over the top rule */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 1, background: "#2b2b30" }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 28,
              fontSize: 21,
              letterSpacing: 8,
              color: "#9b9a98",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 9,
                height: 9,
                borderRadius: 9,
                background: "#3f7bff",
              }}
            />
            TRAMANO CREATIVE
          </div>
        </div>

        {/* The line */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 700,
            lineHeight: 1.04,
            letterSpacing: -2,
          }}
        >
          <span>We build the websites</span>
          <span style={{ color: "#3f7bff" }}>people remember.</span>
        </div>

        {/* Footer rule */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 1, background: "#2b2b30" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 26,
              fontSize: 22,
              color: "#63625f",
            }}
          >
            <span style={{ color: "#9b9a98" }}>{site.domain}</span>
            <span>Websites · Google Ads · SEO</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
