import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Gnozis | AI-Driven SRAM DTCO Workbench";
const description =
  "Building the Intelligence Layer for SRAM DTCO. Accelerating SRAM innovation with AI. Connect simulation, silicon and intelligence into one engineering workflow.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gnozis.ai/";
const metadataBase = new URL(siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`);
const faviconUrl = new URL("favicon.svg", metadataBase).toString();
const socialImageUrl = new URL("og.png", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  applicationName: "Gnozis",
  keywords: [
    "SRAM DTCO",
    "SRAM Workbench",
    "AI for semiconductor engineering",
    "surrogate modeling",
    "Vmin projection",
  ],
  icons: {
    icon: faviconUrl,
    shortcut: faviconUrl,
  },
  openGraph: {
    type: "website",
    url: metadataBase,
    title,
    description,
    siteName: "Gnozis",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "Gnozis AI-Driven SRAM DTCO Workbench",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
