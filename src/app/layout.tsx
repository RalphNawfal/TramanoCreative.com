import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Nav from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";
import JsonLd from "@/components/seo/JsonLd";
import MotionProvider from "@/components/ui/MotionProvider";
import SignalHud from "@/components/ui/SignalHud";

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
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                // ProfessionalService alongside Organization: it's the right
                // type for a service business, and it carries areaServed.
                // There's deliberately no postal address — the business is
                // country-level, which means no map-pack eligibility.
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
                logo: `${site.url}/opengraph-image`,
                image: `${site.url}/opengraph-image`,
                ...(site.sameAs.length > 0 ? { sameAs: site.sameAs } : {}),
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
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
