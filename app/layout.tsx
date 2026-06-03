import type { Metadata } from "next";
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
  metadataBase: new URL("https://www.mobilegolfcarts.com"),
  title: "Mobile Golf Cart Lithium Conversion | Oklahoma | Starting at $1,600",
  description:
    "Premium mobile golf cart lithium battery conversion serving all of Oklahoma. 36V LiFePO4 105Ah installed at your home or club — battery, tray, charger & monitor included. Starting at $1,600.",
  keywords:
    "golf cart lithium battery, lithium conversion Oklahoma, EZGO lithium battery, Club Car lithium upgrade, Yamaha golf cart battery, LiFePO4 golf cart, mobile golf cart service Oklahoma",
  alternates: {
    canonical: "https://www.mobilegolfcarts.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.mobilegolfcarts.com",
    siteName: "Mobile Golf Carts",
    title: "Mobile Golf Cart Lithium Conversion — Oklahoma",
    description:
      "Full lithium upgrade at your home or club. Battery, tray, smart charger & LCD monitor included. Serving all of Oklahoma. Starting at $1,600.",
    images: [
      {
        url: "/installs/install-completed-conversion.jpeg",
        width: 1200,
        height: 630,
        alt: "Completed lithium battery conversion on golf cart — Mobile Golf Carts Oklahoma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Golf Cart Lithium Conversion — Oklahoma",
    description:
      "Full lithium upgrade starting at $1,600. Installed at your home or club. Serving all of Oklahoma.",
    images: ["/installs/install-completed-conversion.jpeg"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.mobilegolfcarts.com/#business",
      name: "Mobile Golf Carts",
      url: "https://www.mobilegolfcarts.com",
      telephone: "(405) 520-3268",
      email: "G.russellcarts@gmail.com",
      description:
        "Premium mobile golf cart lithium battery conversion service serving all of Oklahoma. We install 36V LiFePO4 batteries directly at your home, business, or storage facility.",
      areaServed: [
        { "@type": "City", name: "Oklahoma City", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "Edmond", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "Tulsa", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "Norman", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "Lawton", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "McAlester", containedInPlace: { "@type": "State", name: "Oklahoma" } },
        { "@type": "City", name: "Eufaula", containedInPlace: { "@type": "State", name: "Oklahoma" } },
      ],
      priceRange: "$1,600 - $2,000",
      image: "https://www.mobilegolfcarts.com/installs/install-completed-conversion.jpeg",
      address: {
        "@type": "PostalAddress",
        addressRegion: "OK",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Mike T." },
          reviewBody:
            "Gary did an amazing job. Came out to my house, had the whole thing done in a few hours. Cart runs better than it ever did with the old lead-acid. Wish I had done this years ago.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Sandra R." },
          reviewBody:
            "Super professional from start to finish. The LCD monitor is a game changer — I always know exactly how much charge I have left. Installation was spotless, no mess whatsoever.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Dave K." },
          reviewBody:
            "Outstanding value. $1,600 all-in and you get a battery that'll last 10+ years. The cart is noticeably faster going up hills now. 10/10 recommend.",
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://www.mobilegolfcarts.com/#service",
      name: "Golf Cart Lithium Battery Conversion",
      description:
        "36V LiFePO4 lithium battery upgrade with custom tray, smart charger, and LCD monitor. Mobile installation included — we come to you.",
      provider: {
        "@id": "https://www.mobilegolfcarts.com/#business",
      },
      areaServed: { "@type": "State", name: "Oklahoma" },
      offers: {
        "@type": "Offer",
        price: "1600",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1600",
          priceCurrency: "USD",
          description: "Starting price — parts and labor included",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.mobilegolfcarts.com/#website",
      url: "https://www.mobilegolfcarts.com",
      name: "Mobile Golf Carts",
      publisher: {
        "@id": "https://www.mobilegolfcarts.com/#business",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
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
