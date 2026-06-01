import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
