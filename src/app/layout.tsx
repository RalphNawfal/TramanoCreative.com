import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import JsonLd from "@/components/seo/JsonLd";
import MotionProvider from "@/components/ui/MotionProvider";
import SignalHud from "@/components/ui/SignalHud";
import Analytics from "@/components/analytics/Analytics";
import Attribution from "@/components/analytics/Attribution";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import EventTracking from "@/components/analytics/EventTracking";

// Archivo is the only family here that takes an axes array, and `wdth` is the
// only legal value. It must resolve to a variable weight — passing an explicit
// `weight` would silently discard the axis and we'd lose the expanded display.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

// Geist and Geist Mono expose only `wght`, which is never a definable axis.
// Passing any `axes` array to either is a build error.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    // Pointed at /og.png rather than letting the file convention emit
    // /opengraph-image: the extensionless URL is served as
    // application/octet-stream by GitHub Pages and rejected by scrapers that
    // check Content-Type. Same bytes, copied at build time.
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Spread rather than set: an empty string would emit an empty verification
  // meta tag, which Search Console reads as a failed claim rather than none.
  verification: {
    ...(site.verification.google ? { google: site.verification.google } : {}),
    ...(site.verification.bing
      ? { other: { "msvalidate.01": site.verification.bing } }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-carbon text-white">
        {/*
          First focusable element on every page, by position in the DOM. Has to
          stay above SignalHud and Nav or it isn't the first thing tabbed to,
          which is the entire point of it.
        */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                // ProfessionalService alongside Organization: it's the right
                // type for a service business, and it carries areaServed.
                "@type": ["Organization", "ProfessionalService"],
                "@id": `${site.url}/#organization`,
                name: site.name,
                url: site.url,
                email: site.email,
                telephone: site.phone,
                description: site.description,
                slogan: site.tagline,
                foundingDate: site.foundingDate,
                priceRange: site.priceRange,
                // `logo` wants the mark, not the social banner — Google renders
                // it in knowledge panels where a 1200×630 wordmark crops badly.
                // `image` keeps the banner, which is what it's for.
                logo: `${site.url}/icon.png`,
                image: `${site.url}/og.png`,
                // Locality without a street address. The business is
                // deliberately country-level — no premises means no map-pack
                // eligibility — but "Beirut" is already stated publicly in
                // /llms.txt, the footer and the FAQ, so withholding it from schema
                // only hid a true signal from search engines.
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Beirut",
                  addressCountry: "LB",
                },
                // Where the studio was founded, as distinct from where it
                // works. `areaServed` below is the far larger set, and without
                // this the two get conflated — an answer engine reading only
                // areaServed has no basis to call this a Beirut business.
                foundingLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: site.foundingLocation.locality,
                    addressCountry: site.foundingLocation.country,
                  },
                },
                ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
                knowsAbout: site.knowsAbout,
                knowsLanguage: site.languages,
                areaServed: site.areaServed.map((area) =>
                  area === "Worldwide"
                    ? { "@type": "Place", name: "Worldwide" }
                    : { "@type": "Country", name: area },
                ),
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: site.email,
                  telephone: site.phone,
                  availableLanguage: site.languages,
                },
                founder: site.founders.map((name) => ({
                  "@type": "Person",
                  name,
                })),
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Services",
                  itemListElement: [
                    "Web design and development",
                    "Google Ads management",
                    "SEO and search presence",
                  ].map((serviceName) => ({
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: serviceName },
                  })),
                },
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                inLanguage: "en",
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
        <SignalHud />
        <MotionProvider>
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Attribution />
        <EventTracking />
        <Analytics />
        <GoogleAnalytics />
        <ConsentBanner />
      </body>
    </html>
  );
}
