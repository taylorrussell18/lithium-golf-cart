import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mobile Golf Carts | Lithium Conversion Service",
  description:
    "Professional mobile golf cart lithium battery conversion. 36V LiFePO4 105Ah installed at your location. Starting at $1,600 — parts, labor, charger, and monitor included.",
  keywords: "golf cart lithium battery, lithium conversion, EZGO, Club Car, Yamaha, LiFePO4, mobile installation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoRepair",
        "@id": "https://mobilegolfcarts.com/#business",
        "name": "Mobile Golf Carts",
        "url": "https://mobilegolfcarts.com",
        "telephone": "(405) 520-3268",
        "email": "G.russellcarts@gmail.com",
        "description": "Professional mobile golf cart lithium battery conversion service serving all of Oklahoma. We install 36V LiFePO4 batteries directly at your home, business, or storage facility.",
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "priceRange": "$1600+",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "3"
        },
        "image": "https://mobilegolfcarts.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US",
          "addressRegion": "OK"
        }
      },
      {
        "@type": "Service",
        "@id": "https://mobilegolfcarts.com/#service",
        "name": "Golf Cart Lithium Battery Conversion",
        "description": "36V LiFePO4 lithium battery upgrade with custom tray, smart charger, and LCD monitor. Mobile installation included.",
        "provider": {
          "@id": "https://mobilegolfcarts.com/#business"
        },
        "areaServed": {
          "@type": "State",
          "name": "Oklahoma"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "1600"
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          strategy="afterInteractive"
        />
      </head>
      <body className="font-inter antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
